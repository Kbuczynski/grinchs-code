import React, { Component } from "react";
import FlipNumbers from "react-flip-numbers";
import Countdown from "react-countdown-now";

const numSize = window.innerWidth > 800 ? 100 : 50;

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      system: navigator.appVersion
    };
  }

  handleRenderDesktop = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <FlipNumbers
          height={numSize}
          width={numSize}
          color="#fff"
          background="none"
          play
          perspective={600}
          numbers="00:00:00:00"
        />
      );
    } else {
      if (days < 10) days = `0${days}`;
      if (hours < 10) hours = `0${hours}`;
      if (minutes < 10) minutes = `0${minutes}`;
      if (seconds < 10) seconds = `0${seconds}`;

      return (
        <FlipNumbers
          height={numSize}
          width={numSize}
          color="#fff"
          background="none"
          play
          perspective={600}
          numbers={`${days}:${hours}:${minutes}:${seconds}`}
        />
      );
    }
  };

  handleRenderMac = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div className="timer-mac">00:00:00:00</div>;
    } else {
      if (days < 10) days = `0${days}`;
      if (hours < 10) hours = `0${hours}`;
      if (minutes < 10) minutes = `0${minutes}`;
      if (seconds < 10) seconds = `0${seconds}`;

      return (
        <div className="timer-mac">{`${days}:${hours}:${minutes}:${seconds}`}</div>
      );
    }
  };

  render() {
    const { system } = this.state;

    const end = new Date(2019, 10, 15, 17, 0, 0);
    const now = new Date();
    const time = end - now;

    if (system.indexOf("Mac") !== -1)
      return (
        <Countdown date={Date.now() + time} renderer={this.handleRenderMac} />
      );
    else
      return (
        <Countdown
          date={Date.now() + time}
          renderer={this.handleRenderDesktop}
        />
      );
  }
}

export default Timer;
