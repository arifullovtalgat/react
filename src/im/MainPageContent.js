import React, {Component} from "react";

class MainPageContent extends Component {
    constructor(props) {
        super(props);

        this.menuItems = [
            {
                "text": "Товар1",
                "link": "/catalog/product1/",
                "img": "/assets/product.jpg"
            },
            {
                "text": "Товар2",
                "link": "/catalog/product1/",
                "img": "/assets/product.jpg"
            },
            {
                "text": "Товар3",
                "link": "/catalog/product1/",
                "img": "/assets/product.jpg"
            },
            {
                "text": "Товар4",
                "link": "/catalog/product1/",
                "img": "/assets/product.jpg"
            },
            {
                "text": "Товар5",
                "link": "/catalog/product1/",
                "img": "/assets/product.jpg"
            },
            {
                "text": "Товар6",
                "link": "/catalog/product1/",
                "img": "/assets/product.jpg"
            },
            {
                "text": "Товар7",
                "link": "/catalog/product1/",
                "img": "/assets/product.jpg"
            },
            {
                "text": "Товар8",
                "link": "/catalog/product1/",
                "img": "/assets/product.jpg"
            },
            {
                "text": "Товар9",
                "link": "/catalog/product1/",
                "img": "/assets/product.jpg"
            },
            {
                "text": "Товар10",
                "link": "/catalog/product1/",
                "img": "/assets/product.jpg"
            },
            {
                "text": "Товар11",
                "link": "/catalog/product1/",
                "img": "/assets/product.jpg"
            },
            {
                "text": "Товар12",
                "link": "/catalog/product1/",
                "img": "/assets/product.jpg"
            }
        ];

        this.createMenuItem = this.createMenuItem.bind(this);

    }

    createMenuItem(item, index) {
        return <div className="product"><a href={item.link}><img src={item.img}/><span>{item.text}</span></a><a className="add-basket">В корзину</a></div>
    }

    render() {
        var items = this.menuItems;
        var listItems = items.map(this.createMenuItem);


        return (
            <div className="top-products">
                <h1>Популярное:</h1>
                <div className="products">
                    {listItems}
                </div>
            </div>
        );
    }
}

export default MainPageContent;