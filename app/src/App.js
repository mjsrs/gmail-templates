import React from "react";
import Paper from "@mui/material/Paper";
import TemplatesList from "./components/templates/TemplatesList";
import Footer from "./components/footer/Footer";
import useTemplateState from "./hooks/useTemplateState";

export default function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const authKey = urlParams.get("authKey");
  const subject = urlParams.get("subject");
  const content = urlParams.get("content");

  const { data, addTemplate, deleteTemplate } = useTemplateState();
  const commonProps = { authKey, subject, content };

  return (
    <>
      <Paper square sx={{ pb: "35px" }}>
        <TemplatesList
          {...commonProps}
          data={data}
          deleteTemplate={deleteTemplate}
        />
      </Paper>
      <Footer {...commonProps} addTemplate={addTemplate} />
    </>
  );
}
