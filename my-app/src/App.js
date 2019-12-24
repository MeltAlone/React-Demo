import React, { useState } from 'react'
import FadeTransition from "./components/common/FadeTransition"
import { TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'

export default function App() {
    const [tasks, setTasks] = useState([
        {id: uuid(), name: "task1"},
        {id: uuid(), name: "task2"},
        {id: uuid(), name: "task3"}
    ])
    return (
        <div>
            <TransitionGroup component="ul">
                {tasks.map(it => (
                    <FadeTransition 
                        appear 
                        timeout={3000}
                        key={it.id}>
                        <li>
                            {it.name}
                            <button onClick={() => {
                                setTasks(
                                    tasks.filter(i => it.id !== i.id)
                                )
                            }}>删除</button>
                        </li>
                    </FadeTransition>
                ))}
            </TransitionGroup>
            <button onClick={() => {
                let Newtask = window.prompt("请输入任务名称");
                setTasks([...tasks, {id: uuid(), name: Newtask}])
            }}>添加</button>
        </div>
    )
}
