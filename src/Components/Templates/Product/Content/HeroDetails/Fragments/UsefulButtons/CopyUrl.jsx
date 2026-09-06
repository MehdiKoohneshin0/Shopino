import { FaShare } from "react-icons/fa6";
import Tooltip from "../../../../../../Ui/Tooltip";
import { useState } from "react";

const CopyUrl = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyUrl = () => {
    const url = location.origin + location.pathname;
    navigator.clipboard.writeText(url);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  return (
    <Tooltip text={isCopied ? "لینک کپی شد" : "اشتراک گذاری"}>
      <button
        onClick={handleCopyUrl}
        className="cursor-pointer size-8 text-sm hover:*:text-lg *:duration-150 *:transition-all active:*:text-sm flex-center border border-neutral-300 rounded-lg text-slate-700"
      >
        <FaShare />
      </button>
    </Tooltip>
  );
};

export default CopyUrl;
