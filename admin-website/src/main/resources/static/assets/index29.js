import { s as svg, d as defineComponent, p as props, j as index$k, g as index$l, i as index$m, aw as index$n, a as setup, $ as $props, b as $prefix, c as $setup, ax as KEY_CODE, au as Tooltip, ay as index$q, R as Radio, v as __spreadValues, o as on, f as off, az as getDomNode, aA as addClass, aB as removeClass, e as popup_manager_default, aC as merge, as as ActionSheet, t as __spreadProps, B as Button, I as Input, L as Layout, aD as Popover, aE as index$t, at as t, T as TINYModal, aF as index$v, aG as index$w, P as extend, aH as appProperties, C as Checkbox, aI as CheckboxGroup, ai as directive, aJ as useDefer, aK as isVue2, k as h, Q as isNumber, ap as clickoutside_default, ar as format } from "./index.js";
import { u as openBlock, v as createElementBlock, w as createBaseVNode, k as resolveComponent, y as createBlock, H as withCtx, A as normalizeClass, B as resolveDynamicComponent, z as createCommentVNode, D as renderSlot, J as createTextVNode, E as toDisplayString, T as Transition, G as normalizeStyle, l as createVNode, I as withDirectives, S as vModelRadio, L as Fragment, O as withModifiers, P as withKeys, M as renderList, F as mergeProps, K as vShow, a9 as createSlots, N as normalizeProps, aa as guardReactiveProps, ab as setBlockTracking, g as getCurrentInstance, o as onBeforeUnmount, U as resolveDirective } from "./vue.js";
import { e as isObject_default, f as emitEvent, g as index$r, h as index$s, R as Row, C as Col, j as find_default, k as index$u, l as Radio$1, G as Grid, a as Column, m as isNull_default, n as arrayEach_default, o as mapTree_default, p as GlobalConfig$1, D as Dropdown, q as DropdownMenu, r as DropdownItem, s as isArray, t as event_default, u as getListeners, v as toStringJSON_default, w as isPlainObject_default, x as getEventTargetNode, y as GridAdapter, z as emitEvent$1, A as getFuncText, B as Button$1 } from "./index26.js";
import { S as Select, O as Option, r as Search } from "./index30.js";
import { i as index$o } from "./warning-triangle.js";
import { i as index$p } from "./chevron-up.js";
var _hoisted_1$l = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "200 100.001 412.5 396.337",
  "xml:space": "preserve"
};
var _hoisted_2$l = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M337.288 105.538c11.775-6.513 13.163-7.275 22.5-2.313l4.188 2.3c3.712 4.863 4.387 5.75 5.063 9.962l.475 3.388v377.463h-37.5V163.875l-105.5 105.538L200 242.9l137.288-137.362zM500 418.75v37.5h-75v-37.5h75zm37.5-87.5v37.5H425v-37.5h112.5zm37.5-87.5v37.5H425v-37.5h150zm37.5-87.5v37.5H425v-37.5h187.5z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$i = [_hoisted_2$l];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, [].concat(_hoisted_3$i));
}
var Ascending = {
  render: render$b
};
var index$j = function index2() {
  return svg({
    name: "IconAscending",
    component: Ascending
  })();
};
var _hoisted_1$k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$k = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "del_svg__st0",
    d: "M22.8 5.3c-.2-.2-.6-.3-.8-.3h-4V3.7c0-1-.9-1.7-1.8-1.7H8.8C7.9 2 7 2.7 7 3.7V5H3c-.5 0-1 .5-1 1s.5 1 1 1h1v14c0 .9 1.1 2 2 2h13c.9 0 2-1.1 2-2V7h1c.5 0 1-.5 1-1 0-.2 0-.6-.2-.7zM9 4h7v1H9V4zM6 21V7h13v14H6z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$h = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "del_svg__st0",
    d: "M10 9c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1s-1-.4-1-1v-8c0-.6.4-1 1-1zM15 9c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1s-1-.4-1-1v-8c0-.6.4-1 1-1z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4$a = [_hoisted_2$k, _hoisted_3$h];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, [].concat(_hoisted_4$a));
}
var Del = {
  render: render$a
};
var index$i = function index22() {
  return svg({
    name: "IconDel",
    component: Del
  })();
};
var _hoisted_1$j = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "181.25 112.5 412.5 396.343",
  "xml:space": "preserve"
};
var _hoisted_2$j = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M350.763 112.5v377.463l-.475 3.387c-.675 4.226-1.35 5.101-5.063 9.963l-4.2 2.3c-9.325 4.976-10.712 4.2-22.5-2.3L181.25 365.938l26.525-26.5 105.488 105.55V112.5h37.5zM593.75 418.75v37.5h-187.5v-37.5h187.5zm-37.5-87.5v37.5h-150v-37.5h150zm-37.5-87.5v37.5h-112.5v-37.5h112.5zm-37.5-87.5v37.5h-75v-37.5h75z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$g = [_hoisted_2$j];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, [].concat(_hoisted_3$g));
}
var Descending = {
  render: render$9
};
var index$h = function index23() {
  return svg({
    name: "IconDescending",
    component: Descending
  })();
};
var _hoisted_1$i = {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$i = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0Zm-.07 4.324a.843.843 0 1 1 0 1.687.843.843 0 0 1 0-1.687Zm3.684 13.057a.843.843 0 0 1-.844.844H9.09a.843.843 0 1 1 0-1.688h1.997V9.177H9.68a.843.843 0 1 1 0-1.688h2.25c.466 0 .843.378.843.844v8.206h1.997c.467 0 .844.377.844.843Z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$f = [_hoisted_2$i];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, [].concat(_hoisted_3$f));
}
var Help = {
  render: render$8
};
var index$g = function index24() {
  return svg({
    name: "IconHelp",
    component: Help
  })();
};
var _hoisted_1$h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 161.754 156.391",
  "xml:space": "preserve"
};
var _hoisted_2$h = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M108.456 77.845v52.727c0 6.446-5.273 11.717-11.719 11.717H14.716C8.273 142.288 3 137.018 3 130.572V66.125h105.456v11.72zm-93.74 0v52.727h82.021V77.845H14.716zM3 66.125c0-29.292 23.435-52.727 52.728-52.727 29.292 0 52.728 23.435 52.728 52.727H96.737c0-22.847-18.161-41.009-41.009-41.009-22.849 0-41.012 18.162-41.012 41.009H3z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$e = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M61.586 105.965v12.89c0 3.515-2.343 5.856-5.858 5.856-3.516 0-5.86-2.342-5.86-5.856v-12.89c-3.514-1.756-5.857-5.858-5.857-10.547 0-6.441 5.272-11.715 11.717-11.715 6.444 0 11.716 5.273 11.716 11.715 0 4.689-2.343 8.204-5.858 10.547zM154.754 148.391a8 8 0 0 1-8 8H128.42a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h18.334a8 8 0 0 1 8 8v140.391z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4$9 = [_hoisted_2$h, _hoisted_3$e];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, [].concat(_hoisted_4$9));
}
var LeftFrozen = {
  render: render$7
};
var index$f = function index25() {
  return svg({
    name: "IconLeftFrozen",
    component: LeftFrozen
  })();
};
var _hoisted_1$g = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 26.369 46.799",
  "xml:space": "preserve"
};
var _hoisted_2$g = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M25.021 2.73 22.883.535l-22 22.375 22.75 23 2.208-2.208-20.8-20.636z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$d = [_hoisted_2$g];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, [].concat(_hoisted_3$d));
}
var LeftWard = {
  render: render$6
};
var index$e = function index26() {
  return svg({
    name: "IconLeftWard",
    component: LeftWard
  })();
};
var _hoisted_1$f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$f = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "lock_svg__st0",
    d: "M21 12v9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h18v2zM5 12v9h14v-9H5zM3 10c0-5 4-9 9-9s9 4 9 9h-2c0-3.9-3.1-7-7-7s-7 3.1-7 7H3z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$c = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "lock_svg__st0",
    d: "M13 16.8V19c0 .6-.4 1-1 1s-1-.4-1-1v-2.2c-.6-.3-1-1-1-1.8 0-1.1.9-2 2-2s2 .9 2 2c0 .8-.4 1.4-1 1.8z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4$8 = [_hoisted_2$f, _hoisted_3$c];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, [].concat(_hoisted_4$8));
}
var Lock = {
  render: render$5
};
var index$d = function index27() {
  return svg({
    name: "IconLock",
    component: Lock
  })();
};
var _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$e = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "minus_svg__st0",
    d: "M19.1 13H4.9c-.5 0-.9-.4-.9-1s.4-1 .9-1h14.2c.5 0 .9.4.9 1s-.4 1-.9 1z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$b = [_hoisted_2$e];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, [].concat(_hoisted_3$b));
}
var Minus = {
  render: render$4
};
var index$c = function index28() {
  return svg({
    name: "IconMinus",
    component: Minus
  })();
};
var _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 161.754 156.391",
  "xml:space": "preserve"
};
var _hoisted_2$d = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M51.298 66.125h105.456v64.447c0 6.446-5.273 11.717-11.717 11.717h-82.02c-6.445 0-11.719-5.271-11.719-11.717V66.125zm11.719 11.72v52.727h82.021V77.845H63.017zM145.037 66.125c0-22.847-18.162-41.009-41.012-41.009-22.848 0-41.009 18.162-41.009 41.009H51.298c0-29.292 23.436-52.727 52.728-52.727 29.293 0 52.729 23.435 52.729 52.727h-11.718z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$a = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M92.31 95.418c0-6.441 5.271-11.715 11.716-11.715 6.445 0 11.717 5.273 11.717 11.715 0 4.688-2.343 8.791-5.856 10.547v12.89c0 3.515-2.345 5.856-5.86 5.856s-5.858-2.342-5.858-5.856v-12.89c-3.516-2.343-5.859-5.858-5.859-10.547zM5 148.391a8 8 0 0 0 8 8h18.334a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H13a8 8 0 0 0-8 8v140.391z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4$7 = [_hoisted_2$d, _hoisted_3$a];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, [].concat(_hoisted_4$7));
}
var RightFrozen = {
  render: render$3
};
var index$b = function index29() {
  return svg({
    name: "IconRightFrozen",
    component: RightFrozen
  })();
};
var _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 26.369 46.799",
  "xml:space": "preserve"
};
var _hoisted_2$c = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M1.529 2.91 3.667.715l22 22.375-22.75 23-2.209-2.208 20.801-20.636z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$9 = [_hoisted_2$c];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, [].concat(_hoisted_3$9));
}
var Rightward = {
  render: render$2
};
var index$a = function index210() {
  return svg({
    name: "IconRightward",
    component: Rightward
  })();
};
var _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$b = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "save_svg__st0",
    d: "M16.3 1H3c-.9 0-2 1.1-2 2v18c0 .9 1.1 2 2 2h18c.9 0 2-1.1 2-2V7.8L16.3 1zM7 3h6v6.3c0 .4-.3.7-.7.7H7.7c-.4 0-.7-.3-.7-.7V3zM3 21V3h2v7c0 1.3.6 2 2 2h6c1.3 0 2-.7 2-2V3l6 6v12H3zm7-12c.6 0 1-.4 1-.9V4.9c0-.5-.4-.9-1-.9s-1 .4-1 .9V8c0 .6.4 1 1 1z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$8 = [_hoisted_2$b];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, [].concat(_hoisted_3$8));
}
var Save = {
  render: render$1
};
var index$9 = function index211() {
  return svg({
    name: "IconSave",
    component: Save
  })();
};
var _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$a = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "unlock_svg__st0",
    d: "M21 12v9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h18v2zM5 12v9h14v-9H5z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$7 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "unlock_svg__st0",
    d: "M13 16.8V19c0 .6-.4 1-1 1s-1-.4-1-1v-2.2c-.6-.3-1-1-1-1.8 0-1.1.9-2 2-2s2 .9 2 2c0 .8-.4 1.4-1 1.8zM20.5 7h-2.2c-1.1-2.4-3.5-4-6.3-4-3.9 0-7 3.1-7 7H3c0-5 4-9 9-9 3.9 0 7.3 2.5 8.5 6zm.5 3h-2 2z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4$6 = [_hoisted_2$a, _hoisted_3$7];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, [].concat(_hoisted_4$6));
}
var Unlock = {
  render
};
var index$8 = function index212() {
  return svg({
    name: "IconUnlock",
    component: Unlock
  })();
};
const ALERT_TIMEOUT = 2e3;
const watchAutoHide = ({ api: api2, props: props2 }) => (newVal) => {
  if (props2.autoHide && newVal) {
    const timer = setTimeout(() => {
      api2.handleClose();
      clearTimeout(timer);
    }, ALERT_TIMEOUT);
  }
};
const computedClass = ({ props: props2, mode }) => () => {
  const { type, size, center } = props2;
  if (mode === "mobile") {
    const alertClass = ["tiny-mobile-alert", "tiny-mobile-alert--" + type, "tiny-mobile-alert--" + size];
    if (center) {
      alertClass.push("is-center");
    }
    return alertClass;
  }
  return [];
};
const computedStyle$1 = ({ props: props2, mode }) => () => {
  if (mode === "mobile") {
    const style = {
      top: isNaN(props2.offset) ? props2.offset : `${props2.offset}px`
    };
    return style;
  }
  return null;
};
const handleClose$1 = ({ emit, state }) => () => {
  state.show = false;
  emit("close");
};
const computedGetIcon = ({ constants, props: props2, designConfig }) => () => {
  var _a;
  const designIcon = (_a = designConfig == null ? void 0 : designConfig.icons) == null ? void 0 : _a[props2.type];
  return props2.icon || designIcon || constants.ICON_MAP[props2.type];
};
const computedGetTitle = ({ constants, t: t2, props: props2 }) => () => props2.title || t2(constants.TITLE_MAP[props2.type]);
const handleHeaderClick = ({ state, props: props2, vm }) => () => {
  if (props2.showFoldable) {
    state.contentVisible = !state.contentVisible;
  }
  if (vm.$refs.ContentDescribe) {
    state.contentDescribeHeight = vm.$refs.ContentDescribe.scrollHeight;
    if (state.contentDescribeHeight > state.contentMaxHeight) {
      state.scrollStatus = true;
    }
  }
  if (vm.$refs.ContentDefault) {
    state.contentDefaultHeight = vm.$refs.ContentDefault.scrollHeight;
    if (state.contentDefaultHeight > state.contentMaxHeight) {
      state.scrollStatus = true;
    }
  }
};
const getEl = (node) => {
  return node.$el || node;
};
const handlerTargetNode = ({ props: props2, parent, vm, nextTick }) => () => {
  const { target } = props2;
  const { $parent } = parent;
  nextTick(() => {
    const alertParentNode = $parent == null ? void 0 : $parent.$refs[target];
    if (!target || !alertParentNode) {
      return;
    }
    const targetNode = Array.isArray(alertParentNode) ? alertParentNode[0] : alertParentNode;
    getEl(targetNode).insertBefore(vm.$el, getEl(targetNode).firstChild);
  });
};
const api$4 = ["handleClose", "state", "handleHeaderClick"];
const initState$1 = ({ api: api2, computed, constants, reactive }) => {
  return reactive({
    show: true,
    contentVisible: false,
    contentDescribeHeight: 0,
    contentDefaultHeight: 0,
    contentMaxHeight: constants.CONTENT_MAXHEUGHT,
    scrollStatus: false,
    getIcon: computed(() => api2.computedGetIcon()),
    getTitle: computed(() => api2.computedGetTitle()),
    alertClass: computed(() => api2.computedClass()),
    alertStyle: computed(() => api2.computedStyle())
  });
};
const initApi$1 = ({ api: api2, state, constants, props: props2, designConfig, t: t2, emit, vm, parent, nextTick, mode }) => {
  Object.assign(api2, {
    state,
    computedGetIcon: computedGetIcon({ constants, props: props2, designConfig }),
    computedGetTitle: computedGetTitle({ constants, props: props2, t: t2 }),
    computedClass: computedClass({ props: props2, mode }),
    computedStyle: computedStyle$1({ props: props2, mode }),
    handleClose: handleClose$1({ emit, state }),
    handleHeaderClick: handleHeaderClick({ state, props: props2, vm }),
    watchAutoHide: watchAutoHide({ api: api2, props: props2 }),
    handlerTargetNode: handlerTargetNode({ props: props2, parent, vm, nextTick })
  });
};
const initWatcher = ({ watch, props: props2, api: api2 }) => {
  watch(() => props2.autoHide, api2.watchAutoHide, { immediate: true });
  watch(() => props2.target, api2.handlerTargetNode, { immediate: true });
};
const renderless$4 = (props2, { computed, reactive, watch }, { t: t2, emit, constants, vm, designConfig, parent, nextTick, mode }) => {
  const api2 = {};
  const state = initState$1({ api: api2, computed, constants, reactive });
  initApi$1({ api: api2, state, constants, props: props2, designConfig, t: t2, emit, vm, parent, nextTick, mode });
  initWatcher({ watch, props: props2, api: api2 });
  return api2;
};
const index$7 = "";
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
var _export_sfc$b = function _export_sfc2(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$b(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$e = defineComponent({
  props: [].concat(props, ["icon", "type", "size", "description", "title", "closable", "center", "showIcon", "closeText", "customClass"]),
  components: {
    IconClose: index$k(),
    IconSuccess: index$l(),
    IconError: index$m(),
    IconHelp: index$g(),
    IconWarning: index$n()
  },
  emits: ["close"],
  setup: function setup$1(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$4,
      api: api$4
    });
  }
});
var _hoisted_1$9 = {
  key: 0,
  class: "tiny-alert__title"
};
var _hoisted_2$9 = {
  key: 1,
  class: "tiny-alert__opration"
};
var _hoisted_3$6 = {
  key: 2,
  class: "is-custom"
};
function _sfc_render$e(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_close = resolveComponent("icon-close");
  return openBlock(), createBlock(Transition, {
    name: "tiny-transition-alert-fade"
  }, {
    default: withCtx(function() {
      return [_ctx.state.show ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(["tiny-alert", "tiny-alert--" + _ctx.type, "tiny-alert--" + _ctx.size, {
            "is-center": _ctx.center
          }, _ctx.customClass])
        },
        [_ctx.showIcon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.state.getIcon), {
          key: 0,
          class: "tiny-svg-size tiny-alert__icon"
        })) : createCommentVNode("v-if", true), createBaseVNode(
          "div",
          {
            class: normalizeClass(["tiny-alert__content", {
              "close-hidden": !_ctx.closable
            }])
          },
          [_ctx.size === "large" ? (openBlock(), createElementBlock("div", _hoisted_1$9, [renderSlot(_ctx.$slots, "title", {}, function() {
            return [createTextVNode(
              toDisplayString(_ctx.state.getTitle),
              1
              /* TEXT */
            )];
          })])) : createCommentVNode("v-if", true), createBaseVNode(
            "div",
            {
              class: normalizeClass(["tiny-alert__description", {
                "is-hide": _ctx.size === "large" && !_ctx.description && !_ctx.slots.description
              }])
            },
            [renderSlot(_ctx.$slots, "description", {}, function() {
              return [createTextVNode(
                toDisplayString(_ctx.description),
                1
                /* TEXT */
              )];
            })],
            2
            /* CLASS */
          ), _ctx.size === "large" ? (openBlock(), createElementBlock("div", _hoisted_2$9, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true)],
          2
          /* CLASS */
        ), !_ctx.closeText && _ctx.closable ? (openBlock(), createBlock(_component_icon_close, {
          key: 1,
          onClick: _ctx.handleClose,
          class: "tiny-svg-size tiny-alert__icon tiny-alert__close"
        }, null, 8, ["onClick"])) : !_ctx.closeText && !_ctx.closable ? (openBlock(), createElementBlock("span", _hoisted_3$6, [renderSlot(_ctx.$slots, "close")])) : _ctx.closeText && _ctx.closable ? (openBlock(), createElementBlock(
          "span",
          {
            key: 3,
            onClick: _cache[0] || (_cache[0] = function() {
              return _ctx.handleClose && _ctx.handleClose.apply(_ctx, arguments);
            }),
            class: "is-custom"
          },
          toDisplayString(_ctx.closeText),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true)];
    }),
    _: 3
    /* FORWARDED */
  });
}
var pc$4 = /* @__PURE__ */ _export_sfc$b(_sfc_main$e, [["render", _sfc_render$e]]);
const index$6 = "";
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
var _export_sfc$a = function _export_sfc22(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$a(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$d = defineComponent({
  props: [].concat(props, ["icon", "type", "size", "description", "closable", "showIcon", "closeText", "duration", "offset", "autoHide", "target", "center"]),
  components: {
    IconClose: index$k(),
    IconSuccess: index$l(),
    IconError: index$m(),
    IconHelp: index$g(),
    IconWarning: index$o()
    // key值在 $constants 中已定义
  },
  setup: function setup$12(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$4,
      api: api$4
    });
  }
});
function _sfc_render$d(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_close = resolveComponent("icon-close");
  return openBlock(), createBlock(Transition, {
    name: "tiny-mobile-alert-fade"
  }, {
    default: withCtx(function() {
      return [_ctx.state.show ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(_ctx.state.alertClass),
          style: normalizeStyle(_ctx.state.alertStyle)
        },
        [_ctx.showIcon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.state.getIcon), {
          key: 0,
          class: "tiny-mobile-alert__icon"
        })) : createCommentVNode("v-if", true), createBaseVNode(
          "div",
          {
            class: normalizeClass(["tiny-mobile-alert__content", {
              "is-hideicon": !_ctx.showIcon
            }])
          },
          [renderSlot(_ctx.$slots, "default", {}, function() {
            return [createTextVNode(
              toDisplayString(_ctx.description),
              1
              /* TEXT */
            )];
          })],
          2
          /* CLASS */
        ), !_ctx.closeText && _ctx.closable ? (openBlock(), createBlock(_component_icon_close, {
          key: 1,
          onClick: _ctx.handleClose,
          class: "tiny-mobile-alert__icon tiny-mobile-alert__close"
        }, null, 8, ["onClick"])) : _ctx.closeText && _ctx.closable ? (openBlock(), createElementBlock(
          "span",
          {
            key: 2,
            onClick: _cache[0] || (_cache[0] = function() {
              return _ctx.handleClose && _ctx.handleClose.apply(_ctx, arguments);
            }),
            class: "is-custom"
          },
          toDisplayString(_ctx.closeText),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)],
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true)];
    }),
    _: 3
    /* FORWARDED */
  });
}
var mobile$1 = /* @__PURE__ */ _export_sfc$a(_sfc_main$d, [["render", _sfc_render$d]]);
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
var _export_sfc$9 = function _export_sfc23(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$9(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$c = defineComponent({
  emits: ["close"],
  props: [].concat(props, ["icon", "type", "size", "description", "title", "closable", "center", "showIcon", "closeText", "singleLine", "scrolling", "showFoldable", "customClass"]),
  components: {
    IconClose: index$k(),
    IconSuccess: index$l(),
    IconError: index$m(),
    IconHelp: index$g(),
    IconWarning: index$n(),
    IconChevronDown: index$p()
  },
  setup: function setup$13(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$4,
      api: api$4
    });
  }
});
var _hoisted_1$8 = {
  "data-tag": "tiny-alert-title"
};
var _hoisted_2$8 = {
  "data-tag": "tiny-alert-icon",
  class: "ml-2.5"
};
var _hoisted_3$5 = {
  key: 0,
  "data-tag": "tiny-alert-large",
  class: "font-medium"
};
var _hoisted_4$5 = {
  key: 1,
  class: "pt-2"
};
function _sfc_render$c(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_chevron_down = resolveComponent("icon-chevron-down");
  var _component_icon_close = resolveComponent("icon-close");
  return openBlock(), createBlock(Transition, null, {
    default: withCtx(function() {
      return [_ctx.state.show ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          "data-tag": "tiny-alert",
          class: normalizeClass(_ctx.m("min-h-min flex py-2 sm:py-3 px-4 my-2 rounded box-border font-light sm:font-normal text-color-text-primary", {
            "bg-color-info-primary-subtler": _ctx.type === "info" || !_ctx.type
          }, {
            "bg-color-error-subtler": _ctx.type === "error"
          }, {
            "bg-color-warning-subtler": _ctx.type === "warning"
          }, {
            "bg-color-success-subtler": _ctx.type === "success"
          }, {
            "text-center": _ctx.center
          }, _ctx.customClass))
        },
        [_ctx.showIcon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.state.getIcon), {
          key: 0,
          "custom-class": "h-4.5 w-4.5 mt-1 sm:mt-0.5 sm:h-6 sm:w-5 sm:h-5 fill-current",
          class: normalizeClass([{
            "text-color-info-primary": _ctx.type === "info" || !_ctx.type
          }, {
            "text-color-error": _ctx.type === "error"
          }, {
            "text-color-warning": _ctx.type === "warning"
          }, {
            "text-color-success": _ctx.type === "success"
          }])
        }, null, 8, ["class"])) : createCommentVNode("v-if", true), _ctx.showFoldable ? (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            "data-tag": "tiny-alert-foldable",
            class: normalizeClass(["flex-1 leading-6 text-sm overflow-hidden", _ctx.showIcon ? "mx-2" : "mr-2"])
          },
          [_ctx.size === "large" ? (openBlock(), createElementBlock("div", {
            key: 0,
            "data-tag": "tiny-alert-large",
            onClick: _cache[0] || (_cache[0] = function() {
              return _ctx.handleHeaderClick && _ctx.handleHeaderClick.apply(_ctx, arguments);
            }),
            class: "inline-flex cursor-pointer font-medium"
          }, [createBaseVNode("span", _hoisted_1$8, [renderSlot(_ctx.$slots, "title", {}, function() {
            return [createTextVNode(
              toDisplayString(_ctx.state.getTitle),
              1
              /* TEXT */
            )];
          })]), createBaseVNode("span", _hoisted_2$8, [createVNode(_component_icon_chevron_down, {
            class: normalizeClass(["transition-transform duration-300 align-top my-1 fill-color-icon-placeholder", [_ctx.state.contentVisible ? "rotate-180" : "rotate-0"]])
          }, null, 8, ["class"])])])) : createCommentVNode("v-if", true), createBaseVNode(
            "div",
            {
              "data-tag": "tiny-alert-content",
              ref: "ContentDescribe",
              class: normalizeClass(["transition-all duration-900 ease-linear", {
                "hidden": _ctx.size === "large" && !_ctx.description && !_ctx.slots.description
              }, {
                "overflow-y-auto": _ctx.state.scrollStatus
              }, _ctx.state.contentVisible ? "max-h-[theme(spacing.72)]" : "max-h-0"])
            },
            [createBaseVNode(
              "div",
              {
                "data-tag": "tiny-alert-singline",
                class: normalizeClass(["text-color-text-secondary", [{
                  "truncate": _ctx.singleLine
                }, {
                  "hover:animate-[leftMove_10s_linear_infinite] hover:overflow-visible cursor-pointer": _ctx.singleLine && _ctx.scrolling
                }]])
              },
              [renderSlot(_ctx.$slots, "description", {}, function() {
                return [createTextVNode(
                  toDisplayString(_ctx.description),
                  1
                  /* TEXT */
                )];
              })],
              2
              /* CLASS */
            )],
            2
            /* CLASS */
          ), _ctx.size === "large" && _ctx.slots.default ? (openBlock(), createElementBlock(
            "div",
            {
              key: 1,
              "data-tag": "tiny-alert-default",
              ref: "ContentDefault",
              class: normalizeClass(["transition-all duration-900 ease-linear", {
                "pt-2": _ctx.description && _ctx.state.contentVisible
              }, {
                "overflow-y-auto": _ctx.state.scrollStatus
              }, _ctx.state.contentVisible ? "max-h-[theme(spacing.72)]" : "max-h-0"])
            },
            [renderSlot(_ctx.$slots, "default")],
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true)],
          2
          /* CLASS */
        )) : (openBlock(), createElementBlock(
          "div",
          {
            key: 2,
            "data-tag": "tiny-alert-notfoldable",
            class: normalizeClass(["flex-1 leading-6 text-sm overflow-hidden cursor-pointer", [_ctx.showIcon ? "ml-2" : "", _ctx.closable ? "mr-2" : ""]])
          },
          [_ctx.size === "large" ? (openBlock(), createElementBlock("div", _hoisted_3$5, [renderSlot(_ctx.$slots, "title", {}, function() {
            return [createTextVNode(
              toDisplayString(_ctx.state.getTitle),
              1
              /* TEXT */
            )];
          })])) : createCommentVNode("v-if", true), createBaseVNode(
            "div",
            {
              "data-tag": "tiny-alert-singlelinebox",
              class: normalizeClass([{
                "hidden": _ctx.size === "large" && !_ctx.description && !_ctx.slots.description
              }])
            },
            [createBaseVNode(
              "div",
              {
                "data-tag": "tiny-alert-singleline",
                class: normalizeClass([{
                  "truncate": _ctx.singleLine
                }, {
                  "hover:animate-[leftMove_10s_linear_infinite] hover:overflow-visible cursor-pointer": _ctx.singleLine && _ctx.scrolling
                }])
              },
              [renderSlot(_ctx.$slots, "description", {}, function() {
                return [createTextVNode(
                  toDisplayString(_ctx.description),
                  1
                  /* TEXT */
                )];
              })],
              2
              /* CLASS */
            )],
            2
            /* CLASS */
          ), _ctx.size === "large" && _ctx.slots.default ? (openBlock(), createElementBlock("div", _hoisted_4$5, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true)],
          2
          /* CLASS */
        )), !_ctx.closeText && _ctx.closable ? (openBlock(), createBlock(_component_icon_close, {
          key: 3,
          onClick: _ctx.handleClose,
          class: "h-4 w-4 mt-1 cursor-pointer fill-color-text-primary opacity-70"
        }, null, 8, ["onClick"])) : _ctx.closeText && _ctx.closable ? (openBlock(), createElementBlock(
          "span",
          {
            key: 4,
            "data-tag": "tiny-alert-close-text",
            onClick: _cache[1] || (_cache[1] = function() {
              return _ctx.handleClose && _ctx.handleClose.apply(_ctx, arguments);
            }),
            class: "leading-6 text-sm cursor-pointer"
          },
          toDisplayString(_ctx.closeText),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true)];
    }),
    _: 3
    /* FORWARDED */
  });
}
var mobileFirst$3 = /* @__PURE__ */ _export_sfc$9(_sfc_main$c, [["render", _sfc_render$c]]);
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
var template$4 = function template2(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$4;
  }
  if ("mobile" === (tinyMode || mode)) {
    return mobile$1;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$3;
  }
  return pc$4;
};
var $constants$3 = {
  ICON_MAP: {
    success: "icon-success",
    error: "icon-error",
    info: "icon-help",
    warning: "icon-warning"
  },
  TITLE_MAP: {
    success: "ui.alert.success",
    error: "ui.alert.error",
    info: "ui.alert.info",
    warning: "ui.alert.warning"
  },
  CONTENT_MAXHEUGHT: 252
};
var alertProps = _extends$5({}, $props, {
  _constants: {
    type: Object,
    default: function _default() {
      return $constants$3;
    }
  },
  icon: [String, Object],
  type: {
    type: String,
    default: "info"
  },
  size: {
    type: String,
    default: "normal"
  },
  description: {
    type: String,
    default: ""
  },
  title: {
    type: String
  },
  center: Boolean,
  showIcon: {
    type: Boolean,
    default: true
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeText: {
    type: String,
    default: ""
  },
  singleLine: {
    type: Boolean,
    default: false
  },
  scrolling: {
    type: Boolean,
    default: false
  },
  showFoldable: {
    type: Boolean,
    default: false
  },
  customClass: [String, Object, Array],
  offset: {
    type: [Number, String],
    default: 0
  },
  autoHide: {
    type: Boolean,
    default: false
  },
  target: {
    type: String,
    default: ""
  }
});
var Alert = defineComponent({
  name: $prefix + "Alert",
  props: alertProps,
  setup: function setup2(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$4
    });
  }
});
var version$5 = "3.16.0";
Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
};
Alert.version = version$5;
const isEmpty = (obj) => {
  if (isObject_default(obj)) {
    return Object.keys(obj).length === 0;
  }
  return true;
};
var isEmpty_default = isEmpty;
const toJSONString = (obj) => JSON.stringify(obj) || "";
var toJSONString_default = toJSONString;
const handleKeydown = (parent) => (event) => {
  const target = event.target;
  const className = (target == null ? void 0 : target.nodeName) === "INPUT" ? "[type=radio]" : "[role=radio]";
  const radios = parent.$el.querySelectorAll(className);
  const length = radios.length;
  const index3 = [].indexOf.call(radios, target);
  const roleRadiosNodes = parent.$el.querySelectorAll("[role=radio]");
  switch (event.keyCode) {
    case KEY_CODE.ArrowDown:
    case KEY_CODE.ArrowRight:
      if (index3 === length - 1) {
        event.stopPropagation();
        event.preventDefault();
        roleRadiosNodes[0].click();
        roleRadiosNodes[0].focus();
      } else {
        roleRadiosNodes[index3 + 1].click();
        roleRadiosNodes[index3 + 1].focus();
      }
      break;
    case KEY_CODE.ArrowUp:
    case KEY_CODE.ArrowLeft:
      event.stopPropagation();
      event.preventDefault();
      if (index3 === 0) {
        roleRadiosNodes[length - 1].click();
        roleRadiosNodes[length - 1].focus();
      } else {
        roleRadiosNodes[index3 - 1].click();
        roleRadiosNodes[index3 - 1].focus();
      }
      break;
  }
};
const mounted$1 = (parent) => () => {
  const radios = parent.$el.querySelectorAll("[type=radio]");
  const firstLabel = parent.$el.querySelectorAll("[role=radio]")[0];
  if (![].some.call(radios, (radio) => radio.checked) && firstLabel) {
    firstLabel.tabIndex = 0;
  }
};
const api$3 = ["state", "handleKeydown"];
const renderless$3 = (props2, { computed, onMounted, reactive, watch, provide: provide2 }, { parent, dispatch }) => {
  const state = reactive({
    radioGroupSize: computed(() => props2.size),
    tag: "div",
    activeStyle: props2.fill
  });
  parent.$on("handleChange", (value3) => {
    parent.$emit("change", value3);
  });
  const api2 = {
    state,
    dispatch,
    onMounted: mounted$1(parent),
    handleKeydown: handleKeydown(parent)
  };
  watch(
    () => props2.modelValue,
    (value3) => {
      api2.dispatch("FormItem", "form.change", [value3]);
    }
  );
  onMounted(api2.onMounted);
  provide2("radioVertical", props2.vertical);
  provide2("showTips", props2.showTips);
  provide2("size", props2.size);
  return api2;
};
const handleChange = ({
  constants,
  nextTick,
  dispatch,
  state
}) => () => {
  nextTick(() => {
    dispatch(constants.RADIO_GROUP, "handleChange", [state.value]);
  });
};
const getValue = (state) => () => {
  var _a;
  return (_a = state.radioGroup) == null ? void 0 : _a.modelValue;
};
const setValue = ({ state }) => (val) => {
  var _a;
  return (_a = state.radioGroup) == null ? void 0 : _a.$emit("update:modelValue", val);
};
const getGroup = ({ constants, parent: $parent }) => () => {
  let parent = $parent.$parent;
  while (parent) {
    if (parent.$options.componentName !== constants.RADIO_GROUP) {
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return null;
};
const getStyle = (state) => () => {
  var _a, _b, _c, _d;
  return {
    backgroundColor: ((_a = state.radioGroup) == null ? void 0 : _a.fill) || "",
    borderColor: ((_b = state.radioGroup) == null ? void 0 : _b.fill) || "",
    boxShadow: ((_c = state.radioGroup) == null ? void 0 : _c.fill) ? `-1px 0 0 0 ${state.radioGroup.fill}` : "",
    color: ((_d = state.radioGroup) == null ? void 0 : _d.textColor) || ""
  };
};
const toggleEvents = ({ vm, props: props2 }) => (isUnBind = false) => {
  const radioEl = vm.$refs.radio;
  Object.keys(props2.events).forEach((ev) => {
    radioEl[(isUnBind ? "remove" : "add") + "EventListener"](ev, props2.events[ev]);
  });
};
const keydownHandle = ({ state, props: props2 }) => () => {
  state.value = state.isDisabled ? state.value : props2.label;
};
const handleFocus = (state) => () => state.focus = true;
const handleBlur = (state) => () => state.focus = false;
const api$2 = ["state", "handleChange", "keydownHandle", "handleFocus", "handleBlur"];
const renderless$2 = (props2, { computed, reactive, onMounted, onBeforeUnmount: onBeforeUnmount2, inject }, { parent, dispatch, constants, nextTick, vm }) => {
  const api2 = {
    getGroup: getGroup({ constants, parent }),
    toggleEvents: toggleEvents({ vm, props: props2 })
  };
  const state = reactive({
    focus: false,
    value: computed({
      get: () => api2.getValue(),
      set: (val) => api2.setValue(val)
    }),
    radioGroup: computed(() => api2.getGroup()),
    activeStyle: computed(() => api2.getStyle()),
    size: computed(() => {
      var _a;
      return (_a = state.radioGroup) == null ? void 0 : _a.state.radioGroupSize;
    }),
    isDisabled: computed(() => {
      var _a;
      return props2.disabled || ((_a = state.radioGroup) == null ? void 0 : _a.disabled);
    }),
    tabIndex: computed(() => state.isDisabled || state.radioGroup && state.value !== props2.label ? -1 : 0),
    showTips: inject("showTips", false),
    tipContent: props2.tipContent
  });
  Object.assign(api2, {
    state,
    getValue: getValue(state),
    getStyle: getStyle(state),
    setValue: setValue({ state }),
    handleChange: handleChange({ constants, dispatch, nextTick, state }),
    keydownHandle: keydownHandle({ state, props: props2 }),
    handleFocus: handleFocus(state),
    handleBlur: handleBlur(state)
  });
  onMounted(() => {
    api2.toggleEvents(false);
  });
  onBeforeUnmount2(() => {
    api2.toggleEvents(true);
  });
  return api2;
};
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
var _export_sfc$8 = function _export_sfc24(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$8(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$b = defineComponent({
  emits: ["change"],
  props: [].concat(props, ["label", "events", "text", "disabled", "name"]),
  setup: function setup$14(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$2,
      api: api$2
    });
  }
});
var _hoisted_1$7 = ["aria-checked", "aria-disabled", "tabindex"];
var _hoisted_2$7 = ["value", "name", "disabled"];
function _sfc_render$b(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["tiny-radio-button", [_ctx.state.size ? "tiny-radio-button--" + _ctx.state.size : "", {
      "is-active": _ctx.state.value === _ctx.label
    }, {
      "is-disabled": _ctx.state.isDisabled
    }, {
      "is-focus": _ctx.state.focus
    }]]),
    role: "radio",
    "aria-checked": _ctx.state.value === _ctx.label,
    "aria-disabled": _ctx.state.isDisabled,
    tabindex: _ctx.state.tabIndex,
    onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(function($event) {
      return _ctx.state.value = _ctx.state.isDisabled ? _ctx.state.value : _ctx.label;
    }, ["stop", "prevent"]), ["space"]))
  }, [withDirectives(createBaseVNode("input", {
    ref: "radio",
    class: "tiny-radio-button__orig-radio",
    value: _ctx.label,
    type: "radio",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
      return _ctx.state.value = $event;
    }),
    name: _ctx.name,
    onChange: _cache[1] || (_cache[1] = function() {
      return _ctx.handleChange && _ctx.handleChange.apply(_ctx, arguments);
    }),
    disabled: _ctx.state.isDisabled,
    tabindex: "-1",
    onFocus: _cache[2] || (_cache[2] = function($event) {
      return _ctx.state.focus = true;
    }),
    onBlur: _cache[3] || (_cache[3] = function($event) {
      return _ctx.state.focus = false;
    })
  }, null, 40, _hoisted_2$7), [[vModelRadio, _ctx.state.value]]), createBaseVNode(
    "span",
    {
      class: "tiny-radio-button__inner",
      style: normalizeStyle(_ctx.state.value === _ctx.label ? _ctx.state.activeStyle : void 0),
      onKeydown: _cache[4] || (_cache[4] = withModifiers(function() {
      }, ["stop"]))
    },
    [renderSlot(_ctx.$slots, "default"), !_ctx.slots.default ? (openBlock(), createElementBlock(
      Fragment,
      {
        key: 0
      },
      [createTextVNode(
        toDisplayString(_ctx.text || _ctx.label),
        1
        /* TEXT */
      )],
      64
      /* STABLE_FRAGMENT */
    )) : createCommentVNode("v-if", true)],
    36
    /* STYLE, NEED_HYDRATION */
  )], 42, _hoisted_1$7);
}
var pc$3 = /* @__PURE__ */ _export_sfc$8(_sfc_main$b, [["render", _sfc_render$b]]);
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
var _export_sfc$7 = function _export_sfc25(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$7(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$a = defineComponent({
  emits: ["change"],
  props: [].concat(props, ["label", "events", "text", "disabled", "name", "tipContent"]),
  components: {
    TinyTooltip: Tooltip,
    IconHelpCircle: index$q()
  },
  inheritAttrs: false,
  setup: function setup$15(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$2,
      api: api$2
    });
  }
});
var _hoisted_1$6 = ["aria-checked", "aria-disabled", "tabindex"];
var _hoisted_2$6 = ["value", "name", "disabled"];
function _sfc_render$a(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_IconHelpCircle = resolveComponent("IconHelpCircle");
  var _component_tiny_tooltip = resolveComponent("tiny-tooltip");
  return openBlock(), createElementBlock("label", {
    "data-tag": "tiny-radio-button",
    class: normalizeClass(["relative outline-0 inline-flex rounded-none cursor-pointer items-center [&:first-of-type_span]:border-l-0.5 sm:[&:first-of-type_span]:border-l [&:first-of-type_span]:rounded-l-sm [&:last-of-type_span]:rounded-r-sm", _ctx.state.size === "small" ? "sm:h-6 h-10 text-xs" : "sm:h-7 sm:leading-7 h-11 text-sm sm:text-xs", !_ctx.disabled && !_ctx.state.radioGroup.disabled && _ctx.state.value === _ctx.label && "sm:[&:not(:first-of-type)_span]:shadow-[calc(-1*theme(borderWidth.DEFAULT))_0_0_0_theme(colors.color.border.focus)] [&:not(:first-of-type)_span]:shadow-[calc(-1*theme(borderWidth[0.5]))_0_0_0_theme(colors.color.border.focus)]"]),
    role: "radio",
    "aria-checked": _ctx.state.value === _ctx.label,
    "aria-disabled": _ctx.state.isDisabled,
    tabindex: _ctx.state.tabIndex,
    onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(function() {
      return _ctx.keydownHandle && _ctx.keydownHandle.apply(_ctx, arguments);
    }, ["stop", "prevent"]), ["space"]))
  }, [withDirectives(createBaseVNode("input", {
    ref: "radio",
    class: "opacity-0 outline-0 absolute -z-10",
    value: _ctx.label,
    type: "radio",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
      return _ctx.state.value = $event;
    }),
    name: _ctx.name,
    onChange: _cache[1] || (_cache[1] = function() {
      return _ctx.handleChange && _ctx.handleChange.apply(_ctx, arguments);
    }),
    disabled: _ctx.state.isDisabled,
    tabindex: "-1",
    onFocus: _cache[2] || (_cache[2] = function() {
      return _ctx.handleFocus && _ctx.handleFocus.apply(_ctx, arguments);
    }),
    onBlur: _cache[3] || (_cache[3] = function() {
      return _ctx.handleBlur && _ctx.handleBlur.apply(_ctx, arguments);
    })
  }, null, 40, _hoisted_2$6), [[vModelRadio, _ctx.state.value]]), createBaseVNode(
    "span",
    {
      "data-tag": "tiny-radio-button-content",
      class: normalizeClass(_ctx.m("relative sm:border-y border-y-0.5 sm:border-r border-r-0.5 border-solid inline-block leading-7 items-center min-w-[theme(spacing.10)] max-w-[theme(spacing.20)] sm:min-w-[theme(spacing.12)] sm:max-w-[theme(spacing.36)] text-center overflow-hidden text-ellipsis whitespace-nowrap px-3 cursor-pointer border-color-border box-border", _ctx.state.radioGroup.disabled && _ctx.state.value === _ctx.label && "text-color-bg-1 bg-color-brand-disabled border-y-0 cursor-not-allowed border-transparent shadow-none", _ctx.state.radioGroup.disabled && _ctx.state.value !== _ctx.label && "bg-color-bg-4 cursor-not-allowed border-color-border-disabled text-color-text-secondary", _ctx.disabled && !_ctx.state.radioGroup.disabled && "text-color-text-secondary bg-none cursor-not-allowed", _ctx.state.value === _ctx.label && !_ctx.disabled && !_ctx.state.radioGroup.disabled && "border-color-border-focus text-color-brand-focus", _ctx.state.value !== _ctx.label && !_ctx.disabled && !_ctx.state.radioGroup.disabled && "text-color-text-secondary hover:text-color-brand-hover active:text-color-brand", _ctx.state.size === "small" ? "sm:h-6 leading-6 px-2 h-6" : "sm:h-7 h-7", _ctx.state.showTips && "sm:pr-7")),
      style: normalizeStyle(_ctx.state.value === _ctx.label ? _ctx.state.activeStyle : null),
      onKeydown: _cache[4] || (_cache[4] = withModifiers(function() {
      }, ["stop"]))
    },
    [renderSlot(_ctx.$slots, "default"), !_ctx.slots.default ? (openBlock(), createElementBlock(
      Fragment,
      {
        key: 0
      },
      [createTextVNode(
        toDisplayString(_ctx.text || _ctx.label) + " ",
        1
        /* TEXT */
      ), _ctx.state.showTips ? (openBlock(), createBlock(_component_tiny_tooltip, {
        key: 0,
        effect: "light",
        content: _ctx.tipContent,
        placement: "top",
        class: "sm:block hidden"
      }, {
        default: withCtx(function() {
          return [createVNode(_component_IconHelpCircle, {
            class: "absolute right-3 top-1.5 bottom-1.5 text-sm cursor-pointer w-3.5 h-3.5 fill-color-border hover:fill-color-brand-focus"
          })];
        }),
        _: 1
        /* STABLE */
      }, 8, ["content"])) : createCommentVNode("v-if", true)],
      64
      /* STABLE_FRAGMENT */
    )) : createCommentVNode("v-if", true)],
    38
    /* CLASS, STYLE, NEED_HYDRATION */
  )], 42, _hoisted_1$6);
}
var mobileFirst$2 = /* @__PURE__ */ _export_sfc$7(_sfc_main$a, [["render", _sfc_render$a]]);
const index$5 = "";
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
var template$3 = function template22(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$3;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$2;
  }
  return pc$3;
};
var $constants$2 = {
  RADIO_GROUP: "RadioGroup"
};
var radioButtonProps = _extends$4({}, $props, {
  _constants: {
    type: Object,
    default: function _default2() {
      return $constants$2;
    }
  },
  name: String,
  text: String,
  events: {
    type: Object,
    default: function _default22() {
      return {};
    }
  },
  label: {},
  disabled: Boolean,
  tipContent: String
});
var RadioButton = defineComponent({
  name: $prefix + "RadioButton",
  props: radioButtonProps,
  setup: function setup3(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$3
    });
  }
});
var version$4 = "3.16.0";
RadioButton.install = function(Vue) {
  Vue.component(RadioButton.name, RadioButton);
};
RadioButton.version = version$4;
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
var _export_sfc$6 = function _export_sfc26(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$6(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$9 = defineComponent({
  components: {
    Radio,
    RadioButton
  },
  emits: ["change", "update:modelValue"],
  props: [].concat(props, ["options", "modelValue", "type", "size", "fill", "textColor", "disabled", "vertical", "displayOnly"]),
  setup: function setup$16(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$3,
      api: api$3
    });
  }
});
function _sfc_render$9(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_radio = resolveComponent("radio");
  var _component_radio_button = resolveComponent("radio-button");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.state.tag), {
    class: normalizeClass(["tiny-radio-group", [_ctx.vertical ? "list-inline" : ""]]),
    role: "radiogroup",
    onKeydown: _ctx.handleKeydown,
    ref: "group"
  }, {
    default: withCtx(function() {
      return [renderSlot(_ctx.$slots, "default", {}, function() {
        return [_ctx.type === "radio" ? (openBlock(true), createElementBlock(
          Fragment,
          {
            key: 0
          },
          renderList(_ctx.options, function(item, index3) {
            return openBlock(), createBlock(_component_radio, mergeProps({
              "display-only": _ctx.displayOnly,
              key: index3
            }, item), null, 16, ["display-only"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )) : createCommentVNode("v-if", true), _ctx.type === "button" ? (openBlock(true), createElementBlock(
          Fragment,
          {
            key: 1
          },
          renderList(_ctx.options, function(item, index3) {
            return openBlock(), createBlock(
              _component_radio_button,
              mergeProps({
                key: index3
              }, item),
              null,
              16
              /* FULL_PROPS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )) : createCommentVNode("v-if", true)];
      })];
    }),
    _: 3
    /* FORWARDED */
  }, 40, ["class", "onKeydown"]);
}
var pc$2 = /* @__PURE__ */ _export_sfc$6(_sfc_main$9, [["render", _sfc_render$9]]);
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
var _export_sfc$5 = function _export_sfc27(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$5(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$8 = defineComponent({
  components: {
    Radio,
    RadioButton
  },
  emits: ["change"],
  props: [].concat(props, ["options", "modelValue", "type", "size", "fill", "textColor", "disabled", "vertical", "showTips", "displayOnly"]),
  inheritAttrs: false,
  setup: function setup$17(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$3,
      api: api$3
    });
  }
});
function _sfc_render$8(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_radio = resolveComponent("radio");
  var _component_radio_button = resolveComponent("radio-button");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.state.tag), {
    class: normalizeClass(["inline-flex", _ctx.vertical && "flex-col"]),
    role: "radiogroup",
    onKeydown: _ctx.handleKeydown,
    ref: "group",
    "data-tag": "tiny-radio-group"
  }, {
    default: withCtx(function() {
      return [renderSlot(_ctx.$slots, "default", {}, function() {
        return [_ctx.type === "radio" ? (openBlock(true), createElementBlock(
          Fragment,
          {
            key: 0
          },
          renderList(_ctx.options, function(item, index3) {
            return openBlock(), createBlock(_component_radio, mergeProps({
              "display-only": _ctx.displayOnly,
              key: index3
            }, item), null, 16, ["display-only"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )) : createCommentVNode("v-if", true), _ctx.type === "button" ? (openBlock(true), createElementBlock(
          Fragment,
          {
            key: 1
          },
          renderList(_ctx.options, function(item, index3) {
            return openBlock(), createBlock(
              _component_radio_button,
              mergeProps({
                key: index3
              }, item),
              null,
              16
              /* FULL_PROPS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )) : createCommentVNode("v-if", true)];
      })];
    }),
    _: 3
    /* FORWARDED */
  }, 40, ["class", "onKeydown"]);
}
var mobileFirst$1 = /* @__PURE__ */ _export_sfc$5(_sfc_main$8, [["render", _sfc_render$8]]);
const index$4 = "";
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
var template$2 = function template23(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$2;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$1;
  }
  return pc$2;
};
var radioGroupProps = _extends$3({}, $props, {
  modelValue: {},
  size: {
    type: String,
    default: ""
  },
  fill: String,
  textColor: String,
  disabled: Boolean,
  vertical: Boolean,
  options: {
    type: Array,
    default: function _default3() {
      return [];
    }
  },
  type: {
    type: String,
    default: "radio"
  },
  showTips: {
    type: Boolean,
    default: false
  },
  displayOnly: {
    type: Boolean,
    default: false
  }
});
var RadioGroup = defineComponent({
  name: $prefix + "RadioGroup",
  componentName: "RadioGroup",
  props: radioGroupProps,
  setup: function setup4(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$2
    });
  }
});
var version$3 = "3.16.0";
RadioGroup.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
RadioGroup.install = function(Vue) {
  Vue.component(RadioGroup.name, RadioGroup);
};
RadioGroup.version = version$3;
const computedAnimationName = ({ constants, props: props2 }) => () => props2.rightSlide ? constants.DIALOG_SLIDER_RIGHT : constants.DIALOG_FADE;
const computedAddUnit = (value3) => isNaN(Number(value3)) ? value3 : value3 + "px";
const computedStyle = ({ props: props2, state, designConfig }) => () => {
  var _a;
  let style = {};
  let { width, top, rightSlide, maxHeight } = props2;
  if (top === void 0) {
    top = rightSlide ? "0" : ((_a = designConfig == null ? void 0 : designConfig.state) == null ? void 0 : _a.top) ? "" : "15vh";
  }
  width = computedAddUnit(width);
  top = computedAddUnit(top);
  maxHeight = computedAddUnit(maxHeight);
  if (!state.isFull) {
    style.width = width;
    style.top = state.top || top;
    style.maxHeight = maxHeight;
    if (rightSlide) {
      style.right = 0;
      style.height = "calc(100vh - " + style.top + ")";
    } else {
      style.left = state.left || "calc((100vw - " + width + ") / 2)";
    }
  }
  if (state.dragStyle) {
    style = __spreadValues(__spreadValues({}, style), state.dragStyle);
    if (state.isFull) {
      style = { left: "0px", top: "0px" };
    }
  }
  return style;
};
const computedBodyStyle = ({ vm, props: props2, state }) => () => {
  const style = {
    maxHeight: ""
  };
  const headerHeight = vm.$refs.header && vm.$refs.header.offsetHeight || 0;
  const footerHeight = vm.$refs.footer && vm.$refs.footer.offsetHeight || 0;
  let { maxHeight } = props2;
  if (state.isFull || props2.rightSlide) {
    if (vm.$slots.footer) {
      style.maxHeight = `calc(100vh - ${headerHeight + footerHeight}px)`;
    } else {
      style.maxHeight = `calc(100vh - ${headerHeight}px)`;
    }
  } else {
    style.maxHeight = "65vh";
  }
  if (maxHeight && !state.isFull) {
    style.maxHeight = "none";
  }
  return style;
};
const watchVisible = ({
  api: api2,
  constants,
  emit,
  nextTick,
  parent,
  props: props2,
  vm,
  state
}) => (val) => {
  const el = parent.$el;
  if (props2.lockScroll) {
    val ? api2.showScrollbar() : api2.hideScrollbar();
  }
  state.move = false;
  state.isFull = props2.fullscreen;
  emit("update:visible", val);
  if (val) {
    state.closed = false;
    emit("open");
    on(el, "scroll", api2.updatePopper);
    nextTick(() => {
      vm.$refs.dialog.scrollTop = 0;
    });
    if (props2.appendToBody) {
      document.body.appendChild(el);
    }
  } else {
    off(el, "scroll", api2.updatePopper);
    if (!state.closed) {
      state.emitter.emit("boxclose", props2.isFormReset);
      emit("close");
    }
    if (props2.destroyOnClose) {
      nextTick(() => state.key++);
    }
    if (props2.rightSlide) {
      const dialogBoxDom = el.querySelector(constants.DIALOG_BOX_CLASS) || el;
      dialogBoxDom.style.left = "";
    }
  }
};
const mounted = ({ api: api2, parent, props: props2 }) => () => {
  if (props2.lockScroll && props2.visible) {
    api2.showScrollbar();
  }
  if (props2.visible) {
    const el = parent.$el;
    api2.open();
    if (props2.appendToBody) {
      document.body.appendChild(el);
    }
  }
};
const unMounted = ({ api: api2, parent, props: props2 }) => () => {
  const el = parent.$el;
  api2.hideScrollbar();
  if (props2.appendToBody && el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
};
const useMouseEventDown = ({ state }) => (event) => {
  state.mouseDownWrapperFlag = false;
  if (/tiny-dialog-box__wrapper/.test(event.target.className) && event.type === "mousedown") {
    state.mouseDownWrapperFlag = true;
  }
};
const useMouseEventUp = ({ state }) => (event) => {
  state.mouseUpWrapperFlag = false;
  if (/tiny-dialog-box__wrapper/.test(event.target.className) && event.type === "mouseup") {
    state.mouseUpWrapperFlag = true;
  }
};
const handleWrapperClick = ({ api: api2, props: props2, state }) => () => {
  if (!props2.closeOnClickModal) {
    return;
  }
  if (state.mouseDownWrapperFlag && state.mouseUpWrapperFlag) {
    api2.handleClose("mask");
  }
};
const handleClose = ({
  api: api2,
  constants,
  emit,
  parent,
  props: props2
}) => (type = "close") => {
  if (typeof props2.beforeClose === "function" && props2.beforeClose(type) === false) {
    return;
  }
  const el = parent.$el;
  if (props2.rightSlide) {
    const dialogBoxDom = el.querySelector(constants.DIALOG_BOX_CLASS) || el;
    dialogBoxDom.style.left = "";
  }
  if (!emitEvent(emit, "before-close", api2.hide)) {
    return;
  }
  api2.hide(type);
};
const hide = ({ api: api2, emit, state, props: props2 }) => (cancel) => {
  if (cancel !== false) {
    state.emitter.emit("boxclose", props2.isFormReset);
    emit("update:visible", false);
    emit("change", false);
    emit("close", cancel);
    state.closed = true;
    api2.hideScrollbar();
  }
};
const handleConfirm = ({ api: api2, emit }) => () => {
  emit("confirm");
  api2.handleClose("confirm");
};
const handleCancel = ({ api: api2, emit }) => () => {
  emit("cancel");
  api2.handleClose("cancel");
};
const updatePopper = ({ api: api2, constants }) => () => {
  api2.broadcast(constants.SELECT_DROPDOWN, "updatePopper");
  api2.broadcast(constants.DROPDOWN_MENU, "updatePopper");
};
const afterEnter = (emit) => () => {
  emit("opened");
};
const afterLeave = (emit) => () => {
  emit("closed");
};
const findPopoverComponent = ({
  vm,
  componentList
}) => {
  const children = vm.$children;
  if (!children || children.length === 0) {
    return [];
  }
  children.forEach((child) => {
    const tag = child.$options.componentName;
    if (tag === "Select") {
      componentList.push(child);
    }
    findPopoverComponent({ vm: child, componentList });
  });
  return componentList;
};
const closeAllPopover = (parent) => {
  findPopoverComponent({ vm: parent, componentList: [] }).forEach((component) => {
    component.state.visible = false;
  });
};
const handleDrag = ({
  parent,
  props: props2,
  state,
  emit,
  vm
}) => (event) => {
  if (!props2.draggable) {
    return;
  }
  let modalBoxElem = vm.$refs.dialog;
  event.preventDefault();
  let demMousemove = document.onmousemove;
  let demMouseup = document.onmouseup;
  let disX = event.clientX - modalBoxElem.offsetLeft;
  let disY = event.clientY - modalBoxElem.offsetTop;
  let { visibleHeight, visibleWidth } = getDomNode();
  document.onmousemove = (event2) => {
    event2.preventDefault();
    if (!state.move) {
      emit("drag-start", event2);
      closeAllPopover(parent);
      state.move = true;
    }
    let offsetWidth = modalBoxElem.offsetWidth;
    let offsetHeight = modalBoxElem.offsetHeight;
    let left;
    let top;
    if (!props2.dragOutsideWindow) {
      let maxX = Math.max(visibleWidth - offsetWidth, 0);
      let maxY = Math.max(visibleHeight - offsetHeight, 0);
      left = event2.clientX - disX;
      top = event2.clientY - disY;
      left = left < 0 ? 0 : left > maxX ? maxX : left;
      top = top < 0 ? 0 : top > maxY ? maxY : top;
    } else {
      let maxX = visibleWidth - 10;
      let maxY = visibleHeight - 10;
      left = event2.clientX - disX;
      top = event2.clientY - disY;
      left = event2.clientX < 0 ? -disX : left > maxX ? maxX : left;
      top = event2.clientY < 0 ? -disY : top > maxY ? maxY : top;
    }
    if (!state.isFull) {
      state.dragStyle = { left: `${left}px`, top: `${top}px` };
    }
    state.left = `${left}px`;
    state.top = `${top}px`;
    state.emitter.emit("boxdrag");
    emit("drag-move", event2);
  };
  document.onmouseup = () => {
    document.onmousemove = demMousemove;
    document.onmouseup = demMouseup;
    state.move = false;
    props2.draggable && emit("drag-end", event);
  };
};
const showScrollbar = (lockScrollClass) => () => {
  addClass(document.body, lockScrollClass);
};
const hideScrollbar = (lockScrollClass) => () => {
  removeClass(document.body, lockScrollClass);
};
const toggleFullScreen = ({ state, emit, nextTick, vm }) => (isFull) => {
  state.isFull = isFull;
  nextTick(() => {
    emit("resize", { fullscreen: isFull, dialog: vm.$refs.dialog });
  });
};
let idSeed = 1;
const isServer = typeof window === "undefined";
const setWatchFn = ({
  onMounted,
  onBeforeUnmount: onBeforeUnmount2,
  watch,
  vm,
  api: api2,
  props: props2,
  state,
  nextTick
}) => {
  onMounted(() => {
    vm._popupId = `popup-${idSeed++}`;
    popup_manager_default.register(vm._popupId, vm);
  });
  onBeforeUnmount2(() => {
    popup_manager_default.deregister(vm._popupId);
    popup_manager_default.closeModal(vm._popupId);
  });
  watch(
    () => props2.visible,
    (val) => {
      if (val) {
        if (vm._opening) {
          return;
        }
        if (state.rendered) {
          api2.open();
        } else {
          state.rendered = true;
          nextTick(() => {
            api2.open();
          });
        }
      } else {
        api2.close();
      }
    }
  );
};
const openFn = ({ state, vm }) => (options) => {
  if (!state.rendered) {
    state.rendered = true;
  }
  const props2 = merge({}, vm.$props || vm, options);
  if (vm._closeTimer) {
    clearTimeout(vm._closeTimer);
    vm._closeTimer = null;
  }
  clearTimeout(vm._openTimer);
  const doOpen = () => {
    if (isServer || state.opened) {
      return;
    }
    vm._opening = true;
    const dom = vm.$el;
    const modal = props2.modal;
    const zIndex = props2.zIndex;
    if (zIndex) {
      popup_manager_default.zIndex = zIndex;
    }
    if (modal) {
      if (vm._closing) {
        popup_manager_default.closeModal(vm._popupId);
        vm._closing = false;
      }
      popup_manager_default.openModal(
        vm._popupId,
        popup_manager_default.nextZIndex(),
        props2.modalAppendToBody ? void 0 : dom,
        props2.modalClass,
        props2.modalFade
      );
      if (props2.lockScroll) {
        popup_manager_default.fixBodyBorder();
        addClass(document.body, popup_manager_default.popLockClass);
      }
    }
    if (getComputedStyle(dom).position === "static") {
      dom.style.position = "absolute";
    }
    dom.style.zIndex = popup_manager_default.nextZIndex().toString();
    state.opened = true;
    vm._opening = false;
  };
  const openDelay = Number(props2.openDelay);
  if (openDelay > 0) {
    vm._openTimer = setTimeout(() => {
      vm._openTimer = null;
      doOpen();
    }, openDelay);
  } else {
    doOpen();
  }
};
const closeFn = ({ state, vm }) => () => {
  if (vm._openTimer !== null) {
    clearTimeout(vm._openTimer);
    vm._openTimer = null;
  }
  clearTimeout(vm._closeTimer);
  const doClose = () => {
    vm._closing = true;
    state.opened = false;
    popup_manager_default.closeModal(vm._popupId);
    vm._closing = false;
  };
  const closeDelay = Number(vm.closeDelay);
  if (closeDelay > 0) {
    vm._closeTimer = setTimeout(() => {
      vm._closeTimer = null;
      doClose();
    }, closeDelay);
  } else {
    doClose();
  }
};
var vue_popup_default = (options) => {
  const { api: api2, nextTick, onBeforeUnmount: onBeforeUnmount2, onMounted, props: props2, reactive, toRefs, vm, watch } = options;
  const state = reactive({
    opened: false,
    rendered: false
  });
  setWatchFn({ onMounted, onBeforeUnmount: onBeforeUnmount2, watch, vm, api: api2, props: props2, state, nextTick });
  const open = openFn({ state, vm });
  const close = closeFn({ state, vm });
  return __spreadValues({ open, close, PopupManager: popup_manager_default }, toRefs(state));
};
const api$1 = [
  "afterEnter",
  "afterLeave",
  "handleClose",
  "handleWrapperClick",
  "useMouseEventDown",
  "useMouseEventUp",
  "handleCancel",
  "handleConfirm",
  "handleDrag",
  "toggleFullScreen",
  "state"
];
const initState = ({
  reactive,
  computed,
  api: api2,
  emitter,
  props: props2,
  useBreakpoint
}) => {
  const { current } = useBreakpoint();
  const state = reactive({
    emitter: emitter(),
    key: 0,
    x: null,
    y: null,
    top: null,
    left: null,
    max: null,
    move: false,
    closed: false,
    dragable: false,
    isFull: props2.fullscreen,
    style: computed(() => api2.computedStyle()),
    bodyStyle: computed(() => api2.computedBodyStyle()),
    animationName: computed(() => api2.computedAnimationName()),
    current,
    dragStyle: null
  });
  return state;
};
const mergeState = ({ reactive, state, toRefs, usePopups }) => {
  const { opened, rendered } = usePopups;
  const merge2 = reactive(__spreadValues({
    opened,
    rendered
  }, toRefs(state)));
  return merge2;
};
const initApi = ({
  emit,
  api: api2,
  state,
  parent,
  props: props2,
  lockScrollClass,
  constants,
  usePopups,
  nextTick,
  broadcast,
  designConfig,
  vm
}) => {
  const { open, close } = usePopups;
  Object.assign(api2, {
    state,
    open,
    close,
    broadcast,
    handleCancel: handleCancel({ api: api2, emit }),
    handleConfirm: handleConfirm({ api: api2, emit }),
    updatePopper: updatePopper({ api: api2, constants }),
    handleWrapperClick: handleWrapperClick({ api: api2, props: props2, state }),
    useMouseEventDown: useMouseEventDown({ state }),
    useMouseEventUp: useMouseEventUp({ state }),
    hide: hide({ api: api2, emit, state, props: props2 }),
    handleClose: handleClose({ api: api2, constants, emit, parent, props: props2 }),
    watchVisible: watchVisible({
      api: api2,
      constants,
      emit,
      nextTick,
      parent,
      props: props2,
      vm,
      state
    }),
    computedStyle: computedStyle({ state, props: props2, designConfig }),
    computedBodyStyle: computedBodyStyle({ vm, props: props2, state }),
    mounted: mounted({ api: api2, parent, props: props2 }),
    unMounted: unMounted({ api: api2, parent, props: props2 }),
    computedAnimationName: computedAnimationName({ constants, props: props2 }),
    afterEnter: afterEnter(emit),
    afterLeave: afterLeave(emit),
    hideScrollbar: hideScrollbar(lockScrollClass),
    showScrollbar: showScrollbar(lockScrollClass),
    handleDrag: handleDrag({ parent, props: props2, state, emit, vm }),
    // tiny 新增
    toggleFullScreen: toggleFullScreen({ state, emit, nextTick, vm })
  });
};
const initWatch = ({ watch, state, api: api2, props: props2 }) => {
  watch(() => props2.visible, api2.watchVisible);
  watch(
    () => props2.fullscreen,
    (value3) => {
      state.isFull = value3;
    }
  );
};
const renderless$1 = (props2, { computed, onBeforeUnmount: onBeforeUnmount2, onMounted, toRefs, reactive, watch }, {
  vm,
  emitter,
  parent,
  emit,
  constants,
  nextTick,
  mode,
  broadcast,
  designConfig,
  useBreakpoint
}) => {
  const api2 = {};
  const lockScrollClass = constants.scrollLockClass(mode);
  let state = initState({ reactive, computed, api: api2, emitter, props: props2, useBreakpoint });
  const usePopups = vue_popup_default({
    api: api2,
    nextTick,
    onBeforeUnmount: onBeforeUnmount2,
    onMounted,
    props: props2,
    reactive,
    toRefs,
    vm,
    watch
  });
  initApi({
    api: api2,
    state,
    parent,
    props: props2,
    emit,
    constants,
    usePopups,
    lockScrollClass,
    nextTick,
    vm,
    broadcast,
    designConfig
  });
  state = mergeState({ reactive, state, toRefs, usePopups });
  initWatch({ watch, state, api: api2, props: props2 });
  onMounted(api2.mounted);
  onBeforeUnmount2(api2.unMounted);
  return api2;
};
const index$3 = "";
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
var _export_sfc$4 = function _export_sfc28(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$4(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$7 = defineComponent({
  components: {
    IconClose: index$k(),
    IconFullscreen: index$r(),
    IconMinscreen: index$s()
  },
  emits: [
    "update:visible",
    "change",
    "before-close",
    "open",
    "close",
    "opened",
    "confirm",
    "cancel",
    "closed",
    "drag-start",
    "drag-move",
    "drag-end",
    // tiny 新增
    "resize"
  ],
  props: [].concat(props, ["resize", "isFormReset", "visible", "title", "modal", "modalAppendToBody", "appendToBody", "lockScroll", "closeOnClickModal", "closeOnPressEscape", "showClose", "width", "fullscreen", "top", "center", "draggable", "dragOutsideWindow", "showHeader", "rightSlide", "destroyOnClose", "dialogClass", "beforeClose", "maxHeight", "dialogTransition"]),
  model: {
    prop: "visible",
    event: "update:visible"
  },
  provide: function provide() {
    return {
      dialog: this
    };
  },
  setup: function setup$18(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
var _hoisted_1$5 = {
  class: "tiny-dialog-box__title"
};
var _hoisted_2$5 = {
  key: 1,
  class: "tiny-dialog-box__footer"
};
function _sfc_render$7(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_fullscreen = resolveComponent("icon-fullscreen");
  var _component_icon_minscreen = resolveComponent("icon-minscreen");
  var _component_icon_close = resolveComponent("icon-close");
  return openBlock(), createBlock(Transition, {
    name: _ctx.state.animationName,
    onAfterEnter: _ctx.afterEnter,
    onAfterLeave: _ctx.afterLeave,
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["tiny-dialog-box__wrapper", _ctx.dialogClass]),
          onClick: _cache[5] || (_cache[5] = withModifiers(function() {
            return _ctx.handleWrapperClick && _ctx.handleWrapperClick.apply(_ctx, arguments);
          }, ["self"])),
          onMouseup: _cache[6] || (_cache[6] = function() {
            return _ctx.useMouseEventUp && _ctx.useMouseEventUp.apply(_ctx, arguments);
          }),
          onMousedown: _cache[7] || (_cache[7] = function() {
            return _ctx.useMouseEventDown && _ctx.useMouseEventDown.apply(_ctx, arguments);
          })
        },
        [createVNode(Transition, {
          name: _ctx.dialogTransition
        }, {
          default: withCtx(function() {
            return [(_ctx.destroyOnClose ? _ctx.visible : true) ? withDirectives((openBlock(), createElementBlock(
              "div",
              {
                ref: "dialog",
                class: normalizeClass([[{
                  "is-fullscreen": _ctx.state.isFull,
                  "is-center": _ctx.center,
                  "is-right-slide": _ctx.rightSlide
                }], "tiny-dialog-box"]),
                style: normalizeStyle(_ctx.state.style),
                key: _ctx.state.key
              },
              [_ctx.showHeader ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: "tiny-dialog-box__header",
                  onMousedown: _cache[4] || (_cache[4] = function() {
                    return _ctx.handleDrag && _ctx.handleDrag.apply(_ctx, arguments);
                  })
                },
                [renderSlot(_ctx.$slots, "title", {}, function() {
                  return [createBaseVNode(
                    "span",
                    _hoisted_1$5,
                    toDisplayString(_ctx.title),
                    1
                    /* TEXT */
                  )];
                }), _ctx.resize && !_ctx.state.isFull ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  class: "tiny-dialog-box__headerbtn",
                  "aria-label": "Resize",
                  onClick: _cache[0] || (_cache[0] = function($event) {
                    return _ctx.toggleFullScreen(true);
                  })
                }, [createVNode(_component_icon_fullscreen, {
                  class: "tiny-svg-size tiny-dialog-box__close"
                })])) : createCommentVNode("v-if", true), _ctx.resize && _ctx.state.isFull ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  class: "tiny-dialog-box__headerbtn",
                  "aria-label": "Resize",
                  onClick: _cache[1] || (_cache[1] = function($event) {
                    return _ctx.toggleFullScreen(false);
                  })
                }, [createVNode(_component_icon_minscreen, {
                  class: "tiny-svg-size tiny-dialog-box__close"
                })])) : createCommentVNode("v-if", true), _ctx.showClose ? (openBlock(), createElementBlock(
                  "button",
                  {
                    key: 2,
                    type: "button",
                    class: "tiny-dialog-box__headerbtn",
                    "aria-label": "Close",
                    onClick: _cache[2] || (_cache[2] = function($event) {
                      return _ctx.handleClose("close", $event);
                    }),
                    onMousedown: _cache[3] || (_cache[3] = withModifiers(function() {
                    }, ["stop"]))
                  },
                  [createVNode(_component_icon_close, {
                    class: "tiny-svg-size tiny-dialog-box__close"
                  })],
                  32
                  /* NEED_HYDRATION */
                )) : createCommentVNode("v-if", true)],
                32
                /* NEED_HYDRATION */
              )) : createCommentVNode("v-if", true), createBaseVNode(
                "div",
                {
                  class: "tiny-dialog-box__body",
                  style: normalizeStyle(_ctx.state.bodyStyle)
                },
                [renderSlot(_ctx.$slots, "default")],
                4
                /* STYLE */
              ), _ctx.slots.footer ? (openBlock(), createElementBlock("div", _hoisted_2$5, [renderSlot(_ctx.$slots, "footer", {
                beforeClose: _ctx.beforeClose
              })])) : createCommentVNode("v-if", true)],
              6
              /* CLASS, STYLE */
            )), [[vShow, _ctx.visible]]) : createCommentVNode("v-if", true)];
          }),
          _: 3
          /* FORWARDED */
        }, 8, ["name"])],
        34
        /* CLASS, NEED_HYDRATION */
      ), [[vShow, _ctx.visible]])];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["name", "onAfterEnter", "onAfterLeave"]);
}
var pc$1 = /* @__PURE__ */ _export_sfc$4(_sfc_main$7, [["render", _sfc_render$7]]);
const index$2 = "";
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
var _export_sfc$3 = function _export_sfc29(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$3(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$6 = defineComponent({
  emits: ["update:visible", "change", "before-close", "open", "close", "opened", "confirm", "cancel", "closed"],
  props: [].concat(props, ["visible", "title", "modal", "closeOnClickModal", "modalAppendToBody", "appendToBody", "width", "top", "showHeader", "destroyOnClose"]),
  model: {
    prop: "visible",
    event: "update:visible"
  },
  setup: function setup$19(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
var _hoisted_1$4 = {
  key: 0,
  class: "tiny-mobile-dialog-box__header"
};
var _hoisted_2$4 = {
  class: "tiny-mobile-dialog-box__title"
};
var _hoisted_3$4 = {
  class: "tiny-mobile-dialog-box__body"
};
var _hoisted_4$4 = {
  class: "tiny-mobile-dialog-box__footer"
};
function _sfc_render$6(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "dialog-fade",
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          class: "tiny-mobile-dialog-box__wrapper",
          onClick: _cache[2] || (_cache[2] = withModifiers(function() {
            return _ctx.handleWrapperClick && _ctx.handleWrapperClick.apply(_ctx, arguments);
          }, ["self"]))
        },
        [(openBlock(), createElementBlock(
          "div",
          {
            ref: "dialog",
            class: normalizeClass([{
              "is-hide-header": !_ctx.showHeader
            }, "tiny-mobile-dialog-box"]),
            key: _ctx.state.key
          },
          [_ctx.showHeader ? (openBlock(), createElementBlock("div", _hoisted_1$4, [renderSlot(_ctx.$slots, "title", {}, function() {
            return [createBaseVNode(
              "span",
              _hoisted_2$4,
              toDisplayString(_ctx.title),
              1
              /* TEXT */
            )];
          })])) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_3$4, [renderSlot(_ctx.$slots, "default")]), createBaseVNode("div", _hoisted_4$4, [renderSlot(_ctx.$slots, "footer", {}, function() {
            return [createBaseVNode(
              "button",
              {
                type: "button",
                onClick: _cache[0] || (_cache[0] = function() {
                  return _ctx.handleCancel && _ctx.handleCancel.apply(_ctx, arguments);
                }),
                class: "tiny-mobile-dialog-box__button cancel-button"
              },
              toDisplayString(_ctx.t("ui.dialogBox.cancel")),
              1
              /* TEXT */
            ), createBaseVNode(
              "button",
              {
                type: "button",
                onClick: _cache[1] || (_cache[1] = function() {
                  return _ctx.handleConfirm && _ctx.handleConfirm.apply(_ctx, arguments);
                }),
                class: "tiny-mobile-dialog-box__button confirm-button"
              },
              toDisplayString(_ctx.t("ui.dialogBox.confirm")),
              1
              /* TEXT */
            )];
          })])],
          2
          /* CLASS */
        ))],
        512
        /* NEED_PATCH */
      ), [[vShow, _ctx.visible]])];
    }),
    _: 3
    /* FORWARDED */
  });
}
var mobile = /* @__PURE__ */ _export_sfc$3(_sfc_main$6, [["render", _sfc_render$6]]);
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
var _export_sfc$2 = function _export_sfc210(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$2(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$5 = defineComponent({
  components: {
    IconClose: index$k(),
    IconFullscreen: index$r(),
    IconMinscreen: index$s(),
    TinyActionSheet: ActionSheet
  },
  emits: ["update:visible", "change", "before-close", "open", "close", "opened", "confirm", "cancel", "closed", "drag-start", "drag-move", "drag-end"],
  props: [].concat(props, ["resize", "isFormReset", "visible", "title", "modal", "modalAppendToBody", "appendToBody", "lockScroll", "closeOnClickModal", "closeOnPressEscape", "showClose", "width", "fullscreen", "top", "center", "draggable", "showHeader", "rightSlide", "destroyOnClose", "dialogClass", "beforeClose", "maxHeight"]),
  model: {
    prop: "visible",
    event: "update:visible"
  },
  setup: function setup$110(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
var _hoisted_1$3 = {
  key: 0
};
var _hoisted_2$3 = {
  "data-tag": "tiny-dialog-box__title",
  class: "text-sm text-color-text-primary mr-4 flex-1 font-bold"
};
var _hoisted_3$3 = {
  key: 1,
  "data-tag": "tiny-dialog-box__footer",
  class: "pt-4 pr-6 pb-4 pl-6 text-right box-border border-t border-t-color-bg-3 [&_[data-tag=tiny-button]]:mx-1 [&_[data-tag=tiny-button]]:my-0 [&_[data-tag=tiny-toolbar]_[data-tag=tiny-button]]:my-0 [&_[data-tag=tiny-toolbar]_[data-tag=tiny-button]]:mx-1"
};
var _hoisted_4$3 = {
  key: 1
};
function _sfc_render$5(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_fullscreen = resolveComponent("icon-fullscreen");
  var _component_icon_minscreen = resolveComponent("icon-minscreen");
  var _component_icon_close = resolveComponent("icon-close");
  var _component_tiny_action_sheet = resolveComponent("tiny-action-sheet");
  return openBlock(), createElementBlock("div", null, [_ctx.state.current !== "default" ? (openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(Transition, {
    name: _ctx.state.animationName,
    onAfterEnter: _ctx.afterEnter,
    onAfterLeave: _ctx.afterLeave,
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["fixed inset-0 m-0 flex items-center", _ctx.dialogClass]),
          "data-tag": "tiny-dialog-box__wrapper",
          onClick: _cache[4] || (_cache[4] = withModifiers(function() {
            return _ctx.handleWrapperClick && _ctx.handleWrapperClick.apply(_ctx, arguments);
          }, ["self"]))
        },
        [(_ctx.destroyOnClose ? _ctx.visible : true) ? (openBlock(), createElementBlock(
          "div",
          {
            ref: "dialog",
            "data-tag": "tiny-dialog-box",
            class: normalizeClass([[{
              "left-0 top-0 w-screen h-screen": _ctx.state.isFull,
              "text-center": _ctx.center,
              "flex flex-col rounded-none": _ctx.rightSlide
            }], "absolute bg-color-bg-1 border-none overflow-hidden shadow-xl rounded flex flex-col"]),
            style: normalizeStyle(_ctx.state.style),
            key: _ctx.state.key
          },
          [_ctx.showHeader ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              "data-tag": "tiny-dialog-box__header",
              class: "px-6 py-4 h-12 leading-4 bg-color-bg-1 flex justify-between items-center border-b border-b-color-bg-3",
              onMousedown: _cache[3] || (_cache[3] = function() {
                return _ctx.handleDrag && _ctx.handleDrag.apply(_ctx, arguments);
              })
            },
            [renderSlot(_ctx.$slots, "title", {}, function() {
              return [createBaseVNode(
                "span",
                _hoisted_2$3,
                toDisplayString(_ctx.title),
                1
                /* TEXT */
              )];
            }), _ctx.resize && !_ctx.state.isFull ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              "data-tag": "tiny-dialog-box__headerbtn",
              class: "border-none p-0 leading-none cursor-pointer focus:outline-0",
              "aria-label": "Resize",
              onClick: _cache[0] || (_cache[0] = function($event) {
                return _ctx.toggleFullScreen(true);
              })
            }, [createVNode(_component_icon_fullscreen, {
              "data-tag": "tiny-svg-size tiny-dialog-box__close",
              class: "fill-color-text-primary text-base hover:fill-color-brand"
            })])) : createCommentVNode("v-if", true), _ctx.resize && _ctx.state.isFull ? (openBlock(), createElementBlock("button", {
              key: 1,
              type: "button",
              "data-tag": "tiny-dialog-box__headerbtn",
              class: "border-none p-0 leading-none cursor-pointer focus:outline-0",
              "aria-label": "Resize",
              onClick: _cache[1] || (_cache[1] = function($event) {
                return _ctx.toggleFullScreen(false);
              })
            }, [createVNode(_component_icon_minscreen, {
              "data-tag": "tiny-svg-size tiny-dialog-box__close",
              class: "fill-color-text-primary text-base hover:fill-color-brand"
            })])) : createCommentVNode("v-if", true), _ctx.showClose ? (openBlock(), createElementBlock("button", {
              key: 2,
              type: "button",
              "data-tag": "tiny-dialog-box__headerbtn",
              class: "border-none p-0 leading-none cursor-pointer focus:outline-0",
              "aria-label": "Close",
              onClick: _cache[2] || (_cache[2] = function($event) {
                return _ctx.handleClose("close", $event);
              })
            }, [createVNode(_component_icon_close, {
              "data-tag": "tiny-svg-size tiny-dialog-box__close",
              class: "fill-color-text-primary text-base hover:fill-color-brand"
            })])) : createCommentVNode("v-if", true)],
            32
            /* NEED_HYDRATION */
          )) : createCommentVNode("v-if", true), createBaseVNode(
            "div",
            {
              "data-tag": "tiny-dialog-box__body",
              class: normalizeClass(["text-left pt-0 pr-6 pb-0 pl-6 mb-3 mt-3 text-color-text-primary leading-5.5 text-sm overflow-auto", [_ctx.state.isFull ? "max-h-[calc(100vh-theme(spacing.28))]" : "max-h-[65vh]", _ctx.rightSlide ? "max-h-[none] flex-auto" : ""]]),
              style: normalizeStyle(_ctx.state.bodyStyle)
            },
            [renderSlot(_ctx.$slots, "default")],
            6
            /* CLASS, STYLE */
          ), _ctx.slots.footer ? (openBlock(), createElementBlock("div", _hoisted_3$3, [renderSlot(_ctx.$slots, "footer", {
            beforeClose: _ctx.beforeClose
          })])) : createCommentVNode("v-if", true)],
          6
          /* CLASS, STYLE */
        )) : createCommentVNode("v-if", true)],
        2
        /* CLASS */
      ), [[vShow, _ctx.visible]])];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["name", "onAfterEnter", "onAfterLeave"])])) : createCommentVNode("v-if", true), _ctx.state.current === "default" ? (openBlock(), createElementBlock("div", _hoisted_4$3, [(_ctx.destroyOnClose ? _ctx.visible : true) ? (openBlock(), createBlock(_component_tiny_action_sheet, mergeProps({
    key: 0,
    ref: "dialog"
  }, _ctx.$props, {
    "show-footer": true,
    mask: _ctx.modal,
    "mask-closable": _ctx.closeOnClickModal,
    "before-close": _ctx.beforeClose,
    "onUpdate:visible": _cache[5] || (_cache[5] = function($event) {
      return _ctx.$emit("update:visible", $event);
    })
  }), createSlots({
    _: 2
    /* DYNAMIC */
  }, [renderList(_ctx.slots, function(value3, name) {
    return {
      name,
      fn: withCtx(function(scopeData) {
        return [createBaseVNode(
          "div",
          {
            class: normalizeClass({
              "flex w-full justify-between px-4 [&_[data-tag=tiny-button]]:flex-grow [&_[data-tag=tiny-button]:nth-child(2)]:ml-2": name === "footer",
              "px-4 min-h-[250px]": name === "default"
            })
          },
          [renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(scopeData)))],
          2
          /* CLASS */
        )];
      })
    };
  })]), 1040, ["mask", "mask-closable", "before-close"])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true)]);
}
var mobileFirst = /* @__PURE__ */ _export_sfc$2(_sfc_main$5, [["render", _sfc_render$5]]);
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
var template$1 = function template24(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$1;
  }
  if ("mobile" === (tinyMode || mode)) {
    return mobile;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst;
  }
  return pc$1;
};
var $constants$1 = {
  DIALOG_SLIDER_RIGHT: "dialog-slideRight",
  DIALOG_FADE: "dialog-fade",
  SELECT_DROPDOWN: $prefix + "SelectDropdown",
  DROPDOWN_MENU: $prefix + "DropdownMenu",
  DIALOG_BOX_CLASS: "div.tiny-dialog-box",
  PC_SCROLL_LOCK_CLASS: "dialog-box__scroll-lock",
  MOBILE_SCROLL_LOCK_CLASS: "mobile-dialog-box__scroll-lock",
  Mode: "pc",
  scrollLockClass: function scrollLockClass(mode) {
    return mode === this.Mode ? this.PC_SCROLL_LOCK_CLASS : this.MOBILE_SCROLL_LOCK_CLASS;
  }
};
var dialogBoxProps = _extends$2({}, $props, {
  _constants: {
    type: Object,
    default: function _default4() {
      return $constants$1;
    }
  },
  appendToBody: {
    type: Boolean,
    default: function _default23() {
      return false;
    }
  },
  beforeClose: Function,
  center: {
    type: Boolean,
    default: function _default32() {
      return false;
    }
  },
  closeOnClickModal: {
    type: Boolean,
    default: function _default42() {
      return true;
    }
  },
  closeOnPressEscape: {
    type: Boolean,
    default: function _default5() {
      return true;
    }
  },
  destroyOnClose: {
    type: Boolean,
    default: function _default6() {
      return false;
    }
  },
  dialogClass: {
    type: String,
    default: function _default7() {
      return "";
    }
  },
  draggable: {
    type: Boolean,
    default: function _default8() {
      return false;
    }
  },
  dragOutsideWindow: {
    type: Boolean,
    default: function _default9() {
      return false;
    }
  },
  fullscreen: {
    type: Boolean,
    default: function _default10() {
      return false;
    }
  },
  isFormReset: {
    type: Boolean,
    default: function _default11() {
      return true;
    }
  },
  lockScroll: {
    type: Boolean,
    default: function _default12() {
      return true;
    }
  },
  modal: {
    type: Boolean,
    default: function _default13() {
      return true;
    }
  },
  modalAppendToBody: {
    type: Boolean,
    default: function _default14() {
      return true;
    }
  },
  resize: {
    type: Boolean,
    default: function _default15() {
      return false;
    }
  },
  rightSlide: {
    type: Boolean,
    default: function _default16() {
      return false;
    }
  },
  showClose: {
    type: Boolean,
    default: function _default17() {
      return true;
    }
  },
  showHeader: {
    type: Boolean,
    default: function _default18() {
      return true;
    }
  },
  title: {
    type: String,
    default: function _default19() {
      return "";
    }
  },
  top: String,
  visible: {
    type: Boolean,
    default: function _default20() {
      return false;
    }
  },
  width: {
    type: String,
    default: function _default21() {
      return "500px";
    }
  },
  maxHeight: {
    type: String,
    default: function _default222() {
      return "";
    }
  },
  dialogTransition: {
    type: String,
    default: ""
  }
});
var DialogBox = defineComponent({
  name: $prefix + "DialogBox",
  model: {
    prop: "visible",
    event: "update:visible"
  },
  props: dialogBoxProps,
  setup: function setup5(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$1
    });
  }
});
var version$2 = "3.16.0";
DialogBox.install = function(Vue) {
  Vue.component(DialogBox.name, DialogBox);
};
DialogBox.version = version$2;
const px2percent = ({ numerator, denominator }) => parseFloat(numerator) / parseFloat(denominator);
const getComputedThresholdValue = ({ api: api2, props: props2, vm, state }) => (type) => {
  const size = vm.$refs.outerWrapper[state.offsetSize];
  if (state.valueIsPx) {
    return typeof props2[type] === "string" ? props2[type] : size * props2[type];
  } else {
    return typeof props2[type] === "string" ? api2.px2percent({ numerator: props2[type], denominator: size }) : props2[type];
  }
};
const getleftTopMin = (state) => ({ oldvalue, newvalue }) => state.valueIsPx ? `${Math.min(parseFloat(oldvalue), parseFloat(newvalue))}px` : Math.min(oldvalue, newvalue);
const getrightBottomMin = (state) => ({ oldvalue, newvalue }) => state.valueIsPx ? `${Math.max(parseFloat(oldvalue), parseFloat(newvalue))}px` : Math.max(oldvalue, newvalue);
const getAnotherOffset = ({ vm, state }) => (value3) => state.valueIsPx ? `${vm.$refs.outerWrapper[state.offsetSize] - parseFloat(value3)}px` : 1 - value3;
const handleMove = ({ api: api2, emit, props: props2, vm, state }) => (event) => {
  const pageOffset = state.isHorizontal ? event.pageX : event.pageY;
  const offset = pageOffset - state.initOffset;
  const outerWidth = vm.$refs.outerWrapper[state.offsetSize];
  let value3 = state.valueIsPx ? `${parseFloat(state.oldOffset) + offset}px` : api2.px2percent({ numerator: outerWidth * state.oldOffset + offset, denominator: outerWidth });
  const anotherValue = api2.getAnotherOffset(value3);
  if (parseFloat(value3) <= parseFloat(state.computedleftTopMin)) {
    value3 = api2.getrightBottomMin({
      oldvalue: value3,
      newvalue: state.computedleftTopMin
    });
  }
  if (parseFloat(anotherValue) <= parseFloat(state.computedrightBottomMin)) {
    value3 = api2.getAnotherOffset(
      api2.getrightBottomMin({
        oldvalue: anotherValue,
        newvalue: state.computedrightBottomMin
      })
    );
  }
  event.atMin = props2.modelValue === state.computedleftTopMin;
  event.atMax = state.valueIsPx ? api2.getAnotherOffset(props2.modelValue) === state.computedrightBottomMin : api2.getAnotherOffset(props2.modelValue).toFixed(5) === state.computedrightBottomMin.toFixed(5);
  state.leftTopPane = outerWidth * value3;
  emit("update:modelValue", value3);
  emit("moving", event);
};
const handleUp = ({ api: api2, emit, off: off2, state }) => () => {
  state.isMoving = false;
  off2(document, "mousemove", api2.handleMove);
  off2(document, "mouseup", api2.handleUp);
  emit("moveend");
};
const handleMousedown = ({ api: api2, emit, on: on2, props: props2, state, vm }) => (event) => {
  if (!props2.disabled) {
    state.initOffset = state.isHorizontal ? event.pageX : event.pageY;
    if (state.offset === 0) {
      state.oldOffset = 0;
    } else if (state.offset === 100) {
      state.oldOffset = 1;
    } else {
      if (props2.threeAreas) {
        state.totalPane = vm.$refs.outerWrapper[state.offsetSize];
        let val = api2.px2percent({ numerator: state.leftTopPane, denominator: state.totalPane });
        state.oldOffset = val;
        emit("update:modelValue", val);
      } else {
        state.oldOffset = props2.modelValue;
      }
    }
    state.isMoving = true;
    on2(document, "mousemove", api2.handleMove);
    on2(document, "mouseup", api2.handleUp);
    emit("movestart");
  }
};
const buttonMousedown = () => (event) => {
  event.stopPropagation();
};
const buttonLeftTopClick = ({ emit, props: props2, state }) => () => {
  if (state.offset === 100) {
    state.offset = state.lastClickOffset;
    emit("update:modelValue", state.lastmodelValue);
  } else if (state.offset !== 0) {
    state.lastClickOffset = state.offset;
    state.offset = 0;
    state.lastmodelValue = props2.modelValue;
    emit("update:modelValue", 0);
  }
  emit("left-top-click");
};
const buttonRightBottomClick = ({ emit, props: props2, state }) => () => {
  if (state.offset === 0) {
    state.offset = state.lastClickOffset;
    emit("update:modelValue", state.lastmodelValue);
  } else if (state.offset !== 100) {
    state.lastClickOffset = state.offset;
    state.offset = 100;
    state.lastmodelValue = props2.modelValue;
    emit("update:modelValue", 1);
  }
  emit("right-bottom-click");
};
const computeOffset = ({ api: api2, nextTick, props: props2, vm, state }) => () => {
  setTimeout(() => {
    if (state) {
      state.totalPane = vm.$refs.outerWrapper[state.offsetSize];
      state.leftTopPane = state.totalPane * (state.offset / 100);
    }
  });
  if (state.valueIsPx) {
    nextTick(() => {
      state.offset = api2.px2percent({
        numerator: props2.modelValue,
        denominator: vm.$refs.outerWrapper && vm.$refs.outerWrapper[state.offsetSize]
      }) * 1e4 / 100;
    });
  } else {
    state.offset = props2.modelValue * 1e4 / 100;
  }
};
const api = ["state", "handleMousedown", "buttonMousedown", "buttonLeftTopClick", "buttonRightBottomClick"];
const renderless = (props2, hooks, { vm, nextTick, emit, constants }) => {
  const api2 = {};
  const { computed, reactive } = hooks;
  const getUseOffset = useOffset({ nextTick, props: props2, vm, constants, hooks });
  const state = reactive(__spreadValues({
    lastClickOffset: 50,
    lastmodelValue: 0.5,
    oldOffset: 0,
    initOffset: 0,
    isMoving: false,
    prefix: constants.PREFIX,
    computedleftTopMin: computed(() => api2.getComputedThresholdValue("leftTopMin")),
    computedrightBottomMin: computed(() => api2.getComputedThresholdValue("rightBottomMin")),
    wrapperClasses: computed(() => [`${state.prefix}-wrapper`, state.isMoving ? "no-select" : ""]),
    paneClasses: computed(() => [
      `${state.prefix}-pane ${props2.scrollable ? "tiny-split-scroll" : ""}`,
      { [`${state.prefix}-pane-moving`]: state.isMoving }
    ])
  }, getUseOffset.state));
  Object.assign(api2, __spreadProps(__spreadValues({
    state,
    getleftTopMin: getleftTopMin(state),
    getrightBottomMin: getrightBottomMin(state)
  }, getUseOffset.api), {
    handleUp: handleUp({ api: api2, emit, off, state }),
    getAnotherOffset: getAnotherOffset({ vm, state }),
    handleMove: handleMove({ api: api2, emit, props: props2, vm, state }),
    handleMousedown: handleMousedown({ api: api2, emit, on, props: props2, state, vm }),
    buttonMousedown: buttonMousedown(),
    buttonLeftTopClick: buttonLeftTopClick({ emit, props: props2, state }),
    buttonRightBottomClick: buttonRightBottomClick({ emit, props: props2, state }),
    getComputedThresholdValue: getComputedThresholdValue({ api: api2, props: props2, vm, state })
  }));
  return api2;
};
const useOffset = ({ nextTick, props: props2, vm, constants, hooks }) => {
  const api2 = {};
  const { computed, onMounted, onUnmounted, reactive, toRefs, watch } = hooks;
  const state = reactive({
    offset: 0,
    anotherOffset: computed(() => 100 - state.offset),
    valueIsPx: computed(() => typeof props2.modelValue === "string"),
    isHorizontal: computed(() => props2.mode === constants.HORIZONTAL),
    offsetSize: computed(() => state.isHorizontal ? "offsetWidth" : "offsetHeight"),
    leftTopPane: 0,
    totalPane: 0
  });
  Object.assign(api2, {
    px2percent,
    computeOffset: computeOffset({ api: api2, nextTick, props: props2, vm, state })
  });
  watch(() => props2.modelValue, api2.computeOffset, { immediate: true });
  onMounted(() => {
    on(window, "resize", api2.computeOffset);
  });
  onUnmounted(() => {
    off(window, "resize", api2.computeOffset);
  });
  return {
    api: api2,
    state: toRefs(state)
  };
};
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
var _export_sfc$1 = function _export_sfc211(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$1(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$4 = defineComponent({
  components: {
    IconLeftWard: index$e(),
    IconRightWard: index$a()
  },
  emits: ["moving", "mousemove", "mouseup", "moveend", "movestart", "update:modelValue", "left-top-click", "right-bottom-click"],
  props: [].concat(props, ["modelValue", "mode", "leftTopMin", "rightBottomMin", "disabled", "triggerSimple", "collapseLeftTop", "collapseRightBottom", "threeAreas", "scrollable"]),
  setup: function setup$111(props2, context) {
    return setup({
      props: props2,
      context,
      renderless,
      api
    });
  }
});
function _sfc_render$4(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_left_ward = resolveComponent("icon-left-ward");
  var _component_icon_right_ward = resolveComponent("icon-right-ward");
  return openBlock(), createElementBlock(
    "div",
    {
      ref: "outerWrapper",
      class: normalizeClass(_ctx.state.wrapperClasses)
    },
    [_ctx.state.isHorizontal ? (openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        class: normalizeClass(_ctx.state.prefix + "-horizontal")
      },
      [createBaseVNode(
        "div",
        {
          style: normalizeStyle({
            right: _ctx.state.anotherOffset + "%",
            width: _ctx.state.anotherOffset !== 100 && _ctx.threeAreas ? _ctx.state.leftTopPane + "px" : ""
          }),
          class: normalizeClass([_ctx.state.paneClasses, "left-pane"])
        },
        [renderSlot(_ctx.$slots, "left")],
        6
        /* CLASS, STYLE */
      ), createBaseVNode(
        "div",
        {
          class: normalizeClass([_ctx.state.prefix + "-trigger-con", _ctx.state.prefix + "-trigger-con-vertical", _ctx.disabled ? _ctx.state.prefix + "-trigger-con-disabled" : "", _ctx.state.isMoving ? _ctx.state.prefix + "-trigger-con-drag" : "", _ctx.state.offset === 0 && _ctx.triggerSimple ? _ctx.state.prefix + "-trigger-con-left-active" : "", _ctx.triggerSimple ? _ctx.state.prefix + "-trigger-con-simple" : ""]),
          style: normalizeStyle({
            left: _ctx.threeAreas ? _ctx.state.leftTopPane + "px" : _ctx.state.offset + "%"
          }),
          onMousedown: _cache[5] || (_cache[5] = function() {
            return _ctx.handleMousedown && _ctx.handleMousedown.apply(_ctx, arguments);
          })
        },
        [renderSlot(_ctx.$slots, "trigger", {}, function() {
          return [createBaseVNode(
            "div",
            {
              class: normalizeClass([_ctx.state.prefix + "-trigger", _ctx.state.prefix + "-trigger-vertical"])
            },
            [!_ctx.triggerSimple ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass([_ctx.state.prefix + "-trigger-bar-con", "vertical"])
              },
              [_cache[0] || (setBlockTracking(-1), _cache[0] = (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(3, function(i) {
                  return createBaseVNode(
                    "i",
                    {
                      class: normalizeClass(_ctx.state.prefix + "-trigger-bar"),
                      key: "trigger-" + i
                    },
                    null,
                    2
                    /* CLASS */
                  );
                }),
                64
                /* STABLE_FRAGMENT */
              )), setBlockTracking(1), _cache[0])],
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true)],
            2
            /* CLASS */
          )];
        }), _ctx.triggerSimple ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass([_ctx.state.prefix + "-trigger-button", _ctx.state.prefix + "-trigger-left-button", _ctx.state.offset === 100 ? _ctx.state.prefix + "-trigger-button-active" : "", _ctx.state.offset === 100 || _ctx.collapseLeftTop ? _ctx.state.prefix + "-trigger-button-show" : ""]),
            onMousedown: _cache[1] || (_cache[1] = function() {
              return _ctx.buttonMousedown && _ctx.buttonMousedown.apply(_ctx, arguments);
            }),
            onClick: _cache[2] || (_cache[2] = function() {
              return _ctx.buttonLeftTopClick && _ctx.buttonLeftTopClick.apply(_ctx, arguments);
            })
          },
          [createVNode(_component_icon_left_ward, {
            class: "tiny-svg-size"
          })],
          34
          /* CLASS, NEED_HYDRATION */
        )) : createCommentVNode("v-if", true), _ctx.triggerSimple ? (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: normalizeClass([_ctx.state.prefix + "-trigger-button", _ctx.state.prefix + "-trigger-right-button", _ctx.state.offset === 0 ? _ctx.state.prefix + "-trigger-button-active" : "", _ctx.state.offset === 0 || _ctx.collapseRightBottom ? _ctx.state.prefix + "-trigger-button-show" : ""]),
            onMousedown: _cache[3] || (_cache[3] = function() {
              return _ctx.buttonMousedown && _ctx.buttonMousedown.apply(_ctx, arguments);
            }),
            onClick: _cache[4] || (_cache[4] = function() {
              return _ctx.buttonRightBottomClick && _ctx.buttonRightBottomClick.apply(_ctx, arguments);
            })
          },
          [createVNode(_component_icon_right_ward, {
            class: "tiny-svg-size"
          })],
          34
          /* CLASS, NEED_HYDRATION */
        )) : createCommentVNode("v-if", true)],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ), createBaseVNode(
        "div",
        {
          style: normalizeStyle({
            left: _ctx.threeAreas ? _ctx.state.leftTopPane + "px" : _ctx.state.offset + "%",
            width: _ctx.threeAreas ? "calc(100% - " + _ctx.state.leftTopPane + "px)" : ""
          }),
          class: normalizeClass([_ctx.state.paneClasses, "right-pane"])
        },
        [renderSlot(_ctx.$slots, "right")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    )) : (openBlock(), createElementBlock(
      "div",
      {
        key: 1,
        class: normalizeClass(_ctx.state.prefix + "-vertical")
      },
      [createBaseVNode(
        "div",
        {
          style: normalizeStyle({
            bottom: _ctx.state.anotherOffset + "%",
            height: _ctx.state.anotherOffset !== 100 && _ctx.threeAreas ? _ctx.state.leftTopPane + "px" : ""
          }),
          class: normalizeClass([_ctx.state.paneClasses, "top-pane"])
        },
        [renderSlot(_ctx.$slots, "top")],
        6
        /* CLASS, STYLE */
      ), createBaseVNode(
        "div",
        {
          class: normalizeClass([_ctx.state.prefix + "-trigger-con", _ctx.state.prefix + "-trigger-con-horizontal", _ctx.disabled ? _ctx.state.prefix + "-trigger-con-disabled" : "", _ctx.state.isMoving ? _ctx.state.prefix + "-trigger-con-drag" : "", _ctx.state.offset === 0 && _ctx.triggerSimple ? _ctx.state.prefix + "-trigger-con-top-active" : "", _ctx.triggerSimple ? _ctx.state.prefix + "-trigger-con-simple" : ""]),
          style: normalizeStyle({
            top: _ctx.threeAreas ? _ctx.state.leftTopPane + "px" : _ctx.state.offset + "%"
          }),
          onMousedown: _cache[11] || (_cache[11] = function() {
            return _ctx.handleMousedown && _ctx.handleMousedown.apply(_ctx, arguments);
          })
        },
        [renderSlot(_ctx.$slots, "trigger", {}, function() {
          return [createBaseVNode(
            "div",
            {
              class: normalizeClass([_ctx.state.prefix + "-trigger", _ctx.state.prefix + "-trigger-horizontal"])
            },
            [!_ctx.triggerSimple ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass([_ctx.state.prefix + "-trigger-bar-con", "horizontal"])
              },
              [_cache[6] || (setBlockTracking(-1), _cache[6] = (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(3, function(i) {
                  return createBaseVNode(
                    "i",
                    {
                      class: normalizeClass(_ctx.state.prefix + "-trigger-bar"),
                      key: "trigger-" + i
                    },
                    null,
                    2
                    /* CLASS */
                  );
                }),
                64
                /* STABLE_FRAGMENT */
              )), setBlockTracking(1), _cache[6])],
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true)],
            2
            /* CLASS */
          )];
        }), _ctx.triggerSimple ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass([_ctx.state.prefix + "-trigger-button", _ctx.state.prefix + "-trigger-top-button", _ctx.state.offset === 100 ? _ctx.state.prefix + "-trigger-button-active" : "", _ctx.state.offset === 100 || _ctx.collapseLeftTop ? _ctx.state.prefix + "-trigger-button-show" : ""]),
            onMousedown: _cache[7] || (_cache[7] = function() {
              return _ctx.buttonMousedown && _ctx.buttonMousedown.apply(_ctx, arguments);
            }),
            onClick: _cache[8] || (_cache[8] = function() {
              return _ctx.buttonLeftTopClick && _ctx.buttonLeftTopClick.apply(_ctx, arguments);
            })
          },
          [createVNode(_component_icon_left_ward, {
            class: "tiny-svg-size"
          })],
          34
          /* CLASS, NEED_HYDRATION */
        )) : createCommentVNode("v-if", true), _ctx.triggerSimple ? (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: normalizeClass([_ctx.state.prefix + "-trigger-button", _ctx.state.prefix + "-trigger-bottom-button", _ctx.state.offset === 0 ? _ctx.state.prefix + "-trigger-button-active" : "", _ctx.state.offset === 0 || _ctx.collapseRightBottom ? _ctx.state.prefix + "-trigger-button-show" : ""]),
            onMousedown: _cache[9] || (_cache[9] = function() {
              return _ctx.buttonMousedown && _ctx.buttonMousedown.apply(_ctx, arguments);
            }),
            onClick: _cache[10] || (_cache[10] = function() {
              return _ctx.buttonRightBottomClick && _ctx.buttonRightBottomClick.apply(_ctx, arguments);
            })
          },
          [createVNode(_component_icon_right_ward, {
            class: "tiny-svg-size"
          })],
          34
          /* CLASS, NEED_HYDRATION */
        )) : createCommentVNode("v-if", true)],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ), createBaseVNode(
        "div",
        {
          style: normalizeStyle({
            top: _ctx.threeAreas ? _ctx.state.leftTopPane + "px" : _ctx.state.offset + "%",
            height: _ctx.threeAreas ? "calc(100% - " + _ctx.state.leftTopPane + "px)" : ""
          }),
          class: normalizeClass([_ctx.state.paneClasses, "bottom-pane"])
        },
        [renderSlot(_ctx.$slots, "bottom")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ))],
    2
    /* CLASS */
  );
}
var pc = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$4]]);
const index$1 = "";
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
var template = function template25(mode) {
  var _process$env;
  typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  return pc;
};
var $constants = {
  PREFIX: "tiny-split",
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
};
var Split = defineComponent({
  name: $prefix + "Split",
  props: _extends$1({}, $props, {
    _constants: {
      type: Object,
      default: function _default24() {
        return $constants;
      }
    },
    modelValue: {
      type: [Number, String],
      default: 0.5
    },
    mode: {
      validator: function validator(value3) {
        var arr = [$constants.HORIZONTAL, $constants.VERTICAL];
        for (var i = 0; i < arr.length; i++) {
          if (value3 === arr[i]) {
            return true;
          }
        }
        return false;
      },
      default: $constants.HORIZONTAL
    },
    leftTopMin: {
      type: [Number, String],
      default: "40px"
    },
    rightBottomMin: {
      type: [Number, String],
      default: "40px"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    "trigger-simple": {
      type: Boolean,
      default: false
    },
    "collapse-left-top": {
      type: Boolean,
      default: false
    },
    "collapse-right-bottom": {
      type: Boolean,
      default: false
    },
    "three-areas": {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    }
  }),
  setup: function setup6(props2, context) {
    return $setup({
      props: props2,
      context,
      template
    });
  }
});
var version$1 = "3.16.0";
Split.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
Split.install = function(Vue) {
  Vue.component(Split.name, Split);
};
Split.version = version$1;
const index = "";
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
var _export_sfc = function _export_sfc212(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _excluded = ["property"], _excluded2 = ["row"], _excluded3 = ["property"];
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
function getStorage(storageKey, storageType, remoteMethod) {
  return new Promise(function(resolve, reject) {
    if (storageType === "local") {
      var valueString = localStorage.getItem(storageKey);
      var valueObj = toStringJSON_default(valueString);
      resolve(valueObj);
    } else if (storageType === "remote") {
      remoteMethod().then(function(remoteString) {
        var remoteObj = toStringJSON_default(remoteString);
        remoteObj = remoteObj && remoteObj[storageKey] || null;
        resolve(remoteObj);
      }).catch(reject);
    }
  });
}
function setStorage(storageKey, valueObj, storageType, vm, eventName) {
  if (storageType === "local") {
    var valueString = toJSONString_default(valueObj);
    localStorage.setItem(storageKey, valueString);
  } else if (storageType === "remote") {
    var _toJSONString;
    var remoteString = toJSONString_default((_toJSONString = {}, _toJSONString[storageKey] = valueObj, _toJSONString));
    vm.$emit(eventName, remoteString);
  }
}
function generateId() {
  var now = /* @__PURE__ */ new Date();
  var suf = /GMT[-+]\d+/.exec(now.toString())[0].replace(/\+/, "E").replace(/-/, "W").replace(/0/g, "");
  var name = format(now, "yyyy-MM-dd hh:mm:ss.SSS");
  return {
    id: now.getTime() + suf,
    name
  };
}
function createCustom(setting, userKey) {
  var _generateId = generateId(), id = _generateId.id, name = _generateId.name;
  return {
    id,
    name,
    userKey,
    setting: {
      custom: setting
    }
  };
}
function mergeArray(toArr, fromArr) {
  var result = [];
  for (var i = 0; i < fromArr.length; i++) {
    var fromItem = _extends({
      order: null,
      fixed: null,
      visible: true,
      sortable: false
    }, fromArr[i]);
    var toItem = void 0;
    for (var j = 0; j < toArr.length; j++) {
      if (fromItem.property === toArr[j].property) {
        toItem = _extends({}, toArr[j]);
        break;
      }
    }
    result.push(extend(true, {}, toItem || {}, fromItem));
  }
  return result;
}
var _sfc_main$3 = defineComponent({
  name: "TinyGridCustomSwitch",
  components: {
    TinyButton: Button,
    TinySelect: Select,
    TinyInput: Input,
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col,
    TinyAlert: Alert,
    TinyRadio: Radio,
    TinyPopover: Popover,
    TinyDialogBox: DialogBox
  },
  inject: {
    $grid: {
      default: null
    }
  },
  emits: ["init-storage"],
  props: _extends({}, $props, {
    customMode: String,
    selectedTemplateVal: {
      type: Object,
      default: function _default25() {
        return {};
      }
    },
    historyConfig: {
      type: Object,
      default: function _default26() {
        return {};
      }
    }
  }),
  data: function data() {
    return {
      IconSave: index$9(),
      IconEdit: index$t(),
      IconDel: index$i(),
      saveDisabled: true,
      selectDisabled: true,
      applyDisabled: true,
      editDisabled: true,
      delDisabled: true,
      options: [],
      option: null,
      selected: null,
      selectedName: null,
      visible: false,
      userKey: null,
      status: null,
      editName: null,
      selectedTemplateName: "",
      savedTemplateName: "",
      templateVisible: false,
      saveMethod: "save"
    };
  },
  computed: {
    dialogTitle: function dialogTitle() {
      return this.status === "apply" ? this.t("ui.grid.individuation.switchapply") : this.status === "edit" ? this.t("ui.grid.individuation.switchedit") : this.status === "del" ? this.t("ui.grid.individuation.switchdel") : this.t("ui.grid.individuation.switchconfirm");
    }
  },
  watch: {
    templateVisible: function templateVisible(val) {
      val && (this.savedTemplateName = "");
    },
    selectedTemplateVal: {
      handler: function handler() {
        this.selectedTemplateName = this.selectedTemplateVal.name || "";
        this.saveMethod = this.selectedTemplateVal.id ? "overwrite" : "save";
      },
      deep: true,
      immediate: true
    }
  },
  created: function created() {
    var _this = this;
    var _this$$grid$getVm = this.$grid.getVm("toolbar"), _this$$grid$getVm$set = _this$$grid$getVm.settingOpts, storageType = _this$$grid$getVm$set.storage, storageKey = _this$$grid$getVm$set.storageKey, toolbarId = _this$$grid$getVm.id;
    if (!this.doCheck({
      storageType
    }))
      return;
    this.setUserKey();
    getStorage(this.historyConfig.storageKey, storageType, this.historyConfig.remoteMethod).then(function(storeObj) {
      var optionArr = (storeObj || {})[toolbarId] || [];
      _this.options = optionArr.filter(function(opt) {
        return _this.userKey ? opt.userKey === _this.userKey : true;
      });
      _this.$emit("init-storage", _this.options);
      getStorage(storageKey, storageType, _this.historyConfig.remoteSelectedMethod).then(function(storeObj2) {
        _this.option = (storeObj2 || {})[toolbarId] || {};
        _this.enableAll();
        _this.setSelected();
      });
    });
  },
  methods: {
    t,
    handleSave: function handleSave() {
      this.status = "save";
      this.visible = true;
    },
    handleSaveConfirm: function handleSaveConfirm(flag) {
      var _this2 = this;
      if (flag === "overwrite") {
        if (this.customMode === "saas" && !this.selectedTemplateVal.id || this.customMode !== "saas" && !this.selected) {
          return;
        }
      }
      var toolbarVm = this.$grid.getVm("toolbar");
      var customVm = toolbarVm.$refs.custom;
      var item = createCustom(customVm.buildSettings(), this.userKey);
      var toolbarId = toolbarVm.id;
      var business = function business2(storeObj) {
        storeObj = storeObj || {};
        var optionArr = storeObj[toolbarId] || [];
        if (flag === "save" || flag === "save-apply") {
          if (flag === "save" && _this2.savedTemplateName) {
            item.name = _this2.savedTemplateName;
          }
          _this2.options.push(item);
          _this2.$emit("init-storage", _this2.options);
          optionArr.unshift(item);
        } else if (flag === "overwrite") {
          var index3, customId, customName;
          var selectedId = _this2.customMode === "saas" ? _this2.selectedTemplateVal.id : _this2.selected;
          var selectedName = _this2.customMode === "saas" ? _this2.selectedTemplateVal.name : _this2.selectedName;
          for (var i = 0; i < optionArr.length; i++) {
            if (optionArr[i].id === selectedId) {
              index3 = i;
              customId = selectedId;
              customName = selectedName;
              break;
            }
          }
          item.id = customId;
          item.name = _this2.selectedTemplateName || customName;
          optionArr.splice(index3, 1, item);
          if (_this2.selectedTemplateName && _this2.selectedTemplateName !== customName) {
            customVm.updateTemplateOptions(item.id, item.name);
          }
        }
        storeObj[toolbarId] = optionArr;
        return storeObj;
      };
      var postOperate = function postOperate2() {
        if (flag === "save-apply" || flag === "overwrite") {
          customVm.multipleHistoryId = item.id;
          customVm.saveSettings(_this2.customMode === "saas");
        }
        _this2.visible = false;
        _this2.status = "";
      };
      this.templateVisible = false;
      this.doStorage(business, postOperate);
      TINYModal.message({
        message: t("ui.grid.saveSuccess"),
        status: "success"
      });
    },
    handleApply: function handleApply() {
      if (this.historyConfig.applyDisabled || this.applyDisabled || !this.selected || this.option.id === this.selected) {
        return;
      }
      this.status = "apply";
      this.visible = true;
    },
    handleApplyConfirm: function handleApplyConfirm(flag) {
      var _this3 = this;
      if (flag === "yes") {
        var toolbarVm = this.$grid.getVm("toolbar");
        var toolbarId = toolbarVm.id;
        var customVm = toolbarVm.$refs.custom;
        var customId;
        var noStore = true;
        var business = function business2(storeObj) {
          storeObj = storeObj || {};
          var optionArr = storeObj[toolbarId] || [];
          var selected = optionArr.find(function(opt) {
            return opt.id === _this3.selected;
          });
          if (selected) {
            delete selected.setting.custom.id;
            customVm.columns = mergeArray(customVm.columns, selected.setting.custom.columns);
            customVm.settings.pageSize = selected.setting.custom.pageSize;
            customVm.settings.sortType = selected.setting.custom.sortType;
            customId = selected.id;
          }
          storeObj[toolbarId] = optionArr;
          return storeObj;
        };
        var postOperate = function postOperate2() {
          customVm.multipleHistoryId = customId;
          customVm.saveSettings();
          _this3.visible = false;
          _this3.status = "";
        };
        this.doStorage(business, postOperate, noStore);
      }
      this.visible = false;
      this.status = "";
    },
    handleEdit: function handleEdit() {
      if (this.historyConfig.editDisabled || this.editDisabled || !this.selected) {
        return;
      }
      this.editName = this.selectedName;
      this.status = "edit";
      this.visible = true;
    },
    handleEditConfirm: function handleEditConfirm(flag) {
      var _this4 = this;
      if (flag === "yes") {
        if (!this.editName)
          return;
        var _this$$grid$getVm2 = this.$grid.getVm("toolbar"), toolbarId = _this$$grid$getVm2.id;
        var business = function business2(storeObj) {
          storeObj = storeObj || {};
          var optionArr = storeObj[toolbarId] || [];
          var selected = optionArr.find(function(opt) {
            return opt.id === _this4.selected;
          });
          selected && (selected.name = _this4.editName);
          storeObj[toolbarId] = optionArr;
          return storeObj;
        };
        var postOperate = function postOperate2() {
          _this4.setSelected();
          _this4.visible = false;
          _this4.status = "";
          _this4.editName = null;
        };
        this.doStorage(business, postOperate);
      }
      if (flag === "no") {
        this.visible = false;
        this.status = "";
        this.editName = null;
      }
    },
    handleDel: function handleDel() {
      if (this.historyConfig.delDisabled || this.delDisabled || !this.selected) {
        return;
      }
      this.status = "del";
      this.visible = true;
    },
    handleDelConfirm: function handleDelConfirm(flag) {
      var _this5 = this;
      if (flag === "yes") {
        var _this$$grid$getVm3 = this.$grid.getVm("toolbar"), toolbarId = _this$$grid$getVm3.id;
        var business = function business2(storeObj) {
          storeObj = storeObj || {};
          var optionArr = storeObj[toolbarId] || [];
          optionArr = optionArr.filter(function(opt) {
            return opt.id !== _this5.selected;
          });
          storeObj[toolbarId] = optionArr;
          return storeObj;
        };
        var postOperate = function postOperate2() {
          _this5.setSelected();
          _this5.visible = false;
          _this5.status = "";
        };
        this.doStorage(business, postOperate);
      }
      if (flag === "no") {
        this.visible = false;
        this.status = "";
      }
    },
    doStorage: function doStorage(business, postOperate, noStore) {
      var _this6 = this;
      if (noStore === void 0) {
        noStore = false;
      }
      var toolbarVm = this.$grid.getVm("toolbar");
      var storageType = toolbarVm.settingOpts.storage, toolbarId = toolbarVm.id;
      getStorage(this.historyConfig.storageKey, storageType, this.historyConfig.remoteMethod).then(function(storeObj) {
        storeObj = business(storeObj);
        if (!noStore) {
          setStorage(_this6.historyConfig.storageKey, storeObj, storageType, toolbarVm, "multiple-history");
          _this6.options = storeObj[toolbarId].filter(function(opt) {
            return _this6.userKey ? opt.userKey === _this6.userKey : true;
          });
        }
        setTimeout(postOperate);
      });
    },
    handleSelectChange: function handleSelectChange() {
      var _this7 = this;
      if (this.selected) {
        var item = find_default(this.options, function(item2) {
          return item2.id === _this7.selected;
        });
        this.selectedName = item ? item.name : null;
      } else {
        this.selectedName = null;
      }
      this.fixStatus();
    },
    doCheck: function doCheck(_ref) {
      var storageType = _ref.storageType;
      if (storageType === "remote") {
        if (!this.historyConfig.remoteMethod || typeof this.historyConfig.remoteMethod !== "function") {
          index$u.error("ui.grid.error.remoteMethod");
          return false;
        }
        if (!this.historyConfig.remoteSelectedMethod || typeof this.historyConfig.remoteSelectedMethod !== "function") {
          index$u.error("ui.grid.error.remoteSelectedMethod");
          return false;
        }
      }
      return true;
    },
    setUserKey: function setUserKey() {
      this.userKey = ~["userId", "userAccount"].indexOf(this.historyConfig.userKey) ? this.$grid.$service ? this.$grid.$service.base.getEnvInfoSync().user[this.historyConfig.userKey] : null : null;
    },
    setSelected: function setSelected() {
      var _this8 = this;
      this.selected = this.option ? this.option.id : "";
      if (this.selected) {
        var item = find_default(this.options, function(item2) {
          return item2.id === _this8.selected;
        });
        this.selected = item ? this.selected : null;
        this.selectedName = item ? item.name : null;
      }
      this.fixStatus();
    },
    fixStatus: function fixStatus() {
      this.applyDisabled = false;
      this.editDisabled = false;
      this.delDisabled = false;
      if (!this.selectedName) {
        this.editDisabled = true;
        this.delDisabled = true;
      }
      if (!this.selectedName || this.option.id === this.selected) {
        this.applyDisabled = true;
      }
      var toolbarVm = this.$grid.getVm("toolbar");
      var customVm = toolbarVm.$refs.custom;
      customVm.saveDisabled = false;
      if (this.selected) {
        customVm.saveDisabled = true;
      }
    },
    enableAll: function enableAll() {
      this.saveDisabled = false;
      this.selectDisabled = false;
      this.applyDisabled = false;
      this.editDisabled = false;
      this.delDisabled = false;
    }
  }
});
var _hoisted_1$2 = {
  key: 0,
  class: "radio-box"
};
var _hoisted_2$2 = {
  class: "btn-box"
};
var _hoisted_3$2 = {
  key: 1,
  class: "tiny-grid-custom-switch"
};
var _hoisted_4$2 = {
  class: "tiny-grid-custom-switch__title"
};
var _hoisted_5$2 = {
  class: "tiny-grid-custom-switch__label"
};
var _hoisted_6$2 = {
  class: "tiny-grid-custom-switch__content"
};
var _hoisted_7$2 = ["title"];
var _hoisted_8$2 = ["title"];
var _hoisted_9$2 = ["title"];
var _hoisted_10$2 = {
  key: 0,
  class: "tiny-grid-custom-switch__confirm-btns"
};
var _hoisted_11$2 = {
  class: "tiny-grid-custom-switch__del-tip"
};
var _hoisted_12$2 = {
  class: "tiny-grid-custom-switch__del-tip"
};
var _hoisted_13$2 = {
  class: "tiny-grid-custom-switch__del-tip"
};
var _hoisted_14$2 = {
  class: "tiny-grid-custom-switch__del-tip"
};
function _sfc_render$3(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_radio = resolveComponent("tiny-radio");
  var _component_tiny_input = resolveComponent("tiny-input");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _component_tiny_popover = resolveComponent("tiny-popover");
  var _component_tiny_alert = resolveComponent("tiny-alert");
  var _component_tiny_col = resolveComponent("tiny-col");
  var _component_tiny_row = resolveComponent("tiny-row");
  var _component_tiny_select = resolveComponent("tiny-select");
  var _component_tiny_layout = resolveComponent("tiny-layout");
  var _component_tiny_dialog_box = resolveComponent("tiny-dialog-box");
  return _ctx.customMode === "saas" ? (openBlock(), createBlock(_component_tiny_popover, {
    key: 0,
    ref: "popover",
    width: "280",
    modelValue: _ctx.templateVisible,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function($event) {
      return _ctx.templateVisible = $event;
    }),
    placement: "top",
    "popper-class": "grid-toolbar-template-popover",
    trigger: "manual"
  }, {
    reference: withCtx(function() {
      return [createVNode(_component_tiny_button, {
        class: "save-btn",
        onClick: _cache[6] || (_cache[6] = function($event) {
          return _ctx.templateVisible = !_ctx.templateVisible;
        })
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.saveTemplate")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      })];
    }),
    default: withCtx(function() {
      return [createBaseVNode("div", null, [_ctx.selectedTemplateVal.id ? (openBlock(), createElementBlock("div", _hoisted_1$2, [createVNode(_component_tiny_radio, {
        modelValue: _ctx.saveMethod,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
          return _ctx.saveMethod = $event;
        }),
        label: "overwrite"
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.overwriteSave")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]), createVNode(_component_tiny_radio, {
        modelValue: _ctx.saveMethod,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function($event) {
          return _ctx.saveMethod = $event;
        }),
        label: "save"
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.saveAs")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])])) : createCommentVNode("v-if", true), _ctx.saveMethod === "save" ? (openBlock(), createBlock(_component_tiny_input, {
        key: 1,
        modelValue: _ctx.savedTemplateName,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function($event) {
          return _ctx.savedTemplateName = $event;
        }),
        type: "text",
        placeholder: _ctx.t("ui.grid.individuation.defaultTemplateName")
      }, null, 8, ["modelValue", "placeholder"])) : (openBlock(), createBlock(_component_tiny_input, {
        key: 2,
        modelValue: _ctx.selectedTemplateName,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function($event) {
          return _ctx.selectedTemplateName = $event;
        }),
        placeholder: _ctx.t("ui.grid.individuation.reserveTemplateName"),
        type: "text"
      }, null, 8, ["modelValue", "placeholder"])), createBaseVNode("div", _hoisted_2$2, [createVNode(_component_tiny_button, {
        onClick: _cache[4] || (_cache[4] = function($event) {
          return _ctx.templateVisible = false;
        })
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.cancelBtn")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }), createVNode(_component_tiny_button, {
        type: "primary",
        onClick: _cache[5] || (_cache[5] = function($event) {
          return _ctx.handleSaveConfirm(_ctx.saveMethod);
        })
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.saveBtn")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      })])])];
    }),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"])) : (openBlock(), createElementBlock("div", _hoisted_3$2, [createVNode(_component_tiny_layout, null, {
    default: withCtx(function() {
      return [createVNode(_component_tiny_row, {
        "no-space": ""
      }, {
        default: withCtx(function() {
          return [createVNode(_component_tiny_col, {
            span: 12
          }, {
            default: withCtx(function() {
              return [createBaseVNode("div", _hoisted_4$2, [_ctx.historyConfig.showTitle ? (openBlock(), createBlock(_component_tiny_alert, {
                key: 0,
                description: _ctx.historyConfig.title || _ctx.t("ui.grid.individuation.switchtitle"),
                closable: false
              }, null, 8, ["description"])) : createCommentVNode("v-if", true)])];
            }),
            _: 1
            /* STABLE */
          })];
        }),
        _: 1
        /* STABLE */
      }), createVNode(_component_tiny_row, {
        "no-space": ""
      }, {
        default: withCtx(function() {
          return [_ctx.historyConfig.showSave ? (openBlock(), createBlock(_component_tiny_col, {
            key: 0,
            span: 2
          }, {
            default: withCtx(function() {
              return [createBaseVNode("div", null, [createVNode(_component_tiny_button, {
                type: "primary",
                size: "mini",
                disabled: _ctx.historyConfig.saveDisabled || _ctx.saveDisabled,
                onClick: _ctx.handleSave
              }, {
                default: withCtx(function() {
                  return [createTextVNode(
                    toDisplayString(_ctx.historyConfig.saveText || _ctx.t("ui.grid.individuation.switchsave")),
                    1
                    /* TEXT */
                  )];
                }),
                _: 1
                /* STABLE */
              }, 8, ["disabled", "onClick"])])];
            }),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true), createVNode(_component_tiny_col, {
            span: 2
          }, {
            default: withCtx(function() {
              return [createBaseVNode(
                "div",
                _hoisted_5$2,
                toDisplayString(_ctx.historyConfig.labelText || _ctx.t("ui.grid.individuation.switchlabel")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }), createVNode(_component_tiny_col, {
            span: 5
          }, {
            default: withCtx(function() {
              return [createBaseVNode("div", _hoisted_6$2, [createVNode(_component_tiny_select, {
                clearable: "",
                ref: "select",
                "value-field": "id",
                "text-field": "name",
                placeholder: _ctx.historyConfig.selectPlaceholder || _ctx.t("ui.select.placeholder"),
                disabled: _ctx.historyConfig.selectDisabled || _ctx.selectDisabled,
                options: _ctx.options,
                onChange: _ctx.handleSelectChange,
                modelValue: _ctx.selected,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = function($event) {
                  return _ctx.selected = $event;
                })
              }, null, 8, ["placeholder", "disabled", "options", "onChange", "modelValue"])])];
            }),
            _: 1
            /* STABLE */
          }), createVNode(_component_tiny_col, {
            span: 3
          }, {
            default: withCtx(function() {
              return [createBaseVNode("div", null, [_ctx.historyConfig.showApply ? (openBlock(), createElementBlock("span", {
                key: 0,
                title: _ctx.historyConfig.applyTitle || _ctx.t("ui.grid.individuation.switchapply"),
                class: normalizeClass(["tiny-grid-custom-switch__icon-btn", {
                  "tiny-grid-custom-switch__icon-btn--disabled": _ctx.historyConfig.applyDisabled || _ctx.applyDisabled
                }]),
                onClick: _cache[9] || (_cache[9] = function() {
                  return _ctx.handleApply && _ctx.handleApply.apply(_ctx, arguments);
                })
              }, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.historyConfig.applyIcon || _ctx.IconSave)))], 10, _hoisted_7$2)) : createCommentVNode("v-if", true), _ctx.historyConfig.showEdit ? (openBlock(), createElementBlock("span", {
                key: 1,
                title: _ctx.historyConfig.editTitle || _ctx.t("ui.grid.individuation.switchedit"),
                class: normalizeClass(["tiny-grid-custom-switch__icon-btn", {
                  "tiny-grid-custom-switch__icon-btn--disabled": _ctx.historyConfig.editDisabled || _ctx.editDisabled
                }]),
                onClick: _cache[10] || (_cache[10] = function() {
                  return _ctx.handleEdit && _ctx.handleEdit.apply(_ctx, arguments);
                })
              }, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.historyConfig.editIcon || _ctx.IconEdit)))], 10, _hoisted_8$2)) : createCommentVNode("v-if", true), _ctx.historyConfig.showDel ? (openBlock(), createElementBlock("span", {
                key: 2,
                title: _ctx.historyConfig.delTitle || _ctx.t("ui.grid.individuation.switchdel"),
                class: normalizeClass(["tiny-grid-custom-switch__icon-btn", {
                  "tiny-grid-custom-switch__icon-btn--disabled": _ctx.historyConfig.delDisabled || _ctx.delDisabled
                }]),
                onClick: _cache[11] || (_cache[11] = function() {
                  return _ctx.handleDel && _ctx.handleDel.apply(_ctx, arguments);
                })
              }, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.historyConfig.delIcon || _ctx.IconDel)))], 10, _hoisted_9$2)) : createCommentVNode("v-if", true)])];
            }),
            _: 1
            /* STABLE */
          })];
        }),
        _: 1
        /* STABLE */
      })];
    }),
    _: 1
    /* STABLE */
  }), createVNode(_component_tiny_dialog_box, {
    top: "30vh",
    width: "420px",
    "dialog-class": "tiny-grid-custom-switch__dialog-box",
    draggable: "",
    "append-to-body": "",
    visible: _ctx.visible,
    "close-on-click-modal": false,
    title: _ctx.dialogTitle,
    "onUpdate:visible": _cache[22] || (_cache[22] = function($event) {
      return _ctx.visible = $event;
    })
  }, {
    footer: withCtx(function() {
      return [~["apply", "edit", "del"].indexOf(_ctx.status) ? (openBlock(), createElementBlock(
        Fragment,
        {
          key: 0
        },
        [_ctx.status === "apply" ? (openBlock(), createElementBlock(
          Fragment,
          {
            key: 0
          },
          [createVNode(_component_tiny_button, {
            type: "primary",
            onClick: _cache[16] || (_cache[16] = function($event) {
              return _ctx.handleApplyConfirm("yes");
            })
          }, {
            default: withCtx(function() {
              return [createTextVNode(
                toDisplayString(_ctx.t("ui.grid.individuation.switchdelyes")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }), createVNode(_component_tiny_button, {
            onClick: _cache[17] || (_cache[17] = function($event) {
              return _ctx.handleApplyConfirm("no");
            })
          }, {
            default: withCtx(function() {
              return [createTextVNode(
                toDisplayString(_ctx.t("ui.grid.individuation.switchdelno")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          })],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true), _ctx.status === "edit" ? (openBlock(), createElementBlock(
          Fragment,
          {
            key: 1
          },
          [createVNode(_component_tiny_button, {
            type: "primary",
            disabled: !_ctx.editName,
            onClick: _cache[18] || (_cache[18] = function($event) {
              return _ctx.handleEditConfirm("yes");
            })
          }, {
            default: withCtx(function() {
              return [createTextVNode(
                toDisplayString(_ctx.t("ui.grid.individuation.switchdelyes")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }, 8, ["disabled"]), createVNode(_component_tiny_button, {
            onClick: _cache[19] || (_cache[19] = function($event) {
              return _ctx.handleEditConfirm("no");
            })
          }, {
            default: withCtx(function() {
              return [createTextVNode(
                toDisplayString(_ctx.t("ui.grid.individuation.switchdelno")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          })],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true), _ctx.status === "del" ? (openBlock(), createElementBlock(
          Fragment,
          {
            key: 2
          },
          [createVNode(_component_tiny_button, {
            type: "primary",
            onClick: _cache[20] || (_cache[20] = function($event) {
              return _ctx.handleDelConfirm("yes");
            })
          }, {
            default: withCtx(function() {
              return [createTextVNode(
                toDisplayString(_ctx.t("ui.grid.individuation.switchdelyes")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }), createVNode(_component_tiny_button, {
            onClick: _cache[21] || (_cache[21] = function($event) {
              return _ctx.handleDelConfirm("no");
            })
          }, {
            default: withCtx(function() {
              return [createTextVNode(
                toDisplayString(_ctx.t("ui.grid.individuation.switchdelno")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          })],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true)],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true)];
    }),
    default: withCtx(function() {
      return [_ctx.status === "save" ? (openBlock(), createElementBlock("div", _hoisted_10$2, [createVNode(_component_tiny_button, {
        type: "primary",
        onClick: _cache[12] || (_cache[12] = function($event) {
          return _ctx.handleSaveConfirm("save");
        })
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.switchonlytemp")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }), createVNode(_component_tiny_button, {
        onClick: _cache[13] || (_cache[13] = function($event) {
          return _ctx.handleSaveConfirm("save-apply");
        })
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.switchtempapply")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }), createVNode(_component_tiny_button, {
        onClick: _cache[14] || (_cache[14] = function($event) {
          return _ctx.handleSaveConfirm("overwrite");
        }),
        disabled: !_ctx.selected
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.switchtempoverwrite")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["disabled"])])) : createCommentVNode("v-if", true), _ctx.status === "apply" ? (openBlock(), createElementBlock(
        Fragment,
        {
          key: 1
        },
        [createBaseVNode(
          "div",
          _hoisted_11$2,
          toDisplayString(_ctx.selectedName),
          1
          /* TEXT */
        ), createBaseVNode(
          "div",
          _hoisted_12$2,
          toDisplayString(_ctx.t("ui.grid.individuation.switchapplycon")),
          1
          /* TEXT */
        )],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true), _ctx.status === "edit" ? (openBlock(), createBlock(_component_tiny_input, {
        key: 2,
        modelValue: _ctx.editName,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = function($event) {
          return _ctx.editName = $event;
        })
      }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), _ctx.status === "del" ? (openBlock(), createElementBlock(
        Fragment,
        {
          key: 3
        },
        [createBaseVNode(
          "div",
          _hoisted_13$2,
          toDisplayString(_ctx.selectedName),
          1
          /* TEXT */
        ), createBaseVNode(
          "div",
          _hoisted_14$2,
          toDisplayString(_ctx.t("ui.grid.individuation.switchdelcon")),
          1
          /* TEXT */
        )],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true)];
    }),
    _: 1
    /* STABLE */
  }, 8, ["visible", "title"])]));
}
var CustomSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var _sfc_main$2 = defineComponent({
  components: {
    TinyModal: TINYModal,
    TinyButton: Button,
    TinyRadio: Radio$1,
    TinyGrid: Grid,
    TinyGridColumn: Column,
    TinySelect: Select,
    TinyOption: Option,
    IconEyeopen: index$v(),
    IconEyeclose: index$w(),
    IconUnlock: index$8(),
    IconLeftFrozen: index$f(),
    IconRightFrozen: index$b(),
    IconLock: index$d(),
    IconMinus: index$c(),
    IconDescending: index$h(),
    IconAscending: index$j(),
    IconHelp: index$g(),
    TinyCustomSwitch: CustomSwitch
  },
  name: "TinyGridCustom",
  inject: {
    $grid: {
      default: null
    }
  },
  props: _extends({}, $props, {
    data: {
      type: Array,
      default: function _default33() {
        return [];
      }
    },
    other: {
      type: Boolean,
      default: true
    },
    initSettings: {
      type: Object,
      default: function _default43() {
        return {
          pageSizes: [10, 15, 20, 30, 50, 100],
          pageSize: 10,
          sortType: "page",
          showIndex: false
        };
      }
    },
    value: Boolean,
    sortable: Function,
    rowClassName: [Function, String],
    onBeforeMove: Function,
    filter: String,
    refresh: Boolean,
    keys: {
      type: Array,
      default: function _default52() {
        return [];
      }
    },
    numberSorting: Boolean,
    multipleHistory: [Object, Boolean],
    resetMethod: Function,
    showHideAll: Boolean,
    fixedSorting: Boolean
  }),
  emits: ["input", "saveSettings", "resetSettings", "cancelSettings", "showModal"],
  data: function data2() {
    return {
      activeName: "base",
      animateShow: "base",
      constants: {
        icon: {
          asc: "icon-ascending",
          desc: "icon-descending",
          left: "icon-left-frozen",
          right: "icon-right-frozen"
        }
      },
      columns: [],
      fullColumn: [],
      customColumns: [{
        field: "level"
      }, {
        field: "property"
      }],
      settings: {
        sortType: this.initSettings.sortType || "page",
        pageSize: this.initSettings.pageSize || this.pageSizes[0] || 10,
        columns: []
      },
      sortingOptions: [],
      multipleHistoryId: null,
      saveDisabled: false
    };
  },
  created: function created2() {
    this.columns = this.getColumnConfigs(this.data);
  },
  watch: {
    value: function value() {
      this.columns = this.getColumnConfigs(this.data);
    },
    data: {
      handler: function handler2(val) {
        this.columns = this.getColumnConfigs(val);
      }
    },
    activeName: {
      handler: function handler3(val) {
        var _this9 = this;
        setTimeout(function() {
          _this9.animateShow = val;
        }, 0);
      }
    }
  },
  computed: {
    visible: {
      get: function get() {
        return this.value;
      },
      set: function set() {
      }
    },
    showFixed: function showFixed() {
      return this.$grid;
    },
    TinyTable: function TinyTable() {
      return this.$grid && this.$grid.$refs.TinyTable || {};
    },
    isGroup: function isGroup() {
      return this.TinyTable.isGroup;
    },
    historyConfig: function historyConfig() {
      var multipleHistory = isNull_default(this.multipleHistory) || typeof this.multipleHistory === "boolean" ? {} : this.multipleHistory;
      return extend(true, {}, this.initSettings.multipleHistory || {}, multipleHistory);
    },
    TinyTheme: function TinyTheme() {
      var ctx = appProperties();
      return (ctx.Tiny_theme ? ctx.Tiny_theme.value : "") || "aurora";
    },
    dropConfig: function dropConfig() {
      return {
        row: true,
        column: false,
        plugin: !this.isGroup && this.sortable,
        onBeforeMove: this.onBeforeMove,
        filter: this.filter,
        refresh: this.refresh
      };
    }
  },
  methods: {
    t,
    getColumnConfigs: function getColumnConfigs(configs) {
      var getColNodes = function getColNodes2(columns2) {
        return columns2.map(function(_ref2) {
          var id = _ref2.id, title = _ref2.title, property = _ref2.property, fixed = _ref2.fixed, visible = _ref2.visible, order = _ref2.order, sortable = _ref2.sortable, level = _ref2.level, children = _ref2.children;
          if (property) {
            var column = {
              id,
              title,
              property,
              fixed,
              visible,
              order,
              sortable,
              level,
              children
            };
            children && (column.children = getColNodes2(children));
            return column;
          }
          return void 0;
        }).filter(function(i) {
          return i;
        });
      };
      if (configs.length && this.$grid) {
        var _this$$grid$getTableC = this.$grid.getTableColumn(), collectColumn = _this$$grid$getTableC.collectColumn;
        var columns = getColNodes(collectColumn);
        columns = this.doFixedSorting(columns);
        this.initNumberSorting(columns);
        return columns;
      }
    },
    doFixedSorting: function doFixedSorting(columns) {
      if (this.isGroup || !this.fixedSorting) {
        return columns;
      }
      var fixedLeft = [];
      var normal = [];
      var fixedRight = [];
      columns.forEach(function(column) {
        if (!column.fixed) {
          normal.push(column);
        } else if (column.fixed === "left") {
          fixedLeft.push(column);
        } else if (column.fixed === "right") {
          fixedRight.push(column);
        }
      });
      return [].concat(fixedLeft, normal, fixedRight);
    },
    initNumberSorting: function initNumberSorting(columns) {
      var _this10 = this;
      if (this.isGroup)
        return;
      this.sortingOptions = [];
      columns.forEach(function(column, index3) {
        column.sortingIndex = index3 + 1;
        _this10.sortingOptions.push(column.sortingIndex);
      });
    },
    handelNumberSorting: function handelNumberSorting(sort, row) {
      var oldSort = this.columns.indexOf(row);
      var newSort = sort - 1;
      var columns = [];
      this.columns.splice(oldSort, 1);
      this.columns.splice(newSort, 0, row);
      this.columns.forEach(function(column, index3) {
        column.sortingIndex = index3 + 1;
        columns.push(column);
      });
      this.columns = columns;
    },
    handleRowDropEnd: function handleRowDropEnd() {
      if (this.isGroup)
        return;
      this.columns.forEach(function(column, index3) {
        column.sortingIndex = index3 + 1;
      });
    },
    renderNumberSorting: function renderNumberSorting(h2, _ref3) {
      var row = _ref3.row;
      return h2("span", row.sortingIndex + "");
    },
    handleCustomMouseMove: function handleCustomMouseMove() {
      this.$refs.switch && this.$refs.switch.$refs.select && this.$refs.switch.$refs.select.blur();
    },
    handleInput: function handleInput(val) {
      this.$emit("input", val);
    },
    handleFixed: function handleFixed(column) {
      var index3 = this.columns.indexOf(column);
      var splitIndex = 0;
      var fixed = column.fixed;
      if (!this.isGroup) {
        column.fixed = fixed ? fixed === "left" ? "right" : void 0 : "left";
        if (this.fixedSorting) {
          this.columns = this.doFixedSorting(this.columns);
          this.initNumberSorting(this.columns);
        }
      } else {
        for (var i = 0; i < this.columns.length; i++) {
          if (this.columns[i].children) {
            splitIndex = i;
            break;
          }
        }
        var leftColumns = this.columns.slice(0, index3);
        var rightColumns = this.columns.slice(index3 + 1);
        var changeFixed = function changeFixed2(left, right, column2, type) {
          var fixed2 = column2.fixed;
          if (fixed2) {
            if (!left.some(function(column3) {
              return column3.fixed === type;
            })) {
              column2.fixed = void 0;
            }
          } else {
            if (!right.length || !right.some(function(column3) {
              return !column3.fixed;
            })) {
              column2.fixed = type;
            }
          }
          if (fixed2 === column2.fixed) {
            TINYModal.message({
              id: "customSetting",
              message: t("ui.grid.error.groupFixed"),
              status: "warning"
            });
          }
        };
        if (index3 > splitIndex) {
          changeFixed(leftColumns, rightColumns, column, "right");
        } else {
          changeFixed(rightColumns, leftColumns, column, "left");
        }
      }
    },
    handleOrder: function handleOrder(column) {
      var columns = this.columns, tinyTable2 = this.tinyTable;
      var sortOpts = tinyTable2.sortOpts;
      var multipleColumnSort = sortOpts.multipleColumnSort;
      column.order = tinyTable2.toggleColumnOrder(column);
      if (column.order && !multipleColumnSort) {
        arrayEach_default(columns, function(col) {
          return col !== column && (col.order = null);
        });
      }
    },
    handleVisible: function handleVisible(column) {
      var visibleColumnCount = this.tinyTable.visibleColumn.filter(function(item) {
        return item.visible;
      }).length;
      if (column.visible && visibleColumnCount === 1) {
        TINYModal.message({
          id: "customSetting",
          message: t("ui.grid.individuation.hideMsg"),
          status: "warning"
        });
      } else {
        column.visible = !column.visible;
      }
    },
    showOrHideAllColumns: function showOrHideAllColumns(visible) {
      this.columns.forEach(function(col) {
        col.visible = visible;
      });
      this.showAll = visible;
    },
    handlerSetting: function handlerSetting(type, column) {
      var invisibleCols = this.fullColumn.filter(function(item) {
        return item.visible;
      }).length;
      switch (type) {
        case "visible":
          if (column[type] && invisibleCols === 1) {
            TINYModal.message({
              id: "customSetting",
              message: t("ui.grid.individuation.hideMsg"),
              status: "warning"
            });
          } else {
            column[type] = !column[type];
          }
          break;
        case "fixed":
          this.handleFixed(column);
          break;
        case "order":
          column[type] = column[type] ? column[type] === "asc" ? "desc" : null : "asc";
          break;
      }
    },
    buildSettings: function buildSettings() {
      var props2 = ["order", "fixed", "visible", "sortable"].concat(this.keys);
      this.settings.columns = mapTree_default(this.columns, function(_ref4) {
        var property = _ref4.property, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
        var node = {
          property
        };
        props2.forEach(function(prop) {
          node[prop] = rest[prop];
        });
        return node;
      });
      return this.settings;
    },
    saveSettings: function saveSettings() {
      this.buildSettings();
      this.$emit("saveSettings", this.settings);
      this.handleClose();
    },
    resetSettings: function resetSettings(event) {
      var _this11 = this;
      if (this.activeName === "base") {
        this.columns = this.getColumnConfigs(this.data);
        if (this.settings.columns && this.settings.columns.length) {
          this.settings.columns.forEach(function(setting) {
            var column = find_default(_this11.columns, function(item) {
              return item.property === setting.property;
            });
            if (column) {
              Object.assign(setting, column);
            }
          });
        }
      } else if (this.activeName === "other") {
        this.settings.sortType = this.initSettings.sortType;
        this.settings.pageSize = this.initSettings.pageSize;
      }
      event && this.$emit("resetSettings", this.settings);
    },
    cancelSettings: function cancelSettings() {
      this.resetSettings();
      this.$emit("cancelSettings");
      this.$emit("input", false);
      this.handleClose();
    },
    handleClose: function handleClose2() {
      this.$emit("showModal", false);
    },
    handleReset: function handleReset(event) {
      var _this12 = this;
      var equal = function equal2(cols1, cols2) {
        var props1 = [];
        var props2 = [];
        cols1.forEach(function(col) {
          return col && col.property && props1.push(col.property);
        });
        cols2.forEach(function(col) {
          return col && col.property && props2.push(col.property);
        });
        return props1.length === props2.length && props1.sort().join(",") === props2.sort().join(",");
      };
      if (typeof this.resetMethod === "function") {
        this.resetMethod().then(function(sourceSettings) {
          _this12.buildSettings();
          var _ref5 = sourceSettings || {}, columns = _ref5.columns, sortType = _ref5.sortType, pageSize = _ref5.pageSize;
          if (columns && columns.length && _this12.settings.columns && _this12.settings.columns.length) {
            _this12.settings.columns.forEach(function(setting) {
              var source = find_default(columns, function(item) {
                return item.property === setting.property;
              });
              var target = find_default(_this12.columns, function(item) {
                return item.property === setting.property;
              });
              if (source) {
                Object.assign(setting, source);
                Object.assign(target, source);
              }
            });
            if (equal(columns, _this12.settings.columns)) {
              var settingColumns = [];
              var gridColumns = [];
              columns.forEach(function(source) {
                var settingCol = find_default(_this12.settings.columns, function(item) {
                  return source.property === item.property;
                });
                var targetCol = find_default(_this12.columns, function(item) {
                  return source.property === item.property;
                });
                settingColumns.push(settingCol);
                gridColumns.push(targetCol);
              });
              _this12.settings.columns = settingColumns;
              _this12.columns = gridColumns;
            }
          }
          sortType && (_this12.settings.sortType = sortType);
          pageSize && (_this12.settings.pageSize = pageSize);
        });
      } else {
        this.resetSettings(event);
      }
    },
    visibleTitle: function visibleTitle(row) {
      if (row.visible) {
        return t("ui.grid.individuation.colConfigs.visible");
      } else {
        return t("ui.grid.individuation.colConfigs.invisible");
      }
    },
    sortTitle: function sortTitle(row) {
      if (row.sortable) {
        if (row.order) {
          if (row.order === "asc") {
            return t("ui.grid.individuation.colConfigs.asc");
          } else {
            return t("ui.grid.individuation.colConfigs.desc");
          }
        } else {
          return t("ui.grid.individuation.colConfigs.unsorted");
        }
      } else {
        return "";
      }
    },
    fixedTitle: function fixedTitle(row) {
      if (row.fixed) {
        if (row.fixed === "left") {
          return t("ui.grid.individuation.colConfigs.frozenLeft");
        } else {
          return t("ui.grid.individuation.colConfigs.frozenRight");
        }
      } else {
        return t("ui.grid.individuation.colConfigs.unfrozen");
      }
    }
  }
});
var _hoisted_1$1 = {
  key: 0,
  class: "tiny-grid-custom tiny-grid__wrapper"
};
var _hoisted_2$1 = {
  class: "tiny-grid-custom__tabs"
};
var _hoisted_3$1 = {
  class: "tiny-grid-custom__tabs-head"
};
var _hoisted_4$1 = {
  class: "tiny-grid-custom__tabs-body"
};
var _hoisted_5$1 = {
  class: "tiny-grid-custom__alert"
};
var _hoisted_6$1 = {
  key: 0,
  class: "setting-icon"
};
var _hoisted_7$1 = ["title"];
var _hoisted_8$1 = ["title"];
var _hoisted_9$1 = ["title"];
var _hoisted_10$1 = {
  class: "tiny-grid-custom__alert"
};
var _hoisted_11$1 = {
  class: "tiny-grid-custom__setting other-setting"
};
var _hoisted_12$1 = {
  class: "setting-item"
};
var _hoisted_13$1 = {
  class: "label"
};
var _hoisted_14$1 = {
  class: "selection"
};
var _hoisted_15$1 = {
  class: "setting-item"
};
var _hoisted_16$1 = {
  class: "label"
};
var _hoisted_17$1 = {
  class: "selection"
};
var _hoisted_18$1 = ["dir"];
function _sfc_render$2(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_grid_column = resolveComponent("tiny-grid-column");
  var _component_tiny_option = resolveComponent("tiny-option");
  var _component_tiny_select = resolveComponent("tiny-select");
  var _component_tiny_grid = resolveComponent("tiny-grid");
  var _component_tiny_radio = resolveComponent("tiny-radio");
  var _component_tiny_custom_switch = resolveComponent("tiny-custom-switch");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _component_tiny_modal = resolveComponent("tiny-modal");
  return openBlock(), createBlock(_component_tiny_modal, {
    width: "600",
    title: _ctx.t("ui.grid.individuation.title"),
    modelValue: _ctx.visible,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function($event) {
      return _ctx.visible = $event;
    }),
    onInput: _ctx.handleInput,
    onClose: _ctx.handleClose,
    onCustomMousemove: _ctx.handleCustomMouseMove
  }, {
    default: withCtx(function() {
      return [_ctx.visible ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", _hoisted_3$1, [createBaseVNode("ul", null, [createBaseVNode(
        "li",
        {
          onClick: _cache[0] || (_cache[0] = function($event) {
            return _ctx.activeName = "base";
          }),
          class: normalizeClass({
            "tiny-grid-custom__tabs-selected": _ctx.activeName === "base"
          })
        },
        [createBaseVNode(
          "span",
          null,
          toDisplayString(_ctx.t("ui.grid.individuation.tabs.base.title")),
          1
          /* TEXT */
        )],
        2
        /* CLASS */
      ), _ctx.other ? (openBlock(), createElementBlock(
        "li",
        {
          key: 0,
          onClick: _cache[1] || (_cache[1] = function($event) {
            return _ctx.activeName = "other";
          }),
          class: normalizeClass({
            "tiny-grid-custom__tabs-selected": _ctx.activeName === "other"
          })
        },
        [createBaseVNode(
          "span",
          null,
          toDisplayString(_ctx.t("ui.grid.individuation.tabs.other.title")),
          1
          /* TEXT */
        )],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true)])]), createBaseVNode("div", _hoisted_4$1, [withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["tabs-body-item", _ctx.animateShow === "base" ? "active-item" : ""])
        },
        [createBaseVNode("div", _hoisted_5$1, [(openBlock(), createBlock(resolveDynamicComponent("icon-help"), {
          class: "tiny-svg-size"
        })), createBaseVNode(
          "p",
          null,
          toDisplayString(_ctx.t("ui.grid.individuation.tabs.base.tips")),
          1
          /* TEXT */
        )]), createVNode(_component_tiny_grid, {
          class: "tiny-grid-custom__setting",
          "auto-resize": true,
          data: _ctx.columns,
          "row-class-name": _ctx.rowClassName,
          "row-key": "",
          "drop-config": _ctx.dropConfig,
          "tree-config": {
            children: "children"
          },
          "show-header": false,
          "edit-config": {
            trigger: "click",
            mode: "cell",
            showStatus: true
          },
          "max-height": _ctx.historyConfig.tableMaxHeight,
          onRowDropEnd: _ctx.handleRowDropEnd
        }, {
          default: withCtx(function() {
            return [_ctx.initSettings.showIndex ? (openBlock(), createBlock(_component_tiny_grid_column, {
              key: 0,
              type: "index",
              width: "60"
            })) : createCommentVNode("v-if", true), createVNode(_component_tiny_grid_column, {
              field: "title",
              "tree-node": ""
            }), createVNode(_component_tiny_grid_column, {
              field: "property",
              width: "120px",
              "class-name": "setting-item"
            }, {
              default: withCtx(function(_ref6) {
                var row = _ref6.row, data6 = _objectWithoutPropertiesLoose(_ref6, _excluded2);
                return [!row.children ? (openBlock(), createElementBlock("div", _hoisted_6$1, [createBaseVNode("span", {
                  class: "icon",
                  title: _ctx.visibleTitle(row)
                }, [(openBlock(), createBlock(resolveDynamicComponent(row.visible ? "icon-eyeopen" : "icon-eyeclose"), {
                  class: normalizeClass([{
                    open: row.visible
                  }]),
                  onClick: function onClick($event) {
                    return _ctx.handlerSetting("visible", row, data6);
                  }
                }, null, 8, ["class", "onClick"]))], 8, _hoisted_7$1), createBaseVNode("span", {
                  class: "icon",
                  title: _ctx.sortTitle(row)
                }, [(openBlock(), createBlock(resolveDynamicComponent(row.order ? _ctx.constants.icon[row.order] : "icon-minus"), {
                  class: normalizeClass({
                    sort: row.order,
                    "is-visible": !row.sortable
                  }),
                  onClick: function onClick($event) {
                    return _ctx.handlerSetting("order", row);
                  }
                }, null, 8, ["class", "onClick"]))], 8, _hoisted_8$1), createBaseVNode("span", {
                  class: "icon",
                  title: _ctx.fixedTitle(row)
                }, [row.level === 1 && _ctx.showFixed ? (openBlock(), createBlock(resolveDynamicComponent(row.fixed ? _ctx.constants.icon[row.fixed] : "icon-unlock"), {
                  key: 0,
                  class: normalizeClass({
                    lock: row.fixed
                  }),
                  onClick: function onClick($event) {
                    return _ctx.handlerSetting("fixed", row);
                  }
                }, null, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)], 8, _hoisted_9$1)])) : createCommentVNode("v-if", true)];
              }),
              _: 1
              /* STABLE */
            }), _ctx.numberSorting && !_ctx.isGroup ? (openBlock(), createBlock(_component_tiny_grid_column, {
              key: 1,
              width: "100px",
              editor: {},
              renderer: _ctx.renderNumberSorting
            }, {
              edit: withCtx(function(_ref7) {
                var row = _ref7.row;
                return [createVNode(_component_tiny_select, {
                  modelValue: row.sortingIndex,
                  "onUpdate:modelValue": function onUpdateModelValue($event) {
                    return row.sortingIndex = $event;
                  },
                  onChange: function onChange($event) {
                    return _ctx.handelNumberSorting($event, row);
                  }
                }, {
                  default: withCtx(function() {
                    return [(openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(_ctx.sortingOptions, function(item) {
                        return openBlock(), createBlock(_component_tiny_option, {
                          key: item,
                          label: item,
                          value: item
                        }, null, 8, ["label", "value"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))];
                  }),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])];
              }),
              _: 1
              /* STABLE */
            }, 8, ["renderer"])) : createCommentVNode("v-if", true)];
          }),
          _: 1
          /* STABLE */
        }, 8, ["data", "row-class-name", "drop-config", "max-height", "onRowDropEnd"])],
        2
        /* CLASS */
      ), [[vShow, _ctx.activeName === "base"]]), withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["tabs-body-item", _ctx.animateShow === "other" ? "active-item" : ""])
        },
        [createBaseVNode("div", _hoisted_10$1, [(openBlock(), createBlock(resolveDynamicComponent("icon-help"), {
          class: "tiny-svg-size"
        })), createBaseVNode(
          "p",
          null,
          toDisplayString(_ctx.t("ui.grid.individuation.tabs.other.tips")),
          1
          /* TEXT */
        )]), createBaseVNode("ul", _hoisted_11$1, [createBaseVNode("li", _hoisted_12$1, [createBaseVNode(
          "span",
          _hoisted_13$1,
          toDisplayString(_ctx.t("ui.grid.individuation.tabs.other.sortType")),
          1
          /* TEXT */
        ), createBaseVNode("span", _hoisted_14$1, [createVNode(_component_tiny_radio, {
          modelValue: _ctx.settings.sortType,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function($event) {
            return _ctx.settings.sortType = $event;
          }),
          label: "page"
        }, {
          default: withCtx(function() {
            return [createTextVNode(
              toDisplayString(_ctx.t("ui.grid.individuation.tabs.other.currPageSort")),
              1
              /* TEXT */
            )];
          }),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]), createVNode(_component_tiny_radio, {
          modelValue: _ctx.settings.sortType,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function($event) {
            return _ctx.settings.sortType = $event;
          }),
          label: "all"
        }, {
          default: withCtx(function() {
            return [createTextVNode(
              toDisplayString(_ctx.t("ui.grid.individuation.tabs.other.allDataSort")),
              1
              /* TEXT */
            )];
          }),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])])]), createBaseVNode("li", _hoisted_15$1, [createBaseVNode(
          "span",
          _hoisted_16$1,
          toDisplayString(_ctx.t("ui.grid.individuation.tabs.other.pageSize")),
          1
          /* TEXT */
        ), createBaseVNode("span", _hoisted_17$1, [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.initSettings.pageSizes, function(item, index3) {
            return openBlock(), createBlock(_component_tiny_radio, {
              key: index3,
              modelValue: _ctx.settings.pageSize,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = function($event) {
                return _ctx.settings.pageSize = $event;
              }),
              label: item
            }, {
              default: withCtx(function() {
                return [createTextVNode(
                  toDisplayString(item),
                  1
                  /* TEXT */
                )];
              }),
              _: 2
              /* DYNAMIC */
            }, 1032, ["modelValue", "label"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))])])])],
        2
        /* CLASS */
      ), [[vShow, _ctx.activeName === "other"]]), _ctx.multipleHistory && _ctx.activeName === "base" ? (openBlock(), createBlock(_component_tiny_custom_switch, {
        key: 0,
        ref: "switch",
        "history-config": _ctx.historyConfig
      }, null, 8, ["history-config"])) : createCommentVNode("v-if", true)])]), !_ctx.multipleHistory || _ctx.multipleHistory && _ctx.activeName === "base" ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "tiny-grid-custom__footer",
        dir: _ctx.TinyTheme === "saas" ? "rtl" : "ltr"
      }, [createVNode(_component_tiny_button, {
        type: "primary",
        onClick: _ctx.saveSettings,
        disabled: _ctx.saveDisabled
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.saveBtn")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["onClick", "disabled"]), createVNode(_component_tiny_button, {
        onClick: _ctx.handleReset
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.resetBtn")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]), _ctx.showHideAll ? (openBlock(), createBlock(_component_tiny_button, {
        key: 0,
        onClick: _cache[5] || (_cache[5] = function($event) {
          return _ctx.showOrHideAllColumns(!_ctx.showAll);
        })
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.showAll ? _ctx.t("ui.grid.individuation.hideAll") : _ctx.t("ui.grid.individuation.showAll")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      })) : createCommentVNode("v-if", true), createVNode(_component_tiny_button, {
        onClick: _ctx.cancelSettings
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.cancelBtn")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["onClick"])], 8, _hoisted_18$1)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true)];
    }),
    _: 1
    /* STABLE */
  }, 8, ["title", "modelValue", "onInput", "onClose", "onCustomMousemove"]);
}
var GridCustom = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var _sfc_main$1 = {
  name: "TinyGridCustomSelect",
  components: {
    TinySelect: Select,
    TinyOption: Option,
    TinyIconSetting: GlobalConfig$1.icon.custom
  },
  props: {
    data: {
      type: Array,
      default: function _default62() {
        return [];
      }
    },
    setting: {
      type: [Object, Boolean]
    }
  },
  inject: {
    $grid: {
      default: null
    }
  },
  data: function data3() {
    return {
      columns: [],
      multivalue: []
    };
  },
  created: function created3() {
    this.columns = this.getColumnConfigs(this.data);
  },
  watch: {
    data: {
      handler: function handler4(val) {
        this.columns = this.getColumnConfigs(val);
        this.multivalue = this.columns.filter(function(item) {
          return item.visible;
        }).map(function(item) {
          return item.property;
        });
      }
    }
  },
  methods: {
    columnChange: function columnChange(values) {
      this.columns.forEach(function(column) {
        column.visible = values.includes(column.property);
      });
      this.$emit("saveSettings", {
        columns: this.columns
      });
    },
    getColumnConfigs: function getColumnConfigs2(configs) {
      var _this13 = this;
      var getColNodes = function getColNodes2(columns2) {
        return columns2.map(function(_ref8) {
          var id = _ref8.id, title = _ref8.title, property = _ref8.property, fixed = _ref8.fixed, visible = _ref8.visible, order = _ref8.order, sortable = _ref8.sortable, level = _ref8.level, children = _ref8.children;
          if (property) {
            var _this13$setting;
            var column = {
              id,
              title,
              property,
              fixed,
              visible,
              order,
              sortable,
              level,
              children
            };
            column.disabled = Boolean((_this13$setting = _this13.setting) == null ? void 0 : _this13$setting.customDisable == null ? void 0 : _this13$setting.customDisable(column));
            children && (column.children = getColNodes2(children));
            return column;
          }
        }).filter(function(i) {
          return i;
        });
      };
      if (configs.length && this.$grid) {
        var _this$$grid$getTableC2 = this.$grid.getTableColumn(), collectColumn = _this$$grid$getTableC2.collectColumn;
        var columns = getColNodes(collectColumn);
        return columns;
      }
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_icon_setting = resolveComponent("tiny-icon-setting");
  var _component_tiny_option = resolveComponent("tiny-option");
  var _component_tiny_select = resolveComponent("tiny-select");
  return openBlock(), createBlock(_component_tiny_select, {
    modelValue: $data.multivalue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
      return $data.multivalue = $event;
    }),
    onChange: $options.columnChange,
    placeholder: "请选择",
    placement: "bottom-end",
    searchable: true,
    multiple: ""
  }, {
    reference: withCtx(function() {
      return [createVNode(_component_tiny_icon_setting)];
    }),
    default: withCtx(function() {
      return [(openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.columns, function(item) {
          return openBlock(), createBlock(_component_tiny_option, {
            key: item.property,
            disabled: item.disabled,
            label: item.title,
            value: item.property
          }, null, 8, ["disabled", "label", "value"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "onChange"]);
}
var GridCustomSelect = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var position = ["left", "right"];
var TitleRender = {
  props: ["column"],
  render: function render2() {
    var column = this.column, $parent = this.$parent;
    var title = column.title;
    var tinyTable2 = $parent.tinyTable;
    return h("span", {
      class: ["custom-saas-title-render", column.id]
    }, [typeof title === "function" ? title(h, {
      $table: tinyTable2,
      column
    }) : title]);
  }
};
var _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    TinyModal: TINYModal,
    TinyButton: Button,
    TinySplit: Split,
    TinySelect: Select,
    TinyOption: Option,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    TinyCustomSwitch: CustomSwitch,
    IconClose: index$k(),
    IconLeftFrozen: index$f(),
    IconRightFrozen: index$b(),
    IconDescending: index$h(),
    IconAscending: index$j(),
    TinyCheckbox: Checkbox,
    TinyCheckboxGroup: CheckboxGroup,
    TinyRadioGroup: RadioGroup,
    TinyTooltip: Tooltip,
    TinyRadio: Radio,
    TinySearch: Search,
    TitleRender
  },
  directives: directive({
    Clickoutside: clickoutside_default
  }),
  name: "TinyGridCustom",
  inject: {
    $grid: {
      default: null
    }
  },
  emits: ["input", "saveSettings", "resetSettings", "cancelSettings", "showModal"],
  props: _extends({}, $props, {
    data: {
      type: Array,
      default: function _default72() {
        return [];
      }
    },
    alwaysShowColumns: {
      type: Array,
      default: function _default82() {
        return [];
      }
    },
    columnsGroup: {
      type: Array,
      default: function _default92() {
        return [];
      }
    },
    other: {
      type: Boolean,
      default: true
    },
    search: {
      type: Boolean,
      default: true
    },
    initSettings: {
      type: Object,
      default: function _default102() {
        return {
          pageSizes: [10, 15, 20, 30, 50, 100],
          pageSize: 10,
          sortType: "page",
          showIndex: false
        };
      }
    },
    customMode: String,
    value: Boolean,
    sortable: Function,
    rowClassName: [Function, String],
    onBeforeMove: Function,
    filter: String,
    refresh: Boolean,
    keys: {
      type: Array,
      default: function _default112() {
        return [];
      }
    },
    numberSorting: Boolean,
    multipleHistory: [Object, Boolean],
    resetMethod: Function,
    hideSortColumn: Boolean,
    hideFixedColumn: Boolean
  }),
  data: function data4() {
    return {
      maxFixedNum: 6,
      tooltipContent: "",
      tooltipVisible: false,
      templateVisible: false,
      activeName: "base",
      animateShow: "base",
      selectedTemplate: "",
      lastSelectIndex: 0,
      searchValue: "",
      splitVal: 0.4,
      columns: [],
      searchColumns: [],
      fullColumn: [],
      customColumns: [{
        field: "level"
      }, {
        field: "property"
      }],
      settings: {
        sortType: this.initSettings.sortType || "page",
        pageSize: this.initSettings.pageSize || this.pageSizes[0] || 10,
        columns: []
      },
      originColumns: [],
      groupedColumns: [],
      checkedColumns: [],
      sortingOptions: [],
      templateOptions: [],
      multipleHistoryId: null,
      saveDisabled: false,
      updatedSorting: false,
      opt: {}
    };
  },
  setup: function setup7() {
    var _useDefer = useDefer(80), defer = _useDefer.defer, reset = _useDefer.reset;
    return {
      defer,
      reset
    };
  },
  created: function created4() {
    this.initOpt();
    this.columns = this.getColumnConfigs(this.data);
  },
  watch: {
    value: function value2(val) {
      var _this14 = this;
      if (val) {
        this.initOpt();
        this.columns = this.getColumnConfigs(this.data);
        this.groupedColumns = this.getGroupedColumns();
        this.checkedColumns = this.columns.filter(function(col) {
          return col.visible;
        }).map(function(col) {
          return col.property;
        });
        setTimeout(function() {
          _this14.initDragEvent();
          _this14.initDrag = true;
        }, 100);
        this.reset();
      } else {
        this.selectedTemplate = "";
      }
    },
    checkedColumns: {
      handler: function handler5(val) {
        this.columns.forEach(function(column) {
          column.visible = !!~val.indexOf(column.property);
        });
        this.columns = this.initSortingColumns(this.columns);
      },
      deep: !isVue2
    },
    data: {
      handler: function handler6(val) {
        this.columns = this.getColumnConfigs(val);
        this.groupedColumns = this.getGroupedColumns();
      }
    },
    activeName: {
      handler: function handler7(val) {
        var _this15 = this;
        setTimeout(function() {
          _this15.animateShow = val;
        }, 0);
      }
    }
  },
  computed: {
    visible: {
      get: function get2() {
        return this.value;
      },
      set: function set2() {
      }
    },
    showFixed: function showFixed2() {
      return this.$grid;
    },
    tinyTable: function tinyTable() {
      return this.$grid && this.$grid.$refs.tinyTable || {};
    },
    isGroup: function isGroup2() {
      return this.tinyTable.isGroup;
    },
    historyConfig: function historyConfig2() {
      var multipleHistory = isNull_default(this.multipleHistory) || typeof this.multipleHistory === "boolean" ? {} : this.multipleHistory;
      return extend(true, {}, this.initSettings.multipleHistory || {}, multipleHistory);
    },
    tinyTheme: function tinyTheme() {
      return this.tinyTable.tinyTheme || GlobalConfig$1.themes.AURORA;
    },
    visibleColumns: function visibleColumns() {
      return this.columns.filter(function(column) {
        return column.visible;
      });
    },
    selectedTemplateVal: function selectedTemplateVal() {
      var _this16 = this;
      return this.templateOptions.find(function(item) {
        return item.id === _this16.selectedTemplate;
      }) || {};
    },
    isIndeterminate: {
      get: function get3() {
        return !(this.checkedColumns.length === 0 || this.checkedColumns.length === this.columns.length);
      }
    },
    checkAll: {
      get: function get4() {
        return this.checkedColumns.length === this.columns.length;
      },
      set: function set3(val) {
        if (val) {
          this.checkedColumns = this.columns.map(function(item) {
            return item.property;
          });
        } else {
          this.checkedColumns = [].concat(this.alwaysShowColumns);
        }
      }
    },
    dropConfig: function dropConfig2() {
      return {
        row: true,
        column: false,
        plugin: !this.isGroup && this.sortable,
        onBeforeMove: this.onBeforeMove,
        filter: this.filter,
        refresh: this.refresh
      };
    }
  },
  methods: {
    t,
    initOpt: function initOpt() {
      this.opt = {
        asc: {
          value: "asc",
          label: t("ui.grid.individuation.colConfigs.asc")
        },
        desc: {
          value: "desc",
          label: t("ui.grid.individuation.colConfigs.desc")
        },
        left: {
          value: "left",
          label: t("ui.grid.individuation.colConfigs.frozenLeft")
        },
        right: {
          value: "right",
          label: t("ui.grid.individuation.colConfigs.frozenRight")
        },
        cancelSort: {
          value: "cancel",
          label: t("ui.grid.individuation.colConfigs.unsort")
        },
        cancelFixed: {
          value: "cancel",
          label: t("ui.grid.individuation.colConfigs.unfreeze")
        }
      };
    },
    initStorage: function initStorage(option) {
      this.templateOptions = option;
    },
    updateTemplateOptions: function updateTemplateOptions(id, name) {
      this.templateOptions.forEach(function(opt) {
        if (opt.id === id) {
          opt.name = name;
        }
      });
    },
    getRowClassName: function getRowClassName(row) {
      if (typeof this.rowClassName === "function") {
        return this.rowClassName({
          row
        });
      } else {
        return this.rowClassName;
      }
    },
    getColumnConfigs: function getColumnConfigs3(configs) {
      var alwaysShowColumns = this.alwaysShowColumns;
      var getColNodes = function getColNodes2(columns2) {
        return columns2.map(function(_ref9) {
          var id = _ref9.id, title = _ref9.title, property = _ref9.property, fixed = _ref9.fixed, visible = _ref9.visible, order = _ref9.order, sortable = _ref9.sortable, level = _ref9.level, children = _ref9.children;
          if (property) {
            var column = {
              id,
              title,
              property,
              alwaysShow: alwaysShowColumns.includes(property),
              fixed,
              visible,
              order,
              sortable,
              level,
              children,
              numberSortVisible: false
            };
            children && (column.children = getColNodes2(children));
            return column;
          }
          return void 0;
        }).filter(function(i) {
          return i;
        });
      };
      if (configs.length && this.$grid) {
        var _this$$grid$getTableC3 = this.$grid.getTableColumn(), collectColumn = _this$$grid$getTableC3.collectColumn;
        var columns = getColNodes(collectColumn);
        this.originColumns = [].concat(columns);
        var sortColumns = this.initSortingColumns(columns);
        this.initSortAndFixedOption(columns);
        return sortColumns;
      } else {
        return [];
      }
    },
    initSortAndFixedOption: function initSortAndFixedOption(columns) {
      var _this17 = this;
      if (this.isGroup)
        return;
      columns.forEach(function(column) {
        column.sortOption = column.order === "asc" ? [_this17.opt.desc, _this17.opt.cancelSort] : column.order === "desc" ? [_this17.opt.asc, _this17.opt.cancelSort] : [_this17.opt.asc, _this17.opt.desc];
        column.fixedOption = column.fixed === "left" ? [_this17.opt.right, _this17.opt.cancelFixed] : column.fixed === "right" ? [_this17.opt.left, _this17.opt.cancelFixed] : [_this17.opt.left, _this17.opt.right];
      });
    },
    initSortingColumns: function initSortingColumns(columns) {
      var _this18 = this;
      if (this.isGroup)
        return;
      var leftCols = [];
      var rightCols = [];
      var visibleCols = [];
      var hiddenCols = [];
      columns.forEach(function(col) {
        if (col.visible) {
          if (col.fixed === "left") {
            leftCols.push(col);
          } else if (col.fixed === "right") {
            rightCols.push(col);
          } else {
            visibleCols.push(col);
          }
        } else {
          hiddenCols.push(col);
        }
      });
      var result = [].concat(leftCols, visibleCols, rightCols, hiddenCols);
      this.sortingOptions = [];
      result.forEach(function(column, index3) {
        column.sortingIndex = index3 + 1;
        column.visible && _this18.sortingOptions.push(column.sortingIndex);
      });
      return result;
    },
    getGroupedColumns: function getGroupedColumns() {
      var _this19 = this;
      var result = [];
      if (this.columnsGroup.length) {
        this.columnsGroup.forEach(function(item) {
          var data6 = [];
          item.data.forEach(function(col) {
            var column = _this19.originColumns.find(function(c) {
              return c.property === col;
            });
            if (column) {
              data6.push(column);
            }
          });
          result.push({
            label: item.label,
            data: data6
          });
        });
      } else {
        result.push({
          label: "",
          data: [].concat(this.originColumns)
        });
      }
      return result;
    },
    selectedTemplateChange: function selectedTemplateChange() {
      var _this20 = this;
      var selected = this.templateOptions.find(function(opt) {
        return opt.id === _this20.selectedTemplate;
      });
      if (selected) {
        this.columns = mergeArray(this.columns, selected.setting.custom.columns);
        this.columns = this.initSortingColumns(this.columns);
        this.initSortAndFixedOption(this.columns);
        this.groupedColumns = this.getGroupedColumns();
        this.checkedColumns = this.columns.filter(function(col) {
          return col.visible;
        }).map(function(col) {
          return col.property;
        });
        this.settings.pageSize = selected.setting.custom.pageSize;
        this.multipleHistoryId = selected.id;
      }
    },
    sortSelectChange: function sortSelectChange(index3) {
      var newIndex = index3 - 1;
      var oldIndex = this.lastSelectIndex - 1;
      this.handleFixed("sort", 1, 1, oldIndex, newIndex);
    },
    selectFocus: function selectFocus(event, index3) {
      this.lastSelectIndex = index3;
    },
    // 莫同步AUI， search组件的input事件的第一个参数就是value.
    searchChange: function searchChange(val) {
      var _this21 = this;
      var getRenderedTitle = function getRenderedTitle2(col) {
        var result = "";
        if (typeof col.title === "function") {
          var titleElm = _this21.$el.querySelector(".custom-saas-title-render." + col.id);
          result = titleElm && titleElm.textContent || "";
          result = result.toUpperCase();
        } else if (col.title) {
          result = col.title && col.title.toUpperCase();
        }
        return result;
      };
      this.searchColumns = this.columns.filter(function(col) {
        var title = getRenderedTitle(col);
        var upperVal = val && val.toUpperCase();
        return title.includes(upperVal);
      });
    },
    handelClearAll: function handelClearAll() {
      this.checkedColumns = [].concat(this.alwaysShowColumns);
    },
    hiddenColumn: function hiddenColumn(val) {
      var index3 = this.checkedColumns.findIndex(function(col) {
        return col === val;
      });
      this.checkedColumns.splice(index3, 1);
    },
    handleSortItemClick: function handleSortItemClick(item) {
      var column = this.columns.find(function(col) {
        return col.property === item.property;
      });
      if (column) {
        column.order = item.value === "cancel" ? void 0 : item.value;
        column.sortOption = column.order === "asc" ? [this.opt.desc, this.opt.cancelSort] : column.order === "desc" ? [this.opt.asc, this.opt.cancelSort] : [this.opt.asc, this.opt.desc];
      }
    },
    handleFixedItemClick: function handleFixedItemClick(item) {
      var index3 = this.columns.findIndex(function(col) {
        return col.property === item.property;
      });
      var column = this.columns[index3];
      item.fixed = column.fixed;
      if (column) {
        if (position.includes(item.value) && !position.includes(column.fixed) && this.fixedNumberIsMax()) {
          TINYModal.message({
            message: t("ui.grid.individuation.maxFreezeNumMsg"),
            status: "warning",
            id: "drop-fixed-max-waring"
          });
          return;
        }
        this.columns.splice(index3, 1);
        var leftIdx = this.columns.reduce(function(result, col, index213) {
          return col.fixed === "left" && col.visible ? index213 : result;
        }, -1);
        var rightIdx = this.columns.findIndex(function(col) {
          return col.fixed === "right" && col.visible;
        });
        column.fixed = item.value === "cancel" ? void 0 : item.value;
        if (item.value === "left") {
          this.columns.splice(leftIdx >= 0 ? leftIdx + 1 : 0, 0, column);
          column.fixedOption = [this.opt.right, this.opt.cancelFixed];
        } else if (item.value === "right") {
          this.columns.splice(rightIdx >= 0 ? rightIdx : this.visibleColumns.length, 0, column);
          column.fixedOption = [this.opt.left, this.opt.cancelFixed];
        } else {
          if (item.fixed === "left" && leftIdx >= 0) {
            this.columns.splice(leftIdx + 1, 0, column);
          } else if (item.fixed === "right" && rightIdx >= 0) {
            this.columns.splice(rightIdx, 0, column);
          } else {
            this.columns.splice(index3, 0, column);
          }
          column.fixedOption = [this.opt.left, this.opt.right];
        }
        this.updateSortingIndex();
      }
    },
    fixedNumberIsMax: function fixedNumberIsMax() {
      return this.columns.filter(function(col) {
        return col.visible && col.fixed;
      }).length >= this.maxFixedNum;
    },
    updateSortingIndex: function updateSortingIndex() {
      this.columns.forEach(function(col, index3) {
        col.sortingIndex = index3 + 1;
      });
    },
    handleDropdownMouseenter: function handleDropdownMouseenter($event, index3) {
      var childNode = this.$refs.list.children[index3];
      childNode && childNode.classList.add("show-dropdown");
    },
    handleDropdownMouseleave: function handleDropdownMouseleave($event, index3) {
      var childNode = this.$refs.list.children[index3];
      childNode && childNode.classList.remove("show-dropdown");
    },
    handleMouseenter: function handleMouseenter($event) {
      var dom = $event.target;
      var text = dom.textContent;
      var tooltip = this.$refs.tooltip;
      if (dom.scrollWidth > dom.offsetWidth) {
        tooltip.state.referenceElm = dom;
        tooltip.state.popperElm && (tooltip.state.popperElm.style.display = "none");
        tooltip.doDestroy();
        this.tooltipVisible = true;
        this.tooltipContent = text;
        setTimeout(tooltip.updatePopper, 20);
      }
    },
    handleMouseleave: function handleMouseleave() {
      this.tooltipVisible = false;
    },
    handleInput: function handleInput2(val) {
      this.$emit("input", val);
    },
    buildSettings: function buildSettings2() {
      var props2 = ["order", "fixed", "visible", "sortable"].concat(this.keys);
      !this.updatedSorting && (this.columns = [].concat(this.groupedColumns[0].data));
      this.settings.columns = mapTree_default(this.columns, function(_ref10) {
        var property = _ref10.property, rest = _objectWithoutPropertiesLoose(_ref10, _excluded3);
        var node = {
          property
        };
        props2.forEach(function(prop) {
          node[prop] = rest[prop];
        });
        return node;
      });
      return this.settings;
    },
    saveSettings: function saveSettings2(val) {
      var visible = typeof val === "boolean" ? val : false;
      this.buildSettings();
      this.$emit("saveSettings", this.settings, visible);
      !visible && this.handleClose();
    },
    resetSettings: function resetSettings2(event) {
      var _this22 = this;
      if (this.activeName === "base") {
        this.columns = this.getColumnConfigs(this.data);
        this.checkedColumns = this.columns.filter(function(col) {
          return col.visible;
        }).map(function(col) {
          return col.property;
        });
        if (this.settings.columns && this.settings.columns.length) {
          this.settings.columns.forEach(function(setting) {
            var column = find_default(_this22.columns, function(item) {
              return item.property === setting.property;
            });
            if (column) {
              Object.assign(setting, column);
            }
          });
        }
      } else if (this.activeName === "other") {
        this.settings.pageSize = this.initSettings.pageSize;
      }
      event && this.$emit("resetSettings", this.settings);
    },
    cancelSettings: function cancelSettings2() {
      this.resetSettings();
      this.$emit("cancelSettings");
      this.$emit("input", false);
      this.handleClose();
    },
    handleClose: function handleClose22() {
      this.updatedSorting = false;
      this.$emit("showModal", false);
    },
    handleReset: function handleReset2(event) {
      var _this23 = this;
      var equal = function equal2(cols1, cols2) {
        var props1 = [];
        var props2 = [];
        cols1.forEach(function(col) {
          return col && col.property && props1.push(col.property);
        });
        cols2.forEach(function(col) {
          return col && col.property && props2.push(col.property);
        });
        return props1.length === props2.length && props1.sort().join(",") === props2.sort().join(",");
      };
      if (typeof this.resetMethod === "function") {
        this.resetMethod().then(function(sourceSettings) {
          _this23.buildSettings();
          var _ref11 = sourceSettings || {}, columns = _ref11.columns, sortType = _ref11.sortType, pageSize = _ref11.pageSize;
          if (columns && columns.length && _this23.settings.columns && _this23.settings.columns.length) {
            _this23.settings.columns.forEach(function(setting) {
              var source = find_default(columns, function(item) {
                return item.property === setting.property;
              });
              var target = find_default(_this23.columns, function(item) {
                return item.property === setting.property;
              });
              if (source) {
                Object.assign(setting, source);
                Object.assign(target, source);
              }
            });
            if (equal(columns, _this23.settings.columns)) {
              var settingColumns = [];
              var gridColumns = [];
              columns.forEach(function(source) {
                var settingCol = find_default(_this23.settings.columns, function(item) {
                  return source.property === item.property;
                });
                var targetCol = find_default(_this23.columns, function(item) {
                  return source.property === item.property;
                });
                settingColumns.push(settingCol);
                gridColumns.push(targetCol);
              });
              _this23.settings.columns = settingColumns;
              _this23.columns = gridColumns;
            }
          }
          sortType && (_this23.settings.sortType = sortType);
          pageSize && (_this23.settings.pageSize = pageSize);
        });
      } else {
        this.resetSettings(event);
      }
    },
    handleFixed: function handleFixed2(type, from, to, oldIndex, newIndex) {
      if (from === to && oldIndex !== newIndex) {
        var newCol = this.columns[newIndex];
        var oldCol = this.columns[oldIndex];
        if (type === "sort" && position.includes(newCol.fixed) && !position.includes(oldCol.fixed) && this.fixedNumberIsMax()) {
          this.columns[oldIndex].sortingIndex = this.lastSelectIndex;
          TINYModal.message({
            message: t("ui.grid.individuation.maxFreezeNumMsg"),
            status: "warning",
            id: "select-fixed-max-waring"
          });
          return;
        }
        if (newCol.fixed === "left") {
          oldCol.fixed = "left";
          oldCol.fixedOption = [this.opt.right, this.opt.cancelFixed];
        } else if (newCol.fixed === "right") {
          oldCol.fixed = "right";
          oldCol.fixedOption = [this.opt.left, this.opt.cancelFixed];
        } else {
          oldCol.fixed = void 0;
          oldCol.fixedOption = [this.opt.left, this.opt.right];
        }
        this.columns.splice(oldIndex, 1);
        this.columns.splice(newIndex, 0, oldCol);
        this.updateSortingIndex();
        this.updatedSorting = true;
      }
    },
    initDragEvent: function initDragEvent() {
      var _this24 = this;
      var handleUpdate = function handleUpdate2(e) {
        var from = e.from, to = e.to, oldIndex = e.oldIndex, newIndex = e.newIndex;
        _this24.handleFixed("drag", from, to, oldIndex, newIndex);
      };
      if (!this.dropConfig.plugin)
        return;
      this.dropConfig.plugin.create(this.$refs.list, {
        animation: 200,
        draggable: '[data-tag="tiny-grid-toolbar-item"]',
        handle: ".toolbar-drag-item",
        onUpdate: handleUpdate,
        onMove: function onMove(e) {
          if (e.related && (e.related.classList.contains("left") || e.related.classList.contains("right")) && !(e.dragged.classList.contains("left") || e.dragged.classList.contains("right")) && _this24.fixedNumberIsMax()) {
            TINYModal.message({
              message: t("ui.grid.individuation.maxFreezeNumMsg"),
              status: "warning",
              id: "drag-fixed-max-waring"
            });
            return false;
          }
          var rowName = e.dragged && e.dragged.getAttribute("data-row");
          var row = _this24.columns.find(function(row2) {
            return row2.property === rowName;
          }) || {};
          var cancel = typeof _this24.onBeforeMove === "function" ? _this24.onBeforeMove("row", row, e) : true;
          return cancel === void 0 || cancel;
        }
      });
    },
    clickSortDisplay: function clickSortDisplay(column, index3) {
      var _this25 = this;
      column.numberSortVisible = true;
      this.columns.forEach(function(col) {
        return col !== column && (col.numberSortVisible = false);
      });
      this.$nextTick(function() {
        var selectVm = _this25.$refs["select" + index3];
        selectVm = isArray(selectVm) && selectVm[0] ? selectVm[0] : null;
        if (selectVm) {
          selectVm.focus();
        }
      });
    },
    clickEditorOutside: function clickEditorOutside() {
      this.columns.forEach(function(col) {
        return col.numberSortVisible = false;
      });
    }
  }
});
var _hoisted_1 = {
  key: 0,
  class: "tiny-grid-custom"
};
var _hoisted_2 = {
  class: "tiny-grid-custom__tabs"
};
var _hoisted_3 = {
  class: "tiny-grid-custom__tabs-head"
};
var _hoisted_4 = {
  class: "tiny-grid-custom__tabs-body"
};
var _hoisted_5 = {
  class: "left-panel"
};
var _hoisted_6 = {
  key: 0,
  class: "select-template"
};
var _hoisted_7 = {
  key: 2
};
var _hoisted_8 = {
  key: 3
};
var _hoisted_9 = {
  class: "check-all-btn"
};
var _hoisted_10 = {
  class: "right-panel"
};
var _hoisted_11 = {
  class: "header"
};
var _hoisted_12 = {
  key: 0
};
var _hoisted_13 = {
  key: 1
};
var _hoisted_14 = {
  ref: "list"
};
var _hoisted_15 = ["data-row"];
var _hoisted_16 = {
  key: 0,
  style: {
    "display": "contents"
  }
};
var _hoisted_17 = {
  key: 0,
  class: "drag-icon toolbar-drag-item"
};
var _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  null,
  -1
  /* HOISTED */
);
var _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  null,
  -1
  /* HOISTED */
);
var _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  null,
  -1
  /* HOISTED */
);
var _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  null,
  -1
  /* HOISTED */
);
var _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  null,
  -1
  /* HOISTED */
);
var _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  null,
  -1
  /* HOISTED */
);
var _hoisted_24 = [_hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22, _hoisted_23];
var _hoisted_25 = {
  class: "sort-number"
};
var _hoisted_26 = {
  key: 0,
  class: "sort-number-editor"
};
var _hoisted_27 = ["onClick"];
var _hoisted_28 = {
  key: 1,
  class: "dropdown-column"
};
var _hoisted_29 = {
  key: 2,
  class: "set-btn"
};
var _hoisted_30 = ["onClick"];
var _hoisted_31 = {
  class: "other-setting"
};
var _hoisted_32 = {
  class: "label"
};
var _hoisted_33 = ["dir"];
function _sfc_render(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_option = resolveComponent("tiny-option");
  var _component_tiny_select = resolveComponent("tiny-select");
  var _component_tiny_search = resolveComponent("tiny-search");
  var _component_title_render = resolveComponent("title-render");
  var _component_tiny_checkbox = resolveComponent("tiny-checkbox");
  var _component_tiny_checkbox_group = resolveComponent("tiny-checkbox-group");
  var _component_icon_left_frozen = resolveComponent("icon-left-frozen");
  var _component_icon_right_frozen = resolveComponent("icon-right-frozen");
  var _component_tiny_dropdown_item = resolveComponent("tiny-dropdown-item");
  var _component_tiny_dropdown_menu = resolveComponent("tiny-dropdown-menu");
  var _component_tiny_dropdown = resolveComponent("tiny-dropdown");
  var _component_icon_ascending = resolveComponent("icon-ascending");
  var _component_icon_descending = resolveComponent("icon-descending");
  var _component_icon_close = resolveComponent("icon-close");
  var _component_tiny_split = resolveComponent("tiny-split");
  var _component_tiny_radio = resolveComponent("tiny-radio");
  var _component_tiny_radio_group = resolveComponent("tiny-radio-group");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _component_tiny_custom_switch = resolveComponent("tiny-custom-switch");
  var _component_tiny_tooltip = resolveComponent("tiny-tooltip");
  var _component_tiny_modal = resolveComponent("tiny-modal");
  var _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(_component_tiny_modal, {
    width: "800",
    title: " ",
    class: "tiny-grid-toolbar-modal",
    modelValue: _ctx.visible,
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function($event) {
      return _ctx.visible = $event;
    }),
    onInput: _ctx.handleInput,
    onClose: _ctx.handleClose
  }, {
    default: withCtx(function() {
      return [_ctx.visible ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("ul", null, [createBaseVNode(
        "li",
        {
          onClick: _cache[0] || (_cache[0] = function($event) {
            return _ctx.activeName = "base";
          }),
          class: normalizeClass({
            "tiny-grid-custom__tabs-selected": _ctx.activeName === "base" && _ctx.other,
            "tiny-grid-custom__tabs-base": !_ctx.other
          })
        },
        [createBaseVNode(
          "span",
          null,
          toDisplayString(_ctx.t("ui.grid.individuation.columnSet")),
          1
          /* TEXT */
        )],
        2
        /* CLASS */
      ), _ctx.other ? (openBlock(), createElementBlock(
        "li",
        {
          key: 0,
          onClick: _cache[1] || (_cache[1] = function($event) {
            return _ctx.activeName = "other";
          }),
          class: normalizeClass({
            "tiny-grid-custom__tabs-selected": _ctx.activeName === "other"
          })
        },
        [createBaseVNode(
          "span",
          null,
          toDisplayString(_ctx.t("ui.grid.individuation.tabs.other.title")),
          1
          /* TEXT */
        )],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true)])]), createBaseVNode("div", _hoisted_4, [withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["tabs-body-item", _ctx.animateShow === "base" ? "active-item" : ""])
        },
        [createVNode(_component_tiny_split, {
          modelValue: _ctx.splitVal,
          "onUpdate:modelValue": _cache[10] || (_cache[10] = function($event) {
            return _ctx.splitVal = $event;
          }),
          "trigger-simple": "",
          "collapse-left-top": ""
        }, {
          left: withCtx(function() {
            return [createBaseVNode("div", _hoisted_5, [_ctx.multipleHistory ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(_component_tiny_select, {
              modelValue: _ctx.selectedTemplate,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = function($event) {
                return _ctx.selectedTemplate = $event;
              }),
              shape: "filter",
              label: _ctx.t("ui.grid.individuation.selectTemplate"),
              onChange: _ctx.selectedTemplateChange,
              clearable: ""
            }, {
              default: withCtx(function() {
                return [(openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.templateOptions, function(item) {
                    return openBlock(), createBlock(_component_tiny_option, {
                      key: item.id,
                      label: item.name,
                      value: item.id
                    }, null, 8, ["label", "value"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))];
              }),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "label", "onChange"])])) : createCommentVNode("v-if", true), _ctx.search ? (openBlock(), createBlock(_component_tiny_search, {
              key: 1,
              modelValue: _ctx.searchValue,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = function($event) {
                return _ctx.searchValue = $event;
              }),
              onInput: _ctx.searchChange,
              placeholder: _ctx.t("ui.grid.individuation.toolbar.search")
            }, null, 8, ["modelValue", "onInput", "placeholder"])) : createCommentVNode("v-if", true), _ctx.searchValue ? (openBlock(), createElementBlock("div", _hoisted_7, [createVNode(_component_tiny_checkbox_group, {
              modelValue: _ctx.checkedColumns,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = function($event) {
                return _ctx.checkedColumns = $event;
              }),
              vertical: ""
            }, {
              default: withCtx(function() {
                return [(openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.searchColumns, function(column) {
                    return openBlock(), createBlock(_component_tiny_checkbox, {
                      label: column.property,
                      disabled: column.alwaysShow,
                      key: column.property
                    }, {
                      default: withCtx(function() {
                        return [createVNode(_component_title_render, {
                          column
                        }, null, 8, ["column"])];
                      }),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["label", "disabled"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))];
              }),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])])) : (openBlock(), createElementBlock("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createVNode(_component_tiny_checkbox, {
              indeterminate: _ctx.isIndeterminate,
              modelValue: _ctx.checkAll,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = function($event) {
                return _ctx.checkAll = $event;
              })
            }, {
              default: withCtx(function() {
                return [createTextVNode(
                  toDisplayString(_ctx.t("ui.grid.individuation.toolbar.all")),
                  1
                  /* TEXT */
                )];
              }),
              _: 1
              /* STABLE */
            }, 8, ["indeterminate", "modelValue"])]), createVNode(_component_tiny_checkbox_group, {
              modelValue: _ctx.checkedColumns,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = function($event) {
                return _ctx.checkedColumns = $event;
              }),
              vertical: ""
            }, {
              default: withCtx(function() {
                return [(openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.groupedColumns, function(group, index3) {
                    return openBlock(), createElementBlock(
                      Fragment,
                      null,
                      [_ctx.defer(Math.floor(index3 / 5)) ? (openBlock(), createElementBlock("div", {
                        key: index3
                      }, [group.label ? (openBlock(), createElementBlock(
                        "p",
                        {
                          key: 0,
                          class: normalizeClass(["group-label", [index3 === 0 && "group-label-first"]])
                        },
                        toDisplayString(group.label),
                        3
                        /* TEXT, CLASS */
                      )) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(group.data, function(column) {
                          return openBlock(), createBlock(_component_tiny_checkbox, {
                            label: column.property,
                            disabled: column.alwaysShow,
                            key: column.property
                          }, {
                            default: withCtx(function() {
                              return [createVNode(_component_title_render, {
                                column
                              }, null, 8, ["column"])];
                            }),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["label", "disabled"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))])) : createCommentVNode("v-if", true)],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))];
              }),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])]))])];
          }),
          right: withCtx(function() {
            return [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode(
              "p",
              null,
              toDisplayString(_ctx.t("ui.grid.individuation.toolbar.selected")) + " (" + toDisplayString(_ctx.visibleColumns.length) + "/" + toDisplayString(_ctx.columns.length) + ") ",
              1
              /* TEXT */
            ), !_ctx.hideFixedColumn ? (openBlock(), createElementBlock(
              "span",
              _hoisted_12,
              toDisplayString(_ctx.t("ui.grid.individuation.toolbar.freeze")),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true), !_ctx.hideSortColumn ? (openBlock(), createElementBlock(
              "span",
              _hoisted_13,
              toDisplayString(_ctx.t("ui.grid.individuation.toolbar.sort")),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true), createBaseVNode(
              "span",
              {
                class: "clear-all",
                onClick: _cache[7] || (_cache[7] = function() {
                  return _ctx.handelClearAll && _ctx.handelClearAll.apply(_ctx, arguments);
                })
              },
              toDisplayString(_ctx.t("ui.grid.individuation.toolbar.clear")),
              1
              /* TEXT */
            )]), createBaseVNode(
              "ul",
              _hoisted_14,
              [(openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(_ctx.visibleColumns, function(column, index3) {
                  return openBlock(), createElementBlock("li", {
                    key: column.property + index3,
                    class: normalizeClass([column.fixed, _ctx.getRowClassName(column)]),
                    "data-tag": "tiny-grid-toolbar-item",
                    "data-row": column.property
                  }, [_ctx.defer(Math.floor(index3 / 3)) ? (openBlock(), createElementBlock("div", _hoisted_16, [_ctx.dropConfig.plugin ? (openBlock(), createElementBlock("div", _hoisted_17, _hoisted_24)) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_25, [column.numberSortVisible ? withDirectives((openBlock(), createElementBlock("div", _hoisted_26, [createVNode(_component_tiny_select, {
                    ref_for: true,
                    ref: "select" + index3,
                    modelValue: column.sortingIndex,
                    "onUpdate:modelValue": function onUpdateModelValue($event) {
                      return column.sortingIndex = $event;
                    },
                    "automatic-dropdown": "",
                    onFocus: function onFocus($event) {
                      return _ctx.selectFocus($event, column.sortingIndex);
                    },
                    onChange: _ctx.sortSelectChange
                  }, {
                    default: withCtx(function() {
                      return [(openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(_ctx.sortingOptions, function(item) {
                          return openBlock(), createBlock(_component_tiny_option, {
                            key: item,
                            label: item,
                            value: item
                          }, null, 8, ["label", "value"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))];
                    }),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["modelValue", "onUpdate:modelValue", "onFocus", "onChange"])])), [[_directive_clickoutside, _ctx.clickEditorOutside]]) : (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: "sort-number-display",
                    onClick: function onClick($event) {
                      return _ctx.clickSortDisplay(column, index3);
                    }
                  }, toDisplayString(column.sortingIndex), 9, _hoisted_27))]), createBaseVNode(
                    "p",
                    {
                      class: normalizeClass(["name toolbar-drag-item", [_ctx.dropConfig.plugin && "dragable"]]),
                      onMouseenter: _cache[8] || (_cache[8] = function() {
                        return _ctx.handleMouseenter && _ctx.handleMouseenter.apply(_ctx, arguments);
                      }),
                      onMouseleave: _cache[9] || (_cache[9] = function() {
                        return _ctx.handleMouseleave && _ctx.handleMouseleave.apply(_ctx, arguments);
                      })
                    },
                    [createVNode(_component_title_render, {
                      column
                    }, null, 8, ["column"])],
                    34
                    /* CLASS, NEED_HYDRATION */
                  ), !_ctx.hideFixedColumn ? (openBlock(), createElementBlock("div", _hoisted_28, [createVNode(_component_tiny_dropdown, {
                    "show-icon": false,
                    onItemClick: _ctx.handleFixedItemClick,
                    trigger: "hover"
                  }, {
                    dropdown: withCtx(function() {
                      return [createVNode(_component_tiny_dropdown_menu, {
                        onMouseenter: function onMouseenter($event) {
                          return _ctx.handleDropdownMouseenter($event, index3);
                        },
                        onMouseleave: function onMouseleave($event) {
                          return _ctx.handleDropdownMouseleave($event, index3);
                        }
                      }, {
                        default: withCtx(function() {
                          return [(openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(column.fixedOption, function(item) {
                              return openBlock(), createBlock(_component_tiny_dropdown_item, {
                                key: item.value,
                                label: item.label,
                                "item-data": {
                                  value: item.value,
                                  property: column.property
                                }
                              }, {
                                default: withCtx(function() {
                                  return [createTextVNode(
                                    toDisplayString(item.label),
                                    1
                                    /* TEXT */
                                  )];
                                }),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["label", "item-data"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))];
                        }),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["onMouseenter", "onMouseleave"])];
                    }),
                    default: withCtx(function() {
                      return [createBaseVNode(
                        "span",
                        {
                          class: normalizeClass(["left", "right"].includes(column.fixed) && "dropdown-btn")
                        },
                        [column.fixed === "left" ? (openBlock(), createBlock(_component_icon_left_frozen, {
                          key: 0
                        })) : column.fixed === "right" ? (openBlock(), createBlock(_component_icon_right_frozen, {
                          key: 1
                        })) : (openBlock(), createElementBlock(
                          "span",
                          _hoisted_29,
                          toDisplayString(_ctx.t("ui.grid.individuation.toolbar.set")),
                          1
                          /* TEXT */
                        ))],
                        2
                        /* CLASS */
                      )];
                    }),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["onItemClick"])])) : createCommentVNode("v-if", true), !_ctx.hideSortColumn ? (openBlock(), createElementBlock(
                    "div",
                    {
                      key: 2,
                      class: normalizeClass(["dropdown-column", [!column.sortable && "visibility-hidden"]])
                    },
                    [createVNode(_component_tiny_dropdown, {
                      "show-icon": false,
                      onItemClick: _ctx.handleSortItemClick,
                      trigger: "hover"
                    }, {
                      dropdown: withCtx(function() {
                        return [createVNode(_component_tiny_dropdown_menu, {
                          onMouseenter: function onMouseenter($event) {
                            return _ctx.handleDropdownMouseenter($event, index3);
                          },
                          onMouseleave: function onMouseleave($event) {
                            return _ctx.handleDropdownMouseleave($event, index3);
                          }
                        }, {
                          default: withCtx(function() {
                            return [(openBlock(true), createElementBlock(
                              Fragment,
                              null,
                              renderList(column.sortOption, function(item) {
                                return openBlock(), createBlock(_component_tiny_dropdown_item, {
                                  key: item.value,
                                  label: item.label,
                                  "item-data": {
                                    value: item.value,
                                    property: column.property
                                  }
                                }, {
                                  default: withCtx(function() {
                                    return [createTextVNode(
                                      toDisplayString(item.label),
                                      1
                                      /* TEXT */
                                    )];
                                  }),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["label", "item-data"]);
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["onMouseenter", "onMouseleave"])];
                      }),
                      default: withCtx(function() {
                        return [createBaseVNode(
                          "span",
                          {
                            class: normalizeClass(["asc", "desc"].includes(column.order) && "dropdown-btn")
                          },
                          [column.order === "asc" ? (openBlock(), createBlock(_component_icon_ascending, {
                            key: 0
                          })) : column.order === "desc" ? (openBlock(), createBlock(_component_icon_descending, {
                            key: 1
                          })) : (openBlock(), createElementBlock(
                            "span",
                            {
                              key: 2,
                              class: normalizeClass(["set-btn", [!column.sortable && "visibility-hidden"]])
                            },
                            toDisplayString(_ctx.t("ui.grid.individuation.toolbar.set")),
                            3
                            /* TEXT, CLASS */
                          ))],
                          2
                          /* CLASS */
                        )];
                      }),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["onItemClick"])],
                    2
                    /* CLASS */
                  )) : createCommentVNode("v-if", true), createBaseVNode("span", {
                    class: normalizeClass(["close-icon", [column.alwaysShow && "visibility-hidden"]]),
                    onClick: function onClick($event) {
                      return _ctx.hiddenColumn(column.property);
                    }
                  }, [createVNode(_component_icon_close)], 10, _hoisted_30)])) : createCommentVNode("v-if", true)], 10, _hoisted_15);
                }),
                128
                /* KEYED_FRAGMENT */
              ))],
              512
              /* NEED_PATCH */
            )])];
          }),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])],
        2
        /* CLASS */
      ), [[vShow, _ctx.activeName === "base"]]), withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["tabs-body-item", _ctx.animateShow === "other" ? "active-item" : ""])
        },
        [createBaseVNode("div", _hoisted_31, [createBaseVNode(
          "span",
          _hoisted_32,
          toDisplayString(_ctx.t("ui.grid.individuation.tabs.other.pageSize")),
          1
          /* TEXT */
        ), createVNode(_component_tiny_radio_group, {
          modelValue: _ctx.settings.pageSize,
          "onUpdate:modelValue": _cache[11] || (_cache[11] = function($event) {
            return _ctx.settings.pageSize = $event;
          })
        }, {
          default: withCtx(function() {
            return [(openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.initSettings.pageSizes, function(item, index3) {
                return openBlock(), createBlock(_component_tiny_radio, {
                  key: index3,
                  label: item
                }, {
                  default: withCtx(function() {
                    return [createTextVNode(
                      toDisplayString(item),
                      1
                      /* TEXT */
                    )];
                  }),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["label"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))];
          }),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])])],
        2
        /* CLASS */
      ), [[vShow, _ctx.activeName === "other"]])])]), createBaseVNode("div", {
        class: "tiny-grid-custom__footer",
        dir: _ctx.tinyTheme === "saas" ? "rtl" : "ltr"
      }, [createVNode(_component_tiny_button, {
        type: "primary",
        onClick: _ctx.saveSettings
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.saveBtn")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]), _ctx.multipleHistory && _ctx.activeName === "base" ? (openBlock(), createBlock(_component_tiny_custom_switch, {
        key: 0,
        ref: "switch",
        "custom-mode": _ctx.customMode,
        "selected-template-val": _ctx.selectedTemplateVal,
        "history-config": _ctx.historyConfig,
        onInitStorage: _ctx.initStorage
      }, null, 8, ["custom-mode", "selected-template-val", "history-config", "onInitStorage"])) : createCommentVNode("v-if", true), createVNode(_component_tiny_button, {
        onClick: _ctx.handleReset
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.resetBtn")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]), createVNode(_component_tiny_button, {
        onClick: _ctx.cancelSettings
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.grid.individuation.cancelBtn")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["onClick"])], 8, _hoisted_33)])) : createCommentVNode("v-if", true), createVNode(_component_tiny_tooltip, {
        ref: "tooltip",
        modelValue: _ctx.tooltipVisible,
        "onUpdate:modelValue": _cache[12] || (_cache[12] = function($event) {
          return _ctx.tooltipVisible = $event;
        }),
        "popper-class": "absolute",
        manual: true,
        effect: "light",
        content: _ctx.tooltipContent,
        placement: "top"
      }, null, 8, ["modelValue", "content"])];
    }),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "onInput", "onClose"]);
}
var GridCustomSaas = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var classMap = {
  isActive: "is__active"
};
function createMacroTask(_ref12) {
  var _vm = _ref12._vm;
  setTimeout(function() {
    if (_vm.settingStore.activeBtn || _vm.settingStore.activeWrapper)
      return;
    _vm.closeSetting();
  }, 300);
}
function renderToolsWrapper(_ref13) {
  var _vm = _ref13._vm, $tools = _ref13.$tools, $grid = _ref13.$grid, table = _ref13.table;
  return h("div", {
    class: "tiny-grid-tools__wrapper"
  }, $tools.call(_vm, {
    $grid,
    $table: table
  }, h));
}
function renderFullScreenWrapper(_ref14) {
  var _vm = _ref14._vm;
  return h("div", {
    class: "tiny-grid-fullscreen__wrapper"
  }, [h("div", {
    class: "tiny-grid-fullscreen__btn",
    on: {
      click: _vm.fullscreenEvent
    }
  }, [h(_vm.isFull ? GlobalConfig$1.icon.minscreen : GlobalConfig$1.icon.fullscreen, {
    class: "tiny-svg-size"
  })])]);
}
function renderRefreshWrapper(_ref15) {
  var _vm = _ref15._vm;
  return h("div", {
    class: "tiny-grid-refresh__wrapper"
  }, [h("div", {
    class: "tiny-grid-refresh__btn",
    on: {
      click: _vm.refreshEvent
    }
  }, [h(GlobalConfig$1.icon.refresh, {
    class: ["tiny-svg-size", {
      roll: _vm.isRefresh
    }]
  })])]);
}
function renderCustomWrapper(_ref16) {
  var _ref17;
  var _vm = _ref16._vm, settingStore = _ref16.settingStore, settingsBtnOns = _ref16.settingsBtnOns, tableFullColumn = _ref16.tableFullColumn, setting = _ref16.setting, initSettings = _ref16.initSettings;
  return h("div", {
    class: ["tiny-grid-custom__wrapper", (_ref17 = {}, _ref17[classMap.isActive] = settingStore.customVisible, _ref17)],
    ref: "customWrapper"
  }, [h("div", {
    class: "tiny-grid-custom__setting-btn",
    on: settingsBtnOns
  }, [setting != null && setting.simple ? h("tiny-grid-custom-select", {
    on: {
      saveSettings: _vm.handleSaveSettings
    },
    props: {
      data: tableFullColumn,
      setting,
      value: settingStore.customVisible
    }
  }) : h(GlobalConfig$1.icon.custom, {
    class: "tiny-svg-size"
  })]), h("div", {
    class: "tiny-grid-custom__option-wrapper"
  }, [h(_vm.customMode === "saas" ? "tiny-grid-custom-saas" : "tiny-grid-custom", {
    on: {
      showModal: function showModal(modalVisible) {
        return settingStore.customVisible = modalVisible;
      },
      saveSettings: _vm.handleSaveSettings,
      resetSettings: function resetSettings3(settings) {
        return _vm.$emit("reset-setting", settings);
      },
      cancelSettings: function cancelSettings3() {
        return _vm.$emit("cancel-setting");
      }
    },
    props: {
      customMode: _vm.customMode,
      data: tableFullColumn,
      value: settingStore.customVisible,
      other: setting.other,
      search: setting.search,
      keys: setting.keys,
      sortable: setting.sortable,
      filter: setting.filter,
      onBeforeMove: setting.onBeforeMove,
      rowClassName: setting.rowClassName,
      refresh: setting.refresh,
      numberSorting: setting.numberSorting,
      multipleHistory: setting.multipleHistory,
      initSettings,
      resetMethod: _vm.resetMethod,
      alwaysShowColumns: setting.alwaysShowColumns,
      columnsGroup: setting.columnsGroup,
      hideSortColumn: setting.hideSortColumn,
      showHideAll: setting.showHideAll,
      fixedSorting: setting.fixedSorting
    },
    ref: "custom"
  })])]);
}
function getScopedSlots(_ref18) {
  var item = _ref18.item, _vm = _ref18._vm;
  var scopedSlots = null;
  var childHandler = function childHandler2(child) {
    var res = [null];
    if (child.visible !== false) {
      res = h(Button$1, {
        on: {
          click: function click(event) {
            return _vm.btnEvent(event, child);
          }
        },
        props: {
          disabled: child.disabled
        }
      }, getFuncText(child.name));
    }
    return res;
  };
  if (item.dropdowns && item.dropdowns.length) {
    scopedSlots = {
      default: function _default172() {
        return getFuncText(item.name);
      },
      dropdowns: function dropdowns() {
        return item.dropdowns.map(childHandler);
      }
    };
  }
  return scopedSlots;
}
function renderButtonWrapper(_ref19) {
  var _vm = _ref19._vm, $buttons = _ref19.$buttons, $grid = _ref19.$grid, table = _ref19.table, buttons = _ref19.buttons;
  var childrenArg;
  if ($buttons) {
    childrenArg = $buttons.call(_vm, {
      $grid,
      $table: table
    }, h);
  } else {
    childrenArg = buttons.map(function(item) {
      var res = [null];
      if (item.visible !== false) {
        var scopedSlots = getScopedSlots({
          item,
          _vm
        });
        res = h(Button$1, {
          on: {
            click: function click(event) {
              return _vm.btnEvent(event, item);
            }
          },
          props: {
            disabled: item.disabled
          },
          scopedSlots
        }, getFuncText(item.name));
      }
      return res;
    });
  }
  return h("div", {
    class: "tiny-grid-button__wrapper"
  }, childrenArg);
}
var GridToolbar = defineComponent({
  name: $prefix + "GridToolbar",
  components: {
    TinyGridCustom: GridCustom,
    TinyGridCustomSelect: GridCustomSelect,
    TinyGridCustomSaas: GridCustomSaas,
    IconFullscreen: index$r(),
    IconMinscreen: index$s()
  },
  props: _extends({}, $props, {
    id: String,
    loading: {
      type: Boolean,
      default: false
    },
    customMode: {
      type: String,
      default: function _default122() {
        var ctx = appProperties();
        return (ctx.tiny_theme ? ctx.tiny_theme.value : "") || "aurora";
      }
    },
    resizable: {
      type: [Boolean, Object],
      default: function _default132() {
        return GlobalConfig$1.toolbar.resizable;
      }
    },
    refresh: {
      type: [Boolean, Object],
      default: function _default142() {
        return GlobalConfig$1.toolbar.refresh;
      }
    },
    setting: {
      type: [Boolean, Object],
      default: function _default152() {
        return GlobalConfig$1.toolbar.setting;
      }
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    buttons: {
      type: Array,
      default: function _default162() {
        return GlobalConfig$1.toolbar.buttons;
      }
    },
    size: String,
    data: Array,
    customs: Array,
    beforeOpenFullScreen: Function,
    beforeCloseFullScreen: Function,
    resetMethod: Function
  }),
  inject: {
    $grid: {
      default: null
    }
  },
  data: function data5() {
    return {
      table: null,
      isRefresh: false,
      tableFullColumn: [],
      initSettings: {
        pageSizes: [],
        pageSize: 10,
        sortType: "page",
        showIndex: false,
        multipleHistory: {
          tableMaxHeight: "",
          showTitle: true,
          title: "",
          showSave: true,
          saveDisabled: false,
          saveText: "",
          labelText: "",
          selectPlaceholder: "",
          selectDisabled: false,
          showApply: true,
          applyDisabled: false,
          applyTitle: "",
          applyIcon: null,
          showEdit: true,
          editDisabled: false,
          editTitle: "",
          editIcon: null,
          showDel: true,
          delDisabled: false,
          delTitle: "",
          delIcon: null,
          storageKey: "TINY_TABLE_MULTI_HISTORY_SETTING",
          remoteMethod: null,
          userKey: "",
          // userId or userAccount
          remoteSelectedMethod: null
        }
      },
      settingStore: {
        visible: false,
        customVisible: false
      },
      isFull: false
    };
  },
  computed: {
    vSize: function vSize() {
      return this.size || this.$parent.size || this.$parent.vSize;
    },
    refreshOpts: function refreshOpts() {
      return _extends({}, GlobalConfig$1.toolbar.refresh, this.refresh);
    },
    resizableOpts: function resizableOpts() {
      return _extends({
        storageKey: "TINY_TABLE_CUSTOM_COLUMN_WIDTH"
      }, GlobalConfig$1.toolbar.resizable, this.resizable);
    },
    settingOpts: function settingOpts() {
      return _extends({
        storageKey: "TINY_TABLE_CUSTOM_SETTING"
      }, GlobalConfig$1.toolbar.setting, this.setting);
    }
  },
  created: function created5() {
    var _this26 = this;
    var settingOpts2 = this.settingOpts, id = this.id, customs = this.customs, $grid = this.$grid;
    this.initSettings.pageSizes = $grid.pagerConfig && $grid.pagerConfig.pageSizes || [10, 15, 20, 30, 50, 100];
    this.initSettings.pageSize = $grid.pagerConfig && $grid.pagerConfig.pageSize || 10;
    this.initSettings.sortType = this.setting && this.setting.sortType || "page";
    this.initSettings.showIndex = this.setting && this.setting.showIndex;
    if (settingOpts2.storage === "local") {
      this.initSettings = Object.assign(this.initSettings, this.getStorageMap(settingOpts2.storageKey)[id] || {});
    }
    if (customs) {
      this.tableFullColumn = customs;
    }
    if (settingOpts2.storage && !id) {
      return index$u.error("ui.grid.error.toolbarId");
    }
    this.loadStorage();
    event_default.on(this, "mousedown", this.handleGlobalMousedownEvent);
    event_default.on(this, "blur", this.handleGlobalBlurEvent);
    this.removeHandler = function() {
      event_default.off(_this26, "mousedown");
      event_default.off(_this26, "blur");
    };
    this.$grid.connect({
      name: "toolbar",
      vm: this
    });
  },
  setup: function setup22(props2, _ref20) {
    var slots = _ref20.slots, attrs = _ref20.attrs, listeners = _ref20.listeners;
    var instance = getCurrentInstance().proxy;
    var tableListeners = getListeners(attrs, listeners);
    onBeforeUnmount(function() {
      return typeof instance.removeHandler === "function" && instance.removeHandler();
    });
    return {
      slots,
      tableListeners
    };
  },
  render: function render22() {
    var _ref21;
    var $grid = this.$grid, $slots = this.slots, table = this.table, loading = this.loading, settingStore = this.settingStore, refresh = this.refresh, fullScreen = this.fullScreen;
    var setting = this.setting, initSettings = this.initSettings, _this$buttons = this.buttons, buttons = _this$buttons === void 0 ? [] : _this$buttons, vSize2 = this.vSize, tableFullColumn = this.tableFullColumn;
    var $buttons = $slots.buttons, $tools = $slots.tools;
    var settingsBtnOns = {};
    setting && (settingsBtnOns.click = this.settingBtnClick);
    var map = {
      isLoading: "is__loading"
    };
    var propsArg = {
      class: ["tiny-grid-toolbar", (_ref21 = {}, _ref21["size__" + vSize2] = vSize2, _ref21[map.isLoading] = loading, _ref21)]
    };
    var args = {
      _vm: this,
      settingStore,
      settingsBtnOns,
      tableFullColumn,
      setting,
      initSettings
    };
    var defaultSlot = function defaultSlot2() {
      return typeof $slots.default === "function" ? $slots.default() : $slots.default;
    };
    var childrenArg = [renderButtonWrapper({
      _vm: this,
      $buttons,
      $grid,
      table,
      buttons
    }), setting ? renderCustomWrapper(args) : null, refresh ? renderRefreshWrapper({
      _vm: this
    }) : null, fullScreen ? renderFullScreenWrapper({
      _vm: this
    }) : null, $tools ? renderToolsWrapper({
      _vm: this,
      $tools,
      $grid,
      table
    }) : defaultSlot()];
    return h("div", propsArg, childrenArg);
  },
  methods: {
    settingBtnClick: function settingBtnClick() {
      return this.setting && this.setting.customSetting ? this.setting.settingBtnClickFn() : this.handleClickCustomEvent();
    },
    updateConf: function updateConf() {
      var _this27 = this;
      var data6 = this.data;
      var $children = this.$parent.$children;
      var findHandler = function findHandler2(childComp, childIndex) {
        return childComp && childComp.refreshColumn && childIndex > $children.indexOf(_this27) && (data6 ? childComp.data === data6 : childComp.$vnode.componentOptions.tag === "tiny-grid-table");
      };
      this.table = find_default($children, findHandler);
    },
    closeSetting: function closeSetting() {
      var setting = this.setting;
      var settingStore = this.settingStore;
      if (settingStore.visible) {
        settingStore.visible = false;
      }
      if (settingStore.visible && setting && !settingStore.immediate) {
        this.updateSetting();
      }
    },
    openSetting: function openSetting() {
      this.settingStore.visible = true;
    },
    showAllColumns: function showAllColumns() {
      this.$refs.custom.showOrHideAllColumns(true);
    },
    hideAllColumns: function hideAllColumns() {
      this.$refs.custom.showOrHideAllColumns(false);
    },
    orderSetting: function orderSetting() {
      var id = this.id, settingOpts2 = this.settingOpts;
      var allData = [];
      var custumSetting = JSON.parse(localStorage.getItem(settingOpts2.storageKey));
      if (custumSetting) {
        var customName = custumSetting[id];
        allData = customName && customName.columns || [];
      }
      var orderArg = allData.map(function(value3) {
        return {
          fileds: value3.property,
          property: value3.property,
          order: value3.order,
          prop: value3.property
        };
      }).filter(function(item) {
        return item.order !== null;
      });
      return orderArg;
    },
    loadColWidth: function loadColWidth() {
      var id = this.id, resizableOpts2 = this.resizableOpts;
      if (resizableOpts2.storage) {
        var width = this.getStorageMap(resizableOpts2.storageKey)[id] || {};
        if (width) {
          var widthSet = {};
          for (var key in width) {
            if (Object.prototype.hasOwnProperty.call(width, key)) {
              widthSet[key] = {
                resizeWidth: width[key]
              };
            }
          }
          return widthSet;
        }
      }
    },
    loadStorage: function loadStorage() {
      var _this28 = this;
      var $grid = this.$grid, id = this.id, resizable = this.resizable, setting = this.setting, settingOpts2 = this.settingOpts;
      if (!$grid) {
        return;
      }
      if (resizable || setting) {
        var customSettings = [];
        if ($grid) {
          $grid.connect({
            toolbar: this
          });
        } else {
          throw new Error("[tiny-grid-toolbar] Not found tiny-grid.");
        }
        if (settingOpts2.storage === "local") {
          var settingsStorage = this.getStorageMap(settingOpts2.storageKey)[id];
          customSettings = settingsStorage && settingsStorage.columns || [];
          if (settingsStorage && settingsStorage.pageSize) {
            var pageSize = settingsStorage.pageSize;
            if (this.$grid.pagerConfig && this.$grid.pagerConfig.pageSize !== pageSize) {
              this.$grid.createJob("pageSizeChangeCallback", function() {
                _this28.$grid.pageSizeChange(pageSize, $grid.autoLoad === false);
              });
            }
          }
        }
        this.$grid.createJob("updateCustomsCallback", function() {
          _this28.updateCustoms(customSettings.length ? customSettings : _this28.tableFullColumn);
        });
      }
    },
    // NEXT 未用到
    updateColumn: function updateColumn(fullColumn) {
      this.tableFullColumn = fullColumn;
    },
    updateCustoms: function updateCustoms(customs) {
      var _this29 = this;
      var $grid = this.$grid, table = this.table, setting = this.setting;
      var comp = $grid || table;
      var sort = setting && !!setting.sortable;
      if (comp) {
        var colWidth = this.loadColWidth();
        comp.reloadCustoms(customs, sort, colWidth).then(function(fullColumn) {
          _this29.tableFullColumn = fullColumn;
        });
      }
    },
    getStorageMap: function getStorageMap(key) {
      var version2 = GlobalConfig$1.version;
      var rest = toStringJSON_default(localStorage.getItem(key));
      return rest && rest._v === version2 ? rest : {
        _v: version2
      };
    },
    // 保存 'fixed', 'visible', 'order' 列的个性化配置
    saveCustomSettings: function saveCustomSettings(columnConfigs) {
      var id = this.id, settingOpts2 = this.settingOpts;
      if (settingOpts2.storage === "local") {
        var settingsStorageMap = this.getStorageMap(settingOpts2.storageKey);
        var settingsStorage = settingsStorageMap[id] || {};
        settingsStorage.columns = columnConfigs;
        settingsStorageMap[id] = settingsStorage;
        localStorage.setItem(settingOpts2.storageKey, toJSONString_default(settingsStorageMap));
      }
      return this.$nextTick();
    },
    // 保存分页、排序类型数据数据
    savePagerSettings: function savePagerSettings(settingConfigs) {
      var id = this.id, settingOpts2 = this.settingOpts;
      if (settingOpts2.storage) {
        var settingsStorageMap = this.getStorageMap(settingOpts2.storageKey);
        var settingsStorage = settingsStorageMap[id];
        if (settingsStorage) {
          Object.assign(settingsStorage, settingConfigs);
        } else {
          settingsStorage = settingConfigs;
        }
        settingsStorageMap[id] = settingsStorage;
        localStorage.setItem(settingOpts2.storageKey, toJSONString_default(settingsStorageMap));
      }
      return this.$nextTick();
    },
    // 只保存隐藏列配置
    saveColumnHide: function saveColumnHide() {
      var id = this.id, tableFullColumn = this.tableFullColumn, settingOpts2 = this.settingOpts;
      if (settingOpts2.storage) {
        var columnHideStorageMap = this.getStorageMap(settingOpts2.storageKey);
        var colHides = tableFullColumn.filter(function(column) {
          return column.property && !column.visible;
        });
        columnHideStorageMap[id] = colHides.length ? colHides.map(function(column) {
          return column.property;
        }).join(",") : void 0;
        this.$refs.custom && this.$refs.custom.saveSettings();
      }
      return this.$nextTick();
    },
    saveColumnWidth: function saveColumnWidth(isReset) {
      var id = this.id, resizableOpts2 = this.resizableOpts, tableFullColumn = this.tableFullColumn;
      var storage = resizableOpts2.storage, storageKey = resizableOpts2.storageKey;
      var columnWidthStorageMap;
      if (storage) {
        columnWidthStorageMap = this.getStorageMap(storageKey);
      }
      var columnWidthStorage;
      if (storage && !isReset) {
        columnWidthStorage = columnWidthStorageMap[id];
        columnWidthStorage = isPlainObject_default(columnWidthStorage) ? columnWidthStorage : {};
        tableFullColumn.forEach(function(_ref22) {
          var property = _ref22.property, resizeWidth = _ref22.resizeWidth, renderWidth = _ref22.renderWidth;
          if (property && resizeWidth) {
            columnWidthStorage[property] = renderWidth;
          }
        });
      }
      if (storage) {
        columnWidthStorageMap[id] = isEmpty_default(columnWidthStorage) ? void 0 : columnWidthStorage;
        localStorage.setItem(storageKey, toJSONString_default(columnWidthStorageMap));
      }
      return this.$nextTick();
    },
    resetResizable: function resetResizable() {
      this.updateResizable(this);
    },
    updateResizable: function updateResizable(isReset) {
      var tableComp = this.$grid || this.table;
      this.saveColumnWidth(isReset);
      tableComp.analyColumnWidth();
      return tableComp.recalculate();
    },
    updateSetting: function updateSetting() {
      var _this30 = this;
      var tableComp = this.$grid || this.table;
      tableComp.refreshColumn();
      this.tableFullColumn = this.tableFullColumn.slice(0);
      return this.$nextTick(function() {
        return _this30.$refs.custom && _this30.$refs.custom.saveSettings();
      });
    },
    applySettings: function applySettings(_ref23) {
      var _this31 = this;
      var columns = _ref23.columns, pageSize = _ref23.pageSize;
      var sort = this.setting && !!this.setting.sortable;
      if (this.$grid) {
        if (columns && columns.length) {
          var colWidth = this.loadColWidth();
          this.$grid.reloadCustoms(columns, sort, colWidth).then(function() {
            _this31.$grid.handleTableData(true).then(function() {
              _this31.$grid.recalculate();
            });
          });
        }
        if (isNumber(pageSize) && this.$grid.pagerConfig && this.$grid.pagerConfig.pageSize !== pageSize) {
          this.$grid.pageSizeChange(pageSize);
        }
      }
    },
    handleSaveSettings: function handleSaveSettings(settingConfigs) {
      var settingStore = this.settingStore, setting = this.setting, settingOpts2 = this.settingOpts;
      var customRef = this.$refs.custom;
      settingStore.customVisible = false;
      var columns = settingConfigs.columns, pageSize = settingConfigs.pageSize, sortType = settingConfigs.sortType;
      this.applySettings({
        columns,
        pageSize
      });
      if (setting && settingOpts2.storage === "local") {
        var pagerSettings = {
          pageSize,
          sortType,
          id: null
        };
        if (setting.multipleHistory && customRef.multipleHistoryId) {
          pagerSettings.id = customRef.multipleHistoryId;
          customRef.multipleHistoryId = null;
        }
        this.saveCustomSettings(columns);
        this.savePagerSettings(pagerSettings);
      } else if (setting && settingOpts2.storage === "remote") {
        if (settingOpts2.remote) {
          this.$emit("remote-setting", settingConfigs);
          if (setting.multipleHistory) {
            var _settingOpts$storageK, _toJSONString2;
            this.$emit("multiple-history-option", toJSONString_default((_toJSONString2 = {}, _toJSONString2[settingOpts2.storageKey] = (_settingOpts$storageK = {}, _settingOpts$storageK[this.id] = _extends({}, settingConfigs, {
              id: customRef.multipleHistoryId || null
            }), _settingOpts$storageK), _toJSONString2)));
            customRef.multipleHistoryId = null;
          }
        }
      }
      this.$emit("save-setting", settingConfigs);
    },
    handleGlobalMousedownEvent: function handleGlobalMousedownEvent(event) {
      if (!getEventTargetNode(event, this.$refs.customWrapper).flag) {
        this.closeSetting();
      }
    },
    handleGlobalBlurEvent: function handleGlobalBlurEvent() {
      this.closeSetting();
    },
    // NEXT 未用到
    handleClickSettingEvent: function handleClickSettingEvent() {
      var settingStore = this.settingStore;
      settingStore.visible = !settingStore.visible;
    },
    handleClickCustomEvent: function handleClickCustomEvent() {
      var settingStore = this.settingStore;
      this.$refs.custom.settings.pageSize = this.$grid.pagerConfig && this.$grid.pagerConfig.pageSize || this.settingOpts.storage === "local" && this.$refs.custom.settings.pageSize || 10;
      settingStore.customVisible = !settingStore.customVisible;
    },
    // NEXT 未用到
    handleMouseenterSettingEvent: function handleMouseenterSettingEvent() {
      this.settingStore.activeBtn = true;
      this.openSetting();
    },
    // NEXT 未用到
    handleMouseleaveSettingEvent: function handleMouseleaveSettingEvent() {
      this.settingStore.activeBtn = false;
      createMacroTask({
        _vm: this
      });
    },
    // NEXT 未用到
    handleWrapperMouseenterEvent: function handleWrapperMouseenterEvent() {
      this.settingStore.activeWrapper = true;
      this.openSetting();
    },
    // NEXT 未用到
    handleWrapperMouseleaveEvent: function handleWrapperMouseleaveEvent() {
      this.settingStore.activeWrapper = false;
      createMacroTask({
        _vm: this
      });
    },
    refreshEvent: function refreshEvent() {
      var _this32 = this;
      var $grid = this.$grid, isRefresh = this.isRefresh, refreshOpts2 = this.refreshOpts;
      var catchHandler = function catchHandler2(e) {
        return e;
      };
      var nextHandler = function nextHandler2() {
        return _this32.isRefresh = false;
      };
      if (isRefresh)
        return;
      this.isRefresh = true;
      if (refreshOpts2.query) {
        refreshOpts2.query().catch(catchHandler).then(nextHandler);
        return;
      }
      if ($grid && $grid.fetchData) {
        $grid.commitProxy("reload").catch(catchHandler).then(nextHandler);
        return;
      }
      if ($grid) {
        $grid.refreshData().then(nextHandler);
      }
    },
    btnEvent: function btnEvent(event, item) {
      var $grid = this.$grid, table = this.table, tableListeners = this.tableListeners;
      var code = item.code;
      if (code) {
        if ($grid && !tableListeners["button-click"]) {
          $grid.triggerToolbarBtnEvent(item, event);
        } else {
          var btnMethod = GridAdapter.buttons.get(code);
          var params = {
            code,
            button: item,
            $grid,
            $table: table
          };
          if (btnMethod) {
            btnMethod.call(this, params, event);
          }
          emitEvent$1(this, "button-click", [params, event]);
        }
      }
    },
    fullscreenEvent: function fullscreenEvent() {
      var beforeOpenFullScreen;
      var beforeCloseFullScreen;
      var interceptFullScreen;
      var show = !this.isFull;
      if (this.fullScreen) {
        beforeOpenFullScreen = this.beforeOpenFullScreen;
        beforeCloseFullScreen = this.beforeCloseFullScreen;
        interceptFullScreen = show && typeof beforeOpenFullScreen === "function" && !beforeOpenFullScreen() || !show && typeof beforeCloseFullScreen === "function" && !beforeCloseFullScreen();
        if (interceptFullScreen)
          return;
      }
      if (this.$grid) {
        this.isFull = !this.isFull;
        this.$grid.commitProxy("fullscreen", this.isFull);
      }
    }
  }
});
var version = "3.16.0";
GridToolbar.install = function(Vue) {
  Vue.component(GridToolbar.name, GridToolbar);
};
GridToolbar.version = version;
export {
  GridToolbar as G
};
