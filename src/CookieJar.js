import React, { Component } from 'react';
import { Grid, Segment, Divider, Image, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Graphic from './Graphic';

class CookieJar extends Component {
  minus = () => {
    this.props.minus();
  }
  render() {
    const { data } = this.props
    return (
      <div>
        <Header as='h3' style={{margin:'2% 10%'}}>
          Savings
        </Header>
        <Grid columns={2} relaxed divided>
          <Grid.Column>
            <Segment basic>
              <Graphic minus={this.minus} percent={data.rateGoal} n={this.props.n}/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic>
              <Header as='h4' dividing>
                Savings Goal:
              </Header>
              <p>
                ${data.savingsGoal} ({data.rateGoal}% of monthly goal)
              </p>

              <Header as='h4' dividing>
                Amount spendable:
              </Header>
              <p>
                { data.buffer < 0 ?
                  <span style={{color:'red'}}>-${Math.abs(data.buffer)}</span>
                  :
                  <span>${data.buffer}</span>
                }
              </p>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>

    );
  }
}

export default CookieJar;
