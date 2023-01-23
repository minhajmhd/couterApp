import React, { Component } from 'react'

export default class Counterclass extends Component {
    constructor(props){
        super(props)
        this.state={  //state creation
            counter:0  // initial state
        }
    }
  render() {
    return (
      <div>Counterclass
        <p>You clicked {this.state.counter} times</p>
        <button onClick={ ()=>this.setState ({
            counter:this.state.counter+1
        })}>Click</button>
      </div>
    )
  }
}
