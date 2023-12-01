import { Button, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faSearch,
  faNewspaper,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

const HomeButtons = () => {
  const buttons = [
    { label: "Law Assistance", icon: faGavel, path: '/not-found' },
    { label: "Course Finder", icon: faSearch, path: '/not-found' },
    { label: "News", icon: faNewspaper, path: '/not-found' },
    { label: "Translation Assistance", icon: faLanguage, path: '/translate' },
  ];

  return (
    <div className="p-4 flex justify-center">
      <div className="grid grid-cols-4 gap-4">
        {buttons.map((button, index) => (
          <Link href={button.path} key={index} className="flex flex-col items-center text-danger">
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

