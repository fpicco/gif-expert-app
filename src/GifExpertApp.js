import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Friends"]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "HunterXHunter"]);
  //   };

  return (
    <>
      <h1>GIF Searcher</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}> ADD </button> */}

      <ol>
        {categories.map((category) => (<GifGrid key={category} category={category}/>))}
      </ol>
    </>
  );
};
