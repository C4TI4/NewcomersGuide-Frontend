import { Card, } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const extractLinks = (url) => {
    const start = url.indexOf('https://www.') + 12;
    const end = url.indexOf('.de');
    return url.substring(start, end);
  };

const Sidebar = ({ usefulLinks }) => {
  return (
    <Card className="sidebar w/3-4 mr-12 sticky top-0">
      <h3 className="font-bold text-xl text-danger">Useful Links</h3>
      <ul>
        {usefulLinks.map((links, index) => (
          <li key={index}>
            <h4 className="font-bold text-lg italic my-2">{links.title}</h4>
            <ul>
              {links.url.map((url, urlIndex) => (
                <li key={urlIndex}>
                  <Link to={url} href={url} target="_blank" rel="noopener noreferrer">
                  {extractLinks(url)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Sidebar;
