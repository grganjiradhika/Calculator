import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturns: 6,
    duration: 10,
  });

  //above user state is used for storing input values provided by the user
  //setuserInput is the function triggers input state so that entered new values will be updated

  // [] this notation is used for javascript dynamic values
  // assigned to inputidentifier
  //durayion should not be -ve or 0
  const inptIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  // inputidentifier is a string value can be of any four input names
  // here preuserinput holds the previous values
  //and when ever new values updated(old deleted) those wil be added with +newvalue(converts string value to a number value)
  return (
    // sending handlechange fn as a value to UserInput Component
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inptIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {inptIsValid && <Results input={userInput} />}
    </>
    //after calculating with input values send to result component
    //header component might not be the parent element
    //must be inside of jsx fragment tags
    //fragments used to group children component elements
  );
}

export default App;
//onchange sends the event object
