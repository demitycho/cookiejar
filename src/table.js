import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import TableRow from './tableRow.js';

const TransactionTable = props => {
	return (
		<Grid style={{margin:'2% 2%'}}>
			{props.queue.map(entry => {
				return (
					<TableRow date={entry.date} transactionName={entry.transactionName} amount={entry.amount} />
				)
			})}
			{props.entries.map(entry => {
				return (
					<TableRow date={entry.date} transactionName={entry.transactionName} amount={entry.amount} />
				)
			})}
		</Grid>
	)
}

export default TransactionTable
