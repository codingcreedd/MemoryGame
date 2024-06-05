import { useContext, useState } from "react"
import { Context } from "./Context";

const Card = ({id, name, position, nationality, role, imgURL, className, clubLogo}) => {

    const [pressCount, setPressCount] = useState(0);
    const {setLostGame, score, setScore, difficulty,  setDifficulty, setPlayerTeam, setCardNumber, setShowBarca, setShowReal,
    players, setWonGame} = useContext(Context);
    const loopController = Math.min(difficulty === 'easy'? 6 : difficulty === 'medium'? 12 : players.length, players.length);

    const classes = `${className || ''} px-8 py-4 flex flex-col gap-4 rounded-lg w-[400px] relative`;

    const resetGame = (gameLost, gameWon) => {
        setLostGame(gameLost);
        setWonGame(gameWon)
        setDifficulty('');
        setPlayerTeam('');
        setCardNumber(6);
        setShowBarca(false);
        setShowReal(false);
        setScore(0);
    }

    const handleCardClick = () => {
        setPressCount(pressCount + 1);

        if(score === loopController - 1){
            resetGame(false, true);
            console.log('YOU WIN')
        }

        if(pressCount >= 1){
            resetGame(true, false);
        }
        else
        {
            setScore(score + 1);
        }
    }

  return (
    <div className={`${classes} bg-gray-400`} onClick={handleCardClick}>
        <div className={`${className} flex flex-col`}>
            {/* <img src={uclURL} alt="UCL" className="absolute top-10 right-4" width={30} height={30}/> */}
            <img src="https://i.ibb.co/9TgLYnN/rmlogo-removebg-preview.png" alt="PLAYER" />   
            <hr className="h-[2px] bg-black mt-4"/>
            <div className="flex justify-between items-center mt-8">
                <p className="text-lg max-w-[50%]">{name}</p>
                <div className="flex  items-center">
                    <p>{nationality}</p>
                    <img src={clubLogo} alt="" width={50} height={50} />
                </div>
            </div>      
        </div>  
        <div className="flex flex-col gap-4 mt-4">
            <div className="flex justify-center items-center gap-6">
                <i className='bx bx-football text-2xl'></i>
                <p className="text-lg">Role: <b>{role}</b></p>
            </div>

            <div className="flex justify-center items-center gap-6">
                <i className='bx bx-football text-2xl'></i>
                <p className="text-lg">Position: <b>{position}</b></p>
            </div>
        </div> 
    </div>
  )
}

export default Card