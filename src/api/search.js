import request from "./http.js"
export function searchMovie(params) {
    return request({
        url: "search/movies",
        method: "get",
        params
    });
}