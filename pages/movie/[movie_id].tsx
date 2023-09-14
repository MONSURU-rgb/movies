import { GetStaticPaths, GetStaticProps } from "next";
import { Aside, Main } from "@/components";

import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";
import Link from "next/link";

export default function File() {
  return (
    <Link
      href="/"
      className="grid grid-cols-[clamp(130px,16vw,226px)_1fr] font-[Poppins]">
      <Aside />
      <Main />
    </Link>
  );
}

export const getStaticPaths: GetStaticPaths<{}> = () => {
  const paths = [
    {
      adult: false,
      backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      genre_ids: [18, 80],
      id: 238,
      original_language: "en",
      original_title: "The Godfather",
      overview:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      popularity: 121.111,
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release_date: "1972-03-14",
      title: "The Godfather",
      video: false,
      vote_average: 8.7,
      vote_count: 18610,
    },
    {
      adult: false,
      backdrop_path: "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
      genre_ids: [12, 14, 28],
      id: 122,
      original_language: "en",
      original_title: "The Lord of the Rings: The Return of the King",
      overview:
        "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
      popularity: 98.134,
      poster_path: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      release_date: "2003-12-01",
      title: "The Lord of the Rings: The Return of the King",
      video: false,
      vote_average: 8.5,
      vote_count: 22207,
    },
    {
      adult: false,
      backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      genre_ids: [18, 80],
      id: 278,
      original_language: "en",
      original_title: "The Shawshank Redemption",
      overview:
        "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      popularity: 90.066,
      poster_path: "/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
      release_date: "1994-09-23",
      title: "The Shawshank Redemption",
      video: false,
      vote_average: 8.7,
      vote_count: 24575,
    },
    {
      adult: false,
      backdrop_path: "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
      genre_ids: [18, 28, 80, 53],
      id: 155,
      original_language: "en",
      original_title: "The Dark Knight",
      overview:
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      popularity: 86.234,
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      release_date: "2008-07-14",
      title: "The Dark Knight",
      video: false,
      vote_average: 8.5,
      vote_count: 30523,
    },
    {
      adult: false,
      backdrop_path: "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
      genre_ids: [16, 10751, 14],
      id: 129,
      original_language: "ja",
      original_title: "千と千尋の神隠し",
      overview:
        "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
      popularity: 71.8,
      poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      release_date: "2001-07-20",
      title: "Spirited Away",
      video: false,
      vote_average: 8.5,
      vote_count: 14850,
    },
    {
      adult: false,
      backdrop_path: "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
      genre_ids: [10749, 16, 18],
      id: 372058,
      original_language: "ja",
      original_title: "君の名は。",
      overview:
        "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
      popularity: 68.435,
      poster_path: "/q719jXXEzOoYaps6babgKnONONX.jpg",
      release_date: "2016-08-26",
      title: "Your Name.",
      video: false,
      vote_average: 8.5,
      vote_count: 10250,
    },
    {
      adult: false,
      backdrop_path: "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
      genre_ids: [18, 36, 10752],
      id: 424,
      original_language: "en",
      original_title: "Schindler's List",
      overview:
        "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      popularity: 67.783,
      poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      release_date: "1993-12-15",
      title: "Schindler's List",
      video: false,
      vote_average: 8.6,
      vote_count: 14528,
    },
    {
      adult: false,
      backdrop_path: "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
      genre_ids: [35, 53, 18],
      id: 496243,
      original_language: "ko",
      original_title: "기생충",
      overview:
        "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      popularity: 67.196,
      poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      release_date: "2019-05-30",
      title: "Parasite",
      video: false,
      vote_average: 8.5,
      vote_count: 16357,
    },
    {
      adult: false,
      backdrop_path: "/sw7mordbZxgITU877yTpZCud90M.jpg",
      genre_ids: [18, 80],
      id: 769,
      original_language: "en",
      original_title: "GoodFellas",
      overview:
        "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
      popularity: 63.58,
      poster_path: "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
      release_date: "1990-09-12",
      title: "GoodFellas",
      video: false,
      vote_average: 8.5,
      vote_count: 11678,
    },
    {
      adult: false,
      backdrop_path: "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
      genre_ids: [14, 18, 80],
      id: 497,
      original_language: "en",
      original_title: "The Green Mile",
      overview:
        "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      popularity: 61.975,
      poster_path: "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
      release_date: "1999-12-10",
      title: "The Green Mile",
      video: false,
      vote_average: 8.5,
      vote_count: 15876,
    },
  ].map((post) => ({
    params: { movie_id: post.id },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ movie_id?: string }> = (
  props
) => {
  const { params } = props;
  return {
    props: {
      movie_id: params?.movie_id as string,
    },
  };
};
