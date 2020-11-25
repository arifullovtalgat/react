import React, {Component} from "react";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.menuItems = [
            {
                "text": "Каталог",
                "link": "/catalog/"
            },
            {
                "text": "Доставка",
                "link": "/delivery/"
            },
            {
                "text": "Контакты",
                "link": "/contacts/"
            }
        ];

        this.createMenuItem = this.createMenuItem.bind(this);

    }

    createMenuItem(item, index) {
        return <li key={index}><a href={item.link}>{item.text}</a></li>
    }

    render() {
        var items = this.menuItems;
        var listItems = items.map(this.createMenuItem);


        return (
            <ul className="menu">
                {listItems}
            </ul>
        );
    }
}

export default Menu;