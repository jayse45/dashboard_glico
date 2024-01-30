import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
const TransactionsFilterOne = React.lazy(
  () => import("pages/TransactionsFilterOne"),
);
const TransactionsOne = React.lazy(() => import("pages/TransactionsOne"));
const BeneficiariesTwo = React.lazy(() => import("pages/BeneficiariesTwo"));
const BeneficiariesOne = React.lazy(() => import("pages/BeneficiariesOne"));
const PoliciesDetailspage = React.lazy(
  () => import("pages/PoliciesDetailspage"),
);
const DashboardAddbeneficiary = React.lazy(
  () => import("pages/DashboardAddbeneficiary"),
);
const Frame355 = React.lazy(() => import("pages/Frame355"));
const Policiesindex = React.lazy(() => import("pages/Policiesindex"));
const TransactionsFilter = React.lazy(() => import("pages/TransactionsFilter"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Beneficiariesindex = React.lazy(() => import("pages/Beneficiariesindex"));
const Transactionsindex = React.lazy(() => import("pages/Transactionsindex"));
const Policies = React.lazy(() => import("pages/Policies"));
const PoliciesThree = React.lazy(() => import("pages/PoliciesThree"));
const PoliciesOne = React.lazy(() => import("pages/PoliciesOne"));
const PoliciesTwo = React.lazy(() => import("pages/PoliciesTwo"));
const Customers = React.lazy(() => import("pages/Customers"));
const Transactions = React.lazy(() => import("pages/Transactions"));
const Login = React.lazy(() => import("pages/Login"));
const Register = React.lazy(() => import("pages/Register"));
const DesktopFifteen = React.lazy(() => import("pages/DesktopFifteen"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/desktopfifteen"
            element={<ProtectedRoute element={DesktopFifteen} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/transactions"
            element={<ProtectedRoute element={Transactions} />}
          />
          <Route
            path="/customers"
            element={<ProtectedRoute element={Customers} />}
          />
          <Route
            path="/policiestwo"
            element={<ProtectedRoute element={PoliciesTwo} />}
          />
          <Route
            path="/policiesone"
            element={<ProtectedRoute element={PoliciesOne} />}
          />
          <Route
            path="/policiesthree"
            element={<ProtectedRoute element={PoliciesThree} />}
          />
          <Route
            path="/policies"
            element={<ProtectedRoute element={Policies} />}
          />
          <Route
            path="/transactionsindex"
            element={<ProtectedRoute element={Transactionsindex} />}
          />
          <Route
            path="/beneficiariesindex"
            element={<ProtectedRoute element={Beneficiariesindex} />}
          />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={Dashboard} />}
          />
          <Route
            path="/transactionsfilter"
            element={<ProtectedRoute element={TransactionsFilter} />}
          />
          <Route
            path="/policiesindex"
            element={<ProtectedRoute element={Policiesindex} />}
          />
          <Route
            path="/frame355"
            element={<ProtectedRoute element={Frame355} />}
          />
          <Route
            path="/dashboardaddbeneficiary"
            element={<ProtectedRoute element={DashboardAddbeneficiary} />}
          />
          <Route
            path="/policiesdetailspage"
            element={<ProtectedRoute element={PoliciesDetailspage} />}
          />
          <Route
            path="/beneficiariesone"
            element={<ProtectedRoute element={BeneficiariesOne} />}
          />
          <Route
            path="/beneficiariestwo"
            element={<ProtectedRoute element={BeneficiariesTwo} />}
          />
          <Route
            path="/transactionsone"
            element={<ProtectedRoute element={TransactionsOne} />}
          />
          <Route
            path="/transactionsfilterone"
            element={<ProtectedRoute element={TransactionsFilterOne} />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
