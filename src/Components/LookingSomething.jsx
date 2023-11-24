import React from "react";
import { Button } from "@nextui-org/react";

const LookingSomething = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('public/images/mateo-krossler-KsOWP1sH6W4-unsplash.jpg')",
      }}
    >
      <div className="text-center">
        <h2 className="text-3xl text-white mb-4 font-bold">
          THE BEST OF NATIONAL GEOGRAPHIC DELIVERED TO YOUR INBOX
        </h2>
        <p className="text-xl text-white mb-6">
          Sign up for more inspiring photos, stories, and special offers from
          National Geographic.
        </p>
        <Button color="primary" auto ghost>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default LookingSomething;
