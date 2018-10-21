import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

const TableRow = props => {
	if (props.amount > 0) {
		return (
			<Grid.Row>
        <Grid.Column width={5}>
          <Header as='h5'>{props.date}</Header>
          <p>{props.transactionName}</p>
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
          <Header as='h5' style={{color:"red"}}>-${props.amount}</Header>
        </Grid.Column>
      </Grid.Row>
		)
	} else {
		return (
			<Grid.Row>
        <Grid.Column width={5}>
          <Header as='h5'>{props.date}</Header>
          <p>{props.transactionName}</p>
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
          <Header as='h5' style={{color:"green"}}>${Math.abs(props.amount)}</Header>
        </Grid.Column>
      </Grid.Row>
		)
	}
}

export default TableRow