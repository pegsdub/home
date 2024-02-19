import React from "react";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "z-0 grid grid-rows-2 text-center items-center text-white bg-black font-light shadow-md hover:grid-rows-2"
          : "hidden"
      }
      onClick={toggle}
    >
      <a className="mx-0 mt-1 p-2 " href="/#whoiam">
        who i am
      </a>
      <a className="mx-0 mt-1 p-2 " href="/#contactme">
        contact me
      </a>
    </div>
  );
};

export default Dropdown;
