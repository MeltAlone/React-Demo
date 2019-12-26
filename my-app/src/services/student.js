const appkey = "demo13_1545210570249"

// 从渡一api获取学生信息

// 获取所有学生
export async function getAllStudents() {
    return await fetch("http://api.duyiedu.com/api/student/findAll?appkey=" + appkey)
                .then(resp => resp.json()).then(resp => resp.data);
}

// 分页获取学生
export async function getStudents(page = 1, limit = 10) {
    return await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
        .then(resp => resp.json()).then(resp => resp.data);
}

// 查询学生 如果传递了key属性（key有值），则按照关键字和性别进行搜索
// 如果key没有值，则对所有学生进行分页

export async function searchStudents(
    {page = 1, limit = 10, key = "", sex = "-1"} = {}
) {
    if (key) {
        const resp = await fetch(`http://api.duyiedu.com/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`)
            .then(resp => resp.json()).then(resp => resp.data);
        resp.datas = resp.searchList;
        delete resp.searchList;
        return resp;
    }else{
        const resp = await getStudents(page, limit);
        resp.datas = resp.findByPage;
        delete resp.findByPage;
        return resp;
    }
}