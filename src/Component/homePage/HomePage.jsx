import React from "react";
import img from "../../assets/hero_img.jpg";
const HomePage = () => {
  return (
    <div
      className="hero bg-base-200 min-h-[70vh]  container mx-auto mt-5 my-5
    "
    >
      <div className="hero-content flex-col lg:flex-row-reverse w-full px-30 py-10 justify-between">
        <img src={img} className="w-[500px]" />
        <div>
          <p className="py-6 text-3xl font-semibold">
            Books to freshen up <br /> your bookshelf
          </p>
          <button className="btn btn-success">View The list</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
