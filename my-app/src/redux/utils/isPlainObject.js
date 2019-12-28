// 判断一个对象是否是一个plain-object


export default (obj) => {
    if (typeof obj !== "object") {
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}
