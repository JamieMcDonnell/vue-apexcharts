/* eslint-disable */
import Vue3Apexcharts from "./vue3-apexcharts";

const fill = window.SVG.Gradient.prototype.fill;
console.log('FILL: ', fill)

window.Gradient.prototype.fill = function (...args) {
  const url = fill.apply(this, args);
  const prefix = `url(${document.location.href}`;

  if (!url.startsWith(prefix)) {
    return url.split('url(').join(prefix);
  }

  return url;
};

const install = app => {
  app.component(Vue3Apexcharts.name, Vue3Apexcharts);
};

Vue3Apexcharts.install = install;

export default Vue3Apexcharts;
