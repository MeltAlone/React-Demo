import loginUserReducer from "./loginUser"
import usersReducer from './users'


// 分发action
// store.dispacth(createAddUserAction({
//     id: 79,
//     name: "zfy",
//     age: 21
// }))
// 传过来action
// {
//     type: ADDUSER,
//     payload: user
// }
export default (state = {}, action) => {
    const newState = {
        // 使用谁把谁的状态传进去就好了，
        // 这里的属性值都会执行一遍知道找到对应的action.type
        loginUser: loginUserReducer(state.loginUser, action),
        users: usersReducer(state.users, action)
    }
    return newState;
}