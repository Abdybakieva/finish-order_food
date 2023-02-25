import React from "react";
import styledComponents from "styled-components";
import {Button} from "@mui/material";
import {styled} from "@mui/system"


// import { ReactComponent as BasketLogo } from "../../assets/icons/Group.svg";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
export const BasketButton = ({ count, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      <LocalGroceryStoreIcon />
      <StyledTitle>Your Cart</StyledTitle>
      <StyledCount id="counter">{count || 0}</StyledCount>
    </StyledButton>
  );
};

const StyledButton = styled(Button) (()=>({
  
  backgroundColor: "#8a2b06",
  borderRadius: "30px",
  padding: "12px 32px",
  fontWeight: "600",
  color: "#fff0f4b2",
  lineHeight: "24px",
  fontSize: "16px",
  border: "none",
  display: "flex",
  alignItems: "center",

  "&:hover": {
    backgroundColor: "#2c0d00",
  },

  "&.bump": {
    animation: "bump 300ms ease-out",
  },

 " @keyframes bump": {
   " 0%": {
      transform: "scale(1)",
    },
    "10%": {
      transform: "scale(0.9)",
    },
    "30%": {
      transform: "scale(1.1)",
    },
    "50%": {
      transform: "scale(1.15)",
    },
   "100%": {
      transform: "scale(1)",
    }
  }

})
);

const StyledTitle=styledComponents.span`
    margin-left: 12px;
    margin-right: 24px;

`
const StyledCount = styledComponents.span`
  background-color: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  color: white;
  font-size: 20px;
  line-height: 27px;
  padding: 4px 20px;
  
`;