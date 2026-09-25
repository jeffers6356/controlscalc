export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Permanently redirect the old workers.dev hostname
    // to the new custom domain while preserving the path and query string.
    if (url.hostname === "controlscalc.jeffers6356.workers.dev") {
      url.hostname = "controlscalc.com";

      return Response.redirect(url.toString(), 301);
    }

    // Serve the existing ControlsCalc website normally.
    return env.ASSETS.fetch(request);
  }
};
