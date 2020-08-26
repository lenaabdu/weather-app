import React from "react";
import Forcastday from "./forcastday";
import "./stylebottom.scss";



export default class BottomSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 
  render() {
    const { forecastdays } = this.props;
    return (
      <>
      <div className="bottom-container">
        <div className="inner-container">
        {forecastdays && forecastdays.map((current, i) => {
              return <Forcastday day={current.day} key={i}dateString={current.dt} img={current.weather[0].icon} alt={current.weather[0].description} text={current.weather[0].main} max={current.temp.max} min={current.temp.min} wind={current.wind_speed} />;
            })}
        </div>
      </div>
      </>
    )

  }
}
