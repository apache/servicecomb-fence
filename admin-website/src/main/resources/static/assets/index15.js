import { s as svg, aq as addClass, ar as removeClass, am as KEY_CODE, o as on, a as off, b4 as guid, d as defineComponent, j as props, at as Popover, B as Button$1, b5 as index$K, f as setup$1, l as $props, $ as $prefix, m as $setup, y as vue_popper_default, A as __spreadValues, al as Tooltip$1, aH as isNull$1, e as index$L, a8 as directive$1, af as clickoutside_default, b6 as index$M, aJ as omitText, h, a$ as index$N, b7 as isPlainObject, b8 as isRegExp, q as isDate, aS as browser_default, aO as find$1, ac as hasClass, b9 as setupComponent, c as createComponent, ax as appProperties, ba as getStyle$1, p as popup_manager_default, C as extend, bb as xss, ag as index$O, au as index$P, bc as index$Q, bd as $install, be as isVnode, bf as mergeClass, aY as isObject$1, aQ as isEmptyObject, bg as resolveTheme, bh as emitter, bi as resolveMode, bj as useBreakpoint, Z as debounce_default, ak as t, bk as index$R, bl as index$S, a_ as index$T, aR as getDataset, bm as log, aV as index$U, aU as index$V, b2 as index$W, ap as getDomNode, aF as random, bn as isDisplayNone, bo as toDecimal, bp as popper_default, aM as getObj, T as TINYModal, bq as index$X, br as tryToCurrency, bs as tryToDecimal, bt as tryToInt, bu as toFileSize, bv as truncate, bw as toRate, E as isNumber$1, bx as toBoolValue, b0 as throttle_default, aB as isVue2, G as toDate, t as getDateWithNewTimezone, ai as format, by as toDateStr } from "./index.js";
import { u as openBlock, v as createElementBlock, w as createBaseVNode, x as createStaticVNode, k as resolveComponent, D as renderSlot, M as Fragment, N as renderList, A as normalizeClass, E as toDisplayString, G as normalizeStyle, y as createBlock, B as resolveDynamicComponent, z as createCommentVNode, l as createVNode, H as withCtx, J as createTextVNode, P as withModifiers, I as withDirectives, L as vShow, T as Transition, V as resolveDirective, n as nextTick, m as markRaw, g as getCurrentInstance, r as ref, o as onBeforeUnmount, ad as onDeactivated, ae as toRaw, a8 as reactive, i as inject, af as onUpdated, a2 as watch, b as isVNode, F as mergeProps, h as h$1 } from "./vue.js";
import { v as validate_default } from "./index13.js";
var _hoisted_1$I = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$F = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "chevron-down_svg__st0",
    d: "M21 7c0 .2-.1.5-.2.6l-8 9.9c-.2.4-.5.5-.8.5-.3 0-.6-.1-.8-.4L3.3 7.7c-.4-.4-.3-1.1.2-1.4.4-.4 1.1-.3 1.4.2l7.2 8.9 7.2-8.9c.4-.4 1-.5 1.4-.2.2.1.3.4.3.7z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$D = [_hoisted_2$F];
function render$u(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$I, [].concat(_hoisted_3$D));
}
var ChevronDown = {
  render: render$u
};
var index$J = function index2() {
  return svg({
    name: "IconChevronDown",
    component: ChevronDown
  })();
};
var _hoisted_1$H = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$E = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "chevron-left_svg__st0",
    d: "M17 21c-.2 0-.5-.1-.6-.2l-9.9-8c-.4-.2-.5-.5-.5-.8 0-.3.1-.6.4-.8l9.9-7.9c.4-.4 1.1-.3 1.4.2.4.4.3 1.1-.2 1.4L8.7 12l8.9 7.2c.4.4.5 1 .2 1.4-.3.3-.5.4-.8.4z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$C = [_hoisted_2$E];
function render$t(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$H, [].concat(_hoisted_3$C));
}
var ChevronLeft = {
  render: render$t
};
var index$I = function index22() {
  return svg({
    name: "IconChevronLeft",
    component: ChevronLeft
  })();
};
var _hoisted_1$G = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$D = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "chevron-up_svg__st0",
    d: "M3 17c0-.2.1-.5.2-.6l8-9.9c.2-.2.5-.4.8-.4s.6.1.8.4l7.9 9.9c.4.4.3 1.1-.2 1.4-.4.4-1.1.3-1.4-.2L12 8.7l-7.2 8.9c-.4.4-1 .5-1.4.2-.3-.2-.4-.5-.4-.8z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$B = [_hoisted_2$D];
function render$s(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$G, [].concat(_hoisted_3$B));
}
var ChevronUp = {
  render: render$s
};
var index$H = function index23() {
  return svg({
    name: "IconChevronUp",
    component: ChevronUp
  })();
};
var _hoisted_1$F = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$C = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "conment-refresh_svg__st0",
    d: "M23.2 12c-.5 0-.9.3-.9.8-.2 2.6-1.4 5-3.3 6.8-1.9 1.8-4.4 2.8-7 2.8-2 0-4-.6-5.7-1.7-1.5-1-2.7-2.3-3.5-3.9h2.3c.5 0 .8-.4.8-.8.1-.6-.3-1-.7-1H.8c-.4 0-.8.4-.8.8v4.3c0 .5.4.9.8.9s.8-.4.8-.8v-2c1 1.5 2.3 2.8 3.8 3.8 2 1.3 4.3 2 6.6 2 3 0 6-1.1 8.2-3.2 2.2-2.1 3.6-4.9 3.8-7.9 0-.5-.3-.9-.8-.9zm0-9c-.5 0-.8.4-.8.8v2c-1-1.5-2.3-2.8-3.8-3.8-2-1.3-4.3-2-6.6-2-3 0-6 1.1-8.2 3.2C1.6 5.3.3 8.1 0 11.1c0 .5.3.9.8.9s.9-.3.9-.8C1.9 8.6 3 6.2 5 4.4c1.9-1.8 4.4-2.8 7-2.8 2 0 4 .6 5.7 1.7 1.5 1 2.7 2.3 3.5 3.9h-2.3c-.5 0-.8.4-.8.8-.1.6.3 1 .7 1h4.3c.5 0 .9-.4.9-.8V3.8c0-.4-.4-.8-.8-.8z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$A = [_hoisted_2$C];
function render$r(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$F, [].concat(_hoisted_3$A));
}
var ConmentRefresh = {
  render: render$r
};
var index$G = function index24() {
  return svg({
    name: "IconConmentRefresh",
    component: ConmentRefresh
  })();
};
var _hoisted_1$E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$B = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "delta-down_svg__st0",
    d: "M2 6h20L12 19z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$z = [_hoisted_2$B];
function render$q(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$E, [].concat(_hoisted_3$z));
}
var DeltaDown = {
  render: render$q
};
var index$F = function index25() {
  return svg({
    name: "IconDeltaDown",
    component: DeltaDown
  })();
};
var _hoisted_1$D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$A = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "delta-left_svg__st0",
    d: "M18 2v20L5 12z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$y = [_hoisted_2$A];
function render$p(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$D, [].concat(_hoisted_3$y));
}
var DeltaLeft = {
  render: render$p
};
var index$E = function index26() {
  return svg({
    name: "IconDeltaLeft",
    component: DeltaLeft
  })();
};
var _hoisted_1$C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$z = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "delta-up_svg__st0",
    d: "M2 19h20L12 6z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$x = [_hoisted_2$z];
function render$o(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$C, [].concat(_hoisted_3$x));
}
var DeltaUp = {
  render: render$o
};
var index$D = function index27() {
  return svg({
    name: "IconDeltaUp",
    component: DeltaUp
  })();
};
var _hoisted_1$B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$y = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "double-left_svg__st0",
    d: "M13 21c-.2 0-.5-.1-.6-.2l-9.9-8c-.4-.2-.5-.5-.5-.8 0-.3.1-.6.4-.8l9.9-7.9c.4-.4 1.1-.3 1.4.2.4.4.3 1.1-.2 1.4L4.7 12l8.9 7.2c.4.4.5 1 .2 1.4-.2.3-.5.4-.8.4z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$w = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "double-left_svg__st0",
    d: "M21 21c-.2 0-.5-.1-.6-.2l-9.9-8c-.4-.2-.5-.5-.5-.8 0-.3.1-.6.4-.8l9.9-7.9c.4-.4 1.1-.3 1.4.2.4.4.3 1.1-.2 1.4L12.7 12l8.9 7.2c.4.4.5 1 .2 1.4-.2.3-.5.4-.8.4z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4$9 = [_hoisted_2$y, _hoisted_3$w];
function render$n(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$B, [].concat(_hoisted_4$9));
}
var DoubleLeft = {
  render: render$n
};
var index$C = function index28() {
  return svg({
    name: "IconDoubleLeft",
    component: DoubleLeft
  })();
};
var _hoisted_1$A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$x = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "double-right_svg__st0",
    d: "M11 21c.2 0 .5-.1.6-.2l9.9-8c.2-.2.4-.5.4-.8 0-.3-.1-.6-.4-.8l-9.9-7.9c-.4-.4-1.1-.3-1.4.2-.4.4-.3 1.1.2 1.4l8.9 7.2-8.9 7.2c-.4.4-.5 1-.2 1.4.2.2.5.3.8.3z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$v = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "double-right_svg__st0",
    d: "M3 21c.2 0 .5-.1.6-.2l9.9-8c.2-.2.4-.5.4-.8 0-.3-.1-.6-.4-.8l-9.8-8c-.4-.3-1.1-.3-1.4.2-.4.4-.3 1.1.1 1.4l8.9 7.2-8.9 7.2c-.4.4-.5 1-.2 1.4.2.3.5.4.8.4z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4$8 = [_hoisted_2$x, _hoisted_3$v];
function render$m(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$A, [].concat(_hoisted_4$8));
}
var DoubleRight = {
  render: render$m
};
var index$B = function index29() {
  return svg({
    name: "IconDoubleRight",
    component: DoubleRight
  })();
};
var _hoisted_1$z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$w = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "down_svg__st0",
    d: "M2 6h20L12 19z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$u = [_hoisted_2$w];
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$z, [].concat(_hoisted_3$u));
}
var Down = {
  render: render$l
};
var index$A = function index210() {
  return svg({
    name: "IconDown",
    component: Down
  })();
};
var _hoisted_1$y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$v = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    transform: "translate(-4 -10)"
  },
  [/* @__PURE__ */ createBaseVNode("circle", {
    class: "ellipsis_svg__st0",
    cx: "9",
    cy: "22",
    r: "1.5"
  }), /* @__PURE__ */ createBaseVNode("circle", {
    class: "ellipsis_svg__st0",
    cx: "16",
    cy: "22",
    r: "1.5"
  }), /* @__PURE__ */ createBaseVNode("circle", {
    class: "ellipsis_svg__st0",
    cx: "23",
    cy: "22",
    r: "1.5"
  })],
  -1
  /* HOISTED */
);
var _hoisted_3$t = [_hoisted_2$v];
function render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$y, [].concat(_hoisted_3$t));
}
var Ellipsis = {
  render: render$k
};
var index$z = function index211() {
  return svg({
    name: "IconEllipsis",
    component: Ellipsis
  })();
};
var _hoisted_1$x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$u = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "fullscreen_svg__st0",
    d: "M8 3H4.5l5.2 5.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L3 4.3V8c0 .6-.4 1-1 1s-1-.4-1-1V2c0-.6.4-1 1-1h6c.5 0 1 .4 1 1s-.4 1-1 1zM8 21H4.5l5.2-5.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L3 19.7V16c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1h6c.5 0 1-.4 1-1s-.4-1-1-1zM16 3h3.5l-5.2 5.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L21 4.3V8c0 .6.4 1 1 1s1-.4 1-1V2c0-.6-.4-1-1-1h-6c-.5 0-1 .4-1 1s.4 1 1 1zM16 21h3.5l-5.2-5.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.4V16c0-.6.4-1 1-1s1 .4 1 1v6c0 .6-.4 1-1 1h-6c-.5 0-1-.4-1-1s.4-1 1-1z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$s = [_hoisted_2$u];
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$x, [].concat(_hoisted_3$s));
}
var Fullscreen = {
  render: render$j
};
var index$y = function index212() {
  return svg({
    name: "IconFullscreen",
    component: Fullscreen
  })();
};
var _hoisted_1$w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$t = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "minscreen_svg__st0",
    d: "M3 8h3.5L1.3 2.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L8 6.7V3c0-.6.4-1 1-1s1 .4 1 1v6c0 .6-.4 1-1 1H3c-.5 0-1-.4-1-1s.4-1 1-1zM3 16h3.5l-5.2 5.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L8 17.3V21c0 .6.4 1 1 1s1-.4 1-1v-6c0-.6-.4-1-1-1H3c-.5 0-1 .4-1 1s.4 1 1 1zM21 8h-3.5l5.2-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L16 6.7V3c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1h6c.5 0 1-.4 1-1s-.4-1-1-1zM21 16h-3.5l5.2 5.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L16 17.3V21c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1h6c.5 0 1 .4 1 1s-.4 1-1 1z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$r = [_hoisted_2$t];
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, [].concat(_hoisted_3$r));
}
var Minscreen = {
  render: render$i
};
var index$x = function index213() {
  return svg({
    name: "IconMinscreen",
    component: Minscreen
  })();
};
var _hoisted_1$v = {
  class: "popup_svg__icon",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$s = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M292.768 449.694c2.491.515 4.99.987 7.469 1.551 28.956 6.587 48.828 32.893 47.59 62.98-1.187 28.85-23.508 53.387-52.383 57.605-.904.132-1.784.433-2.676.655H280.21c-.773-.21-1.536-.498-2.323-.615-26.22-3.891-46.433-23.108-51.662-49.134-.36-1.793-.753-3.579-1.13-5.369V504.81c.233-.992.536-1.973.694-2.977 3.902-24.797 21.983-44.51 46.302-50.418 2.688-.653 5.413-1.151 8.12-1.722 4.185.002 8.371.002 12.557.002zm212.46 122.792c-2.49-.515-4.99-.988-7.469-1.55-28.956-6.589-48.828-32.895-47.59-62.981 1.186-28.85 23.507-53.387 52.383-57.604.905-.132 1.785-.433 2.676-.656h12.557c2.491.515 4.99.987 7.47 1.551 28.956 6.587 48.828 32.893 47.59 62.98-1.186 28.85-23.507 53.387-52.383 57.605-.904.132-1.784.433-2.676.655h-12.558zm224.692 0c-2.491-.515-4.991-.988-7.47-1.55-28.957-6.589-48.829-32.895-47.59-62.981 1.186-28.85 23.507-53.387 52.383-57.604.904-.132 1.784-.433 2.676-.656h12.557c.774.209 1.536.498 2.324.615 26.22 3.89 46.433 23.108 51.661 49.134.361 1.793.753 3.58 1.131 5.368v12.558c-.234.992-.536 1.973-.695 2.977-3.902 24.798-21.983 44.51-46.302 50.418-2.688.654-5.412 1.152-8.12 1.723-4.184-.002-8.369-.002-12.555-.002z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$q = [_hoisted_2$s];
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, [].concat(_hoisted_3$q));
}
var Popup$1 = {
  render: render$h
};
var index$w = function index214() {
  return svg({
    name: "IconPopup",
    component: Popup$1
  })();
};
var _hoisted_1$u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$r = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "sort_svg__st0",
    d: "M2 14h20L12 24 2 14zm0-4L12 0l10 10H2z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$p = [_hoisted_2$r];
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$u, [].concat(_hoisted_3$p));
}
var Sort$1 = {
  render: render$g
};
var index$v = function index215() {
  return svg({
    name: "IconSort",
    component: Sort$1
  })();
};
var _hoisted_1$t = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$q = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M12.243 6 8.14 10.101a.2.2 0 0 1-.282 0L3.757 6h0",
    stroke: "currentColor",
    fill: "none",
    "fill-rule": "evenodd",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$o = [_hoisted_2$q];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, [].concat(_hoisted_3$o));
}
var TriangleDown = {
  render: render$f
};
var index$u = function index216() {
  return svg({
    name: "IconTriangleDown",
    component: TriangleDown
  })();
};
var _hoisted_1$s = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 126 151",
  "xml:space": "preserve"
};
var _hoisted_2$p = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M112.524 12.653 75.041 62.736l-.023 74.905 12.502 12.484V62.736l37.507-50.083V.193H.002v12.46L37.51 62.736v62.42l12.502 12.485V62.736L12.505 12.653z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$n = [_hoisted_2$p];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$s, [].concat(_hoisted_3$n));
}
var Unfilter = {
  render: render$e
};
var index$t = function index217() {
  return svg({
    name: "IconUnfilter",
    component: Unfilter
  })();
};
var _hoisted_1$r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$o = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "up_svg__st0",
    d: "M2 19h20L12 6z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$m = [_hoisted_2$o];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$r, [].concat(_hoisted_3$m));
}
var Up = {
  render: render$d
};
var index$s = function index218() {
  return svg({
    name: "IconUp",
    component: Up
  })();
};
var _hoisted_1$q = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  style: {
    "enable-background": "new 0 0 16 16"
  },
  "xml:space": "preserve"
};
var _hoisted_2$n = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "down-ward_svg__st0",
    d: "M8 11.43c-.15 0-.31-.06-.42-.18L1.92 5.6c-.23-.23-.23-.61 0-.85s.61-.23.85 0L8 9.98l5.23-5.23a.61.61 0 0 1 .85 0c.23.23.23.61 0 .85l-5.66 5.66c-.11.11-.27.17-.42.17z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$l = [_hoisted_2$n];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, [].concat(_hoisted_3$l));
}
var DownWard = {
  render: render$c
};
var index$r = function index219() {
  return svg({
    name: "IconDownWard",
    component: DownWard
  })();
};
var _hoisted_1$p = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  style: {
    "enable-background": "new 0 0 16 16"
  },
  "xml:space": "preserve"
};
var _hoisted_2$m = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "sort-triangle_svg__st0",
    d: "M11.75 9.43 7.99 13.5 4.25 9.43h7.5M8 1.5c-.28 0-.55.11-.75.32L3.44 5.97c-.16.18-.25.4-.25.64 0 .53.45.97 1 .97h7.61c.24 0 .48-.09.66-.24.41-.35.45-.96.09-1.36l-3.8-4.16a.647.647 0 0 1-.09-.08c-.19-.16-.42-.24-.66-.24l.01 1 3.74 4.07h-7.5L7.99 2.5H8v-1zm3.81 6.93H4.19c-.24 0-.48.09-.66.24-.41.35-.45.96-.08 1.36l3.81 4.14c.03.03.06.06.09.08.18.17.41.25.65.25.28 0 .55-.11.75-.32l3.81-4.14c.16-.18.25-.4.25-.64 0-.54-.45-.97-1-.97z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$k = [_hoisted_2$m];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, [].concat(_hoisted_3$k));
}
var SortTriangle = {
  render: render$b
};
var index$q = function index220() {
  return svg({
    name: "IconSortTriangle",
    component: SortTriangle
  })();
};
var _hoisted_1$o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  style: {
    "enable-background": "new 0 0 16 16"
  },
  "xml:space": "preserve"
};
var _hoisted_2$l = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "sort-triangle-ascending_svg__st0",
    d: "M8 1.5c.24 0 .47.08.66.24.03.03.06.06.09.08l3.81 4.14a.93.93 0 0 1-.09 1.36c-.18.16-.42.24-.66.24H4.19c-.55 0-1-.43-1-.97 0-.24.09-.46.25-.64l3.81-4.14c.2-.2.47-.31.75-.31m4.81 7.89c0 .24-.09.46-.25.64l-3.81 4.14c-.2.22-.47.33-.75.33-.24 0-.47-.08-.66-.24-.03-.03-.06-.05-.09-.08l-3.81-4.14a.938.938 0 0 1 .08-1.36c.18-.16.42-.24.66-.24h7.61c.57-.01 1.02.42 1.02.95zm-1.06.04h-7.5l3.74 4.07 3.76-4.07z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$j = [_hoisted_2$l];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, [].concat(_hoisted_3$j));
}
var SortTriangleAscending = {
  render: render$a
};
var index$p = function index221() {
  return svg({
    name: "IconSortTriangleAscending",
    component: SortTriangleAscending
  })();
};
var _hoisted_1$n = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16",
  style: {
    "enable-background": "new 0 0 16 16"
  },
  "xml:space": "preserve"
};
var _hoisted_2$k = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "sort-triangle-descending_svg__st0",
    d: "M8 14.5c-.24 0-.47-.08-.66-.24-.03-.03-.06-.05-.09-.08l-3.81-4.14a.93.93 0 0 1 .09-1.36c.18-.16.42-.24.66-.24h7.61c.55 0 1 .43 1 .97 0 .24-.09.46-.25.64l-3.81 4.14c-.19.2-.46.31-.74.31M3.19 6.61c0-.24.09-.46.25-.64l3.81-4.14c.2-.22.47-.33.75-.33.24 0 .47.08.66.24.03.03.06.06.09.08l3.81 4.14c.37.4.33 1.01-.08 1.36-.18.16-.42.24-.66.24H4.19c-.55.01-1-.42-1-.95zm1.06-.04h7.51L8.01 2.5 4.25 6.57z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$i = [_hoisted_2$k];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, [].concat(_hoisted_3$i));
}
var SortTriangleDescending = {
  render: render$9
};
var index$o = function index222() {
  return svg({
    name: "IconSortTriangleDescending",
    component: SortTriangleDescending
  })();
};
var _hoisted_1$m = {
  viewBox: "0 0 96 96",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$j = /* @__PURE__ */ createStaticVNode('<g fill="none" fill-rule="evenodd"><path d="M0 1h96v96H0z"></path><path d="M3 .5h90v90H3z"></path><path d="M18.3 29.3h61.406c.88 0 1.594.714 1.594 1.594v44.25a4.555 4.555 0 0 1-4.555 4.556h-53.89a4.555 4.555 0 0 1-4.555-4.555V29.3Z" fill="#EEE"></path><path d="M15.394 29.3H64.2v45.845a4.555 4.555 0 0 1-4.555 4.555h-41.29a4.555 4.555 0 0 1-4.555-4.555v-44.25c0-.881.714-1.595 1.594-1.595Z" fill="#FFF"></path><path d="M64.2 29.3H14.74c-.784 0-1.514.404-1.93 1.069L4.99 42.857a1.139 1.139 0 0 0 .966 1.743h45.865a4.555 4.555 0 0 0 3.824-2.08L64.2 29.3ZM64.2 29.3h16.832c.775 0 1.497.395 1.916 1.047l8.026 12.499a1.139 1.139 0 0 1-.959 1.754h-14.21a4.555 4.555 0 0 1-3.926-2.246L64.2 29.3Z" fill="#FFF"></path><path d="M3 .5h90v90H3z"></path><path d="M81.813 44.102V75.65a4.05 4.05 0 0 1-4.05 4.05H60.207v-.9h17.556a3.15 3.15 0 0 0 3.15-3.15V44.102h.9Z" fill="#818181" fill-rule="nonzero"></path><path d="M64.65 29.3v46.35a4.05 4.05 0 0 1-4.05 4.05H17.4a4.05 4.05 0 0 1-4.05-4.05V44.102h.9V75.65a3.15 3.15 0 0 0 3.15 3.15h43.2a3.15 3.15 0 0 0 3.15-3.15V30.2H15.06v-.9h49.59Z" fill="#818181" fill-rule="nonzero"></path><path d="M14.476 29.3a1.8 1.8 0 0 0-1.526.845L4.762 43.222a.9.9 0 0 0 .763 1.378h46.817a3.6 3.6 0 0 0 3.022-1.644L64.2 29.3H14.476Zm0 .9h48.07l-7.938 12.267a2.7 2.7 0 0 1-2.266 1.233H5.525l8.188-13.078a.9.9 0 0 1 .763-.422ZM81.293 29.3a1.8 1.8 0 0 1 1.514.827l8.403 13.087a.9.9 0 0 1-.757 1.386H75.259a3.6 3.6 0 0 1-3.103-1.775L64.2 29.3h17.093Zm0 .9h-15.52l7.159 12.169a2.7 2.7 0 0 0 2.327 1.331h15.194L82.05 30.614a.9.9 0 0 0-.757-.414Z" fill="#818181" fill-rule="nonzero"></path><g fill="#818181" fill-rule="nonzero"><path d="M48.9 10.85v6.3a.45.45 0 0 1-.9 0v-6.3a.45.45 0 1 1 .9 0ZM65.344 14.13l-3.15 5.455a.45.45 0 1 1-.78-.45l3.15-5.456a.45.45 0 0 1 .78.45ZM32.336 13.68l3.15 5.455a.45.45 0 1 1-.78.45l-3.15-5.456a.45.45 0 0 1 .78-.45Z"></path></g><g transform="translate(20.1 60.8)"><rect fill="#0067D1" width="14.4" height="4.5" rx="1.14"></rect><rect fill="#818181" y="8.1" width="10.8" height="1" rx=".399"></rect><rect fill="#818181" y="11.7" width="5.4" height="1" rx=".399"></rect></g></g>', 1);
var _hoisted_3$h = [_hoisted_2$j];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, [].concat(_hoisted_3$h));
}
var NoData = {
  render: render$8
};
var index$n = function index223() {
  return svg({
    name: "IconNoData",
    component: NoData
  })();
};
var _hoisted_1$l = {
  viewBox: "0 0 96 96",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$i = /* @__PURE__ */ createStaticVNode('<g fill="none" fill-rule="evenodd"><path d="M0 0h96v96H0z"></path><path d="m13.076 37.224 31.573-22.36a4.555 4.555 0 0 1 5.265 0l31.574 22.36a4.555 4.555 0 0 1 1.922 3.718V80.36a3.417 3.417 0 0 1-3.416 3.417H14.57a3.417 3.417 0 0 1-3.417-3.417V40.942c0-1.478.717-2.864 1.923-3.718Z" fill="#FFF"></path><path d="m49.612 14.65 32.114 22.743a3.98 3.98 0 0 1 1.684 3.247v40.146a3 3 0 0 1-3.01 2.99H14.164a3 3 0 0 1-3.01-2.99V40.64a3.98 3.98 0 0 1 1.683-3.247L44.951 14.65a4.036 4.036 0 0 1 4.661 0Zm-4.078.812L13.42 38.205a2.984 2.984 0 0 0-1.263 2.435v40.146a2 2 0 0 0 2.007 1.994H80.4a2 2 0 0 0 2.007-1.994V40.64c0-.967-.47-1.874-1.263-2.435L49.03 15.462a3.027 3.027 0 0 0-3.496 0Z" fill="#818181" fill-rule="nonzero"></path><path d="M44.638 56.15a4.541 4.541 0 0 1 5.096-.13l.192.13L83.41 80.548a.628.628 0 0 1-.998.508L49.338 56.958a3.532 3.532 0 0 0-3.935-.12l-.178.12-33.074 24.098a.628.628 0 0 1-.998-.508L44.638 56.15Z" fill="#818181" fill-rule="nonzero"></path><path d="M83.41 40.912 52.3 59.062l29.3 21.399a1.139 1.139 0 0 0 1.81-.92v-38.63Z" fill="#EEE"></path><path d="M83.41 40.912v38.9c0 .213-.068.42-.195.591a1.008 1.008 0 0 1-1.403.213L52.3 59.063l31.11-18.151Zm-1.003 1.74L54.12 59.157l28.286 20.657v-37.16Z" fill="#818181" fill-rule="nonzero"></path><path d="m11.153 40.912 31.11 18.15-29.3 21.399a1.139 1.139 0 0 1-1.81-.92v-38.63Z" fill="#EEE"></path><path d="M11.153 40.912v38.9c0 .213.068.42.195.591.328.444.957.539 1.403.213l29.513-21.553-31.11-18.151Zm1.004 1.74 28.285 16.504-28.285 20.657v-37.16Z" fill="#818181" fill-rule="nonzero"></path><g fill-rule="nonzero"><path d="M82.964 52.173c-5.533 0-10.035 4.472-10.035 9.968 0 5.497 4.502 9.969 10.035 9.969C88.498 72.11 93 67.638 93 62.14c0-5.496-4.502-9.968-10.036-9.968" fill="#0067D1"></path><path d="M82.964 56.908a.75.75 0 0 1 .753.747v5.856a.75.75 0 0 1-.753.748.75.75 0 0 1-.752-.748v-5.856a.75.75 0 0 1 .752-.747M82.964 67.624a1 1 0 0 1-1.003-.997 1 1 0 0 1 1.003-.997 1 1 0 0 1 1.004.997 1 1 0 0 1-1.004.997" fill="#FFF"></path></g><g fill="#818181"><path d="M17.064 20.162h-1v7.45h1zM6.982 24.117a.464.464 0 0 0 0 .658l4.64 4.61a.47.47 0 0 0 .664 0 .464.464 0 0 0 0-.658l-4.641-4.61a.47.47 0 0 0-.663 0ZM3 33.666c0 .257.208.466.466.466h6.57a.466.466 0 0 0 0-.932h-6.57a.466.466 0 0 0-.466.466Z"></path></g></g>', 1);
var _hoisted_3$g = [_hoisted_2$i];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, [].concat(_hoisted_3$g));
}
var NoNews = {
  render: render$7
};
var index$m = function index224() {
  return svg({
    name: "IconNoNews",
    component: NoNews
  })();
};
var _hoisted_1$k = {
  viewBox: "0 0 96 96",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$h = /* @__PURE__ */ createStaticVNode('<g fill="none" fill-rule="evenodd"><path d="M0 0h96v96H0z"></path><g transform="translate(3 17)"><rect fill="#FFF" width="81.173" height="61.765" rx="4.218"></rect><path d="M77.432 0c2.066 0 3.741 1.656 3.741 3.698v54.368c0 2.043-1.675 3.699-3.74 3.699H3.74C1.675 61.765 0 60.109 0 58.066V3.698C0 1.656 1.675 0 3.74 0h73.692Zm0 1H3.741C2.233 1 1.01 2.208 1.01 3.698v54.368c0 1.49 1.222 2.7 2.73 2.7h73.691c1.508 0 2.73-1.21 2.73-2.7V3.698c0-1.49-1.222-2.698-2.73-2.698Z" fill="#8F8F8F" fill-rule="nonzero"></path><path d="M4.218 0h72.627a4.218 4.218 0 0 1 4.218 4.218v9.266H0V4.218A4.218 4.218 0 0 1 4.218 0Z" fill="#EEE"></path><path d="M77.322 0c2.066 0 3.741 1.656 3.741 3.698v9.786H0V3.698C0 1.656 1.675 0 3.74 0h73.582Zm0 1H3.741C2.233 1 1.01 2.208 1.01 3.698v8.786h79.041V3.698c0-1.454-1.163-2.64-2.62-2.696L77.322 1Z" fill="#818181" fill-rule="nonzero"></path><path d="M74.504 8.464c.89 0 1.61-.71 1.61-1.587s-.72-1.587-1.61-1.587c-.89 0-1.61.71-1.61 1.587 0 .876.72 1.587 1.61 1.587Zm-5.37 0c.89 0 1.612-.71 1.612-1.587s-.722-1.587-1.611-1.587c-.89 0-1.61.71-1.61 1.587 0 .876.72 1.587 1.61 1.587Zm-5.368 0c.89 0 1.61-.71 1.61-1.587s-.72-1.587-1.61-1.587c-.89 0-1.61.71-1.61 1.587 0 .876.72 1.587 1.61 1.587Z" fill="#818181"></path></g><g fill-rule="nonzero"><path d="M82.9 49.622c-5.569 0-10.1 4.48-10.1 9.986s4.531 9.985 10.1 9.985c5.57 0 10.1-4.48 10.1-9.985 0-5.507-4.53-9.986-10.1-9.986" fill="#0067D1"></path><path d="M82.9 54.365c.418 0 .758.335.758.749v5.866c0 .413-.34.749-.758.749a.754.754 0 0 1-.757-.75v-5.865c0-.414.339-.75.757-.75M82.9 65.1c-.557 0-1.01-.447-1.01-.999s.453-.998 1.01-.998c.558 0 1.01.446 1.01.998s-.452.999-1.01.999" fill="#FFF"></path></g><path d="M43.137 46.478c2.134 0 3.864 1.61 3.864 3.596v1.766h.11c1.27 0 2.308.925 2.38 2.09l.005.13v4.993c0 1.225-1.068 2.219-2.385 2.219h-7.949c-1.317 0-2.385-.994-2.385-2.22V54.06c0-1.225 1.069-2.22 2.385-2.22h.11v-1.766c0-1.933 1.638-3.509 3.693-3.593l.172-.003Zm-3.325 6.288h-.704c-.667 0-1.208.51-1.208 1.138v5.12c0 .629.54 1.138 1.208 1.138h8.057c.667 0 1.209-.51 1.209-1.138v-5.12c0-.628-.542-1.138-1.209-1.138h-7.353Zm3.138 1.849a.56.56 0 0 1 .556.48l.005.075.001 1.478a.921.921 0 0 1 .373.74.93.93 0 0 1-.935.925.93.93 0 0 1-.936-.925c0-.303.147-.571.374-.74V55.17c0-.307.252-.555.562-.555Zm.187-7.028c-1.446 0-2.619 1.065-2.619 2.379v1.69h5.237v-1.69c0-1.27-1.095-2.307-2.474-2.375l-.144-.004Z" fill="#818181" fill-rule="nonzero"></path></g>', 1);
var _hoisted_3$f = [_hoisted_2$h];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, [].concat(_hoisted_3$f));
}
var NoPerm = {
  render: render$6
};
var index$l = function index225() {
  return svg({
    name: "IconNoPerm",
    component: NoPerm
  })();
};
var _hoisted_1$j = {
  viewBox: "0 0 96 96",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$g = /* @__PURE__ */ createStaticVNode('<g fill="none" fill-rule="evenodd"><path d="M0 0h96v96H0z"></path><path d="M59.584 11h8.796a5.062 5.062 0 0 1 5.062 5.062v9.875c0 .698-.567 1.265-1.266 1.265H59.584V11Z" fill="#EEE"></path><path d="M68.822 11a4.624 4.624 0 0 1 4.62 4.63v10.415c0 .639-.517 1.157-1.155 1.157H59.584V11h9.238Zm0 1.043h-8.197v14.116h11.662a.115.115 0 0 0 .114-.114V15.629a3.583 3.583 0 0 0-3.579-3.586Z" fill="#818181" fill-rule="nonzero"></path><path d="M14.257 11h54.546l.31.988c-5.005 0-4.363 3.19-4.363 13.066V37.04a5.483 5.483 0 1 0 0 .007v40.221a5.483 5.483 0 0 1-5.484 5.483H14.257a5.483 5.483 0 0 1-5.483-5.483V16.483A5.483 5.483 0 0 1 14.257 11Z" fill="#FFF"></path><path d="m68.803 11 .31.988c-5.005 0-4.363 3.19-4.363 13.066v52.683a5.01 5.01 0 0 1-5.004 5.014H13.778a5.01 5.01 0 0 1-5.004-5.014V16.015A5.01 5.01 0 0 1 13.778 11h55.025Zm-55.025 1.043a3.968 3.968 0 0 0-3.964 3.972v61.722a3.968 3.968 0 0 0 3.964 3.972h45.968a3.968 3.968 0 0 0 3.963-3.972v-52.84c0-.784-.004-1.5-.013-2.654-.006-.781-.01-1.48-.01-2.106v-.408c.005-3.379.121-4.57.546-5.829.263-.783.646-1.396 1.162-1.856l-51.616-.001Z" fill="#818181" fill-rule="nonzero"></path><path d="M60.002 82.751H10.33A7.33 7.33 0 0 1 3 75.422v-6.486c0-.466.378-.843.844-.843h50.381c.466 0 .844.377.844.843v8.561c0 1.886 1.277 4.226 4.006 4.226 1.714 0 .094 1.028.927 1.028Z" fill="#FFF"></path><path d="M54.299 68.093a.77.77 0 0 1 .77.771v8.633c0 1.886 1.277 4.226 4.006 4.226 1.714 0 .094 1.028.927 1.028H10.314C6.274 82.751 3 79.47 3 75.422v-6.558a.77.77 0 0 1 .77-.771h50.529Zm-.27 1.042H4.04v6.287c0 3.42 2.725 6.201 6.117 6.285l.157.002H55.97l-.033-.027c-1.173-.954-1.868-2.44-1.907-4.043l-.002-.142v-8.362Z" fill="#818181" fill-rule="nonzero"></path><path d="m81.398 74.93-2.891-2.897a.634.634 0 0 1 .894-.896l2.892 2.897a.634.634 0 0 1-.895.897Z" fill="#818181"></path><path d="M81.637 74.326a2.076 2.076 0 0 1 2.94 0l5.88 5.891a2.085 2.085 0 0 1 0 2.946 2.076 2.076 0 0 1-2.94 0l-5.88-5.892a2.085 2.085 0 0 1 0-2.945Z" fill="#FFF"></path><path d="M81.628 74.326a2.08 2.08 0 0 1 2.943.003l5.891 5.892a2.08 2.08 0 0 1 .004 2.942 2.08 2.08 0 0 1-2.943-.003l-5.892-5.892a2.08 2.08 0 0 1-.003-2.942Zm.736.736a1.04 1.04 0 0 0 .002 1.471l5.892 5.892a1.04 1.04 0 1 0 1.47-1.47l-5.892-5.891a1.04 1.04 0 0 0-1.472-.002Z" fill="#818181" fill-rule="nonzero"></path><path d="M69.578 46.265c8.023 0 14.55 6.54 14.55 14.581s-6.527 14.582-14.55 14.582-14.55-6.541-14.55-14.582c0-8.04 6.527-14.581 14.55-14.581Z" fill="#FFF"></path><path d="M69.578 46.265c8.023 0 14.55 6.54 14.55 14.581s-6.527 14.582-14.55 14.582-14.55-6.541-14.55-14.582c0-8.04 6.527-14.581 14.55-14.581Zm0 1.041c-7.45 0-13.511 6.075-13.511 13.54 0 7.466 6.062 13.54 13.51 13.54 7.45 0 13.512-6.074 13.512-13.54 0-7.465-6.062-13.54-13.511-13.54Z" fill="#818181" fill-rule="nonzero"></path><g fill="#818181"><path d="M78.435 35.48h1v7.785h-1zM88.876 39.613c.19.19.19.498 0 .688l-4.806 4.816a.485.485 0 1 1-.686-.688l4.806-4.816a.485.485 0 0 1 .686 0ZM93 49.59a.487.487 0 0 1-.487.486H85.72a.487.487 0 0 1 0-.973h6.794c.27 0 .487.218.487.487Z"></path></g><g fill-rule="nonzero"><path d="M37.009 32.603c-5.73 0-10.393 4.672-10.393 10.415 0 5.743 4.662 10.416 10.393 10.416 5.73 0 10.393-4.673 10.393-10.416s-4.663-10.415-10.393-10.415" fill="#0067D1"></path><path d="M37.009 37.55c.43 0 .78.35.78.781v6.118a.78.78 0 1 1-1.56 0v-6.118a.78.78 0 0 1 .78-.781M37.009 48.747a1.04 1.04 0 0 1-1.04-1.042 1.04 1.04 0 1 1 2.08 0 1.04 1.04 0 0 1-1.04 1.042" fill="#FFF"></path></g></g>', 1);
var _hoisted_3$e = [_hoisted_2$g];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, [].concat(_hoisted_3$e));
}
var NoResult = {
  render: render$5
};
var index$k = function index226() {
  return svg({
    name: "IconNoResult",
    component: NoResult
  })();
};
var _hoisted_1$i = {
  viewBox: "0 0 120 120",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$f = /* @__PURE__ */ createStaticVNode('<g fill="none" fill-rule="evenodd"><path d="M0 0h120v120H0z"></path><g fill-rule="nonzero"><g transform="translate(4 21)"><rect fill="#FFF" width="102.819" height="78" rx="4.218"></rect><path d="M98.08 0c2.618 0 4.74 2.091 4.74 4.67v68.66c0 2.579-2.122 4.67-4.74 4.67H4.739C2.121 78 0 75.909 0 73.33V4.67C0 2.092 2.121 0 4.738 0h93.343Zm0 1.262H4.739c-1.91 0-3.457 1.526-3.457 3.409v68.658c0 1.883 1.548 3.409 3.457 3.409h93.343c1.91 0 3.458-1.526 3.458-3.409V4.671c0-1.883-1.549-3.409-3.458-3.409Z" fill="#8F8F8F"></path><path d="M4.218 0h94.244a4.218 4.218 0 0 1 4.218 4.218v12.81H0V4.219A4.218 4.218 0 0 1 4.218 0Z" fill="#EEE"></path><path d="M97.942 0c2.617 0 4.738 2.091 4.738 4.67V17.03H0V4.67C0 2.09 2.121 0 4.738 0h93.204Zm0 1.262H4.738c-1.91 0-3.457 1.526-3.457 3.409v11.095h100.118V4.671c0-1.837-1.473-3.334-3.318-3.406l-.14-.003Z" fill="#818181"></path><path d="M94.371 10.689c1.127 0 2.04-.898 2.04-2.004 0-1.107-.913-2.005-2.04-2.005-1.126 0-2.04.898-2.04 2.005 0 1.106.914 2.004 2.04 2.004Zm-6.8 0c1.127 0 2.04-.898 2.04-2.004 0-1.107-.913-2.005-2.04-2.005s-2.04.898-2.04 2.005c0 1.106.913 2.004 2.04 2.004Zm-6.8 0c1.126 0 2.04-.898 2.04-2.004 0-1.107-.914-2.005-2.04-2.005-1.128 0-2.041.898-2.041 2.005 0 1.106.913 2.004 2.04 2.004Z" fill="#818181"></path></g><path d="M105.207 62.196c-7.054 0-12.793 5.658-12.793 12.611 0 6.954 5.739 12.611 12.793 12.611 7.054 0 12.793-5.657 12.793-12.61 0-6.954-5.739-12.612-12.793-12.612" fill="#0067D1"></path><path d="M105.207 68.187c.53 0 .96.423.96.945v7.408c0 .522-.43.946-.96.946a.953.953 0 0 1-.96-.946v-7.408c0-.522.43-.945.96-.945M105.207 81.743a1.27 1.27 0 0 1-1.28-1.26 1.27 1.27 0 0 1 1.28-1.262c.706 0 1.28.564 1.28 1.261a1.27 1.27 0 0 1-1.28 1.261" fill="#FFF"></path><path d="M54.84 58.226c2.703 0 4.894 2.033 4.894 4.541v2.231h.14c1.608 0 2.924 1.168 3.016 2.639l.005.164v6.306c0 1.547-1.353 2.802-3.021 2.802H49.805c-1.668 0-3.02-1.255-3.02-2.802V67.8c0-1.547 1.353-2.802 3.02-2.802l.14-.001v-2.23c0-2.441 2.074-4.431 4.677-4.537l.218-.005Zm-4.212 7.941h-.891c-.845 0-1.53.644-1.53 1.437v6.467c0 .793.685 1.437 1.53 1.437h10.205c.846 0 1.531-.644 1.531-1.437v-6.467c0-.793-.686-1.437-1.53-1.437h-9.315Zm3.975 2.335c.36 0 .657.264.704.606l.007.095.001 1.867c.287.213.472.552.472.934 0 .645-.53 1.169-1.184 1.169a1.177 1.177 0 0 1-1.185-1.17c0-.381.186-.72.473-.934l.001-1.866c0-.387.318-.701.71-.701Zm.237-8.874c-1.832 0-3.317 1.344-3.317 3.003v2.134h6.633v-2.134c0-1.604-1.387-2.913-3.134-2.999l-.182-.004Z" fill="#818181"></path></g></g>', 1);
var _hoisted_3$d = [_hoisted_2$f];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, [].concat(_hoisted_3$d));
}
var PageNoperm = {
  render: render$4
};
var index$j = function index227() {
  return svg({
    name: "IconPageNoperm",
    component: PageNoperm
  })();
};
var _hoisted_1$h = {
  viewBox: "0 0 120 120",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$e = /* @__PURE__ */ createStaticVNode('<g fill="none" fill-rule="evenodd"><path d="M0 0h120v120H0z"></path><g fill-rule="nonzero" transform="translate(3 21)"><rect fill="#FFF" width="102.903" height="78.69" rx="4.218"></rect><path d="M98.16 0c2.62 0 4.743 2.11 4.743 4.712v69.266c0 2.603-2.123 4.712-4.742 4.712H4.742C2.123 78.69 0 76.58 0 73.978V4.712C0 2.11 2.123 0 4.742 0h93.419Zm0 1.274H4.743c-1.911 0-3.46 1.539-3.46 3.438v69.266c0 1.9 1.549 3.439 3.46 3.439h93.419c1.91 0 3.46-1.54 3.46-3.439V4.712c0-1.899-1.55-3.438-3.46-3.438Z" fill="#8F8F8F"></path><path d="M4.218 0h94.327a4.218 4.218 0 0 1 4.218 4.218v12.961H0V4.218A4.218 4.218 0 0 1 4.218 0Z" fill="#EEE"></path><path d="M98.021 0c2.62 0 4.742 2.11 4.742 4.712v12.467H0V4.712C0 2.11 2.123 0 4.742 0h93.28Zm0 1.274H4.742c-1.911 0-3.46 1.539-3.46 3.438v11.194h100.2V4.712c0-1.853-1.475-3.363-3.321-3.436l-.14-.002Z" fill="#818181"></path><path d="M94.448 10.783a2.032 2.032 0 0 0 2.042-2.022 2.032 2.032 0 0 0-2.042-2.021 2.032 2.032 0 0 0-2.042 2.021c0 1.117.914 2.022 2.042 2.022Zm-6.806 0a2.032 2.032 0 0 0 2.042-2.022 2.032 2.032 0 0 0-2.042-2.021A2.032 2.032 0 0 0 85.6 8.76c0 1.117.914 2.022 2.042 2.022Zm-6.806 0a2.032 2.032 0 0 0 2.042-2.022 2.032 2.032 0 0 0-2.042-2.021 2.032 2.032 0 0 0-2.042 2.021c0 1.117.914 2.022 2.042 2.022Z" fill="#818181"></path></g><g transform="translate(36.861 58.897)" stroke="#818181" stroke-width="1.139"><rect fill="#FFF" fill-rule="nonzero" width="36.189" height="19.038" rx="2.278"></rect><ellipse cx="17.858" cy="9.999" rx="2.266" ry="2.313"></ellipse><ellipse cx="26.363" cy="9.999" rx="2.266" ry="2.313"></ellipse><ellipse cx="9.353" cy="9.999" rx="2.266" ry="2.313"></ellipse></g><g fill-rule="nonzero"><path d="M106.39 62.363c-6.954 0-12.611 5.657-12.611 12.61 0 6.954 5.657 12.611 12.61 12.611 6.954 0 12.611-5.657 12.611-12.61 0-6.954-5.657-12.611-12.61-12.611" fill="#0067D1"></path><path d="M106.39 68.353c.521 0 .945.424.945.946v7.407a.946.946 0 0 1-1.891 0V69.3c0-.522.423-.946.945-.946M106.39 81.91a1.26 1.26 0 1 1-.001-2.522 1.26 1.26 0 0 1 0 2.521" fill="#FFF"></path></g></g>', 1);
var _hoisted_3$c = [_hoisted_2$e];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, [].concat(_hoisted_3$c));
}
var PageNothing = {
  render: render$3
};
var index$i = function index228() {
  return svg({
    name: "IconPageNothing",
    component: PageNothing
  })();
};
var _hoisted_1$g = {
  viewBox: "0 0 155 126",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$d = /* @__PURE__ */ createStaticVNode('<g fill="none" fill-rule="evenodd"><path d="M0 0h155v126H0z"></path><g fill-rule="nonzero"><g transform="translate(83.562 20.562)"><path d="M58.876 55.25v26.94c0 .465-.189.887-.494 1.192a1.68 1.68 0 0 1-1.192.494H1.686a1.68 1.68 0 0 1-1.192-.494A1.68 1.68 0 0 1 0 82.19V55.25h58.876Z" stroke="#818181" stroke-width="1.124" fill="#FFF"></path><path stroke="#818181" stroke-width="1.124" fill="#FFF" d="M0 27.625h58.876v28.626H0z"></path><path d="M57.19 0c.465 0 .887.189 1.192.494.305.305.494.727.494 1.192v26.94H0V1.686C0 1.221.189.8.494.494A1.68 1.68 0 0 1 1.686 0H57.19Z" stroke="#818181" stroke-width="1.124" fill="#FFF"></path><circle fill="#0067D1" cx="44.938" cy="13.938" r="2.5"></circle><circle fill="#EEE" cx="44.938" cy="41.938" r="2.5"></circle><circle fill="#EEE" cx="44.938" cy="69.938" r="2.5"></circle><path fill="#EEE" d="M17.438 13.438h21v1h-21zM17.438 41.438h21v1h-21zM17.438 69.438h21v1h-21z"></path></g><path d="M3.444 104.021h147.112a.444.444 0 1 1 0 .888H3.444a.444.444 0 0 1 0-.888Z" fill="#818181"></path><g stroke="#818181" stroke-width=".964"><path d="M109.414 31.482c.931 0 1.775.377 2.385.988.61.61.988 1.454.988 2.385v61.014H14.213V34.855c0-.931.378-1.775.988-2.385a3.363 3.363 0 0 1 2.385-.988h91.828Z" fill="#EEE"></path><path d="m120.036 95.871.482 4.324a4.31 4.31 0 0 1-1.266 3.057 4.31 4.31 0 0 1-3.057 1.266H10.805a4.31 4.31 0 0 1-3.057-1.266 4.31 4.31 0 0 1-1.266-3.057v-3.842l113.554-.482Z" fill="#FFF"></path><path d="m78.817 95.871-.537 2.004a1.182 1.182 0 0 1-1.143.877H50.829a1.182 1.182 0 0 1-1.143-.877l-.537-2.004h29.668Z" fill="#EEE"></path><path d="M106.512 35.326c.665 0 1.268.27 1.704.706.436.436.705 1.038.705 1.703V95.87H18.08V37.735c0-.665.27-1.267.705-1.703a2.402 2.402 0 0 1 1.704-.706h86.024Z" fill="#FFF"></path></g><path d="M43.86 53.611c-6.892 0-12.5 5.608-12.5 12.5 0 6.893 5.608 12.5 12.5 12.5s12.5-5.607 12.5-12.5c0-6.892-5.608-12.5-12.5-12.5" fill="#0067D1"></path><path d="M44.195 59.714c.531 0 .962.431.962.963v7.547a.963.963 0 1 1-1.925 0v-7.547c0-.532.431-.963.963-.963M44.195 73.524a1.284 1.284 0 1 1 0-2.567 1.284 1.284 0 0 1 0 2.567" fill="#FFF"></path><g fill="#818181"><path d="M66.857 52.143h4.837a.48.48 0 0 1 0 .96h-4.837a.48.48 0 1 1 0-.96ZM77.487 52.143h17.668a.48.48 0 1 1 0 .96H77.487a.48.48 0 1 1 0-.96ZM66.857 58.87h28.147a.48.48 0 1 1 0 .961H66.857a.48.48 0 1 1 0-.96ZM66.857 65.597h28.147a.48.48 0 1 1 0 .961H66.857a.48.48 0 1 1 0-.96ZM66.857 72.325h28.147a.48.48 0 1 1 0 .96H66.857a.48.48 0 1 1 0-.96ZM66.857 79.052h4.837a.48.48 0 0 1 0 .961h-4.837a.48.48 0 0 1 0-.961ZM76.04 79.052h7.731v1h-7.73z"></path></g></g></g>', 1);
var _hoisted_3$b = [_hoisted_2$d];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, [].concat(_hoisted_3$b));
}
var PageServererror = {
  render: render$2
};
var index$h = function index229() {
  return svg({
    name: "IconPageServererror",
    component: PageServererror
  })();
};
var _hoisted_1$f = {
  viewBox: "0 0 120 120",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$c = /* @__PURE__ */ createStaticVNode('<g fill="none" fill-rule="evenodd"><path d="M0 0h120v120H0z"></path><g fill-rule="nonzero"><g transform="translate(4 24)"><rect fill="#FFF" width="102.903" height="78.69" rx="4.218"></rect><path d="M98.16 0c2.62 0 4.743 2.11 4.743 4.712v69.266c0 2.603-2.123 4.712-4.742 4.712H4.742C2.123 78.69 0 76.58 0 73.978V4.712C0 2.11 2.123 0 4.742 0h93.419Zm0 1.274H4.743c-1.911 0-3.46 1.539-3.46 3.438v69.266c0 1.9 1.549 3.439 3.46 3.439h93.419c1.91 0 3.46-1.54 3.46-3.439V4.712c0-1.899-1.55-3.438-3.46-3.438Z" fill="#8F8F8F"></path><path d="M4.218 0h94.327a4.218 4.218 0 0 1 4.218 4.218v12.961H0V4.218A4.218 4.218 0 0 1 4.218 0Z" fill="#EEE"></path><path d="M98.021 0c2.62 0 4.742 2.11 4.742 4.712v12.467H0V4.712C0 2.11 2.123 0 4.742 0h93.28Zm0 1.274H4.742c-1.911 0-3.46 1.539-3.46 3.438v11.194h100.2V4.712c0-1.853-1.475-3.363-3.321-3.436l-.14-.002Z" fill="#818181"></path><path d="M94.448 10.783a2.032 2.032 0 0 0 2.042-2.022 2.032 2.032 0 0 0-2.042-2.021 2.032 2.032 0 0 0-2.042 2.021c0 1.117.914 2.022 2.042 2.022Zm-6.806 0a2.032 2.032 0 0 0 2.042-2.022 2.032 2.032 0 0 0-2.042-2.021A2.032 2.032 0 0 0 85.6 8.76c0 1.117.914 2.022 2.042 2.022Zm-6.806 0a2.032 2.032 0 0 0 2.042-2.022 2.032 2.032 0 0 0-2.042-2.021 2.032 2.032 0 0 0-2.042 2.021c0 1.117.914 2.022 2.042 2.022Z" fill="#818181"></path></g><path d="M54.175 78.041a1.421 1.421 0 0 1 2.02 0 1.445 1.445 0 0 1 0 2.034 1.421 1.421 0 0 1-2.02 0 1.445 1.445 0 0 1 0-2.034Zm5.512-3.995c.342.38.342.994 0 1.373a.818.818 0 0 1-1.24 0c-1.935-2.143-5.066-2.143-7 0a.818.818 0 0 1-1.24 0 1.046 1.046 0 0 1 0-1.373c2.619-2.901 6.86-2.901 9.48 0Zm4.285-3.562a.775.775 0 0 1 0 1.148.91.91 0 0 1-1.227 0c-4.18-3.908-10.942-3.908-15.12 0a.91.91 0 0 1-1.228 0 .775.775 0 0 1 0-1.148c4.857-4.542 12.718-4.542 17.575 0Zm3.333-3.945a.888.888 0 0 1 0 1.24.852.852 0 0 1-1.22 0 15.554 15.554 0 0 0-22.277 0 .852.852 0 0 1-1.22 0 .888.888 0 0 1 0-1.24 17.258 17.258 0 0 1 24.717 0Z" fill="#818181"></path><path d="M105.39 65.363c-6.954 0-12.611 5.657-12.611 12.61 0 6.954 5.657 12.611 12.61 12.611 6.954 0 12.611-5.657 12.611-12.61 0-6.954-5.657-12.611-12.61-12.611" fill="#0067D1"></path><path d="M105.39 71.353c.521 0 .945.424.945.946v7.407a.946.946 0 0 1-1.891 0V72.3c0-.522.423-.946.945-.946M105.39 84.91a1.26 1.26 0 1 1-.001-2.522 1.26 1.26 0 0 1 0 2.521" fill="#FFF"></path></g></g>', 1);
var _hoisted_3$a = [_hoisted_2$c];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, [].concat(_hoisted_3$a));
}
var PageWeaknet = {
  render: render$1
};
var index$g = function index230() {
  return svg({
    name: "IconPageWeaknet",
    component: PageWeaknet
  })();
};
var _hoisted_1$e = {
  viewBox: "0 0 96 96",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$b = /* @__PURE__ */ createStaticVNode('<g fill="none" fill-rule="evenodd"><path d="M0 0h96v96H0z"></path><g transform="translate(3 17)"><rect fill="#FFF" width="81.055" height="61.765" rx="4.218"></rect><path d="M77.32 0c2.062 0 3.735 1.656 3.735 3.698v54.368c0 2.043-1.673 3.699-3.736 3.699H3.735C1.672 61.765 0 60.109 0 58.066V3.698C0 1.656 1.672 0 3.735 0H77.32Zm0 1H3.734C2.23 1 1.01 2.208 1.01 3.698v54.368c0 1.49 1.22 2.7 2.725 2.7H77.32c1.506 0 2.726-1.21 2.726-2.7V3.698c0-1.49-1.22-2.698-2.726-2.698Z" fill="#8F8F8F" fill-rule="nonzero"></path><path d="M4.218 0h72.509a4.218 4.218 0 0 1 4.218 4.218v9.266H0V4.218A4.218 4.218 0 0 1 4.218 0Z" fill="#EEE"></path><path d="M77.21 0c2.063 0 3.735 1.656 3.735 3.698v9.786H0V3.698C0 1.656 1.672 0 3.735 0H77.21Zm0 1H3.735C2.23 1 1.01 2.208 1.01 3.698v8.786h78.925V3.698c0-1.454-1.161-2.64-2.616-2.696L77.21 1Z" fill="#818181" fill-rule="nonzero"></path><path d="M74.395 8.464c.888 0 1.608-.71 1.608-1.587s-.72-1.587-1.608-1.587c-.888 0-1.608.71-1.608 1.587 0 .876.72 1.587 1.608 1.587Zm-5.361 0c.888 0 1.608-.71 1.608-1.587s-.72-1.587-1.608-1.587c-.888 0-1.608.71-1.608 1.587 0 .876.72 1.587 1.608 1.587Zm-5.361 0c.888 0 1.608-.71 1.608-1.587s-.72-1.587-1.608-1.587c-.888 0-1.608.71-1.608 1.587 0 .876.72 1.587 1.608 1.587Z" fill="#818181"></path></g><path d="M42.023 59.418a1.129 1.129 0 0 1 1.585 0 1.102 1.102 0 0 1 0 1.569 1.129 1.129 0 0 1-1.585 0 1.102 1.102 0 0 1 0-1.57Zm4.326-3.084a.797.797 0 0 1 0 1.06.65.65 0 0 1-.973 0c-1.519-1.654-3.976-1.654-5.494 0a.65.65 0 0 1-.973 0 .797.797 0 0 1 0-1.06c2.055-2.24 5.384-2.24 7.44 0Zm3.364-2.749a.591.591 0 0 1 0 .886.724.724 0 0 1-.963 0c-3.28-3.016-8.589-3.016-11.869 0a.724.724 0 0 1-.963 0 .591.591 0 0 1 0-.886c3.812-3.505 9.982-3.505 13.795 0Zm2.616-3.045a.677.677 0 0 1-.957.958c-4.832-4.835-12.654-4.835-17.486 0a.676.676 0 1 1-.957-.958c5.36-5.363 14.04-5.363 19.4 0Z" fill="#818181" fill-rule="nonzero"></path><g fill-rule="nonzero"><path d="M82.915 49.382c-5.561 0-10.085 4.48-10.085 9.986s4.524 9.986 10.085 9.986c5.56 0 10.085-4.48 10.085-9.986 0-5.507-4.524-9.986-10.085-9.986" fill="#0067D1"></path><path d="M82.915 54.125c.417 0 .756.336.756.749v5.866a.753.753 0 0 1-.756.749.753.753 0 0 1-.757-.75v-5.865c0-.413.34-.749.757-.749M82.915 64.86a1.003 1.003 0 0 1-1.009-.999c0-.552.452-.998 1.009-.998.557 0 1.008.446 1.008.998 0 .553-.451.999-1.008.999" fill="#FFF"></path></g></g>', 1);
var _hoisted_3$9 = [_hoisted_2$b];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, [].concat(_hoisted_3$9));
}
var Weaknet = {
  render
};
var index$f = function index231() {
  return svg({
    name: "IconWeaknet",
    component: Weaknet
  })();
};
const watchVisible = ({ broadcast, emit, nextTick: nextTick2 }) => (value) => {
  broadcast("TinyDropdownMenu", "visible", value);
  nextTick2(() => emit("visible-change", value));
};
const watchFocusing = (parent) => (value) => {
  const selfDefine = parent.$el.querySelector(".tiny-dropdown-selfdefine");
  if (selfDefine) {
    value ? addClass(selfDefine, "focusing") : removeClass(selfDefine, "focusing");
  }
};
const show = ({ props: props2, state }) => () => {
  if (props2.disabled) {
    return;
  }
  clearTimeout(Number(state.timeout));
  state.timeout = setTimeout(
    () => {
      state.visible = true;
    },
    state.trigger === "click" ? 0 : props2.showTimeout
  );
};
const hide = ({ api: api2, props: props2, state }) => () => {
  if (props2.disabled) {
    return;
  }
  api2.removeTabindex();
  if (props2.tabindex >= 0 && state.triggerElm) {
    api2.resetTabindex(state.triggerElm);
  }
  clearTimeout(Number(state.timeout));
  state.timeout = setTimeout(
    () => {
      state.visible = false;
    },
    state.trigger === "click" ? 0 : props2.hideTimeout
  );
};
const handleClick$3 = ({ api: api2, props: props2, state, emit }) => () => {
  if (props2.disabled) {
    return;
  }
  emit("handle-click", state.visible);
  state.visible ? api2.hide() : api2.show();
};
const handleTriggerKeyDown = ({ api: api2, state }) => (event) => {
  const keyCode = event.keyCode;
  if (~[KEY_CODE.ArrowUp, KEY_CODE.ArrowDown].indexOf(keyCode)) {
    api2.removeTabindex();
    if (state.menuItems) {
      api2.resetTabindex(state.menuItems[0]);
      state.menuItems[0].focus();
    }
    event.preventDefault();
    event.stopPropagation();
  } else if (keyCode === KEY_CODE.Enter) {
    api2.handleClick();
  } else if (~[KEY_CODE.Tab, KEY_CODE.Escape].indexOf(keyCode)) {
    api2.hide();
  }
};
const handleItemKeyDown = ({ api: api2, props: props2, state }) => (event) => {
  const keyCode = event.keyCode;
  const target = event.target;
  const currentIndex = state.menuItemsArray.indexOf(target);
  const max = state.menuItemsArray.length - 1;
  let nextIndex;
  if (~[KEY_CODE.ArrowUp, KEY_CODE.ArrowDown].indexOf(keyCode)) {
    if (keyCode === KEY_CODE.ArrowUp) {
      nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
    } else {
      nextIndex = currentIndex < max ? currentIndex + 1 : max;
    }
    api2.removeTabindex();
    if (state.menuItems) {
      api2.resetTabindex(state.menuItems[nextIndex]);
      state.menuItems[nextIndex].focus();
    }
    event.preventDefault();
    event.stopPropagation();
  } else if (keyCode === KEY_CODE.Enter) {
    api2.triggerElmFocus();
    target == null ? void 0 : target.click();
    if (props2.hideOnClick) {
      state.visible = false;
    }
  } else if (~[KEY_CODE.Tab, KEY_CODE.Escape].indexOf(keyCode)) {
    api2.hide();
    api2.triggerElmFocus();
  }
};
const resetTabindex = (api2) => (el) => {
  api2.removeTabindex();
  el.setAttribute("tabindex", "0");
};
const removeTabindex = (state) => () => {
  var _a, _b;
  (_a = state.triggerElm) == null ? void 0 : _a.setAttribute("tabindex", "-1");
  (_b = state.menuItemsArray) == null ? void 0 : _b.forEach((item) => {
    item.setAttribute("tabindex", "-1");
  });
};
const initAria = ({ state, props: props2 }) => () => {
  var _a, _b, _c, _d, _e;
  (_a = state.dropdownElm) == null ? void 0 : _a.setAttribute("id", state.listId);
  (_b = state.triggerElm) == null ? void 0 : _b.setAttribute("aria-haspopup", "list");
  (_c = state.triggerElm) == null ? void 0 : _c.setAttribute("aria-controls", state.listId);
  if (!props2.splitButton || !props2.singleButton) {
    (_d = state.triggerElm) == null ? void 0 : _d.setAttribute("role", "button");
    (_e = state.triggerElm) == null ? void 0 : _e.setAttribute("tabindex", String(props2.tabindex));
    addClass(state.triggerElm, "tiny-dropdown-selfdefine");
  }
};
const toggleFocus = ({ state, value }) => () => {
  state.focusing = value;
};
const initEvent = ({ api: api2, props: props2, state, vm, mode }) => () => {
  var _a;
  let buttonValue = props2.splitButton || props2.singleButton;
  state.triggerElm = buttonValue ? vm.$refs.trigger.$el : props2.border ? vm.$refs.trigger.$el : vm.$refs.trigger;
  on(state.triggerElm, "keydown", api2.handleTriggerKeyDown);
  (_a = state.dropdownElm) == null ? void 0 : _a.addEventListener("keydown", api2.handleItemKeyDown, true);
  if (!props2.splitButton || !props2.singleButton) {
    on(state.triggerElm, "focus", toggleFocus({ state, value: true }));
    on(state.triggerElm, "blur", toggleFocus({ state, value: false }));
    on(state.triggerElm, "click", toggleFocus({ state, value: false }));
  }
  if (state.trigger === "hover") {
    on(state.triggerElm, "mouseenter", api2.show);
    on(state.triggerElm, "mouseleave", api2.hide);
    on(state.dropdownElm, "mouseenter", api2.show);
    on(state.dropdownElm, "mouseleave", api2.hide);
  } else if (state.trigger === "click") {
    on(state.triggerElm, "click", api2.handleClick);
  }
  if (mode === "mobile-first") {
    if (props2.splitButton || props2.singleButton) {
      on(state.triggerElm, "click", api2.handleClick);
    }
  }
};
const handleMenuItemClick$1 = ({ props: props2, state, emit }) => ({ itemData, vm, disabled }) => {
  if (props2.hideOnClick && !disabled) {
    state.visible = false;
  }
  if (!disabled) {
    const data8 = { itemData, vm };
    emit("item-click", data8);
  }
};
const triggerElmFocus = (state) => () => {
  var _a;
  ((_a = state.triggerElm) == null ? void 0 : _a.focus) && state.triggerElm.focus();
};
const initDomOperation = ({ api: api2, state, vm }) => () => {
  var _a;
  state.dropdownElm = vm.popperElm;
  state.menuItems = (_a = state.dropdownElm) == null ? void 0 : _a.querySelectorAll('[tabindex="-1"]');
  state.menuItemsArray = [].slice.call(state.menuItems);
  api2.initEvent();
  api2.initAria();
};
const handleMainButtonClick = ({ api: api2, emit }) => (event) => {
  emit("button-click", event);
  api2.hide();
};
const mounted$1 = ({ api: api2, vm, state, broadcast }) => () => {
  if (state.showSelfIcon) {
    state.showIcon = false;
  }
  vm.$on("menu-item-click", api2.handleMenuItemClick);
  vm.$on("current-item-click", api2.handleMenuItemClick);
  vm.$on("selected-index", (selectedIndex) => {
    broadcast("TinyDropdownMenu", "menu-selected-index", selectedIndex);
  });
  vm.$on("is-disabled", api2.clickOutside);
};
const beforeDistory = ({ api: api2, state }) => () => {
  if (state.triggerElm) {
    off(state.triggerElm, "keydown", api2.handleTriggerKeyDown);
    off(state.triggerElm, "focus", toggleFocus({ state, value: true }));
    off(state.triggerElm, "blur", toggleFocus({ state, value: false }));
    off(state.triggerElm, "click", toggleFocus({ state, value: false }));
    off(state.triggerElm, "mouseenter", api2.show);
    off(state.triggerElm, "mouseleave", api2.hide);
    off(state.triggerElm, "click", api2.handleClick);
    state.triggerElm = null;
  }
  if (state.dropdownElm) {
    state.dropdownElm.removeEventListener("keydown", api2.handleItemKeyDown, true);
    off(state.dropdownElm, "mouseenter", api2.show);
    off(state.dropdownElm, "mouseleave", api2.hide);
    state.dropdownElm = null;
  }
};
const clickOutside$2 = ({ props: props2, api: api2 }) => (disabled) => {
  if (props2.hideOnClick) {
    disabled ? api2.show() : api2.hide();
  }
};
const api$a = ["state", "handleMainButtonClick", "hide", "show", "initDomOperation", "handleClick", "clickOutside"];
const renderless$a = (props2, { reactive: reactive2, watch: watch2, provide: provide5, onMounted, computed }, { emit, parent, broadcast, vm, nextTick: nextTick2, mode, designConfig }) => {
  const api2 = {};
  const state = reactive2({
    visible: false,
    timeout: null,
    focusing: false,
    menuItems: [],
    menuItemsArray: [],
    triggerElm: null,
    dropdownElm: null,
    listId: `dropdown-menu-${guid()}`,
    showIcon: props2.showIcon,
    showSelfIcon: props2.showSelfIcon,
    designConfig,
    trigger: computed(() => {
      var _a;
      return props2.trigger || ((_a = designConfig == null ? void 0 : designConfig.props) == null ? void 0 : _a.trigger) || "hover";
    })
  });
  provide5("dropdownVm", vm);
  Object.assign(api2, {
    state,
    watchVisible: watchVisible({ broadcast, emit, nextTick: nextTick2 }),
    watchFocusing: watchFocusing(parent),
    show: show({ props: props2, state }),
    hide: hide({ api: api2, props: props2, state }),
    mounted: mounted$1({ api: api2, vm, state, broadcast }),
    handleClick: handleClick$3({ api: api2, props: props2, state, emit }),
    handleTriggerKeyDown: handleTriggerKeyDown({ api: api2, state }),
    handleItemKeyDown: handleItemKeyDown({ api: api2, props: props2, state }),
    resetTabindex: resetTabindex(api2),
    removeTabindex: removeTabindex(state),
    initAria: initAria({ state, props: props2 }),
    initEvent: initEvent({ api: api2, props: props2, state, vm, mode }),
    handleMenuItemClick: handleMenuItemClick$1({ props: props2, state, emit }),
    handleMainButtonClick: handleMainButtonClick({ api: api2, emit }),
    triggerElmFocus: triggerElmFocus(state),
    initDomOperation: initDomOperation({ api: api2, state, vm }),
    beforeDistory: beforeDistory({ api: api2, state }),
    clickOutside: clickOutside$2({ state, props: props2, api: api2 })
  });
  watch2(() => state.visible, api2.watchVisible);
  watch2(() => state.focusing, api2.watchFocusing);
  onMounted(api2.mounted);
  return api2;
};
const handleChange = ({ emit, state }) => () => {
  if (!state.disabled) {
    emit("change", state.value);
  }
};
const handleClick$2 = ({ emit, props: props2, state }) => (node) => {
  if (!state.disabled && !node.disabled) {
    state.value = node[props2.valueField];
    emit("update:modelValue", state.value);
  }
};
const moreNodeClick = ({ emit, props: props2, state }) => (node) => {
  if (!state.disabled) {
    const index3 = state.moreData.indexOf(node);
    state.moreData.splice(index3, 1, state.buttonData[state.buttonData.length - 1]);
    state.buttonData.splice(state.buttonData.length - 1, 1, node);
    state.value = node[props2.valueField];
    emit("update:modelValue", state.value);
  }
};
const getItemClass = ({ props: props2, state }) => (node) => {
  if (state.disabled || node.disabled) {
    return { disabled: true };
  }
  return props2.plain ? { plain: props2.plain } : {};
};
const api$9 = ["state", "handleClick", "moreNodeClick", "handleChange", "getItemClass"];
const renderless$9 = (props2, { computed, reactive: reactive2, watch: watch2, inject: inject2 }, { emit, parent }) => {
  var _a, _b;
  parent.tinyForm = parent.tinyForm || inject2("form", null);
  const state = reactive2({
    value: props2.modelValue,
    buttonData: ((_a = props2.data) == null ? void 0 : _a.slice(0, props2.showMore)) || [],
    moreData: ((_b = props2.data) == null ? void 0 : _b.slice(props2.showMore, props2.data.length)) || [],
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    disabled: computed(() => props2.disabled || state.formDisabled)
  });
  watch2(
    () => props2.modelValue,
    (value) => {
      if (!state.disabled && state.value !== value) {
        state.value = value;
      }
    },
    { immediate: true }
  );
  watch2(
    () => state.value,
    () => api2.handleChange()
  );
  const api2 = {
    state,
    handleClick: handleClick$2({ emit, props: props2, state }),
    moreNodeClick: moreNodeClick({ emit, props: props2, state }),
    handleChange: handleChange({ emit, state }),
    getItemClass: getItemClass({ props: props2, state })
  };
  return api2;
};
function _createForOfIteratorHelperLoose$h(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$h(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$h(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$h(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$h(o, minLen);
}
function _arrayLikeToArray$h(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$h = function _export_sfc2(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$h(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$t = defineComponent({
  emits: ["change", "edit", "update:modelValue"],
  props: [].concat(props, ["size", "data", "plain", "modelValue", "disabled", "valueField", "textField", "showMore", "showEdit", "border"]),
  components: {
    TinyPopover: Popover,
    TinyButton: Button$1,
    IconPopup: index$w(),
    IconWriting: index$K()
  },
  setup: function setup$1$1(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$9,
      api: api$9
    });
  }
});
var _hoisted_1$d = {
  key: 0,
  class: "tiny-group-item"
};
var _hoisted_2$a = ["tabindex", "onClick"];
var _hoisted_3$8 = {
  key: 2
};
var _hoisted_4$7 = {
  key: 1,
  class: "tiny-group-item show-more"
};
var _hoisted_5$7 = {
  key: 2
};
var _hoisted_6$4 = {
  key: 0,
  class: "tiny-group-item__more"
};
var _hoisted_7$3 = {
  class: "more-list"
};
var _hoisted_8$2 = ["onClick"];
var _hoisted_9$2 = {
  key: 1,
  class: "tiny-group-item__edit"
};
var _hoisted_10$2 = {
  key: 1,
  class: "tiny-button-group--empty"
};
function _sfc_render$j(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_button = resolveComponent("tiny-button");
  var _component_icon_popup = resolveComponent("icon-popup");
  var _component_tiny_popover = resolveComponent("tiny-popover");
  var _component_icon_writing = resolveComponent("icon-writing");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-button-group", [_ctx.size ? "tiny-button-group--" + _ctx.size : "", _ctx.border ? "" : "tiny-button-group--borderless"]])
    },
    [renderSlot(_ctx.$slots, "default", {}, function() {
      return [_ctx.data.length > 0 ? (openBlock(), createElementBlock(
        Fragment,
        {
          key: 0
        },
        [!(_ctx.showMore && _ctx.showMore > 0) ? (openBlock(), createElementBlock("ul", _hoisted_1$d, [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.data, function(node, index3) {
            return openBlock(), createElementBlock(
              "li",
              {
                key: index3,
                class: normalizeClass({
                  active: _ctx.state.value === node[_ctx.valueField]
                })
              },
              [createBaseVNode("button", {
                class: normalizeClass(_ctx.getItemClass(node)),
                style: normalizeStyle({
                  height: _ctx.size === "medium" ? "42px" : _ctx.size === "small" ? "32px" : _ctx.size === "mini" ? "24px" : "",
                  "line-height": _ctx.size === "medium" ? "40px" : _ctx.size === "small" ? "30px" : _ctx.size === "mini" ? "22px" : ""
                }),
                type: "button",
                tabindex: _ctx.getItemClass(node).disabled ? "-1" : "0",
                onClick: function onClick($event) {
                  return _ctx.handleClick(node);
                }
              }, toDisplayString(node[_ctx.textField]), 15, _hoisted_2$a), node.sup ? (openBlock(), createElementBlock(
                "span",
                {
                  key: 0,
                  class: normalizeClass(["tiny-group-item__sup", {
                    "tiny-group-item__sup-text": !node.sup.slot && !node.sup.icon && node.sup.text,
                    "tiny-group-item__sup-icon": !node.sup.slot && node.sup.icon
                  }, typeof node.sup.class === "string" ? node.sup.class : ""].concat(Array.isArray(node.sup.class) ? node.sup.class : []))
                },
                [node.sup.slot ? renderSlot(_ctx.$slots, node.sup.slot, {
                  key: 0,
                  sup: node.sup
                }) : node.sup.icon ? (openBlock(), createBlock(resolveDynamicComponent(node.sup.icon), {
                  key: 1
                })) : node.sup.text ? (openBlock(), createElementBlock(
                  "span",
                  _hoisted_3$8,
                  toDisplayString(node.sup.text),
                  1
                  /* TEXT */
                )) : createCommentVNode("v-if", true)],
                2
                /* CLASS */
              )) : createCommentVNode("v-if", true)],
              2
              /* CLASS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))])) : (openBlock(), createElementBlock("ul", _hoisted_4$7, [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.state.buttonData, function(node, index3) {
            return openBlock(), createElementBlock(
              "li",
              {
                key: index3,
                class: normalizeClass({
                  active: _ctx.state.value === node[_ctx.valueField]
                })
              },
              [createVNode(_component_tiny_button, {
                class: normalizeClass(_ctx.getItemClass(node)),
                onClick: function onClick($event) {
                  return _ctx.handleClick(node);
                }
              }, {
                default: withCtx(function() {
                  return [createTextVNode(
                    toDisplayString(node[_ctx.textField]),
                    1
                    /* TEXT */
                  )];
                }),
                _: 2
                /* DYNAMIC */
              }, 1032, ["class", "onClick"]), node.sup ? (openBlock(), createElementBlock(
                "span",
                {
                  key: 0,
                  class: normalizeClass(["tiny-group-item__sup", {
                    "tiny-group-item__sup-text": !node.sup.slot && !node.sup.icon && node.sup.text,
                    "tiny-group-item__sup-icon": !node.sup.slot && node.sup.icon
                  }, typeof node.sup.class === "string" ? node.sup.class : ""].concat(Array.isArray(node.sup.class) ? node.sup.class : []))
                },
                [node.sup.slot ? renderSlot(_ctx.$slots, node.sup.slot, {
                  key: 0,
                  sup: node.sup
                }) : node.sup.icon ? (openBlock(), createBlock(resolveDynamicComponent(node.sup.icon), {
                  key: 1
                })) : node.sup.text ? (openBlock(), createElementBlock(
                  "span",
                  _hoisted_5$7,
                  toDisplayString(node.sup.text),
                  1
                  /* TEXT */
                )) : createCommentVNode("v-if", true)],
                2
                /* CLASS */
              )) : createCommentVNode("v-if", true)],
              2
              /* CLASS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )), _ctx.data.length > _ctx.showMore ? (openBlock(), createElementBlock("li", _hoisted_6$4, [createVNode(_component_tiny_popover, {
          "visible-arrow": false,
          width: "200",
          "popper-class": "tiny-group-item__more-popover"
        }, {
          reference: withCtx(function() {
            return [createVNode(_component_tiny_button, {
              class: "more-button"
            }, {
              default: withCtx(function() {
                return [createVNode(_component_icon_popup)];
              }),
              _: 1
              /* STABLE */
            })];
          }),
          default: withCtx(function() {
            return [createBaseVNode("ul", _hoisted_7$3, [(openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.state.moreData, function(moreNode, index3) {
                return openBlock(), createElementBlock("li", {
                  key: index3,
                  class: normalizeClass({
                    active: _ctx.state.value === moreNode[_ctx.valueField],
                    "more-item": true
                  }),
                  onClick: function onClick($event) {
                    return _ctx.moreNodeClick(moreNode);
                  }
                }, toDisplayString(moreNode[_ctx.textField]), 11, _hoisted_8$2);
              }),
              128
              /* KEYED_FRAGMENT */
            ))])];
          }),
          _: 1
          /* STABLE */
        })])) : createCommentVNode("v-if", true), _ctx.showEdit ? (openBlock(), createElementBlock("li", _hoisted_9$2, [createVNode(_component_tiny_button, {
          onClick: _cache[0] || (_cache[0] = function($event) {
            return _ctx.$emit("edit");
          }),
          class: "edit-button"
        }, {
          default: withCtx(function() {
            return [createVNode(_component_icon_writing)];
          }),
          _: 1
          /* STABLE */
        })])) : createCommentVNode("v-if", true)]))],
        64
        /* STABLE_FRAGMENT */
      )) : (openBlock(), createElementBlock("span", _hoisted_10$2, " 暂无数据 "))];
    })],
    2
    /* CLASS */
  );
}
var pc$5 = /* @__PURE__ */ _export_sfc$h(_sfc_main$t, [["render", _sfc_render$j]]);
const index$e = "";
function _extends$f() {
  _extends$f = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$f.apply(this, arguments);
}
var template$9 = function template2(mode) {
  var _process$env;
  typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  return pc$5;
};
var buttonGroupProps = _extends$f({}, $props, {
  size: String,
  data: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  plain: Boolean,
  modelValue: [String, Number],
  disabled: Boolean,
  valueField: {
    type: String,
    default: "value"
  },
  textField: {
    type: String,
    default: "text"
  },
  showMore: Number,
  showEdit: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: true
  }
});
var ButtonGroup = defineComponent({
  name: $prefix + "ButtonGroup",
  provide: function provide() {
    return {
      buttonGroup: this
    };
  },
  props: buttonGroupProps,
  setup: function setup(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$9
    });
  }
});
var version$a = "3.16.0";
ButtonGroup.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
ButtonGroup.install = function(Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup);
};
ButtonGroup.version = version$a;
const toggleItem = (state) => (active, item) => {
  if (item.disabled) {
    return;
  }
  if (item.type === "sort") {
    if (!item.modelValue || item.modelValue === "desc") {
      item.state.sort = "asc";
      item.$emit("update:modelValue", "asc");
      item.$emit("click", "asc");
    } else {
      item.state.sort = "desc";
      item.$emit("update:modelValue", "desc");
      item.$emit("click", "desc");
    }
  } else {
    const singleton = state.children.length === 1 && item.state.showPopup;
    state.children.forEach((item2, index3) => {
      if (index3 === active && !singleton) {
        item2.toggle(true);
      } else if (item2.state.showPopup) {
        item2.toggle(false, { immediate: true });
      }
    });
  }
};
const updateOffset = ({ props: props2, state, vm }) => () => {
  if (!vm.$refs.menu) {
    return;
  }
  const rect = vm.$refs.menu.getBoundingClientRect();
  if (props2.direction === "down") {
    state.offset = rect.bottom;
  } else {
    state.offset = window.innerHeight - rect.top;
  }
};
const clickOutside$1 = ({ props: props2, state }) => () => {
  if (props2.closeOnClickOutside && props2.closeOnClickOverlay) {
    state.children.forEach((item) => {
      item.type !== "filter" && item.toggle(false);
    });
  }
};
const getScroller = (el, root) => {
  const overflowScrollReg = /scroll|auto/i;
  let node = el;
  let getComputedStyle = window.getComputedStyle;
  while (node && node.tagName !== "HTML" && node.nodeType === 1 && node !== root) {
    const { overflowY } = getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== "BODY") {
        return node;
      }
      const { overflowY: htmlOverflowY } = getComputedStyle(node.parentNode);
      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }
    node = node.parentNode;
  }
  return root || null;
};
const useVuePopper = ({
  api: api2,
  props: props2,
  hooks,
  instance,
  state,
  dropdownVm,
  designConfig
}) => {
  var _a, _b;
  const { nextTick: nextTick2, onBeforeUnmount: onBeforeUnmount2, onDeactivated: onDeactivated2, onMounted, reactive: reactive2, toRefs, watch: watch2 } = hooks;
  const { emit, slots, vm, parent } = instance;
  const designProps = {
    placement: props2.placement || ((_a = designConfig == null ? void 0 : designConfig.props) == null ? void 0 : _a.placement) || "bottom-end",
    visibleArrow: props2.visibleArrow || ((_b = designConfig == null ? void 0 : designConfig.props) == null ? void 0 : _b.visibleArrow) || false
  };
  const popper = vue_popper_default({
    emit,
    nextTick: nextTick2,
    onBeforeUnmount: onBeforeUnmount2,
    onDeactivated: onDeactivated2,
    props: __spreadValues(__spreadValues({
      popperOptions: { boundariesPadding: 0, gpuAcceleration: false },
      offset: 0,
      boundariesPadding: 5
    }, props2), designProps),
    reactive: reactive2,
    vm,
    slots,
    toRefs,
    watch: watch2
  });
  onMounted(() => {
    if (!dropdownVm)
      return;
    dropdownVm.popperElm = popper.popperElm.value = vm.$el;
    nextTick2(() => popper.referenceElm.value = dropdownVm.$el);
    !props2.multiStage && dropdownVm.initDomOperation();
    if (dropdownVm.inheritWidth) {
      dropdownVm.popperElm.style.minWidth = dropdownVm.$el.clientWidth + "px";
    }
  });
  onBeforeUnmount2(() => {
    popper.destroyPopper("remove");
    popper.popperElm = null;
    popper.referenceElm = null;
  });
  api2.doDestroy = popper.doDestroy;
  state.size = (dropdownVm == null ? void 0 : dropdownVm.size) || "";
  state.showPopper = popper.showPopper.value;
  parent.$on("updatePopper", () => {
    if (state.showPopper) {
      popper.updatePopper();
    }
  });
  parent.$on("visible", (value) => {
    state.showPopper = value;
    popper.showPopper.value = value;
  });
  watch2(
    () => props2.placement,
    (value) => {
      popper.currentPlacement.value = value;
    }
  );
};
const mounted = ({ api: api2, parent, state }) => () => {
  parent.$on("menu-selected-index", (selectedIndex) => {
    state.selectedIndex = selectedIndex;
  });
  parent.$on("menu-item-click", api2.handleMenuItemClick);
  parent.$on("mouseenter-tips", (showContent, label) => {
    state.label = label;
    state.showContent = showContent;
  });
  parent.$on("mouseleave-tips", (showContent, label) => {
    state.label = label;
    state.showContent = showContent;
  });
};
const handleMenuItemClick = ({ state, dispatch }) => ({ itemData, vm, label, showContent, disabled }) => {
  state.label = label;
  state.showContent = showContent;
  const data8 = { itemData, vm, disabled };
  dispatch("TinyDropdown", "current-item-click", data8);
};
const handleMouseenter = (emit) => ($event) => {
  emit("mouseenter", $event);
};
const handleMouseleave = (emit) => ($event) => {
  emit("mouseleave", $event);
};
const api$8 = [
  "state",
  "toggleItem",
  "updateOffset",
  "clickOutside",
  "doDestroy",
  "handleMouseenter",
  "handleMouseleave"
];
const renderless$8 = (props2, hooks, instance) => {
  const api2 = {};
  const { reactive: reactive2, provide: provide5, onMounted, inject: inject2 } = hooks;
  const { nextTick: nextTick2, mode, vm, parent, dispatch, emit, designConfig } = instance;
  const state = reactive2({
    offset: 0,
    scroller: null,
    children: [],
    size: "",
    showPopper: false,
    label: "",
    showContent: false,
    selected: false,
    selectedIndex: -1,
    canvasHeight: inject2("change-size", null)
  });
  provide5("dropdownMenuVm", vm);
  provide5("multiStage", props2.multiStage);
  const dropdownVm = inject2("dropdownVm");
  if (mode === "mobile") {
    nextTick2(() => {
      state.scroller = getScroller(vm.$refs.menu);
    });
  } else {
    useVuePopper({ api: api2, hooks, props: props2, instance, state, dropdownVm, designConfig });
  }
  Object.assign(api2, {
    state,
    toggleItem: toggleItem(state),
    clickOutside: clickOutside$1({ props: props2, state }),
    updateOffset: updateOffset({ props: props2, state, vm }),
    mounted: mounted({ api: api2, parent, state }),
    handleMouseenter: handleMouseenter(emit),
    handleMouseleave: handleMouseleave(emit),
    handleMenuItemClick: handleMenuItemClick({ dispatch, state })
  });
  onMounted(api2.mounted);
  return api2;
};
const getTitle = (props2) => () => {
  if (props2.title) {
    return props2.title;
  }
  const match = props2.options.filter((option) => option.value === props2.modelValue);
  return match.length ? match[0].text : "";
};
const bindScroll = ({ api: api2, parent }) => (value) => {
  const action = value ? on : off;
  action(parent.state.scroller, "scroll", api2.onScroll, true);
};
const toggle = ({ parent, props: props2, state }) => (show3) => {
  if (show3 === state.showPopup) {
    return;
  }
  state.transition = !props2.options.immediate;
  state.showPopup = show3;
  if (show3) {
    parent.updateOffset();
    state.showWrapper = true;
  }
};
const onScroll = (parent) => () => parent.updateOffset();
const clickWrapper = (parent) => (event) => parent.$el && event.stopPropagation();
const clickItem = ({ emit, props: props2, state }) => (value) => {
  state.showPopup = false;
  if (value !== props2.modelValue) {
    emit("update:modelValue", value);
    emit("change", value);
  }
};
const getItemStyle = ({ parent, state }) => () => ({
  zIndex: parent.zIndex,
  top: parent.direction === "down" ? state.offset + "px" : "",
  bottom: parent.direction !== "down" ? state.offset + "px" : ""
});
const getOptionStyle = (state) => (tag, tags) => {
  if (tags.includes(tag.value)) {
    return {
      color: state.activeColor ? state.activeColor : "#f36f64",
      border: `1px solid ${state.activeColor ? state.activeColor : "#f36f64"}`
    };
  } else {
    return {
      color: "#333"
    };
  }
};
const closed$1 = ({ emit, state }) => () => {
  state.showWrapper = false;
  emit("closed");
};
const open$1 = (emit) => () => emit("open");
const opened$1 = (emit) => () => emit("opened");
const close$2 = (emit) => () => emit("close");
const tagClick = ({ emit, props: props2 }) => (key, tag, event) => {
  event.preventDefault();
  event.stopPropagation();
  const filterValue = props2.modelValue.slice();
  const value = filterValue[key];
  const index3 = value.indexOf(tag.value);
  if (index3 === -1) {
    value.push(tag.value);
  } else {
    value.splice(index3, 1);
  }
  filterValue[key] = value;
  emit("update:modelValue", filterValue);
};
const confirm = ({ emit, props: props2, state }) => () => {
  state.showPopup = false;
  emit("confirm", props2.modelValue);
};
const reset = ({ emit, props: props2 }) => () => {
  const len = props2.modelValue.length;
  const array = [];
  for (let i = 0; i < len; i++) {
    array.push([]);
  }
  emit("update:modelValue", array);
  emit("reset", array);
};
const clickOutside = (parent) => () => {
  if (parent.closeOnClickOutside && parent.closeOnClickOverlay) {
    parent.state.children.forEach((item) => {
      item.toggle(false);
    });
  }
};
const handleClick$1 = ({
  state,
  props: props2,
  dispatch,
  vm,
  emit
}) => (event) => {
  event.stopPropagation();
  state.currentIndex = `${props2.currentIndex}`;
  const data8 = { itemData: props2.itemData, vm, disabled: props2.disabled };
  if (!props2.disabled) {
    emit("item-click", data8);
  }
  dispatch("TinyDropdown", "menu-item-click", data8);
  dispatch("TinyDropdown", "is-disabled", [props2.disabled]);
  dispatch("TinyDropdown", "selected-index", [state.currentIndex]);
};
const computedGetIcon = ({ constants: constants2, designConfig }) => (name = "leftWardArrow") => {
  return (designConfig == null ? void 0 : designConfig.icons[name]) || (constants2 == null ? void 0 : constants2.ICON_MAP[name]);
};
const getTip = ({ props: props2, vm }) => {
  if (props2.tip && typeof props2.tip === "function") {
    return props2.tip({ itemData: props2.itemData, vm });
  }
  return props2.tip || "";
};
const api$7 = [
  "state",
  "confirm",
  "clickOutside",
  "getOptionStyle",
  "reset",
  "tagClick",
  "clickItem",
  "clickWrapper",
  "toggle",
  "open",
  "opened",
  "close",
  "closed",
  "handleClick",
  "getTip"
];
const initState$1 = ({ reactive: reactive2, computed, api: api2, props: props2, parent, dropdownMenuVm }) => {
  const state = reactive2({
    checkedStatus: dropdownMenuVm == null ? void 0 : dropdownMenuVm.checkedStatus,
    sort: props2.modelValue,
    transition: true,
    getTitle: false,
    showWrapper: false,
    showPopup: false,
    duration: parent.duration,
    overlay: computed(() => parent.overlay),
    offset: computed(() => parent.state.offset),
    direction: computed(() => parent.direction),
    displayTitle: computed(() => api2.getTitle()),
    itemStyle: computed(() => api2.getItemStyle()),
    activeColor: computed(() => parent.activeColor),
    closeOnClickOverlay: computed(() => parent.closeOnClickOverlay),
    dropdownMenuVm,
    currentIndex: props2.currentIndex,
    textField: (dropdownMenuVm == null ? void 0 : dropdownMenuVm.textField) || props2.textField,
    popperClass: (dropdownMenuVm == null ? void 0 : dropdownMenuVm.popperClass) || "",
    getIcon: computed(() => api2.computedGetIcon()),
    children: []
  });
  return state;
};
const initApi$1 = ({ api: api2, state, emit, props: props2, parent, dispatch, vm, constants: constants2, designConfig }) => {
  Object.assign(api2, {
    state,
    open: open$1(emit),
    opened: opened$1(emit),
    close: close$2(emit),
    getTitle: getTitle(props2),
    onScroll: onScroll(parent),
    reset: reset({ emit, props: props2 }),
    closed: closed$1({ emit, state }),
    clickWrapper: clickWrapper(parent),
    clickOutside: clickOutside(parent),
    tagClick: tagClick({ emit, props: props2 }),
    getOptionStyle: getOptionStyle(state),
    toggle: toggle({ parent, props: props2, state }),
    clickItem: clickItem({ emit, props: props2, state }),
    getItemStyle: getItemStyle({ parent, state }),
    bindScroll: bindScroll({ api: api2, parent }),
    confirm: confirm({ emit, props: props2, state }),
    handleClick: handleClick$1({ state, props: props2, dispatch, vm, emit }),
    computedGetIcon: computedGetIcon({ constants: constants2, designConfig }),
    getTip: getTip({ props: props2, vm })
  });
};
const renderless$7 = (props2, { computed, onMounted, reactive: reactive2, watch: watch2, inject: inject2 }, { parent, emit, vm, dispatch, constants: constants2, designConfig }) => {
  const api2 = {};
  const dropdownMenuVm = inject2("dropdownMenuVm", null);
  const state = initState$1({ reactive: reactive2, computed, api: api2, props: props2, parent, dropdownMenuVm });
  initApi$1({ api: api2, state, emit, props: props2, parent, dispatch, vm, constants: constants2, designConfig });
  watch2(() => state.showPopup, api2.bindScroll);
  onMounted(() => {
    const realParent = parent.$parent.$parent || {};
    if (realParent.state && realParent.state.children) {
      realParent.state.children.push(vm);
    } else {
      if (dropdownMenuVm) {
        dropdownMenuVm.state.children = [...dropdownMenuVm.state.children, vm];
      }
    }
    if (props2.disabled) {
      state.checkedStatus = false;
    }
  });
  return api2;
};
const index$d = "";
function _createForOfIteratorHelperLoose$g(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$g(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$g(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$g(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$g(o, minLen);
}
function _arrayLikeToArray$g(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$g = function _export_sfc22(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$g(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$s = defineComponent({
  name: $prefix + "DropdownItem",
  componentName: $prefix + "DropdownItem",
  emits: ["item-click", "update:modelValue", "change", "closed", "open", "opened", "close", "confirm", "reset"],
  props: [].concat(props, [
    "disabled",
    "divided",
    "icon",
    "itemData",
    "selected",
    "currentIndex",
    "title",
    "titleClass",
    "options",
    "type",
    "label",
    "selectedField",
    "multiStage",
    // tiny新增
    "appendToBody",
    "textField",
    "tip",
    "tipPosition"
  ]),
  components: {
    IconDeltaLeft: index$E(),
    TinyTooltip: Tooltip$1
  },
  setup: function setup$1$12(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$7,
      api: api$7
    });
  }
});
var _hoisted_1$c = ["aria-disabled", "tabindex"];
var _hoisted_2$9 = {
  class: "tiny-dropdown-item__wrap"
};
var _hoisted_3$7 = {
  key: 0,
  class: "tiny-dropdown-item__expand tiny-dropdown-menu__item-expand"
};
var _hoisted_4$6 = {
  class: "tiny-dropdown-item__content tiny-dropdown-menu__item-content"
};
var _hoisted_5$6 = {
  class: "tiny-dropdown-item__label"
};
function _sfc_render$i(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_dropdown_item = resolveComponent("tiny-dropdown-item");
  var _component_tiny_tooltip = resolveComponent("tiny-tooltip");
  return openBlock(), createBlock(_component_tiny_tooltip, {
    content: _ctx.getTip,
    placement: _ctx.tipPosition
  }, {
    default: withCtx(function() {
      return [createBaseVNode("li", {
        class: normalizeClass(["tiny-dropdown-item tiny-dropdown-menu__item", {
          "is-disabled": _ctx.disabled,
          "tiny-dropdown-item--divided tiny-dropdown-menu__item--divided": _ctx.divided,
          "tiny-dropdown-item--check-status": _ctx.state.checkedStatus && _ctx.selected,
          "has-children": _ctx.itemData.children && _ctx.itemData.children.length
        }]),
        ref: "dropdownItem",
        onClick: _cache[0] || (_cache[0] = withModifiers(function() {
          return _ctx.handleClick && _ctx.handleClick.apply(_ctx, arguments);
        }, ["stop"])),
        onMousedown: _cache[1] || (_cache[1] = withModifiers(function() {
        }, ["stop"])),
        "aria-disabled": _ctx.disabled,
        tabindex: _ctx.disabled ? null : -1
      }, [createBaseVNode("div", _hoisted_2$9, [_ctx.itemData.children && _ctx.itemData.children.length ? (openBlock(), createElementBlock("span", _hoisted_3$7, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.state.getIcon)))])) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_4$6, [_ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
        key: 0,
        class: "tiny-svg-size"
      })) : createCommentVNode("v-if", true), createBaseVNode("span", _hoisted_5$6, [renderSlot(_ctx.$slots, "default", {
        itemData: _ctx.itemData
      }, function() {
        return [createBaseVNode(
          "span",
          null,
          toDisplayString(_ctx.label),
          1
          /* TEXT */
        )];
      })])]), _ctx.itemData.children && _ctx.itemData.children.length ? (openBlock(), createElementBlock(
        "ul",
        {
          key: 1,
          class: normalizeClass(["tiny-dropdown-menu", "tiny-dropdown-item--child tiny-dropdown-menu__item--child", _ctx.state.popperClass])
        },
        [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.itemData.children, function(item, index3) {
            return openBlock(), createBlock(_component_tiny_dropdown_item, {
              key: index3,
              label: item[_ctx.state.textField],
              "item-data": item,
              icon: item.icon,
              disabled: item.disabled,
              divided: item.divided,
              tip: item.tip,
              "tip-position": item.tipPosition
            }, {
              default: withCtx(function() {
                return [renderSlot(_ctx.$slots, "default", {
                  itemData: item
                })];
              }),
              _: 2
              /* DYNAMIC */
            }, 1032, ["label", "item-data", "icon", "disabled", "divided", "tip", "tip-position"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true)])], 42, _hoisted_1$c)];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["content", "placement"]);
}
var pc$4 = /* @__PURE__ */ _export_sfc$g(_sfc_main$s, [["render", _sfc_render$i]]);
const MIN_DISTANCE = 10;
const getDirection = (x, y) => {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }
  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }
  return "";
};
const touchStart = (state) => (event) => {
  resetTouchStatus(state);
  state.startX = event.touches[0].clientX;
  state.startY = event.touches[0].clientY;
};
const touchMove = (state) => (event) => {
  const touch = event.touches[0];
  state.deltaX = touch.clientX - state.startX;
  state.deltaY = touch.clientY - state.startY;
  state.offsetX = Math.abs(state.deltaX);
  state.offsetY = Math.abs(state.deltaY);
  state.direction = state.direction || getDirection(state.offsetX, state.offsetY);
};
const resetTouchStatus = (state) => {
  state.direction = "";
  state.deltaX = 0;
  state.deltaY = 0;
  state.offsetX = 0;
  state.offsetY = 0;
};
const getStyle = (props2) => () => {
  const style = __spreadValues({}, props2.popupStyle);
  if (!isNull$1(props2.duration)) {
    const key = props2.position === "center" ? "animationDuration" : "transitionDuration";
    style[key] = `${props2.duration}s`;
  }
  return style;
};
const watchValue = (api2) => (value) => {
  const type = value ? "open" : "close";
  api2[type]();
};
const open = ({ api: api2, constants: constants2, emit, props: props2, state }) => () => {
  if (state.opened) {
    return;
  }
  if (props2.zIndex !== void 0) {
    state.context.zIndex = props2.zIndex;
  }
  api2.renderOverlay();
  state.opened = true;
  emit("open");
  if (props2.lockScroll) {
    on(document, "touchstart", touchStart);
    on(document, "touchmove", api2.onTouchMove);
    if (!state.context.lockCount) {
      document.body.classList.add(constants2.OVERFLOWHIDDEN);
    }
    state.context.lockCount++;
  }
};
const close$1 = ({ api: api2, constants: constants2, emit, props: props2, state }) => () => {
  if (!state.opened) {
    return;
  }
  if (props2.lockScroll) {
    state.context.lockCount--;
    off(document, "touchstart", touchStart);
    off(document, "touchmove", api2.onTouchMove);
    if (!state.context.lockCount) {
      document.body.classList.remove(constants2.OVERFLOWHIDDEN);
    }
  }
  state.opened = false;
  emit("update:modelValue", false);
  emit("close");
};
const onTouchMove = ({ vm, state }) => (event) => {
  const direction = state.deltaY > 0 ? "10" : "01";
  const el = getScroller()(event.target, vm.$refs.$el);
  const { scrollHeight, offsetHeight, scrollTop } = el;
  let status = "11";
  if (scrollTop === 0) {
    status = offsetHeight >= scrollHeight ? "00" : "01";
  } else if (scrollTop + offsetHeight >= scrollHeight) {
    status = "10";
  }
  if (status !== "11" && state.direction === "vertical" && !(parseInt(status, 2) & parseInt(direction, 2))) {
    event.preventDefault();
  }
};
const renderOverlay = ({ api: api2, nextTick: nextTick2, props: props2, state }) => () => {
  if (!props2.modelValue) {
    return;
  }
  nextTick2(() => {
    api2.updateZIndex(props2.overlay ? 1 : 0);
    if (props2.overlay) {
      state.zIndex = state.context.zIndex++;
    }
  });
};
const updateZIndex = ({ vm, state }) => (value = 0) => vm.$refs.popup.style.zIndex = ++state.context.zIndex + value;
const clickOverlay = ({ api: api2, props: props2, emit }) => () => {
  if (props2.closeOnClickOverlay) {
    api2.close();
    emit("click-overlay");
  }
};
const closed = (emit) => () => emit("closed");
const opened = (emit) => () => emit("opened");
const api$6 = ["state", "open", "close", "clickOverlay", "onTouchMove", "opened", "closed"];
const initState = ({ reactive: reactive2, computed, props: props2, api: api2 }) => {
  const state = reactive2({
    transitionName: computed(
      () => props2.transition || props2.position === "center" ? "tiny-fade" : `tiny-popup-slide-${props2.position}`
    ),
    style: computed(() => api2.getStyle()),
    inited: computed(() => state.inited || props2.modelValue),
    opened: false,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    direction: "",
    shouldRender: computed(() => state.inited || props2.lazyRender),
    context: { zIndex: 2e3, lockCount: 0, stack: [] },
    zIndex: props2.zIndex,
    overlayStyle: computed(() => __spreadValues({
      zIndex: state.zIndex
    }, props2.overlayStyle))
  });
  return state;
};
const initApi = ({ api: api2, props: props2, state, vm, emit, nextTick: nextTick2, constants: constants2 }) => {
  Object.assign(api2, {
    state,
    opened: opened(emit),
    closed: closed(emit),
    getStyle: getStyle(props2),
    watchValue: watchValue(api2),
    updateZIndex: updateZIndex({ vm, state }),
    clickOverlay: clickOverlay({ api: api2, emit, props: props2 }),
    renderOverlay: renderOverlay({ api: api2, nextTick: nextTick2, props: props2, state }),
    onTouchMove: onTouchMove({ vm, state }),
    open: open({ api: api2, constants: constants2, emit, props: props2, state }),
    close: close$1({ api: api2, constants: constants2, emit, props: props2, state })
  });
};
const renderless$6 = (props2, { computed, onMounted, reactive: reactive2, watch: watch2, nextTick: nextTick2 }, { constants: constants2, vm, emit }) => {
  const api2 = {};
  const state = initState({ reactive: reactive2, computed, props: props2, api: api2 });
  initApi({ api: api2, props: props2, state, vm, emit, nextTick: nextTick2, constants: constants2 });
  watch2(() => props2.modelValue, api2.watchValue, { immediate: true });
  onMounted(() => {
    props2.modelValue && api2.open();
  });
  return api2;
};
const index$c = "";
function _createForOfIteratorHelperLoose$f(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$f(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$f(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$f(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$f(o, minLen);
}
function _arrayLikeToArray$f(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$f = function _export_sfc23(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$f(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
function _extends$e() {
  _extends$e = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$e.apply(this, arguments);
}
var $constants$2 = {
  OVERFLOWHIDDEN: "tiny-overflow-hidde"
};
var _sfc_main$r = defineComponent({
  name: $prefix + "Popup",
  emits: ["open", "close", "update:modelValue", "click-overlay", "closed", "opened", "click"],
  components: {
    IconClose: index$L()
  },
  props: _extends$e({}, $props, {
    _constants: {
      type: Object,
      default: function _default2() {
        return $constants$2;
      }
    },
    closeIcon: {
      type: String,
      default: "cross"
    },
    closeIconPosition: {
      type: String,
      default: "top-right"
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    closeable: {
      type: Boolean,
      default: true
    },
    duration: [Number, String],
    lazyRender: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    modelValue: Boolean,
    overlay: {
      type: Boolean,
      default: true
    },
    overlayClass: String,
    overlayStyle: Object,
    popupClass: String,
    popupStyle: Object,
    position: {
      type: String,
      default: "center"
    },
    round: Boolean,
    safeAreaInsetBottom: Boolean,
    transition: String,
    zIndex: [Number, String]
  }),
  setup: function setup$1$13(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$6,
      api: api$6,
      mono: true
    });
  }
});
function _sfc_render$h(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_close = resolveComponent("icon-close");
  return openBlock(), createElementBlock("div", null, [createVNode(Transition, {
    name: _ctx.state.transitionName,
    onAfterEnter: _ctx.opened,
    onAfterLeave: _ctx.closed,
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          ref: "popup",
          class: normalizeClass(["tiny-popup", [_ctx.round ? "tiny-popup--round" : "", _ctx.position ? "tiny-popup--" + _ctx.position : "", _ctx.popupClass]]),
          style: normalizeStyle(_ctx.state.style),
          onClick: _cache[0] || (_cache[0] = function($event) {
            return _ctx.$emit("click");
          })
        },
        [renderSlot(_ctx.$slots, "default"), _ctx.closeable ? (openBlock(), createBlock(_component_icon_close, {
          key: 0,
          class: "tiny-popup__close-icon tiny-popup__close-icon--top-right",
          fill: "#c8c9cc",
          tabindex: "0",
          onClick: _ctx.close
        }, null, 8, ["onClick"])) : createCommentVNode("v-if", true)],
        6
        /* CLASS, STYLE */
      ), [[vShow, _ctx.modelValue]])];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["name", "onAfterEnter", "onAfterLeave"]), createVNode(Transition, {
    name: "tiny-fade",
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          style: normalizeStyle(_ctx.state.overlayStyle),
          class: normalizeClass([_ctx.overlayClass, "tiny-overlay"]),
          onClick: _cache[1] || (_cache[1] = function() {
            return _ctx.clickOverlay && _ctx.clickOverlay.apply(_ctx, arguments);
          })
        },
        [renderSlot(_ctx.$slots, "overlay")],
        6
        /* CLASS, STYLE */
      ), [[vShow, _ctx.state.opened && _ctx.overlay]])];
    }),
    _: 3
    /* FORWARDED */
  })]);
}
var Popup = /* @__PURE__ */ _export_sfc$f(_sfc_main$r, [["render", _sfc_render$h]]);
var version$9 = "3.16.0";
Popup.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
Popup.install = function(Vue) {
  Vue.component(Popup.name, Popup);
};
Popup.version = version$9;
const index$b = "";
function _createForOfIteratorHelperLoose$e(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$e(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$e(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$e(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$e(o, minLen);
}
function _arrayLikeToArray$e(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$e = function _export_sfc24(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$e(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$q = defineComponent({
  directives: directive$1({
    Clickoutside: clickoutside_default
  }),
  props: [].concat(props, ["modelValue", "title", "disabled", "titleClass", "options", "icon", "type"]),
  components: {
    IconYes: index$M(),
    TinyPopup: Popup,
    TinyButton: Button$1
  },
  emits: ["update:modelValue", "open", "opened", "click", "change", "closed", "close", "reset", "confirm", "item-click"],
  setup: function setup$1$14(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$7,
      api: api$7
    });
  }
});
var _hoisted_1$b = {
  key: 0,
  class: "tiny-mobile-dropdown-item__options"
};
var _hoisted_2$8 = ["onClick"];
var _hoisted_3$6 = {
  class: "tiny-mobile-dropdown-item__option-icon"
};
var _hoisted_4$5 = {
  class: "tiny-mobile-dropdown-item__option-title"
};
var _hoisted_5$5 = {
  class: "tiny-mobile-dropdown-item__option-value"
};
var _hoisted_6$3 = {
  key: 1,
  class: "tiny-mobile-dropdown-item__filter"
};
var _hoisted_7$2 = {
  class: "tiny-mobile-dropdown-item__filter-wrap"
};
var _hoisted_8$1 = {
  class: "tiny-mobile-dropdown-item__filter-title"
};
var _hoisted_9$1 = ["onClick"];
var _hoisted_10$1 = {
  class: "tiny-mobile-dropdown-item__filter-operate"
};
function _sfc_render$g(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_yes = resolveComponent("icon-yes");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _component_tiny_popup = resolveComponent("tiny-popup");
  var _directive_clickoutside = resolveDirective("clickoutside");
  return withDirectives((openBlock(), createElementBlock(
    "div",
    {
      ref: "wrapper",
      class: normalizeClass(["tiny-mobile-dropdown-item--" + _ctx.state.direction, "tiny-mobile-dropdown-item"]),
      onClick: _cache[1] || (_cache[1] = function() {
        return _ctx.clickWrapper && _ctx.clickWrapper.apply(_ctx, arguments);
      }),
      style: normalizeStyle(_ctx.state.itemStyle)
    },
    [createVNode(_component_tiny_popup, {
      modelValue: _ctx.state.showPopup,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
        return _ctx.state.showPopup = $event;
      }),
      "popup-class": "tiny-mobile-dropdown-item__content",
      overlay: _ctx.state.overlay,
      "close-on-click-overlay": _ctx.state.closeOnClickOverlay,
      closeable: false,
      position: _ctx.state.direction === "down" ? "top" : "bottom",
      duration: _ctx.state.transition ? _ctx.state.duration : 0,
      onOpen: _ctx.open,
      onClose: _ctx.close,
      onOpened: _ctx.opened,
      onClosed: _ctx.closed
    }, {
      default: withCtx(function() {
        return [renderSlot(_ctx.$slots, "default", {}, function() {
          return [_ctx.type === "selection" ? (openBlock(), createElementBlock("div", _hoisted_1$b, [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.options, function(item, index3) {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["tiny-mobile-dropdown-item__cell tiny-mobile-dropdown-item__option", item.value === _ctx.modelValue ? "is-active" : ""]),
                key: index3,
                tabindex: "0",
                onClick: function onClick($event) {
                  return _ctx.clickItem(item.value);
                }
              }, [createBaseVNode("div", _hoisted_3$6, [renderSlot(_ctx.$slots, "icon", {}, function() {
                return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))];
              })]), createBaseVNode("div", _hoisted_4$5, [renderSlot(_ctx.$slots, "title", {
                titleData: item
              }, function() {
                return [createBaseVNode(
                  "span",
                  {
                    style: normalizeStyle({
                      color: item.value === _ctx.modelValue && _ctx.state.activeColor ? _ctx.state.activeColor : ""
                    })
                  },
                  toDisplayString(item.text),
                  5
                  /* TEXT, STYLE */
                )];
              })]), createBaseVNode("div", _hoisted_5$5, [item.value === _ctx.modelValue ? (openBlock(), createBlock(_component_icon_yes, {
                key: 0,
                fill: _ctx.state.activeColor ? _ctx.state.activeColor : "#f36f64"
              }, null, 8, ["fill"])) : createCommentVNode("v-if", true)])], 10, _hoisted_2$8);
            }),
            128
            /* KEYED_FRAGMENT */
          ))])) : createCommentVNode("v-if", true), _ctx.type === "filter" ? withDirectives((openBlock(), createElementBlock("div", _hoisted_6$3, [createBaseVNode("div", _hoisted_7$2, [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.options, function(item, key) {
              return openBlock(), createElementBlock("div", {
                key,
                class: "tiny-mobile-dropdown-item__cell tiny-mobile-dropdown-item__filter-item"
              }, [createBaseVNode(
                "span",
                _hoisted_8$1,
                toDisplayString(item.title),
                1
                /* TEXT */
              ), createBaseVNode("ul", null, [(openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(_ctx.options.length === 0 ? item.data = [] : item.data, function(tag, tagkey) {
                  return openBlock(), createElementBlock("li", {
                    class: normalizeClass(["tiny-mobile-dropdown-item__filter-li", [_ctx.modelValue[key].indexOf(tag.value) > -1 ? "checked" : ""]]),
                    style: normalizeStyle(_ctx.getOptionStyle(tag, _ctx.modelValue[key])),
                    onClick: function onClick($event) {
                      return _ctx.tagClick(key, tag, $event);
                    },
                    key: tagkey
                  }, toDisplayString(tag.text), 15, _hoisted_9$1);
                }),
                128
                /* KEYED_FRAGMENT */
              ))])]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))]), createBaseVNode("div", _hoisted_10$1, [createVNode(_component_tiny_button, {
            onClick: _ctx.reset
          }, {
            default: withCtx(function() {
              return [createTextVNode(" Reset ")];
            }),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]), createVNode(_component_tiny_button, {
            type: "primary",
            onClick: _ctx.confirm
          }, {
            default: withCtx(function() {
              return [createTextVNode(" OK ")];
            }),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])])])), [[_directive_clickoutside, _ctx.clickOutside]]) : createCommentVNode("v-if", true)];
        })];
      }),
      _: 3
      /* FORWARDED */
    }, 8, ["modelValue", "overlay", "close-on-click-overlay", "position", "duration", "onOpen", "onClose", "onOpened", "onClosed"])],
    6
    /* CLASS, STYLE */
  )), [[vShow, _ctx.state.showWrapper]]);
}
var mobile$4 = /* @__PURE__ */ _export_sfc$e(_sfc_main$q, [["render", _sfc_render$g]]);
const api$5 = ["dataStore", "handleClick", "dataStore", "mouseEnter", "mouseLeave"];
const renderless$5 = (props2, { reactive: reactive2, inject: inject2 }, { dispatch, vm }) => {
  const api2 = {};
  const dropdownMenuVm = inject2("dropdownMenuVm", null);
  let dataStore = reactive2({
    checkedStatus: dropdownMenuVm == null ? void 0 : dropdownMenuVm.checkedStatus,
    multiStageMenu: "",
    multiStage: inject2("multiStage", null),
    itemData: "",
    itemLabel: "",
    showContent: false,
    dropdownMenuVm,
    currentIndex: props2.currentIndex,
    level: props2.level
  });
  const handleClick3 = ({ dataStore: dataStore2, props: props22, vm: vm2 }) => () => {
    if (props22.disabled) {
      dataStore2.checkedStatus = false;
    }
    dataStore2.itemData = props22.itemData;
    dataStore2.itemLabel = "";
    dataStore2.showContent = false;
    if (props22.level === "2") {
      dataStore2.currentIndex = `${props22.level}-${props22.currentIndex}`;
    } else {
      dataStore2.currentIndex = `${props22.currentIndex}`;
    }
    dispatch("TinyDropdown", "selected-index", [dataStore2.currentIndex]);
    const data8 = {
      itemData: dataStore2.itemData,
      vm: vm2,
      label: dataStore2.itemLabel,
      showContent: dataStore2.showContent,
      disabled: props22.disabled
    };
    dispatch("TinyDropdownMenu", "menu-item-click", data8);
    dispatch("TinyDropdown", "is-disabled", [props22.disabled]);
  };
  const mouseLeave = ({ dataStore: dataStore2 }) => () => {
    dataStore2.itemLabel = "";
    dataStore2.showContent = false;
    dispatch("TinyDropdownMenu", "mouseleave-tips", [dataStore2.showContent, dataStore2.itemLabel]);
  };
  const mouseEnter = ({ vm: vm2, dataStore: dataStore2, props: props22 }) => (e) => {
    const dom = e.target;
    const text = dom.textContent;
    const font = window.getComputedStyle(dom).font;
    const rect = dom.getBoundingClientRect();
    const res = omitText(text, font, rect.width);
    const tooltip = dataStore2.dropdownMenuVm.$refs.tooltip;
    if (res.o) {
      tooltip.state.referenceElm = dom;
      tooltip.state.popperElm && (tooltip.state.popperElm.style.display = "none");
      tooltip.doDestroy();
      dataStore2.itemLabel = props22.tooltipContent || text;
      if (vm2.$refs.level.scrollWidth > vm2.$refs.level.offsetWidth) {
        dataStore2.showContent = true;
      }
      setTimeout(tooltip.updatePopper, 20);
    }
    dispatch("TinyDropdownMenu", "mouseenter-tips", [dataStore2.showContent, dataStore2.itemLabel]);
  };
  Object.assign(api2, {
    dataStore,
    handleClick: handleClick3({ dataStore, props: props2, vm }),
    mouseEnter: mouseEnter({ dataStore, vm }),
    mouseLeave: mouseLeave({ dataStore })
  });
  return api2;
};
function _createForOfIteratorHelperLoose$d(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$d(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$d(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$d(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$d(o, minLen);
}
function _arrayLikeToArray$d(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$d = function _export_sfc25(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$d(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$p = defineComponent({
  emits: ["update:modelValue", "change", "closed", "open", "opened", "close", "confirm", "reset"],
  props: [].concat(props, ["disabled", "icon", "itemData", "selected", "label", "level", "currentIndex", "tooltipContent"]),
  setup: function setup$1$15(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$5,
      api: api$5
    });
  }
});
var _hoisted_1$a = ["aria-disabled", "tabindex"];
function _sfc_render$f(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock("li", {
    "data-tag": "tiny-dropdown-item",
    onMouseenter: _cache[0] || (_cache[0] = function() {
      return _ctx.mouseEnter && _ctx.mouseEnter.apply(_ctx, arguments);
    }),
    onMouseleave: _cache[1] || (_cache[1] = function() {
      return _ctx.mouseLeave && _ctx.mouseLeave.apply(_ctx, arguments);
    }),
    class: normalizeClass(_ctx.m("rounded-sm list-none leading-10 sm:leading-8 outline-0 min-w-[theme(spacing.18)] max-w-[theme(spacing.52)] w-full [&_svg]:sm:w-3.5 [&_svg]:sm:h-3.5 [&_svg]:sm:mr-1.5 [&_svg]:mr-2 [&_svg]:align-text-bottom", _ctx.disabled ? "cursor-not-allowed text-color-text-disabled [&_svg]:fill-color-text-disabled" : "text-color-text-primary active:bg-color-bg-4 visited:text-color-brand hover:bg-color-bg-2 focus:bg-color-bg-4 cursor-pointer", {
      "text-color-brand-focus bg-color-fill-6": _ctx.dataStore.checkedStatus && _ctx.selected
    }, _ctx.dataStore.multiStage ? "!px-0 mb-1" : "[&:not(:last-of-type)]:mb-1")),
    onClick: _cache[2] || (_cache[2] = withModifiers(function() {
      return _ctx.handleClick && _ctx.handleClick.apply(_ctx, arguments);
    }, ["stop"])),
    "aria-disabled": _ctx.disabled,
    tabindex: _ctx.disabled ? null : -1
  }, [createBaseVNode(
    "div",
    {
      "data-tag": "tiny-dropdown-level",
      ref: "level",
      class: normalizeClass(["sm:text-xs text-sm", _ctx.level === "2" ? "mx-6 overflow-hidden text-ellipsis whitespace-nowrap" : "mx-4 sm:mx-3 overflow-hidden text-ellipsis whitespace-nowrap"])
    },
    [_ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
      key: 0,
      class: "sm:w-3.5 sm:h-3.5 sm:mr-1.5 mr-2 align-text-bottom"
    })) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")],
    2
    /* CLASS */
  )], 42, _hoisted_1$a);
}
var mobileFirst$4 = /* @__PURE__ */ _export_sfc$d(_sfc_main$p, [["render", _sfc_render$f]]);
function _extends$d() {
  _extends$d = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$d.apply(this, arguments);
}
var template$8 = function template22(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$4;
  }
  if ("mobile" === (tinyMode || mode)) {
    return mobile$4;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$4;
  }
  return pc$4;
};
var $constants$1 = {
  ICON_MAP: {
    leftWardArrow: "icon-delta-left"
  }
};
var dropdownItemProps = _extends$d({}, $props, {
  _constants: {
    type: Object,
    default: function _default3() {
      return $constants$1;
    }
  },
  icon: [String, Object],
  disabled: Boolean,
  divided: Boolean,
  itemData: {
    type: [String, Object],
    default: ""
  },
  title: String,
  label: String,
  level: String,
  titleClass: String,
  options: {
    type: Array,
    default: function _default22() {
      return [];
    }
  },
  // mobile 属性，可选值 selection | filter | sort
  type: {
    type: String,
    default: "selection"
  },
  // 是否选中，勾选状态功能
  selected: {
    type: Boolean,
    default: false
  },
  // 暂没找到使用的地方
  selectedField: {
    type: String,
    default: "selected"
  },
  // 暂没找到使用的地方
  multiStage: {
    type: Boolean,
    default: false
  },
  currentIndex: {
    type: Number,
    default: function _default32() {
      return -1;
    }
  },
  tooltipContent: {
    type: String,
    default: ""
  },
  // 以下为 tiny 新增
  appendToBody: {
    type: Boolean,
    default: true
  },
  textField: {
    type: String,
    default: "label"
  },
  tip: {
    type: [String, Function],
    default: ""
  },
  tipPosition: {
    type: String,
    default: "right"
  }
});
var DropdownItem = defineComponent({
  name: $prefix + "DropdownItem",
  componentName: "TinyDropdownItem",
  props: dropdownItemProps,
  setup: function setup2(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$8
    });
  }
});
var version$8 = "3.16.0";
DropdownItem.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
DropdownItem.install = function(Vue) {
  Vue.component(DropdownItem.name, DropdownItem);
};
DropdownItem.version = version$8;
const index$a = "";
function _createForOfIteratorHelperLoose$c(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$c(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$c(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$c(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$c(o, minLen);
}
function _arrayLikeToArray$c(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$c = function _export_sfc26(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$c(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$o = defineComponent({
  components: {
    TinyDropdownItem: DropdownItem
  },
  emits: ["mouseenter", "mouseleave", "click", "update:modelValue", "created"],
  props: [].concat(props, [
    "visibleArrow",
    "arrowOffset",
    "placement",
    "popperClass",
    "popperAppendToBody",
    "checkedStatus",
    // tiny 新增
    "textField",
    "options"
  ]),
  setup: function setup$1$16(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$8,
      api: api$8
    });
  }
});
function _sfc_render$e(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_dropdown_item = resolveComponent("tiny-dropdown-item");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    onAfterLeave: _ctx.doDestroy,
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "ul",
        {
          class: normalizeClass(["tiny-dropdown-menu tiny-popper", [_ctx.state.size && "tiny-dropdown-menu--" + _ctx.state.size, _ctx.popperClass]]),
          onMouseenter: _cache[0] || (_cache[0] = function() {
            return _ctx.handleMouseenter && _ctx.handleMouseenter.apply(_ctx, arguments);
          }),
          onMouseleave: _cache[1] || (_cache[1] = function() {
            return _ctx.handleMouseleave && _ctx.handleMouseleave.apply(_ctx, arguments);
          })
        },
        [renderSlot(_ctx.$slots, "default", {
          selectedIndex: _ctx.state.selectedIndex
        }, function() {
          return [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.options, function(item, index3) {
              return openBlock(), createBlock(_component_tiny_dropdown_item, {
                "item-data": item,
                label: item[_ctx.textField],
                key: index3,
                icon: item.icon,
                disabled: item.disabled,
                divided: item.divided,
                tip: item.tip,
                "tip-position": item.tipPosition
              }, null, 8, ["item-data", "label", "icon", "disabled", "divided", "tip", "tip-position"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))];
        })],
        34
        /* CLASS, NEED_HYDRATION */
      ), [[vShow, _ctx.state.showPopper]])];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["onAfterLeave"]);
}
var pc$3 = /* @__PURE__ */ _export_sfc$c(_sfc_main$o, [["render", _sfc_render$e]]);
const index$9 = "";
function _createForOfIteratorHelperLoose$b(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$b(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$b(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$b(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$b(o, minLen);
}
function _arrayLikeToArray$b(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$b = function _export_sfc27(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$b(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$n = defineComponent({
  props: [].concat(props, ["activeColor", "closeOnClickOutside", "closeOnClickOverlay", "direction", "duration", "overlay", "zIndex"]),
  components: {
    IconUp: index$s(),
    IconDown: index$A(),
    IconUnfilter: index$t(),
    IconSort: index$v(),
    IconDeltaDown: index$F(),
    IconDeltaUp: index$D()
  },
  directives: directive$1({
    Clickoutside: clickoutside_default
  }),
  emits: ["open", "created"],
  setup: function setup$1$17(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$8,
      api: api$8
    });
  }
});
var _hoisted_1$9 = {
  ref: "menu",
  class: "tiny-mobile-dropdown-menu"
};
var _hoisted_2$7 = {
  class: "tiny-mobile-dropdown-menu__bar tiny-mobile-dropdown-menu__bar--opened"
};
var _hoisted_3$5 = ["tabindex", "onClick"];
var _hoisted_4$4 = {
  class: "tiny-mobile-dropdown-menu__title-wrap"
};
var _hoisted_5$4 = {
  key: 0
};
var _hoisted_6$2 = {
  class: "tiny-mobile-dropdown-menu__title-text"
};
var _hoisted_7$1 = {
  key: 0,
  class: "tiny-mobile-dropdown-menu__title-icon"
};
function _sfc_render$d(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_delta_up = resolveComponent("icon-delta-up");
  var _component_icon_delta_down = resolveComponent("icon-delta-down");
  var _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1$9,
    [createBaseVNode("div", _hoisted_2$7, [(openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.state.children, function(item, index3) {
        return withDirectives((openBlock(), createElementBlock("div", {
          key: index3,
          role: "button",
          tabindex: item.disabled ? -1 : 0,
          class: normalizeClass(["tiny-mobile-dropdown-menu__item", [item.disabled ? "is-disabled" : "", item.titleClass]]),
          onClick: function onClick($event) {
            return _ctx.toggleItem(index3, item);
          }
        }, [createBaseVNode(
          "div",
          {
            class: normalizeClass(["tiny-mobile-dropdown-menu__title", {
              "is-active": item.state.showPopup,
              "is-down": item.state.showPopup === (_ctx.direction === "down")
            }]),
            style: normalizeStyle({
              color: item.state.showPopup ? _ctx.activeColor : ""
            })
          },
          [createBaseVNode("div", _hoisted_4$4, [!_ctx.slots.title ? (openBlock(), createElementBlock("span", _hoisted_5$4, [createBaseVNode(
            "span",
            _hoisted_6$2,
            toDisplayString(item.state.displayTitle),
            1
            /* TEXT */
          ), item.type === "sort" ? (openBlock(), createElementBlock("span", _hoisted_7$1, [createVNode(_component_icon_delta_up, {
            class: "up",
            fill: item.state.sort === "asc" ? _ctx.activeColor ? _ctx.activeColor : "#f36f64" : "#ccc"
          }, null, 8, ["fill"]), createVNode(_component_icon_delta_down, {
            class: "down",
            fill: item.state.sort === "desc" ? _ctx.activeColor ? _ctx.activeColor : "#f36f64" : "#ccc"
          }, null, 8, ["fill"])])) : (openBlock(), createBlock(resolveDynamicComponent(item.type === "filter" ? "IconUnfilter" : item.type === "selection" && item.state.showPopup ? "IconUp" : "IconDown"), {
            key: 1,
            fill: item.state.showPopup ? _ctx.activeColor ? _ctx.activeColor : "#f36f64" : "#ccc",
            class: normalizeClass([item.type === "filter" ? "filter-icon" : ""])
          }, null, 8, ["fill", "class"]))])) : renderSlot(_ctx.$slots, "title", {
            key: 1
          })])],
          6
          /* CLASS, STYLE */
        )], 10, _hoisted_3$5)), [[_directive_clickoutside, _ctx.clickOutside]]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))]), renderSlot(_ctx.$slots, "default")],
    512
    /* NEED_PATCH */
  );
}
var mobile$3 = /* @__PURE__ */ _export_sfc$b(_sfc_main$n, [["render", _sfc_render$d]]);
function _createForOfIteratorHelperLoose$a(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$a(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$a(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$a(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$a(o, minLen);
}
function _arrayLikeToArray$a(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$a = function _export_sfc28(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$a(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$m = defineComponent({
  props: [].concat(props, ["visibleArrow", "arrowOffset", "placement", "popperClass", "popperAppendToBody", "checkedStatus", "multiStage", "maxHeight"]),
  emits: ["menu-item-click", "created"],
  components: {
    TinyTooltip: Tooltip$1
  },
  setup: function setup$1$18(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$8,
      api: api$8
    });
  }
});
function _sfc_render$c(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_tooltip = resolveComponent("tiny-tooltip");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    duration: 150,
    onAfterLeave: _ctx.doDestroy,
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "ul",
        {
          "data-tag": "tiny-dropdown-menu",
          class: normalizeClass(_ctx.m("min-w-[theme(spacing.18)] max-w-[theme(spacing.52)] absoulte bg-color-bg-1", {
            "py-1.5": _ctx.state.size === "medium"
          }, {
            "py-1.5": _ctx.state.size === "small"
          }, {
            "py-0.75": _ctx.state.size === "mini"
          }, {
            "overflow-x-hidden scrollbar-size-0": _ctx.maxHeight
          }, _ctx.multiStage ? "!block  rounded-none" : "rounded py-1 shadow-sm sm:shadow-md px-1", _ctx.state.canvasHeight ? "sm:mb-6" : !_ctx.multiStage && "sm:my-1 my-2", _ctx.popperClass)),
          style: normalizeStyle({
            maxHeight: _ctx.maxHeight + "px"
          })
        },
        [createVNode(_component_tiny_tooltip, {
          ref: "tooltip",
          effect: "light",
          content: _ctx.state.label,
          placement: "top-start",
          manual: true,
          modelValue: _ctx.state.showContent,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
            return _ctx.state.showContent = $event;
          })
        }, null, 8, ["content", "modelValue"]), renderSlot(_ctx.$slots, "default", {
          selectedIndex: _ctx.state.selectedIndex
        })],
        6
        /* CLASS, STYLE */
      ), [[vShow, _ctx.state.showPopper]])];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["onAfterLeave"]);
}
var mobileFirst$3 = /* @__PURE__ */ _export_sfc$a(_sfc_main$m, [["render", _sfc_render$c]]);
function _extends$c() {
  _extends$c = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$c.apply(this, arguments);
}
var template$7 = function template23(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$3;
  }
  if ("mobile" === (tinyMode || mode)) {
    return mobile$3;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$3;
  }
  return pc$3;
};
var dropdownMenuProps = _extends$c({}, $props, {
  multiStage: {
    type: Boolean,
    default: false
  },
  checkedStatus: {
    type: Boolean,
    default: false
  },
  visibleArrow: Boolean,
  arrowOffset: {
    type: Number,
    default: 0
  },
  placement: String,
  // 默认主题 'bottom-end'
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  activeColor: String,
  closeOnClickOutside: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    default: "down"
  },
  duration: {
    type: [Number, String],
    default: 0.2
  },
  overlay: {
    type: Boolean,
    default: true
  },
  zIndex: [Number, String],
  maxHeight: {
    type: [Number, String],
    default: "400"
  },
  // tiny新增
  options: {
    type: Array,
    default: function _default4() {
      return [];
    }
  },
  textField: {
    type: String,
    default: "label"
  }
});
var DropdownMenu = defineComponent({
  name: $prefix + "DropdownMenu",
  componentName: $prefix + "DropdownMenu",
  props: dropdownMenuProps,
  setup: function setup3(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$7
    });
  }
});
var version$7 = "3.16.0";
DropdownMenu.install = function(Vue) {
  Vue.component(DropdownMenu.name, DropdownMenu);
};
DropdownMenu.version = version$7;
function _extends$b() {
  _extends$b = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$b.apply(this, arguments);
}
var _sfc_main$l = /* @__PURE__ */ defineComponent({
  name: $prefix + "Dropdown",
  componentName: "TinyDropdown",
  components: {
    TinyButton: Button$1,
    TinyButtonGroup: ButtonGroup,
    TinyDropdownMenu: DropdownMenu,
    IconDownWard: index$r()
  },
  directives: directive$1({
    Clickoutside: clickoutside_default
  }),
  props: _extends$b({}, $props, {
    type: String,
    trigger: String,
    size: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    splitButton: Boolean,
    showTimeout: {
      type: Number,
      default: 250
    },
    hideTimeout: {
      type: Number,
      default: 150
    },
    hideOnClick: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    },
    border: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    menuOptions: {
      type: Object,
      default: function _default5() {
        return {
          options: [],
          textField: "label",
          popperClass: "",
          placement: "bottom-end"
        };
      }
    },
    title: {
      type: String,
      default: "下拉菜单"
      // TINY-TODO: 国际化
    },
    inheritWidth: {
      type: Boolean,
      default: false
    },
    suffixIcon: Object
  }),
  emits: ["visible-change", "item-click", "button-click", "menu-item-click", "handle-click", "is-disabled", "selected-index"],
  setup: function setup4(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$a,
      api: api$a,
      h
    });
  },
  render: function render2() {
    var _state$designConfig, _state$designConfig$i, _state$designConfig2, _state$designConfig2$;
    var splitButton = this.splitButton, type = this.type, disabled = this.disabled, handleMainButtonClick2 = this.handleMainButtonClick, menuOptions = this.menuOptions, title = this.title, suffixIcon = this.suffixIcon;
    var slots = this.slots, size = this.size, state = this.state, border = this.border, showIcon = this.showIcon, round = this.round, clickOutside2 = this.clickOutside;
    var params = {
      visible: state.visible
    };
    var triggerElm = null;
    var triggerClass = "tiny-dropdown__trigger tiny-dropdown-trigger";
    var visibleClass = state.visible ? "tiny-dropdown--visible tiny-dropdown-visible" : "";
    var IconDown = suffixIcon || ((_state$designConfig = state.designConfig) == null ? void 0 : (_state$designConfig$i = _state$designConfig.icons) == null ? void 0 : _state$designConfig$i.dropdownIcon) || index$F();
    var ButtonIconDown = ((_state$designConfig2 = state.designConfig) == null ? void 0 : (_state$designConfig2$ = _state$designConfig2.icons) == null ? void 0 : _state$designConfig2$.dropdownIcon) || index$r();
    var defaultSlot = slots.default && slots.default(params);
    if (splitButton) {
      triggerElm = createVNode(resolveComponent("tiny-button-group"), null, {
        default: function _default28() {
          return [createVNode(resolveComponent("tiny-button"), {
            "type": type,
            "size": size,
            "onClick": handleMainButtonClick2,
            "disabled": disabled,
            "class": "tiny-dropdown__title-button"
          }, {
            default: function _default37() {
              return [defaultSlot || createVNode("span", null, [title])];
            }
          }), createVNode(resolveComponent("tiny-button"), {
            "ref": "trigger",
            "type": type,
            "size": size,
            "class": "tiny-dropdown__caret-button " + triggerClass,
            "disabled": disabled,
            "reset-time": 0
          }, {
            default: function _default37() {
              return [createVNode(ButtonIconDown, {
                "class": visibleClass
              }, null)];
            }
          })];
        }
      });
    } else {
      var _defaultSlot$;
      var suffixSlot = slots["suffix-icon"] && slots["suffix-icon"]();
      var vnodeData = defaultSlot && ((_defaultSlot$ = defaultSlot[0]) == null ? void 0 : _defaultSlot$.data) || {};
      var _vnodeData$attrs = vnodeData.attrs, attrs = _vnodeData$attrs === void 0 ? {} : _vnodeData$attrs;
      if (disabled && !attrs.disabled) {
        attrs.disabled = true;
        vnodeData.attrs = attrs;
      }
      var suffixInner = showIcon ? createVNode("span", {
        "class": "tiny-dropdown__suffix-inner " + visibleClass
      }, [suffixSlot || createVNode(IconDown, null, null)]) : "";
      var defaultTriggerElm = defaultSlot || title ? createVNode("span", {
        "class": "tiny-dropdown__title"
      }, [defaultSlot || title]) : null;
      triggerElm = border ? createVNode(resolveComponent("tiny-button"), {
        "ref": "trigger",
        "round": round,
        "disabled": disabled,
        "class": "tiny-dropdown__border " + (state.visible ? "is-expand" : "") + (showIcon ? " is-show-icon " : ""),
        "reset-time": 0
      }, {
        default: function _default28() {
          return [defaultTriggerElm, suffixInner];
        }
      }) : createVNode("span", {
        "ref": "trigger",
        "class": "is-text" + (state.visible ? " is-expand" : " is-hide") + (disabled ? " is-disabled" : "") + " " + triggerClass
      }, [defaultTriggerElm, suffixInner]);
    }
    var defaulMenuElm = createVNode(resolveComponent("tiny-dropdown-menu"), {
      "options": menuOptions.options,
      "text-field": menuOptions.textField || menuOptions["text-field"],
      "popper-class": menuOptions.popperClass || menuOptions["popper-class"],
      "placement": menuOptions.placement
    }, null);
    var menuElm = disabled ? null : slots.dropdown && slots.dropdown() || defaulMenuElm;
    return withDirectives(createVNode("div", {
      "class": "tiny-dropdown",
      "aria-disabled": disabled
    }, [triggerElm, menuElm]), [[resolveDirective("clickoutside"), clickOutside2]]);
  }
});
function _extends$a() {
  _extends$a = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$a.apply(this, arguments);
}
var _sfc_main$k = /* @__PURE__ */ defineComponent({
  name: $prefix + "Dropdown",
  componentName: "TinyDropdown",
  components: {
    TinyButton: Button$1,
    TinyButtonGroup: ButtonGroup,
    IconChevronDown: index$J(),
    IconChevronUp: index$H(),
    IconArrowBottom: index$N()
  },
  directives: directive$1({
    Clickoutside: clickoutside_default
  }),
  props: _extends$a({}, $props, {
    type: String,
    trigger: String,
    size: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    singleButton: {
      type: Boolean,
      default: false
    },
    showTimeout: {
      type: Number,
      default: 250
    },
    hideTimeout: {
      type: Number,
      default: 150
    },
    hideOnClick: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    },
    border: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    modelValue: [String, Number],
    showSelfIcon: {
      type: Boolean,
      default: false
    }
  }),
  emits: ["visible-change", "item-click", "button-click", "selectedIndex", "current-item-click", "is-disabled"],
  setup: function setup5(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$a,
      api: api$a,
      mono: true,
      h
    });
  },
  render: function render3() {
    var type = this.type, disabled = this.disabled, handleMainButtonClick2 = this.handleMainButtonClick, slots = this.slots, size = this.size, state = this.state, border = this.border, round = this.round, m = this.m, clickOutside2 = this.clickOutside, singleButton = this.singleButton;
    var params = {
      visible: state.visible
    };
    var triggerElm = null;
    if (singleButton) {
      triggerElm = createVNode(resolveComponent("tiny-button"), {
        "ref": "trigger",
        "type": type === "primary" ? type : "",
        "size": size,
        "customClass": m(["rounded active:rounded flex items-center justify-center", state.visible && type !== "primary" && "active:border-color-border-focus text-color-text-primary active:text-color-brand-focus focus:border-color-border-focus focus:text-color-brand-focus"]),
        "disabled": disabled,
        "reset-time": 0,
        "onClick": handleMainButtonClick2
      }, {
        default: function _default28() {
          return [createVNode("div", {
            "class": "overflow-hidden overflow-ellipsis whitespace-nowrap w-full"
          }, [slots.default && slots.default(params)])];
        }
      });
    } else {
      var defaultSlot = slots.default && slots.default(params);
      var suffixSlot = slots["suffix-icon"] && slots["suffix-icon"]();
      var vnodeData = (defaultSlot == null ? void 0 : defaultSlot[0].data) || {};
      var _vnodeData$attrs = vnodeData.attrs, attrs = _vnodeData$attrs === void 0 ? {} : _vnodeData$attrs;
      if (disabled && !attrs.disabled) {
        attrs.disabled = true;
        vnodeData.attrs = attrs;
      }
      var defaultIcon = createVNode("span", {
        "class": "block text-[0]"
      }, [createVNode(resolveComponent("icon-chevron-down"), {
        "class": "sm:block hidden will-change-transform"
      }, null), createVNode(resolveComponent("icon-arrow-bottom"), {
        "class": "sm:hidden block will-change-transform"
      }, null)]);
      var suffixInner = state.showIcon && createVNode("span", {
        "data-tag": "tiny-dropdown-showicon",
        "class": ["ml-1 sm:ml-2 [&_svg:nth-of-type(1)]:align-top w-4 h-4 inline-block [&_svg]:transition-transform [&_svg]:duration-300", {
          "fill-color-brand-focus [&_svg:nth-of-type(1)]:hover:fill-color-brand-hover [&_svg:nth-of-type(1)]:active:fill-color-brand-focus leading-4": !disabled && !border
        }, border && (state.visible ? "[&_svg]:rotate-180" : "[&_svg]:rotate-0"), border && type !== "primary" && state.visible && "[&_svg]:fill-color-border-focus visited:[&_svg]:fill-color-border-focus active:[&_svg]:fill-color-border-focus"]
      }, [suffixSlot || defaultIcon]);
      triggerElm = border ? createVNode(resolveComponent("tiny-button"), {
        "ref": "trigger",
        "round": round,
        "size": size,
        "type": type === "primary" ? type : "",
        "disabled": disabled,
        "class": ["rounded inline-flex items-center justify-center", type === "primary" ? "[&_svg]:fill-color-bg-1" : state.visible ? "active:border-color-border-focus text-color-text-primary active:text-color-brand-focus focus:border-color-border-focus focus:text-color-brand-focus" : "[&_svg]:fill-color-icon-placeholder"],
        "reset-time": 0
      }, {
        default: function _default28() {
          return [defaultSlot, suffixInner];
        }
      }) : createVNode("span", {
        "ref": "trigger",
        "class": [state.visible && !state.showSelfIcon ? "[&_svg]:rotate-180" : "[&_svg]:rotate-0", disabled && "cursor-not-allowed [&_svg]:fill-color-text-disabled", "inline-flex [&_svg]:transition-transform [&_svg]:duration-300"]
      }, [createVNode("span", {
        "class": ["inline-flex h-4 leading-4", disabled ? "text-color-text-disabled" : "hover:text-color-brand-hover active:text-color-brand-focus"]
      }, [defaultSlot]), createVNode("span", {
        "class": "align-bottom leading-4 h-4"
      }, [suffixInner])]);
    }
    var menuElm = disabled ? null : slots.dropdown && slots.dropdown();
    return withDirectives(createVNode("div", {
      "class": ["relative inline-block [&>span:nth-of-type(1)]:text-color-brand-focus [&>span:nth-of-type(1)]:text-sm sm:[&>span:nth-of-type(1)]:text-xs", disabled && "[&>span:nth-of-type(1)]:text-color-brand-focus", state.showSelfIcon && "leading-4 h-4 [&_svg]:align-top [&_svg]:rotate-0"],
      "aria-disabled": disabled,
      "data-tag": "tiny-dropdown"
    }, [triggerElm, menuElm]), [[resolveDirective("clickoutside"), clickOutside2]]);
  }
});
const index$8 = "";
function _extends$9() {
  _extends$9 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$9.apply(this, arguments);
}
var template$6 = function template24(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return _sfc_main$l;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return _sfc_main$k;
  }
  return _sfc_main$l;
};
var dropdownProps = _extends$9({}, $props, {
  modelValue: [String, Number],
  type: String,
  trigger: String,
  // 默认主题为 'hover'
  size: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  splitButton: Boolean,
  singleButton: {
    type: Boolean,
    default: false
  },
  showTimeout: {
    type: Number,
    default: 250
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  hideOnClick: {
    type: Boolean,
    default: true
  },
  tabindex: {
    type: Number,
    default: 0
  },
  border: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  showSelfIcon: {
    type: Boolean,
    default: false
  },
  // tiny新增
  menuOptions: {
    type: Object,
    default: function _default6() {
      return {
        options: [],
        textField: "label",
        popperClass: "",
        placement: "bottom-end"
      };
    }
  },
  title: {
    type: String,
    default: "下拉菜单"
  },
  inheritWidth: {
    type: Boolean,
    default: false
  },
  suffixIcon: Object
});
var Dropdown = defineComponent({
  name: $prefix + "Dropdown",
  componentName: "TinyDropdown",
  props: dropdownProps,
  setup: function setup6(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$6
    });
  }
});
var version$6 = "3.16.0";
Dropdown.install = function(Vue) {
  Vue.component(Dropdown.name, Dropdown);
};
Dropdown.version = version$6;
const arrayEach = (obj, iterate, context) => {
  if (obj) {
    if (obj.forEach) {
      obj.forEach(iterate, context);
    } else {
      for (let index3 = 0, len = obj.length; index3 < len; index3++) {
        iterate.call(context, obj[index3], index3, obj);
      }
    }
  }
};
var arrayEach_default = arrayEach;
const hasOwnProp = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
var hasOwnProp_default = hasOwnProp;
const objectEach = (obj, iterate, context) => {
  if (obj) {
    Object.keys(obj).forEach((key) => {
      if (hasOwnProp_default(obj, key)) {
        iterate.call(context, obj[key], key, obj);
      }
    });
  }
};
var objectEach_default = objectEach;
const each = (obj, iterate, context) => {
  if (obj) {
    return Array.isArray(obj) ? arrayEach_default(obj, iterate, context) : objectEach_default(obj, iterate, context);
  }
  return obj;
};
var each_default = each;
const helperCreateGetObjects = (name, getIndex) => {
  let proMethod = Object[name];
  return (obj) => {
    let result = [];
    if (!obj) {
      return result;
    }
    if (proMethod) {
      return proMethod(obj);
    }
    let eachCallback;
    if (getIndex > 1) {
      eachCallback = (key) => {
        result.push([String(key), obj[key]]);
      };
    } else {
      eachCallback = function() {
        result.push(arguments[getIndex]);
      };
    }
    each_default(obj, eachCallback);
    return result;
  };
};
var helperCreateGetObjects_default = helperCreateGetObjects;
const keys = helperCreateGetObjects_default("keys", 1);
var keys_default = keys;
var isPlainObject_default = isPlainObject;
const isFunction = (obj) => typeof obj === "function";
var isFunction_default = isFunction;
const isNull = (object) => object === null;
var isNull_default = isNull;
const property = (key, defs) => (object) => isNull_default(object) ? defs : object[key];
var property_default = property;
const objectMap = (obj, iterate, context) => {
  let result = {};
  if (obj) {
    if (iterate) {
      if (!isFunction_default(iterate)) {
        iterate = property_default(iterate);
      }
      each_default(obj, (val, index3) => {
        result[index3] = iterate.call(context, val, index3, obj);
      });
    } else {
      return obj;
    }
  }
  return result;
};
var objectMap_default = objectMap;
const map = function(obj, iterate, context) {
  let result = [];
  if (obj && arguments.length > 1) {
    if (!isFunction_default(iterate)) {
      iterate = property_default(iterate);
    }
    if (obj.map) {
      return obj.map(iterate, context);
    } else {
      each_default(obj, (...args) => {
        result.push(iterate.apply(context, args));
      });
    }
  }
  return result;
};
var map_default = map;
let deepClone;
const startClone = (func, obj, deep) => func(obj, deep ? (val) => deepClone(val, deep) : (val) => val);
deepClone = (val, deep) => isPlainObject_default(val) ? startClone(objectMap_default, val, deep) : Array.isArray(val) ? startClone(map_default, val, deep) : val;
const clone = (obj, deep) => obj ? deepClone(obj, deep) : obj;
var clone_default = clone;
let objectAssignFns = Object.assign;
const handleAssign = (destination, args, isClone) => {
  let len = args.length;
  for (let source, index3 = 1; index3 < len; index3++) {
    source = args[index3];
    let eachCallback;
    if (isClone) {
      eachCallback = (key) => {
        destination[key] = clone_default(source[key], isClone);
      };
    } else {
      eachCallback = (key) => {
        destination[key] = source[key];
      };
    }
    arrayEach_default(keys_default(args[index3]), eachCallback);
  }
  return destination;
};
const assign = function(target) {
  if (target) {
    let args = arguments;
    if (target === true) {
      if (args.length > 1) {
        target = Array.isArray(target[1]) ? [] : {};
        return handleAssign(target, args, true);
      }
    } else {
      return objectAssignFns ? objectAssignFns.apply(Object, args) : handleAssign(target, args);
    }
  }
  return target;
};
var assign_default = assign;
const lastArrayEach = (obj, iterate, context) => {
  for (let len = obj.length - 1; len >= 0; len--) {
    iterate.call(context, obj[len], len, obj);
  }
};
var lastArrayEach_default = lastArrayEach;
const lastObjectEach = (obj, iterate, context) => {
  lastArrayEach_default(keys_default(obj), (key) => {
    iterate.call(context, obj[key], key, obj);
  });
};
var lastObjectEach_default = lastObjectEach;
const handle = ({ useArray, obj, iterate, context, matchValue, restIndex }) => {
  let value;
  let flag = 0;
  if (useArray && Array.isArray(obj)) {
    for (let index3 = 0, len = obj.length; index3 < len; index3++) {
      if (!!iterate.call(context, obj[index3], index3, obj) === matchValue) {
        value = [true, false, index3, obj[index3]][restIndex];
        flag = 1;
        break;
      }
    }
  } else {
    for (let key of Object.keys(obj)) {
      if (hasOwnProp_default(obj, key)) {
        if (!!iterate.call(context, obj[key], key, obj) === matchValue) {
          value = [true, false, key, obj[key]][restIndex];
          flag = 2;
          break;
        }
      }
    }
  }
  return { value, flag };
};
const helperCreateIterateHandle = (prop, useArray, restIndex, matchValue, defaultValue) => (obj, iterate, context) => {
  if (!obj || !iterate) {
    return defaultValue;
  }
  if (prop && obj[prop]) {
    return obj[prop](iterate, context);
  } else {
    const ret = handle({
      useArray,
      obj,
      iterate,
      context,
      matchValue,
      restIndex
    });
    if (ret.flag) {
      return ret.value;
    }
  }
  return defaultValue;
};
var helperCreateIterateHandle_default = helperCreateIterateHandle;
var every_default = helperCreateIterateHandle_default("every", 1, 1, false, true);
const find = helperCreateIterateHandle_default("find", 1, 3, true);
var find_default = find;
const toArray = (arr) => map_default(arr, (item) => item);
var toArray_default = toArray;
const isUndefined = (obj) => typeof obj === "undefined";
var isUndefined_default = isUndefined;
const eqNull = (object) => isNull_default(object) || isUndefined_default(object);
var eqNull_default = eqNull;
const helperGetHGSKeys = (property2) => (
  // 以最快的方式判断数组，可忽略准确性
  property2 ? property2.splice && property2.join ? property2 : String(property2).split(".") : []
);
var helperGetHGSKeys_default = helperGetHGSKeys;
const staticHGKeyRE = /(.+)?\[(\d+)\]$/;
var staticHGKeyRE_default = staticHGKeyRE;
const valGet = (obj, key) => {
  const matchs = key ? key.match(staticHGKeyRE_default) : "";
  return matchs ? matchs[1] ? obj[matchs[1]] ? obj[matchs[1]][matchs[2]] : void 0 : obj[matchs[2]] : obj[key];
};
const pathGet = (obj, property2) => {
  if (!obj) {
    return;
  }
  let rest;
  let index3 = 0;
  const getRest = (len, props2) => {
    for (rest = obj; index3 < len; index3++) {
      rest = valGet(rest, props2[index3]);
      if (eqNull_default(rest)) {
        return;
      }
    }
  };
  if (obj[property2] || hasOwnProp_default(obj, property2)) {
    return obj[property2];
  } else {
    const props2 = helperGetHGSKeys_default(property2);
    const len = props2.length;
    if (len) {
      getRest(len, props2);
    }
    return rest;
  }
};
const get = (obj, property2, defaultValue) => {
  if (eqNull_default(obj)) {
    return defaultValue;
  }
  const result = pathGet(obj, property2);
  return isUndefined_default(result) ? defaultValue : result;
};
var get_default = get;
const sortByDef = (v1, v2) => {
  if (isUndefined_default(v1) || isUndefined_default(v2)) {
    return isUndefined_default(v2) ? 1 : -1;
  }
  if (isNull_default(v1) || isNull_default(v2)) {
    return isNull_default(v2) ? 1 : -1;
  }
  return v1 && v1.localeCompare ? v1.localeCompare(v2) : v1 > v2 ? 1 : -1;
};
const sortMultis = (name, compares) => (item1, item2) => {
  let v1 = item1[name];
  let v2 = item2[name];
  if (v1 === v2) {
    return compares ? compares(item1, item2) : 0;
  }
  return sortByDef(v1, v2);
};
const getSortPros = (arr, list, iterate, context) => {
  iterate = Array.isArray(iterate) ? iterate : [iterate];
  arrayEach_default(iterate, (prop, index3) => {
    let eachCallback;
    if (isFunction_default(prop)) {
      eachCallback = (val, key) => {
        val[index3] = prop.call(context, val.data, key, arr);
      };
    } else {
      eachCallback = (val) => {
        val[index3] = get_default(val.data, prop);
      };
    }
    arrayEach_default(list, eachCallback);
  });
  return iterate;
};
const sortBy = (arr, iterate, context, STR_UNDEFINED) => {
  if (arr) {
    if (iterate === STR_UNDEFINED) {
      return toArray_default(arr).sort(sortByDef);
    }
    let compares;
    let list = map_default(arr, (item) => ({ data: item }));
    let sortPros = getSortPros(arr, list, iterate, context);
    let len = sortPros.length;
    if (len) {
      while (len >= 0) {
        compares = sortMultis(len, compares);
        len--;
      }
      list = list.sort(compares);
    }
    return map_default(list, property_default("data"));
  }
  return [];
};
var sortBy_default = sortBy;
const slice = (array, startIndex, endIndex) => {
  let result = [];
  if (array) {
    for (startIndex = startIndex || 0, endIndex = endIndex || array.length; startIndex < endIndex; startIndex++) {
      result.push(array[startIndex]);
    }
  }
  return result;
};
var slice_default = slice;
const helperCreateIndexOf = (name, callback) => (obj, val) => {
  if (!obj) {
    return -1;
  }
  if (typeof obj === "string" || Array.isArray(obj)) {
    if (obj[name]) {
      return obj[name](val);
    }
    return callback(obj, val);
  }
  for (let key of Object.keys(obj)) {
    if (val === obj[key]) {
      return key;
    }
  }
  return -1;
};
var helperCreateIndexOf_default = helperCreateIndexOf;
const arrayIndexOf = (obj, val) => {
  if (obj.indexOf) {
    return obj.indexOf(val);
  }
  for (let index3 = 0, len = obj.length; index3 < len; index3++) {
    if (val === obj[index3]) {
      return index3;
    }
  }
};
var arrayIndexOf_default = arrayIndexOf;
var indexOf_default = helperCreateIndexOf_default("indexOf", arrayIndexOf_default);
const includes = (obj, val) => ~indexOf_default(obj, val);
var includes_default = includes;
const helperCreateToNumber = (handle2) => (str) => {
  if (str) {
    let num = handle2(str);
    if (!isNaN(num)) {
      return num;
    }
  }
  return 0;
};
var helperCreateToNumber_default = helperCreateToNumber;
const toNumber = helperCreateToNumber_default(parseFloat);
var toNumber_default = toNumber;
const sum = (array, iterate, context) => {
  let result = 0;
  let eachCallback;
  if (iterate) {
    if (isFunction_default(iterate)) {
      eachCallback = (...args) => {
        result += toNumber_default(iterate.apply(context, args));
      };
    } else {
      eachCallback = (val) => {
        result += toNumber_default(val[iterate]);
      };
    }
  } else {
    eachCallback = (val) => {
      result += toNumber_default(val);
    };
  }
  each_default(array, eachCallback);
  return result;
};
var sum_default = sum;
const defaultOptions$1 = { parentKey: "parentId", key: "id", children: "children" };
const unTreeList = (result, array, opts) => {
  let optChildren = opts.children;
  let optData = opts.data;
  each_default(array, (item) => {
    const children = item[optChildren];
    if (optData) {
      item = item[optData];
    }
    result.push(item);
    children && unTreeList(result, children, opts);
  });
  return result;
};
const toTreeArray = (array, options) => unTreeList([], array, assign_default({}, defaultOptions$1, options));
var toTreeArray_default = toTreeArray;
const helperCreateTreeFunc = (handle2) => (obj, iterate, options, context) => {
  let opts = options || {};
  let optChildren = opts.children || "children";
  const params = {
    item: null,
    obj,
    iterate,
    context,
    path: [],
    node: [],
    parseChildren: optChildren,
    opts
  };
  return handle2(params);
};
var helperCreateTreeFunc_default = helperCreateTreeFunc;
const findTreeItem = ({ parent, obj, iterate, context, path, node, parseChildren, opts }) => {
  if (obj) {
    for (let index3 = 0, len = obj.length; index3 < len; index3++) {
      const item = obj[index3];
      const paths = path.concat([`${index3}`]);
      const nodes = node.concat([item]);
      if (iterate.call(context, item, index3, obj, paths, parent, nodes)) {
        return { index: index3, item, path, items: obj, parent, nodes };
      }
      if (parseChildren && item) {
        const newPath = paths.concat([parseChildren]);
        const match = findTreeItem({
          parent: item,
          obj: item[parseChildren],
          iterate,
          context,
          path: newPath,
          node: nodes,
          parseChildren,
          opts
        });
        if (match) {
          return match;
        }
      }
    }
  }
};
const findTree = helperCreateTreeFunc_default(findTreeItem);
var findTree_default = findTree;
const eachTreeItem = ({ parent, obj, iterate, context, path, node, parseChildren, opts }) => {
  each_default(obj, (item, index3) => {
    const paths = path.concat([`${index3}`]);
    const nodes = node.concat([item]);
    iterate.call(context, item, index3, obj, paths, parent, nodes);
    if (item && parseChildren) {
      paths.push(parseChildren);
      eachTreeItem({
        item,
        obj: item[parseChildren],
        context,
        iterate,
        node: nodes,
        parseChildren,
        path: paths,
        opts
      });
    }
  });
};
const eachTree = helperCreateTreeFunc_default(eachTreeItem);
var eachTree_default = eachTree;
const mapTreeItem = ({ parent, obj, iterate, context, path, node, parseChildren, opts }) => {
  let mapChildren = opts.mapChildren || parseChildren;
  return map_default(obj, (item, index3) => {
    const paths = path.concat([`${index3}`]);
    const nodes = node.concat([item]);
    const rest = iterate.call(context, item, index3, obj, paths, parent, nodes);
    if (rest && item && parseChildren && item[parseChildren]) {
      rest[mapChildren] = mapTreeItem({
        item,
        obj: item[parseChildren],
        iterate,
        context,
        path: paths,
        node: nodes,
        parseChildren,
        opts
      });
    }
    return rest;
  });
};
const mapTree = helperCreateTreeFunc_default(mapTreeItem);
var mapTree_default = mapTree;
const filterTree = (obj, iterate, options, context) => {
  let result = [];
  if (obj && iterate) {
    eachTree_default(
      obj,
      (...args) => {
        if (iterate.apply(context, args)) {
          result.push(args[0]);
        }
      },
      options
    );
  }
  return result;
};
var filterTree_default = filterTree;
const isObject = (obj) => typeof obj === "object" && obj !== null;
var isObject_default = isObject;
const isString = (obj) => typeof obj === "string";
var isString_default = isString;
const lastEach = (obj, iterate, context) => {
  if (obj) {
    return Array.isArray(obj) ? lastArrayEach_default(obj, iterate, context) : lastObjectEach_default(obj, iterate, context);
  }
  return obj;
};
var lastEach_default = lastEach;
const helperDeleteProperty = (obj, property2) => {
  try {
    delete obj[property2];
  } catch (e) {
    obj[property2] = void 0;
  }
};
var helperDeleteProperty_default = helperDeleteProperty;
const clear = function(obj, defs, assigns) {
  if (!obj) {
    return obj;
  }
  let isDefs = arguments.length > 1 && (isNull_default(defs) || !isObject_default(defs));
  let extds = isDefs ? assigns : defs;
  if (isPlainObject_default(obj)) {
    let eachCallback;
    if (isDefs) {
      eachCallback = (val, key) => {
        obj[key] = defs;
      };
    } else {
      eachCallback = (val, key) => {
        helperDeleteProperty_default(obj, key);
      };
    }
    objectEach_default(obj, eachCallback);
    if (extds) {
      assign_default(obj, extds);
    }
  } else if (Array.isArray(obj)) {
    if (isDefs) {
      let len = obj.length;
      while (len > 0) {
        len--;
        obj[len] = defs;
      }
    } else {
      obj.length = 0;
    }
    if (extds) {
      obj.push.apply(obj, extds);
    }
  }
  return obj;
};
var clear_default = clear;
const pluckProperty = (name) => (obj, key) => key === name;
const remove$1 = (obj, iterate, context) => {
  if (obj) {
    if (!eqNull_default(iterate)) {
      let removeIndexs = [];
      let rest = [];
      if (!isFunction_default(iterate)) {
        iterate = pluckProperty(iterate);
      }
      each_default(obj, (item, index3, rest2) => {
        if (iterate.call(context, item, index3, rest2)) {
          removeIndexs.push(index3);
        }
      });
      if (Array.isArray(obj)) {
        lastEach_default(removeIndexs, (item) => {
          rest.push(obj[item]);
          obj.splice(item, 1);
        });
      } else {
        rest = {};
        arrayEach_default(removeIndexs, (key) => {
          rest[key] = obj[key];
          helperDeleteProperty_default(obj, key);
        });
      }
      return rest;
    }
    return clear_default(obj);
  }
  return obj;
};
var remove_default = remove$1;
const isBoolean = (obj) => typeof obj === "boolean";
var isBoolean_default = isBoolean;
const isNumber = (obj) => typeof obj === "number";
var isNumber_default = isNumber;
let equalVal;
const helperEqualCompare = ({ val1, val2, compare, func, key, obj1, obj2 }) => {
  if (val1 === val2) {
    return true;
  }
  if (val1 && val2 && !isNumber_default(val1) && !isNumber_default(val2) && !isString_default(val1) && !isString_default(val2)) {
    if (isRegExp(val1)) {
      return compare(String(val1), String(val2), key, obj1, obj2);
    }
    if (isDate(val1) || isBoolean_default(val1)) {
      return compare(Number(val1), Number(val2), key, obj1, obj2);
    }
    return equalVal(val1, val2, func, key, compare);
  }
  return compare(val1, val2, key, obj1, obj2);
};
equalVal = (val1, val2, func, key, compare) => {
  let result, val1Keys, val2Keys;
  let isObj1Arr = Array.isArray(val1);
  let isObj2Arr = Array.isArray(val2);
  if (isObj1Arr || isObj2Arr ? isObj1Arr && isObj2Arr : val1.constructor === val2.constructor) {
    val1Keys = keys_default(val1);
    val2Keys = keys_default(val2);
    if (func) {
      result = func(val1, val2, key);
    }
    if (val1Keys.length === val2Keys.length) {
      if (isUndefined_default(result)) {
        return every_default(
          val1Keys,
          (key2, index3) => key2 === val2Keys[index3] && helperEqualCompare({
            val1: val1[key2],
            val2: val2[val2Keys[index3]],
            compare,
            func,
            key: isObj1Arr || isObj2Arr ? index3 : key2,
            obj1: val1,
            obj2: val2
          })
        );
      }
      return !!result;
    }
    return false;
  }
};
var helperEqualCompare_default = helperEqualCompare;
const isEqual = (obj1, obj2) => helperEqualCompare_default({
  val1: obj1,
  val2: obj2,
  compare: (v1, v2) => v1 === v2
});
var isEqual_default = isEqual;
let __uniqueId = 0;
const uniqueId = (prefix) => (prefix ? String(prefix) : 0) + ++__uniqueId;
var uniqueId_default = uniqueId;
const helperCreateiterateIndexOf = (callback) => (obj, iterate, context) => {
  if (!obj || !isFunction_default(iterate)) {
    return -1;
  }
  if (Array.isArray(obj) || isString_default(obj)) {
    return callback(obj, iterate, context);
  }
  for (let key of Object.keys(obj)) {
    if (hasOwnProp_default(obj, key) && iterate.call(context, obj[key], key, obj)) {
      return key;
    }
  }
  return -1;
};
var helperCreateiterateIndexOf_default = helperCreateiterateIndexOf;
const findIndexOf = helperCreateiterateIndexOf_default((obj, iterate, context) => {
  for (let index3 = 0, len = obj.length; index3 < len; index3++) {
    if (iterate.call(context, obj[index3], index3, obj)) {
      return index3;
    }
  }
  return -1;
});
var findIndexOf_default = findIndexOf;
const toStringJSON = (str) => {
  if (isObject_default(str)) {
    return str;
  } else if (isString_default(str)) {
    try {
      return JSON.parse(str);
    } catch (error2) {
    }
  }
  return {};
};
var toStringJSON_default = toStringJSON;
const formatterArgs = (matchs, rest, isHas) => {
  let arrIndex = matchs[1];
  let objProp = matchs[2];
  if (arrIndex) {
    if (rest[arrIndex]) {
      if (hasOwnProp_default(rest[arrIndex], objProp)) {
        isHas = true;
        rest = rest[arrIndex][objProp];
      }
    }
  } else {
    if (hasOwnProp_default(rest, objProp)) {
      isHas = true;
      rest = rest[objProp];
    }
  }
  return { isHas, rest };
};
const has = (obj, property2) => {
  if (!obj) {
    return;
  }
  const compare = (property22) => {
    let prop, matchs, rest, isHas;
    let props2 = helperGetHGSKeys_default(property22);
    let index3 = 0;
    let len = props2.length;
    let flag = false;
    for (rest = obj; index3 < len; index3++) {
      isHas = false;
      prop = props2[index3];
      matchs = prop ? prop.match(staticHGKeyRE_default) : "";
      if (matchs) {
        const args = formatterArgs(matchs, rest, isHas);
        isHas = args.isHas;
        rest = args.rest;
      } else {
        hasOwnProp_default(rest, prop) && (isHas = true, rest = rest[prop]);
      }
      if (isHas) {
        index3 === len - 1 && (flag = true);
      } else {
        break;
      }
    }
    return flag;
  };
  if (hasOwnProp_default(obj, property2)) {
    return true;
  } else {
    return compare(property2);
  }
};
var has_default = has;
const sKeyRE = /(.+)\[(\d+)\]$/;
const valSet = (obj, key, isSet, value) => {
  if (obj[key]) {
    if (isSet) {
      obj[key] = value;
    }
  } else {
    const matchs = key ? key.match(sKeyRE) : null;
    const rest = isSet ? value : {};
    if (matchs) {
      const key2 = matchs[1];
      const index3 = parseInt(matchs[2]);
      if (obj[key2]) {
        obj[key2][index3] = rest;
      } else {
        obj[key2] = new Array(index3 + 1);
        obj[key2][index3] = rest;
      }
    } else {
      obj[key] = rest;
    }
    return rest;
  }
  return obj[key];
};
const set = (obj, property2, value) => {
  if (obj) {
    if (obj[property2] || hasOwnProp_default(obj, property2)) {
      obj[property2] = value;
    } else {
      let rest = obj;
      let props2 = helperGetHGSKeys_default(property2);
      let len = props2.length;
      for (let index3 = 0; index3 < len; index3++) {
        rest = valSet(rest, props2[index3], index3 === len - 1, value);
      }
    }
  }
  return obj;
};
var set_default = set;
const destructuring = function(destination, sources) {
  if (destination && sources) {
    let rest = assign_default.apply(this, [{}].concat(slice_default(arguments, 1)));
    let restKeys = keys_default(rest);
    arrayEach_default(keys_default(destination), (key) => {
      if (includes_default(restKeys, key)) {
        destination[key] = rest[key];
      }
    });
  }
  return destination;
};
var destructuring_default = destructuring;
const toValString = (obj) => {
  if (isNumber_default(obj)) {
    if (String(obj).includes("e-")) {
      let isNegative = obj < 0;
      return (isNegative ? "-" : "") + "0" + String((isNegative ? Math.abs(obj) : obj) + 1).substr(1);
    }
  }
  return String(eqNull_default(obj) ? "" : obj);
};
var toString_default = toValString;
const template$5 = (str, obj) => {
  let rest = toString_default(str);
  if (rest && obj) {
    return rest.replace(/\{{2}([.\w[\]\s]+)\}{2}/g, (match, keys2) => get_default(obj, keys2));
  }
  return rest;
};
var template_default = template$5;
const isArray = Array.isArray;
const RAF = window.requestAnimationFrame;
const scheduleFlush = (fastdom) => {
  if (!fastdom.scheduled) {
    fastdom.scheduled = true;
    fastdom.raf(flush.bind(null, fastdom));
  }
};
const flush = (fastdom) => {
  const { reads, writes } = fastdom;
  let error2;
  try {
    fastdom.runTasks(reads);
    fastdom.runTasks(writes);
  } catch (e) {
    error2 = e;
  }
  fastdom.scheduled = false;
  if (reads.length || writes.length)
    scheduleFlush(fastdom);
  if (error2) {
    if (fastdom.catch) {
      fastdom.catch(error2);
    } else {
      throw error2;
    }
  }
};
const remove = (array, item) => {
  const index3 = array.indexOf(item);
  return !!~index3 && !!array.splice(index3, 1);
};
const mixin = (target, source) => {
  for (let key in source) {
    if (Object.hasOwnProperty.call(source, key))
      target[key] = source[key];
  }
};
class FastDom {
  constructor() {
    this.reads = [];
    this.writes = [];
    this.raf = RAF.bind(window);
  }
  runTasks(tasks) {
    let task;
    while (task = tasks.shift())
      task();
  }
  measure(fn, ctx) {
    const task = !ctx ? fn : fn.bind(ctx);
    this.reads.push(task);
    scheduleFlush(this);
    return task;
  }
  mutate(fn, ctx) {
    const task = !ctx ? fn : fn.bind(ctx);
    this.writes.push(task);
    scheduleFlush(this);
    return task;
  }
  clear(task) {
    return remove(this.reads, task) || remove(this.writes, task);
  }
  extend(props2) {
    if (!props2 || typeof props2 !== "object")
      throw new Error("[TINY][FastDom] expected object");
    const child = Object.create(this);
    mixin(child, props2);
    child.fastdom = this;
    if (child.initialize)
      child.initialize();
    return child;
  }
}
const fastdomSingleton = new FastDom();
var singleton_default = fastdomSingleton;
const handleClose = ({ emit, props: props2, state }) => (event) => {
  if (props2.disabled)
    return;
  event.stopPropagation();
  state.show = false;
  const close3 = () => emit("close", event);
  props2.beforeDelete ? props2.beforeDelete(close3) : close3();
};
const handleClick = ({ emit, props: props2, parent, state }) => (event) => {
  if (props2.selectable || props2.disabled)
    return;
  parent.$parent && parent.$parent.tagSelectable && event.stopPropagation();
  state.selected = !state.selected;
  emit("click", event);
};
const api$4 = ["state", "handleClose", "handleClick"];
const renderless$4 = (props2, { reactive: reactive2, computed }, { emit, parent }) => {
  const state = reactive2({
    type: computed(() => props2.theme || props2.type),
    show: true,
    selected: false,
    mini: props2.mini,
    color: props2.color,
    text: props2.text,
    maxWidth: props2.maxWidth
  });
  const api2 = {
    state,
    handleClose: handleClose({ emit, props: props2, state }),
    handleClick: handleClick({ emit, props: props2, parent, state })
  };
  return api2;
};
var _sfc_main$j = /* @__PURE__ */ defineComponent({
  components: {
    IconClose: index$L()
  },
  emits: ["click", "close"],
  props: [].concat(props, ["text", "closable", "type", "hit", "disabled", "color", "size", "effect", "value", "beforeDelete"]),
  setup: function setup7(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$4,
      api: api$4,
      h
    });
  },
  render: function render4() {
    var type = this.type, size = this.size, hit = this.hit, effect = this.effect, slots = this.slots, closable = this.closable, color = this.color, handleClose2 = this.handleClose, handleClick3 = this.handleClick, disabled = this.disabled;
    this.state;
    var value = this.value;
    var styles = {};
    var classes2 = ["tiny-tag", type ? "tiny-tag--" + type : "", size ? "tiny-tag--" + size : "", effect ? "tiny-tag--" + effect : "", hit && "is-hit", disabled ? "is-disabled" : ""];
    if (color) {
      if (Array.isArray(color)) {
        styles = {
          background: color[0],
          color: color[1]
        };
      } else if (["red", "orange", "green", "blue", "purple", "brown", "grey", "gold"].includes(color)) {
        classes2.push("tiny-tag--" + color);
      } else {
        styles = {
          background: color
        };
      }
    }
    var tagElement = value || slots.default && slots.default() ? createVNode("span", {
      "data-tag": "tiny-tag",
      "class": classes2,
      "style": styles,
      "onClick": handleClick3
    }, [value ? createVNode("span", null, [value]) : slots.default && slots.default(), closable && createVNode(resolveComponent("icon-close"), {
      "class": "tiny-svg-size tiny-tag__close ",
      "onClick": handleClose2
    }, null)]) : createVNode("span", null, null);
    return tagElement;
  }
});
const index$7 = "";
function _createForOfIteratorHelperLoose$9(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$9(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$9(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$9(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$9(o, minLen);
}
function _arrayLikeToArray$9(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$9 = function _export_sfc29(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$9(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$i = defineComponent({
  emits: ["click", "close"],
  props: [].concat(props, ["text", "color", "width", "mini", "maxWidth"]),
  setup: function setup$1$19(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$4,
      api: api$4,
      h
    });
  }
});
function _sfc_render$b(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-mobile-tag", "tiny-mobile-tag-" + _ctx.state.color, _ctx.state.mini ? "tiny-mobile-tag-mini" : null]),
      style: normalizeStyle({
        maxWidth: _ctx.state.maxWidth ? _ctx.state.maxWidth + "px" : null
      })
    },
    [renderSlot(_ctx.$slots, "default", {}, function() {
      return [createTextVNode(
        toDisplayString(_ctx.state.text),
        1
        /* TEXT */
      )];
    })],
    6
    /* CLASS, STYLE */
  );
}
var mobile$2 = /* @__PURE__ */ _export_sfc$9(_sfc_main$i, [["render", _sfc_render$b]]);
var classes$3 = {
  "dark-success": "text-color-text-inverse bg-color-success",
  "dark-alerting": "text-color-text-inverse bg-color-alert",
  "dark-warning": "text-color-text-inverse bg-color-warning",
  "dark-error": "text-color-text-inverse bg-color-error",
  "dark-default": "text-color-text-inverse bg-color-info-primary",
  "dark-info": "text-color-text-inverse bg-color-text-placeholder",
  "dark-pink": "text-color-text-inverse bg-color-chart-17",
  "dark-purple": "text-color-text-inverse bg-color-chart-11",
  "dark-cyan": "text-color-text-inverse bg-color-chart-2",
  "light-success": "text-color-success bg-color-success-subtler",
  "light-alerting": "text-color-alert bg-color-alert-subtler",
  "light-warning": "text-color-warning bg-color-warning-subtler",
  "light-error": "text-color-error bg-color-error-subtler",
  "light-default": "text-color-info-primary bg-color-info-primary-subtler",
  "light-info": "text-color-text-primary bg-color-bg-2",
  "light-pink": "text-color-chart-17 bg-color-chart-17-subtler",
  "light-purple": "text-color-chart-11 bg-color-chart-11-subtler",
  "light-cyan": "text-color-chart-2 bg-color-chart-2-subtler",
  "plain-success": "text-color-success bg-color-bg-1",
  "plain-alerting": "text-color-alert bg-color-bg-1",
  "plain-warning": "text-color-warning bg-color-bg-1",
  "plain-error": "text-color-error bg-color-bg-1",
  "plain-default": "text-color-info-primary bg-color-bg-1",
  "plain-info": "text-color-text-primary bg-color-bg-1",
  "plain-pink": "text-color-chart-17 bg-color-bg-1",
  "plain-purple": "text-color-chart-11 bg-color-bg-1",
  "plain-cyan": "text-color-chart-2 bg-color-bg-1",
  "success-border": "border-color-success-subtle",
  "alerting-border": "border-color-alert-subtle",
  "warning-border": "border-color-warning-subtle",
  "error-border": "border-color-error-subtle",
  "default-border": "border-color-info-primary-subtle",
  "info-border": "border-color-none",
  "pink-border": "border-color-chart-17-subtle",
  "purple-border": "border-color-chart-11-subtle",
  "cyan-border": "border-color-chart-2-subtle",
  "fill-dark": "fill-color-bg-6 hover:fill-color-icon-inverse",
  "fill-light-success": "fill-color-success-subtle hover:fill-color-success",
  "fill-light-alerting": "fill-color-alert-subtle hover:fill-color-alert",
  "fill-light-warning": "fill-color-warning-subtle hover:fill-color-warning",
  "fill-light-error": "fill-color-error-subtle hover:fill-color-error",
  "fill-light-default": "fill-color-info-primary-subtle hover:fill-color-info-primary",
  "fill-light-info": "fill-color-none hover:fill-color-none",
  "fill-light-pink": "fill-color-chart-17-subtle hover:fill-color-chart-17",
  "fill-light-purple": "fill-color-chart-11-subtle hover:fill-color-chart-11",
  "fill-light-cyan": "fill-color-chart-2-subtle hover:fill-color-chart-2",
  "selectable-unselect": "h-9 sm:h-7 text-color-text-primary bg-color-bg-4 cursor-pointer hover:bg-color-fill-1",
  "selectable-selected": "h-9 sm:h-7 text-color-brand border-current bg-color-info-primary-subtler cursor-pointer hover:text-color-brand-hover",
  "tag-disabled": "h-9 sm:h-7 text-color-text-disabled bg-color-bg-4 border-transparent cursor-not-allowed hover:text-color-text-disabled hover:bg-color-bg-4",
  "tag-operable": "h-7 sm:h-6 cursor-pointer",
  "medium": "h-7 px-3",
  "small": "h-6 px-2",
  "mini": "h-5 px-1"
};
var _sfc_main$h = /* @__PURE__ */ defineComponent({
  components: {
    IconClose: index$L()
  },
  emits: ["click", "close"],
  props: [].concat(props, ["text", "closable", "operable", "selectable", "type", "theme", "hit", "disabled", "color", "size", "effect", "customClass", "value"]),
  setup: function setup8(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$4,
      api: api$4,
      h,
      classes: classes$3
    });
  },
  render: function render5() {
    var slots = this.slots, selectable = this.selectable, disabled = this.disabled, color = this.color, handleClose2 = this.handleClose, handleClick3 = this.handleClick, customClass = this.customClass, hit = this.hit, m = this.m, gcls = this.gcls, state = this.state, value = this.value;
    var size = selectable ? "medium" : this.size || "small";
    var type = selectable ? "info" : state.type || "info";
    var effect = selectable ? "light" : this.effect || "light";
    var closable = selectable ? false : this.closable;
    var operable = selectable ? false : this.operable;
    var classes2 = m("text-xs inline-flex items-center rounded box-border border-0.5 sm:border mr-2", effect === "plain" || hit ? gcls(type + "-border") : "border-transparent", gcls(effect + "-" + type), gcls(size), {
      hidden: !state.show
    }, selectable ? state.selected ? gcls("selectable-selected") : gcls("selectable-unselect") : "", selectable && disabled ? gcls("tag-disabled") : "", operable ? gcls("tag-operable") : "", customClass);
    var tagElement = value || slots.default && slots.default() ? createVNode("span", {
      "data-tag": "tiny-tag",
      "class": classes2,
      "style": {
        backgroundColor: color
      },
      "onClick": handleClick3
    }, [value ? createVNode("span", null, [value]) : slots.default && slots.default(), closable && createVNode(resolveComponent("icon-close"), {
      "class": ["w-3 h-3 ml-1 cursor-pointer", effect === "dark" ? gcls("fill-dark") : gcls("fill-light-" + type)],
      "onClick": handleClose2
    }, null)]) : createVNode("span", null, null);
    return tagElement;
  }
});
const index$6 = "";
function _extends$8() {
  _extends$8 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
var template$4 = function template25(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return _sfc_main$j;
  }
  if ("mobile" === (tinyMode || mode)) {
    return mobile$2;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return _sfc_main$h;
  }
  return _sfc_main$j;
};
var tagProps = _extends$8({}, $props, {
  hit: Boolean,
  text: String,
  type: String,
  theme: String,
  size: String,
  color: {
    type: [String, Array],
    default: ""
  },
  closable: Boolean,
  operable: Boolean,
  disabled: Boolean,
  selectable: Boolean,
  customClass: {
    type: String,
    default: ""
  },
  effect: {
    type: String,
    default: "light",
    validator: function validator(value) {
      return Boolean(~["dark", "light", "plain"].indexOf(value));
    }
  },
  beforeDelete: Function,
  value: [Number, String],
  // mobile
  mini: {
    type: Boolean,
    default: false
  },
  maxWidth: {
    type: [String, Number],
    default: null
  }
});
var Tag = defineComponent({
  name: $prefix + "Tag",
  props: tagProps,
  setup: function setup9(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$4
    });
  }
});
var version$5 = "3.16.0";
Tag.install = function(Vue) {
  Vue.component(Tag.name, Tag);
};
Tag.version = version$5;
const index$5 = "";
const _storeMap$1 = {};
const storeMap = {
  mixin(map2) {
    Object.assign(_storeMap$1, map2);
    return storeMap;
  },
  get(type) {
    return _storeMap$1[type];
  },
  add(type, callback) {
    _storeMap$1[type] = callback;
    return storeMap;
  },
  delete(type) {
    delete _storeMap$1[type];
    return storeMap;
  }
};
var storeMap_default = storeMap;
const toType = (type) => toString_default(type).replace("_", "").toLowerCase();
const eventTypes = [
  "created",
  "mounted",
  "activated",
  "beforeDestroy",
  "destroyed",
  "event.clearActived",
  "event.clearFilter",
  "event.showMenu",
  "event.keydown"
].map(toType);
const _storeMap = {};
const Interceptor = {
  mixin(map2) {
    each_default(map2, (callback, type) => Interceptor.add(type, callback));
    return Interceptor;
  },
  get(type) {
    return _storeMap[toType(type)] || [];
  },
  add(type, callback) {
    const selfType = toType(type);
    if (callback && ~eventTypes.indexOf(selfType)) {
      _storeMap[selfType] = _storeMap[selfType] ? _storeMap[selfType] : [];
      _storeMap[selfType].push(callback);
    }
    return Interceptor;
  },
  delete(type, callback) {
    const eList = _storeMap[toType(type)];
    if (eList) {
      remove_default(eList, (cb) => cb === callback);
    }
    return Interceptor;
  }
};
var interceptor_default = Interceptor;
const wheelName = browser_default.isDoc && /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
const eventStore$1 = [];
const GlobalEvent = {
  on(comp, type, cb) {
    if (cb) {
      eventStore$1.push({ comp, type, cb });
    }
  },
  off(comp, type) {
    remove_default(eventStore$1, (item) => item.comp === comp && item.type === type);
  },
  trigger(event) {
    eventStore$1.forEach(({ comp, type, cb }) => {
      if (type === event.type || type === "mousewheel" && event.type === wheelName) {
        cb.call(comp, event);
      }
    });
  }
};
if (browser_default.isDoc) {
  on(document, "keydown", GlobalEvent.trigger);
  on(document, "contextmenu", GlobalEvent.trigger);
  on(window, "mousedown", GlobalEvent.trigger);
  on(window, "blur", GlobalEvent.trigger);
  on(window, "resize", GlobalEvent.trigger);
  on(window, wheelName, GlobalEvent.trigger);
}
var event_default = GlobalEvent;
const getFuncText = (content) => isFunction_default(content) ? content() : content;
const getRowkey = ($table) => $table.rowId;
const getRowid = ($table, row2) => {
  const rowId = get_default(row2, getRowkey($table));
  return rowId ? encodeURIComponent(rowId) : "";
};
const getColumnList = (columns2) => {
  const result = [];
  columns2.forEach((column) => {
    if (column.children && column.children.length) {
      result.push(...getColumnList(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
const getClass = (property2, params) => property2 ? isFunction_default(property2) ? property2(params) : property2 : "";
const getFilters = (filters) => (filters || []).map(({ label, value, data: data8, checked }) => ({
  label,
  value,
  data: data8,
  _data: data8,
  checked: !!checked
}));
const initFilter = (filter2) => {
  return __spreadValues({
    condition: {
      input: "",
      relation: "equals",
      empty: null,
      type: null,
      value: []
    },
    hasFilter: false,
    custom: null
  }, filter2);
};
const formatText = (value) => `${isNull$1(value) ? "" : value}`;
const setCellValue = (row2, column, value) => {
  const { format: format2, property: property2 } = column;
  if (format2 && format2.async && Array.isArray(format2.data) && format2.data.length > 0 && value) {
    let labelText = "";
    const { enabled, valueSplit, textSplit } = format2.async.splitConfig || {};
    const findCellValue = (optionValue) => find$1(format2.data, (col) => {
      if (typeof col === "object") {
        const colLabel = get_default(col, format2.async.text || "label");
        const colValue = get_default(col, format2.async.value || "value");
        col.label = colLabel;
        return optionValue === colValue || optionValue === colLabel;
      }
      return optionValue === col;
    });
    if (enabled) {
      const labelTexts = [];
      value.split(valueSplit || ",").forEach((item) => {
        const findValue = findCellValue(item);
        if (findValue) {
          labelTexts.push(findValue.label);
        }
      });
      labelText = labelTexts.join(textSplit || ",");
    } else {
      labelText = findCellValue(value);
    }
    set_default(row2, column.asyncPrefix + property2, labelText ? labelText.label : labelText);
  }
  set_default(row2, property2, value);
};
const hasChildrenList = (item) => item && item.children && item.children.length > 0;
const destroyColumn = ($table, { columnConfig }) => {
  const matchObj = findTree_default($table.collectColumn, (column) => column === columnConfig);
  if (matchObj) {
    matchObj.items.splice(matchObj.index, 1);
  }
  $table.collectColumn = $table.collectColumn.slice(0);
};
const emitEvent$1 = (vm, type, args) => {
  if (vm.tableListeners[type]) {
    const params = [].concat(args);
    vm.$emit(type, ...params);
  }
};
const assemColumn = ($table, $column, instance) => {
  const { columnConfig, $el: elm, slots, $parent } = instance;
  const { collectColumn: collectColumn2 } = $table;
  columnConfig.slots = slots;
  const parentNode = elm.parentNode;
  const insertIndex = [].indexOf.call(parentNode.children, elm);
  if (!$column || $column !== $parent) {
    collectColumn2.splice(insertIndex, 0, columnConfig);
  } else {
    const parentConfig = $column.columnConfig;
    if (!parentConfig.children) {
      parentConfig.children = [];
    }
    parentConfig.children.splice(insertIndex, 0, columnConfig);
  }
  $table.collectColumn = collectColumn2.slice(0);
};
const getCellValue = (row2, column) => {
  const { field, prop } = column.own;
  const property2 = field || prop;
  return get_default(row2, property2);
};
const getListeners = ($attrs, $listeners) => {
  const regHyphenate = /\B([A-Z])/g;
  const regEventPrefix = /^on[A-Z]/;
  const listeners = {};
  if ($listeners) {
    return $listeners;
  }
  Object.keys($attrs).forEach((name) => {
    const event = $attrs[name];
    if (regEventPrefix.test(name) && typeof event === "function") {
      listeners[name.slice(2).replace(regHyphenate, "-$1").toLowerCase()] = event;
    }
  });
  return listeners;
};
let columnUniqueId = 0;
function setBasicProperty(column, context) {
  column.id = `col_${++columnUniqueId}`;
  column.type = context.type;
  column.prop = context.prop;
  column.rules = context.rules;
  column.required = context.required;
  column.property = context.field || context.prop;
  column.title = context.title;
  column.label = context.label;
  column.width = context.width;
  column.minWidth = context.minWidth;
  column.resizable = context.resizable;
  column.fixed = context.fixed;
  column.align = context.align;
  column.headerAlign = context.headerAlign;
  column.footerAlign = context.footerAlign;
  column.showOverflow = context.showOverflow;
  column.showHeaderOverflow = context.showHeaderOverflow;
  column.showTip = context.showTip;
  column.showHeaderTip = context.showHeaderTip;
  column.className = context.class || context.className;
  column.headerClassName = context.headerClassName;
  column.footerClassName = context.footerClassName;
  column.indexMethod = context.indexMethod;
  column.formatText = context.formatText;
  column.formatValue = context.formatValue;
  column.format = context.formatConfig;
  column.sortable = context.sortable;
  column.sortBy = context.sortBy;
  column.sortMethod = context.sortMethod;
  column.remoteSort = context.remoteSort;
  column.filterMultiple = isBoolean_default(context.filterMultiple) ? context.filterMultiple : true;
  column.filterMethod = context.filterMethod;
  column.filterRender = context.filterRender;
  column.filter = context.filter && initFilter(context.filter);
  column.treeNode = context.treeNode;
  column.renderer = context.renderer;
  column.editor = context.editor;
  column.operationConfig = context.operationConfig;
  column.equals = context.equals;
}
function ColumnConfig(context, { renderHeader: renderHeader2, renderCell: renderCell2, renderData } = {}, config2 = {}) {
  setBasicProperty(this, context);
  this.params = context.params;
  this.visible = true;
  this.level = 1;
  this.rowSpan = 1;
  this.colSpan = 1;
  this.order = null;
  this.renderWidth = 0;
  this.renderHeight = 0;
  this.resizeWidth = 0;
  this.renderLeft = 0;
  this.model = {};
  this.renderHeader = renderHeader2 || context.renderHeader;
  this.renderCell = renderCell2 || context.renderCell;
  this.renderData = renderData;
  this.showIcon = isBoolean_default(context.showIcon) ? context.showIcon : true;
  this.loading = false;
  this.slots = context.slots;
  this.own = context;
  this.asyncPrefix = config2.constant.asyncPrefix;
}
const getColumnConfig = (context, options, config2) => context instanceof ColumnConfig ? context : new ColumnConfig(context, options, config2);
const emitEvent = (emit, name, ...args) => {
  let cancel = false;
  if (typeof emit === "function" && typeof name === "string") {
    const event = document.createEvent("HTMLEvents");
    event.initEvent(name, false, true);
    event.preventDefault = () => {
      cancel = true;
    };
    args.unshift(event);
    args.unshift(name);
    emit.apply(null, args);
  }
  return !cancel;
};
const getActualTarget = (e) => {
  if (!e || !e.target) {
    return null;
  }
  return e.target.shadowRoot && e.composed ? e.composedPath()[0] || e.target : e.target;
};
const ATTR_NAME = "data-rowid";
const CELL_CLS = ".tiny-grid-cell";
const ROW_CLS = ".tiny-grid-body__row";
const isPx = (val) => val && /^\d+(px)?$/.test(val);
const isScale = (val) => val && /^\d+%$/.test(val);
const updateCellTitle = (event) => {
  const cellEl = event.currentTarget.querySelector(CELL_CLS);
  const content = cellEl.innerText;
  if (cellEl.getAttribute("title") !== content) {
    cellEl.setAttribute("title", content);
  }
};
const rowToVisible = ($table, row2) => {
  $table.$nextTick(() => {
    const tableBodyVnode = $table.$refs.tableBody;
    if (tableBodyVnode) {
      const gridbodyEl = tableBodyVnode.$el;
      const trEl = gridbodyEl.querySelector(`[${ATTR_NAME}="${getRowid($table, row2)}"]`);
      if (trEl) {
        const bodyHeight = gridbodyEl.clientHeight;
        const bodySrcollTop = gridbodyEl.scrollTop;
        const trOffsetTop = trEl.offsetTop + (trEl.offsetParent ? trEl.offsetParent.offsetTop : 0);
        const trHeight = trEl.clientHeight;
        if (trOffsetTop < bodySrcollTop || trOffsetTop > bodySrcollTop + bodyHeight) {
          gridbodyEl.scrollTop = trOffsetTop;
        } else if (trOffsetTop + trHeight >= bodyHeight + bodySrcollTop) {
          gridbodyEl.scrollTop = bodySrcollTop + trHeight;
        }
      } else {
        if ($table.scrollYLoad) {
          gridbodyEl.scrollTop = ($table.afterFullData.indexOf(row2) - 1) * $table.scrollYStore.rowHeight;
        }
      }
    }
  });
};
function getFixedLeft($table, from, column, body, offset) {
  let scrollLeft = $table.elemStore["main-body-wrapper"].scrollLeft + offset;
  if (!column.fixed) {
    from.fixed === "left" && (scrollLeft = 0);
    from.fixed === "right" && (scrollLeft = body.scrollWidth);
  }
  return scrollLeft;
}
function computeScrollLeft($table, td) {
  const { tableBody } = $table.$refs;
  const { visibleColumn } = $table;
  const { scrollLeft: bodyLeft, clientWidth: bodyWidth } = tableBody.$el;
  let leftWidth = 0;
  let rightWidth = 0;
  visibleColumn.forEach((column) => {
    if (column.fixed === "left") {
      leftWidth += column.renderWidth;
    } else if (column.fixed === "right") {
      rightWidth += column.renderWidth;
    }
  });
  const tdLeft = td._accumulateRenderWidth || td.offsetLeft + (td.offsetParent ? td.offsetParent.offsetLeft : 0);
  const tdWidth = td._renderWidth || td.clientWidth;
  let scrollLeft;
  if (tdLeft < bodyLeft + leftWidth) {
    scrollLeft = tdLeft - leftWidth;
  } else if (tdLeft + tdWidth > bodyLeft + bodyWidth - rightWidth) {
    scrollLeft = tdLeft + tdWidth - bodyWidth + rightWidth;
  } else {
    scrollLeft = bodyLeft;
  }
  return scrollLeft;
}
function setBodyLeft(body, td, $table, column, move) {
  const { isLeftArrow, isRightArrow, from } = move || {};
  body.scrollLeft = computeScrollLeft($table, td);
  if (from) {
    const direction = isLeftArrow ? "left" : isRightArrow ? "right" : null;
    const fixedDom = $table.elemStore[`${direction}-body-list`];
    const mainBody = $table.elemStore["main-body-wrapper"];
    const { left, right } = td.getBoundingClientRect();
    let offset = 0;
    if (isLeftArrow && fixedDom) {
      const div = fixedDom.querySelector("td.fixed__column");
      const division = div ? div.getBoundingClientRect().left : fixedDom.getBoundingClientRect().right;
      division > left && (offset = left - division);
    }
    if (isRightArrow && fixedDom) {
      const div = fixedDom.querySelector("td:not(.fixed__column)") || fixedDom;
      const division = div.getBoundingClientRect().left;
      division < right && (offset = right - division);
    }
    mainBody.scrollLeft = getFixedLeft($table, from, column, body, offset);
  }
}
const colToVisible = ($table, column, move) => {
  $table.$nextTick(() => {
    const gridbodyEl = $table.$refs.tableBody.$el;
    const tdElem = gridbodyEl.querySelector(`.${column.id}`);
    if (tdElem) {
      setBodyLeft(gridbodyEl, tdElem, $table, column, move);
    } else if ($table.scrollXLoad) {
      const visibleColumn = $table.visibleColumn;
      let scrollLeft = 0;
      for (let index3 = 0; index3 < visibleColumn.length; index3++) {
        if (visibleColumn[index3] === column) {
          break;
        }
        scrollLeft += visibleColumn[index3].renderWidth;
      }
      gridbodyEl.scrollLeft = computeScrollLeft($table, {
        _accumulateRenderWidth: scrollLeft,
        _renderWidth: column.renderWidth
      });
    }
  });
};
const hasDataTag = (el, value) => {
  if (!el || !value || !el.getAttribute) {
    return false;
  }
  return (" " + el.getAttribute("data-tag") + " ").includes(" " + value + " ");
};
const getEventTargetNode = (event, container, queryCls) => {
  let targetEl;
  let target = getActualTarget(event);
  while (target && target.nodeType && target !== document) {
    if (queryCls && (hasClass(target, queryCls) || hasDataTag(target, queryCls))) {
      targetEl = target;
    } else if (target === container) {
      return {
        flag: queryCls ? !!targetEl : true,
        container,
        targetElem: targetEl
      };
    }
    target = target.parentNode;
  }
  return { flag: false };
};
function getNodeOffset(el, container, rest) {
  if (el) {
    const htmlEl = document.querySelector("html");
    const bodyEl = document.body;
    const parentEl = el.parentNode;
    rest.top += el.offsetTop;
    rest.left += el.offsetLeft;
    if (parentEl && parentEl !== htmlEl && parentEl !== bodyEl) {
      rest.top -= parentEl.scrollTop;
      rest.left -= parentEl.scrollLeft;
    }
    if (container && (el === container || el.offsetParent === container) ? 0 : el.offsetParent) {
      return getNodeOffset(el.offsetParent, container, rest);
    }
  }
  return rest;
}
const getOffsetPos = (el, container) => getNodeOffset(el, container, { left: 0, top: 0 });
const getCellNodeIndex = (cell) => {
  const trEl = cell.parentNode;
  const columnIndex = arrayIndexOf_default(trEl.children, cell);
  const rowIndex = arrayIndexOf_default(trEl.parentNode.children, trEl);
  return { columnIndex, rowIndex };
};
const getRowNodes = (trList, cellNode, targetCellNode) => {
  const startColIndex = cellNode.columnIndex;
  const startRowIndex = cellNode.rowIndex;
  const targetColIndex = targetCellNode.columnIndex;
  const targetRowIndex = targetCellNode.rowIndex;
  const rows = [];
  for (let rowIndex = Math.min(startRowIndex, targetRowIndex), rowLen = Math.max(startRowIndex, targetRowIndex); rowIndex <= rowLen; rowIndex++) {
    const cells = [];
    const trEl = trList[rowIndex];
    for (let colIndex = Math.min(startColIndex, targetColIndex), colLen = Math.max(startColIndex, targetColIndex); colIndex <= colLen; colIndex++) {
      cells.push(trEl.children[colIndex]);
    }
    rows.push(cells);
  }
  return rows;
};
const getCell = ($table, { row: row2, column }) => new Promise((resolve) => {
  $table.$nextTick(() => {
    const bodyElem = $table.$refs[`${column.fixed || "table"}Body`];
    resolve(
      (bodyElem || $table.$refs.tableBody).$el.querySelector(
        `${ROW_CLS}[${ATTR_NAME}="${getRowid($table, row2)}"] .${column.id}`
      )
    );
  });
});
const AfterLave = "after-leave";
const Speed = 300;
var after_leave_default = (instance, callback, speed = Speed, once = false) => {
  if (!instance || !callback) {
    throw new Error("instance & callback is required");
  }
  let called = false;
  const eventCallback = function() {
    if (called) {
      return;
    }
    called = true;
    if (typeof callback === "function") {
      callback.apply(null, arguments);
    }
  };
  if (once) {
    instance.$once(AfterLave, eventCallback);
  } else {
    instance.$on(AfterLave, eventCallback);
  }
  setTimeout(eventCallback, speed + 100);
};
const handleAfterLeave = (emit) => () => {
  emit("after-leave");
};
const setText = (state) => (text) => {
  state.text = text;
};
const close = ({ state, constants: constants2, vm }) => () => {
  after_leave_default(
    vm,
    () => {
      const target = state.fullscreen || state.body ? document.body : state.target;
      if (vm.$el && vm.$el.parentNode) {
        removeClass(target, constants2.PARENT_RELATIVE_CLS);
        removeClass(target, constants2.PARENT_HIDDEN_CLS);
        vm.$el.parentNode.removeChild(vm.$el);
      }
      state.closed = true;
    },
    300
  );
  state.visible = false;
};
const api$3 = ["state", "handleAfterLeave", "setText", "close"];
const renderless$3 = (props2, { reactive: reactive2, computed }, { constants: constants2, vm, emit, designConfig }) => {
  const state = reactive2({
    text: null,
    spinner: null,
    visible: false,
    customClass: "",
    background: null,
    fullscreen: true,
    closed: false,
    size: "",
    iconSize: "",
    loadingImg: computed(() => {
      var _a;
      return props2.loadingImg || ((_a = designConfig == null ? void 0 : designConfig.props) == null ? void 0 : _a.loadingImg);
    }),
    iconStyle: computed(() => state.iconSize ? { width: state.iconSize + "px", height: state.iconSize + "px" } : {})
  });
  const api2 = {
    state,
    setText: setText(state),
    handleAfterLeave: handleAfterLeave(emit),
    close: close({ state, constants: constants2, vm })
  };
  return api2;
};
const index$4 = "";
function _createForOfIteratorHelperLoose$8(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$8(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$8(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$8(o, minLen);
}
function _arrayLikeToArray$8(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$8 = function _export_sfc210(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$8(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$g = defineComponent({
  inheritAttrs: false,
  name: $prefix + "Loading",
  emits: ["after-leave"],
  props: [].concat(props, ["_constants", "loadingImg", "size"]),
  setup: function setup$1$110(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$3,
      api: api$3
    });
  }
});
var _hoisted_1$8 = ["src"];
var _hoisted_2$6 = {
  key: 2,
  class: "circular",
  viewBox: "25 25 50 50"
};
var _hoisted_3$4 = /* @__PURE__ */ createBaseVNode(
  "circle",
  {
    class: "path",
    cx: "50",
    cy: "50",
    r: "24",
    fill: "none"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4$3 = [_hoisted_3$4];
var _hoisted_5$3 = {
  key: 3,
  class: "tiny-loading__text"
};
function _sfc_render$a(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "tiny-loading-fade",
    onAfterLeave: _ctx.handleAfterLeave,
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          "data-tag": "tiny-loading",
          class: normalizeClass(["tiny-loading tiny-loading__mask", [_ctx.state.customClass, {
            "is-fullscreen": _ctx.state.fullscreen
          }]]),
          style: normalizeStyle({
            backgroundColor: _ctx.state.background || ""
          })
        },
        [createBaseVNode(
          "div",
          {
            class: normalizeClass(["tiny-loading__spinner", {
              small: "tiny-loading__spinner-small",
              medium: "tiny-loading__spinner-medium",
              large: "tiny-loading__spinner-large"
            }[_ctx.size]])
          },
          [_ctx.state.spinner ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.state.spinner), {
            key: 0,
            class: "tiny-icon-loading"
          })) : _ctx.state.loadingImg ? (openBlock(), createElementBlock("img", {
            key: 1,
            class: "circular",
            style: normalizeStyle(_ctx.state.iconStyle),
            src: _ctx.state.loadingImg
          }, null, 12, _hoisted_1$8)) : (openBlock(), createElementBlock("svg", _hoisted_2$6, _hoisted_4$3)), _ctx.state.text ? (openBlock(), createElementBlock(
            "p",
            _hoisted_5$3,
            toDisplayString(_ctx.state.text),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true)],
          2
          /* CLASS */
        )],
        6
        /* CLASS, STYLE */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 1
    /* STABLE */
  }, 8, ["onAfterLeave"]);
}
var pc$2 = /* @__PURE__ */ _export_sfc$8(_sfc_main$g, [["render", _sfc_render$a]]);
const loadingImg = "/ui/admin/assets/loading.png";
const index$3 = "";
var classes$2 = {
  "loading-default": "m-0 top-0 right-0 left-0 bottom-0 block transition bg-color-bg-1 duration-1000",
  "loading-fullscreen": "fixed opacity-80",
  "loading-unfullscreen": "absolute",
  "loading-content": "absolute -translate-y-2/4  w-full  top-1/2 text-center  flex justify-center items-center",
  "loading-size-mini": "flex-row",
  "loading-size-unmini": "flex-col",
  "loading-unspinner": "animate-[spin_1.5s_linear_infinite] fill-current",
  "loading-unspinner-size-default": "h-10 w-10 stroke-2",
  "loading-unspinner-size-large": "h-24 w-24 stroke-2",
  "loading-unspinner-size-medium": "h-10 w-10 stroke-2",
  "loading-unspinner-size-small": "h-6 w-6 stroke-1",
  "loading-unspinner-size-mini": "h-3.5 w-3.5 stroke-1",
  "loading-unspinner-svg-circle": "stroke-color-brand tiny-loading-path",
  "loading-spinner": "text-sm fill-color-brand leading-none animate-[spin_2s_linear_infinite]",
  "loading-spinner-text": "tiny-tailwind-text block text-color-brand  text-xs leading-6",
  "loading-spinner-size-mini": "my-0 ml-2",
  "loading-spinner-size-unmini": "mb-1 mt-2.5"
};
function _createForOfIteratorHelperLoose$7(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$7(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$7(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$7(o, minLen);
}
function _arrayLikeToArray$7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$7 = function _export_sfc211(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$7(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
function _extends$7() {
  _extends$7 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$7.apply(this, arguments);
}
var _sfc_main$f = defineComponent({
  name: $prefix + "Loading",
  emits: ["after-leave"],
  props: _extends$7({}, $props, {
    _constants: Object,
    loadingImg: {
      type: String,
      default: loadingImg
    },
    size: {
      type: String
    }
  }),
  setup: function setup$1$111(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$3,
      api: api$3,
      classes: classes$2
    });
  }
});
var _hoisted_1$7 = ["src"];
var _hoisted_2$5 = {
  key: 2,
  class: "tiny-mobile-loading__text"
};
function _sfc_render$9(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "tiny-loading-fade",
    onAfterLeave: _ctx.handleAfterLeave,
    persisted: ""
  }, {
    default: withCtx(function() {
      var _ref;
      return [withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["tiny-mobile-loading", _ctx.state.customClass]),
          style: normalizeStyle("background-color:" + _ctx.state.background)
        },
        [createBaseVNode(
          "div",
          {
            class: normalizeClass(["tiny-mobile-loading__body", (_ref = {}, _ref["tiny-mobile-loading-" + _ctx.size] = _ctx.size, _ref)])
          },
          [!_ctx.state.spinner ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "tiny-mobile-loading__icon",
            src: _ctx.state.loadingImg,
            style: normalizeStyle(_ctx.state.iconStyle)
          }, null, 12, _hoisted_1$7)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.state.spinner), {
            key: 1,
            class: "tiny-mobile-loading__spinner"
          })), _ctx.state.text ? (openBlock(), createElementBlock(
            "span",
            _hoisted_2$5,
            toDisplayString(_ctx.state.text),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true)],
          2
          /* CLASS */
        )],
        6
        /* CLASS, STYLE */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 1
    /* STABLE */
  }, 8, ["onAfterLeave"]);
}
var mobile$1 = /* @__PURE__ */ _export_sfc$7(_sfc_main$f, [["render", _sfc_render$9]]);
var classes$1 = {
  "loading-default": "m-0 top-0 right-0 left-0 bottom-0 block transition bg-color-bg-1 duration-1000",
  "loading-fullscreen": "fixed opacity-80",
  "loading-unfullscreen": "absolute",
  "loading-content": "absolute -translate-y-2/4  w-full  top-1/2 text-center  flex justify-center items-center",
  "loading-size-mini": "flex-row",
  "loading-size-unmini": "flex-col",
  "loading-unspinner": "animate-[spin_1.5s_linear_infinite] fill-current",
  "loading-unspinner-size-default": "h-10 w-10 stroke-2",
  "loading-unspinner-size-large": "h-24 w-24 stroke-2",
  "loading-unspinner-size-medium": "h-10 w-10 stroke-2",
  "loading-unspinner-size-small": "h-6 w-6 stroke-1",
  "loading-unspinner-size-mini": "h-3.5 w-3.5 stroke-1",
  "loading-unspinner-svg-circle": "stroke-color-brand tiny-loading-path",
  "loading-spinner": "text-sm fill-color-brand leading-none animate-[spin_2s_linear_infinite]",
  "loading-spinner-text": "tiny-tailwind-text block text-color-brand  text-xs leading-6",
  "loading-spinner-size-mini": "my-0 ml-2",
  "loading-spinner-size-unmini": "mb-1 mt-2.5"
};
function _createForOfIteratorHelperLoose$6(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$6(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$6(o, minLen);
}
function _arrayLikeToArray$6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$6 = function _export_sfc212(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$6(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$e = defineComponent({
  inheritAttrs: false,
  name: $prefix + "Loading",
  emits: ["after-leave"],
  props: [].concat(props, ["_constants", "loadingImg", "size"]),
  setup: function setup$1$112(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$3,
      api: api$3,
      classes: classes$1
    });
  }
});
var _hoisted_1$6 = ["src"];
function _sfc_render$8(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "tiny-loading-fade",
    onAfterLeave: _ctx.handleAfterLeave,
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          "data-tag": "tiny-loading",
          class: normalizeClass(_ctx.m(_ctx.state.customClass, _ctx.gcls("loading-default"), _ctx.gcls({
            "loading-fullscreen": _ctx.state.fullscreen
          }), _ctx.gcls({
            "loading-unfullscreen": !_ctx.state.fullscreen
          }))),
          style: normalizeStyle("background-color:" + _ctx.state.background)
        },
        [createBaseVNode(
          "div",
          {
            "data-tag": "tiny-loading-body",
            class: normalizeClass(_ctx.m(_ctx.gcls("loading-content"), _ctx.gcls({
              "loading-size-mini": _ctx.size === "mini"
            }), _ctx.gcls({
              "loading-size-unmini": _ctx.size !== "mini"
            })))
          },
          [!_ctx.state.spinner ? (openBlock(), createElementBlock("img", {
            key: 0,
            "data-tag": "tiny-loading-icon",
            class: normalizeClass(_ctx.m(_ctx.gcls({
              "loading-unspinner-size-default": !_ctx.size || !["large", "medium", "small", "mini"].includes(_ctx.size)
            }), _ctx.gcls({
              "loading-unspinner-size-large": _ctx.size === "large"
            }), _ctx.gcls({
              "loading-unspinner-size-medium": _ctx.size === "medium"
            }), _ctx.gcls({
              "loading-unspinner-size-small": _ctx.size === "small"
            }), _ctx.gcls({
              "loading-unspinner-size-mini": _ctx.size === "mini"
            }))),
            src: _ctx.state.loadingImg,
            style: normalizeStyle(_ctx.state.iconStyle)
          }, null, 14, _hoisted_1$6)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.state.spinner), {
            key: 1,
            "data-tag": "tiny-loading-spinner",
            class: normalizeClass(_ctx.m(_ctx.gcls("loading-spinner")))
          }, null, 8, ["class"])), _ctx.state.text ? (openBlock(), createElementBlock(
            "span",
            {
              key: 2,
              "data-tag": "tiny-loading-text",
              class: normalizeClass(_ctx.m(_ctx.gcls("loading-spinner-text"), _ctx.gcls({
                "loading-spinner-size-mini": _ctx.size === "mini"
              }), _ctx.gcls({
                "loading-spinner-size-unmini": _ctx.size !== "mini"
              })))
            },
            toDisplayString(_ctx.state.text),
            3
            /* TEXT, CLASS */
          )) : createCommentVNode("v-if", true)],
          2
          /* CLASS */
        )],
        6
        /* CLASS, STYLE */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 1
    /* STABLE */
  }, 8, ["onAfterLeave"]);
}
var mobileFirst$2 = /* @__PURE__ */ _export_sfc$6(_sfc_main$e, [["render", _sfc_render$8]]);
function _extends$6() {
  _extends$6 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6.apply(this, arguments);
}
var template$3 = function template26(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$2;
  }
  if ("mobile" === (tinyMode || mode)) {
    return mobile$1;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$2;
  }
  return pc$2;
};
var loadingProps = _extends$6({}, $props, {
  type: {
    type: String,
    validator: function validator2(value) {
      return Boolean(~["primary", "simple"].indexOf(value));
    }
  },
  loadtext: {
    type: String,
    default: function _default7() {
      return constants.LOAD_ICON_TEXT;
    }
  },
  _constants: {
    type: Object,
    default: function _default23() {
      return constants;
    }
  },
  loadingImg: {
    type: String
  },
  size: {
    type: String,
    default: "small"
  }
});
var Loading$1 = defineComponent({
  name: $prefix + "Loading",
  emits: [],
  props: loadingProps,
  setup: function setup10(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$3
    });
  }
});
var defaults = {
  text: null,
  body: false,
  lock: false,
  customClass: "",
  fullscreen: true,
  iconSize: ""
};
var fullscreenLoading = null;
var constants = {
  TEXT_ATTR: "tiny-loading__text",
  IS_FULLSCREEN_CLS: "is-fullscreen",
  TEXT_SPINNER: "tiny-loading__spinner",
  TEXT_BACKGROUND: "tiny-loading__background",
  TEXT_CUSTOM_CLS: "tiny-loading__custom-class",
  PARENT_HIDDEN_CLS: "tiny-loading__parent-hidden",
  PARENT_RELATIVE_CLS: "tiny-loading__parent-relative",
  LOAD_ICON_TEXT: "ui.load.dot"
};
var addStyle = function addStyle2(options, parent, instance) {
  var maskStyle = {};
  if (options.fullscreen) {
    instance.originalPosition = getStyle$1(document.body, "position");
    instance.originalOverflow = getStyle$1(document.body, "overflow");
    maskStyle.zIndex = popup_manager_default.nextZIndex();
  } else if (options.body) {
    var clientRect = options.target.getBoundingClientRect();
    instance.originalPosition = getStyle$1(document.body, "position");
    var direction = ["top", "left"];
    direction.forEach(function(property2) {
      var scroll = property2 === "top" ? "scrollTop" : "scrollLeft";
      maskStyle[property2] = clientRect[property2] + document.body[scroll] + document.documentElement[scroll] + "px";
    });
    var size = ["height", "width"];
    size.forEach(function(property2) {
      maskStyle[property2] = clientRect[property2] + "px";
    });
  } else {
    instance.originalPosition = getStyle$1(parent, "position");
  }
  Object.keys(maskStyle).forEach(function(property2) {
    instance.$el.style[property2] = maskStyle[property2];
  });
};
var service = function service2(configs) {
  var _appProperties$tiny_m;
  if (configs === void 0) {
    configs = {};
  }
  configs = _extends$6({}, defaults, configs);
  if (typeof configs.target === "string") {
    configs.target = document.querySelector(configs.target);
  }
  configs.target = configs.target || document.body;
  if (configs.target !== document.body) {
    configs.fullscreen = false;
  } else {
    configs.body = true;
  }
  if (configs.fullscreen && fullscreenLoading && !fullscreenLoading.state.closed) {
    return fullscreenLoading;
  }
  var parent = configs.body ? document.body : configs.target;
  var loadingEl = parent.querySelector(':scope > [data-tag="tiny-loading"]');
  loadingEl && parent.removeChild(loadingEl);
  var instance = createComponent({
    component: Loading$1,
    propsData: {
      _constants: constants,
      size: configs.size,
      loadingImg: configs.loadingImg,
      tiny_mode: configs.tiny_mode || ((_appProperties$tiny_m = appProperties().tiny_mode) == null ? void 0 : _appProperties$tiny_m.value)
    },
    el: document.createElement("div")
  });
  for (var key in configs) {
    if (Object.prototype.hasOwnProperty.call(configs, key)) {
      instance.state[key] = configs[key];
    }
  }
  addStyle(configs, parent, instance);
  if (instance.originalPosition !== "absolute" && instance.originalPosition !== "fixed") {
    addClass(parent, constants.PARENT_RELATIVE_CLS);
  }
  if (configs.fullscreen && configs.lock) {
    addClass(parent, constants.PARENT_HIDDEN_CLS);
  }
  parent.appendChild(instance.$el);
  nextTick(function() {
    instance.state.visible = true;
  });
  if (configs.fullscreen) {
    fullscreenLoading = instance;
  }
  return instance;
};
var insertDom = function insertDom2(parent, el, binding) {
  if (!el.domVisible && getStyle$1(el, "display") !== "none" && getStyle$1(el, "visibility") !== "hidden") {
    Object.keys(el.maskStyle).forEach(function(property2) {
      el.mask.style[property2] = el.maskStyle[property2];
    });
    if (el.originalPosition !== "absolute" && el.originalPosition !== "fixed") {
      addClass(parent, constants.PARENT_RELATIVE_CLS);
    }
    if (binding.modifiers.fullscreen && binding.modifiers.lock) {
      addClass(parent, constants.PARENT_HIDDEN_CLS);
    }
    el.domVisible = true;
    parent.appendChild(el.mask);
    nextTick(function() {
      if (el.instance.hiding) {
        el.instance.$emit("after-leave");
      } else {
        el.instance.state.visible = true;
      }
    });
    el.domInserted = true;
  } else if (el.domVisible && el.instance.hiding === true) {
    el.instance.state.visible = true;
    el.instance.hiding = false;
  }
};
var appendLoadingToBody = function appendLoadingToBody2(el, binding) {
  var clientRect = el.getBoundingClientRect();
  el.originalPosition = getStyle$1(document.body, "position");
  var direction = ["top", "left"];
  direction.forEach(function(property2) {
    var scroll = property2 === "top" ? "scrollTop" : "scrollLeft";
    el.maskStyle[property2] = clientRect[property2] + document.body[scroll] + document.documentElement[scroll] - parseInt(getStyle$1(document.body, "margin-" + property2), 10) + "px";
  });
  var size = ["height", "width"];
  size.forEach(function(property2) {
    el.maskStyle[property2] = clientRect[property2] + "px";
  });
  insertDom(document.body, el, binding);
};
var toggleLoading = function toggleLoading2(el, binding, maskInstance) {
  if (binding.value) {
    nextTick(function() {
      if (binding.modifiers.fullscreen) {
        el.originalPosition = getStyle$1(document.body, "position");
        el.originalOverflow = getStyle$1(document.body, "overflow");
        el.maskStyle.zIndex = popup_manager_default.nextZIndex();
        addClass(el.mask, constants.IS_FULLSCREEN_CLS);
        insertDom(document.body, el, binding);
      } else {
        removeClass(el.mask, constants.IS_FULLSCREEN_CLS);
        if (binding.modifiers.body) {
          appendLoadingToBody(el, binding);
        } else {
          el.originalPosition = getStyle$1(el, "position");
          insertDom(el, el, binding);
        }
      }
    });
  } else {
    after_leave_default(maskInstance, function() {
      if (!maskInstance.hiding) {
        return;
      }
      var target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el;
      el.domVisible = false;
      removeClass(target, constants.PARENT_RELATIVE_CLS);
      removeClass(target, constants.PARENT_HIDDEN_CLS);
      maskInstance.hiding = false;
    }, 300, true);
    maskInstance.state.visible = false;
    maskInstance.hiding = true;
  }
};
var vLoading = {
  bind: function bind(el, binding, vnode) {
    var _vm$tiny_mode, _appProperties$tiny_m2;
    var vm = vnode.context;
    var textExr = el.getAttribute(constants.TEXT_ATTR);
    var spinnerExr = el.getAttribute(constants.TEXT_SPINNER);
    var backgroundExr = el.getAttribute(constants.TEXT_BACKGROUND);
    var customClassExr = el.getAttribute(constants.TEXT_CUSTOM_CLS);
    var mask = createComponent({
      component: Loading$1,
      propsData: {
        _constants: constants,
        tiny_mode: ((_vm$tiny_mode = vm.tiny_mode) == null ? void 0 : _vm$tiny_mode.value) || ((_appProperties$tiny_m2 = appProperties().tiny_mode) == null ? void 0 : _appProperties$tiny_m2.value)
      },
      el: document.createElement("div")
    });
    var config2 = _extends$6({}, defaults, {
      text: vm && vm[textExr] || textExr,
      spinner: vm && vm[spinnerExr] || spinnerExr,
      background: vm && vm[backgroundExr] || backgroundExr,
      customClass: vm && vm[customClassExr] || customClassExr,
      fullscreen: !!binding.modifiers.fullscreen
    });
    for (var key in config2) {
      if (Object.prototype.hasOwnProperty.call(config2, key)) {
        mask.state[key] = config2[key];
      }
    }
    el.instance = mask;
    el.mask = mask.$el;
    el.maskStyle = {};
    binding.value && toggleLoading(el, binding, mask);
  },
  update: function update(el, binding) {
    el.instance.setText(el.getAttribute(constants.TEXT_ATTR));
    if (binding.oldValue !== binding.value) {
      toggleLoading(el, binding, el.instance);
    }
  },
  unbind: function unbind(el, binding) {
    if (el.domInserted) {
      el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
      toggleLoading(el, {
        value: false,
        modifiers: binding.modifiers
      }, el.instance);
    }
    if (el.instance) {
      typeof el.instance.$destroy === "function" && el.instance.$destroy();
      el.instance = null;
      el.mask = null;
    }
  }
};
var directive = directive$1({
  vLoading
}).vLoading;
var version$4 = "3.16.0";
var Loadings = {
  install: function install(app) {
    app.directive("loading", directive);
  },
  service,
  directive,
  version: version$4
};
setupComponent.TINYLoading = {
  init: function init(root) {
    var prefix = root.$apiPrefix || "$";
    root[prefix + "loading"] = service;
  }
};
const emitClick = (emit) => () => emit("click");
const api$2 = ["state", "create"];
const renderless$2 = (props2, { reactive: reactive2 }, { emit }) => {
  const state = reactive2({
    urlType: props2.type
  });
  const api2 = {
    state,
    create: emitClick(emit)
  };
  return api2;
};
function _createForOfIteratorHelperLoose$5(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$5(o, minLen);
}
function _arrayLikeToArray$5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$5 = function _export_sfc213(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$5(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$d = /* @__PURE__ */ defineComponent({
  name: $prefix + "Exception",
  components: {
    TinyButton: Button$1
  },
  props: {
    type: {
      type: String,
      default: "nodata"
    },
    message: String,
    subMessage: String,
    exceptionClass: String,
    buttonText: String,
    imageUrl: String
  },
  setup: function setup$1$113(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$2,
      api: api$2
    });
  }
});
var _hoisted_1$5 = {
  class: "tiny-mobile-exception__content"
};
var _hoisted_2$4 = ["src"];
var _hoisted_3$3 = {
  class: "tiny-mobile-exception__content-message"
};
var _hoisted_4$2 = {
  class: "main-message"
};
var _hoisted_5$2 = {
  key: 0,
  class: "sub-message"
};
var _hoisted_6$1 = {
  class: "tiny-mobile-exception__footer"
};
function _sfc_render$7(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_button = resolveComponent("tiny-button");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-mobile-exception", _ctx.exceptionClass])
    },
    [createBaseVNode("div", _hoisted_1$5, [_ctx.imageUrl ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: _ctx.imageUrl,
      class: "tiny-mobile-exception__image"
    }, null, 8, _hoisted_2$4)) : (openBlock(), createElementBlock(
      "div",
      {
        key: 1,
        class: normalizeClass(["tiny-mobile-exception__content-view", ["tiny-mobile-exception__content-" + _ctx.type]])
      },
      null,
      2
      /* CLASS */
    )), renderSlot(_ctx.$slots, "content", {}, function() {
      return [createBaseVNode("div", _hoisted_3$3, [createBaseVNode(
        "div",
        _hoisted_4$2,
        toDisplayString(_ctx.state.message),
        1
        /* TEXT */
      ), _ctx.subMessage ? (openBlock(), createElementBlock(
        "div",
        _hoisted_5$2,
        toDisplayString(_ctx.subMessage),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true), _ctx.type === "nodata" ? renderSlot(_ctx.$slots, "default", {
        key: 1
      }, function() {
        return [createVNode(_component_tiny_button, {
          onClick: _ctx.create,
          type: "primary",
          size: "medium",
          round: ""
        }, {
          default: withCtx(function() {
            return [createTextVNode(
              toDisplayString(_ctx.buttonText ? _ctx.buttonText : _ctx.t("ui.exception.create")),
              1
              /* TEXT */
            )];
          }),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])];
      }) : createCommentVNode("v-if", true)])];
    })]), createBaseVNode("div", _hoisted_6$1, [renderSlot(_ctx.$slots, "footer")])],
    2
    /* CLASS */
  );
}
var mobile = /* @__PURE__ */ _export_sfc$5(_sfc_main$d, [["render", _sfc_render$7]]);
function _createForOfIteratorHelperLoose$4(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$4(o, minLen);
}
function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$4 = function _export_sfc214(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$4(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
function _extends$5() {
  _extends$5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
var $constants = {
  INTERNALCONFIG: {
    NODATA: "ui.exception.nodatamf",
    NOPERM: "ui.exception.nopermmf",
    WEAKNET: "ui.exception.weaknetmf",
    NORESULT: "ui.exception.noresult",
    NONEWS: "ui.exception.nonews",
    PAGENOPERM: "ui.exception.pagenoperm",
    PAGEWEAKNET: "ui.exception.pageweaknet",
    PAGENOTHING: "ui.exception.pagenothing",
    PAGESERVERERROR: "ui.exception.pageservererror"
  },
  ICONCONFIG: {
    NODATA: "icon-no-data",
    NOPERM: "icon-no-perm",
    NONEWS: "icon-no-news",
    WEAKNET: "icon-weaknet",
    NORESULT: "icon-no-result",
    PAGENOPERM: "icon-page-noperm",
    PAGENOTHING: "icon-page-nothing",
    PAGESERVERERROR: "icon-page-servererror",
    PAGEWEAKNET: "icon-page-weaknet"
  }
};
var _sfc_main$c = defineComponent({
  components: {
    TinyButton: Button$1,
    IconNoData: index$n(),
    IconNoNews: index$m(),
    IconNoPerm: index$l(),
    IconNoResult: index$k(),
    IconWeaknet: index$f(),
    IconPageNoperm: index$j(),
    IconPageNothing: index$i(),
    IconPageServererror: index$h(),
    IconPageWeaknet: index$g()
  },
  emits: ["click"],
  props: _extends$5({}, $props, {
    _constants: {
      type: Object,
      default: function _default8() {
        return $constants;
      }
    },
    type: {
      type: String,
      default: "nodata"
    },
    subMessage: String,
    exceptionClass: String,
    pageEmpty: {
      type: Boolean,
      default: false
    },
    componentPage: {
      type: Boolean,
      default: false
    }
  }),
  setup: function setup$1$114(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$2,
      api: api$2
    });
  }
});
var _hoisted_1$4 = {
  "data-tag": "tiny-exception-body"
};
var _hoisted_2$3 = {
  class: "bg-cover",
  "data-tag": "tiny-exception-image"
};
var _hoisted_3$2 = {
  "data-tag": "tiny-exception-description"
};
var _hoisted_4$1 = {
  key: 0,
  "data-tag": "tiny-exception-submessage",
  class: "leading-5.5 sm:leading-3 sm:text-xs mt-1 sm:mt-2 text-color-icon-placeholder"
};
var _hoisted_5$1 = {
  class: "sm:mt-4 mt-6 inline-block"
};
function _sfc_render$6(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      "data-tag": "tiny-exception",
      class: normalizeClass(_ctx.m("flex t-0 justify-center items-center w-full h-full bg-transparent sm:bg-color-bg-1 text-center", _ctx.exceptionClass))
    },
    [createBaseVNode("div", _hoisted_1$4, [createBaseVNode("div", _hoisted_2$3, [_ctx.state.urlType ? (openBlock(), createBlock(resolveDynamicComponent(_ctx._constants.ICONCONFIG[_ctx.type.toUpperCase()]), {
      key: 0,
      "custom-class": _ctx.componentPage ? "w-24 h-24" : "w-52 h-40"
    }, null, 8, ["custom-class"])) : createCommentVNode("v-if", true)]), renderSlot(_ctx.$slots, "content", {}, function() {
      return [createBaseVNode("div", _hoisted_3$2, [createBaseVNode(
        "div",
        {
          "data-tag": "tiny-exception-componentpage",
          class: normalizeClass(["text-color-text-primary mt-1 text-center text-sm", _ctx.componentPage ? "sm:text-xs" : "sm:text-sm"])
        },
        toDisplayString(_ctx.t(_ctx._constants.INTERNALCONFIG[_ctx.type.toUpperCase()])),
        3
        /* TEXT, CLASS */
      ), _ctx.subMessage ? (openBlock(), createElementBlock(
        "div",
        _hoisted_4$1,
        toDisplayString(_ctx.subMessage),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_5$1, [renderSlot(_ctx.$slots, "default")])])];
    })])],
    2
    /* CLASS */
  );
}
var mobileFirst$1 = /* @__PURE__ */ _export_sfc$4(_sfc_main$c, [["render", _sfc_render$6]]);
const index$2 = "";
function _extends$4() {
  _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
var template$2 = function template27(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("mobile" === (tinyMode || mode)) {
    return mobile;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$1;
  }
  return mobile;
};
var Exception = defineComponent({
  name: $prefix + "Exception",
  props: _extends$4({}, $props, {
    type: {
      type: String,
      default: "nodata"
    },
    message: String,
    subMessage: String,
    exceptionClass: String,
    imageUrl: String,
    pageEmpty: {
      type: Boolean,
      default: false
    },
    componentPage: {
      type: Boolean,
      default: false
    }
  }),
  setup: function setup11(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$2
    });
  }
});
var version$3 = "3.16.0";
Exception.install = function(Vue) {
  Vue.component(Exception.name, Exception);
};
Exception.version = version$3;
const isIE = browser_default.name === "ie";
const rgbRegExp = /^rgba?\((\d+),\s(\d+),\s(\d+)([\s\S]*)\)$/;
const hexRegExp = /^#([a-zA-Z0-9]{3}|[a-zA-Z0-9]{6})$/;
function computeColor(rgbColor) {
  const rgb = rgbRegExp.exec(rgbColor).slice(1, 4);
  return parseInt(rgb[0]).toString(16) + parseInt(rgb[1]).toString(16) + parseInt(rgb[2]).toString(16);
}
function getBgc(dom) {
  const getComputedStyle = window.getComputedStyle;
  const backgroundColor = isIE ? dom.currentStyle.backgroundColor : getComputedStyle(dom).backgroundColor;
  if (rgbRegExp.test(backgroundColor)) {
    return computeColor(backgroundColor);
  } else if (hexRegExp.test(backgroundColor)) {
    const bgc = backgroundColor.slice(1);
    if (bgc.length === 3) {
      return bgc.split("").map((s) => s + s).join("");
    }
    return bgc;
  }
  return "ffffff";
}
function funcFromCodePoint() {
  let codeUnitArr = [];
  let codeLength = 0;
  let resultStr = "";
  for (let i = 0, length = arguments.length; i !== length; ++i) {
    let cp = Number(arguments[i]);
    if (!(cp < 1114111 && cp >>> 0 === cp)) {
      throw new RangeError("Invalid code point: " + cp);
    }
    if (cp <= 65535) {
      codeLength = codeUnitArr.push(cp);
    } else {
      cp -= 65536;
      codeLength = codeUnitArr.push((cp >> 10) + 55296, cp % 1024 + 56320);
    }
    if (codeLength >= 16383) {
      resultStr += String.fromCharCode.apply(null, codeUnitArr);
      codeUnitArr.length = 0;
    }
  }
  return resultStr + String.fromCharCode.apply(null, codeUnitArr);
}
const defaultOptions = {
  plugins: {
    XLSX: null,
    // xlsx 插件
    XLSXX: null,
    // xlsx-style 插件
    FileSaver: null
    // FileSaver 插件
  },
  table: {
    sheetName: "tiny-sheet",
    formatMethod: ({ value, type }) => ({ value, type }),
    styleMethod: ({ style }) => style,
    rowHeightMethod: ({ height: height2 }) => height2,
    columnWidthMethod: ({ width }) => width,
    mergesMethod: (merges) => merges
  }
};
function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i !== s.length; i++) {
    view[i] = s.charCodeAt(i) & 255;
  }
  return buf;
}
function adjustHeight(hpx) {
  const n = parseInt(hpx / 36);
  return hpx - 10 * n;
}
function initHeaderDatas({ datas, headerRowCount, headerTrs }) {
  let maxColSpanCount = [-1, 0];
  for (let i = 0; i < headerRowCount; i++) {
    const childNodes = headerTrs[i].childNodes;
    let colSpanCount = 0;
    for (let j = 0; j < childNodes.length; j++) {
      if (~childNodes[j].className.split(/\s/).indexOf("col__gutter")) {
        break;
      }
      colSpanCount += childNodes[j].colSpan;
    }
    if (colSpanCount > maxColSpanCount[1]) {
      maxColSpanCount[0] = i;
      maxColSpanCount[1] = colSpanCount;
    }
  }
  for (let i = 0; i < headerRowCount; i++) {
    datas.push([]);
    for (let j = 0; j < maxColSpanCount[1]; j++) {
      datas[i].push("");
    }
  }
}
function buildHeaderMerges({ datas, headerTrs, rowHeightMethod, ths, ws }) {
  for (let i = 0; i < headerTrs.length; i++) {
    const headerTrRect = headerTrs[i].getBoundingClientRect();
    const childNodes = headerTrs[i].childNodes;
    let rowHeight = Math.round(headerTrRect.height);
    let lastColSpan = 0;
    rowHeight = rowHeightMethod ? rowHeightMethod({ rowIndex: i, height: rowHeight }) : rowHeight;
    ws["!rows"].push({ hpx: adjustHeight(rowHeight) });
    for (let j = 0; j < childNodes.length; j++) {
      if (~childNodes[j].className.split(/\s/).indexOf("col__gutter")) {
        break;
      }
      ths.push(childNodes[j]);
      const colSpan = childNodes[j].colSpan;
      const rowSpan = childNodes[j].rowSpan;
      const textContent = childNodes[j].textContent;
      if (colSpan > 1) {
        ws["!merges"].push({
          s: { r: i, c: lastColSpan },
          e: { r: i, c: lastColSpan + colSpan - 1 }
        });
      }
      if (rowSpan > 1) {
        ws["!merges"].push({
          s: { r: i, c: lastColSpan },
          e: { r: i + rowSpan - 1, c: lastColSpan }
        });
      }
      if (i !== headerTrs.length - 1) {
        datas[i].splice(lastColSpan, 1, textContent);
      }
      lastColSpan += colSpan;
    }
  }
}
function buildColids({ $table, colids, columnWidthMethod, datas, ths, ws }) {
  const getColWidth = (column, level) => {
    if (column.children) {
      for (let i = 0; i < column.children.length; i++) {
        getColWidth(column.children[i], level + 1);
      }
    } else {
      const colid = column.id;
      for (let i = 0; i < ths.length; i++) {
        if (ths[i].dataset.colid === colid) {
          colids.push(colid);
          const thRect = ths[i].getBoundingClientRect();
          let columnWidth = Math.round(thRect.width);
          columnWidth = columnWidthMethod ? columnWidthMethod({
            columnIndex: colids.length - 1,
            width: columnWidth
          }) : columnWidth;
          ws["!cols"].push({ wch: Math.round(columnWidth / 10) });
          datas[level].splice(
            colids.length - 1,
            1,
            typeof column.title === "string" ? column.title : ths[i].textContent
          );
          break;
        }
      }
    }
  };
  const collectColumn2 = $table.collectColumn;
  for (let i = 0; i < collectColumn2.length; i++) {
    getColWidth(collectColumn2[i], 0);
  }
}
function buildHeader({ $table, colids, datas, headerRowCount, headerTrs, opts, ws }) {
  if (headerRowCount === 0) {
    return;
  }
  const rowHeightMethod = opts.table.rowHeightMethod;
  const columnWidthMethod = opts.table.columnWidthMethod;
  const ths = [];
  initHeaderDatas({ datas, headerRowCount, headerTrs });
  buildHeaderMerges({ datas, headerTrs, rowHeightMethod, ths, ws });
  buildColids({ $table, colids, columnWidthMethod, datas, ths, ws });
}
function updateRowsDatas({ childNodes, colids, datas, i, offset, rowHeight, rowHeightMethod, ws }) {
  rowHeight = rowHeightMethod ? rowHeightMethod({ rowIndex: i + offset, height: rowHeight }) : rowHeight;
  ws["!rows"].push({ hpx: adjustHeight(rowHeight) });
  datas.push([]);
  for (let j = 0; j < colids.length; j++) {
    let rowTd = null;
    let textContent = "";
    for (let k = 0; k < childNodes.length; k++) {
      if (childNodes[k].dataset.colid === colids[j]) {
        rowTd = childNodes[k];
        break;
      }
    }
    if (rowTd) {
      textContent = rowTd.textContent;
      rowTd = null;
    }
    datas[offset + i].push(textContent);
  }
}
function updateMerges({ childNodes, colids, i, offset, ws }) {
  for (let j = 0; j < childNodes.length; j++) {
    const colSpan = childNodes[j].colSpan;
    const rowSpan = childNodes[j].rowSpan;
    const colid = childNodes[j].dataset.colid;
    const sc = colids.indexOf(colid);
    const sr = offset + i;
    if (colSpan > 1 && rowSpan > 1) {
      ws["!merges"].push({
        s: { r: sr, c: sc },
        e: { r: sr + rowSpan - 1, c: sc + colSpan - 1 }
      });
    } else if (colSpan > 1) {
      ws["!merges"].push({
        s: { r: sr, c: sc },
        e: { r: sr, c: sc + colSpan - 1 }
      });
    } else if (rowSpan > 1) {
      ws["!merges"].push({
        s: { r: sr, c: sc },
        e: { r: sr + rowSpan - 1, c: sc }
      });
    }
  }
}
function buildBody({ bodyRowCount, bodyTrs, colids, datas, headerRowCount, opts, ws }) {
  if (bodyRowCount === 0) {
    return;
  }
  const rowHeightMethod = opts.table.rowHeightMethod;
  const offset = headerRowCount;
  for (let i = 0; i < bodyTrs.length; i++) {
    const bodyTrRect = bodyTrs[i].getBoundingClientRect();
    const childNodes = bodyTrs[i].childNodes;
    let rowHeight = Math.round(bodyTrRect.height);
    updateRowsDatas({
      colids,
      childNodes,
      i,
      datas,
      rowHeight,
      rowHeightMethod,
      offset,
      ws
    });
    updateMerges({ childNodes, colids, i, offset, ws });
  }
}
function genExcelColNames() {
  const excelColNames = [];
  const f = funcFromCodePoint;
  for (let i = -1; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      excelColNames.push((i === -1 ? "" : f(65 + i)) + f(65 + j));
    }
  }
  return excelColNames;
}
function buildRef({ colids, datas, excelColNames, ws }) {
  let fullref = "";
  if (colids.length > 0 && datas.length > 0) {
    fullref = "A1:" + excelColNames[colids.length - 1] + datas.length;
  }
  ws["!fullref"] = fullref;
  ws["!ref"] = fullref;
}
function updateCellStyle({
  bodyRowCount,
  bodyTrBgcArr,
  footerTrBgc,
  headerRowCount,
  headerWrapperBgc,
  rowIndex,
  showBorder,
  style
}) {
  style.font = { name: "Microsoft YaHei", sz: 12, color: { rgb: "000000" } };
  if (rowIndex < headerRowCount) {
    style.fill = { fgColor: { rgb: headerWrapperBgc } };
    style.font.bold = true;
  } else if (rowIndex < headerRowCount + bodyRowCount) {
    style.fill = { fgColor: { rgb: bodyTrBgcArr[rowIndex - headerRowCount] } };
  } else {
    style.fill = { fgColor: { rgb: footerTrBgc } };
  }
  if (showBorder) {
    style.border = {
      top: { style: "thin", color: { rgb: "000000" } },
      bottom: { style: "thin", color: { rgb: "000000" } },
      left: { style: "thin", color: { rgb: "000000" } },
      right: { style: "thin", color: { rgb: "000000" } }
    };
  }
  style.alignment = { vertical: "center", horizontal: "left", wrapText: false };
}
function buildDatas({
  showBorder,
  bodyRowCount,
  bodyTrBgcArr,
  headerRowCount,
  colids,
  datas,
  footerTrBgc,
  headerWrapperBgc,
  excelColNames,
  opts,
  $table,
  ws
}) {
  if (datas.length === 0) {
    return;
  }
  const styleMethod = opts.table.styleMethod;
  const formatMethod = opts.table.formatMethod;
  const fullColumn = $table.getTableColumn().fullColumn;
  const isIndexColData = (i, j, indexColIndex2, headerRowCount2, bodyRowCount2) => indexColIndex2 === j && i >= headerRowCount2 && i < headerRowCount2 + bodyRowCount2;
  let indexColIndex;
  for (let i = 0; i < fullColumn.length; i++) {
    if (fullColumn[i].type === "index") {
      indexColIndex = colids.indexOf(fullColumn[i].id);
      break;
    }
  }
  for (let i = 0; i < datas.length; i++) {
    for (let j = 0; j < datas[i].length; j++) {
      let type = isIndexColData(i, j, indexColIndex, headerRowCount, bodyRowCount) ? "n" : "s";
      let value = isIndexColData(i, j, indexColIndex, headerRowCount, bodyRowCount) ? parseInt(datas[i][j]) : datas[i][j].trim();
      let style = {};
      updateCellStyle({
        bodyRowCount,
        bodyTrBgcArr,
        columnIndex: j,
        footerTrBgc,
        headerRowCount,
        headerWrapperBgc,
        rowIndex: i,
        showBorder,
        style
      });
      if (styleMethod) {
        style = styleMethod({ rowIndex: i, columnIndex: j, style });
      }
      if (formatMethod) {
        const ret = formatMethod({ rowIndex: i, columnIndex: j, value, type });
        type = ret.type;
        value = ret.value;
      }
      ws[excelColNames[j] + (i + 1)] = { t: type, v: value, s: style };
    }
  }
}
function buildWb({ XLSXX, opts, ws }) {
  ws = ws["!cols"].length === 0 || ws["!rows"].length === 0 ? {} : ws;
  const sheetName = opts.table.sheetName;
  const merges = ws["!merges"];
  if (merges) {
    const mergesMethod = opts.table.mergesMethod;
    ws["!merges"] = mergesMethod ? mergesMethod(merges) : merges;
  }
  const wb = {
    Props: {
      Application: "SheetJS",
      SheetNames: [sheetName],
      Worksheets: 1
    },
    SSF: XLSXX.SSF.get_table(),
    SheetNames: [sheetName],
    Sheets: {
      [sheetName]: ws
    }
  };
  return wb;
}
function computeBodyTrBgcArr(bodyTrs, isStripe) {
  const arr = [];
  for (let i = 0; i < bodyTrs.length; i++) {
    arr.push(isStripe ? getBgc(bodyTrs[i]) : "ffffff");
  }
  return arr;
}
function queryDom($table) {
  const headerTrs = $table.$el.querySelectorAll(".tiny-grid__header-wrapper.body__wrapper .tiny-grid-header__row");
  const bodyTrs = $table.$el.querySelectorAll(".tiny-grid__body-wrapper.body__wrapper .tiny-grid-body__row:not(.group)");
  const footerTrs = $table.$el.querySelectorAll(".tiny-grid__footer-wrapper.body__wrapper .tiny-grid-footer__row");
  const headerWrapper = $table.$el.querySelector(".tiny-grid__header-wrapper.body__wrapper");
  return { bodyTrs, footerTrs, headerTrs, headerWrapper };
}
function getTableAttr($table, headerWrapper, bodyTrs) {
  const showBorder = ~$table.$el.className.split(/\s/).indexOf("tiny-grid__border");
  const isStripe = ~$table.$el.className.split(/\s/).indexOf("tiny-grid__stripe");
  const headerWrapperBgc = headerWrapper ? getBgc(headerWrapper) : "ffffff";
  const bodyTrBgcArr = computeBodyTrBgcArr(bodyTrs, isStripe);
  const footerTrBgc = "ffffff";
  return { showBorder, headerWrapperBgc, bodyTrBgcArr, footerTrBgc };
}
function buildColidsByVisibleColumn({ $table, bodyRowCount, bodyTrs, colids, opts, ws }) {
  if (colids.length > 0 || bodyRowCount === 0) {
    return;
  }
  const columnWidthMethod = opts.table.columnWidthMethod;
  const tds = [];
  for (let i = 0; i < bodyTrs.length; i++) {
    for (let j = 0; j < bodyTrs[i].childNodes.length; j++) {
      tds.push(bodyTrs[i].childNodes[j]);
    }
  }
  for (let i = 0; i < $table.visibleColumn.length; i++) {
    let colid = $table.visibleColumn[i].id;
    for (let j = 0; j < tds.length; j++) {
      if (tds[j].dataset.colid === colid) {
        colids.push(colid);
        const tdRect = tds[j].getBoundingClientRect();
        const colSpan = tds[j].colSpan;
        let columnWidth = Math.round(tdRect.width / colSpan);
        columnWidth = columnWidthMethod ? columnWidthMethod({
          columnIndex: colids.length - 1,
          width: columnWidth
        }) : columnWidth;
        ws["!cols"].push({ wch: Math.round(columnWidth / 10) });
        break;
      }
    }
  }
}
function buildFooter({ bodyRowCount, colids, datas, footerRowCount, footerTrs, headerRowCount, opts, ws }) {
  if (footerRowCount === 0) {
    return;
  }
  const rowHeightMethod = opts.table.rowHeightMethod;
  const offset = headerRowCount + bodyRowCount;
  for (let i = 0; i < footerTrs.length; i++) {
    const footerTrRect = footerTrs[i].getBoundingClientRect();
    const childNodes = footerTrs[i].childNodes;
    let rowHeight = Math.round(footerTrRect.height);
    updateRowsDatas({
      childNodes,
      colids,
      datas,
      i,
      offset,
      rowHeight,
      rowHeightMethod,
      ws
    });
    updateMerges({ childNodes, colids, i, offset, ws });
  }
}
function createExcelFromDom($table, opts) {
  const { XLSXX } = opts.plugins;
  const { bodyTrs, footerTrs, headerTrs, headerWrapper } = queryDom($table);
  const { showBorder, headerWrapperBgc, bodyTrBgcArr, footerTrBgc } = getTableAttr($table, headerWrapper, bodyTrs);
  const headerRowCount = headerTrs.length;
  const bodyRowCount = bodyTrs.length;
  const footerRowCount = footerTrs.length;
  const ws = {};
  const datas = [];
  const colids = [];
  const excelColNames = genExcelColNames();
  ws["!rows"] = [];
  ws["!cols"] = [];
  ws["!merges"] = [];
  buildHeader({ $table, colids, datas, headerRowCount, headerTrs, opts, ws });
  buildColidsByVisibleColumn({ $table, bodyRowCount, bodyTrs, colids, opts, ws });
  buildBody({ bodyRowCount, bodyTrs, colids, datas, headerRowCount, opts, ws });
  buildFooter({ bodyRowCount, colids, datas, footerRowCount, footerTrs, headerRowCount, opts, ws });
  buildRef({ colids, datas, excelColNames, ws });
  buildDatas({
    $table,
    bodyRowCount,
    bodyTrBgcArr,
    colids,
    datas,
    excelColNames,
    footerTrBgc,
    headerRowCount,
    headerWrapperBgc,
    opts,
    showBorder,
    ws
  });
  return buildWb({ XLSXX, opts, ws });
}
function exportExcel($table, options) {
  const opts = extend(true, {}, options);
  opts.plugins = opts.plugins || {};
  if (!opts.plugins.XLSX || !opts.plugins.XLSXX || !opts.plugins.FileSaver) {
    return;
  }
  opts.table = opts.table || {};
  opts.table.sheetName = opts.table.sheetName || defaultOptions.table.sheetName;
  opts.table.formatMethod = opts.table.formatMethod || defaultOptions.table.formatMethod;
  opts.table.styleMethod = opts.table.styleMethod || defaultOptions.table.styleMethod;
  opts.table.rowHeightMethod = opts.table.rowHeightMethod || defaultOptions.table.rowHeightMethod;
  opts.table.columnWidthMethod = opts.table.columnWidthMethod || defaultOptions.table.columnWidthMethod;
  opts.table.mergesMethod = opts.table.mergesMethod || defaultOptions.table.mergesMethod;
  const wb = createExcelFromDom($table, opts);
  const { XLSXX, FileSaver } = opts.plugins;
  const wopts = { bookType: "xlsx", bookSST: false, type: "binary" };
  const wbout = XLSXX.write(wb, wopts);
  FileSaver.saveAs(new Blob([s2ab(wbout)], { type: "" }), opts.table.sheetName + ".xlsx");
}
const getCsvLabelData = (columns2, oData, tableElem) => {
  const trElemList = tableElem.querySelectorAll(".tiny-grid__body-wrapper.body__wrapper .tiny-grid-body__row");
  const trData = [];
  for (let i = 0, len = trElemList.length; i < len; i++) {
    const item = {};
    const trElem = trElemList[i];
    columns2.forEach((column) => {
      const cell = trElem.querySelector(`.${column.id}`);
      item[column.id] = cell ? cell.innerText.trim() : "";
    });
    trData.push(item);
  }
  return trData;
};
const getCsvData = (opts, oData, oColumns, tableElem) => {
  const isOriginal = opts.original;
  let columns2 = opts.columns ? opts.columns : oColumns;
  if (opts.columnFilterMethod) {
    columns2 = columns2.filter(opts.columnFilterMethod);
  }
  let datas = opts.data ? opts.data : isOriginal ? oData : getCsvLabelData(columns2, oData, tableElem);
  if (opts.dataFilterMethod) {
    datas = datas.filter(opts.dataFilterMethod);
  }
  return { columns: columns2, datas };
};
const getCsvContent = ($table, opts, oColumns, oData) => {
  const isOriginal = opts.original;
  const tableEl = $table.$el;
  const tab = opts.useTabs === false ? "" : "	";
  const { columns: columns2, datas } = getCsvData(opts, oData, oColumns, tableEl);
  let content = "\uFEFF";
  const transfrom = (str) => {
    if (typeof str === "string" && str.replace(/ /g, "").match(/[\s,"]/)) {
      str = '"' + str.replace(/"/g, '""') + '"';
    }
    if (typeof str === "string" && str.match(/^([@=]|([-\\+].*[^0-9\\.])).*$/)) {
      str = " " + str;
    }
    return str + tab;
  };
  if (opts.isHeader) {
    content += columns2.map(({ own }) => transfrom(getFuncText(own.title || own.label))).join(",") + "\n";
  }
  datas.forEach((row2, rowIndex) => {
    if (isOriginal) {
      content += columns2.map((column) => {
        if (column.type === "index") {
          return column.indexMethod ? column.indexMethod(rowIndex) : rowIndex + 1;
        }
        return transfrom(getCellValue(row2, column));
      }).join(",") + "\n";
    } else {
      content += columns2.map((column) => transfrom(row2[column.id])).join(",") + "\n";
    }
  });
  if (opts.isFooter) {
    const footerData = $table.footerData;
    const footers = opts.footerFilterMethod ? footerData.filter(opts.footerFilterMethod) : footerData;
    const filterMaps = $table.tableColumn.map((column) => ~columns2.indexOf(column));
    footers.forEach((rows) => {
      content += rows.filter((val, colIndex) => filterMaps[colIndex]).join(",") + "\n";
    });
  }
  return content;
};
const getCsvUrl = (opts, content) => {
  if (window.Blob && window.URL && window.URL.createObjectURL && browser_default.name !== "safari") {
    return URL.createObjectURL(new Blob([content], { type: "text/csv;charset=utf-8" }));
  }
  return `data:attachment/csv;charset=utf-8,${encodeURIComponent(content)}`;
};
const downloadCsc = (options, content) => {
  if (!options.download) {
    return Promise.resolve(content);
  }
  if (navigator.msSaveBlob && window.Blob) {
    navigator.msSaveBlob(new Blob([content], { type: "text/csv;charset=utf-8" }), options.filename);
  } else {
    const linkElem = document.createElement("a");
    linkElem.target = "_blank";
    linkElem.rel = "noopener noreferrer";
    linkElem.download = options.filename;
    linkElem.href = xss.filterUrl(getCsvUrl(options, content));
    document.body.appendChild(linkElem);
    linkElem.click();
    document.body.removeChild(linkElem);
  }
};
var export_default = {
  _exportCsv(options) {
    let { visibleColumn, scrollXLoad, scrollYLoad, treeConfig } = this;
    let mergedOpts = __spreadValues({
      columns: null,
      columnFilterMethod: (column) => column.property && !["index", "selection", "radio"].includes(column.type),
      download: true,
      data: null,
      dataFilterMethod: null,
      filename: "table.csv",
      footerFilterMethod: null,
      isHeader: true,
      isFooter: true,
      original: !!treeConfig
    }, options);
    if (!mergedOpts.filename.includes(".csv")) {
      mergedOpts.filename += ".csv";
    }
    if (!mergedOpts.original) {
      if (scrollXLoad || scrollYLoad) {
        mergedOpts.original = true;
      }
    }
    let columns2 = visibleColumn;
    let oData = this.tableFullData;
    if (treeConfig) {
      oData = toTreeArray_default(oData, treeConfig);
    }
    oData.forEach((value) => {
      Object.keys(value).forEach((key) => {
        if (value[key] === 0) {
          value[key] = "0";
        }
      });
    });
    return downloadCsc(mergedOpts, getCsvContent(this, mergedOpts, columns2, oData));
  },
  _exportExcel(options) {
    exportExcel(this, options);
  }
};
let resizeTimeout;
let defaultInterval = 250;
const eventStore = [];
let eventHandle;
const eventListener = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(eventHandle, defaultInterval);
};
eventHandle = () => {
  if (eventStore.length) {
    eventStore.forEach((item) => {
      item.tarList.forEach((el) => {
        const { target, width, heighe } = el;
        const clientWidth = target.clientWidth;
        const clientHeight = target.clientHeight;
        const rWidth = clientWidth && width !== clientWidth;
        const rHeight = clientHeight && heighe !== clientHeight;
        if (rWidth || rHeight) {
          el.width = clientWidth;
          el.heighe = clientHeight;
          requestAnimationFrame(item.callback);
        }
      });
    });
    eventListener();
  }
};
class ResizeObserverPolyfill {
  constructor(callback, resizeInterval) {
    this.tarList = [];
    this.callback = callback;
    defaultInterval = resizeInterval;
  }
  observe(targetObj) {
    if (targetObj) {
      if (!this.tarList.includes(targetObj)) {
        this.tarList.push({
          target: targetObj,
          width: targetObj.clientWidth,
          heighe: targetObj.clientHeight
        });
      }
      if (!eventStore.length) {
        eventListener();
      }
      if (!eventStore.includes(this)) {
        eventStore.push(this);
      }
    }
  }
  unobserve(target) {
    remove_default(eventStore, (item) => ~item.tarList.indexOf(target));
  }
  disconnect() {
    remove_default(eventStore, (item) => item === this);
  }
}
const Resize$1 = browser_default.isDoc ? window.ResizeObserver || ResizeObserverPolyfill : ResizeObserverPolyfill;
var resize_default = Resize$1;
const getPages = ({ props: props2, state }) => () => {
  const pagerCount = props2.pagerCount;
  const halfPagerCount = (pagerCount - 1) / 2;
  const currentPage2 = Number(props2.currentPage);
  const pageCount = Number(props2.pageCount);
  let showPrevMore = false;
  let showNextMore = false;
  if (pageCount > pagerCount) {
    if (currentPage2 < pageCount - halfPagerCount) {
      showNextMore = true;
    }
    if (currentPage2 > pagerCount - halfPagerCount) {
      showPrevMore = true;
    }
  }
  const pages = [];
  if (showPrevMore && !showNextMore) {
    const startPage = pageCount - (pagerCount - 2);
    for (let i = startPage; i < pageCount; i++) {
      pages.push(i);
    }
  } else if (!showPrevMore && showNextMore) {
    for (let i = 2; i < pagerCount; i++) {
      pages.push(i);
    }
  } else if (showPrevMore && showNextMore) {
    const offset = Math.floor(pagerCount / 2) - 1;
    for (let i = currentPage2 - offset; i <= currentPage2 + offset; i++) {
      pages.push(i);
    }
  } else {
    for (let i = 2; i < pageCount; i++) {
      pages.push(i);
    }
  }
  state.showPrevMore = showPrevMore;
  state.showNextMore = showNextMore;
  return pages;
};
const getClassListVal = (parentNode) => {
  let classListVal = [];
  const classList = parentNode.classList;
  if (classList) {
    let index3 = 0;
    for (const key in classList) {
      if (Object.prototype.hasOwnProperty.call(classList, key) && typeof Number(key) === "number") {
        classListVal[index3] = classList[key];
        index3++;
      }
    }
  } else {
    classListVal = parentNode.className.split(/\s+/);
  }
  return classListVal;
};
const onPagerClick = ({ emit, props: props2, vm }) => (event) => {
  const target = event.target;
  if (target.tagName === "UL" || props2.disabled) {
    return;
  }
  let newPage = Number(event.target.textContent);
  const { tagName, parentNode } = target;
  const parentEl = tagName === "LI" ? target : tagName === "svg" ? parentNode : parentNode.parentNode;
  const pageCount = props2.pageCount;
  const currentPage2 = props2.currentPage;
  const pagerCountOffset = props2.pagerCount - 2;
  const classListVal = getClassListVal(parentEl);
  if (classListVal.includes("dot")) {
    if (classListVal.includes("quickprev")) {
      newPage = currentPage2 - pagerCountOffset;
    } else if (classListVal.includes("quicknext")) {
      newPage = currentPage2 + pagerCountOffset;
    }
  }
  if (!isNaN(newPage)) {
    if (newPage < 1) {
      newPage = 1;
    }
    if (newPage > pageCount) {
      newPage = pageCount;
    }
  }
  const callback = () => {
    if (newPage !== currentPage2) {
      emit("change", newPage);
    }
  };
  if (props2.isBeforePageChange && newPage !== currentPage2) {
    let params = { newPage, currentPage: currentPage2, callback };
    vm.$parent.$parent.beforePagerChangeHandler(params);
  } else {
    callback();
  }
};
const onMouseenter = ({ props: props2, state }) => (direction) => {
  if (props2.disabled) {
    return;
  }
  if (direction === "left") {
    state.quickprevIconClass = props2.doubleLeftIcon;
  } else {
    state.quicknextIconClass = props2.doubleRightIcon;
  }
};
const api$1 = ["state", "onPagerClick", "onMouseenter"];
const renderless$1 = (props2, { computed, reactive: reactive2, watch: watch2 }, { emit, vm }) => {
  const api2 = {
    onPagerClick: onPagerClick({ emit, props: props2, vm })
  };
  const state = reactive2({
    current: null,
    showPrevMore: false,
    showNextMore: false,
    quicknextIconClass: props2.popupIcon,
    quickprevIconClass: props2.popupIcon,
    pagers: computed(() => api2.getPages())
  });
  Object.assign(api2, {
    state,
    getPages: getPages({ props: props2, state }),
    onMouseenter: onMouseenter({ props: props2, state })
  });
  watch2(
    () => state.showPrevMore,
    (value) => {
      if (!value) {
        state.quickprevIconClass = props2.popupIcon;
      }
    },
    { immediate: true }
  );
  watch2(
    () => state.showNextMore,
    (value) => {
      if (!value) {
        state.quicknextIconClass = props2.popupIcon;
      }
    },
    { immediate: true }
  );
  return api2;
};
function _createForOfIteratorHelperLoose$3(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$3(o, minLen);
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$3 = function _export_sfc215(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$3(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$b = defineComponent({
  name: $prefix + "PagerItem",
  emits: ["click", "change"],
  components: {
    IconPopup: index$w(),
    IconDoubleLeft: index$C(),
    IconDoubleRight: index$B()
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    currentPage: Number,
    pageCount: Number,
    pagerCount: Number,
    popupIcon: {
      type: Object,
      default: function _default9() {
        return index$w();
      }
    },
    doubleLeftIcon: {
      type: Object,
      default: function _default24() {
        return index$C();
      }
    },
    doubleRightIcon: {
      type: Object,
      default: function _default33() {
        return index$B();
      }
    },
    isBeforePageChange: Boolean
  },
  setup: function setup$1$115(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
var _hoisted_1$3 = {
  class: "tiny-pager__group tiny-unselect"
};
var _hoisted_2$2 = ["textContent"];
var _hoisted_3$1 = ["textContent"];
function _sfc_render$5(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("ul", {
    class: "tiny-pager__pages",
    onClick: _cache[4] || (_cache[4] = function() {
      return _ctx.onPagerClick && _ctx.onPagerClick.apply(_ctx, arguments);
    })
  }, [_ctx.pageCount > 0 ? (openBlock(), createElementBlock(
    "li",
    {
      key: 0,
      class: normalizeClass({
        "is-active": _ctx.currentPage === 1
      }),
      textContent: "1"
    },
    null,
    2
    /* CLASS */
  )) : createCommentVNode("v-if", true), _ctx.state.showPrevMore ? (openBlock(), createElementBlock(
    "li",
    {
      key: 1,
      class: normalizeClass(["dot quickprev", [_ctx.state.quickprevIconClass === _ctx.popupIcon && "is-popup"]]),
      onMouseenter: _cache[0] || (_cache[0] = function($event) {
        return _ctx.onMouseenter("left");
      }),
      onMouseleave: _cache[1] || (_cache[1] = function($event) {
        return _ctx.state.quickprevIconClass = _ctx.popupIcon;
      })
    },
    [(openBlock(), createBlock(resolveDynamicComponent(_ctx.state.quickprevIconClass)))],
    34
    /* CLASS, NEED_HYDRATION */
  )) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(
    Fragment,
    null,
    renderList(_ctx.state.pagers, function(pager) {
      return openBlock(), createElementBlock("li", {
        key: pager,
        class: normalizeClass({
          "is-active": _ctx.currentPage === pager
        }),
        textContent: toDisplayString("" + pager)
      }, null, 10, _hoisted_2$2);
    }),
    128
    /* KEYED_FRAGMENT */
  )), _ctx.state.showNextMore ? (openBlock(), createElementBlock(
    "li",
    {
      key: 2,
      class: normalizeClass(["dot quicknext", [_ctx.state.quicknextIconClass === _ctx.popupIcon && "is-popup"]]),
      onMouseenter: _cache[2] || (_cache[2] = function($event) {
        return _ctx.onMouseenter("right");
      }),
      onMouseleave: _cache[3] || (_cache[3] = function($event) {
        return _ctx.state.quicknextIconClass = _ctx.popupIcon;
      })
    },
    [(openBlock(), createBlock(resolveDynamicComponent(_ctx.state.quicknextIconClass)))],
    34
    /* CLASS, NEED_HYDRATION */
  )) : createCommentVNode("v-if", true), _ctx.pageCount > 1 ? (openBlock(), createElementBlock("li", {
    key: 3,
    class: normalizeClass({
      "is-active": _ctx.pageCount === _ctx.currentPage
    }),
    textContent: toDisplayString("" + _ctx.pageCount)
  }, null, 10, _hoisted_3$1)) : createCommentVNode("v-if", true)])]);
}
var pc$1 = /* @__PURE__ */ _export_sfc$3(_sfc_main$b, [["render", _sfc_render$5]]);
function _createForOfIteratorHelperLoose$2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$2 = function _export_sfc216(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$2(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var classes = {
  "pager-group": "inline-block align-middle text-xs h-7",
  "li": "bg-left-top inline-block text-xs ml-2 cursor-pointer text-center h-7 leading-7 min-w-[1.75rem] rounded-sm text-color-text-primary px-1 box-border transition-all duration-300 ease-in",
  "li-hover": "hover:text-color-brand-hover",
  "is-active": "text-color-brand border border-solid border-color-brand",
  "quick-icon": "h-7 w-3 fill-color-icon-primary hover:fill-color-brand",
  "dot": "w-4 min-w-0 p-0 border-none"
};
var _sfc_main$a = defineComponent({
  emits: ["click", "change"],
  components: {
    IconPopup: index$w(),
    IconDoubleLeft: index$C(),
    IconDoubleRight: index$B()
  },
  props: [].concat(props, ["disabled", "currentPage", "pageCount", "pagerCount", "popupIcon", "doubleLeftIcon", "doubleRightIcon", "isBeforePageChange"]),
  setup: function setup$1$116(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1,
      classes
    });
  }
});
var _hoisted_1$2 = ["textContent"];
var _hoisted_2$1 = ["textContent"];
function _sfc_render$4(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      "data-tag": "tiny-pager-item",
      class: normalizeClass(_ctx.gcls("pager-group"))
    },
    [createBaseVNode("ul", {
      "data-tag": "pager-item-content",
      class: "inline-flex text-xs",
      onClick: _cache[4] || (_cache[4] = function() {
        return _ctx.onPagerClick && _ctx.onPagerClick.apply(_ctx, arguments);
      })
    }, [_ctx.pageCount > 0 ? (openBlock(), createElementBlock(
      "li",
      {
        key: 0,
        "data-tag": "pager-item-hover",
        class: normalizeClass(_ctx.m(_ctx.gcls("li"), _ctx.gcls("li-hover"), _ctx.gcls({
          "is-active": _ctx.currentPage === 1
        }))),
        textContent: "1"
      },
      null,
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true), _ctx.state.showPrevMore ? (openBlock(), createElementBlock(
      "li",
      {
        key: 1,
        "data-tag": "pager-item-premore",
        class: normalizeClass(_ctx.m(_ctx.gcls("li"), _ctx.gcls("dot"))),
        onMouseenter: _cache[0] || (_cache[0] = function($event) {
          return _ctx.onMouseenter("left");
        }),
        onMouseleave: _cache[1] || (_cache[1] = function($event) {
          return _ctx.state.quickprevIconClass = _ctx.popupIcon;
        })
      },
      [(openBlock(), createBlock(resolveDynamicComponent(_ctx.state.quickprevIconClass), {
        class: normalizeClass(_ctx.gcls("quick-icon"))
      }, null, 8, ["class"]))],
      34
      /* CLASS, NEED_HYDRATION */
    )) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.state.pagers, function(pager) {
        return openBlock(), createElementBlock("li", {
          "data-tag": "pager-item-pager",
          key: pager,
          class: normalizeClass(_ctx.m(_ctx.gcls("li"), _ctx.gcls("li-hover"), _ctx.gcls({
            "is-active": _ctx.currentPage === pager
          }))),
          textContent: toDisplayString("" + pager)
        }, null, 10, _hoisted_1$2);
      }),
      128
      /* KEYED_FRAGMENT */
    )), _ctx.state.showNextMore ? (openBlock(), createElementBlock(
      "li",
      {
        key: 2,
        "data-tag": "pager-item-nextmore",
        class: normalizeClass(_ctx.m(_ctx.gcls("li"), _ctx.gcls("dot"))),
        onMouseenter: _cache[2] || (_cache[2] = function($event) {
          return _ctx.onMouseenter("right");
        }),
        onMouseleave: _cache[3] || (_cache[3] = function($event) {
          return _ctx.state.quicknextIconClass = _ctx.popupIcon;
        })
      },
      [(openBlock(), createBlock(resolveDynamicComponent(_ctx.state.quicknextIconClass), {
        class: normalizeClass(_ctx.gcls("quick-icon"))
      }, null, 8, ["class"]))],
      34
      /* CLASS, NEED_HYDRATION */
    )) : createCommentVNode("v-if", true), _ctx.pageCount > 1 ? (openBlock(), createElementBlock("li", {
      key: 3,
      "data-tag": "pager-item-active",
      class: normalizeClass(["hover:text-color-brand-hover", _ctx.m(_ctx.gcls("li"), _ctx.gcls({
        "is-active": _ctx.pageCount === _ctx.currentPage
      }))]),
      textContent: toDisplayString("" + _ctx.pageCount)
    }, null, 10, _hoisted_2$1)) : createCommentVNode("v-if", true)])],
    2
    /* CLASS */
  );
}
var mobileFirst = /* @__PURE__ */ _export_sfc$2(_sfc_main$a, [["render", _sfc_render$4]]);
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
var template$1 = function template28(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$1;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst;
  }
  return pc$1;
};
var PagerItem = defineComponent({
  name: $prefix + "PagerItem",
  props: _extends$3({}, $props, {
    disabled: {
      type: Boolean,
      default: false
    },
    currentPage: Number,
    pageCount: Number,
    pagerCount: Number,
    popupIcon: {
      type: Object,
      default: index$w
    },
    doubleLeftIcon: {
      type: Object,
      default: index$C
    },
    doubleRightIcon: {
      type: Object,
      default: index$B
    },
    isBeforePageChange: Boolean
  }),
  setup: function setup12(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$1
    });
  }
});
var version$2 = "3.16.0";
PagerItem.install = function(Vue) {
  Vue.component(PagerItem.name, PagerItem);
};
PagerItem.version = version$2;
const computedShowPager = ({ props: props2, state }) => () => {
  const hidePager = props2.hideOnSinglePage && (!state.internalPageCount || state.internalPageCount === 1);
  return state.internalLayout.length > 0 && !hidePager;
};
const computedInternalLayout = ({ props: props2 }) => () => {
  let layout = "";
  if (props2.mode && !props2.layout) {
    props2.mode === "number" && (layout = "total, sizes, prev, pager, next, jumper");
    props2.mode === "simple" && (layout = "sizes, total, prev, current, next");
    props2.mode === "complete" && (layout = "sizes, total, prev, pager, next, jumper");
    props2.mode === "fixed" && (layout = "prev,pager,next");
  } else if (!props2.mode && props2.layout || props2.mode && props2.layout) {
    layout = props2.layout;
  } else {
    layout = "total, prev, pager, next, jumper";
  }
  if (!layout) {
    return [];
  } else {
    const components = layout.split(",").map((item) => item.trim());
    return components;
  }
};
const computedTotalText = ({ props: props2, t: t2 }) => () => {
  if (typeof props2.customTotal === "string")
    return props2.customTotal;
  const totals = Number(props2.total);
  if (isNaN(totals))
    return "0";
  const HUNDRED_THOUSAND = 1e5;
  const MILLION = 1e6;
  const TEN_MILLION = 1e7;
  if (totals < HUNDRED_THOUSAND) {
    return String(totals);
  } else if (totals < MILLION) {
    return t2("ui.page.hundredThousand");
  } else if (totals < TEN_MILLION) {
    return t2("ui.page.million");
  } else {
    return t2("ui.page.tenMillion");
  }
};
const computedInternalPageCount = ({ props: props2, state }) => () => {
  if (typeof props2.total === "number") {
    return Math.max(1, Math.ceil(props2.total / state.internalPageSize));
  } else if (typeof props2.pageCount === "number") {
    return Math.max(1, props2.pageCount);
  }
  return null;
};
const handleJumperFocus = ({ state }) => (e) => {
  var _a;
  state.jumperBackup = (_a = e.target) == null ? void 0 : _a.value;
};
const watchInternalCurrentPage = ({ state, emit }) => (currentPage2) => {
  const value = String(currentPage2);
  if (state.jumperValue !== value) {
    state.jumperValue = value;
  }
  emit("update:current-page", currentPage2);
  emit("current-change", currentPage2);
  state.lastEmittedPage = -1;
};
const watchPageSizes = ({ state, props: props2 }) => (newVal) => {
  if (Array.isArray(newVal)) {
    state.internalPageSize = newVal.includes(props2.pageSize) ? props2.pageSize : newVal[0];
  }
};
const watchCurrentPage = ({ state, api: api2 }) => (curPage) => {
  state.internalCurrentPage = api2.getValidCurrentPage(curPage);
};
const watchInternalPageCount = ({ state, api: api2 }) => (pageCount) => {
  const oldCurPage = state.internalCurrentPage;
  if (pageCount && pageCount > 0 && oldCurPage === 0) {
    state.internalCurrentPage = 1;
  } else if (oldCurPage > Number(pageCount)) {
    state.internalCurrentPage = pageCount || 1;
    state.userChangePageSize && api2.emitChange();
  }
  state.userChangePageSize = false;
};
const watchPageSize = ({ state }) => (pageSize2) => {
  state.internalPageSize = isNaN(pageSize2) ? 10 : pageSize2;
};
const watchTotal = ({ state }) => (total2) => {
  state.internalTotal = total2;
};
const watchShowSizes = ({ nextTick: nextTick2, vm }) => (newVal) => {
  if (newVal) {
    nextTick2(() => {
      const width = vm.$refs.pageSize[0].getBoundingClientRect().width;
      const popover = document.querySelectorAll(".tiny-pager__selector");
      Array.from(popover).forEach((ele) => {
        ele.style.width = width + "px";
      });
    });
  }
};
const handleSizeChange = ({ props: props2, state, api: api2, emit, vm }) => (val) => {
  val = Number(val);
  if (val !== state.internalPageSize) {
    const callback = () => {
      if (!api2.beforeChangeHandler()) {
        return;
      }
      state.internalPageSize = val;
      state.userChangePageSize = true;
      state.showSizes = false;
      emit("update:pageSize", val);
      emit("size-change", val);
      emit("page-change", {
        currentPage: state.internalCurrentPage,
        pageSize: val,
        total: state.internalTotal
      });
      vm.$refs.sizesList[0].state.showPopper = false;
    };
    if (props2.isBeforePageChange) {
      let newPageSize = val;
      let currentPageSize = state.internalPageSize;
      let params = { newPageSize, currentPageSize, callback };
      api2.beforeSizeChangeHandler(params);
    } else {
      callback();
    }
  }
};
const handleJumperInput = ({ state }) => (e) => {
  const target = e.target;
  if (!target.value) {
    state.jumperValue = "";
  } else if (/^\d+$/.test(target.value)) {
    state.jumperValue = target.value || "1";
  }
  target.value = state.jumperValue;
};
const handleJumperChange = ({ props: props2, state, api: api2 }) => () => {
  api2.parseValueNumber();
  const callback = () => {
    api2.handleJumperClick();
  };
  const rollback = () => {
    state.jumperValue = String(state.jumperBackup);
  };
  const newPage = state.jumperValue;
  const currentPage2 = state.jumperBackup;
  if (props2.isBeforePageChange && newPage !== currentPage2) {
    const params = { newPage, currentPage: currentPage2, callback, rollback };
    api2.beforePagerChangeHandler(params);
  } else {
    callback();
  }
};
const handleJumperClick = ({ props: props2, state, api: api2 }) => () => {
  if (!api2.canJumperGo() || props2.disabled)
    return;
  state.internalCurrentPage = api2.getValidCurrentPage(state.jumperValue);
  api2.emitChange();
};
const isValueNumber = ({ state }) => () => {
  return !isNaN(Number(state.jumperValue));
};
const parseValueNumber = ({ state }) => () => {
  let value = Number(
    String(state.jumperValue).split(/[^0-9-+.]/).join("")
  );
  if (isNaN(value)) {
    value = 1;
  }
  value = Number(value.toFixed(0));
  const min = 1;
  const max = state.internalPageCount || 1;
  if (value >= max) {
    state.jumperValue = String(max);
  } else if (value <= min) {
    state.jumperValue = String(min);
  } else {
    state.jumperValue = String(value);
  }
};
const handleSizeShowPopover = ({ state, props: props2 }) => () => {
  if (props2.disabled) {
    state.showSizes = false;
    return;
  }
  state.showSizes = true;
};
const handleSizeHidePopover = ({ state }) => () => {
  state.showSizes = false;
};
const canJumperGo = ({ props: props2, state, vm }) => () => {
  const inputValue = Number(vm.$refs.jumperInput[0].value || 0);
  const currentPage2 = Number(state.internalCurrentPage || 0);
  return props2.accurateJumper ? inputValue !== currentPage2 : true;
};
const beforeSizeChangeHandler = ({ state, emit }) => (params) => {
  const { newPageSize, currentPageSize, callback } = params;
  const newPage = 1;
  const currentPage2 = state.internalCurrentPage;
  const temp = {
    newPage,
    newPageSize,
    currentPage: currentPage2,
    currentPageSize,
    callback
  };
  emit("before-page-change", temp);
};
const beforePagerChangeHandler = ({ state, emit }) => (params) => {
  const { newPage, currentPage: currentPage2, callback, rollback } = params;
  const newPageSize = state.internalPageSize;
  const currentPageSize = state.internalPageSize;
  const temp = {
    newPage,
    newPageSize,
    currentPage: currentPage2,
    currentPageSize,
    callback,
    rollback
  };
  emit("before-page-change", temp);
};
const copyEmit = ({ emit }) => (...args) => {
  emit(args[0], ...args.slice(1));
};
const beforeChangeHandler = ({ state, api: api2 }) => (val = -1) => {
  return emitEvent(api2.copyEmit, "before-change", state.internalCurrentPage, void 0, val);
};
const handleCurrentChange = ({ state, api: api2 }) => (val) => {
  if (!api2.beforeChangeHandler(val)) {
    return;
  }
  state.internalCurrentPage = api2.getValidCurrentPage(val);
  state.userChangePageSize = true;
  api2.emitChange();
};
const prev = ({ state, props: props2, api: api2, emit }) => () => {
  const callback = () => {
    if (props2.disabled || !api2.beforeChangeHandler(state.internalCurrentPage - 1)) {
      return;
    }
    const newVal = state.internalCurrentPage - 1;
    state.internalCurrentPage = api2.getValidCurrentPage(newVal);
    emit("prev-click", state.internalCurrentPage);
    api2.emitChange();
  };
  if (props2.isBeforePageChange) {
    const newPage = state.internalCurrentPage - 1;
    const temp = api2.buildBeforePageChangeParam({ newPage, callback });
    emit("before-page-change", temp);
  } else {
    callback();
  }
};
const next = ({ props: props2, state, api: api2, emit }) => () => {
  const callback = () => {
    if (props2.disabled || !api2.beforeChangeHandler(state.internalCurrentPage + 1)) {
      return;
    }
    const newVal = state.internalCurrentPage + 1;
    state.internalCurrentPage = api2.getValidCurrentPage(newVal);
    emit("next-click", state.internalCurrentPage);
    api2.emitChange();
  };
  if (props2.isBeforePageChange) {
    const newPage = state.internalCurrentPage + 1;
    const temp = api2.buildBeforePageChangeParam({ newPage, callback });
    emit("before-page-change", temp);
  } else {
    callback();
  }
};
const buildBeforePageChangeParam = ({ state }) => (param) => {
  const currentPage2 = state.internalCurrentPage;
  const newPageSize = state.internalPageSize;
  const currentPageSize = state.internalPageSize;
  return __spreadValues({ currentPage: currentPage2, newPageSize, currentPageSize }, param);
};
const getValidCurrentPage = ({ state }) => (val) => {
  const parseVal = Number(val);
  const hasPageCount = typeof state.internalPageCount === "number";
  let resetVal;
  if (hasPageCount) {
    if (parseVal < 1) {
      resetVal = 1;
    } else if (parseVal > (state.internalPageCount || 0)) {
      resetVal = state.internalPageCount;
    }
  } else {
    if (isNaN(parseVal) || parseVal < 1) {
      resetVal = 1;
    }
  }
  if (resetVal === void 0 && isNaN(parseVal)) {
    resetVal = 1;
  } else if (resetVal === 0) {
    resetVal = 1;
  }
  return resetVal === void 0 ? parseVal : resetVal;
};
const emitChange = ({ state, nextTick: nextTick2, emit }) => () => {
  nextTick2(() => {
    if (state.internalCurrentPage !== state.lastEmittedPage || state.userChangePageSize) {
      emit("update:current-page", state.internalCurrentPage);
      emit("page-change", {
        currentPage: state.internalCurrentPage,
        pageSize: state.internalPageSize,
        total: state.internalTotal
      });
      state.lastEmittedPage = state.internalCurrentPage;
      state.userChangePageSize = false;
    }
  });
};
const setTotal = ({ state }) => (val) => {
  state.internalTotal = val;
};
const clickSizes = () => (e) => e.stopPropagation();
const api = [
  "state",
  "handleJumperFocus",
  "handleSizeChange",
  "handleJumperInput",
  "handleJumperChange",
  "handleJumperClick",
  "isValueNumber",
  "parseValueNumber",
  "handleSizeShowPopover",
  "handleSizeHidePopover",
  "canJumperGo",
  "beforeSizeChangeHandler",
  "beforePagerChangeHandler",
  "beforeJumperChangeHandler",
  "beforeChangeHandler",
  "handleCurrentChange",
  "prev",
  "next",
  "buildBeforePageChangeParam",
  "getValidCurrentPage",
  "emitChange",
  "setTotal",
  "clickSizes"
];
const renderless = (props2, { reactive: reactive2, computed, watch: watch2 }, { emit, vm, nextTick: nextTick2, t: t2, designConfig }) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const api2 = {};
  const state = reactive2({
    showSizes: false,
    internalCurrentPage: 1,
    internalPageSize: props2.pageSize,
    lastEmittedPage: -1,
    userChangePageSize: false,
    internalTotal: props2.total,
    jumperValue: "1",
    jumperBackup: "1",
    showPager: computed(() => api2.computedShowPager()),
    internalLayout: computed(() => api2.computedInternalLayout()),
    totalText: computed(() => api2.computedTotalText()),
    internalPageCount: computed(() => api2.computedInternalPageCount()),
    showJumperSufix: (_b = (_a = designConfig == null ? void 0 : designConfig.state) == null ? void 0 : _a.showJumperSufix) != null ? _b : true,
    align: props2.align || ((_c = designConfig == null ? void 0 : designConfig.state) == null ? void 0 : _c.align) || "left",
    totalI18n: ((_d = designConfig == null ? void 0 : designConfig.state) == null ? void 0 : _d.totalI18n) || "totals",
    totalFixedLeft: (_g = (_f = props2.totalFixedLeft) != null ? _f : (_e = designConfig == null ? void 0 : designConfig.state) == null ? void 0 : _e.totalFixedLeft) != null ? _g : false
  });
  Object.assign(api2, {
    state,
    computedShowPager: computedShowPager({ props: props2, state }),
    computedInternalLayout: computedInternalLayout({ props: props2 }),
    computedTotalText: computedTotalText({ props: props2, t: t2 }),
    computedInternalPageCount: computedInternalPageCount({ props: props2, state }),
    getValidCurrentPage: getValidCurrentPage({ state }),
    handleJumperFocus: handleJumperFocus({ state }),
    handleSizeChange: handleSizeChange({ props: props2, state, api: api2, emit, vm }),
    handleJumperInput: handleJumperInput({ state }),
    handleJumperChange: handleJumperChange({ props: props2, state, api: api2 }),
    handleJumperClick: handleJumperClick({ props: props2, state, api: api2 }),
    isValueNumber: isValueNumber({ state }),
    parseValueNumber: parseValueNumber({ state }),
    handleSizeShowPopover: handleSizeShowPopover({ state, props: props2 }),
    handleSizeHidePopover: handleSizeHidePopover({ state }),
    canJumperGo: canJumperGo({ props: props2, state, vm }),
    beforeSizeChangeHandler: beforeSizeChangeHandler({ state, emit }),
    beforePagerChangeHandler: beforePagerChangeHandler({ state, emit }),
    copyEmit: copyEmit({ emit }),
    beforeChangeHandler: beforeChangeHandler({ state, api: api2 }),
    handleCurrentChange: handleCurrentChange({ state, api: api2 }),
    prev: prev({ state, props: props2, api: api2, emit }),
    next: next({ props: props2, state, api: api2, emit }),
    buildBeforePageChangeParam: buildBeforePageChangeParam({ state }),
    emitChange: emitChange({ state, nextTick: nextTick2, emit }),
    setTotal: setTotal({ state }),
    clickSizes: clickSizes(),
    // watch
    watchInternalCurrentPage: watchInternalCurrentPage({ state, emit }),
    watchPageSizes: watchPageSizes({ state, props: props2 }),
    watchCurrentPage: watchCurrentPage({ state, api: api2 }),
    watchInternalPageCount: watchInternalPageCount({ state, api: api2 }),
    watchPageSize: watchPageSize({ state }),
    watchTotal: watchTotal({ state }),
    watchShowSizes: watchShowSizes({ nextTick: nextTick2, vm })
  });
  state.internalCurrentPage = api2.getValidCurrentPage(props2.currentPage);
  watch2(() => state.internalCurrentPage, api2.watchInternalCurrentPage);
  watch2(() => props2.pageSizes, api2.watchPageSizes, { immediate: true });
  watch2(() => props2.currentPage, api2.watchCurrentPage);
  watch2(() => state.internalPageCount, api2.watchInternalPageCount);
  watch2(() => props2.pageSize, api2.watchPageSize, { immediate: true });
  watch2(() => props2.total, api2.watchTotal);
  watch2(() => state.showSizes, api2.watchShowSizes);
  return api2;
};
const index$1 = "";
function _createForOfIteratorHelperLoose$1(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$1 = function _export_sfc217(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$1(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$9 = /* @__PURE__ */ defineComponent({
  name: $prefix + "Pager",
  props: [].concat(props, ["accurateJumper", "appendToBody", "currentPage", "disabled", "hideOnSinglePage", "isBeforePageChange", "layout", "mode", "nextText", "pageCount", "pageSize", "pageSizes", "pagerCount", "popperAppendToBody", "showTotalLoading", "customTotal", "popperClass", "prevText", "total", "size", "align"]),
  directives: {
    loading: Loadings.directive
  },
  setup: function setup$1$117(props2, context) {
    return setup$1({
      props: props2,
      context,
      renderless,
      api
    });
  },
  components: {
    TinyPopover: Popover,
    ChevronLeft: index$I(),
    ChevronRight: index$O(),
    TriangleDown: index$u(),
    Pager: PagerItem
  }
});
var _hoisted_1$1 = ["disabled"];
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  class: "tiny-pager__goto"
};
var _hoisted_4 = {
  class: "tiny-pager__goto-text"
};
var _hoisted_5 = ["value", "disabled"];
var _hoisted_6 = {
  key: 0,
  class: "tiny-pager__goto-text tiny-pager__goto-text-sufix"
};
var _hoisted_7 = {
  class: "tiny-pager__pages"
};
var _hoisted_8 = {
  class: "is-active"
};
var _hoisted_9 = ["disabled"];
var _hoisted_10 = {
  key: 0
};
var _hoisted_11 = {
  class: "sizes"
};
var _hoisted_12 = {
  class: "tiny-pager__page-size-btn"
};
var _hoisted_13 = {
  class: "tiny-pager__selector-body"
};
var _hoisted_14 = {
  class: "tiny-pager__selector-poplist"
};
var _hoisted_15 = ["title", "onClick"];
var _hoisted_16 = {
  class: "tiny-pager__total-loading"
};
var _hoisted_17 = {
  class: "tiny-pager__loading-text"
};
var _hoisted_18 = {
  class: "tiny-pager__total-allpage"
};
function _sfc_render$3(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_chevron_left = resolveComponent("chevron-left");
  var _component_pager = resolveComponent("pager");
  var _component_chevron_right = resolveComponent("chevron-right");
  var _component_triangle_down = resolveComponent("triangle-down");
  var _component_tiny_popover = resolveComponent("tiny-popover");
  var _directive_loading = resolveDirective("loading");
  return _ctx.state.showPager ? (openBlock(), createElementBlock(
    "div",
    {
      key: 0,
      class: normalizeClass(["tiny-pager tiny-pager__number", _ctx.size ? "tiny-pager--" + _ctx.size : "", _ctx.disabled ? "is-disabled" : ""]),
      style: normalizeStyle({
        textAlign: _ctx.state.align
      })
    },
    [(openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.state.internalLayout, function(item, index3) {
        return openBlock(), createElementBlock(
          Fragment,
          null,
          [item === "prev" ? (openBlock(), createElementBlock("button", {
            key: "prev" + index3,
            type: "button",
            class: "tiny-pager__btn-prev",
            disabled: _ctx.disabled || _ctx.state.internalCurrentPage <= 1,
            onClick: _cache[0] || (_cache[0] = function() {
              return _ctx.prev && _ctx.prev.apply(_ctx, arguments);
            })
          }, [_ctx.prevText ? (openBlock(), createElementBlock(
            "span",
            _hoisted_2,
            toDisplayString(_ctx.prevText),
            1
            /* TEXT */
          )) : (openBlock(), createBlock(_component_chevron_left, {
            key: 1,
            class: "tiny-svg-size"
          }))], 8, _hoisted_1$1)) : item === "jumper" ? (openBlock(), createElementBlock("div", {
            key: "jumper" + index3,
            class: "tiny-pager__group"
          }, [createBaseVNode("div", _hoisted_3, [createBaseVNode(
            "span",
            _hoisted_4,
            toDisplayString(_ctx.t("ui.page.jump")),
            1
            /* TEXT */
          ), createBaseVNode("input", {
            type: "text",
            ref_for: true,
            ref: "jumperInput",
            value: _ctx.state.jumperValue,
            disabled: _ctx.disabled,
            onFocus: _cache[1] || (_cache[1] = function() {
              return _ctx.handleJumperFocus && _ctx.handleJumperFocus.apply(_ctx, arguments);
            }),
            onInput: _cache[2] || (_cache[2] = function() {
              return _ctx.handleJumperInput && _ctx.handleJumperInput.apply(_ctx, arguments);
            }),
            onChange: _cache[3] || (_cache[3] = function() {
              return _ctx.handleJumperChange && _ctx.handleJumperChange.apply(_ctx, arguments);
            })
          }, null, 40, _hoisted_5), _ctx.state.showJumperSufix ? (openBlock(), createElementBlock(
            "span",
            _hoisted_6,
            toDisplayString(_ctx.t("ui.page.pageClassifier")),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true)])])) : item === "current" ? (openBlock(), createElementBlock("div", {
            key: "current" + index3,
            class: "tiny-pager__group tiny-unselect"
          }, [createBaseVNode("ul", _hoisted_7, [createBaseVNode(
            "li",
            _hoisted_8,
            toDisplayString(_ctx.state.internalCurrentPage),
            1
            /* TEXT */
          )])])) : item === "pager" ? (openBlock(), createBlock(_component_pager, {
            key: "pager" + index3,
            "is-before-page-change": _ctx.isBeforePageChange,
            "current-page": _ctx.state.internalCurrentPage,
            "page-count": _ctx.state.internalPageCount,
            "pager-count": _ctx.pagerCount,
            disabled: _ctx.disabled,
            onChange: _ctx.handleCurrentChange,
            onBeforePageChange: _ctx.beforePagerChangeHandler
          }, null, 8, ["is-before-page-change", "current-page", "page-count", "pager-count", "disabled", "onChange", "onBeforePageChange"])) : item === "next" ? (openBlock(), createElementBlock("button", {
            key: "next" + index3,
            type: "button",
            class: "tiny-pager__btn-next",
            disabled: _ctx.disabled || _ctx.state.internalCurrentPage === _ctx.state.internalPageCount || _ctx.state.internalPageCount === 0,
            onClick: _cache[4] || (_cache[4] = function() {
              return _ctx.next && _ctx.next.apply(_ctx, arguments);
            })
          }, [_ctx.nextText ? (openBlock(), createElementBlock(
            "span",
            _hoisted_10,
            toDisplayString(_ctx.nextText),
            1
            /* TEXT */
          )) : (openBlock(), createBlock(_component_chevron_right, {
            key: 1,
            class: "tiny-svg-size"
          }))], 8, _hoisted_9)) : item === "sizes" ? (openBlock(), createElementBlock("div", {
            key: "sizes" + index3,
            class: "tiny-pager__group tiny-pager__sizes"
          }, [createVNode(_component_tiny_popover, {
            ref_for: true,
            ref: "sizesList",
            placement: "bottom-start",
            "append-to-body": _ctx.popperAppendToBody === false ? false : _ctx.appendToBody,
            trigger: "click",
            "popper-class": "tiny-pager__selector " + (_ctx.popperClass ? "" + _ctx.popperClass : ""),
            "visible-arrow": false,
            disabled: _ctx.disabled,
            onShow: _ctx.handleSizeShowPopover,
            onHide: _ctx.handleSizeHidePopover
          }, {
            reference: withCtx(function() {
              return [createBaseVNode("div", {
                class: "tiny-pager__popover",
                onClick: _cache[5] || (_cache[5] = function() {
                  return _ctx.clickSizes && _ctx.clickSizes.apply(_ctx, arguments);
                })
              }, [createBaseVNode(
                "div",
                {
                  ref_for: true,
                  ref: "pageSize",
                  class: normalizeClass(["tiny-pager__page-size", {
                    disabled: _ctx.disabled
                  }])
                },
                [createBaseVNode(
                  "span",
                  _hoisted_11,
                  toDisplayString(_ctx.state.internalPageSize),
                  1
                  /* TEXT */
                ), createBaseVNode(
                  "span",
                  null,
                  toDisplayString(_ctx.t("ui.page.page")),
                  1
                  /* TEXT */
                ), createBaseVNode("div", _hoisted_12, [createVNode(_component_triangle_down, {
                  class: normalizeClass(["tiny-svg-size", _ctx.state.showSizes ? "tiny-svg-size__reverse-180" : ""])
                }, null, 8, ["class"])])],
                2
                /* CLASS */
              )])];
            }),
            default: withCtx(function() {
              return [createBaseVNode("div", _hoisted_13, [createBaseVNode("ul", _hoisted_14, [(openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(_ctx.pageSizes, function(sizeItem, sizeIndex) {
                  return openBlock(), createElementBlock("li", {
                    key: sizeIndex,
                    class: normalizeClass(["list-item", sizeItem === _ctx.state.internalPageSize ? "is-selected select-pre" : ""]),
                    title: String(sizeItem),
                    onClick: function onClick($event) {
                      return _ctx.handleSizeChange(sizeItem);
                    }
                  }, toDisplayString(sizeItem), 11, _hoisted_15);
                }),
                128
                /* KEYED_FRAGMENT */
              ))])])];
            }),
            _: 1
            /* STABLE */
          }, 8, ["append-to-body", "popper-class", "disabled", "onShow", "onHide"])])) : item === "slot" ? renderSlot(_ctx.$slots, "default", {
            key: 6
          }) : item === "total" && typeof _ctx.state.internalTotal === "number" ? (openBlock(), createElementBlock(
            "div",
            {
              key: "total" + index3,
              class: normalizeClass(["tiny-pager__group", {
                "is-disabled": _ctx.disabled,
                "tiny-pager__loading": _ctx.showTotalLoading,
                "tiny-pager__pull-left": _ctx.state.totalFixedLeft
              }])
            },
            [createBaseVNode(
              "div",
              {
                class: normalizeClass(["tiny-pager__total", _ctx.size ? "tiny-pager--" + _ctx.size : ""])
              },
              [_ctx.showTotalLoading ? (openBlock(), createElementBlock(
                Fragment,
                {
                  key: 0
                },
                [withDirectives(createBaseVNode(
                  "div",
                  _hoisted_16,
                  null,
                  512
                  /* NEED_PATCH */
                ), [[_directive_loading, _ctx.showTotalLoading]]), createBaseVNode(
                  "span",
                  _hoisted_17,
                  toDisplayString(_ctx.t("ui.page.loadingTotals")),
                  1
                  /* TEXT */
                )],
                64
                /* STABLE_FRAGMENT */
              )) : _ctx.state.totalI18n === "total" ? (openBlock(), createElementBlock(
                Fragment,
                {
                  key: 1
                },
                [createBaseVNode(
                  "span",
                  null,
                  toDisplayString(_ctx.t("ui.page.total")),
                  1
                  /* TEXT */
                ), createBaseVNode(
                  "span",
                  _hoisted_18,
                  toDisplayString(_ctx.customTotal ? _ctx.state.totalText : _ctx.state.internalTotal),
                  1
                  /* TEXT */
                ), createBaseVNode(
                  "span",
                  null,
                  toDisplayString(_ctx.t("ui.page.item")),
                  1
                  /* TEXT */
                )],
                64
                /* STABLE_FRAGMENT */
              )) : (openBlock(), createElementBlock(
                Fragment,
                {
                  key: 2
                },
                [createBaseVNode(
                  "span",
                  null,
                  toDisplayString(_ctx.t("ui.page.totals")),
                  1
                  /* TEXT */
                ), createBaseVNode(
                  "span",
                  null,
                  toDisplayString(_ctx.customTotal ? _ctx.state.totalText : _ctx.state.internalTotal),
                  1
                  /* TEXT */
                )],
                64
                /* STABLE_FRAGMENT */
              ))],
              2
              /* CLASS */
            )],
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true)],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      256
      /* UNKEYED_FRAGMENT */
    ))],
    6
    /* CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
var pc = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["render", _sfc_render$3]]);
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
var _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: _extends$2({}, $props, {
    accurateJumper: {
      type: Boolean,
      default: function _default10() {
        return true;
      }
    },
    appendToBody: {
      type: Boolean,
      default: function _default25() {
        return true;
      }
    },
    currentPage: {
      type: Number,
      default: function _default34() {
        return 1;
      }
    },
    disabled: {
      type: Boolean,
      default: function _default42() {
        return false;
      }
    },
    hideOnSinglePage: Boolean,
    isBeforePageChange: Boolean,
    layout: String,
    mode: String,
    nextText: String,
    pageCount: Number,
    pageSize: {
      type: Number,
      default: function _default52() {
        return 10;
      }
    },
    pageSizes: {
      type: Array,
      default: function _default62() {
        return [10, 20, 30, 40, 50, 100];
      }
    },
    pagerCount: {
      type: Number,
      validator: function validator3(value) {
        return (value | 0) === value && value > 2 && value < 22 && value % 2 === 1;
      },
      default: function _default72() {
        return 7;
      }
    },
    popperAppendToBody: {
      type: Boolean,
      default: function _default82() {
        return true;
      }
    },
    showTotalLoading: {
      type: Boolean,
      default: function _default92() {
        return false;
      }
    },
    customTotal: {
      type: [Boolean, String],
      default: function _default102() {
        return false;
      }
    },
    popperClass: String,
    prevText: String,
    total: Number
  }),
  data: function data() {
    return {
      internalCurrentPage: 0,
      internalPageCount: 0,
      internalPageSize: 0,
      internalTotal: 0
    };
  },
  watch: {
    total: function total() {
      this.normalizeState();
    },
    pageSize: function pageSize() {
      this.normalizeState();
    },
    currentPage: function currentPage() {
      this.normalizeState();
    }
  },
  created: function created() {
    this.normalizeState();
  },
  render: function render6() {
    if (this.hideOnSinglePage && (!this.internalPageCount || this.internalPageCount === 1))
      return null;
    var ChevronLeft2 = index$I();
    var ChevronRight = index$O();
    var prevDisabled = this.disabled || this.internalCurrentPage <= 1;
    var nextDisabled = this.disabled || this.internalCurrentPage === this.internalPageCount || this.internalPageCount === 0;
    var prevText = this.prevText;
    var nextText = this.nextText;
    return createVNode("div", {
      "class": "flex justify-end"
    }, [createVNode("nav", {
      "class": "w-full my-1 mx-0 text-sm block w-fit"
    }, [createVNode("ul", {
      "class": "inline-flex m-0 p-0 list-none w-fit"
    }, [createVNode("li", {
      "class": ["py-0 px-0 cursor-pointer box-border h-8 text-color-brand bg-color-bg-1 select-none flex items-center justify-center relative rounded", prevText ? "w-fit" : "w-8"]
    }, [createVNode("button", {
      "type": "button",
      "class": ["h-8 p-0 border border-solid rounded flex items-center justify-center group", "cursor-pointer border-color-border bg-color-bg-1 sm:bg-transparent sm:border-0", prevText ? "w-fit" : "w-8", {
        "disabled:cursor-not-allowed disabled:border-color-border disabled:bg-color-bg-3 disabled:sm:bg-transparent": prevDisabled,
        "hover:border-color-brand sm:hover:border-0 sm:active:border-color-brand": !prevDisabled,
        "hover:bg-color-fill-6 sm:hover:bg-transparent sm:active:bg-transparent": !prevDisabled
      }],
      "disabled": prevDisabled,
      "onClick": this.toPrevPage
    }, [prevText ? createVNode("span", {
      "class": ["inline-block w-fit mx-1 text-color-text-placeholder sm:text-color-primary", {
        "disabled:text-color-text-primary sm:text-color-border": prevDisabled,
        "group-hover:text-color-link sm:group-hover:text-color-icon-hover sm:group-active:text-color-active": !prevDisabled
      }]
    }, [prevText]) : createVNode(ChevronLeft2, {
      "class": ["fill-color-fill-7 sm:fill-color-text-primary", {
        "disabled:fill-color-fill-primary sm:fill-color-border": prevDisabled,
        "group-hover:fill-color-brand sm:group-hover:fill-color-icon-hover sm:group-active:fill-color-icon-active": !prevDisabled
      }]
    }, null)])]), createVNode("li", {
      "class": "h-8 text-color-text-primary flex items-center justify-center rounded !mx-4"
    }, [createVNode("span", {
      "class": "inline-block my-0 mx-0"
    }, [this.internalCurrentPage, createTextVNode("/"), this.internalPageCount])]), createVNode("li", {
      "class": ["py-0 px-0 cursor-pointer box-border h-8 text-color-brand bg-color-bg-1 select-none flex items-center justify-center relative rounded", nextText ? "w-fit" : "w-8"]
    }, [createVNode("button", {
      "type": "button",
      "class": ["h-8 p-0 border border-solid rounded flex items-center justify-center group", "cursor-pointer border-color-border bg-color-bg-1 sm:bg-transparent sm:border-0", nextText ? "w-fit" : "w-8", {
        "disabled:cursor-not-allowed disabled:border-color-border disabled:bg-color-bg-3 disabled:sm:bg-transparent": nextDisabled,
        "hover:border-color-brand sm:hover:border-color-border-hover sm:active:border-color-brand": !nextDisabled,
        "hover:bg-color-fill-6 sm:hover:bg-transparent sm:active:bg-transparent": !nextDisabled
      }],
      "disabled": nextDisabled,
      "onClick": this.toNextPage
    }, [nextText ? createVNode("span", {
      "class": ["inline-block w-fit mx-1 text-color-text-placeholder sm:text-color-primary", {
        "disabled:text-color-text-primary disabled:sm:text-color-border": nextDisabled,
        "group-hover:fill-color-brand sm:group-hover:fill-color-icon-hover sm:group-active:fill-color-icon-active": !nextDisabled
      }]
    }, [nextText]) : createVNode(ChevronRight, {
      "class": ["fill-color-fill-7 sm:fill-color-text-primary", {
        "disabled:fill-color-fill-primary sm:fill-color-border": nextDisabled,
        "group-hover:fill-color-brand sm:group-hover:fill-color-icon-hover sm:group-active:fill-color-icon-active": !nextDisabled
      }]
    }, null)])])])])]);
  },
  methods: {
    toPrevPage: function toPrevPage() {
      var _this = this;
      var callback = function callback2() {
        if (_this.internalCurrentPage > 1) {
          _this.internalCurrentPage -= 1;
          _this.$emit("prev-click", _this.internalCurrentPage);
          _this.$emit("current-change", _this.internalCurrentPage);
          _this.$emit("update:current-page", _this.internalCurrentPage);
          _this.$emit("page-change", {
            currentPage: _this.internalCurrentPage,
            pageSize: _this.internalPageSize,
            total: _this.internalTotal
          });
        }
      };
      if (this.isBeforePageChange && this.internalCurrentPage > 1) {
        var newPage = this.internalCurrentPage - 1;
        var newPageSize = this.internalPageSize;
        var currentPage2 = this.internalCurrentPage;
        var currentPageSize = this.internalPageSize;
        this.$emit("before-page-change", {
          newPage,
          newPageSize,
          currentPage: currentPage2,
          currentPageSize,
          callback
        });
      } else {
        callback();
      }
    },
    toNextPage: function toNextPage() {
      var _this2 = this;
      var callback = function callback2() {
        if (_this2.internalCurrentPage < _this2.internalPageCount) {
          _this2.internalCurrentPage += 1;
          _this2.$emit("next-click", _this2.internalCurrentPage);
          _this2.$emit("current-change", _this2.internalCurrentPage);
          _this2.$emit("update:current-page", _this2.internalCurrentPage);
          _this2.$emit("page-change", {
            currentPage: _this2.internalCurrentPage,
            pageSize: _this2.internalPageSize,
            total: _this2.internalTotal
          });
        }
      };
      if (this.isBeforePageChange && this.internalCurrentPage < this.internalPageCount) {
        var newPage = this.internalCurrentPage + 1;
        var newPageSize = this.internalPageSize;
        var currentPage2 = this.internalCurrentPage;
        var currentPageSize = this.internalPageSize;
        this.$emit("before-page-change", {
          newPage,
          newPageSize,
          currentPage: currentPage2,
          currentPageSize,
          callback
        });
      } else {
        callback();
      }
    },
    normalizeState: function normalizeState() {
      var total2 = this.total > 0 ? this.total : 0;
      var pageSize2 = this.pageSize > 0 ? this.pageSize : 10;
      var currentPage2 = this.currentPage > 0 ? this.currentPage : 1;
      this.internalTotal = total2;
      this.internalPageSize = pageSize2;
      this.internalPageCount = Math.ceil(total2 / pageSize2);
      this.internalCurrentPage = currentPage2 > this.internalPageCount ? 1 : currentPage2;
    }
  }
});
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var template = function template29(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return _sfc_main$8;
  }
  return pc;
};
var pagerProps = _extends$1({}, $props, {
  accurateJumper: {
    type: Boolean,
    default: function _default11() {
      return true;
    }
  },
  appendToBody: {
    type: Boolean,
    default: function _default26() {
      return true;
    }
  },
  currentPage: {
    type: Number,
    default: function _default35() {
      return 1;
    }
  },
  disabled: {
    type: Boolean,
    default: function _default43() {
      return false;
    }
  },
  hideOnSinglePage: Boolean,
  isBeforePageChange: Boolean,
  layout: String,
  mode: String,
  nextText: String,
  pageCount: Number,
  pageSize: {
    type: Number,
    default: function _default53() {
      return 10;
    }
  },
  pageSizes: {
    type: Array,
    default: function _default63() {
      return [10, 20, 30, 40, 50, 100];
    }
  },
  pagerCount: {
    type: Number,
    validator: function validator4(value) {
      return (value | 0) === value && value > 2 && value < 22 && value % 2 === 1;
    },
    default: function _default73() {
      return 7;
    }
  },
  popperAppendToBody: {
    type: Boolean,
    default: function _default83() {
      return true;
    }
  },
  showTotalLoading: {
    type: Boolean,
    default: function _default93() {
      return false;
    }
  },
  customTotal: {
    type: [Boolean, String],
    default: function _default103() {
      return false;
    }
  },
  popperClass: String,
  prevText: String,
  total: Number,
  size: {
    type: String,
    default: ""
  },
  align: {
    type: String,
    validator: function validator22(value) {
      return ["left", "center", "right"].includes(value);
    }
  },
  totalFixedLeft: {
    type: Boolean,
    default: void 0
  }
});
var Pager$1 = defineComponent({
  name: $prefix + "Pager",
  props: pagerProps,
  setup: function setup13(props2, context) {
    return $setup({
      props: props2,
      context,
      template
    });
  }
});
var version$1 = "3.16.0";
Pager$1.install = function(Vue) {
  Vue.component(Pager$1.name, Pager$1);
};
Pager$1.version = version$1;
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc = function _export_sfc218(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _excluded = ["input", "change"], _excluded2 = ["field"];
function _defineProperties(target, props2) {
  for (var i = 0; i < props2.length; i++) {
    var descriptor = props2[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey(t2) {
  var i = _toPrimitive(t2, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t2, r) {
  if ("object" != typeof t2 || !t2)
    return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t2, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime2() {
    return e;
  };
  var t2, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t3, e2, r2) {
    t3[e2] = r2.value;
  }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
  function define(t3, e2, r2) {
    return Object.defineProperty(t3, e2, { value: r2, enumerable: true, configurable: true, writable: true }), t3[e2];
  }
  try {
    define({}, "");
  } catch (t3) {
    define = function define2(t4, e2, r2) {
      return t4[e2] = r2;
    };
  }
  function wrap(t3, e2, r2, n2) {
    var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
    return o(a2, "_invoke", { value: makeInvokeMethod(t3, r2, c2) }), a2;
  }
  function tryCatch(t3, e2, r2) {
    try {
      return { type: "normal", arg: t3.call(e2, r2) };
    } catch (t4) {
      return { type: "throw", arg: t4 };
    }
  }
  e.wrap = wrap;
  var h2 = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var p = {};
  define(p, a, function() {
    return this;
  });
  var d = Object.getPrototypeOf, v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t3) {
    ["next", "throw", "return"].forEach(function(e2) {
      define(t3, e2, function(t4) {
        return this._invoke(e2, t4);
      });
    });
  }
  function AsyncIterator(t3, e2) {
    function invoke(r3, o2, i2, a2) {
      var c2 = tryCatch(t3[r3], t3, o2);
      if ("throw" !== c2.type) {
        var u2 = c2.arg, h3 = u2.value;
        return h3 && "object" == typeof h3 && n.call(h3, "__await") ? e2.resolve(h3.__await).then(function(t4) {
          invoke("next", t4, i2, a2);
        }, function(t4) {
          invoke("throw", t4, i2, a2);
        }) : e2.resolve(h3).then(function(t4) {
          u2.value = t4, i2(u2);
        }, function(t4) {
          return invoke("throw", t4, i2, a2);
        });
      }
      a2(c2.arg);
    }
    var r2;
    o(this, "_invoke", { value: function value(t4, n2) {
      function callInvokeWithMethodAndArg() {
        return new e2(function(e3, r3) {
          invoke(t4, n2, e3, r3);
        });
      }
      return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } });
  }
  function makeInvokeMethod(e2, r2, n2) {
    var o2 = h2;
    return function(i2, a2) {
      if (o2 === f)
        throw Error("Generator is already running");
      if (o2 === s) {
        if ("throw" === i2)
          throw a2;
        return { value: t2, done: true };
      }
      for (n2.method = i2, n2.arg = a2; ; ) {
        var c2 = n2.delegate;
        if (c2) {
          var u2 = maybeInvokeDelegate(c2, n2);
          if (u2) {
            if (u2 === y)
              continue;
            return u2;
          }
        }
        if ("next" === n2.method)
          n2.sent = n2._sent = n2.arg;
        else if ("throw" === n2.method) {
          if (o2 === h2)
            throw o2 = s, n2.arg;
          n2.dispatchException(n2.arg);
        } else
          "return" === n2.method && n2.abrupt("return", n2.arg);
        o2 = f;
        var p2 = tryCatch(e2, r2, n2);
        if ("normal" === p2.type) {
          if (o2 = n2.done ? s : l, p2.arg === y)
            continue;
          return { value: p2.arg, done: n2.done };
        }
        "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
      }
    };
  }
  function maybeInvokeDelegate(e2, r2) {
    var n2 = r2.method, o2 = e2.iterator[n2];
    if (o2 === t2)
      return r2.delegate = null, "throw" === n2 && e2.iterator.return && (r2.method = "return", r2.arg = t2, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
    var i2 = tryCatch(o2, e2.iterator, r2.arg);
    if ("throw" === i2.type)
      return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
    var a2 = i2.arg;
    return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t2), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
  }
  function pushTryEntry(t3) {
    var e2 = { tryLoc: t3[0] };
    1 in t3 && (e2.catchLoc = t3[1]), 2 in t3 && (e2.finallyLoc = t3[2], e2.afterLoc = t3[3]), this.tryEntries.push(e2);
  }
  function resetTryEntry(t3) {
    var e2 = t3.completion || {};
    e2.type = "normal", delete e2.arg, t3.completion = e2;
  }
  function Context(t3) {
    this.tryEntries = [{ tryLoc: "root" }], t3.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(e2) {
    if (e2 || "" === e2) {
      var r2 = e2[a];
      if (r2)
        return r2.call(e2);
      if ("function" == typeof e2.next)
        return e2;
      if (!isNaN(e2.length)) {
        var o2 = -1, i2 = function next2() {
          for (; ++o2 < e2.length; )
            if (n.call(e2, o2))
              return next2.value = e2[o2], next2.done = false, next2;
          return next2.value = t2, next2.done = true, next2;
        };
        return i2.next = i2;
      }
    }
    throw new TypeError(typeof e2 + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: true }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: true }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t3) {
    var e2 = "function" == typeof t3 && t3.constructor;
    return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
  }, e.mark = function(t3) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t3, GeneratorFunctionPrototype) : (t3.__proto__ = GeneratorFunctionPrototype, define(t3, u, "GeneratorFunction")), t3.prototype = Object.create(g), t3;
  }, e.awrap = function(t3) {
    return { __await: t3 };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function(t3, r2, n2, o2, i2) {
    void 0 === i2 && (i2 = Promise);
    var a2 = new AsyncIterator(wrap(t3, r2, n2, o2), i2);
    return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t4) {
      return t4.done ? t4.value : a2.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
    return this;
  }), define(g, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(t3) {
    var e2 = Object(t3), r2 = [];
    for (var n2 in e2)
      r2.push(n2);
    return r2.reverse(), function next2() {
      for (; r2.length; ) {
        var t4 = r2.pop();
        if (t4 in e2)
          return next2.value = t4, next2.done = false, next2;
      }
      return next2.done = true, next2;
    };
  }, e.values = values, Context.prototype = { constructor: Context, reset: function reset2(e2) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = t2, this.done = false, this.delegate = null, this.method = "next", this.arg = t2, this.tryEntries.forEach(resetTryEntry), !e2)
      for (var r2 in this)
        "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t2);
  }, stop: function stop() {
    this.done = true;
    var t3 = this.tryEntries[0].completion;
    if ("throw" === t3.type)
      throw t3.arg;
    return this.rval;
  }, dispatchException: function dispatchException(e2) {
    if (this.done)
      throw e2;
    var r2 = this;
    function handle2(n2, o3) {
      return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t2), !!o3;
    }
    for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
      var i2 = this.tryEntries[o2], a2 = i2.completion;
      if ("root" === i2.tryLoc)
        return handle2("end");
      if (i2.tryLoc <= this.prev) {
        var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
        if (c2 && u2) {
          if (this.prev < i2.catchLoc)
            return handle2(i2.catchLoc, true);
          if (this.prev < i2.finallyLoc)
            return handle2(i2.finallyLoc);
        } else if (c2) {
          if (this.prev < i2.catchLoc)
            return handle2(i2.catchLoc, true);
        } else {
          if (!u2)
            throw Error("try statement without catch or finally");
          if (this.prev < i2.finallyLoc)
            return handle2(i2.finallyLoc);
        }
      }
    }
  }, abrupt: function abrupt(t3, e2) {
    for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
      var o2 = this.tryEntries[r2];
      if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
        var i2 = o2;
        break;
      }
    }
    i2 && ("break" === t3 || "continue" === t3) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
    var a2 = i2 ? i2.completion : {};
    return a2.type = t3, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
  }, complete: function complete(t3, e2) {
    if ("throw" === t3.type)
      throw t3.arg;
    return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e2 && (this.next = e2), y;
  }, finish: function finish(t3) {
    for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
      var r2 = this.tryEntries[e2];
      if (r2.finallyLoc === t3)
        return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
    }
  }, catch: function _catch(t3) {
    for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
      var r2 = this.tryEntries[e2];
      if (r2.tryLoc === t3) {
        var n2 = r2.completion;
        if ("throw" === n2.type) {
          var o2 = n2.arg;
          resetTryEntry(r2);
        }
        return o2;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function delegateYield(e2, r2, n2) {
    return this.delegate = { iterator: values(e2), resultName: r2, nextLoc: n2 }, "next" === this.method && (this.arg = t2), y;
  } }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error2) {
    reject(error2);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var GlobalConfig = {
  validConfig: {
    message: "tooltip"
  },
  // 默认开启点击头部单元格触发排序
  sortConfig: {
    multipleColumnSort: false
  },
  // 默认不开启隔行换色和行高亮，不暴露此配置
  stripe: false,
  // saas下默认不开启隔行换色和行高亮
  stripeSaas: false,
  // saas下默认开启下划线
  borderSaas: true,
  // saas下通过borderVertical开启边框竖线
  borderVertical: false,
  // 鼠标移入表格行是否高亮显示
  highlightHoverRow: true,
  resizable: true,
  // 操作列（type为index或radio或selection的列）默认不可拖动列宽
  operationColumnResizable: false,
  fit: true,
  showHeader: true,
  defaultTreeIndent: 16,
  defaultTreeSpacing: 30,
  rowId: "_RID",
  // 行数据的唯一主键字段名
  version: 0,
  // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据
  optimization: {
    animat: true,
    delayHover: 250,
    scrollX: {
      gt: 100
    },
    scrollY: {
      gt: 500
    }
  },
  icon: {
    sortAsc: index$o(),
    sortDesc: index$p(),
    sortDefault: index$q(),
    required: "tiny-grid-required-icon",
    filter: index$t(),
    edit: index$P(),
    tree: "tiny-grid-icon__caret-right",
    refresh: index$G(),
    minscreen: index$x(),
    fullscreen: index$y(),
    custom: index$Q(),
    jumpPrev: "tiny-grid-icon__d-arrow-left",
    jumpNext: "tiny-grid-icon__d-arrow-right",
    prevPage: "tiny-grid-icon__arrow-left",
    nextPage: "tiny-grid-icon__arrow-right",
    zoomIn: "tiny-grid-icon__zoomin",
    zoomOut: "tiny-grid-icon__zoomout",
    modalClose: "tiny-grid-icon__close",
    modalInfo: "tiny-grid-icon__info",
    modalSuccess: "tiny-grid-icon__success",
    modalWarning: "tiny-grid-icon__warning",
    modalError: "tiny-grid-icon__error",
    modalQuestion: "tiny-grid-icon__question",
    modalLoading: "tiny-grid-icon__refresh roll",
    caretBottom: "tiny-grid-icon__caret-bottom",
    dropdownBottom: "tiny-grid-icon__arrow-bottom",
    btnLoading: "tiny-grid-icon__refresh roll"
  },
  grid: {},
  menu: {},
  tooltip: {
    trigger: "hover",
    theme: "dark"
  },
  pager: {},
  toolbar: {
    resizable: {
      storage: false
    },
    buttons: []
  },
  modal: {
    zIndex: 2e3,
    minWidth: 340,
    minHeight: 200,
    lockView: true,
    mask: true,
    duration: 3e3,
    marginSize: 10,
    animat: true
  },
  i18n: function i18n(key) {
    return key;
  },
  constant: {
    insertedField: "_$inserted",
    deletedField: "_$deleted",
    asyncPrefix: "_$async_"
  },
  TINY_TABLE_CUSTOM_COLUMN_WIDTH: "TINY_TABLE_CUSTOM_COLUMN_WIDTH",
  TINY_TABLE_CUSTOM_SETTING: "TINY_TABLE_CUSTOM_SETTING",
  viewConfig: {
    // 视图类型
    DEFAULT: "default",
    MF: "mf",
    CARD: "card",
    LIST: "list",
    GANTT: "gantt",
    // 移动优先视图下展示类型
    MF_SHOW_LIST: "list",
    MF_SHOW_CARD: "card",
    // 在不同视图下表格模块的显示
    toolbar: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden sm:block"
    },
    pager: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden sm:block"
    },
    columnAnchor: {
      default: "flex",
      mf: "hidden sm:flex",
      card: "hidden"
    },
    hiddenColumn: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden"
    },
    tableHeader: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden"
    },
    emptyData: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden"
    },
    tableBody: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden"
    },
    tableFooter: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden"
    },
    fixedColumn: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden"
    },
    borderLine: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden"
    },
    resizeBar: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden"
    },
    gridLoading: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden"
    },
    tableWrapper: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden"
    },
    selectToolbar: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden"
    },
    mfTable: {
      default: "hidden",
      mf: "block sm:hidden",
      card: "block"
    },
    footerBorder: {
      default: "block",
      mf: "hidden sm:block",
      card: "hidden"
    },
    operButton: {
      default: "inline-block",
      mf: "hidden sm:inline-block",
      card: "hidden"
    }
  },
  themes: {
    TINY: "tiny",
    SAAS: "saas"
  }
};
function addListConfig() {
  var viewConfig2 = GlobalConfig.viewConfig;
  for (var _i = 0, _Object$keys = Object.keys(viewConfig2); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    if (typeof viewConfig2[key] === "object") {
      viewConfig2[key].list = viewConfig2[key].card;
      viewConfig2[key].gantt = viewConfig2[key].card;
    }
  }
}
addListConfig();
var GlobalConfig$1 = GlobalConfig;
var setup14 = function setup22(options) {
  if (options === void 0) {
    options = {};
  }
  var icon = GlobalConfig$1.icon, menu = GlobalConfig$1.menu;
  if (options.menu) {
    menu = extend(true, {}, menu, options.menu);
  }
  if (options.icon) {
    icon = extend(true, {}, icon, options.icon);
  }
  extend(true, GlobalConfig$1, options, {
    icon,
    menu
  });
};
var Setup = setup14;
function getAttrs(_ref, params) {
  var name = _ref.name, attrs = _ref.attrs;
  var props2 = attrs;
  if (typeof attrs === "function") {
    props2 = attrs(params);
  }
  if (name === "input") {
    props2 = _extends({
      type: "text"
    }, props2);
  }
  return props2;
}
var isSyncCell = function isSyncCell2(renderOpts, params, context) {
  return renderOpts.type === "visible" || context.$type === "cell";
};
function autoRefresh(renderOpts, params) {
  var _renderOpts$refresh = renderOpts.refresh, refresh = _renderOpts$refresh === void 0 ? false : _renderOpts$refresh;
  var $table = params.$table, row2 = params.row;
  var _$table$editConfig = $table.editConfig, editConfig = _$table$editConfig === void 0 ? {} : _$table$editConfig;
  return $table.isTemporaryRow(row2) || !editConfig.showStatus || typeof refresh === "boolean" && refresh || typeof refresh === "function" && refresh(params);
}
function getEvents(renderOpts, params, context) {
  var _on;
  var _renderOpts$component = renderOpts.component, component = _renderOpts$component === void 0 ? {} : _renderOpts$component, _renderOpts$events = renderOpts.events, events = _renderOpts$events === void 0 ? {} : _renderOpts$events;
  var native = typeof component === "string";
  var editorModel = component.model || {};
  var type = component === "select" ? "change" : native ? "input" : editorModel.event || "update:modelValue";
  var input = events.input, change = events.change, other = _objectWithoutPropertiesLoose(events, _excluded);
  var $table = params.$table, column = params.column, row2 = params.row;
  var model = column.model;
  var on2 = (_on = {}, _on[type] = function(event) {
    var cellValue = native ? event.target.value : event;
    if (!renderOpts.isValidAlways && isSyncCell(renderOpts, params, context)) {
      setCellValue(row2, column, cellValue);
    } else {
      native || set_default(row2, column.property, cellValue);
      model.update = true;
      model.value = cellValue;
      $table.updateStatus(params, cellValue, renderOpts);
    }
    if (native) {
      input && input.apply(null, [params].concat.apply(params, arguments));
      change && change.apply(null, [params].concat.apply(params, arguments));
    }
    if (autoRefresh(renderOpts, params)) {
      $table.editStore.editorAutoRefreshKey++;
    }
  }, _on);
  var evts = native ? other : events;
  var mapHandler = function mapHandler2(cb) {
    return function() {
      cb.apply(null, [params].concat.apply(params, arguments));
    };
  };
  assign_default(on2, objectMap_default(evts, mapHandler));
  return on2;
}
function renderOptions(h2, options, renderOpts, params, context) {
  var _renderOpts$optionPro = renderOpts.optionProps, optionProps = _renderOpts$optionPro === void 0 ? {} : _renderOpts$optionPro;
  var labelProp = optionProps.label || "label";
  var valueProp = optionProps.value || "value";
  var column = params.column, row2 = params.row;
  var formatConfig = column.own.formatConfig;
  var cellValue = isSyncCell(renderOpts, params, context) ? getCellValue(row2, column) : column.model.value;
  if (!options && formatConfig && formatConfig.data) {
    options = formatConfig.data;
  }
  return options.map(function(item, index232) {
    var attrs = {
      domProps: {
        value: item[valueProp],
        selected: item.value === cellValue
      },
      key: index232
    };
    return h2("option", attrs, item[labelProp]);
  });
}
function renderOptgroups(h2, options, params, context) {
  var optionGroups = options.optionGroups, _options$optionGroupP = options.optionGroupProps, optionGroupProps = _options$optionGroupP === void 0 ? {} : _options$optionGroupP;
  var groupLabel = optionGroupProps.label || "label";
  var groupOptions = optionGroupProps.options || "options";
  return optionGroups.map(function(group, key) {
    var attrs = {
      domProps: {
        label: group[groupLabel]
      },
      key
    };
    var children = renderOptions(h2, group[groupOptions], options, params, context);
    return h2("optgroup", attrs, children);
  });
}
function handleConfirmFilter(context, column, checked, item) {
  var key = column.filterMultiple ? "changeMultipleOption" : "changeRadioOption";
  var method = context[key];
  method({}, checked, item);
}
function getFilterEvents(item, renderOpts, params, context) {
  var _on2;
  var events = renderOpts.events, name = renderOpts.name;
  var column = params.column;
  var type = name === "select" ? "change" : "input";
  var on2 = (_on2 = {}, _on2[type] = function(event) {
    item.data = event.target.value;
    handleConfirmFilter(context, column, !!item.data, item);
  }, _on2);
  if (events) {
    var mapHandler = function mapHandler2(cb) {
      return function() {
        cb.apply(null, [params].concat.apply(params, arguments));
      };
    };
    assign_default(on2, objectMap_default(events, mapHandler));
  }
  return on2;
}
function defaultFilterRender(h2, renderOpts, params, context) {
  var name = renderOpts.name;
  var column = params.column;
  var attrs = getAttrs(renderOpts, params);
  return column.filters.map(function(item) {
    var props2 = {
      class: "tiny-grid-default-" + name,
      attrs,
      domProps: {
        value: item.data
      },
      on: getFilterEvents(item, renderOpts, params, context)
    };
    return h2(name, props2);
  });
}
function defaultFilterMethod(_ref2) {
  var option = _ref2.option, row2 = _ref2.row, column = _ref2.column;
  var cellValue = get_default(row2, column.property);
  var data8 = option.data;
  return cellValue == data8;
}
function renderSelectEdit(h2, renderOpts, params, context) {
  var props2 = {
    class: "tiny-grid-default-select",
    on: getEvents(renderOpts, params, context)
  };
  var children = renderOpts.optionGroups ? renderOptgroups(h2, renderOpts, params, context) : renderOptions(h2, renderOpts.options, renderOpts, params, context);
  return [h2("select", props2, children)];
}
function defaultEditRender(h2, renderOpts, params, context) {
  var _extends2;
  var $table = params.$table, column = params.column, row2 = params.row;
  var _column$formatValue = column.formatValue, formatValue = _column$formatValue === void 0 ? function(_ref3) {
    var cellValue2 = _ref3.cellValue;
    return cellValue2;
  } : _column$formatValue, own = column.own;
  var formatOpt = own.formatConfig || {};
  var children = renderOpts.children, _renderOpts$component2 = renderOpts.component, component = _renderOpts$component2 === void 0 ? {} : _renderOpts$component2;
  var attrs = getAttrs(renderOpts, params);
  var value = isSyncCell(renderOpts, params, context) ? getCellValue(row2, column) : column.model.value;
  var cellValue = formatValue(_extends({
    cellValue: value
  }, params));
  var isTag = ~["input", "textarea", "select"].indexOf(component);
  var editorModel = component.model || {};
  var modelProps = typeof component === "string" ? "value" : editorModel.prop || "modelValue";
  var options = {
    class: isTag ? "tiny-grid-default-" + component : "",
    attrs: _extends({
      formatOpt,
      options: formatOpt.data
    }, attrs, (_extends2 = {}, _extends2[modelProps] = cellValue, _extends2)),
    on: getEvents(renderOpts, params, context)
  };
  if (autoRefresh(renderOpts, params)) {
    options.attrs.editorAutoRefreshKey = $table.editStore.editorAutoRefreshKey;
  }
  var slot = children ? children(_extends({
    props: options
  }, params), h2) : null;
  var cell = [h2(toRaw(component), options, slot)];
  return isTag ? cell : [h2("div", {
    class: "tiny-grid-editor"
  }, cell)];
}
var buildRenderMap = function buildRenderMap2() {
  var renderMapInput = [["autofocus", "input"], ["renderEdit", defaultEditRender], ["renderDefault", defaultEditRender], ["renderFilter", defaultFilterRender], ["filterMethod", defaultFilterMethod]];
  var mapHandler = function mapHandler2(mapArr) {
    var obj = {};
    mapArr.forEach(function(item) {
      return obj[item[0]] = item[1];
    });
    return obj;
  };
  var renderMap2 = {};
  renderMap2.input = mapHandler(renderMapInput);
  renderMapInput[0][1] = "textarea";
  renderMap2.textarea = mapHandler(renderMapInput);
  renderMapInput.splice(0, 1);
  renderMapInput[0][1] = renderMapInput[1][1] = renderSelectEdit;
  renderMapInput[2][1] = function(h2, renderOpts, params, context) {
    var attrs = renderOpts.attrs;
    var column = params.column;
    return column.filters.map(function(item) {
      var props2 = {
        attrs,
        class: "tiny-grid-default-select",
        on: getFilterEvents(item, renderOpts, params, context)
      };
      var children = renderOpts.optionGroups ? renderOptgroups(h2, renderOpts, params) : renderOptions(h2, renderOpts.options, renderOpts, params);
      return h2("select", props2, children);
    });
  };
  renderMap2.select = mapHandler(renderMapInput);
  return renderMap2;
};
var renderMap = buildRenderMap();
var buildRenderer = function buildRenderer2() {
  var Renderer2 = {};
  Renderer2.mixin = function(map2) {
    each_default(map2, function(options, name) {
      return Renderer2.add(name, options);
    });
    return Renderer2;
  };
  Renderer2.get = function(name) {
    return isObject_default(name) || isFunction_default(name) ? renderMap.input : renderMap[name] || null;
  };
  Renderer2.add = function(name, options) {
    var renders;
    var flag = name && options;
    if (!flag) {
      return Renderer2;
    }
    renders = renderMap[name];
    if (renders) {
      Object.assign(renders, options);
    } else {
      renderMap[name] = options;
    }
    return Renderer2;
  };
  Renderer2.delete = function(name) {
    delete renderMap[name];
    return Renderer2;
  };
  return Renderer2;
};
var Renderer = buildRenderer();
var Renderer$1 = Renderer;
var installedPlugins = [];
var Buttons = storeMap_default;
var Menus = storeMap_default;
var Grid$1 = {
  use: function use(Plugin, options) {
    if (Plugin && Plugin.install) {
      if (!installedPlugins.includes(Plugin)) {
        Plugin.install(this, options);
        installedPlugins.push(Plugin);
      }
    }
    return this;
  },
  setup: Setup,
  interceptor: interceptor_default,
  renderer: Renderer$1,
  buttons: Buttons,
  menus: Menus,
  _tooltip: true
};
var handleClearEvent = function handleClearEvent2(params, event) {
  if (params && params.$table) {
    var getTarget = params.$table.getEventTargetNode;
    var bodyEl = document.body;
    if (getTarget(event, bodyEl, "tiny-autocomplete-suggestion").flag || getTarget(event, bodyEl, "tiny-select-dropdown").flag || getTarget(event, bodyEl, "tiny-cascader__dropdown").flag || getTarget(event, bodyEl, "tiny-cascader-menus").flag || getTarget(event, bodyEl, "tiny-picker-panel").flag || getTarget(event, bodyEl, "tiny-popper").flag || getTarget(event, bodyEl, "tiny-dialog-box").flag) {
      return false;
    }
  }
};
Grid$1.interceptor.add("event.clear_actived", handleClearEvent);
Grid$1.interceptor.add("event.clear_filter", handleClearEvent);
var GridAdapter = Grid$1;
function addListenerMousedown$1(_ref4) {
  var $table = _ref4.$table, mouseConfig = _ref4.mouseConfig, params = _ref4.params, thOns = _ref4.thOns;
  if (mouseConfig.checked) {
    thOns.mousedown = function(event) {
      return $table.triggerHeaderCellMousedownEvent(event, _extends({
        cell: event.currentTarget
      }, params));
    };
  }
}
function addListenerDblclick$2(_ref5) {
  var $table = _ref5.$table, params = _ref5.params, tableListeners = _ref5.tableListeners, thOns = _ref5.thOns;
  if (tableListeners["header-cell-dblclick"]) {
    thOns.dblclick = function(event) {
      return emitEvent$1($table, "header-cell-dblclick", [_extends({
        cell: event.currentTarget
      }, params), event]);
    };
  }
}
function addListenerClick$2(_ref6) {
  var $table = _ref6.$table, highlightCurrentColumn = _ref6.highlightCurrentColumn, mouseConfig = _ref6.mouseConfig, params = _ref6.params, sortOpts2 = _ref6.sortOpts, tableListeners = _ref6.tableListeners, thOns = _ref6.thOns;
  if (highlightCurrentColumn || tableListeners["header-cell-click"] || mouseConfig.checked || sortOpts2.trigger === "cell") {
    thOns.click = function(event) {
      return $table.triggerHeaderCellClickEvent(event, _extends({
        cell: event.currentTarget
      }, params));
    };
  }
}
function addListenerMouseout$1(_ref7) {
  var $table = _ref7.$table, showHeaderTip = _ref7.showHeaderTip, showTooltip2 = _ref7.showTooltip, thOns = _ref7.thOns;
  if (showTooltip2 || showHeaderTip) {
    thOns.mouseout = function() {
      if ($table._isResize) {
        return;
      }
      $table.clostTooltip();
    };
  }
}
function addListenerMouseover$1(_ref8) {
  var $table = _ref8.$table, params = _ref8.params, showHeaderTip = _ref8.showHeaderTip, showTitle = _ref8.showTitle, showTooltip2 = _ref8.showTooltip, thOns = _ref8.thOns;
  if (showTitle || showTooltip2 || showHeaderTip) {
    thOns.mouseover = function(event) {
      if ($table._isResize) {
        return;
      }
      if (showTitle) {
        updateCellTitle(event);
      } else if (showTooltip2 || showHeaderTip) {
        $table.triggerHeaderTooltipEvent(event, _extends({
          showHeaderTip
        }, params));
      }
    };
  }
}
function modifyHeadAlign(_ref9) {
  var column = _ref9.column, headAlign = _ref9.headAlign;
  if (~["radio", "selection", "index"].indexOf(column.type)) {
    headAlign = headAlign || "center";
  }
  return headAlign;
}
function computeDragLeft(args) {
  var dragMinLeft = args.dragMinLeft;
  var left = args.left;
  var dragLeft = Math.max(left, dragMinLeft);
  return {
    left,
    dragMinLeft,
    dragLeft
  };
}
function renderTableColgroup(tableColumn3) {
  return h("colgroup", {
    ref: "colgroup"
  }, tableColumn3.map(function(column, columnIndex) {
    return h("col", {
      attrs: {
        name: column.id
      },
      key: columnIndex
    });
  }).concat([h("col", {
    attrs: {
      name: "col_gutter"
    }
  })]));
}
function renderRepair() {
  return h("div", {
    class: "tiny-grid__repair",
    ref: "repair"
  });
}
function renderXSpace() {
  return h("div", {
    class: "tiny-grid-body__x-space",
    ref: "xSpace"
  });
}
var classMap$2 = {
  colFixed: "col__fixed",
  colIndex: "col__index",
  colRadio: "col__radio",
  colSelection: "col__selection",
  colGroup: "col__group",
  colEllipsis: "col__ellipsis",
  fixedHidden: "fixed__column",
  isSortable: "is__sortable",
  isEditable: "is__editable",
  isFilter: "is__filter",
  filterActive: "filter__active"
};
function getThPropsArg(args) {
  var _ref10, _column$style, _column$style2;
  var column = args.column, columnIndex = args.columnIndex, columnKey = args.columnKey, fixedHiddenColumn = args.fixedHiddenColumn, hasEllipsis = args.hasEllipsis, headAlign = args.headAlign, columnStore = args.columnStore;
  var headerCellClassName = args.headerCellClassName, headerClassName = args.headerClassName, isColGroup = args.isColGroup, isDragHeaderSorting = args.isDragHeaderSorting, params = args.params, thOns = args.thOns, scrollbarWidth = args.scrollbarWidth;
  var leftList = columnStore.leftList, rightList = columnStore.rightList;
  return {
    class: ["tiny-grid-header__column", column.id, (_ref10 = {}, _ref10["col__" + headAlign] = headAlign, _ref10[classMap$2.colFixed] = column.fixed, _ref10[classMap$2.colIndex] = column.type === "index", _ref10[classMap$2.colRadio] = column.type === "radio", _ref10[classMap$2.colSelection] = column.type === "selection", _ref10[classMap$2.colGroup] = isColGroup, _ref10[classMap$2.colEllipsis] = hasEllipsis, _ref10[classMap$2.fixedHidden] = fixedHiddenColumn, _ref10[classMap$2.isSortable] = !["index", "radio", "selection"].includes(column.type) && column.sortable, _ref10[classMap$2.isEditable] = column.editor, _ref10[classMap$2.isFilter] = isObject$1(column.filter), _ref10[classMap$2.filterActive] = column.filter && column.filter.hasFilter, _ref10["fixed-left-last__column"] = column.fixed === "left" && (leftList[leftList.length - 1] === column || column.isFixedLeftLast), _ref10["fixed-right-first__column"] = column.fixed === "right" && (rightList[0] === column || column.isFixedRightFirst), _ref10), getClass(headerClassName, params), getClass(headerCellClassName, params)],
    attrs: {
      "data-colid": column.id,
      colspan: column.colSpan,
      rowspan: column.rowSpan
    },
    style: fixedHiddenColumn ? {
      left: ((_column$style = column.style) == null ? void 0 : _column$style.left) + "px",
      right: ((_column$style2 = column.style) == null ? void 0 : _column$style2.right) + scrollbarWidth + "px"
    } : null,
    on: thOns,
    key: isDragHeaderSorting ? random() : columnKey || isColGroup ? column.id : columnIndex
  };
}
function renderThPartition(_ref11) {
  var border = _ref11.border, column = _ref11.column, isColGroup = _ref11.isColGroup, resizable = _ref11.resizable;
  var res = null;
  var classMap2 = {
    isLine: "is__line"
  };
  if (!isColGroup && !(isBoolean_default(column.resizable) ? column.resizable : resizable) && column.type !== "index") {
    var _ref12;
    res = h("div", {
      class: ["tiny-grid-thead-partition", (_ref12 = {}, _ref12[classMap2.isLine] = !border, _ref12)]
    });
  }
  return res;
}
function renderThCell(args) {
  var column = args.column, fixedHiddenColumn = args.fixedHiddenColumn, headerSuffixIconAbsolute = args.headerSuffixIconAbsolute, params = args.params, $table = args.$table;
  var showEllipsis = args.showEllipsis, showHeaderTip = args.showHeaderTip, showTitle = args.showTitle, showTooltip2 = args.showTooltip;
  return h(
    "div",
    {
      class: ["tiny-grid-cell", {
        "tiny-grid-cell__title": showTitle,
        "tiny-grid-cell__tooltip": showTooltip2 || showHeaderTip,
        "tiny-grid-cell__ellipsis": showEllipsis,
        "tiny-grid-cell__header-suffix": headerSuffixIconAbsolute
      }]
    },
    // 如果不是表格形态，就只保留表格结构（到tiny-grid-cell），不渲染具体的内容
    $table.isShapeTable ? column.renderHeader(h, _extends({
      isHidden: fixedHiddenColumn
    }, params)) : null
  );
}
function renderThResize(_ref13) {
  var _vm = _ref13._vm, border = _ref13.border, column = _ref13.column, fixedHiddenColumn = _ref13.fixedHiddenColumn, isColGroup = _ref13.isColGroup, params = _ref13.params, resizable = _ref13.resizable, isColResize = _ref13.isColResize;
  var res = null;
  var classMap2 = {
    isLine: "is__line"
  };
  if (!isColGroup && isColResize && (isBoolean_default(column.resizable) ? column.resizable : resizable)) {
    var _ref14;
    res = h("div", {
      class: ["tiny-grid-resizable", (_ref14 = {}, _ref14[classMap2.isLine] = !border, _ref14)],
      on: {
        mousedown: function mousedown(event) {
          return _vm.resizeMousedown(event, _extends({
            isHidden: fixedHiddenColumn
          }, params));
        }
      }
    });
  }
  return res;
}
function getThHandler(args) {
  var $rowIndex = args.$rowIndex, $table = args.$table, _vm = args._vm, allAlign = args.allAlign, allColumnHeaderOverflow = args.allColumnHeaderOverflow, allHeaderAlign = args.allHeaderAlign, border = args.border, columnKey = args.columnKey, headerCellClassName = args.headerCellClassName;
  var headerSuffixIconAbsolute = args.headerSuffixIconAbsolute, highlightCurrentColumn = args.highlightCurrentColumn, isDragHeaderSorting = args.isDragHeaderSorting, mouseConfig = args.mouseConfig, resizable = args.resizable, sortOpts2 = args.sortOpts, tableListeners = args.tableListeners;
  var operationColumnResizable = $table.operationColumnResizable;
  return function(column, $columnIndex) {
    var showHeaderOverflow = column.showHeaderOverflow, showHeaderTip = column.showHeaderTip, headerAlign = column.headerAlign, align = column.align, headerClassName = column.headerClassName;
    var isColGroup = column.children && column.children.length;
    var fixedHiddenColumn = column.fixed;
    var headOverflow = isNull$1(showHeaderOverflow) ? allColumnHeaderOverflow : showHeaderOverflow;
    var showEllipsis = headOverflow === "ellipsis";
    var showTitle = headOverflow === "title";
    var headAlign = headerAlign || align || allHeaderAlign || allAlign;
    var showTooltip2 = headOverflow === true || headOverflow === "tooltip";
    var thOns = {};
    var hasEllipsis = showTitle || showTooltip2 || showEllipsis;
    var columnStore = $table.columnStore, scrollbarWidth = $table.scrollbarWidth;
    var isColResize = ["index", "radio", "selection"].includes(column.type) ? operationColumnResizable : true;
    headAlign = modifyHeadAlign({
      column,
      headAlign
    });
    var columnIndex = $table.getColumnIndex(column);
    var params = {
      $table,
      $rowIndex,
      column
    };
    Object.assign(params, {
      columnIndex,
      $columnIndex
    });
    addListenerMouseover$1({
      $table,
      params,
      showHeaderTip,
      showTitle,
      showTooltip: showTooltip2,
      thOns
    });
    addListenerMouseout$1({
      $table,
      showHeaderTip,
      showTooltip: showTooltip2,
      thOns
    });
    var args1 = {
      $table,
      highlightCurrentColumn,
      mouseConfig,
      params
    };
    Object.assign(args1, {
      sortOpts: sortOpts2,
      tableListeners,
      thOns
    });
    addListenerClick$2(args1);
    addListenerDblclick$2({
      $table,
      params,
      tableListeners,
      thOns
    });
    addListenerMousedown$1({
      $table,
      mouseConfig,
      params,
      thOns
    });
    args1 = {
      column,
      columnIndex,
      columnKey,
      fixedHiddenColumn,
      hasEllipsis,
      headAlign,
      columnStore,
      scrollbarWidth
    };
    Object.assign(args1, {
      headerCellClassName,
      headerClassName,
      isColGroup,
      isDragHeaderSorting,
      params,
      thOns
    });
    var args2 = {
      column,
      fixedHiddenColumn,
      headerSuffixIconAbsolute,
      params,
      $table
    };
    Object.assign(args2, {
      showEllipsis,
      showHeaderTip,
      showTitle,
      showTooltip: showTooltip2
    });
    return h("th", getThPropsArg(args1), [
      renderThPartition({
        border,
        column,
        isColGroup,
        resizable
      }),
      renderThCell(args2),
      // 列宽拖动
      renderThResize({
        _vm,
        border,
        column,
        fixedHiddenColumn,
        isColGroup,
        params,
        resizable,
        isColResize
      })
    ]);
  };
}
function renderTableThead(args) {
  var $table = args.$table, _vm = args._vm, allAlign = args.allAlign, allColumnHeaderOverflow = args.allColumnHeaderOverflow;
  var allHeaderAlign = args.allHeaderAlign, border = args.border, columnKey = args.columnKey;
  var headerCellClassName = args.headerCellClassName, headerColumn = args.headerColumn, headerRowClassName = args.headerRowClassName, headerSuffixIconAbsolute = args.headerSuffixIconAbsolute;
  var highlightCurrentColumn = args.highlightCurrentColumn, isDragHeaderSorting = args.isDragHeaderSorting, mouseConfig = args.mouseConfig;
  var overflowX = args.overflowX, resizable = args.resizable, sortOpts2 = args.sortOpts, tableListeners = args.tableListeners;
  return h("thead", {
    ref: "thead"
  }, headerColumn.map(function(cols, $rowIndex) {
    var args1 = {
      $rowIndex,
      $table,
      _vm,
      allAlign,
      allColumnHeaderOverflow,
      allHeaderAlign,
      border,
      columnKey
    };
    Object.assign(args1, {
      headerCellClassName,
      headerSuffixIconAbsolute,
      highlightCurrentColumn
    });
    Object.assign(args1, {
      isDragHeaderSorting,
      mouseConfig,
      overflowX,
      resizable,
      sortOpts: sortOpts2,
      tableListeners
    });
    return h("tr", {
      class: ["tiny-grid-header__row", headerRowClassName ? isFunction_default(headerRowClassName) ? headerRowClassName({
        $table,
        $rowIndex
      }) : headerRowClassName : ""]
    }, cols.map(getThHandler(args1)).concat([h("th", {
      class: "col__gutter"
    })]));
  }));
}
function updateResizableToolbar($table) {
  var toolbarVm = $table.getVm("toolbar");
  if (toolbarVm) {
    toolbarVm.updateResizable();
  }
}
function renderTable$1(args) {
  var $table = args.$table, _vm = args._vm, allAlign = args.allAlign, allColumnHeaderOverflow = args.allColumnHeaderOverflow, allHeaderAlign = args.allHeaderAlign, border = args.border, columnKey = args.columnKey;
  var headerCellClassName = args.headerCellClassName, headerColumn = args.headerColumn, headerRowClassName = args.headerRowClassName, headerSuffixIconAbsolute = args.headerSuffixIconAbsolute;
  var highlightCurrentColumn = args.highlightCurrentColumn, isDragHeaderSorting = args.isDragHeaderSorting, mouseConfig = args.mouseConfig, overflowX = args.overflowX, resizable = args.resizable, sortOpts2 = args.sortOpts;
  var tableColumn3 = args.tableColumn, tableLayout = args.tableLayout, tableListeners = args.tableListeners;
  var args1 = {
    $table,
    _vm,
    allAlign,
    allColumnHeaderOverflow,
    allHeaderAlign,
    border,
    columnKey
  };
  Object.assign(args1, {
    headerCellClassName,
    headerColumn,
    headerRowClassName,
    headerSuffixIconAbsolute
  });
  Object.assign(args1, {
    highlightCurrentColumn,
    isDragHeaderSorting,
    mouseConfig
  });
  Object.assign(args1, {
    overflowX,
    resizable,
    sortOpts: sortOpts2,
    tableListeners
  });
  return h("table", {
    class: "tiny-grid__header",
    style: {
      tableLayout
    },
    attrs: {
      cellspacing: 0,
      cellpadding: 0,
      border: 0
    },
    ref: "table"
  }, [
    // 列宽
    renderTableColgroup(tableColumn3),
    // 头部
    renderTableThead(args1)
  ]);
}
var documentOnmouseup = function documentOnmouseup2(_ref15) {
  var oldMousemove = _ref15.oldMousemove, oldMouseup = _ref15.oldMouseup, column = _ref15.column, dragPosLeft = _ref15.dragPosLeft, dragLeft = _ref15.dragLeft, resizeBarElem = _ref15.resizeBarElem, $table = _ref15.$table, params = _ref15.params;
  document.onmousemove = oldMousemove;
  document.onmouseup = oldMouseup;
  var resizeWidth = column.renderWidth + dragLeft - dragPosLeft;
  resizeWidth = typeof resizeWidth === "number" ? resizeWidth : parseInt(resizeWidth, 10) || 40;
  column.resizeWidth = resizeWidth < 40 ? 40 : resizeWidth;
  resizeBarElem.style.display = "none";
  removeClass($table.$el, "tiny-grid-cell__resize");
  Object.assign($table, {
    _isResize: false,
    _lastResizeTime: Date.now()
  });
  $table.analyColumnWidth();
  $table.recalculate();
  updateResizableToolbar($table);
  emitEvent$1($table, "resizable-change", [params]);
};
var Header = defineComponent({
  name: $prefix + "GridHeader",
  props: {
    collectColumn: Array,
    fixedColumn: Array,
    size: String,
    isGroup: Boolean,
    tableColumn: Array,
    tableData: Array,
    visibleColumn: Array
  },
  watch: {
    tableColumn: function tableColumn() {
      this.uploadColumn();
    }
  },
  data: function data2() {
    return {
      headerColumn: []
    };
  },
  mounted: function mounted2() {
    var $el = this.$el, $table = this.$parent, $refs = this.$refs;
    var elemStore = $table.elemStore;
    var keyPrefix = "main-header-";
    elemStore[keyPrefix + "wrapper"] = $el;
    elemStore[keyPrefix + "table"] = $refs.table;
    elemStore[keyPrefix + "colgroup"] = $refs.colgroup;
    elemStore[keyPrefix + "list"] = $refs.thead;
    elemStore[keyPrefix + "x-space"] = $refs.xSpace;
    elemStore[keyPrefix + "repair"] = $refs.repair;
  },
  created: function created2() {
    this.uploadColumn();
  },
  render: function render7() {
    var $table = this.$parent, headerColumn = this.headerColumn, tableColumn3 = this.tableColumn;
    var allAlign = $table.align, border = $table.border, columnKey = $table.columnKey, allHeaderAlign = $table.headerAlign;
    var headerCellClassName = $table.headerCellClassName, headerRowClassName = $table.headerRowClassName, headerSuffixIconAbsolute = $table.headerSuffixIconAbsolute;
    var highlightCurrentColumn = $table.highlightCurrentColumn, isDragHeaderSorting = $table.isDragHeaderSorting, _$table$mouseConfig = $table.mouseConfig, mouseConfig = _$table$mouseConfig === void 0 ? {} : _$table$mouseConfig, overflowX = $table.overflowX;
    var resizable = $table.resizable, allColumnHeaderOverflow = $table.showHeaderOverflow;
    var sortOpts2 = $table.sortOpts, tableLayout = $table.tableLayout, tableListeners = $table.tableListeners;
    var args = {
      $table,
      _vm: this,
      allAlign,
      allColumnHeaderOverflow,
      allHeaderAlign,
      border,
      columnKey
    };
    Object.assign(args, {
      headerCellClassName,
      headerColumn,
      headerRowClassName,
      headerSuffixIconAbsolute
    });
    Object.assign(args, {
      highlightCurrentColumn,
      isDragHeaderSorting,
      mouseConfig,
      overflowX,
      resizable,
      sortOpts: sortOpts2
    });
    Object.assign(args, {
      tableColumn: tableColumn3,
      tableLayout,
      tableListeners
    });
    return h("div", {
      class: ["tiny-grid__header-wrapper", "body__wrapper"]
    }, [
      // 表格主体内容x轴方向虚拟滚动条占位元素，在表头中属于无效元素，待删除
      renderXSpace(),
      renderTable$1(args),
      // x轴方向虚拟滚动适配线
      renderRepair()
    ]);
  },
  methods: {
    uploadColumn: function uploadColumn() {
      this.headerColumn = this.isGroup ? this.$parent._sliceColumnTree(this.tableColumn) : [this.tableColumn];
    },
    resizeMousedown: function resizeMousedown(event, params) {
      var $el = this.$el, $table = this.$parent;
      var dragClientX = event.clientX, dragBtnElem = event.target;
      var column = params.column;
      var _ref16 = {}, _ref16$dragLeft = _ref16.dragLeft, dragLeft = _ref16$dragLeft === void 0 ? 0 : _ref16$dragLeft, _ref16$minInterval = _ref16.minInterval, minInterval = _ref16$minInterval === void 0 ? 36 : _ref16$minInterval, _ref16$fixedOffsetWid = _ref16.fixedOffsetWidth, fixedOffsetWidth = _ref16$fixedOffsetWid === void 0 ? 0 : _ref16$fixedOffsetWid;
      var _$table$$refs = $table.$refs, resizeBarElem = _$table$$refs.resizeBar, tableBody = _$table$$refs.tableBody;
      var _ref17 = {}, _ref17$cell = _ref17.cell, cell = _ref17$cell === void 0 ? dragBtnElem.parentNode : _ref17$cell, _ref17$dragBtnWidth = _ref17.dragBtnWidth, dragBtnWidth = _ref17$dragBtnWidth === void 0 ? dragBtnElem.clientWidth : _ref17$dragBtnWidth;
      var _ref18 = {}, _ref18$pos = _ref18.pos, pos = _ref18$pos === void 0 ? getOffsetPos(dragBtnElem, $el) : _ref18$pos, _ref18$tableBodyElem = _ref18.tableBodyElem, tableBodyElem = _ref18$tableBodyElem === void 0 ? tableBody.$el : _ref18$tableBodyElem;
      var dragMinLeft = pos.left - cell.clientWidth + dragBtnWidth + minInterval;
      var dragPosLeft = pos.left + Math.floor(dragBtnWidth / 2);
      var _ref19 = {}, _ref19$oldMousemove = _ref19.oldMousemove, oldMousemove = _ref19$oldMousemove === void 0 ? document.onmousemove : _ref19$oldMousemove, _ref19$oldMouseup = _ref19.oldMouseup, oldMouseup = _ref19$oldMouseup === void 0 ? document.onmouseup : _ref19$oldMouseup;
      var handleMousemoveEvent = function handleMousemoveEvent2(event2) {
        event2.stopPropagation();
        event2.preventDefault();
        var _ref20 = {}, _ref20$offsetX = _ref20.offsetX, offsetX = _ref20$offsetX === void 0 ? event2.clientX - dragClientX : _ref20$offsetX, _ref20$left = _ref20.left, left = _ref20$left === void 0 ? offsetX + dragPosLeft : _ref20$left;
        var scrollLeft = tableBodyElem.scrollLeft;
        var args = {
          cell,
          dragMinLeft,
          dragPosLeft,
          fixedOffsetWidth
        };
        Object.assign(args, {
          left,
          minInterval,
          tableBodyElem
        });
        var ret = computeDragLeft(args);
        left = ret.left;
        dragMinLeft = ret.dragMinLeft;
        dragLeft = ret.dragLeft;
        resizeBarElem.style.left = dragLeft - scrollLeft + "px";
      };
      resizeBarElem.style.display = "block";
      addClass($table.$el, "tiny-grid-cell__resize");
      $table._isResize = true;
      document.onmousemove = handleMousemoveEvent;
      document.onmouseup = function() {
        documentOnmouseup({
          oldMousemove,
          oldMouseup,
          column,
          dragPosLeft,
          dragLeft,
          resizeBarElem,
          $table,
          params
        });
      };
      handleMousemoveEvent(event);
    }
  }
});
Header.install = function(Vue) {
  Vue.component(Header.name, Header);
};
var classMap$1 = {
  fixedHidden: "fixed__column",
  colEllipsis: "col__ellipsis",
  filterActive: "filter__active",
  cellSummary: "cell__summary",
  fixedLeftLast: "fixed-left-last__column",
  fixedRightFirst: "fixed-right-first__column"
};
function doFooterSpan(_ref21) {
  var attrs = _ref21.attrs, footerData = _ref21.footerData, footerSpanMethod = _ref21.footerSpanMethod, params = _ref21.params;
  if (footerSpanMethod) {
    var _ref22 = footerSpanMethod(_extends({
      data: footerData
    }, params)) || {}, _ref22$rowspan = _ref22.rowspan, rowspan = _ref22$rowspan === void 0 ? 1 : _ref22$rowspan, _ref22$colspan = _ref22.colspan, colspan = _ref22$colspan === void 0 ? 1 : _ref22$colspan;
    if (!rowspan || !colspan) {
      return null;
    }
    attrs.rowspan = rowspan;
    attrs.colspan = colspan;
  }
}
function addListenerDblclick$1(_ref23) {
  var $table = _ref23.$table, params = _ref23.params, tableListeners = _ref23.tableListeners, tfOns = _ref23.tfOns;
  if (tableListeners["footer-cell-dblclick"]) {
    tfOns.dblclick = function(event) {
      emitEvent$1($table, "footer-cell-dblclick", [_extends({
        cell: event.currentTarget
      }, params), event]);
    };
  }
}
function addListenerClick$1(_ref24) {
  var $table = _ref24.$table, params = _ref24.params, tableListeners = _ref24.tableListeners, tfOns = _ref24.tfOns;
  if (tableListeners["footer-cell-click"]) {
    tfOns.click = function(event) {
      emitEvent$1($table, "footer-cell-click", [_extends({
        cell: event.currentTarget
      }, params), event]);
    };
  }
}
function addListenerMouseout(_ref25) {
  var $table = _ref25.$table, showTooltip2 = _ref25.showTooltip, tfOns = _ref25.tfOns;
  if (showTooltip2) {
    tfOns.mouseout = function() {
      $table.clostTooltip();
    };
  }
}
function addListenerMouseover(_ref26) {
  var $table = _ref26.$table, params = _ref26.params, showTitle = _ref26.showTitle, showTooltip2 = _ref26.showTooltip, tfOns = _ref26.tfOns;
  if (showTitle || showTooltip2) {
    tfOns.mouseover = function(event) {
      if (showTitle) {
        updateCellTitle(event);
      } else if (showTooltip2) {
        $table.triggerFooterTooltipEvent(event, params);
      }
    };
  }
}
function renderColgroup(tableColumn3) {
  return h("colgroup", {
    ref: "colgroup"
  }, tableColumn3.map(function(column, columnIndex) {
    return h("col", {
      attrs: {
        name: column.id
      },
      key: columnIndex
    });
  }).concat([h("col", {
    attrs: {
      name: "col_gutter"
    }
  })]));
}
var renderfoots = function renderfoots2(opt) {
  var $table = opt.$table, allAlign = opt.allAlign, allColumnOverflow = opt.allColumnOverflow, allFooterAlign = opt.allFooterAlign, buildParamFunc2 = opt.buildParamFunc, columnKey = opt.columnKey, columnStore = opt.columnStore;
  var footerCellClassName = opt.footerCellClassName, footerData = opt.footerData, footerRowClassName = opt.footerRowClassName, footerSpanMethod = opt.footerSpanMethod, overflowX = opt.overflowX, tableColumn3 = opt.tableColumn, tableListeners = opt.tableListeners;
  var scrollbarWidth = $table.scrollbarWidth;
  return function(list, $rowIndex) {
    return h("tr", {
      class: ["tiny-grid-footer__row", footerRowClassName ? isFunction_default(footerRowClassName) ? footerRowClassName({
        $table,
        $rowIndex
      }) : footerRowClassName : ""]
    }, tableColumn3.map(function(column, $columnIndex) {
      var _ref28, _ref29;
      var arg1 = {
        $columnIndex,
        $rowIndex,
        $table,
        allAlign,
        allColumnOverflow,
        allFooterAlign
      };
      var arg2 = {
        column,
        footerData,
        footerSpanMethod,
        overflowX,
        tableListeners
      };
      var _buildParamFunc = buildParamFunc2(Object.assign(arg1, arg2)), attrs = _buildParamFunc.attrs, columnIndex = _buildParamFunc.columnIndex, fixedHiddenColumn = _buildParamFunc.fixedHiddenColumn, footAlign = _buildParamFunc.footAlign, footerClassName = _buildParamFunc.footerClassName, hasEllipsis = _buildParamFunc.hasEllipsis, params = _buildParamFunc.params, tfOns = _buildParamFunc.tfOns, isShowEllipsis = _buildParamFunc.isShowEllipsis, isShowTitle = _buildParamFunc.isShowTitle, showTooltip2 = _buildParamFunc.showTooltip;
      var leftList = columnStore.leftList, rightList = columnStore.rightList;
      var _ref27 = column.style || {}, leftPosition = _ref27.left, right = _ref27.right;
      var rightPosition = right >= 0 ? right + scrollbarWidth : "";
      return h("td", {
        class: ["tiny-grid-footer__column", column.id, (_ref28 = {}, _ref28["col__" + footAlign] = footAlign, _ref28[classMap$1.fixedHidden] = fixedHiddenColumn, _ref28[classMap$1.colEllipsis] = hasEllipsis, _ref28[classMap$1.filterActive] = column.filter && column.filter.hasFilter, _ref28[classMap$1.fixedLeftLast] = column.fixed === "left" && leftList[leftList.length - 1] === column, _ref28[classMap$1.fixedRightFirst] = column.fixed === "right" && rightList[0] === column, _ref28), getClass(footerClassName, params), getClass(footerCellClassName, params)],
        style: fixedHiddenColumn ? {
          left: leftPosition + "px",
          right: rightPosition + "px"
        } : null,
        attrs,
        on: tfOns,
        key: columnKey ? column.id : columnIndex
      }, [h(
        "div",
        {
          class: ["tiny-grid-cell", (_ref29 = {}, _ref29[classMap$1.cellSummary] = $table.summaryConfig, _ref29["tiny-grid-cell__title"] = isShowTitle, _ref29["tiny-grid-cell__tooltip"] = showTooltip2 || column.showTip, _ref29["tiny-grid-cell__ellipsis"] = isShowEllipsis, _ref29)]
        },
        // 如果不是表格形态，就只保留表格结构（到tiny-grid-cell），不渲染具体的内容
        $table.isShapeTable ? formatText(list[$table.tableColumn.indexOf(column)]) : null
      )]);
    }).concat([h("td", {
      class: "col__gutter"
    })]));
  };
};
function renderTfoot(opt) {
  return h("tfoot", {
    ref: "tfoot"
  }, opt.footerData.map(renderfoots(opt)));
}
var Footer = defineComponent({
  name: $prefix + "GridFooter",
  props: {
    fixedColumn: Array,
    fixedType: String,
    footerData: Array,
    size: String,
    tableColumn: Array,
    visibleColumn: Array
  },
  mounted: function mounted22() {
    var $el = this.$el, $table = this.$parent, $refs = this.$refs;
    var elemStore = $table.elemStore;
    var keyPrefix = "main-footer-";
    elemStore[keyPrefix + "wrapper"] = $el;
    elemStore[keyPrefix + "table"] = $refs.table;
    elemStore[keyPrefix + "colgroup"] = $refs.colgroup;
    elemStore[keyPrefix + "list"] = $refs.tfoot;
    elemStore[keyPrefix + "x-space"] = $refs.xSpace;
  },
  render: function render22() {
    var $table = this.$parent, buildParamFunc2 = this.buildParamFunc, fixedColumn = this.fixedColumn, fixedType = this.fixedType, footerData = this.footerData, tableColumn3 = this.tableColumn;
    var allAlign = $table.align, columnKey = $table.columnKey, allFooterAlign = $table.footerAlign, footerCellClassName = $table.footerCellClassName, footerRowClassName = $table.footerRowClassName, footerSpanMethod = $table.footerSpanMethod, columnStore = $table.columnStore;
    var overflowX = $table.overflowX, allColumnOverflow = $table.showOverflow, tableLayout = $table.tableLayout, tableListeners = $table.tableListeners, renderFooter = $table.renderFooter;
    var tableAttrs = {
      cellspacing: 0,
      cellpadding: 0,
      border: 0
    };
    var colgroupVNode = renderColgroup(tableColumn3);
    var arg1 = {
      $table,
      allAlign,
      allColumnOverflow,
      allFooterAlign,
      buildParamFunc: buildParamFunc2,
      columnKey,
      columnStore
    };
    var arg2 = {
      footerCellClassName,
      footerData,
      footerRowClassName,
      footerSpanMethod,
      overflowX,
      tableColumn: tableColumn3,
      tableListeners
    };
    var tfootVNode = renderTfoot(Object.assign(arg1, arg2));
    var renderParams = {
      $table,
      columns: tableColumn3,
      footerData,
      fixedColumns: fixedColumn,
      fixedType
    };
    return h("div", {
      class: ["tiny-grid__footer-wrapper", "body__wrapper"],
      on: {
        scroll: this.scrollEvent
      }
    }, [h("div", {
      class: "tiny-grid-body__x-space",
      ref: "xSpace"
    }), typeof renderFooter === "function" ? renderFooter(renderParams, h) : h("table", {
      class: "tiny-grid__footer",
      style: {
        tableLayout
      },
      attrs: tableAttrs,
      ref: "table"
    }, [
      //  列宽
      colgroupVNode,
      // 底部
      tfootVNode
    ])]);
  },
  methods: {
    scrollEvent: function scrollEvent(event) {
      var $table = this.$parent;
      var $refs = $table.$refs, lastScrollLeft = $table.lastScrollLeft, scrollXLoad = $table.scrollXLoad;
      var tableBody = $refs.tableBody, tableFooter = $refs.tableFooter, tableHeader = $refs.tableHeader;
      var headerElem = tableHeader ? tableHeader.$el : null;
      var bodyElem = tableBody ? tableBody.$el : null;
      var footerElem = tableFooter ? tableFooter.$el : null;
      var scrollLeft = footerElem.scrollLeft;
      var isX = scrollLeft !== lastScrollLeft;
      var setElemScrollLeft = function setElemScrollLeft2(elem, scrollLeft2) {
        if (elem) {
          elem.scrollLeft = scrollLeft2;
        }
      };
      var eventParams = [{
        $table,
        isX,
        isY: false,
        scrollLeft,
        scrollTop: bodyElem.scrollTop,
        type: "footer"
      }, event];
      $table.lastScrollTime = Date.now();
      $table.lastScrollLeft = scrollLeft;
      setElemScrollLeft(headerElem, scrollLeft);
      setElemScrollLeft(bodyElem, scrollLeft);
      if (scrollXLoad && isX) {
        $table.triggerScrollXEvent(event);
      }
      emitEvent$1($table, "scroll", eventParams);
    },
    buildParamFunc: function buildParamFunc(opt) {
      var $columnIndex = opt.$columnIndex, $rowIndex = opt.$rowIndex, $table = opt.$table, allAlign = opt.allAlign, allColumnOverflow = opt.allColumnOverflow, allFooterAlign = opt.allFooterAlign;
      var column = opt.column, footerData = opt.footerData, footerSpanMethod = opt.footerSpanMethod, tableListeners = opt.tableListeners;
      var showOverflow = column.showOverflow, footerAlign = column.footerAlign, align = column.align, footerClassName = column.footerClassName;
      var fixedHiddenColumn = column.fixed;
      var cellOverflowValue = isNull$1(showOverflow) ? allColumnOverflow : showOverflow;
      var footAlign = footerAlign || align || allFooterAlign || allAlign;
      var isShowEllipsis = cellOverflowValue === "ellipsis";
      var isShowTitle = cellOverflowValue === "title";
      var showTooltip2 = cellOverflowValue === true || cellOverflowValue === "tooltip";
      var hasEllipsis = isShowTitle || showTooltip2 || isShowEllipsis;
      var attrs = {
        "data-colid": column.id
      };
      var tfOns = {};
      var columnIndex = $table.getColumnIndex(column);
      var params = {
        $table,
        $rowIndex,
        column,
        columnIndex,
        $columnIndex
      };
      addListenerMouseover({
        $table,
        params,
        showTitle: isShowTitle,
        showTooltip: showTooltip2,
        tfOns
      });
      addListenerMouseout({
        $table,
        showTooltip: showTooltip2,
        tfOns
      });
      addListenerClick$1({
        $table,
        params,
        tableListeners,
        tfOns
      });
      addListenerDblclick$1({
        $table,
        params,
        tableListeners,
        tfOns
      });
      doFooterSpan({
        attrs,
        footerData,
        footerSpanMethod,
        params
      });
      return {
        attrs,
        columnIndex,
        fixedHiddenColumn,
        footAlign,
        footerClassName,
        hasEllipsis,
        isShowEllipsis,
        isShowTitle,
        showTooltip: showTooltip2,
        params,
        tfOns
      };
    }
  }
});
Footer.install = function(Vue) {
  Vue.component(Footer.name, Footer);
};
var outLog = function outLog2(type) {
  return function(message) {
    var msg = "[tiny-grid] " + (GlobalConfig$1.i18n(message) || message);
    log(msg, type);
    return msg;
  };
};
var warn$1 = outLog("warn");
var error = outLog("error");
var DateFormat = {
  FULLDATETIME: "yyyy-MM-dd hh:mm:ss.SSS",
  LONGDATETIME: "yyyy-MM-dd hh:mm:ss",
  DATETIME: "yyyy-MM-dd hh:mm",
  DATE: "yyyy-MM-dd",
  FULLTIME: "hh:mm:ss.SSS",
  LONGTIME: "hh:mm:ss",
  TIME: "hh:mm",
  YEARMONTH: "yyyy-MM"
};
var dateFormat = function dateFormat2(value, formatString) {
  var userFormat = _extends({
    dateFormat: formatString
  }, this.own.formatConfig);
  if (value) {
    if (typeof value === "string") {
      if (userFormat.valueFormat) {
        value = toDate(value, userFormat.valueFormat);
      } else {
        warn$1("ui.grid.error.missingValueFormat");
        if (isNaN(Date.parse(value))) {
          return value;
        }
      }
    } else if (typeof value === "number") {
      value = new Date(value);
    }
  }
  if (userFormat.isutc8) {
    if (!value) {
      return value;
    }
    var currentTimezone = 0 - (/* @__PURE__ */ new Date()).getTimezoneOffset() / 60;
    var newDate = getDateWithNewTimezone(isDate(value) ? value : new Date(toDate(value)), currentTimezone, userFormat.timezone || 8);
    return format(newDate, userFormat.dateFormat);
  }
  return toDateStr(value, userFormat.dateFormat, userFormat.timezone);
};
var Formatter = {
  money: function money(value) {
    var prefix = "$";
    var format2 = _extends({
      fraction: 2,
      flag: prefix + "{0}"
    }, this.own.formatConfig);
    return tryToCurrency(value, format2.fraction, format2.flag, "");
  },
  enum: function _enum(value) {
    var format2 = _extends({
      label: "label",
      value: "value"
    }, this.own.formatConfig);
    var data8 = Array.isArray(format2.data) && find_default(format2.data, function(item) {
      return item[format2.value] === value;
    });
    return data8 ? data8[format2.label] : "";
  },
  select: function select(cellValue) {
    var _this$editor = this.editor, options = _this$editor.options, optionGroups = _this$editor.optionGroups, _this$editor$optionPr = _this$editor.optionProps, optionProps = _this$editor$optionPr === void 0 ? {} : _this$editor$optionPr, _this$editor$optionGr = _this$editor.optionGroupProps, optionGroupProps = _this$editor$optionGr === void 0 ? {} : _this$editor$optionGr;
    var format2 = this.own.formatConfig;
    if (isNull$1(cellValue) || cellValue === "") {
      return "";
    }
    var selectItem;
    var labelProp = optionProps.label || "label";
    var valueProp = optionProps.value || "value";
    if (optionGroups) {
      var groupOptions = optionGroupProps.options || "options";
      for (var _index = 0; _index < optionGroups.length; _index++) {
        selectItem = find_default(optionGroups[_index][groupOptions], function(item) {
          return item[valueProp] === cellValue;
        });
        if (selectItem) {
          break;
        }
      }
      return selectItem ? selectItem[labelProp] : null;
    } else {
      if (!options && format2 && format2.async && format2.data) {
        options = format2.data;
      }
      selectItem = find_default(options, function(item) {
        return item[valueProp] === cellValue;
      });
      return selectItem ? selectItem[labelProp] : null;
    }
  },
  number: function number(value) {
    var format2 = _extends({
      fraction: 2
    }, this.own.formatConfig);
    return tryToDecimal(value, format2.fraction, false, "");
  },
  integer: function integer(value) {
    return tryToInt(value, "");
  },
  filesize: function filesize(value) {
    var format2 = _extends({}, this.own.formatConfig);
    return toFileSize(value, format2.unit, format2.currUnit);
  },
  date: function date(value) {
    return dateFormat.call(this, value, DateFormat.DATE);
  },
  dateTime: function dateTime(value) {
    return dateFormat.call(this, value, DateFormat.DATETIME);
  },
  longDateTime: function longDateTime(value) {
    return dateFormat.call(this, value, DateFormat.LONGDATETIME);
  },
  time: function time(value) {
    return dateFormat.call(this, value, DateFormat.TIME);
  },
  longTime: function longTime(value) {
    return dateFormat.call(this, value, DateFormat.LONGTIME);
  },
  yearMonth: function yearMonth(value) {
    return dateFormat.call(this, value, DateFormat.YEARMONTH);
  },
  ellipsis: function ellipsis(value) {
    var format2 = _extends({}, this.own.formatConfig);
    return function(h2) {
      return h2("div", {
        class: "data-ellipsis"
      }, [h2("span", {
        domProps: {
          title: value
        }
      }, truncate(value, format2.len))]);
    };
  },
  /**
   * rate 渲染器的计算规则：
   * 如果配置了 max，就按照 value / max 计算样式百分比，按照 value / 1 计算显示百分比；
   * 如果未配置 max，就按照 value / total 计算样式百分比和显示百分比；
   * @param {Number} value
   * @returns Function
   */
  rate: function rate(value) {
    var format2 = _extends({
      fraction: 2,
      total: 1,
      section: [30, 60, 90]
    }, this.own.formatConfig);
    var rateMethod = format2.rateMethod;
    var rate2;
    var formatTotal = format2.total;
    var getLengthRate = function getLengthRate2(value2, config2) {
      var lengthRate2;
      if (config2.max && typeof config2.max === "number" && typeof value2 === "number") {
        formatTotal = 1;
        lengthRate2 = toRate(value2 / config2.max, formatTotal, format2.fraction);
      }
      return lengthRate2;
    };
    var lengthRate = getLengthRate(value, format2);
    if (typeof rateMethod === "function") {
      rate2 = rateMethod.call(this, value, Object.assign({
        formatTotal
      }, format2));
    } else {
      rate2 = toRate(value, formatTotal, format2.fraction);
    }
    lengthRate = lengthRate || rate2;
    var section = format2.section;
    var css = "";
    if (section) {
      var rateValue = parseInt(lengthRate, 10);
      if (!isNumber$1(rateValue)) {
        return rate2;
      }
      if (rateValue === 100) {
        css = " tiny-grid__chart-completed";
      } else {
        var cssMap = {
          0: " tiny-grid__chart-danger",
          1: " tiny-grid__chart-warning",
          2: " tiny-grid__chart-normal"
        };
        Array.isArray(section) || (section = section.split(","));
        for (var i = 0; i < section.length; i++) {
          if (rateValue < section[i]) {
            css = cssMap[i];
            break;
          }
        }
      }
    }
    return function(h2) {
      return h2("div", {
        class: "tiny-grid__data-rate"
      }, [h2("div", {
        class: "tiny-grid__rate-chart" + css,
        style: {
          width: lengthRate
        }
      }), h2("span", {
        class: "tiny-grid__rate-text"
      }, rate2)]);
    };
  },
  boole: function boole(value) {
    var defaultFormat = {
      trueValue: true,
      falseValue: false,
      htmlView: true,
      noFork: false
    };
    var format2 = Object.assign(defaultFormat, this.own.formatConfig);
    var cellValue = !isNull$1(format2.trueValue) ? value === format2.trueValue : toBoolValue(value);
    if (!format2.htmlView) {
      return cellValue;
    }
    if (format2.noFork && !value) {
      return "";
    }
    var icon = !cellValue ? index$L() : index$M();
    return function(h2) {
      return h2("div", {
        class: "tiny-grid__data-boole"
      }, [h2(icon, {
        class: ["tiny-svg-size", !cellValue ? "icon-close" : "icon-yes"]
      })]);
    };
  }
};
function getRenderType(_ref30) {
  var editor = _ref30.editor, formatConfig = _ref30.formatConfig, formatText2 = _ref30.formatText;
  var renderType = formatText2 || formatConfig.type;
  if (!renderType && editor && editor.component === "select") {
    renderType = "select";
  }
  return renderType;
}
function getFormatData(_ref31) {
  var $table = _ref31.$table, cacheFormat = _ref31.cacheFormat, row2 = _ref31.row;
  var rest, formatData;
  if (cacheFormat) {
    rest = $table.fullAllDataRowMap.get(row2);
    formatData = rest.formatData;
    if (!formatData) {
      formatData = $table.fullAllDataRowMap.get(row2).formatData = {};
    }
  }
  return {
    rest,
    formatData
  };
}
function hasCacheValue(_ref32) {
  var async = _ref32.async, cellValue = _ref32.cellValue, colid = _ref32.colid, formatData = _ref32.formatData, rest = _ref32.rest;
  return rest && formatData[colid] && formatData[colid].value === cellValue && (!async || formatData[colid].label);
}
function notHasCacheVal(_ref33) {
  var cellLabel = _ref33.cellLabel, cellValue = _ref33.cellValue, column = _ref33.column, formatText2 = _ref33.formatText, hasCacheVal = _ref33.hasCacheVal, params = _ref33.params, renderType = _ref33.renderType, row2 = _ref33.row;
  if (!hasCacheVal) {
    var cellText = row2[GlobalConfig$1.constant.insertedField + column.property];
    var formatParams = {
      cellValue
    };
    if (cellText) {
      formatParams.cellLabel = cellText;
    }
    cellLabel = isString_default(renderType) ? Formatter[renderType].call(column, cellValue) : formatText2(Object.assign(formatParams, params));
  }
  return cellLabel;
}
function setFormatData(_ref34) {
  var cellLabel = _ref34.cellLabel, cellValue = _ref34.cellValue, colid = _ref34.colid, formatData = _ref34.formatData;
  if (formatData) {
    formatData[colid] = {
      value: cellValue,
      label: cellLabel
    };
  }
}
var getCellLabel = function getCellLabel2(row2, column, params) {
  var formatText2 = column.formatText, editor = column.editor;
  var _column$own$formatCon = column.own.formatConfig, formatConfig = _column$own$formatCon === void 0 ? {} : _column$own$formatCon;
  var cellValue = getCellValue(row2, column);
  var cellLabel = cellValue;
  var renderType = getRenderType({
    editor,
    formatConfig,
    formatText: formatText2
  });
  if (params && renderType) {
    var $table = params.$table;
    var colid = column.id;
    var _column$own$formatCon2 = column.own.formatConfig, formatConfig2 = _column$own$formatCon2 === void 0 ? {} : _column$own$formatCon2;
    var async = formatConfig2.async === true;
    var cacheFormat = $table && $table.fullAllDataRowMap.has(row2);
    var _getFormatData = getFormatData({
      $table,
      cacheFormat,
      row: row2
    }), rest = _getFormatData.rest, formatData = _getFormatData.formatData;
    var hasCacheVal = hasCacheValue({
      async,
      cellValue,
      colid,
      formatData,
      rest
    });
    if (hasCacheVal) {
      return formatData[colid].label;
    }
    cellLabel = notHasCacheVal({
      cellLabel,
      cellValue,
      column,
      formatText: formatText2,
      hasCacheVal,
      params,
      renderType,
      row: row2
    });
    setFormatData({
      cellLabel,
      cellValue,
      colid,
      formatData
    });
  }
  return cellLabel;
};
var index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  error,
  getCellLabel,
  warn: warn$1
}, Symbol.toStringTag, {
  value: "Module"
}));
var TEMPORARY_CHILDREN = "_$children_";
var TEMPORARY_SHOW = "_$show_";
var ROWKEY_MAP = /* @__PURE__ */ new WeakMap();
var TOTALROWS_MAP = /* @__PURE__ */ new WeakMap();
var CHART_MAP = /* @__PURE__ */ new WeakMap();
var rowUniqueId = 0;
var getRowUniqueId = function getRowUniqueId2() {
  return "row_" + ++rowUniqueId;
};
var isValidArray = function isValidArray2(arr) {
  return Array.isArray(arr) && arr.length;
};
var setTableRowKey = function setTableRowKey2($table) {
  if (!ROWKEY_MAP.has($table)) {
    ROWKEY_MAP.set($table, getRowkey($table));
  }
  return ROWKEY_MAP.get($table);
};
var getTableRowKey = function getTableRowKey2($table) {
  if (!ROWKEY_MAP.has($table)) {
    setTableRowKey($table);
  }
  return ROWKEY_MAP.get($table);
};
var setTreeScrollYCache = function setTreeScrollYCache2(_vm) {
  setCacheChartMap(_vm);
  setTotalRows(_vm);
};
var buildChart = function buildChart2(_vm) {
  var afterFullData = _vm.afterFullData, scrollYLoad = _vm.scrollYLoad, treeConfig = _vm.treeConfig, treeExpandeds = _vm.treeExpandeds;
  if (!scrollYLoad || !treeConfig)
    return;
  var chart = [];
  var stack = [];
  var isExpanded = function isExpanded2(row2) {
    return ~treeExpandeds.indexOf(row2);
  };
  var children = treeConfig.children;
  var iterate = function iterate2(arr, chart2) {
    return isValidArray(arr) && arr.forEach(function(row2) {
      return traverse(row2, chart2);
    });
  };
  var traverse = function traverse2(row2, chart2) {
    chart2.push([].concat(stack, [row2]));
    if (isExpanded(row2)) {
      stack.push(row2);
      iterate(row2[children], chart2);
      stack.pop();
    }
  };
  iterate(afterFullData, chart);
  return chart;
};
var clearTreeShow = function clearTreeShow2(_vm) {
  var afterFullData = _vm.afterFullData, scrollYLoad = _vm.scrollYLoad, treeConfig = _vm.treeConfig, _subTree = _vm._subTree;
  if (!scrollYLoad || !treeConfig)
    return;
  var children = treeConfig.children, _treeConfig$temporary = treeConfig.temporaryChildren, temporaryChildren = _treeConfig$temporary === void 0 ? TEMPORARY_CHILDREN : _treeConfig$temporary, _treeConfig$temporary2 = treeConfig.temporaryShow, temporaryShow = _treeConfig$temporary2 === void 0 ? TEMPORARY_SHOW : _treeConfig$temporary2;
  var iterate = function iterate2(arr) {
    return isValidArray(arr) && arr.forEach(function(child) {
      return traverse(child);
    });
  };
  var traverse = function traverse2(row2) {
    row2[temporaryShow] = false;
    row2[temporaryChildren] = [];
    iterate(row2[children]);
  };
  iterate(_subTree || afterFullData);
};
var sliceTreeData = function sliceTreeData2(_vm) {
  clearTreeShow(_vm);
  var chart = getCacheChartMap(_vm);
  var scrollYStore = _vm.scrollYStore, treeConfig = _vm.treeConfig;
  var renderSize = scrollYStore.renderSize, startIndex = scrollYStore.startIndex;
  var subChart = chart.slice(startIndex, startIndex + renderSize);
  var subTree = [];
  var _treeConfig$temporary3 = treeConfig.temporaryChildren, temporaryChildren = _treeConfig$temporary3 === void 0 ? TEMPORARY_CHILDREN : _treeConfig$temporary3, _treeConfig$temporary4 = treeConfig.temporaryShow, temporaryShow = _treeConfig$temporary4 === void 0 ? TEMPORARY_SHOW : _treeConfig$temporary4;
  var pushIfNot = function pushIfNot2(arr, item) {
    return !arr.includes(item) && arr.push(item);
  };
  subChart.forEach(function(chartItem) {
    var lastIndex = chartItem.length - 1;
    for (var i = lastIndex; i > -1; i--) {
      if (i === lastIndex) {
        chartItem[i][temporaryShow] = true;
      } else {
        if (!chartItem[i][temporaryChildren]) {
          chartItem[i][temporaryChildren] = [];
        }
        pushIfNot(chartItem[i][temporaryChildren], chartItem[i + 1]);
      }
    }
    pushIfNot(subTree, chartItem[0]);
  });
  _vm._subTree = subTree;
  return subTree;
};
var sliceFullData = function sliceFullData2(_vm) {
  var afterFullData = _vm.afterFullData, scrollYLoad = _vm.scrollYLoad, scrollYStore = _vm.scrollYStore, treeConfig = _vm.treeConfig;
  var renderSize = scrollYStore.renderSize, startIndex = scrollYStore.startIndex;
  var result;
  if (scrollYLoad) {
    if (treeConfig) {
      result = sliceTreeData(_vm);
    } else {
      result = afterFullData.slice(startIndex, startIndex + renderSize);
    }
  } else {
    result = afterFullData.slice(0);
  }
  return result;
};
var setTotalRows = function setTotalRows2(_vm) {
  var afterFullData = _vm.afterFullData, scrollYLoad = _vm.scrollYLoad, treeConfig = _vm.treeConfig;
  var totalRows = afterFullData.length;
  if (scrollYLoad && treeConfig) {
    totalRows = getCacheChartMap(_vm).length;
  }
  TOTALROWS_MAP.set(_vm, totalRows);
};
var getTotalRows = function getTotalRows2(_vm) {
  var afterFullData = _vm.afterFullData, scrollYLoad = _vm.scrollYLoad, scrollLoad = _vm.scrollLoad, treeConfig = _vm.treeConfig;
  var totalRows = afterFullData.length;
  if (scrollYLoad && treeConfig) {
    if (!TOTALROWS_MAP.get(_vm)) {
      setTotalRows(_vm);
    }
    totalRows = TOTALROWS_MAP.get(_vm);
  }
  if (scrollLoad) {
    totalRows = scrollLoad.pageSize || 10;
  }
  return totalRows;
};
var getTreeChildrenKey = function getTreeChildrenKey2(_ref35) {
  var scrollYLoad = _ref35.scrollYLoad, treeConfig = _ref35.treeConfig;
  if (!treeConfig) {
    return;
  }
  var childrenKey = treeConfig.children, _treeConfig$temporary5 = treeConfig.temporaryChildren, temporaryChildren = _treeConfig$temporary5 === void 0 ? TEMPORARY_CHILDREN : _treeConfig$temporary5;
  if (scrollYLoad) {
    childrenKey = temporaryChildren;
  }
  return childrenKey;
};
var getTreeShowKey = function getTreeShowKey2(_ref36) {
  var scrollYLoad = _ref36.scrollYLoad, treeConfig = _ref36.treeConfig;
  if (!treeConfig) {
    return;
  }
  var treeShowKey = "";
  var _treeConfig$temporary6 = treeConfig.temporaryShow, temporaryShow = _treeConfig$temporary6 === void 0 ? TEMPORARY_SHOW : _treeConfig$temporary6;
  if (scrollYLoad) {
    treeShowKey = temporaryShow;
  }
  return treeShowKey;
};
var sliceVisibleColumn = function sliceVisibleColumn2(args) {
  var lastStartIndex = args.lastStartIndex, renderSize = args.renderSize, scrollXLoad = args.scrollXLoad, startIndex = args.startIndex, tableColumn3 = args.tableColumn, columnStore = args.columnStore;
  var treeConfig = args.treeConfig, visibleColumn = args.visibleColumn, visibleColumnChanged = args.visibleColumnChanged;
  var leftList = columnStore.leftList, rightList = columnStore.rightList;
  var tableColumn22 = tableColumn3;
  var lastStartIndex2 = lastStartIndex;
  var visibleColumnChanged2 = visibleColumnChanged;
  var sliced = false;
  if (scrollXLoad && treeConfig) {
    if (visibleColumnChanged || !~lastStartIndex || lastStartIndex !== startIndex) {
      tableColumn22 = visibleColumn.slice(startIndex, startIndex + renderSize);
      lastStartIndex2 = startIndex;
      visibleColumnChanged2 = false;
      sliced = true;
    }
  } else {
    tableColumn22 = visibleColumn.slice(startIndex, startIndex + renderSize);
    sliced = true;
  }
  tableColumn22 = Array.from(/* @__PURE__ */ new Set([].concat(leftList, tableColumn22, rightList)));
  return {
    tableColumn: tableColumn22,
    lastStartIndex: lastStartIndex2,
    visibleColumnChanged: visibleColumnChanged2,
    sliced
  };
};
var removeSliceColumnTree = function removeSliceColumnTree2(_vm) {
  return _vm._sliceColumnTree && (_vm._sliceColumnTree = null);
};
var clearOnTableUnmount = function clearOnTableUnmount2($table) {
  if (ROWKEY_MAP.has($table)) {
    ROWKEY_MAP.delete($table);
  }
  if (TOTALROWS_MAP.has($table)) {
    TOTALROWS_MAP.delete($table);
  }
  if (CHART_MAP.has($table)) {
    CHART_MAP.delete($table);
  }
  removeSliceColumnTree($table);
};
var setCacheChartMap = function setCacheChartMap2(_vm) {
  return CHART_MAP.set(_vm, buildChart(_vm));
};
var getCacheChartMap = function getCacheChartMap2(_vm) {
  return CHART_MAP.get(_vm);
};
var sliceColumnTree = function sliceColumnTree2(_vm) {
  var collectColumn2 = _vm.collectColumn;
  var columnChart = [];
  var stack = [];
  var fixedMap = /* @__PURE__ */ new WeakMap();
  var maxLevel = 1;
  var buildColumnChart = function buildColumnChart2(columns2, columnChart2, stack2) {
    var _loop = function _loop2() {
      var column = columns2[i];
      setColumnLevel(column, stack2);
      column.rowSpan = 1;
      column.colSpan = 1;
      if (stack2.length === 0) {
        fixedMap.set(column, column.fixed || "");
      }
      if (Array.isArray(column.children) && column.children.length) {
        stack2.push(column);
        buildColumnChart2(column.children, columnChart2, stack2);
        stack2.pop();
      } else {
        var chartItem = [].concat(stack2, [column]);
        columnChart2.push(chartItem);
        if (chartItem.length > 1) {
          chartItem.slice(1).forEach(function(_ref37) {
            var fixed = _ref37.fixed;
            var rootColumn = chartItem[0];
            var cachedFixed = fixedMap.get(rootColumn);
            if (fixed) {
              if (cachedFixed && cachedFixed !== fixed) {
                warn$1("ui.grid.error.groupColumnFixedError");
              } else if (!cachedFixed) {
                fixedMap.set(rootColumn, fixed);
              }
            }
          });
        }
      }
    };
    for (var i = 0; i < columns2.length; i++) {
      _loop();
    }
  };
  var setColumnLevel = function setColumnLevel2(column, stack2) {
    column.level = stack2.length + 1;
    if (column.level > maxLevel) {
      maxLevel = column.level;
    }
  };
  var setColumnRowSpan = function setColumnRowSpan2(columnChart2) {
    columnChart2.forEach(function(cols) {
      var lastColumn = cols[cols.length - 1];
      lastColumn.rowSpan = maxLevel - lastColumn.level + 1;
    });
  };
  var findChartItem = function findChartItem2(lastColumn) {
    for (var i = 0; i < columnChart.length; i++) {
      var chartItem = columnChart[i];
      if (chartItem[chartItem.length - 1] === lastColumn) {
        return chartItem;
      }
    }
  };
  var tryRepairFixedType = function tryRepairFixedType2(chart) {
    chart.forEach(function(item) {
      var rootColumn = item[0];
      item.forEach(function(col) {
        col.fixed = fixedMap.get(rootColumn);
      });
    });
  };
  buildColumnChart(collectColumn2, columnChart, stack);
  setColumnRowSpan(columnChart);
  tryRepairFixedType(columnChart);
  _vm.columnChart = columnChart;
  return function() {
    var tableColumn3 = _vm.tableColumn;
    var levelColumns = [];
    var subChart = [];
    tableColumn3.forEach(function(column) {
      subChart.push(findChartItem(column));
    });
    subChart.forEach(function(chartItem) {
      chartItem.forEach(function(column) {
        var levelIndex = column.level - 1;
        if (!levelColumns[levelIndex])
          levelColumns[levelIndex] = [];
        var levelArr = levelColumns[levelIndex];
        if (levelArr[levelArr.length - 1] === column) {
          column.colSpan += 1;
        } else {
          levelArr.push(column);
          column.colSpan = 1;
        }
      });
    });
    return levelColumns;
  };
};
var setSliceColumnTree = function setSliceColumnTree2(_vm) {
  return _vm.isGroup && (_vm._sliceColumnTree = sliceColumnTree(_vm));
};
var generateFixedClassName = function generateFixedClassName2(_ref38) {
  var $table = _ref38.$table, bodyElem = _ref38.bodyElem, leftList = _ref38.leftList, rightList = _ref38.rightList;
  if (!$table || !bodyElem) {
    return;
  }
  var scrollLeft = bodyElem.scrollLeft;
  if (leftList.length) {
    if (scrollLeft === 0) {
      removeClass($table.$el, "tiny-grid-fixed__left");
    } else {
      addClass($table.$el, "tiny-grid-fixed__left");
    }
  }
  if (rightList.length) {
    var isShowRightFixed = bodyElem.scrollWidth - bodyElem.clientWidth - bodyElem.scrollLeft;
    if (isShowRightFixed === 0) {
      removeClass($table.$el, "tiny-grid-fixed__right");
    } else {
      addClass($table.$el, "tiny-grid-fixed__right");
    }
  }
};
var isOperateMouse = function isOperateMouse2($table) {
  return $table._isResize || $table.lastScrollTime && Date.now() < $table.lastScrollTime + $table.optimizeOpts.delayHover;
};
var classMap = {
  colEdit: "col__edit",
  colIndex: "col__index",
  colRadio: "col__radio",
  colSelection: "col__selection",
  colEllipsis: "col__ellipsis",
  editVisible: "edit__visible",
  fixedColumn: "fixed__column",
  colDirty: "col__dirty",
  colActived: "col__actived",
  rowNew: "row__new",
  rowSelected: "row__selected",
  rowActived: "row__actived",
  isScrollload: "is__scrollload"
};
var renderBorder = function renderBorder2(h2, type) {
  var vnTop = h2("span", {
    class: "tiny-grid-border-top",
    ref: type + "Top"
  });
  var vnRight = h2("span", {
    class: "tiny-grid-border-right",
    ref: type + "Right"
  });
  var vnBottom = h2("span", {
    class: "tiny-grid-border-bottom",
    ref: type + "Bottom"
  });
  var vnLeft = h2("span", {
    class: "tiny-grid-border-left",
    ref: type + "Left"
  });
  return h2("div", {
    class: "tiny-grid-" + type + "ed-borders",
    ref: type + "Borders"
  }, [vnTop, vnRight, vnBottom, vnLeft]);
};
function buildColumnProps(args) {
  var _ref39, _column$style3, _column$style4;
  var attrs = args.attrs, cellAlign = args.cellAlign, cellClassName = args.cellClassName, className = args.className, column = args.column, columnActived = args.columnActived, columnIndex = args.columnIndex, columnKey = args.columnKey, editor = args.editor;
  var fixedHiddenColumn = args.fixedHiddenColumn, hasEllipsis = args.hasEllipsis, isDirty = args.isDirty, params = args.params, tdOns = args.tdOns, validError = args.validError, validated = args.validated, columnStore = args.columnStore;
  var leftList = columnStore.leftList, rightList = columnStore.rightList;
  return {
    class: ["tiny-grid-body__column", column.id, (_ref39 = {}, _ref39["col__" + cellAlign] = cellAlign, _ref39[classMap.colEdit] = editor, _ref39[classMap.colIndex] = column.type === "index", _ref39[classMap.colRadio] = column.type === "radio", _ref39[classMap.colSelection] = column.type === "selection", _ref39[classMap.colEllipsis] = hasEllipsis, _ref39[classMap.editVisible] = editor && editor.type === "visible", _ref39[classMap.fixedColumn] = fixedHiddenColumn, _ref39[classMap.colDirty] = isDirty, _ref39[classMap.colActived] = columnActived, _ref39["col__valid-error"] = validError && validated, _ref39["col__valid-success"] = columnActived ? !validError && !validated : isDirty && !validated, _ref39["col__treenode"] = column.treeNode, _ref39["fixed-left-last__column"] = column.fixed === "left" && leftList[leftList.length - 1] === column, _ref39["fixed-right-first__column"] = column.fixed === "right" && rightList[0] === column, _ref39), getClass(className, params), getClass(cellClassName, params)],
    style: fixedHiddenColumn ? {
      left: ((_column$style3 = column.style) == null ? void 0 : _column$style3.left) + "px",
      right: ((_column$style4 = column.style) == null ? void 0 : _column$style4.right) + "px"
    } : null,
    key: columnKey ? column.id : columnIndex,
    attrs,
    on: tdOns
  };
}
function buildColumnChildren(args) {
  var h2 = args.h, hasDefaultTip = args.hasDefaultTip, params = args.params, row2 = args.row, validError = args.validError, column = args.column, $table = args.$table;
  var showEllipsis = args.showEllipsis, showTip = args.showTip, showTitle = args.showTitle, showTooltip2 = args.showTooltip, validStore = args.validStore;
  var validOpts2 = $table.validOpts;
  var cellNode = [];
  var validNode = null;
  if (hasDefaultTip) {
    validNode = [null];
    if (validError) {
      validNode = h2("div", {
        class: "tiny-grid-cell__valid",
        style: validStore.rule && validStore.rule.width ? {
          width: validStore.rule.width + "px"
        } : null
      }, [validOpts2 != null && validOpts2.icon ? h2(validOpts2.icon, {
        class: "tiny-grid-cell__valid-icon"
      }) : null, h2("span", {
        class: "tiny-grid-cell__valid-msg",
        attrs: {
          title: validStore.content
        }
      }, validStore.content)]);
    }
  }
  cellNode = [h2(
    "div",
    {
      class: ["tiny-grid-cell", {
        "tiny-grid-cell__title": showTitle,
        "tiny-grid-cell__tooltip": showTooltip2 || showTip,
        "tiny-grid-cell__ellipsis": showEllipsis
      }],
      attrs: {
        title: showTitle ? getCellLabel(row2, column, params) : null
      }
    },
    // 调用column组件的renderCell渲染单元格内部的内容
    // 如果不是表格形态，就只保留表格结构（到aui-grid-cell），不渲染具体的内容
    $table.isShapeTable ? column.renderCell(h2, params) : null
  ), validNode];
  return cellNode;
}
function modifyCellAlign(_ref40) {
  var cellAlign = _ref40.cellAlign, column = _ref40.column;
  if (~["radio", "selection", "index"].indexOf(column.type)) {
    cellAlign = cellAlign || "center";
  }
  return cellAlign;
}
function modifyShowEllipsis(_ref41) {
  var hasEllipsis = _ref41.hasEllipsis, scrollXLoad = _ref41.scrollXLoad, scrollYLoad = _ref41.scrollYLoad, showEllipsis = _ref41.showEllipsis;
  if ((scrollXLoad || scrollYLoad) && !hasEllipsis) {
    showEllipsis = true;
  }
  return showEllipsis;
}
function addListenerMouseenter(_ref42) {
  var $table = _ref42.$table, evntParams = _ref42.evntParams, showTip = _ref42.showTip, showTitle = _ref42.showTitle, showTooltip2 = _ref42.showTooltip, tableListeners = _ref42.tableListeners, tdOns = _ref42.tdOns;
  if (showTip || showTitle || showTooltip2 || tableListeners["cell-mouseenter"]) {
    tdOns.mouseenter = function(event) {
      if (isOperateMouse($table)) {
        return;
      }
      evntParams.cell = event.currentTarget;
      if (showTitle) {
        updateCellTitle(event);
      } else if (showTip || showTooltip2) {
        $table.triggerTooltipEvent(event, evntParams);
      }
      emitEvent$1($table, "cell-mouseenter", [evntParams, event]);
    };
  }
}
function addListenerMouseleave(_ref43) {
  var $table = _ref43.$table, evntParams = _ref43.evntParams, showTip = _ref43.showTip, showTooltip2 = _ref43.showTooltip, tableListeners = _ref43.tableListeners, tdOns = _ref43.tdOns;
  if (showTip || showTooltip2 || tableListeners["cell-mouseleave"]) {
    tdOns.mouseleave = function(event) {
      if (isOperateMouse($table)) {
        return;
      }
      if (showTip || showTooltip2) {
        $table.clostTooltip();
      }
      evntParams.cell = event.currentTarget;
      emitEvent$1($table, "cell-mouseleave", [evntParams, event]);
    };
  }
}
function addListenerMousedown(_ref44) {
  var $table = _ref44.$table, evntParams = _ref44.evntParams, mouseConfig = _ref44.mouseConfig, tdOns = _ref44.tdOns;
  if (mouseConfig.checked || mouseConfig.selected) {
    tdOns.mousedown = function(event) {
      evntParams.cell = event.currentTarget;
      $table.triggerCellMousedownEvent(event, evntParams);
    };
  }
}
function addListenerClick(args) {
  var $table = args.$table, column = args.column, editConfig = args.editConfig, editor = args.editor, evntParams = args.evntParams, expandConfig = args.expandConfig, highlightCurrentRow = args.highlightCurrentRow;
  var mouseConfig = args.mouseConfig, radioConfig = args.radioConfig, selectConfig = args.selectConfig, tableListeners = args.tableListeners, tdOns = args.tdOns, treeConfig = args.treeConfig;
  var satisfy = function satisfy2(equal, trigger) {
    return trigger === "row" || equal(column) && trigger === "cell";
  };
  if (highlightCurrentRow || tableListeners["cell-click"] || mouseConfig.checked || editor && editConfig || satisfy(function() {
    return true;
  }, expandConfig.trigger) || satisfy(function(_ref45) {
    var type = _ref45.type;
    return type === "radio";
  }, radioConfig.trigger) || satisfy(function(_ref46) {
    var type = _ref46.type;
    return type === "selection";
  }, selectConfig.trigger) || satisfy(function(_ref47) {
    var treeNode = _ref47.treeNode;
    return treeNode;
  }, treeConfig.trigger)) {
    tdOns.click = function(event) {
      evntParams.cell = event.currentTarget;
      $table.triggerCellClickEvent(event, evntParams);
    };
  }
}
function getRowSpanMethod(rowSpan) {
  return function(_ref48) {
    var row2 = _ref48.row, $rowIndex = _ref48.$rowIndex, column = _ref48.column, data8 = _ref48.data;
    var fields = [];
    if (rowSpan) {
      rowSpan.forEach(function(item) {
        column.visible && fields.push(item.field);
      });
    }
    var cellVal = row2[column.property];
    if (cellVal && ~fields.indexOf(column.property)) {
      var prevSiblingRow = data8[$rowIndex - 1];
      var nextSiblingRow = data8[$rowIndex + 1];
      if (prevSiblingRow && prevSiblingRow[column.property] === cellVal) {
        return {
          rowspan: 0,
          colspan: 0
        };
      } else {
        var rowspanCount = 1;
        while (nextSiblingRow && nextSiblingRow[column.property] === cellVal) {
          nextSiblingRow = data8[++rowspanCount + $rowIndex];
        }
        if (rowspanCount > 1) {
          return {
            rowspan: rowspanCount,
            colspan: 1
          };
        }
      }
    }
  };
}
function addListenerDblclick(_ref49) {
  var $table = _ref49.$table, evntParams = _ref49.evntParams, tableListeners = _ref49.tableListeners, tdOns = _ref49.tdOns, triggerDblclick = _ref49.triggerDblclick;
  if (triggerDblclick || tableListeners["cell-dblclick"]) {
    tdOns.dblclick = function(event) {
      evntParams.cell = event.currentTarget;
      $table.triggerCellDBLClickEvent(event, evntParams);
    };
  }
}
function doSpan(_ref50) {
  var attrs = _ref50.attrs, params = _ref50.params, rowSpan = _ref50.rowSpan, spanMethod = _ref50.spanMethod;
  var rowSpanMethod = getRowSpanMethod(rowSpan);
  if (spanMethod || rowSpan) {
    var _ref51 = (spanMethod ? spanMethod(params) : rowSpanMethod(params)) || {}, _ref51$rowspan = _ref51.rowspan, rowspan = _ref51$rowspan === void 0 ? 1 : _ref51$rowspan, _ref51$colspan = _ref51.colspan, colspan = _ref51$colspan === void 0 ? 1 : _ref51$colspan;
    if (!rowspan || !colspan) {
      return false;
    }
    attrs.rowspan = rowspan;
    attrs.colspan = colspan;
  }
  return true;
}
function isCellDirty(_ref52) {
  var $table = _ref52.$table, column = _ref52.column, editConfig = _ref52.editConfig, isDirty = _ref52.isDirty, row2 = _ref52.row;
  var _ref53 = editConfig || {}, _ref53$showStatus = _ref53.showStatus, showStatus = _ref53$showStatus === void 0 ? false : _ref53$showStatus, _ref53$relationFields = _ref53.relationFields, relationFields = _ref53$relationFields === void 0 ? true : _ref53$relationFields;
  var canChange = relationFields === true || Array.isArray(relationFields) && relationFields.includes(column.property);
  if (editConfig && showStatus && column.property && (column.editor || relationFields && canChange)) {
    isDirty = $table.hasRowChange(row2, column.property);
  }
  return isDirty;
}
var setColumnEvents = function setColumnEvents2(args1) {
  var $columnIndex = args1.$columnIndex, $rowIndex = args1.$rowIndex, $table = args1.$table, column = args1.column, columnIndex = args1.columnIndex;
  var row2 = args1.row, rowIndex = args1.rowIndex, rowLevel = args1.rowLevel, seq = args1.seq;
  var editConfig = $table.editConfig, _$table$expandConfig = $table.expandConfig, expandConfig = _$table$expandConfig === void 0 ? {} : _$table$expandConfig;
  var _$table$radioConfig = $table.radioConfig, radioConfig = _$table$radioConfig === void 0 ? {} : _$table$radioConfig, allColumnOverflow = $table.showOverflow;
  var highlightCurrentRow = $table.highlightCurrentRow, _$table$mouseConfig2 = $table.mouseConfig, mouseConfig = _$table$mouseConfig2 === void 0 ? {} : _$table$mouseConfig2;
  var scrollXLoad = $table.scrollXLoad, scrollYLoad = $table.scrollYLoad, _$table$selectConfig = $table.selectConfig, selectConfig = _$table$selectConfig === void 0 ? {} : _$table$selectConfig;
  var tableListeners = $table.tableListeners, _$table$treeConfig = $table.treeConfig, treeConfig = _$table$treeConfig === void 0 ? {} : _$table$treeConfig;
  var tdOns = {};
  var fixedHiddenColumn = column.fixed;
  var editor = column.editor, showOverflow = column.showOverflow, showTip = column.showTip;
  var cellOverflow = isNull$1(showOverflow) ? allColumnOverflow : showOverflow;
  var showTitle = cellOverflow === "title";
  var showTooltip2 = cellOverflow === true || cellOverflow === "tooltip";
  var showEllipsis = cellOverflow === "ellipsis";
  var hasEllipsis = showTitle || showTooltip2 || showEllipsis;
  var triggerDblclick = editor && editConfig && editConfig.trigger === "dblclick";
  var commonParams = {
    $columnIndex,
    $rowIndex,
    $table,
    column,
    columnIndex
  };
  Object.assign(commonParams, {
    isHidden: fixedHiddenColumn,
    level: rowLevel,
    row: row2,
    rowIndex,
    seq
  });
  var evntParams = _extends({
    showTip
  }, commonParams);
  showEllipsis = modifyShowEllipsis({
    hasEllipsis,
    scrollXLoad,
    scrollYLoad,
    showEllipsis
  });
  addListenerMouseenter({
    $table,
    evntParams,
    showTip,
    showTitle,
    showTooltip: showTooltip2,
    tableListeners,
    tdOns
  });
  addListenerMouseleave({
    $table,
    evntParams,
    showTip,
    showTooltip: showTooltip2,
    tableListeners,
    tdOns
  });
  addListenerMousedown({
    $table,
    evntParams,
    mouseConfig,
    tdOns
  });
  var args = {
    $table,
    column,
    editConfig,
    editor,
    evntParams,
    expandConfig,
    highlightCurrentRow
  };
  Object.assign(args, {
    mouseConfig,
    radioConfig,
    selectConfig,
    tableListeners,
    tdOns,
    treeConfig
  });
  addListenerClick(args);
  addListenerDblclick({
    $table,
    evntParams,
    tableListeners,
    tdOns,
    triggerDblclick
  });
  return {
    commonParams,
    args,
    cellOverflow,
    showTitle,
    showTooltip: showTooltip2,
    showEllipsis,
    hasEllipsis,
    tdOns,
    fixedHiddenColumn
  };
};
function renderColumn(args1) {
  var $seq = args1.$seq, $table = args1.$table, column = args1.column, columnIndex = args1.columnIndex;
  var h2 = args1.h, row2 = args1.row;
  var allAlign = $table.align, cellClassName = $table.cellClassName, columnKey = $table.columnKey, editConfig = $table.editConfig;
  var editRules = $table.editRules, editStore = $table.editStore, rowId = $table.rowId, rowSpan = $table.rowSpan, height2 = $table.height;
  var tableData = $table.tableData, validOpts2 = $table.validOpts, validStore = $table.validStore, validatedMap = $table.validatedMap, spanMethod = $table.spanMethod, columnStore = $table.columnStore;
  var _ref54 = {}, isDirty = _ref54.isDirty, _ref54$attrs = _ref54.attrs, attrs = _ref54$attrs === void 0 ? {
    "data-colid": column.id
  } : _ref54$attrs;
  var isMessageDefault = validOpts2.isMessageDefault, isMessageInline = validOpts2.isMessageInline;
  var actived = editStore.actived;
  var validated = validatedMap[column.id + "-" + row2[rowId]];
  var validError = validStore.row === row2 && validStore.column === column;
  var hasDefaultTip = editRules && (isMessageDefault ? height2 || tableData.length > 1 : isMessageInline);
  var align = column.align, className = column.className, editor = column.editor, showTip = column.showTip;
  var cellAlign = align || allAlign;
  var columnActived = editConfig && editor && actived.row === row2 && (actived.column === column || editConfig.mode === "row");
  var _setColumnEvents = setColumnEvents(args1), commonParams = _setColumnEvents.commonParams, args = _setColumnEvents.args, showTitle = _setColumnEvents.showTitle, showTooltip2 = _setColumnEvents.showTooltip, showEllipsis = _setColumnEvents.showEllipsis, _setColumnEvents$tdOn = _setColumnEvents.tdOns, tdOns = _setColumnEvents$tdOn === void 0 ? {} : _setColumnEvents$tdOn, hasEllipsis = _setColumnEvents.hasEllipsis, fixedHiddenColumn = _setColumnEvents.fixedHiddenColumn;
  var params = _extends({
    $seq,
    data: tableData
  }, commonParams);
  cellAlign = modifyCellAlign({
    cellAlign,
    column
  });
  if (!doSpan({
    attrs,
    params,
    rowSpan,
    spanMethod
  })) {
    return;
  }
  isDirty = isCellDirty({
    $table,
    column,
    editConfig,
    isDirty,
    row: row2
  });
  args = {
    attrs,
    cellAlign,
    cellClassName,
    className,
    column,
    columnActived,
    columnIndex,
    columnKey,
    editor,
    columnStore
  };
  Object.assign(args, {
    fixedHiddenColumn,
    hasEllipsis,
    isDirty,
    params,
    tdOns,
    validError,
    validated
  });
  var colProps = buildColumnProps(args);
  args = {
    column,
    h: h2,
    hasDefaultTip,
    params,
    row: row2,
    $table
  };
  Object.assign(args, {
    showEllipsis,
    showTip,
    showTitle,
    showTooltip: showTooltip2,
    validError,
    validStore
  });
  var colChildren = buildColumnChildren(args);
  return h2("td", colProps, colChildren);
}
function renderRowGroupTds(args) {
  var closeable = args.closeable, currentIcon = args.currentIcon, field = args.field, group = args.group, render18 = args.render;
  var row2 = args.row, tableColumn3 = args.tableColumn, targetColumn = args.targetColumn, tds = args.tds, title = args.title;
  for (var _index2 in tableColumn3) {
    if (Object.prototype.hasOwnProperty.call(tableColumn3, _index2)) {
      var column = tableColumn3[_index2];
      if (~["index", "selection"].indexOf(column.type)) {
        tds.push(createVNode("td", null, null));
      } else {
        var value = row2[field];
        var header = title || targetColumn && formatText(getFuncText(targetColumn.title)) || value;
        var groupTitleVNode = void 0;
        if (render18) {
          groupTitleVNode = render18(h, {
            value,
            header,
            children: group.children,
            expand: !group.fold
          });
        } else {
          groupTitleVNode = [createVNode("span", {
            "class": "row-group-title"
          }, [header]), ":" + value, createVNode("span", {
            "class": "tiny-badge"
          }, [group.children.length])];
        }
        tds.push(createVNode("td", {
          "colspan": tableColumn3.length - _index2,
          "class": "tiny-grid-body__column"
        }, [createVNode("div", {
          "class": "tiny-grid-cell-group"
        }, [[closeable ? currentIcon : null].concat(groupTitleVNode)])]));
        break;
      }
    }
  }
}
function renderRowGroupData(_ref55) {
  var groupData = _ref55.groupData, groupFolds = _ref55.groupFolds, row2 = _ref55.row, rowGroup = _ref55.rowGroup, rowid2 = _ref55.rowid, rows = _ref55.rows, tableColumn3 = _ref55.tableColumn;
  if (!groupData[rowid2]) {
    return;
  }
  var title = rowGroup.title, field = rowGroup.field, _rowGroup$closeable = rowGroup.closeable, closeable = _rowGroup$closeable === void 0 ? true : _rowGroup$closeable, render18 = rowGroup.render, className = rowGroup.className;
  var _ref56 = {}, _ref56$group = _ref56.group, group = _ref56$group === void 0 ? groupData[rowid2] : _ref56$group, _ref56$tds = _ref56.tds, tds = _ref56$tds === void 0 ? [] : _ref56$tds, _ref56$ChevronRight = _ref56.ChevronRight, ChevronRight = _ref56$ChevronRight === void 0 ? index$O() : _ref56$ChevronRight, _ref56$ChevronDown = _ref56.ChevronDown, ChevronDown2 = _ref56$ChevronDown === void 0 ? index$J() : _ref56$ChevronDown;
  var targetColumn = find_default(tableColumn3, function(col) {
    return col.property === field;
  });
  var currentIcon = group.fold ? createVNode(ChevronRight, {
    "class": "tiny-svg-size"
  }, null) : createVNode(ChevronDown2, {
    "class": "tiny-svg-size"
  }, null);
  renderRowGroupTds({
    closeable,
    currentIcon,
    field,
    group,
    render: render18,
    row: row2,
    tableColumn: tableColumn3,
    targetColumn,
    tds,
    title
  });
  rows.push(createVNode("tr", {
    "class": ["tiny-grid-body__row", "group", className],
    "onClick": function onClick() {
      if (closeable) {
        group.fold = !group.fold;
        group.children.forEach(function(row3) {
          var index232 = groupFolds.indexOf(row3);
          if (index232 > -1) {
            groupFolds.splice(index232, 1);
          } else {
            groupFolds.push(row3);
          }
        });
      }
    }
  }, [tds]));
}
function renderRow(args) {
  var _ref57;
  var $rowIndex = args.$rowIndex, $seq = args.$seq, $table = args.$table, _vm = args._vm, editStore = args.editStore;
  var groupFolds = args.groupFolds, h2 = args.h, row2 = args.row, rowActived = args.rowActived;
  var rowClassName = args.rowClassName, rowIndex = args.rowIndex, rowKey = args.rowKey, rowLevel = args.rowLevel, rowid2 = args.rowid, rows = args.rows;
  var selection = args.selection, seq = args.seq, tableColumn3 = args.tableColumn, trOn = args.trOn, treeConfig = args.treeConfig, isNotRenderRow = args.isNotRenderRow;
  if (isNotRenderRow) {
    return;
  }
  rows.push(h2("tr", {
    class: ["tiny-grid-body__row", (_ref57 = {}, _ref57["row__level-" + rowLevel] = treeConfig, _ref57[classMap.rowNew] = editStore.insertList.includes(row2), _ref57[classMap.rowSelected] = selection.includes(row2), _ref57["tiny-hide"] = groupFolds.includes(row2), _ref57[classMap.rowActived] = rowActived, _ref57), rowClassName ? isFunction_default(rowClassName) ? rowClassName({
      $table,
      $seq,
      seq,
      rowLevel,
      row: row2,
      rowIndex,
      $rowIndex
    }) : rowClassName : ""],
    attrs: {
      "data-rowid": rowid2
    },
    key: rowKey || treeConfig ? rowid2 : $rowIndex,
    on: trOn
  }, tableColumn3.map(function(column, $columnIndex) {
    var columnIndex = $table.getColumnIndex(column);
    var args1 = {
      $columnIndex,
      $rowIndex,
      $seq,
      $table,
      _vm,
      column,
      columnIndex
    };
    Object.assign(args1, {
      h: h2,
      row: row2,
      rowIndex,
      rowLevel,
      seq
    });
    return renderColumn(args1);
  })));
}
function renderRowAfter(_ref58) {
  var $table = _ref58.$table, h2 = _ref58.h, row2 = _ref58.row, rowIndex = _ref58.rowIndex, rows = _ref58.rows, tableData = _ref58.tableData;
  typeof $table.renderRowAfter === "function" && $table.renderRowAfter({
    rows,
    row: row2,
    data: tableData,
    rowIndex,
    renderColumn
  }, h2);
}
function renderRowExpanded(args) {
  var $table = args.$table, expandMethod = args.expandMethod, expandeds = args.expandeds, h2 = args.h, row2 = args.row, rowIndex = args.rowIndex;
  var rowLevel = args.rowLevel, rowid2 = args.rowid, rows = args.rows, seq = args.seq, tableColumn3 = args.tableColumn, trOn = args.trOn, treeConfig = args.treeConfig;
  if (expandeds.length && expandeds.includes(row2) && (typeof expandMethod === "function" ? expandMethod(row2, rowLevel) : true)) {
    var column = find_default(tableColumn3, function(column2) {
      return column2.type === "expand";
    });
    var columnIndex = $table.getColumnIndex(column);
    var cellStyle;
    if (treeConfig) {
      cellStyle = {
        paddingLeft: rowLevel * (treeConfig.indent || 16) + 30 + "px"
      };
    }
    if (column) {
      var renderData = {
        $table,
        seq,
        row: row2,
        rowIndex,
        column,
        columnIndex,
        level: rowLevel
      };
      rows.push(h2("tr", {
        class: "tiny-grid-body__expanded-row",
        key: "expand_" + rowid2,
        on: trOn
      }, [h2("td", {
        class: "tiny-grid-body__expanded-column",
        attrs: {
          colspan: tableColumn3.length
        }
      }, [h2("div", {
        class: "tiny-grid-body__expanded-cell",
        style: cellStyle
      }, [column.renderData(h2, renderData)])])]));
    }
  }
}
function renderRowTree(args, renderRows2) {
  var $seq = args.$seq, $table = args.$table, _vm = args._vm, h2 = args.h, row2 = args.row, rowLevel = args.rowLevel;
  var rows = args.rows, seq = args.seq, seqCount = args.seqCount, tableColumn3 = args.tableColumn, treeConfig = args.treeConfig, treeExpandeds = args.treeExpandeds;
  var scrollYLoad = $table.scrollYLoad;
  if (!treeConfig || !treeExpandeds.length) {
    return;
  }
  var childrenKey = getTreeChildrenKey({
    scrollYLoad,
    treeConfig
  });
  var rowChildren = row2[childrenKey];
  if (!rowChildren || !rowChildren.length || !~treeExpandeds.indexOf(row2)) {
    return;
  }
  var args1 = {
    h: h2,
    _vm,
    $table,
    // $seq 树表特有序号：1 --> 1.1
    $seq: $seq ? $seq + "." + seq : "" + seq,
    rowLevel: rowLevel + 1,
    tableData: rowChildren,
    tableColumn: tableColumn3,
    seqCount
  };
  rows.push.apply(rows, renderRows2(args1));
}
function renderRows(_ref59) {
  var h2 = _ref59.h, _vm = _ref59._vm, $table = _ref59.$table, $seq = _ref59.$seq, rowLevel = _ref59.rowLevel, tableData = _ref59.tableData, tableColumn3 = _ref59.tableColumn, seqCount = _ref59.seqCount;
  var rowKey = $table.rowKey, rowClassName = $table.rowClassName, treeConfig = $table.treeConfig, treeExpandeds = $table.treeExpandeds, groupFolds = $table.groupFolds;
  var groupData = $table.groupData, scrollYLoad = $table.scrollYLoad, scrollYStore = $table.scrollYStore, editConfig = $table.editConfig, editStore = $table.editStore;
  var _$table$expandConfig2 = $table.expandConfig, expandConfig = _$table$expandConfig2 === void 0 ? {} : _$table$expandConfig2, expandeds = $table.expandeds, selection = $table.selection, rowGroup = $table.rowGroup;
  var rows = [];
  var expandMethod = expandConfig.activeMethod;
  var startIndex = scrollYStore.startIndex;
  var isOrdered = treeConfig ? Boolean(treeConfig.ordered) : false;
  seqCount = seqCount || {
    value: 0
  };
  var treeShowKey = getTreeShowKey({
    scrollYLoad,
    treeConfig
  });
  var _ref60 = treeConfig || {}, hideMethod = _ref60.hideMethod;
  tableData.forEach(function(row2, $rowIndex) {
    var trOn = {};
    var rowIndex = $rowIndex;
    var actived = editStore.actived;
    var rowActived = editConfig && actived.row === row2;
    var isNotRenderRow = treeShowKey && !row2[treeShowKey] || hideMethod && hideMethod(row2, rowLevel);
    if (!isNotRenderRow) {
      seqCount.value = seqCount.value + 1;
    }
    var seq = isOrdered ? seqCount.value : rowIndex + 1;
    if (scrollYLoad) {
      seq += startIndex;
    }
    rowIndex = $table.getRowIndex(row2);
    var rowid2 = getRowid($table, row2);
    renderRowGroupData({
      groupData,
      groupFolds,
      row: row2,
      rowGroup,
      rowid: rowid2,
      rows,
      tableColumn: tableColumn3
    });
    var args = {
      $rowIndex,
      $seq,
      $table,
      _vm,
      editStore,
      groupFolds,
      h: h2,
      row: row2,
      rowActived
    };
    Object.assign(args, {
      rowClassName,
      rowIndex,
      rowKey,
      rowLevel,
      rowid: rowid2,
      rows,
      selection,
      seq
    });
    Object.assign(args, {
      tableColumn: tableColumn3,
      trOn,
      treeConfig,
      isNotRenderRow
    });
    renderRow(args);
    renderRowAfter({
      $table,
      h: h2,
      row: row2,
      rowIndex,
      rows,
      tableData
    });
    args = {
      $table,
      expandMethod,
      expandeds,
      h: h2,
      row: row2,
      rowIndex,
      rowLevel
    };
    Object.assign(args, {
      rowid: rowid2,
      rows,
      seq,
      tableColumn: tableColumn3,
      trOn,
      treeConfig
    });
    renderRowExpanded(args);
    args = {
      $seq,
      $table,
      _vm,
      h: h2,
      row: row2,
      rowLevel,
      rows
    };
    Object.assign(args, {
      seq,
      seqCount,
      tableColumn: tableColumn3,
      treeConfig,
      treeExpandeds
    });
    renderRowTree(args, renderRows);
  });
  return rows;
}
function renderDefEmpty(h2) {
  return [h2("p", {
    class: "tiny-grid__empty-img"
  }), h2("span", {
    class: "tiny-grid__empty-text"
  }, GlobalConfig$1.i18n("ui.grid.emptyText"))];
}
var syncHeaderAndFooterScroll = function syncHeaderAndFooterScroll2(_ref61) {
  var bodyElem = _ref61.bodyElem, footerElem = _ref61.footerElem, headerElem = _ref61.headerElem, isX = _ref61.isX;
  if (isX && headerElem) {
    headerElem.scrollLeft = bodyElem.scrollLeft;
  }
  if (isX && footerElem) {
    footerElem.scrollLeft = bodyElem.scrollLeft;
  }
};
function doScrollLoad(_ref62) {
  var $table = _ref62.$table, _vm = _ref62._vm, bodyElem = _ref62.bodyElem, event = _ref62.event, headerElem = _ref62.headerElem, isX = _ref62.isX, isY = _ref62.isY, scrollLeft = _ref62.scrollLeft, scrollXLoad = _ref62.scrollXLoad, scrollYLoad = _ref62.scrollYLoad;
  var isScrollX = scrollXLoad && isX;
  if (isScrollX) {
    $table.triggerScrollXEvent(event);
  }
  if (isScrollX && headerElem && scrollLeft + bodyElem.clientWidth >= bodyElem.scrollWidth) {
    _vm.$nextTick(function() {
      if (bodyElem.scrollLeft !== headerElem.scrollLeft) {
        headerElem.scrollLeft = bodyElem.scrollLeft;
      }
    });
  }
  if (scrollYLoad && isY) {
    $table.triggerScrollYEvent(event);
  }
}
function renderEmptyBlock(_ref63) {
  var $slots = _ref63.$slots, $table = _ref63.$table, _vm = _ref63._vm, isCenterCls = _ref63.isCenterCls, renderEmpty = _ref63.renderEmpty, tableData = _ref63.tableData;
  return h("div", {
    class: "tiny-grid__empty-block" + (tableData.length ? "" : " is__visible") + " " + isCenterCls,
    ref: "emptyBlock"
  }, $slots.empty ? $slots.empty.call(_vm, {
    $table
  }, h) : renderEmpty ? [renderEmpty(h, $table)] : renderDefEmpty(h));
}
function renderBorders(_ref64) {
  var keyboardConfig = _ref64.keyboardConfig, mouseConfig = _ref64.mouseConfig;
  var res = null;
  if (mouseConfig.checked || keyboardConfig.isCut) {
    res = h("div", {
      class: "tiny-grid__borders"
    }, [mouseConfig.checked ? renderBorder(h, "check") : null, keyboardConfig.isCut ? renderBorder(h, "copy") : null]);
  }
  return res;
}
function renderTable(_ref65) {
  var $table = _ref65.$table, _vm = _ref65._vm, tableColumn3 = _ref65.tableColumn, tableData = _ref65.tableData, tableLayout = _ref65.tableLayout;
  return h("table", {
    class: "tiny-grid__body",
    style: {
      tableLayout
    },
    attrs: {
      cellspacing: 0,
      cellpadding: 0,
      border: 0
    },
    ref: "table"
  }, [
    // 渲染colgroup标签，设置表格列宽度，保证表头的表格和表体的表格每列宽相同
    h("colgroup", {
      ref: "colgroup"
    }, tableColumn3.map(function(column, columnIndex) {
      return h("col", {
        attrs: {
          name: column.id
        },
        key: columnIndex
      });
    })),
    // 表格每次数据改变都会触发renderRow重新执行，会造成性能损失，此处待优化
    h("tbody", {
      ref: "tbody"
    }, renderRows({
      h,
      _vm,
      $table,
      $seq: "",
      rowLevel: 0,
      tableData,
      tableColumn: tableColumn3
    }))
  ]);
}
function renderYSpace(_ref66) {
  var scrollLoad = _ref66.scrollLoad;
  return h("div", {
    class: "tiny-grid-body__y-space visual",
    ref: "ySpace"
  }, [scrollLoad ? h("div", {
    class: "tiny-grid-body__y-scrollbar"
  }) : [null]]);
}
var Body = /* @__PURE__ */ defineComponent({
  name: $prefix + "GridBody",
  props: {
    collectColumn: Array,
    fixedColumn: Array,
    isGroup: Boolean,
    size: String,
    tableColumn: Array,
    tableData: Array,
    visibleColumn: Array
  },
  mounted: function mounted3() {
    var $el = this.$el, $table = this.$parent, $refs = this.$refs;
    var elemStore = $table.elemStore;
    var keyPrefix = "main-body-";
    elemStore[keyPrefix + "wrapper"] = $el;
    elemStore[keyPrefix + "table"] = $refs.table;
    elemStore[keyPrefix + "colgroup"] = $refs.colgroup;
    elemStore[keyPrefix + "list"] = $refs.tbody;
    elemStore[keyPrefix + "xSpace"] = $refs.xSpace;
    elemStore[keyPrefix + "ySpace"] = $refs.ySpace;
    elemStore[keyPrefix + "emptyBlock"] = $refs.emptyBlock;
    $el.onscroll = this.scrollEvent;
    $el._onscroll = this.scrollEvent;
  },
  updated: function updated() {
    var $table = this.$parent, fixedType = this.fixedType;
    !fixedType && $table.updateTableBodyHeight();
  },
  setup: function setup32(props2, _ref67) {
    var slots = _ref67.slots;
    onBeforeUnmount(function() {
      var table = getCurrentInstance().proxy;
      table.$el._onscroll = null;
      table.$el.onscroll = null;
    });
    return {
      slots
    };
  },
  render: function render32() {
    var _ref68;
    var $table = this.$parent;
    var $grid = $table.$grid, isCenterEmpty = $table.isCenterEmpty, _$table$keyboardConfi = $table.keyboardConfig, keyboardConfig = _$table$keyboardConfi === void 0 ? {} : _$table$keyboardConfi, _$table$mouseConfig3 = $table.mouseConfig, mouseConfig = _$table$mouseConfig3 === void 0 ? {} : _$table$mouseConfig3, renderEmpty = $table.renderEmpty;
    var scrollLoad = $table.scrollLoad, tableColumn3 = $table.tableColumn, tableData = $table.tableData, tableLayout = $table.tableLayout;
    var $slots = $grid.slots;
    var isCenterCls = isCenterEmpty ? "is__center" : "";
    return h("div", {
      ref: "body",
      class: ["tiny-grid__body-wrapper", "body__wrapper", (_ref68 = {}, _ref68[classMap.isScrollload] = scrollLoad, _ref68)]
    }, [
      // 表格主体内容x轴方向虚拟滚动条占位元素
      h("div", {
        class: "tiny-grid-body__x-space",
        ref: "xSpace"
      }),
      renderYSpace({
        scrollLoad
      }),
      renderTable({
        $table,
        _vm: this,
        tableColumn: tableColumn3,
        tableData,
        tableLayout
      }),
      // 开启鼠标或者配置项选中边框线
      renderBorders({
        keyboardConfig,
        mouseConfig
      }),
      // 空数据
      renderEmptyBlock({
        $slots,
        $table,
        _vm: this,
        isCenterCls,
        renderEmpty,
        tableData
      })
    ]);
  },
  methods: {
    // 滚动处理，如果存在列固定右侧，同步更新滚动状态
    scrollEvent: function scrollEvent2(event) {
      var $table = this.$parent;
      var $refs = $table.$refs, lastScrollLeft = $table.lastScrollLeft, lastScrollTop = $table.lastScrollTop, scrollXLoad = $table.scrollXLoad, scrollYLoad = $table.scrollYLoad, columnStore = $table.columnStore;
      var leftList = columnStore.leftList, rightList = columnStore.rightList;
      var tableBody = $refs.tableBody, tableFooter = $refs.tableFooter, tableHeader = $refs.tableHeader;
      var headerElem = tableHeader ? tableHeader.$el : null;
      var bodyElem = tableBody.$el;
      var footerElem = tableFooter ? tableFooter.$el : null;
      var scrollLeft = bodyElem.scrollLeft;
      var scrollTop = bodyElem.scrollTop;
      var isY = scrollTop !== lastScrollTop;
      var isX = scrollLeft !== lastScrollLeft;
      $table.lastScrollTime = Date.now();
      $table.lastScrollLeft = scrollLeft;
      $table.lastScrollTop = scrollTop;
      $table.scrollDirection = isX ? "X" : "Y";
      syncHeaderAndFooterScroll({
        bodyElem,
        footerElem,
        headerElem,
        isX
      });
      if (leftList.length || rightList.length) {
        generateFixedClassName({
          $table,
          bodyElem,
          leftList,
          rightList
        });
      }
      doScrollLoad({
        $table,
        _vm: this,
        bodyElem,
        event,
        headerElem,
        isX,
        isY,
        scrollLeft,
        scrollXLoad,
        scrollYLoad
      });
      emitEvent$1($table, "scroll", [{
        type: "body",
        scrollTop,
        scrollLeft,
        isX,
        isY,
        $table
      }, event]);
    }
  }
});
Body.install = function(Vue) {
  Vue.component(Body.name, Body);
};
var Radio = defineComponent({
  name: $prefix + "GridRadio",
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: [String, Number],
    label: [String, Number],
    disabled: Boolean,
    name: String,
    size: String
  },
  computed: {
    vSize: function vSize() {
      return this.size || this.$parent.size || this.$parent.vSize;
    }
  },
  setup: function setup42(props2, _ref69) {
    var slots = _ref69.slots;
    return {
      slots
    };
  },
  render: function render42() {
    var _ref70, _this2 = this;
    var disabled = this.disabled, vSize5 = this.vSize, modelValue = this.modelValue, label = this.label, name = this.name;
    var $slots = this.slots;
    var disableClass = "disabled";
    return h("label", {
      class: ["tiny-grid-radio", (_ref70 = {}, _ref70["size__" + vSize5] = vSize5, _ref70["is__" + disableClass] = disabled, _ref70)]
    }, [h("input", {
      attrs: {
        type: "radio",
        name,
        disabled
      },
      domProps: {
        checked: modelValue === label
      },
      on: {
        change: function change(event) {
          if (!disabled) {
            _this2.$emit("update:modelValue", label);
            _this2.$emit("change", label, event);
          }
        }
      }
    }), h("span", {
      class: "tiny-grid-radio__icon"
    }, [h(index$R(), {
      class: ["tiny-svg-size", "icon-radio"]
    }), h(index$S(), {
      class: ["tiny-svg-size", "icon-radio-selected"]
    })]), $slots.default ? h("span", {
      class: "tiny-grid-radio__label"
    }, $slots.default()) : null]);
  }
});
Radio.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
$install(Radio);
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var renderInputArgs = function renderInputArgs2(_ref71) {
  var _vm = _ref71._vm, inputFilter = _ref71.inputFilter;
  var isAddbyProgram = false;
  if (typeof inputFilter.relations_addby !== "undefined") {
    isAddbyProgram = inputFilter.relations_addby === "program";
  }
  var inputRelations;
  if (isAddbyProgram) {
    inputRelations = inputFilter.relations_backup;
  } else {
    inputRelations = inputFilter.relations;
  }
  if (!inputRelations) {
    inputRelations = [{
      label: _vm.i18n("ui.grid.filter.prefix"),
      value: "startwith"
    }, {
      label: _vm.i18n("ui.grid.filter.equal"),
      value: "equals"
    }, {
      label: _vm.i18n("ui.grid.filter.include"),
      value: "contains"
    }];
  }
  return {
    isAddbyProgram,
    inputRelations
  };
};
var renderInputProps = function renderInputProps2(_ref72) {
  var _on3;
  var InputComponent = _ref72.InputComponent, condition2 = _ref72.condition, event = _ref72.event, inputFilter = _ref72.inputFilter, isNativeInput = _ref72.isNativeInput, prop = _ref72.prop;
  var inputProps = {
    style: "width:100%",
    on: (_on3 = {}, _on3[event] = function(value) {
      condition2.input = value && value.target ? value.target.value : value;
    }, _on3),
    ref: "filterInputComponent"
  };
  if (isNativeInput) {
    var _domProps;
    inputProps = Object.assign(inputProps, {
      domProps: (_domProps = {}, _domProps[prop] = condition2.input, _domProps),
      attrs: _extends({}, inputFilter.attrs)
    });
  } else {
    var _extends3;
    InputComponent = toRaw(InputComponent);
    inputProps = Object.assign(inputProps, {
      props: _extends({}, inputFilter.attrs, (_extends3 = {}, _extends3[prop] = condition2.input, _extends3))
    });
  }
  return {
    inputProps,
    InputComponent
  };
};
var iconRender = function iconRender2(checked, index232, halfChecked) {
  var CheckedSur = index$U();
  var Check = index$V();
  var HalfCheck = index$W();
  var props2 = {
    class: "tiny-svg-size",
    tabindex: index232
  };
  if (typeof halfChecked === "undefined") {
    return checked ? createVNode(CheckedSur, mergeProps(props2, {
      "class": "is-checked"
    }), null) : createVNode(Check, props2, null);
  } else {
    return checked ? createVNode(CheckedSur, mergeProps(props2, {
      "class": "is-checked"
    }), null) : halfChecked ? createVNode(HalfCheck, mergeProps(props2, {
      "class": "is-checked"
    }), null) : createVNode(Check, props2, null);
  }
};
var renderEnumableOptions = function renderEnumableOptions2(_ref73) {
  var iconRender3 = _ref73.iconRender, _vm = _ref73._vm, filterStore = _ref73.filterStore, selectAll = _ref73.selectAll, searchable = _ref73.searchable;
  var resultList = filterStore.options.filter(function(value) {
    var _value$label;
    return (_value$label = value.label) == null ? void 0 : _value$label.toString().includes(filterStore.searchValue);
  });
  if (resultList.length) {
    var filterList = resultList.map(function(item, index232) {
      return createVNode("li", {
        "class": ["tiny-grid__filter-option", {
          selected: item.checked
        }],
        "onClick": function onClick() {
          if (!filterStore.multi) {
            filterStore.options.forEach(function(option) {
              option.checked = option === item;
            });
            _vm.filterEnum();
          } else {
            item.checked = !item.checked;
          }
        }
      }, [filterStore.multi ? iconRender3(item.checked, index232 + 1) : null, createVNode("a", {
        "title": item.label
      }, [createTextVNode(" "), item.label, createTextVNode(" ")])]);
    });
    var isShowAllSelect = selectAll && (!filterStore.multi || !searchable && filterStore.multi);
    return isShowAllSelect ? [createVNode("li", {
      "class": "tiny-grid__filter-option",
      "onClick": function onClick() {
        var isAllSelected = filterStore.options.every(function(item) {
          return item.checked;
        });
        filterStore.options.forEach(function(option) {
          option.checked = !isAllSelected;
        });
        if (!filterStore.multi) {
          _vm.filterEnum();
        }
      }
    }, [filterStore.multi ? iconRender3(filterStore.options.every(function(item) {
      return item.checked;
    }), 0, filterStore.options.some(function(item) {
      return item.checked;
    })) : null, createVNode("a", {
      "title": _vm.i18n("ui.grid.filter.allSelect")
    }, [createTextVNode(" "), _vm.i18n("ui.grid.filter.allSelect")])])].concat(filterList) : filterList;
  } else {
    return [createVNode("li", {
      "class": "tiny-grid__filter-empty"
    }, [_vm.i18n("ui.grid.emptyText")])];
  }
};
var Panel$1 = /* @__PURE__ */ defineComponent({
  name: $prefix + "GridFilter",
  props: {
    filterStore: Object,
    optimizeOpts: Object
  },
  inject: {
    $grid: {
      default: null
    }
  },
  watch: {
    id: function id() {
      this.updatePanel();
    },
    visible: function visible() {
      this.showAdvance = false;
      this.updatePanel();
    }
  },
  data: function data22() {
    return {
      popperJS: null,
      showAdvance: false,
      showAdvItems: false,
      listPopper: null
    };
  },
  render: function render52() {
    var _this3 = this, _ref74;
    var filterStore = this.filterStore, $grid = this.$grid, $table = this.$parent, optimizeOpts2 = this.optimizeOpts, renderInput2 = this.renderInput, renderEnumable2 = this.renderEnumable, renderDefault2 = this.renderDefault, renderExtends2 = this.renderExtends, renderBase2 = this.renderBase, renderSimple2 = this.renderSimple;
    var args = filterStore.args, column = filterStore.column, options = filterStore.options, _filterStore$layout = filterStore.layout, layout = _filterStore$layout === void 0 ? "input,enum,default,extends,base" : _filterStore$layout;
    var layoutMap = {
      input: renderInput2,
      enum: renderEnumable2,
      default: renderDefault2,
      extends: renderExtends2,
      base: renderBase2,
      simple: renderSimple2
    };
    var quickFilter = layout.split(",").map(function(item) {
      return layoutMap[item] && layoutMap[item].call(_this3);
    });
    var map2 = {
      filterActive: "filter__active"
    };
    return createVNode("div", {
      "class": ["tiny-grid__wrapper", "tiny-grid__filter-wrapper", "filter__prevent-default", (_ref74 = {
        "tiny-grid__animat": optimizeOpts2.animat
      }, _ref74[map2.filterActive] = filterStore.visible, _ref74["tiny-grid__filter-simple"] = layout.includes("simple"), _ref74["filter-wrapper-saas"] = $table.isThemeSaas, _ref74)],
      "style": filterStore.style
    }, [filterStore.visible ? createVNode("div", {
      "class": ["tiny-grid__filter-body", {
        "show-addvance": this.showAdvance
      }]
    }, [column.slots && column.slots.filter ? column.slots.filter({
      $grid,
      values: options,
      args,
      context: this
    }) : quickFilter]) : null]);
  },
  computed: {
    condition: function condition() {
      return this.filterStore.condition;
    },
    visible: function visible2() {
      return this.filterStore.visible;
    },
    id: function id2() {
      return this.filterStore.id;
    },
    i18n: function i18n2() {
      return t || this.$t;
    }
  },
  methods: {
    updatePanel: debounce_default(20, function() {
      var _this4 = this;
      this.correctRelations();
      var inputFilter = this.filterStore.inputFilter;
      if (inputFilter) {
        var relations = inputFilter.relations;
        if (inputFilter !== true && !relations.filter(function(r) {
          return r.value === _this4.condition.relation;
        }).length) {
          this.resetInput();
        }
      }
      this.popperJS && this.popperJS.destroy() && (this.popperJS = null);
      this.$nextTick(function() {
        var _this4$filterStore = _this4.filterStore, targetElemParentTr = _this4$filterStore.targetElemParentTr, id3 = _this4$filterStore.id;
        var reference = targetElemParentTr && targetElemParentTr.querySelector("svg.tiny-grid-filter__btn." + id3);
        var popper = _this4.$el;
        popper.style.zIndex = popup_manager_default.nextZIndex();
        if (_this4.visible) {
          _this4.popperJS = new popper_default(reference, popper, {
            placement: "bottom-end"
          }).update();
        }
      });
    }),
    // 基础清除选项
    renderBase: function renderBase() {
      return createVNode("ul", {
        "class": "tiny-grid__filter-panel filter-panel__clear"
      }, [createVNode("li", {
        "class": "tiny-grid__filter-option",
        "onClick": this.resetFilter
      }, [createVNode("a", {
        "class": "item-content"
      }, [this.i18n("ui.grid.filter.clear")])]), createVNode("li", {
        "class": "tiny-grid__filter-option",
        "onClick": this.clearFilter
      }, [createVNode("a", {
        "class": "item-content"
      }, [this.i18n("ui.grid.filter.clearAll")])])]);
    },
    // 设置筛选条件为空和不为空
    renderDefault: function renderDefault() {
      var _this5 = this;
      var condition2 = this.condition, filterStore = this.filterStore;
      if (!filterStore.defaultFilter) {
        return null;
      }
      return createVNode("ul", {
        "class": "tiny-grid__filter-panel filter-panel__default"
      }, [createVNode("li", {
        "class": ["tiny-grid__filter-option", {
          active: condition2.empty === true
        }],
        "onClick": function onClick() {
          _this5.filterNull(true);
        }
      }, [createVNode("a", {
        "class": "item-content"
      }, [this.i18n("ui.grid.filter.empty")])]), createVNode("li", {
        "class": ["tiny-grid__filter-option", {
          active: condition2.empty === false
        }],
        "onClick": function onClick() {
          _this5.filterNull(false);
        }
      }, [createVNode("a", {
        "class": "item-content"
      }, [this.i18n("ui.grid.filter.unempty")])])]);
    },
    // 筛选扩展项
    renderExtends: function renderExtends() {
      var _this6 = this;
      var filterStore = this.filterStore;
      if (!filterStore.extends) {
        return null;
      }
      return createVNode("ul", {
        "class": "tiny-grid__filter-panel filter-panel__clear"
      }, [filterStore.extends.map(function(item) {
        return createVNode("li", {
          "class": "tiny-grid__filter-option",
          "onClick": function onClick() {
            _this6.filterExtends(item);
          }
        }, [createVNode("a", {
          "class": "item-content"
        }, [item.label])]);
      })]);
    },
    // 输入筛选项
    renderInput: function renderInput() {
      var _slot, _slot2, _slot3;
      this.correctRelations();
      var condition2 = this.condition, filterStore = this.filterStore;
      var inputFilter = filterStore.inputFilter;
      if (!inputFilter)
        return null;
      var _renderInputArgs = renderInputArgs({
        _vm: this,
        inputFilter
      }), isAddbyProgram = _renderInputArgs.isAddbyProgram, inputRelations = _renderInputArgs.inputRelations;
      var InputComponent = inputFilter.component || "input";
      var isNativeInput = InputComponent === "input";
      var model = InputComponent.model || {};
      var prop = isNativeInput ? "value" : model.prop || "modelValue";
      var event = isNativeInput ? "input" : model.event || "update:modelValue";
      var ret = renderInputProps({
        InputComponent,
        condition: condition2,
        event,
        inputFilter,
        isNativeInput,
        prop
      });
      var inputProps = ret.inputProps;
      InputComponent = ret.InputComponent;
      return createVNode("ul", {
        "class": "tiny-grid__filter-panel"
      }, [isAddbyProgram ? null : createVNode("li", {
        "class": "tiny-grid__filter-option filter-option__radios"
      }, [inputRelations.map(function(_ref75) {
        var label = _ref75.label, value = _ref75.value, method = _ref75.method;
        return createVNode(Radio, {
          "modelValue": condition2.relation,
          "label": value,
          "onChange": function onChange(value2) {
            condition2.relation = value2;
            condition2.method = method || function() {
              return true;
            };
          }
        }, _isSlot(label) ? label : {
          default: function _default252() {
            return [label];
          }
        });
      })]), createVNode("li", {
        "class": "filter-option__input"
      }, [h(InputComponent, inputProps)]), createVNode("li", {
        "class": "tiny-grid__filter-option filter-option__btns"
      }, [createVNode(Button$1, {
        "type": "primary",
        "onClick": this.filterInput
      }, _isSlot(_slot = this.i18n("ui.base.confirm")) ? _slot : {
        default: function _default252() {
          return [_slot];
        }
      }), createVNode(Button$1, {
        "onClick": this.resetInput
      }, _isSlot(_slot2 = this.i18n("ui.base.reset")) ? _slot2 : {
        default: function _default252() {
          return [_slot2];
        }
      }), createVNode(Button$1, {
        "onClick": this.close
      }, _isSlot(_slot3 = this.i18n("ui.base.cancel")) ? _slot3 : {
        default: function _default252() {
          return [_slot3];
        }
      })])]);
    },
    // 选择筛选项
    renderEnumable: function renderEnumable() {
      var _slot4, _slot5;
      var filterStore = this.filterStore;
      if (!filterStore.enumable)
        return null;
      return createVNode("div", {
        "class": "tiny-grid__filter-panel filter-panel__enum"
      }, [createVNode("ul", {
        "class": "tiny-grid__filter-options"
      }, [renderEnumableOptions({
        iconRender,
        _vm: this,
        filterStore
      })]), filterStore.multi ? createVNode("div", {
        "class": "tiny-grid__filter-option filter-option__btns"
      }, [createVNode(Button$1, {
        "type": "primary",
        "onClick": this.filterEnum
      }, _isSlot(_slot4 = this.i18n("ui.base.confirm")) ? _slot4 : {
        default: function _default252() {
          return [_slot4];
        }
      }), createVNode(Button$1, {
        "onClick": function onClick() {
          filterStore.visible = false;
        }
      }, _isSlot(_slot5 = this.i18n("ui.base.cancel")) ? _slot5 : {
        default: function _default252() {
          return [_slot5];
        }
      })]) : null]);
    },
    // 简化版筛选按钮对齐，对齐管理侧规范
    renderSimple: function renderSimple() {
      var filterStore = this.filterStore;
      var simpleFilter = filterStore.simpleFilter;
      if (!simpleFilter) {
        return null;
      }
      if (simpleFilter.isDatetime) {
        var _simpleFilter$datetim, _simpleFilter$datetim2, _simpleFilter$datetim3, _simpleFilter$datetim4, _simpleFilter$datetim5, _simpleFilter$datetim6;
        var _slot6, _slot7;
        var DatePickComponents = simpleFilter != null && (_simpleFilter$datetim = simpleFilter.datetimeConfig) != null && _simpleFilter$datetim.component ? toRaw(simpleFilter.datetimeConfig.component) : null;
        var _format = simpleFilter == null ? void 0 : (_simpleFilter$datetim2 = simpleFilter.datetimeConfig) == null ? void 0 : _simpleFilter$datetim2.format;
        var valueFormat = simpleFilter == null ? void 0 : (_simpleFilter$datetim3 = simpleFilter.datetimeConfig) == null ? void 0 : _simpleFilter$datetim3.valueFormat;
        var type = simpleFilter == null ? void 0 : (_simpleFilter$datetim4 = simpleFilter.datetimeConfig) == null ? void 0 : _simpleFilter$datetim4.type;
        var max = simpleFilter == null ? void 0 : (_simpleFilter$datetim5 = simpleFilter.datetimeConfig) == null ? void 0 : _simpleFilter$datetim5.max;
        var min = simpleFilter == null ? void 0 : (_simpleFilter$datetim6 = simpleFilter.datetimeConfig) == null ? void 0 : _simpleFilter$datetim6.min;
        var pickerOptions = {
          disabledDate: function disabledDate(time2) {
            return time2.getTime() < min || time2.getTime() > max;
          }
        };
        return createVNode("div", {
          "class": "tiny-grid__filter-panel filter-panel__enum filter-panel__simple"
        }, [createVNode("div", {
          "class": "tiny-grid__filter-date-title"
        }, [this.i18n("ui.grid.filter.dateTips")]), createVNode("ul", {
          "class": "tiny-grid__filter-date"
        }, [createVNode("li", {
          "class": "tiny-grid__filter-date-item"
        }, [createVNode("span", null, [this.i18n("ui.grid.filter.startDate")]), createVNode(DatePickComponents, {
          "format": _format,
          "type": type,
          "value-format": valueFormat,
          "picker-options": pickerOptions,
          "class": "tiny-grid__filter-date-pick",
          "onChange": function onChange(value) {
            if (filterStore.datetimeConfig) {
              filterStore.datetimeConfig.startDate = value;
            }
          },
          "modelValue": filterStore.startDate,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return filterStore.startDate = $event;
          }
        }, null)]), createVNode("li", {
          "class": "tiny-grid__filter-date-item"
        }, [createVNode("span", null, [this.i18n("ui.grid.filter.endDate")]), createVNode(DatePickComponents, {
          "format": _format,
          "type": type,
          "value-format": valueFormat,
          "picker-options": pickerOptions,
          "class": "tiny-grid__filter-date-pick",
          "modelValue": filterStore.endDate,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return filterStore.endDate = $event;
          },
          "onChange": function onChange(value) {
            if (filterStore.datetimeConfig) {
              filterStore.datetimeConfig.endDate = value;
            }
          }
        }, null)])]), createVNode("div", {
          "class": "tiny-grid__filter-option filter-option__btns filter-option__date-button"
        }, [createVNode(Button$1, {
          "size": "mini",
          "onClick": this.filterDate
        }, _isSlot(_slot6 = this.i18n("ui.base.confirm")) ? _slot6 : {
          default: function _default252() {
            return [_slot6];
          }
        }), createVNode(Button$1, {
          "size": "mini",
          "onClick": function onClick() {
            filterStore.visible = false;
          }
        }, _isSlot(_slot7 = this.i18n("ui.base.cancel")) ? _slot7 : {
          default: function _default252() {
            return [_slot7];
          }
        })])]);
      } else {
        var _simpleFilter$searchC;
        var _slot8, _slot9;
        var IconSearch = index$T();
        var InputComponents = simpleFilter != null && (_simpleFilter$searchC = simpleFilter.searchConfig) != null && _simpleFilter$searchC.component ? toRaw(simpleFilter.searchConfig.component) : null;
        return createVNode("div", {
          "class": "tiny-grid__filter-panel filter-panel__enum filter-panel__simple"
        }, [InputComponents ? createVNode(InputComponents, {
          "modelValue": filterStore.searchValue,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return filterStore.searchValue = $event;
          },
          "onChange": function onChange(value) {
            if (filterStore.searchConfig) {
              filterStore.searchConfig.searchValue = value;
            }
          },
          "class": "tiny-grid__filter-search",
          "clearable": true
        }, {
          suffix: function suffix() {
            return createVNode(IconSearch, null, null);
          }
        }) : null, createVNode("ul", {
          "class": "tiny-grid__filter-options"
        }, [renderEnumableOptions({
          iconRender,
          _vm: this,
          filterStore,
          selectAll: simpleFilter.selectAll,
          searchable: Boolean(InputComponents)
        })]), filterStore.multi ? createVNode("div", {
          "class": "tiny-grid__filter-option filter-option__btns"
        }, [createVNode(Button$1, {
          "size": "mini",
          "onClick": this.filterEnum
        }, _isSlot(_slot8 = this.i18n("ui.base.confirm")) ? _slot8 : {
          default: function _default252() {
            return [_slot8];
          }
        }), createVNode(Button$1, {
          "size": "mini",
          "onClick": function onClick() {
            filterStore.visible = false;
          }
        }, _isSlot(_slot9 = this.i18n("ui.base.cancel")) ? _slot9 : {
          default: function _default252() {
            return [_slot9];
          }
        })]) : null]);
      }
    },
    renderSlot: function renderSlot2(h2) {
      var $table = this.$parent, filterStore = this.filterStore;
      var args = filterStore.args, column = filterStore.column;
      var slots = column.slots;
      if (slots && slots.filter) {
        return slots.filter.call($table, _extends({
          $table,
          context: this
        }, args), h2);
      }
    },
    // 全部筛选事件
    filterCheckAllEvent: function filterCheckAllEvent(event, value) {
      var filterStore = this.filterStore;
      filterStore.options.forEach(function(item) {
        item.checked = value;
      });
      filterStore.isAllSelected = value;
      filterStore.isIndeterminate = false;
    },
    // 筛选发生改变 check 是否检查默认值的有效性，当自定义relations时，需要检查
    resetInput: function resetInput() {
      this.correctRelations();
      var _this$filterStore = this.filterStore, inputFilter = _this$filterStore.inputFilter, onResetInputFilter = _this$filterStore.onResetInputFilter;
      if (inputFilter) {
        var _this$filterStore$inp = this.filterStore.inputFilter, relations = _this$filterStore$inp.relations, relation = _this$filterStore$inp.relation;
        this.condition.input = "";
        if (typeof onResetInputFilter === "function") {
          onResetInputFilter(this.$refs.filterInputComponent);
        }
        var defaultrelation = "equals";
        var relationValues;
        var relationValue;
        if (Array.isArray(relations) && relations.length) {
          this.condition.method = relations[0].method;
          defaultrelation = relations[0].value || "equals";
          for (var i = 0; i < relations.length; i++) {
            if (relations[i].value === "equals") {
              defaultrelation = "equals";
              break;
            }
          }
          relationValues = relations.map(function(r) {
            return r.value;
          });
          if (relation && ~relationValues.indexOf(relation)) {
            relationValue = relation;
          }
        }
        this.condition.relation = relationValue || defaultrelation;
      }
    },
    // 确认筛选
    confirmFilter: function confirmFilter(type) {
      var column = this.filterStore.column;
      this.condition.type = type;
      column.filter.condition = extend(true, {}, this.condition);
      this.$parent.confirmFilterEvent();
    },
    // 对外的暴露自定义提交方法
    commitFilter: function commitFilter() {
      var column = this.filterStore.column;
      column.filter.condition.type = "custom";
      this.$parent.confirmFilterEvent();
    },
    // 重置当前列筛选
    resetFilter: function resetFilter() {
      this.condition.value = null;
      this.condition.input = "";
      this.condition.empty = null;
      this.condition.value = [];
      this.condition.type = null;
      this.resetInput();
      this.confirmFilter();
    },
    // 清除所有列筛选
    clearFilter: function clearFilter() {
      this.$parent.clearFilter(true);
    },
    filterNull: function filterNull(empty) {
      this.condition.value = [];
      this.condition.input = "";
      this.condition.empty = empty;
      this.confirmFilter("empty");
    },
    filterExtends: function filterExtends(item) {
      this.condition.value = item.value || item.label;
      this.condition.method = item.method;
      this.confirmFilter("extend");
    },
    filterInput: function filterInput() {
      this.condition.value = [];
      this.condition.empty = null;
      this.confirmFilter("input");
    },
    filterDate: function filterDate() {
      var _this$filterStore2 = this.filterStore, startDate = _this$filterStore2.startDate, endDate = _this$filterStore2.endDate;
      this.condition.input = "";
      this.condition.value = [];
      this.condition.empty = null;
      this.condition.dateList = [startDate, endDate];
      if (startDate && !endDate) {
        this.condition.relation = "greaterThan";
      } else if (!startDate && endDate) {
        this.condition.relation = "greaterThan";
      } else if (startDate && endDate) {
        this.condition.relation = "interveningBetween";
      }
      this.confirmFilter("date");
    },
    filterEnum: function filterEnum() {
      this.condition.input = "";
      this.condition.empty = null;
      this.condition.value = this.filterStore.options.filter(function(item) {
        return item.checked;
      }).map(function(check) {
        return check.value;
      });
      this.confirmFilter("enum");
    },
    close: function close2() {
      var filterStore = this.filterStore;
      filterStore.visible = false;
    },
    correctRelations: function correctRelations() {
      if (this.filterStore && typeof this.filterStore.inputFilter === "object") {
        var relations = this.filterStore.inputFilter.relations;
        var relation = this.filterStore.inputFilter.relation || "equals";
        if (!relations || Array.isArray(relations) && relations.length === 0) {
          this.filterStore.inputFilter.relations = [{
            label: relation,
            value: relation
          }];
          this.filterStore.inputFilter.relations_addby = "program";
          this.filterStore.inputFilter.relations_backup = relations;
        }
      }
    }
  },
  setup: function setup52() {
    var instance = getCurrentInstance().proxy;
    onBeforeUnmount(function() {
      instance.popperJS && instance.popperJS.destroy() && (instance.popperJS = null);
    });
  }
});
function handleFilterConditionCustom(_ref76) {
  var column = _ref76.column, condition2 = _ref76.condition, method = _ref76.method, property2 = _ref76.property, row2 = _ref76.row;
  var ret = {
    flag: false,
    result: null
  };
  if (method && condition2.type === "custom") {
    ret.result = method({
      property: property2,
      row: row2,
      column
    });
    ret.flag = true;
  }
  return ret;
}
function handleFilterConditionExtend(_ref77) {
  var column = _ref77.column, condition2 = _ref77.condition, property2 = _ref77.property, row2 = _ref77.row;
  var ret = {
    flag: false,
    result: null
  };
  if (condition2.type === "extend") {
    var extendMethod = condition2.method;
    if (typeof extendMethod !== "function") {
      extendMethod = function extendMethod2() {
        return true;
      };
    }
    ret.result = extendMethod({
      value: get_default(row2, property2),
      row: row2,
      column
    });
    ret.flag = true;
  }
  return ret;
}
function findRelationMethod(relation, relations) {
  if (Array.isArray(relations)) {
    var method;
    for (var i = 0; i < relations.length; i++) {
      if (relations[i] && relations[i].value === relation) {
        method = relations[i].method;
        break;
      }
    }
    return method;
  }
}
function handleFilterRelations(_ref78) {
  var inputFilter = _ref78.inputFilter;
  var relations = [];
  if (typeof inputFilter === "object" && Array.isArray(inputFilter.relations)) {
    relations = inputFilter.relations;
  }
  return relations;
}
function modifyValueCheckStr(value) {
  if (!value && typeof value !== "number") {
    value = "";
  }
  return value;
}
function handleDefaultCheckStr(_ref79) {
  var column = _ref79.column, input = _ref79.input, relation = _ref79.relation, relationMethod = _ref79.relationMethod, relations = _ref79.relations, result = _ref79.result, row2 = _ref79.row, value = _ref79.value;
  if (typeof relationMethod !== "function") {
    relationMethod = findRelationMethod(relation, relations);
  }
  if (typeof relationMethod === "function") {
    result = relationMethod({
      value,
      input,
      row: row2,
      column
    });
  }
  return {
    relationMethod,
    result
  };
}
function handleFilterCheckStr(_ref80) {
  var column = _ref80.column, relationMethod = _ref80.relationMethod, relations = _ref80.relations, row2 = _ref80.row;
  return function(value, input, relation, dateList) {
    var result = false;
    value = modifyValueCheckStr(value);
    switch (relation) {
      case "equals":
        result = value === input;
        break;
      case "unequal":
        result = value !== input;
        break;
      case "greaterThan":
        result = value > input;
        break;
      case "lessThan":
        result = value < input;
        break;
      case "equalToGreaterThan":
        result = value >= input;
        break;
      case "equalToLessThan":
        result = value <= input;
        break;
      case "interveningBetween":
        result = value >= dateList[0] && value <= dateList[1];
        break;
      case "contains":
        result = value.toString().includes(input);
        break;
      case "startwith":
        result = value.toString().indexOf(input) === 0;
        break;
      case "endwith":
        result = value.toString().match(new RegExp(input + "$"));
        break;
      default: {
        var ret = handleDefaultCheckStr({
          column,
          input,
          relation,
          relationMethod,
          relations,
          result,
          row: row2,
          value
        });
        relationMethod = ret.relationMethod;
        result = ret.result;
      }
    }
    return result;
  };
}
function handleFilterCheck(_ref81) {
  var checkStr = _ref81.checkStr, empty = _ref81.empty, input = _ref81.input, property2 = _ref81.property, relation = _ref81.relation, row2 = _ref81.row, valueList = _ref81.valueList, dateList = _ref81.dateList;
  return function() {
    var value = get_default(row2, property2);
    if (empty === true) {
      return !value;
    }
    if (empty === false) {
      return !!value;
    }
    if (dateList) {
      if (!dateList[0] && !dateList[1]) {
        return true;
      }
      return checkStr(value, dateList[0] || dateList[1], relation, dateList);
    }
    var checkInput = !input && input !== 0 || checkStr(value, input, relation);
    var checkEnum = !valueList.length || valueList.includes(value);
    return checkInput && checkEnum;
  };
}
function getClassName(elem) {
  if (elem && elem.nodeType) {
    if (elem instanceof SVGElement) {
      return elem.className.baseVal;
    }
    if (elem instanceof HTMLElement) {
      return elem.className;
    }
  }
  return "";
}
function closest(elem, parentClassName) {
  if (elem && elem.nodeType) {
    var clsReg = new RegExp("\\b" + parentClassName + "\\b");
    var matches;
    do {
      matches = getClassName(elem).match(clsReg);
      if (matches) {
        return elem;
      }
      if (elem === document.body) {
        break;
      }
      elem = elem.parentNode;
    } while (elem);
  }
  return null;
}
var columnfilters = function columnfilters2(visibleColumn) {
  var filters = {};
  visibleColumn.forEach(function(column) {
    var property2 = column.property, filter2 = column.filter;
    if (filter2) {
      var _filter$condition = filter2.condition, type = _filter$condition.type, input = _filter$condition.input, relation = _filter$condition.relation, value = _filter$condition.value, empty = _filter$condition.empty, dateList = _filter$condition.dateList;
      if (type === "input") {
        filters[property2] = {
          type,
          value: {
            text: input,
            relation
          }
        };
      } else if (type === "enum") {
        filters[property2] = {
          type,
          value
        };
      } else if (type === "empty") {
        filters[property2] = {
          type,
          value: empty
        };
      } else if (type === "custom") {
        filters[property2] = {
          type
        };
      } else if (type === "date") {
        filters[property2] = {
          type,
          value: {
            dateList,
            relation
          }
        };
      } else if (type === "extend") {
        filters[property2] = {
          type,
          value
        };
      } else if (type === "extend1") {
        filters[property2] = {
          type,
          value
        };
      } else if (type === "extend2") {
        filters[property2] = {
          type,
          value
        };
      }
      filter2.hasFilter = value.length || input || (dateList == null ? void 0 : dateList.some(Boolean)) || input === 0 || empty !== null || type === "custom";
    }
  });
  return filters;
};
var Methods$f = {
  filter: function filter(field, callback) {
    var column = this.getColumnByField(field);
    var filters = column.filter.options;
    if (callback) {
      var rest = callback(filters);
      if (isArray(rest)) {
        column.filters = getFilters(rest);
      }
    }
    return Promise.resolve(filters);
  },
  // 关闭筛选
  closeFilter: function closeFilter() {
    var filterStore = this.filterStore;
    Object.assign(filterStore, {
      visible: false,
      targetElem: null,
      targetElemParentTr: null
    });
    return this.$nextTick();
  },
  handleLocalFilter: function handleLocalFilter(row2, column) {
    var property2 = column.property;
    var _column$filter = column.filter, condition2 = _column$filter.condition, method = _column$filter.method, inputFilter = _column$filter.inputFilter;
    var ret = handleFilterConditionCustom({
      column,
      condition: condition2,
      method,
      property: property2,
      row: row2
    });
    if (ret.flag) {
      return ret.result;
    }
    ret = handleFilterConditionExtend({
      column,
      condition: condition2,
      property: property2,
      row: row2
    });
    if (ret.flag) {
      return ret.result;
    }
    var empty = condition2.empty, input = condition2.input, relation = condition2.relation, value = condition2.value, dateList = condition2.dateList;
    var relationMethod = condition2.method;
    var relations = handleFilterRelations({
      inputFilter
    });
    var checkStr = handleFilterCheckStr({
      column,
      relationMethod,
      relations,
      row: row2
    });
    var check = handleFilterCheck({
      checkStr,
      empty,
      input,
      property: property2,
      relation,
      row: row2,
      valueList: value,
      dateList
    });
    return check();
  },
  getOptions: function getOptions(_ref82) {
    var property2 = _ref82.property, filter2 = _ref82.filter;
    var values = filter2.values, _filter$value = filter2.value, value = _filter$value === void 0 ? "value" : _filter$value, _filter$label = filter2.label, label = _filter$label === void 0 ? "label" : _filter$label, dataset = filter2.dataset;
    if (typeof values === "function") {
      return values({
        property: property2,
        filter: filter2
      });
    } else if (dataset) {
      return getDataset({
        dataset,
        service: this.$service
      });
    } else {
      var newOptions = (values || []).map(function(item) {
        return {
          label: item[label],
          value: item[value],
          checked: !!item.checked
        };
      });
      if (!values) {
        var optionMap = {};
        var tableData = this.getTableData();
        tableData.fullData.forEach(function(row2) {
          var key = row2[property2];
          if (!optionMap[key]) {
            newOptions.push({
              value: key,
              label: key,
              checked: false
            });
          }
          optionMap[key] = true;
        });
      }
      return Promise.resolve(newOptions);
    }
  },
  /**
   * 点击筛选事件
   */
  triggerFilterEvent: function triggerFilterEvent(event, column, params) {
    var filterStore = this.filterStore;
    var filter2 = column.filter;
    var inputFilterRelation;
    if (filterStore.id !== column.id && filterStore.visible) {
      this.closeFilter();
    }
    if (filter2 && typeof filter2.inputFilter === "object" && filter2.inputFilter.relation) {
      if (filter2.condition.relation === "equals" && filter2.inputFilter.relation && !column.isInitTriggerFlag) {
        inputFilterRelation = filter2.inputFilter.relation;
        column.isInitTriggerFlag = true;
      }
      filter2.condition.relation = inputFilterRelation || filter2.condition.relation;
    }
    if (filterStore.column === column && filterStore.visible) {
      filterStore.visible = false;
    } else {
      var targetElem = event.target;
      var targetElemParentTr = closest(targetElem, "tiny-grid-header__row");
      this.getOptions(column).then(function(options) {
        var _filter$simpleFilter, _filter$simpleFilter2, _filter$simpleFilter3, _filter$simpleFilter4, _filter$simpleFilter5, _filter$simpleFilter6, _filter$simpleFilter7, _filter$simpleFilter8;
        Object.assign(filterStore, {
          args: params,
          layout: filter2.layout,
          // 布局配置，用户可以自定义想要的筛选项
          enumable: filter2.enumable,
          inputFilter: filter2.inputFilter,
          simpleFilter: filter2.simpleFilter,
          onResetInputFilter: filter2.onResetInputFilter,
          extends: filter2.extends,
          defaultFilter: isBoolean_default(filter2.defaultFilter) ? filter2.defaultFilter : true,
          options: options.map(function(_ref83) {
            var value = _ref83.value, label = _ref83.label;
            return {
              value,
              label,
              checked: filter2.condition.value.includes(value)
            };
          }),
          condition: _extends({}, filter2.condition),
          multi: isBoolean_default(filter2.multi) ? filter2.multi : true,
          column,
          visible: true,
          targetElem: markRaw(targetElem),
          targetElemParentTr: markRaw(targetElemParentTr),
          id: column.id,
          searchConfig: (_filter$simpleFilter = filter2.simpleFilter) == null ? void 0 : _filter$simpleFilter.searchConfig,
          datetimeConfig: (_filter$simpleFilter2 = filter2.simpleFilter) == null ? void 0 : _filter$simpleFilter2.datetimeConfig,
          searchValue: ((_filter$simpleFilter3 = filter2.simpleFilter) == null ? void 0 : (_filter$simpleFilter4 = _filter$simpleFilter3.searchConfig) == null ? void 0 : _filter$simpleFilter4.searchValue) || "",
          startDate: ((_filter$simpleFilter5 = filter2.simpleFilter) == null ? void 0 : (_filter$simpleFilter6 = _filter$simpleFilter5.datetimeConfig) == null ? void 0 : _filter$simpleFilter6.startDate) || "",
          endDate: ((_filter$simpleFilter7 = filter2.simpleFilter) == null ? void 0 : (_filter$simpleFilter8 = _filter$simpleFilter7.datetimeConfig) == null ? void 0 : _filter$simpleFilter8.endDate) || ""
        });
      });
    }
  },
  // 确认筛选
  confirmFilterEvent: function confirmFilterEvent() {
    var _this7 = this;
    var visibleColumn = this.visibleColumn, filterStore = this.filterStore, scrollXLoad = this.scrollXLoad, scrollYLoad = this.scrollYLoad, remoteFilter = this.remoteFilter, lastScrollLeft = this.lastScrollLeft;
    filterStore.visible = false;
    if (!remoteFilter) {
      this.handleTableData(true).then(this.refreshStyle);
    }
    var filters = columnfilters(visibleColumn);
    if (remoteFilter) {
      if (this.$grid.pagerConfig) {
        this.$grid.pagerConfig.currentPage = 1;
      }
    }
    emitEvent$1(this, "filter-change", [{
      filters,
      $table: this
    }]);
    this.updateFooter();
    var restoreScrollLeft = function restoreScrollLeft2() {
      return _this7.scrollTo(lastScrollLeft);
    };
    if (scrollXLoad || scrollYLoad) {
      scrollXLoad && this.clearScroll();
      if (scrollYLoad) {
        this.updateScrollYSpace();
      }
    }
    this.closeFilter();
    this.clearSelection();
    this.$nextTick().then(this.recalculate).then(restoreScrollLeft);
  },
  clearFilter: function clearFilter2(field) {
    var _this$$grid;
    var column = arguments.length ? this.getColumnByField(field) : null;
    var filterStore = this.filterStore;
    var filterData = ((_this$$grid = this.$grid) == null ? void 0 : _this$$grid.filterData) || {};
    var handleClear = function handleClear2(column2) {
      var filter2 = column2.filter;
      if (filter2) {
        filter2.condition = {
          input: "",
          relation: "equals",
          empty: null,
          value: []
        };
        filter2.hasFilter = false;
        filter2.custom = null;
        delete filterData[column2.property];
      }
    };
    if (column) {
      handleClear(column);
    } else {
      this.visibleColumn.forEach(handleClear);
    }
    if (!column || column !== filterStore.column) {
      Object.assign(filterStore, {
        style: null,
        options: [],
        column: null,
        multi: false,
        visible: false
      });
    }
    if (field === true || column) {
      var filters = columnfilters(this.visibleColumn);
      emitEvent$1(this, "filter-change", [{
        filters,
        $table: this
      }]);
    }
    this.clearSelection();
    return this.updateData();
  },
  getAllFilter: function getAllFilter() {
    return columnfilters(this.visibleColumn);
  }
};
Panel$1.install = function(Table2) {
  GridAdapter._filter = 1;
  Object.assign(Table2.methods, Methods$f);
};
var Children = defineComponent({
  name: $prefix + "GridContextMenuChild",
  props: {
    item: Object,
    gIndex: Number,
    index: Number,
    show: Boolean,
    ctxMenuStore: Object,
    tableInstance: Object
  },
  render: function render62() {
    var tableInstance = this.tableInstance, item = this.item, gIndex = this.gIndex, index232 = this.index, show22 = this.show, ctxMenuStore = this.ctxMenuStore;
    var toKebab2 = tableInstance.toKebab, getEventTargetNode2 = tableInstance.getEventTargetNode;
    return h("ul", {
      class: ["tiny-grid-menu__clild-wrapper", {
        show: show22
      }]
    }, item.children.map(function(child, cIndex) {
      return child.visible === false ? [null] : h("li", {
        class: {
          "link__disabled": child.disabled,
          "link__active": child === ctxMenuStore.selectChild
        },
        key: gIndex + "_" + index232 + "_" + cIndex
      }, [h("a", {
        class: "tiny-grid-menu__link " + toKebab2(item.code),
        on: {
          click: function click(event) {
            tableInstance.ctxMenuLinkEvent(event, child);
          },
          mouseover: function mouseover(event) {
            tableInstance.ctxMenuMouseoverEvent(event, item, child);
          },
          mouseout: function mouseout(event) {
            if (!getEventTargetNode2(event, document.body, toKebab2(item.code)).flag) {
              tableInstance.ctxMenuMouseoutEvent(event, item, child);
            }
          }
        }
      }, [child.prefixIcon ? h(child.prefixIcon, {
        class: "tiny-grid-menu__link-prefix"
      }) : [null], h("span", {
        class: "tiny-grid-menu__link-content"
      }, getFuncText(child.name))])]);
    }));
  },
  watch: {
    show: function show2(value) {
      var _this8 = this;
      if (value) {
        this.$el.style.top = "0px";
        this.$nextTick(function() {
          var tableInstance = _this8.tableInstance, $el = _this8.$el;
          var _$el$getBoundingClien = $el.getBoundingClientRect(), width = _$el$getBoundingClien.width, height2 = _$el$getBoundingClien.height, bottom = _$el$getBoundingClien.bottom;
          var _getDomNode = getDomNode(), visibleHeight = _getDomNode.visibleHeight, visibleWidth = _getDomNode.visibleWidth;
          var ctxElem = tableInstance.$refs.ctxWrapper.$el;
          var target = tableInstance.ctxMenuStore.target;
          var _ctxElem$getBoundingC = ctxElem.getBoundingClientRect(), ctxWidth = _ctxElem$getBoundingC.width, ctxRight = _ctxElem$getBoundingC.right;
          if (width + ctxRight > visibleWidth - 6) {
            $el.style.left = -6 - width + "px";
          } else {
            $el.style.left = ctxWidth + "px";
          }
          if (bottom > visibleHeight) {
            var offset = target && target.clientHeight || 0;
            $el.style.top = offset - height2 + "px";
          }
        });
      }
    }
  }
});
var onMenuItem = function onMenuItem2(_ref84) {
  var tableInstance = _ref84.tableInstance, item = _ref84.item, getEventTargetNode2 = _ref84.getEventTargetNode, toKebab2 = _ref84.toKebab;
  return {
    click: function click(event) {
      tableInstance.ctxMenuLinkEvent(event, item);
    },
    mouseover: function mouseover(event) {
      tableInstance.ctxMenuMouseoverEvent(event, item);
    },
    mouseout: function mouseout(event) {
      if (!getEventTargetNode2(event, document.body, toKebab2(item.code)).flag) {
        tableInstance.ctxMenuMouseoutEvent(event, item);
      }
    }
  };
};
function createMenuItem(args) {
  var ctxMenuStore = args.ctxMenuStore, gIndex = args.gIndex, getEventTargetNode2 = args.getEventTargetNode, hasChild = args.hasChild;
  var index232 = args.index, item = args.item, show22 = args.show, tableInstance = args.tableInstance, toKebab2 = args.toKebab;
  var res = [null];
  var classMap2 = {
    linkDisabled: "link__disabled",
    linkActive: "link__active"
  };
  if (item.visible !== false) {
    var _class;
    res = h("li", {
      class: (_class = {}, _class[classMap2.linkDisabled] = item.disabled, _class[classMap2.linkActive] = item === ctxMenuStore.selected, _class),
      key: gIndex + "_" + index232
    }, [h("a", {
      class: "tiny-grid-menu__link " + toKebab2(item.code),
      on: onMenuItem({
        tableInstance,
        item,
        getEventTargetNode: getEventTargetNode2,
        toKebab: toKebab2
      })
    }, [item.prefixIcon ? h(item.prefixIcon, {
      class: "tiny-grid-menu__link-prefix"
    }) : [null], h("span", {
      class: "tiny-grid-menu__link-content"
    }, getFuncText(item.name)), h("i", {
      class: ["tiny-grid-menu__link-suffix", hasChild ? item.suffixIcon || "suffix__haschild" : item.suffixIcon]
    })]), hasChild ? h(Children, {
      props: {
        item,
        gIndex,
        index: index232,
        show: show22,
        tableInstance,
        ctxMenuStore
      }
    }) : [null]]);
  }
  return res;
}
function getMenuItemCreator(_ref85) {
  var ctxMenuStore = _ref85.ctxMenuStore, getEventTargetNode2 = _ref85.getEventTargetNode, tableInstance = _ref85.tableInstance, toKebab2 = _ref85.toKebab;
  return function(options, gIndex) {
    return h("ul", {
      class: "tiny-grid-menu__option-wrapper",
      key: gIndex
    }, options.map(function(item, index232) {
      var hasChild = item.children && item.children.length;
      var show22 = item === ctxMenuStore.selected && ctxMenuStore.showChild;
      var args = {
        ctxMenuStore,
        gIndex,
        getEventTargetNode: getEventTargetNode2,
        hasChild
      };
      Object.assign(args, {
        index: index232,
        item,
        show: show22,
        tableInstance,
        toKebab: toKebab2
      });
      return createMenuItem(args);
    }));
  };
}
var Panel = defineComponent({
  name: $prefix + "GridContextMenu",
  props: {
    ctxMenuStore: Object
  },
  render: function render72() {
    var ctxMenuStore = this.ctxMenuStore, tableInstance = this.$parent;
    var toKebab2 = tableInstance.toKebab, getEventTargetNode2 = tableInstance.getEventTargetNode;
    return h("div", {
      class: ["tiny-grid__wrapper", "tiny-grid-menu__wrapper", {
        show: ctxMenuStore.visible
      }],
      style: ctxMenuStore.style
    }, ctxMenuStore.list.map(getMenuItemCreator({
      ctxMenuStore,
      getEventTargetNode: getEventTargetNode2,
      tableInstance,
      toKebab: toKebab2
    })));
  }
});
var getSelectItem = function getSelectItem2(subList) {
  for (var i = 0; i < subList.length; i++) {
    var menu = subList[i];
    if (menu.visible !== false) {
      return menu;
    }
  }
};
var Methods$e = {
  // 关闭快捷菜单
  _closeMenu: function _closeMenu() {
    Object.assign(this.ctxMenuStore, {
      visible: false,
      selected: null,
      selectChild: null,
      showChild: false
    });
    return this.$nextTick();
  },
  // 处理菜单的移动
  moveCtxMenu: function moveCtxMenu(_ref86) {
    var _this9 = this;
    var event = _ref86.event, keyCode = _ref86.keyCode, ctxMenuStore = _ref86.ctxMenuStore, property2 = _ref86.property, operKey = _ref86.operKey, operRest = _ref86.operRest, menuList = _ref86.menuList;
    var selectIndex = findIndexOf_default(menuList, function(item) {
      return ctxMenuStore[property2] === item;
    });
    var selectItem;
    var ruleChains = [{
      match: function match() {
        return keyCode === operKey;
      },
      action: function action() {
        if (!operRest || !hasChildrenList(ctxMenuStore.selected)) {
          ctxMenuStore.showChild = false;
          ctxMenuStore.selectChild = null;
        } else {
          ctxMenuStore.showChild = true;
        }
      }
    }, {
      match: function match() {
        return keyCode === 38;
      },
      action: function action() {
        var subList = menuList.slice(0, selectIndex);
        subList = subList.reverse();
        selectItem = getSelectItem(subList);
        ctxMenuStore[property2] = selectItem || menuList[menuList.length - 1];
      }
    }, {
      match: function match() {
        return keyCode === 40;
      },
      action: function action() {
        var subList = menuList.slice(selectIndex + 1);
        selectItem = getSelectItem(subList);
        ctxMenuStore[property2] = selectItem || menuList[0];
      }
    }, {
      match: function match() {
        return ctxMenuStore[property2] && (keyCode === 13 || keyCode === 32);
      },
      action: function action() {
        _this9.ctxMenuLinkEvent(event, ctxMenuStore[property2]);
      }
    }];
    for (var i = 0; i < ruleChains.length; i++) {
      var ruleChain = ruleChains[i];
      if (ruleChain.match()) {
        ruleChain.action();
        break;
      }
    }
  },
  // 快捷菜单事件处理
  handleGlobalContextmenuEvent: function handleGlobalContextmenuEvent(event) {
    var ctxMenuOpts2 = this.ctxMenuOpts, ctxMenuStore = this.ctxMenuStore, isCtxMenu2 = this.isCtxMenu;
    var layoutList = ["header", "body", "footer"];
    if (!isCtxMenu2) {
      this.closeMenu();
      this.closeFilter();
      return;
    }
    if (ctxMenuStore.visible && this.$refs.ctxWrapper && this.getEventTargetNode(event, this.$refs.ctxWrapper.$el).flag) {
      event.preventDefault();
      return;
    }
    for (var i = 0; i < layoutList.length; i++) {
      var layout = layoutList[i];
      var eventTargetNode = this.getEventTargetNode(event, this.$el, "tiny-grid-" + layout + "__column");
      var eventParams = {
        $table: this,
        columns: this.visibleColumn.slice(0),
        type: layout
      };
      if (eventTargetNode.flag) {
        var _this$getColumnNode;
        var cell = eventTargetNode.targetElem;
        var column = (_this$getColumnNode = this.getColumnNode(cell)) == null ? void 0 : _this$getColumnNode.item;
        if (!column) {
          return;
        }
        var typePrefix = layout + "-";
        Object.assign(eventParams, {
          cell,
          column,
          columnIndex: this.getColumnIndex(column)
        });
        if (layout === "body") {
          var row2 = this.getRowNode(cell.parentNode).item;
          typePrefix = "";
          Object.assign(eventParams, {
            row: row2,
            rowIndex: this.getRowIndex(row2)
          });
        }
        this.openContextMenu(event, layout, eventParams);
        emitEvent$1(this, typePrefix + "cell-context-menu", [eventParams, event]);
        return;
      }
      eventTargetNode = this.getEventTargetNode(event, this.$el, "tiny-grid__" + layout + "-wrapper");
      if (eventTargetNode.flag) {
        if (ctxMenuOpts2.trigger === "cell") {
          event.preventDefault();
        } else {
          this.openContextMenu(event, layout, eventParams);
        }
        return;
      }
    }
    this.closeMenu();
    this.closeFilter();
  },
  // 显示快捷菜单
  openContextMenu: function openContextMenu(event, type, params) {
    var _this10 = this;
    var ctxMenuOpts2 = this.ctxMenuOpts, ctxMenuStore = this.ctxMenuStore;
    var visibleMethod = ctxMenuOpts2.visibleMethod;
    var config2 = ctxMenuOpts2[type];
    if (!config2) {
      this.closeFilter();
      return;
    }
    var disabled = config2.disabled, options = config2.options;
    if (disabled) {
      event.preventDefault();
      this.closeFilter();
      return;
    }
    if (!options || !options.length) {
      this.closeFilter();
      return;
    }
    params.options = options;
    var end = function end2() {
      if (visibleMethod && !visibleMethod(params, event)) {
        _this10.closeMenu();
        return;
      }
      event.preventDefault();
      var _getDomNode2 = getDomNode(), scrollLeft = _getDomNode2.scrollLeft, scrollTop = _getDomNode2.scrollTop, visibleHeight = _getDomNode2.visibleHeight, visibleWidth = _getDomNode2.visibleWidth;
      var clientX = event.clientX, clientY = event.clientY;
      var left = clientX + scrollLeft;
      var top = clientY + scrollTop;
      var style = {
        left: left + "px",
        top: top + "px"
      };
      Object.assign(ctxMenuStore, {
        args: params,
        list: options,
        selected: null,
        selectChild: null,
        showChild: false,
        style,
        visible: true
      });
      var next2 = function next22() {
        var ctxElem = _this10.$refs.ctxWrapper.$el;
        var clientWidth = ctxElem.clientWidth, clientHeight = ctxElem.clientHeight;
        var offsetLeft = clientX + clientWidth - visibleWidth;
        var offsetTop = clientY + clientHeight - visibleHeight;
        offsetLeft > -10 && (ctxMenuStore.style.left = left - clientWidth + "px");
        offsetTop > -10 && (ctxMenuStore.style.top = top - clientHeight + "px");
      };
      _this10.$nextTick(next2);
    };
    this.preventEvent(event, "event.show_menu", params, null, end);
    this.closeFilter();
  },
  ctxMenuMouseoverEvent: function ctxMenuMouseoverEvent(event, item, child) {
    var ctxMenuStore = this.ctxMenuStore;
    event.preventDefault();
    event.stopPropagation();
    Object.assign(ctxMenuStore, {
      selectChild: child,
      selected: item,
      target: event.target
    });
    !child && (ctxMenuStore.showChild = hasChildrenList(item));
  },
  ctxMenuMouseoutEvent: function ctxMenuMouseoutEvent(event, item) {
    var ctxMenuStore = this.ctxMenuStore;
    !item.children && (ctxMenuStore.selected = null);
    Object.assign(ctxMenuStore, {
      selectChild: null,
      showChild: null,
      target: null
    });
  },
  // 快捷菜单点击事件
  ctxMenuLinkEvent: function ctxMenuLinkEvent(event, menu) {
    if (menu.disabled || menu.children && menu.children.length) {
      return;
    }
    var ctxMenuStore = this.ctxMenuStore;
    var ctxMenuMethod = Menus.get(menu.code);
    var params = _extends({
      $table: this,
      menu
    }, ctxMenuStore.args);
    ctxMenuMethod && ctxMenuMethod.call(this, params, event);
    emitEvent$1(this, "context-menu-click", [params, event]);
    this.closeMenu();
  },
  toKebab: function toKebab(code) {
    return typeof code === "string" ? code.replace(/\B([A-Z])/g, "-$1").toLowerCase() : "menu-code";
  }
};
Panel.install = function(Table2) {
  GridAdapter._menu = 1;
  Object.assign(Table2.methods, Methods$e);
};
var Loading = defineComponent({
  name: $prefix + "GridLoading",
  directives: {
    loading: Loadings.directive
  },
  props: _extends({}, $props, {
    visible: Boolean,
    loadingComponent: Object
  }),
  render: function render8() {
    var loadingSpinner = h("div", {
      class: "tiny-grid-loading__wrap tiny-loading__spinner",
      directives: null
    });
    {
      loadingSpinner = withDirectives(loadingSpinner, [[Loadings.directive, true]]);
    }
    var loadingComponent;
    if (this.loadingComponent) {
      loadingComponent = isVnode(this.loadingComponent) ? this.loadingComponent : h(this.loadingComponent);
    }
    return h("div", {
      class: "tiny-grid-loading",
      style: {
        display: this.visible ? "block" : "none"
      }
    }, [loadingComponent || loadingSpinner]);
  }
});
$install(Loading);
var insertedField = GlobalConfig$1.constant.insertedField;
var getCellRender = function getCellRender2(isTreeNode, treeCellRender, treeRender, context) {
  return context[isTreeNode ? treeCellRender : treeRender];
};
function processRenderer(_ref87) {
  var h2 = _ref87.h, params = _ref87.params, renderer = _ref87.renderer, value = _ref87.value;
  var result = {
    flag: false,
    vnodes: null
  };
  if (renderer) {
    if (typeof renderer === "function") {
      result.flag = true;
      result.vnodes = [renderer(h2, params)];
    }
    if (renderer.component) {
      var component = renderer.component, attrs = renderer.attrs;
      result.flag = true;
      result.vnodes = [h2(toRaw(component), {
        class: "grid-cell",
        attrs: _extends({
          value,
          modelValue: value
        }, typeof attrs === "function" ? attrs(params) : attrs)
      })];
    }
  }
  return result;
}
function processAsyncColumn(_ref88) {
  var $table = _ref88.$table, column = _ref88.column, format2 = _ref88.format, h2 = _ref88.h, params = _ref88.params, row2 = _ref88.row;
  var result = {
    flag: false,
    vnodes: null
  };
  var _ref89 = format2.async || {}, fetch = _ref89.fetch, loadingText = _ref89.loadingText;
  if ($table.isAsyncColumn && row2[insertedField] !== true && typeof fetch === "function") {
    var cellText = row2[$table.getAsyncColumnName(column.property)];
    var loadingRender = loadingText || "loading ...";
    if (typeof cellText === "undefined") {
      cellText = typeof loadingRender === "function" ? loadingRender(h2, params) : loadingRender;
    }
    if (typeof cellText === "undefined" || typeof column.formatText === "undefined") {
      result.flag = true;
      result.vnodes = [cellText];
    }
  }
  return result;
}
function getColumnRuleTypeIndex(_ref90) {
  var _vm = _ref90._vm, isTreeNode = _ref90.isTreeNode, renMaps = _ref90.renMaps, type = _ref90.type;
  return {
    match: function match() {
      return type === "index";
    },
    action: function action() {
      renMaps.renderHeader = _vm.renderIndexHeader;
      renMaps.renderCell = getCellRender(isTreeNode, "renderTreeIndexCell", "renderIndexCell", _vm);
    }
  };
}
function getColumnRuleTypeRadio(_ref91) {
  var _vm = _ref91._vm, isTreeNode = _ref91.isTreeNode, renMaps = _ref91.renMaps, type = _ref91.type;
  return {
    match: function match() {
      return type === "radio";
    },
    action: function action() {
      renMaps.renderHeader = _vm.renderRadioHeader;
      renMaps.renderCell = getCellRender(isTreeNode, "renderTreeRadioCell", "renderRadioCell", _vm);
    }
  };
}
function getColumnRuleTypeSelection(_ref92) {
  var _vm = _ref92._vm, isTreeNode = _ref92.isTreeNode, renMaps = _ref92.renMaps, selectConfig = _ref92.selectConfig, type = _ref92.type;
  return {
    match: function match() {
      return type === "selection";
    },
    action: function action() {
      renMaps.renderHeader = _vm.renderSelectionHeader;
      renMaps.renderCell = getCellRender(isTreeNode, "renderTreeSelectionCell", "renderSelectionCell", _vm);
      if (selectConfig && selectConfig.checkField) {
        renMaps.renderCell = getCellRender(isTreeNode, "renderTreeSelectionCellByProp", "renderSelectionCellByProp", _vm);
      }
    }
  };
}
function getColumnRuleTypeExpand(_ref93) {
  var _vm = _ref93._vm, renMaps = _ref93.renMaps, type = _ref93.type;
  return {
    match: function match() {
      return type === "expand";
    },
    action: function action() {
      renMaps.renderCell = _vm.renderExpandCell;
      renMaps.renderData = _vm.renderExpandData;
    }
  };
}
function getColumnRuleTypeOperation(_ref94) {
  var _vm = _ref94._vm, renMaps = _ref94.renMaps, type = _ref94.type;
  return {
    match: function match() {
      return type === "operation";
    },
    action: function action() {
      renMaps.renderCell = _vm.renderOperationCell;
    }
  };
}
function getColumnRuleTypeOther(_ref95) {
  var $table = _ref95.$table, _vm = _ref95._vm, colProps = _ref95.colProps, editor = _ref95.editor, filter2 = _ref95.filter, isTreeNode = _ref95.isTreeNode, renMaps = _ref95.renMaps, type = _ref95.type;
  return {
    match: function match() {
      return !~["index", "radio", "selection", "expand", "operation"].indexOf(type);
    },
    action: function action() {
      var sortable = colProps.sortable, remoteSort = colProps.remoteSort;
      var isSortable = $table.sortable && (type ? false : sortable);
      var isSortColumn = isSortable || remoteSort;
      if (editor) {
        renMaps.renderHeader = _vm.renderEditHeader;
        renMaps.renderCell = getCellRender(isTreeNode, "renderTreeRadioCell", "renderRowEdit", _vm);
        if ($table.editConfig && $table.editConfig.mode === "row") {
          renMaps.renderCell = getCellRender(isTreeNode, "renderTreeRowEdit", "renderRowEdit", _vm);
        }
        if ($table.editConfig && $table.editConfig.mode === "cell") {
          renMaps.renderCell = getCellRender(isTreeNode, "renderTreeCellEdit", "renderCellEdit", _vm);
        }
      } else if (filter2) {
        renMaps.renderHeader = _vm.renderFilterHeader;
        if (isSortColumn) {
          renMaps.renderHeader = _vm.renderSortAndFilterHeader;
        }
      } else if (isSortColumn) {
        renMaps.renderHeader = _vm.renderSortHeader;
      }
    }
  };
}
var isCheckStrictly = function isCheckStrictly2(selectConfig) {
  return selectConfig && selectConfig.checkStrictly && !selectConfig.showHeader || selectConfig && !selectConfig.checkStrictly && selectConfig.showHeader === false;
};
var runRender = function runRender2(render18) {
  var vnode;
  try {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    vnode = render18.apply(void 0, params);
  } catch (e) {
    warn("ui.grid.error.renderParamError");
  } finally {
    if (!vnode || !isVnode(vnode)) {
      try {
        vnode = h$1(render18);
      } catch (e) {
        vnode = null;
        warn("ui.grid.error.classComponentError");
      }
    }
  }
  return vnode;
};
var Cell = {
  createColumn: function createColumn($table, colProps) {
    var type = colProps.type, filter2 = colProps.filter, editor = colProps.editor, treeNode = colProps.treeNode;
    var selectConfig = $table.selectConfig, treeConfig = $table.treeConfig;
    var isTreeNode = treeConfig && treeNode;
    var renMaps = {
      renderHeader: this.renderHeader,
      renderCell: getCellRender(isTreeNode, "renderTreeCell", "renderCell", this)
    };
    var _vm = this;
    var ruleChains = [getColumnRuleTypeIndex({
      _vm,
      isTreeNode,
      renMaps,
      type
    }), getColumnRuleTypeRadio({
      _vm,
      isTreeNode,
      renMaps,
      type
    }), getColumnRuleTypeSelection({
      _vm,
      isTreeNode,
      renMaps,
      selectConfig,
      type
    }), getColumnRuleTypeExpand({
      _vm,
      renMaps,
      type
    }), getColumnRuleTypeOperation({
      _vm,
      renMaps,
      type
    }), getColumnRuleTypeOther({
      $table,
      _vm,
      colProps,
      editor,
      filter: filter2,
      isTreeNode,
      renMaps,
      type
    })];
    for (var j = 0; j < ruleChains.length; j++) {
      if (ruleChains[j].match()) {
        ruleChains[j].action();
        break;
      }
    }
    return getColumnConfig(colProps, renMaps, GlobalConfig$1);
  },
  // 单元格
  renderHeader: function renderHeader(h2, params, type) {
    var column = params.column;
    var slots = column.slots, own = column.own, title = column.title;
    if (slots && slots.header) {
      return [h2("div", {
        class: "tiny-grid-cell-text"
      }, [slots.header(params, h2)])];
    }
    if (typeof title === "function") {
      return [title(h2, params)];
    }
    if (type === "card") {
      return [formatText(getFuncText(own.title))];
    }
    return [h2("div", {
      class: "tiny-grid-cell-text"
    }, [formatText(getFuncText(own.title))])];
  },
  renderCell: function renderCell(h2, params) {
    var $table = params.$table, row2 = params.row, column = params.column;
    var slots = column.slots, renderer = column.renderer;
    var format2 = column.format || {};
    if (slots && slots.default) {
      return slots.default(params, h2);
    }
    var value = get_default(row2, column.property);
    var result = processRenderer({
      h: h2,
      params,
      renderer,
      value
    });
    if (result.flag) {
      return result.vnodes;
    }
    result = processAsyncColumn({
      $table,
      column,
      format: format2,
      h: h2,
      params,
      row: row2
    });
    if (result.flag) {
      return result.vnodes;
    }
    var cellValue = getCellLabel(row2, column, params);
    if (typeof cellValue === "function") {
      return [cellValue(h2, params)];
    }
    return [formatText(cellValue)];
  },
  renderTreeCell: function renderTreeCell(h2, params) {
    return Cell.renderTreeIcon(h2, params).concat(Cell.renderCell.call(this, h2, params));
  },
  // 树节点
  renderTreeIcon: function renderTreeIcon(h2, params) {
    var _$table$$grid, _$table$$grid$designC, _$table$$grid$designC2, _ref96;
    var $table = params.$table, level = params.level, row2 = params.row;
    var treeConfig = $table.treeConfig, treeExpandeds = $table.treeExpandeds;
    var children = treeConfig.children, indent = treeConfig.indent, renderIcon = treeConfig.renderIcon, trigger = treeConfig.trigger;
    var isActive = ~treeExpandeds.indexOf(row2);
    var rowChildren = row2[children];
    var listeners = {
      click: function click(event) {
        event.stopPropagation();
        $table.triggerTreeExpandEvent(event, params);
      }
    };
    var icon = GlobalConfig$1.icon;
    var customExpandIcon = renderIcon || ((_$table$$grid = $table.$grid) == null ? void 0 : (_$table$$grid$designC = _$table$$grid.designConfig) == null ? void 0 : (_$table$$grid$designC2 = _$table$$grid$designC.treeConfig) == null ? void 0 : _$table$$grid$designC2.renderIcon);
    if (trigger && trigger !== "default") {
      listeners = {};
    }
    var iconVNode = [];
    if (rowChildren && rowChildren.length) {
      iconVNode = [customExpandIcon ? customExpandIcon(h2, _extends({
        active: isActive
      }, params)) : h2(index$N(), {
        class: ["tiny-grid-tree__node-btn", icon.tree, {
          "is__active": isActive
        }]
      })];
    }
    var map2 = {
      isActive: "is__active"
    };
    return [h2("span", {
      class: "tiny-grid-tree__indent",
      style: {
        width: level * (indent || 16) + "px"
      }
    }), h2("span", {
      class: ["tiny-grid-tree-wrapper", (_ref96 = {}, _ref96[map2.isActive] = isActive, _ref96)],
      on: listeners
    }, iconVNode)];
  },
  // 索引
  renderIndexHeader: function renderIndexHeader(h2, params) {
    var column = params.column;
    var slots = column.slots;
    var own = column.own;
    if (slots && slots.header) {
      return slots.header(params, h2);
    }
    var value = getFuncText(own.title || own.label || "");
    return [formatText(value)];
  },
  renderTreeIndexCell: function renderTreeIndexCell(h2, params) {
    return Cell.renderTreeIcon(h2, params).concat(Cell.renderIndexCell(h2, params));
  },
  renderIndexCell: function renderIndexCell(h2, params) {
    var $table = params.$table, column = params.column, row2 = params.row, seq = params.seq;
    var startIndex = $table.startIndex, treeConfig = $table.treeConfig;
    var indexMethod = column.indexMethod, slots = column.slots;
    var _ref97 = treeConfig || {}, ordered = _ref97.ordered, _ref97$temporaryIndex = _ref97.temporaryIndex, temporaryIndex = _ref97$temporaryIndex === void 0 ? "_$index_" : _ref97$temporaryIndex;
    var isTreeOrderedFalse = treeConfig && !ordered;
    var indexValue = isTreeOrderedFalse ? row2[temporaryIndex] : startIndex + seq;
    if (slots && slots.default) {
      return slots.default(params, h2);
    }
    return [formatText(indexMethod ? indexMethod(params) : indexValue)];
  },
  // 单选
  renderRadioHeader: function renderRadioHeader(h2, params) {
    var _params$column = params.column, own = _params$column.own, slots = _params$column.slots;
    if (slots && slots.header) {
      return slots.header(params, h2);
    }
    var value = getFuncText(own.title || own.label);
    return [formatText(value)];
  },
  renderRadioCell: function renderRadioCell(h2, params) {
    var _ref98;
    var $table = params.$table, slots = params.column.slots, row2 = params.row;
    var _$table$radioConfig2 = $table.radioConfig, radioConfig = _$table$radioConfig2 === void 0 ? {} : _$table$radioConfig2, selectRow = $table.selectRow, vSize5 = $table.vSize;
    var labelField = radioConfig.labelField, checkMethod = radioConfig.checkMethod;
    var disabled = !!checkMethod;
    var options = {};
    if (slots && slots.default) {
      return slots.default(params, h2);
    }
    options.attrs = {
      name: "tiny-grid-radio__" + $table.id,
      type: "radio"
    };
    if (checkMethod) {
      options.attrs.disabled = disabled = !checkMethod(params);
    }
    options.domProps = {
      checked: row2 === selectRow
    };
    options.on = {
      change: function change(event) {
        $table.triggerRadioRowEvent(event, params);
      }
    };
    return [h2("label", {
      class: ["tiny-grid-radio", (_ref98 = {}, _ref98["size__" + vSize5] = vSize5, _ref98["is__disabled"] = disabled, _ref98)]
    }, [h2("input", options), h2("span", {
      class: "tiny-grid-radio__icon"
    }, [h2(index$R(), {
      class: ["tiny-svg-size", "icon-radio"]
    }), h2(index$S(), {
      class: ["tiny-svg-size", "icon-radio-selected"]
    })]), labelField ? h2("span", {
      class: "tiny-grid-radio__label"
    }, get_default(row2, labelField)) : null])];
  },
  renderTreeRadioCell: function renderTreeRadioCell(h2, params) {
    return Cell.renderTreeIcon(h2, params).concat(Cell.renderRadioCell(h2, params));
  },
  renderSelectionHeader: function renderSelectionHeader(h2, params) {
    var _ref99;
    var $table = params.$table, column = params.column;
    var slots = column.slots, own = column.own;
    var headerCheckDisabled = $table.headerCheckDisabled, isAllSelected = $table.isAllSelected, isIndeterminate = $table.isIndeterminate, selectConfig = $table.selectConfig, vSize5 = $table.vSize;
    var headerTitle = own.title || own.label;
    var options = {
      attrs: {
        type: "checkbox"
      }
    };
    if (slots && slots.header) {
      return slots.header(params, h2);
    }
    if (isCheckStrictly(selectConfig)) {
      return [];
    }
    options.domProps = {
      disabled: headerCheckDisabled,
      checked: isAllSelected && !headerCheckDisabled
    };
    options.on = {
      change: function change(event) {
        $table.triggerCheckAllEvent(event, event.target.checked);
        $table.showSelectToolbar();
      }
    };
    var vnode = h2("label", {
      class: ["tiny-grid-checkbox tiny-select-header", (_ref99 = {}, _ref99["size__" + vSize5] = vSize5, _ref99["is__disabled"] = headerCheckDisabled, _ref99["is__indeterminate"] = isIndeterminate, _ref99)],
      key: random()
    }, [h2("input", options), h2("span", {
      class: "tiny-grid-checkbox__icon"
    }, [h2(index$V(), {
      class: ["tiny-svg-size", "icon-check"]
    }), isAllSelected ? h2(index$U(), {
      class: ["tiny-svg-size", "icon-checked-sur"]
    }) : "", isIndeterminate ? h2(index$W(), {
      class: ["tiny-svg-size", "icon-half-select"]
    }) : ""]), headerTitle ? h2("span", {
      class: "tiny-grid-checkbox__label"
    }, getFuncText(headerTitle)) : null]);
    var dropdownVnode = null;
    if (slots && slots.dropdown) {
      dropdownVnode = h2("div", {
        class: "selection-dropdown-wrapper"
      }, [slots.dropdown(params, h2)]);
    }
    return [vnode, dropdownVnode];
  },
  renderSelectionCell: function renderSelectionCell(h2, params) {
    var _ref101;
    var $table = params.$table, column = params.column, row2 = params.row;
    var slots = column.slots;
    var _$table$selectConfig2 = $table.selectConfig, selectConfig = _$table$selectConfig2 === void 0 ? {} : _$table$selectConfig2, treeConfig = $table.treeConfig, treeIndeterminates = $table.treeIndeterminates, vSize5 = $table.vSize;
    var labelField = selectConfig.labelField, checkMethod = selectConfig.checkMethod;
    var _ref100 = {}, _ref100$indeterminate = _ref100.indeterminate, indeterminate = _ref100$indeterminate === void 0 ? false : _ref100$indeterminate, _ref100$isDisabled = _ref100.isDisabled, isDisabled = _ref100$isDisabled === void 0 ? !!checkMethod : _ref100$isDisabled;
    var options = {
      attrs: {
        type: "checkbox"
      }
    };
    if (slots && slots.default) {
      return slots.default(params, h2);
    }
    checkMethod && (options.attrs.disabled = isDisabled = !checkMethod(params));
    treeConfig && (indeterminate = ~treeIndeterminates.indexOf(row2));
    options.domProps = {
      checked: ~$table.selection.indexOf(row2)
    };
    options.on = {
      change: function change(event) {
        $table.triggerCheckRowEvent(event, params, event.target.checked);
        $table.showSelectToolbar();
      }
    };
    var twcls = params.twcls;
    var labelCls = ["tiny-grid-checkbox tiny-select-cell", (_ref101 = {}, _ref101["size__" + vSize5] = vSize5, _ref101["is__indeterminate"] = indeterminate, _ref101["is__disabled"] = isDisabled, _ref101)];
    var inputCls = null;
    var spanCls = "tiny-grid-checkbox__icon";
    var svgCls = "tiny-svg-size icon-checked-sur";
    if (twcls) {
      labelCls = twcls.label || labelCls;
      inputCls = twcls.input || inputCls;
      spanCls = twcls.span || spanCls;
      svgCls = twcls.svg || svgCls;
      options.class = inputCls;
    }
    var vnode = h2("label", {
      class: labelCls,
      key: random()
    }, [h2("input", options), h2("span", {
      class: spanCls
    }, [h2(index$V(), {
      class: ["tiny-svg-size", "icon-check"]
    }), h2(index$U(), {
      class: svgCls
    }), indeterminate ? h2(index$W(), {
      class: "tiny-svg-size icon-half-select"
    }) : ""]), labelField ? h2("span", {
      class: "tiny-grid-checkbox__label"
    }, get_default(row2, labelField)) : null]);
    return [vnode];
  },
  renderTreeSelectionCell: function renderTreeSelectionCell(h2, params) {
    return Cell.renderTreeIcon(h2, params).concat(Cell.renderSelectionCell(h2, params));
  },
  renderSelectionCellByProp: function renderSelectionCellByProp(h2, params) {
    var _ref103;
    var $table = params.$table, column = params.column, row2 = params.row;
    var slots = column.slots;
    var _$table$selectConfig3 = $table.selectConfig, selectConfig = _$table$selectConfig3 === void 0 ? {} : _$table$selectConfig3, treeConfig = $table.treeConfig, treeIndeterminates = $table.treeIndeterminates, vSize5 = $table.vSize;
    var property2 = selectConfig.checkField, checkMethod = selectConfig.checkMethod, labelField = selectConfig.labelField;
    var _ref102 = {}, _ref102$indeterminate = _ref102.indeterminate, indeterminate = _ref102$indeterminate === void 0 ? false : _ref102$indeterminate, _ref102$isDisabled = _ref102.isDisabled, isDisabled = _ref102$isDisabled === void 0 ? !!checkMethod : _ref102$isDisabled;
    var options = {
      attrs: {
        type: "checkbox"
      }
    };
    if (slots && slots.default) {
      return slots.default(params, h2);
    }
    checkMethod && (options.attrs.disabled = isDisabled = !checkMethod(params));
    treeConfig && (indeterminate = ~treeIndeterminates.indexOf(row2));
    options.domProps = {
      checked: get_default(row2, property2)
    };
    options.on = {
      change: function change(event) {
        $table.triggerCheckRowEvent(event, params, event.target.checked);
      }
    };
    var vnode = h2("label", {
      key: random(),
      class: ["tiny-grid-checkbox", (_ref103 = {}, _ref103["size__" + vSize5] = vSize5, _ref103["is__indeterminate"] = indeterminate, _ref103["is__disabled"] = isDisabled, _ref103)]
    }, [h2("input", options), h2("span", {
      class: "tiny-grid-checkbox__icon"
    }, [h2(index$V(), {
      class: ["tiny-svg-size", "icon-check"]
    }), !indeterminate ? "" : h2(index$W(), {
      class: ["tiny-svg-size", "icon-half-select"]
    }), h2(index$U(), {
      class: ["tiny-svg-size", "icon-checked-sur"]
    })]), labelField ? h2("span", {
      class: "tiny-grid-checkbox__label"
    }, get_default(row2, labelField)) : null]);
    return [vnode];
  },
  renderTreeSelectionCellByProp: function renderTreeSelectionCellByProp(h2, params) {
    return Cell.renderTreeIcon(h2, params).concat(Cell.renderSelectionCellByProp(h2, params));
  },
  // 展开行
  renderExpandCell: function renderExpandCell(h2, params) {
    var _ref104;
    var $table = params.$table, row2 = params.row;
    var _$table$expandConfig3 = $table.expandConfig, expandConfig = _$table$expandConfig3 === void 0 ? {} : _$table$expandConfig3;
    var _expandConfig$showIco = expandConfig.showIcon, showIcon = _expandConfig$showIco === void 0 ? true : _expandConfig$showIco, expandMethod = expandConfig.activeMethod;
    var hideExpand = typeof expandMethod === "function" ? expandMethod(row2) : true;
    var expandActive = $table.expandeds.includes(params.row);
    if (!showIcon)
      return null;
    var map2 = {
      expandActive: "expand__active"
    };
    return [h2("span", {
      class: ["tiny-grid__expanded", (_ref104 = {}, _ref104[map2.expandActive] = expandActive, _ref104)],
      on: {
        click: function click(event) {
          if (!hideExpand) {
            return;
          }
          $table.triggerRowExpandEvent(event, params);
        }
      }
    }, [hideExpand && h2("i", {
      class: "tiny-grid__expand-icon"
    })])];
  },
  renderExpandData: function renderExpandData(h2, params) {
    var slots = params.column.slots;
    if (slots && slots.default) {
      return slots.default(params, h2);
    }
    return [];
  },
  // 排序和筛选
  renderSortAndFilterHeader: function renderSortAndFilterHeader(h2, params) {
    var suffixCls = Cell.getSuffixCls(params);
    return Cell.renderHeader(h2, params).concat(Cell.renderFilterIcon(h2, params, suffixCls[0])).concat(Cell.renderSortIcon(h2, params, suffixCls[1]));
  },
  // 排序
  renderSortHeader: function renderSortHeader(h2, params) {
    var suffixCls = Cell.getSuffixCls(params);
    return Cell.renderHeader(h2, params).concat(Cell.renderSortIcon(h2, params, suffixCls[1]));
  },
  renderSortIcon: function renderSortIcon(h2, params, cls) {
    if (cls === void 0) {
      cls = "";
    }
    var icon = GlobalConfig$1.icon;
    var $table = params.$table, column = params.column;
    var isColGroup = column.children && column.children.length;
    return [h2("span", {
      class: "tiny-grid-sort-wrapper " + cls
    }, isColGroup ? [] : [column.order === "desc" || !icon.sortDefault ? h2(icon.sortAsc, {
      class: ["tiny-grid-sort__btn", {
        "sort__active": column.order === (!icon.sortDefault ? "asc" : "desc")
      }],
      on: {
        click: function click(event) {
          $table.triggerSortEvent(event, column, !icon.sortDefault ? "asc" : "");
        }
      }
    }) : "", column.order === "asc" || !icon.sortDefault ? h2(icon.sortDesc, {
      class: ["tiny-grid-sort__btn", {
        "sort__active": column.order === (!icon.sortDefault ? "desc" : "asc")
      }],
      on: {
        click: function click(event) {
          $table.triggerSortEvent(event, column, "desc");
        }
      }
    }) : "", !column.order && icon.sortDefault ? h2(icon.sortDefault, {
      class: ["tiny-grid-sort__btn"],
      on: {
        click: function click(event) {
          $table.triggerSortEvent(event, column, "asc");
        }
      }
    }) : ""])];
  },
  // 筛选
  renderFilterHeader: function renderFilterHeader(h2, params) {
    var suffixCls = Cell.getSuffixCls(params);
    return Cell.renderHeader(h2, params).concat(Cell.renderFilterIcon(h2, params, suffixCls[1]));
  },
  renderFilterIcon: function renderFilterIcon(h2, params, cls) {
    var _ref105, _ref106;
    if (cls === void 0) {
      cls = "";
    }
    var $table = params.$table, column = params.column;
    var filterStore = $table.filterStore;
    var icon = GlobalConfig$1.icon;
    var map2 = {
      isActive: "is__active",
      hasFilter: "has__Filter"
    };
    return [h2("span", {
      class: ["tiny-grid-filter-wrapper " + cls, (_ref105 = {}, _ref105[map2.isActive] = filterStore.visible && filterStore.column === column, _ref105)]
    }, [h2(icon.filter, {
      class: ["tiny-svg-size tiny-grid-filter__btn " + column.id, (_ref106 = {}, _ref106[map2.hasFilter] = column.filter && column.filter.hasFilter, _ref106)],
      on: {
        click: function click(event) {
          $table.triggerFilterEvent(event, params.column, params);
        }
      }
    })])];
  },
  // 可编辑
  renderEditHeader: function renderEditHeader(h2, params) {
    var $table = params.$table, column = params.column;
    var editConfig = $table.editConfig, editRules = $table.editRules, validOpts2 = $table.validOpts;
    var filter2 = column.filter, remoteSort = column.remoteSort, sortable = column.sortable, type = column.type, own = column.own;
    var icon = GlobalConfig$1.icon;
    var isRequired;
    sortable = $table.sortable && !type && sortable;
    var suffixCls = Cell.getSuffixCls(params);
    var isRenderSortIcon = sortable || remoteSort;
    var columnRules;
    if (editRules) {
      columnRules = get_default(editRules, params.column.property);
    }
    if (editRules && columnRules && !Array.isArray(columnRules)) {
      columnRules = [columnRules];
    }
    if (editRules && columnRules) {
      isRequired = columnRules.some(function(rule) {
        return rule.required;
      });
    }
    var showAsterisk = typeof validOpts2.asteriskMethod !== "function" || validOpts2.asteriskMethod(params);
    var vNodes = [isRequired && showAsterisk ? h2("i", {
      class: "tiny-icon " + icon.required
    }) : null, !editConfig || !own.showIcon ? null : h2(icon.edit, {
      class: "tiny-grid-edit-icon tiny-svg-size"
    })];
    vNodes = vNodes.concat(Cell.renderHeader(h2, params));
    vNodes = vNodes.concat(filter2 ? Cell.renderFilterIcon(h2, params, isRenderSortIcon ? suffixCls[0] : suffixCls[1]) : []);
    vNodes = vNodes.concat(isRenderSortIcon ? Cell.renderSortIcon(h2, params, suffixCls[1]) : []);
    return vNodes;
  },
  renderTreeRowEdit: function renderTreeRowEdit(h2, params) {
    return Cell.renderTreeIcon(h2, params).concat(Cell.renderRowEdit(h2, params));
  },
  // 行格编辑模式
  renderRowEdit: function renderRowEdit(h2, params) {
    var actived = params.$table.editStore.actived;
    return Cell.runRenderer(h2, params, this, actived && actived.row === params.row);
  },
  renderTreeCellEdit: function renderTreeCellEdit(h2, params) {
    return Cell.renderTreeIcon(h2, params).concat(Cell.renderCellEdit(h2, params));
  },
  // 单元格编辑模式
  renderCellEdit: function renderCellEdit(h2, params) {
    var actived = params.$table.editStore.actived;
    return Cell.runRenderer(h2, params, this, actived && actived.row === params.row && actived.column === params.column);
  },
  runRenderer: function runRenderer(h2, params, _vm, isEdit) {
    var $table = params.$table, column = params.column, row2 = params.row;
    var formatText2 = column.formatText, own = column.own, slots = column.slots;
    var editor = own.editor;
    var compConf = Renderer$1.get(editor.component);
    var showEdit = editor.type === "visible" || isEdit;
    if (showEdit && slots && slots.edit) {
      return slots.edit(params, h2);
    }
    if (showEdit && typeof editor === "function") {
      return [editor(h2, params)];
    }
    if (showEdit && compConf && compConf.renderEdit) {
      return compConf.renderEdit.call($table, h2, editor, params, {
        $type: "edit",
        $excel: $table.$parent,
        $table,
        $column: column
      });
    }
    if (showEdit) {
      return [];
    }
    if (slots && slots.default) {
      return slots.default(params, h2);
    }
    if (formatText2) {
      var cellValue = getCellLabel(row2, column, params);
      if (typeof cellValue === "function") {
        return [cellValue(h2)];
      }
      return [cellValue];
    }
    return Cell.renderCell.call(_vm, h2, params);
  },
  getSuffixCls: function getSuffixCls(params) {
    return params.$table.headerSuffixIconAbsolute ? ["suffix-icon-1", "suffix-icon-0"] : ["", ""];
  },
  renderOperationCell: function renderOperationCell(h2, params) {
    var column = params.column, $table = params.$table, row2 = params.row;
    var _column$operationConf = column.operationConfig, operationConfig = _column$operationConf === void 0 ? {} : _column$operationConf, slots = column.slots;
    if (slots && slots.default) {
      return slots.default(params, h2);
    }
    var _operationConfig$butt = operationConfig.buttons, buttons = _operationConfig$butt === void 0 ? [] : _operationConfig$butt, render18 = operationConfig.render, _operationConfig$max = operationConfig.max, max = _operationConfig$max === void 0 ? 3 : _operationConfig$max, _operationConfig$disa = operationConfig.disabledClass, disabledClass = _operationConfig$disa === void 0 ? "" : _operationConfig$disa;
    var viewClass = $table.viewCls("operButton");
    if (render18) {
      return render18({
        h: h2,
        buttons,
        params
      });
    }
    var renderBase2 = function renderBase3(buttonConfig, flag, classes2, attrs) {
      var mergeParams = _extends({
        buttonConfig
      }, params);
      var on2 = {
        click: function click(e) {
          if (!isDisabled(buttonConfig) && isFunction_default(buttonConfig.click)) {
            buttonConfig.click(e, mergeParams);
          }
        }
      };
      classes2 = classes2.join(" ");
      var clazz = isDisabled(buttonConfig) ? [classes2, "tiny-grid__oper-col-button--disabled", disabledClass] : classes2;
      var childNodes = isFunction_default(buttonConfig.icon) ? [runRender(buttonConfig.icon, h2, mergeParams)] : [h2(buttonConfig.icon)];
      return flag ? h2("span", {
        class: clazz,
        attrs,
        on: on2
      }, childNodes) : null;
    };
    var renderBig = function renderBig2(buttonConfig, cls) {
      if (cls === void 0) {
        cls = "";
      }
      var classes2 = ["tiny-grid__oper-col-button", buttonConfig.class || "", cls];
      var attrs = {
        title: buttonConfig.name || ""
      };
      return renderBase2(buttonConfig, buttonConfig.icon, classes2, attrs);
    };
    var isDisabled = function isDisabled2(buttonConfig) {
      var _buttonConfig$disable = buttonConfig.disabled, disabled = _buttonConfig$disable === void 0 ? false : _buttonConfig$disable;
      return typeof disabled === "boolean" && disabled || typeof disabled === "function" && disabled(row2);
    };
    var isHidden = function isHidden2(buttonConfig) {
      var _buttonConfig$hidden = buttonConfig.hidden, hidden = _buttonConfig$hidden === void 0 ? false : _buttonConfig$hidden;
      return typeof hidden === "boolean" && hidden || typeof hidden === "function" && hidden(row2);
    };
    var handleItemClick = function handleItemClick2(itemData) {
      var realName = (itemData == null ? void 0 : itemData.name) || itemData;
      var buttonConfig = visibleButtons.find(function(_ref107) {
        var buttonName = _ref107.name;
        return buttonName === realName;
      });
      buttonConfig.click(window.event || {}, _extends({
        buttonConfig
      }, params));
    };
    var visibleButtons = [];
    buttons.forEach(function(buttonConfig) {
      return !isHidden(buttonConfig) && visibleButtons.push(buttonConfig);
    });
    var groupBig;
    if (visibleButtons.length > max) {
      var end = max - 1;
      groupBig = visibleButtons.slice(0, end).map(function(buttonConfig) {
        return renderBig(buttonConfig, viewClass);
      });
      groupBig.push(h2(Dropdown, {
        on: {
          "item-click": handleItemClick
        },
        props: {
          trigger: "hover",
          showIcon: false
        }
      }, [h2(index$z(), {
        class: "tiny-grid__oper-col-elps"
      }), h2(DropdownMenu, {
        slot: "dropdown"
      }, visibleButtons.slice(end).map(function(buttonConfig) {
        var _class2;
        return h2(DropdownItem, {
          class: (_class2 = {}, _class2[disabledClass || ""] = isDisabled(buttonConfig), _class2),
          props: {
            itemData: buttonConfig,
            disabled: isDisabled(buttonConfig)
          }
        }, buttonConfig.name);
      }))]));
    } else {
      groupBig = visibleButtons.map(function(buttonConfig) {
        return renderBig(buttonConfig, viewClass);
      });
    }
    return [h2("span", {
      class: "inline-flex"
    }, groupBig)];
  }
};
var CellDefault = Cell;
function setTableElemWidth(_ref108) {
  var scrollbarWidth = _ref108.scrollbarWidth, tWidth = _ref108.tWidth, tableElem = _ref108.tableElem;
  if (tableElem && tWidth === null) {
    tableElem.style.width = tWidth;
  }
  if (tableElem && tWidth !== null) {
    tableElem.style.width = tWidth + scrollbarWidth + "px";
  }
}
function getTableWidth(_ref109) {
  var scrollXLoad = _ref109.scrollXLoad, tWidth = _ref109.tWidth, tableColumn3 = _ref109.tableColumn;
  if (scrollXLoad) {
    tWidth = tableColumn3.reduce(function(previous, column) {
      return previous + column.renderWidth;
    }, 0);
  }
  return {
    tableColumn: tableColumn3,
    tWidth
  };
}
function layoutFooter(_ref110) {
  var customHeight = _ref110.customHeight, footerHeight = _ref110.footerHeight, headerHeight = _ref110.headerHeight, scrollXLoad = _ref110.scrollXLoad, scrollbarWidth = _ref110.scrollbarWidth, tableElem = _ref110.tableElem, scrollbarHeight = _ref110.scrollbarHeight, tableColumn3 = _ref110.tableColumn, tableHeight = _ref110.tableHeight, tableWidth = _ref110.tableWidth, wrapperElem = _ref110.wrapperElem, fixedWrapperElem = _ref110.fixedWrapperElem;
  var tWidth = tableWidth;
  var ret = getTableWidth({
    scrollXLoad,
    tWidth,
    tableColumn: tableColumn3
  });
  tableColumn3 = ret.tableColumn;
  tWidth = ret.tWidth;
  if (wrapperElem && fixedWrapperElem) {
    wrapperElem.style.top = (customHeight ? customHeight - footerHeight : tableHeight + headerHeight) + "px";
  }
  if (wrapperElem) {
    wrapperElem.style.marginTop = -scrollbarHeight - 1 + "px";
  }
  setTableElemWidth({
    scrollbarWidth,
    tWidth,
    tableElem
  });
  return tableColumn3;
}
function layoutColgroup(_ref111) {
  var elemStore = _ref111.elemStore, fullColumnIdData = _ref111.fullColumnIdData, layout = _ref111.layout, scrollbarWidth = _ref111.scrollbarWidth;
  var colgroupElem = elemStore["main-" + layout + "-colgroup"];
  var colElemHandler = function colElemHandler2(colElem) {
    var colid = colElem.getAttribute("name");
    if (colid === "col_gutter") {
      colElem.width = "" + (scrollbarWidth || "");
    }
    if (fullColumnIdData[colid]) {
      var column = fullColumnIdData[colid].column;
      colElem.width = "" + (column.renderWidth || "");
    }
  };
  if (colgroupElem) {
    arrayEach_default(colgroupElem.children, colElemHandler);
  }
}
function layoutHeader(_ref112) {
  var elemStore = _ref112.elemStore, layout = _ref112.layout, scrollXLoad = _ref112.scrollXLoad, scrollbarWidth = _ref112.scrollbarWidth, tableColumn3 = _ref112.tableColumn, tableElem = _ref112.tableElem, tableWidth = _ref112.tableWidth;
  var tWidth = tableWidth;
  var repairElem = elemStore["main-" + layout + "-repair"];
  if (scrollXLoad) {
    tWidth = tableColumn3.reduce(function(previous, column) {
      return previous + column.renderWidth;
    }, 0);
  }
  setTableElemWidth({
    scrollbarWidth,
    tWidth,
    tableElem
  });
  if (repairElem) {
    repairElem.style.width = tableWidth + "px";
  }
  return tableColumn3;
}
function layoutTable(_ref113) {
  var tWidth = _ref113.tWidth, tableElem = _ref113.tableElem;
  if (tableElem) {
    tableElem.style.width = tWidth ? tWidth + "px" : tWidth;
  }
}
function layoutBodyWrapper(_ref114) {
  var footerHeight = _ref114.footerHeight, customHeight = _ref114.customHeight, headerHeight = _ref114.headerHeight, maxHeight = _ref114.maxHeight, minHeight = _ref114.minHeight, parentHeight2 = _ref114.parentHeight, wrapperElem = _ref114.wrapperElem, scrollbarWidth = _ref114.scrollbarWidth;
  if (wrapperElem) {
    if (customHeight > 0) {
      var contentHeight = customHeight - headerHeight - footerHeight;
      wrapperElem.style.height = contentHeight + "px";
    }
    if (maxHeight) {
      maxHeight = isScale(maxHeight) ? Math.floor(parseInt(maxHeight) / 100 * parentHeight2) : toNumber_default(maxHeight);
      var _contentHeight = maxHeight - headerHeight;
      wrapperElem.style.maxHeight = _contentHeight + "px";
    }
    if (minHeight) {
      minHeight = isScale(minHeight) ? Math.floor(parseInt(minHeight) / 100 * parentHeight2) : toNumber_default(minHeight);
      if (maxHeight) {
        var outerHeight = headerHeight + scrollbarWidth;
        if (maxHeight - minHeight < outerHeight) {
          minHeight = maxHeight - outerHeight;
        }
      }
      wrapperElem.style.minHeight = minHeight + "px";
    }
  }
  return {
    maxHeight,
    minHeight
  };
}
function layoutEmptyBlock(_ref115) {
  var emptyBlockElem = _ref115.emptyBlockElem, tWidth = _ref115.tWidth;
  if (emptyBlockElem) {
    emptyBlockElem.style.width = tWidth ? tWidth + "px" : tWidth || "";
  }
}
function layoutBody(options) {
  var customHeight = options.customHeight, elemStore = options.elemStore, footerHeight = options.footerHeight, headerHeight = options.headerHeight, layout = options.layout;
  var maxHeight = options.maxHeight, minHeight = options.minHeight, parentHeight2 = options.parentHeight, scrollXLoad = options.scrollXLoad;
  var scrollbarWidth = options.scrollbarWidth, tableColumn3 = options.tableColumn, tableElem = options.tableElem, tableWidth = options.tableWidth, wrapperElem = options.wrapperElem;
  var emptyBlockElem = elemStore["main-" + layout + "-emptyBlock"];
  var ret = layoutBodyWrapper({
    customHeight,
    footerHeight,
    headerHeight,
    maxHeight,
    minHeight,
    parentHeight: parentHeight2,
    scrollbarWidth,
    wrapperElem
  });
  maxHeight = ret.maxHeight;
  minHeight = ret.minHeight;
  var tWidth = tableWidth;
  ret = getTableWidth({
    scrollXLoad,
    tWidth,
    tableColumn: tableColumn3
  });
  tableColumn3 = ret.tableColumn;
  tWidth = ret.tWidth;
  layoutTable({
    tWidth,
    tableElem
  });
  layoutEmptyBlock({
    emptyBlockElem,
    tWidth
  });
  return {
    maxHeight,
    minHeight,
    tableColumn: tableColumn3
  };
}
function handleLayout(params) {
  var _vm = params._vm, columnStore = params.columnStore, customHeight = params.customHeight, fixedColumn = params.fixedColumn, fixedWrapperElem = params.fixedWrapperElem, layout = params.layout, maxHeight = params.maxHeight, minHeight = params.minHeight, parentHeight2 = params.parentHeight, tableColumn3 = params.tableColumn;
  var elemStore = _vm.elemStore, footerHeight = _vm.footerHeight, fullColumnIdData = _vm.fullColumnIdData, headerHeight = _vm.headerHeight, showFooter = _vm.showFooter;
  var overflowX = _vm.overflowX, overflowY = _vm.overflowY, scrollXLoad = _vm.scrollXLoad, scrollbarHeight = _vm.scrollbarHeight, scrollbarWidth = _vm.scrollbarWidth;
  var allColumnOverflow = _vm.showOverflow, tableHeight = _vm.tableHeight, tableWidth = _vm.tableWidth;
  var wrapperElem = elemStore["main-" + layout + "-wrapper"];
  var tableElem = elemStore["main-" + layout + "-table"];
  if (layout === "header") {
    tableColumn3 = layoutHeader({
      elemStore,
      layout,
      scrollXLoad,
      scrollbarWidth,
      tableColumn: tableColumn3,
      tableElem,
      tableWidth
    });
  } else if (layout === "body") {
    var ret = layoutBody(_extends({}, {
      allColumnOverflow,
      columnStore,
      customHeight,
      elemStore,
      fixedColumn,
      fixedWrapperElem
    }, {
      footerHeight,
      headerHeight,
      layout,
      maxHeight,
      minHeight,
      overflowX,
      overflowY
    }, {
      parentHeight: parentHeight2,
      scrollXLoad,
      scrollbarHeight,
      scrollbarWidth,
      showFooter,
      tableColumn: tableColumn3,
      tableElem,
      tableHeight,
      tableWidth,
      wrapperElem
    }));
    maxHeight = ret.maxHeight;
    minHeight = ret.minHeight;
    tableColumn3 = ret.tableColumn;
  } else if (layout === "footer") {
    tableColumn3 = layoutFooter({
      customHeight,
      fixedWrapperElem,
      footerHeight,
      headerHeight,
      scrollXLoad,
      scrollbarHeight,
      scrollbarWidth,
      tableColumn: tableColumn3,
      tableElem,
      tableHeight,
      tableWidth,
      wrapperElem
    });
  }
  layoutColgroup({
    elemStore,
    fullColumnIdData,
    layout,
    scrollbarWidth
  });
  return {
    tableColumn: tableColumn3,
    maxHeight,
    minHeight
  };
}
function isTargetRadioOrCheckbox(event, column, colType, targetType) {
  var target = event.target;
  return target && column.type === colType && target.tagName.toLowerCase() === "input" && target.type === (targetType || colType);
}
function onClickExpandColumn(_ref116) {
  var $el = _ref116.$el, _vm = _ref116._vm, column = _ref116.column, event = _ref116.event, expandConfig = _ref116.expandConfig, params = _ref116.params;
  if ((expandConfig.trigger === "row" || column.type === "expand" && expandConfig.trigger === "cell") && !_vm.getEventTargetNode(event, $el, "tiny-grid__expanded").flag) {
    _vm.triggerRowExpandEvent(event, params);
  }
}
function onClickTreeNodeColumn(_ref117) {
  var _vm = _ref117._vm, column = _ref117.column, event = _ref117.event, params = _ref117.params, treeConfig = _ref117.treeConfig;
  if (treeConfig.trigger === "row" || column.treeNode && treeConfig.trigger === "cell") {
    _vm.triggerTreeExpandEvent(event, params);
  }
}
function onHighlightCurrentRow(_ref118) {
  var $el = _ref118.$el, _vm = _ref118._vm, event = _ref118.event, highlightCurrentRow = _ref118.highlightCurrentRow, params = _ref118.params, radioConfig = _ref118.radioConfig;
  if (highlightCurrentRow) {
    if (radioConfig.trigger === "row" || !_vm.getEventTargetNode(event, $el, "tiny-grid-checkbox").flag && !_vm.getEventTargetNode(event, $el, "tiny-grid-radio").flag) {
      _vm.triggerCurrentRowEvent(event, params);
    }
  }
}
function onClickRadioColumn(_ref119) {
  var $el = _ref119.$el, _vm = _ref119._vm, column = _ref119.column, event = _ref119.event, params = _ref119.params, radioConfig = _ref119.radioConfig;
  if ((radioConfig.trigger === "row" || column.type === "radio" && radioConfig.trigger === "cell") && !_vm.getEventTargetNode(event, $el, "tiny-grid-radio").flag) {
    _vm.triggerRadioRowEvent(event, params);
  }
}
function onClickSelectColumn(_ref120) {
  var _vm = _ref120._vm, column = _ref120.column, event = _ref120.event, params = _ref120.params, selectConfig = _ref120.selectConfig;
  if ((selectConfig.trigger === "row" || column.type === "selection" && selectConfig.trigger === "cell") && !_vm.getEventTargetNode(event, params.cell, "tiny-grid-checkbox").flag) {
    _vm.handleToggleCheckRowEvent(params, event);
  }
}
function onClickCellSelect(_ref121) {
  var _vm = _ref121._vm, actived = _ref121.actived, cell = _ref121.cell, column = _ref121.column, editConfig = _ref121.editConfig, event = _ref121.event, mouseConfig = _ref121.mouseConfig, params = _ref121.params, row2 = _ref121.row;
  if (!mouseConfig.checked && editConfig) {
    if (editConfig.trigger === "manual") {
      if (actived.args && actived.row === row2 && column !== actived.column) {
        _vm.handleChangeCell(event, params);
      }
    } else if (!actived.args || cell !== actived.args.cell) {
      if (editConfig.trigger === "click") {
        _vm.handleChangeCell(event, params);
      } else if (editConfig.trigger === "dblclick") {
        if (editConfig.mode === "row" && actived.row === params.row) {
          _vm.handleChangeCell(event, params);
        } else {
          _vm.handleSelected(params, event);
        }
      }
    }
  }
}
function onGroupHeader(_ref122) {
  var _vm = _ref122._vm, isGroup2 = _ref122.isGroup, headerProps2 = _ref122.headerProps;
  if (isGroup2) {
    eachTree_default(_vm.collectColumn, function(column) {
      if (column.children && column.children.length) {
        column.visible = !!findTree_default(column.children, function(subColumn) {
          return subColumn.children && subColumn.children.length ? 0 : subColumn.visible;
        }, headerProps2);
      }
    }, headerProps2);
  }
}
function reassignNotFixed(_ref123) {
  var centerList = _ref123.centerList, column = _ref123.column;
  if (!column.fixed) {
    centerList.push(column);
  }
}
function reassignFixedRight(_ref124) {
  var column = _ref124.column, columnIndex = _ref124.columnIndex, isColspan = _ref124.isColspan, rightEndIndex = _ref124.rightEndIndex, rightList = _ref124.rightList;
  if (column.fixed === "right") {
    if (!isColspan) {
      if (rightEndIndex === null) {
        rightEndIndex = columnIndex;
      }
      if (columnIndex - rightEndIndex !== 0) {
        isColspan = true;
      } else {
        rightEndIndex++;
      }
    }
    rightList.push(column);
  }
  return {
    isColspan,
    rightEndIndex
  };
}
function reassignFixedLeft(_ref125) {
  var column = _ref125.column, columnIndex = _ref125.columnIndex, isColspan = _ref125.isColspan, leftList = _ref125.leftList, leftStartIndex = _ref125.leftStartIndex, letIndex = _ref125.letIndex;
  if (column.fixed === "left") {
    if (leftStartIndex === null) {
      leftStartIndex = letIndex;
    }
    if (!isColspan) {
      if (columnIndex - letIndex !== 0) {
        isColspan = true;
      } else {
        letIndex++;
      }
    }
    leftList.push(column);
  }
  return {
    leftStartIndex,
    letIndex,
    isColspan
  };
}
function showGroupFixedError(_ref126) {
  var isColspan = _ref126.isColspan, isGroup2 = _ref126.isGroup, leftStartIndex = _ref126.leftStartIndex, rightEndIndex = _ref126.rightEndIndex, visibleColumn = _ref126.visibleColumn;
  if (isGroup2 && (isColspan || leftStartIndex || rightEndIndex !== null && rightEndIndex !== visibleColumn.length)) {
    error("ui.grid.error.groupFixed");
  }
}
function onScrollXLoad(_ref127) {
  var _vm = _ref127._vm, scrollX = _ref127.scrollX, scrollXLoad = _ref127.scrollXLoad, scrollXStore = _ref127.scrollXStore, tableColumn3 = _ref127.tableColumn, visibleColumn = _ref127.visibleColumn;
  if (scrollXLoad) {
    if (_vm.resizable || visibleColumn.some(function(column) {
      return column.resizable;
    })) {
      warn$1("ui.grid.error.notResizable");
    }
    Object.assign(scrollXStore, {
      startIndex: 0,
      visibleIndex: 0,
      renderSize: toNumber_default(scrollX.rSize),
      offsetSize: toNumber_default(scrollX.oSize)
    });
    tableColumn3 = visibleColumn.slice(scrollXStore.startIndex, scrollXStore.startIndex + scrollXStore.renderSize);
  }
  return tableColumn3;
}
function mapFetchColumnPromise(_ref128) {
  var _vm = _ref128._vm, fetchColumns = _ref128.fetchColumns, tableColumn3 = _ref128.tableColumn;
  return fetchColumns.map(function(_ref129) {
    var format2 = _ref129.format, columnValues = _ref129.columnValues;
    return format2.async.fetch({
      columns: tableColumn3,
      columnValues,
      $table: _vm
    });
  });
}
function preprocessDataObjectFormat(_ref130) {
  var columnCount = _ref130.columnCount, columnValues = _ref130.columnValues, columnValuesMap = _ref130.columnValuesMap, fields = _ref130.fields;
  if (columnCount) {
    columnValues.forEach(function(col) {
      if (typeof col === "object") {
        var label = get_default(col, fields.text || "label");
        var value = get_default(col, fields.value || "value");
        col.label = label;
        columnValuesMap[value] = col;
      }
    });
  }
}
function preventDupRender(_ref131) {
  var asyncColumnName = _ref131.asyncColumnName, cellTexts = _ref131.cellTexts, cellValuesCount = _ref131.cellValuesCount, columnData = _ref131.columnData, columnValuesMap = _ref131.columnValuesMap, isRender = _ref131.isRender, property2 = _ref131.property, renderCount = _ref131.renderCount, row2 = _ref131.row, splitConfig = _ref131.splitConfig;
  var cellEachIndex = 0;
  if (!isRender && cellValuesCount) {
    var cellLabel;
    var cellValues = [row2[property2]];
    if (splitConfig.enabled === true) {
      cellValues = (row2[property2] || "").split(splitConfig.valueSplit || ",");
    }
    while (cellEachIndex < cellValuesCount) {
      var activeValue = cellValues[cellEachIndex];
      var currentRow = columnValuesMap[activeValue];
      cellLabel = typeof currentRow === "object" ? currentRow.label : currentRow;
      cellTexts.push(cellLabel);
      columnData.push({
        label: cellLabel,
        value: cellValues[cellEachIndex],
        row: currentRow
      });
      cellEachIndex++;
      renderCount++;
    }
    row2[asyncColumnName] = cellTexts.join(splitConfig.textSplit || ",");
  }
  return renderCount;
}
function handleResolveColumnComplete(_ref132) {
  var _vm = _ref132._vm, columnData = _ref132.columnData, complete = _ref132.complete;
  if (typeof complete === "function") {
    complete({
      columnData,
      $table: _vm
    });
  }
}
var isWebkit = browser_default["-webkit"];
function computeScrollYLoad(_ref133) {
  var _vm = _ref133._vm, scrollLoad = _ref133.scrollLoad, scrollY = _ref133.scrollY, scrollYLoad = _ref133.scrollYLoad, scrollYStore = _ref133.scrollYStore, tableBodyElem = _ref133.tableBodyElem;
  if (scrollYLoad || scrollLoad) {
    scrollYStore.rowHeight = _vm.getRowHeight();
  }
  if (scrollYLoad) {
    var visibleYSize = toNumber_default(scrollY.vSize || Math.ceil(tableBodyElem.clientHeight / scrollYStore.rowHeight));
    scrollYStore.visibleSize = visibleYSize;
    if (!scrollY.oSize) {
      scrollYStore.offsetSize = visibleYSize;
    }
    if (!scrollY.rSize) {
      scrollYStore.renderSize = visibleYSize + (isWebkit ? 2 : visibleYSize);
    }
    _vm.updateScrollYData();
  } else {
    _vm.updateScrollYSpace();
  }
}
function computeScrollXLoad(_ref134) {
  var _vm = _ref134._vm, scrollX = _ref134.scrollX, scrollXLoad = _ref134.scrollXLoad, scrollXStore = _ref134.scrollXStore, tableBodyElem = _ref134.tableBodyElem, visibleColumn = _ref134.visibleColumn;
  if (scrollXLoad) {
    var firstColumn = visibleColumn[0];
    var cWidth = firstColumn ? firstColumn.renderWidth : 40;
    var visibleXSize = toNumber_default(scrollX.vSize || Math.ceil(tableBodyElem.clientWidth / cWidth));
    scrollXStore.visibleSize = visibleXSize;
    if (!scrollX.oSize) {
      scrollXStore.offsetSize = visibleXSize;
    }
    if (!scrollX.rSize) {
      scrollXStore.renderSize = visibleXSize + 2;
    }
    _vm.updateScrollXData();
  } else {
    _vm.updateScrollXSpace();
  }
}
var adaptive = function adaptive2(_ref135) {
  var autoArr = _ref135.autoArr, meanWidth = _ref135.meanWidth, minCellWidth = _ref135.minCellWidth, tableWidth = _ref135.tableWidth, fit = _ref135.fit, bodyWidth = _ref135.bodyWidth;
  autoArr.forEach(function(column, index232) {
    var width = Math.max(meanWidth, minCellWidth);
    column.renderWidth = width;
    tableWidth += width;
    if (fit && index232 === autoArr.length - 1) {
      var odiffer = bodyWidth - tableWidth;
      if (odiffer > 0) {
        column.renderWidth += odiffer;
        tableWidth = bodyWidth;
      }
    }
  });
  return tableWidth;
};
var initTableWidth = function initTableWidth2(_ref136) {
  var remainWidth = _ref136.remainWidth, columnStore = _ref136.columnStore;
  var tableWidth = 0;
  var resizeArr = columnStore.resizeList, pxMinArr = columnStore.pxMinList, pxArr = columnStore.pxList;
  var scaleArr = columnStore.scaleList, scaleMinArr = columnStore.scaleMinList;
  pxMinArr.forEach(function(column) {
    var minWidth = parseInt(column.minWidth);
    tableWidth += minWidth;
    column.renderWidth = minWidth;
  });
  var meanWidth = remainWidth / 100;
  scaleMinArr.forEach(function(column) {
    var scaleWidth = Math.floor(parseInt(column.minWidth) * meanWidth);
    tableWidth += scaleWidth;
    column.renderWidth = scaleWidth;
  });
  scaleArr.forEach(function(column) {
    var scaleWidth = Math.floor(parseInt(column.width) * meanWidth);
    tableWidth += scaleWidth;
    column.renderWidth = scaleWidth;
  });
  pxArr.forEach(function(column) {
    var width = parseInt(column.width);
    tableWidth += width;
    column.renderWidth = width;
  });
  resizeArr.forEach(function(column) {
    var width = parseInt(column.resizeWidth);
    tableWidth += width;
    column.renderWidth = width;
  });
  return {
    tableWidth,
    meanWidth
  };
};
var calcTableWidth = function calcTableWidth2(_ref137) {
  var bodyWidth = _ref137.bodyWidth, columnStore = _ref137.columnStore, fit = _ref137.fit, minCellWidth = _ref137.minCellWidth, remainWidth = _ref137.remainWidth;
  var _initTableWidth = initTableWidth({
    remainWidth,
    columnStore
  }), tableWidth = _initTableWidth.tableWidth, meanWidth = _initTableWidth.meanWidth;
  var pxMinArr = columnStore.pxMinList, scaleMinArr = columnStore.scaleMinList, autoArr = columnStore.autoList;
  remainWidth -= tableWidth;
  meanWidth = remainWidth > 0 ? Math.floor(remainWidth / (scaleMinArr.length + pxMinArr.length + autoArr.length)) : 0;
  if (fit) {
    if (remainWidth > 0) {
      scaleMinArr.concat(pxMinArr).forEach(function(column) {
        tableWidth += meanWidth;
        column.renderWidth += meanWidth;
      });
    }
  } else {
    meanWidth = minCellWidth;
  }
  tableWidth = adaptive({
    autoArr,
    meanWidth,
    minCellWidth,
    tableWidth,
    fit,
    bodyWidth
  });
  var remainingSpace = bodyWidth - tableWidth;
  if (fit && remainingSpace > 0) {
    scaleMinArr.concat(pxMinArr).slice(0, remainingSpace).forEach(function(column) {
      tableWidth += 1;
      column.renderWidth += 1;
    });
  }
  return tableWidth;
};
var setLeftOrRightPosition = function setLeftOrRightPosition2(_ref138) {
  var columnList = _ref138.columnList, direction = _ref138.direction, headerEl = _ref138.headerEl, bodyEl = _ref138.bodyEl, scrollbarWidth = _ref138.scrollbarWidth;
  var colList = columnList.slice();
  if (direction === "right") {
    colList.reverse();
  }
  colList.reduce(function(pos, column) {
    var ths = (headerEl == null ? void 0 : headerEl.querySelectorAll("[data-colid=" + column.id + "]")) || [];
    var tds = bodyEl.querySelectorAll("[data-colid=" + column.id + "]");
    var allFixed = [].concat(Array.from(ths), Array.from(tds));
    allFixed.forEach(function(td) {
      var compensatingWidth = 0;
      if (direction === "right" && scrollbarWidth && td.className.includes("header__column")) {
        compensatingWidth = scrollbarWidth;
      }
      td.style[direction] = pos + compensatingWidth + "px";
    });
    column.style = column.style || {};
    column.style[direction] = pos;
    pos += column.renderWidth;
    return pos;
  }, 0);
};
var setGroupHeaderPosition = function setGroupHeaderPosition2(_ref139) {
  var columnChart = _ref139.columnChart, direction = _ref139.direction;
  var colChart = columnChart.slice();
  if (direction === "right") {
    colChart.reverse();
  }
  colChart.forEach(function(columns2) {
    var _leafColumn$style$dir, _leafColumn$style;
    var len = columns2.length;
    if (len === 1) {
      return;
    }
    var leafColumn = columns2[len - 1];
    var leafDirectionPos = (_leafColumn$style$dir = leafColumn == null ? void 0 : (_leafColumn$style = leafColumn.style) == null ? void 0 : _leafColumn$style[direction]) != null ? _leafColumn$style$dir : null;
    if (leafDirectionPos !== null) {
      columns2.forEach(function(column) {
        var _column$style$directi;
        column.style = column.style || {};
        var pos = (_column$style$directi = column.style[direction]) != null ? _column$style$directi : null;
        if (pos === null) {
          column.style[direction] = leafDirectionPos;
        }
      });
    }
  });
};
var setGroupHeaderLastOrFirst = function setGroupHeaderLastOrFirst2(_ref140) {
  var columnChart = _ref140.columnChart, leftList = _ref140.leftList, rightList = _ref140.rightList;
  columnChart.forEach(function(columns2) {
    var len = columns2.length;
    var leafColumn = columns2[len - 1];
    var isFixedLeftLast = leftList[leftList.length - 1] === leafColumn;
    var isFixedRightFirst = rightList[0] === leafColumn;
    columns2.forEach(function(column) {
      column.isFixedLeftLast = column.isFixedLeftLast || isFixedLeftLast;
      column.isFixedRightFirst = column.isFixedRightFirst || isFixedRightFirst;
    });
  });
};
var calcFixedStickyPosition = function calcFixedStickyPosition2(_ref141) {
  var headerEl = _ref141.headerEl, bodyEl = _ref141.bodyEl, columnStore = _ref141.columnStore, scrollbarWidth = _ref141.scrollbarWidth, columnChart = _ref141.columnChart, isGroup2 = _ref141.isGroup;
  var leftList = columnStore.leftList, rightList = columnStore.rightList;
  setLeftOrRightPosition({
    columnList: leftList,
    direction: "left",
    headerEl,
    bodyEl,
    scrollbarWidth
  });
  setLeftOrRightPosition({
    columnList: rightList,
    direction: "right",
    headerEl,
    bodyEl,
    scrollbarWidth
  });
  if (isGroup2) {
    setGroupHeaderPosition({
      columnChart,
      direction: "left"
    });
    setGroupHeaderPosition({
      columnChart,
      direction: "right"
    });
    setGroupHeaderLastOrFirst({
      columnChart,
      leftList,
      rightList
    });
  }
};
var funcs = ["closeMenu", "getMouseSelecteds", "getMouseCheckeds", "clearCopyed", "clearChecked", "clearHeaderChecked", "clearIndexChecked", "clearSelected", "insert", "insertAt", "remove", "removeSelecteds", "revert", "revertData", "getRecordset", "getInsertRecords", "getRemoveRecords", "getUpdateRecords", "clearActived", "getActiveRow", "hasActiveRow", "setActiveRow", "setActiveCell", "setSelectCell", "clearValidate", "fullValidate", "validate", "exportCsv", "exportExcel"];
var headerProps = {
  children: "children"
};
var handleAllColumnPromises = function handleAllColumnPromises2(opt, ctx) {
  var startIndex = opt.startIndex, fetchColumns = opt.fetchColumns, tableData = opt.tableData, asyncRenderMap = opt.asyncRenderMap, isScrollLoad = opt.isScrollLoad;
  return function(data8) {
    if (data8.length) {
      ctx._isUpdateData = true;
      data8.forEach(function(item, i) {
        var columnValues = [];
        var columnValuesMap = {};
        var k = startIndex;
        var renderCount = 0;
        var columnCount = 0;
        var columnData = [];
        var _fetchColumns$i = fetchColumns[i], _fetchColumns$i$forma = _fetchColumns$i.format, format2 = _fetchColumns$i$forma === void 0 ? {} : _fetchColumns$i$forma, property2 = _fetchColumns$i.property;
        var _ref142 = format2.async || {}, _ref142$splitConfig = _ref142.splitConfig, splitConfig = _ref142$splitConfig === void 0 ? {} : _ref142$splitConfig, _ref142$fields = _ref142.fields, fields = _ref142$fields === void 0 ? {} : _ref142$fields, complete = _ref142.complete;
        columnValues = isArray(item) ? item : get_default(item, fields.data || "values");
        columnCount = columnValues.length;
        preprocessDataObjectFormat({
          columnCount,
          columnValues,
          columnValuesMap,
          fields
        });
        for (var len = tableData.length; k < len; k++) {
          var row2 = tableData[k];
          var cellTexts = [];
          var uniqueKey = ctx.getAsyncColumnUniqueKey(property2, row2);
          var cellValuesCount = asyncRenderMap[uniqueKey];
          var asyncColumnName = ctx.getAsyncColumnName(property2);
          var isRender = !!row2[asyncColumnName];
          var args = {
            asyncColumnName,
            cellTexts,
            cellValuesCount,
            columnData
          };
          Object.assign(args, {
            columnValuesMap,
            isRender,
            property: property2,
            renderCount,
            row: row2,
            splitConfig
          });
          renderCount = preventDupRender(args);
          if (isScrollLoad && renderCount >= columnCount) {
            break;
          }
        }
        format2.data = columnData;
        handleResolveColumnComplete({
          _vm: ctx,
          columnData,
          complete
        });
      });
      ctx.tableData = ctx.tableData.slice(0);
      ctx.$nextTick(function() {
        ctx._isUpdateData = false;
      });
    } else {
      warn$1("Unknown error：the query data is empty.");
    }
  };
};
function handleGlobalMousedownOnFilterWrapper(_ref143) {
  var $el = _ref143.$el, _vm = _ref143._vm, event = _ref143.event, filterStore = _ref143.filterStore, filterWrapper = _ref143.filterWrapper;
  if (filterWrapper) {
    if (_vm.getEventTargetNode(event, $el, "tiny-grid-filter-wrapper").flag)
      ;
    else if (_vm.getEventTargetNode(event, filterWrapper.$el).flag)
      ;
    else if (_vm.getEventTargetNode(event, document.body, "tiny-popper").flag)
      ;
    else {
      _vm.closeFilter();
      _vm.preventEvent(event, "event.clear_filter", filterStore.args, _vm.closeFilter);
    }
  }
}
function handleGlobalMousedownOnCtxMenu(_ref144) {
  var _vm = _ref144._vm, ctxMenuStore = _ref144.ctxMenuStore, event = _ref144.event;
  if (ctxMenuStore.visible && _vm.$refs.ctxWrapper && !_vm.getEventTargetNode(event, _vm.$refs.ctxWrapper.$el).flag) {
    _vm.closeMenu();
  }
}
function handleGlobalBlurOutside(_ref145) {
  var _vm = _ref145._vm, actived = _ref145.actived, event = _ref145.event;
  var custblur = _vm.blurOutside(actived, event);
  if (typeof custblur === "boolean") {
    custblur || setTimeout(function() {
      return _vm.clearActived(event);
    });
    return true;
  }
  return false;
}
function handleGlobalIsClear(_ref146) {
  var $el = _ref146.$el, _vm = _ref146._vm, actived = _ref146.actived, editConfig = _ref146.editConfig, event = _ref146.event, isClear = _ref146.isClear, isReadonlyCol = _ref146.isReadonlyCol;
  if (editConfig.mode === "row") {
    var rowNode = _vm.getEventTargetNode(event, $el, "tiny-grid-body__row");
    var isOtherRow = rowNode.flag ? rowNode.targetElem !== actived.args.cell.parentNode : 0;
    if (editConfig.trigger === "manual") {
      isClear = !_vm.getEventTargetNode(event, $el, "row__actived").flag && isOtherRow;
    } else {
      isClear = isOtherRow && isReadonlyCol;
    }
  } else {
    isClear = isReadonlyCol;
  }
  return isClear;
}
function handleGlobalClearActived(_ref147) {
  var $el = _ref147.$el, _vm = _ref147._vm, event = _ref147.event, isClear = _ref147.isClear;
  if (isClear || // 如果点击了当前表格之外
  !_vm.getEventTargetNode(event, $el).flag || _vm.$refs.tableHeader && _vm.$refs.tableHeader.$el.contains(event.target)) {
    setTimeout(function() {
      return _vm.clearActived(event);
    });
  }
}
function checkOtherKey(keyCode) {
  return keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode <= 90 || keyCode >= 96 && keyCode <= 111 || keyCode >= 186 && keyCode <= 192 || keyCode >= 219 && keyCode <= 222 || keyCode === 32;
}
function rule1(_ref148) {
  var isKeyEsc = _ref148.isKeyEsc, _vm = _ref148._vm, event = _ref148.event, actived = _ref148.actived, mouseConfig = _ref148.mouseConfig;
  return {
    match: function match() {
      return isKeyEsc;
    },
    action: function action() {
      return _vm.handleEscKeyDown({
        event,
        actived,
        mouseConfig
      });
    }
  };
}
function rule2(_ref149) {
  var isKeySpacebar = _ref149.isKeySpacebar, keyboardConfig = _ref149.keyboardConfig, selected = _ref149.selected, _vm = _ref149._vm, event = _ref149.event;
  return {
    match: function match() {
      return isKeySpacebar && (keyboardConfig.isArrow || keyboardConfig.isTab) && selected.row && selected.column && (selected.column.type === "selection" || selected.column.type === "radio");
    },
    action: function action() {
      return _vm.handleSpaceKeyDown({
        event,
        keyboardConfig,
        selected
      });
    }
  };
}
function rule3(args) {
  var isKeyEnter = args.isKeyEnter, keyboardConfig = args.keyboardConfig, selected = args.selected, actived = args.actived;
  var treeConfig = args.treeConfig, highlightCurrentRow = args.highlightCurrentRow, currentRow = args.currentRow, _vm = args._vm, event = args.event;
  return {
    match: function match() {
      return isKeyEnter && (keyboardConfig.isArrow || keyboardConfig.isTab) && (selected.row || actived.row || treeConfig && highlightCurrentRow && currentRow);
    },
    action: function action() {
      return _vm.handleEnterKeyDown({
        event,
        selected,
        actived
      });
    }
  };
}
function rule4(_ref150) {
  var isOperCtxMenu = _ref150.isOperCtxMenu, _vm = _ref150._vm, event = _ref150.event;
  return {
    match: function match() {
      return isOperCtxMenu;
    },
    action: function action() {
      return _vm.handleCtxMenu({
        event
      });
    }
  };
}
function rule5(_ref151) {
  var isKeyF2 = _ref151.isKeyF2, _vm = _ref151._vm, event = _ref151.event, selected = _ref151.selected;
  return {
    match: function match() {
      return isKeyF2;
    },
    action: function action() {
      return _vm.handleF2KeyDown({
        event,
        selected
      });
    }
  };
}
function rule6(_ref152) {
  var isOperArrowKeys = _ref152.isOperArrowKeys, keyboardConfig = _ref152.keyboardConfig, _vm = _ref152._vm, event = _ref152.event, selected = _ref152.selected;
  return {
    match: function match() {
      return isOperArrowKeys && keyboardConfig.isArrow;
    },
    action: function action() {
      return _vm.handleArrowKeyDown({
        event,
        selected
      });
    }
  };
}
function rule7(_ref153) {
  var isKeyTab = _ref153.isKeyTab, keyboardConfig = _ref153.keyboardConfig, _vm = _ref153._vm, event = _ref153.event, selected = _ref153.selected, actived = _ref153.actived;
  return {
    match: function match() {
      return isKeyTab && keyboardConfig.isTab;
    },
    action: function action() {
      return _vm.handleTabKeyDown({
        event,
        selected,
        actived
      });
    }
  };
}
function rule8(args) {
  var isKeyDel = args.isKeyDel, treeConfig = args.treeConfig, highlightCurrentRow = args.highlightCurrentRow, currentRow = args.currentRow;
  var isKeyBack = args.isKeyBack, keyboardConfig = args.keyboardConfig, _vm = args._vm, event = args.event, selected = args.selected;
  return {
    match: function match() {
      return isKeyDel || (treeConfig && highlightCurrentRow && currentRow ? isKeyBack && keyboardConfig.isArrow : isKeyBack);
    },
    action: function action() {
      return _vm.handleDelKeyDown({
        event,
        selected
      });
    }
  };
}
function rule9(_ref154) {
  var keyboardConfig = _ref154.keyboardConfig, isKeyWithCtrl = _ref154.isKeyWithCtrl, isKeyA = _ref154.isKeyA, isKeyX = _ref154.isKeyX, isKeyC = _ref154.isKeyC, isKeyV = _ref154.isKeyV, _vm = _ref154._vm, event = _ref154.event;
  return {
    match: function match() {
      return keyboardConfig.isCut && isKeyWithCtrl && (isKeyA || isKeyX || isKeyC || isKeyV);
    },
    action: function action() {
      return _vm.handleCopyKeyDown({
        event
      });
    }
  };
}
function rule10(_ref155) {
  var keyboardConfig = _ref155.keyboardConfig, isKeyWithCtrl = _ref155.isKeyWithCtrl, _vm = _ref155._vm, event = _ref155.event, selected = _ref155.selected;
  return {
    match: function match() {
      return keyboardConfig.isEdit && !isKeyWithCtrl;
    },
    action: function action() {
      return _vm.handleOtherKeyDown({
        event,
        selected
      });
    }
  };
}
function onGlobalKeydown(event, _vm) {
  var isCtxMenu2 = _vm.isCtxMenu, ctxMenuStore = _vm.ctxMenuStore, _vm$mouseConfig = _vm.mouseConfig, mouseConfig = _vm$mouseConfig === void 0 ? {} : _vm$mouseConfig, _vm$keyboardConfig = _vm.keyboardConfig, keyboardConfig = _vm$keyboardConfig === void 0 ? {} : _vm$keyboardConfig;
  var treeConfig = _vm.treeConfig, highlightCurrentRow = _vm.highlightCurrentRow, currentRow = _vm.currentRow;
  var _vm$editStore = _vm.editStore, selected = _vm$editStore.selected, actived = _vm$editStore.actived;
  var eventKeyCode = event.keyCode;
  var isKeyWithCtrl = event.ctrlKey;
  var isKeyF2 = eventKeyCode === 113;
  var isKeyX = eventKeyCode === 88;
  var isKeyV = eventKeyCode === 86;
  var isKeyC = eventKeyCode === 67;
  var isKeyA = eventKeyCode === 65;
  var isKeyDel = eventKeyCode === 46;
  var isKeyDwArrow = eventKeyCode === 40;
  var isKeyRightArrow = eventKeyCode === 39;
  var isKeyUpArrow = eventKeyCode === 38;
  var isKeyLeftArrow = eventKeyCode === 37;
  var isKeySpacebar = eventKeyCode === 32;
  var isKeyEsc = eventKeyCode === 27;
  var isKeyEnter = eventKeyCode === 13;
  var isKeyTab = eventKeyCode === 9;
  var isKeyBack = eventKeyCode === 8;
  var isOperArrowKeys = isKeyLeftArrow || isKeyUpArrow || isKeyRightArrow || isKeyDwArrow;
  var isOperCtxMenu = isCtxMenu2 && ctxMenuStore.visible && (isKeyEnter || isKeySpacebar || isOperArrowKeys);
  var rules = [
    rule1({
      isKeyEsc,
      _vm,
      event,
      actived,
      mouseConfig
    }),
    // 空格键支持选中复选列
    rule2({
      isKeySpacebar,
      keyboardConfig,
      selected,
      _vm,
      event
    }),
    // 如果是激活状态，退则出到下一行
    rule3({
      isKeyEnter,
      keyboardConfig,
      selected,
      actived,
      treeConfig,
      highlightCurrentRow,
      currentRow,
      _vm,
      event
    }),
    // 如果配置了右键菜单; 支持方向键操作、回车
    rule4({
      isOperCtxMenu,
      _vm,
      event
    }),
    // 如果按下了 F2 键
    rule5({
      isKeyF2,
      _vm,
      event,
      selected
    }),
    // 如果按下了方向键
    rule6({
      isOperArrowKeys,
      keyboardConfig,
      _vm,
      event,
      selected
    }),
    // 如果按下了 Tab 键切换
    rule7({
      isKeyTab,
      keyboardConfig,
      _vm,
      event,
      selected,
      actived
    }),
    // 如果是删除键
    rule8({
      isKeyDel,
      treeConfig,
      highlightCurrentRow,
      currentRow,
      isKeyBack,
      keyboardConfig,
      _vm,
      event,
      selected
    }),
    rule9({
      keyboardConfig,
      isKeyWithCtrl,
      isKeyA,
      isKeyX,
      isKeyC,
      isKeyV,
      _vm,
      event
    }),
    // 如果是按下非功能键之外允许直接编辑
    rule10({
      keyboardConfig,
      isKeyWithCtrl,
      _vm,
      event,
      selected
    })
  ];
  for (var i = 0; i < rules.length; i++) {
    if (rules[i].match()) {
      return rules[i].action();
    }
  }
}
function handleGlobalMousedownEvent(event) {
  var _this11 = this;
  var $el = this.$el, ctxMenuStore = this.ctxMenuStore, _this$editConfig = this.editConfig, editConfig = _this$editConfig === void 0 ? {} : _this$editConfig, filterStore = this.filterStore;
  var _this$$refs = this.$refs, filterWrapper = _this$$refs.filterWrapper, validTip = _this$$refs.validTip;
  var actived = this.editStore.actived;
  handleGlobalMousedownOnFilterWrapper({
    $el,
    _vm: this,
    event,
    filterStore,
    filterWrapper
  });
  if (actived.row && !(editConfig.autoClear === false)) {
    if (handleGlobalBlurOutside({
      _vm: this,
      actived,
      event
    })) {
      return;
    }
    if (validTip && this.getEventTargetNode(event, validTip.$el).flag)
      ;
    else if (!this.lastCallTime || this.lastCallTime + 50 < Date.now()) {
      this.preventEvent(event, "event.clear_actived", actived.args, function() {
        var isClear;
        var isReadonlyCol = !_this11.getEventTargetNode(event, $el, "col__edit").flag;
        isClear = handleGlobalIsClear({
          $el,
          _vm: _this11,
          actived,
          editConfig,
          event,
          isClear,
          isReadonlyCol
        });
        handleGlobalClearActived({
          $el,
          _vm: _this11,
          event,
          isClear
        });
      });
    }
  }
  handleGlobalMousedownOnCtxMenu({
    _vm: this,
    ctxMenuStore,
    event
  });
}
function handleGlobalMousedownCaptureEvent(event) {
  this.handleClearMouseChecked(event);
}
function handleGlobalBlurEvent() {
  this.closeFilter();
  this.closeMenu();
}
function handleGlobalMousewheelEvent(event) {
  this.updateScrollLoadBar(event);
  this.clostTooltip();
  this.closeMenu();
}
function handleEscKeyDown(_ref156) {
  var _this12 = this;
  var event = _ref156.event, actived = _ref156.actived, mouseConfig = _ref156.mouseConfig;
  this.closeMenu();
  this.closeFilter();
  if (actived.row) {
    this.clearActived(event);
    if (mouseConfig.selected) {
      this.$nextTick(function() {
        return _this12.handleSelected(actived.args, event);
      });
    }
  }
}
function handleEnterKeyDown(_ref157) {
  var _this13 = this;
  var event = _ref157.event, selected = _ref157.selected, actived = _ref157.actived;
  var highlightCurrentRow = this.highlightCurrentRow, currentRow = this.currentRow, treeConfig = this.treeConfig;
  var isLeftArrow = event.keyCode === 37;
  var isUpArrow = event.keyCode === 38;
  var isRightArrow = event.keyCode === 39;
  if (selected.row || actived.row) {
    this.moveSelected({
      args: selected.row ? selected.args : actived.args,
      isLeftArrow,
      isUpArrow,
      isRightArrow,
      isDwArrow: true,
      event
    });
  } else if (treeConfig && highlightCurrentRow && currentRow) {
    var childrens = currentRow[treeConfig.children];
    if (childrens && childrens.length) {
      event.preventDefault();
      var targetRow = childrens[0];
      this.setTreeExpansion(currentRow, true).then(function() {
        return _this13.scrollToRow(targetRow);
      }).then(function() {
        return _this13.triggerCurrentRowEvent(event, {
          $table: _this13,
          row: targetRow
        });
      });
    }
  }
}
function handleCtxMenu(_ref158) {
  var event = _ref158.event;
  var ctxMenuStore = this.ctxMenuStore;
  event.preventDefault();
  if (ctxMenuStore.showChild && hasChildrenList(ctxMenuStore.selected)) {
    this.moveCtxMenu({
      event,
      keyCode: event.keyCode,
      ctxMenuStore,
      property: "selectChild",
      operKey: 37,
      operRest: false,
      menuList: ctxMenuStore.selected.children
    });
  } else {
    this.moveCtxMenu({
      event,
      keyCode: event.keyCode,
      ctxMenuStore,
      property: "selected",
      operKey: 39,
      operRest: true,
      menuList: this.ctxMenuList
    });
  }
}
function handleArrowKeyDown(_ref159) {
  var event = _ref159.event, selected = _ref159.selected;
  var highlightCurrentRow = this.highlightCurrentRow, currentRow = this.currentRow;
  var isLeftArrow = event.keyCode === 37;
  var isUpArrow = event.keyCode === 38;
  var isRightArrow = event.keyCode === 39;
  var isDownArrow = event.keyCode === 40;
  if (selected.row && selected.column) {
    this.moveSelected({
      args: selected.args,
      isLeftArrow,
      isUpArrow,
      isRightArrow,
      isDownArrow,
      event
    });
  } else if ((isUpArrow || isDownArrow) && highlightCurrentRow && currentRow) {
    this.moveCurrentRow(isUpArrow, isDownArrow, event);
  }
}
function handleDelKeyDown(_ref160) {
  var _this14 = this;
  var event = _ref160.event, selected = _ref160.selected;
  var _this$keyboardConfig = this.keyboardConfig, keyboardConfig = _this$keyboardConfig === void 0 ? {} : _this$keyboardConfig, treeConfig = this.treeConfig, highlightCurrentRow = this.highlightCurrentRow, currentRow = this.currentRow;
  var isBack = event.keyCode === 8;
  if (keyboardConfig.isDel && (selected.row || selected.column)) {
    setCellValue(selected.row, selected.column, null);
    if (isBack) {
      this.handleActived(selected.args, event);
    }
  } else if (isBack && keyboardConfig.isArrow && treeConfig && highlightCurrentRow && currentRow) {
    var _findTree = findTree_default(this.afterFullData, function(item) {
      return item === currentRow;
    }, treeConfig), parentRow = _findTree.parent;
    if (parentRow) {
      event.preventDefault();
      this.setTreeExpansion(parentRow, false).then(function() {
        return _this14.scrollToRow(parentRow);
      }).then(function() {
        return _this14.triggerCurrentRowEvent(event, {
          $table: _this14,
          row: parentRow
        });
      });
    }
  }
}
function handleSpaceKeyDown(_ref161) {
  var event = _ref161.event, selected = _ref161.selected;
  event.preventDefault();
  if (selected.column.type === "selection") {
    this.handleToggleCheckRowEvent(selected.args, event);
  } else {
    this.triggerRadioRowEvent(event, selected.args);
  }
}
function handleTabKeyDown(_ref162) {
  var event = _ref162.event, selected = _ref162.selected, actived = _ref162.actived;
  var isShiftKey = event.shiftKey;
  var useTab = this.editConfig.useTab;
  if (selected.row || selected.column) {
    this.moveTabSelected(selected.args, isShiftKey, event, useTab);
  } else if (actived.row || actived.column) {
    this.moveTabSelected(actived.args, isShiftKey, event, useTab);
  }
}
function handleCopyKeyDown(_ref163) {
  var event = _ref163.event;
  if (event.keyCode === 65) {
    this.handleAllChecked(event);
  } else if (event.keyCode === 88 || event.keyCode === 67) {
    this.handleCopyed(event.keyCode === 88, event);
  } else {
    this.handlePaste(event);
  }
}
function handleF2KeyDown(_ref164) {
  var event = _ref164.event, selected = _ref164.selected;
  if (selected.row && selected.column) {
    event.preventDefault();
    this.handleActived(selected.args, event);
  }
}
function handleOtherKeyDown(_ref165) {
  var event = _ref165.event, selected = _ref165.selected;
  var _this$keyboardConfig2 = this.keyboardConfig, keyboardConfig = _this$keyboardConfig2 === void 0 ? {} : _this$keyboardConfig2;
  var keyCode = event.keyCode;
  var isOtherKey = checkOtherKey(keyCode);
  if (isOtherKey && selected.column && selected.row && selected.column.editor && (!keyboardConfig.editMethod || !(keyboardConfig.editMethod(selected.args, event) === false))) {
    setCellValue(selected.row, selected.column, null);
    this.handleActived(selected.args, event);
  }
}
function handleGlobalKeydownEvent(event) {
  var _this15 = this;
  this.preventEvent(event, "event.keydown", {
    $table: this
  }, function() {
    onGlobalKeydown(event, _this15);
  });
}
function handleGlobalResizeEvent() {
  this.recalculate();
}
var run = function run2(names, $table) {
  return names.forEach(function(name) {
    return $table[name].apply($table);
  });
};
var debounceScrollLoadDuration = 200;
var AsyncCollectTimeout = 100;
var sortMultiple = function sortMultiple2(rows, columns2, _vm) {
  var greaterThan = function greaterThan2(valueP, valueQ) {
    var typeP = typeof valueP;
    var typeQ = typeof valueQ;
    if (typeP === typeQ && ["number", "string", "boolean"].includes(typeP)) {
      return valueP > valueQ;
    } else {
      return String(valueP) > String(valueQ);
    }
  };
  var multipleColumnSort = _vm.sortOpts.multipleColumnSort;
  if (typeof multipleColumnSort === "function") {
    rows = multipleColumnSort({
      $table: _vm,
      tableData: rows,
      sortColumns: columns2
    });
  } else {
    rows = rows.sort(function(p, q) {
      for (var i = 0; i < columns2.length; i++) {
        var _columns$i = columns2[i], property2 = _columns$i.property, order = _columns$i.order;
        var flag = order === "asc" ? 1 : -1;
        var valueP = p[property2];
        var valueQ = q[property2];
        if (!Object.is(valueP, valueQ)) {
          return greaterThan(valueP, valueQ) ? flag : -flag;
        }
      }
      return 0;
    });
  }
  return rows;
};
var buildCache = function buildCache2(tableData, treeConfig) {
  if (treeConfig === void 0) {
    treeConfig = {};
  }
  var backupMap = /* @__PURE__ */ new WeakMap();
  var _ref166 = treeConfig || {}, children = _ref166.children, ordered = _ref166.ordered, _ref166$temporaryInde = _ref166.temporaryIndex, temporaryIndex = _ref166$temporaryInde === void 0 ? "_$index_" : _ref166$temporaryInde;
  var isTreeOrderedFalse = treeConfig && !ordered;
  var traverse = function traverse2(arr, rowLevel, parentIndex) {
    var backup = [];
    if (Array.isArray(arr) && arr.length > 0) {
      arr.forEach(function(row2, rowIndex) {
        var _extends4;
        if (isTreeOrderedFalse) {
          row2[temporaryIndex] = (parentIndex ? parentIndex + "." : "") + (rowIndex + 1);
        }
        var backupRow = clone_default(_extends({}, row2, (_extends4 = {}, _extends4[children] = null, _extends4)), true);
        backup.push(backupRow);
        backupMap.set(row2, backupRow);
        if (row2[children]) {
          backupRow[children] = traverse2(row2[children], rowLevel + 1, isTreeOrderedFalse ? row2[temporaryIndex] : "");
        }
      });
    }
    return backup;
  };
  var backupData = traverse(tableData, 0, "");
  return {
    backupData,
    backupMap
  };
};
var Methods$d = {
  getParentElem: function getParentElem() {
    var $el = this.$grid ? this.$grid.$el : this.$el;
    return $el.parentNode;
  },
  updateParentHeight: function updateParentHeight() {
    if (this.$grid) {
      this.$grid.updateParentHeight();
    } else {
      this.parentHeight = this.getParentElem().clientHeight;
    }
  },
  getParentHeight: function getParentHeight() {
    return this.parentHeight;
  },
  clearAll: function clearAll(silent) {
    run(["clearScroll", "clearSort", "clearCurrentRow", "clearCurrentColumn"], this);
    run(["clearSelection", "clearRowExpand", "clearTreeExpand"], this);
    if (GridAdapter._filter) {
      this.clearFilter(silent);
    }
    if (this.keyboardConfig || this.mouseConfig) {
      run(["clearIndexChecked", "clearHeaderChecked", "clearChecked", "clearSelected", "clearCopyed"], this);
    }
    return this.clearActived();
  },
  refreshData: function refreshData(data8) {
    var _this16 = this;
    var next2 = function next22() {
      _this16.tableData = [];
      return _this16.loadTableData(data8 || _this16.tableFullData);
    };
    return this.$nextTick().then(next2);
  },
  refreshStyle: function refreshStyle() {
    var $el = this.$el, rowSpan = this.rowSpan, spanMethod = this.spanMethod;
    if ($el && (rowSpan || spanMethod)) {
      var transform = $el.style.transform;
      var restore = function restore2() {
        return setTimeout(function() {
          $el.style.transform = transform;
        });
      };
      $el.style.transform = "scale(0.99999)";
      return this.$nextTick().then(restore);
    }
    return this.$nextTick();
  },
  updateData: function updateData() {
    var _this17 = this;
    return this.handleTableData(true).then(function() {
      return _this17.updateFooter();
    }).then(function() {
      return _this17.recalculate();
    });
  },
  // 处理表格数据（过滤，排序，虚拟滚动需要渲染数据的条数）
  handleTableData: function handleTableData(force) {
    force && this.updateAfterFullData();
    this.tableData = sliceFullData(this);
    run(["updateScrollStatus", "buildGroupData"], this);
    return this.$nextTick();
  },
  // 全量加载表格数据
  loadTableData: function loadTableData(datas, notRefresh) {
    var _this18 = this;
    var $refs = this.$refs, editStore = this.editStore, height2 = this.height, maxHeight = this.maxHeight, treeConfig = this.treeConfig;
    var lastScrollLeft = this.lastScrollLeft, lastScrollTop = this.lastScrollTop;
    var scrollY = this.optimizeOpts.scrollY;
    var tableFullData = isArray(datas) ? datas.slice(0) : [];
    var scrollYLoad = scrollY && scrollY.gt > 0 && scrollY.gt <= tableFullData.length;
    editStore.insertList = [];
    editStore.removeList = [];
    Object.assign(this, {
      tableFullData
    });
    this.updateCache(true);
    var _buildCache = buildCache(tableFullData, treeConfig), backupData = _buildCache.backupData, backupMap = _buildCache.backupMap;
    Object.assign(this, {
      tableSynchData: datas,
      tableSourceData: backupData,
      backupMap,
      scrollYLoad
    });
    if (scrollYLoad && !(height2 || maxHeight)) {
      error("ui.grid.error.scrollYHeight");
    }
    if (!notRefresh) {
      this.clearScroll();
    }
    this.handleTableData(true);
    run(["reserveCheckSelection", "checkSelectionStatus"], this);
    var first = function first2() {
      return !notRefresh && _this18.recalculate();
    };
    var second = function second2() {
      if (lastScrollLeft || lastScrollTop) {
        return _this18.scrollTo(lastScrollLeft, lastScrollTop);
      } else {
        var headerElem = $refs.tableHeader ? $refs.tableHeader.$el : null;
        headerElem && (headerElem.scrollLeft = 0);
      }
    };
    return this.$nextTick().then(first).then(second);
  },
  // 重新加载数据
  reloadData: function reloadData(datas) {
    var _this19 = this;
    return this.clearAll().then(function() {
      return _this19.loadTableData(datas);
    }).then(function() {
      return _this19.handleDefault();
    });
  },
  // 加载全量数据
  loadData: function loadData(datas) {
    var _this20 = this;
    return new Promise(function(resolve) {
      _this20.loadTableData(datas);
      resolve();
    }).then(this.recalculate);
  },
  reloadRow: function reloadRow(row2, record, field) {
    var tableData = this.tableData, tableSourceData = this.tableSourceData;
    var rowIndex = this.getRowIndex(row2);
    var originRow = tableSourceData[rowIndex];
    var hasSrc = originRow && row2;
    var hasSrcNoField = hasSrc && !field;
    if (hasSrc && field) {
      set_default(originRow, field, get_default(record || row2, field));
    }
    if (hasSrcNoField && record) {
      tableSourceData[rowIndex] = record;
      clear_default(row2, void 0);
      Object.assign(row2, this.defineField(_extends({}, record)));
      this.updateCache(true);
    }
    if (hasSrcNoField && !record) {
      destructuring_default(originRow, clone_default(row2, true));
    }
    this.tableData = tableData.slice(0);
    return this.$nextTick();
  },
  // 从新加载列配置
  reloadColumn: function reloadColumn(columns2) {
    var _this21 = this;
    return this.clearAll().then(function() {
      return _this21.loadColumn(columns2);
    });
  },
  loadColumn: function loadColumn(columns2) {
    var _this22 = this;
    return new Promise(function(resolve) {
      _this22.collectColumn = mapTree_default(columns2, function(column) {
        return CellDefault.createColumn(_this22, column);
      }, headerProps);
      resolve();
    }).then(function() {
      return _this22.$nextTick();
    });
  },
  // 更新数据的 Map
  updateCache: function updateCache(source) {
    var _this23 = this;
    var fullAllDataRowIdData = this.fullAllDataRowIdData, fullAllDataRowMap = this.fullAllDataRowMap, fullDataRowIdData = this.fullDataRowIdData, fullDataRowMap = this.fullDataRowMap, tableFullData = this.tableFullData, treeConfig = this.treeConfig;
    var rowKey = getTableRowKey(this);
    var buildRowCache = function buildRowCache2(row2, index232) {
      var rowId = getRowid(_this23, row2);
      if (!rowId) {
        rowId = getRowUniqueId();
        set_default(row2, rowKey, rowId);
      }
      var rowCache = {
        row: row2,
        rowid: rowId,
        index: index232
      };
      if (source) {
        fullDataRowIdData[rowId] = rowCache;
        fullDataRowMap.set(row2, rowCache);
      }
      fullAllDataRowIdData[rowId] = rowCache;
      fullAllDataRowMap.set(row2, rowCache);
    };
    var clearCache = function clearCache2() {
      fullAllDataRowIdData = {};
      _this23.fullAllDataRowIdData = fullAllDataRowIdData;
      fullAllDataRowMap.clear();
      if (source) {
        fullDataRowIdData = {};
        _this23.fullDataRowIdData = fullDataRowIdData;
        fullDataRowMap.clear();
      }
    };
    clearCache();
    if (treeConfig) {
      eachTree_default(tableFullData, buildRowCache, treeConfig);
    } else {
      tableFullData.forEach(buildRowCache);
    }
  },
  // 更新列的 Map
  cacheColumnMap: function cacheColumnMap() {
    var fullColumnMap = this.fullColumnMap, fullColumn = this.tableFullColumn;
    var fullColumnIdData = {};
    this.fullColumnIdData = fullColumnIdData;
    Map.prototype.clear.apply(fullColumnMap);
    fullColumn.forEach(function(column, index232) {
      var colCache = {
        colid: column.id,
        column,
        index: index232
      };
      fullColumnIdData[column.id] = colCache;
      fullColumnMap.set(column, colCache);
    });
  },
  // 通过tr的dom元素获取行数据等相关信息
  getRowNode: function getRowNode(tr) {
    var _this24 = this;
    if (!tr) {
      return null;
    }
    var fullAllDataRowIdData = this.fullAllDataRowIdData, tableFullData = this.tableFullData, treeConfig = this.treeConfig;
    var dataRowid = tr.getAttribute("data-rowid");
    if (treeConfig) {
      var matches = findTree_default(tableFullData, function(row2) {
        return getRowid(_this24, row2) === dataRowid;
      }, treeConfig);
      if (matches) {
        return matches;
      }
    } else {
      if (fullAllDataRowIdData[dataRowid]) {
        var rowCache = fullAllDataRowIdData[dataRowid];
        return {
          item: rowCache.row,
          index: rowCache.index,
          items: tableFullData
        };
      }
    }
    return null;
  },
  getColumnNode: function getColumnNode(cell) {
    if (!cell) {
      return null;
    }
    var isGroup2 = this.isGroup, fullColumnIdData = this.fullColumnIdData, tableFullColumn = this.tableFullColumn;
    var dataColid = cell.getAttribute("data-colid");
    var colCache = fullColumnIdData == null ? void 0 : fullColumnIdData[dataColid];
    if (isGroup2) {
      var matches = findTree_default(tableFullColumn, function(column) {
        return column.id === dataColid;
      }, headerProps);
      if (matches) {
        return matches;
      }
    } else if (colCache) {
      return {
        index: colCache.index,
        item: colCache.column,
        items: tableFullColumn
      };
    }
    return null;
  },
  getRowIndex: function getRowIndex(row2) {
    var fullDataRowMap = this.fullDataRowMap;
    return fullDataRowMap.has(row2) ? fullDataRowMap.get(row2).index : -1;
  },
  getColumnIndex: function getColumnIndex(column) {
    var fullColumnMap = this.fullColumnMap;
    return fullColumnMap.has(column) ? fullColumnMap.get(column).index : -1;
  },
  hasIndexColumn: function hasIndexColumn(column) {
    return column && column.type === "index";
  },
  defineField: function defineField(row2, copy) {
    if (!row2 || typeof row2 !== "object") {
      return row2;
    }
    if (copy) {
      row2 = clone_default(row2, true);
    }
    var visibleColumn = this.visibleColumn;
    var rowKey = getTableRowKey(this);
    visibleColumn.forEach(function(_ref167) {
      var property2 = _ref167.property, editor = _ref167.editor;
      var propNotExist = property2 && !has_default(row2, property2);
      var propDefaultValue = editor && !isUndefined_default(editor.defaultValue) ? editor.defaultValue : null;
      if (propNotExist) {
        set_default(row2, property2, propDefaultValue);
      }
    });
    if (!get_default(row2, rowKey)) {
      set_default(row2, rowKey, getRowUniqueId());
    }
    return row2;
  },
  isTemporaryRow: function isTemporaryRow(row2) {
    var _this25 = this;
    var rowid2 = getRowid(this, row2);
    return find_default(this.temporaryRows, function(r) {
      return rowid2 === getRowid(_this25, r);
    });
  },
  createData: function createData(records, copy) {
    var _this26 = this;
    var isArr = isArray(records);
    if (!isArr) {
      records = [records];
    }
    var tmp = records.map(function(record) {
      return _this26.defineField(record, copy);
    });
    return new Promise(function(resolve) {
      resolve(isArr ? tmp : tmp[0]);
    });
  },
  createRow: function createRow(records) {
    return this.createData(records, true);
  },
  /*
   * 清空单元格内容：
   * 如果不传参数，则清空整个表格内容；
   * 如果传row，则清空一行内容；
   * 如果传rows，则清空多行内容；
   * 如果还额外传了field，则清空指定单元格内容；
   */
  clearData: function clearData(rows, field) {
    var _this27 = this;
    rows = !arguments.length ? this.tableFullData : rows && !isArray(rows) ? [rows] : rows;
    rows.forEach(function(row2) {
      if (field) {
        set_default(row2, field, null);
      } else {
        _this27.visibleColumn.forEach(function(column) {
          column.property && setCellValue(row2, column, null);
        });
      }
    });
    return this.$nextTick();
  },
  hasRowInsert: function hasRowInsert(row2) {
    return ~this.editStore.insertList.indexOf(row2);
  },
  compareRow: function compareRow(row2, originalRow, field) {
    var value = get_default(row2, field);
    var originalValue = get_default(originalRow, field);
    var column = this.getColumnByField(field);
    var equals = column.equals || this.equals;
    var result;
    if (equals) {
      result = equals({
        value,
        originalValue,
        field,
        row: row2,
        originalRow,
        column,
        $table: this
      });
    }
    if (typeof result !== "boolean") {
      result = isEqual_default(originalValue, value);
    }
    return result;
  },
  hasRowChange: function hasRowChange(row2, field) {
    var _this28 = this;
    var tableSourceData = this.tableSourceData, treeConfig = this.treeConfig, visibleColumn = this.visibleColumn, backupMap = this.backupMap;
    var argsLength = arguments.length;
    var rowId = getRowid(this, row2);
    var originRow;
    if (this.isTemporaryRow(row2)) {
      return false;
    }
    if (treeConfig) {
      var _extends5;
      var children = treeConfig.children;
      var cacheRow = backupMap.get(row2);
      row2 = _extends({}, row2, (_extends5 = {}, _extends5[children] = null, _extends5));
      if (cacheRow) {
        var _extends6;
        originRow = _extends({}, cacheRow, (_extends6 = {}, _extends6[children] = null, _extends6));
      }
    } else {
      originRow = find_default(tableSourceData, function(item) {
        return rowId === getRowid(_this28, item);
      });
    }
    if (originRow) {
      if (argsLength > 1) {
        return !this.compareRow(row2, originRow, field);
      }
      for (var i = 0; i < visibleColumn.length; i++) {
        var property2 = visibleColumn[i].property;
        if (property2 && !this.compareRow(row2, originRow, property2)) {
          return true;
        }
      }
    }
    return false;
  },
  // 获取表格所有列
  getColumns: function getColumns(columnIndex) {
    var columns2 = this.visibleColumn;
    var argsLength = arguments.length;
    return argsLength ? columns2[columnIndex] : columns2.slice(0);
  },
  getColumnById: function getColumnById(colid) {
    var fullColumnIdData = this.fullColumnIdData;
    var colCache = fullColumnIdData[colid];
    return colCache ? colCache.column : null;
  },
  getColumnByField: function getColumnByField(field) {
    var columns2 = this.visibleColumn;
    return typeof field === "string" && field ? find_default(columns2, function(column) {
      return column.property === field;
    }) : null;
  },
  // 获取当前表格的列（完整的全量表头列、处理条件之后的全量表头列、当前渲染中的表头列）
  getTableColumn: function getTableColumn() {
    var collectColumn2 = this.collectColumn, tableColumn3 = this.tableColumn, tableFullColumn = this.tableFullColumn, visibleColumn = this.visibleColumn;
    return {
      fullColumn: tableFullColumn.slice(0),
      visibleColumn: visibleColumn.slice(0),
      tableColumn: tableColumn3.slice(0),
      collectColumn: collectColumn2.slice(0)
    };
  },
  // 获取表格所有数据
  getData: function getData(rowIndex) {
    var tableSynchData = this.data || this.tableSynchData;
    if (!tableSynchData) {
      return tableSynchData;
    }
    if (!arguments.length) {
      return tableSynchData.slice(0);
    }
    if (typeof rowIndex === "number" && rowIndex > -1) {
      return tableSynchData[rowIndex];
    }
    return void 0;
  },
  // 获取选中数据。notCopy为true不返回数据副本，表格内部要继续处理其返回值时设置为true
  getSelectRecords: function getSelectRecords(notCopy) {
    var _this$selectConfig = this.selectConfig, selectConfig = _this$selectConfig === void 0 ? {} : _this$selectConfig, selection = this.selection;
    var tableFullData = this.tableFullData, treeConfig = this.treeConfig;
    var checkField = selectConfig.checkField;
    var _ref168 = {}, _ref168$rowList = _ref168.rowList, rowList = _ref168$rowList === void 0 ? [] : _ref168$rowList;
    if (checkField && treeConfig) {
      rowList = filterTree_default(tableFullData, function(row2) {
        return get_default(row2, checkField);
      }, treeConfig);
    }
    if (checkField && !treeConfig) {
      rowList = tableFullData.filter(function(row2) {
        return get_default(row2, checkField);
      });
    }
    if (!checkField && treeConfig) {
      rowList = filterTree_default(tableFullData, function(row2) {
        return ~selection.indexOf(row2);
      }, treeConfig);
    }
    if (!checkField && !treeConfig) {
      rowList = tableFullData.filter(function(row2) {
        return ~selection.indexOf(row2);
      });
    }
    return notCopy ? rowList : clone_default(rowList, true);
  },
  // 对数据进行筛选和排序，获取处理后数据。服务端筛选和排序，在接口调用时已传入参数
  updateAfterFullData: function updateAfterFullData() {
    var _this29 = this;
    var remoteFilter = this.remoteFilter, remoteSort = this.remoteSort, tableFullData = this.tableFullData, visibleColumn = this.visibleColumn, sortOpts2 = this.sortOpts;
    var tableData = tableFullData;
    var sortColumn = find_default(visibleColumn, function(column) {
      return column.order;
    });
    var filterColumn = visibleColumn.filter(function(_ref169) {
      var filter2 = _ref169.filter;
      return !!filter2;
    });
    var doTableSort = function doTableSort2() {
      var order = sortColumn.order, property2 = sortColumn.property;
      var params = {
        $table: _this29,
        column: sortColumn,
        data: tableData,
        order,
        property: property2
      };
      tableData = _this29.sortMethod(params) || tableData;
    };
    var doColumnSort = function doColumnSort2() {
      var sortedFlag = false;
      if (sortOpts2.multipleColumnSort) {
        var sortColumns = visibleColumn.filter(function(_ref170) {
          var order = _ref170.order;
          return !!order;
        });
        if (sortColumns.length > 1) {
          tableData = sortMultiple(tableData, sortColumns, _this29);
          sortedFlag = true;
        }
      }
      if (!sortedFlag) {
        var columnSortMethod = sortColumn.sortMethod;
        var sorted = columnSortMethod ? tableData.sort(columnSortMethod) : sortBy_default(tableData, sortColumn.sortBy ? sortColumn.sortBy : sortColumn.property);
        tableData = sortColumn.order === "desc" ? sorted.reverse() : sorted;
      }
    };
    tableData = tableData.filter(function(row2) {
      return filterColumn.every(function(column) {
        return remoteFilter ? true : _this29.handleLocalFilter(row2, column);
      });
    });
    if (sortColumn && sortColumn.order) {
      var isRemote = isBoolean_default(sortColumn.remoteSort) ? sortColumn.remoteSort : remoteSort;
      !isRemote && this.sortMethod && doTableSort();
      !isRemote && !this.sortMethod && doColumnSort();
    }
    this.afterFullData = tableData;
    setTreeScrollYCache(this);
    return tableData;
  },
  // 组装表格分组映射表
  buildGroupData: function buildGroupData() {
    var _this30 = this;
    var rowGroup = this.rowGroup, tableData = this.tableData;
    Object.assign(this, {
      groupData: {},
      groupFolds: []
    });
    if (!rowGroup) {
      return;
    }
    var _ref171 = {}, _ref171$groups = _ref171.groups, groups = _ref171$groups === void 0 ? {} : _ref171$groups, _ref171$current = _ref171.current, current = _ref171$current === void 0 ? "" : _ref171$current;
    tableData.forEach(function(row2, rowIndex) {
      var rowid2 = getRowid(_this30, row2);
      var field = rowGroup.field;
      var prevRow = tableData[rowIndex - 1];
      if (!prevRow || prevRow[field] !== row2[field]) {
        current = rowid2;
        groups[rowid2] = {
          fold: false,
          children: [row2]
        };
      } else {
        groups[current].children.push(row2);
      }
    });
    this.groupData = groups;
  },
  getRowById: function getRowById(rowid2) {
    var fullDataRowIdData = this.fullDataRowIdData;
    var rowCache = fullDataRowIdData[rowid2];
    return rowCache ? rowCache.row : null;
  },
  // 获取处理后的表格数据
  getTableData: function getTableData() {
    var afterFullData = this.afterFullData, footerData = this.footerData, tableData = this.tableData, tableFullData = this.tableFullData;
    return {
      visibleData: afterFullData.slice(0),
      footerData: footerData.slice(0),
      tableData: tableData.slice(0),
      fullData: tableFullData.slice(0)
    };
  },
  handleDefault: function handleDefault() {
    var _this31 = this;
    this.handleAsyncColumn(this.tableData);
    this.selectConfig && this.handleSelectionDefChecked();
    this.radioConfig && this.handleRadioDefChecked();
    this.expandConfig && this.handleDefaultRowExpand();
    this.treeConfig && this.handleDefaultTreeExpand();
    this.updateFooter();
    this.$nextTick(function() {
      return setTimeout(_this31.recalculate);
    });
  },
  // 动态列处理
  mergeCustomColumn: function mergeCustomColumn(customColumns, sort2, colWidth) {
    var isGroup2 = this.isGroup, fullColumn = this.tableFullColumn;
    var mergeWidth = function mergeWidth2(col) {
      return colWidth && Object.assign(col, colWidth[col.property]);
    };
    var getCustomCol = function getCustomCol2(col) {
      return findTree_default(customColumns, function(item) {
        return col.property && item.property === col.property;
      });
    };
    var hasCustomsOrColWidth = customColumns.length || colWidth;
    var isGroupOrNonSort = isGroup2 || !sort2;
    var matches;
    this.isUpdateCustoms = true;
    if (hasCustomsOrColWidth && isGroupOrNonSort) {
      fullColumn.forEach(function(column) {
        mergeWidth(column);
        matches = getCustomCol(column);
        matches && Object.assign(column, matches.item);
      });
    }
    if (hasCustomsOrColWidth && !isGroupOrNonSort) {
      var _ref172 = {}, _ref172$collectColumn = _ref172.collectColumn, collectColumn2 = _ref172$collectColumn === void 0 ? [] : _ref172$collectColumn, _ref172$customMap = _ref172.customMap, customMap = _ref172$customMap === void 0 ? {} : _ref172$customMap, _ref172$orderColumn = _ref172.orderColumn, orderColumn = _ref172$orderColumn === void 0 ? [] : _ref172$orderColumn;
      mapTree_default(customColumns, function(customCol) {
        var targetCol = find_default(fullColumn, function(item) {
          return customCol.property && item.property === customCol.property;
        });
        if (targetCol) {
          Object.assign(targetCol, customCol);
          customMap[customCol.property] = targetCol;
          orderColumn.push(targetCol);
        }
      });
      fullColumn.forEach(function(col) {
        var newColumn = customMap[col.property] ? orderColumn.shift() : col;
        if (newColumn) {
          mergeWidth(newColumn);
          collectColumn2.push(newColumn);
        }
      });
      this.collectColumn = collectColumn2;
    }
    this.$emit("update:customs", fullColumn);
  },
  resetAll: function resetAll() {
    run(["resetCustoms", "resetResizable"], this);
  },
  hideColumn: function hideColumn(tableColumn3) {
    return this.handleVisibleColumn(tableColumn3, false);
  },
  showColumn: function showColumn(tableColumn3) {
    return this.handleVisibleColumn(tableColumn3, true);
  },
  resetCustoms: function resetCustoms() {
    return this.handleVisibleColumn();
  },
  handleVisibleColumn: function handleVisibleColumn(tableColumn3, visible3) {
    var _arguments = arguments;
    var tableFullColumn = this.tableFullColumn;
    var toolbarVm = this.getVm("toolbar");
    var columns2 = arguments.length ? [tableColumn3] : tableFullColumn;
    columns2.forEach(function(column) {
      column.visible = _arguments.length ? visible3 : true;
    });
    if (toolbarVm) {
      toolbarVm.updateSetting();
    }
    return this.$nextTick();
  },
  // 初始化加载动态列：customColumns 列信息，sort 是否按顺序加载
  reloadCustoms: function reloadCustoms(customColumns, sort2, colWidth) {
    var _this32 = this;
    var first = function first2() {
      _this32.mergeCustomColumn(customColumns, sort2, colWidth);
    };
    var second = function second2() {
      _this32.handleTableData(true);
    };
    var third = function third2() {
      return _this32.refreshColumn().then(function() {
        return _this32.tableFullColumn.slice(0);
      });
    };
    return this.$nextTick().then(first).then(second).then(third);
  },
  watchColumn: function watchColumn(value) {
    var customs2 = this.customs, treeConfig = this.treeConfig;
    var toolbarVm = this.getVm("toolbar");
    var fullColumn = getColumnList(value);
    setSliceColumnTree(this);
    this.tableFullColumn = fullColumn;
    this.cacheColumnMap();
    if (!this.isColumnInitReady) {
      this.isColumnInitReady = true;
      customs2 && this.mergeCustomColumn(customs2);
      this.$emit("column-init-ready");
    }
    this.refreshColumn();
    if (this.remoteFilter) {
      this.$grid.filterData = this.getAllFilter();
    }
    if (!this.isColumnReady) {
      this.isColumnReady = true;
      this.$emit("column-ready");
    }
    this.handleTableData(true);
    if (toolbarVm) {
      toolbarVm.updateColumn(fullColumn);
    }
    if (treeConfig && fullColumn.some(function(column) {
      return column.fixed;
    }) && fullColumn.some(function(column) {
      return column.type === "expand";
    })) {
      warn$1("ui.grid.error.treeFixedExpand");
    }
  },
  /*
   * 刷新列信息
   * 将固定的列左边、右边分别靠边
   * 如果使用了分组表头，固定列必须在左侧或者右侧
   */
  refreshColumn: function refreshColumn() {
    var _this33 = this;
    var leftList = [], centerList = [], rightList = [];
    var letIndex = 0, leftStartIndex = null, rightEndIndex = null, isColspan = void 0;
    var columnStore = this.columnStore, isGroup2 = this.isGroup;
    var scrollXStore = this.scrollXStore, tableFullColumn = this.tableFullColumn;
    var scrollX = this.optimizeOpts.scrollX;
    onGroupHeader({
      _vm: this,
      isGroup: isGroup2,
      headerProps
    });
    tableFullColumn.filter(function(column) {
      return column.visible;
    }).forEach(function(column, columnIndex) {
      var ret = reassignFixedLeft({
        column,
        columnIndex,
        isColspan,
        leftList,
        leftStartIndex,
        letIndex
      });
      leftStartIndex = ret.leftStartIndex;
      letIndex = ret.letIndex;
      isColspan = ret.isColspan;
      ret = reassignFixedRight({
        column,
        columnIndex,
        isColspan,
        rightEndIndex,
        rightList
      });
      isColspan = ret.isColspan;
      rightEndIndex = ret.rightEndIndex;
      reassignNotFixed({
        centerList,
        column
      });
    });
    var visibleColumn = leftList.concat(centerList).concat(rightList);
    var scrollXLoad = scrollX && scrollX.gt && scrollX.gt < tableFullColumn.length;
    var tableColumn3 = visibleColumn;
    Object.assign(columnStore, {
      leftList,
      centerList,
      rightList
    });
    showGroupFixedError({
      isColspan,
      isGroup: isGroup2,
      leftStartIndex,
      rightEndIndex,
      visibleColumn
    });
    tableColumn3 = onScrollXLoad({
      _vm: this,
      scrollX,
      scrollXLoad,
      scrollXStore,
      tableColumn: tableColumn3,
      visibleColumn
    });
    this.scrollXLoad = scrollXLoad;
    this.tableColumn = tableColumn3;
    this.visibleColumn = visibleColumn;
    this.visibleColumnChanged = true;
    this.columnAnchor && this.$grid.buildColumnAnchorParams();
    return this.$nextTick().then(function() {
      _this33.updateFooter();
      _this33.recalculate();
    });
  },
  // 指定列宽的列进行拆分
  analyColumnWidth: function analyColumnWidth() {
    var columnMinWidth = this.columnMinWidth, columnStore = this.columnStore, columnWidth = this.columnWidth, tableFullColumn = this.tableFullColumn;
    var autoList = [], pxList = [], pxMinList = [], resizeList = [], scaleList = [], scaleMinList = [];
    var ruleChains = [{
      match: function match(col) {
        return col.resizeWidth;
      },
      action: function action(col) {
        return resizeList.push(col);
      }
    }, {
      match: function match(col) {
        return isPx(col.width);
      },
      action: function action(col) {
        return pxList.push(col);
      }
    }, {
      match: function match(col) {
        return isScale(col.width);
      },
      action: function action(col) {
        return scaleList.push(col);
      }
    }, {
      match: function match(col) {
        return isPx(col.minWidth);
      },
      action: function action(col) {
        return pxMinList.push(col);
      }
    }, {
      match: function match(col) {
        return isScale(col.minWidth);
      },
      action: function action(col) {
        return scaleMinList.push(col);
      }
    }, {
      match: function match() {
        return true;
      },
      action: function action(col) {
        return autoList.push(col);
      }
    }];
    for (var i = 0; i < tableFullColumn.length; i++) {
      var column = tableFullColumn[i];
      columnWidth && !column.width && (column.width = columnWidth);
      columnMinWidth && !column.minWidth && (column.minWidth = columnMinWidth);
      if (column.visible) {
        for (var j = 0; j < ruleChains.length; j++) {
          var ruleChain = ruleChains[j];
          if (ruleChain.match(column)) {
            ruleChain.action(column);
            break;
          }
        }
      }
    }
    Object.assign(columnStore, {
      autoList,
      pxList,
      pxMinList,
      resizeList,
      scaleList,
      scaleMinList
    });
  },
  /**
   * 计算单元格列宽，动态分配可用剩余空间
   * 支持（width=?、width=?px、width=?%、min-width=?、min-width=?px、min-width=?%）
   */
  recalculate: function recalculate() {
    var _this34 = this;
    var mainBody = this.elemStore["main-body-wrapper"];
    if (isDisplayNone(mainBody)) {
      return;
    }
    var scrollXLoad = this.scrollXLoad, scrollYLoad = this.scrollYLoad, scrollLoad = this.scrollLoad;
    var _this$$refs2 = this.$refs, tableBody = _this$$refs2.tableBody, tableFooter = _this$$refs2.tableFooter, tableHeader = _this$$refs2.tableHeader;
    var getElem = function getElem2(ref2) {
      return ref2 ? ref2.$el : null;
    };
    var headerElem = getElem(tableHeader);
    var bodyElem = getElem(tableBody);
    var footerElem = getElem(tableFooter);
    if (!bodyElem) {
      return this.computeScrollLoad();
    }
    this.autoCellWidth(headerElem, bodyElem, footerElem);
    if (scrollXLoad || scrollYLoad || scrollLoad) {
      return this.computeScrollLoad().then(function() {
        _this34.autoCellWidth(headerElem, bodyElem, footerElem);
      });
    }
    return this.computeScrollLoad();
  },
  // 列宽计算
  autoCellWidth: function autoCellWidth(headerEl, bodyEl, footerEl) {
    var _this$$grid2, _this$$grid2$designCo;
    var minCellWidth = ((_this$$grid2 = this.$grid) == null ? void 0 : (_this$$grid2$designCo = _this$$grid2.designConfig) == null ? void 0 : _this$$grid2$designCo.minWidth) || 40;
    var fit = this.fit, columnStore = this.columnStore, columnChart = this.columnChart, isGroup2 = this.isGroup;
    var tableHeight = bodyEl.offsetHeight;
    var overflowY = bodyEl.scrollHeight > bodyEl.clientHeight;
    var bodyW = bodyEl.clientWidth;
    var leftList = columnStore.leftList, rightList = columnStore.rightList;
    var tableWidth = calcTableWidth({
      bodyWidth: bodyW,
      columnStore,
      fit,
      minCellWidth,
      remainWidth: bodyW
    });
    var scrollbarWidth = overflowY ? bodyEl.offsetWidth - bodyW : 0;
    var parentHeight2 = this.parentHeight;
    calcFixedStickyPosition({
      headerEl,
      bodyEl,
      columnStore,
      scrollbarWidth,
      columnChart,
      isGroup: isGroup2
    });
    Object.assign(this, {
      overflowY,
      parentHeight: parentHeight2,
      scrollbarWidth,
      tableHeight,
      tableWidth
    });
    if (headerEl) {
      this.headerHeight = headerEl.offsetHeight;
    }
    if (footerEl) {
      var footerHeight = footerEl.offsetHeight;
      this.scrollbarHeight = Math.max(footerHeight - footerEl.clientHeight, 0);
      this.overflowX = tableWidth > footerEl.clientWidth;
      this.footerHeight = footerHeight;
    } else {
      this.scrollbarHeight = Math.max(tableHeight - bodyEl.clientHeight, 0);
      this.overflowX = tableWidth > bodyW;
    }
    if (leftList.length || rightList.length) {
      generateFixedClassName({
        $table: this,
        bodyElem: bodyEl,
        leftList,
        rightList
      });
    }
  },
  // 同步headerHeight
  syncHeaderHeight: function syncHeaderHeight() {
    var _this$$refs$tableHead;
    var headerEl = (_this$$refs$tableHead = this.$refs.tableHeader) == null ? void 0 : _this$$refs$tableHead.$el;
    if (headerEl)
      this.headerHeight = headerEl.offsetHeight;
  },
  resetResizable: function resetResizable() {
    var toolbarVm = this.getVm("toolbar");
    this.visibleColumn.forEach(function(col) {
      return col.resizeWidth = 0;
    });
    if (toolbarVm) {
      toolbarVm.resetResizable();
    }
    this.analyColumnWidth();
    return this.recalculate();
  },
  updateStyle: function updateStyle() {
    var _this35 = this;
    this.updateParentHeight();
    var columnStore = this.columnStore, currentRow = this.currentRow, height2 = this.height, maxHeight = this.maxHeight, minHeight = this.minHeight, parentHeight2 = this.parentHeight, tableColumn3 = this.tableColumn, scrollbarWidth = this.scrollbarWidth;
    var scrollYLoad = this.scrollYLoad, scrollXLoad = this.scrollXLoad, scrollLoad = this.scrollLoad;
    var layoutList = ["header", "body", "footer"];
    var _ref173 = {}, customHeight = _ref173.customHeight, scaleToPx = _ref173.scaleToPx;
    var _this$$refs3 = this.$refs, tableBody = _this$$refs3.tableBody, tableHeader = _this$$refs3.tableHeader;
    var getElem = function getElem2(ref2) {
      return ref2 ? ref2.$el : null;
    };
    var headerEl = getElem(tableHeader);
    var bodyEl = getElem(tableBody);
    if (height2 === "auto") {
      customHeight = parentHeight2;
    } else {
      scaleToPx = Math.floor(parseInt(height2) / 100 * parentHeight2);
      customHeight = isScale(height2) ? scaleToPx : toNumber_default(height2);
    }
    layoutList.forEach(function(layout) {
      var args1 = {
        _vm: _this35,
        columnStore,
        customHeight
      };
      var args2 = {
        layout,
        maxHeight,
        minHeight,
        parentHeight: parentHeight2,
        tableColumn: tableColumn3
      };
      var ret = handleLayout(Object.assign(args1, args2));
      tableColumn3 = ret.tableColumn;
      maxHeight = ret.maxHeight;
      minHeight = ret.minHeight;
    });
    currentRow && this.setCurrentRow(currentRow);
    this.syncHeaderHeight();
    return this.$nextTick(function() {
      var leftList = columnStore.leftList, rightList = columnStore.rightList;
      if ((leftList.length || rightList.length) && (scrollYLoad || scrollXLoad || scrollLoad)) {
        calcFixedStickyPosition({
          headerEl,
          bodyEl,
          columnStore,
          scrollbarWidth
        });
      }
      return true;
    });
  },
  preventEvent: function preventEvent(event, type, args, next2, end) {
    var _this36 = this;
    var eventList = interceptor_default.get(type);
    if (!eventList.some(function(listener) {
      return listener(args, event, _this36) === false;
    })) {
      next2 && next2();
    }
    end && end();
  },
  blurOutside: function blurOutside(_ref174, event) {
    var _this37 = this;
    var row2 = _ref174.row, args = _ref174.args, column = _ref174.column;
    if (column && row2) {
      var editor = column.editor;
      if (typeof editor.blurOutside === "function") {
        return !!editor.blurOutside({
          cell: args.cell,
          event
        });
      }
      var blurClassConfig = editor.blurClass || this.editConfig.blurClass;
      if (blurClassConfig) {
        var blurClass = [];
        if (typeof blurClassConfig === "string") {
          blurClass.push(blurClassConfig);
        } else if (isArray(blurClassConfig)) {
          blurClass = blurClassConfig.slice(0);
        }
        return args.cell && args.cell.contains(event.target) || blurClass.some(function(cls) {
          return !_this37.getEventTargetNode(event, document.body, cls).flag;
        });
      }
    }
  },
  handleGlobalMousedownEvent,
  handleGlobalBlurEvent,
  handleGlobalMousewheelEvent,
  handleEscKeyDown,
  handleEnterKeyDown,
  handleCtxMenu,
  handleArrowKeyDown,
  handleDelKeyDown,
  handleSpaceKeyDown,
  handleTabKeyDown,
  handleCopyKeyDown,
  handleF2KeyDown,
  handleOtherKeyDown,
  handleGlobalKeydownEvent,
  handleGlobalResizeEvent,
  handleGlobalMousedownCaptureEvent,
  // 处理单选框默认勾选
  handleRadioDefChecked: function handleRadioDefChecked() {
    var fullDataRowIdData = this.fullDataRowIdData;
    var _ref175 = this.radioConfig || {}, checkRowKey = _ref175.checkRowKey;
    var rowid2 = checkRowKey && encodeURIComponent(checkRowKey);
    var rowCache = fullDataRowIdData[rowid2];
    if (rowid2 && rowCache) {
      this.setRadioRow(rowCache.row);
    }
  },
  // 单选，行选中事件
  triggerRadioRowEvent: function triggerRadioRowEvent(event, params) {
    var selectRow = this.selectRow;
    var _ref176 = this.radioConfig || {}, checkMethod = _ref176.checkMethod;
    if (checkMethod && !checkMethod(params)) {
      return;
    }
    this.setRadioRow(params.row);
    this.setCurrentRow(params.row);
    if (selectRow !== params.row) {
      emitEvent$1(this, "radio-change", [params, event]);
    }
  },
  triggerCurrentRowEvent: function triggerCurrentRowEvent(event, params) {
    var currentRow = this.currentRow;
    this.setCurrentRow(params.row);
    if (currentRow !== params.row) {
      emitEvent$1(this, "current-change", [params, event]);
    }
  },
  // 高亮行，设置某一行为高亮状态，如果调不加参数，则会取消目前高亮行的选中状态
  setCurrentRow: function setCurrentRow(row2) {
    run(["clearCurrentRow", "clearCurrentColumn"], this);
    this.currentRow = row2;
    if (this.highlightCurrentRow) {
      var rowElems = this.$el.querySelectorAll('[data-rowid="' + getRowid(this, row2) + '"]');
      arrayEach_default(rowElems, function(elem) {
        return addClass(elem, "row__current");
      });
    }
    return this.$nextTick();
  },
  setRadioRow: function setRadioRow(row2) {
    row2 !== this.selectRow && this.clearRadioRow();
    this.selectRow = row2;
    return this.$nextTick();
  },
  clearCurrentRow: function clearCurrentRow() {
    Object.assign(this, {
      currentRow: null,
      hoverRow: null
    });
    var rowElems = this.$el.querySelectorAll(".row__current");
    arrayEach_default(rowElems, function(elem) {
      return removeClass(elem, "row__current");
    });
    return this.$nextTick();
  },
  clearRadioRow: function clearRadioRow() {
    var radioRow = this.selectRow;
    radioRow && (this.selectRow = null);
    return this.$nextTick();
  },
  getCurrentRow: function getCurrentRow() {
    var currentRow = this.currentRow;
    return currentRow;
  },
  getRadioRow: function getRadioRow() {
    var radioRow = this.selectRow;
    return radioRow;
  },
  triggerHeaderCellClickEvent: function triggerHeaderCellClickEvent(event, params) {
    var lastTime = this._lastResizeTime, highlightCurrentColumn = this.highlightCurrentColumn;
    var cell = params.cell, column = params.column;
    var trigger = this.sortOpts.trigger;
    var isResizable2 = lastTime && lastTime > Date.now() - 300;
    var isSort = this.getEventTargetNode(event, cell, "tiny-grid-sort-wrapper").flag;
    var isFilter = this.getEventTargetNode(event, cell, "tiny-grid-filter-wrapper").flag;
    if (trigger === "cell" && !(isResizable2 || isSort || isFilter)) {
      var nextOrder = this.toggleColumnOrder(column);
      this.triggerSortEvent(event, column, nextOrder);
    }
    var eventParams = _extends({
      triggerResizable: isResizable2,
      triggerSort: isSort,
      triggerFilter: isFilter
    }, params);
    emitEvent$1(this, "header-cell-click", [eventParams, event]);
    if (highlightCurrentColumn) {
      return this.setCurrentColumn(column, true);
    }
    return this.$nextTick();
  },
  setCurrentColumn: function setCurrentColumn(column) {
    run(["clearCurrentRow", "clearCurrentColumn"], this);
    this.currentColumn = column;
    var colElems = this.$el.querySelectorAll("." + column.id);
    arrayEach_default(colElems, function(elem) {
      return addClass(elem, "col__current");
    });
    return this.$nextTick();
  },
  clearCurrentColumn: function clearCurrentColumn() {
    this.currentColumn = null;
    var colElems = this.$el.querySelectorAll(".col__current");
    arrayEach_default(colElems, function(elem) {
      return removeClass(elem, "col__current");
    });
    return this.$nextTick();
  },
  // 当单元格发生改变时，如果存在规则，则校验
  handleChangeCell: function handleChangeCell(event, params) {
    var _this38 = this;
    this.triggerValidate("blur").catch(function(e) {
      return e;
    }).then(function() {
      _this38.handleActived(params, event).then(function() {
        return _this38.triggerValidate("change");
      }).catch(function(e) {
        return e;
      });
    });
  },
  // 列点击事件：如果是单击模式，则激活为编辑状态；如果是双击模式，则单击后选中状态
  triggerCellClickEvent: function triggerCellClickEvent(event, params) {
    var $el = this.$el, highlightCurrentRow = this.highlightCurrentRow, editStore = this.editStore;
    var _this$radioConfig = this.radioConfig, radioConfig = _this$radioConfig === void 0 ? {} : _this$radioConfig, _this$selectConfig2 = this.selectConfig, selectConfig = _this$selectConfig2 === void 0 ? {} : _this$selectConfig2, _this$expandConfig = this.expandConfig, expandConfig = _this$expandConfig === void 0 ? {} : _this$expandConfig;
    var _this$treeConfig = this.treeConfig, treeConfig = _this$treeConfig === void 0 ? {} : _this$treeConfig, editConfig = this.editConfig, _this$mouseConfig = this.mouseConfig, mouseConfig = _this$mouseConfig === void 0 ? {} : _this$mouseConfig;
    var actived = editStore.actived;
    var row2 = params.row, column = params.column, cell = params.cell;
    if (isTargetRadioOrCheckbox(event, column, "radio") || isTargetRadioOrCheckbox(event, column, "selection", "checkbox")) {
      return;
    }
    onClickExpandColumn({
      $el,
      _vm: this,
      column,
      event,
      expandConfig,
      params
    });
    onClickTreeNodeColumn({
      _vm: this,
      column,
      event,
      params,
      treeConfig
    });
    if ((!column.treeNode || !this.getEventTargetNode(event, $el, "tiny-grid-tree-wrapper").flag) && (column.type !== "expand" || !this.getEventTargetNode(event, $el, "tiny-grid__expanded").flag)) {
      onHighlightCurrentRow({
        $el,
        _vm: this,
        event,
        highlightCurrentRow,
        params,
        radioConfig
      });
      onClickRadioColumn({
        $el,
        _vm: this,
        column,
        event,
        params,
        radioConfig
      });
      onClickSelectColumn({
        _vm: this,
        column,
        event,
        params,
        selectConfig
      });
      onClickCellSelect({
        _vm: this,
        actived,
        cell,
        column,
        editConfig,
        event,
        mouseConfig,
        params,
        row: row2
      });
    }
    emitEvent$1(this, "cell-click", [params, event]);
  },
  // 列双击点击事件：如果是双击模式，则激活为编辑状态
  triggerCellDBLClickEvent: function triggerCellDBLClickEvent(event, params) {
    var _this39 = this;
    var editStore = this.editStore, editConfig = this.editConfig;
    var actived = editStore.actived;
    var isActiveNewCell = !actived.args || event.currentTarget !== actived.args.cell;
    var isDblclickNewCell = editConfig && editConfig.trigger === "dblclick" && isActiveNewCell;
    if (isDblclickNewCell && editConfig.mode === "row") {
      this.triggerValidate("blur").catch(function(e) {
        return e;
      }).then(function() {
        _this39.handleActived(params, event).then(function() {
          return _this39.triggerValidate("change");
        }).catch(function(e) {
          return e;
        });
      });
    }
    if (isDblclickNewCell && editConfig.mode === "cell") {
      this.handleActived(params, event).then(function() {
        return _this39.triggerValidate("change");
      }).catch(function(e) {
        return e;
      });
    }
    emitEvent$1(this, "cell-dblclick", [params, event]);
  },
  // 点击排序事件
  triggerSortEvent: function triggerSortEvent(event, column, order) {
    var property2 = column.property;
    var isColumnSortable = column.type ? false : column.sortable || column.remoteSort;
    if (this.sortable && isColumnSortable) {
      var evntParams = {
        $table: this,
        column,
        order,
        property: property2
      };
      evntParams.prop = property2;
      evntParams.field = evntParams.prop;
      if (order === column.order) {
        evntParams.order = null;
        this.clearSort(column.property);
      } else {
        this.sort(property2, order);
      }
      emitEvent$1(this, "sort-change", [evntParams, event]);
    }
  },
  sort: function sort(field, order) {
    var remoteSort = this.remoteSort, tableFullColumn = this.tableFullColumn, visibleColumn = this.visibleColumn;
    var column = find_default(visibleColumn, function(item) {
      return item.property === field;
    });
    var isRemote = isBoolean_default(column.remoteSort) ? column.remoteSort : remoteSort;
    var isColumnSortable = column.type ? false : column.sortable || column.remoteSort;
    if (this.sortable && isColumnSortable) {
      if (column.order !== order) {
        tableFullColumn.forEach(function(column2) {
          return column2.order = null;
        });
        column.order = order;
        !isRemote && this.handleTableData(true).then(this.refreshStyle);
      }
      return this.$nextTick().then(this.updateStyle);
    }
    return this.$nextTick();
  },
  clearSort: function clearSort() {
    arrayEach_default(this.tableFullColumn, function(column) {
      return column.order = null;
    });
    this.$grid && (this.$grid.sortData = {});
    return this.handleTableData(true).then(this.refreshStyle);
  },
  toggleGroupExpansion: function toggleGroupExpansion(row2) {
    this.groupExpandeds.push(row2);
  },
  // 展开行事件
  triggerRowExpandEvent: function triggerRowExpandEvent(event, _ref177) {
    var row2 = _ref177.row;
    var rest = this.toggleRowExpansion(row2);
    var eventParams = {
      $table: this,
      row: row2,
      rowIndex: this.getRowIndex(row2)
    };
    emitEvent$1(this, "toggle-expand-change", [eventParams, event]);
    return rest;
  },
  // 切换展开行
  toggleRowExpansion: function toggleRowExpansion(row2) {
    return this.setRowExpansion(row2);
  },
  // 处理默认展开行
  handleDefaultRowExpand: function handleDefaultRowExpand() {
    var fullDataRowIdData = this.fullDataRowIdData, tableFullData = this.tableFullData;
    var _ref178 = this.expandConfig || {}, expandAll = _ref178.expandAll, expandRowKeys = _ref178.expandRowKeys;
    if (expandAll) {
      this.expandeds = tableFullData.slice(0);
      return;
    }
    if (expandRowKeys) {
      var defExpandeds = [];
      expandRowKeys.forEach(function(rowid2) {
        var rowCache = fullDataRowIdData[rowid2];
        rowCache && defExpandeds.push(rowCache.row);
      });
      this.expandeds = defExpandeds;
    }
  },
  setAllRowExpansion: function setAllRowExpansion(expanded) {
    this.expandeds = !expanded ? [] : this.tableFullData.slice(0);
    return this.$nextTick().then(this.recalculate);
  },
  // 设置展开行，二个参数设置这一行展开与否；支持单行；支持多行
  setRowExpansion: function setRowExpansion(rows, expanded) {
    var expandeds = this.expandeds;
    var _ref179 = this.expandConfig || {}, accordion = _ref179.accordion;
    var isToggle = arguments.length === 1;
    var isAccordionCloseAll = false;
    if (!rows) {
      return this.$nextTick().then(this.recalculate);
    }
    if (!isArray(rows)) {
      rows = [rows];
    }
    if (accordion) {
      rows = rows.slice(rows.length - 1, rows.length);
      if (rows.length && isToggle) {
        isAccordionCloseAll = expandeds.includes(rows[0]);
      }
      expandeds.length = 0;
    }
    rows.forEach(function(row2) {
      var index232 = expandeds.indexOf(row2);
      if (isToggle && ~index232 || !isToggle && !expanded && ~index232) {
        expandeds.splice(index232, 1);
        return;
      }
      if (isToggle && !isAccordionCloseAll && !~index232 || !isToggle && expanded && !~index232) {
        expandeds.push(row2);
      }
    });
    return this.$nextTick().then(this.recalculate);
  },
  hasRowExpand: function hasRowExpand(row2) {
    return ~this.expandeds.indexOf(row2);
  },
  clearRowExpand: function clearRowExpand() {
    var _this40 = this;
    var hasExpand = this.expandeds.length;
    this.expandeds = [];
    return this.$nextTick().then(function() {
      return hasExpand ? _this40.recalculate() : 0;
    });
  },
  // 获取虚拟滚动状态
  getVirtualScroller: function getVirtualScroller() {
    var scrollXLoad = this.scrollXLoad, scrollYLoad = this.scrollYLoad;
    var _this$$refs$tableBody = this.$refs.tableBody.$el, scrollLeft = _this$$refs$tableBody.scrollLeft, scrollTop = _this$$refs$tableBody.scrollTop;
    return {
      scrollX: scrollXLoad,
      scrollY: scrollYLoad,
      scrollLeft,
      scrollTop
    };
  },
  // 横向 X 可视渲染事件处理
  triggerScrollXEvent: function triggerScrollXEvent(event) {
    this.loadScrollXData(event);
  },
  debounceScrollX: function debounceScrollX(event) {
    var _this41 = this;
    if (!this.tasks.debounceScrollX) {
      this.tasks.debounceScrollXHandler = null;
      this.tasks.debounceScrollX = function() {
        return requestAnimationFrame(function() {
          _this41.tasks.debounceScrollXHandler = null;
          _this41.loadScrollXData(event);
        });
      };
    }
    if (this.tasks.debounceScrollXHandler) {
      cancelAnimationFrame(this.tasks.debounceScrollXHandler);
      this.tasks.debounceScrollXHandler = null;
    }
    this.tasks.debounceScrollXHandler = this.tasks.debounceScrollX();
  },
  // 处理x轴滚动时，虚拟滚动数据计算
  loadScrollXData: function loadScrollXData() {
    var scrollXStore = this.scrollXStore, visibleColumn = this.visibleColumn;
    var offsetSize = scrollXStore.offsetSize, renderSize = scrollXStore.renderSize, startIndex = scrollXStore.startIndex, visibleIndex = scrollXStore.visibleIndex, visibleSize = scrollXStore.visibleSize;
    var scrollLeft = this.$refs.tableBody.$el.scrollLeft;
    var _ref180 = {}, _ref180$preload = _ref180.preload, preload = _ref180$preload === void 0 ? false : _ref180$preload, _ref180$toVisibleInde = _ref180.toVisibleIndex, toVisibleIndex = _ref180$toVisibleInde === void 0 ? 0 : _ref180$toVisibleInde, _ref180$width = _ref180.width, width = _ref180$width === void 0 ? 0 : _ref180$width;
    for (var i = 0; i < visibleColumn.length; i++) {
      width += visibleColumn[i].renderWidth;
      if (scrollLeft < width) {
        toVisibleIndex = i;
        break;
      }
    }
    if (visibleIndex === toVisibleIndex) {
      this.clostTooltip();
      return;
    }
    var marginSize = Math.min(Math.floor((renderSize - visibleSize) / 2), visibleSize);
    if (visibleIndex > toVisibleIndex) {
      preload = startIndex >= toVisibleIndex - offsetSize;
      if (preload) {
        scrollXStore.startIndex = Math.max(0, toVisibleIndex - Math.max(marginSize, renderSize - visibleSize));
        this.updateScrollXData();
      }
    } else {
      preload = startIndex + renderSize <= toVisibleIndex + visibleSize + offsetSize;
      if (preload) {
        scrollXStore.startIndex = Math.max(0, Math.min(visibleColumn.length - renderSize, toVisibleIndex - marginSize));
        this.updateScrollXData();
      }
    }
    scrollXStore.visibleIndex = toVisibleIndex;
    this.clostTooltip();
  },
  // 纵向 Y 可视渲染事件处理
  triggerScrollYEvent: function triggerScrollYEvent(event) {
    this.loadScrollYData(event);
  },
  // 处理滚动分页相关逻辑
  debounceScrollLoad: function debounceScrollLoad(event) {
    var _this42 = this;
    if (!this.tasks.debounceScrollLoad) {
      this.tasks.debounceScrollLoad = debounce_default(debounceScrollLoadDuration, function() {
        var _this42$scrollLoadSto = _this42.scrollLoadStore, scrollHeight = _this42$scrollLoadSto.scrollHeight, bodyHeight = _this42$scrollLoadSto.bodyHeight;
        var _this42$$grid$tablePa = _this42.$grid.tablePage, currentPage2 = _this42$$grid$tablePa.currentPage, pageSize2 = _this42$$grid$tablePa.pageSize;
        var max = scrollHeight - bodyHeight;
        var scrollTop = event.target.scrollTop;
        if (scrollTop > max) {
          scrollTop = max;
        }
        var rowHeight = _this42.scrollYStore.rowHeight;
        var visibleIndex = Math.ceil(scrollTop / rowHeight);
        var page = Math.ceil(visibleIndex / pageSize2) + 1;
        if (currentPage2 !== page) {
          _this42.$grid.pageCurrentChange(page);
        }
      });
    }
    this.tasks.debounceScrollLoad();
  },
  // 纵向 Y 可视渲染处理
  loadScrollYData: function loadScrollYData(event) {
    var _this43 = this;
    var scrollYStore = this.scrollYStore;
    var startIndex = scrollYStore.startIndex, renderSize = scrollYStore.renderSize, offsetSize = scrollYStore.offsetSize, visibleIndex = scrollYStore.visibleIndex, visibleSize = scrollYStore.visibleSize, rowHeight = scrollYStore.rowHeight;
    var scrollTop = event.target.scrollTop;
    var toVisibleIndex = Math.ceil(scrollTop / rowHeight);
    var preload = false;
    if (visibleIndex === toVisibleIndex) {
      return;
    }
    var marginSize = Math.min(Math.floor((renderSize - visibleSize) / 2), visibleSize);
    if (toVisibleIndex < visibleIndex) {
      preload = startIndex >= toVisibleIndex - offsetSize;
      if (preload) {
        scrollYStore.startIndex = Math.max(0, toVisibleIndex - Math.max(marginSize, renderSize - visibleSize));
        this.updateScrollYData();
      }
    } else {
      preload = startIndex + renderSize <= toVisibleIndex + visibleSize + offsetSize;
      if (preload) {
        var totalRows = getTotalRows(this);
        scrollYStore.startIndex = Math.max(0, Math.min(totalRows - renderSize, toVisibleIndex - marginSize));
        this.updateScrollYData();
      }
    }
    scrollYStore.visibleIndex = toVisibleIndex;
    this.$nextTick(function() {
      _this43.updateSelectedCls(true);
    });
  },
  getRowHeight: function getRowHeight() {
    var $refs = this.$refs, vSize5 = this.vSize;
    var scrollY = this.optimizeOpts.scrollY;
    var tableBody = $refs.tableBody, tableHeader = $refs.tableHeader;
    var rHeight = scrollY.rHeight;
    if (!rHeight) {
      var firstTrElem = tableBody && tableBody.$el.querySelector("tbody>tr") || tableHeader && tableHeader.$el.querySelector("thead>tr") || null;
      if (firstTrElem) {
        rHeight = firstTrElem.clientHeight;
      }
    }
    if (!rHeight) {
      var vSizeList = ["medium", "small", "mini"];
      var defSizeList = [44, 40, 36];
      var i = vSizeList.indexOf(vSize5);
      rHeight = ~i ? defSizeList[i] : 48;
    }
    return rHeight;
  },
  // 计算可视渲染相关数据
  computeScrollLoad: function computeScrollLoad() {
    var _this44 = this;
    return this.$nextTick().then(function() {
      var $refs = _this44.$refs, optimizeOpts2 = _this44.optimizeOpts, visibleColumn = _this44.visibleColumn;
      var scrollLoad = _this44.scrollLoad, scrollXLoad = _this44.scrollXLoad, scrollXStore = _this44.scrollXStore, scrollYLoad = _this44.scrollYLoad, scrollYStore = _this44.scrollYStore;
      var scrollX = optimizeOpts2.scrollX, scrollY = optimizeOpts2.scrollY;
      var tableBody = $refs.tableBody;
      var bodyElem = tableBody ? tableBody.$el : null;
      if (bodyElem) {
        computeScrollXLoad({
          _vm: _this44,
          scrollX,
          scrollXLoad,
          scrollXStore,
          tableBodyElem: bodyElem,
          visibleColumn
        });
        computeScrollYLoad({
          _vm: _this44,
          scrollLoad,
          scrollY,
          scrollYLoad,
          scrollYStore,
          tableBodyElem: bodyElem
        });
      }
      _this44.$nextTick(_this44.updateStyle);
    });
  },
  // 处理x轴方向虚拟滚动列数据加载
  updateScrollXData: function updateScrollXData() {
    var _this45 = this;
    var scrollXLoad = this.scrollXLoad, scrollXStore = this.scrollXStore, tableColumn3 = this.tableColumn, treeConfig = this.treeConfig, visibleColumn = this.visibleColumn, visibleColumnChanged = this.visibleColumnChanged, columnStore = this.columnStore;
    var _scrollXStore$lastSta = scrollXStore.lastStartIndex, lastStartIndex = _scrollXStore$lastSta === void 0 ? -1 : _scrollXStore$lastSta, renderSize = scrollXStore.renderSize, startIndex = scrollXStore.startIndex;
    var args = {
      lastStartIndex,
      renderSize,
      scrollXLoad,
      startIndex,
      tableColumn: tableColumn3,
      columnStore
    };
    Object.assign(args, {
      treeConfig,
      visibleColumn,
      visibleColumnChanged
    });
    var ret = sliceVisibleColumn(args);
    if (ret.sliced) {
      this.updateScrollXSpace();
      this.updateScrollStatus();
    }
    this.debounceRaf("updateScrollXDataHandler", function() {
      scrollXStore.lastStartIndex = ret.lastStartIndex;
      _this45.tableColumn = ret.tableColumn;
      _this45.visibleColumnChanged = ret.visibleColumnChanged;
      _this45.$nextTick(_this45.updateStyle);
    });
  },
  // 更新横向 X 可视渲染上下剩余空间大小
  updateScrollXSpace: function updateScrollXSpace() {
    var elemStore = this.elemStore, scrollXLoad = this.scrollXLoad, scrollXStore = this.scrollXStore, scrollbarWidth = this.scrollbarWidth, tableWidth = this.tableWidth, visibleColumn = this.visibleColumn;
    var startIndex = scrollXStore.startIndex;
    var _ref181 = {}, bodyElem = _ref181.bodyElem, footerElem = _ref181.footerElem, headerElem = _ref181.headerElem, leftSpaceWidth = _ref181.leftSpaceWidth, marginLeft = _ref181.marginLeft;
    headerElem = elemStore["main-header-table"];
    bodyElem = elemStore["main-body-table"];
    footerElem = elemStore["main-footer-table"];
    leftSpaceWidth = visibleColumn.slice(0, startIndex).reduce(function(previous, column) {
      if (column.fixed === "left")
        return previous;
      return previous + column.renderWidth;
    }, 0);
    marginLeft = scrollXLoad ? leftSpaceWidth + "px" : "";
    headerElem && (headerElem.style.marginLeft = marginLeft);
    bodyElem.style.marginLeft = marginLeft;
    footerElem && (footerElem.style.marginLeft = marginLeft);
    var layouts = ["header", "body", "footer"];
    layouts.forEach(function(layout) {
      var xSpaceElem = elemStore["main-" + layout + "-xSpace"];
      var extra = layout === "header" ? scrollbarWidth : 0;
      if (xSpaceElem) {
        xSpaceElem.style.width = scrollXLoad ? tableWidth + extra + "px" : "";
      }
    });
    this.$nextTick(this.updateStyle);
  },
  debounceRaf: function debounceRaf(handlerKey, callback) {
    var _this46 = this;
    if (this[handlerKey]) {
      cancelAnimationFrame(this[handlerKey]);
    }
    this[handlerKey] = requestAnimationFrame(function() {
      _this46[handlerKey] = null;
      callback();
    });
  },
  // 处理虚拟滚动加载数据，并更新YSpace位置
  updateScrollYData: function updateScrollYData() {
    var _this47 = this;
    this.updateScrollYSpace();
    this.debounceRaf("updateScrollYDataHandler", function() {
      _this47.handleTableData().then(function() {
        return _this47.$nextTick(_this47.updateStyle);
      });
    });
  },
  // 更新纵向虚拟滚动 Y 可视渲染上下剩余空间大小（使用tiny-grid-body__y-space元素撑开足够空间）
  updateScrollYSpace: function updateScrollYSpace() {
    var $grid = this.$grid, elemStore = this.elemStore, scrollLoad = this.scrollLoad, scrollLoadStore = this.scrollLoadStore, scrollYLoad = this.scrollYLoad;
    var _this$scrollYStore = this.scrollYStore, rowHeight = _this$scrollYStore.rowHeight, startIndex = _this$scrollYStore.startIndex;
    var totalRows = getTotalRows(this);
    var bodyHeight = totalRows * rowHeight;
    var scrollHeight = $grid.pagerConfig ? $grid.pagerConfig.total * rowHeight : 0;
    var isVScrollOrLoad = scrollYLoad || scrollLoad;
    var _ref182 = {}, marginTop = _ref182.marginTop, ySpaceHeight = _ref182.ySpaceHeight;
    marginTop = isVScrollOrLoad && scrollYLoad ? Math.max(startIndex * rowHeight, 0) + "px" : "";
    ySpaceHeight = isVScrollOrLoad ? bodyHeight + "px" : "";
    scrollLoadStore.bodyHeight = bodyHeight;
    scrollLoadStore.scrollHeight = scrollHeight;
    var tableElem = elemStore["main-body-table"];
    if (tableElem) {
      tableElem.style.transform = marginTop ? "translateY(" + marginTop + ")" : "";
    }
    var ySpaceElem = elemStore["main-body-ySpace"];
    ySpaceElem && (ySpaceElem.style.height = ySpaceHeight);
    if (ySpaceElem && scrollLoad && $grid) {
      Object.assign(scrollLoadStore, {
        bodyHeight,
        scrollHeight
      });
      ySpaceElem.firstChild.style.height = scrollHeight + "px";
      ySpaceElem.onscroll = this.debounceScrollLoad;
    }
  },
  updateScrollLoadBar: function updateScrollLoadBar(event) {
    var $el = this.$el, elemStore = this.elemStore, scrollLoad = this.scrollLoad, scrollLoadStore = this.scrollLoadStore;
    if (scrollLoad && $el.contains(event.target)) {
      var wheelDelta = event.wheelDelta ? event.wheelDelta : -event.detail * 40;
      var scrollElm = elemStore["main-body-ySpace"];
      var scrollHeight = scrollLoadStore.scrollHeight, bodyHeight = scrollLoadStore.bodyHeight;
      var max = scrollHeight - bodyHeight;
      var top = scrollElm.scrollTop - wheelDelta;
      top = max < top ? max : top;
      top = top < 0 ? 0 : top;
      scrollElm.scrollTop = top;
    }
  },
  scrollTo: function scrollTo(scrollLeft, scrollTop) {
    var elemStore = this.elemStore;
    var tableBodyElem = elemStore["main-body-wrapper"];
    var tableHeaderElem = elemStore["main-header-wrapper"];
    var tableFooterElem = elemStore["main-footer-wrapper"];
    if (isNumber_default(scrollLeft)) {
      tableBodyElem && (tableBodyElem.scrollLeft = scrollLeft);
      tableFooterElem && (tableFooterElem.scrollLeft = scrollLeft);
      tableHeaderElem && (tableHeaderElem.scrollLeft = scrollLeft);
    }
    if (isNumber_default(scrollTop)) {
      tableBodyElem && (tableBodyElem.scrollTop = scrollTop);
    }
    return this.$nextTick();
  },
  scrollToRow: function scrollToRow(row2, column, isDelay, move) {
    var hasRowCache = this.fullAllDataRowMap.has(row2);
    var isDelayArg = isDelay || isBoolean_default(column);
    row2 && hasRowCache && rowToVisible(this, row2);
    return this.scrollToColumn(column, isDelayArg, move);
  },
  scrollToTreeRow: function scrollToTreeRow(row2) {
    var _this48 = this;
    var tableFullData = this.tableFullData, treeConfig = this.treeConfig, treeOpts = this.treeOpts;
    if (!treeConfig) {
      return this.$nextTick();
    }
    var matchObj = findTree_default(tableFullData, function(item) {
      return item === row2;
    }, treeOpts);
    if (!matchObj) {
      return this.$nextTick();
    }
    var nodes = matchObj.nodes;
    nodes.forEach(function(row22, index232) {
      if (index232 === nodes.length - 1 || _this48.hasTreeExpand(row22)) {
        return;
      }
      _this48.setTreeExpansion(row22, true);
    });
    return this.$nextTick();
  },
  scrollToColumn: function scrollToColumn(column, isDelay, move) {
    var _this49 = this;
    var hasColCache = this.fullColumnMap.has(column);
    column && hasColCache && colToVisible(this, column, move);
    return isDelay && (this.scrollXLoad || this.scrollYLoad) ? new Promise(function(resolve) {
      return setTimeout(function() {
        return resolve(_this49.$nextTick());
      }, 50);
    }) : this.$nextTick();
  },
  resetScrollTop: function resetScrollTop() {
    this.lastScrollTop = 0;
  },
  clearScroll: function clearScroll() {
    var _this50 = this;
    var scrollXStore = this.scrollXStore, scrollYStore = this.scrollYStore, elemStore = this.elemStore;
    Object.assign(this, {
      lastScrollLeft: 0
    });
    Object.assign(scrollXStore, {
      startIndex: 0,
      visibleIndex: 0
    });
    Object.assign(scrollYStore, {
      startIndex: 0,
      visibleIndex: 0
    });
    this.$nextTick(function() {
      var tableBodyElem = elemStore["main-body-wrapper"];
      var tableHeaderElem = elemStore["main-header-wrapper"];
      var tableFooterElem = elemStore["main-footer-wrapper"];
      if (_this50.afterMounted) {
        tableBodyElem && Object.assign(tableBodyElem, {
          scrollLeft: 0,
          scrollTop: 0
        });
        tableFooterElem && Object.assign(tableFooterElem, {
          scrollLeft: 0
        });
        tableHeaderElem && Object.assign(tableHeaderElem, {
          scrollLeft: 0
        });
      }
    });
    return this.$nextTick();
  },
  // 更新表尾合计
  updateFooter: function updateFooter() {
    var _this51 = this;
    var afterFullData = this.afterFullData, footerMethod = this.footerMethod, showFooter = this.showFooter, summaryConfig = this.summaryConfig, tableColumn3 = this.tableColumn;
    if (footerMethod && showFooter) {
      var data8 = footerMethod({
        columns: tableColumn3,
        data: afterFullData
      });
      if (data8.length && data8.some(function(value) {
        return !isArray(value);
      })) {
        data8 = [data8];
      }
      this.footerData = tableColumn3.length ? data8 : [];
    }
    if (summaryConfig) {
      var fields = summaryConfig.fields, fraction = summaryConfig.fraction, text = summaryConfig.text, _truncate = summaryConfig.truncate;
      var summary = tableColumn3.map(function(column, columnIndex) {
        if (columnIndex === 0) {
          return text || "";
        }
        if (~fields.indexOf(column.property)) {
          return toDecimal(sum_default(_this51.afterFullData, column.property), fraction, _truncate);
        }
        return null;
      });
      this.footerData = [summary];
    }
    return this.$nextTick();
  },
  // 更新列状态：如果组件值v-model发生change，调用该函数更新列的编辑状态。如果单元格配置了校验规则，则进行校验
  updateStatus: function updateStatus(scope, cellValue, renderOpts) {
    var _this52 = this;
    var customValue = !isUndefined_default(cellValue);
    return this.$nextTick().then(function() {
      var $refs = _this52.$refs, editRules = _this52.editRules, tableData = _this52.tableData, validStore = _this52.validStore;
      var tableBody = $refs.tableBody;
      if (!scope || !tableBody || !editRules) {
        return;
      }
      if (renderOpts && renderOpts.isValidAlways) {
        validStore.visible = true;
      }
      var column = scope.column, row2 = scope.row;
      var type = "change";
      if (!_this52.hasCellRules(type, row2, column)) {
        return;
      }
      var rowIndex = tableData.indexOf(row2);
      getCell(_this52, {
        row: row2,
        rowIndex,
        column
      }).then(function(cell) {
        if (!cell) {
          return;
        }
        return _this52.validCellRules(type, row2, column, cellValue).then(function() {
          customValue && validStore.visible && setCellValue(row2, column, cellValue);
          _this52.clearValidate();
        }).catch(function(_ref183) {
          var rule = _ref183.rule;
          customValue && setCellValue(row2, column, cellValue);
          _this52.showValidTooltip({
            rule,
            row: row2,
            column,
            cell
          });
        });
      });
    });
  },
  /* X/Y 方向滚动 */
  updateScrollStatus: function updateScrollStatus() {
    var _this53 = this;
    if (!this.tasks.updateScrollStatus) {
      this.tasks.updateScrollStatus = debounce_default(AsyncCollectTimeout, function() {
        var scrollXLoad = _this53.scrollXLoad, scrollYLoad = _this53.scrollYLoad, isAsyncColumn = _this53.isAsyncColumn;
        if (isAsyncColumn && (scrollXLoad || scrollYLoad)) {
          var tableData = _this53.tableData, scrollXStore = _this53.scrollXStore, scrollYStore = _this53.scrollYStore, tableFullData = _this53.tableFullData, _this53$scrollDirecti = _this53.scrollDirection, scrollDirection = _this53$scrollDirecti === void 0 ? "N" : _this53$scrollDirecti;
          var isInit = scrollXLoad && scrollXStore.visibleIndex === 0 || scrollYLoad && scrollYStore.visibleIndex === 0;
          if (isInit || scrollDirection !== "N") {
            _this53.handleResolveColumn(tableFullData, _this53.collectAsyncColumn(tableData));
          }
        }
      });
    }
    this.tasks.updateScrollStatus();
  },
  // 获取异步列唯一ID
  getAsyncColumnUniqueKey: function getAsyncColumnUniqueKey(property2, row2) {
    return property2 + "_" + row2[this.rowId];
  },
  // 获取异步列名称
  getAsyncColumnName: function getAsyncColumnName(property2) {
    return GlobalConfig$1.constant.asyncPrefix + property2;
  },
  // 收集异步列
  collectAsyncColumn: function collectAsyncColumn(tableData) {
    var _this54 = this;
    var fetchColumns = [];
    var rowId = this.rowId, asyncRenderMap = this.asyncRenderMap, tableColumn3 = this.tableColumn;
    if (!rowId) {
      warn$1("The (grid-props:rowId) is required for the asynchronous column.");
      return fetchColumns;
    }
    tableColumn3.forEach(function(col) {
      var _ref184 = col.format || {}, async = _ref184.async;
      var _ref185 = async || {}, fetch = _ref185.fetch, _ref185$splitConfig = _ref185.splitConfig, splitConfig = _ref185$splitConfig === void 0 ? {} : _ref185$splitConfig;
      if (typeof fetch === "function") {
        var columnValues = [];
        tableData.forEach(function(row2) {
          var cellValue = row2[col.property];
          if (typeof cellValue !== "string" || typeof cellValue === "string" && !cellValue) {
            cellValue = " ";
          }
          var cellValuesCount = 1;
          var cellValues = [cellValue];
          var uniqueKey = _this54.getAsyncColumnUniqueKey(col.property, row2);
          if (splitConfig.enabled === true) {
            cellValues = cellValue.split(splitConfig.valueSplit || ",");
            cellValuesCount = cellValues.length;
          }
          if (!asyncRenderMap[uniqueKey]) {
            asyncRenderMap[uniqueKey] = cellValuesCount;
            cellValues.forEach(function(value) {
              return columnValues.push(value);
            });
          }
        });
        if (columnValues.length) {
          fetchColumns.push(_extends({}, col, {
            columnValues
          }));
        }
      }
    });
    return fetchColumns;
  },
  // fetchData 执行
  handleAsyncColumn: function handleAsyncColumn(tableData) {
    if (this.isAsyncColumn && tableData.length) {
      this.asyncRenderMap = {};
      this.handleResolveColumn(tableData, this.collectAsyncColumn(tableData));
    }
  },
  // 查询异步列
  handleResolveColumn: function handleResolveColumn(tableData, fetchColumns) {
    var tableColumn3 = this.tableColumn, scrollYStore = this.scrollYStore, asyncRenderMap = this.asyncRenderMap, scrollXLoad = this.scrollXLoad, scrollYLoad = this.scrollYLoad;
    var startIndex = scrollYStore.startIndex;
    var isScrollLoad = scrollXLoad || scrollYLoad;
    if (fetchColumns.length === 0) {
      return;
    }
    var promises = mapFetchColumnPromise({
      _vm: this,
      fetchColumns,
      tableColumn: tableColumn3
    });
    Promise.all(promises).then(handleAllColumnPromises({
      startIndex,
      fetchColumns,
      tableData,
      asyncRenderMap,
      isScrollLoad
    }, this));
  },
  // Publish methods 与工具栏对接
  connect: function connect(_ref186) {
    var toolbar = _ref186.toolbar;
    this.$toolbar = toolbar;
  },
  // 检查触发源是否属于目标节点
  getEventTargetNode,
  // 可见性改变事件处理
  handleVisibilityChange: function handleVisibilityChange(visible3, entry) {
    if (visible3) {
      this.updateParentHeight();
      this.updateTableBodyHeight();
      this.recalculate();
    }
    emitEvent$1(this, "visible-change", [{
      $table: this,
      visible: visible3,
      entry
    }]);
  },
  // 更新表体高度
  updateTableBodyHeight: function updateTableBodyHeight() {
    var _this55 = this;
    if (!this.tasks.updateTableBodyHeight) {
      this.tasks.updateTableBodyHeight = function() {
        singleton_default.measure(function() {
          var tableBodyElem = _this55.elemStore["main-body-wrapper"];
          _this55.tableBodyHeight = tableBodyElem ? tableBodyElem.clientHeight : 0;
        });
      };
    }
    this.tasks.updateTableBodyHeight();
  },
  // 按顺序切换列的排序状态（null --> asc --> desc --> null --> ...）
  toggleColumnOrder: function toggleColumnOrder(column) {
    return column.order ? column.order === "asc" ? "desc" : null : "asc";
  },
  watchDataForVue3: function watchDataForVue3() {
    var _this56 = this;
    var stopWatch = watch([function() {
      return _this56.data;
    }, function() {
      return _this56.data && _this56.data.length;
    }], function(_ref187, _ref188) {
      var newData = _ref187[0], newLength = _ref187[1];
      var oldData = _ref188[0], oldLength = _ref188[1];
      if (Array.isArray(_this56.data) && newData === oldData && newLength !== oldLength) {
        _this56.handleDataChange();
      }
    });
    onBeforeUnmount(function() {
      return stopWatch();
    });
  },
  getVm: function getVm(name) {
    return this.$grid.getVm(name);
  }
};
funcs.forEach(function(name) {
  Methods$d[name] = function() {
    return this["_" + name] ? this["_" + name].apply(this, arguments) : null;
  };
});
var methods = Methods$d;
var fnField = function fnField2(field) {
  return typeof field === "string" ? field : field[0];
};
var fnFields = function fnFields2(fields) {
  return fields.map(fnField);
};
var fnFieldConfig = function fnFieldConfig2(field) {
  return Array.isArray(field) && field.length > 1 ? field[1] : {};
};
var _sfc_main$7 = defineComponent({
  props: _extends({}, $props, {
    datas: Object,
    row: Object
  }),
  render: function render9() {
    var datas = this.datas, row2 = this.row;
    var selectionColumn = datas.selectionColumn, genParams2 = datas.genParams, config2 = datas.config;
    var params = genParams2(selectionColumn, row2);
    var tableVm = config2.tableVm;
    if (~tableVm.selection.indexOf(row2))
      ;
    var _tableVm$selectConfig = tableVm.selectConfig, selectConfig = _tableVm$selectConfig === void 0 ? {} : _tableVm$selectConfig;
    var checkMethod = selectConfig.checkMethod;
    if (typeof checkMethod === "function" && !checkMethod(params))
      ;
    return h("div", {
      attrs: {
        "data-tag": "tiny-table-column-type"
      },
      class: "py-px"
    }, selectionColumn.renderCell(h, params));
  }
});
var _sfc_main$6 = defineComponent({
  inject: ["$mftable"],
  props: _extends({}, $props, {
    datas: Object,
    row: Object
  }),
  render: function render10() {
    var _this57 = this;
    var datas = this.datas, row2 = this.row;
    var primaryColumn = datas.primaryColumn, contentColumns = datas.contentColumns, genParams2 = datas.genParams, config2 = datas.config, cardView2 = datas.cardView;
    var _config$cardConfig = config2.cardConfig, cardConfig = _config$cardConfig === void 0 ? {} : _config$cardConfig;
    var props2 = {
      attrs: {
        "data-tag": "tiny-table-column-content"
      },
      class: "my-0.5 truncate space-y-2 sm:space-y-1 [&_[data-tag=tiny-input]]:leading-7 [&_[data-tag=tiny-input-textarea]>span]:pt-0"
    };
    var ons = function ons2() {
      return {
        mouseenter: _this57.handleMouseenter,
        mouseleave: _this57.handleMouseleave
      };
    };
    if (!primaryColumn || !primaryColumn.renderCell) {
      return h("div", props2, []);
    }
    var primaryVnode = null;
    var contentVnodes = [];
    if (cardView2) {
      var hasLogo = typeof cardConfig.logoField !== "undefined";
      var hasTag = false;
      var tagVnodes = [];
      var logoField = "";
      var logoFieldConfig = {};
      var logoVnode = null;
      if (cardConfig.tagFields && cardConfig.tagFields.length) {
        var tagFields = cardConfig.tagFields;
        hasTag = true;
        tagVnodes = fnFields(tagFields).map(function(field, i) {
          if (!row2[field] || typeof row2[field] !== "string") {
            return null;
          }
          var fieldConfig = fnFieldConfig(tagFields[i]);
          var colorField = "";
          if (cardConfig.tagColorFields && cardConfig.tagColorFields.length && cardConfig.tagColorFields[i]) {
            colorField = fnField(cardConfig.tagColorFields[i]);
          }
          var type = row2[colorField] || "";
          var tagProps2 = {
            props: {
              size: "mini",
              customClass: "inline-block truncate max-w-[theme(spacing.28)] h-4.5"
            }
          };
          if (type) {
            Object.assign(tagProps2.props, {
              type
            });
          }
          if (fieldConfig.render) {
            return fieldConfig.render({
              h,
              row: row2,
              field,
              config: fieldConfig,
              value: row2[field],
              color: type
            });
          }
          return h(Tag, tagProps2, row2[field] || "");
        });
      }
      if (cardConfig.logoField) {
        logoField = fnField(cardConfig.logoField);
        logoFieldConfig = fnFieldConfig(cardConfig.logoField);
      }
      var gridCls = ["grid mb-3", hasLogo ? "grid-cols-[theme(spacing.11)_auto]" : "grid-cols-[auto]"];
      var logoCls = "w-11 h-11 overflow-hidden rounded";
      var primCls = ["text-base sm:text-sm text-color-text-primary font-medium leading-5", "overflow-hidden text-ellipsis whitespace-normal line-clamp-2 sm:line-clamp-1", {
        "ml-3": hasLogo
      }];
      var tagCls = ["truncate h-4.5", {
        "ml-3": hasLogo
      }];
      if (logoFieldConfig.render) {
        var params = {
          h,
          row: row2,
          field: logoField,
          config: logoFieldConfig,
          value: row2[logoField]
        };
        logoVnode = logoFieldConfig.render(params);
      } else {
        logoVnode = h("img", {
          class: "w-full h-full",
          attrs: {
            src: row2[logoField] || ""
          }
        });
      }
      primaryVnode = h("div", {
        class: gridCls
      }, [hasLogo ? h("div", {
        class: logoCls
      }, [logoVnode]) : null, h("div", {
        class: "truncate space-y-1 relative -top-0.5"
      }, [h("div", {
        class: primCls,
        on: ons()
      }, [primaryColumn.renderCell(h, genParams2(primaryColumn, row2))]), hasTag ? h("div", {
        class: tagCls
      }, tagVnodes) : null])]);
    } else {
      var cls = ["w-full text-base sm:text-sm text-color-text-primary font-medium leading-5", "overflow-hidden text-ellipsis whitespace-normal line-clamp-2 sm:line-clamp-1"];
      primaryVnode = h("div", {
        class: cls,
        on: ons()
      }, [primaryColumn.renderCell(h, genParams2(primaryColumn, row2))]);
    }
    contentVnodes = contentColumns.map(function(contentColumn) {
      var params2 = genParams2(contentColumn, row2);
      var cls2 = ["w-full text-sm sm:text-xs text-color-fill-9 font-normal sm:font-normal leading-5 sm:leading-5", "overflow-hidden text-ellipsis whitespace-normal "];
      var cellNode = CellDefault.renderCell(h, params2);
      var cellIsVnode = false;
      if (Array.isArray(cellNode)) {
        cellIsVnode = isVnode(cellNode[0]);
      }
      var VnodeCls = cellIsVnode ? "inline-block flex-grow [&_span]:leading-5 [&_div[data-tag=tiny-input]]:leading-5 ml-1" : "text-color-text-primary";
      var divCls = cellIsVnode ? "flex" : "line-clamp-2 sm:line-clamp-1";
      return h("div", {
        class: cls2 + divCls,
        on: ons()
      }, [
        // 这里需要兼容AUI与TinyVue表头实现方式的差异，此处勿同步
        h("span", {
          class: "shrink-0"
        }, [CellDefault.renderHeader(h, params2, "card")]),
        h("span", {}, cardConfig.split || ": "),
        h("span", {
          class: VnodeCls
        }, [cellNode])
      ]);
    });
    return h("div", props2, [primaryVnode].concat(contentVnodes));
  },
  methods: {
    handleMouseenter: function handleMouseenter2(e) {
      var $mftable = this.$mftable;
      $mftable.showTooltip(e);
    },
    handleMouseleave: function handleMouseleave2() {
      var $mftable = this.$mftable;
      $mftable.hideTooltip();
    }
  }
});
var _sfc_main$5 = defineComponent({
  props: _extends({}, $props, {
    datas: Object,
    row: Object
  }),
  render: function render11() {
    var datas = this.datas, row2 = this.row;
    var slotLink = datas.slotLink, operationColumn = datas.operationColumn, hasOperation = datas.hasOperation, genParams2 = datas.genParams;
    var params = genParams2(operationColumn, row2);
    var vnode;
    if (hasOperation) {
      var _operationColumn$oper = operationColumn.operationConfig, operationConfig = _operationColumn$oper === void 0 ? {} : _operationColumn$oper;
      var _operationConfig$butt2 = operationConfig.buttons, buttons = _operationConfig$butt2 === void 0 ? [] : _operationConfig$butt2, _operationConfig$disa2 = operationConfig.disabledClass, disabledClass = _operationConfig$disa2 === void 0 ? "" : _operationConfig$disa2;
      var visibleButtons = [];
      var isDisabled = function isDisabled2(buttonConfig) {
        var _buttonConfig$disable2 = buttonConfig.disabled, disabled = _buttonConfig$disable2 === void 0 ? false : _buttonConfig$disable2;
        return typeof disabled === "boolean" && disabled || typeof disabled === "function" && disabled(row2);
      };
      var isHidden = function isHidden2(buttonConfig) {
        var _buttonConfig$hidden2 = buttonConfig.hidden, hidden = _buttonConfig$hidden2 === void 0 ? false : _buttonConfig$hidden2;
        return typeof hidden === "boolean" && hidden || typeof hidden === "function" && hidden(row2);
      };
      var handleItemClick = function handleItemClick2(name) {
        var buttonConfig = visibleButtons.find(function(_ref189) {
          var buttonName = _ref189.name;
          return buttonName === name;
        });
        buttonConfig.click(window.event || {}, _extends({
          buttonConfig
        }, params));
      };
      buttons.forEach(function(buttonConfig) {
        return !isHidden(buttonConfig) && visibleButtons.push(buttonConfig);
      });
      vnode = visibleButtons.length === 1 ? h("div", {
        "class": "w-5 h-5 sm:w-4 sm:w-4 " + (isDisabled(visibleButtons[0]) ? "fill-color-icon-disabled" : "fill-color-icon-secondary") + " "
      }, [h(visibleButtons[0].icon, {
        on: {
          click: function click(event) {
            if (!isDisabled(visibleButtons[0])) {
              handleItemClick(visibleButtons[0].name);
            }
            event.stopPropagation();
          }
        },
        "attrs": {
          "custom-class": "w-5 h-5 sm:w-4 sm:w-4"
        }
      })]) : h(Dropdown, {
        on: {
          "item-click": handleItemClick
        },
        props: {
          trigger: "hover",
          showSelfIcon: true,
          tiny_mode: "mobile-first",
          tiny_mode_root: true
        }
      }, [h(index$z(), {
        class: "mf-table-more outline-none text-base cursor-pointer"
      }), h(DropdownMenu, {
        slot: "dropdown"
      }, visibleButtons.map(function(buttonConfig) {
        var _class3;
        return h(DropdownItem, {
          class: (_class3 = {}, _class3[disabledClass || ""] = isDisabled(buttonConfig), _class3),
          props: {
            itemData: buttonConfig.name,
            disabled: isDisabled(buttonConfig)
          }
        }, buttonConfig.name);
      }))]);
    } else {
      vnode = slotLink({
        row: row2,
        h
      });
    }
    return h("div", {
      attrs: {
        "data-tag": "tiny-table-column-link"
      },
      class: "flex flex-col items-end mt-px sm:mt-0"
    }, [vnode]);
  }
});
var _sfc_main$4 = defineComponent({
  props: _extends({}, $props, {
    datas: Object,
    row: Object
  }),
  components: {
    ColumnType: _sfc_main$7,
    ColumnContent: _sfc_main$6,
    ColumnLink: _sfc_main$5
  },
  computed: {
    showLink: function showLink() {
      var datas = this.datas;
      return datas.hasLink || datas.hasOperation;
    }
  }
});
function _sfc_render$2(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_column_type = resolveComponent("column-type");
  var _component_column_content = resolveComponent("column-content");
  var _component_column_link = resolveComponent("column-link");
  return openBlock(), createElementBlock(
    "div",
    {
      ref: "layout",
      "data-tag": "tiny-table-column-layout",
      class: normalizeClass(["grid", [_ctx.datas.hasType && _ctx.showLink ? "grid-cols-[theme(spacing.7)_auto_theme(spacing.7)]" : "", _ctx.datas.hasType && !_ctx.showLink ? "grid-cols-[theme(spacing.7)_auto]" : "", !_ctx.datas.hasType && _ctx.showLink ? "grid-cols-[auto_theme(spacing.7)]" : "", !_ctx.datas.hasType && !_ctx.showLink ? "grid-cols-[auto]" : ""]])
    },
    [_ctx.datas.hasType ? (openBlock(), createBlock(_component_column_type, {
      key: 0,
      ref: "type",
      datas: _ctx.datas,
      row: _ctx.row
    }, null, 8, ["datas", "row"])) : createCommentVNode("v-if", true), createVNode(_component_column_content, {
      datas: _ctx.datas,
      row: _ctx.row
    }, null, 8, ["datas", "row"]), _ctx.showLink ? (openBlock(), createBlock(_component_column_link, {
      key: 1,
      ref: "link",
      datas: _ctx.datas,
      row: _ctx.row
    }, null, 8, ["datas", "row"])) : createCommentVNode("v-if", true)],
    2
    /* CLASS */
  );
}
var ColumnLayout = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2]]);
var _sfc_main$3 = defineComponent({
  components: {
    ColumnLayout
  },
  props: _extends({}, $props, {
    datas: Object,
    currentRowId: String
  }),
  emits: ["card-click"],
  data: function data3() {
    return {
      mergeClass
    };
  },
  computed: {
    row: function row() {
      var datas = this.datas;
      return datas.row;
    },
    rowid: function rowid() {
      var datas = this.datas;
      var config2 = datas.config, row2 = datas.row;
      var tableVm = config2.tableVm;
      return getRowid(tableVm, row2);
    },
    isCardType: function isCardType() {
      var _config$tableVm;
      var datas = this.datas;
      var config2 = datas.config;
      var _config$tableVm$$grid = config2 == null ? void 0 : (_config$tableVm = config2.tableVm) == null ? void 0 : _config$tableVm.$grid, viewType2 = _config$tableVm$$grid.viewType;
      return viewType2 === "card";
    }
  },
  methods: {
    handleClick: function handleClick2(e) {
      if (!getEventTargetNode(e, this.$el, "tiny-grid-checkbox").flag && !getEventTargetNode(e, this.$el, "mf-table-more").flag) {
        this.$emit("card-click", this.row, e);
      }
    }
  }
});
var _hoisted_1 = ["data-rowid"];
function _sfc_render$1(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_column_layout = resolveComponent("column-layout");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.mergeClass(_ctx.datas.rowClass, _ctx.currentRowId === _ctx.rowid && _ctx.isCardType ? "border sm:border-2 sm:border-color-brand" : "")),
    "data-tag": "tiny-table-row",
    "data-rowid": _ctx.rowid,
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.handleClick && _ctx.handleClick.apply(_ctx, arguments);
    })
  }, [createVNode(_component_column_layout, {
    datas: _ctx.datas,
    row: _ctx.row
  }, null, 8, ["datas", "row"])], 10, _hoisted_1);
}
var TableRow = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
var _sfc_main$2 = defineComponent({
  inject: ["$mftable"],
  props: _extends({}, $props),
  render: function render12() {
    var $mftable = this.$mftable;
    var params = {
      $table: $mftable.config.tableVm,
      $mftable,
      config: $mftable.listConfig,
      rows: $mftable.tableData,
      columns: $mftable.config.tableVm.tableColumn,
      h
    };
    return typeof $mftable.slotList === "function" ? $mftable.slotList(params) : null;
  }
});
var _sfc_main$1 = defineComponent({
  inject: ["$mftable"],
  props: _extends({}, $props),
  render: function render13() {
    var $mftable = this.$mftable;
    var params = {
      $table: $mftable.config.tableVm,
      $mftable,
      config: $mftable.ganttConfig,
      rows: $mftable.tableData,
      columns: $mftable.config.tableVm.tableColumn,
      h
    };
    return typeof $mftable.slotGantt === "function" ? $mftable.slotGantt(params) : null;
  }
});
var _sfc_main = defineComponent({
  components: {
    TableRow,
    Tooltip: Tooltip$1,
    Exception,
    ListView: _sfc_main$2,
    GanttView: _sfc_main$1
  },
  provide: function provide2() {
    return {
      $mftable: this
    };
  },
  props: _extends({}, $props, {
    tableData: Array,
    cardConfig: Object,
    listConfig: Object,
    ganttConfig: Object
  }),
  data: function data4() {
    return {
      primaryColumn: null,
      contentColumns: null,
      operationColumn: null,
      selectionColumn: null,
      slotLink: null,
      rowKey: 0,
      wrapperHeight: 0,
      tooltipVisible: false,
      tooltipContent: "",
      currentRow: null,
      currentRowId: ""
    };
  },
  computed: {
    config: function config() {
      var vm = this.$parent, cardConfig = this.cardConfig, listConfig = this.listConfig;
      return {
        tableVm: markRaw(vm),
        cardConfig,
        listConfig
      };
    },
    cardView: function cardView() {
      var _config$tableVm2;
      var config2 = this.config;
      var _config$tableVm$$grid2 = config2 == null ? void 0 : (_config$tableVm2 = config2.tableVm) == null ? void 0 : _config$tableVm2.$grid, viewType2 = _config$tableVm$$grid2.viewType, mfShow = _config$tableVm$$grid2.mfShow;
      var _GlobalConfig$1$viewC = GlobalConfig$1.viewConfig, CARD = _GlobalConfig$1$viewC.CARD, MF = _GlobalConfig$1$viewC.MF, MF_SHOW_CARD = _GlobalConfig$1$viewC.MF_SHOW_CARD;
      return viewType2 === CARD || viewType2 === MF && mfShow === MF_SHOW_CARD;
    },
    listView: function listView() {
      var _config$tableVm3;
      var config2 = this.config;
      var _config$tableVm$$grid3 = config2 == null ? void 0 : (_config$tableVm3 = config2.tableVm) == null ? void 0 : _config$tableVm3.$grid, viewType2 = _config$tableVm$$grid3.viewType;
      var LIST = GlobalConfig$1.viewConfig.LIST;
      return viewType2 === LIST;
    },
    ganttView: function ganttView() {
      var _config$tableVm4;
      var config2 = this.config;
      var _config$tableVm$$grid4 = config2 == null ? void 0 : (_config$tableVm4 = config2.tableVm) == null ? void 0 : _config$tableVm4.$grid, viewType2 = _config$tableVm$$grid4.viewType;
      var GANTT = GlobalConfig$1.viewConfig.GANTT;
      return viewType2 === GANTT;
    },
    wrapperClass: function wrapperClass() {
      var _config$tableVm5;
      var config2 = this.config;
      return mergeClass("w-full h-full overflow-y-auto", config2 == null ? void 0 : (_config$tableVm5 = config2.tableVm) == null ? void 0 : _config$tableVm5.viewCls("mfTable"), this.exceptionVisible ? "sm:border sm:border-solid sm:border-color-border-separator rounded-sm" : "");
    },
    tableClass: function tableClass() {
      var cardView2 = this.cardView;
      var tableCls = "w-full px-3.5 sm:px-0";
      return cardView2 ? mergeClass(tableCls, "grid gap-3") : tableCls;
    },
    cardClass: function cardClass() {
      var listView2 = this.listView, ganttView2 = this.ganttView, cardConfig = this.cardConfig;
      var smallCls = "grid-cols-[repeat(auto-fill,minmax(theme(spacing.64),1fr))]";
      var defaultCls = "grid-cols-[repeat(auto-fill,minmax(theme(spacing.80),1fr))]";
      return listView2 || ganttView2 ? "" : (cardConfig == null ? void 0 : cardConfig.cardSize) === "small" ? smallCls : defaultCls;
    },
    rowClass: function rowClass() {
      var cardView2 = this.cardView, cardConfig = this.cardConfig;
      var rowCls = "border-b-0.5 sm:border-b border-solid border-color-border-separator last:border-color-bg-1 py-3";
      if (cardView2) {
        rowCls = "border-0 sm:border border-solid border-color-border-separator p-3 rounded hover:shadow-lg bg-color-bg-1";
        rowCls += (cardConfig == null ? void 0 : cardConfig.cardSize) === "small" ? " min-w-[theme(spacing.64)]" : " min-w-[theme(spacing.80)]";
      }
      return rowCls;
    },
    wrapperStyle: function wrapperStyle() {
      var _config$tableVm6, _config$tableVm6$$gri;
      var config2 = this.config, wrapperHeight = this.wrapperHeight;
      var defaultView = (config2 == null ? void 0 : (_config$tableVm6 = config2.tableVm) == null ? void 0 : (_config$tableVm6$$gri = _config$tableVm6.$grid) == null ? void 0 : _config$tableVm6$$gri.viewType) === GlobalConfig$1.viewConfig.DEFAULT;
      var displayStyle = defaultView ? "display:none;" : "";
      var heightStyle = wrapperHeight ? "height:" + wrapperHeight + "px;" : "";
      return "" + displayStyle + heightStyle;
    },
    exceptionVisible: function exceptionVisible() {
      var _config$tableVm7;
      var config2 = this.config, tableData = this.tableData;
      var _config$tableVm$$grid5 = config2 == null ? void 0 : (_config$tableVm7 = config2.tableVm) == null ? void 0 : _config$tableVm7.$grid, viewType2 = _config$tableVm$$grid5.viewType;
      var _GlobalConfig$1$viewC2 = GlobalConfig$1.viewConfig, CARD = _GlobalConfig$1$viewC2.CARD, LIST = _GlobalConfig$1$viewC2.LIST, MF = _GlobalConfig$1$viewC2.MF;
      var isException = tableData.length === 0;
      return isException && (viewType2 === CARD || viewType2 === LIST || viewType2 === MF);
    }
  },
  watch: {
    "config.tableVm.tableColumn": {
      handler: function handler() {
        this.mapColumns();
      },
      immediate: true
    },
    "config.tableVm.viewType": {
      handler: function handler2() {
        this.rowKey++;
      },
      immediate: true
    },
    "config.tableVm.height": {
      handler: function handler3() {
        this.getWrapperHeight();
      },
      immediate: true
    },
    "config.tableVm.parentHeight": {
      handler: function handler4() {
        this.getWrapperHeight();
      },
      immediate: true
    },
    "config.tableVm.currentRow": {
      handler: function handler5(value) {
        this.currentRow = value;
        this.setCurrentRowId();
      },
      immediate: true
    }
  },
  mounted: function mounted4() {
    this.$nextTick(this.getWrapperHeight);
  },
  methods: {
    mapColumns: function mapColumns() {
      var _config$tableVm8, _config$tableVm9, _config$tableVm9$$gri, _config$tableVm9$$gri2, _config$tableVm10, _config$tableVm10$$gr, _config$tableVm10$$gr2, _config$tableVm11, _config$tableVm11$$gr, _config$tableVm11$$gr2;
      var config2 = this.config, typeColumns2 = this.typeColumns, firstFewPropertyColumn2 = this.firstFewPropertyColumn;
      var _this$cardConfig = this.cardConfig, cardConfig = _this$cardConfig === void 0 ? {} : _this$cardConfig, _this$listConfig = this.listConfig, listConfig = _this$listConfig === void 0 ? {} : _this$listConfig, _this$ganttConfig = this.ganttConfig, ganttConfig = _this$ganttConfig === void 0 ? {} : _this$ganttConfig;
      var tableColumn3 = config2 == null ? void 0 : (_config$tableVm8 = config2.tableVm) == null ? void 0 : _config$tableVm8.tableColumn;
      var primaryField = cardConfig.primaryField, contentFields = cardConfig.contentFields, selectable = cardConfig.selectable, renderLink = cardConfig.renderLink, operable = cardConfig.operable, _cardConfig$few = cardConfig.few, few = _cardConfig$few === void 0 ? 4 : _cardConfig$few;
      var renderList2 = listConfig.renderList;
      var renderGantt = ganttConfig.renderGantt;
      var fieldName = "";
      var fieldNames = [];
      var propCols = firstFewPropertyColumn2(tableColumn3, few);
      var primaryColumn;
      var contentColumns;
      var operationColumn;
      var selectionColumn;
      var slotLink;
      var slotList;
      var slotGantt;
      if (primaryField) {
        fieldName = fnField(primaryField);
        primaryColumn = typeColumns2(tableColumn3, [fieldName]).find(function(column) {
          return column.property === fieldName;
        });
      } else {
        primaryColumn = propCols && propCols.length > 0 ? propCols[0] : void 0;
      }
      if (contentFields && contentFields.length) {
        fieldNames = fnFields(contentFields);
        contentColumns = typeColumns2(tableColumn3, fieldNames);
      } else {
        contentColumns = propCols && propCols.length > 1 ? propCols.slice(1) : [];
      }
      if (typeof operable === "undefined" || operable) {
        operationColumn = typeColumns2(tableColumn3, ["operation"], "type").find(function(column) {
          return column.type === "operation";
        });
      }
      if (typeof selectable === "undefined" || selectable) {
        selectionColumn = typeColumns2(tableColumn3, ["selection"], "type").find(function(column) {
          return column.type === "selection";
        });
      }
      slotLink = (config2 == null ? void 0 : (_config$tableVm9 = config2.tableVm) == null ? void 0 : (_config$tableVm9$$gri = _config$tableVm9.$grid) == null ? void 0 : (_config$tableVm9$$gri2 = _config$tableVm9$$gri.slots) == null ? void 0 : _config$tableVm9$$gri2.link) || renderLink;
      slotList = (config2 == null ? void 0 : (_config$tableVm10 = config2.tableVm) == null ? void 0 : (_config$tableVm10$$gr = _config$tableVm10.$grid) == null ? void 0 : (_config$tableVm10$$gr2 = _config$tableVm10$$gr.slots) == null ? void 0 : _config$tableVm10$$gr2.list) || renderList2;
      slotGantt = (config2 == null ? void 0 : (_config$tableVm11 = config2.tableVm) == null ? void 0 : (_config$tableVm11$$gr = _config$tableVm11.$grid) == null ? void 0 : (_config$tableVm11$$gr2 = _config$tableVm11$$gr.slots) == null ? void 0 : _config$tableVm11$$gr2.gantt) || renderGantt;
      Object.assign(this, {
        primaryColumn,
        contentColumns,
        operationColumn,
        selectionColumn
      });
      Object.assign(this, {
        slotLink,
        slotList,
        slotGantt
      });
    },
    typeColumns: function typeColumns(columns2, types, field) {
      var cols = types.map(function(type) {
        return columns2.find(function(column) {
          return column.visible && column[field || "property"] === type;
        });
      });
      var res = [];
      cols.forEach(function(col) {
        return col && res.push(col);
      });
      return res;
    },
    firstFewPropertyColumn: function firstFewPropertyColumn(columns2, few) {
      return columns2.filter(function(column) {
        return column.visible && !column.type && column.property;
      }).slice(0, few);
    },
    genParams: function genParams(column, row2) {
      var config2 = this.config, tableData = this.tableData;
      var $table = config2.tableVm;
      var tableColumn3 = $table.tableColumn;
      var $columnIndex = tableColumn3.indexOf(column);
      var columnIndex = $table.getColumnIndex(column);
      var p = {
        column,
        $table,
        $columnIndex,
        columnIndex,
        data: tableData
      };
      if (row2) {
        var $rowIndex = tableData.indexOf(row2);
        var rowIndex = $table.getRowIndex(row2);
        var seq = $rowIndex + 1;
        Object.assign(p, {
          row: row2,
          $rowIndex,
          rowIndex,
          $seq: "",
          seq
        });
      }
      return p;
    },
    emitEvent: function emitEvent$1$1(type, args) {
      var config2 = this.config;
      emitEvent$1(config2 == null ? void 0 : config2.tableVm, type, args);
    },
    handleCardClick: function handleCardClick(row2, e) {
      var config2 = this.config, emitEvent2 = this.emitEvent;
      var _config$tableVm12 = config2 == null ? void 0 : config2.tableVm, highlightCurrentRow = _config$tableVm12.highlightCurrentRow;
      if (highlightCurrentRow) {
        var _config$tableVm13;
        this.currentRow = row2;
        this.setCurrentRowId();
        config2 == null ? void 0 : (_config$tableVm13 = config2.tableVm) == null ? void 0 : _config$tableVm13.triggerCurrentRowEvent(e, {
          $table: config2 == null ? void 0 : config2.tableVm,
          row: row2
        });
      }
      emitEvent2.call(this, "card-click", [row2, e]);
    },
    cfg: function cfg(row2) {
      var config2 = this.config, cardView2 = this.cardView, selectionColumn = this.selectionColumn, slotLink = this.slotLink, primaryColumn = this.primaryColumn;
      var operationColumn = this.operationColumn, contentColumns = this.contentColumns, genParams2 = this.genParams, rowClass2 = this.rowClass;
      var hasType = !!selectionColumn;
      var hasLink = !!slotLink;
      var hasOperation = !!operationColumn;
      var res = {
        row: row2,
        config: config2,
        cardView: cardView2,
        selectionColumn,
        slotLink,
        primaryColumn,
        operationColumn,
        contentColumns,
        genParams: genParams2,
        hasType,
        hasOperation,
        hasLink,
        rowClass: rowClass2
      };
      return res;
    },
    getWrapperHeight: function getWrapperHeight() {
      var _config$tableVm14, _config$tableVm15;
      var config2 = this.config;
      var $grid = config2 == null ? void 0 : (_config$tableVm14 = config2.tableVm) == null ? void 0 : _config$tableVm14.$grid;
      var height2 = ($grid == null ? void 0 : $grid.height) === "auto" ? "100%" : $grid == null ? void 0 : $grid.height;
      var parentHeight2 = config2 == null ? void 0 : (_config$tableVm15 = config2.tableVm) == null ? void 0 : _config$tableVm15.parentHeight;
      this.wrapperHeight = isScale(height2) ? Math.floor(parseInt(height2) / 100 * parentHeight2) : toNumber_default(height2);
    },
    showTooltip: function showTooltip(e) {
      var $refs = this.$refs, _this$cardConfig2 = this.cardConfig, cardConfig = _this$cardConfig2 === void 0 ? {} : _this$cardConfig2;
      var showTip = cardConfig.showTip;
      if (!showTip)
        return;
      var tooltip = $refs.tooltip;
      var dom = e.target;
      var text = dom.textContent;
      var rect = dom.getBoundingClientRect();
      var range = document.createRange();
      range.setStart(dom, 0);
      range.setEnd(dom, dom.childNodes.length);
      var rangeRect = range.getBoundingClientRect();
      if (rangeRect.x + rangeRect.width < rect.x || rangeRect.x + rangeRect.width > rect.x + rect.width || rangeRect.y + rangeRect.height < rect.y || rangeRect.y + rangeRect.height > rect.y + rect.height) {
        tooltip.state.referenceElm = dom;
        tooltip.state.popperElm && (tooltip.state.popperElm.style.display = "none");
        tooltip.doDestroy();
        this.tooltipContent = text;
        this.tooltipVisible = true;
        setTimeout(tooltip.updatePopper, 20);
      }
    },
    hideTooltip: function hideTooltip() {
      this.tooltipVisible = false;
      this.tooltipContent = "";
    },
    setCurrentRowId: function setCurrentRowId() {
      var config2 = this.config, currentRow = this.currentRow;
      if (currentRow) {
        this.currentRowId = getRowid(config2.tableVm, currentRow);
      }
    }
  }
});
function _sfc_render(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_exception = resolveComponent("exception");
  var _component_list_view = resolveComponent("list-view");
  var _component_gantt_view = resolveComponent("gantt-view");
  var _component_table_row = resolveComponent("table-row");
  var _component_tooltip = resolveComponent("tooltip");
  return openBlock(), createElementBlock(
    "div",
    {
      "data-tag": "tiny-table-wrapper",
      class: normalizeClass(["scrollbar-size-0", _ctx.wrapperClass]),
      style: normalizeStyle(_ctx.wrapperStyle)
    },
    [_ctx.exceptionVisible ? (openBlock(), createBlock(_component_exception, {
      key: 0,
      tiny_mode: "mobile-first",
      tiny_mode_root: "",
      class: "min-h-[theme(spacing.72)]",
      "component-page": "",
      type: "nodata"
    })) : createCommentVNode("v-if", true), createBaseVNode(
      "div",
      {
        "data-tag": "tiny-table",
        class: normalizeClass([_ctx.tableClass, _ctx.cardClass]),
        ref: "table"
      },
      [_ctx.listView ? (openBlock(), createBlock(_component_list_view, {
        key: 0
      })) : _ctx.ganttView ? (openBlock(), createBlock(_component_gantt_view, {
        key: 1
      })) : (openBlock(true), createElementBlock(
        Fragment,
        {
          key: 2
        },
        renderList(_ctx.tableData, function(row2, i) {
          return openBlock(), createBlock(_component_table_row, {
            key: "" + _ctx.rowKey + i,
            datas: _ctx.cfg(row2),
            "current-row-id": _ctx.currentRowId,
            onCardClick: _ctx.handleCardClick
          }, null, 8, ["datas", "current-row-id", "onCardClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), createVNode(_component_tooltip, {
      ref: "tooltip",
      modelValue: _ctx.tooltipVisible,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
        return _ctx.tooltipVisible = $event;
      }),
      content: _ctx.tooltipContent,
      manual: ""
    }, null, 8, ["modelValue", "content"])],
    6
    /* CLASS, STYLE */
  );
}
var MfTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var themes$1 = GlobalConfig$1.themes, viewConfig$1 = GlobalConfig$1.viewConfig;
var T_TINY = themes$1.TINY, T_SAAS$1 = themes$1.SAAS;
var V_DEFAULT = viewConfig$1.DEFAULT, V_MF$1 = viewConfig$1.MF, V_CARD$1 = viewConfig$1.CARD, V_LIST = viewConfig$1.LIST;
var V_MF_LIST = viewConfig$1.MF_SHOW_LIST;
function verifyConfig(_vm) {
  if (!getRowkey(_vm)) {
    error("ui.grid.error.rowIdEmpty");
  }
  if (!GridAdapter._edit && _vm.editConfig) {
    throw new Error(template_default(error("ui.grid.error.reqModule"), {
      name: "Edit"
    }));
  }
  if (!GridAdapter._valid && _vm.editRules) {
    throw new Error(template_default(error("ui.grid.error.reqModule"), {
      name: "Validator"
    }));
  }
  if (!GridAdapter._keyboard && (_vm.keyboardConfig || _vm.mouseConfig)) {
    throw new Error(template_default(error("ui.grid.error.reqModule"), {
      name: "Keyboard"
    }));
  }
  if (!GridAdapter._resize && _vm.autoResize) {
    throw new Error(template_default(error("ui.grid.error.reqModule"), {
      name: "Resize"
    }));
  }
}
function mergeScrollDirStore(scrollDir, scrollDirStore) {
  if (scrollDir) {
    Object.assign(scrollDirStore, {
      startIndex: 0,
      visibleIndex: 0,
      adaptive: isBoolean_default(scrollDir.adaptive) ? scrollDir.adaptive : true,
      renderSize: toNumber_default(scrollDir.rSize),
      offsetSize: toNumber_default(scrollDir.oSize)
    });
  }
}
function loadStatic(data8, _vm) {
  if (data8 && data8.length > 0) {
    _vm.loadTableData(data8, true).then(function() {
      _vm.handleDefault();
      _vm.updateStyle();
    });
  }
}
function mergeTreeConfig(_vm) {
  if (_vm.treeConfig) {
    var ordered = _vm.treeConfig.ordered;
    if (isNull$1(ordered)) {
      _vm.treeConfig.ordered = true;
    }
  }
}
function initDrop(_vm) {
  var dropConfig = _vm.dropConfig;
  if (dropConfig) {
    var plugin = dropConfig.plugin, _dropConfig$column = dropConfig.column, column = _dropConfig$column === void 0 ? true : _dropConfig$column, _dropConfig$row = dropConfig.row, row2 = _dropConfig$row === void 0 ? true : _dropConfig$row;
    if (plugin) {
      column && _vm.columnDrop();
      row2 && _vm.rowDrop();
    }
  }
}
var renderEmptyPartFn = function renderEmptyPartFn2(opt) {
  var _vm = opt._vm, tableData = opt.tableData, $slots = opt.$slots, renderEmpty = opt.renderEmpty;
  return function() {
    var emptyPartVnode = null;
    var computerTableBodyHeight2 = _vm.computerTableBodyHeight;
    if (_vm.isCenterEmpty && !tableData.length) {
      var emptyVnodes;
      var noEmptyClass = _vm.viewType === V_CARD$1 || _vm.viewType === V_LIST;
      if ($slots.empty) {
        emptyVnodes = $slots.empty.call(_vm, h);
      } else if (renderEmpty) {
        emptyVnodes = [renderEmpty(h, _vm)];
      } else {
        emptyVnodes = [h("p", {
          class: "tiny-grid__empty-img"
        }), h("span", {
          class: "tiny-grid__empty-text"
        }, GlobalConfig$1.i18n("ui.grid.emptyText"))];
      }
      emptyPartVnode = h("div", {
        class: [{
          "empty-center-block": !noEmptyClass
        }, _vm.viewCls("emptyData")],
        style: {
          height: computerTableBodyHeight2
        }
      }, emptyVnodes);
    }
    return emptyPartVnode;
  };
};
var renderFooterFn = function renderFooterFn2(opt) {
  var _vm = opt._vm, showFooter = opt.showFooter, footerData = opt.footerData, footerMethod = opt.footerMethod, tableColumn3 = opt.tableColumn, visibleColumn = opt.visibleColumn, vSize5 = opt.vSize;
  return function() {
    var tableFooterVnode = [null];
    if (showFooter) {
      tableFooterVnode = h(Footer, {
        props: {
          footerData,
          footerMethod,
          tableColumn: tableColumn3,
          visibleColumn,
          size: vSize5
        },
        ref: "tableFooter",
        class: _vm.viewCls("tableFooter")
      });
    }
    return tableFooterVnode;
  };
};
var renderResizeBarFn = function renderResizeBarFn2(opt) {
  var _vm = opt._vm, isResizable2 = opt.isResizable, overflowX = opt.overflowX, scrollbarHeight = opt.scrollbarHeight;
  return function() {
    var resizeBarVnode = [null];
    if (isResizable2) {
      resizeBarVnode = h("div", {
        class: ["tiny-grid__resizable-bar", _vm.viewCls("resizeBar")],
        style: overflowX ? {
          "padding-bottom": scrollbarHeight + "px"
        } : null,
        ref: "resizeBar",
        key: "tinyGridResizeBar"
      });
    }
    return resizeBarVnode;
  };
};
var renderPluginWrapperFn = function renderPluginWrapperFn2(opt) {
  var hasFilter2 = opt.hasFilter, optimizeOpts2 = opt.optimizeOpts, filterStore = opt.filterStore, isCtxMenu2 = opt.isCtxMenu, ctxMenuStore = opt.ctxMenuStore, hasTip2 = opt.hasTip, tooltipContentOpts2 = opt.tooltipContentOpts;
  var editRules = opt.editRules, validOpts2 = opt.validOpts, height2 = opt.height, tableData = opt.tableData, vaildTipOpts2 = opt.vaildTipOpts, id3 = opt.id, _vm = opt._vm;
  return function() {
    var filterVnode = [null];
    var ctxMenuVnode = [null];
    var tooltipVnode = [null];
    var errorTooltipVnode = [null];
    var isMessageDefault = validOpts2.isMessageDefault, isMessageTooltip = validOpts2.isMessageTooltip;
    if (hasFilter2) {
      filterVnode = h(Panel$1, {
        props: {
          optimizeOpts: optimizeOpts2,
          filterStore
        },
        ref: "filterWrapper"
      });
    }
    if (isCtxMenu2) {
      ctxMenuVnode = h(Panel, {
        props: {
          ctxMenuStore
        },
        ref: "ctxWrapper"
      });
    }
    if (hasTip2) {
      tooltipVnode = h(Tooltip$1, {
        ref: "tooltip",
        props: tooltipContentOpts2
      });
    }
    if (hasTip2 && editRules && (isMessageDefault ? !height2 : isMessageTooltip)) {
      errorTooltipVnode = h(Tooltip$1, {
        class: "tiny-grid__valid-error",
        props: isMessageTooltip || tableData.length === 1 ? vaildTipOpts2 : null,
        ref: "validTip"
      });
    }
    return h("div", {
      class: "tiny-grid" + id3 + "-wrapper " + (_vm.$attrs.staticClass || ""),
      ref: "tableWrapper"
    }, [
      // 筛选
      filterVnode,
      // 快捷菜单
      ctxMenuVnode,
      // Ellipsis tooltip
      tooltipVnode,
      // valid error tooltip
      errorTooltipVnode
    ]);
  };
};
var renderSelectToolbarFn = function renderSelectToolbarFn2(opt) {
  var selectToolbar = opt.selectToolbar, selectToolbarStore = opt.selectToolbarStore, renderedToolbar = opt.renderedToolbar;
  return function() {
    var selectToolbarVnode = [null];
    if (selectToolbar) {
      selectToolbarVnode = h("div", {
        ref: "selectToolbar",
        class: "tiny-grid__select-toolbar",
        style: [selectToolbarStore.layout, {
          visibility: selectToolbarStore.visible ? "visible" : "hidden"
        }]
      }, renderedToolbar || [null]);
    }
    return selectToolbarVnode;
  };
};
function getRenderer(opt) {
  var $slots = opt.$slots, _vm = opt._vm, optimizeOpts2 = opt.optimizeOpts, overflowX = opt.overflowX, props2 = opt.props, showFooter = opt.showFooter, showHeader = opt.showHeader, tableColumn3 = opt.tableColumn, tableData = opt.tableData, vSize5 = opt.vSize, visibleColumn = opt.visibleColumn;
  var $grid = _vm.$grid, ctxMenuStore = _vm.ctxMenuStore, editRules = _vm.editRules, filterStore = _vm.filterStore, footerData = _vm.footerData, footerMethod = _vm.footerMethod, hasFilter2 = _vm.hasFilter, hasTip2 = _vm.hasTip, height2 = _vm.height, id3 = _vm.id;
  var isCtxMenu2 = _vm.isCtxMenu, isResizable2 = _vm.isResizable, renderEmpty = _vm.renderEmpty, scrollbarHeight = _vm.scrollbarHeight, selectToolbarStore = _vm.selectToolbarStore, tooltipContentOpts2 = _vm.tooltipContentOpts, vaildTipOpts2 = _vm.vaildTipOpts, validOpts2 = _vm.validOpts;
  var selectToolbar = $grid.selectToolbar, renderedToolbar = $grid.renderedToolbar;
  var renderHeader2 = function renderHeader3() {
    return showHeader ? h(Header, {
      ref: "tableHeader",
      props: props2,
      class: _vm.viewCls("tableHeader")
    }) : [null];
  };
  var renderEmptyPart = renderEmptyPartFn({
    _vm,
    tableData,
    $slots,
    renderEmpty
  });
  var renderFooter = renderFooterFn({
    _vm,
    showFooter,
    footerData,
    footerMethod,
    tableColumn: tableColumn3,
    visibleColumn,
    vSize: vSize5
  });
  var renderResizeBar = renderResizeBarFn({
    _vm,
    isResizable: isResizable2,
    overflowX,
    scrollbarHeight
  });
  var arg1 = {
    hasFilter: hasFilter2,
    optimizeOpts: optimizeOpts2,
    filterStore,
    isCtxMenu: isCtxMenu2,
    ctxMenuStore,
    hasTip: hasTip2,
    tooltipContentOpts: tooltipContentOpts2
  };
  var arg2 = {
    editRules,
    validOpts: validOpts2,
    height: height2,
    tableData,
    vaildTipOpts: vaildTipOpts2,
    id: id3,
    _vm
  };
  var renderPluginWrapper = renderPluginWrapperFn(Object.assign(arg1, arg2));
  var renderSelectToolbar = renderSelectToolbarFn({
    selectToolbar,
    selectToolbarStore,
    renderedToolbar
  });
  return {
    renderHeader: renderHeader2,
    renderEmptyPart,
    renderFooter,
    renderResizeBar,
    renderPluginWrapper,
    renderSelectToolbar
  };
}
var renderFooterBorder = function renderFooterBorder2(_vm) {
  var showFooterBorder = _vm.showFooterBorder, footerBorderBottom = _vm.footerBorderBottom;
  var cls = ["tiny-grid__footer-border-line", _vm.viewCls("footerBorder")];
  var style = "bottom:" + footerBorderBottom + "px;";
  return showFooterBorder ? h("div", {
    ref: "footerBorder",
    class: cls,
    style
  }) : null;
};
function getTableAttrs(args) {
  var _class4;
  var vSize5 = args.vSize, editConfig = args.editConfig, showHeader = args.showHeader, showFooter = args.showFooter, overflowY = args.overflowY, overflowX = args.overflowX, showOverflow = args.showOverflow;
  var showHeaderOverflow = args.showHeaderOverflow, highlightCell = args.highlightCell, optimizeOpts2 = args.optimizeOpts, stripe = args.stripe, border = args.border, isGroup2 = args.isGroup, mouseConfig = args.mouseConfig;
  var loading = args.loading, highlightHoverRow = args.highlightHoverRow, highlightHoverColumn = args.highlightHoverColumn, validOpts2 = args.validOpts;
  var stripeSaas = args.stripeSaas, borderSaas = args.borderSaas, borderVertical = args.borderVertical, isThemeSaas3 = args.isThemeSaas;
  var map2 = {
    showHeader: "show__head",
    showFooter: "show__foot",
    overflowY: "scroll__y",
    overflowX: "scroll__x",
    loading: "is__loading",
    highlightHoverRow: "row__highlight",
    highlightHoverColumn: "column__highlight"
  };
  return {
    class: (_class4 = {
      "tiny-grid h-full sm:h-auto !bg-transparent sm:!bg-color-bg-1 after:border-none sm:after:border-solid": true
    }, _class4["row__valid-" + validOpts2.message] = true, _class4["size__" + vSize5] = vSize5, _class4["tiny-grid-editable"] = editConfig, _class4[map2.showHeader] = showHeader, _class4[map2.showFooter] = showFooter, _class4[map2.overflowY] = overflowY, _class4[map2.overflowX] = overflowX, _class4["all-overflow"] = showOverflow, _class4["all-head-overflow"] = showHeaderOverflow, _class4["tiny-grid-cell__highlight"] = highlightCell, _class4["tiny-grid__animat"] = optimizeOpts2.animat, _class4["tiny-grid__stripe"] = !isThemeSaas3 && stripe, _class4["tiny-grid__stripe-saas"] = isThemeSaas3 && stripeSaas, _class4["tiny-grid__border"] = border || isGroup2, _class4["tiny-grid__border-saas"] = isThemeSaas3 && borderSaas, _class4["tiny-grid__group-saas"] = isThemeSaas3 && isGroup2, _class4["tiny-grid__border-vertical"] = borderVertical, _class4["tiny-grid__checked"] = mouseConfig.checked, _class4["mark-insert"] = editConfig && editConfig.markInsert, _class4["edit__no-border"] = editConfig && editConfig.showBorder === false, _class4[map2.loading] = loading, _class4[map2.highlightHoverRow] = highlightHoverRow, _class4[map2.highlightHoverColumn] = highlightHoverColumn, _class4)
  };
}
var gridData = {
  // 存储异步加载过的行\列数据
  asyncRenderMap: {},
  // 列分组配置
  collectColumn: [],
  // 存放列相关的信息
  columnStore: {
    // 自适应的列表集合
    autoList: [],
    centerList: [],
    // 左侧冻结列表集合
    leftList: [],
    // 右侧冻结列表集合
    rightList: [],
    // 固定像素宽度列表集合
    pxList: [],
    // 设置了最小宽度列表集合
    pxMinList: [],
    // 可调整列宽列表集合
    resizeList: [],
    // 百分比宽度列表集合
    scaleList: [],
    // 百分比最小宽度列表集合
    scaleMinList: []
  },
  // 存放快捷菜单的信息
  ctxMenuStore: {
    list: [],
    selectChild: null,
    selected: null,
    showChild: false,
    style: null,
    visible: false
  },
  // 当前行
  currentRow: null,
  // 存放可编辑相关信息
  editStore: {
    editorAutoRefreshKey: 0,
    // 激活
    actived: {
      column: null,
      row: null
    },
    // 所有选中
    checked: {
      columns: [],
      rows: [],
      tColumns: [],
      tRows: []
    },
    // 已复制源
    copyed: {
      columns: [],
      cut: false,
      rows: []
    },
    indexs: {
      columns: []
    },
    insertList: [],
    removeList: [],
    // 选中源
    selected: {
      column: null,
      row: null
    },
    titles: {
      columns: []
    }
  },
  // 已展开的行
  expandeds: [],
  // 当前选中的筛选列
  filterStore: {
    column: null,
    condition: {
      input: "",
      relation: "equals"
    },
    id: "",
    multi: false,
    options: [],
    visible: false
  },
  // 表尾合计数据
  footerData: [],
  groupData: {},
  groupFolds: [],
  // 所有列已禁用
  headerCheckDisabled: false,
  // 是否全选
  isAllSelected: false,
  // 多选属性，有选中且非全选状态
  isIndeterminate: false,
  // 是否存在横向滚动条
  overflowX: false,
  // 是否存在纵向滚动条
  overflowY: true,
  // 存储滚动加载，上次滚动的位置
  scrollLoadStore: {
    bodyHeight: 0,
    scrollHeight: 0
  },
  // 是否启用了横向 X 可视渲染方式加载
  scrollXLoad: false,
  // 是否启用了纵向 Y 可视渲染方式加载
  scrollYLoad: false,
  // 横向滚动条的高度
  scrollbarHeight: 0,
  // 纵向滚动条的宽度
  scrollbarWidth: 0,
  // 单选属性，选中行
  selectRow: null,
  // 存放多选工具栏相关信息
  selectToolbarStore: {
    layout: {
      height: 0,
      left: 0,
      top: 0,
      width: 0,
      zIndex: 1
    },
    visible: false
  },
  // 多选属性，已选中的列
  selection: [],
  // 渲染的列
  tableColumn: [],
  // 渲染中的数据
  tableData: [],
  // 完整所有列
  tableFullColumn: [],
  // tooltip提示内容
  tooltipContent: "",
  // tooltip提示内容是否处理换行字符
  tooltipContentPre: false,
  // 已展开树节点
  treeExpandeds: [],
  // 树节点不确定状态的列表
  treeIndeterminates: [],
  // 存放数据校验相关信息
  validStore: {
    column: null,
    content: "",
    isArrow: false,
    row: null,
    rule: null,
    visible: false
  },
  // 校验tip提示内容
  validTipContent: "",
  // 在编辑模式下 单元格在失去焦点验证的状态
  validatedMap: {},
  // 需要显示的列 （横向开启虚拟滚动的时候表示需要渲染的列，并不是真正被内部v-for循环的列）
  visibleColumn: [],
  // 表尾边框线是否显示和位置
  showFooterBorder: false,
  footerBorderBottom: 0,
  tableBodyHeight: 0,
  // 表格父容器的高度
  parentHeight: 0
};
var getTableData2 = function getTableData3() {
  var tableData = {
    // 条件处理后数据
    afterFullData: [],
    elemStore: {},
    // 表尾高度
    footerHeight: 0,
    // 缓存数据集 rowid --> { row, rowid: rowId, index }
    fullAllDataRowIdData: {},
    // 缓存数据集 row --> { row, rowid: rowId, index }
    fullAllDataRowMap: /* @__PURE__ */ new Map(),
    // 缓存数据集 columnId --> { colid: column.id, column, index }
    fullColumnIdData: {},
    // 缓存数据集 column --> { colid: column.id, column, index }
    fullColumnMap: /* @__PURE__ */ new Map(),
    fullDataRowIdData: {},
    fullDataRowMap: /* @__PURE__ */ new Map(),
    // 缓存树形表格行数据以及其父级行数据的映射关系
    parentRowMap: /* @__PURE__ */ new Map(),
    // 临时插入数据集
    temporaryRows: [],
    // 表头高度
    headerHeight: 0,
    // 最后滚动位置
    lastScrollLeft: 0,
    lastScrollTop: 0,
    // 表格父容器的高度
    parentHeight: 0,
    scrollDirection: "N",
    // N,X,Y （滚动方向）
    // 存放横向 X 虚拟滚动相关的信息
    scrollXStore: {},
    // 存放纵向 Y 虚拟滚动相关信息
    scrollYStore: {},
    // 完整数据
    tableFullData: [],
    // 表格高度
    tableHeight: 0,
    // 表格宽度
    tableWidth: 0,
    // 存放 tooltip 相关信息
    tooltipStore: {},
    // 表格已挂载完成
    afterMounted: false,
    // 临时任务
    tasks: {},
    // 列初始就绪
    isColumnInitReady: false,
    // 列就绪
    isColumnReady: false
  };
  return tableData;
};
var bindEvent = function bindEvent2(ctx) {
  event_default.on(ctx, "mousedown", ctx.handleGlobalMousedownEvent);
  event_default.on(ctx, "mousedown", ctx.handleGlobalMousedownCaptureEvent, true);
  event_default.on(ctx, "blur", ctx.handleGlobalBlurEvent);
  event_default.on(ctx, "mousewheel", ctx.handleGlobalMousewheelEvent);
  event_default.on(ctx, "keydown", ctx.handleGlobalKeydownEvent);
  event_default.on(ctx, "resize", ctx.handleGlobalResizeEvent);
  event_default.on(ctx, "contextmenu", ctx.handleGlobalContextmenuEvent);
};
var unbindEvent = function unbindEvent2(table) {
  event_default.off(table, "mousedown");
  event_default.off(table, "mousedown", true);
  event_default.off(table, "blur");
  event_default.off(table, "mousewheel");
  event_default.off(table, "keydown");
  event_default.off(table, "resize");
  event_default.off(table, "contextmenu");
};
var Table = defineComponent({
  name: $prefix + "GridTable",
  props: {
    // 所有的列对齐方式
    align: {
      type: String,
      default: function _default12() {
        return GlobalConfig$1.align;
      }
    },
    // 是否自动监听父容器变化去更新响应式表格宽高
    autoResize: Boolean,
    // 是否带有纵向边框
    border: {
      type: Boolean,
      default: function _default27() {
        return GlobalConfig$1.border;
      }
    },
    // 给单元格附加 className
    cellClassName: [String, Function],
    // 主键配置
    columnKey: Boolean,
    // 所有列最小宽度，把剩余宽度按比例分配
    columnMinWidth: [Number, String],
    // 所有列宽度
    columnWidth: [Number, String],
    // 快捷菜单配置项
    contextMenu: Object,
    // 初始化绑定动态列
    customs: Array,
    // 数据
    data: [Array, Object],
    // 行拖拽和列拖拽的配置
    dropConfig: Object,
    // 编辑配置项
    editConfig: [Object, Boolean],
    // 校验规则配置项
    editRules: Object,
    // 展开行配置项
    expandConfig: Object,
    // 列的宽度是否自撑开
    fit: {
      type: Boolean,
      default: function _default36() {
        return GlobalConfig$1.fit;
      }
    },
    // 所有的表尾列的对齐方式
    footerAlign: {
      type: String,
      default: function _default44() {
        return GlobalConfig$1.footerAlign;
      }
    },
    // 给表尾的单元格附加 className
    footerCellClassName: [String, Function],
    // 表尾合计的计算方法
    footerMethod: Function,
    // 给表尾的行附加 className
    footerRowClassName: [String, Function],
    // 表尾合并行或列
    footerSpanMethod: Function,
    // 所有的表头列的对齐方式
    headerAlign: {
      type: String,
      default: function _default54() {
        return GlobalConfig$1.headerAlign;
      }
    },
    // 给表头的单元格附加 className
    headerCellClassName: [String, Function],
    // 给表头的行附加 className
    headerRowClassName: [String, Function],
    // 表头后置图标是否绝对定位
    headerSuffixIconAbsolute: Boolean,
    // 表格的高度
    height: [Number, String],
    // 激活单元格编辑时是否高亮显示
    highlightCell: Boolean,
    // 是否要高亮当前选中列
    highlightCurrentColumn: {
      type: Boolean,
      default: function _default64() {
        return GlobalConfig$1.highlightCurrentColumn;
      }
    },
    // 是否要高亮当前选中行
    highlightCurrentRow: {
      type: Boolean,
      default: function _default74() {
        return GlobalConfig$1.highlightCurrentRow;
      }
    },
    // 鼠标移到列是否要高亮显示
    highlightHoverColumn: {
      type: Boolean,
      default: function _default84() {
        return GlobalConfig$1.highlightHoverColumn;
      }
    },
    // 鼠标移到行是否要高亮显示
    highlightHoverRow: {
      type: Boolean,
      default: function _default94() {
        return GlobalConfig$1.highlightHoverRow;
      }
    },
    // 是否开启异步列功能
    isAsyncColumn: Boolean,
    isCenterEmpty: Boolean,
    // 是否拖拽表头调整列顺序
    isDragHeaderSorting: Boolean,
    // 按键配置项
    keyboardConfig: Object,
    // 表格是否加载中
    loading: Boolean,
    loadingComponent: Object,
    // 表格的最大高度
    maxHeight: [Number, String],
    // 表格的最小高度
    minHeight: [Number, String],
    // 鼠标配置项
    mouseConfig: Object,
    // 优化配置项
    optimization: Object,
    // 额外的参数
    params: Object,
    // 单选配置
    radioConfig: Object,
    // 是否所有服务端筛选
    remoteFilter: Boolean,
    // 是否所有服务端排序
    remoteSort: Boolean,
    // 空数据渲染
    renderEmpty: Function,
    // 自定义表格行渲染后的逻辑
    renderRowAfter: Function,
    // 所有列是否允许拖动列宽调整大小
    resizable: {
      type: Boolean,
      default: function _default104() {
        return GlobalConfig$1.resizable;
      }
    },
    // 给行附加 className
    rowClassName: [String, Function],
    // 行分组配置映射表
    rowGroup: Object,
    rowId: {
      type: String,
      default: function _default112() {
        return GlobalConfig$1.rowId;
      }
    },
    rowKey: Boolean,
    // 行合并
    rowSpan: Array,
    // 滚动加载(滚动分页加载)
    scrollLoad: Object,
    // 多选配置项
    selectConfig: Object,
    // 是否显示表尾合计
    showFooter: Boolean,
    // 是否显示表头
    showHeader: {
      type: Boolean,
      default: function _default122() {
        return GlobalConfig$1.showHeader;
      }
    },
    // 设置表头所有内容过长时显示为省略号
    showHeaderOverflow: {
      type: [Boolean, String],
      default: function _default13() {
        return GlobalConfig$1.showHeaderOverflow;
      }
    },
    // 设置所有内容过长时显示为省略号
    showOverflow: {
      type: [Boolean, String],
      default: function _default14() {
        return GlobalConfig$1.showOverflow;
      }
    },
    // 表格的尺寸
    size: {
      type: String,
      default: function _default15() {
        return GlobalConfig$1.size;
      }
    },
    // 排序配置项
    sortConfig: Object,
    // 自定义所有列的排序方法
    sortMethod: Function,
    // 全局开关控制所有的列是否可以排列
    sortable: {
      type: Boolean,
      default: true
    },
    // 合并行或列
    spanMethod: Function,
    // 只对 type=index 时有效，自定义序号的起始值
    startIndex: {
      type: Number,
      default: 0
    },
    // 是否带有斑马纹
    stripe: {
      type: Boolean,
      default: function _default16() {
        return GlobalConfig$1.stripe;
      }
    },
    // saas下是否带有斑马纹
    stripeSaas: {
      type: Boolean,
      default: function _default17() {
        return GlobalConfig$1.stripeSaas;
      }
    },
    // saas下是否带有下边框线
    borderSaas: {
      type: Boolean,
      default: function _default18() {
        return GlobalConfig$1.borderSaas;
      }
    },
    // saas下配置竖线
    borderVertical: {
      type: Boolean,
      default: function _default19() {
        return GlobalConfig$1.borderVertical;
      }
    },
    // 默认统计配置
    summaryConfig: Object,
    // 是否自动根据状态属性去更新响应式表格宽高
    syncResize: Boolean,
    tableLayout: String,
    // tooltip 配置项
    tooltipConfig: {
      type: Object,
      default: function _default20() {
        return {};
      }
    },
    // 树形结构配置项
    treeConfig: Object,
    // 校验配置项
    validConfig: Object,
    // 多端卡片配置
    cardConfig: Object,
    // 视图类型
    viewType: {
      type: String,
      default: function _default21() {
        return V_DEFAULT;
      }
    },
    // 移动优先视图下展示类型
    mfShow: {
      type: String,
      default: function _default222() {
        return V_MF_LIST;
      }
    },
    // 列锚点
    columnAnchor: Array,
    // 表尾自定义渲染
    renderFooter: Function,
    // 多端列表配置
    listConfig: Object,
    // 多端甘特配置
    ganttConfig: Object,
    // 数据预取配置
    prefetch: [Boolean, Array],
    // 相交配置
    intersectionOption: Object,
    // 值比较方法
    equals: Function,
    // 操作列（type为index或radio或selection的列）是否可拖动列宽
    operationColumnResizable: {
      type: Boolean,
      default: function _default232() {
        return GlobalConfig$1.operationColumnResizable;
      }
    },
    // 自动清空鼠标选中
    autoClearMouseChecked: {
      type: Boolean,
      default: true
    }
  },
  provide: function provide22() {
    return {
      $table: this,
      // 嵌套表格屏蔽父表格列
      $column: null
    };
  },
  inject: {
    $grid: {
      default: null
    }
  },
  data: function data5() {
    return extend(true, {
      id: uniqueId_default()
    }, gridData);
  },
  computed: {
    bodyCtxMenu: function bodyCtxMenu() {
      return this.ctxMenuOpts.body && this.ctxMenuOpts.body.options ? this.ctxMenuOpts.body.options : [];
    },
    ctxMenuList: function ctxMenuList() {
      var rest = [];
      this.ctxMenuStore.list.forEach(function(list) {
        return list.forEach(function(item) {
          return rest.push(item);
        });
      });
      return rest;
    },
    ctxMenuOpts: function ctxMenuOpts() {
      return extend(true, {}, GlobalConfig$1.menu, this.contextMenu);
    },
    hasFilter: function hasFilter() {
      return this.tableColumn.some(function(column) {
        return isObject$1(column.filter) && !isEmptyObject(column.filter);
      });
    },
    hasTip: function hasTip() {
      return GridAdapter._tooltip;
    },
    headerCtxMenu: function headerCtxMenu() {
      return this.ctxMenuOpts.header && this.ctxMenuOpts.header.options ? this.ctxMenuOpts.header.options : [];
    },
    isCtxMenu: function isCtxMenu() {
      return this.headerCtxMenu.length || this.bodyCtxMenu.length;
    },
    // 是否使用了分组表头
    isGroup: function isGroup() {
      return this.collectColumn.some(function(column) {
        return hasChildrenList(column);
      });
    },
    isResizable: function isResizable() {
      return this.resizable || this.tableFullColumn.some(function(column) {
        return column.resizable;
      });
    },
    optimizeOpts: function optimizeOpts() {
      return extend(true, {}, GlobalConfig$1.optimization, this.optimization);
    },
    sortOpts: function sortOpts() {
      return extend(true, {}, GlobalConfig$1.sortConfig, this.sortConfig);
    },
    tooltipContentOpts: function tooltipContentOpts() {
      return extend(true, {
        content: this.tooltipContent,
        pre: this.tooltipContentPre,
        //  pre 元素可定义预格式化的文本
        placement: "right",
        type: this.tooltipConfig.effect ? void 0 : "normal"
      }, this.tooltipConfig);
    },
    // 表格尺寸（medium|small|mini）
    vSize: function vSize2() {
      return this.size || this.$parent && this.$parent.size || this.$parent && this.$parent.vSize;
    },
    vaildTipOpts: function vaildTipOpts() {
      return extend(true, {
        isArrow: false,
        placement: "top",
        type: "error",
        content: this.validTipContent
      }, this.tooltipConfig);
    },
    validOpts: function validOpts() {
      var _this$$grid3, _this$$grid3$designCo;
      var config2 = Object.assign({
        message: "tooltip"
      }, GlobalConfig$1.validConfig, (_this$$grid3 = this.$grid) == null ? void 0 : (_this$$grid3$designCo = _this$$grid3.designConfig) == null ? void 0 : _this$$grid3$designCo.validConfig, this.validConfig);
      config2.isMessageTooltip = config2.message === "tooltip";
      config2.isMessageDefault = config2.message === "default";
      config2.isMessageInline = config2.message === "inline";
      return config2;
    },
    computerTableBodyHeight: function computerTableBodyHeight() {
      return this.tableBodyHeight === 0 ? "calc(100% - 36px)" : this.tableBodyHeight + "px";
    },
    isThemeTiny: function isThemeTiny() {
      return this.tinyTheme === T_TINY;
    },
    isThemeSaas: function isThemeSaas() {
      return this.tinyTheme === T_SAAS$1;
    },
    isViewDefault: function isViewDefault() {
      return this.viewType === V_DEFAULT;
    },
    isShapeTable: function isShapeTable() {
      return this.isViewDefault || this.viewType === V_MF$1 && this.$grid.currentBreakpoint !== "default";
    }
  },
  watch: {
    collectColumn: function collectColumn(value) {
      this.watchColumn(value);
    },
    customs: function customs(value) {
      !this.isUpdateCustoms && this.mergeCustomColumn(value);
      this.isUpdateCustoms = false;
    },
    height: function height() {
      this.$nextTick(this.recalculate);
    },
    data: function data6() {
      this.handleDataChange();
    },
    // 此属性暂时没有找到应用的demo，从语义上来说，觉得可以删除，官网有对应api但是没有对应的示例
    syncResize: function syncResize(value) {
      value && this.$nextTick(this.recalculate);
    },
    tableColumn: function tableColumn2() {
      this.analyColumnWidth();
      this.handleSelectionHeader();
    },
    parentHeight: function parentHeight() {
      this.$nextTick(this.recalculate);
    }
  },
  created: function created22() {
    var _Object$assign = Object.assign(this, getTableData2()), scrollXStore = _Object$assign.scrollXStore, scrollYStore = _Object$assign.scrollYStore, optimizeOpts2 = _Object$assign.optimizeOpts, data8 = _Object$assign.data;
    var scrollX = optimizeOpts2.scrollX, scrollY = optimizeOpts2.scrollY;
    verifyConfig(this);
    mergeScrollDirStore(scrollX, scrollXStore);
    mergeScrollDirStore(scrollY, scrollYStore);
    loadStatic(data8, this);
    mergeTreeConfig(this);
    initDrop(this);
    bindEvent(this);
    this.watchDataForVue3();
    this.$grid.connect({
      name: "table",
      vm: this
    });
  },
  mounted: function mounted5() {
    var _this58 = this;
    if (this.$refs.tableWrapper) {
      document.body.appendChild(this.$refs.tableWrapper);
    }
    this.$nextTick().then(function() {
      _this58.afterMounted = true;
      if (_this58.autoResize && GridAdapter._resize) {
        _this58.bindResize();
      }
    });
    setTimeout(function() {
      var tableFooter = _this58.$refs.tableFooter;
      _this58.showFooterBorder = !!tableFooter;
      _this58.footerBorderBottom = tableFooter ? tableFooter.$el.getBoundingClientRect().height : 0;
    });
  },
  activated: function activated() {
    var lastScrollLeft = this.lastScrollLeft, lastScrollTop = this.lastScrollTop, scrollXLoad = this.scrollXLoad, scrollYLoad = this.scrollYLoad;
    if (lastScrollLeft || lastScrollTop) {
      this.scrollTo(lastScrollLeft, lastScrollTop);
      scrollXLoad && this.triggerScrollXEvent();
      scrollYLoad && this.triggerScrollYEvent({
        target: {
          scrollTop: lastScrollTop
        }
      });
    }
    bindEvent(this);
  },
  setup: function setup62(props2, context) {
    var slots = context.slots, attrs = context.attrs, listeners = context.listeners;
    var table = getCurrentInstance().proxy;
    var tinyTheme = ref(resolveTheme(props2, context));
    onBeforeUnmount(function() {
      var elemStore = table.elemStore, $refs = table.$refs;
      var containerList = ["main", "left", "right"];
      var tableWrapper = $refs.tableWrapper;
      if (tableWrapper && tableWrapper.parentNode) {
        tableWrapper.parentNode.removeChild(tableWrapper);
      }
      if (GridAdapter._resize) {
        table.unbindResize();
      }
      table.closeFilter();
      table.closeMenu();
      table.columnSortable && table.columnSortable.destroy();
      table.rowSortable && table.rowSortable.destroy();
      containerList.forEach(function(layout) {
        var ySpaceElem = elemStore[layout + "-body-ySpace"];
        if (ySpaceElem) {
          ySpaceElem.onscroll = null;
        }
      });
      unbindEvent(table);
      clearOnTableUnmount(table);
    });
    onDeactivated(function() {
      unbindEvent(table);
    });
    var tableListeners = getListeners(attrs, listeners);
    return {
      slots,
      tableListeners,
      tinyTheme
    };
  },
  render: function render14() {
    var border = this.border, collectColumn2 = this.collectColumn, columnStore = this.columnStore, editConfig = this.editConfig, highlightCell = this.highlightCell, highlightHoverColumn = this.highlightHoverColumn;
    var highlightHoverRow = this.highlightHoverRow, isGroup2 = this.isGroup, loading = this.loading, loadingComponent = this.loadingComponent, _this$mouseConfig2 = this.mouseConfig, mouseConfig = _this$mouseConfig2 === void 0 ? {} : _this$mouseConfig2, optimizeOpts2 = this.optimizeOpts;
    var overflowX = this.overflowX, overflowY = this.overflowY, showFooter = this.showFooter, showHeader = this.showHeader, showHeaderOverflow = this.showHeaderOverflow, showOverflow = this.showOverflow, isThemeSaas3 = this.isThemeSaas;
    var stripe = this.stripe, tableColumn3 = this.tableColumn, tableData = this.tableData, validOpts2 = this.validOpts, vSize5 = this.vSize, visibleColumn = this.visibleColumn, slots = this.slots, $slots = this.$slots, stripeSaas = this.stripeSaas, borderSaas = this.borderSaas, isShapeTable2 = this.isShapeTable;
    var borderVertical = this.borderVertical, cardConfig = this.cardConfig, listConfig = this.listConfig, ganttConfig = this.ganttConfig;
    var leftList = columnStore.leftList, rightList = columnStore.rightList;
    var props2 = {
      tableData,
      tableColumn: tableColumn3,
      visibleColumn,
      collectColumn: collectColumn2,
      size: vSize5,
      isGroup: isGroup2
    };
    Object.assign(props2, {
      cardConfig,
      listConfig,
      ganttConfig
    });
    var args = {
      $slots: slots,
      _vm: this,
      leftList,
      optimizeOpts: optimizeOpts2,
      overflowX,
      props: props2,
      rightList
    };
    Object.assign(args, {
      showFooter,
      showHeader,
      tableColumn: tableColumn3,
      tableData,
      vSize: vSize5,
      visibleColumn
    });
    var renders = getRenderer(args);
    var renderHeader2 = renders.renderHeader, renderEmptyPart = renders.renderEmptyPart, renderFooter = renders.renderFooter;
    var renderResizeBar = renders.renderResizeBar, renderPluginWrapper = renders.renderPluginWrapper, renderSelectToolbar = renders.renderSelectToolbar;
    args = {
      vSize: vSize5,
      editConfig,
      showHeader,
      showFooter,
      overflowY,
      overflowX,
      showOverflow
    };
    Object.assign(args, {
      showHeaderOverflow,
      highlightCell,
      optimizeOpts: optimizeOpts2,
      stripe,
      border,
      isGroup: isGroup2,
      mouseConfig
    });
    Object.assign(args, {
      loading,
      highlightHoverRow,
      highlightHoverColumn,
      validOpts: validOpts2
    });
    Object.assign(args, {
      stripeSaas,
      borderSaas,
      borderVertical,
      isThemeSaas: isThemeSaas3
    });
    return h("div", getTableAttrs(args), [
      // 隐藏列
      h("div", {
        class: "tiny-grid-hidden-column",
        ref: "hideColumn"
      }, typeof $slots.default === "function" ? $slots.default() : $slots.default),
      // 主头部
      renderHeader2(),
      // 居中显示空数据
      renderEmptyPart(),
      // 主内容
      h(Body, {
        ref: "tableBody",
        props: props2,
        class: this.viewCls("tableBody")
      }),
      // 底部汇总
      renderFooter(),
      // 边框线
      h("div", {
        class: ["tiny-grid__border-line", this.viewCls("borderLine")],
        key: "tinyGridBorderLine"
      }),
      // 列拖拽参考线
      renderResizeBar(),
      // 加载中
      h(Loading, {
        props: {
          visible: loading,
          loadingComponent
        },
        class: this.viewCls("gridLoading")
      }),
      // 筛选、快捷菜单、Tip提示、校验提示
      renderPluginWrapper(),
      // 多选工具栏
      renderSelectToolbar(),
      // 多端表格（默认主题或默认视图/mf大屏下，不渲染）
      !isShapeTable2 ? h(MfTable, {
        ref: "mfTable",
        props: props2
      }) : null,
      // 表尾边框线
      renderFooterBorder(this)
    ]);
  },
  methods: _extends({}, methods, {
    handleDataChange: function handleDataChange() {
      if (Array.isArray(this.data)) {
        !this._isUpdateData && this.loadTableData(this.data, true).then(this.handleDefault).then(this.handleSelectionHeader);
        this._isUpdateData = false;
      }
    },
    viewCls: function viewCls(module) {
      return this.$grid.viewCls(module);
    }
  })
});
Table.install = function(Vue) {
  GridAdapter.Vue = Vue;
  GridAdapter.Table = Table;
  Vue.component(Table.name, Table);
};
var Column = defineComponent({
  name: $prefix + "GridColumn",
  componentName: "GridColumn",
  props: _extends({}, $props, {
    // 列对齐方式
    align: String,
    // 给单元格附加 className
    className: [String, Function],
    // 单元格编辑渲染配置项
    editor: [Object, Function],
    // 列属性
    field: String,
    filter: {},
    // 自定义筛选方法
    filterMethod: Function,
    // 筛选是否允许多选
    filterMultiple: {
      type: Boolean,
      default: true
    },
    // 筛选模板配置项
    filterRender: Object,
    // 配置筛选条件数组
    filters: Array,
    // 将列固定在左侧或者右侧
    fixed: String,
    // 表尾列的对齐方式
    footerAlign: String,
    // 给表尾单元格附加 className
    footerClassName: [String, Function],
    // 格式化配置
    formatConfig: {
      type: Object,
      default: function _default242() {
        return {
          data: []
        };
      }
    },
    // 格式化显示内容
    formatText: [Function, String],
    // 格式化单元格编辑器组件的传入值
    formatValue: Function,
    group: {
      type: Boolean,
      default: false
    },
    // 表头对齐方式
    headerAlign: String,
    // 给表头单元格附加 className
    headerClassName: [String, Function],
    // 自定义索引方法
    indexMethod: Function,
    // 在 v3.0 中废弃 label
    label: String,
    // 列最小宽度，把剩余宽度按比例分配
    minWidth: [Number, String],
    // 额外的参数
    params: Object,
    // 在 v3.0 中废弃 prop
    prop: String,
    // 是否服务端排序
    remoteSort: {
      type: Boolean,
      default: null
    },
    // 单元格渲染配置项
    renderer: [Object, Function],
    // 是否必填，如不设置，则会根据校验规则自动生成
    required: {
      type: Boolean,
      default: false
    },
    // 是否允许拖动列宽调整大小
    resizable: {
      type: Boolean,
      default: null
    },
    // 表单的验证功能
    rules: Object,
    // 当表头内容过长时显示为省略号
    showHeaderOverflow: {
      type: [Boolean, String],
      default: null
    },
    // 显示列头提示
    showHeaderTip: {
      type: Boolean,
      default: null
    },
    // 是否显示列头编辑图标
    showIcon: {
      type: Boolean,
      default: true
    },
    // 当内容过长时显示为省略号
    showOverflow: {
      type: [Boolean, String],
      default: null
    },
    // 显示列内容提示
    showTip: {
      type: Boolean,
      default: null
    },
    // 自定义排序的属性
    sortBy: [String, Array],
    // 自定义排序方法
    sortMethod: Function,
    // 是否允许排序
    sortable: {
      type: Boolean,
      default: false
    },
    // 列标题
    title: [String, Function],
    // 指定为树节点
    treeNode: Boolean,
    // 渲染类型: index,radio,selection,expand,operation,默认值空串
    type: String,
    // 列宽度
    width: [Number, String],
    // 操作列配置
    operationConfig: Object,
    // 值比较方法
    equals: Function
  }),
  provide: function provide3() {
    return {
      $column: this
    };
  },
  setup: function setup72(props2, _ref190) {
    var slots = _ref190.slots;
    var reactive$1 = reactive, onBeforeUnmount$1 = onBeforeUnmount, inject$1 = inject, getCurrentInstance$1 = getCurrentInstance, onUpdated$1 = onUpdated, watch$1 = watch, nextTick$1 = nextTick, markRaw$1 = markRaw;
    var currentInstance = getCurrentInstance$1();
    var instance = currentInstance.proxy;
    var $grid = inject$1("$grid");
    var $table = inject$1("$table");
    var $column = inject$1("$column", null);
    var slotsCache = {};
    var state = reactive$1({
      // 穿件表格列实例化对象
      columnConfig: CellDefault.createColumn($table, props2),
      slots,
      cacheKey: markRaw$1({
        uid: currentInstance.uid
      }),
      // 如果是静态数据源，就拿第一行数据
      firstRow: !$grid.fetchOption && $grid.data && $grid.data.length ? $grid.data[0] : {}
    });
    watch$1(function() {
      return props2.formatConfig;
    }, function() {
      state.columnConfig = CellDefault.createColumn($table, props2);
    });
    onUpdated$1(function() {
      var slotsChange = Object.keys(instance.slots || {}).some(function(key) {
        var _slotsCache;
        return !(((_slotsCache = slotsCache) == null ? void 0 : _slotsCache[key]) === instance.slots[key]);
      });
      if (slotsChange) {
        slotsCache = _extends({}, instance.slots);
        state.columnConfig.slots = slotsCache;
      }
    });
    nextTick$1(function() {
      return assemColumn($table, $column, instance);
    });
    onBeforeUnmount$1(function() {
      return destroyColumn($table, instance);
    });
    return state;
  },
  render: function render15() {
    var slots = this.slots, firstRow = this.firstRow, columnConfig = this.columnConfig;
    var slotVnode;
    try {
      slotVnode = slots.default && slots.default({
        row: firstRow,
        column: columnConfig,
        skip: true
      });
    } catch (e) {
      slotVnode = null;
      warn$1("ui.grid.error.chainCallError");
    }
    return h("div", slotVnode);
  },
  methods: CellDefault
});
Column.install = function(Vue) {
  Vue.component(Column.name, Column);
};
var themes = GlobalConfig$1.themes, viewConfig = GlobalConfig$1.viewConfig;
var T_SAAS = themes.SAAS;
var V_GANTT = viewConfig.GANTT, V_MF = viewConfig.MF, V_CARD = viewConfig.CARD;
var propKeys = Object.keys(Table.props);
function createRender(opt) {
  var _class5;
  var h2 = opt.h, _vm = opt._vm, vSize5 = opt.vSize, props2 = opt.props, selectToolbar = opt.selectToolbar, $slots = opt.$slots, tableOns = opt.tableOns, renderedToolbar = opt.renderedToolbar, loading = opt.loading, pagerConfig = opt.pagerConfig, pager = opt.pager, tableLoading = opt.tableLoading, viewType2 = opt.viewType, columnAnchorParams2 = opt.columnAnchorParams, columnAnchor = opt.columnAnchor, fullScreenClass = opt.fullScreenClass;
  return h2("div", {
    class: (_class5 = {}, _class5["tiny-grid__wrapper tiny-grid view_" + viewType2] = true, _class5["!bg-transparent sm:!bg-color-bg-1"] = viewType2 === V_MF || viewType2 === V_CARD, _class5["size__" + vSize5] = vSize5, _class5["tiny-grid__animat"] = props2.optimization.animat, _class5[fullScreenClass] = true, _class5)
  }, [
    selectToolbar ? null : renderedToolbar,
    columnAnchor ? _vm.renderColumnAnchor(columnAnchorParams2, _vm) : null,
    // 这里会渲染tiny-grid-column插槽内容，从而获取列配置
    h2(Table, {
      props: props2,
      on: tableOns,
      ref: "tinyTable"
    }, $slots.default && $slots.default()),
    _vm.renderPager({
      $slots,
      _vm,
      loading,
      pager,
      pagerConfig,
      tableLoading,
      vSize: vSize5
    })
  ]);
}
var Grid = defineComponent({
  name: $prefix + "Grid",
  provide: function provide4() {
    return {
      $grid: this
    };
  },
  props: _extends({}, $props, {
    columns: Array,
    proxyConfig: Object,
    fetchData: Object,
    saveData: Object,
    deleteData: Object,
    toolbar: Object,
    pager: Object,
    dataset: Object,
    autoLoad: {
      type: Boolean,
      default: true
    },
    seqSerial: {
      type: Boolean,
      default: false
    },
    events: Object
  }, Table.props, {
    isBeforePageChange: Boolean,
    showSaveMsg: {
      type: Boolean,
      default: false
    },
    isMultipleHistory: Boolean,
    selectToolbar: [Boolean, Object]
  }),
  data: function data7() {
    return {
      emitter: emitter(),
      fetchOption: null,
      filterData: [],
      listeners: {},
      pagerConfig: null,
      // 存放标记为删除的行数据
      pendingRecords: [],
      sortData: {},
      tableCustoms: [],
      tableData: [],
      tableLoading: false,
      tablePage: {
        total: 0,
        pageSize: 10,
        currentPage: 1
      },
      columnAnchorParams: {},
      columnAnchorKey: "",
      tasks: {},
      fullScreenClass: "",
      isInitialLoading: true
      // 是否首次加载数据
    };
  },
  computed: {
    // 工具栏按钮保存和删除时是否弹出提示信息
    isMsg: function isMsg() {
      return this.proxyOpts.message !== false;
    },
    tableProps: function tableProps() {
      var _this59 = this;
      var rest = {};
      propKeys.forEach(function(key) {
        return rest[key] = _this59[key];
      });
      return rest;
    },
    proxyOpts: function proxyOpts() {
      return extend(true, {}, GlobalConfig$1.grid.proxyConfig, this.proxyConfig);
    },
    vSize: function vSize3() {
      return this.size || this.$parent && this.$parent.size || this.$parent && this.$parent.vSize;
    },
    seqIndex: function seqIndex() {
      var seqSerial = this.seqSerial, scrollLoad = this.scrollLoad, pagerConfig = this.pagerConfig, startIndex = this.startIndex;
      var seqIndexValue = startIndex;
      if ((seqSerial || scrollLoad) && pagerConfig) {
        seqIndexValue = (pagerConfig.currentPage - 1) * pagerConfig.pageSize + startIndex;
      }
      return seqIndexValue;
    },
    isThemeSaas: function isThemeSaas2() {
      return this.tinyTheme === T_SAAS;
    },
    isModeMobileFirst: function isModeMobileFirst() {
      return this.tinyMode === "mobile-first";
    },
    isViewGantt: function isViewGantt() {
      return this.viewType === V_GANTT;
    }
  },
  watch: {
    // 监听配置式columns数组
    columns: function columns(cols) {
      this.loadColumn(cols);
    },
    tableCustoms: function tableCustoms() {
      this.toolbar && this.$refs.toolbar && this.$refs.toolbar.loadStorage();
    },
    columnAnchorParams: function columnAnchorParams() {
      var _this60 = this;
      setTimeout(function() {
        return _this60.emitter.emit("active-anchor");
      }, this.columnAnchorParams.activeAnchor.delay);
    },
    viewType: function viewType(value) {
      var _this61 = this;
      if (value === V_MF && this.fullScreenClass) {
        this.$nextTick(function() {
          return _this61.recalculate(true);
        });
      }
    }
  },
  created: function created3() {
    this.vmStore = /* @__PURE__ */ Object.create(null);
    this.fetchOption = this.initFetchOption();
    this.pagerConfig = this.initPagerConfig();
    var customs2 = this.customs, events = this.events, prefetch = this.prefetch, fetchOption = this.fetchOption, autoLoad = this.autoLoad;
    if (customs2) {
      this.tableCustoms = customs2;
    }
    if (events) {
      var listeners = {};
      for (var event in events) {
        if (Object.prototype.hasOwnProperty.call(events, event)) {
          var evkey = event.replace(/\B([A-Z])/g, "-$1").toLowerCase();
          listeners[evkey] = events[event];
          if (~["pageChange", "sortChange", "filterChange", "toolbarButtonClick"].indexOf(event)) {
            this.emitter.on(evkey, events[event]);
          }
        }
      }
      this.listeners = listeners;
    }
    if (prefetch && fetchOption && autoLoad !== false) {
      if (Array.isArray(prefetch)) {
        this.commitProxy("prefetch", prefetch);
      } else {
        this.commitProxy("prefetch");
      }
    }
  },
  mounted: function mounted6() {
    var columns2 = this.columns, fetchOption = this.fetchOption, autoLoad = this.autoLoad, pagerSlot = this.pagerSlot, prefetch = this.prefetch;
    if (pagerSlot) {
      var _pagerSlot$componentO = pagerSlot.componentOptions.listeners, listeners = _pagerSlot$componentO === void 0 ? {} : _pagerSlot$componentO, componentInstance = pagerSlot.componentInstance;
      if (!listeners["size-change"]) {
        componentInstance.$on("size-change", this.pageSizeChange);
      }
      if (!listeners["current-change"]) {
        componentInstance.$on("current-change", this.pageCurrentChange);
      }
    }
    if (columns2 && columns2.length) {
      this.loadColumn(this.columns);
    }
    if (!prefetch && fetchOption) {
      if (this._pageSizeChangeCallback) {
        this._pageSizeChangeCallback();
        this._pageSizeChangeCallback = null;
      } else if (autoLoad) {
        var toolbarVm = this.getVm("toolbar");
        this.commitProxy("query", toolbarVm && toolbarVm.orderSetting());
      }
    }
    if (this.isMultipleHistory) {
      this.initMultipleHistory();
    }
    this.addIntersectionObserver();
  },
  setup: function setup82(props2, context) {
    var listeners = context.listeners, attrs = context.attrs;
    var tableListeners = getListeners(attrs, listeners);
    var tinyTheme = ref(resolveTheme(props2, context));
    var tinyMode = ref(resolveMode(props2, context));
    var breakpoint = useBreakpoint();
    var renderless2 = function renderless22(props22, hooks2, _ref191) {
      var _ref191$designConfig = _ref191.designConfig, designConfig = _ref191$designConfig === void 0 ? null : _ref191$designConfig;
      return {
        tableListeners,
        designConfig,
        tinyTheme,
        tinyMode,
        currentBreakpoint: breakpoint.current
      };
    };
    onBeforeUnmount(function() {
      var gridVm = getCurrentInstance().proxy;
      gridVm.removeIntersectionObserver();
      gridVm.vmStore = null;
    });
    return setup$1({
      props: props2,
      context,
      renderless: renderless2,
      api: ["designConfig", "tableListeners", "tinyTheme", "tinyMode", "currentBreakpoint"]
    });
  },
  render: function render16() {
    var _this62 = this;
    var editConfig = this.editConfig, fetchOption = this.fetchOption, listeners = this.listeners, loading = this.loading, optimization = this.optimization, pager = this.pager, pagerConfig = this.pagerConfig, remoteFilter = this.remoteFilter, remoteSort = this.remoteSort, selectToolbar = this.selectToolbar;
    var seqIndex2 = this.seqIndex, $slots = this.slots, tableCustoms2 = this.tableCustoms, tableData = this.tableData, tableListeners = this.tableListeners, tableLoading = this.tableLoading, tableProps2 = this.tableProps, toolbar = this.toolbar, vSize5 = this.vSize, designConfig = this.designConfig, viewType2 = this.viewType;
    var columnAnchor = this.columnAnchor, columnAnchorParams2 = this.columnAnchorParams, fullScreenClass = this.fullScreenClass;
    if (designConfig != null && designConfig.icons) {
      Object.assign(GlobalConfig$1.icon, designConfig.icons);
    }
    var optimizOpt = _extends({}, GlobalConfig$1.optimization, optimization);
    var props2 = _extends({}, tableProps2, {
      optimization: optimizOpt,
      startIndex: seqIndex2
    });
    if ((designConfig == null ? void 0 : designConfig.stripe) !== void 0 && !props2.stripe) {
      props2.stripe = designConfig == null ? void 0 : designConfig.stripe;
    }
    var tableOns = _extends({}, listeners, tableListeners);
    var rowClassName = this.handleRowClassName, sortChangeEvent2 = this.sortChangeEvent, filterChangeEvent2 = this.filterChangeEvent;
    if (fetchOption) {
      Object.assign(props2, {
        loading: loading || tableLoading,
        data: tableData,
        rowClassName
      });
      remoteSort && (tableOns["sort-change"] = sortChangeEvent2);
      remoteFilter && (tableOns["filter-change"] = filterChangeEvent2);
    }
    toolbar && !(toolbar.setting && toolbar.setting.storage) && (props2.customs = tableCustoms2);
    toolbar && (tableOns["update:customs"] = function(value) {
      return _this62.tableCustoms = value;
    });
    tableOns["column-init-ready"] = this.handleColumnInitReady;
    if (editConfig) {
      props2.editConfig = _extends({
        trigger: "click",
        mode: "cell",
        showStatus: true
      }, editConfig, {
        activeMethod: this.handleActiveMethod
      });
    }
    var renderedToolbar = this.getRenderedToolbar({
      $slots,
      _vm: this,
      loading,
      tableLoading,
      toolbar
    });
    return createRender({
      h,
      _vm: this,
      vSize: vSize5,
      props: props2,
      selectToolbar,
      renderedToolbar,
      tableOns,
      $slots,
      loading,
      pager,
      pagerConfig,
      tableLoading,
      viewType: viewType2,
      columnAnchorParams: columnAnchorParams2,
      columnAnchor,
      fullScreenClass
    });
  },
  methods: {
    updateParentHeight: function updateParentHeight2() {
      var _this63 = this;
      if (!this.tasks.updateParentHeight) {
        this.tasks.updateParentHeight = debounce_default(10, function() {
          var $el = _this63.$el, $refs = _this63.$refs;
          var tinyTable = $refs.tinyTable;
          var toolbarVm = _this63.getVm("toolbar");
          if (tinyTable) {
            tinyTable.parentHeight = $el.parentNode.clientHeight - (toolbarVm ? toolbarVm.$el.clientHeight : 0) - ($refs.pager ? $refs.pager.$el.clientHeight : 0);
          }
        });
      }
      this.tasks.updateParentHeight();
    },
    // 向缓存添加实例
    connect: function connect2(_ref192) {
      var name = _ref192.name, vm = _ref192.vm;
      if (name && typeof name === "string" && vm) {
        this.vmStore[name] = vm;
      }
    },
    createJob: function createJob(type, callback) {
      if (type === "pageSizeChangeCallback") {
        this._pageSizeChangeCallback = callback;
      } else if (type === "updateCustomsCallback") {
        this._updateCustomsCallback = callback;
      }
    },
    // 从缓存获取实例
    getVm: function getVm2(name) {
      if (name && typeof name === "string" && this.vmStore) {
        return this.vmStore[name];
      }
    },
    // 列就绪时的处理
    handleColumnInitReady: function handleColumnInitReady() {
      if (this._updateCustomsCallback) {
        this._updateCustomsCallback();
        this._updateCustomsCallback = null;
      }
    },
    handleRowClassName: function handleRowClassName(params) {
      var rowClassName = this.rowClassName;
      var clss = [];
      if (this.pendingRecords.includes(params.row)) {
        clss.push("row__pending");
      }
      return clss.concat(rowClassName ? rowClassName(params) : []);
    },
    handleActiveMethod: function handleActiveMethod(params) {
      return !~this.pendingRecords.indexOf(params.row) && (!this.editConfig.activeMethod || this.editConfig.activeMethod(params));
    },
    sortChangeEvent: function sortChangeEvent(params) {
      var remoteSort = this.remoteSort;
      var column = params.column;
      var eventParams = extend(false, {
        $grid: this
      }, params);
      if (isBoolean_default(column.remoteSort) ? column.remoteSort : remoteSort) {
        this.sortData = params;
        this.tablePage.currentPage = 1;
        this.commitProxy("query");
      }
      emitEvent$1(this, "sort-change", eventParams);
      this.emitter.emit("sort-change", eventParams);
    },
    viewCls: function viewCls2(module) {
      return GlobalConfig$1.viewConfig[module][this.viewType] || "";
    },
    // 监听某个元素是否出现在视口中
    addIntersectionObserver: function addIntersectionObserver() {
      var _this64 = this;
      if (this.intersectionOption && this.intersectionOption.disabled)
        return;
      this.intersectionObserver = new IntersectionObserver(function(entries) {
        var entry = entries[0];
        if (entries.length > 1) {
          var intersectingEntry = entries.find(function(entry2) {
            return entry2.isIntersecting;
          });
          if (intersectingEntry) {
            entry = intersectingEntry;
          }
        }
        _this64.handleVisibilityChange(entry.isIntersecting, entry);
      }, this.intersectionOption);
      this.intersectionObserver.observe(this.$el);
    },
    removeIntersectionObserver: function removeIntersectionObserver() {
      if (this.intersectionObserver) {
        this.intersectionObserver.unobserve(this.$el);
        this.intersectionObserver.disconnect();
        this.intersectionObserver = null;
      }
    },
    filterChangeEvent: function filterChangeEvent(params) {
      var eventParams = extend(false, {
        $grid: this
      }, params);
      if (this.remoteFilter) {
        this.filterData = params.filters;
        this.commitProxy("query");
      }
      emitEvent$1(this, "filter-change", eventParams);
      this.emitter.emit("filter-change", eventParams);
    }
  }
});
Grid.install = function(Vue) {
  Vue.component(Grid.name, Grid);
};
function handleActivedCheckCell(_ref193) {
  var actived = _ref193.actived, column = _ref193.column, editConfig = _ref193.editConfig, row2 = _ref193.row;
  return actived.row !== row2 || (editConfig.mode === "cell" ? actived.column !== column : false);
}
function handleActivedCanActive(_ref194) {
  var editConfig = _ref194.editConfig, params = _ref194.params;
  return !editConfig.activeMethod || editConfig.activeMethod(params);
}
function handleActivedDoActive(_ref195) {
  var _vm = _ref195._vm, actived = _ref195.actived, canActive = _ref195.canActive, cell = _ref195.cell, column = _ref195.column, editConfig = _ref195.editConfig, event = _ref195.event, params = _ref195.params, row2 = _ref195.row, tableColumn3 = _ref195.tableColumn, type = _ref195.type;
  if (canActive) {
    if (_vm.keyboardConfig || _vm.mouseConfig) {
      _vm.clearCopyed(event);
      _vm.clearChecked();
      _vm.clearSelected(event);
    }
    _vm.clostTooltip();
    _vm.clearActived(event);
    type = "edit-actived";
    column.renderHeight = cell.offsetHeight;
    actived.args = params;
    actived.row = row2;
    actived.column = column;
    if (editConfig.mode === "row") {
      tableColumn3.forEach(function(column2) {
        return _vm._getColumnModel(row2, column2);
      });
    } else {
      _vm._getColumnModel(row2, column);
    }
    _vm.$nextTick(function() {
      _vm.handleFocus(params, event);
    });
  }
  return type;
}
function handleActivedClearActive(_ref196) {
  var _vm = _ref196._vm, canActive = _ref196.canActive, event = _ref196.event;
  if (!canActive) {
    _vm.clearActived(event);
  }
}
function handleActivedTryActive(_ref197) {
  var _vm = _ref197._vm, actived = _ref197.actived, cell = _ref197.cell, column = _ref197.column, editor = _ref197.editor, event = _ref197.event, isActiveCell = _ref197.isActiveCell, params = _ref197.params, row2 = _ref197.row;
  if (editor && cell && !isActiveCell) {
    var oldColumn = actived.column;
    if (oldColumn !== column) {
      var oldModel = oldColumn.model;
      if (oldModel.update) {
        setCellValue(row2, oldColumn, oldModel.value);
      }
      _vm.clearValidate();
    }
    column.renderHeight = cell.offsetHeight;
    actived.args = params;
    actived.column = column;
    setTimeout(function() {
      _vm.handleFocus(params, event);
    });
  }
}
function operArrs(_ref198) {
  var _vm = _ref198._vm, editStore = _ref198.editStore, newRecords = _ref198.newRecords, newRecordsCopy = _ref198.newRecordsCopy, nowData = _ref198.nowData, row2 = _ref198.row, tableFullData = _ref198.tableFullData, tableSourceData = _ref198.tableSourceData;
  if (row2 === -1) {
    Array.prototype.push.apply(nowData, newRecords);
    Array.prototype.push.apply(tableFullData, newRecords);
    Array.prototype.push.apply(tableSourceData, newRecordsCopy);
  }
  if (row2 && row2 !== -1) {
    var targetIndex = nowData.indexOf(row2);
    if (targetIndex === -1) {
      throw new Error(error("ui.grid.error.unableInsert"));
    }
    var insertIndex = tableFullData.indexOf(row2);
    Array.prototype.splice.apply(nowData, [targetIndex, 0].concat(newRecords));
    Array.prototype.splice.apply(tableFullData, [insertIndex, 0].concat(newRecords));
    Array.prototype.splice.apply(tableSourceData, [insertIndex, 0].concat(newRecordsCopy));
  }
  if (!row2) {
    Array.prototype.unshift.apply(nowData, newRecords);
    Array.prototype.unshift.apply(tableFullData, newRecords);
    Array.prototype.unshift.apply(tableSourceData, newRecordsCopy);
  }
  Array.prototype.unshift.apply(editStore.insertList, newRecords);
  Array.prototype.push.apply(_vm.temporaryRows, newRecordsCopy);
}
var _setActiveCell = function _setActiveCell2(row2, field) {
  var _this65 = this;
  var next1 = function next12() {
    if (!row2 || !field) {
      return _this65.$nextTick();
    }
    var column = find_default(_this65.visibleColumn, function(column2) {
      return column2.property === field;
    });
    if (!column || !column.editor) {
      return _this65.$nextTick();
    }
    var next2 = function next22(cell) {
      if (!cell) {
        return;
      }
      var rowIndex = _this65.getRowIndex(row2);
      var columnIndex = _this65.getColumnIndex(column);
      _this65.handleActived({
        row: row2,
        rowIndex,
        column,
        columnIndex,
        cell,
        $table: _this65
      });
      _this65.lastCallTime = Date.now();
    };
    getCell(_this65, {
      row: row2,
      column
    }).then(next2);
    return _this65.$nextTick();
  };
  return this.scrollToRow(row2, true).then(next1);
};
var Methods$c = {
  _insert: function _insert(records) {
    return this.insertAt(records);
  },
  // 根据位置从指定行添加数据
  _insertAt: function _insertAt(records, row2) {
    var _this66 = this;
    var afterFullData = this.afterFullData, editStore = this.editStore, isAsyncColumn = this.isAsyncColumn, scrollYLoad = this.scrollYLoad, tableFullData = this.tableFullData, _this$tableSourceData = this.tableSourceData, tableSourceData = _this$tableSourceData === void 0 ? [] : _this$tableSourceData, treeConfig = this.treeConfig;
    if (treeConfig) {
      throw new Error(error("ui.grid.error.treeInsert"));
    }
    if (isAsyncColumn) {
      var columnSet = this.getColumns();
      columnSet.forEach(function(column) {
        if (column.format && column.format.async && column.format.async.fetch) {
          records[GlobalConfig$1.constant.insertedField] = true;
        }
      });
    }
    if (!isArray(records)) {
      records = [records];
    }
    var nowData = afterFullData;
    var newRecords = records.map(function(record) {
      return reactive(_this66.defineField(_extends({}, record)));
    });
    var newRecordsCopy = clone_default(newRecords, true);
    operArrs({
      _vm: this,
      editStore,
      newRecords,
      newRecordsCopy,
      nowData,
      row: row2,
      tableFullData,
      tableSourceData
    });
    this.updateCache(true);
    this.handleTableData(true);
    this.checkSelectionStatus();
    if (scrollYLoad) {
      this.updateScrollYSpace();
    }
    var res = {
      row: newRecords.length ? newRecords[newRecords.length - 1] : null,
      rows: newRecords
    };
    return this.$nextTick().then(function() {
      _this66.recalculate();
      return res;
    });
  },
  /**
   * 删除指定行数据
   * 如果传 row 则删除一行
   * 如果传 rows 则删除多行
   */
  _remove: function _remove(rows) {
    var _this67 = this;
    var afterFullData = this.afterFullData, scrollYLoad = this.scrollYLoad, _this$selectConfig3 = this.selectConfig, selectConfig = _this$selectConfig3 === void 0 ? {} : _this$selectConfig3;
    var selection = this.selection, tableFullData = this.tableFullData, treeConfig = this.treeConfig, _this$tableSourceData2 = this.tableSourceData, tableSourceData = _this$tableSourceData2 === void 0 ? [] : _this$tableSourceData2;
    var _this$editStore = this.editStore, insertList = _this$editStore.insertList, removeList = _this$editStore.removeList;
    var checkField = selectConfig.checkField;
    var nowData = afterFullData;
    var rest = [];
    var rowsOld = rows;
    var inArr = function inArr2(row3, rows2) {
      return ~rows2.indexOf(row3);
    };
    if (treeConfig) {
      throw new Error(error("ui.grid.error.treeRemove"));
    }
    if (!rowsOld) {
      rows = tableFullData;
    }
    if (rowsOld && !isArray(rowsOld)) {
      rows = [rowsOld];
    }
    for (var i = 0; i < rows.length; i++) {
      var row2 = rows[i];
      if (this.hasRowInsert(row2))
        continue;
      removeList.push(row2);
    }
    if (!checkField) {
      remove_default(selection, function(row3) {
        return inArr(row3, rows);
      });
    }
    if (tableFullData === rows) {
      rows = tableFullData.slice(0);
      tableFullData.length = 0;
      nowData.length = 0;
    } else {
      rest = remove_default(tableFullData, function(row3) {
        return inArr(row3, rows);
      });
      remove_default(nowData, function(row3) {
        return inArr(row3, rows);
      });
    }
    remove_default(tableSourceData, function(row3) {
      return find_default(insertList, function(r) {
        return getRowid(_this67, r) === getRowid(_this67, row3);
      }) && find_default(rows, function(r) {
        return getRowid(_this67, r) === getRowid(_this67, row3);
      });
    });
    remove_default(insertList, function(row3) {
      return inArr(row3, rows);
    });
    this.updateCache(true);
    this.handleTableData(true);
    this.checkSelectionStatus();
    if (scrollYLoad) {
      this.updateScrollYSpace();
    }
    var res = {
      row: rows && rows.length ? rows[rows.length - 1] : null,
      rows: rest
    };
    return this.$nextTick().then(function() {
      _this67.recalculate();
      return res;
    });
  },
  /**
   * 删除选中数据
   */
  _removeSelecteds: function _removeSelecteds() {
    var _this68 = this;
    var selectRecords = this.getSelectRecords(true);
    var callback = function callback2(params) {
      _this68.clearSelection();
      return params;
    };
    return this.remove(selectRecords).then(callback);
  },
  _revert: function _revert() {
    warn$1("ui.grid.error.delRevert");
    return this.revertData.apply(this, arguments);
  },
  /**
   * 对数据进行还原
   * 如果不传任何参数，则还原整个表格；
   * 如果传row则还原一行；
   * 如果传rows则还原多行；
   * 如果还额外传了field则还原指定单元格。
   */
  _revertData: function _revertData(rows, field) {
    var _this69 = this;
    var tableSourceData = this.tableSourceData, tableSynchData = this.tableSynchData;
    if (arguments.length && rows && !isArray(rows)) {
      rows = [rows];
    }
    if (!arguments.length) {
      rows = tableSynchData || [];
    }
    var _loop2 = function _loop22() {
      var row2 = rows[i];
      var oRow = find_default(tableSourceData, function(item) {
        return getRowid(_this69, row2) === getRowid(_this69, item);
      });
      if (oRow && row2) {
        if (field) {
          set_default(row2, field, get_default(oRow, field));
        } else {
          destructuring_default(row2, oRow);
        }
      }
    };
    for (var i = 0; i < rows.length; i++) {
      _loop2();
    }
    if (arguments.length) {
      return this.$nextTick();
    }
    return this.reloadData(tableSynchData);
  },
  /**
   * 获取表格操作数据集
   */
  _getRecordset: function _getRecordset() {
    var res = {};
    res.insertRecords = this.getInsertRecords();
    res.removeRecords = this.getRemoveRecords();
    res.updateRecords = this.getUpdateRecords();
    return res;
  },
  /**
   * 获取删除数据列表
   */
  _getRemoveRecords: function _getRemoveRecords() {
    return this.editStore.removeList;
  },
  /**
   * 获取新增数据列表
   */
  _getInsertRecords: function _getInsertRecords() {
    return this.editStore.insertList;
  },
  /**
   * 获取更新数据列表
   * 只精准匹配row的更改。如果是树表格，子节点更改状态不会影响父节点的更新状态
   */
  _getUpdateRecords: function _getUpdateRecords() {
    var _this70 = this;
    var tableFullData = this.tableFullData, treeConfig = this.treeConfig;
    var handler6 = function handler7(row2) {
      return !_this70.isTemporaryRow(row2) && _this70.hasRowChange(row2);
    };
    var updateRecords = treeConfig ? filterTree_default(tableFullData, handler6, treeConfig) : tableFullData.filter(handler6);
    return updateRecords;
  },
  /**
   * 处理激活编辑
   */
  handleActived: function handleActived(params, event) {
    var _this71 = this;
    return _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
      var editConfig, editStore, tableColumn3, cell, column, row2, editor, actived, isActiveCell, type, canActive, args;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1)
          switch (_context.prev = _context.next) {
            case 0:
              editConfig = _this71.editConfig, editStore = _this71.editStore, tableColumn3 = _this71.tableColumn;
              cell = params.cell, column = params.column, row2 = params.row;
              editor = column.editor;
              actived = editStore.actived;
              isActiveCell = handleActivedCheckCell({
                actived,
                column,
                editConfig,
                row: row2
              });
              if (!(editor && cell && isActiveCell)) {
                _context.next = 15;
                break;
              }
              type = "edit-disabled";
              _context.next = 9;
              return handleActivedCanActive({
                editConfig,
                params
              });
            case 9:
              canActive = _context.sent;
              args = {
                _vm: _this71,
                actived,
                canActive,
                cell,
                column,
                editConfig
              };
              Object.assign(args, {
                event,
                params,
                row: row2,
                tableColumn: tableColumn3,
                type
              });
              type = handleActivedDoActive(args);
              handleActivedClearActive({
                _vm: _this71,
                canActive,
                event
              });
              emitEvent$1(_this71, type, [params, event]);
            case 15:
              handleActivedTryActive({
                _vm: _this71,
                actived,
                cell,
                column,
                editor,
                event,
                isActiveCell,
                params,
                row: row2
              });
              return _context.abrupt("return", _this71.$nextTick());
            case 17:
            case "end":
              return _context.stop();
          }
      }, _callee);
    }))();
  },
  _getColumnModel: function _getColumnModel(row2, column) {
    var model = column.model, editor = column.editor;
    if (editor) {
      model.value = getCellValue(row2, column);
      model.update = false;
    }
  },
  _setColumnModel: function _setColumnModel(row2, column) {
    var model = column.model, editor = column.editor;
    if (editor && model.update) {
      setCellValue(row2, column, model.value);
      model.update = false;
      model.value = null;
    }
  },
  _getActiveRow: function _getActiveRow() {
    var $el = this.$el, editStore = this.editStore, tableData = this.tableData;
    var actived = editStore.actived;
    var args = actived.args, row2 = actived.row;
    var length = $el.querySelectorAll(".tiny-grid-body__column.col__actived").length;
    return args && ~tableData.indexOf(row2) && length ? _extends({}, args) : null;
  },
  /**
   * 清除已激活的编辑
   */
  _clearActived: function _clearActived(event) {
    var _this72 = this;
    var _this$editConfig2 = this.editConfig, editConfig = _this$editConfig2 === void 0 ? {} : _this$editConfig2, editStore = this.editStore, tableColumn3 = this.tableColumn;
    var actived = editStore.actived;
    var args = actived.args, column = actived.column, row2 = actived.row;
    var isActived = row2 || column;
    if (isActived && editConfig.mode === "row") {
      tableColumn3.forEach(function(column22) {
        return _this72._setColumnModel(row2, column22);
      });
    }
    if (isActived && editConfig.mode !== "row") {
      this._setColumnModel(row2, column);
    }
    if (isActived) {
      var _editor$attrs;
      this.updateFooter();
      var row22 = args.row, column2 = args.column;
      var _ref199 = column2 || {}, editor = _ref199.editor;
      if ((editor == null ? void 0 : editor.component) === "input" && (editor == null ? void 0 : (_editor$attrs = editor.attrs) == null ? void 0 : _editor$attrs.type) === "number") {
        row22[column2.property] = +row22[column2.property];
      }
      emitEvent$1(this, "edit-closed", [args, event]);
    }
    actived.args = null;
    actived.column = null;
    actived.row = null;
    return this.clearValidate().then(this.recalculate);
  },
  _hasActiveRow: function _hasActiveRow(row2) {
    return this.editStore.actived.row === row2;
  },
  /**
   * 处理聚焦
   */
  handleFocus: function handleFocus(params) {
    var cell = params.cell, column = params.column;
    var editor = column.editor;
    if (!editor) {
      return;
    }
    var inputElem;
    var compRender = Renderer$1.get(editor.component);
    var autofocus = editor.autofocus, autoselect = editor.autoselect, focusDelay = editor.focusDelay;
    var handler6 = function handler7() {
      if (autofocus) {
        inputElem = cell.querySelector(autofocus);
      }
      var isAutofocus = compRender && compRender.autofocus;
      if (isAutofocus && !inputElem) {
        inputElem = cell.querySelector(isAutofocus);
      }
      if (!inputElem) {
        return;
      }
      var type = inputElem.type;
      inputElem.type = "text";
      inputElem.selectionEnd = inputElem.value.length;
      inputElem.selectionStart = inputElem.selectionEnd;
      inputElem.type = type;
      inputElem[autoselect ? "select" : "focus"]();
      if (browser_default.name !== "ie") {
        return;
      }
      var textRange = inputElem.createTextRange();
      textRange.collapse(false);
      textRange.select();
    };
    setTimeout(handler6, focusDelay || 50);
  },
  /**
   * 激活单元格编辑
   */
  _setActiveCell,
  /**
   * 激活行编辑
   */
  _setActiveRow: function _setActiveRow(row2) {
    var editColumn = find_default(this.visibleColumn, function(column) {
      return column.editor;
    });
    return this.setActiveCell(row2, editColumn.property);
  },
  /**
   * 只对trigger为dblclick有效，选中单元格
   */
  _setSelectCell: function _setSelectCell(row2, field) {
    var _this73 = this;
    var editConfig = this.editConfig, tableData = this.tableData, visibleColumn = this.visibleColumn;
    if (!row2 || !field || editConfig.trigger === "manual") {
      return this.$nextTick();
    }
    var column = find_default(visibleColumn, function(column2) {
      return column2.property === field;
    });
    var rowIndex = tableData.indexOf(row2);
    if (!~rowIndex || !column) {
      return this.$nextTick();
    }
    var next2 = function next22(cell) {
      var columnIndex = visibleColumn.indexOf(column);
      var params = {
        row: row2,
        rowIndex,
        column,
        columnIndex,
        cell
      };
      _this73.handleSelected(params, {});
    };
    getCell(this, {
      row: row2,
      rowIndex,
      column
    }).then(next2);
    return this.$nextTick();
  },
  updateSelectedCls: function updateSelectedCls(clear2) {
    var editStore = this.editStore, elemStore = this.elemStore, _this$mouseConfig3 = this.mouseConfig, mouseConfig = _this$mouseConfig3 === void 0 ? {} : _this$mouseConfig3;
    var _editStore$selected = editStore.selected, column = _editStore$selected.column, row2 = _editStore$selected.row;
    clear2 && this.clearSelected(true);
    if (!mouseConfig.selected || !row2 || !column) {
      return;
    }
    var listElem = elemStore["main-body-list"];
    var rowid2 = getRowid(this, row2);
    var trElem = listElem.querySelector('[data-rowid="' + rowid2 + '"]');
    if (!trElem) {
      return;
    }
    addClass(trElem.querySelector("." + column.id), "col__selected");
  },
  /**
   * 处理选中源
   */
  handleSelected: function handleSelected(params, event) {
    var _this74 = this;
    var editConfig = this.editConfig, editStore = this.editStore, elemStore = this.elemStore, _this$mouseConfig4 = this.mouseConfig, mouseConfig = _this$mouseConfig4 === void 0 ? {} : _this$mouseConfig4;
    var actived = editStore.actived, selected = editStore.selected;
    var _ref200 = params || {}, cell = _ref200.cell, column = _ref200.column, row2 = _ref200.row;
    var selectMethod = function selectMethod2() {
      if (selected.row === row2 && selected.column === column || actived.row === row2 && (editConfig.mode !== "cell" || actived.column === column)) {
        return _this74.$nextTick();
      }
      if (_this74.keyboardConfig || _this74.mouseConfig) {
        _this74.clearChecked(event);
        _this74.clearIndexChecked();
        _this74.clearHeaderChecked();
        _this74.clearSelected(event);
      }
      _this74.clearActived(event);
      selected.args = params;
      selected.row = row2;
      selected.column = column;
      _this74.updateSelectedCls();
      if (!mouseConfig.checked) {
        return _this74.$nextTick();
      }
      var headerElem = elemStore["main-header-list"];
      _this74.handleChecked([[cell]]);
      if (!headerElem) {
        return _this74.$nextTick();
      }
      _this74.handleHeaderChecked([[headerElem.querySelector("." + (column && column.id))]]);
      _this74.handleIndexChecked([[cell && cell.parentNode && cell.parentNode.querySelector(".col__index")]]);
      return _this74.$nextTick();
    };
    selectMethod = debounce_default(20, selectMethod);
    return selectMethod();
  }
};
var Edit = {
  install: function install2(Table2) {
    GridAdapter._edit = 1;
    Object.assign(Table2.methods, Methods$c);
  }
};
var Export = {
  install: function install22(Table2) {
    GridAdapter._export = 1;
    Object.assign(Table2.methods, export_default);
  }
};
function findLeft(params) {
  var checkColumn = params.checkColumn, columnIndex = params.columnIndex, isLeft = params.isLeft, rowIndex = params.rowIndex, tableData = params.tableData;
  var targetColumn = params.targetColumn, targetColumnIndex = params.targetColumnIndex, targetRow = params.targetRow, targetRowIndex = params.targetRowIndex, visibleColumn = params.visibleColumn;
  if (!isLeft) {
    return {
      targetColumn,
      targetColumnIndex,
      targetRow,
      targetRowIndex
    };
  }
  for (var _index3 = columnIndex - 1; _index3 >= 0; _index3--) {
    if (checkColumn(visibleColumn[_index3])) {
      targetColumnIndex = _index3;
      targetColumn = visibleColumn[_index3];
      break;
    }
  }
  if (targetColumn || rowIndex <= 0) {
    return {
      targetColumn,
      targetColumnIndex,
      targetRow,
      targetRowIndex
    };
  }
  targetRowIndex = rowIndex - 1;
  targetRow = tableData[targetRowIndex];
  for (var _index4 = visibleColumn.length - 1; _index4 >= 0; _index4--) {
    if (checkColumn(visibleColumn[_index4])) {
      targetColumnIndex = _index4;
      targetColumn = visibleColumn[_index4];
      break;
    }
  }
  return {
    targetColumn,
    targetColumnIndex,
    targetRow,
    targetRowIndex
  };
}
function findRight(params) {
  var checkColumn = params.checkColumn, columnIndex = params.columnIndex, isLeft = params.isLeft, rowIndex = params.rowIndex, tableData = params.tableData;
  var targetColumn = params.targetColumn, targetColumnIndex = params.targetColumnIndex, targetRow = params.targetRow, targetRowIndex = params.targetRowIndex, visibleColumn = params.visibleColumn;
  if (isLeft) {
    return {
      targetColumn,
      targetColumnIndex,
      targetRow,
      targetRowIndex
    };
  }
  for (var _index5 = columnIndex + 1; _index5 < visibleColumn.length; _index5++) {
    if (checkColumn(visibleColumn[_index5])) {
      targetColumnIndex = _index5;
      targetColumn = visibleColumn[_index5];
      break;
    }
  }
  if (targetColumn || rowIndex >= tableData.length - 1) {
    return {
      targetColumn,
      targetColumnIndex,
      targetRow,
      targetRowIndex
    };
  }
  targetRowIndex = rowIndex + 1;
  targetRow = tableData[targetRowIndex];
  for (var _index6 = 0; _index6 < visibleColumn.length; _index6++) {
    if (checkColumn(visibleColumn[_index6])) {
      targetColumnIndex = _index6;
      targetColumn = visibleColumn[_index6];
      break;
    }
  }
  return {
    targetColumn,
    targetColumnIndex,
    targetRow,
    targetRowIndex
  };
}
function processTarget(args1) {
  var _vm = args1._vm, args = args1.args, edit = args1.edit, editConfig = args1.editConfig, event = args1.event, isLeft = args1.isLeft, params = args1.params, rowIndex = args1.rowIndex;
  var targetColumn = args1.targetColumn, targetColumnIndex = args1.targetColumnIndex, targetRow = args1.targetRow, targetRowIndex = args1.targetRowIndex;
  if (targetColumn) {
    if (targetRow) {
      params.rowIndex = targetRowIndex;
      params.row = targetRow;
    } else {
      params.rowIndex = rowIndex;
    }
    params.columnIndex = targetColumnIndex;
    params.column = targetColumn;
    getCell(_vm, params).then(function(resCell) {
      params.cell = resCell;
      if (editConfig) {
        if (editConfig.trigger === "click" || editConfig.trigger === "dblclick") {
          if (editConfig.mode === "row" || edit) {
            _vm.handleActived(params, event);
          } else {
            _vm.handleSelected(params, event);
            _vm.scrollToRow(params.row, params.column, false, {
              isLeftArrow: isLeft,
              isRightArrow: !isLeft,
              from: args.column
            });
          }
        }
      }
    });
  }
}
function onCellMousedownGridEl(args) {
  var _vm = args._vm, bodyList = args.bodyList, cell = args.cell, cellFirstElementChild = args.cellFirstElementChild, cellLastElementChild = args.cellLastElementChild, flag = args.flag, headStart = args.headStart, headerList = args.headerList, isIndex = args.isIndex, startCellNode = args.startCellNode, targetElem = args.targetElem;
  if (flag) {
    if (isIndex) {
      var firstCell = targetElem.parentNode.firstElementChild;
      _vm.handleChecked(getRowNodes(bodyList, getCellNodeIndex(firstCell.nextElementSibling), getCellNodeIndex(cellLastElementChild)));
      _vm.handleIndexChecked(getRowNodes(bodyList, getCellNodeIndex(firstCell), getCellNodeIndex(cell)));
    } else if (!hasClass(targetElem, "col__index")) {
      var _firstCell = targetElem.parentNode.firstElementChild;
      var colIndex = [].indexOf.call(targetElem.parentNode.children, targetElem);
      var head = headerList[0].children[colIndex];
      _vm.handleHeaderChecked(getRowNodes(headerList, getCellNodeIndex(head), getCellNodeIndex(headStart)));
      _vm.handleIndexChecked(getRowNodes(bodyList, getCellNodeIndex(_firstCell), getCellNodeIndex(cellFirstElementChild)));
      _vm.handleChecked(getRowNodes(bodyList, startCellNode, getCellNodeIndex(targetElem)));
    }
  }
}
function handleCellMousedownEvent(args1) {
  var $el = args1.$el, _vm = args1._vm, bodyList = args1.bodyList, cell = args1.cell, cellFirstElementChild = args1.cellFirstElementChild;
  var cellLastElementChild = args1.cellLastElementChild, headStart = args1.headStart, headerList = args1.headerList, isIndex = args1.isIndex, startCellNode = args1.startCellNode;
  var _vm$mouseConfig2 = _vm.mouseConfig, mouseConfig = _vm$mouseConfig2 === void 0 ? {} : _vm$mouseConfig2;
  var _ref201 = mouseConfig || {}, _ref201$updateInterva = _ref201.updateInterval, updateInterval = _ref201$updateInterva === void 0 ? 10 : _ref201$updateInterva;
  var oldMousemove = document.onmousemove;
  var oldMouseup = document.onmouseup;
  var updateEvent = function updateEvent2(event) {
    event.preventDefault();
    var _getEventTargetNode = getEventTargetNode(event, $el, "tiny-grid-body__column"), flag = _getEventTargetNode.flag, targetElem = _getEventTargetNode.targetElem;
    var args = {
      _vm,
      bodyList,
      cell,
      cellFirstElementChild,
      cellLastElementChild,
      flag
    };
    Object.assign(args, {
      headStart,
      headerList,
      isIndex,
      startCellNode,
      targetElem
    });
    onCellMousedownGridEl(args);
  };
  var updateEventThrot = throttle_default(updateInterval, false, updateEvent, true);
  document.onmousemove = updateEventThrot;
  document.onmouseup = function() {
    document.onmousemove = oldMousemove;
    document.onmouseup = oldMouseup;
  };
}
function onCellMousedownSelectEditable(args) {
  var _vm = args._vm, actived = args.actived, cell = args.cell, checked = args.checked, column = args.column, editConfig = args.editConfig;
  var event = args.event, isLeftBtn = args.isLeftBtn, mouseConfig = args.mouseConfig, params = args.params, row2 = args.row;
  if (editConfig && (actived.row !== row2 || !(editConfig.mode === "cell" && actived.column === column)) && !(isLeftBtn && mouseConfig.checked) && mouseConfig.selected && editConfig.trigger === "dblclick" && (!checked.rowNodes || !checked.rowNodes.some(function(list) {
    return ~list.indexOf(cell);
  }))) {
    _vm.handleSelected(params, event);
  }
}
function onCellMousedownSelect(_ref202) {
  var _vm = _ref202._vm, editConfig = _ref202.editConfig, event = _ref202.event, mouseConfig = _ref202.mouseConfig, params = _ref202.params;
  if (!editConfig && mouseConfig.selected) {
    _vm.handleSelected(params, event);
  }
}
function onCellMousedownIndexColumn(args) {
  var _vm = args._vm, bodyList = args.bodyList, cell = args.cell, cellLastElementChild = args.cellLastElementChild, event = args.event;
  var headerList = args.headerList, isIndex = args.isIndex, params = args.params, visibleColumn = args.visibleColumn;
  if (isIndex) {
    var firstCell = cell.parentNode.firstElementChild;
    params.columnIndex++;
    params.column = visibleColumn[params.columnIndex];
    params.cell = cell.nextElementSibling;
    _vm.handleSelected(params, event);
    _vm.handleChecked(getRowNodes(bodyList, getCellNodeIndex(firstCell.nextElementSibling), getCellNodeIndex(cellLastElementChild)));
    _vm.handleHeaderChecked([headerList[0].querySelectorAll(".tiny-grid-header__column:not(.col__index)")]);
    _vm.handleIndexChecked(getRowNodes(bodyList, getCellNodeIndex(firstCell), getCellNodeIndex(cell)));
  }
}
function onCellMousedownNotIndexColumn(_ref203) {
  var _vm = _ref203._vm, cell = _ref203.cell, column = _ref203.column, event = _ref203.event, headerList = _ref203.headerList, isIndex = _ref203.isIndex, params = _ref203.params;
  if (!isIndex) {
    var firstCell = cell.parentNode.firstElementChild;
    _vm.handleSelected(params, event);
    _vm.handleHeaderChecked([[headerList[0].querySelector("." + column.id)]]);
    _vm.handleIndexChecked([[firstCell]]);
  }
}
function handleHeaderCellMousedownEvent(_ref204) {
  var $el = _ref204.$el, _vm = _ref204._vm, bodyList = _ref204.bodyList, cell = _ref204.cell, headerList = _ref204.headerList, startCell = _ref204.startCell;
  var oldMousemove = document.onmousemove;
  var oldMouseup = document.onmouseup;
  var updateEvent = function updateEvent2(event) {
    event.preventDefault();
    var _getEventTargetNode2 = getEventTargetNode(event, $el, "tiny-grid-header__column"), flag = _getEventTargetNode2.flag, targetElem = _getEventTargetNode2.targetElem;
    if (!flag) {
      var tmp = getEventTargetNode(event, $el, "tiny-grid-body__column");
      flag = tmp.flag;
      targetElem = tmp.targetElem;
    }
    if (flag && !hasClass(targetElem, "col__index")) {
      var colIndex = [].concat(targetElem.parentNode.children).indexOf(targetElem);
      var lastCell = bodyList[bodyList.length - 1].children[colIndex];
      var headCell = headerList[0].children[colIndex];
      _vm.handleHeaderChecked(getRowNodes(headerList, getCellNodeIndex(headCell), getCellNodeIndex(cell)));
      _vm.handleChecked(getRowNodes(bodyList, getCellNodeIndex(startCell), getCellNodeIndex(lastCell)));
    }
  };
  var updateEventThrot = throttle_default(80, false, updateEvent, true);
  addClass($el, "tiny-grid-cell__checked");
  document.onmousemove = updateEventThrot;
  document.onmouseup = function() {
    removeClass($el, "tiny-grid-cell__checked");
    document.onmousemove = oldMousemove;
    document.onmouseup = oldMouseup;
  };
}
var removeCellClass = function removeCellClass2(bodyRef, clazz) {
  return arrayEach_default(bodyRef.$el.querySelectorAll("." + clazz), function(elem) {
    return removeClass(elem, clazz);
  });
};
var getCellIndex = function getCellIndex2(_ref205) {
  var cell = _ref205.cell, bodyList = _ref205.bodyList;
  var trElem = cell.parentNode;
  var cIndex = arrayIndexOf_default(trElem.children, cell);
  var rIndex = arrayIndexOf_default(bodyList, trElem);
  return {
    rIndex,
    cIndex
  };
};
var getModify = function getModify2(_ref206) {
  var offsetTop = _ref206.offsetTop, offsetLeft = _ref206.offsetLeft, cWidth = _ref206.cWidth, cHeight = _ref206.cHeight;
  var modifyDomStyle = function modifyDomStyle2(dom, styleOptions) {
    return dom && Object.assign(dom.style, styleOptions);
  };
  return function(top, right, bottom, left) {
    modifyDomStyle(top, {
      top: offsetTop + "px",
      left: offsetLeft + "px",
      width: cWidth + "px"
    });
    modifyDomStyle(right, {
      top: offsetTop + "px",
      left: offsetLeft + cWidth + "px",
      height: cHeight + "px"
    });
    modifyDomStyle(bottom, {
      top: offsetTop + cHeight + "px",
      left: offsetLeft + "px",
      width: cWidth + "px"
    });
    modifyDomStyle(left, {
      top: offsetTop + "px",
      left: offsetLeft + "px",
      height: cHeight + "px"
    });
  };
};
var Methods$b = {
  // Tab键移动处理
  moveTabSelected: function moveTabSelected(args, isLeft, event, edit) {
    var editConfig = this.editConfig, hasIndexColumn2 = this.hasIndexColumn, tableData = this.tableData, visibleColumn = this.visibleColumn;
    var params = _extends({}, args);
    var columnIndex = visibleColumn.indexOf(params.column);
    var rowIndex = tableData.indexOf(params.row);
    var _ref207 = {}, targetColumn = _ref207.targetColumn, targetColumnIndex = _ref207.targetColumnIndex, targetRow = _ref207.targetRow, targetRowIndex = _ref207.targetRowIndex;
    event.preventDefault();
    var checkColumn = function checkColumn2(column) {
      return !hasIndexColumn2(column) && (edit ? column.editor : true);
    };
    var args1 = {
      columnIndex,
      checkColumn,
      isLeft,
      tableData,
      rowIndex,
      targetColumn
    };
    Object.assign(args1, {
      targetRowIndex,
      targetColumnIndex,
      targetRow,
      visibleColumn
    });
    var ret = findLeft(args1);
    targetColumn = ret.targetColumn;
    targetColumnIndex = ret.targetColumnIndex;
    targetRow = ret.targetRow;
    targetRowIndex = ret.targetRowIndex;
    args1 = {
      checkColumn,
      columnIndex,
      isLeft,
      rowIndex,
      tableData,
      targetColumn
    };
    Object.assign(args1, {
      targetColumnIndex,
      targetRow,
      targetRowIndex,
      visibleColumn
    });
    ret = findRight(args1);
    targetColumn = ret.targetColumn;
    targetColumnIndex = ret.targetColumnIndex;
    targetRow = ret.targetRow;
    targetRowIndex = ret.targetRowIndex;
    args1 = {
      _vm: this,
      args,
      edit,
      editConfig,
      event,
      isLeft,
      params,
      rowIndex
    };
    Object.assign(args1, {
      targetColumn,
      targetColumnIndex,
      targetRow,
      targetRowIndex
    });
    processTarget(args1);
  },
  // 当前行方向键移动处理
  moveCurrentRow: function moveCurrentRow(isUpArrow, isDwArrow, event) {
    var _this75 = this;
    var afterFullData = this.afterFullData, currentRow = this.currentRow, treeConfig = this.treeConfig;
    var targetRow;
    event.preventDefault();
    if (treeConfig) {
      var _findTree2 = findTree_default(afterFullData, function(row2) {
        return row2 === currentRow;
      }, treeConfig), curIndex = _findTree2.index, neighbors = _findTree2.items;
      if (isUpArrow && curIndex > 0) {
        targetRow = neighbors[curIndex - 1];
      } else if (isDwArrow && curIndex < neighbors.length - 1) {
        targetRow = neighbors[curIndex + 1];
      }
    } else {
      var _curIndex = afterFullData.indexOf(currentRow);
      if (isUpArrow && _curIndex > 0) {
        targetRow = afterFullData[_curIndex - 1];
      } else if (isDwArrow && _curIndex < afterFullData.length - 1) {
        targetRow = afterFullData[_curIndex + 1];
      }
    }
    if (targetRow) {
      this.scrollToRow(targetRow).then(function() {
        return _this75.triggerCurrentRowEvent(event, {
          $table: _this75,
          row: targetRow
        });
      });
    }
  },
  // 可编辑方向键移动处理
  moveSelected: function moveSelected(_ref208) {
    var _this76 = this;
    var args = _ref208.args, isLeftArrow = _ref208.isLeftArrow, isUpArrow = _ref208.isUpArrow, isRightArrow = _ref208.isRightArrow, isDownArrow = _ref208.isDownArrow, event = _ref208.event;
    var hasIndexColumn2 = this.hasIndexColumn, visibleColumn = this.tableColumn, tableData = this.tableFullData;
    var params = _extends({}, args);
    var column = params.column;
    var columnIndex = visibleColumn.indexOf(column);
    event.preventDefault();
    if (isUpArrow && params.rowIndex) {
      params.row = tableData[--params.rowIndex];
    } else if (isDownArrow && params.rowIndex < tableData.length - 1) {
      params.row = tableData[++params.rowIndex];
    } else if (isLeftArrow && columnIndex) {
      for (var pos = columnIndex - 1; pos >= 0; pos--) {
        if (!hasIndexColumn2(visibleColumn[pos])) {
          params.columnIndex = pos;
          params.column = visibleColumn[pos];
          break;
        }
      }
    } else if (isRightArrow) {
      for (var _pos = columnIndex + 1; _pos < visibleColumn.length; _pos++) {
        if (!hasIndexColumn2(visibleColumn[_pos])) {
          params.columnIndex = _pos;
          params.column = visibleColumn[_pos];
          break;
        }
      }
    }
    getCell(this, params).then(function(resCell) {
      params.cell = resCell;
      _this76.handleSelected(params, event);
      _this76.scrollToRow(params.row, params.column, false, {
        isLeftArrow,
        isRightArrow,
        from: column
      });
    });
  },
  // 表头按下事件
  triggerHeaderCellMousedownEvent: function triggerHeaderCellMousedownEvent(event, params) {
    var _this77 = this;
    var $el = this.$el, elemStore = this.elemStore, _this$mouseConfig5 = this.mouseConfig, mouseConfig = _this$mouseConfig5 === void 0 ? {} : _this$mouseConfig5, tableData = this.tableData;
    var headerList = elemStore["main-header-list"].children;
    var bodyList = elemStore["main-body-list"].children;
    var cell = params.cell;
    var column = params.column;
    var isIndex = column.type === "index";
    var startCell = bodyList[0].querySelector("." + column.id);
    var button = event.button;
    var isLeftBtn = button === 0;
    if (!isLeftBtn || !mouseConfig.checked) {
      return;
    }
    if (isIndex) {
      this.handleAllChecked(event);
      this.closeMenu();
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.clearSelected(event);
    this.clearHeaderChecked();
    this.clearIndexChecked();
    handleHeaderCellMousedownEvent({
      $el,
      _vm: this,
      bodyList,
      cell,
      headerList,
      startCell
    });
    this.handleHeaderChecked([[cell]]);
    if (!bodyList.length) {
      this.closeMenu();
      return;
    }
    var firstTr = bodyList[0];
    var lastTr = bodyList[bodyList.length - 1];
    var firstCell = firstTr.querySelector(".col__index");
    var lastCell = lastTr.querySelector("." + column.id);
    params.rowIndex = 0;
    params.row = tableData[0];
    getCell(this, params).then(function(cellRes) {
      params.cell = cellRes;
      _this77.handleSelected(params, event);
      var rowNodes = getRowNodes(bodyList, getCellNodeIndex(firstCell), getCellNodeIndex(lastTr.querySelector(".col__index")));
      _this77.handleIndexChecked(rowNodes);
      _this77.handleChecked(getRowNodes(bodyList, getCellNodeIndex(startCell), getCellNodeIndex(lastCell)));
    });
    this.closeMenu();
  },
  // 单元格按下事件
  triggerCellMousedownEvent: function triggerCellMousedownEvent(event, params) {
    var $el = this.$el, editConfig = this.editConfig, editStore = this.editStore, elemStore = this.elemStore, _this$mouseConfig6 = this.mouseConfig, mouseConfig = _this$mouseConfig6 === void 0 ? {} : _this$mouseConfig6, visibleColumn = this.visibleColumn;
    var actived = editStore.actived, checked = editStore.checked;
    var button = event.button;
    var cell = params.cell, column = params.column, row2 = params.row;
    var isLeftBtn = button === 0;
    var args;
    if (editConfig && (actived.row !== row2 || !(editConfig.mode === "cell" && actived.column === column)) && isLeftBtn && mouseConfig.checked) {
      event.preventDefault();
      event.stopPropagation();
      this.clearHeaderChecked();
      this.clearIndexChecked();
      var isIndex = column.type === "index";
      var startCellNode = getCellNodeIndex(cell);
      var headerList = elemStore["main-header-list"].children;
      var bodyList = elemStore["main-body-list"].children;
      var cellFirstElementChild = cell.parentNode.firstElementChild;
      var cellLastElementChild = cell.parentNode.lastElementChild;
      var colIndex = [].concat(cell.parentNode.children).indexOf(cell);
      var headStart = headerList[0].children[colIndex];
      args = {
        $el,
        _vm: this,
        bodyList,
        cell,
        cellFirstElementChild
      };
      Object.assign(args, {
        cellLastElementChild,
        headStart,
        headerList,
        isIndex,
        startCellNode
      });
      handleCellMousedownEvent(args);
      args = {
        _vm: this,
        bodyList,
        cell,
        cellLastElementChild
      };
      Object.assign(args, {
        event,
        headerList,
        isIndex,
        params,
        visibleColumn
      });
      onCellMousedownIndexColumn(args);
      onCellMousedownNotIndexColumn({
        _vm: this,
        cell,
        column,
        event,
        headerList,
        isIndex,
        params
      });
      this.closeFilter();
      this.closeMenu();
    }
    args = {
      _vm: this,
      actived,
      cell,
      checked,
      column,
      editConfig
    };
    Object.assign(args, {
      event,
      isLeftBtn,
      mouseConfig,
      params,
      row: row2
    });
    onCellMousedownSelectEditable(args);
    onCellMousedownSelect({
      _vm: this,
      editConfig,
      event,
      mouseConfig,
      params
    });
  },
  // 清除所选中源状态
  _clearSelected: function _clearSelected(keep) {
    var selected = this.editStore.selected, elemStore = this.elemStore;
    if (!keep) {
      selected.row = null;
      selected.column = null;
    }
    var bodyElem = elemStore["main-body-list"];
    var headerElem = elemStore["main-header-list"];
    if (bodyElem) {
      var elem = bodyElem.querySelector(".col__selected");
      removeClass(elem, "col__selected");
    }
    if (headerElem) {
      arrayEach_default(headerElem.querySelectorAll(".col__title-selected"), function(elem2) {
        return removeClass(elem2, "col__title-selected");
      });
    }
    return this.$nextTick();
  },
  // 清除所有选中状态
  _clearChecked: function _clearChecked() {
    var $refs = this.$refs, editStore = this.editStore, mouseConfig = this.mouseConfig;
    var checked = editStore.checked;
    if (!mouseConfig || !mouseConfig.checked) {
      return this.$nextTick();
    }
    Object.assign(checked, {
      columns: [],
      rows: [],
      tColumns: [],
      tRows: [],
      rowNodes: []
    });
    var tableBody = $refs.tableBody;
    tableBody.$refs.checkBorders.style.display = "none";
    removeCellClass(tableBody, "col__checked");
    return this.$nextTick();
  },
  _getMouseCheckeds: function _getMouseCheckeds() {
    var _this78 = this;
    var _this$editStore$check = this.editStore.checked.rowNodes, rowNodes = _this$editStore$check === void 0 ? [] : _this$editStore$check;
    var _ref209 = {}, _ref209$rows = _ref209.rows, rows = _ref209$rows === void 0 ? [] : _ref209$rows, _ref209$columns = _ref209.columns, columns2 = _ref209$columns === void 0 ? [] : _ref209$columns;
    var res = {
      rows,
      columns: columns2,
      rowNodes
    };
    if (rowNodes && rowNodes.length) {
      res.rows = rowNodes.map(function(arr) {
        return _this78.getRowNode(arr[0].parentNode).item;
      });
      res.columns = rowNodes[0].map(function(col) {
        return _this78.getColumnNode(col).item;
      });
    }
    return res;
  },
  _getMouseSelecteds: function _getMouseSelecteds() {
    var _this$editStore$selec = this.editStore.selected, args = _this$editStore$selec.args, column = _this$editStore$selec.column;
    if (!args || !column) {
      return null;
    }
    return extend(true, {}, args);
  },
  // 处理所有选中
  handleChecked: function handleChecked(rowNodes) {
    var $refs = this.$refs, mouseConfig = this.mouseConfig;
    if (!mouseConfig || !mouseConfig.checked) {
      return;
    }
    var _ref210 = {}, cHeight = _ref210.cHeight, cWidth = _ref210.cWidth, offsetLeft = _ref210.offsetLeft, offsetTop = _ref210.offsetTop;
    cWidth = cHeight = -2;
    offsetTop = offsetLeft = 0;
    this.clearChecked();
    arrayEach_default(rowNodes, function(rowNode, rowIndex) {
      arrayEach_default(rowNode, function(colNode, colIndex) {
        var firstRow = rowIndex === 0;
        var firstCol = colIndex === 0;
        if (firstRow) {
          if (firstCol) {
            offsetTop = colNode.offsetTop;
            offsetLeft = colNode.offsetLeft;
          }
          cWidth += colNode.offsetWidth;
        }
        if (firstCol) {
          cHeight += colNode.offsetHeight;
        }
        addClass(colNode, "col__checked");
      });
    });
    var modify = getModify({
      offsetTop,
      offsetLeft,
      cWidth,
      cHeight
    });
    var tableBody = $refs.tableBody;
    var _tableBody$$refs = tableBody.$refs, checkBorders = _tableBody$$refs.checkBorders, checkTop = _tableBody$$refs.checkTop, checkRight = _tableBody$$refs.checkRight, checkBottom = _tableBody$$refs.checkBottom, checkLeft = _tableBody$$refs.checkLeft;
    checkBorders.style.display = "none";
    modify(checkTop, checkRight, checkBottom, checkLeft);
    checkBorders.style.display = "block";
    this.editStore.checked.rowNodes = rowNodes;
  },
  handleAllChecked: function handleAllChecked(event) {
    var _this79 = this;
    var elemStore = this.elemStore, _this$mouseConfig7 = this.mouseConfig, mouseConfig = _this$mouseConfig7 === void 0 ? {} : _this$mouseConfig7, tableData = this.tableData, visibleColumn = this.visibleColumn;
    if (!mouseConfig.checked) {
      return;
    }
    event.preventDefault();
    var column = find_default(visibleColumn, function(col) {
      return col.type === "index";
    }) || visibleColumn[0];
    var selectorColumnId = "." + column.id;
    var headerListElem = elemStore["main-header-list"];
    var headerList = headerListElem.children;
    var cell = headerListElem.querySelector(selectorColumnId);
    var bodyList = elemStore["main-body-list"].children;
    var firstTrElem = bodyList[0];
    var firstCell = firstTrElem.querySelector(selectorColumnId);
    var lastTrElem = bodyList[bodyList.length - 1];
    var params = {
      $table: this,
      rowIndex: 0,
      row: tableData[0]
    };
    params.column = find_default(visibleColumn, function(col) {
      return col.property;
    });
    params.columnIndex = this.getColumnIndex(params.column);
    getCell(this, params).then(function(resCell) {
      params.cell = resCell;
      _this79.handleSelected(params, event);
      _this79.handleHeaderChecked(getRowNodes(headerList, getCellNodeIndex(cell.nextElementSibling), getCellNodeIndex(cell.parentNode.lastElementChild)));
      _this79.handleIndexChecked(getRowNodes(bodyList, getCellNodeIndex(firstCell), getCellNodeIndex(lastTrElem.querySelector(selectorColumnId))));
      _this79.handleChecked(getRowNodes(bodyList, getCellNodeIndex(firstCell.nextElementSibling), getCellNodeIndex(lastTrElem.lastElementChild)));
    });
  },
  handleIndexChecked: function handleIndexChecked(rowNodes) {
    this.clearIndexChecked();
    arrayEach_default(rowNodes, function(rowNode) {
      arrayEach_default(rowNode, function(colNode) {
        addClass(colNode, "col__index-checked");
      });
    });
    this.editStore.indexs.rowNodes = rowNodes;
  },
  _clearIndexChecked: function _clearIndexChecked() {
    var indexCheckeds = this.elemStore["main-body-list"].querySelectorAll(".col__index-checked");
    var eachHandler = function eachHandler2(colNode) {
      return removeClass(colNode, "col__index-checked");
    };
    arrayEach_default(indexCheckeds, eachHandler);
    Object.assign(this.editStore.indexs, {
      rowNodes: []
    });
    return this.$nextTick();
  },
  handleHeaderChecked: function handleHeaderChecked(rowNodes) {
    this.clearHeaderChecked();
    arrayEach_default(rowNodes, function(rowNode) {
      arrayEach_default(rowNode, function(colNode) {
        addClass(colNode, "col__title-checked");
      });
    });
    this.editStore.titles.rowNodes = rowNodes;
  },
  _clearHeaderChecked: function _clearHeaderChecked() {
    var headerElem = this.elemStore["main-header-list"];
    if (headerElem) {
      var eachHandler = function eachHandler2(colNode) {
        return removeClass(colNode, "col__title-checked");
      };
      arrayEach_default(headerElem.querySelectorAll(".col__title-checked"), eachHandler);
    }
    return this.$nextTick();
  },
  // 清空已复制的内容
  _clearCopyed: function _clearCopyed() {
    var $refs = this.$refs, editStore = this.editStore, keyboardConfig = this.keyboardConfig;
    var editStoreCopyed = editStore.copyed;
    if (!keyboardConfig || !keyboardConfig.isCut)
      return this.$nextTick();
    var tableBody = $refs.tableBody;
    editStoreCopyed.cut = false;
    editStoreCopyed.rows = [];
    editStoreCopyed.columns = [];
    tableBody.$refs.copyBorders.style.display = "none";
    removeCellClass(tableBody, "col__copyed");
    return this.$nextTick();
  },
  // 处理复制
  handleCopyed: function handleCopyed(cut) {
    var editStore = this.editStore, tableColumn3 = this.tableColumn, tableData = this.tableData;
    var copyed = editStore.copyed;
    var rowNodes = editStore.checked.rowNodes;
    var _ref211 = {}, cHeight = _ref211.cHeight, cWidth = _ref211.cWidth, offsetLeft = _ref211.offsetLeft, offsetTop = _ref211.offsetTop, _ref211$rows = _ref211.rows, rows = _ref211$rows === void 0 ? [] : _ref211$rows, _ref211$columns = _ref211.columns, columns2 = _ref211$columns === void 0 ? [] : _ref211$columns;
    cWidth = cHeight = -3;
    offsetTop = offsetLeft = 0;
    this.clearCopyed();
    if (!rowNodes)
      return;
    if (rowNodes.length) {
      var firstRows = rowNodes[0];
      var firstCell = firstRows[0];
      var firstRowsLength = firstRows.length;
      var _getCellNodeIndex = getCellNodeIndex(firstCell), rowIndex = _getCellNodeIndex.rowIndex, columnIndex = _getCellNodeIndex.columnIndex;
      columns2 = tableColumn3.slice(columnIndex, columnIndex + firstRowsLength);
      rows = tableData.slice(rowIndex, rowIndex + rowNodes.length);
    }
    arrayEach_default(rowNodes, function(rowNode, rowIndex2) {
      arrayEach_default(rowNode, function(colNode, colIndex) {
        var isTop = rowIndex2 === 0;
        var isLeft = colIndex === 0;
        if (isTop) {
          if (isLeft) {
            offsetTop = colNode.offsetTop;
            offsetLeft = colNode.offsetLeft;
          }
          cWidth += colNode.offsetWidth;
        }
        if (isLeft) {
          cHeight += colNode.offsetHeight;
        }
        addClass(colNode, "col__copyed");
      });
    });
    var modify = getModify({
      offsetTop,
      offsetLeft,
      cWidth,
      cHeight
    });
    var tableBody = this.$refs.tableBody;
    var _tableBody$$refs2 = tableBody.$refs, copyBorders = _tableBody$$refs2.copyBorders, copyTop = _tableBody$$refs2.copyTop, copyRight = _tableBody$$refs2.copyRight, copyBottom = _tableBody$$refs2.copyBottom, copyLeft = _tableBody$$refs2.copyLeft;
    modify(copyTop, copyRight, copyBottom, copyLeft);
    copyBorders.style.display = "block";
    copyed.cut = cut;
    copyed.columns = columns2;
    copyed.rows = rows;
    copyed.rowNodes = rowNodes;
  },
  // 处理粘贴
  handlePaste: function handlePaste() {
    var editStore = this.editStore, elemStore = this.elemStore, tableData = this.tableData, visibleColumn = this.visibleColumn;
    var copyed = editStore.copyed, selected = editStore.selected;
    var columns2 = copyed.columns, cut = copyed.cut, rows = copyed.rows;
    if (!rows.length || !columns2.length || !selected.row || !selected.column)
      return;
    var _selected$args = selected.args, columnIndex = _selected$args.columnIndex, rowIndex = _selected$args.rowIndex;
    arrayEach_default(rows, function(row2, rIndex2) {
      var targetRow = tableData[rowIndex + rIndex2];
      if (targetRow) {
        arrayEach_default(columns2, function(column, cIndex2) {
          var targetColumn = visibleColumn[columnIndex + cIndex2];
          targetColumn && setCellValue(targetRow, targetColumn, getCellValue(row2, column));
          cut && setCellValue(row2, column, null);
        });
      }
    });
    cut && this.clearCopyed();
    var cell = selected.args.cell;
    var bodyList = elemStore["main-body-list"].children;
    var _getCellIndex = getCellIndex({
      cell,
      elemStore,
      bodyList
    }), rIndex = _getCellIndex.rIndex, cIndex = _getCellIndex.cIndex;
    var maxIndex = bodyList.length - 1;
    var curIndex = rIndex + rows.length - 1;
    var targetTrElem = bodyList[curIndex > maxIndex ? maxIndex : curIndex];
    maxIndex = targetTrElem.children.length - 1;
    curIndex = cIndex + columns2.length - 1;
    var targetCell = targetTrElem.children[curIndex > maxIndex ? maxIndex : curIndex];
    var targetCellNode = getCellNodeIndex(targetCell);
    var cellNode = getCellNodeIndex(cell);
    var rowNodes = getRowNodes(bodyList, cellNode, targetCellNode);
    this.handleChecked(rowNodes);
  },
  handleClearMouseChecked: function handleClearMouseChecked(event) {
    var $grid = this.$grid, $refs = this.$refs, autoClearMouseChecked = this.autoClearMouseChecked;
    var tableWrapper = $refs.tableWrapper, tooltip = $refs.tooltip, validTip = $refs.validTip;
    var equalOrContain = function equalOrContain2(elm, target) {
      return elm && (elm === target || elm.contains(target));
    };
    if (autoClearMouseChecked && !equalOrContain($grid.$el, event.target) && !equalOrContain(tableWrapper, event.target) && !equalOrContain(tooltip && tooltip.state.popperElm, event.target) && !equalOrContain(validTip && validTip.state.popperElm, event.target)) {
      this.clearChecked();
      this.clearSelected();
    }
  }
};
var Keyboard = {
  install: function install3(Table2) {
    GridAdapter._keyboard = 1;
    Object.assign(Table2.methods, Methods$b);
  }
};
function adjustParams(rows, cb, vaildDatas) {
  if (rows) {
    if (isFunction_default(rows)) {
      cb = rows;
    } else {
      vaildDatas = isArray(rows) ? rows : [rows];
    }
  }
  return {
    cb,
    vaildDatas
  };
}
var columnHandler = function columnHandler2(_ref212) {
  var _vm = _ref212._vm, colValidPromiseArr = _ref212.colValidPromiseArr, editRules = _ref212.editRules, isAll = _ref212.isAll, row2 = _ref212.row, validRest = _ref212.validRest;
  return function(column, columnIndex) {
    if (has_default(editRules, column.property)) {
      colValidPromiseArr.push(new Promise(function(resolve, reject) {
        _vm.validCellRules("all", row2, column).then(resolve).catch(function(_ref213) {
          var rule = _ref213.rule, rules = _ref213.rules;
          var rowIndex = _vm.getRowIndex(row2);
          var rest = {
            rule,
            rules,
            rowIndex,
            row: row2,
            columnIndex,
            column,
            $table: _vm
          };
          if (isAll) {
            if (!validRest[column.property]) {
              validRest[column.property] = [];
            }
            validRest[column.property].push(rest);
            resolve();
          }
          reject(rest);
        });
      }));
    }
  };
};
function validTree(_ref214) {
  var treeConfig = _ref214.treeConfig, handleVaild = _ref214.handleVaild, hasTreeExpand2 = _ref214.hasTreeExpand, vaildDatas = _ref214.vaildDatas, treeOpts = _ref214.treeOpts;
  if (treeConfig.validHidden === false) {
    var recurValid = function recurValid2(row2) {
      var children = row2[treeConfig.children || "children"];
      handleVaild(row2);
      if (hasTreeExpand2(row2) && children && children.length) {
        children.forEach(recurValid2);
      }
    };
    vaildDatas.forEach(recurValid);
  } else {
    eachTree_default(vaildDatas, handleVaild, treeOpts);
  }
}
var realValid = function realValid2(_ref215) {
  var _vm = _ref215._vm, editRules = _ref215.editRules, isAll = _ref215.isAll, validRest = _ref215.validRest, treeConfig = _ref215.treeConfig, hasTreeExpand2 = _ref215.hasTreeExpand, vaildDatas = _ref215.vaildDatas, treeOpts = _ref215.treeOpts;
  var rowValids = [];
  var columns2 = _vm.getColumns();
  var handleVaild = function handleVaild2(row2) {
    var colValidPromiseArr = [];
    columns2.forEach(columnHandler({
      _vm,
      colValidPromiseArr,
      editRules,
      isAll,
      row: row2,
      validRest
    }));
    rowValids.push(Promise.all(colValidPromiseArr));
  };
  if (treeConfig) {
    validTree({
      treeConfig,
      handleVaild,
      hasTreeExpand: hasTreeExpand2,
      vaildDatas,
      treeOpts
    });
  } else {
    vaildDatas.forEach(handleVaild);
  }
  return rowValids;
};
var Rule = /* @__PURE__ */ function() {
  function Rule2(rule) {
    Object.assign(this, {
      $options: rule,
      max: rule.min,
      maxWidth: rule.maxWidth,
      min: rule.min,
      pattern: rule.pattern,
      required: rule.required,
      trigger: rule.trigger,
      type: rule.type,
      validator: rule.validator
    });
  }
  return _createClass(Rule2, [{
    key: "message",
    get: function get2() {
      return getFuncText(this.$options.message);
    }
  }]);
}();
var onRejected = function onRejected2(opt, _this) {
  var isAll = opt.isAll, validRest = opt.validRest, cb = opt.cb, afterFullData = opt.afterFullData, treeConfig = opt.treeConfig;
  return function(params) {
    var _ref216;
    var args = isAll ? validRest : (_ref216 = {}, _ref216[params.column.property] = params, _ref216);
    var funcFinish = function funcFinish2(args2, reject, resolve) {
      return function() {
        opt.status = false;
        cb && cb(opt.status, args2);
        cb ? resolve() : reject(args2);
      };
    };
    var funcPosAndFinish = function funcPosAndFinish2(params2, finish) {
      return function() {
        getCell(_this, params2).then(function(activeCell) {
          params2.cell = activeCell;
          _this.handleValidError(params2);
          finish();
        });
      };
    };
    var getLocatRow = function getLocatRow2(params2) {
      var row2 = params2.row;
      var rowIndex = afterFullData.indexOf(row2);
      return rowIndex > 0 ? afterFullData[rowIndex - 1] : row2;
    };
    return new Promise(function(resolve, reject) {
      var finish = funcFinish(args, reject, resolve);
      var posAndFinish = funcPosAndFinish(params, finish);
      var locatRow = getLocatRow(params);
      var isAutoPosFalse = _this.validOpts.autoPos === false;
      isAutoPosFalse && finish();
      !isAutoPosFalse && treeConfig && _this.scrollToTreeRow(locatRow).then(posAndFinish);
      !isAutoPosFalse && !treeConfig && _this.scrollToRow(locatRow, params.column, true).then(posAndFinish);
    });
  };
};
var Methods$a = {
  // 对表格数据进行校验
  _validate: function _validate(rows, cb) {
    return this.beginValidate(rows, cb);
  },
  // 与validate一致行为，区别就是会校验所有并返回所有不通过的列
  _fullValidate: function _fullValidate(rows, cb) {
    return this.beginValidate(rows, cb, true);
  },
  // 聚焦到校验通过的单元格并弹出校验错误提示
  handleValidError: function handleValidError(params) {
    var _this80 = this;
    var event = {
      type: "valid-error",
      trigger: "call"
    };
    this.handleActived(params, event).then(function() {
      return _this80.showValidTooltip(params);
    });
  },
  validatePromise: function validatePromise(row2, column, columnIndex, isAll, validRest) {
    var _this81 = this;
    function onrejected(_ref217) {
      var _vm = _ref217._vm, reject = _ref217.reject, resolve = _ref217.resolve;
      return function(_ref218) {
        var rule = _ref218.rule, rules = _ref218.rules;
        var rest = {
          $table: _vm,
          column,
          columnIndex,
          row: row2,
          rule,
          rules
        };
        rest.rowIndex = _vm.getRowIndex(row2);
        if (!isAll) {
          return reject(rest);
        }
        validRest[column.property] = validRest[column.property] || [];
        validRest[column.property].push(rest);
        return resolve();
      };
    }
    return new Promise(function(resolve, reject) {
      _this81.validCellRules("all", row2, column).then(resolve).catch(onrejected({
        _vm: _this81,
        reject,
        resolve
      }));
    });
  },
  /**
   * 对表格数据进行校验
   * 如果传 row 指定行记录，则只验证传入的行
   * 如果传 rows 为多行记录，则只验证传入的行
   * 如果只传 callback 否则默认验证整个表格数据
   * isAll: 是否全量校验，如果为true会校验所有并返回所有不通过的列
   * 返回 Promise 对象，或者使用回调方式
   */
  beginValidate: function beginValidate(rows, callback, isAll) {
    var afterFullData = this.afterFullData, editRules = this.editRules, hasTreeExpand2 = this.hasTreeExpand, treeConfig = this.treeConfig, treeOpts = this.treeOpts;
    var _ref219 = {}, _ref219$status = _ref219.status, status = _ref219$status === void 0 ? true : _ref219$status, _ref219$validRest = _ref219.validRest, validRest = _ref219$validRest === void 0 ? {} : _ref219$validRest;
    var _adjustParams = adjustParams(rows, callback, afterFullData), vaildDatas = _adjustParams.vaildDatas, cb = _adjustParams.cb;
    var opt = {
      isAll,
      validRest,
      cb,
      afterFullData,
      treeConfig,
      status
    };
    this.lastCallTime = Date.now();
    this.clearValidate();
    if (!editRules) {
      if (cb) {
        cb(opt.status);
      }
      return Promise.resolve(opt.status);
    }
    var validParams = {
      _vm: this,
      editRules,
      isAll,
      validRest,
      treeConfig,
      hasTreeExpand: hasTreeExpand2,
      vaildDatas,
      treeOpts
    };
    var rowValids = realValid(validParams);
    var onFulfilled = function onFulfilled2() {
      var ruleKeys = Object.keys(validRest);
      if (ruleKeys.length) {
        return Promise.reject(validRest[ruleKeys[0]][0]);
      }
      cb && cb(opt.status);
    };
    return Promise.all(rowValids).then(onFulfilled).catch(onRejected(opt, this));
  },
  hasCellRules: function hasCellRules(type, row2, _ref220) {
    var property2 = _ref220.property;
    if (!property2 || !this.editRules) {
      return false;
    }
    var rules = get_default(this.editRules, property2);
    var handler6 = function handler7(rule) {
      return type === "all" || !rule.trigger || type === rule.trigger;
    };
    rules = !Array.isArray(rules) && (isObject_default(rules) || isFunction_default(rules)) ? [rules] : rules;
    return rules && find_default(rules, handler6);
  },
  /**
   * 校验数据：
   * 按表格行顺序、列顺序依次校验（同步或异步）；
   * 根据校验规则的索引顺序依次校验，如果是异步则会等待校验完成才会继续校验下一列；
   * 如果校验失败，则触发回调或者Promise，结果返回一个Boolean值；
   * 如果是传回调方式这返回一个Boolean值和校验不通过列的错误消息；
   *
   * rule 配置：
   *  required为Boolean表示是否必填；
   *  max为Number表示最大长度；
   *  min为Number表示最小长度；
   *  validator为Function(rule, value, callback, {rules, row, column, rowIndex, columnIndex})进行自定义校验；
   *  trigger为blur|change表示触发方式（默认为空就行，除非特殊场景）；
   *  @param {'change' | 'all'} type 校验单元格的触发方式
   *  @param { IRow }  row 表格的行数据
   *  @param { IColumnConfig }  column 表格的行数据
   *  @param { any }  defaultValue 需要校验的默认值
   */
  validCellRules: function validCellRules(type, row2, column, defaultValue) {
    var _this82 = this;
    var editRules = this.editRules, rowId = this.rowId;
    var property2 = column.property;
    var _ref221 = {}, _ref221$descriptor = _ref221.descriptor, descriptor = _ref221$descriptor === void 0 ? {} : _ref221$descriptor, _ref221$model = _ref221.model, model = _ref221$model === void 0 ? {} : _ref221$model;
    if (property2 && editRules) {
      var rules = get_default(editRules, property2);
      var cellValue = isUndefined_default(defaultValue) ? get_default(row2, property2) : defaultValue;
      if (Array.isArray(rules)) {
        rules.forEach(function(rule, index232) {
          model[property2 + index232] = cellValue;
          descriptor[property2 + index232] = rule;
        });
      } else {
        model[property2] = cellValue;
        descriptor[property2] = rules;
      }
    }
    var _descriptor = extend(true, {}, descriptor);
    var validator5 = new validate_default(_descriptor, t);
    var executor = function executor2(resolve, reject) {
      var validArgs = {
        firstFields: true,
        first: true,
        custom: {
          row: row2,
          column
        }
      };
      var onRejected3 = function onRejected32(_ref222) {
        var fields = _ref222.fields;
        var cellErrors = Object.keys(fields).map(function(prop) {
          var rules2 = _descriptor[prop];
          _descriptor[prop] = !rules2.message ? Object.assign(rules2, {
            message: fields[prop][0].message
          }) : rules2;
          return new Rule(_descriptor[prop]);
        });
        reject({
          rules: cellErrors,
          rule: cellErrors[0]
        });
      };
      validator5.validate(model, validArgs).then(resolve).catch(onRejected3);
    };
    var onFulfilled = function onFulfilled2() {
      _this82.validatedMap[column.id + "-" + row2[rowId]] = false;
      return Promise.resolve();
    };
    var onRejected22 = function onRejected23(errors) {
      _this82.validatedMap[column.id + "-" + row2[rowId]] = true;
      return Promise.reject(errors);
    };
    return new Promise(executor).then(onFulfilled).catch(onRejected22);
  },
  _clearValidate: function _clearValidate() {
    Object.assign(this.validStore, {
      column: null,
      content: "",
      isArrow: false,
      row: null,
      rule: null,
      visible: false
    });
    this.clostValidTooltip(void 0);
    return this.$nextTick();
  },
  // 触发校验
  triggerValidate: function triggerValidate(type) {
    var _this83 = this;
    var editConfig = this.editConfig, editRules = this.editRules, editStore = this.editStore, validStore = this.validStore;
    var actived = editStore.actived;
    if (!actived.row || !editRules) {
      return Promise.resolve();
    }
    var _actived$args = actived.args, cell = _actived$args.cell, column = _actived$args.column, row2 = _actived$args.row;
    if (!this.hasCellRules(type, row2, column)) {
      return Promise.resolve();
    }
    var onfulfilled = function onfulfilled2() {
      editConfig.mode === "row" && validStore.visible && validStore.row === row2 && validStore.column === column && _this83.clearValidate();
    };
    var onrejected = function onrejected2(_ref223) {
      var rule = _ref223.rule;
      if (rule.trigger && type !== rule.trigger) {
        return Promise.resolve();
      }
      var rest = {
        cell,
        column,
        row: row2,
        rule
      };
      _this83.showValidTooltip(rest);
      return Promise.reject(rest);
    };
    return this.validCellRules(type, row2, column).then(onfulfilled).catch(onrejected);
  },
  // 弹出校验错误提示
  showValidTooltip: function showValidTooltip(params) {
    var _this84 = this;
    var $refs = this.$refs, height2 = this.height, tableData = this.tableData, validOpts2 = this.validOpts;
    var cell = params.cell, column = params.column, row2 = params.row, rule = params.rule;
    var content = rule.message;
    var validTip = $refs.validTip;
    var isMessageTooltip = validOpts2.isMessageTooltip, isMessageDefault = validOpts2.isMessageDefault, isMessageInline = validOpts2.isMessageInline;
    var showMsg = isMessageTooltip || isMessageDefault && !height2 && tableData.length < 2;
    this.$nextTick(function() {
      Object.assign(_this84.validStore, {
        row: row2,
        column,
        rule,
        content,
        visible: true
      });
      if (validTip && showMsg) {
        _this84.clostValidTooltip();
        _this84.validTipContent = content;
        validTip.state.referenceElm = cell;
        validTip.$refs.popper && (validTip.$refs.popper.style.display = "none");
        validTip.doDestroy();
        validTip.setExpectedState(true);
        _this84.activateTooltipValid(validTip);
      } else if (isMessageInline) {
        _this84.$nextTick(function() {
          return _this84.recalculate();
        });
      }
      emitEvent$1(_this84, "valid-error", [params]);
    });
  },
  // 关闭 validTip
  clostValidTooltip: function clostValidTooltip() {
    var validTip = this.$refs.validTip;
    if (validTip) {
      validTip.setExpectedState(false);
      validTip.handleClosePopper();
    }
    return this.$nextTick();
  }
};
var Validator = {
  install: function install4(Table2) {
    GridAdapter._valid = 1;
    Object.assign(Table2.methods, Methods$a);
  }
};
var Methods$9 = {
  bindResize: function bindResize() {
    var _this85 = this;
    var resizeObserver = new resize_default(function() {
      _this85.updateParentHeight();
      _this85.updateTableBodyHeight();
      _this85.recalculate();
    }, GlobalConfig$1.resizeInterval);
    var parentElem = this.getParentElem();
    parentElem && resizeObserver.observe(parentElem);
    this.$resize = resizeObserver;
  },
  unbindResize: function unbindResize() {
    var $resize = this.$resize;
    if ($resize) {
      $resize.disconnect();
    }
  }
};
var Resize = {
  install: function install5(Table2) {
    GridAdapter._resize = 1;
    Object.assign(Table2.methods, Methods$9);
  }
};
function renderNoSlotDropdowns(_ref224) {
  var $slots = _ref224.$slots, _vm = _ref224._vm, buttonBase = _ref224.buttonBase, loading = _ref224.loading, tableListeners = _ref224.tableListeners;
  var loadingVNode = [];
  if (loading) {
    loadingVNode = [h("i", {
      class: ["tiny-grid-button__loading-icon", GlobalConfig$1.icon.btnLoading]
    })];
  }
  return h("button", _extends({}, buttonBase, {
    on: objectMap_default(tableListeners, function(cb, type) {
      return function(event) {
        return _vm.$emit(type, event);
      };
    })
  }), loadingVNode.concat($slots.default.call(_vm)));
}
function renderHasSlotDropdowns(_ref225) {
  var _ref226;
  var $slots = _ref225.$slots, _vm = _ref225._vm, buttonBase = _ref225.buttonBase, tableListeners = _ref225.tableListeners, vSize5 = _ref225.vSize;
  return h("div", {
    class: ["tiny-grid-button__dropdown", (_ref226 = {}, _ref226["size__" + vSize5] = vSize5, _ref226)]
  }, [h("button", _extends({}, buttonBase, {
    on: _extends({
      mouseenter: _vm.mouseenterEvent,
      mouseleave: _vm.mouseleaveEvent
    }, objectMap_default(tableListeners, function(cb, type) {
      return function(event) {
        return _vm.$emit(type, event);
      };
    }))
  }), [h("span", $slots.default.call(_vm)), h("i", {
    class: "tiny-grid-button__dropdown-arrow " + GlobalConfig$1.icon.dropdownBottom
  })]), h("div", {
    class: "tiny-grid-button__dropdown-wrapper",
    on: {
      click: _vm.clickDropdownEvent,
      mouseenter: _vm.mouseenterEvent,
      mouseleave: _vm.mouseleaveEvent
    }
  }, $slots.dropdowns.call(_vm))]);
}
function getButtonBase(_ref227) {
  var _ref228;
  var disabled = _ref227.disabled, isText = _ref227.isText, loading = _ref227.loading, name = _ref227.name, type = _ref227.type, vSize5 = _ref227.vSize;
  var map2 = {
    isDisabled: "is__disabled",
    isLoading: "is__loading"
  };
  return {
    class: ["tiny-grid-button", "type__" + (isText ? type : "button"), (_ref228 = {}, _ref228["size__" + vSize5] = vSize5, _ref228["theme__" + type] = type && !isText, _ref228[map2.isDisabled] = disabled || loading, _ref228[map2.isLoading] = loading, _ref228)],
    attrs: {
      name,
      type: "button",
      disabled: disabled || loading
    }
  };
}
var Button = defineComponent({
  name: $prefix + "GridButton",
  inheritAttrs: false,
  props: {
    type: String,
    size: String,
    name: [String, Number],
    disabled: Boolean,
    loading: Boolean
  },
  computed: {
    vSize: function vSize4() {
      return this.size || this.$parent.size || this.$parent.vSize;
    }
  },
  render: function render17() {
    var disabled = this.disabled, loading = this.loading, name = this.name, $slots = this.slots, tableListeners = this.tableListeners, type = this.type, vSize5 = this.vSize;
    var isText = type === "text";
    var buttonBase = getButtonBase({
      disabled,
      isText,
      loading,
      name,
      type,
      vSize: vSize5
    });
    return $slots.dropdowns ? renderHasSlotDropdowns({
      $slots,
      _vm: this,
      buttonBase,
      tableListeners,
      vSize: vSize5
    }) : renderNoSlotDropdowns({
      $slots,
      _vm: this,
      buttonBase,
      loading,
      tableListeners
    });
  },
  methods: {
    clickDropdownEvent: function clickDropdownEvent(event) {
      var dropdownElem = event.currentTarget;
      var wrapperElem = dropdownElem.parentNode;
      var _getEventTargetNode3 = getEventTargetNode(event, dropdownElem, "tiny-grid-button"), flag = _getEventTargetNode3.flag, targetElem = _getEventTargetNode3.targetElem;
      if (flag) {
        wrapperElem.dataset.active = "N";
        removeClass(wrapperElem, "is__active");
        emitEvent$1(this, "dropdown-click", [{
          name: targetElem.getAttribute("name")
        }, event]);
      }
    },
    mouseenterEvent: function mouseenterEvent(event) {
      var dropdownElem = event.currentTarget;
      var wrapperElem = dropdownElem.parentNode;
      wrapperElem.dataset.active = "Y";
      addClass(wrapperElem, "is__active");
    },
    mouseleaveEvent: function mouseleaveEvent(event) {
      var dropdownElem = event.currentTarget;
      var wrapperElem = dropdownElem.parentNode;
      wrapperElem.dataset.active = "N";
      setTimeout(function() {
        if (wrapperElem.dataset.active !== "Y") {
          removeClass(wrapperElem, "is__active");
        }
      }, 300);
    }
  },
  setup: function setup92(props2, _ref229) {
    var slots = _ref229.slots, attrs = _ref229.attrs, listeners = _ref229.listeners;
    var tableListeners = getListeners(attrs, listeners);
    return {
      slots,
      tableListeners
    };
  }
});
$install(Button);
var Methods$8 = {
  /**
   * 初始化fetch-data配置项
   * @returns {object}
   */
  initFetchOption: function initFetchOption() {
    var _this$fetchData = this.fetchData, fetchData = _this$fetchData === void 0 ? {} : _this$fetchData, _this$dataset = this.dataset, dataset = _this$dataset === void 0 ? {} : _this$dataset;
    if (fetchData.api || dataset.source || dataset.value || dataset.api) {
      var _ref230 = fetchData || dataset.source || dataset.api || {}, loading = _ref230.loading, fields = _ref230.fields, api2 = _ref230.api;
      return {
        api: api2,
        dataset,
        fields,
        loading
      };
    }
  },
  handleFetch: function handleFetch(code, sortArg) {
    var _this86 = this;
    var pager = this.pager, sortData = this.sortData, filterData = this.filterData, pagerConfig = this.pagerConfig, fetchOption = this.fetchOption, fetchData = this.fetchData, dataset = this.dataset;
    if (this.isInitialLoading) {
      this.isInitialLoading = false;
    } else {
      this.columnAnchor && this.clearActiveAnchor();
    }
    if (code !== "prefetch") {
      this.clearRadioRow();
      this.resetScrollTop();
    }
    if (!fetchOption) {
      error("ui.grid.error.notQuery");
      return this.$nextTick();
    }
    var _ref231 = fetchData || dataset.source || dataset.api || {}, args = _ref231.args, loading = _ref231.loading;
    var field = sortData.field, order = sortData.order, prop = sortData.prop, property2 = sortData.property;
    var sortByData = {
      field,
      order,
      prop,
      property: property2
    };
    var params = _extends({
      $grid: this,
      sort: sortData,
      sortBy: sortByData,
      filters: filterData
    }, args);
    var search;
    this.tableLoading = loading;
    if (pagerConfig) {
      params.page = pagerConfig;
    }
    if (code === "reload") {
      if (pager || args.page) {
        pagerConfig.currentPage = 1;
      }
      this.sortData = params.sort = {};
      this.filterData = params.filters = [];
      this.pendingRecords = [];
      this.clearAll();
    }
    if (sortArg && sortArg.length > 0) {
      params.sortBy = sortArg;
    }
    if (fetchData && fetchData.api) {
      search = fetchData.api.apply(this, [params]);
    } else {
      search = getDataset({
        dataset,
        service: this.$service
      }, params);
    }
    return search.then(this.loadFetchData).catch(function(error2) {
      _this86.tableLoading = false;
      throw error2;
    });
  },
  clearActiveAnchor: function clearActiveAnchor() {
    var columnAnchor = this.columnAnchor, _this$columnAnchorPar = this.columnAnchorParams, columnAnchorParams2 = _this$columnAnchorPar === void 0 ? {} : _this$columnAnchorPar;
    var _columnAnchorParams$a = columnAnchorParams2.anchors, anchors = _columnAnchorParams$a === void 0 ? [] : _columnAnchorParams$a;
    if (!columnAnchor || anchors.length <= 0)
      return;
    anchors.forEach(function(anchor) {
      return anchor.active = false;
    });
  },
  loadFetchData: function loadFetchData(rest) {
    if (!rest) {
      this.tableData = [];
      this.tableLoading = false;
      return;
    }
    var _this$fetchOption$fie = this.fetchOption.fields, fields = _this$fetchOption$fie === void 0 ? {} : _this$fetchOption$fie, pagerConfig = this.pagerConfig, pagerSlot = this.pagerSlot;
    if (pagerConfig && !Array.isArray(rest)) {
      var _rest$result;
      var total2 = getObj(rest, fields.total || "page.total") || (rest == null ? void 0 : (_rest$result = rest.result) == null ? void 0 : _rest$result.length) || 0;
      var data8 = getObj(rest, fields.result || fields.data || "result") || [];
      this.tableData = data8;
      pagerConfig.total = total2;
      var setTotal2 = pagerSlot && pagerSlot.componentInstance.setTotal;
      setTotal2 && setTotal2(total2);
    } else {
      this.tableData = (fields.list ? getObj(rest, fields.list) : rest) || [];
    }
    this.tableLoading = false;
  }
};
var FetchData = {
  host: "grid",
  install: function install6(host) {
    Object.assign(host.methods, Methods$8);
  }
};
var Methods$7 = {
  // 初始化表格分页配置
  initPagerConfig: function initPagerConfig() {
    var $slots = this.$slots, fetchOption = this.fetchOption, _this$scrollLoad = this.scrollLoad, scrollLoad = _this$scrollLoad === void 0 ? {} : _this$scrollLoad;
    var pagerProps2 = {};
    if (fetchOption) {
      var pagerSlot = $slots.pager && $slots.pager[0];
      if (pagerSlot) {
        var componentOptions = pagerSlot.componentOptions, children = pagerSlot.children;
        if (componentOptions && !children) {
          this.pagerSlot = pagerSlot;
          pagerProps2 = componentOptions.propsData;
        }
      } else if (this.pager) {
        pagerProps2 = this.pager.attrs;
      }
      if (this.pager || $slots.pager || this.scrollLoad) {
        return Object.assign(this.tablePage, {
          pageSize: scrollLoad.pageSize
        }, pagerProps2);
      }
      return fetchOption.args && fetchOption.args.page;
    }
  },
  // 表格内置分页渲染器
  renderPager: function renderPager(_ref232) {
    var $slots = _ref232.$slots, _vm = _ref232._vm, loading = _ref232.loading, pager = _ref232.pager, pagerConfig = _ref232.pagerConfig, tableLoading = _ref232.tableLoading, vSize5 = _ref232.vSize;
    var res = null;
    var isThemeSaas3 = _vm.isThemeSaas, isModeMobileFirst2 = _vm.isModeMobileFirst, isViewGantt2 = _vm.isViewGantt, currentBreakpoint = _vm.currentBreakpoint, fetchData = _vm.fetchData;
    var style = {
      display: "none"
    };
    if (isThemeSaas3 && isModeMobileFirst2) {
      if (!isViewGantt2 || isViewGantt2 && currentBreakpoint !== "default") {
        style.display = "flex";
        style.justifyContent = "flex-end";
      }
      if (currentBreakpoint === "default") {
        style.justifyContent = "center";
      }
    } else {
      style.display = "block";
    }
    if ($slots.pager) {
      res = $slots.pager();
    } else if (pager) {
      pager.component = pager.component || (fetchData && fetchData.api ? Pager$1 : null);
      res = h(toRaw(pager.component), {
        props: _extends({
          size: vSize5,
          loading: loading || tableLoading,
          isBeforePageChange: _vm.isBeforePageChange || _vm.showSaveMsg,
          accurateJumper: _vm.autoLoad
        }, pagerConfig),
        on: {
          "size-change": _vm.pageSizeChange,
          "current-change": _vm.pageCurrentChange,
          "before-page-change": _vm.beforePageChangeHandler
        },
        ref: "pager",
        style
      });
    }
    return res;
  },
  pageChangeEvent: function pageChangeEvent(params) {
    var _this87 = this;
    if (!this.tasks.updatePage) {
      this.tasks.updatePage = debounce_default(200, function() {
        var eventParams = _extends({
          $grid: _this87
        }, params);
        var toolbarVm = _this87.getVm("toolbar");
        emitEvent$1(_this87, "page-change", eventParams);
        _this87.emitter.emit("page-change", eventParams);
        _this87.commitProxy("query");
        if (toolbarVm) {
          toolbarVm.orderSetting();
        }
      });
    }
    this.tasks.updatePage();
  },
  // size为页大小，load为false则触发change事件与查询，在个性化初始化时根据autoload控制是否加载数据
  pageSizeChange: function pageSizeChange(size, load) {
    this.tablePage.pageSize = size;
    this.tablePage.currentPage = 1;
    load || this.pageChangeEvent(this.tablePage);
  },
  pageCurrentChange: function pageCurrentChange(current) {
    if (this.tablePage.currentPage !== current) {
      this.tablePage.currentPage = current;
      this.pageChangeEvent(this.tablePage);
    }
  },
  beforePageChangeHandler: function beforePageChangeHandler(params) {
    var _this88 = this;
    if (!this.showSaveMsg) {
      var eventParams = extend(false, {
        $grid: this
      }, params);
      emitEvent$1(this, "before-page-change", eventParams);
      this.emitter.emit("before-page-change", eventParams);
      return;
    }
    var callback = params.callback, rollback = params.rollback;
    var _this$getRecordset = this.getRecordset(), insertRecords = _this$getRecordset.insertRecords, removeRecords = _this$getRecordset.removeRecords, updateRecords = _this$getRecordset.updateRecords;
    if (insertRecords.length || removeRecords.length || updateRecords.length) {
      var next2 = function next22(res) {
        if (res === "confirm") {
          rollback && rollback();
          emitEvent$1(_this88, "cancel-page-change", _this88);
          _this88.emitter.emit("cancel-page-change", _this88);
        } else {
          callback && callback();
        }
      };
      TINYModal.confirm(GlobalConfig$1.i18n("ui.grid.isSaveMsg")).then(next2);
    } else {
      callback && callback();
    }
  }
};
var Pager = {
  host: "grid",
  install: function install7(host) {
    Object.assign(host.methods, Methods$7);
  }
};
function setBodyRecords(_ref233) {
  var body = _ref233.body, insertRecords = _ref233.insertRecords, pendingRecords = _ref233.pendingRecords;
  if (insertRecords.length) {
    body.pendingRecords = pendingRecords.filter(function(row2) {
      return !insertRecords.includes(row2);
    });
  }
  if (pendingRecords.length) {
    body.insertRecords = insertRecords.filter(function(row2) {
      return !pendingRecords.includes(row2);
    });
  }
}
function canInvokeSaveDataApi(body, removeRecords, updateRecords) {
  return body.insertRecords.length || removeRecords.length || updateRecords.length || body.pendingRecords.length;
}
function doRemoveOrShowMsg(_ref234) {
  var _vm = _ref234._vm, canInvoke = _ref234.canInvoke, code = _ref234.code, isMsg2 = _ref234.isMsg, pendingRecords = _ref234.pendingRecords, resolve = _ref234.resolve, valid = _ref234.valid;
  if (valid && !canInvoke) {
    if (isMsg2) {
      if (pendingRecords.length) {
        _vm.remove(pendingRecords);
      } else {
        TINYModal.message({
          id: code,
          message: GlobalConfig$1.i18n("ui.grid.dataUnchanged"),
          status: "info"
        });
      }
    }
    resolve();
  }
}
function invokeSaveDataApi(_ref235) {
  var _vm = _ref235._vm, args = _ref235.args, body = _ref235.body, code = _ref235.code, removeRecords = _ref235.removeRecords, resolve = _ref235.resolve, saveData = _ref235.saveData, updateRecords = _ref235.updateRecords, valid = _ref235.valid;
  var canInvoke = false;
  if (valid) {
    canInvoke = canInvokeSaveDataApi(body, removeRecords, updateRecords);
  }
  if (valid && canInvoke) {
    _vm.tableLoading = true;
    resolve(saveData.api.apply(_vm, [{
      $grid: _vm,
      changeRecords: body
    }].concat(args)).then(function() {
      TINYModal.message({
        id: code,
        message: GlobalConfig$1.i18n("ui.grid.saveSuccess"),
        status: "success"
      });
      _vm.tableLoading = false;
    }).catch(function() {
      _vm.tableLoading = false;
    }).then(function() {
      return _vm.commitProxy("reload");
    }));
  }
  return canInvoke;
}
var Methods$6 = {
  // 表格工具栏渲染器
  getRenderedToolbar: function getRenderedToolbar(_ref236) {
    var $slots = _ref236.$slots, _vm = _ref236._vm, loading = _ref236.loading, tableLoading = _ref236.tableLoading, toolbar = _ref236.toolbar;
    return _vm.renderedToolbar = function() {
      var res = null;
      if ($slots.toolbar) {
        res = $slots.toolbar();
      } else if (toolbar) {
        res = h(toRaw(toolbar.component), {
          ref: "toolbar",
          props: _extends({
            loading: loading || tableLoading
          }, toolbar),
          class: _vm.viewCls("toolbar")
        });
      }
      return res;
    }();
  },
  handleSave: function handleSave(code, args) {
    var _this89 = this;
    var saveData = this.saveData, isMsg2 = this.isMsg;
    if (!saveData) {
      error("ui.grid.error.notSave");
      return;
    }
    var body = extend(true, {
      pendingRecords: this.pendingRecords
    }, this.getRecordset());
    var insertRecords = body.insertRecords, removeRecords = body.removeRecords, updateRecords = body.updateRecords, pendingRecords = body.pendingRecords;
    var validRows = insertRecords.concat(updateRecords);
    var getCallback = function getCallback2(resolve) {
      return function(valid) {
        if (!valid) {
          resolve(valid);
          return;
        }
        var canInvoke = invokeSaveDataApi({
          _vm: _this89,
          args,
          body,
          code,
          removeRecords,
          resolve,
          saveData,
          updateRecords,
          valid
        });
        doRemoveOrShowMsg({
          _vm: _this89,
          canInvoke,
          code,
          isMsg: isMsg2,
          pendingRecords,
          resolve,
          valid
        });
      };
    };
    setBodyRecords({
      body,
      insertRecords,
      pendingRecords
    });
    return new Promise(function(resolve) {
      _this89.validate(validRows, getCallback(resolve));
    });
  },
  handleDelete: function handleDelete(code, args) {
    var _this90 = this;
    var deleteData = this.deleteData, isMsg2 = this.isMsg;
    if (!deleteData) {
      error("ui.grid.error.notDelete");
      return;
    }
    var selecteds = this.getSelectRecords(true);
    var afterRemove = function afterRemove2() {
      var removeds = _this90.getRemoveRecords();
      if (!removeds.length && isMsg2 && !selecteds.length) {
        TINYModal.message({
          id: code,
          message: GlobalConfig$1.i18n("ui.grid.selectOneRecord"),
          status: "warning"
        });
      }
      if (removeds.length) {
        var apiArgs = [{
          $grid: _this90,
          changeRecords: {
            removeRecords: removeds
          }
        }].concat(args);
        var stopLoading = function stopLoading2() {
          _this90.tableLoading = false;
        };
        _this90.tableLoading = true;
        return deleteData.api.apply(_this90, apiArgs).then(stopLoading).catch(stopLoading).then(function() {
          return _this90.commitProxy("reload");
        });
      }
    };
    this.remove(selecteds).then(afterRemove);
  },
  handleFullScreen: function handleFullScreen(_ref237) {
    var _this91 = this;
    var show22 = _ref237[0];
    this.fullScreenClass = show22 ? "tiny-fullscreen-full" : "";
    this.$nextTick(function() {
      _this91.recalculate(true);
      emitEvent$1(_this91, "fullscreen", show22);
      _this91.emitter.emit("fullscreen", show22);
    });
  },
  commitProxy: function commitProxy(code) {
    var _this92 = this;
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    var btnMethod = Buttons.get(code);
    if (code === "insert") {
      this.insert();
    } else if (code === "insert_actived") {
      this.insert().then(function(_ref238) {
        var row2 = _ref238.row;
        return _this92.setActiveRow(row2);
      });
    } else if (code === "mark_cancel") {
      this.triggerPendingEvent(code);
    } else if (code === "delete_selection") {
      this.handleDeleteRow(code, "ui.grid.deleteSelectRecord", function() {
        return _this92.commitProxy(["delete"].concat(args));
      });
    } else if (code === "remove_selection") {
      this.handleDeleteRow(code, "ui.grid.removeSelectRecord", function() {
        return _this92.removeSelecteds();
      });
    } else if (code === "export") {
      this.exportCsv();
    } else if (code === "reset_custom") {
      this.resetAll();
    } else if (~["reload", "query", "prefetch"].indexOf(code)) {
      this.handleFetch(code, args);
    } else if (code === "delete") {
      this.handleDelete(code, args);
    } else if (code === "save") {
      this.handleSave();
    } else if (code === "fullscreen") {
      this.handleFullScreen(args);
    } else if (btnMethod) {
      btnMethod.call.apply(btnMethod, [this, {
        code,
        $grid: this
      }].concat(args));
    }
    return this.$nextTick();
  },
  handleDeleteRow: function handleDeleteRow(code, i18nKey, callback) {
    var selecteds = this.getSelectRecords();
    if (this.isMsg && selecteds.length) {
      TINYModal.confirm(GlobalConfig$1.i18n(i18nKey)).then(function(type) {
        type === "confirm" && callback();
      });
    }
    if (this.isMsg && !selecteds.length) {
      TINYModal.message({
        id: code,
        message: GlobalConfig$1.i18n("ui.grid.selectOneRecord"),
        status: "warning"
      });
    }
    if (!this.isMsg && selecteds.length) {
      callback();
    }
  },
  getPendingRecords: function getPendingRecords() {
    return this.pendingRecords;
  },
  triggerToolbarBtnEvent: function triggerToolbarBtnEvent(button, event) {
    var _this$events = this.events, events = _this$events === void 0 ? {} : _this$events, tableListeners = this.tableListeners;
    var code = button.code;
    if (!events.toolbarButtonClick && !tableListeners["toolbar-button-click"]) {
      this.commitProxy(code, event);
    }
    emitEvent$1(this, "toolbar-button-click", [{
      code,
      button,
      $grid: this
    }, event]);
    this.emitter.emit("toolbar-button-click", {
      code,
      button,
      $grid: this
    }, event);
  },
  triggerPendingEvent: function triggerPendingEvent(code) {
    var isMsg2 = this.isMsg, pendings = this.pendingRecords;
    var selectColumn = this.getColumns().filter(function(col) {
      return ~["selection", "radio"].indexOf(col.type);
    });
    var isSelection = selectColumn.length && selectColumn[0].type === "selection";
    var isRadio = selectColumn.length && selectColumn[0].type === "radio";
    var selecteds = isSelection ? this.getSelectRecords(true) : isRadio ? [this.getRadioRow()] : [];
    if (!selecteds.length && isMsg2) {
      TINYModal.message({
        id: code,
        message: GlobalConfig$1.i18n("ui.grid.selectOneRecord"),
        status: "warning"
      });
    }
    if (selecteds.length) {
      var _ref239 = {}, _ref239$plus = _ref239.plus, plus = _ref239$plus === void 0 ? [] : _ref239$plus, _ref239$minus = _ref239.minus, minus = _ref239$minus === void 0 ? [] : _ref239$minus, tmp = _ref239.tmp;
      selecteds.forEach(function(data8) {
        var selectedPending = pendings.includes(data8);
        tmp = selectedPending ? minus : plus;
        tmp.push(data8);
      });
      tmp = minus.length ? pendings.filter(function(item) {
        return !~minus.indexOf(item);
      }) : pendings;
      this.pendingRecords = tmp.concat(plus);
      isSelection && this.clearSelection();
      isRadio && this.clearRadioRow();
    }
  }
};
var Toolbar = {
  host: "grid",
  install: function install8(host) {
    Object.assign(host.methods, Methods$6);
  }
};
var Methods$5 = {
  renderColumnAnchor: function renderColumnAnchor(params, _vm) {
    var _ref240 = params || {}, _ref240$anchors = _ref240.anchors, anchors = _ref240$anchors === void 0 ? [] : _ref240$anchors, _ref240$action = _ref240.action, action = _ref240$action === void 0 ? function() {
    } : _ref240$action;
    var viewType2 = _vm.viewType;
    return h("div", {
      class: ["tiny-grid__column-anchor", _vm.viewCls("columnAnchor")],
      style: viewType2 === "default" ? "display:flex" : "",
      key: _vm.columnAnchorKey
    }, anchors.map(function(anchor) {
      var _anchor$active = anchor.active, active = _anchor$active === void 0 ? false : _anchor$active, _anchor$label = anchor.label, label = _anchor$label === void 0 ? "" : _anchor$label, _anchor$field = anchor.field, field = _anchor$field === void 0 ? "" : _anchor$field, render18 = anchor.render;
      if (typeof render18 === "function") {
        return render18({
          h,
          anchor,
          action
        });
      }
      var itemClass = {
        "tiny-grid__column-anchor-item": true,
        "tiny-grid__column-anchor-item--active": active
      };
      var itemOn = {
        click: function click(e) {
          return action(field, e);
        }
      };
      var iconVnode = active ? h(index$X(), {
        class: "tiny-grid__column-anchor-item-icon"
      }) : null;
      var spanVnode = h("span", label);
      return h("div", {
        class: itemClass,
        on: itemOn
      }, [iconVnode, spanVnode]);
    }));
  },
  buildColumnAnchor: function buildColumnAnchor(_ref241) {
    var property2 = _ref241.property, label = _ref241.label, anchors = _ref241.anchors, activeAnchor = _ref241.activeAnchor;
    var visibleColumn = this.getColumns();
    var column = visibleColumn.find(function(col) {
      return !col.type && col.property === property2;
    });
    var anchorName = "";
    var anchorRender = null;
    if (typeof label !== "undefined") {
      if (typeof label === "string") {
        anchorName = label;
      } else if (Array.isArray(label)) {
        if (label.length > 1) {
          anchorName = String(label[0]);
          anchorRender = label[1];
        }
      } else if (label && typeof label === "object") {
        anchorName = label.label;
        anchorRender = label.render;
        if (label.active) {
          activeAnchor.field = property2;
          if (label.delay)
            activeAnchor.delay = label.delay;
        }
      }
    }
    if (column) {
      anchors.push({
        label: anchorName || (typeof column.title === "string" ? column.title : ""),
        field: property2,
        active: false,
        render: anchorRender
      });
    }
  },
  buildColumnAnchorParams: function buildColumnAnchorParams() {
    var _this93 = this;
    var columnAnchor = this.columnAnchor;
    var anchors = [];
    var activeAnchor = {
      field: "",
      delay: 30
    };
    if (Array.isArray(columnAnchor) && columnAnchor.length) {
      columnAnchor.forEach(function(item) {
        if (typeof item === "string") {
          _this93.buildColumnAnchor({
            property: item,
            anchors
          });
        } else if (Array.isArray(item)) {
          if (item.length > 1)
            _this93.buildColumnAnchor({
              property: item[0],
              label: item[1],
              anchors
            });
        } else if (item && typeof item === "object") {
          var field = item.field, other = _objectWithoutPropertiesLoose(item, _excluded2);
          _this93.buildColumnAnchor({
            property: field,
            label: other,
            anchors,
            activeAnchor
          });
        }
      });
    }
    if (!activeAnchor.field && anchors.length) {
      activeAnchor.field = anchors[0].field;
    }
    this.columnAnchorParams = {
      anchors,
      activeAnchor,
      action: function action(field, e) {
        return _this93.anchorAction({
          field,
          anchors,
          _vm: _this93,
          e
        });
      }
    };
    this.emitter.once("active-anchor", function() {
      return _this93.anchorAction({
        field: activeAnchor.field,
        anchors,
        _vm: _this93
      });
    });
  },
  anchorAction: function anchorAction(_ref242) {
    var field = _ref242.field, anchors = _ref242.anchors, _vm = _ref242._vm;
    var fromAnchor = anchors.find(function(anchor) {
      return anchor.active;
    });
    var toAnchor = anchors.find(function(anchor) {
      return anchor.field === field;
    });
    if (toAnchor && fromAnchor !== toAnchor) {
      if (fromAnchor && fromAnchor.active) {
        fromAnchor.active = false;
      }
      if (!toAnchor.active) {
        toAnchor.active = true;
        _vm.columnAnchorKey = field;
        _vm.$nextTick(function(found) {
          if (found === void 0) {
            found = false;
          }
          var visibleColumn = _vm.getColumns();
          var column = visibleColumn.find(function(col) {
            return !col.type && col.property === field;
          });
          var width = visibleColumn.filter(function(col) {
            return !col.fixed;
          }).map(function(col) {
            if (col === column) {
              found = true;
            }
            return found ? 0 : col.renderWidth;
          }).reduce(function(p, c) {
            return p + c;
          }, 0);
          if (column) {
            _vm.scrollTo(width);
          }
        });
      }
    }
  }
};
var ColumnAnchor = {
  host: "grid",
  install: function install9(host) {
    Object.assign(host.methods, Methods$5);
  }
};
function handleIfScrollYLoadTruthy(_ref243) {
  var isScrollYLoad = _ref243.isScrollYLoad, _vm = _ref243._vm, selfRow = _ref243.selfRow, prevTrElem = _ref243.prevTrElem, targetTrElem = _ref243.targetTrElem;
  if (!isScrollYLoad) {
    return;
  }
  var actIndex = _vm.tableFullData.indexOf(selfRow);
  _vm.tableFullData.splice(actIndex, 1);
  if (prevTrElem) {
    var prevRow = _vm.getRowNode(prevTrElem).item;
    var parentIdx = _vm.tableFullData.indexOf(prevRow);
    var sleftIdx = _vm.tableFullData.indexOf(selfRow);
    _vm.tableFullData.splice(parentIdx + (sleftIdx < parentIdx ? 1 : 0), 0, selfRow);
  } else {
    _vm.tableFullData.unshift(selfRow);
  }
  targetTrElem.remove();
}
var createHandlerOnEnd = function createHandlerOnEnd2(_ref244) {
  var _vm = _ref244._vm, refresh = _ref244.refresh;
  return function(event) {
    var insertRecords = _vm.getInsertRecords();
    if (insertRecords.length) {
      return false;
    }
    var options = {
      children: (_vm.treeConfig || {}).children || "children"
    };
    var targetTrElem = event.item;
    var wrapperElem = targetTrElem.parentNode, prevTrElem = targetTrElem.previousElementSibling;
    var tableTreeData = _vm.data || _vm.tableData;
    var selfRow = _vm.getRowNode(targetTrElem).item;
    var selfNode = findTree_default(tableTreeData, function(row2) {
      return row2 === selfRow;
    }, options);
    var isScrollYLoad = _vm.scrollYLoad;
    if (!isScrollYLoad) {
      if (prevTrElem) {
        var prevRow = _vm.getRowNode(prevTrElem).item;
        var prevNode = findTree_default(tableTreeData, function(row2) {
          return row2 === prevRow;
        }, options);
        if (findTree_default(selfRow[options.children], function(row2) {
          return prevRow === row2;
        }, options)) {
          var oldTrElem = wrapperElem.children[event.oldIndex];
          wrapperElem.insertBefore(targetTrElem, oldTrElem);
          return TINYModal.message({
            message: GlobalConfig$1.i18n("ui.grid.error.dargSelf"),
            status: "error"
          });
        }
        var currRow = selfNode.items.splice(selfNode.index, 1)[0];
        if (_vm.hasTreeExpand(prevRow)) {
          prevRow[options.children].splice(0, 0, currRow);
        } else {
          prevNode.items.splice(prevNode.index + (selfNode.index < prevNode.index ? 0 : 1), 0, currRow);
          prevNode.items = [].concat(prevNode.items);
        }
      } else {
        var _currRow = selfNode.items.splice(selfNode.index, 1)[0];
        tableTreeData.unshift(_currRow);
        _vm.tableFullData = [].concat(tableTreeData);
      }
    }
    handleIfScrollYLoadTruthy({
      isScrollYLoad,
      _vm,
      selfRow,
      prevTrElem,
      targetTrElem
    });
    _vm.$emit("row-drop-end", event, _vm, _vm.scrollYLoad ? tableTreeData : _vm.tableFullData);
    refresh && _vm.data && !isVue2 && _vm.refreshData(_vm.data);
  };
};
var getSortColumns = function getSortColumns2(columns2) {
  var left = [];
  var right = [];
  var center = [];
  columns2.forEach(function(col) {
    var fixed = col.fixed;
    if (fixed === "left") {
      left.push(col);
    } else if (fixed === "right") {
      right.push(col);
    } else {
      center.push(col);
    }
  });
  return left.concat(center).concat(right);
};
var onEndEvent = function onEndEvent2(_ref245) {
  var event = _ref245.event, _this = _ref245._this;
  var item = event.item, newIndex = event.newIndex, oldIndex = event.oldIndex;
  var _this$getTableColumn = _this.getTableColumn(), fullColumn = _this$getTableColumn.fullColumn, tableColumn3 = _this$getTableColumn.tableColumn;
  var sortVisibleCols = getSortColumns(tableColumn3);
  var targetThElem = item;
  var wrapperElem = targetThElem.parentNode;
  var newColumn = sortVisibleCols[newIndex];
  if (newColumn.fixed) {
    if (newIndex > oldIndex) {
      for (var i = newIndex; i >= oldIndex; i--) {
        wrapperElem.insertBefore(targetThElem, wrapperElem.children[i]);
      }
    } else {
      for (var _i2 = newIndex; _i2 <= oldIndex; _i2++) {
        wrapperElem.insertBefore(targetThElem, wrapperElem.children[_i2]);
      }
      wrapperElem.insertBefore(wrapperElem.children[oldIndex], targetThElem);
    }
    return TINYModal.message({
      message: GlobalConfig$1.i18n("ui.grid.error.dargFixed"),
      status: "error"
    });
  }
  var oldColumnIndex = _this.getColumnIndex(sortVisibleCols[oldIndex]);
  var newColumnIndex = _this.getColumnIndex(sortVisibleCols[newIndex]);
  var currCol = fullColumn.splice(oldColumnIndex, 1)[0];
  fullColumn.splice(newColumnIndex, 0, currCol);
  _this.loadColumn(fullColumn);
  _this.$emit("column-drop-end", event, _this);
  var toolbarVm = _this.getVm("toolbar");
  if (_this.isDragHeaderSorting && toolbarVm) {
    toolbarVm.updateSetting();
  }
};
var Methods$4 = {
  // 处理列拖拽
  columnDrop: function columnDrop() {
    var _this94 = this;
    this.$nextTick(function() {
      var _this94$dropConfig = _this94.dropConfig, plugin = _this94$dropConfig.plugin, onBeforeMove = _this94$dropConfig.onBeforeMove, filter2 = _this94$dropConfig.filter;
      var mainHeaderTable = _this94.elemStore["main-header-table"];
      _this94.columnSortable = plugin.create(mainHeaderTable.querySelector(".tiny-grid-header__row"), {
        handle: ".tiny-grid-header__column:not(.col__fixed)",
        filter: filter2,
        onEnd: function onEnd(event) {
          onEndEvent({
            event,
            _this: _this94
          });
        },
        onStart: function onStart(event) {
          _this94.$emit("column-drop-start", event, _this94);
        },
        onMove: function onMove(event) {
          var cancel = typeof onBeforeMove === "function" ? onBeforeMove("column", null, event, _this94) : true;
          _this94.$emit("column-drop-move", event, _this94);
          return cancel === void 0 || cancel;
        }
      });
    });
  },
  // 处理行拖拽
  rowDrop: function rowDrop() {
    var _this95 = this;
    this.$nextTick(function() {
      var _this95$dropConfig = _this95.dropConfig, plugin = _this95$dropConfig.plugin, onBeforeMove = _this95$dropConfig.onBeforeMove, filter2 = _this95$dropConfig.filter, _this95$dropConfig$re = _this95$dropConfig.refresh, refresh = _this95$dropConfig$re === void 0 ? true : _this95$dropConfig$re, trigger = _this95$dropConfig.trigger;
      var mainBodyWrapper = _this95.elemStore["main-body-wrapper"];
      _this95.rowSortable = plugin.create(mainBodyWrapper.querySelector("tbody"), {
        handle: trigger || ".tiny-grid-body__row",
        filter: filter2,
        onEnd: createHandlerOnEnd({
          _vm: _this95,
          refresh
        }),
        onStart: function onStart(event) {
          _this95.$emit("row-drop-start", event, _this95);
        },
        onMove: function onMove(event) {
          var insertRecords = _this95.getInsertRecords();
          if (insertRecords.length) {
            return false;
          }
          var dragged = event.dragged;
          var selfRow = _this95.getRowNode(dragged).item;
          var cancel = typeof onBeforeMove === "function" ? onBeforeMove("row", selfRow, event, _this95) : true;
          _this95.$emit("row-drop-move", event, _this95);
          return cancel === void 0 || cancel;
        }
      });
    });
  }
};
var Dragger = {
  host: "table",
  install: function install10(host) {
    Object.assign(host.methods, Methods$4);
  }
};
var Methods$3 = {};
var Sort = {
  host: "table",
  install: function install11(host) {
    Object.assign(host.methods, Methods$3);
  }
};
function createTooltipRange(_ref246) {
  var _vm = _ref246._vm, cell = _ref246.cell, column = _ref246.column, isHeader = _ref246.isHeader;
  var range = document.createRange();
  var rangeEnd;
  range.setStart(cell, 0);
  if (_vm.headerSuffixIconAbsolute) {
    if (column.sortable && column.filter && isHeader) {
      rangeEnd = cell.childNodes.length - 2;
    } else if ((column.sortable || column.filter) && isHeader) {
      rangeEnd = cell.childNodes.length - 1;
    } else {
      rangeEnd = cell.childNodes.length;
    }
  } else {
    rangeEnd = column.sortable && isHeader ? cell.childNodes.length - 1 : cell.childNodes.length;
  }
  range.setEnd(cell, rangeEnd);
  return range;
}
function processContentMethod(_ref247) {
  var _vm = _ref247._vm, column = _ref247.column, content = _ref247.content, contentMethod = _ref247.contentMethod, event = _ref247.event, isHeader = _ref247.isHeader, row2 = _ref247.row, showTip = _ref247.showTip;
  if (contentMethod) {
    _vm.tooltipContent = contentMethod({
      event,
      column,
      row: row2,
      showTip,
      isHeader,
      content
    }, h);
  } else {
    _vm.tooltipContent = content;
  }
}
var focusSingle = null;
var Methods$2 = {
  // 显示 tooltip 依赖的 popper 组件
  activateTooltip: function activateTooltip(tooltip, isValid) {
    if (!this.tasks.activateTooltip) {
      this.tasks.activateTooltip = debounce_default(300, function() {
        var sign = isValid !== void 0 ? isValid : focusSingle;
        if (sign) {
          tooltip.state.popperElm && (tooltip.state.popperElm.style.display = "none");
          tooltip.doDestroy();
          tooltip.show();
          setTimeout(tooltip.updatePopper);
        }
      });
    }
    this.tasks.activateTooltip();
  },
  // 显示 tooltip 依赖的 popper 组件
  activateTooltipValid: function activateTooltipValid(tooltip) {
    if (!this.tasks.activateTooltipValid) {
      this.tasks.activateTooltipValid = debounce_default(50, function() {
        tooltip.handleShowPopper();
        setTimeout(function() {
          return tooltip.updatePopper();
        });
      });
    }
    this.tasks.activateTooltipValid();
  },
  // 显示 tooltip
  handleTooltip: function handleTooltip(event, column, row2, showTip, isHeader) {
    var cell = isHeader ? event.currentTarget.querySelector(".tiny-grid-cell-text") : event.currentTarget.querySelector(".tiny-grid-cell");
    if (isHeader && event.target !== cell) {
      return;
    }
    var tooltip = this.$refs.tooltip;
    var wrapperElem = cell;
    var content = cell.innerText.trim() || cell.textContent.trim();
    var contentMethod = this.tooltipConfig.contentMethod;
    var range = createTooltipRange({
      _vm: this,
      cell,
      column,
      isHeader
    });
    var rangeWidth = range.getBoundingClientRect().width;
    var padding = (parseInt(getStyle$1(cell, "paddingLeft"), 10) || 0) + (parseInt(getStyle$1(cell, "paddingRight"), 10) || 0);
    var isOverflow = rangeWidth + padding > cell.offsetWidth || wrapperElem.scrollWidth > wrapperElem.clientWidth;
    if ((contentMethod || content) && (showTip || isOverflow)) {
      Object.assign(this.tooltipStore, {
        row: row2,
        column,
        visible: true
      });
      if (tooltip) {
        processContentMethod({
          _vm: this,
          column,
          content,
          contentMethod,
          event,
          isHeader,
          row: row2,
          showTip
        });
        tooltip.state.referenceElm = cell;
        tooltip.state.popperElm && (tooltip.state.popperElm.style.display = "none");
        focusSingle = true;
        this.activateTooltip(tooltip);
      }
    }
    return this.$nextTick();
  },
  // 提供关闭tips提示的方法
  clostTooltip: function clostTooltip() {
    var tooltip = this.$refs.tooltip;
    Object.assign(this.tooltipStore, {
      content: null,
      row: null,
      visible: false,
      column: null
    });
    focusSingle = false;
    if (tooltip && typeof tooltip.setExpectedState === "function") {
      tooltip.setExpectedState(false);
      this.debounceClose(tooltip);
    }
    return this.$nextTick();
  },
  // 添加代码让用户代码可以划入popper
  debounceClose: function debounceClose(tooltip) {
    if (!this.tasks.debounceClose) {
      this.tasks.debounceClose = debounce_default(50, function() {
        tooltip.handleClosePopper();
      });
    }
    this.tasks.debounceClose();
  },
  // 触发表头 tooltip 事件
  triggerHeaderTooltipEvent: function triggerHeaderTooltipEvent(event, params) {
    var tooltipStore = this.tooltipStore;
    var column = params.column, showHeaderTip = params.showHeaderTip;
    if (tooltipStore.column !== column || !tooltipStore.visible) {
      this.handleTooltip(event, column, null, showHeaderTip, true);
    }
  },
  // 触发表尾 tooltip 事件
  triggerFooterTooltipEvent: function triggerFooterTooltipEvent(event, params) {
    var column = params.column;
    var tooltipStore = this.tooltipStore;
    if (tooltipStore.column !== column || !tooltipStore.visible) {
      this.handleTooltip(event, column);
    }
  },
  // 触发 tooltip 事件
  triggerTooltipEvent: function triggerTooltipEvent(event, params) {
    var editConfig = this.editConfig, editStore = this.editStore, tooltipStore = this.tooltipStore;
    var actived = editStore.actived;
    var row2 = params.row, column = params.column, showTip = params.showTip;
    if (editConfig) {
      if (editConfig.mode === "row" && actived.row === row2 && column.editor || actived.row === row2 && actived.column === column) {
        return;
      }
    }
    if (tooltipStore.column !== column || tooltipStore.row !== row2 || !tooltipStore.visible) {
      this.handleTooltip(event, column, row2, showTip);
    }
  }
};
var Tooltip = {
  host: "table",
  install: function install12(host) {
    Object.assign(host.methods, Methods$2);
  }
};
function onHalfSelectionProperty(_ref248) {
  var checkStrictly = _ref248.checkStrictly, property2 = _ref248.property, row2 = _ref248.row, treeConfig = _ref248.treeConfig, treeIndeterminates = _ref248.treeIndeterminates, value = _ref248.value;
  if (property2 && treeConfig && !checkStrictly && value === -1) {
    treeIndeterminates.push(row2);
    set_default(row2, property2, false);
  }
}
function onFullSelectionProperty(_ref249) {
  var checkMethod = _ref249.checkMethod, checkStrictly = _ref249.checkStrictly, property2 = _ref249.property, row2 = _ref249.row, treeConfig = _ref249.treeConfig, treeIndeterminates = _ref249.treeIndeterminates, value = _ref249.value;
  if (property2 && treeConfig && !checkStrictly && value !== -1) {
    eachTree_default([row2], function(item, $rowIndex) {
      if (row2 === item || !checkMethod || checkMethod({
        row: item,
        $rowIndex
      })) {
        set_default(item, property2, value);
        remove_default(treeIndeterminates, function(r) {
          return r === item;
        });
      }
    }, treeConfig);
  }
}
function getVItemsOnParentSlctProp(_ref250) {
  var checkMethod = _ref250.checkMethod, matchObj = _ref250.matchObj;
  var tinyItems;
  if (checkMethod) {
    tinyItems = matchObj.items.filter(function(item, $rowIndex) {
      return checkMethod({
        row: item,
        $rowIndex
      });
    });
  } else {
    tinyItems = matchObj.items;
  }
  return tinyItems;
}
function getParentStatusOnParentSlctProp(_ref251) {
  var indeterminatesItem = _ref251.indeterminatesItem, matchObj = _ref251.matchObj, property2 = _ref251.property, vItems = _ref251.vItems, value = _ref251.value;
  var parentStatus;
  if (indeterminatesItem) {
    parentStatus = -1;
  } else {
    var selectItemArr = matchObj.items.filter(function(item) {
      return get_default(item, property2);
    });
    var _isEqual = selectItemArr.filter(function(item) {
      return ~vItems.indexOf(item);
    }).length === vItems.length;
    parentStatus = _isEqual ? true : selectItemArr.length || value === -1 ? -1 : false;
  }
  return parentStatus;
}
function onHalfSelection(_ref252) {
  var checkStrictly = _ref252.checkStrictly, property2 = _ref252.property, row2 = _ref252.row, selection = _ref252.selection, treeConfig = _ref252.treeConfig, treeIndeterminates = _ref252.treeIndeterminates, value = _ref252.value;
  if (!property2 && treeConfig && !checkStrictly && value === -1) {
    treeIndeterminates.push(row2);
    remove_default(selection, function(item) {
      return item === row2;
    });
  }
}
function getVItemsOnParentSelection(_ref253) {
  var checkMethod = _ref253.checkMethod, matchObj = _ref253.matchObj;
  var vItems;
  if (checkMethod) {
    vItems = matchObj.items.filter(function(item, $rowIndex) {
      return checkMethod({
        row: item,
        $rowIndex
      });
    });
  } else {
    vItems = matchObj.items;
  }
  return vItems;
}
var addSelection = function addSelection2(selection, item) {
  return !selection.includes(item) && selection.push(item);
};
function onFullSelection(_ref254) {
  var checkMethod = _ref254.checkMethod, checkStrictly = _ref254.checkStrictly, property2 = _ref254.property, row2 = _ref254.row, selection = _ref254.selection, treeConfig = _ref254.treeConfig, treeIndeterminates = _ref254.treeIndeterminates, value = _ref254.value;
  if (!property2 && treeConfig && !checkStrictly && value !== -1) {
    eachTree_default([row2], function(item, $rowIndex) {
      if (row2 === item || !checkMethod || checkMethod({
        row: item,
        $rowIndex
      })) {
        if (value) {
          addSelection(selection, item);
        } else {
          remove_default(selection, function(select2) {
            return select2 === item;
          });
        }
        remove_default(treeIndeterminates, function(r) {
          return r === item;
        });
      }
    }, treeConfig);
  }
}
function getParentStatusOnParentSelection(_ref255) {
  var indeterminatesItem = _ref255.indeterminatesItem, matchObj = _ref255.matchObj, selection = _ref255.selection, vItems = _ref255.vItems, value = _ref255.value;
  var parentStatus;
  if (indeterminatesItem) {
    parentStatus = -1;
  } else {
    var selectItems = matchObj.items.filter(function(item) {
      return selection.includes(item);
    });
    var isEqualItem = selectItems.filter(function(item) {
      return vItems.includes(item);
    }).length === vItems.length;
    parentStatus = isEqualItem ? true : selectItems.length || value === -1 ? -1 : false;
  }
  return parentStatus;
}
function hasCheckField(_ref256, value, _vm) {
  var row2 = _ref256.row;
  var tableFullData = _vm.tableFullData, _vm$selectConfig = _vm.selectConfig, selectConfig = _vm$selectConfig === void 0 ? {} : _vm$selectConfig, treeConfig = _vm.treeConfig, treeIndeterminates = _vm.treeIndeterminates;
  var property2 = selectConfig.checkField, checkStrictly = selectConfig.checkStrictly, checkMethod = selectConfig.checkMethod;
  onHalfSelectionProperty({
    checkStrictly,
    property: property2,
    row: row2,
    treeConfig,
    treeIndeterminates,
    value
  });
  onFullSelectionProperty({
    checkMethod,
    checkStrictly,
    property: property2,
    row: row2,
    treeConfig,
    treeIndeterminates,
    value
  });
  if (property2 && treeConfig && !checkStrictly) {
    var matchObj = findTree_default(tableFullData, function(item) {
      return item === row2;
    }, treeConfig);
    if (matchObj && matchObj.parent) {
      var vItems = getVItemsOnParentSlctProp({
        checkMethod,
        matchObj
      });
      var indeterminatesItem = find_default(matchObj.items, function(item) {
        return treeIndeterminates.includes(item);
      });
      var parentStatus = getParentStatusOnParentSlctProp({
        indeterminatesItem,
        matchObj,
        property: property2,
        vItems,
        value
      });
      return _vm.handleSelectRow({
        row: matchObj.parent
      }, parentStatus);
    }
  }
  if (property2 && !(treeConfig && !checkStrictly)) {
    set_default(row2, property2, value);
  }
}
function onSelectTreeCheckStrictly(_ref257, value, _vm) {
  var row2 = _ref257.row;
  var selection = _vm.selection, tableFullData = _vm.tableFullData, _vm$selectConfig2 = _vm.selectConfig, selectConfig = _vm$selectConfig2 === void 0 ? {} : _vm$selectConfig2, treeConfig = _vm.treeConfig, treeIndeterminates = _vm.treeIndeterminates;
  var property2 = selectConfig.checkField, checkStrictly = selectConfig.checkStrictly, checkMethod = selectConfig.checkMethod;
  onHalfSelection({
    checkStrictly,
    property: property2,
    row: row2,
    selection,
    treeConfig,
    treeIndeterminates,
    value
  });
  onFullSelection({
    checkMethod,
    checkStrictly,
    property: property2,
    row: row2,
    selection,
    treeConfig,
    treeIndeterminates,
    value
  });
  if (!property2 && treeConfig && !checkStrictly) {
    var matchObj = findTree_default(tableFullData, function(item) {
      return item === row2;
    }, treeConfig);
    if (matchObj && matchObj.parent) {
      var vItems = getVItemsOnParentSelection({
        checkMethod,
        matchObj
      });
      var indeterminatesItem = find_default(matchObj.items, function(item) {
        return treeIndeterminates.includes(item);
      });
      var parentStatus = getParentStatusOnParentSelection({
        indeterminatesItem,
        matchObj,
        selection,
        vItems,
        value
      });
      return _vm.handleSelectRow({
        row: matchObj.parent
      }, parentStatus);
    }
  }
}
function onSelectOther(_ref258, value, _vm) {
  var row2 = _ref258.row;
  var selection = _vm.selection, _vm$selectConfig3 = _vm.selectConfig, selectConfig = _vm$selectConfig3 === void 0 ? {} : _vm$selectConfig3, treeConfig = _vm.treeConfig;
  var property2 = selectConfig.checkField, checkStrictly = selectConfig.checkStrictly;
  if (!property2 && !(treeConfig && !checkStrictly)) {
    if (value) {
      addSelection(selection, row2);
    } else {
      remove_default(selection, function(item) {
        return item === row2;
      });
    }
  }
}
function hasNoCheckField(_ref259, value, _vm) {
  var row2 = _ref259.row;
  onSelectTreeCheckStrictly({
    row: row2
  }, value, _vm);
  onSelectOther({
    row: row2
  }, value, _vm);
}
function pushSelectRow(_ref260) {
  var afterFullData = _ref260.afterFullData, checkMethod = _ref260.checkMethod, checkStrictly = _ref260.checkStrictly, property2 = _ref260.property, selectRows = _ref260.selectRows, selection = _ref260.selection, treeConfig = _ref260.treeConfig, value = _ref260.value;
  if (!checkStrictly && !property2 && treeConfig && value) {
    eachTree_default(afterFullData, function(row2, $rowIndex) {
      if (!checkMethod || checkMethod({
        row: row2,
        $rowIndex
      })) {
        selectRows.push(row2);
      }
    }, treeConfig);
  }
  if (!checkStrictly && !property2 && treeConfig && !value && checkMethod) {
    eachTree_default(afterFullData, function(row2, $rowIndex) {
      if (checkMethod({
        row: row2,
        $rowIndex
      }) ? 0 : selection.includes(row2)) {
        selectRows.push(row2);
      }
    }, treeConfig);
  }
}
function hasCheckFieldNoStrictly(_ref261) {
  var afterFullData = _ref261.afterFullData, checkMethod = _ref261.checkMethod, checkStrictly = _ref261.checkStrictly, property2 = _ref261.property, selection = _ref261.selection, treeConfig = _ref261.treeConfig, value = _ref261.value;
  if (!checkStrictly && property2) {
    var indexKey = (treeConfig ? "$" : "") + "rowIndex";
    var setValFn = function setValFn2(row2, rowIndex) {
      var _checkMethod;
      if (!checkMethod || checkMethod((_checkMethod = {
        row: row2
      }, _checkMethod[indexKey] = rowIndex, _checkMethod))) {
        set_default(row2, property2, value);
      }
    };
    var clearValFn = function clearValFn2(row2, rowIndex) {
      var _checkMethod2;
      if (!checkMethod || (checkMethod((_checkMethod2 = {
        row: row2
      }, _checkMethod2[indexKey] = rowIndex, _checkMethod2)) ? 0 : selection.includes(row2))) {
        set_default(row2, property2, value);
      }
    };
    if (treeConfig) {
      eachTree_default(afterFullData, value ? setValFn : clearValFn, treeConfig);
    } else {
      afterFullData.forEach(value ? setValFn : clearValFn);
    }
  }
}
function filterSelectRow(_ref262) {
  var afterFullData = _ref262.afterFullData, checkMethod = _ref262.checkMethod, checkStrictly = _ref262.checkStrictly, property2 = _ref262.property, selectRows = _ref262.selectRows, selection = _ref262.selection, treeConfig = _ref262.treeConfig, value = _ref262.value;
  if (!checkStrictly && !property2 && !treeConfig && value && checkMethod) {
    selectRows = afterFullData.filter(function(row2, rowIndex) {
      return selection.includes(row2) || checkMethod({
        row: row2,
        rowIndex
      });
    });
  }
  if (!checkStrictly && !property2 && !treeConfig && value && !checkMethod) {
    selectRows = afterFullData.slice(0);
  }
  if (!checkStrictly && !property2 && !treeConfig && !value && checkMethod) {
    selectRows = afterFullData.filter(function(row2, rowIndex) {
      return checkMethod({
        row: row2,
        rowIndex
      }) ? 0 : selection.includes(row2);
    });
  }
  return selectRows;
}
function hasNoCheckFieldNoStrictly(_ref263) {
  var afterFullData = _ref263.afterFullData, checkMethod = _ref263.checkMethod, checkStrictly = _ref263.checkStrictly, property2 = _ref263.property, selection = _ref263.selection, treeConfig = _ref263.treeConfig, value = _ref263.value;
  var selectRows = [];
  pushSelectRow({
    afterFullData,
    checkMethod,
    checkStrictly,
    property: property2,
    selectRows,
    selection,
    treeConfig,
    value
  });
  selectRows = filterSelectRow({
    afterFullData,
    checkMethod,
    checkStrictly,
    property: property2,
    selectRows,
    selection,
    treeConfig,
    value
  });
  return selectRows;
}
function setSelectionNoStrictly(_ref264) {
  var _vm = _ref264._vm, checkStrictly = _ref264.checkStrictly, reserve = _ref264.reserve, selectRows = _ref264.selectRows, selection = _ref264.selection, value = _ref264.value;
  if (!checkStrictly) {
    _vm.selection = value && reserve ? selection.concat(selectRows.filter(function(row2) {
      return !selection.includes(row2);
    })) : selectRows;
  }
}
var Methods$1 = {
  // 处理默认勾选
  handleSelectionDefChecked: function handleSelectionDefChecked() {
    var fullDataRowIdData = this.fullDataRowIdData;
    var _ref265 = this.selectConfig || {}, checkAll = _ref265.checkAll, checkRowKeys = _ref265.checkRowKeys;
    if (checkAll) {
      this.setAllSelection(true);
      return;
    }
    if (checkRowKeys) {
      var defCheckedRowids = checkRowKeys.map(function(key) {
        return encodeURIComponent(key);
      });
      var defCheckedRows = [];
      defCheckedRowids.forEach(function(rowid2) {
        var rowCache = fullDataRowIdData[rowid2];
        if (rowCache) {
          defCheckedRows.push(rowCache.row);
        }
      });
      this.setSelection(defCheckedRows, true);
    }
  },
  setSelection: function setSelection(rows, value) {
    var _this96 = this;
    if (rows) {
      if (!isArray(rows)) {
        rows = [rows];
      }
      rows.forEach(function(row2) {
        return _this96.handleSelectRow({
          row: row2
        }, !!value);
      });
    }
    return this.$nextTick();
  },
  // 多选，行选中事件。value：选中true、不选false、不确定-1
  handleSelectRow: function handleSelectRow(_ref266, value) {
    var row2 = _ref266.row;
    hasCheckField({
      row: row2
    }, value, this);
    hasNoCheckField({
      row: row2
    }, value, this);
    this.checkSelectionStatus();
  },
  handleToggleCheckRowEvent: function handleToggleCheckRowEvent(params, event) {
    var selection = this.selection;
    var _ref267 = this.selectConfig || {}, checkField = _ref267.checkField;
    var row2 = params.row;
    var value = checkField ? !get_default(row2, checkField) : !~selection.indexOf(row2);
    if (event) {
      this.triggerCheckRowEvent(event, params, value);
    } else {
      this.handleSelectRow(params, value);
    }
  },
  triggerCheckRowEvent: function triggerCheckRowEvent(event, params, value) {
    var _this$selectConfig4 = this.selectConfig, selectConfig = _this$selectConfig4 === void 0 ? {} : _this$selectConfig4;
    var checkMethod = selectConfig.checkMethod;
    if (!checkMethod || checkMethod(params)) {
      this.handleSelectRow(params, value);
      emitEvent$1(this, "select-change", [_extends({
        selection: this.getSelectRecords(),
        checked: value,
        $table: this
      }, params), event]);
    }
  },
  // 多选，切换某一行的选中状态
  toggleRowSelection: function toggleRowSelection(row2) {
    this.handleToggleCheckRowEvent({
      row: row2
    });
    return this.$nextTick();
  },
  setAllSelection: function setAllSelection(value) {
    var afterFullData = this.afterFullData, _this$selectConfig5 = this.selectConfig, selectConfig = _this$selectConfig5 === void 0 ? {} : _this$selectConfig5, treeConfig = this.treeConfig, selection = this.selection;
    var property2 = selectConfig.checkField, reserve = selectConfig.reserve, checkStrictly = selectConfig.checkStrictly, checkMethod = selectConfig.checkMethod;
    hasCheckFieldNoStrictly({
      afterFullData,
      checkMethod,
      checkStrictly,
      property: property2,
      selection,
      treeConfig,
      value
    });
    var selectRows = hasNoCheckFieldNoStrictly({
      afterFullData,
      checkMethod,
      checkStrictly,
      property: property2,
      selection,
      treeConfig,
      value
    });
    setSelectionNoStrictly({
      _vm: this,
      checkStrictly,
      reserve,
      selectRows,
      selection,
      value
    });
    this.treeIndeterminates = [];
    this.checkSelectionStatus();
  },
  checkSelectionStatus: function checkSelectionStatus() {
    var afterFullData = this.afterFullData, selection = this.selection, treeIndeterminates = this.treeIndeterminates;
    var _ref268 = this.selectConfig || {}, checkField = _ref268.checkField, checkStrictly = _ref268.checkStrictly, checkMethod = _ref268.checkMethod;
    var _ref269 = {}, everyHandler = _ref269.everyHandler, someHandler = _ref269.someHandler;
    if (checkStrictly) {
      return;
    }
    if (checkField) {
      everyHandler = checkMethod ? function(row2, rowIndex) {
        return !checkMethod({
          row: row2,
          rowIndex
        }) || get_default(row2, checkField);
      } : function(row2) {
        return get_default(row2, checkField);
      };
      someHandler = function someHandler2(row2) {
        return get_default(row2, checkField) || ~treeIndeterminates.indexOf(row2);
      };
      this.isAllSelected = false;
      afterFullData.length && (this.isAllSelected = afterFullData.every(everyHandler));
      this.isIndeterminate = !this.isAllSelected && afterFullData.some(someHandler);
    } else {
      everyHandler = function everyHandler2(row2, rowIndex) {
        return !checkMethod({
          row: row2,
          rowIndex
        });
      };
      this.headerCheckDisabled = checkMethod && afterFullData.length && afterFullData.every(everyHandler);
      everyHandler = checkMethod ? function(row2, rowIndex) {
        return !checkMethod({
          row: row2,
          rowIndex
        }) || ~selection.indexOf(row2);
      } : function(row2) {
        return ~selection.indexOf(row2);
      };
      someHandler = function someHandler2(row2) {
        return ~treeIndeterminates.indexOf(row2) || ~selection.indexOf(row2);
      };
      this.isAllSelected = false;
      afterFullData.length && (this.isAllSelected = afterFullData.every(everyHandler));
      this.isIndeterminate = !this.isAllSelected && afterFullData.some(someHandler);
    }
  },
  // 保留选中状态
  reserveCheckSelection: function reserveCheckSelection() {
    var fullDataRowIdData = this.fullDataRowIdData, selection = this.selection;
    var _ref270 = this.selectConfig || {}, reserve = _ref270.reserve;
    var rowkey = getTableRowKey(this);
    if (reserve && selection.length) {
      this.selection = selection.map(function(row2) {
        var rowCache = fullDataRowIdData["" + get_default(row2, rowkey)];
        return rowCache ? rowCache.row : row2;
      });
    }
  },
  // 多选，选中所有事件
  triggerCheckAllEvent: function triggerCheckAllEvent(event, value) {
    this.setAllSelection(value);
    var eventParams = {
      selection: this.getSelectRecords(),
      checked: value,
      $table: this
    };
    emitEvent$1(this, "select-all", [eventParams, event]);
  },
  // 多选，切换所有行的选中状态
  toggleAllSelection: function toggleAllSelection() {
    this.triggerCheckAllEvent(null, !this.isAllSelected);
    return this.$nextTick();
  },
  clearSelection: function clearSelection() {
    var tableFullData = this.tableFullData, treeConfig = this.treeConfig;
    var _ref271 = this.selectConfig || {}, checkField = _ref271.checkField;
    if (checkField) {
      treeConfig ? eachTree_default(tableFullData, function(item) {
        return set_default(item, checkField, false);
      }, treeConfig) : tableFullData.forEach(function(item) {
        return set_default(item, checkField, false);
      });
    }
    Object.assign(this, {
      isAllSelected: false,
      isIndeterminate: false,
      selection: [],
      treeIndeterminates: []
    });
    return this.$nextTick();
  },
  initMultipleHistory: function initMultipleHistory() {
    var isMultipleHistory = this.$grid.isMultipleHistory;
    var toolbarVm = this.getVm("toolbar");
    var storageKey = toolbarVm.settingOpts.storageKey, toolbarId = toolbarVm.id;
    var remoteSelectedMethod = toolbarVm.setting.multipleHistory.remoteSelectedMethod;
    var remoteSelectedPromise;
    if (isMultipleHistory && toolbarVm && toolbarVm.setting && toolbarVm.setting.multipleHistory && remoteSelectedMethod) {
      if (typeof remoteSelectedMethod === "function") {
        remoteSelectedPromise = remoteSelectedMethod();
        if (typeof remoteSelectedPromise.then === "function") {
          remoteSelectedPromise.then(function(storeStr) {
            var storeObj = toStringJSON_default(storeStr);
            storeObj = storeObj && storeObj[storageKey] || null;
            storeObj = (storeObj || {})[toolbarId] || {};
            var _storeObj = storeObj, columns2 = _storeObj.columns, pageSize2 = _storeObj.pageSize;
            toolbarVm.applySettings({
              columns: columns2,
              pageSize: pageSize2
            });
          });
        }
      }
    }
  },
  // 显示多选工具栏
  showSelectToolbar: function showSelectToolbar() {
    var _this$$grid4 = this.$grid, selectToolbar = _this$$grid4.selectToolbar, showHeader = _this$$grid4.showHeader, selectToolbarStore = this.selectToolbarStore;
    if (selectToolbar && showHeader) {
      selectToolbarStore.visible = false;
      var selectColumn = find_default(this.visibleColumn, function(item) {
        return item.type === "selection";
      });
      var selected = this.getSelectRecords();
      var position = typeof selectToolbar === "object" ? selectToolbar.position : "";
      if (selectColumn && selected && selected.length) {
        var selectTh = this.$el.querySelector("th.tiny-grid-header__column.col__selection");
        var headerWrapper = this.$el.querySelector(".tiny-grid>.tiny-grid__header-wrapper");
        var tr = selectTh.parentNode;
        var thArr = toArray_default(tr.childNodes);
        var range = document.createRange();
        var rangeBoundingRect;
        var headerBoundingRect = headerWrapper.getBoundingClientRect();
        var layout = {
          width: 0,
          height: 0,
          left: 0,
          top: 0,
          zIndex: 1
        };
        var adjust = 1;
        if (selectColumn.fixed === "right") {
          range.setStart(tr, thArr.indexOf(selectTh));
          range.setEnd(tr, thArr.length);
          rangeBoundingRect = range.getBoundingClientRect();
          layout.left = adjust + "px";
        } else {
          range.setStart(tr, 0);
          range.setEnd(tr, thArr.indexOf(selectTh) + 1);
          rangeBoundingRect = range.getBoundingClientRect();
          layout.left = rangeBoundingRect.width + adjust + "px";
        }
        layout.width = headerBoundingRect.width - rangeBoundingRect.width - 2 * adjust + "px";
        if (!selectColumn.fixed && position === "left") {
          range = document.createRange();
          range.setStart(tr, 0);
          range.setEnd(tr, thArr.indexOf(selectTh));
          rangeBoundingRect = range.getBoundingClientRect();
          layout.left = adjust + "px";
          layout.width = rangeBoundingRect.width - 2 * adjust + "px";
        }
        layout.top = headerBoundingRect.height - rangeBoundingRect.height + adjust + "px";
        layout.height = rangeBoundingRect.height - 2 * adjust + "px";
        return this.$nextTick().then(function() {
          selectToolbarStore.layout = layout;
          selectToolbarStore.visible = true;
        });
      }
    }
    return this.$nextTick();
  },
  // 切换多选工具栏的显示
  toggleSelectToolbarVisible: function toggleSelectToolbarVisible() {
    this.selectToolbarStore.visible = !this.selectToolbarStore.visible;
    return this.$nextTick();
  },
  // 在空数据时Selection列表头复选框禁用，headerAutoDisabled设置为false就会和旧版本兼容
  handleSelectionHeader: function handleSelectionHeader() {
    var tableFullData = this.tableFullData, visibleColumn = this.visibleColumn, _this$selectConfig6 = this.selectConfig, selectConfig = _this$selectConfig6 === void 0 ? {} : _this$selectConfig6;
    var headerAutoDisabled = selectConfig.headerAutoDisabled;
    var selectionColumn = visibleColumn.find(function(column) {
      return column.type === "selection";
    });
    if ((typeof headerAutoDisabled === "undefined" || typeof headerAutoDisabled === "boolean" && headerAutoDisabled) && !tableFullData.length && selectionColumn) {
      this.headerCheckDisabled = true;
    }
  }
};
var Checkbox = {
  host: "table",
  install: function install13(host) {
    Object.assign(host.methods, Methods$1);
  }
};
var Methods = {
  // 展开树节点事件
  triggerTreeExpandEvent: function triggerTreeExpandEvent(event, _ref272) {
    var _this97 = this;
    var row2 = _ref272.row;
    var currentColumn = this.currentColumn, currentRow = this.currentRow;
    var rest = this.toggleTreeExpansion(row2);
    var eventParams = {
      $table: this,
      row: row2,
      rowIndex: this.getRowIndex(row2)
    };
    emitEvent$1(this, "toggle-tree-change", [eventParams, event]);
    this.$nextTick(function() {
      if (currentRow) {
        _this97.setCurrentRow(currentRow);
      } else if (currentColumn) {
        _this97.setCurrentColumn(currentColumn);
      }
    });
    return rest;
  },
  // 切换/展开树节点
  toggleTreeExpansion: function toggleTreeExpansion(row2) {
    return this.setTreeExpansion(row2);
  },
  // 处理默认展开树节点
  handleDefaultTreeExpand: function handleDefaultTreeExpand() {
    var _this98 = this;
    var tableFullData = this.tableFullData, treeConfig = this.treeConfig;
    if (!treeConfig) {
      return;
    }
    var children = treeConfig.children, expandAll = treeConfig.expandAll, rowids = treeConfig.expandRowKeys;
    var treeExpandeds = [];
    var rowkey = getTableRowKey(this);
    var isNonEmptyArr = function isNonEmptyArr2(arr) {
      return isArray(arr) && arr.length;
    };
    var doExpandAll = function doExpandAll2() {
      filterTree_default(tableFullData, function(row2) {
        return isNonEmptyArr(row2[children]) && treeExpandeds.push(row2);
      }, treeConfig);
      _this98.treeExpandeds = treeExpandeds;
    };
    var doExpandRows = function doExpandRows2() {
      rowids.forEach(function(rowid2) {
        var matchObj = findTree_default(tableFullData, function(item) {
          return rowid2 === get_default(item, rowkey);
        }, treeConfig);
        matchObj && isNonEmptyArr(matchObj.item[children]) && treeExpandeds.push(matchObj.item);
      });
      _this98.treeExpandeds = treeExpandeds;
    };
    if (expandAll) {
      doExpandAll();
    } else if (rowids) {
      doExpandRows();
    }
    setTreeScrollYCache(this);
  },
  setAllTreeExpansion: function setAllTreeExpansion(expanded) {
    var tableFullData = this.tableFullData, treeConfig = this.treeConfig;
    var children = treeConfig.children;
    var treeExpandeds = [];
    if (expanded) {
      var rowHandler = function rowHandler2(row2) {
        if (row2[children] && row2[children].length) {
          treeExpandeds.push(row2);
        }
      };
      eachTree_default(tableFullData, rowHandler, treeConfig);
    }
    this.treeExpandeds = treeExpandeds;
    setTreeScrollYCache(this);
    return this.$nextTick().then(this.recalculate);
  },
  // 设置展开树形节点，二个参数设置这一行展开与否：支持单行，支持多行
  setTreeExpansion: function setTreeExpansion(rows, expanded) {
    var treeConfig = this.treeConfig, treeExpandeds = this.treeExpandeds, tableFullData = this.tableFullData;
    var accordion = treeConfig.accordion, children = treeConfig.children;
    var isToggle = arguments.length === 1;
    if (!rows) {
      return this.$nextTick().then(this.recalculate);
    }
    if (!isArray(rows)) {
      rows = [rows];
    }
    if (accordion) {
      rows = rows.slice(rows.length - 1, rows.length);
    }
    var treeExpandedsCopy = [].concat(treeExpandeds);
    rows.forEach(function(row2) {
      if (row2[children] && row2[children].length) {
        var _index7 = treeExpandedsCopy.indexOf(row2);
        if (accordion) {
          var matchObj = findTree_default(tableFullData, function(item) {
            return item === row2;
          }, treeConfig);
          remove_default(treeExpandedsCopy, function(item) {
            return ~matchObj.items.indexOf(item);
          });
        }
        if (~_index7 && (isToggle || !expanded)) {
          treeExpandedsCopy.splice(_index7, 1);
          return;
        }
        if (!~_index7 && (isToggle || expanded)) {
          treeExpandedsCopy.push(row2);
        }
      }
    });
    this.treeExpandeds = treeExpandedsCopy;
    setTreeScrollYCache(this);
    return this.$nextTick().then(this.recalculate);
  },
  hasTreeExpand: function hasTreeExpand(row2) {
    return ~this.treeExpandeds.indexOf(row2);
  },
  clearTreeExpand: function clearTreeExpand() {
    var _this99 = this;
    var hasExpand = this.treeExpandeds.length;
    this.treeExpandeds = [];
    setTreeScrollYCache(this);
    return this.$nextTick().then(function() {
      return hasExpand ? _this99.recalculate() : 0;
    });
  }
};
var Tree = {
  host: "table",
  install: function install14(host) {
    Object.assign(host.methods, Methods);
  }
};
var version = "3.16.0";
var plugins = [Panel, Edit, Export, Keyboard, Validator, Resize, Panel$1, FetchData, Pager, Toolbar, ColumnAnchor, Dragger, Sort, Tooltip, Checkbox, Tree];
GridAdapter.setup({
  i18n: t
});
GridAdapter.t = t;
plugins.map(function(plugin) {
  return plugin.install(plugin.host === "grid" ? Grid : Table);
});
var getWrapFunc = function getWrapFunc2(name) {
  return function() {
    var tinyTable = this.$refs.tinyTable;
    if (tinyTable) {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return this.$refs.tinyTable[name].apply(tinyTable, args);
    }
  };
};
Object.keys(Table.methods).forEach(function(name) {
  if (!Grid.methods[name]) {
    Grid.methods[name] = getWrapFunc(name);
  }
});
Grid.version = version;
Grid.install = function(Vue) {
  Vue.component(Grid.name, Grid);
};
Column.install = function(Vue) {
  Vue.component(Column.name, Column);
};
export {
  getFuncText as A,
  Button as B,
  Column as C,
  Dropdown as D,
  touchStart as E,
  touchMove as F,
  Grid as G,
  singleton_default as H,
  index$w as I,
  index$F as J,
  index$z as K,
  Pager$1 as P,
  Radio as R,
  Tag as T,
  isObject_default as a,
  index$H as b,
  Popup as c,
  index$B as d,
  index$C as e,
  index$I as f,
  emitEvent as g,
  index$y as h,
  index$J as i,
  index$x as j,
  find_default as k,
  index as l,
  isNull_default as m,
  arrayEach_default as n,
  mapTree_default as o,
  GlobalConfig$1 as p,
  DropdownMenu as q,
  DropdownItem as r,
  isArray as s,
  event_default as t,
  getListeners as u,
  toStringJSON_default as v,
  isPlainObject_default as w,
  getEventTargetNode as x,
  GridAdapter as y,
  emitEvent$1 as z
};
