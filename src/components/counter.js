import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { 
	Button,
	Col,
	Grid,
	Label
} from 'react-bootstrap';

import DatePicker from './DatePicker';

// import { Table } from './table';

// import action creators
import { increase, decrease } from '../actions/index';

class Counter extends Component {

	render() {

		const count = this.props.count.counter;

		return (
			<div>
				<h3 className="title">
					It's the Final Counter!
				</h3>
				<div className="counter">
					<Grid>
						<Col xs={2} md={1}>
							<Button
								bsStyle="primary"
								onClick={ count > 0 ? this.props.onDecrease : null }>-
							</Button>
						</Col>
						<Col xs={2} md={1}>
							<Label>{ count }</Label>
						</Col>
						<Col xs={2} md={1}>
							<Button
								bsStyle="primary"
								onClick={ this.props.onIncrease }>+
							</Button>
						</Col>
					</Grid>
				</div>
				<DatePicker />
			</div>
		);
	}
}

// <Table />

const mapStateToProps = (state) => {
	return {
		count: state
	};
}

const mapDispatchToProps = (dispatch) => {

	return {
		onIncrease: () => {

			dispatch(increase());
		},
		onDecrease: () => {

			dispatch(decrease());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

