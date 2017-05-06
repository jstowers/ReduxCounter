import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import action creators
import { increase, decrease } from '../actions/index';

class Counter extends Component {

	render() {

		console.log('this.props =', this.props);

		return (
			<div>
				<button onClick = { this.props.onIncrease }>+</button>
				{ this.props.count.counter }
				<button onClick = { this.props.onDecrease }>-</button>
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

