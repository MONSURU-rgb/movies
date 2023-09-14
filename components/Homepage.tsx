import { PlayCircle } from "./icons/playIcon";
import { Favorite } from "./icons/favorite";
import { ArrowForward } from "./icons/forwardArrow";
import { Facebook } from "./icons/facebook";
import { Instagram } from "./icons/instagram";
import { Twitter } from "./icons/twitter";
import { Youtube } from "./icons/youtube";
import { MaterialSymbolsSearch } from "./Search";
import { toast } from "react-toastify";

import { useState, useEffect } from "react";
import { LoadingOverlay, clsx } from "@mantine/core";
import { useQuery } from "react-query";

import Image from "next/image";
import axios from "axios";
import Link from "next/link";

interface MovieResults {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number, number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieData {
  page: number;
  results: MovieResults[];
  total_pages: number;
  total_results: number;
}

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
  },
});

function Header() {
  const [search, setSearch] = useState<string>("");

  const { data, isSuccess, isLoading } = useQuery({
    queryFn: () =>
      axiosInstance.get<MovieData>(`3/search/movie?query=${search}`),
    queryKey: [search],
    enabled: true,
    select: ({ data }) => {
      const movies = data.results?.sort((a, b) => b.popularity - a.popularity);
      return movies;
    },
  });

  console.log(data);

  return (
    <header className="flex justify-between flex-wrap max-[375px]:flex-col max-[375px]:gap-2">
      <figure className="relative w-[clamp(98px,11.6vw,186px)] h-[clamp(32px,3.1vw,50px)]">
        <Image src="/images/Logo.png" fill alt="MovieBox" />
      </figure>

      <section
        className={clsx(
          "p-[6px_10px] rounded-[6px] w-[clamp(200px,25vw,400px)]",
          " h-fit flex justify-between items-center search-input !min-w-[224px]"
        )}>
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={search}
          className="text-white text-16 flex-grow bg-inherit outline-[0px]"
          onChange={(e) => setSearch(e.target.value)}
        />

        <MaterialSymbolsSearch />
      </section>

      <article className="flex gap-26 items-center justify-center gap-27 max-[554px]:hidden">
        <h3 className="text-16 text-white font-bold">Sign in</h3>
        <figure className="relative w-36 h-36">
          <Image fill src="/images/Menu.svg" alt="Menu Image" />
        </figure>
      </article>
    </header>
  );
}

function IMDB({ color }: { color: string }) {
  return (
    <article className="flex gap-2">
      <figure className="relative w-[35px] h-[17px]" data-testid="movie-poster">
        <Image src="/images/imdb.svg" fill alt="imdb logo" />
      </figure>
      <h3 className={`text-[12px] font-normal text-${color}`}>86.0 / 100</h3>
    </article>
  );
}

function Main() {
  return (
    <div className="flex flex-col gap-[16px] pb-[clamp(89px,9.8vw,157px)]">
      <article>
        <h2 className="text-white text-[clamp(34px,3vw,48px)] max-w-[250px]">
          John Wick 3 : Parabellum
        </h2>
      </article>
      <section className="flex gap-[clamp(22px,2.1vw,34px)]">
        <IMDB color="white" />

        <article className="flex gap-2">
          <figure className="relative w-[16px] h-[17px]">
            <Image src="/images/PngItem.png" fill alt="imdb logo" />
          </figure>
          <h3 className="text-white text-[12px] font-normal">97%</h3>
        </article>
      </section>
      <p className="max-w-[302px] text-white text-[14px] font-medium leading-[18px]">
        John Wick is on the run after killing a member of the international
        assassins&apos; guild, and with a $14 million price tag on his head, he
        is the target of hit men and women everywhere.
      </p>

      <button className="p-[6px_16px] flex gap-[8px] rounded-[6px] bg-[var(--rose-700)] items-center justify-center w-fit">
        <PlayCircle />
        <span className="text-[14px] text-white font-bold leading-[24px] uppercase">
          Watch trailer
        </span>
      </button>
    </div>
  );
}

