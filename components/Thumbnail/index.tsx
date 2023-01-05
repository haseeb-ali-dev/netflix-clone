import Image from "next/image"
import { useSetRecoilState } from "recoil"

import { modalState, movieState } from "atoms/modalAtom"
import { Movie } from "typings"

interface Props {
  movie: Movie
}

const Thumbnail = ({ movie }: Props) => {
  const setCurrentMovie = useSetRecoilState(movieState)
  const setShowModal = useSetRecoilState(modalState)

  const handleClick = () => {
    setCurrentMovie(movie)
    setShowModal(true)
  }

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={handleClick}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="object-cover rounded-sm md:rounded"
        fill
        alt="Thmnl"
      />
    </div>
  )
}

export default Thumbnail
