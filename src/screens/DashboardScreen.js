import React, { useEffect } from "react";
import employeesData from "../data/employeesData";
import Header from "../components/Header";
import CustomTitle from "../components/CustomTitle";
import UserList from "../components/UserList";

const DashboardScreen = ({ history }) => {
  const users = employeesData.user || [],
    isLoggedIn = localStorage.getItem("isLoggedIn") || false;

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/login");
    }
  }, [isLoggedIn, history]);

  return (
    <>
      <CustomTitle title="Appiness | Dashboard" content="List of users" />
      <Header />
      <UserList users={users} title="User's List" />
    </>
  );
};

export default DashboardScreen;
