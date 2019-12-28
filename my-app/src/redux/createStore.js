import actionTypes from "./utils/actionTypes"
import isPlainObject from "./utils/isPlainObject"

export default function (reducer, defaultState) {
    let currentReducer = reducer,
        currentState = defaultState; //记录当前状态

    const listeners = []; //存着注册的监听器

    function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new TypeError("action must be a plain object");
        }
        if (action.type === undefined) {
            throw new TypeError("action must has a property of type");
        }
        currentState = currentReducer(currentState, action)

        for (const listener of listeners) {
            listener();
        }
    }

    function getState() {
        return currentState;
    }

    // 添加一个监听器
    function subscribe(listener) {
        listeners.push(listener);
        let isRemove = false;
        return function () {
            if (isRemove) {
                return;
            }
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1)
            isRemove = true
        }
    }

    dispatch({
        type: actionTypes.INIT()
    })

    return {
        dispatch,
        getState,
        subscribe
    }
}