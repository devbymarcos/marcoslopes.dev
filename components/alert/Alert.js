import { useEffect, useState } from "react";

export const Alert = ({ alertObj: { active, message, type } }) => {
  if (!active) return null;
  if (type === "success") {
    return (
      <>
        <div className="max-w-xs animate-open-alert rounded fixed z-50  top-10 right-3   bg-green-600 rounded-b text-white font-bold p-5">
          {message}
          <span className="animate-frame-time  absolute left-0 bottom-0 bg-slate-700    h-1"></span>
        </div>
      </>
    );
  }

  if (type === "error") {
    return (
      <>
        <div className=" max-w-xs animate-open-alert text-white rounded absolute  top-10 right-3  bg-red-600 p-5">
          {message}
          <span className="animate-frame-time  absolute left-0 bottom-0 bg-slate-700  h-1"></span>
        </div>
      </>
    );
  }

  if (type === "info") {
    return (
      <>
        <div className="max-w-xs animate-open-alert rounded absolute  top-10 right-3  bg-cyan-600 p-5">
          {message}
          <span className="animate-frame-time  absolute left-0 bottom-0 bg-slate-700    h-1"></span>
        </div>
      </>
    );
  }
};

export const useAlert = () => {
  const [alertObj, setAlertObj] = useState({
    active: true,
    message: "estamos aqui",
    type: "success",
  });

  useEffect(() => {
    let time;
    if (alertObj.active) {
      // time = setTimeout(() => {
      //   setAlertObj({
      //     active: false,
      //     message: "",
      //     type: "",
      //   });
      // }, 3000);
    }
    return () => {
      clearTimeout(time);
    };
  }, [alertObj]);

  return {
    alertObj,
    setAlertObj,
  };
};
