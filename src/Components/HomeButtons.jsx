import React from "react";
import { Button } from "@nextui-org/react";

const HomeButtons = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <Button auto bordered color="primary" className="mb-2">
            <div className="flex flex-col items-center">
              <img
                src="/path-to-your-icon.png"
                alt="Law Guide"
                className="h-12 w-12"
              />
              <span>Law Guide</span>
            </div>
          </Button>
          <span className="text-xs">Find legal information</span>
        </div>
      </div>
    </div>
  );
};

export default HomeButtons;
