import React from 'react';
import Table from './Table';

const ListWork = (props) => {
    const { setstate, state } = props;
    const onChange = (e) => {
        setstate(!state)
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
                <Table />
            </table>
        </div>
    )
}

export default ListWork;
