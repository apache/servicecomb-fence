import { u as openBlock, v as createElementBlock, D as renderSlot, F as mergeProps, d as defineComponent$1, a7 as reactive, r as ref, a8 as toRefs, k as resolveComponent, l as createVNode, w as createBaseVNode, E as toDisplayString, z as createCommentVNode, H as withCtx, V as unref, y as createBlock, J as createTextVNode, A as normalizeClass, Y as pushScopeId, Z as popScopeId } from "./vue.js";
import { o as on, f as off, Q as extend, d as defineComponent, b as $prefix, a as setup, m as axios, I as Input, B as Button, T as TINYModal, _ as _export_sfc$1 } from "./index.js";
import { P as Pager, R as Row, C as Col, G as Grid, a as Column } from "./index28.js";
import { F as FormItem, a as Form } from "./index26.js";
import "./index29.js";
import { G as GridToolbar } from "./index30.js";
import { S as Select } from "./index31.js";
import "./chevron-up.js";
import "./index27.js";
import "./warning-triangle.js";
const fullscreenApi = [
  "fullscreenElement",
  "fullscreenEnabled",
  "requestFullscreen",
  "exitFullscreen",
  "fullscreenchange",
  "fullscreenerror"
];
const fullscreenApiMoz = [
  "mozFullScreenElement",
  "mozFullScreenEnabled",
  "mozRequestFullScreen",
  "mozCancelFullScreen",
  "mozfullscreenchange",
  "mozfullscreenerror"
];
const fullscreenApiWebkit = [
  "webkitFullscreenElement",
  "webkitFullscreenEnabled",
  "webkitRequestFullscreen",
  "webkitExitFullscreen",
  "webkitfullscreenchange",
  "webkitfullscreenerror"
];
const fullscreenApiMs = [
  "msFullscreenElement",
  "msFullscreenEnabled",
  "msRequestFullscreen",
  "msExitFullscreen",
  "MSFullscreenChange",
  "MSFullscreenError"
];
const fullscreenApiMap = [fullscreenApi, fullscreenApiWebkit, fullscreenApiMoz, fullscreenApiMs];
const document$1 = typeof window !== "undefined" && typeof window.document !== "undefined" ? window.document : {};
let fullscreenEvents = null;
const getFullScreenEvents = () => {
  for (let i = 0, len = fullscreenApiMap.length; i < len; i++) {
    let eventName = fullscreenApiMap[i];
    if (eventName && eventName[1] in document$1) {
      fullscreenEvents = {};
      for (i = 0; i < eventName.length; i++) {
        fullscreenEvents[fullscreenApiMap[0][i]] = eventName[i];
      }
      return;
    }
  }
};
getFullScreenEvents();
const eventNameMap = {
  change: fullscreenEvents && fullscreenEvents.fullscreenchange,
  error: fullscreenEvents && fullscreenEvents.fullscreenerror
};
const screenfull = {
  request(element, options) {
    return new Promise((resolve, reject) => {
      const onFullscreenEntered = () => {
        this.off("change", onFullscreenEntered);
        resolve();
      };
      this.on("change", onFullscreenEntered);
      element = element || document$1.documentElement;
      if (element[fullscreenEvents && fullscreenEvents.requestFullscreen]) {
        const promiseReturn = element[fullscreenEvents && fullscreenEvents.requestFullscreen](options);
        if (promiseReturn instanceof Promise) {
          promiseReturn.then(onFullscreenEntered).catch(reject);
        }
      }
    });
  },
  exit() {
    return new Promise((resolve, reject) => {
      if (!this.isFullscreen) {
        resolve();
        return;
      }
      const onFullscreenExit = () => {
        this.off("change", onFullscreenExit);
        resolve();
      };
      this.on("change", onFullscreenExit);
      if (document$1[fullscreenEvents && fullscreenEvents.exitFullscreen]) {
        const promiseReturn = document$1[fullscreenEvents && fullscreenEvents.exitFullscreen]();
        if (promiseReturn instanceof Promise) {
          promiseReturn.then(onFullscreenExit).catch(reject);
        }
      }
    });
  },
  toggle(element, options) {
    return this.isFullscreen ? this.exit() : this.request(element, options);
  },
  onchange(callback) {
    this.on("change", callback);
  },
  onerror(callback) {
    this.on("error", callback);
  },
  on(event, callback) {
    const eventName = eventNameMap[event];
    if (eventName) {
      on(document$1, eventName, callback);
    }
  },
  off(event, callback) {
    const eventName = eventNameMap[event];
    if (eventName) {
      off(document$1, eventName, callback);
    }
  },
  raw: fullscreenEvents
};
Object.defineProperties(screenfull, {
  isFullscreen: {
    get() {
      return !!document$1[fullscreenEvents && fullscreenEvents.fullscreenElement];
    }
  },
  element: {
    enumerable: true,
    get() {
      return document$1[fullscreenEvents && fullscreenEvents.fullscreenElement];
    }
  },
  isEnabled: {
    enumerable: true,
    get() {
      return !!document$1[fullscreenEvents && fullscreenEvents.fullscreenEnabled];
    }
  }
});
var screenfull_default = screenfull;
const toggle = ({ state, api: api2 }) => (value) => {
  if (value === void 0) {
    if (state.isFullscreen) {
      api2.exit();
    } else {
      api2.request();
    }
  } else {
    value ? api2.request() : api2.exit();
  }
};
const request = ({ props, state, vm, sf, api: api2 }) => () => {
  const change = () => {
    if (state.isPageOnly) {
      state.isFullscreen = true;
      api2.onChangeFullScreen();
      off(document, "keyup", api2.keypressCallback);
      on(document, "keyup", api2.keypressCallback);
    } else {
      sf.off("change", api2.fullScreenCallback);
      sf.on("change", api2.fullScreenCallback);
      sf.request(props.teleport ? document.body : vm.$el);
    }
    if (props.teleport) {
      if (vm.$el.parentNode === document.body) {
        return;
      }
      state.__parentNode = vm.$el.parentNode;
      state.__token = document.createComment("fullscreen-token");
      state.__parentNode.insertBefore(state.__token, vm.$el);
      document.body.appendChild(vm.$el);
    }
  };
  props.beforeChange ? props.beforeChange(change) : change();
};
const exit = ({ state, api: api2, sf, props }) => () => {
  const change = () => {
    if (!state.isFullscreen) {
      return;
    }
    if (state.isPageOnly) {
      state.isFullscreen = false;
      api2.onChangeFullScreen();
      off(document, "keyup", api2.keypressCallback);
    } else {
      sf.exit();
    }
  };
  props.beforeChange ? props.beforeChange(change) : change();
};
const shadeClick = ({ props, vm, api: api2 }) => (e) => {
  if (e.target === vm.$el) {
    if (props.exitOnClickWrapper) {
      api2.exit();
    }
  }
};
const fullScreenCallback = ({ state, sf, api: api2 }) => () => {
  if (!sf.isFullscreen) {
    sf.off("change", api2.fullScreenCallback);
  }
  state.isFullscreen = sf.isFullscreen;
  api2.onChangeFullScreen();
};
const keypressCallback = (api2) => (e) => {
  if (e.key === "Escape") {
    api2.exit();
  }
};
const onChangeFullScreen = ({ props, state, vm, emit }) => () => {
  if (!state.isFullscreen) {
    if (props.teleport && state.__parentNode) {
      state.__parentNode.insertBefore(vm.$el, state.__token);
      state.__parentNode.removeChild(state.__token);
    }
  }
  emit("change", state.isFullscreen);
  emit("update:fullscreen", state.isFullscreen);
};
const enter = (api2) => () => {
  api2.request();
};
const getState = (state) => () => state.isFullscreen;
const computeWrapperStyle = ({ props, state }) => () => {
  let style = {};
  if ((state.isPageOnly || props.teleport) && state.isFullscreen) {
    Object.assign(style, {
      position: "fixed",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%"
    });
  }
  if (style && props.zIndex) {
    style.zIndex = props.zIndex;
  }
  return style;
};
const api$1 = [
  "state",
  "exit",
  "enter",
  "toggle",
  "request",
  "getState",
  "shadeClick",
  "keypressCallback",
  "fullScreenCallback",
  "onChangeFullScreen"
];
const renderless = (props, { reactive: reactive2, computed, watch }, { vm, emit }) => {
  const api2 = {};
  const state = reactive2({
    isFullscreen: false,
    isEnabled: false,
    support: computed(() => state.isEnabled),
    // 如果不支持浏览器全屏，改用网页全屏
    isPageOnly: computed(() => props.pageOnly || !screenfull_default.isEnabled),
    wrapperStyle: computed(() => api2.computeWrapperStyle())
  });
  Object.assign(api2, {
    state,
    getState: getState(state),
    enter: enter(api2),
    exit: exit({ state, api: api2, sf: screenfull_default, props }),
    toggle: toggle({ state, api: api2 }),
    keypressCallback: keypressCallback(api2),
    shadeClick: shadeClick({ props, vm, api: api2 }),
    request: request({ props, state, vm, sf: screenfull_default, api: api2 }),
    fullScreenCallback: fullScreenCallback({ state, sf: screenfull_default, api: api2 }),
    computeWrapperStyle: computeWrapperStyle({ props, state }),
    onChangeFullScreen: onChangeFullScreen({ props, state, vm, emit })
  });
  watch(
    () => props.fullscreen,
    (value) => {
      if (value !== state.isFullscreen) {
        value ? api2.request() : api2.exit();
      }
    },
    { lazy: true }
  );
  state.isEnabled = screenfull_default.isEnabled;
  return api2;
};
const defaults = {
  callback: () => void 0,
  fullscreenClass: "fullscreen",
  pageOnly: false,
  teleport: false
};
let token;
let parentNode;
const setStyle = (element, style) => {
  element.style.position = style.position;
  element.style.left = style.left;
  element.style.top = style.top;
  element.style.width = style.width;
  element.style.height = style.height;
  element.style.zIndex = style.zIndex;
};
const resetElement = (api2) => {
  const targetEle = api2.targetElement;
  if (targetEle) {
    targetEle.classList.remove(api2.opts.fullscreenClass);
    if (api2.opts.teleport || api2.opts.pageOnly) {
      if (api2.opts.teleport && parentNode) {
        parentNode.insertBefore(targetEle, token);
        parentNode.removeChild(token);
      }
      if (targetEle.__styleCache) {
        setStyle(targetEle, targetEle.__styleCache);
      }
    }
  }
};
const setTargetStyle = (target, options) => {
  const { position, left, top, width, height, zIndex } = target.style;
  target.classList.add(options.fullscreenClass);
  if (options.teleport || options.pageOnly) {
    const style = {
      position: "fixed",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%"
    };
    target.__styleCache = { position, left, top, width, height, zIndex };
    options.zIndex && (style.zIndex = options.zIndex);
    setStyle(target, style);
  }
};
const getOptions = (screenfull2, options, target) => {
  options = extend({}, defaults, options);
  if (target === document.body) {
    options.teleport = false;
  }
  if (!screenfull2.isEnabled) {
    options.pageOnly = true;
  }
  return options;
};
const api = {
  targetElement: null,
  opts: null,
  isEnabled: screenfull_default.isEnabled,
  isFullscreen: false,
  toggle(target, options, force) {
    if (force === void 0) {
      return !this.isFullscreen ? this.request(target, options) : this.exit();
    }
    return force ? this.request(target, options) : this.exit();
  },
  request(targetEle, options) {
    if (this.isFullscreen) {
      return Promise.resolve();
    }
    if (!targetEle) {
      targetEle = document.body;
    }
    this.opts = getOptions(screenfull_default, options, targetEle);
    setTargetStyle(targetEle, this.opts);
    if (this.opts.teleport) {
      parentNode = targetEle.parentNode;
      if (parentNode) {
        token = document.createComment("fullscreen-token");
        parentNode.insertBefore(token, targetEle);
        document.body.appendChild(targetEle);
      }
    }
    if (this.opts.pageOnly) {
      const keypressCallback2 = (e) => {
        if (e.key === "Escape") {
          off(document, "keyup", keypressCallback2);
          this.exit();
        }
      };
      this.isFullscreen = true;
      this.targetElement = targetEle;
      off(document, "keyup", keypressCallback2);
      on(document, "keyup", keypressCallback2);
      if (this.opts.callback) {
        this.opts.callback(this.isFullscreen);
      }
      return Promise.resolve();
    } else {
      const fullScreenCallback2 = () => {
        if (!screenfull_default.isFullscreen) {
          screenfull_default.off("change", fullScreenCallback2);
          resetElement(this);
        }
        this.isFullscreen = screenfull_default.isFullscreen;
        this.targetElement = !this.opts.teleport ? screenfull_default.targetElement : targetEle || null;
        if (this.opts.callback) {
          this.opts.callback(screenfull_default.isFullscreen);
        }
      };
      screenfull_default.on("change", fullScreenCallback2);
      return screenfull_default.request(this.opts.teleport ? document.body : targetEle);
    }
  },
  exit() {
    if (!this.isFullscreen) {
      return Promise.resolve();
    }
    if (this.opts.pageOnly) {
      resetElement(this);
      this.isFullscreen = false;
      this.targetElement = null;
      if (this.opts.callback) {
        this.opts.callback(this.isFullscreen);
      }
      return Promise.resolve();
    }
    return screenfull_default.exit();
  }
};
api.support = api.isEnabled;
api.getState = () => api.isFullscreen;
api.enter = api.request;
var apis_default = api;
const index$1 = "";
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
var _export_sfc = function _export_sfc2(sfc, props) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose(props), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$1 = defineComponent({
  name: $prefix + "Fullscreen",
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    },
    exitOnClickWrapper: {
      type: Boolean,
      default: true
    },
    fullscreenClass: {
      type: String,
      default: ""
    },
    pageOnly: {
      type: Boolean,
      default: false
    },
    teleport: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    },
    beforeChange: Function
  },
  setup: function setup$1(props, context) {
    return setup({
      props,
      context,
      renderless,
      api: api$1,
      mono: true
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _class;
  return openBlock(), createElementBlock(
    "div",
    mergeProps({
      ref: "wrapper",
      class: "tiny-fullscreen"
    }, _ctx.$attrs, {
      style: _ctx.state.wrapperStyle,
      class: (_class = {}, _class[_ctx.fullscreenClass] = _ctx.state.isFullscreen, _class),
      onClick: _cache[0] || (_cache[0] = function($event) {
        return _ctx.shadeClick($event);
      }),
      onKeyup: _cache[1] || (_cache[1] = function() {
        return _ctx.exit && _ctx.exit.apply(_ctx, arguments);
      })
    }),
    [renderSlot(_ctx.$slots, "default")],
    16
    /* FULL_PROPS */
  );
}
var Fullscreen = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
var version = "3.16.0";
var apis = ["exit", "enter", "element", "getState", "isEnabled", "isFullscreen", "options", "request", "support", "toggle"];
apis.forEach(function(api2) {
  if (apis_default[api2] && !Fullscreen[api2]) {
    Fullscreen[api2] = apis_default[api2];
  }
});
Fullscreen.install = function(Vue) {
  Vue.component(Fullscreen.name, Fullscreen);
};
Fullscreen.version = version;
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAHCAYAAAA4R3wZAAABCklEQVQoU22QP0sCcRzGP1/P/kgHDb2F9oIa8pziMq8zaAvqNQQODRI0GEJDDjU1tDS0CS3BKWGnS/wqagl6Ay2NQVEYduc3GgwTn/Hh84GHRxiSemg2FMqAKFrKu5mzQUwGi+DKFEQ4BJ6BCJhGpegvpQ/62X9i0DQ7ouwr8piMusuWlYw7El8Cc4ru5d1MqSf/iUF4UxZ0F7hPfON5nvP6CzUaD5NRolNTcFSp+G66KCIqqir15m0FdBvR65F4bDWbnX/rn9Vqteyv7viFoouqcuy7C1tSC80RUABCK5pYy+VmPocdVjUmZbc5B1ZQTiQIzZ3Ay0eKzXXHaQ+Tel21+jRqT72fArM/mhth5VHyw18AAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAHCAYAAAA4R3wZAAABCUlEQVQoU33QPUtCARTG8f/jRcPKpS/REtTQoi1hycWEWsK1qYiGtnAqqiGq2aAgaHdoEW6LL0taw21rbYqWQOjFEG7SCSvBXugZz3l+HDjyyvVz0G2zEVvIZkcC/onv++H7h+AQMSavVD9CLIG8ZtTms4lE6y9bKFxHYkNPBRNzoBOZmbzyZV6yFaDitAdmXXf0pRcXi36/Ew1OEa6w4+fG3bI6hU98sSexBtTCb5FMKjX+2NlVq9XBlvUVMSaBfDoZX5VkH7Abr1TfRqwDVxFzXDOn/RoKzoA4sv2Z5ESu2/0GO0OvXMuBdoEboA0MC22mp+JbvUd+wS+8COyAQmZsZKYTBz8f9g5qeF7nvFWQIgAAAABJRU5ErkJggg==";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABKElEQVQoU4WST0vDQBDF36RJz7nrF9NrUlAPTYqC+VNwFzS5tamo1JiKXjzEj9SreBBE6kUEcWRXk26r4J52Z94w7zezlBUVwzhJ6JP5Xs/TMsBZEvZSU9zcs2KWAxypd1NwDGAIwijuewdEpLsKISzH3Tgn0A4zSyI60gXKRlZcjQEKGTxNAn+vLEv7+a1zA2BbidNBTyht65eZKSuup5bF9vvLQw+A1XU3T5n5SYkbeyuAqkhKSUKIz79YNIOZUAU6uGSwhRAfpmbV0qS6sIi6Ud/zpbx3HPf1jkDzJPTi1lIDnRfViIEBgMs48Ha/oe1bgLeYcJIG/lBD/+xBj5WAcRR4+42luq4788fF2a+xqnZMyNPAT9Zh9fQms5yAQ3Nxre6/r/EFIFKalUqbcTIAAAAASUVORK5CYII=";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAA60lEQVQoU52RP2vCUBTFz+ngKK4d/Ax+m+LiZAoKooIIiYI+W5Ooi0kFl7xsDg79cl2F5parRFIJxfqmyznvd/9y9ZE2sm8Znb6qjjEvJ5Q8Y8xTpVa3YPZJP7ZNCg6gHL2+0wrjNJsMHSoXRFY0DiK7B9Al4J6NME47IrIHuAbELQIAV6qRMvMGr+9n4JItcQGGGv8GAJLGG7QX6l1LF1u/BXJP9WuFsmHLtMcA3ca/W/Jju6RgetfQYZRsBByLyILkvDh0ruWb0qPsAPQA6Me3/FjFw/nbxGgihRhEaRuQ58nQWf61KYXU/wGrn32WXzmHCAAAAABJRU5ErkJggg==";
function queryEmployeeList(params) {
  return axios.post("/api/employee/getEmployee", params);
}
function deleteEmployee(id) {
  return axios.delete(`/api/employee/delete?id=${id}`);
}
const _withScopeId = (n) => (pushScopeId("data-v-6e43c7c3"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container-list" };
const _hoisted_2 = { class: "contain" };
const _hoisted_3 = { class: "contain-head" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", null, null, -1));
const _hoisted_5 = { class: "contain-img" };
const _hoisted_6 = { class: "contain-text" };
const _hoisted_7 = { class: "search-btn" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "bottom-line" }, [
  /* @__PURE__ */ createBaseVNode("hr")
], -1));
const _hoisted_9 = { class: "tiny-fullscreen-scroll" };
const _hoisted_10 = { class: "tiny-fullscreen-wrapper" };
const _hoisted_11 = { class: "btn" };
const _hoisted_12 = { class: "screen" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "status-dot" }, null, -1));
const _hoisted_14 = { class: "status-text" };
const _hoisted_15 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent$1({
  __name: "index",
  setup(__props) {
    const state = reactive({
      loading: false,
      filterOptions: {}
    });
    const pagerConfig = reactive({
      component: Pager,
      attrs: {
        currentPage: 1,
        pageSize: 10,
        pageSizes: [10, 20],
        total: 10,
        layout: "total, prev, pager, next, jumper, sizes"
      }
    });
    let tableData = ref([]);
    const taskGrid = ref();
    const { loading, filterOptions } = toRefs(state);
    const statusOptions = [
      {
        value: "0",
        label: "offline"
      },
      {
        value: "1",
        label: "online"
      },
      {
        value: "2",
        label: "doing"
      }
    ];
    async function fetchData(params = {
      pageIndex: 1,
      pageSize: 10,
      status: ""
    }) {
      const { ...rest } = filterOptions.value;
      const queryParmas = {
        searchInfo: rest,
        ...params
      };
      state.loading = true;
      try {
        const { data } = await queryEmployeeList(queryParmas);
        const { data: list, total } = data;
        tableData.value = list;
        return {
          result: list,
          page: { total }
        };
      } finally {
        state.loading = false;
      }
    }
    const fetchDataOption = reactive({
      api: ({ page }) => {
        const { currentPage, pageSize } = page;
        return fetchData({
          pageIndex: currentPage,
          pageSize
        });
      }
    });
    const handleDelete = (id) => {
      deleteEmployee(id).then((res) => {
        TINYModal.message({
          message: "已删除",
          status: "success"
        });
      });
    };
    function getStatusText(status) {
      var _a;
      return ((_a = statusOptions.find(({ value }) => status === value)) == null ? void 0 : _a.label) || "";
    }
    function reloadGrid() {
      taskGrid == null ? void 0 : taskGrid.value.handleFetch("reload");
      fetchData();
    }
    function handleFormReset() {
      state.filterOptions = {};
      reloadGrid();
    }
    const setCollapse = ref(true);
    function collapse() {
      setCollapse.value = false;
    }
    function extend2() {
      setCollapse.value = true;
    }
    const toCsvEvent = () => {
      taskGrid.value.exportCsv({
        filename: "table.csv",
        original: true,
        isHeader: false,
        data: tableData.value
      });
    };
    const fullscreen = ref(false);
    const toggle2 = () => {
      fullscreen.value = !fullscreen.value;
    };
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_Breadcrumb, { items: ["menu.list", "menu.list.searchTable"] }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("span", null, toDisplayString(_ctx.$t("searchTable.form.create")), 1),
            _hoisted_4,
            createBaseVNode("div", _hoisted_5, [
              setCollapse.value ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: _imports_0,
                alt: "collapse",
                onClick: collapse
              })) : createCommentVNode("", true),
              !setCollapse.value ? (openBlock(), createElementBlock("img", {
                key: 1,
                src: _imports_1,
                alt: "expand",
                onClick: extend2
              })) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_6, toDisplayString(setCollapse.value ? _ctx.$t("searchTable.form.collapse") : _ctx.$t("searchTable.form.extend")), 1)
          ]),
          createVNode(unref(Form), {
            model: unref(filterOptions),
            "label-position": "right",
            "label-width": "100px",
            class: "filter-form",
            size: "small"
          }, {
            default: withCtx(() => [
              createVNode(unref(Row), {
                flex: true,
                justify: "center",
                class: "col"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), {
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("searchTable.columns.name")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: unref(filterOptions).name,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(filterOptions).name = $event),
                            placeholder: _ctx.$t("searchTable.form.input")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Col), {
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("searchTable.columns.department"),
                        prop: "id"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: unref(filterOptions).department,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(filterOptions).department = $event),
                            placeholder: _ctx.$t("searchTable.form.input")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Col), {
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("searchTable.columns.role")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: unref(filterOptions).roles,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(filterOptions).roles = $event),
                            placeholder: _ctx.$t("searchTable.form.input")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              setCollapse.value ? (openBlock(), createBlock(unref(Row), {
                key: 0,
                flex: true,
                justify: "center",
                class: "col"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), { span: 4 }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("searchTable.columns.workname")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: unref(filterOptions).workbenchName,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(filterOptions).workbenchName = $event),
                            placeholder: _ctx.$t("searchTable.form.input")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Col), {
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("searchTable.columns.enablement"),
                        prop: "id"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: unref(filterOptions).project,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(filterOptions).project = $event),
                            placeholder: _ctx.$t("searchTable.form.input")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Col), {
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("searchTable.columns.type")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: unref(filterOptions).type,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(filterOptions).type = $event),
                            placeholder: _ctx.$t("searchTable.form.input")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(Row), {
                flex: true,
                justify: "end",
                class: "col"
              }, {
                default: withCtx(() => [
                  setCollapse.value ? (openBlock(), createBlock(unref(Col), {
                    key: 0,
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("searchTable.columns.study")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: unref(filterOptions).address,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(filterOptions).address = $event),
                            placeholder: _ctx.$t("searchTable.form.input")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  setCollapse.value ? (openBlock(), createBlock(unref(Col), {
                    key: 1,
                    span: 4
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("searchTable.form.status")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Select), {
                            modelValue: unref(filterOptions).status,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(filterOptions).status = $event),
                            options: statusOptions
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(unref(Col), { span: 4 }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_7, [
                            createVNode(unref(Button), {
                              type: "primary",
                              onClick: reloadGrid
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("searchTable.form.search")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Button), { onClick: handleFormReset }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("searchTable.form.reset")), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"]),
          _hoisted_8,
          createVNode(unref(Fullscreen), {
            teleport: true,
            "page-only": true,
            "z-index": 999,
            fullscreen: fullscreen.value,
            "onUpdate:fullscreen": _cache[8] || (_cache[8] = ($event) => fullscreen.value = $event)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createVNode(unref(Grid), {
                    ref_key: "taskGrid",
                    ref: taskGrid,
                    "fetch-data": fetchDataOption,
                    pager: pagerConfig,
                    loading: unref(loading),
                    size: "medium",
                    "auto-resize": true
                  }, {
                    toolbar: withCtx(() => [
                      createVNode(unref(GridToolbar), null, {
                        buttons: withCtx(() => [
                          createBaseVNode("div", _hoisted_11, [
                            createVNode(unref(Button), { onClick: toCsvEvent }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("searchTable.operation.import")), 1)
                              ]),
                              _: 1
                            }),
                            createBaseVNode("div", _hoisted_12, [
                              !fullscreen.value ? (openBlock(), createElementBlock("img", {
                                key: 0,
                                src: _imports_2,
                                class: "screen-image",
                                onClick: toggle2
                              })) : createCommentVNode("", true),
                              fullscreen.value ? (openBlock(), createElementBlock("img", {
                                key: 1,
                                src: _imports_3,
                                class: "screen-image",
                                onClick: toggle2
                              })) : createCommentVNode("", true),
                              createBaseVNode("span", { onClick: toggle2 }, toDisplayString(fullscreen.value ? _ctx.$t("searchTable.collapse.restores") : _ctx.$t("searchTable.collapse.full")), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(unref(Column), {
                        field: "name",
                        title: _ctx.$t("searchTable.columns.name"),
                        align: "center"
                      }, null, 8, ["title"]),
                      createVNode(unref(Column), {
                        field: "employeeNo",
                        title: _ctx.$t("searchTable.columns.number"),
                        align: "center"
                      }, null, 8, ["title"]),
                      createVNode(unref(Column), {
                        field: "departmentLevel",
                        title: _ctx.$t("searchTable.columns.filterType"),
                        align: "center"
                      }, null, 8, ["title"]),
                      createVNode(unref(Column), {
                        field: "department",
                        title: _ctx.$t("searchTable.columns.department"),
                        align: "center"
                      }, null, 8, ["title"]),
                      createVNode(unref(Column), {
                        field: "status",
                        title: _ctx.$t("searchTable.form.status"),
                        align: "center"
                      }, {
                        default: withCtx(({ row }) => [
                          createBaseVNode("span", {
                            class: normalizeClass(["status", {
                              "status-closed": row.status === "0",
                              "status-finished": row.status === "1"
                            }])
                          }, [
                            _hoisted_13,
                            createBaseVNode("span", _hoisted_14, toDisplayString(getStatusText(row.status)), 1)
                          ], 2)
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode(unref(Column), {
                        field: "workbenchName",
                        title: _ctx.$t("searchTable.columns.workname"),
                        align: "center"
                      }, null, 8, ["title"]),
                      createVNode(unref(Column), {
                        field: "project",
                        title: _ctx.$t("searchTable.columns.enablement"),
                        align: "center"
                      }, null, 8, ["title"]),
                      createVNode(unref(Column), {
                        field: "type",
                        title: _ctx.$t("searchTable.columns.type"),
                        align: "center"
                      }, null, 8, ["title"]),
                      createVNode(unref(Column), {
                        field: "address",
                        title: _ctx.$t("searchTable.columns.study"),
                        align: "center"
                      }, null, 8, ["title"]),
                      createVNode(unref(Column), {
                        field: "roles",
                        title: _ctx.$t("searchTable.columns.role"),
                        align: "center"
                      }, null, 8, ["title"]),
                      createVNode(unref(Column), {
                        field: "lastUpdateUser",
                        title: _ctx.$t("searchTable.columns.updatesperson"),
                        align: "center"
                      }, null, 8, ["title"]),
                      createVNode(unref(Column), {
                        field: "createTime",
                        title: _ctx.$t("searchTable.columns.createdTime"),
                        align: "center"
                      }, null, 8, ["title"]),
                      createVNode(unref(Column), {
                        title: _ctx.$t("searchTable.columns.operations"),
                        align: "center"
                      }, {
                        default: withCtx((data) => [
                          createBaseVNode("a", {
                            class: "operation",
                            onClick: ($event) => handleDelete(data.row.id)
                          }, toDisplayString(_ctx.$t("searchTable.columns.operations.delete")), 9, _hoisted_15)
                        ]),
                        _: 1
                      }, 8, ["title"])
                    ]),
                    _: 1
                  }, 8, ["fetch-data", "pager", "loading"])
                ])
              ])
            ]),
            _: 1
          }, 8, ["fullscreen"])
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_6e43c7c3_lang = "";
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-6e43c7c3"]]);
export {
  index as default
};
