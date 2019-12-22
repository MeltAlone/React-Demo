const appkey = "demo13_1545210570249"

// 从渡一api获取学生信息

export async function getAllStudents() {
    return await fetch("http://api.duyiedu.com/api/student/findAll?appkey=" + appkey)
                .then(resp => resp.json()).then(resp => resp.data);
}