import react from "react";

import "./index.css";

import Header from "../header";

export default function Halabalval({ toggleShowLightbox }) {
    return (
        <div id="santiamen-project">
            <Header toggleShowLightbox={toggleShowLightbox} repo="https://github.com/cardonasMind/halabalval" 
                thanks={["nextjs", "reactjs", "redux", "sass", "rest"]}/>
            
            <div id="halabalval-project__content">
                <h1>♒️ HALABALVAL ♒️</h1>
                
                <p>Halabalval is just a random word, don´t pay to much attention to it.</p>

                <p>Its a countries quiz game which uses a free and public REST API <a href="https://restcountries.eu/" target="_blank">https://restcountries.eu/</a> to get all the necessary data to every action (sort of) of the game.</p>

                <p>For simplicity purposes I decided to just work with 20 countries. So in this case, the are only questions and answers about those 20.</p>

                <p>At the beggining of the game and every time the human selects correct answer, a new question is generated. And for generate that question the API receives GET responses from the client (made using NextJS, which is a super-set of React) to generate the question, the answer itself and also to generate the other three wrong answers.</p>

                <p>When the human selects the correct answer, human pass to the next question and gets 2 points. If human err the answer, game ENDDDSSS!</p>
                
                <h2>Types of question</h2>
                
                <p>There are 3 types of questions, go ahead and see it yourself!</p>
            </div>
        </div>
    )
}