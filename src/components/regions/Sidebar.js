import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "../items/SidebarItem";
import axios from "axios";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get("http://localhost:8302/adm/menu/menu/1");
        setItems(response.data.items);
      } catch (error) {
        console.error(error);
        setItems([]);
      }
    };

    fetchMenuData();
  }, []);
  //console.kog(items)
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar">
      <ul>
        {items.map((item, index) => (
          <SidebarItem key={index} data={item} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
