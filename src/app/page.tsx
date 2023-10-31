"use client";
import BlueDot from "@/components/BlueDot";
import MyBodyCondition from "@/components/MyBodyCondition";
import MySchedule from "@/components/MySchedule";
import Pin from "@/components/Pin";
import {
  Activity,
  Bold,
  Droplet,
  Droplets,
  Heart,
  HeartPulse,
  Stethoscope,
  Syringe,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const heartStatus = [
  {
    name: "Hemoglobin",
    normalRange: "11 - 16",
    result: "12 g/dl",
    range: 10,
    icon: <Droplets strokeWidth={1} />,
  },
  {
    name: "Heart Rate",
    normalRange: "60-100",
    result: "90 bpm",
    range: 13,
    icon: <Stethoscope strokeWidth={1} />,
  },
  {
    name: "Blood Count",
    normalRange: "4500-11,000",
    result: "9000 mm3",
    range: 12,
    icon: <HeartPulse strokeWidth={1} />,
  },
  {
    name: "Glucose Level",
    normalRange: "70-100",
    result: "70 mg/dL",
    range: 8,
    icon: <Activity strokeWidth={1} />,
  },
];

const HeartCondition = ({
  name,
  normalRange,
  result,
  range,
  icon,
  selectedItem,
  onClick,
}: {
  name: string;
  normalRange: string;
  result: string;
  range: number;
  icon: React.JSX.Element;
  selectedItem: string;
  onClick: () => void;
}) => {
  return (
    <div
      className={`border rounded-2xl ${
        name === selectedItem ? "bg-[#0067FF] text-white" : "bg-white"
      } p-1 cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex gap-2 p-2">
        <div
          className={`w-12 rounded-2xl h-12  p-2 grid place-items-center ${
            selectedItem === name
              ? "text-gray-600 bg-white"
              : "text-gray-500 bg-gray-100"
          }`}
        >
          {icon}
        </div>
        <div className="p-2 ">
          <p
            className={`text-xs ${
              name === selectedItem ? "text-white" : "text-gray-600"
            } `}
          >
            {name}
          </p>
          <p className="text-xs font-medium">{normalRange}</p>
        </div>
      </div>
      <div
        className={`w-full ${
          name === selectedItem ? "bg-white" : "bg-gray-100"
        }  h-16 mt-1.5 rounded-2xl py-1 px-2 flex`}
      >
        <div className="flex-grow py-4 flex gap-1">
          <span
            className={`${selectedItem === name ? "text-[#0067FF] " : ""} `}
          >
            {icon}
          </span>
          <p className="flex leading-[1.3rem]">
            {[...Array(14)].map((_, index) => {
              return (
                <span
                  key={index}
                  className={`${
                    index >= range
                      ? `${name === selectedItem ? "text-black" : "text-white"}`
                      : `${
                          name === selectedItem
                            ? "text-[#0067FF]"
                            : "text-black"
                        }`
                  }`}
                >
                  |
                </span>
              );
            })}
          </p>
        </div>
        <div
          className={`w-1/3 ${
            selectedItem === name ? "bg-[#0067FF] text-white" : "bg-gray-200"
          }  rounded-2xl text-sm items-center justify-center flex font-medium`}
        >
          <p className="text-xs font-medium break-words text-center -mt-2">
            {result.split(" ")[0]} <br />
            <span className="absolute text-[0.5rem] ml-[-0.4rem] mt-[-0.3rem]">
              {result.split(" ")[1]}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [selectedItem, setSelectedItem] = useState("Heart Rate");

  return (
    <main className="bg-gray-100 w-screen h-screen overflow-hidden">
      <div className="bg-hite w-[90vw] h-[80vh] flex mt-[16vh] ml-[8vw]">
        <div className="ml-12 px-5 flex-1 ">
          <p className="text-5xl">
            Overview <br /> Conditions
          </p>
          <div className="h-[60vh] mt-24 relative">
            <div className="bg-[#F5F5F5] border-2 border-white w-80 h-80 rounded-full flex justify-center items-center">
              <div className="bg-[#F5F5F5] border-2 border-white w-[17rem] h-[17rem] rounded-full flex justify-center items-center"></div>
              <Image
                src="/assets/human-heart.png"
                alt="heart"
                width={400}
                height={400}
                className="absolute -top-20"
              />
            </div>
            <Pin position="left-40 -top-4" />
            <Pin position="left-40 top-20" />
            <Pin position="left-12 top-40" />
            <Pin position="left-56 top-64" />
            <div className="backdrop-blur-2xl bg-white/30  border-white w-32 h-20 p-2 rounded-xl absolute top-56 border-2 left-10 flex gap-2">
              <Heart
                strokeWidth={1.2}
                width={14}
                color="#0067FF"
                fill="#0067FF"
              />
              <div>
                <p className="text-xs">Heart Rate</p>
                <p className="font-medium text-sm">90 bpm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex-1">
          <div className="grid grid-cols-3 grid-rows-3 bg-re\d-400 w-full h-full gap-6">
            <div className="bg-gren-300 col-span-2 row-span-2">
              <div className="flex items-center p-2  gap-2">
                <BlueDot />
                <p className="leading-4">My Heart Condition</p>
              </div>
              <div className="grid grid-cols-2 gap-4 grid-rows-2 h-80">
                {heartStatus.map((status, index) => {
                  return (
                    <HeartCondition
                      key={index}
                      name={status.name}
                      normalRange={status.normalRange}
                      result={status.result}
                      range={status.range}
                      icon={status.icon}
                      selectedItem={selectedItem}
                      onClick={() => {
                        setSelectedItem(status.name);
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div className="bg--300 row-span-2">
              <div className="flex items-center p-2  gap-2">
                <BlueDot />
                <p className="leading-4">My Schedule</p>
              </div>
              <MySchedule />
            </div>
            <div className="bg--300 col-span-3">
              <div className="flex items-center p-2  gap-2">
                <BlueDot />
                <p className="leading-4">My Body Condition</p>
              </div>
              <MyBodyCondition />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
