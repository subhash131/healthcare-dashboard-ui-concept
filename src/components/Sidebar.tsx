"use client";
import {
  FileBarChart2,
  HeartPulse,
  LogOut,
  MessagesSquare,
  Store,
  UserCircle2,
} from "lucide-react";
import React, { useState } from "react";
import CustomIcon from "./CustomIcon";

const items = [
  {
    id: 1,
    name: "dashboard",
    icon: <HeartPulse strokeWidth={1.2} />,
  },
  {
    id: 2,
    name: "messages",
    icon: <MessagesSquare strokeWidth={1.2} />,
  },
  {
    id: 3,
    name: "reports",
    icon: <FileBarChart2 strokeWidth={1.2} />,
  },
  {
    id: 4,
    name: "profile",
    icon: <UserCircle2 strokeWidth={1.2} />,
  },
  {
    id: 5,
    name: "more",
    icon: <Store strokeWidth={1.2} />,
  },
];

const Sidebar = () => {
  const [navItems, setNavItems] = useState<typeof items>(items);
  const [selectedItem, setSelectedItem] = useState<string>("dashboard");
  return (
    <div className="h-56 rounded-full fixed bg-white left-12 top-2/4 translate-y-[-50%] w-6 flex justify-center items-center flex-col gap-1">
      {navItems.map((item) => {
        return (
          <CustomIcon
            name={item.name}
            key={item.name}
            icon={item.icon}
            selected={selectedItem}
            onClick={() => {
              setSelectedItem(item.name);
            }}
          />
        );
      })}
    </div>
  );
};

export const Logout = () => {
  return (
    <div className="fixed top-[80%] left-9 ">
      <CustomIcon icon={<LogOut strokeWidth={1.2} />} name="logout" />
    </div>
  );
};

export default Sidebar;
