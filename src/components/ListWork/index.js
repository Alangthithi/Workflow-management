import React from 'react';
import Table from './Table';

const ListWork = (props) => {
    const { setState, state, removeItem } = props;
    const onChange = (e) => {
        setState(!state)
    }

    return (
        <div>
            <button onClick={onChange}> Thêm công việc</button>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng thái</th>
                        <th>Hành dộng</th>
                    </tr>
                </thead>
                <tbody>
                    <Table setstate={setState} removeItem={removeItem} />
                </tbody>
            </table>
        </div>
    )
}

export default ListWork;
