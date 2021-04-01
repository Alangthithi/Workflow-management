import React from 'react';

const ListWork = (props) => {
    const { setstate, state } = props;
    const onChange = (e) => {
        setstate(!state)
    }

    return (
        <div>
            <button onClick={onChange}> Thêm công việc</button>
        </div>
    )
}

export default ListWork;
