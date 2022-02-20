import React, { useCallback } from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import TemplateItem from "./TemplateItem";
import usePostMessage from "../../hooks/usePostMessage";

const MSG = {
  A: "Templates"
};

/**
 * Component to render the list of templates
 */
const TemplatesList = props => {
  //========================================================================================
  /*                                                                                      *
   *                                         Props                                        *
   *                                                                                      */
  //========================================================================================

  const { authKey, data, deleteTemplate } = props;
  //========================================================================================
  /*                                                                                      *
   *                                         Hooks                                        *
   *                                                                                      */
  //========================================================================================

  // Send messages to the parent window
  const { sendMessage } = usePostMessage(authKey);

  //========================================================================================
  /*                                                                                      *
   *                                       Lifecycle                                      *
   *                                                                                      */
  //========================================================================================

  const onDeleteTemplate = useCallback(
    key => {
      deleteTemplate(key);
    },
    [deleteTemplate]
  );

  //========================================================================================
  /*                                                                                      *
   *                                        Render                                        *
   *                                                                                      */
  //========================================================================================

  return (
    <List
      subheader={
        <ListSubheader sx={{ lineHeight: "2em" }}>{MSG.A}</ListSubheader>
      }
    >
      {data.map(item => {
        return (
          <TemplateItem
            {...item}
            id={item.key}
            onClick={sendMessage}
            onDeleteItem={onDeleteTemplate}
          />
        );
      })}
    </List>
  );
};

TemplatesList.defaultProps = {
  data: [],
  authKey: "",
  deleteTemplate: () => console.log("deleteTemplate not implemented")
};

TemplatesList.propTypes = {
  data: PropTypes.array,
  authKey: PropTypes.string,
  deleteTemplate: PropTypes.func
};

export default TemplatesList;
