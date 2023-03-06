import { createTheme, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import Snackbar from './components/UI/Snackbar'
import { darkTheme, lightTheme } from './lib/constans/theme'
import AppRoutes from './routes/Routes'
import { store } from './store'
import { uiActions } from './store/UI/ui.slice'

function AppContent() {
  const dispatch = useDispatch()

  const snackbar = useSelector((state) => state.ui.snackbar)
  const themeMode = useSelector((state) => state.ui.themeMode)

  const theme = useMemo(() => {
    const currrentTheme =
      themeMode === 'light' ? { ...lightTheme } : { ...darkTheme }
    return createTheme(currrentTheme)
  }, [themeMode])

  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        isOpen={snackbar.isOpen}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={() => dispatch(uiActions.closeSnackbar())}
      />
      <AppRoutes />
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App

// GET /foods
// Headers: { UserID: "your_name"  }

// GET /basket
// Headers: { UserID: "your_name"  }

// POST /foods/:foodId/addToBasket
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }

// DELETE /basketItem/:id/delete
// Headers: { UserID: "your_name"  }

// PUT /basketItem/:id/update
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }
