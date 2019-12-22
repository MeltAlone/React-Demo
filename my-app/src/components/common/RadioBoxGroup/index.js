import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'

export default class RadioBoxGroup extends Component {
    // 默认值
    static defaultProps = {
        datas: [],
        value: ''
    }
    //属性类型限制
    static propTypes = {
        datas: types.groupDatas.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }
    // 事件处理函数
    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    }
    //得到一组单选框
    getRadios(){
        return this.props.datas.map(item => (
            <label key={item.value}>
                <input 
                    type="radio"
                    name={this.props.name}
                    value={item.value}
                    checked={this.props.value === item.value}
                    onChange={this.handleChange}
                />
                {item.text}
            </label>
        ))
    }

    render() {
        const rbs = this.getRadios();
        return (
            <div>
                {rbs}
            </div>
        )
    }
}
