export function removeTrackingIDs(document) {
  document.querySelectorAll("a").forEach((el) => {
    const href = el.getAttribute("href");
    const params = new URLSearchParams(href);
    if (params.has("h")) {
      params.set("h", "removed");
      el.setAttribute("href", params.toString());
    }
  });
}
