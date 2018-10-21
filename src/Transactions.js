import React, { Component } from 'react';
import { Grid, Image, Header, Table,  Container, Divider , Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import TransactionTable from './table.js';

class Transactions extends Component {
  render() {
    const { data } = this.props
    const chartData = [
      {name: '09/01/18', projected: 6000, actual: 6000},
      {name: '09/06/18', projected: 5300, actual: 5460},
      {name: '09/11/18', projected: 4900, actual: 5150},
      {name: '09/14/18', projected: 4500, actual: 4900},
      {name: '09/16/18', projected: 4350, actual: 4600},
      {name: '09/19/18', projected: 4273},
      {name: '09/24/18', projected: 3432},
      {name: '09/30/18', projected: 3200},
    ]
    const menuData = [
      { key: 'editorials', name: '1 Day' },
      { key: 'review', active: true, name: '1 Month' },
      { key: 'events', name: '1 Year' },
    ]
    return (
      <div>
        <Header as='h2' style={{margin:'2% 10%', fontFamily: 'Montserrat'}}>
          Transactions
        </Header>
        <Divider />
        <TransactionTable entries={data.tableData} />
        <Divider />
        <Image style={{margin:'10%', width:'80%'}} src={data.url} />
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
        <Divider />
        <div>
          <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header as='h2' style={{fontFamily: 'Montserrat'}}>
                Budget
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Menu>
                <Menu.Item
                  name='editorials'
                  content='Day'
                />

                <Menu.Item
                  name='reviews'
                  active={true}
                  content='Month'
                />

                <Menu.Item
                  name='upcomingEvents'
                  content='Year'
                />
              </Menu>
            </Grid.Column>
          </Grid.Row>
          </Grid>
          <AreaChart width={380} height={400} data={chartData}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Area type='monotone' dataKey='actual' stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='projected' stroke='#8884d8' fill='#8884d8' />
          </AreaChart>
        </div>
      </div>
      

    );
  }
}

export default Transactions;
