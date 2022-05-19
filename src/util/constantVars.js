let backend_url = "";
let local = false;

if (window.location.hostname === "localhost" || window.location.hostname.startsWith("192.168.")) {
  backend_url = "http://localhost:8080";
  local = true;
} else {
  //we aren't running locally
  backend_url = "http://23.241.58.48:8080";
  local = false;
}

console.log("We are" + (local ? "" : " not ") + " running locally!");

exports.backend_url = backend_url;
exports.local = local;
