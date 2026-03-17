import React, { useState } from "react";
import DisplayCount from "../components/displayCount/DisplayCount";
import ButtonInc from "../components/buttons/ButtonInc";
import ButtonDec from "../components/buttons/ButtonDec";
import InputIncDec from "../components/update-unites/InputIncDec";

const Home = (props) => {
  const [count, setCount] = useState(0);
  const [inc, setInc] = useState(10);
  const [dec, setDec] = useState(10);

  console.log(count);

  const increment = () => {
    setCount((prev) => prev + inc);
  };
  const decrement = () => {
    setCount((prev) => prev - dec);
  };

  const handleInputChangeInc = (e) => {
    setInc(Number(e.target.value));
  };
  const handleInputChangeDec = (e) => {
    setDec(Number(e.target.value));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque et
        obcaecati dolorum, quaerat aspernatur totam unde neque laborum atque!
        Natus laboriosam commodi, minima nam ipsum dolor nostrum recusandae amet
        error.
      </p>
      <DisplayCount count={count} increment={increment} decrement={decrement} />
      <div>
        <InputIncDec
          inc={inc}
          dec={dec}
          handleInputChangeInc={handleInputChangeInc}
          handleInputChangeDec={handleInputChangeDec}
        />
      </div>
      <ButtonDec decrement={decrement} /> <ButtonInc increment={increment} />
    </div>
  );
};

export default Home;
