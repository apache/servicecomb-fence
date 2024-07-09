import { s as svg } from "./index.js";
import { u as openBlock, v as createElementBlock, w as createBaseVNode } from "./vue.js";
var _hoisted_1 = {
  class: "warning-triangle_svg__tiny-icon-warning-triangle",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 14",
  style: {
    "enable-background": "new 0 0 14 14"
  },
  "xml:space": "preserve"
};
var _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "m7.84 1 6.05 11.13c.25.46.07 1.02-.39 1.27-.14.07-.29.11-.45.11H.95a.963.963 0 0 1-.95-.95c0-.15.04-.31.11-.44L6.16 1c.25-.46.83-.63 1.29-.39.17.09.3.22.39.39z",
    style: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd"
    }
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M7.75 10.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75S6.59 10 7 10s.75.34.75.75zM7 9c.28 0 .5-.22.5-.5V5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3.5c0 .28.22.5.5.5z",
    style: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "fill": "#fff"
    }
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [].concat(_hoisted_4));
}
var WarningTriangle = {
  render
};
var index = function index2() {
  return svg({
    name: "IconWarningTriangle",
    component: WarningTriangle
  })();
};
export {
  index as i
};
