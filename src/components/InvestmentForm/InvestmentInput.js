import React, { useState } from "react";

import InvestmentInputStyle from "./InvestmentInput.module.css";

const InvestmentInput = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedIntrestRate, setExpectedIntrestRate] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const calculateClickHandler = (event) => {
    event.preventDefault();
    const investmentData = {
      currentSavings: parseInt(currentSavings),
      yearlySavings: parseInt(yearlySavings),
      expectedIntrestRate: parseInt(expectedIntrestRate),
      investmentDuration: parseInt(investmentDuration),
    };
    props.onSubmit(investmentData);
  };
  return (
    <form
      className={InvestmentInputStyle.form}
      onSubmit={calculateClickHandler}
    >
      <div className={InvestmentInputStyle["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={(event) => {
              setCurrentSavings(event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={(event) => {
              setYearlySavings(event.target.value);
            }}
          />
        </p>
      </div>
      <div className={InvestmentInputStyle["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedIntrestRate}
            onChange={(event) => {
              setExpectedIntrestRate(event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={investmentDuration}
            onChange={(event) => {
              setInvestmentDuration(event.target.value);
            }}
          />
        </p>
      </div>
      <div className={InvestmentInputStyle.actions}>
        <button type="reset" className={InvestmentInputStyle.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={InvestmentInputStyle.button}>
          Calculate
        </button>
      </div>
    </form>
  );
};

export default InvestmentInput;
