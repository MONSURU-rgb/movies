import Image from "next/image";
import React from "react";

import { SharpStar } from "./icons/star";
import Showtimes from "./icons/showtimes";
import WatchMore from "./icons/watchMore";

export function MainSideBar() {
  return (
    <div className="mt-4 flex flex-col">
      <section className="flex text-end self-end pb-[clamp(18px,1.9vw,30px)]">
        <SharpStar />
        <article className="font-[Poppins] text-[clamp(18px,1.5vw,25px)] font-medium flex">
          <span className="text-[#E8E8E8]">8.5</span>
          <span className="text-[#666666]">| 350k</span>
        </article>
      </section>

      <div className="flex gap-[12px] flex-col">
        <section className="text-[clamp(16px,1.4vw,20px)] text-white w-[clamp(180px,23vw,360px)] py-[12px] rounded-[10px] bg-[#BE123C] flex justify-center">
          <Showtimes />
          See Showtimes
        </section>

        <section
          className="text-[clamp(16px,1.4vw,20px)] w-[clamp(180px,23vw,360px)] py-[12px] rounded-[10px] flex justify-center text-[#333] items-center"
          style={{
            borderRadius: "10px",
            border: "1px solid #BE123C",
            background: "rgba(190, 18, 60, 0.10)",
          }}>
          <WatchMore />
          More watch options
        </section>
      </div>

      <div
        className="h-full w-full mt-[12px] !rounded-[10px] flex gap-1 min-h-[120px]"
        style={{ clipPath: "inset(20px 10px 20px 10px round 10px)" }}>
        <img
          src="/images/MovieIndividual.png"
          alt="Movie Individual"
          className="w-1/3 object-cover"
        />
        <img
          src="/images/MovieIndividual.png"
          alt="Movie Individual"
          className="w-1/3 object-cover"
        />
        <img
          src="/images/MovieIndividual.png"
          alt="Movie Individual"
          className="w-1/3 object-cover"
        />
      </div>
    </div>
  );
}

// export function Main() {
//   const { query } = useRouter();

//   const { data, isLoading, isSuccess } = useQuery({
//     queryKey: ["movie-list"],
//     queryFn: () => axiosInstance.get<MovieData>(`/3/movie/${query?.movie_id}`),
//     enabled: !!query.movie_id,
//     select: ({ data }) => {
//       const movies = data;
//       return movies;
//     },
//   });

//   return (
//     <main className="pl-[clamp(24px,2.3vw,37px)] pr-[clamp(32px,3.4vw,51px)] !rounded-[20px] py-[clamp(22px,2.1vw,38px)]">
//       <section
//         className="relative w-full h-[60vh] bg-[url(/images/MovieIndividual.png)] bg-no-repeat bg-cover bg-center grid place-content-center"
//         style={{ clipPath: "inset(20px 10px 20px 10px round 10px)" }}>
//         <article>
//           <figure
//             className="p-[clamp(18px,1.5vw,28px)] flex justify-center items-center"
//             style={{
//               background: "rgba(255, 255, 255, 0.35)",
//               strokeWidth: "2px",
//               stroke: "rgba(232, 232, 232, 0.20)",
//               filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
//               backdropFilter: "blur(2px)",
//               clipPath: "circle(40%)",
//             }}>
//             <img
//               src="/images/Play.png"
//               alt="individual movie image"
//               width={54}
//               height={54}
//               className="aspect-[1/1]"
//             />
//           </figure>
//           <h3
//             className="text-[#E8E8E8] font-[poppins] text-[clamp(16px,1.5vw,25px)] font-medium"
//             style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}>
//             Watch Trailer
//           </h3>
//         </article>
//       </section>

//       <div className="grid grid-cols-[70%_30%]">
//         <section className="mt-4">
//           <article className="flex gap-[clamp(12px,1.1vw,17px)] items-center justify-start">
//             <h3 className="text-[#404040] text-[clamp(16px,1.5vw,23px)] font-bold font-[Poppins] self-end">
//               {data?.title} • 2022 • PG-13 • 2h 10m
//             </h3>
//             <div className="self-center">
//               <Chip.Group multiple>
//                 <Group
//                   position="center"
//                   mt="md"
//                   styles={{
//                     label: {
//                       color: "red",
//                     },
//                   }}>
//                   <Chip value="1">Action</Chip>
//                   <Chip value="2">Drama</Chip>
//                 </Group>
//               </Chip.Group>
//             </div>
//           </article>

//           <p className="pt-[clamp(18px,1.4vw,25px)] text-[#333] font-[Poppins] text-[clamp(16px,1.3vw,20px)] max-w-[clamp(500px,48.3vw,774px)]">
//             After thirty years, Maverick is still pushing the envelope as a top
//             naval aviator, but must confront ghosts of his past when he leads
//             TOP GUN&apos;s elite graduates on a mission that demands the
//             ultimate sacrifice from those chosen to fly it.
//           </p>
//           <article className="pt-[clamp(24px,2vw,35px)] flex gap-[clamp(24px,2vw,35px)] flex-col">
//             <h2 className="text-[#333333] text-[clamp(16px,1.4vw,20px)]">
//               Director : <span className="text-[#BE123C]">Joseph Kosinski</span>
//             </h2>

//             <h2 className="text-[#333333] text-[clamp(16px,1.4vw,20px)]">
//               Writers :{" "}
//               <span className="text-[#BE123C]">
//                 Jim Cash, Jack Epps Jr, Peter Craig Director
//               </span>
//             </h2>

//             <h2 className="text-[#333333] text-[clamp(16px,1.4vw,20px)]">
//               <span className="text-[#BE123C]">
//                 Tom Cruise, Jennifer Connelly, Miles Teller
//               </span>
//             </h2>

//             <section
//               className="flex gap-[clamp(15px,1.4vw,20px)] justify-center items-center max-w-[clamp(500px,48.3vw,774px)] pr-[12px]"
//               style={{
//                 borderRadius: "10px",
//                 border: "1px solid #C7C7C7",
//                 background: "rgba(255, 255, 255, 0.80)",
//               }}>
//               <span className="text-[clamp(16px,1.4vw,20px)] text-white px-[clamp(16px,1.4vw,20px)] py-[12px] rounded-[10px] bg-[#BE123C]">
//                 Top rated movie #65
//               </span>

//               <article className="flex justify-between flex-grow">
//                 <span className="text-[#333333] ext-[clamp(16px,1.4vw,20px)]">
//                   Awards 9 nominations
//                 </span>
//                 <ArrowDown />
//               </article>
//             </section>
//           </article>
//         </section>
//         <MainSideBar />
//       </div>
//     </main>
//   );
// }
