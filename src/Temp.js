import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { TextField } from '@mui/material';

const Temp = () => {

	const [color, setColor] = useState("warning")
	const [todos, setTodos] = useState([])
	const [input, setInput] = useState("")

	const onClickHandler = () => {
		if (color == "warning") {
			setColor("success");
		} else {
			setColor("warning");
		}

		setTodos([...todos, input]);
		setInput("")
	}

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	return (
		<>
			<div style={{ backgroundColor: "red" }}>
				<TextField id="outlined-basic" variant="standard" value={input} onChange={handleChange} />
				<Button variant="outlined" onClick={onClickHandler} color={color}>Contained</Button>
				<div>{JSON.stringify(todos)}</div>
			</div>
		</>
	)
}

export default Temp