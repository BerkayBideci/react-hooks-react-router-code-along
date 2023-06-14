import React from "react"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Messages from "./Messages";

export default function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/messages">
                    <Messages />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}