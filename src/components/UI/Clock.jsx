import  { useState, useEffect } from "react";

export const Clock = () => {


//Contador regresivo que calcula y muestra los días, horas, minutos y segundos restantes hasta una fecha objetivo específica."

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("Oct 30, 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center text-black mb-4 gap-4">
        <div className="flex items-center flex-col  mb-6 md:mb-0">
          <h1 className="text-xl md:text-3xl font-semibold">{days}</h1>
          <h4 className="text-xl md:text-2xl ">Dias</h4>
        </div>
        <span className="text-xl md:text-2xl font-semibold ">:</span>
        <div className="flex items-center flex-col gap-2 mb-4 md:mb-0">
          <h1 className="text-xl md:text-3xl ml-2 font-semibold">{hours}</h1>
          <h4 className="text-xl md:text-2xl ">Horas</h4>
        </div>
        <span className="text-xl md:text-2xl font-semibold">:</span>
        <div className="flex items-center flex-col gap-2 mb-4 md:mb-0">
          <h1 className="text-xl md:text-3xl ml-2 font-semibold">{minutes}</h1>
          <h4 className="text-xl md:text-2xl ">Minutos</h4>
        </div>
        <span className="text-xl md:text-2xl font-semibold">:</span>
        <div className="flex items-center flex-col gap-2">
          <h1 className="text-xl md:text-3xl ml-2 font-semibold">{seconds}</h1>
          <h4 className="text-xl md:text-2xl ml-2">Segundos</h4>
        </div>
      </div>
    </>
  );
};
