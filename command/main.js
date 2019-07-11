
//# sourceMappingURL=main.js.maphttp.get(this.dataUrl).toPromise().then(response => {
  let config = null;
  try {
    config = JSON.parse(response.data);
  } catch (e) {
    console.error("Couldn't parse response!");
  }
  this.config = new AppNotas(); // See note

var result = new AppNotas();
result.open();

