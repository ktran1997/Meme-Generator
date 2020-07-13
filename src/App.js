import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import MemeGenerator from './Components/MemeGenerator';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <MemeGenerator />
            </React.Fragment>
        );
    }
}

export default App;