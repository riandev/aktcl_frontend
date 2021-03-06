import React from "react";
import SurveyBody from "../components/SurveyBody";


const routes = [
  {
    path: "/dashboard/crm",
    exact: true,
    name: "Survey",
    toolbar: () => <p>AKTCL_EAS</p>,
    main: () => <SurveyBody />
  },
];

export default routes;