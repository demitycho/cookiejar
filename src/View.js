import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import MyMenu from "./MyMenu"
import CookieJar from "./CookieJar"
import Transactions from "./Transactions"
import { Button } from 'semantic-ui-react'

import userData from './constants/constants.json'

class View extends Component {
  constructor(props){
    super(props)
    console.log(props);
    let user = props.account==='johnnytan@gmail.com' ? 1 : 2;
    this.state={
      user: user,
      data: userData['user'+user]
    }
  }
  getStuff = () => {
    let a = fetch('https://97d19419.ngrok.io/get_payout')
    .then(res=>console.log("Success",res))
    .catch(err=>console.log("gg",err))
  }
  render() {
    const {data} = this.state
    return (
      <div className="app1">
        <div className="fullHeader">
          <MyMenu color="#5BC5A7" />
          <div className="balanceName">Balance: ${data.balance}</div>
          <div className="goalName">Savings Goal: ${data.savingsGoal} ({data.rateGoal}% of monthly goal)</div>
        </div>
        <div className="content">
          <div className="middleCard">
            <CookieJar data={data.savings}/>
          </div>
          <div className="middleCard">
            <Transactions data={data.transactions}/>
          </div>
        </div>
        <Button onClick={this.getStuff} content='Primary' primary/>
      </div>
    );
  }
}

export default View;
