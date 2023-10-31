"use client";
import React, { useState } from "react";
import CustomIcon from "./CustomIcon";
import { Bell, Phone, Search, UserCheck2 } from "lucide-react";
import BlueDot from "./BlueDot";

const navItems = [
  {
    id: 1,
    name: "contact",
    icon: <Phone strokeWidth={1.2} />,
  },
  {
    id: 2,
    name: "notification",
    icon: <Bell strokeWidth={1.2} />,
  },
  {
    id: 3,
    name: "profile",
    icon: <UserCheck2 strokeWidth={1.2} />,
  },
];

const TabItem = ({ name }: { name: string }) => {
  return (
    <div className="cursor-pointer border-2 border-white bg-gray-100 h-12 min-w-28 w-32 rounded-full text-black text-sm flex items-center justify-center gap-2">
      {name === "My Heart" && <BlueDot />} {name}
    </div>
  );
};

const Topbar = () => {
  const [selectedItem, setSelectedItem] = useState("contact");
  return (
    <div className="fixed w-screen top-6 h-14 bg-whie flex items-center px-8">
      <div className="border border-white w-12 h-12 rounded-full flex items-center justify-center">
        <div className="border border-gray-100 bg-white w-11 h-11 rounded-full flex items-center justify-center">
          <p className="font-bold text-xl inline -ml-2">
            M <span className="text-[#0067FF] absolute top-2">+</span>
          </p>
        </div>
      </div>
      <div className="rounded-full bg-white h-6 flex items-center justify-center gap-1 ml-20">
        <TabItem name="Diagnose" />
        <TabItem name="My Heart" />
      </div>
      <div className="rounded-full  flex items-center justify-center gap-1 ml-96 h-12 bg-white w-80 relative">
        <input
          placeholder="search..."
          className="bg-gray-100 h-10 w-[19.5rem] p-2 px-5 ring-0 focus:ring-0 rounded-full text-sm"
        />
        <div className="w-9 h-9 rounded-full flex justify-center items-center right-2 absolute bg-white cursor-pointer">
          <Search strokeWidth={1.2} width={16} />
        </div>
      </div>
      <div className="flex rounded-full w-42 ml-32 h-6 bg-white justify-center items-center gap-1">
        {navItems.map((item) => {
          return (
            <CustomIcon
              key={item.name}
              name={item.name}
              icon={item.icon}
              selected={selectedItem}
              onClick={() => {
                setSelectedItem(item.name);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Topbar;
