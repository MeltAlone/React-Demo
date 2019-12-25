import React, { Component } from 'react'
import types from "../../../utils/commonTypes"
import PropTypes from "prop-types"

export default class index extends Component {
    // 默认属性值
    static defaultProps = {
        datas: [],
        chooseDatas: []
    }

    // 属性类型
    static propTypes = {
        datas: types.groupDatas.isRequired,
        name: PropTypes.string.isRequired,
        chooseDatas: types.chooseDatas,
        onChange: PropTypes.func
    }

    handleChange = e => {
        let newArr;
        if (e.target.checked) {
            newArr = [...this.props.chooseDatas, e.target.value];
        }else{
            newArr = this.props.chooseDatas.filter(item => item !== e.target.value);
        }
        // 调用父组件传过来的事件，并将新的数组传回去以供父组件重新渲染
        this.props.onChange && this.props.onChange(newArr, this.props.name, e);
    }

    // 得到一组多选框
    getCheckBoxs(){
        return this.props.datas.map(item => (
            <label key={item.value}>
                <input 
                    type="checkbox"
                    name={this.props.name}
                    value={item.value}
                    checked={this.props.chooseDatas.includes(item.value)}
                    onChange={this.handleChange}
                />
                {item.text}
            </label>
        ))
    }
    render() {
        const cbs = this.getCheckBoxs()
        return (
            <div>
                {cbs}
            </div>
        )
    }
}
