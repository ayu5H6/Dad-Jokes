import axios from "axios";
import { useState, useEffect } from "react";


type Joke = {
  joke: string;
};
const Jokes = () => {
  const url = `https://icanhazdadjoke.com/`;
  const [jokes, setJokes] = useState<Joke | null>(null);

  const fetchInfo = async () => {
    try {
      const res = await axios.get(url, {
        headers: { Accept: "application/json" },
      });
      setJokes(res.data);
    } catch (error) {
      console.log("Failed to catch joke", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <div className=" flex flex-col items-center  m-0 p-0  min-h-screen">
        <div>
          <h1 className=" text-6xl m-4 text-gradient">RANDOM DAD JOKES</h1>
        </div>

        <div className="m-4 p-4">
          <button
            onClick={fetchInfo}
            className="  bg-gradient-to-r from-teal-800 to-blue-500 hover:from-rose-500 hover:to-fuchsia-500 p-4 rounded-lg"
          >
            <p className="text-xl text-transparent bg-clip-text text-white">
              Click for a dad joke
            </p>
          </button>
        </div>

        <div className="flex sm:flex-row justify-between  h-screen w-screen">
          <div
            className="pointer-events-none"
            style={{
              width: "30%",
              paddingBottom: "30%",
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/s3KoA4wpxzWltloeXo"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
            ></iframe>
          </div>
          <div
            className=" m-4  text-center flex-1 caveat-style sm:text-sm md:text-5xl items-center justify-center flex text-stone-800 "
            style={{
              wordBreak: "break-word", // Ensure text breaks properly
              overflowWrap: "break-word", // Support for older browsers
              maxWidth: "90%", // Constrain the joke container width
              maxHeight: "400px", // Prevent vertical overflow
            
            }}
          >
            <p className=" ">{jokes ? jokes.joke : "Loading..."}</p>
          </div>

          <div
            className="pointer-events-none"
            style={{
              width: "30%",
              paddingBottom: "30%",
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/1hM5kVN0VdbbZ5vDwU"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jokes;
