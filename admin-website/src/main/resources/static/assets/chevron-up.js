import { s as svg } from "./index.js";
import { u as openBlock, v as createElementBlock, w as createBaseVNode } from "./vue.js";
var _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "chevron-down_svg__st0",
    d: "M21 7c0 .2-.1.5-.2.6l-8 9.9c-.2.4-.5.5-.8.5-.3 0-.6-.1-.8-.4L3.3 7.7c-.4-.4-.3-1.1.2-1.4.4-.4 1.1-.3 1.4.2l7.2 8.9 7.2-8.9c.4-.4 1-.5 1.4-.2.2.1.3.4.3.7z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$1 = [_hoisted_2$1];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [].concat(_hoisted_3$1));
}
var ChevronDown = {
  render: render$1
};
var index$1 = function index2() {
  return svg({
    name: "IconChevronDown",
    component: ChevronDown
  })();
};
var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "chevron-up_svg__st0",
    d: "M3 17c0-.2.1-.5.2-.6l8-9.9c.2-.2.5-.4.8-.4s.6.1.8.4l7.9 9.9c.4.4.3 1.1-.2 1.4-.4.4-1.1.3-1.4-.2L12 8.7l-7.2 8.9c-.4.4-1 .5-1.4.2-.3-.2-.4-.5-.4-.8z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [].concat(_hoisted_3));
}
var ChevronUp = {
  render
};
var index = function index22() {
  return svg({
    name: "IconChevronUp",
    component: ChevronUp
  })();
};
export {
  index as a,
  index$1 as i
};
