import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import EmployeeCard from "../components/EmployeeCard";
import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";
import { Employees } from "../utils/types";

const Home: NextPage<{ employees: Employees[] }> = ({ employees }) => {
  console.log(employees);
  return (
    <div className="container mx-auto px-4 md:px-8 min-h-screen bg-slate-200 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
        {employees.map((employee) => (
          <EmployeeCard
            createdAt={employee.createdAt}
            name={employee.name}
            avatar={employee.avatar}
            key={employee.id}
            state={employee.state}
            id={employee.id}
            gender={employee.gender}
            phone={employee.phone}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const result = await fetch(
      "https://61bb5b4ee943920017784e4e.mockapi.io/employees"
    );
    if (result.status !== 200) {
      throw new Error("failed fetching data due Api or Network !!");
    }
    let employees: Employees[] = await result.json();

    return {
      props: {
        employees: [...employees],
      },
    };
  } catch (error) {
    res.statusCode = 400;
    return {
      props: {
        message: "failed fetching data due Api or Network !!",
      },
      revalidate: 3,
    };
  }
};
