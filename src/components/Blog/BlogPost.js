import React from "react";
import { Interweave } from "interweave";
import { Chip, Typography } from "@material-ui/core";

const isTextComponent = (node) => {
  return (
    [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "subtitle1",
      "subtitle2",
      "body1",
      "body2",
      "caption",
      "button",
      "overline",
      "srOnly",
      "inherit",
    ].indexOf(node.tagName.toLowerCase()) > -1
  );
};

export const BlogPost = (props) => {
  // console.log("BlogPost props:", props);

  const transformText = (node, children) => {
    node.style.font = "Comfortaa";

    if (isTextComponent(node)) {
      return (
        <Typography
          variant={node.tagName.toLowerCase()}
          style={{ padding: "20px" }}
        >
          {children}
        </Typography>
      );
    }

    if (node.tagName.toLowerCase() == "p") {
      return <Typography style={{ padding: "20px" }}>{children}</Typography>;
    }

    if (node.tagName.toLowerCase() === "img") {
      return (
        <img
          src={node.getAttribute("src")}
          alt={node.getAttribute("alt")}
          style={{ width: "80%", height: "auto" }}
        />
      );
    }

    if (
      node.tagName.toLowerCase() === "pre" ||
      node.tagName.toLowerCase() === "code"
    ) {
      return (
        <div>
          <code
            style={{
              padding: "20px",
              backgroundColor: "#eee",
              border: "1px",
              display: "block",
            }}
          >
            {children}
          </code>
        </div>
      );
    }
  };

  const formatDate = (date) => {
    const parsedDate = new Date(Date.parse(date));
    return parsedDate.toLocaleDateString("us-en", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div style={{ padding: "10px", width: "70%", margin: "auto" }}>
      <Typography style={{ fontSize: "10px" }}>
        {formatDate(props.state.post_date)}
      </Typography>
      <Interweave
        transform={transformText}
        style={{ FontFace: "Comfortaa", width: "100%" }}
        content={props.state.post_content}
      />
      <center>
        <br />
        {props.state.tags.map((tag) => (
          <Chip label={tag.value} variant="outlined" key={tag.tag_id} />
        ))}
        <br />
      </center>
    </div>
  );
};
