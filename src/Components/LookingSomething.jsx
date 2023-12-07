import React from "react";
import { Button } from "@nextui-org/react";

const LookingSomething = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 flex items-center justify-center"
      style={{
        backgroundImage:

          "url('src/assets/Images/images/mateo-krossler-KsOWP1sH6W4-unsplash.jpg')",


      }}
    >
      <div className="text-center">
        <h2 className="text-3xl text-white mb-4 font-bold">
          DISCOVER YOUR NEW LIFE IN GERMANY
        </h2>
        <p className="text-xl text-white mb-6">
          Join our community and get the latest updates on laws, culture, and
          events in Germany. Tailored for newcomers like you.
        </p>
        <Button
          color="primary"
          auto
          ghost
          style={{ backgroundColor: "#DC1A82" }}
        >
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default LookingSomething;
