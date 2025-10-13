import type { DMovie } from "../types/movies";
import seoro from "../assets/seoro.jpg";

type Cast = DMovie["credits"]["cast"][number];

interface ActorProps {
  actor: Cast;
}

export default function Actor({ actor }: ActorProps) {
  return (
    <div className="flex flex-col items-center mb-6 w-24">
      {!actor.profile_path && (
        <img src={seoro} className="rounded-full size-20 object-cover"></img>
      )}

      {actor.profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
          className="rounded-full size-20 object-cover border-2"
        ></img>
      )}
      <div className="text-center mt-5">
        <span className="block">{actor.name}</span>
        <span className="text-sm text-gray-400 max-w-xl line-clamp-1">
          {actor.character}
        </span>
      </div>
    </div>
  );
}
