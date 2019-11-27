import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Calculate extends Component {
  constructor(props){
    super(props);
    this.state={
      item:this.props.item
    };
    this.One=this.One.bind(this);
    this.Two=this.Two.bind(this);
    this.Three=this.Three.bind(this);
    this.Four=this.Four.bind(this);
    this.Five=this.Five.bind(this);
    this.Six=this.Six.bind(this);
    this.Seven= this.Seven.bind(this);
    this.Eight=this.Eight.bind(this);
    this.Nine=this.Nine.bind(this);
    this.Zero=this.Zero.bind(this);
    //this.takeQuantity=this.takeQuantity.bind(this);
  }

    One (){
        this.setState(
          {
            item:this.state.item  +'1'
          }
        );
      }
    
    Two (){
        this.setState(
          {
            item:this.state.item + '2'
          }
        );
      }
    

    Three (){
        this.setState(
          {
            item:this.state.item +'3'
          }
        );
      }

    Four(){
        this.setState(
          {
            item:this.state.item + '4'
          }
        );
      }
    
    
    Five(){
        this.setState(
          {
            item:this.state.item + '5'
          }
        );
      }
    
    Six(){
        this.setState(
          {
            item:this.state.item + '6'
          }
        );
      }

    Seven(){
        this.setState(
          {
            item:this.state.item + '7'
          }
        );
      }
    
    Eight(){
        this.setState(
          {
            item:this.state.item + '8'
          }
        );
      }
    
    
    Nine(){
        this.setState(
          {
            item:this.state.item + '9'
          }
        );
      }
    
    Zero(){
        this.setState(
          {
            item:this.state.item + '0'
          }
        );
      }

  render()  {
    return (
        <div className="name">
          <input className="input" type="text" value={this.state.item}/>
          <div className="name">
            <button onClick={this.Nine} className = "button" type="button">9</button>
            <button onClick={this.Eight} className = "button">8</button>
            <button onClick={this.Seven} className = "button">7</button><br />
            <button onClick={this.Six} className = "button">6</button>
            <button onClick={this.Five} className = "button">5</button>
            <button onClick={this.Four } className = "button">4</button><br />
            <button onClick={this.Three} className = "button">3</button>
            <button onClick={this.Two} className = "button">2</button>
            <button onClick={this.One} className="button" type="button">1</button><br />
            <button onClick={this.Zero} className = "button">0</button>
        </div>
        </div>
 
    )
  };
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Calculate item={0}/>
      </div>
    )
  }
}

export default App;
