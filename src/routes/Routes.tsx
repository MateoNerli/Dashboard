import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import AppLayout from "../layout/AppLayout";
import Ecommerce from "../pages/Dashboard/ECommerce";
import UserProfiles from "../pages/UserProfiles";
import Calendar from "../pages/Calendar";
import Blank from "../pages/Blank";
import FormElements from "../pages/Forms/FormElements";
import BasicTables from "../pages/Tables/BasicTables";
import Alerts from "../pages/UiElements/Alerts";
import Avatars from "../pages/UiElements/Avatars";
import Badges from "../pages/UiElements/Badges";
import Buttons from "../pages/UiElements/Buttons";
import Images from "../pages/UiElements/Images";
import Videos from "../pages/UiElements/Videos";
import AuthLayout from "../layout/AuthLayout";
import SignIn from "../pages/AuthPages/SignIn";
import SignUp from "../pages/AuthPages/SignUp";
import NotFound from "../pages/OtherPage/NotFound";

export default function RoutesApp() {
  return (
    <Routes>
      {/* Rutas protegidas */}
      <Route element={<PrivateRoute />}>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Ecommerce />} />
          <Route path="/profile" element={<UserProfiles />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/form-elements" element={<FormElements />} />
          <Route path="/basic-tables" element={<BasicTables />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/images" element={<Images />} />
          <Route path="/videos" element={<Videos />} />
        </Route>
      </Route>

      {/* Layout de autenticación */}
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* Ruta de fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
