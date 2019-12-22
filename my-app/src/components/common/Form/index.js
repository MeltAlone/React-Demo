import React, { Component } from 'react'
import { Provider } from "./formContext";
import FormInput from "./FormInput"
import PropTypes from "prop-types"
import FormButton from "./FormButton"

export default class Form extends Component {

    state = {
        formData: {}, // 表单数据对象

        // 在上下文中给子组件提供修改表单数据的函数
        changeFormData: (name, value) => {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: value
                }
            })
        },
        // 把父组件通过属性传过来的提交事件放在上下文中
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData)
        }
    }

    // 无伤大雅的约束一下属性
    static propTypes = {
        onSubmit: PropTypes.func
    }

    render() {
        return (
            <div>
                <Provider value={this.state}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}

Form.Input = FormInput
Form.Button = FormButton