import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

const DoctorCard = ({ imageUrl, name }: { imageUrl: string; name: string }) => {
  return (
    <div className="w-full bg-white rounded-2xl flex p-1 items-center text-gray-700">
      <div className="w-8 h-8 rounded-xl bg-white grid place-items-center ">
        <Image
          width={100}
          height={100}
          src={imageUrl}
          alt="doctor image"
          className="object-cover h-full w-full rounded-xl"
        />
      </div>
      <p className="text-xs px-3 font-medium">{name}</p>
    </div>
  );
};

const MySchedule = () => {
  return (
    <div className="w-full p-2 bg-white rounded-3xl border h-80">
      <div className="flex gap-2 p-2">
        <div
          className={`w-12 rounded-2xl h-12  p-2 grid place-items-center text-gray-700 bg-gray-100
          `}
        >
          <Calendar strokeWidth={1.2} />
        </div>
        <div className="p-2 ">
          <p className={`text-xs text-gray-600 `}>Next Checkup</p>
          <p className="text-sm font-normal">Tue, 31 Oct</p>
        </div>
      </div>
      <div className="w-full bg-gray-100 rounded-full flex p-1 justify-center items-center text-gray-700 mb-2">
        <div className="w-8 h-8 rounded-full bg-white grid place-items-center cursor-pointer">
          <ArrowLeft strokeWidth={1.2} />
        </div>
        <p className="text-xs px-3">20 Nov, 2023</p>
        <div className="w-8 h-8 rounded-full bg-white grid place-items-center cursor-pointer">
          <ArrowRight strokeWidth={1.2} />
        </div>
      </div>
      <div className="bg-gray-200 w-full  rounded-2xl p-1 flex flex-col gap-2">
        <DoctorCard
          imageUrl="https://t4.ftcdn.net/jpg/02/60/04/09/240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
          name="Subhash Nayak"
        />
        <DoctorCard
          imageUrl="https://t4.ftcdn.net/jpg/03/20/52/31/240_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
          name="Trent Sawachi"
        />
        <DoctorCard
          imageUrl="https://t3.ftcdn.net/jpg/01/30/45/54/240_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg"
          name="David Miller"
        />
      </div>
      <div className="bg-[#0067FF] p-2 flex text-white rounded-full mt-1 items-center text-sm">
        <label className="flex-grow">Consult Now</label>
        <ArrowRight strokeWidth={1.2} />
      </div>
    </div>
  );
};

export default MySchedule;
