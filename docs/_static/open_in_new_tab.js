document.addEventListener("DOMContentLoaded", function () {
  // Select all external links
  const links = document.querySelectorAll("a.external");

  links.forEach(function (link) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
});
