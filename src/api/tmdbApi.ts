import { IMovie, IMovieListResponse } from "../interface";
import axiosClient from "./axiosClient";

// interface IMovieType {
//     upcoming: string;
//     popular: string;
//     top_rated: string;
// }
export const category :any = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType : any = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType : any = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}
const  tmdbApi ={
    getMoviesList: (type : string, params : any) : Promise<IMovieListResponse> => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params)
    },
    getTvList: (type : string, params : any) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params)
    },
    getVideos: (cate : string, id : string) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}})
    },
    search: (cate : string, params: any) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params)
    },
    detail: (cate : string,id: string,  params: any) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params)
    },
    credits: (cate : string, id: string) => {
        const url = category[cate] + '/' + id + 'credits';
        return axiosClient.get(url, {params: {}})
    },
    similar: (cate : string, id: string) => {
        const url = category[cate] + '/' + id + 'similar';
        return axiosClient.get(url, {params: {}})
    },
}

export default tmdbApi