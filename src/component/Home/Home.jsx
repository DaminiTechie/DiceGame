import style from "./Home.module.css";

const Home = ({toggle}) => {
    return(
        <>
        <div className= {`${style.home} container`}>
          
            <div className={style.diceImage}>
            <img src="/Dice.png" alt="diceimage" />

            </div>
           <div className={style.diceContent}>
                <h1>DICE GAME</h1>
                 <button onClick={toggle}>Play Now</button>
                 </div>
        </div>
        </>
    )
   
}
export default Home;