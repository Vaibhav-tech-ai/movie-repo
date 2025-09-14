import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { getTrending } from "../external/Api";
import { Button, Popover, Tooltip } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MovieDetails } from "./MovieDetails";

export const TrendingContainer = ({ type, label }) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { data, isLoading, error } = useQuery({
    queryKey: [`trending-${type}`, type, "day"],
    queryFn: () => getTrending(type, "day"),
  });

  const scrollRef = useRef(null);

  const scrollAmount = 500; // pixels to scroll

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
      // Check buttons after scroll animation
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };
  return (
    <div className="trending-container">
      <div className="header-bar">
        <span className="header">Trending {label}</span>
        <div className="action-btn">
          <Button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            size="small"
            icon={<ChevronLeft size={"small"} />}
            className="scroll-btn"
          ></Button>
          <Button
            onClick={scrollRight}
            disabled={!canScrollRight}
            size="small"
            icon={<ChevronRight />}
            className="scroll-btn"
          ></Button>
        </div>
      </div>

      <div className="type-grid" ref={scrollRef} onScroll={checkScrollButtons}>
        {data?.results.map((res) => (
          <Popover
            content={
              <MovieDetails
                data={res}
                poster={`https://image.tmdb.org/t/p/w342${res.backdrop_path}`}
              />
            }
            placement="rightTop" // top, bottom, left, right, etc.
            mouseEnterDelay={0.5} // delay in seconds
            mouseLeaveDelay={0.1}
            styles={{ body: { padding: 0, borderRadius: "12px" } }}
            arrow={false}
          >
            <div
              popoverTarget="myCustomPopover"
              className="movie-card"
              key={res.id}
            >
              <div className="movie-poster">
                <img
                  src={`https://image.tmdb.org/t/p/w342${res.poster_path}`}
                />

                {/* Badges */}
                {/* <div className="badge rating">{movie.rating}</div> */}
                {/* <div className="badge type">{movie.type}</div> */}
              </div>

              {/* <p className="movie-title">{res.original_title}</p> */}
            </div>
          </Popover>
        ))}
      </div>
    </div>
  );
};
