import React, { Component } from 'react';
import { Grid, Segment, Divider, Image, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class CookieJar extends Component {

  render() {
    const { data } = this.props
    return (
      <div>
        <Header as='h2' style={{margin:'2% 10%'}}>
          Savings
        </Header>
        <Grid columns={2} relaxed divided>
          <Grid.Column>
            <Segment basic>
              <Image src='https://target.scene7.com/is/image/Target/GUEST_0645ff04-1ea5-4753-8edb-323ff3408351?wid=488&hei=488&fmt=pjpeg' />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic>
              <Header as='h3' dividing>
                Current Monthly Savings:
              </Header>
              <p>
                ${data.currentMonthly}
              </p>

              <Header as='h3' dividing>
                Cash Available Before Exceeding Goal:
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
