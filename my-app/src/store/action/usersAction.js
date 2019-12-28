// 定义一些action.type的值和生成action的函数

export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");



export const createAddUserAction = user => ({
    type: ADDUSER,
    payload: user
})
export const createDeleteUserAction = id => ({
    type: DELETEUSER,
    payload: id
})
export const createUpdateUserAction = (id, newUser) => ({
    type: UPDATEUSER,
    payload: {
        id,
        newUser: {...newUser}
    }
})