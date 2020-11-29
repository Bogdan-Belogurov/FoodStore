import React from 'react'
import { Link } from 'react-router-dom'

interface INavbarProps {
  itemsCount: number
}

export default class Navbar extends React.Component<INavbarProps> {

  render() {
    return <nav>
      <div className="nav-wrapper red lighten-1 px1">
        <Link to={"/"}>
          <a href="/" className="brand-logo">Food Store</a>
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to={"/"}>
              Menu
            </Link>
          </li>
          <li>
            <Link className="waves-effect waves-light btn" to={"/shoppingcart"}>
              Shopping cart
          <span className="new badge">{this.props.itemsCount}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  }
}