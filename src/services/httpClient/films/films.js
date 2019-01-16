import clientHttp from "../clientHttp";

export const getFilms = () => clientHttp.get("/films");
export const getFilmById = id => clientHttp.get(`/film/${id}`);
