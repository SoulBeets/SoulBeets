import { useRef } from "react";
import "./App.css";
import { useEffect } from "react";
import { Canvg } from "canvg";

const Logo = (size) => {
  const svgRef = useRef(null);
  const width = size;
  const height = size;

  useEffect(() => {
    const audioData = [10, 20, 30, 20, 10, 20, 30, 40, 30, 20, 30, 20, 10];
    const count = audioData.length;

    const aviableWidth = width * 0.8;
    const aviableHeight = width * 0.7;
    const startX = width * 0.1;

    const itemWidth = aviableWidth / ((count - 1) * 0.8 + count);
    const itemInterval = itemWidth * 0.8;
    const radis = (15 * size) / 512;

    let background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    background.setAttribute("x", 0);
    background.setAttribute("y", 0);
    background.setAttribute("width", width);
    background.setAttribute("height", height);
    background.setAttribute("fill", "#241b35");
    svgRef.current.appendChild(background);

    for (let i = 0; i < audioData.length; i++) {
      const itemHeight = (audioData[i] * aviableHeight) / 40;
      const x = startX + i * (itemWidth + itemInterval);
      const y = (height - itemHeight) / 2;

      let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.setAttribute("width", itemWidth);
      rect.setAttribute("height", itemHeight);
      rect.setAttribute("rx", radis);
      rect.setAttribute("ry", radis);
      rect.setAttribute("fill", "#6c35de");
      svgRef.current.appendChild(rect);
    }

    const textSize = width * 0.275;

    const firstTextX = width * 0.1;
    const firstTextY = height * 0.5;
    const firstTextTag = document.createElementNS("http://www.w3.org/2000/svg", "text");
    firstTextTag.setAttribute("x", firstTextX);
    firstTextTag.setAttribute("y", firstTextY);
    firstTextTag.setAttribute("fill", "#ffffff");
    firstTextTag.setAttribute("transform", `rotate(-10 ${firstTextX} ${firstTextY})`);
    firstTextTag.innerHTML = "Soul";
    firstTextTag.style.font = `normal ${textSize}px SimpleNote`;

    const secondTextX = width * 0.25;
    const secondTextY = height * 0.72;
    const secondTextTag = document.createElementNS("http://www.w3.org/2000/svg", "text");
    secondTextTag.setAttribute("x", secondTextX);
    secondTextTag.setAttribute("y", secondTextY);
    secondTextTag.setAttribute("fill", "#ffffff");
    secondTextTag.setAttribute("transform", `rotate(-10 ${secondTextX} ${secondTextY})`);
    secondTextTag.innerHTML = "Beets";
    secondTextTag.style.font = `normal ${textSize}px SimpleNote`;

    svgRef.current.appendChild(firstTextTag);
    svgRef.current.appendChild(secondTextTag);
  }, [width, height]);

  return (
    <svg
      id={`logo-${size}`}
      ref={svgRef}
      style={{ width, height, backgroundColor: "black" }}
      viewBox={`0 0 ${width} ${height}`}
    ></svg>
  );
};

const sizes = [64, 128, 194, 256, 512];

function App() {
  useEffect(() => {
    const render = async () => {
      for (const size of sizes) {
        const logo = document.getElementById(`logo-${size}`);
        console.log(logo);

        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        console.log(logo.outerHTML);
        const v = await Canvg.fromString(ctx, logo.outerHTML);
        v.start();
        document.body.appendChild(canvas);
      }
    };
    render();
  }, []);

  return (
    <>
      {sizes.map((size) => Logo(size))}
    </>
  );
}

export default App;
