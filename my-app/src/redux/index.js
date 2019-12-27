import { createStore } from 'redux';
import reducer from './reducer'
import { createAddUserAction } from './action/usersAction'



// 创建一个store数据仓库，传入一个reducer，和初始状态
const store = createStore(reducer);

console.log(store.getState());

// 分发action
store.dispatch(createAddUserAction({
    id: 79,
    name: "zfy",
    age: 21
}))

console.log(store.getState());