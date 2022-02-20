import React from "react";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import ItemContent from "./ItemContent";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * Component to render an item for the template's list
 * @param {object} props
 * @returns {Component}
 */
const TemplateItem = props => {
  //========================================================================================
  /*                                                                                      *
   *                                         Props                                        *
   *                                                                                      */
  //========================================================================================

  const { id, title, content, onClick, onDeleteItem } = props;

  //========================================================================================
  /*                                                                                      *
   *                                        Render                                        *
   *                                                                                      */
  //========================================================================================

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="actions"
          onClick={() => onDeleteItem(id)}
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        onClick={() => onClick({ content, method: "setBodyHTML" })}
        dense
        divider
      >
        <ItemContent content={content} title={title} />
      </ListItemButton>
    </ListItem>
  );
};

TemplateItem.defaultProps = {
  id: 0,
  title: "no title",
  content: "no content",
  onClick: () => console.log("onClick not implemented"),
  onDeleteItem: () => console.log("onDeleteItem not implemented")
};
TemplateItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  onDeleteItem: PropTypes.func
};

export default TemplateItem;
