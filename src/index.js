import React from "react";
import ReactDOM from "react-dom";


import "./index.css";
import "./im/InternetMagazine.css";
import Header from "./im/Header";
import Footer from "./im/Footer";
import MainPageContent from "./im/MainPageContent";

var header = document.querySelector('header');
var content = document.querySelector('#content');
var footer = document.querySelector('footer');

ReactDOM.render(
    <Header/>,
    header
);

ReactDOM.render(
    <MainPageContent/>,
    content
);

ReactDOM.render(
    <Footer/>,
    footer
);
//import ToDoList from "./plan/ToDoList";
//import ColorBox from "./colorbox/ColorBox";
//import "./index.css";
//import "./app/app.css";
//import IPAddressContainer from "./app/IPAddressContainer";
//var destination = document.querySelector('#container');
/*ReactDOM.render(
 <div>
 <IPAddressContainer/>
 </div>,
 destination
 );*/
/*
 var destination = document.querySelector('#container');
 ReactDOM.render(
 <div>
 <ColorBox color="red"/>
 <input id="select_color" type="text"/><a id="send">send</a>
 </div>,
 destination
 );*/


// ReactDOM.render(
//     <ToDoList/>,
//     destination
// );