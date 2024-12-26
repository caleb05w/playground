"use client";

import React, { useState, useEffect } from "react";
import Button from "../../components/Button";

function Page() {
  const [List, setList] = useState([]);
  const [Name, setName] = useState("");
  const [Popup, setPopup] = useState(false);
  const [Purchase, setPurchase] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      updateList(Name);
    }
  };

  useEffect(() => {
    if (Popup) {
      const timer = setTimeout(() => {
        setPopup(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [Popup]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedList = localStorage.getItem("storedList");

      if (storedList) {
        const parsedList = JSON.parse(storedList);
        setList(parsedList);
      }
    }
  }, []);

  useEffect(() => {
    if (Purchase) {
      const timer = setTimeout(() => {
        setPurchase(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [Purchase]);

  const updateList = (name, quantity) => {
    if (List.some((item) => item.name === name || "")) {
      setPopup(true);
    } else {
      const newList = [...List, { name, quantity }];
      setList(newList);
      localStorage.setItem("storedList", JSON.stringify(newList));
      setPurchase(true);
    }
  };

  const deleteItem = (name) => {
    const newList = List.filter((item) => item.name !== name);
    setList(newList);
    localStorage.setItem("storedList", JSON.stringify(newList));
  };

  return (
    <div className="w-[100vw] h-[100vh]">
      {/* <div className="">{betaStoredList}</div> */}

      <div
        className={`absolute px-[1rem] bg-red-200 py-[0.5rem] text-md ease-in-out duration-300 m-[2rem] transition-all right-0 filter flex flex-row gap-[0.5rem]
        ${Popup ? "mt-10 opacity-full z-[11]" : "mt-15 opacity-0 z-0"}`}
      >
        This item already exists in your cart!
        <button onClick={() => setPopup(false)}> x</button>
      </div>

      <div
        className={`absolute px-[1rem] bg-green-300 py-[0.5rem] text-md ease-in-out duration-300 m-[2rem] transition-all right-0 filter flex flex-row gap-[0.5rem]
        ${Purchase ? "mt-10 opacity-full z-10" : "mt-15 opacity-0 z-0"}`}
      >
        {Name} added to your cart!
        <button onClick={() => setPurchase(false)}> x</button>
      </div>
      <section className="flex flex-col px-[2vw] py-[2vh] max-w-[30vw] text-center">
        <div className="border-2 border-black px-[2rem] py-[0.75rem] h-fit w-full mt-[5rem]">
          <h1 className="text-2xl font-bold">Here's your list so far.</h1>
        </div>
        {List.length === 0 ? (
          <h1> List is empty </h1>
        ) : (
          List.map((item, key) => (
            <div
              key={key}
              className="border-2 border-black w-full flex-row flex gap-[0.25rem] justify-between"
            >
              <h1 className="w-full my-auto">
                {item.name}, key: {key}
              </h1>
              <button
                className="font-bold bg-red-400 p-[1rem] hover:bg-red-600 hover:text-white ease-in-out duration-300"
                onClick={() => deleteItem(item.name)}
              >
                {" "}
                x{" "}
              </button>
            </div>
          ))
        )}
        {/* //holds values for modifying list */}
        <div className=" fixed right-0 flex flex-row-reverse mx-[2rem] mt-[5rem]">
          <button
            className="border-2 border-black px-[2rem] py-[0.75rem] "
            onClick={() => updateList(Name, 1)}
          >
            Add to list
          </button>
          <input
            type="text"
            placeholder="Enter a value"
            className="border-2 border-black px-[2rem] py-[0.75rem] w-fit h-fit "
            // onChange={() => setName(Name)}
            onChange={(e) => setName(e.target.value)}
            value={Name}
            onKeyDown={handleKeyDown}
          ></input>
        </div>
      </section>
    </div>
  );
}

export default Page;
