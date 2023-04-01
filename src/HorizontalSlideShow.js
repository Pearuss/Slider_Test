import React, { useEffect } from "react";
import "./scss/Slide.scss";

function HorizontalSlideShow({ data }) {
  useEffect(() => {
    const track = document.querySelector("#slideshow");

    track.addEventListener("click", (e) => {
      const targetSlide = e.target.closest(".card");
      const currentSlide = track.querySelector(".center");
      if (!targetSlide) return;
      if (!currentSlide) return;
      const replaceCLass = targetSlide.classList[1];
      targetSlide.classList.remove(replaceCLass);
      currentSlide.classList.remove("center");
      targetSlide.classList.add("center");
      currentSlide.classList.add(replaceCLass);
    });
  }, []);
  return (
    <ul id="slideshow">
      {data[1]?.url && (
        <li className="card back1">
          <img className="card__photo" src={data[1].url} alt="1" />
          <span className="desc">{data[1].desc}</span>
        </li>
      )}
      {data[2]?.url && (
        <li class="card back2">
          <img className="card__photo" src={data[2].url} alt="2" />
          <span className="desc">{data[2].desc}</span>
        </li>
      )}
      {data[0]?.url && <li class="card center">
        <img className="card__photo" src={data[0].url} alt="3" />
        <span className="desc">{data[0].desc}</span>
      </li>}
      {data[3]?.url && (
        <li class="card back3">
          <img className="card__photo" src={data[3].url} alt="4" />
          <span className="desc">{data[3].desc}</span>
        </li>
      )}
      {data[4]?.url && (
        <li class="card back4">
          <img className="card__photo" src={data[4].url} alt="5" />
          <span className="desc">{data[4].desc}</span>
        </li>
      )}
    </ul>
  );
}

export default HorizontalSlideShow;
