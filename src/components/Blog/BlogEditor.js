import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { Button, Grid } from "@material-ui/core";
import TagSelector from "./TagSelector";
import * as API from "../../util/api";

export const BlogEditor = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [selectedTags, setSelectedTags] = useState([]);

  const onEditorChange = (editorState) => {
    console.log("state change");
    setEditorState(editorState);
  };

  const handleImageUpload = (event) => {
    console.log("upload image event:", event);
    return API.uploadImage(event);
  };

  const handleSave = () => {
    console.log("Saving state");

    var toSave = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    props.onSave(toSave, selectedTags);

    setEditorState(EditorState.createEmpty());
    setSelectedTags([]);
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorChange}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            uploadCallback: handleImageUpload,
            alt: { present: true, mandatory: false },
          },
        }}
      />
      <div style={{ padding: "15px", width: "50%" }}>
        <TagSelector
          availableTags={props.availableTags}
          selectedTags={selectedTags}
          // setTags={set}
          setSelectedTags={setSelectedTags}
        />
        <Button
          style={{
            spacing: "10px",
            width: "50%",
            display: "inline-block",
          }}
          onClick={handleSave}
          variant="contained"
        >
          Save Post
        </Button>
      </div>
    </div>
  );
};
