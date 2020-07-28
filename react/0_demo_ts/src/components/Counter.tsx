import React from 'react'

interface CounterState {
  count: number
}

interface CounterProps {
  initialCount: number
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)
    this.state = { count: props.initialCount }
    // this.increaseCount = this.increaseCount.bind(this)
  }

  increaseCount() {
    // the only way to update your state is by calling `setState()`
    this.setState({ count: this.state.count + 1 })
    this.setState((prevState: CounterState) => {
      return { count: prevState.count + 1 }
    })
    console.log(this.state.count) // 0
  }

  decreaseCount() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.increaseCount()}>Increment</button>
        <button onClick={() => this.decreaseCount()}>Decrement</button>
      </React.Fragment>
    )
  }
}

export default Counter
