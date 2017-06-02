function route(path, handle, response) {
  console.log(`About to route a request for ${path}`);
  if (typeof handle[path] === 'function') {
    handle[path](response);
  } else {
    console.log('not found');

    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write('404 Not found');
    response.end();
  }
}

exports.route = route;