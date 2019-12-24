import React, {useState, useEffect} from 'react'
import StudentList from '../StudentList'
import { getStudents } from "../../services/student"
import Pager from "../common/Pager"


export default function StudentContainer() {
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [total, setTotal] = useState(0)
    const [panelNumber, setPanelNumber] = useState(5)
    useEffect(() => {
        (async function () {
            const resp = await getStudents(page, limit);
            setStudents(resp.findByPage); //学生数组
            setTotal(resp.cont); //学生总数
        }());
    }, [page, limit])
    return (
        <div>
            <StudentList stus={students} />
            <Pager
                current={page}
                limit={limit}
                total={total}
                panelNumber={panelNumber}
                onPageChange={newPage => {
                    setPage(newPage)
                }}
            ></Pager>
            <p>
                每页显示的条数：
                <input type="number"
                    value={limit}
                    onChange={e => {
                        setLimit(e.target.value)
                    }}
                />
            </p>
            <p>
                最多显示的数字页码：
                <input type="number"
                    value={panelNumber}
                    onChange={e => {
                        setPanelNumber(parseInt(e.target.value));
                    }}
                />
            </p>
        </div>
    )
}
