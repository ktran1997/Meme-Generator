import React, { Component } from "react";

class MemeGenerator extends Component {
    state = {
        topText: "",
        bottomText: "",
        imgApi: [],
        imgUrl: "http://i.imgflip.com/1bij.jpg"
    };

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data;
                this.setState({
                    imgApi: memes
                });
            });
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const rand = Math.floor(Math.random() * this.state.imgApi.length);
        this.setState({
            imgUrl: this.state.imgApi[rand].url
        });
    };

    render() {
        return (
            <React.Fragment>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="topText"
                        placeholder="Top text"
                        value={this.state.topText}
                    />
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="bottomText"
                        placeholder="Bottom text"
                        value={this.state.bottomText}
                    />
                    <button>Gen</button>
                </form>

                <div className="meme">
                    <img src={this.state.imgUrl} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </React.Fragment>
        );
    }
}

export default MemeGenerator;