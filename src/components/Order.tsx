import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface IOrderProps { }

interface IOrderState {
  firstName: string
  lastName: string
  address: string
  email: string
}


export const Order: React.FC<IOrderProps> = () => {

  const defaultOrder: IOrderState = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
  }

  const [order, setOrder] = useState(defaultOrder)

  const onOrderChange = <P extends keyof IOrderState>(prop: P, value: IOrderState[P]) => {
    setOrder({ ...order, [prop]: value })
  }

    return (<div className="row">
      <form className="col s12">
        <div className="row mt2">
          <div className="col s12 offset-9 center-align ">
            <span className="flow-text">Please enter your delivery details!</span>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              name="firstName"
              placeholder="First name"
              id="first_name"
              type="text"
              className="validate"
              value={order.firstName}
              onChange={e => onOrderChange('firstName', e.target.value)}
            />
          </div>
          <div className="input-field col s6">
            <input
              name="lastName"
              placeholder="Last name"
              id="last_name"
              type="text"
              className="validate"
              value={order.lastName}
              onChange={e => onOrderChange('lastName', e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              name="address"
              placeholder="Full addess"
              id="password"
              type="text"
              className="validate"
              value={order.address}
              onChange={e => onOrderChange('address', e.target.value)}
            />
          </div>
          <div className="input-field col s6">
            <input
              name="email"
              placeholder="Email"
              id="email"
              type="email"
              className="validate"
              value={order.email}
              onChange={e => onOrderChange('email', e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12 offset-9 center-align">
            <Link className="waves-effect waves-light btn" to={{
          pathname: "/aplyorder",
          state: order
        }}>
              Apply
          </Link>
          </div>
        </div>
      </form>
    </div>
    )
}
