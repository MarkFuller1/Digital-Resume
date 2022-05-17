import axios from "axios";
var constants = require("./constantVars");

const client = axios.create();

client.defaults.headers["Content-Type"] = "application/json";
client.defaults.headers["Access-Control-Allow-Origin"] = "*/**";

export async function getAllPosts() {
  return client.get(constants.backend_url + "/posts", {"Access-Control-Allow-Origin": "*","Content-Type":"application/json"});
}

export async function getAllTags() {
  return client.get(constants.backend_url + "/tags");
}

export async function getAllByQuery(query) {
  return client.get(constants.backend_url + "/posts/" + query);
}

export async function savePost(post) {
  return client.post(constants.backend_url + "/posts", post);
}

export async function uploadImage(image) {
  var data = new FormData();
  data.append('image', image, image.name)
  return client.post(constants.backend_url + "/images/upload", data);
}

export async function getPostByTag(tag) {
  return client.get(constants.backend_url + "/posts/" + tag);
}

export async function saveNewTag(tag) {
  return client.post(constants.backend_url + "/tags", tag)
}
