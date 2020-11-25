import React from "react";
import ReactDOM from "react-dom";
import "./app/app.css";
import IPAddressContainer from "./app/IPAddressContainer";

var destination = document.querySelector('#container');
ReactDOM.render(
    <div>
        <IPAddressContainer/>
    </div>,
    destination
);