import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Calculate extends Component {
  constructor(props){
    super(props);
    let temp,operator;
    this.state={
      item:this.props.item
    };
    
    this.numPad=this.numPad.bind(this);
    this.store=this.store.bind(this);
    this.result=this.result.bind(this);
    this.takeQuantity=this.takeQuantity.bind(this);
  }

      takeQuantity(event){
        let item = event.target.value;
        if (item){
          this.setState({
            item:parseInt(item)
          });
        } 
        else {
          this.setState({
            item:parseInt(0)
          });
        }
      }

      clear(){
        this.setState({
          item:0
        });
      }
      numPad(item) {
        this.setState ({
          item:this.state.item + item
        });
      }

      store(operator) {
        this.temp = this.state.item
        this.operator = operator
        
        this.setState({
          item:0
        });
        }
      
      result() {
        if (this.operator === '1'){
        this.setState ({
          item : parseInt(this.temp) + parseInt(this.state.item)
        });
      }
        else if (this.operator === '2'){
          this.setState ({
            item : parseInt(this.temp) - parseInt(this.state.item)
          });
        }
        else if (this.operator === '3'){
          this.setState ({
            item: parseInt(this.temp) * parseInt(this.state.item)
          });
        }
        else if (this.operator === '4'){
          this.setState ({
            item : parseInt(this.temp) / parseInt(this.state.item)
          });
        }
      }

  render() {
    return (
        <div className="body">
          <input className="input" type="text" onChange={this.takeQuantity} value={this.state.item}/>
          <div className="name">
            <button onClick={(event) => this.numPad('9')} className="button">9</button>
            <button onClick={(event) => this.numPad('8')} className="button">8</button>
            <button onClick={(event) => this.numPad('7')} className="button">7</button><br />
            <button onClick={(event) => this.numPad('6')} className="button">6</button>
            <button onClick={(event) => this.numPad('5')} className="button">5</button>
            <button onClick={(event) => this.numPad('4')} className="button">4</button><br />
            <button onClick={(event) => this.numPad('3')} className="button">3</button>
            <button onClick={(event) => this.numPad('2')} className="button">2</button>
            <button onClick={(event) => this.numPad('1')} className="button" type="button">1</button><br />
            <button onClick={(event) => this.store('1')} className="button">+</button>
            <button onClick={(event) => this.numPad('0')} className="button">0</button>
            <button onClick={this.result} className="button">=</button><br />
            <button onClick={(event) => this.store('2')} className="button">-</button>
            <button onClick={(event) => this.store('3')} className="button">*</button>
            <button onClick={(event) => this.store('4')} className="button">/</button>
            <button onClick={(event) => this.clear()} className="button">C</button>
        </div>
        </div>
    )
  }
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
