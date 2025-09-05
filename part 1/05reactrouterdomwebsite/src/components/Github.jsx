import React, { useState, useEffect } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/SouvikBuilds")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 lg:m-5 bg-gray-500 text-white p-6 lg:p-4 text-xl lg:text-3xl flex flex-col justify-center items-center gap-4 rounded-lg">
      <h2 className="text-lg lg:text-3xl font-semibold">
        Github Followers: {data.followers}
      </h2>
      <img
        src={data.avatar_url}
        alt="SouvikBuilds"
        className="text-center w-[200px] lg:w-[300px] rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Github;
