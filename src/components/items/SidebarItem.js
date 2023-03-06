import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function SidebarItem(props) {
  console.log(props.data)
  const { TITLE, ICON, children , menuid} = props.data;
  const [isOpen, setIsOpen] = React.useState(false);

  const hasChildren = children && children.length;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className="item" key={menuid}>
        {hasChildren && (
          <div className="toggle" onClick={handleToggle}>
            <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
          </div>
        )}
        <div className="name">{TITLE}</div>
        <div className="icon">
          <FontAwesomeIcon icon={ICON} />
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
