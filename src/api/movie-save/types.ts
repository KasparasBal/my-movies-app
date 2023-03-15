export type MovieSaveMovie = {
  movieId: number;
  title: string;
  releaseDate: string;
  backdropPath: string;
  posterPath: string;
  voteAverage: number;
};

export type MovieSaveResponse = {
  status: string;
};
