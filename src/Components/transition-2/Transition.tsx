import React from "react";

const duration = 1200;
const colorStart = "#4CAF50";
const colorEnd = "#ffffff";

const Bubbles = () => {
  return (
    <div id="bubbles">
      <div
        style={{ animationDuration: `${duration}ms`, background: colorStart }}
        className="bubbles__first"
      />
      <div
        style={{ animationDuration: `${duration}ms`, background: colorEnd }}
        className="bubbles__second"
      />
    </div>
  );
};
export function handleClicked(to, navigate) {
  const bubbles = document.getElementById("bubbles");

  bubbles?.classList.add("show");

  setTimeout(() => navigate(to), 1000);

  setTimeout(() => {
    bubbles?.classList.remove("show");
    bubbles?.classList.add("hide");
  }, 1200);

  setTimeout(() => bubbles?.classList.remove("hide"), 2400);
}

function Transition() {
 

  return <Bubbles></Bubbles>;
}

export default Transition;
