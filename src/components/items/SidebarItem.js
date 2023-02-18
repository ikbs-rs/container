import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function SidebarItem(props) {
  const { name, icon, children } = props.data;
  const [isOpen, setIsOpen] = React.useState(false);

  const hasChildren = children && children.length;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className="item">
        {hasChildren && (
          <div className="toggle" onClick={handleToggle}>
            <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
          </div>
        )}
        <div className="name">{name}</div>
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      {hasChildren && (
        <ul className={`children ${isOpen ? "is-open" : ""}`}>
          {children.map((child, index) => (
            <SidebarItem key={index} data={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default SidebarItem;
