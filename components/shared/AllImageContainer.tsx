"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const AllImageContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        if (!response) {
          throw new Error("faild");
        }

        const result = await response.json();

        setData(result.slice(0, 50));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="allImgWrap">
      {/* {data.length > 0 &&
        data.map((ele)=>{
          return(
            <div className="imgCard" key={ele?.id}>
              <Image src={ele?.url} className={"img"} alt='Logo' width={200} height={200} />
            </div>
          )
        })
      } */}
    </div>
  )
}

export default AllImageContainer