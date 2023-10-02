import React from "react";
import ReturnOnOneYearStyles from "./ReturnOnOneYear.module.css";

const ReturnOnOneYear = (props) => {
  const currentData = props.currentData;
  //   console.log(currentData);
  let totalInvestment = currentData.yearlyContribution * currentData.year;
  let totalIntrest =
    ((currentData.savingsEndOfYear - totalInvestment) / totalInvestment) * 100;
  totalIntrest = totalIntrest.toFixed(2);

  return (
    <tbody>
      <tr>
        <td>{currentData.year}</td>
        <td>{currentData.savingsEndOfYear}</td>
        <td>{`${currentData.yearlyInterest}%`}</td>
        <td>{`${totalIntrest}%`}</td>
        <td>{totalInvestment}</td>
      </tr>
    </tbody>
  );
};

export default ReturnOnOneYear;
