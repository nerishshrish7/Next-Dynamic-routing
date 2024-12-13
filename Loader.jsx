'use client'

import { useState, useEffect } from 'react';
import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  console.log(loading)

  if (!loading) {
    return null; 
  }

  return (
    <div className="flex justify-center items-center h-[80vh] w-[100%]">
      <FadeLoader color="#4cdb4c" size={150}/>
    </div>
  );
}

export default Loader;
