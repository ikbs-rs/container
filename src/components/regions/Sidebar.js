import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "../items/SidebarItem";

const menuData = [
  {
    name: "Item 1",
    icon: faChevronRight,
    children: [
      {
        name: "Child Item 1",
      },
      {
        name: "Child Item 2",
      },
    ],
  },
  {
    name: "Item 2",
    icon: faChevronRight,
  },
  {
    name: "Item 3",
    icon: faChevronRight,
    children: [
      {
        name: "Child Item 3",
      },
      {
        name: "Child Item 4",
        children: [
          {
            name: "Grandchild Item 1",
          },
          {
            name: "Grandchild Item 2",
          },
        ],
      },
    ],
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar">
      <ul>
        {menuData.map((item, index) => (
          <SidebarItem key={index} data={item} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
