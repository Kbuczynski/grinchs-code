import React, { Component } from "react";
import FlipNumbers from "react-flip-numbers";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  // componentDidMount() {
  //   this.handleDate();
  // }

  // handleDate = () => {
  //   const dateEnd = new Date(2019, 10, 15, 17, 0, 0);
  //   let dateNow = new Date();

  //   let reamininigTimeMS = dateEnd - dateNow;
  //   let reamininigTimeS = reamininigTimeMS / 1000;
  //   let reamininigTimeM = reamininigTimeS / 60;
  //   let reamininigTimeH = reamininigTimeM / 60;

  //   this.setState({
  //     hours: Math.round(reamininigTimeH),
  //     minutes: dateNow.getMinutes()
  //   });
  // };

  render() {
    const { hours, minutes, seconds } = this.state;
    // const { handleDate } = this;

    // setInterval(() => {
    //   handleDate();
    // }, 1000);

    return (
      <FlipNumbers
        height={12}
        width={12}
        color="#000"
        background="none"
        play
        perspective={300}
        numbers={`${hours} : ${minutes} : ${seconds}`}
      />
    );
  }
}

export default Timer;
