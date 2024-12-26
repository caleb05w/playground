import React from "react";

function Button({ Text, ClickTo }) {
  return (
    <button
      className="bg-black hover:bg-gray-950 h-fit w-fit ease-in-out duration-300 px-[2rem] py-[0.75rem] rounded-[0.25rem] text-white hover:cursor-pointer"
      href={ClickTo}
    >
      {Text}
    </button>
  );
}

export default Button;
