import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
			<span style={{ 
				backgroundColor: '#007BFF', // Use the color you need
  				color: '#fff',              // Text color
  				padding: '0.4em 0.8em',      // Adjust padding as needed
  				borderRadius: '1.25rem',     // For pill shape
  				marginRight: '0.5rem'        // Adjust margin as needed
			}}>£{props.cost}</span>


				<TiDelete size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;