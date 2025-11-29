import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
import {
  discoverResults,
  getSearchResults,
  getTrending,
} from "../../external/Api";
import { Popover, Skeleton } from "antd";
import { MovieDetails } from "../utils/MovieDetails";
import { StarTwoTone } from "@ant-design/icons";
import dayjs from "dayjs";
import { PaginationComp } from "../utils/Pagination";
export const DisplayContainer = ({ type, searchQuery }) => {
  const [page, setPage] = useState(1);

  // Debounce the search term to reduce refetch frequency
  const [debouncedQuery, setDebouncedQuery] = useState("");
  useEffect(() => {
    const handle = setTimeout(() => {
      setDebouncedQuery(searchQuery.trim());
    }, 400);
    return () => clearTimeout(handle);
  }, [searchQuery]);

  // Reset page when search term changes
  useEffect(() => {
    setPage(1);
  }, [debouncedQuery, type]);

  const discoverQuery = useQuery({
    queryKey: ["discover", type, page],
    queryFn: () => discoverResults(type, { page }),
    enabled: debouncedQuery === "",
    keepPreviousData: true,
    staleTime: 30 * 1000,
  });

  const searchQueryQ = useQuery({
    queryKey: ["search", type, debouncedQuery, page],
    queryFn: () => getSearchResults(type, { query: debouncedQuery, page }),
    enabled: debouncedQuery !== "",
    keepPreviousData: true,
    staleTime: 30 * 1000,
  });

  const activeQuery = debouncedQuery ? searchQueryQ : discoverQuery;
  const mappedData = activeQuery.data;
  const showLoader = activeQuery.isLoading && !mappedData;

  return (
    <>
      {!showLoader && (
        <PaginationComp
          setPage={setPage}
          page={page}
          total={mappedData?.total_results}
        />
      )}

      <div className="trending-container grid-view">
        {showLoader
          ? Array(20)
              .fill("")
              .map((_, index) => (
                <div className="movie-card" key={`skeleton-${index}`}>
                  <Skeleton.Node
                    size="large"
                    active
                    style={{
                      backgroundColor: "#2a2a2a",
                      height: "100%",
                      width: "100%",
                    }}
                    className="movie-poster"
                  />
                </div>
              ))
          : mappedData?.results.map((res) => (
              <div className="movie-card" key={res.id}>
                <div className="movie-poster">
                  <img
                    src={`https://image.tmdb.org/t/p/w342${res.poster_path}`}
                  />
                </div>

                <div className="rating">
                  <StarTwoTone twoToneColor="#f5c518" />
                  {parseFloat(res.vote_average).toFixed(1)}
                </div>
                <div className="details">
                  <div className="meta-data">
                    <span className="type">{res.media_type || type}</span>
                    <span className="year">
                      {res.release_date || res.first_air_date
                        ? dayjs(res.release_date || res.first_air_date).format(
                            "YYYY"
                          )
                        : "NA"}
                    </span>
                  </div>
                  <span className="title">{res.title || res.name}</span>
                </div>

                {/* <p className="movie-title">{res.original_title}</p> */}
              </div>
            ))}
      </div>
    </>
  );
};
