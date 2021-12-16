import React, { FunctionComponent } from "react";
import { Employees } from "../utils/types";
import Image from "next/image";
import EmployeeState from "./EmployeeState";
const EmployeeCard: FunctionComponent<Employees> = ({
  avatar,
  name,
  state,
  createdAt,
  gender,
  phone,
  id,
}) => {
  return (
    <div className="outline-blue-200 outline-2 outline rounded-md flex p-3 bg-slate-50 shadow-md hover:ring hover:ring-offset-4 hover:ring-blue-400 cursor-pointer flex-wrap w-full">
      <div className="p-3">
        <Image
          src={avatar}
          alt={name}
          width="80"
          height="80"
          className="rounded-full object-fil "
        />
      </div>

      <div className="flex flex-col px-3">
        <h3 className="text-3xl text-gray-800 font-semibold flex flex-wrap truncate  h-auto leading-normal">
          {name}
        </h3>
        <p className="font-medium text-gray-600 text-md block mb-2">
          <svg
            className="w-6 h-6 mr-2 inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          {phone}
        </p>
        <EmployeeState id={id} state={state} />
      </div>
    </div>
  );
};

export default EmployeeCard;
