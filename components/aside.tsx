import React, { useState } from "react";
import { Logout } from "iconsax-react";
import Image from "next/image";
import { MovieService, listItems } from "./MovieIndividualPage";
import { Home } from "./icons/home";
import { Movie } from "./icons/movies";
import { Tv } from "./icons/tv";
import Upcoming from "./icons/upcoming";

export function Aside() {
  const [active, setIsActive] = useState<boolean>(false);

  const listItems: MovieService[] = [
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
  return (
    <aside
      className="flex flex-col justify-between pt-[clamp(32px,3.4vw,52px)] pb-[clamp(44px,4.4vw,69px)] px-[clamp(10px,1.3vw,20px)] max-[960px]:!hidden"
      style={{
        borderRadius: "0px 45px 45px 0px",
        border: "1px solid rgba(0, 0, 0, 0.30)",
      }}>
      <figure className="relative h-[clamp(32px,3.1vw,50px)] w-[clamp(70px,12vw,186px)]">
        <Image src="/images/Logo_black.png" alt="Logo Image" fill />
      </figure>
      <section className="flex flex-col gap-[clamp(18px,1.6vw,28px)]">
        {listItems.map(({ icon, title }) => (
          <article
            key={title}
            className="h-[clamp(22px,1.9vw,30px)] transition ease-in-out duration-300 text-[#010101] font-semibold flex gap-2 items-center justify-start py-[clamp(20px,1.6vw,28px)] w-full pl-3"
            style={{
              backgroundColor:
                active || title === "Movies"
                  ? "rgba(190, 18, 60, 0.10)"
                  : "white",
            }}>
            {icon}
            <span className="text-[clamp(12px,1.4vw,20px)]">{title}</span>
          </article>
        ))}
      </section>

      <section>
        <article
          className=" p-[clamp(12px,1vw,16px)] pt-[clamp(30px,3vw,42px)] rounded-[clamp(14px,1.4vw,20px)] w-fit"
          style={{
            border: "1px solid rgba(190, 18, 60, 0.70)",
            background: "rgba(248, 231, 235, 0.40)",
          }}>
          <h4
            className="text-[clamp(11px,1vw,15px] font-semibold max-w-[clamp(100px,8.3vw,137px)]"
            style={{ color: "rgba(51, 51, 51, 0.8)" }}>
            Play movie quizes and earn free tickets
          </h4>
          <h5 className="text-[12px] font-medium max-w-[clamp(100px,8.3vw,137px)] text-[#666] pb-[9px]">
            50k people are playing now
          </h5>
          <button
            className="rounded-[clamp(18px,1.9vw,30px)] p-[clamp(10px,1vw,16px)] text-[#BE123C] text-[12px] font-medium"
            style={{ background: "rgba(190, 18, 60, 0.2)" }}>
            Start playing
          </button>
        </article>

        <article
          key="logout"
          className="h-[clamp(22px,1.9vw,30px)] transition ease-in-out duration-300 text-[#010101] font-semibold flex gap-1 items-center justify-start py-[clamp(20px,1.6vw,28px)] pr-[clamp(14px,1.4vw,22px)] w-full pl-1 mt-[clamp(16px,1.4vw,20px)]">
          <Logout />
          <span className="text-[clamp(12px,1.4vw,20px)]">Log Out</span>
        </article>
      </section>
    </aside>
  );
}
