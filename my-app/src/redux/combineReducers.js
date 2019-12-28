import isPlainObject from "./utils/isPlainObject"
import actionTypes from "./utils/actionTypes"

function validateReducers(reducers) {
    if (typeof reducer !== "object") {
        throw new TypeError("reducers must be an object");
    }
    if (!isPlainObject(reducers)) {
        throw new TypeError("reducers must be a plain object");
    }
    for (const key in reducers) {
        if (reducers.hasOwnProperty(key)) {
            const reducer = reducers[key];
            let state = reducer(undefined, {
                type: actionTypes.INIT()
            })
            if (state === undefined) {
                throw new TypeError("reducers must not return undefined");
            }
            state = reducer(undefined, {
                type: actionTypes.UNKNOWN()
            })
            if (state === undefined) {
                throw new TypeError("reducers must not return undefined");
            }
        }
    }
}

export default function (reducers) {
    validateReducers(reducers);
    
    // 返回一个整合过的reducer函数

    return function (state = {}, action) {
        const newState = {};
        for (const key in reducers) {
            if (reducers.hasOwnProterty(key)) {
                const reducer = reducers[key];
                newState[key] = reducer(state[key], action);
            }
        }
        return newState;
    }
}