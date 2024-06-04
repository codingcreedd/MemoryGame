const Difficulty = ({className, setDifficulty, team, setPlayerTeam}) => {

    const handleDiffClick = (e) => {
        if(e.target.innerText === 'Easy'){
            setDifficulty('easy');
            if(team === 'RealMadrid'){setPlayerTeam('realmadrid')}
            else {setPlayerTeam('barcelona')}
        }
        else if(e.target.innerText === 'Medium'){
            setDifficulty('medium');
            if(team === 'RealMadrid'){setPlayerTeam('realmadrid')}
            else {setPlayerTeam('barcelona')}
        }
        else{
            setDifficulty('hard');
            if(team === 'RealMadrid'){setPlayerTeam('realmadrid')}
            else {setPlayerTeam('barcelona')}
        }
        
    }

    const classes = `${className || 'border-blue-600'}`;

  return (
    <div className={`absolute -right-full -bottom-full text-black border-[5px] bg-white  py-6 flex flex-col gap-6 ${classes}`}>
        <button className="px-14 py-2 hover:bg-black transition-all hover:text-white"
        onClick={(e) => {handleDiffClick(e)}}>Easy</button>
        <button className="px-14 py-2 hover:bg-black transition-all hover:text-white"
        onClick={(e) => {handleDiffClick(e)}}>Medium</button>
        <button className="px-14 py-2 hover:bg-black transition-all hover:text-white"
        onClick={(e) => {handleDiffClick(e)}}>Hard</button>
    </div>
  )
}

export default Difficulty