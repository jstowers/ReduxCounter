import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const START_DATE = "01/01/2010";
const END_DATE = "12/31/2017";

const propTypes = {
	autoFocus: PropTypes.bool,
	autoFocusEndDate: PropTypes.bool,
	initialStartDate: momentPropTypes.momentObj,
	initialEndDate: momentPropTypes.momentObj
}

const defaultProps = {
	autoFocus: false,
	autoFocusEndDate: false,
	initialStartDate: null,
	initialEndDate: null,
	startDateId: START_DATE,
	startDatePlaceholderText: 'Start Date',
	endDateId: END_DATE,
	endDatePlaceholderText: 'End Date'
}

class DatePicker extends Component {

	constructor(props) {
		super(props);

		let focusedInput = null;
		
		if(props.autoFocus) {
			focusedInput = START_DATE;
		} else if (props.autoFocusEndDate) {
			focusedInput = END_DATE;
		}	
		this.state = {
			focusedInput,
			startDate: props.initialStartDate,
			endDate: props.initialEndDate
		}
	}

	onDatesChange = ({ startDate, endDate }) => {
		this.setState({ startDate, endDate });
	}

	onFocusChange = (focusedInput) => {
		this.setState({ focusedInput });
	}

	render() {
		const { focusedInput, startDate, endDate } = this.state;

		return (
			<div>
				<DateRangePicker
					  startDate={ startDate }
					  endDate={ endDate }
					  onDatesChange={ this.onDatesChange }
					  focusedInput={ focusedInput } 
					  onFocusChange={ this.onFocusChange }
			  	/>
			</div>
		);
	}
}

export default DatePicker;