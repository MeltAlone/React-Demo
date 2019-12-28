import { ADDUSER, DELETEUSER, UPDATEUSER } from '../action/usersAction' 
import uuid from 'uuid'

const initialState = [
    { id: uuid(), name: "用户1", age: 11 },
    { id: uuid(), name: "用户2", age: 12 }
]

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADDUSER:
        return [...state, payload ];
    case DELETEUSER:
        return state.filter(item => item.id !== payload);
    case UPDATEUSER:
        return state.map(item => item.id === payload.id ? {...item, ...payload.newUser} : item);
    default:
        return state
    }
}
