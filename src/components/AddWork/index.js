import React, { useState } from 'react';

const AddWork = () => {
	const [state, setstate] = useState(
		{
			name: '',
			status: '0',
		}
	)

	const handleChange = (e) => {
		setstate({ ...state, [e.target.name]: e.target.value.trim() })
	}

	const handleSubmit = (e) => {
		console.log(state)
		e.preventDefault();
	}

	return (
		<div>
			<h2>HTML Forms</h2>
			<form onSubmit={handleSubmit} action="/">
				<label>Tên</label><br />
				<input type="text" name="name" value={state.name} onChange={handleChange} /><br />
				<label>Trạng thái</label><br />
				<select name="status" value={state.status} onChange={handleChange}>
					<option value="0">Ẩn</option>
					<option value="1">Kích hoạt</option>
				</select>
				<input type="submit" value="Lưu lại" />
			</form>
		</div>
	)
}

export default AddWork;