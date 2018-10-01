import React, { Component } from "react";
import Bus from "./Bus";

class Display extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.moveTrip = this.moveTrip.bind(this);
    this.state = {
      selected: { id: null, bus: null },

      tripList: [
        { id: 1, startTime: 30, endTime: 150 },
        { id: 2, startTime: 180, endTime: 300 },
        { id: 3, startTime: 330, endTime: 450 },
        { id: 4, startTime: 40, endTime: 130 },
        { id: 5, startTime: 160, endTime: 250 },
        { id: 6, startTime: 280, endTime: 370 },
        { id: 7, startTime: 400, endTime: 490 },
        { id: 8, startTime: 80, endTime: 240 },
        { id: 9, startTime: 280, endTime: 430 }
      ],
      busList: [
        { id: "A", trip: [1] },
        { id: "B", trip: [2] },
        { id: "C", trip: [3] },
        { id: "D", trip: [4] },
        { id: "E", trip: [5] },
        { id: "F", trip: [6] },
        { id: "G", trip: [7] },
        { id: "H", trip: [8] },
        { id: "I", trip: [9] }
      ]
    };
  }
  handleClick(tripID) {
    let { selected, busList } = this.state;
    if (selected.id === tripID) return true;
    selected.id = tripID;
    selected.bus = busList.find(el => {
      for (let i = 0; i < el.trip.length; i++) {
        if (el.trip[i] === tripID) {
          console.log("here is the real selected.bus", el);
          return el;
        }
      }
    });
    //adding new bus with empty line
    busList.push({id: selected.bus.id.concat(tripID), trip:[]});
    this.setState({
      selected
    });
  }

  moveTrip(busID) {
    let { busList, tripList, selected } = this.state;
    if (selected.id === null) return;
    let busSelected = busList.find(el => {
      if (el.id === busID) {
        console.log("here is the busSelected", el);
        return el;
      }
    });
    let tripSelected = tripList.find(el => {
      if (el.id === selected.id) {
        console.log("here is the tripSelected", el);
        return el;
      }
    });
    let timeRecord = [[tripSelected.startTime, tripSelected.endTime]];
    //Collecting the startTime and endTime of the trips assigned to the bus
    for (let i = 0; i < busSelected.trip.length; i++) {
      tripList.forEach(el => {
        if (el.id === busSelected.trip[i]) {
          timeRecord.push([el.startTime, el.endTime]);
        }
      });
    }
    //If no conflict, add the trip block to the bus, and remove the trip from the previous bus
    if (checkConflict(timeRecord)) {
      busSelected.trip.push(selected.id);
      busList[busList.indexOf(selected.bus)].trip.splice(
        selected.bus.trip.indexOf(selected.id),
        1
      );
      for(let b = 0; b < busList.length; b++){
          if(busList[b].trip.length === 0){
              busList.splice(b, 1);
          }
      }
      selected.id = null;
      selected.bus = null;
      this.setState({
        selected,
        busList
      });
    }
    //Function checkConflict:
    //input datatype: array
    //output datatype: boolean
    // 1. sort the input array
    // 2. if there's overlap between prev and curr array, return false
    // 3. otherwise, return true at the end of the loop
    function checkConflict(array) {
      array.sort(function(a, b) {
        return a[0] - b[0];
      });
      for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
          if (Math.max(...array[i]) < Math.min(...array[j])) {
            break;
          } else {
            return false;
          }
        }
      }
      return true;
    }
  }
  render() {
    const handleClick = this.handleClick;
    const moveTrip = this.moveTrip;
    const eachBus = this.state.busList.map(el => (
      <Bus
        key={el.id}
        id={el.id}
        trip={el.trip}
        tripList={this.state.tripList}
        selected={this.state.selected}
        handleClick={handleClick}
        moveTrip={moveTrip}
      />
    ));
    return (<div>{eachBus}</div>);
  }
}

export default Display;
