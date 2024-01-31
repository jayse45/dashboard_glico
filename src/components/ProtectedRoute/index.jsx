import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  // const undefined = localStorage.getItem("1234567891");

  // if (
  //   !undefined &&
  //   [
  //     "/desktopfifteen",
  //     "/transactions",
  //     "/customers",
  //     "/policiestwo",
  //     "/policiesone",
  //     "/policiesthree",
  //     "/policies",
  //     "/transactionsindex",
  //     "/beneficiariesindex",
  //     "/dashboard",
  //     "/transactionsfilter",
  //     "/policiesindex",
  //     "/frame355",
  //     "/dashboardaddbeneficiary",
  //     "/policiesdetailspage",
  //     "/beneficiariesone",
  //     "/beneficiariestwo",
  //     "/transactionsone",
  //     "/transactionsfilterone",
  //   ].includes(pathname)
  // ) {
  //   return <Navigate to="/" />;
  // }
  return <Element />;
};
