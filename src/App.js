import React, {useReducer} from "react";
import './App.css';




function App(props) {

    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );

    return(
        <>
            <input type={"checkbox"}
               value={checked}
               onChange={toggle}
            />
            <p>{checked ? "checked" : "not checked"}</p>
        </>
        );

}

export default App;
