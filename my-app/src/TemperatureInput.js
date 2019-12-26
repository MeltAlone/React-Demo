import React, { Component } from 'react'

const scaleNames = {
  c: '摄氏度',
  f: '华氏度'
};

export default class TemperatureInput extends Component {
    

  handleChange = e => {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>输入温度 {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
