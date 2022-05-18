import React, { useState, useEffect } from "react";
import BlogHeader from "./Blog/BlogHeader";
import BlogFeed from "./Blog/BlogFeed";
import BlogNavigator from "./Blog/BlogNavigator";
import { Grid } from "@material-ui/core";
import * as API from "../util/api";

const App = (props) => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [availableTags, setAvailableTags] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    API.getAllPosts()
      .then((response) => response.data)
      .then((data) => setBlogPosts(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    API.getPostByTag(selectedTopic)
      .then((response) => response.data)
      .then((data) => setBlogPosts(data))
      .catch((error) => console.log(error));
  }, [selectedTopic, setSelectedTopic]);

  useEffect(() => {
    API.getAllTags()
      .then((response) => response.data)
      .then((data) => setAvailableTags(data));
  }, []);

  console.log("Selected:", selectedTopic);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item lg={2}>
          <BlogNavigator
            setSelected={setSelectedTopic}
            availableTags={availableTags}
            setAvailableTags={setAvailableTags}
            setBlogPosts={setBlogPosts}
          />
        </Grid>
        <Grid item lg={9}>
          <BlogHeader />
          <BlogFeed
            blogPosts={blogPosts}
            setBlogPosts={setBlogPosts}
            availableTags={availableTags}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
