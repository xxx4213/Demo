import request from "./http.js"
// https://apis.netstart.cn/maoyan
export function getCityList() {
    return request({
        url: "cities.json",
        method: "get",
    })
}