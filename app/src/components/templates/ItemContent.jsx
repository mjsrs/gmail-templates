import React from "react";
import ListItemText from "@mui/material/ListItemText";

const ItemContent = props => {
  const { title, content } = props;

  return (
    <ListItemText
      primary={title}
      secondary={content.replace(/<\/?[^>]+(>|$)/g, "")}
      secondaryTypographyProps={{
        sx: { overflow: "hidden", height: "1.2em" }
      }}
    />
  );
};

export default ItemContent;
