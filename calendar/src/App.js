import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      startDate: null,
      endDate: null
    }
  }
  alertDate = () =>{
    alert(this.state.date);
  }
  render(){
    return (
      <div className="App">
        <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
        />
        <br></br>
        <br></br>
        <button onClick={this.alertDate}>Click para saber la fecha</button>
      </div>
    );
  }

}

export default App;
