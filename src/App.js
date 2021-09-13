import React, {useState} from "react";
import './App.css';




function App(props) {
    const [emotion, setEmotion] = useState("happy");
    return(
        <>
            <h1>Current emotion is {emotion}.</h1>
            <button onClick={() => setEmotion("Frustrated")}>Frustrate</button>
            <button onClick={() => setEmotion("Enthusiastic")}>Enthuse</button>
        </>
        );

}

export default App;
