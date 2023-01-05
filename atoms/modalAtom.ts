import { DocumentData } from "firebase/firestore"
import { atom } from "recoil"

import Movie from "typings/movie"

export const modalState = atom<Boolean>({
  key: "modalState",
  default: false,
})

export const movieState = atom<Movie | DocumentData | null>({
  key: "movieState",
  default: null,
})
