import { createBuilder } from "@ibnlanre/portal";

const movieBuilder = createBuilder({
  movie: {
    search: (search: string) => {
      `3/search/movie?query=${search}`;
    },

    top_rated: () => {
      `3/movie/top_rated`;
    },
  },
});
