import React, { Component } from "react";
const Block = props => {
  const { el_id, el_start, el_end } = props;
  const diff = el_end - el_start;
  return (
    <div>
      <p
        style={{
          width: diff,
          position: "relative",
          left: el_start,
          border: "solid 1px black"
        }}
      >
        {" "}
        {el_id}{" "}
      </p>
    </div>
  );
};

export default Block;
