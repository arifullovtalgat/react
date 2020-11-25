import React, {Component} from "react";
import "./ColorBox.css";

class ColorBox extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            color:"red"
        };
    }

    handleMyEvent(e) {
        e.preventDefault();
        var color = document.querySelector("#select_color");
        this.setState({
            color:color.value
        });
    }

    componentDidMount() {
        var btn = document.querySelector("#send");
        btn.addEventListener("click", this.handleMyEvent.bind(this))
    }

    render() {
        var boxStyle = {
            width: 200,
            height: 200,
            backgroundColor: this.state.color,
        };

        return <p style={boxStyle}/>
    }
}

export default ColorBox;