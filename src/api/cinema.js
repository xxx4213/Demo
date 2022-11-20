import request from "./http.js"
// https://apis.netstart.cn/maoyan
// export function getCinema(params) {
//     return request({
//         url: "index/filterCinemas",
//         method: "get",
//         params
//     });
// }
export function getCinema(params) {
    return request({
        url: "index/filterCinemas",
        method: "get",
        params
    });
}
export function getmoreCinemas(params) {
    return request({
        url: "index/moreCinemas",
        method: "get",
        params
    });
}
export function getNiceMovieList(){
    return request({
        url: "index/moreClassicList",
        method:"get"
    })
}
export function getCinemaDetail(params){
    return request({
        url: "cinema/detail",
        method:"get",
        params
    })
}
export function getCinemaShow(params){
    return request({
        url: "cinema/shows",
        method:"get",
        params
    })
}