import { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import getFootballData from "../apis/football";
import Card from "./Card";

const API_KEY = '5357662512394c2881afc872ba7a8620';

const GamePage = ({team, className}) => {

    const [loading, setLoading] = useState(true);

   const classes = `${className || ''} px-10 py-6 h-full flex flex-col`;

   const {difficulty, score, players, setPlayers} = useContext(Context);
   

   const loopController = Math.min(difficulty === 'easy'? 6 : difficulty === 'medium'? 12 : players.length, players.length);

   useEffect(() => {
        const teamID = team === 'barcelona' ? 81 : 86;
        const handleFootballData = async () => {
            const footballData = await getFootballData(API_KEY, teamID);
            setPlayers(footballData.squad);
            setLoading(false);
       }
       handleFootballData();
   }, [team]);

   const addCards = () => {

        let elements = [];
        for(let i = 0; i < loopController; i++){
            elements.push(<Card id={players[i].id} name={players[i].name} position={players[i].position} nationality={players[i].nationality} role={players[i].role}
            clubLogo={team === 'realmadrid' ? 'https://i.ibb.co/9TgLYnN/rmlogo-removebg-preview.png' : 'https://i.ibb.co/7jt8vZ9/Untitled-removebg-preview.png'}/>)
        }

        return <div className={`${difficulty === 'easy' ? 'grid-cols-3' : difficulty === 'medium' ? 'grid-cols-4': 'grid-cols-4'} grid gap-2`}>{elements}</div>;
   }

  return (
    <div className={classes}>
        <div className="flex justify-center items-center">
            {
                team === 'barcelona' ? (
                    <img src="https://i.ibb.co/7jt8vZ9/Untitled-removebg-preview.png" alt="Untitled-removebg-preview" border="0" width={200} height={200}/> 
                ) : (
                    <img src="https://i.ibb.co/9TgLYnN/rmlogo-removebg-preview.png" alt="rmlogo-removebg-preview" border="0" width={200} height={200}/>
                )
            }
            <h1 className="text-7xl">{team.toUpperCase()}</h1>
            {
                team === 'barcelona' ? (
                    <img src="https://i.ibb.co/7jt8vZ9/Untitled-removebg-preview.png" alt="Untitled-removebg-preview" border="0" width={200} height={200}/> 
                ) : (
                    <img src="https://i.ibb.co/9TgLYnN/rmlogo-removebg-preview.png" alt="rmlogo-removebg-preview" border="0" width={200} height={200}/>
                )
            }
        </div>

        <div className="text-center text-2xl font-bold mb-20">
            Score: {score}
        </div>

        {
            loading? (
                <div>Loading...</div>
            ) : (
                addCards()
            )
        }

    </div>
  )
}

export default GamePage