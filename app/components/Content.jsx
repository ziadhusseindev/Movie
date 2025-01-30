"use client";
import { useState } from "react";
import axios from "axios";
import { apiKey } from "../API";

const Content = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  const searchHandler = () => {
    if (!search) {
      return;
    }

    axios({
      method: 'GET',
      url: `http://www.omdbapi.com/?t=${search}&apiKey=${apiKey}`
    })
    .then(response => {
      console.log(response.data);
      //setData(response.data);
    })
  }

  return (
    <div className="h-screen bg-slate-800 w-full">
      <div className="flex justify-center items-center w-full pt-3">
        <input
          type="text"
          placeholder="Enter a movie name..."
          className="text-[18px] mr-4 outline-none rounded-md p-2 w-[400px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="text-[18px] border border-white text-white mr-4 outline-none rounded-md p-2 w-[100px] font-bold"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Content;
