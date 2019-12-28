export default function (actionCreators, dispatch) {
    if (typeof actionCreators === "function") {
        return getAutoDispatchActionCreator(actionCreators, dispatch);
    }else if(Object.prototype.toString.call(actionCreators) === "[object Object]") {
        const result ={};
        for (const key in actionCreators) {
            if (actionCreators.hasOwnProperty(key)) {
                const actionCreator = actionCreators[key];
                if (typeof actionCreator === "function") {
                    result[key] = getAutoDispatchActionCreator(actionCreator, dispatch);
                }
            }
        }
        return result;
    }
    else {
        throw new TypeError("actionCreators must be an object or function which means action creator")
    }
}


// 返回自动分发action创建函数

function getAutoDispatchActionCreator(actionCreator, dispatch) {
    return function (...args) {
        const action = actionCreator(...args)
        dispatch(action);
    }
}