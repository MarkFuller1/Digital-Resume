import React from "react";
import { Paper, Grid } from "@material-ui/core";
import { BlogPost } from "./BlogPost";
import { BlogEditor } from "./BlogEditor";
import * as API from "../../util/api";

var constants = require("./../../util/constantVars");

const BlogFeed = (props) => {
  const onSave = (content, tags) => {
    console.log(content, tags);
    API.savePost({
      post_content: content,
      post_date: new Date().toISOString(),
      tags: tags,
    })
      .then((response) => response.data)
      .then((data) => {
        console.log("success:", data);
        props.setBlogPosts((previous) => [{ ...data }, ...previous]);
      })
      .catch((error) => console.log(error));
  };

  const getCurrentHeight = () => {
    var body = document.body,
      html = document.documentElement;

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      className="blogFeed"
    >
      {console.log("canvas height:", getCurrentHeight())}
      <Grid item lg={12} style={{ padding: "15px" }}>
        {constants.local ? (
          <Paper style={{ spacing: "5px", padding: "5px" }}>
            <BlogEditor onSave={onSave} availableTags={props.availableTags} />
          </Paper>
        ) : (
          <div />
        )}
      </Grid>
      <hr class="solid" style={{ width: "100%", color: "#eee" }} />
      {props.blogPosts.map((post) => {
        console.log("rendering post:", post);
        return (
          <div style={{ width: "100%" }}>
            <BlogPost editable={false} state={post} />
            <hr class="solid" style={{ width: "100%", color: "#eee" }} />
          </div>
        );
      })}
    </Grid>
  );
};

export default BlogFeed;
