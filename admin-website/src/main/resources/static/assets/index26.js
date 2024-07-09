import { u as openBlock, v as createElementBlock, w as createBaseVNode, y as createBlock, A as normalizeClass, B as resolveDynamicComponent, z as createCommentVNode, E as toDisplayString, D as renderSlot, F as mergeProps, l as createVNode, I as withDirectives, L as vShow, r as ref, d as defineComponent$1, a0 as useI18n, c as computed, a8 as reactive, H as withCtx, W as unref, a1 as useRouter, i as inject, J as createTextVNode, M as Fragment, N as renderList, p as provide, Z as pushScopeId, _ as popScopeId } from "./vue.js";
import { s as svg, x as xss, d as defineComponent, p as props, a as setup, $ as $props, b as $prefix, c as $setup, e as popup_manager_default, o as on, f as off, i as index$6, g as index$7, h as createComponent, j as index$8, k as h, u as useUserStore, I as Input, C as Checkbox, B as Button, T as TINYModal, _ as _export_sfc$1, r as registerUser, l as useLocale, L as LOCALE_OPTIONS, F as Footer, m as _imports_0 } from "./index.js";
import { F as FormItem, a as Form } from "./index29.js";
import { i as index$5 } from "./warning-triangle.js";
import "./index30.js";
var _hoisted_1$7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$7 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-960a448 448 0 1 0 448 448A448 448 0 0 0 512 64z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$4 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M512 1024c-145.28 0-256-224-256-512S366.72 0 512 0s259.2 224 259.2 512-113.92 512-259.2 512zm0-960c-94.08 0-192 181.76-192 448s97.92 448 192 448 195.2-179.2 195.2-448S606.08 64 512 64z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4$3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M512 339.84a778.88 778.88 0 0 1-390.4-90.88A32 32 0 1 1 154.24 192 723.2 723.2 0 0 0 512 275.84a733.44 733.44 0 0 0 352.64-78.08A32 32 0 1 1 896 256a794.88 794.88 0 0 1-384 83.84zM880.64 822.4a30.72 30.72 0 0 1-16.64-4.48A723.2 723.2 0 0 0 506.24 736a733.44 733.44 0 0 0-352.64 78.72 32 32 0 0 1-32-55.68 802.56 802.56 0 0 1 384-87.04A790.4 790.4 0 0 1 896 762.88a32 32 0 0 1-16.64 59.52zM989.44 544H34.56a32 32 0 1 1 0-64h954.88a32 32 0 0 1 0 64z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_5$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M512 1024a32 32 0 0 1-32-32V34.56a32 32 0 1 1 64 0v954.88a32 32 0 0 1-32 34.56z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_6$1 = [_hoisted_2$7, _hoisted_3$4, _hoisted_4$3, _hoisted_5$1];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, [].concat(_hoisted_6$1));
}
var Language = {
  render: render$1
};
var index$4 = function index2() {
  return svg({
    name: "IconLanguage",
    component: Language
  })();
};
var _hoisted_1$6 = {
  class: "prompt_svg__tiny-icon-prompt",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 14",
  style: {
    "enable-background": "new 0 0 14 14"
  },
  "xml:space": "preserve"
};
var _hoisted_2$6 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M7 0C3.13 0 0 3.13 0 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7z",
    style: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd"
    }
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M7.57 6.43v4a.57.57 0 1 1-1.14 0v-4a.57.57 0 1 1 1.14 0zM7 3c-.47 0-.86.38-.86.86s.39.85.86.85.86-.38.86-.86S7.47 3 7 3z",
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
var _hoisted_4$2 = [_hoisted_2$6, _hoisted_3$3];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, [].concat(_hoisted_4$2));
}
var Prompt = {
  render
};
var index$3 = function index22() {
  return svg({
    name: "IconPrompt",
    component: Prompt
  })();
};
const handleClick = ({ emit, props: props2, state }) => (event) => {
  if (!state.disabled && !props2.href) {
    emit("click", event);
  }
};
const api$1 = ["state", "handleClick"];
const renderless$1 = (props2, { inject: inject2, reactive: reactive2, computed: computed2 }, { emit, parent }) => {
  parent.tinyForm = parent.tinyForm || inject2("form", null);
  const state = reactive2({
    formDisabled: computed2(() => (parent.tinyForm || {}).disabled),
    disabled: computed2(() => props2.disabled || state.formDisabled),
    href: computed2(() => xss.filterUrl(props2.href))
  });
  return {
    state,
    handleClick: handleClick({ emit, props: props2, state })
  };
};
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
var _export_sfc = function _export_sfc2(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$6 = defineComponent({
  props: [].concat(props, ["disabled", "href", "icon", "type", "underline", "value", "size"]),
  emits: ["click"],
  setup: function setup$1(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
var _hoisted_1$5 = ["href"];
var _hoisted_2$5 = {
  key: 1,
  class: "tiny-link__inner"
};
var _hoisted_3$2 = {
  key: 2,
  class: "tiny-link__inner"
};
function _sfc_render(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock("a", mergeProps({
    class: ["tiny-link", "tiny-link--additional", _ctx.type ? "tiny-link--" + _ctx.type : "", _ctx.state.disabled && "is-disabled", _ctx.underline && !_ctx.state.disabled && "is-underline", _ctx.size === "medium" ? "tiny-link--" + _ctx.size : "tiny-link--base"],
    href: _ctx.state.disabled ? null : _ctx.state.href
  }, _ctx.a(_ctx.$attrs, ["^on[A-Z]"]), {
    rel: "noopener noreferrer",
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.handleClick && _ctx.handleClick.apply(_ctx, arguments);
    })
  }), [_ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
    key: 0,
    class: normalizeClass(["tiny-svg-size tiny-link-svg", {
      "tiny-link-svg-only": !(_ctx.slots.default || _ctx.value)
    }])
  }, null, 8, ["class"])) : createCommentVNode("v-if", true), _ctx.value ? (openBlock(), createElementBlock(
    "span",
    _hoisted_2$5,
    toDisplayString(_ctx.value),
    1
    /* TEXT */
  )) : _ctx.slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$2, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true), _ctx.slots.icon ? renderSlot(_ctx.$slots, "icon", {
    key: 3
  }) : createCommentVNode("v-if", true)], 16, _hoisted_1$5);
}
var pc = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render]]);
const index$2 = "";
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
var template = function template2(mode) {
  var _process$env;
  typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  return pc;
};
var linkProps = _extends({}, $props, {
  type: {
    type: String,
    default: "default"
  },
  value: String,
  underline: {
    type: Boolean,
    default: true
  },
  href: String,
  icon: [Object, String],
  disabled: Boolean,
  size: String
});
var Link = defineComponent({
  name: $prefix + "Link",
  props: linkProps,
  setup: function setup2(props2, context) {
    return $setup({
      props: props2,
      context,
      template
    });
  }
});
var version = "3.16.0";
Link.install = function(Vue) {
  Vue.component(Link.name, Link);
};
Link.version = version;
const startTimer = ({ api: api2, state }) => () => {
  if (state.duration > 0) {
    state.timer = setTimeout(() => {
      !state.closed && api2.close();
    }, state.duration);
  }
};
const clearTimer = (state) => () => {
  clearTimeout(state.timer);
  state.timer = null;
};
const click = ({ emit, state }) => () => {
  typeof state.onClick === "function" && (void 0).onClick();
  emit("click", "");
};
const close = ({ state, props: props2 }) => () => {
  if (!props2.beforeClose || typeof props2.beforeClose === "function" && props2.beforeClose()) {
    typeof props2.onClose === "function" && props2.onClose();
    state.closed = true;
  }
};
const watchClosed = (state) => (value) => {
  if (value) {
    state.visible = false;
  }
};
const getOffsetStyle = (state) => {
  const side = {};
  side[state.verticalProperty] = `${state.verticalOffset}px`;
  return side;
};
const getZindex = () => popup_manager_default.nextZIndex();
const getPositionSide = (state) => state.position.startsWith("top-") ? "top" : "bottom";
const bindEvent = ({ api: api2, state }) => () => {
  if (state.timer) {
    api2.clearTimer();
  }
  api2.startTimer();
  on(document, "keydown", api2.bindKeyDown);
};
const unBindEvent = (api2) => () => off(document, "keydown", api2.bindKeyDown);
const api = [
  "state",
  "clearTimer",
  "startTimer",
  "close",
  "bindEvent",
  "unBindEvent",
  "click",
  "watchClosed",
  "getOffsetStyle",
  "getPositionSide",
  "getZindex"
];
const renderless = (props2, { computed: computed2, onBeforeUnmount, onMounted, reactive: reactive2, watch }, { emit }) => {
  const api2 = {};
  const state = reactive2({
    timer: null,
    closed: false,
    visible: true,
    duration: computed2(() => props2.duration),
    showClose: true,
    verticalOffset: 0,
    position: computed2(() => props2.position),
    dangerouslyUseHTMLString: false,
    positionStyle: computed2(() => api2.getOffsetStyle(state)),
    verticalProperty: computed2(() => api2.getPositionSide(state)),
    customClass: computed2(() => props2.customClass)
  });
  Object.assign(api2, {
    state,
    getZindex,
    getOffsetStyle,
    getPositionSide,
    close: close({ state, props: props2 }),
    click: click({ emit, state }),
    clearTimer: clearTimer(state),
    bindEvent: bindEvent({ api: api2, state }),
    unBindEvent: unBindEvent(api2),
    startTimer: startTimer({ api: api2, state }),
    watchClosed: watchClosed(state)
  });
  watch(() => state.closed, api2.watchClosed, { immediate: true });
  onMounted(api2.bindEvent);
  onBeforeUnmount(api2.unBindEvent);
  return api2;
};
const index$1 = "";
function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime2() {
    return e;
  };
  var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
    t2[e2] = r2.value;
  }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
  function define(t2, e2, r2) {
    return Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }), t2[e2];
  }
  try {
    define({}, "");
  } catch (t2) {
    define = function define2(t3, e2, r2) {
      return t3[e2] = r2;
    };
  }
  function wrap(t2, e2, r2, n2) {
    var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
    return o(a2, "_invoke", { value: makeInvokeMethod(t2, r2, c2) }), a2;
  }
  function tryCatch(t2, e2, r2) {
    try {
      return { type: "normal", arg: t2.call(e2, r2) };
    } catch (t3) {
      return { type: "throw", arg: t3 };
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
  function defineIteratorMethods(t2) {
    ["next", "throw", "return"].forEach(function(e2) {
      define(t2, e2, function(t3) {
        return this._invoke(e2, t3);
      });
    });
  }
  function AsyncIterator(t2, e2) {
    function invoke(r3, o2, i2, a2) {
      var c2 = tryCatch(t2[r3], t2, o2);
      if ("throw" !== c2.type) {
        var u2 = c2.arg, h3 = u2.value;
        return h3 && "object" == typeof h3 && n.call(h3, "__await") ? e2.resolve(h3.__await).then(function(t3) {
          invoke("next", t3, i2, a2);
        }, function(t3) {
          invoke("throw", t3, i2, a2);
        }) : e2.resolve(h3).then(function(t3) {
          u2.value = t3, i2(u2);
        }, function(t3) {
          return invoke("throw", t3, i2, a2);
        });
      }
      a2(c2.arg);
    }
    var r2;
    o(this, "_invoke", { value: function value(t3, n2) {
      function callInvokeWithMethodAndArg() {
        return new e2(function(e3, r3) {
          invoke(t3, n2, e3, r3);
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
        return { value: t, done: true };
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
    if (o2 === t)
      return r2.delegate = null, "throw" === n2 && e2.iterator.return && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
    var i2 = tryCatch(o2, e2.iterator, r2.arg);
    if ("throw" === i2.type)
      return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
    var a2 = i2.arg;
    return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
  }
  function pushTryEntry(t2) {
    var e2 = { tryLoc: t2[0] };
    1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
  }
  function resetTryEntry(t2) {
    var e2 = t2.completion || {};
    e2.type = "normal", delete e2.arg, t2.completion = e2;
  }
  function Context(t2) {
    this.tryEntries = [{ tryLoc: "root" }], t2.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(e2) {
    if (e2 || "" === e2) {
      var r2 = e2[a];
      if (r2)
        return r2.call(e2);
      if ("function" == typeof e2.next)
        return e2;
      if (!isNaN(e2.length)) {
        var o2 = -1, i2 = function next() {
          for (; ++o2 < e2.length; )
            if (n.call(e2, o2))
              return next.value = e2[o2], next.done = false, next;
          return next.value = t, next.done = true, next;
        };
        return i2.next = i2;
      }
    }
    throw new TypeError(typeof e2 + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: true }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: true }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
    var e2 = "function" == typeof t2 && t2.constructor;
    return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
  }, e.mark = function(t2) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
  }, e.awrap = function(t2) {
    return { __await: t2 };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
    void 0 === i2 && (i2 = Promise);
    var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
    return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
      return t3.done ? t3.value : a2.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
    return this;
  }), define(g, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(t2) {
    var e2 = Object(t2), r2 = [];
    for (var n2 in e2)
      r2.push(n2);
    return r2.reverse(), function next() {
      for (; r2.length; ) {
        var t3 = r2.pop();
        if (t3 in e2)
          return next.value = t3, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e2) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
      for (var r2 in this)
        "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
  }, stop: function stop() {
    this.done = true;
    var t2 = this.tryEntries[0].completion;
    if ("throw" === t2.type)
      throw t2.arg;
    return this.rval;
  }, dispatchException: function dispatchException(e2) {
    if (this.done)
      throw e2;
    var r2 = this;
    function handle(n2, o3) {
      return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
    }
    for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
      var i2 = this.tryEntries[o2], a2 = i2.completion;
      if ("root" === i2.tryLoc)
        return handle("end");
      if (i2.tryLoc <= this.prev) {
        var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
        if (c2 && u2) {
          if (this.prev < i2.catchLoc)
            return handle(i2.catchLoc, true);
          if (this.prev < i2.finallyLoc)
            return handle(i2.finallyLoc);
        } else if (c2) {
          if (this.prev < i2.catchLoc)
            return handle(i2.catchLoc, true);
        } else {
          if (!u2)
            throw Error("try statement without catch or finally");
          if (this.prev < i2.finallyLoc)
            return handle(i2.finallyLoc);
        }
      }
    }
  }, abrupt: function abrupt(t2, e2) {
    for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
      var o2 = this.tryEntries[r2];
      if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
        var i2 = o2;
        break;
      }
    }
    i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
    var a2 = i2 ? i2.completion : {};
    return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
  }, complete: function complete(t2, e2) {
    if ("throw" === t2.type)
      throw t2.arg;
    return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
  }, finish: function finish(t2) {
    for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
      var r2 = this.tryEntries[e2];
      if (r2.finallyLoc === t2)
        return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
    }
  }, catch: function _catch(t2) {
    for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
      var r2 = this.tryEntries[e2];
      if (r2.tryLoc === t2) {
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
    return this.delegate = { iterator: values(e2), resultName: r2, nextLoc: n2 }, "next" === this.method && (this.arg = t), y;
  } }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
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
var _sfc_main$5 = /* @__PURE__ */ defineComponent({
  name: $prefix + "Notify",
  props: {
    beforeClose: Function,
    closeIcon: {
      type: Object,
      default: function _default() {
        return index$8();
      }
    },
    customClass: [String, Object],
    duration: {
      type: Number,
      default: 0
    },
    message: [String, Function],
    onClose: Function,
    position: {
      type: String,
      default: "bottom-right"
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    statusIcon: Object,
    title: [String, Function],
    type: String
  },
  setup: function setup$12(props2, context) {
    return setup({
      props: props2,
      context,
      renderless,
      api,
      mono: true
    });
  },
  render: function render2() {
    var clearTimer2 = this.clearTimer, click2 = this.click, close2 = this.close, closeIcon = this.closeIcon, message = this.message, showClose = this.showClose;
    var showIcon = this.showIcon, startTimer2 = this.startTimer, state = this.state, statusIcon = this.statusIcon, title = this.title, type = this.type;
    var _ref = {}, _ref$closeVNode = _ref.closeVNode, closeVNode = _ref$closeVNode === void 0 ? null : _ref$closeVNode, _ref$iconVNode = _ref.iconVNode, iconVNode = _ref$iconVNode === void 0 ? null : _ref$iconVNode, _ref$notifyContent = _ref.notifyContent, notifyContent = _ref$notifyContent === void 0 ? null : _ref$notifyContent, _ref$notifyTitle = _ref.notifyTitle, notifyTitle = _ref$notifyTitle === void 0 ? null : _ref$notifyTitle;
    if (showIcon && statusIcon) {
      iconVNode = createVNode("div", {
        "class": "tiny-notify__icon-zone"
      }, [createVNode("span", {
        "class": "tiny-notify__icon-status"
      }, [createVNode(statusIcon, {
        "class": "tiny-svg-size"
      }, null)])]);
    }
    if (showClose) {
      closeVNode = createVNode("div", {
        "class": "tiny-notify__close-zone"
      }, [createVNode("span", {
        "class": "tiny-notify__icon-close"
      }, [createVNode(closeIcon, {
        "class": "tiny-svg-size",
        "onClick": close2
      }, null)])]);
    }
    if (title && typeof title === "string") {
      notifyTitle = h("div", {
        class: "tiny-notify__title"
      }, title);
    } else if (typeof title === "function") {
      notifyTitle = title(h, {
        vm: this,
        titleClass: "tiny-notify__title"
      });
    }
    if (typeof message === "string") {
      notifyContent = h("p", {
        class: "tiny-notify__content"
      }, message);
    } else if (typeof message === "function") {
      notifyContent = message(h, {
        vm: this,
        messageClass: "tiny-notify__content"
      });
    }
    var msgVNode = createVNode("div", {
      "class": "tiny-notify__message-zone"
    }, [notifyTitle ? createVNode("div", {
      "class": "tiny-notify__title-wrapper"
    }, [notifyTitle]) : null, createVNode("div", {
      "class": "tiny-notify__content-wrapper"
    }, [notifyContent])]);
    return withDirectives(createVNode("div", {
      "class": ["tiny-notify", "tiny-notify--" + type, showIcon ? "" : "tiny-notify--no-icon", showClose ? "" : "tiny-notify--no-close", state.position, state.customClass],
      "style": state.positionStyle,
      "onMouseenter": clearTimer2,
      "onMouseleave": startTimer2,
      "onClick": click2
    }, [[iconVNode, msgVNode, closeVNode]]), [[vShow, "state.visible"]]);
  }
});
var seed = 1;
var instances = [];
var IconMap = {
  warning: index$5(),
  error: index$6(),
  info: index$3(),
  success: index$7()
};
var durationMap = {
  info: 5e3,
  success: 5e3,
  warning: 1e4,
  error: 1e4
};
var positionList = ["top-right", "bottom-right"];
var debounce = function debounce2(fn, debounceDelay) {
  var timer = null;
  return /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
    var _arguments = arguments, _this = this;
    var instance;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1)
        switch (_context.prev = _context.next) {
          case 0:
            if (timer) {
              clearTimeout(timer);
            }
            instance = null;
            _context.next = 4;
            return new Promise(function(resolve) {
              timer = setTimeout(function() {
                instance = fn.apply(_this, _arguments);
                timer = null;
                resolve();
              }, debounceDelay);
            });
          case 4:
            return _context.abrupt("return", instance);
          case 5:
          case "end":
            return _context.stop();
        }
    }, _callee);
  }));
};
var notify = function notify2(options) {
  if (!~Object.keys(IconMap).indexOf(options.type)) {
    options.type = "info";
  }
  options.duration = options.duration ? options.duration : durationMap[options.type];
  options.position = !~positionList.indexOf(options.position) ? "bottom-right" : options.position;
  !options.statusIcon && options.type && (options.statusIcon = IconMap[options.type]);
  var id = "notify_" + seed++;
  var userOnClose = options.onClose;
  var position = options.position;
  options.onClose = function() {
    Notify.close(id, userOnClose);
  };
  var instance = createComponent({
    el: document.createElement("div"),
    propsData: options,
    component: _sfc_main$5
  });
  instance.id = id;
  document.body.appendChild(instance.$el);
  var verticalOffset = options.offset || 0;
  instances.filter(function(item) {
    return item.state.position === position;
  }).forEach(function(item) {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  verticalOffset += options.verticalOffset ? Number(options.verticalOffset) : 16;
  instances.push(instance);
  instance.dom = instance.$el;
  instance.dom.style.zIndex = instance.getZindex();
  instance.state.verticalOffset = verticalOffset;
  instance.state.visible = true;
  if (verticalOffset + instance.$el.offsetHeight > window.innerHeight) {
    instances[0] && instances[0].close(instances[0].id);
  }
  return instance;
};
var Notify = function Notify2(options) {
  var debounceDelay = options.debounceDelay;
  if (debounceDelay) {
    return debounce(function() {
      return notify(options);
    }, debounceDelay);
  } else {
    return notify(options);
  }
};
Notify.close = function(id, userOnClose) {
  var index3 = -1;
  var len = instances.length;
  var instance;
  for (var i = 0; i < len; i++) {
    var tmp = instances[i];
    if (tmp.id === id) {
      index3 = i;
      instance = tmp;
      break;
    }
  }
  if (!instance) {
    return;
  }
  typeof userOnClose === "function" && userOnClose(instance);
  var lastHeight = instance.$el.offsetHeight;
  instance.$el.parentNode.removeChild(instance.$el);
  instances.splice(index3, 1);
  if (len <= 1) {
    return;
  }
  var removedPosition = instance.position;
  var copys = instances.slice(index3);
  var verticalOffset = 16;
  instances.filter(function(item) {
    return item.state.position === removedPosition;
  }).forEach(function(item) {
    item.state.verticalOffset = verticalOffset;
    verticalOffset += item.$el.offsetHeight + 16;
  });
  copys.forEach(function(copy) {
    if (copy.position === removedPosition) {
      var height = parseInt(copy.dom.style[instance.state.verticalProperty], 10) - lastHeight - 16;
      copy.dom.style[instance.state.verticalProperty] = height + "px";
    }
  });
};
Notify.closeAll = function() {
  var copys = instances.slice(0);
  copys = copys.reverse();
  copys.forEach(function(instance) {
    instance.close();
  });
};
function useLoading(initValue = false) {
  const loading = ref(initValue);
  const setLoading = (value) => {
    loading.value = value;
  };
  const toggle = () => {
    loading.value = !loading.value;
  };
  return {
    loading,
    setLoading,
    toggle
  };
}
const _hoisted_1$4 = { class: "login-form-container" };
const _hoisted_2$4 = { class: "login-form-options" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent$1({
  __name: "login-mail",
  setup(__props) {
    const router = useRouter();
    const { t } = useI18n();
    const { loading, setLoading } = useLoading();
    const userStore = useUserStore();
    const loginFormMail = ref();
    const rules = computed(() => {
      return {
        mailname: [
          {
            required: true,
            message: t("login.form.mailName.errMsg"),
            trigger: "change"
          }
        ],
        mailpassword: [
          {
            required: true,
            message: t("login.form.mailpassword.errMsg"),
            trigger: "change"
          }
        ]
      };
    });
    const loginMail = reactive({
      mailname: "admin",
      mailpassword: "changeMyPassword",
      rememberPassword: true
    });
    const handle = inject("handle");
    const typeChange = () => {
      handle(true);
    };
    function handleSubmit() {
      var _a;
      (_a = loginFormMail.value) == null ? void 0 : _a.validate(async (valid) => {
        if (!valid) {
          return;
        }
        setLoading(true);
        try {
          await userStore.login({
            username: loginMail.mailname,
            password: loginMail.mailpassword,
            grant_type: "password"
          });
          TINYModal.message({
            message: t("login.form.login.success"),
            status: "success"
          });
          const { redirect, ...othersQuery } = router.currentRoute.value.query;
          router.push({
            name: redirect || "Home",
            query: {
              ...othersQuery
            }
          });
        } catch (err) {
          Notify({
            type: "error",
            title: t("login.tip.right"),
            message: t("login.tip.mail"),
            position: "top-right",
            duration: 2e3,
            customClass: "my-custom-cls"
          });
        } finally {
          setLoading(false);
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(unref(Form), {
          ref_key: "loginFormMail",
          ref: loginFormMail,
          model: loginMail,
          class: "login-form",
          rules: rules.value,
          "validate-type": "text",
          "label-width": "0",
          size: "medium"
        }, {
          default: withCtx(() => [
            createVNode(unref(FormItem), {
              prop: "mailname",
              size: "medium"
            }, {
              default: withCtx(() => [
                createVNode(unref(Input), {
                  modelValue: loginMail.mailname,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => loginMail.mailname = $event),
                  placeholder: _ctx.$t("login.form.mailName.placeholder")
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }),
            createVNode(unref(FormItem), {
              prop: "mailpassword",
              size: "medium"
            }, {
              default: withCtx(() => [
                createVNode(unref(Input), {
                  modelValue: loginMail.mailpassword,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => loginMail.mailpassword = $event),
                  type: "password",
                  "show-password": "",
                  placeholder: _ctx.$t("login.form.mailpassword.placeholder")
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2$4, [
              createVNode(unref(Checkbox), null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("login.form.rememberPassword")), 1)
                ]),
                _: 1
              }),
              createBaseVNode("div", null, [
                createVNode(unref(Link), { type: "primary" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("login.form.forgetPassword")), 1)
                  ]),
                  _: 1
                }),
                createVNode(unref(Link), {
                  type: "primary",
                  class: "divide-line"
                }, {
                  default: withCtx(() => [
                    createTextVNode("|")
                  ]),
                  _: 1
                }),
                createVNode(unref(Link), {
                  type: "primary",
                  onClick: typeChange
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("login.form.registration")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode(unref(FormItem), { size: "medium" }, {
              default: withCtx(() => [
                createVNode(unref(Button), {
                  type: "primary",
                  class: "login-form-btn",
                  loading: unref(loading),
                  onClick: handleSubmit
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("login.form.login")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules"])
      ]);
    };
  }
});
const loginMail_vue_vue_type_style_index_0_scoped_985986a4_lang = "";
const LoginMail = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__scopeId", "data-v-985986a4"]]);
const _hoisted_1$3 = { class: "login-register-container" };
const _hoisted_2$3 = { class: "login-form-options" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent$1({
  __name: "login-register",
  setup(__props) {
    const { t } = useI18n();
    const { loading, setLoading } = useLoading();
    const ruleForm = ref();
    const handle = inject("handle");
    const typeChange = () => {
      handle(false);
    };
    let createData = reactive({
      username: "",
      password: "",
      passwordConfirm: ""
    });
    let isvalidate = ref(true);
    const validatePass = (rule, value, callback) => {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
        callback(new Error(t("login.form.checkPassword")));
      } else {
        callback();
      }
    };
    const validateMail = (rule, value, callback) => {
      if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
        callback(new Error(t("login.form.checkUsername")));
      } else {
        callback();
      }
    };
    const validatePassConfirm = (rule, value, callback) => {
      if (createData.password && createData.password !== value) {
        callback(new Error(t("login.form.confirmPassword")));
      } else {
        callback();
      }
    };
    const rules = computed(() => {
      return {
        username: [
          {
            required: true,
            message: t("login.form.mailName.errMsg"),
            trigger: "blur"
          },
          { validator: validateMail, trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: t("login.form.mailpassword.errMsg"),
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ],
        passwordConfirm: [
          {
            required: true,
            message: t("login.form.mailpassword2.errMsg"),
            trigger: "blur"
          },
          { validator: validatePassConfirm, trigger: "blur" }
        ]
      };
    });
    function handleSubmit() {
      ruleForm.value.validate(async (e) => {
        if (e) {
          let data = reactive({
            username: createData.username,
            password: createData.password
          });
          await registerUser(data);
          TINYModal.message({
            message: t("login.form.registerPass"),
            status: "success"
          });
          handle(false);
        } else {
          TINYModal.message({
            message: t("login.form.registerError"),
            status: "warning"
          });
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(unref(Form), {
          ref_key: "ruleForm",
          ref: ruleForm,
          model: unref(createData),
          rules: rules.value,
          "validate-on-rule-change": unref(isvalidate),
          "label-align": true,
          "label-position": "top",
          "label-width": "100px"
        }, {
          default: withCtx(() => [
            createVNode(unref(FormItem), {
              label: _ctx.$t("login.form.mailInput"),
              prop: "username",
              size: "medium"
            }, {
              default: withCtx(() => [
                createVNode(unref(Input), {
                  modelValue: unref(createData).username,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(createData).username = $event),
                  placeholder: _ctx.$t("login.form.registerMail.placeholder")
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }, 8, ["label"]),
            createVNode(unref(FormItem), {
              label: _ctx.$t("login.form.passwordInput"),
              prop: "password",
              size: "medium"
            }, {
              default: withCtx(() => [
                createVNode(unref(Input), {
                  modelValue: unref(createData).password,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(createData).password = $event),
                  placeholder: _ctx.$t("login.form.registerPassword.placeholder"),
                  type: "password",
                  "show-password": ""
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }, 8, ["label"]),
            createVNode(unref(FormItem), {
              label: _ctx.$t("login.form.passwordConfirm"),
              prop: "passwordConfirm",
              size: "medium"
            }, {
              default: withCtx(() => [
                createVNode(unref(Input), {
                  modelValue: unref(createData).passwordConfirm,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(createData).passwordConfirm = $event),
                  placeholder: _ctx.$t("login.form.registerConfirmPassword.placeholder"),
                  type: "password",
                  "show-password": ""
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }, 8, ["label"]),
            createBaseVNode("div", _hoisted_2$3, [
              createVNode(unref(Link), {
                type: "primary",
                onClick: typeChange
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("login.form.change")), 1)
                ]),
                _: 1
              })
            ]),
            createVNode(unref(FormItem), { size: "medium" }, {
              default: withCtx(() => [
                createVNode(unref(Button), {
                  type: "primary",
                  class: "login-form-btn",
                  loading: unref(loading),
                  onClick: handleSubmit
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("login.form.register")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules", "validate-on-rule-change"])
      ]);
    };
  }
});
const loginRegister_vue_vue_type_style_index_0_scoped_99554533_lang = "";
const LoginRegister = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-99554533"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "login-lan-drop"
};
const _hoisted_2$2 = ["value", "onClick"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent$1({
  __name: "login-lang",
  setup(__props) {
    const locales = [...LOCALE_OPTIONS];
    const { changeLocale } = useLocale();
    const Language2 = index$4();
    const LangDrop = ref(false);
    const changeLangDrop = () => {
      LangDrop.value = !LangDrop.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(Button), {
          icon: unref(Language2),
          circle: "",
          onClick: changeLangDrop
        }, null, 8, ["icon"]),
        createBaseVNode("span", null, toDisplayString(_ctx.$t("login.icon.language")), 1),
        LangDrop.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
          (openBlock(), createElementBlock(Fragment, null, renderList(locales, (item, index3) => {
            return createBaseVNode("li", {
              key: index3,
              value: item.value,
              onClick: ($event) => unref(changeLocale)(locales[index3].value)
            }, toDisplayString(item.label), 9, _hoisted_2$2);
          }), 64))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const loginLang_vue_vue_type_style_index_0_scoped_ea2ebbb9_lang = "";
const LoginLang = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-ea2ebbb9"]]);
const _hoisted_1$1 = { class: "login-form-container" };
const _hoisted_2$1 = { class: "login-form-language" };
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent$1({
  __name: "login-form",
  setup(__props) {
    ref("first");
    let display = ref(false);
    const handle = (value) => {
      display.value = value;
    };
    provide("handle", handle);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(LoginLang)
        ]),
        unref(display) ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          createVNode(LoginRegister)
        ])) : createCommentVNode("", true),
        !unref(display) ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          createVNode(LoginMail)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const loginForm_vue_vue_type_style_index_0_scoped_19097b9e_lang = "";
const LoginForm = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-19097b9e"]]);
const _withScopeId = (n) => (pushScopeId("data-v-fe79e3e5"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container-login" };
const _hoisted_2 = { class: "content" };
const _hoisted_3 = { class: "login" };
const _hoisted_4 = { class: "login-header" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "login-logo" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "login-logo-img",
    alt: "Tiny Design",
    src: _imports_0
  }),
  /* @__PURE__ */ createBaseVNode("span", { class: "login-logo-text" }, "TinyPro of Vue")
], -1));
const _hoisted_6 = { class: "login-desc" };
const _hoisted_7 = { class: "footer" };
const _sfc_main = /* @__PURE__ */ defineComponent$1({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              _hoisted_5,
              createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("login.main.text")), 1)
            ]),
            createVNode(LoginForm)
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createVNode(Footer)
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_fe79e3e5_lang = "";
const index_vue_vue_type_style_index_1_scoped_fe79e3e5_lang = "";
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-fe79e3e5"]]);
export {
  index as default
};
