import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { IGeneralItem, IMovie, ISmiliar, ITivi} from "../../interface";

import "./movie-list.scss";
import MovieCard from "../movie-card/MovieCard";
interface MovieListProps {
  category: string;
  type: string;
    id?: number;
}
const MovieList: React.FC<MovieListProps> = (props) => {
  const [items, setItems] = useState<IMovie[] | ITivi[] | ISmiliar[]>([]);

  console.log('props category: ', props.category)
  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;

          default:
            response = await tmdbApi.getTvList(props.type, { params });
            break;
        }
      }
        else {
          response = await tmdbApi.similar(props.category, props?.id!);
        }
      setItems(response?.results!);
    };
    getList();
  }, []);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, i) => (
          <SwiperSlide className="swipper-slide" key={i}>
            {/* <img src={apiConfig.w500Image(item.poster_path)} alt="" /> */}
            <MovieCard item={item} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
