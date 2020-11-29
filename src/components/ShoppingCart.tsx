import React from 'react'
import { Link } from 'react-router-dom'
import { IItem } from '../interfaces'

interface IShoppingCartProps {
  items: IItem[]
  onDelete(id: string): void
}

interface IShoppingCartState {
  items: IItem[]
}

export default class ShoppingCart extends React.Component<IShoppingCartProps, IShoppingCartState> {

  constructor(props: IShoppingCartProps) {
    super(props)
  }

  getTotalPrice(items: Array<IItem>) {
    return items
      .map(item => Number(item.price.substring(1)))
      .reduce((prev, curr) => prev + curr, 0)
      .toFixed(2)
      .toString()
  }

  render() {
    return <ul>
      <div className="row valign-wrapper">
        <div className="col s9">
          <span className="flow-text">Total: ${this.getTotalPrice(this.props.items)}</span>
        </div>
        <div className="col s3 offset-9 right-align">
          {this.props.items.length != 0 &&
            <Link className="waves-effect waves-light btn" to={"/order"}>
              Order
            </Link>
          }
        </div>
      </div>
      {
        this.props.items.map(item => {
          return (
            <div className="col s12 m8 offset-m2 l1 offset-l3">
              <div className="card-panel grey lighten-5 z-depth-">
                <div className="row valign-wrapper">
                  <div className="col s5">
                    <img src={item.image} className="responsive-img" />
                  </div>
                  <div className="col s10">
                    <h5>{item.name}</h5>
                    <h6>Price: {item.price}</h6>
                    <h6>Detail:</h6>
                    <span className="black-text">{item.detail}</span>
                  </div>
                  <i
                    className="waves-effect waves-teal btn-flat material-icons red-text"
                    onClick={() => this.props.onDelete(item.id)}
                  >
                    delete
              </i>
                </div>
              </div>
            </div>

          )
        })}
    </ul>
  }
}