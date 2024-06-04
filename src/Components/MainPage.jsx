import { useContext, useState } from "react"
import Difficulty from "./Difficulty";
import { Context } from "./Context";

const MainPage = () => {

    const [showDifficulty, setShowDifficulty] = useState(false);
    const [showBarca, setShowBarca] = useState(false);
    const [showReal, setShowReal] = useState(false);

    const {difficulty, setDifficulty, playerTeam, setPlayerTeam} = useContext(Context);

  return (
    <>
        <main className="w-full h-screen flex flex-col px-10 py-6">
            <nav className="flex justify-between items-center">
                <em className="font-bold text-2xl">El Classico MC</em>
                <div className="flex items-center gap-10">
                    <div><a href="#RM">Real Madrid</a></div>
                    <div><a href="#FCB">FC Barcelona</a></div>
                </div>
                <div>
                    MENU
                </div>
            </nav>

            {/*Real Madrid*/}
            <div className="flex mt-8 h-screen" id="RM">
                <div className="w-1/2 flex">
                    <div className="flex flex-col mb-8">
                        <div className="flex-grow w-[70%] h-[70%]">
                            <img src="https://i.ibb.co/9TgLYnN/rmlogo-removebg-preview.png" alt="rmlogo-removebg-preview" border="0" />
                        </div>
                        <p className="text-sm">2024 UCL Winners vs Dortmund</p>
                        <h1 className="text-7xl font-bold mt-6 max-w-[70%]">Real Madrid Football Club</h1>
                        <button className="bg-black gold text-black font-bold px-6 py-3 w-1/4 mt-8 relative"
                        onClick={() => {setShowDifficulty(true); setShowReal(!showReal); setShowBarca(false)}}>
                            Play As Real Madrid
                            {
                                showDifficulty && showReal ? (
                                    <Difficulty setDifficulty={setDifficulty} team="RealMadrid" setPlayerTeam={setPlayerTeam} />
                                ) : (
                                    null
                                )
                            }
                        </button>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/99DG6YY/RMIMG.jpg" alt="Real Madrid" border="0" className="h-full object-cover"/>
                </div>
            </div>

        </main>
        <div className="flex flex-col">
            <hr className="h-[5px] bg-black"/>
            <hr className="h-[5px] bg-blue-600"/>
            <hr className="h-[5px] bg-red-600"/>
        </div>
        <main className="mt-10" id="FCB">
            <div className="flex mt-8 h-screen mx-10 gap-14">
                    <div>
                        <img src="https://i.ibb.co/zQ0KpHR/FCB2.jpg" alt="FCB" border="0" className="h-full object-cover w-full" />
                    </div>
                    <div className="w-1/2 flex">
                        <div className="flex flex-col mb-14">
                            <div className="flex-grow">
                                <img src="https://i.ibb.co/7jt8vZ9/Untitled-removebg-preview.png" alt="Untitled-removebg-preview" border="0" />                            </div>
                            <p className="text-sm font-bold">It is all about the history</p>
                            <h1 className="text-7xl font-bold mt-6 text-red-600">FC Barcelona</h1>
                            <button className="bg-blue-600 text-white font-bold px-6 py-3 w-1/2 mt-8 relative"
                            onClick={() => {setShowDifficulty(true); setShowBarca(!showBarca); setShowReal(false)}}>
                                Play As Barcelona
                                {
                                    showDifficulty && showBarca ? (
                                        <Difficulty className="border-red-600" setDifficulty={setDifficulty} team="Barcelona" setPlayerTeam={setPlayerTeam}/>
                                    ) : (
                                        null
                                    )
                                }   
                            </button>
                        </div>
                    </div>
            </div>
        </main>
    </>
  )
}

export default MainPage