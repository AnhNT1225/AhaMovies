import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { movieType, category } from "../../api/tmdbApi";
import { IMovie } from "../../interface";
import Button, { OutlineButton } from "../UI/button/Button";
import "./hero-slide.scss";
const HeroSlide = () => {
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState<IMovie[]>([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        console.log("response: ", response);
        setMovieItems(response.results.slice(0, 4));
      } catch (error) {
        console.log("error");
      }
    };

    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{delay: 3000}}
      >
        {movieItems.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

interface HeroSlideItemProps {
  item: IMovie;
  className: string;
}
const HeroSlideItem: React.FC<HeroSlideItemProps> = (props) => {
  let navigate = useNavigate();

  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={()=> navigate(`/movie/${item.id}`)}>
              Watch now
            </Button>
            <OutlineButton onClick={() => console.log('trailer')}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};
export default HeroSlide;
