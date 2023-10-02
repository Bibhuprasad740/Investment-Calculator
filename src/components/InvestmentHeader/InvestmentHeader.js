import React from "react";
import HeaderStyle from "./InvestmentHeader.module.css";

const InvestmentHeader = (props) => {
  return (
    <header className={HeaderStyle.header}>
      <img src={props.logo} alt="logo" />
      <h1>{props.headerText}</h1>
    </header>
  );
};

export default InvestmentHeader;
