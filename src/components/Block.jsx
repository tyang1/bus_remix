import React, { Component } from "react";
const Block = props => {
  const { el_id, el_start, el_end, handleClick, selected} = props;
  const diff = el_end - el_start;
  const checkSelect = selected.id === el_id ? true: false;
  return (
    <div>
      <p
        style={{
          width: diff,
          position: "relative",
          left: el_start,
          border: "solid 1px black",
          backgroundColor: checkSelect? "#D3D3D3":"white"
        }} 
        onClick = {() => {handleClick(el_id)}}
      >
        {" "}
        {el_id}{" "}
      </p>
    </div>
  );
};

export default Block;
