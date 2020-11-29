import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ItemDetail from './components/ItemDetail'
import ItemList from './components/ItemList'
import Navbar from './components/Navbar'
import ShoppingCart from './components/ShoppingCart'
import { IItem } from './interfaces'
import DataSource from './DataSource'
import { Order } from './components/Order'

const App: React.FunctionComponent = () => {
  const [items, setItems] = useState<IItem[]>([])
  const dataSource = new DataSource()
  const itemList: Array<IItem> = dataSource.availableItems

  const onAdd = (item: IItem) => {
    setItems(prev => [item, ...prev])
  }

  const onDelete = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <>
      <Router>
        <Navbar itemsCount={items.length} />
        <div className="container">

          <Switch>
            <Route exact path="/">
              <ItemList items={itemList}></ItemList>
            </Route>
            <Route
              path="/detail/:id"
              render={props =>
                <ItemDetail {...props} onAdd={onAdd} />
              }
            />
            <Route path="/shoppingcart">
              <ShoppingCart items={items} onDelete={onDelete}/>
            </Route>

            <Route path="/order" component={Order}></Route>
          </Switch>

        </div>
      </Router>
    </>
  )
}

export default App;
