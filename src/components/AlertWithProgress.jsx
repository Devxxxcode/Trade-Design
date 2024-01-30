import React, { useEffect, useState } from "react";
import { GoAlert } from "react-icons/go";
import { Alert, Progress } from "@material-tailwind/react";

const AlertWithProgress = ({
  alert,
  setAlert,
  message = "An Error Occurred",
  duration = 2000,
  startCount = 100,
  stopCount = 0,
  icon = <GoAlert/>,
  alertColor = "green",
  alertClassName = "",
  progressColor = "blue",
  progressClassName = ""
}) => {
  const intervalTime = duration / Math.abs(startCount - stopCount);
  const [count, setCount] = useState(startCount);

  useEffect(() => {
    if (alert) {
      const countDown = setInterval(() => {
        if (count === stopCount) {
          clearInterval(countDown);
          setAlert(false);
          setCount(startCount);
        } else {
          setCount((prevCount) =>
            startCount > stopCount ? prevCount - 1 : prevCount + 1
          );
        }
      }, intervalTime);

      return () => clearInterval(countDown);
    } else {
      setCount(startCount);
    }
  }, [count, intervalTime, alert]);

  return (
    <>
      {alert && (
        <div className="fixed top-0 !z-[99999999999] w-full">
          <Alert
            open={alert}
            onClose={() => setAlert(false)}
            animate={{
              mount: { y: 0 },
              unmount: { y: 100 },
            }}
            variant="filled"
            color={alertColor}
            className={` bg-red-700 text-white font-bold flex items-center rounded-none ${alertClassName}`}
            icon={icon}
          >
            {/* {message} */}
            <small dangerouslySetInnerHTML={{ __html: message }} />
          </Alert>
          <Progress
            value={count}
            size="sm"
            className={` !rounded-none h-1 ${progressClassName}`}
            variant="filled"
            color={progressColor}
          />
        </div>
      )}
    </>
  );
};

export default AlertWithProgress;
