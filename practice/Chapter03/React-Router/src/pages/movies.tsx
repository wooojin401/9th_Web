import { useParams } from "react-router-dom";

const MoviesPage = () => {
  const params = useParams();
  console.log(params);
  return <h1>영화 페이지</h1>;
};

export default MoviesPage;
