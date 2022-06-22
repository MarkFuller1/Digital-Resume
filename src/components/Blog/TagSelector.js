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
    props.setSelectedTags((previous) => {
      var previousTemp = [...previous];
      return previousTemp.filter(
        (entry) => entry.value !== event.target.textContent
      );
    });
  };

  console.log("Tag:", props.selectedTags);
  return (
    <div style={{ width: "8vw", display: "inline-block", padding: "15px" }}>
      {props.availableTags.length > 0 ? (
        <Select
          label="Add Tags"
          onChange={handleTagSelector}
          value=""
          style={{ width: "100%", display: "inline-block" }}
        >
          {props.availableTags.map((tag) => {
            console.log("Displaying tag options:", tag);
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
        <Chip
          label={tag.value}
          key={tag.value}
          variant="outlined"
          onClick={handleDeleteTag}
        />
      ))}
    </div>
  );
};

export default TagSelector;
