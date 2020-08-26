import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



import "./App.css";

import "./sass/styleapp.scss";

import TopSection from "./components/top";
import BottomSection from "./components/bottom";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Cork",
      isLoading: true,
      weather: []
      };
      
      
  }
  updateWeather() {
   
   
    
  
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=51.898753&lon=-8.470631&exclude=hourly,minutely&units=metric&appid=bc8436b0fb4c2bdc41566220a43838f6`;
  

    axios.get(URL).then(res => {
      console.log("data:",res)
      return res.data;
     
    
    }).then(data => {
      this.setState({
        isLoading: false,
        temp: data.current.temp,
      
        description: data.current.weather[0].description,
        img: data.current.weather[0].icon,
        forecastdays:data.daily
       
      });
    })
      .catch((err )=> {
      if (err) console.error("Cannot fetch Weather Data from API, ", err);
    })
  }
 
  
  componentDidMount() {
  
    this.updateWeather();
  
  }


  render() {
    const { isLoading, cityName, temp, description, img  ,forecastdays} = this.state;
   
    return (
      <>
      <div className="app-container">
        <div className="main-container">
          {isLoading && <h3>Loading Weather...</h3>}
          {!isLoading && (
            <div className="top-section">
            <TopSection   location={cityName} temp={temp} description={ description} img={img}  />
            </div> )}
          <div className="bottom-section">
          <BottomSection forecastdays={forecastdays} />
          </div>

          </div>
        </div>
        </>
     
    );
  }
}

export default App;
