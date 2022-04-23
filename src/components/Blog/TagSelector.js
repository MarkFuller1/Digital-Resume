import React from "react";
import { Chip, Select, MenuItem } from "@material-ui/core";

const TagSelector = (props) => {
  console.log("Tag selector props:", props);

  const handleTagSelector = (event) => {
    console.log("Tag select event:", event.target.value);

    if (props.selectedTags.indexOf(event.target.value) === -1) {
      props.setSelectedTags((previous) => [
        { value: event.target.value },
        ...previous,
      ]);
    }
  };

  const handleDeleteTag = (event) => {
    console.log("tag selector delete", event.target.value);
    props.setSelectedTags((previous) =>
      previous.filter((entry) => entry === event.target.value)
    );
  };

  return (
    <div style={{ width: "8vw" }}>
      {props.availableTags.length > 0 ? (
        <Select
          label="Add Tags"
          onChange={handleTagSelector}
          value=""
          style={{ width: "100%" }}
        >
          {props.availableTags.map((tag) => {
            return (
              <MenuItem value={tag} key={tag}>
                {tag}
              </MenuItem>
            );
          })}
        </Select>
      ) : (
        <div />
      )}
      {props.selectedTags.map((tag) => (
        <Chip label={tag.value} variant="outlined" onClick={handleDeleteTag} />
      ))}
    </div>
  );
};

export default TagSelector;
