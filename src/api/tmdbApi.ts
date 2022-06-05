import {  IMovieDetail, IMovieListResponse } from "../interface";
import { ICredit } from "../interface/credit";
import { ISmiliarListResponse } from "../interface/similar";
import { ITiviDetail, ITiviListResponse } from "../interface/tivi";
import { IVideoResponse } from "../interface/videos";
import axiosClient from "./axiosClient";

// interface IMovieType {
//     upcoming: string;
//     popular: string;
//     top_rated: string;
// }
export const category: any = {
  movie: "movie",
  tv: "tv",
};

export const movieType: any = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType: any = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};
const tmdbApi = {
  getMoviesList: (type: string, params: any): Promise<IMovieListResponse> => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type: string, params: any) : Promise<ITiviListResponse> => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate: string, id: number): Promise<IVideoResponse> => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: (cate: string, params: any) : Promise<IMovieListResponse | ITiviListResponse> => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },
  detail: (cate: string, id: string, params: any) : Promise<IMovieDetail | ITiviDetail>=> {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  credits: (cate: string, id: number) : Promise<ICredit> => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate: string, id: number) : Promise<ISmiliarListResponse>=> {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
