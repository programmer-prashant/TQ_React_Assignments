// 3. Create a custom hook to check if the passed id is already a
// member or not give appropriate msg
// 4. Create a custom hook display a log in status if the person has
// logged in then display online else display offline if the status is
// null display ‘loading.... ‘msg
import { useState } from 'react';

function useInput(initialValue) {
	const [value, setValue] = useState(initialValue);
	const reset = () => {
		setValue(initialValue);
	};
	const bind = {
		value,
		onChange: (e) => {
			setValue(e.target.value);
		},
	};
	return [value, bind, reset];
}

export default useInput;
