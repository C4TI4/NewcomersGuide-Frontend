import React from "react";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faSearch,
  faNewspaper,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

const HomeButtons = () => {
  const buttons = [
    { label: "Law Assistance", icon: faGavel },
    { label: "Course Finder", icon: faSearch },
    { label: "News", icon: faNewspaper },
    { label: "Translation Assistance", icon: faLanguage },
  ];

  return (
    <div className="p-4 flex justify-center">
      <div className="grid grid-cols-4 gap-4">
        {buttons.map((button, index) => (
          <div key={index} className="flex flex-col items-center">
            <Button
              auto
              bordered
              color="primary"
              className="mb-2 w-20 h-20 rounded-full flex items-center justify-center bg-[#DC1A82] shadow-lg"
            >
              <FontAwesomeIcon icon={button.icon} size="3x" />
            </Button>
            <span className="text-xs">{button.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeButtons;
