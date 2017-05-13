// May 5, 2017

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {

	switch (action.type) {
	
		case 'INCREASE':
			return state += 1;
	
		case 'DECREASE':
			return state - 1;
	
		default:
			return state;
	}
}