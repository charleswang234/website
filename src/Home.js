import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitlePage from "./TitlePage.js";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <TitlePage />
            </div>
        )
    }
}

export default Home;
