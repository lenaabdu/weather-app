import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./stylebottom.scss";
import Table from 'react-bootstrap/Table';

import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

export default class Forcastday extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const day = new Date(parseInt(this.props.dateString) * 1000);
    const nameDay = days[day.getDay(day)]
    const month = months[day.getMonth(day)]
    const date = day.getDate(day)
    const image = `http://openweathermap.org/img/wn/${this.props.img}@2x.png`
    const maxTemp = Math.round(this.props.max, 1)
    const minTemp = Math.round(this.props.min, 1)
    const windSpeed = Math.round(this.props.wind, 1)

    return (
      <div className="forcastday-container">
          <div className="forcastday">
       <Card className=" text-center mt-2">
            <Card.Header as="h6">{nameDay}{"-"}{date}{"-"}{month}</Card.Header>
            <Image className="mx-auto imge1" src={image} alt={this.props.alt} />
            <Card.Body>
           
          <Card.Body>
          <Card.Text className="text2">{this.props.text}</Card.Text>
          </Card.Body>
      
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th colSpan="2"><sup>o</sup>C</th>
              <th>W</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{maxTemp }</td>
              <td>{ minTemp}</td>
              <td>{windSpeed }</td>
            </tr>
          </tbody>
        </Table>
            </Card.Body>
          </Card>
          </div>
      </div>
    );
  }
}
