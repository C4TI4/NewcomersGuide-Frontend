// HomeButtons.jsx
import { Button, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faSearch,
  faNewspaper,
  faLanguage,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const HomeButtons = () => {
  const buttons = [
    { label: "Law Assistance", icon: faGavel, path: "/law-assistance" },
    { label: "Course Finder", icon: faSearch, path: "/course-finder" },
    { label: "News", icon: faNewspaper, path: "/news" },
    { label: "Translation Assistance", icon: faLanguage, path: "/translate" },
    { label: "Community Forum", icon: faComments, path: "/forum" },
  ];

  return (
    <div className="p-4 flex justify-center">
      <div className="grid grid-cols-5 gap-4">
        {" "}
        {/* Updated to grid-cols-5 */}
        {buttons.map((button, index) => (
          <Link
            href={button.path}
            key={index}
            className="flex flex-col items-center text-center"
          >
            <Button
              auto
              bordered
              color="primary"
              className="mb-2 w-20 h-20 rounded-full flex items-center justify-center bg-[#DC1A82] shadow-lg"
            >
              <FontAwesomeIcon icon={button.icon} size="3x" />
            </Button>
            <span className="text-xs">{button.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeButtons;
