import { useContext, useState } from "react"
import { Context } from "./Context";

const Card = ({id, name, position, nationality, role, imgURL, className, clubLogo, uclURL}) => {

    const [pressCount, setPressCount] = useState(0);
    const {setLostGame, score, setScore} = useContext(Context);

    const classes = `${className || ''} px-2 py-4 flex flex-col gap-4 rounded-lg w-[300px] relative`;

    const handleCardClick = () => {
        setPressCount(pressCount + 1);

        if(pressCount > 1){
            setLostGame(true);
            return;
        }
        else
        {
            setScore(score + 1);
        }
    }

  return (
    <div className={`${classes} bg-gray-400`} onClick={handleCardClick}>
        <div className={`${className} flex flex-col`}>
            <img src={uclURL} alt="UCL" className="absolute top-10 right-4" />
            <img src={imgURL} alt="PLAYER" />   
            <div className="flex justify-between items-center">
                <p className="text-4xl max-w-[50%]">{name}</p>
                <div className="flex gap-6 items-center">
                    <p>{nationality}</p>
                    <img src={clubLogo} alt="" />
                </div>
            </div>      
        </div>  
        <div className="flex flex-col gap-4">
            <div className="flex justify-around items-center">
                <i className='bx bx-football text-2xl'></i>
                <p className="text-lg">Role: <b>{role}</b></p>
                <div className="w-[20px] h-[20px] rounded-full border border-black flex justify-center items-center">
                    {id}
                </div>
            </div>

            <div className="flex justify-center items-center">
                <i className='bx bx-football text-2xl'></i>
                <p className="text-lg">Position: <b>{position}</b></p>
            </div>
        </div> 
    </div>
  )
}

export default Card