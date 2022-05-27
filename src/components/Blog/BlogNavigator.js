import React, { useEffect, useState } from "react";
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

var constants = require("../../util/constantVars");

export const BlogNavigator = React.memo((props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 2) {
      API.search(search)
        .then((response) => response.data)
        .then((data) => {
          console.log(data);
          props.setBlogPosts(data);
        });
    } else {
      API.getAllPosts()
        .then((response) => response.data)
        .then((data) => props.setBlogPosts(data))
        .catch((error) => console.log(error));
    }
  }, [setSearch, search, props]);

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

  const searchPosts = (event) => {
    console.log("searching:", event.target.value, event.target.value.length);
    setSearch(event.target.value);
  };

  return (
    <div>
      <Paper style={{ padding: "5%" }}>
        <TextField variant="outlined" label="Search" onChange={searchPosts} />
        <List component="nav">
          <ListItem button key={"Reset"}>
            <ListItemText onClick={() => props.setSelected("")}>
              All
            </ListItemText>
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
          {constants.local ? (
            <ListItem button key={"create"}>
              <ListItemText onClick={createTag}>Create Tag</ListItemText>
            </ListItem>
          ) : (
            <div />
          )}
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
              autoFocus
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
      </Paper>
    </div>
  );
});

export default BlogNavigator;
