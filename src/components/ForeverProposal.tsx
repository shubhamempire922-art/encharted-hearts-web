import { useState } from "react";

const ForeverProposal = () => {
  const [accepted, setAccepted] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveNoButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    setPosition({ x, y });
  };

  return (
    <div
      className="text-center my-16 p-8 rounded-3xl relative"
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      {!accepted ? (
        <>
          <h2 className="text-4xl mb-4">
            💖 One Last Question 💖
          </h2>

          <p className="text-xl mb-8">
            Will You Stay With Me Forever?
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              alignItems: "center",
              minHeight: "120px",
              position: "relative",
            }}
          >
            <button
              onClick={() => setAccepted(true)}
              className="px-8 py-4 rounded-full text-xl"
            >
              YES ❤️
            </button>

            <button
              onMouseEnter={moveNoButton}
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: "all 0.2s ease",
                position: "relative",
              }}
              className="px-8 py-4 rounded-full text-xl"
            >
              NO 😅
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-5xl mb-4">
            ❤️ I LOVE YOU SAKU ❤️
          </h1>

          <p className="text-2xl">
            Forever & Always ✨
          </p>

          <div className="mt-6 text-5xl">
            🎉🎊💖✨🌹
          </div>
        </>
      )}
    </div>
  );
};

export default ForeverProposal;