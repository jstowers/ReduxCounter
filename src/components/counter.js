import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { 
	Button,
	Col,
	Grid,
	Label
} from 'react-bootstrap';

// import action creators
import { increase, decrease } from '../actions/index';

class Counter extends Component {

	render() {

		console.log('this.props =', this.props);

		return (
			<div>
				<h3>Count On</h3>
				<Grid>
					<Col xs={6} md={1}>
						<Button
							bsStyle="primary"
							onClick={ this.props.onIncrease }>+
						</Button>
					</Col>
					<Col xs={6} md={1}>
						<h2>
							<Label>{ this.props.count.counter }</Label>
						</h2>
					</Col>
					<Col xs={6} md={1}>
						<Button
							bsStyle="primary"
							onClick={ this.props.onDecrease }>-
						</Button>
					</Col>
				</Grid>
			</div>
		);
	}
}

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

