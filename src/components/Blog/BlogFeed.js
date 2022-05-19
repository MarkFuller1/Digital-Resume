import React from "react";
import { Paper, Grid, Divider } from "@material-ui/core";
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

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item lg={12} style={{ padding: "15px" }}>
        {constants.local ? (
          <Paper style={{ spacing: "5px", padding: "5px" }}>
            <BlogEditor onSave={onSave} availableTags={props.availableTags} />
          </Paper>
        ) : (
          <div />
        )}
      </Grid>
      <Divider style={{ width: "70%" }} />
      {props.blogPosts.map((post) => {
        console.log("rendering post:", post);
        return (
          <Grid item lg={6} key={post.post_id} style={{ width: "100%" }}>
            <BlogPost editable={false} state={post} />
            <Divider />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BlogFeed;
