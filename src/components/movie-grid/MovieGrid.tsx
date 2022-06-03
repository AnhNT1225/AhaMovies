import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";
import { IGeneralItem } from "../../interface";
import MovieCard from "../movie-card/MovieCard";
import MovieSearch from "../movie-search/MovieSearch";
import { OutlineButton } from "../UI/button/Button";

import "./movie-grid.scss";

interface MovieGridProps {
  category: string;
}
const MovieGrid: React.FC<MovieGridProps> = (props) => {
  const [items, setItems] = useState<IGeneralItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  const { keyword } = useParams();
  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
            break;
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems(response?.results!);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);


  const loadmore = async() => {
    let response : any = null;

    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
          break;
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setItems((prevItems) => [...prevItems, ...response?.results!]);
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
    <div className="section mb-3">
      <MovieSearch category={props.category} keyword={keyword!}/>
    </div>
      <div className="movie-grid">
        {items.map((item, i) => (
          <MovieCard category={props.category} item={item} key={i} />
        ))}
      </div>
      {page < totalPage && (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadmore}>
            Load more
          </OutlineButton>
        </div>
      )}
    </>
  );
};

export default MovieGrid;
