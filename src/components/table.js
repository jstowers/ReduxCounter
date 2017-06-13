import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Table extends Component {

	render () {

		const schoolData = [
			{
				id: 1,
				name:'NMMI',
				years:'1992-1996',
				degree: 'HS Diploma'
			},
			{
				id:2,
				name:'UNM',
				years:'1996-2000',
				degree: 'B.S. ChemE'
			},
			{
				id:3,
				name:'Baylor',
				years:'2000-2002',
				degree: 'J.D.'
			},
			{
				id:4,
				name:'UofHouston',
				years:'2007-09',
				degree: 'Master\'s PetrE'
			},
			{
				id:5,
				name:'MakerSquare',
				years:'2016',
				degree:'Full Stack'
			}
		];

		return (
			<div className="genSytleFont13">
				<BootstrapTable data={ schoolData } hover striped={true}>
					<TableHeaderColumn width="100" dataField="id" isKey={true} dataSort={true}>Id</TableHeaderColumn>
					<TableHeaderColumn width="100" dataField="name">Name</TableHeaderColumn>
					<TableHeaderColumn width="100" dataField="years">Years</TableHeaderColumn>
					<TableHeaderColumn width="100" dataField="degree">Degree</TableHeaderColumn>
				</BootstrapTable>
			</div>
		);
	}
}

//export default connect(Table);
