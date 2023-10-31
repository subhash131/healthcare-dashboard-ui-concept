import Image from "next/image";
import React from "react";

const MyBodyCondition = () => {
  return (
    <div className="w-[60vw] bg--900 h-36 flex gap-4">
      <div className="bg-gray-100 border-2 border-white rounded-2xl w-36 flex justify-center items-center overflow-hidden">
        <Image
          src="/assets/blood.png"
          width={400}
          height={400}
          alt="organ image"
          className="h-full w-36 object-cover"
        />
      </div>
      <div className="bg-gray-100 border-2 border-white rounded-2xl w-36 flex justify-center items-center ">
        <Image
          src="/assets/eye.png"
          width={400}
          height={400}
          alt="organ image"
          className="h-40 w-36 object-cover mr-12"
        />
      </div>
      <div className="bg-gray-100 border-2 border-white rounded-2xl w-36 flex justify-center items-center ">
        <Image
          src="/assets/human-heart.png"
          width={400}
          height={400}
          alt="organ image"
          className="h-30 w-36 object-cover"
        />
      </div>

      <div className="bg-gray-100 border-2 border-white rounded-2xl w-36 flex justify-center items-center ">
        <Image
          src="/assets/stomach.png"
          width={400}
          height={400}
          alt="organ image"
          className="h-28 w-36 object-cover"
        />
      </div>
    </div>
  );
};

export default MyBodyCondition;
