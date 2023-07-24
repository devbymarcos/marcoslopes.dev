import { useEffect, useState } from "react";

export const Alert = ({ alertObj: { active, message, type } }) => {
  if (!active) return null;
  if (type === "success") {
    return (
      <>
        <div className="max-w-xs animate-open-alert  fixed z-50 rounded  top-10 right-3 bg-green-600  text-white font-bold p-5">
          {message}
          <span className="animate-frame-time  absolute left-0 bottom-0 bg-slate-700    h-1"></span>
        </div>
      </>
    );
  }

  if (type === "error") {
    return (
      <>
        <div className=" max-w-xs animate-open-alert text-white fixed z-50 rounded  top-10 right-3  bg-red-600 p-5">
          {message}
          <span className="animate-frame-time  absolute left-0 bottom-0 bg-slate-700    h-1"></span>
        </div>
      </>
    );
  }

  if (type === "info") {
    return (
      <>
        <div className="max-w-xs animate-open-alert fixed z-50 rounded  top-10 right-3  bg-cyan-600 p-5">
          {message}
          <span className="animate-frame-time  absolute left-0 bottom-0 bg-slate-700    h-1"></span>
        </div>
      </>
    );
  }
};

export const useAlert = () => {
  const [alertObj, setAlertObj] = useState({
    active: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    let time;
    if (alertObj.active) {
      time = setTimeout(() => {
        setAlertObj({
          active: false,
          message: "",
          type: "",
        });
      }, 1000);
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
