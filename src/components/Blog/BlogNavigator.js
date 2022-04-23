import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
  TextField,
  Paper,
} from "@material-ui/core";
import * as API from "../../util/api";

export const BlogNavigator = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createTag = () => {
    console.log("Setting modal to true");
    setIsModalOpen(true);
  };

  const saveNewTag = (tag) => {
    API.saveNewTag(tag)
      .then((response) => response.data)
      .then((data) =>
        props.setAvailableTags((previous) => [...previous, data])
      );
  };

  return (
    <div>
      <List component="nav">
        <ListItem button key={"Reset"}>
          <ListItemText onClick={() => props.setSelected("")}>All</ListItemText>
        </ListItem>
        {props.availableTags.map((topic) => {
          return (
            <ListItem button key={topic}>
              <ListItemText
                onClick={(event) => {
                  console.log("Clicked:", event.target.innerText);
                  props.setSelected(event.target.innerText);
                }}
                value={topic}
              >
                <Typography>{topic}</Typography>
              </ListItemText>
            </ListItem>
          );
        })}
        <ListItem button key={"create"}>
          <ListItemText onClick={createTag}>Create Tag</ListItemText>
        </ListItem>
      </List>
      <Modal
        style={{ top: "50%", left: "50%" }}
        open={isModalOpen}
        onClose={() => {
          isModalOpen(false);
        }}
      >
        <Paper style={{ padding: "10px", spacing: "10px", width: "18%" }}>
          <TextField
            variant="outlined"
            label="Tag Name"
            onBlur={() => setIsModalOpen(false)}
            onKeyDown={(event) => {
              console.log(event.target.value);
              if (event.key === "Enter") {
                setIsModalOpen(false);
                saveNewTag(event.target.value);
              }
            }}
          />
        </Paper>
      </Modal>
    </div>
  );
};

export default BlogNavigator;
