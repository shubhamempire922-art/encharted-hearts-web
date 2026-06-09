import { useEffect, useState } from "react";

const LoveCounter = () => {
  const startDate = new Date("2026-05-08T00:00:00");

  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor(
        (diff % (1000 * 60)) / 1000
      );

      setTimeTogether({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="text-center my-10 text-white"
      style={{
        background: "rgba(255,255,255,0.1)",
        padding: "25px",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "15px" }}>
        ❤️ Our Journey ❤️
      </h2>

      <h3>
        Since 8 May 2026 💖
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div>
          <h1>{timeTogether.days}</h1>
          <p>Days</p>
        </div>

        <div>
          <h1>{timeTogether.hours}</h1>
          <p>Hours</p>
        </div>

        <div>
          <h1>{timeTogether.minutes}</h1>
          <p>Minutes</p>
        </div>

        <div>
          <h1>{timeTogether.seconds}</h1>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default LoveCounter;