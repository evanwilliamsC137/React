import React from "react";
import './App.css';
import {Routes, Route} from "react-router";
import {Home, About, Events, Contact, Whoops404} from "./pages"

// https://api.github.com/users/evanwilliamsC137


function App() {
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/events"} element={<Events/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"/*"} element={<Whoops404/>}/>
            </Routes>
        </div>
    )

}

export default App;
