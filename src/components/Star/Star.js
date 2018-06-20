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
    this.state = { star: 
      { name:'',
        brightness: '', 
      color: ''} 
    };

    // Make sure that the handleChange knows about 'this'
    // You ONLY need this if you don't make an arrow function
    //this.handleChange = this.handleChange.bind(this);
  }

  // By making this an arrow function, 'this' is bound for you!
  // Use arrow functions!  
  // handleChangeForName = (event) => {
  //   console.log(event.target.value);
  //   // Change state using setState not an = 
  //   this.setState( { name: event.target.value } );
  // }

  // handleChangeForBrightness = (event) => {
  //   console.log(event.target.value);
  //   // Change state using setState not an = 
  //   this.setState( { brightness: event.target.value } );
  // }
  // handleChangeForColor = (event) => {
  //   console.log(event.target.value);
  //   // Change state using setState not an = 
  //   this.setState( { color: event.target.value } );
  // }
handleChangeFor =(property) => (event) => {
  this.setState( {star: {
  ...this.state.star,
  [property]: event.target.value
}
});
}

  render() {
    return (
      <div>
        <h2>The Star</h2>
        <input onChange={this.handleChangeFor('name')} />
        <input onChange={this.handleChangeFor('brightness')} />
        <input onChange={this.handleChangeFor('color')} />
        <p>Name: {this.state.star.name}</p>
        <p>Brightness: {this.state.star.brightness}</p>
        <p>Color: {this.state.star.color}</p>
    
      </div>
      
    );
  }
}

export default Star;