import React, { useState } from "react";
import { menuItems } from "../route/routes";
import NavButton from "./nav-button";
import NavHeader from "./nav-header";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handlerClick = (item: string) => {
    setActiveItem(item !== activeItem ? item : "");
  };

  const isSubNavOpen = (item: string, items: string[]) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavHeader />
        {menuItems.map((item) => (
          <>
            {!item.items && (
              <NavButton
                onClick={handlerClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
              />
            )}

            {item.items && (
              <>
                <NavButton
                  onClick={handlerClick}
                  name={item.name}
                  icon={item.icon}
                  isActive={activeItem === item.name}
                  hasSubNav={!!item.items}
                />
                <div
                  className={`sub-nav ${
                    isSubNavOpen(item.name, item.items) ? "open" : ""
                  }`}
                >
                  {item.items.map((subItem) => (
                    <NavButton
                      onClick={handlerClick}
                      name={subItem}
                      isActive={activeItem === subItem}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
