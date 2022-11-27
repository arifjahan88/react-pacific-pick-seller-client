import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1127224298/photo/lets-start-adventure.jpg?s=170667a&w=0&k=20&c=OIJEYXr6R2zCbITx9C2ElJYsthLro3bc34lJSY9XKcQ=")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              This is a buy and sell website. you cal buy your product and sell this into this. <br /> So, Hurry up to
              sell or buy your products.
            </p>
            <button className="btn btn-primary btn-sm">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
