import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import ShopPage from './pages/shop/shop.component'
const HatsPage = () => (
  <div>Hats Page</div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}


export default App;