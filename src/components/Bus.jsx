import React, { Component } from "react";
import Block from "./Block";

const Bus = props => {
  const { id, trip, tripList, handleClick, selected } = props;
  const tripBlock = [];
  tripList.forEach(el => {
    if (el.id === trip[0]) {
      tripBlock.push(el);
    }
  });
  const renderTrip = tripBlock.map(el => (
    <div>
      <Block
        key={el.id}
        el_id={el.id}
        el_start={el.startTime}
        el_end={el.endTime}
        selected={selected}
        handleClick={handleClick}
      />
    </div>
  ));
  return (
    <div style={{ borderBottom: "solid 1px #D3D3D3" }} className={id}>
      {renderTrip}
    </div>
  );
};

export default Bus;
