import { useContext } from "react"
import MainPage from "./Components/MainPage"
import { Context } from "./Components/Context"
import GamePage from "./Components/GamePage";

function App() {

  const {playerTeam, difficulty} = useContext(Context);

  return (
    <div className={`${(difficulty === '') && 'border-black border-2 m-2'}`}>
        <div className={`${(difficulty === '') && 'border-blue-600 border-2 m-2'}`}>
          <div className={`${(difficulty === '') && 'border-red-600 border-2 m-2 pb-4'}`}>
              {
                (playerTeam === 'realmadrid') ? (
                  <GamePage  team={playerTeam} className="bg-gray-300" />
                ) : (playerTeam === 'barcelona') ? (
                  <GamePage team={playerTeam} className="bgfcb" />
                ) : (
                  <MainPage />
                )
              }
          </div>
        </div>
    </div>
  )
}

export default App
