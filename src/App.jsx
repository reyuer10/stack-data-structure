import React, { useState } from "react";
import { PiPlusBold } from "react-icons/pi";
import { PiMinusBold } from "react-icons/pi";

export default function App() {
  const [stackList, setStackList] = useState([]);
  const [stacks, setStacks] = useState(0);

  const handleAdd = () => {
    setStacks((e) => e + 1);
    setStackList([...stackList, stacks]);
  };

  const handleDelete = () => {
    setStacks((e) => e - 1);
    const lastStackList = [...stackList];
    lastStackList.pop();
    setStackList(lastStackList);
  };

  console.log(stacks);

  // let id = id.length === 0 ? 1 : stacks.id + 1;

  return (
    <div className="h-screen justify-evenly items-center font-brandon md:flex">
      <div className="flex items-center justify-center space-x-12 flex-col space-y-2 my-20">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-[40px]">STACK</p>
          <p className="text-3xl">Data structure in Javascript</p>
        </div>
        <div className="w-[300px] flex flex-col text-sm space-y-3 bg-green-300 shadow shadow-black p-5 rounded-lg text-[#303030]">
          <p>
            {" "}
            <span className="text-2xl font-medium">Push: </span>Adding an
            element to the top of the stack. This operation increments the
            stack's size and places the new element on top.{" "}
          </p>
          <p>
            {" "}
            <span className="text-2xl font-medium">Pop:</span> Removing the top
            element from the stack. This operation decreases the stack's size
            and retrieves the last-added element.
          </p>
          <p>
            {" "}
            <span className="text-2xl font-medium"> Peek (or Top):</span>{" "}
            Optionally, you can peek at the top element without removing it.
            This provides a view of the element that would be popped next.
          </p>
        </div>
      </div>
      <div className="text-center">
        <div className=" max-md:mx-32 flex flex-col-reverse min-h-[500px] min-w-[300px] bg-amber-300 rounded-2xl py-5">
          {stackList.map((stack, index) => (
            <ul className="rounded-lg justify-center items-center flex ">
              <li
                className="m-2 h-14 w-14 bg-white rounded-xl justify-center flex items-center text-3xl font-bold text-amber-300"
                key={index}
              >
                {stack}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="space-x-4 max-md:my-7  max-md:items-center max-md:justify-center max-md:flex">
        <button
          onClick={() => handleAdd()}
          className=" bg-amber-400 hover:scale-110 transition text-white rounded-2xl p-4"
        >
          <PiPlusBold size={30} />
        </button>
        <button
          onClick={() => handleDelete()}
          className=" bg-amber-400 hover:scale-110 transition text-white rounded-2xl p-4"
        >
          <PiMinusBold size={30} />
        </button>
      </div>
    </div>
  );
}
