import React from 'react'
import { RouteComponentProps } from 'react-router'
import { IItem } from '../interfaces'

interface IItemDetailProps extends RouteComponentProps {
  onAdd(item: IItem): void
}

interface IItemDetailState {
  addButtonClasses: Array<string>
}

export default class ItemDetail extends React.Component<IItemDetailProps, IItemDetailState> {

  constructor(props: IItemDetailProps) {
    super(props)
    this.state = {
      addButtonClasses: ["btn-floating", "halfway-fab", "waves-effect", "waves-light", "red", "pulse"]
    }
  }

  render() {
    const item = this.props.location.state as IItem
    return <div className="container" >
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={item.image} />
            <a className={this.state.addButtonClasses.join(" ")} key={item.id} >
              <i
                className="material-icons"
                onClick={() => {
                  this.state.addButtonClasses.pop()
                  this.state.addButtonClasses.push("disabled")
                  this.props.onAdd(item)
                }}
              >add</i>
            </a>
          </div>
          <div className="card-content">
            <span className="card-title">{item.name}</span>
            <span className="flow-text">{item.price}</span>
            <p>{item.detail}</p>
          </div>
        </div>
      </div>
    </div>
  }
}