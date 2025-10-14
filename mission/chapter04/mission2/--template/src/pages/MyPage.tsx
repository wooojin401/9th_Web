import { useEffect, useState } from "react";
import type { ResponseMyInfoDto } from "../types/auth";
import { getMyInfo } from "../apis/auth";

const MyPage = () => {
  const [data, setData] = useState<ResponseMyInfoDto>([]);
  useEffect(() => {
    const getData = async () => {
      const response: ResponseMyInfoDto = await getMyInfo();
      console.log(response);

      setData(response);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      {data.data.name}
    </div>
  );
};

export default MyPage;
