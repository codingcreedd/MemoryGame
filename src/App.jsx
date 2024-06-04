import { useContext } from "react"
import MainPage from "./Components/MainPage"
import { Context } from "./Components/Context"

function App() {

  const {playerTeam} = useContext(Context);

  return (
    <div>
        {
          playerTeam === 'realmadrid' ? (
            null
          ) : playerTeam === 'barcelona' ? (
            null
          ) : (
            <MainPage />
          )
        }
    </div>
  )
}

export default App
