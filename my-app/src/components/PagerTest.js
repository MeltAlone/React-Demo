import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList'
import Modal from './Modal' 


export default class PagerTest extends Component {
/**
 * 状态数据：
 * 1. current：初始页码
 * 2. total：总数据量
 * 3. limit：页容量，每页显示的数据量
 * 4. panelNumber：数字页码最多显示多少个
 */
    state = {
        current: 1,
        total: 0,
        limit: 10,
        panelNumber: 5,
        students: [],
        isLoading: false
    }
    constructor(props){
        super(props);
        this.fetchStudents();
    }
    // 请求学生列表信息函数
    async fetchStudents (){
        this.setState({
            isLoading: true
        })
        // 异步请求渡一的api需要传入当前页数和一页能显示数据条数
        const resp = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
            .then(resp => resp.json())
            .then(resp => resp.data);
        console.log(resp);
        this.setState({
            total: resp.cont,
            students: resp.findByPage,
            isLoading: false
        })
    }
    handlePageChange =  (newPage) => {
        this.setState({
            current: newPage
        })
        this.fetchStudents();
    }


    render() {
        return (
            <div className="container">
                <StudentList stus={this.state.students}/>
                <div className="pager">
                    <Pager {...this.state} onPageChange={this.handlePageChange}/>
                </div>
                <Modal show={this.state.isLoading}/>
            </div>
        )
    }
}
