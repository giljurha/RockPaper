import React, { Component } from 'react';
import './App.css';
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://scienceresourcebox.co.nz/cdn/shop/files/Chalkrounded_WEB_1200x1200.jpg?v=1684441843"
  },
  scissors: {
    name: "Scissors",
    img: "https://assets.katogroup.eu/i/katogroup/VT8-0919-24_02_victorinox"
  },
  paper: {
    name: "Paper",
    img: "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw8aedf2d1/images/large/584769_1000_1_-white-premium-smooth-paper-a4-100-pack.jpg?sw=680&q=85"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      userResult: "",
      computerResult: ""
    };
  }

  play = (userChoice) => {
    const userSelection = choice[userChoice];
    const computerSelection = this.randomChoice();

    this.setState({ 
      userSelect: userSelection, 
      computerSelect: computerSelection 
    });

    const gameResult = this.judgement(userSelection, computerSelection);
    this.setState({
      userResult: gameResult,
      computerResult: gameResult === "win" ? "lose" : gameResult === "lose" ? "win" : "tie"
    });
  }

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  }

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  }

  render() {
    return (
      <div>
        <div className='main'>
          <Box title="You" item={this.state.userSelect} result={this.state.userResult} />
          <Box title="Computer" item={this.state.computerSelect} result={this.state.computerResult} />
        </div>
        <div className='main'>
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}

export default App;