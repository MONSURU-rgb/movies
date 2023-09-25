import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Aside, MainSideBar } from "@/components";
import { ArrowDown } from "@/components/icons/down";
import { Chip, Group } from "@mantine/core";
import { axiosInstance } from "@/api/axios-config";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { MovieData } from "@/type";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";

dayjs.extend(utc);

export default function File() {
  const { query } = useRouter();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["movie-list"],
    queryFn: () => axiosInstance.get<MovieData>(`/3/movie/${query?.movie_id}`),
    enabled: !!query?.movie_id,
    // select: ({ data }) => {
    //   const movies = data;
    //   return movies;
    // },
  });

  const dateInUTC = data?.data?.release_date;
  const UTCDate = dayjs.utc(dateInUTC).format("YYYY");
  console.log(data?.data);
  // const dateUTC = new Date(dateInUTC.toUTCString());

  function Demo() {
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? "Close navigation" : "Open navigation";
    return <Burger opened={opened} onClick={toggle} aria-label={label} />;
  }

  return (
    <Link
      href="/"
      className="grid grid-cols-[clamp(130px,16vw,226px)_1fr] font-[Poppins] max-[960px]:grid-cols-[1fr]">
      {/* <figure className="hidden max-[960px]:flex">
        <Demo />
      </figure> */}
      <Aside />
      <main className="pl-[clamp(24px,2.3vw,37px)] pr-[clamp(32px,3.4vw,51px)] !rounded-[20px] py-[clamp(22px,2.1vw,38px)]">
        <section
          className="relative w-full h-[60vh] bg-[url(/images/MovieIndividual.png)] bg-no-repeat bg-cover bg-center grid place-content-center"
          style={{
            clipPath: "inset(20px 10px 20px 10px round 10px)",
            background:
              "url(`https://image.tmdb.org/t/p/original/${data?.data?.poster_path}`)",
            width: "100%",
          }}>
          <article>
            <figure
              className="p-[clamp(18px,1.5vw,28px)] flex justify-center items-center"
              style={{
                background: "rgba(255, 255, 255, 0.35)",
                strokeWidth: "2px",
                stroke: "rgba(232, 232, 232, 0.20)",
                filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
                backdropFilter: "blur(2px)",
                clipPath: "circle(40%)",
              }}>
              <Image
                src="/images/Play.png"
                alt="individual movie image"
                fill
                className="!relative aspect-[1/1] w-[54px] h-[54px]"
              />
            </figure>
            <h3
              className="text-[#E8E8E8] font-[poppins] text-[clamp(16px,1.5vw,25px)] font-medium"
              style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}>
              Watch Trailer
            </h3>
          </article>
        </section>

        <div className="grid grid-cols-[70%_30%] max-[820px]:grid-cols-[1fr]">
          <section className="mt-4">
            <article className="flex gap-[clamp(12px,1.1vw,17px)] items-center justify-start">
              <article className="text-[#404040] text-[clamp(16px,1.5vw,23px)] font-bold font-[Poppins] self-end gap-[clamp(6px,0.7vw,10px)]">
                <span data-testid="movie-title">{data?.data?.title}</span>
                {""}
                <span data-testid="movie-release-date">• {UTCDate}</span>
                {""}

                <span>• PG-13</span>
                <span>• {`${data?.data?.runtime}m`}</span>
                {/* {`${data?.data?.title} • ${UTCDate} • PG-13 • 2h 10m`} */}
              </article>
              <div className="self-center">
                <Chip.Group multiple>
                  <Group
                    position="center"
                    mt="md"
                    styles={{
                      label: {
                        color: "red",
                      },
                    }}>
                    <Chip value="1">Action</Chip>
                    <Chip value="2">Drama</Chip>
                  </Group>
                </Chip.Group>
              </div>
            </article>

            <p
              className="pt-[clamp(18px,1.4vw,25px)] text-[#333] font-[Poppins] text-[clamp(16px,1.3vw,20px)] max-w-[clamp(500px,48.3vw,774px)]"
              data-testid="movie-overview">
              {data?.data?.overview}
            </p>
            <article className="pt-[clamp(24px,2vw,35px)] flex gap-[clamp(24px,2vw,35px)] flex-col">
              <h2 className="text-[#333333] text-[clamp(16px,1.4vw,20px)]">
                Director :{" "}
                <span className="text-[#BE123C]">Joseph Kosinski</span>
              </h2>

              <h2 className="text-[#333333] text-[clamp(16px,1.4vw,20px)]">
                Writers :{" "}
                <span className="text-[#BE123C]">
                  Jim Cash, Jack Epps Jr, Peter Craig Director
                </span>
              </h2>

              <h2 className="text-[#333333] text-[clamp(16px,1.4vw,20px)]">
                Stars :
                <span className="text-[#BE123C]">
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </h2>

              <section
                className="flex gap-[clamp(15px,1.4vw,20px)] justify-center items-center max-w-[clamp(500px,48.3vw,774px)] pr-[12px]"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #C7C7C7",
                  background: "rgba(255, 255, 255, 0.80)",
                }}>
                <span className="text-[clamp(16px,1.4vw,20px)] text-white px-[clamp(16px,1.4vw,20px)] py-[12px] rounded-[10px] bg-[#BE123C]">
                  Top rated movie #65
                </span>

                <article className="flex justify-between flex-grow">
                  <span className="text-[#333333] ext-[clamp(16px,1.4vw,20px)]">
                    Awards 9 nominations
                  </span>
                  <ArrowDown />
                </article>
              </section>
            </article>
          </section>
          <MainSideBar />
        </div>
      </main>
    </Link>
  );
}
