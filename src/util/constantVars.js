
let backend_url = "";
if (window.location.hostname === "localhost") {
  backend_url = "http://192.168.1.49:8080";
} else {
  //we aren't running locally
  backend_url = "";
}

exports.backend_url = backend_url;