function solve(httpRequest) {
  function methodValidator(httpRequest) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let propName = "method";

    if (
      httpRequest[propName] === undefined ||
      !validMethods.includes(httpRequest.method)
    ) {
      throw new Error("Invalid request header: Invalid Method");
    }
  }

  function uriValidatior(httpRequest) {
    let pattern = /^[\w\.]+$/;
    let propName = "uri";

    if (httpRequest[propName] === undefined || !pattern.test(httpRequest.uri)) {
      throw new Error("Invalid request header: Invalid URI");
    }
  }

  function versionValidator(httpRequest) {
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let propName = "version";

    if (
      httpRequest[propName] === undefined ||
      !validVersions.includes(httpRequest.version)
    ) {
      throw new Error("Invalid request header: Invalid Version");
    }
  }

  function messageValidator(httpRequest) {
    let pattern = /^[^<>\\&'"]*$/;
    let propName = "message";

    if (
      httpRequest[propName] === undefined ||
      !pattern.test(httpRequest.message)
    ) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }

  methodValidator(httpRequest);
  uriValidatior(httpRequest);
  versionValidator(httpRequest);
  messageValidator(httpRequest);

  return httpRequest;
}

try {
  console.log(
    solve({
      method: "OPTIONS",
      uri: "git.master",
      version: "HTTP/1.1",
      message: "-recursive",
    })
  );
} catch (e) {
  console.log(e.message);
}
