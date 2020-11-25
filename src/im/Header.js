import React, {Component} from "react";
import Menu from "./header/Menu";
import LogoAndBasket from "./header/LogoAndBasket";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
          <div className="header">
              <LogoAndBasket />
              <Menu />
          </div>
        );
    }
}

export default Header;