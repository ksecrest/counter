import { Component } from 'react';

class Counter extends Component {
  state = { counterVal: 0, age: 23, email: "adfasdf" }

  inc = () => {
    this.setState({ counterVal: this.state.counterVal + 1})
  }

  dec = () => {
    this.setState({ counterVal: this.state.counterVal - 1})
  }
  render() {
    const { counterVal, age, email } = this.state 
    const { color } = this.props
    return (
      <>
        <h1>{color} Counter</h1>
        <p style={{background: color}}>
          {/* this is where my counter is */}
          {counterVal}
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
        </p>
      </>
    )
  }
}

export default Counter;

