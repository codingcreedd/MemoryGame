import { createContext, useState } from "react"

export const Context = createContext();

const ContextProvider = (props) => {

    const [playerTeam, setPlayerTeam] = useState(''); //barcelona or realmadrid

    const [difficulty, setDifficulty] = useState(''); //EASY, MEDIUM OR HARD
    const [cardNumber, setCardNumber] = useState(6); //6 FOR EASY 12 FOR MEDIUM AND 13+ FOR HARD
    const [lostGame, setLostGame] = useState(false);
    const [showBarca, setShowBarca] = useState(false);
    const [showReal, setShowReal] = useState(false);

    const [score, setScore] = useState(0);
    const [players, setPlayers] = useState([]);
    const [wonGame, setWonGame] = useState(false);


    const states = {
        difficulty, setDifficulty,
        cardNumber, setCardNumber,
        playerTeam, setPlayerTeam,
        score, setScore,
        lostGame, setLostGame,
        showBarca, setShowBarca,
        showReal, setShowReal,
        players, setPlayers,
        wonGame, setWonGame
    }

  return (
    <Context.Provider value={states}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;