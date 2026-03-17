import React from "react";

const CompObj = {
  CompOne: function (props) {
    return <h1>This is component {props.name}</h1>;
  },
  CompTwo: function (props) {
    return (
      <div style={{ backgroundColor: props.bgColor }}>
        <h1>This is the box</h1>
      </div>
    );
  },
};

export default CompObj;
