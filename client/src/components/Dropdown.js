import React from 'react';
import HomePage from './HomePage';
import historyapi from "../utils/historyapi";

class selectFractal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'mandelbrot'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static defaultProps = {
    patterns: [ 
                'mandelbrot'
                ,'julia1'
                , 'julia2' 
                , 'julia3'
                , 'julia4'
                , 'julia5' 
                , 'julia6'
                , 'julia7' 
                , 'julia8'
                , 'julia9'
                , 'julia10' 
                , 'julia11'
              ]
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
    historyapi.saveHistory({
        fractal: event.target.value,
        date: new Date(Date.now())

      }).then(res => console.log(res))
      .catch(err => console.log(err));

  }

  handleSubmit = (event) => {
   // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    historyapi.saveHistory({
        fractal: this.state.value,
        date: new Date(Date.now())

      }).then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    let patternsOptions = this.props.patterns.map(patterns => {
      return <option key={patterns} value={patterns}>{patterns}</option>
    });
    return (
      <div className="dropdown">
      <div>
      <form onSubmit={this.handleSubmit}>
         <label>Fractal</label><br/>
          <select ref="patterns" value={this.state.value}    onChange={this.handleChange} >
              {patternsOptions}
            </select> <br/>
      </form>
      </div>
      
      <div>
      <HomePage value={this.state.value}/>
      </div>
      </div>


  );
}
}
export default selectFractal;