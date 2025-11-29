import React from "react";
import TopBar from "../components/utils/TopBar";
import { useQuery } from "@tanstack/react-query";
import { getMovies, getTrending } from "../external/Api";
import { TrendingContainer } from "../components/TrendingContainer";

export const Home = () => {
  return (
    <div className="home">
      <TopBar />
      <div className="home-content">
        <TrendingContainer type="movie" label="Movies" />
        <TrendingContainer type="tv" label="Shows" />
      </div>
    </div>
  );
};
