import dayjs from "dayjs";
import React from "react";

export const MovieDetails = ({ poster, data, ...props }) => {
  return (
    <div {...props} className="movie-details-card">
      <div className="poster-section">
        <img src={poster} />
      </div>
      <div className="detail-section">
        <div className="movie-details">
          <span className="title">{data.title}</span>
          <span className="desc">{data.overview}</span>

          <div className="meta-data">
            <div className="data-block">
              <span className="header">Date:</span>
              <span className="value">
                {new Date(data.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="data-block">
              <span className="header">Type:</span>
              <span className="value">{data.media_type}</span>
            </div>
            <div className="data-block">
              <span className="header">Lang:</span>
              <span className="value">{data.original_language}</span>
            </div>
          </div>

          {/* <div className="meta">
            <span>{dayjs(data.year).format("YYYY")}</span>
            <span className="separator"></span>
            <span>{data.overview}</span>
          </div> */}
          {/* 
            <p className="genre">{movie.genre}</p>
            <p className="description">{movie.description}</p>

            <div className="cast">
              <p className="label">Cast:</p>
              <p className="value">{movie.cast.join(", ")}</p>
            </div> */}

          {/* <div className="director">
            <p className="label">Director:</p>
            <p className="value">{data.title}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
