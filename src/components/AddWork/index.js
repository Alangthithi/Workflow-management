import React, { useState } from 'react';

const AddWork = (props) => {
	const initialFormState = { id: null, name: '', status: false }
	const [input, setInput] = useState(initialFormState)

	const handleChange = (e) => {
		setInput(
			{
				...input,
				[e.target.name]: e.target.value.trim()
			}
		)
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random() * 1000),
			name: input.name,
			status: input.status,
		});
	}

	return (
		<div>
			<h2>HTML Forms</h2>
			<form onSubmit={handleSubmit} action="/">
				<label>Tên</label><br />
				<input type="text" name="name" value={input.name} onChange={handleChange} /><br />
				<label>Trạng thái</label><br />
				<select name="status" value={input.status} onChange={handleChange}>
					<option value={false}>Ẩn</option>
					<option value={true}>Kích hoạt</option>
				</select>
				<input type="submit" value="Lưu lại" />
			</form>
		</div>
	)
}

export default AddWork;