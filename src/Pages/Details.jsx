import React, { useEffect } from "react";
import { BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Trailer from "../Components/Trailer/Trailer";
import { getDetailsMovies } from "../redux/actions/detailAction";

function Details() {
  const { movied } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      dispatch(getDetailsMovies(params.id));
    }
  }, [dispatch, params.id]);

  return (
    <>
      <div
        className="hero d-flex flex-column justify-content-center brightimg"
        style={{
          backgroundImage: `url(http://image.tmdb.org/t/p/original/${movied.backdrop_path})`,
        }}
      ></div>
      <div className="detailtext">
        <h1 className="text-white">{movied.title}</h1>
        <br />
        <p>{movied?.genres?.map((item) => item.name).join(", ")}</p>
        <p>{movied.overview}</p>
        <p className="ratetext">
          <BsStar style={{ marginRight: ".5rem" }} />
          {movied.vote_average} / 10
        </p>
        <Trailer key={movied.id} item={movied} />
      </div>
    </>
  );
}

export default Details;
