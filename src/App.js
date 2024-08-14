import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4, 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강, 비기면-검은색)

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
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [userResult, setUserResult] = useState("")
  const [computerResult, setComputerResult] = useState("")

  const play = (userChoice) => {
    const userSelection = choice[userChoice];
    const computerSelection = randomChoice();

    setUserSelect(userSelection);
    setComputerSelect(computerSelection);

    const gameResult = judgement(userSelection, computerSelection);
    setUserResult(gameResult);
    setComputerResult(gameResult === "win" ? "lose" : gameResult === "lose" ? "win" : "tie");
  }

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "tie"
    } else if(user.name == "Rock") return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors") return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper") return computer.name == "Rock" ? "win" : "lose";
  }

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    console.log("item array", itemArray);
    const randomItem = Math.floor(Math.random()*itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={userResult}/>
        <Box title="Computer" item={computerSelect} result={computerResult}/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
