import { PlayCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { TrailerModal } from "./TrailerModal";

export const MovieDetails = ({ poster, data, ...props }) => {
  const [isTrailerModal, setIsTrailer] = useState(false);
  return (
    <div {...props} className="movie-details-card">
      <div className="poster-section">
        <img src={poster} />
      </div>
      <div className="detail-section">
        <div className="movie-details">
          <span className="title">{data.title || data.name}</span>
          <span className="desc">{data.overview}</span>

          <div className="meta-data">
            <div className="data-block">
              <span className="header">Date:</span>
              <span className="value">
                {new Date(
                  data.release_date || data.first_air_date
                ).toLocaleDateString("en-US", {
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

          <div className="action-buttons">
            <Button
              className="trailer-btn"
              onClick={() => setIsTrailer(true)}
              icon={<PlayCircleOutlined />}
            >
              Watch Trailer
            </Button>{" "}
          </div>

          {isTrailerModal && (
            <TrailerModal
              title={data.title || data.name}
              dataId={data.id}
              dataType={data.media_type || "movie"}
              isOpen={isTrailerModal}
              onClose={() => setIsTrailer(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