export function TopSection() {
  return (
    <div className="flex flex-col gap-100 px-95 pt-15 bg-[url(/images/Header.png)] w-full bg-no-repeat bg-cover !bg-top">
      <Header />
      <Main />
    </div>
  );
}

export function MoviesSection() {
  const [count, setCount] = useState(10);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["movie-list"],
    queryFn: () => axiosInstance.get<MovieData>("3/movie/top_rated"),
    select: ({ data }) => {
      const movies = data.results?.sort((a, b) => b.popularity - a.popularity);
      return movies;
    },
  });

  useEffect(() => {
    if (isSuccess)
      toast.success("The movies are now available", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    else if (isLoading) {
      <LoadingOverlay visible={isLoading} />;
    }
  }, [isSuccess, isLoading]);

  const movies = data?.slice(0, count) ?? [];

  console.log(movies);

  const handleShowMore = () => {
    setCount((count) => movies.length + count);
  };

  return (
    <div className="px-95">
      <article className="flex justify-between">
        <h2 className="pt-[clamp(45px,4.4vw,70px)] pb-[clamp(28px,3vw,44px)] text-black text-[clamp(24px,2.2vw,36px)] font-bold">
          Featured Movie
        </h2>

        <button
          onClick={handleShowMore}
          className={clsx(
            "flex gap-2 text-[var(--rose-700)] items-center justify-center rounded-lg"
          )}>
          See more <ArrowForward />
        </button>
      </article>
      <section className="grid movie-props grid-cols-[repeat(3,_1fr)] max-[680px]:grid-cols-[repeat(2,_1fr)] max-[434px]:grid-cols-[1fr] gap-[clamp(36px,3.4vw,50px)]">
        {movies.map(({ backdrop_path, release_date, title, overview, id }) => (
          <section
            key={id}
            className="card relative w-full max-[434px]:!w-full"
            data-testid="movie-card">
            <Link
              href={{
                pathname: `/movie/${id}`,
              }}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                  alt="movie image"
                  className="relative h-[clamp(250px,23vw,370px)] object-cover"
                />
              </figure>
            </Link>
            <article className="absolute top-[clamp(15px,1.4vw,20px)] px-[clamp(10px,1vw,16px)] flex justify-between items-center w-full">
              <span
                className="uppercase text-[var(--gray-900)] text-[12px] font-bold rounded-xl p-[3px_8px] whitespace-nowrap h-fit"
                style={{
                  background: "rgba(243, 244, 246, 0.5)",
                  backdropFilter: "blur(1px)",
                }}>
                TV Series
              </span>
              <Favorite />
            </article>

            <article className="pt-[12px] flex flex-col gap-[12px]">
              <h3
                className="text-[var(--gray-400)] text-[12px] font-bold"
                data-testid="movie-release-date">
                {release_date}
              </h3>
              <h2
                className="text-[var(--gray-900)] text-[clamp(12px,1.2vw,18px)] font-bold"
                data-testid="movie-title">
                {title}
              </h2>
              <IMDB color="[#111827]" />
              <h3 className="text-[var(--gray-400)] text-[12px] font-bold">
                {overview}
              </h3>
            </article>
          </section>
        ))}
      </section>

      <footer className="pt-[clamp(60px,9.2vw,147px)] flex flex-col gap-[clamp(24px,2.2vw,36px)] justify-center items-center pb-[clamp(48px,6vw,72px)]">
        <figure className="flex gap-[clamp(28px,3vw,48px)]">
          <Facebook />
          <Instagram />
          <Twitter />
          <Youtube />
        </figure>

        <article className="text-[var(--gray-900)] flex gap-[clamp(28px,3vw,48px)] text-[clamp(12px,1.2vw,18px)]">
          <h4>Conditions of Use</h4>
          <h4>Privacy & Policy</h4>
          <h4>Press Room</h4>
        </article>

        <span className="text-[var(--gray-500)] text-[18px] font-bold">
          &copy; 2021 MovieBox by Adriana Eka Prayudha{" "}
        </span>
      </footer>
    </div>
  );
}
