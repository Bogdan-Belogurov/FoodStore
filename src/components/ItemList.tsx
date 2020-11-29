import React from 'react'
import { Link } from 'react-router-dom'
import { IItem } from '../interfaces'

interface IItemListProps {
  items: Array<IItem>
}

interface IItemListState {
  items: Array<IItem>
}

export default class ItemList extends React.Component<IItemListProps, IItemListState> {

  constructor(props: IItemListProps) {
    super(props)
  }

  render() {
    return <div className="row">
      {this.props.items.map(item => (
        <Link to={{
          pathname: `/detail/${item.id}`,
          state: item
        }}>
          <div className="col s4" >
            <div className="card">
              <div className="card-image">
                <img src={item.image} />
              </div>
              <div className="card-content">
                <span className="card-title">{item.name}</span>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  }
}