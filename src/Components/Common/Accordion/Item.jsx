import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

const AccordionItem = ({ label, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <div
        className={`${isOpen ? "bg-blue-500/15! text-blue-500!" : ""} flex-between select-none h-12 text-sm px-4 flex-ic duration-300 hover:bg-slate-50 active:*:scale-95 min-h-20 group cursor-pointer`}
        tabIndex="1"
        onClick={toggleIsOpen}
      >
        <div className="duration-300 cursor-pointer w-full">{label}</div>
        <BiChevronLeft
          className={`${isOpen ? "-rotate-90" : ""} duration-300  text-lg`}
        />
      </div>
      <div
        className={`${isOpen ? "h-full px-6 py-5 whitespace-normal" : "whitespace-nowrap"} duration-300 transition-all text-sm  text-slate-500`}
      >
        {isOpen ? content : null}
      </div>
    </div>
  );
};

export default AccordionItem;
