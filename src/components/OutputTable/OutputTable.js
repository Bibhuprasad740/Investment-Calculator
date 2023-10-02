import React from "react";

import OutputTableStyle from "./OutputTable.module.css";
import ReturnOnOneYear from "./ReturnOnOneYear";

const OutputTable = (props) => {
  return (
    <table className={OutputTableStyle.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {props.data.map((currentData) => (
        <ReturnOnOneYear currentData={currentData} />
      ))}
    </table>
  );
};

export default OutputTable;
