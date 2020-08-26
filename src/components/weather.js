import React from "react";
export default class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, description,img } = this.props;
    const image = `http://openweathermap.org/img/wn/${this.props.img}@2x.png`
    const tempe = Math.round(this.props.temp, 1)
    return (
      <div className="weather-container">
        <div className="header">{location}</div>
        <br/>
        <div className="header"></div>
        <div className="inner-container">
          <div className="image">
            <img src={image} />
          </div>
          <div className="current-weather">{tempe}°</div>
        </div>
        <div className="footer">{description}</div>
      </div>
    );
  }
}
