import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

const TableRow = props => {
	if (props.amount > 0) {
		return (
			<Grid.Row>
        <Grid.Column width={5}>
          <Header as='h5' style={{fontFamily: 'Montserrat'}}>{props.date}</Header>
          <p style={{fontFamily: 'Montserrat'}}>{props.transactionName}</p>
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
          <Header as='h5' style={{color:"red", fontFamily: 'Montserrat'}}>-${props.amount}</Header>
        </Grid.Column>
      </Grid.Row>
		)
	} else {
		return (
			<Grid.Row>
        <Grid.Column width={5}>
          <Header as='h5' style={{fontFamily: 'Montserrat'}}>{props.date}</Header>
          <p style={{fontFamily: 'Montserrat'}}>{props.transactionName}</p>
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
          <Header as='h5' style={{color:"green", fontFamily: 'Montserrat'}}>${Math.abs(props.amount)}</Header>
        </Grid.Column>
      </Grid.Row>
		)
	}
}

export default TableRow