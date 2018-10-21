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
      data: userData['user'+user],
      queue: [
        {
          "date": "09/25/18",
          "transactionName": "Macdonalds",
          "amount": 20.00
        },
        {
          "date": "09/12/18",
          "transactionName": "KFC",
          "amount": 25.00
        },
        {
          "date": "09/23/18",
          "transactionName": "Burger King",
          "amount": 30.00
        }
      ],
      arrow: user === 1 ? "▲" : "▼",
      color: user === 1 ? "green" : "red",
    }
  }
  minus = () => {
    const {data, queue} = this.state
    if (queue.length > 0) {
      let abc = queue.pop()
      data.balance = data.balance - abc.amount
      data.transactions.tableData.push(abc)
      this.setState({data, queue})
    } else {
      if (this.state.user === 1) {
        data.balance = data.balance + 1
      } else {
        data.balance = data.balance - 1
      }
      this.setState({data, done:true})
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
          <div className="balanceName">${data.balance} { this.state.done ? <span style={{color:this.state.color}}>{this.state.arrow}</span>: null}</div>
          <div className="goalName">Available Balance</div>
        </div>
        <div className="content">
          <div className="middleCard">
            <CookieJar data={data.savings} minus={this.minus}/>
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
