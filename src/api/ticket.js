import request from "./http.js"
// https://apis.netstart.cn/maoyan
export function getMovie(params) {
    return request({
        url: "/movie/detail",
        method: "get",
        params
    });
}
export function getTicket(params) {
    return request({
        url: "/index/moreCinemas",
        method: "get",
        params
    });
}