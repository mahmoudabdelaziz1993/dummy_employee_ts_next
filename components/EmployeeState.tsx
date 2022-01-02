import React, { FunctionComponent } from "react";
import { Direction, ChangeState } from "../utils/types";
import { useRouter } from "next/router";

const EmployeeState: FunctionComponent<ChangeState> = ({ id, state }) => {
  const router = useRouter();

  // @ts-ignore
  let enumJunkArr = Object.keys(Direction).map((key) => Direction[key]);
  let keys = enumJunkArr.filter((v) => typeof v === "string");
  let Color = [
    {
      active: "ring-red-300	 text-red-300	",
      unactive: "text-gary-300 ring-transparent",
    },
    {
      active: "ring-emerald-300	 text-emerald-300	",
      unactive: "text-gary-300 ring-transparent",
    },
    {
      active: "ring-cyan-300	 text-cyan-300	",
      unactive: "text-gary-300 ring-transparent",
    },
    {
      active: "ring-violet-300	 text-violet-300	",
      unactive: "text-gary-300 ring-transparent",
    },
    {
      active: "ring-pink-300	 text-pink-300	",
      unactive: "text-gary-300 ring-transparent",
    },
  ];

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
    <div className="flex flex-wrap gap-3 py-2">
      {keys.map((key, index) => (
        <div
          key={key}
          className={
            `ring  py-1 bg-slate-500 ring-offset-2 shadow-lg  hover:ring-gray-500 text-xs px-1 rounded-md font-semibold ` +
            ` ${
              key == Direction[state]
                ? Color[index].active
                : Color[index].unactive
            }`
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
