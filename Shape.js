import * as React from "React";

export function Shape({ name, x, y, width, height }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
      data-name={name}
    ></div>
  );
}
