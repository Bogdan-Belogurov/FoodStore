import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { IOrderState } from './Order'

interface IDeliveryProps extends RouteComponentProps { }

export const Delivery: React.FC<IDeliveryProps> = (props) => {
  const order = props.location.state as IOrderState
  return (<div className="center-align">
    <h2>Dear {order.firstName} {order.lastName}!</h2>
    <h3>The order will be delivered to {order.address}</h3>
    <img src="./images/test.jpg"></img>
  </div>
  )
}
