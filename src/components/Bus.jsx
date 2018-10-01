import React, { Component } from "react";
import Block from "./Block";

const Bus = props => {
  const { id, trip, tripList, handleClick, selected, moveTrip } = props;
  const tripBlock = [];
  tripList.forEach(el => {
    for (let i = 0; i < trip.length; i++) {
      if (el.id === trip[i]) {
        tripBlock.push(el);
      }
    }
  });
  const renderTrip = tripBlock.map(el => (
    <Block
      key={el.id}
      el_id={el.id}
      el_start={el.startTime}
      el_end={el.endTime}
      selected={selected}
      handleClick={handleClick}
    />
  ));
  return (
    <div
      style={{ display: "flex", height: 50, borderBottom: "solid 1px #D3D3D3" }}
      className={id}
      onClick={event => {
        moveTrip(event.target.className);
      }}
    >
      {renderTrip}
    </div>
  );
};

export default Bus;
