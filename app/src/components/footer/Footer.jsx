import React, { useCallback } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const MSG = {
  A: "Add template"
};

const Footer = props => {
  //========================================================================================
  /*                                                                                      *
   *                                         Props                                        *
   *                                                                                      */
  //========================================================================================

  const { subject, content, addTemplate } = props;

  const onButtonClick = useCallback(() => {
    addTemplate({ content, title: subject });
  }, [subject, content, addTemplate]);

  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, backgroundColor: "white" }}
    >
      <Button color="primary" startIcon={<AddIcon />} onClick={onButtonClick}>
        {MSG.A}
      </Button>
    </AppBar>
  );
};

Footer.defaultProps = {
  authKey: ""
};

Footer.propTypes = {
  authKey: PropTypes.string
};

export default Footer;
