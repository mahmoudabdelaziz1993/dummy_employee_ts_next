import React, { FunctionComponent } from "react";
import { Direction, ChangeState } from "../utils/types";
import { useRouter } from "next/router";

const EmployeeState: FunctionComponent<ChangeState> = ({ id, state }) => {
  const router = useRouter();

  // @ts-ignore
  let enumJunkArr = Object.keys(Direction).map((key) => Direction[key]);
  let keys = enumJunkArr.filter((v) => typeof v === "string");

  const handleChange = async (parms: ChangeState) => {
    const response = await fetch(
      `https://61bb5b4ee943920017784e4e.mockapi.io/employees/${parms.id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",

          "Access-Control-Allow-Origin": "*",
          Accept: "*/*",
          "Access-Control-Allow-Methods": "*",

          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ state: parms.state }),
      }
    );
    response.status == 200 && router.reload();
  };
  return (
    <div className="flex py-2 gap-3 flex-wrap">
      {keys.map((key, index) => (
        <div
          key={key}
          className={
            key == Direction[state]
              ? "ring  ring-blue-400 bg-slate-200 ring-offset-2 shadow-lg  hover:ring-gray-500 text-blue-400 text-xs px-1 rounded-md font-semibold "
              : "ring  ring-transparent bg-slate-200 ring-offset-2 shadow-lg  hover:ring-gray-500 text-gray-500 text-xs px-1 rounded-md font-semibold "
          }
          onClick={() => handleChange({ id, state: index + 1 })}
        >
          {key}
        </div>
      ))}
    </div>
  );
};

export default EmployeeState;
