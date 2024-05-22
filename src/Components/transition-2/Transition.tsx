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
export async function launchAnimate() {
  const bubbles = document.getElementById("bubbles");

  bubbles?.classList.add("show");

  // setTimeout(() => navigate(to), 1000);

  const timeout1 = new Promise<void>((resolve) => {
    setTimeout(() => {
      bubbles?.classList.remove("show");
      bubbles?.classList.add("hide");
      resolve();
    }, 1200);
  });
  const timeout2 = new Promise<void>((resolve) => {
    setTimeout(() => {
      bubbles?.classList.remove("hide");
      resolve();
    }, 2400);
  });
  await timeout1;

}

function Transition() {
  return <Bubbles></Bubbles>;
}

export default Transition;
