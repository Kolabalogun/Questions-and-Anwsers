import React from "react";
import QA from "./QA";
import questions from "./Questions";
import "./Style.css";

const Home = () => {
  const [Array, ArrayF] = React.useState(questions);
  // const [open, openF] = React.useState(false);

  const ArrayElement = Array.map((A) => (
    <QA
      key={A.id}
      id={A.id}
      title={A.title}
      Info={A.info}
      isOpen={A.isOpen}
      handleClick={handleClick}
    />
  ));

  function handleClick(id) {
    ArrayF((prev) => {
      return prev.map((P) => {
        return P.id === id ? { ...P, isOpen: !P.isOpen } : P;
      });
    });

    // console.log(id);
  }

  return (
    <div className="main">
      <h1>Questions and Answers</h1>
      <div className="line"></div>

      <div className="details">{ArrayElement}</div>
    </div>
  );
};

export default Home;
