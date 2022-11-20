import request from "../api/http.js"
// https://apis.netstart.cn/maoyan
export function getVideo() {
    return request({
        url: "video/short/0",
        method: "get",
    });
}