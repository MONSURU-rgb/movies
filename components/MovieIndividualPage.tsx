import Image from "next/image";
import React, { useState, ReactElement } from "react";
import { Home } from "./icons/home";
import { Movie } from "./icons/movies";
import { Tv } from "./icons/tv";
import Upcoming from "./icons/upcoming";
import { Logout } from "iconsax-react";
import { Aside } from "./aside";
import { Main } from "./main";
import { useRouter } from "next/router";

interface MovieService {
  icon: ReactElement;
  title: string;
}

export const listItems: MovieService[] = [
  {
    icon: <Home />,
    title: "Home",
  },
  {
    icon: <Movie />,
    title: "Movies",
  },
  {
    icon: <Tv />,
    title: "TV Series",
  },
  {
    icon: <Upcoming />,
    title: "Upcoming",
  },
];

function MovieIndividualPage() {
  const { query } = useRouter();
  console.log(query?.file);

  //parse the id
  // pick up the id and pass it to the builder to fetch the movie (provided that we already have a useQuery in that drawer waiting for that id to fetch the details)
  //use the return value from useQuery to populate the drawer

  const id = query.id;

  return (
    <div className="grid grid-cols-[clamp(130px,16vw,226px)_1fr] font-[Poppins]">
      <Aside />
      <Main />
    </div>
  );
}

export default MovieIndividualPage;
