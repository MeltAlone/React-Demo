// 得到指定长度的随机字符串

function getRandomString(len) {
    return Math.random().toString(32).substr(2, len).split("").join(".")
}

// 导出初始化验证state不为undefined的action.type
export default {
    INIT(){
        return `@@redux/INIT${getRandomString(6)}`
    },
    UNKNOWN(){
        return `@@redux/PROBE_UNKNOWN_ACTION${getRandomString(6)}`
    }
}