import React, { useEffect, useState } from "react"
import { getMyInfo } from "../apis/auth";
import { ResponseMyInfoDto } from "../types/auth";

export default function MyPage() {
    const [data, setData] = useState<ResponseMyInfoDto | null>(null);

    useEffect(() => {
        const getData = async () => {
            const res = await getMyInfo();
            console.log(res);

            setData(res);
        }

        getData();
    }, []);

    return (
        <div>
            {data?.data.name}
            {data?.data.email}
        </div>
    );
};
