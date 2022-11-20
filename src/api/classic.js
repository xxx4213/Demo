import request from "./http.js"
// https://apis.netstart.cn/maoyan
export function getClassicList() {
    return request({
        url: "index/moreClassicList",
        method: "get",
    });
}