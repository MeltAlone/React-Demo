import { createStore } from 'redux';

// 写一个函数作为reducer
function reducer(state, action) {
    if (action.type === "increase") {
        return state + 1;
    }else if (action.type === "decrease") {
        return state - 1;
    }else{
        return state;
    }
}

// 创建一个store数据仓库，传入一个reducer，和初始状态
const store = createStore(reducer, 10);

// 写一个action
const action = {
    type: "increase"
}

// 分发action
store.dispacth(action)