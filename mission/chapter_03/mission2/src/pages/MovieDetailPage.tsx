import type { ReactElement } from "react";
import { useParams } from "react-router-dom";

const MovieDetailPage = (): ReactElement => {
  const params = useParams();

  return <div>MovieDetailPage</div>;
};

export default MovieDetailPage;
