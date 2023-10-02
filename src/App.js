import logo from "./assets/investment-calculator-logo.png";

import InvestmentHeader from "./components/InvestmentHeader/InvestmentHeader";
import InvestmenInput from "./components/InvestmentForm/InvestmentInput";
import OutputTable from "./components/OutputTable/OutputTable";
import { useState } from "react";

function App() {
  const [investmentReturns, setInvestmentReturns] = useState([]);
  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results
    // console.log(userInput);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedIntrestRate / 100;
    const duration = +userInput.investmentDuration;

    // // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution,
      });
    }

    console.log(yearlyData);
    setInvestmentReturns(yearlyData);

    // do something with yearlyData ...
  };

  const header = (
    <InvestmentHeader logo={logo} headerText="Investment Calculator" />
  );

  const footer =
    investmentReturns.length == 0 ? (
      <h1 style={{ textAlign: "center" }}>Enter Savings data to calculate.</h1>
    ) : (
      <OutputTable data={investmentReturns} />
    );

  return (
    <div>
      {header}

      <InvestmenInput onSubmit={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {footer}
    </div>
  );
}

export default App;
