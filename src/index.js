import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  app._create()
  app._stopLoading()
  // Used to access the app instance by the automated tests
  window.__JS_APP = app;
});
