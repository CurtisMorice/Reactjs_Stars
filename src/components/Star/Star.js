import React, { Component } from 'react';

class Star extends Component {

  constructor(props) {
    // React Componets have props, pass them to the 
    // parent (Component) class - if you don't,
    // things won't work right!
    super(props);

    // Setting state with an = is something you only 
    // want to do in the constructor. Outside of the
    // constructor always use the setState method
    this.state = { name: 'Menkar', brightness: 1.6 } 

    // Make sure that the handleChange knows about 'this'
    // You ONLY need this if you don't make an arrow function
    //this.handleChange = this.handleChange.bind(this);
  }

  // By making this an arrow function, 'this' is bound for you!
  // Use arrow functions!  
  handleChangeForName = (event) => {
    console.log(event.target.value);
    // Change state using setState not an = 
    this.setState( { name: event.target.value } );
  }

  handleChangeForBrightness = (event) => {
    console.log(event.target.value);
    // Change state using setState not an = 
    this.setState( { brightness: event.target.value } );
  }

  render() {
    return (
      <div>
        <h2>The Best Star Ever</h2>
        <input onChange={this.handleChangeForName} />
        <input onChange={this.handleChangeForBrightness} />
        <p>Name: {this.state.name}</p>
        <p>Brightness: {this.state.brightness}</p>
      </div>
    );
  }
}

export default Star;