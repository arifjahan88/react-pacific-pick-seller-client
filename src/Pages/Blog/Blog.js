import React from "react";

const Blog = () => {
  return (
    <div className="lg:mt-10">
      <div className="grid grid-cols-1 justify-items-center">
        <div className="m-5 bg-sky-50 p-7 rounded-lg lg:w-4/6">
          <h2 className="text-2xl font-mono font-bold text-sky-600">
            What are the different ways to manage a state in a React application?
          </h2>
          <p className="font-serif text-pink-500 mt-2">
            Which React state management is the best? Use of React The greatest alternative for local state management
            is the state. The most well-liked global state solutions are Redux, MobX, and the built-in Context API. Your
            decision will be based on the scope of your project, your requirements, and the
          </p>
        </div>
        <div className="m-5 bg-sky-50 p-7 rounded-lg lg:w-4/6">
          <h2 className="text-2xl font-mono font-bold text-sky-600"> How does prototypical inheritance work?</h2>
          <p className="font-serif text-pink-500 mt-2">
            Javascript has a feature called prototypal inheritance that allows you to add methods and attributes to
            objects. It is a technique that allows an item to take on the attributes and operations of another object.
            Traditionally, we utilize Object. getPrototypeOf and Object to obtain and modify an object's [[Prototype]].
          </p>
        </div>
        <div className="m-5 bg-sky-50 p-7 rounded-lg lg:w-4/6">
          <h2 className="text-2xl font-mono font-bold text-sky-600">
            What is a unit test? Why should we write unit tests?
          </h2>
          <p className="font-serif text-pink-500 mt-2">
            Unit testing's primary goal is to separate written code for testing to see if it functions as intended. Unit
            testing is a crucial stage in the development process because, when done properly, it may aid in finding
            early code issues that could be more challenging to identify in subsequent testing phases.
          </p>
        </div>
        <div className="m-5 bg-sky-50 p-7 rounded-lg lg:w-4/6">
          <h2 className="text-2xl font-mono font-bold text-sky-600">React vs. Angular vs. Vue?</h2>
          <p className="font-serif text-pink-500 mt-2">
            Compared to Angular or React, Vue offers greater customizability and is therefore simpler to learn.
            Additionally, Vue and Angular and React overlap in terms of functionality, such as the use of components.
            Consequently, switching from any of the two to Vue is a simple alternative.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
