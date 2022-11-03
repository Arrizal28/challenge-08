import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Header from "../Components/Header/Header";
import Trailer from "../Components/Trailer/Trailer";
import {
  getAllMovies,
  getAllTrendingMovies,
} from "../redux/actions/movieActions";
import "../style/landingPage.scss";

function Home(token, setToken) {
  const dispatch = useDispatch();
  const { movies, moviet } = useSelector((state) => state.movie);

  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(getAllMovies());
    dispatch(getAllTrendingMovies());
  }, [dispatch]);

  return (
    <div>
      <div>
        {!token ? (
          <>
            <Header></Header>
          </>
        ) : (
          <></>
        )}
        <Carousel>
          {moviet?.results
            ?.map((item) => {
              return (
                <Carousel.Item className="myBG" key={item.id}>
                  <div
                    className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center text-white brightimg"
                    style={{
                      backgroundImage: `url(http://image.tmdb.org/t/p/original/${item.backdrop_path})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="textbox">
                    <h1>{item.title}</h1>
                    <p>{item.overview}</p>
                    <Trailer key={item.id} item={item} />
                  </div>
                </Carousel.Item>
              );
            })
            .slice(0, 3)}
        </Carousel>
      </div>
      <div className="trending">
        <br />
        <h1 className="text-white">POPULAR MOVIE</h1>
        <br />
        <Slider {...settings}>
          {movies?.results?.map((item) => (
            <div className="card-item" key={item.id}>
              <div className="card-inner">
                <div className="card-top">
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt={item.title}
                    title={item.title}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`details/${item.id}`);
                    }}
                  />
                </div>
                <div className="card-bottom">
                  <div className="card-info">
                    <h4>{item.title}</h4>
                    <p>{item.release_date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Home;
