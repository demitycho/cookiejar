import React, { Component } from 'react';
import { Grid, Image, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class Transactions extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <Header as='h2' style={{margin:'2% 10%'}}>
          Transactions
        </Header>
        <Image style={{margin:'10%', width:'80%'}} src='https://www.mathsisfun.com/data/images/pie-chart-movies.svg' />
        <div style={{margin:'10%', width:'80%'}} >
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                Food:
              </Grid.Column>
              <Grid.Column>
                {data.food}%
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                Healthcare:
              </Grid.Column>
              <Grid.Column>
                {data.healthcare}%
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                Transport:
              </Grid.Column>
              <Grid.Column>
                {data.transport}%
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                Misc:
              </Grid.Column>
              <Grid.Column>
                {data.misc}%
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>

    );
  }
}

export default Transactions;