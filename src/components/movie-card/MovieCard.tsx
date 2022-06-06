import React from "react";
import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import { category } from "../../api/tmdbApi";
import { IGeneralItem, IMovie, ISmiliar, ITivi } from "../../interface";
import Button from "../UI/button/Button";

import "./movie-card.scss";

interface MovieCardProps {
  item: IMovie | ITivi | ISmiliar;
  category: string;
}
const MovieCard: React.FC<MovieCardProps> = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      {"title" in item ? (
        <h3>{item.title}</h3>
      ) : "name" in item ? (
        <h3>{item.name}</h3>
      ) : null}
    </Link>
  );
};

export default MovieCard;
