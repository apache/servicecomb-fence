import { s as svg, aL as isBrowser, o as on, a as off, aM as getObj, aJ as omitText, aN as isKorean, aO as find, aP as isEqual$1, aQ as isEmptyObject, p as popup_manager_default, z as __spreadProps, A as __spreadValues, Z as debounce_default, aR as getDataset, C as extend, aS as browser_default, aT as BROWSER_NAME, aH as isNull, E as isNumber, d as defineComponent, $ as $prefix, aU as index$b, aV as index$c, aW as index$d, ay as Checkbox, j as props, f as setup, l as $props, m as $setup, aX as toObject, h, y as vue_popper_default, aY as isObject, aZ as typeOf, a_ as index$f, e as index$g, i as index$h, I as Input, B as Button, ak as t, a$ as index$j, an as index$k, al as Tooltip, b0 as throttle_default, a8 as directive, af as clickoutside_default, b1 as Tree, b2 as index$l, b3 as index$o, ag as index$p } from "./index.js";
import { H as singleton_default, i as index$e, b as index$i, T as Tag, G as Grid, J as index$m, K as index$n } from "./index15.js";
import { u as openBlock, v as createElementBlock, w as createBaseVNode, k as resolveComponent, I as withDirectives, L as vShow, l as createVNode, z as createCommentVNode, y as createBlock, B as resolveDynamicComponent, D as renderSlot, E as toDisplayString, A as normalizeClass, P as withModifiers, G as normalizeStyle, H as withCtx, T as Transition, ac as vModelText, F as mergeProps, Q as withKeys, M as Fragment, N as renderList, J as createTextVNode, a9 as createSlots, V as resolveDirective, S as toHandlers, a8 as reactive$1 } from "./vue.js";
var _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$a = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "copy_svg__st0",
    d: "m21.5 5.6-5-5.1-.3-.3s-.1 0-.1-.1H16c-.2 0-.4-.1-.7-.1H7c-.9 0-2 1.1-2 2v1H4c-.9 0-2 1.1-2 2v17c0 .9 1.1 2 2 2h13c.9 0 2-1.1 2-2v-1h1c.9 0 2-1.1 2-2V7c0-.4-.2-1.1-.5-1.4zM16 3l3 3h-3V3zm1 19H4V5h1v14c0 .9 1.2 2 2 2h10v1zm3-3H7V2h7v4c0 .9 1.1 2 2 2h4v11zm-5-9c0-.6-.4-1-.8-1H9.9c-.5 0-.9.4-.9 1s.4 1 .8 1h4.3c.5 0 .9-.4.9-1zm3 3c0-.6-.4-1-.8-1H9.9c-.5 0-.8.4-.8 1s.4 1 .8 1h7.3c.4 0 .8-.4.8-1zm-1 3c0-.6-.4-1-.9-1H9.9c-.5 0-.9.4-.9 1s.4 1 .9 1h6.2c.5 0 .9-.4.9-1z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$9 = [_hoisted_2$a];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, [].concat(_hoisted_3$9));
}
var Copy = {
  render: render$1
};
var index$a = function index2() {
  return svg({
    name: "IconCopy",
    component: Copy
  })();
};
var _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$9 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "plus_svg__st0",
    d: "M20.2 11.2h-7.5V3.9c0-.5-.4-.8-.8-.8s-.8.4-.8.8v7.3H3.8c-.5 0-.8.4-.8.8s.4.8.8.8h7.3v7.3c0 .5.4.8.8.8s.8-.4.8-.8v-7.3h7.5c.5 0 .8-.4.8-.8s-.3-.8-.8-.8z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$8 = [_hoisted_2$9];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, [].concat(_hoisted_3$8));
}
var Plus = {
  render
};
var index$9 = function index22() {
  return svg({
    name: "IconPlus",
    component: Plus
  })();
};
const isServer$2 = typeof window === "undefined";
var scroll_into_view_default = (container, selected) => {
  if (isServer$2) {
    return;
  }
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let { offsetParent, offsetTop, offsetHeight } = selected;
  while (offsetParent && container !== offsetParent && container.contains(offsetParent)) {
    offsetParents.push(offsetParent);
    offsetParent = offsetParent.offsetParent;
  }
  const top = offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
};
class Memorize {
  constructor(value, options = {}) {
    if (value && typeof value === "object") {
      options = value;
    } else {
      value = [];
    }
    if (typeof options.key !== "string" || !options.key) {
      throw new Error("Memorize Initialization error.");
    }
    this._prefix = "tiny_memorize_";
    this._customField1 = "frequency";
    this._customField2 = "time";
    this._sortBy = (options.sortBy || "frequency").toUpperCase();
    this._sort = (options.sort || "desc").toUpperCase();
    this._dataKey = options.dataKey || "value";
    this._highlightClass = options.highlightClass || "memorize-highlight";
    this._highlightNum = options.highlightNum || Infinity;
    this._cacheNum = options.cacheNum || Infinity;
    this._serialize = options.serialize || JSON.stringify;
    this._deserialize = options.deserialize || JSON.parse;
    this.setKey(options.key);
    this.assemble(value);
  }
  setKey(storeKey) {
    this._storeKey = this._prefix + (storeKey || Number(/* @__PURE__ */ new Date()));
  }
  getValue(isSort = true) {
    const storeVlue = window.localStorage[this._storeKey] || "";
    if (storeVlue) {
      try {
        const list = this._deserialize(storeVlue);
        return isSort ? this.sort(list) : list;
      } catch (e) {
        return [];
      }
    }
    return [];
  }
  setValue(value) {
    try {
      window.localStorage.setItem(this._storeKey, this._serialize(value));
    } catch (e) {
      throw new Error("Memorize set localStorage error.");
    }
  }
  clear() {
    window.localStorage.removeItem(this._storeKey);
  }
  add(dataKey) {
    const list = this.getValue(false);
    const newData = {
      key: dataKey
    };
    newData[this._customField1] = 1;
    newData[this._customField2] = Number(/* @__PURE__ */ new Date());
    if (list.length < this._cacheNum) {
      list.push(newData);
      this.setValue(list);
    }
  }
  updateByKey(dataKey) {
    let isChanged = false;
    const list = this.getValue(false);
    list.some((item) => {
      if (item.key === dataKey) {
        item[this._customField1] = (item[this._customField1] || 0) + 1;
        item[this._customField2] = Number(/* @__PURE__ */ new Date());
        isChanged = true;
        return true;
      }
      return false;
    });
    isChanged ? this.setValue(list) : this.add(dataKey);
  }
  sort(list) {
    if (Array.isArray(list)) {
      return list.sort((x, y) => {
        const isDesc = this._sort === "DESC";
        const compare = isDesc ? [-1, 1] : [1, -1];
        const sortField = this._sortBy === "FREQUENCY" ? this._customField1 : this._customField2;
        const xField = x[sortField];
        const yField = y[sortField];
        if (isNaN(xField)) {
          return isDesc ? -1 : 1;
        } else if (isNaN(yField)) {
          return -1;
        }
        return xField > yField ? compare[0] : compare[1];
      });
    } else {
      return list;
    }
  }
  assemble(list) {
    const storeValue = this.getValue(true);
    if (!(Array.isArray(list) && list.length) || !storeValue.length) {
      return list;
    }
    let matchCount = 0;
    const handler = (storeItem) => (listItem, index3) => {
      if (listItem[this._dataKey] === storeItem.key) {
        matchCount++;
        list.splice(index3, 1);
        if (matchCount <= this._highlightNum) {
          listItem._highlightClass = this._highlightClass;
        }
        list.unshift(listItem);
        return true;
      }
      return false;
    };
    for (let i = storeValue.length - 1; i > -1; i--) {
      const storeItem = storeValue[i];
      list.some(handler(storeItem));
    }
    return list;
  }
}
var memorize_default = Memorize;
const MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  const getIndex = (arr, key) => {
    let result = -1;
    arr.some((entry, index23) => {
      if (entry[0] === key) {
        result = index23;
        return true;
      }
      return false;
    });
    return result;
  };
  return function() {
    function obClass() {
      this.__entries__ = [];
    }
    Object.defineProperty(obClass.prototype, "size", {
      get() {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true
    });
    obClass.prototype.get = function(key) {
      const index23 = getIndex(this.__entries__, key);
      const entry = this.__entries__[index23];
      return entry && entry[1];
    };
    obClass.prototype.set = function(key, value) {
      const index23 = getIndex(this.__entries__, key);
      if (~index23) {
        this.__entries__[index23][1] = value;
      } else {
        this.__entries__.push([key, value]);
      }
    };
    obClass.prototype.delete = function(key) {
      const entries = this.__entries__;
      const index23 = getIndex(entries, key);
      if (~index23) {
        entries.splice(index23, 1);
      }
    };
    obClass.prototype.clear = function() {
      this.__entries__.splice(0);
    };
    obClass.prototype.has = function(key) {
      return !!~getIndex(this.__entries__, key);
    };
    obClass.prototype.forEach = function(callback, ctx) {
      if (ctx === void 0) {
        ctx = null;
      }
      for (let _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        const entry = _a[_i];
        callback.call(ctx, entry[1], entry[0]);
      }
    };
    return obClass;
  }();
}();
const func = isBrowser ? window.Function : global.Function;
const global$1 = function() {
  const isMath = (val) => val.Math === Math;
  if (typeof global !== "undefined" && isMath(global)) {
    return global;
  }
  if (typeof self !== "undefined" && isMath(self)) {
    return self;
  }
  if (typeof window !== "undefined" && isMath(window)) {
    return window;
  }
  return func("return this")();
}();
const requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(() => callback(Date.now()), 1e3 / 60);
  };
}();
let trailingTimeout = 2;
function throttle(callback, delayTime) {
  let leading = false;
  let trailing = false;
  let lastCallTime = 0;
  let proxy;
  const resolvePending = () => {
    if (leading) {
      leading = false;
      callback();
    }
    trailing && proxy();
  };
  const timeoutCallback = () => {
    requestAnimationFrame$1(resolvePending);
  };
  proxy = () => {
    const timeStamps = Date.now();
    if (leading) {
      if (timeStamps - lastCallTime < trailingTimeout) {
        return;
      }
      trailing = true;
    } else {
      leading = true;
      trailing = false;
      setTimeout(timeoutCallback, delayTime);
    }
    lastCallTime = timeStamps;
  };
  return proxy;
}
const REFRESH_DELAY = 20;
const transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
const mutationObserverSupported = typeof MutationObserver !== "undefined";
const ResizeObserverController = function() {
  function ResizeObserverController2() {
    this.observers_ = [];
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  ResizeObserverController2.prototype.addObserver = function(observer) {
    !~this.observers_.indexOf(observer) && this.observers_.push(observer);
    !this.connected_ && this.connect_();
  };
  ResizeObserverController2.prototype.removeObserver = function(observer) {
    const observers2 = this.observers_;
    const index23 = observers2.indexOf(observer);
    ~index23 && observers2.splice(index23, 1);
    if (!observers2.length && this.connected_) {
      this.disconnect_();
    }
  };
  ResizeObserverController2.prototype.refresh = function() {
    const changesDetected = this.updateObservers_();
    changesDetected && this.refresh();
  };
  ResizeObserverController2.prototype.updateObservers_ = function() {
    const activeObservers = this.observers_.filter((observer) => {
      observer.gatherActive();
      return observer.hasActive();
    });
    activeObservers.forEach((observer) => observer.broadcastActive());
    return activeObservers.length > 0;
  };
  ResizeObserverController2.prototype.connect_ = function() {
    if (!isBrowser || this.connected_) {
      return;
    }
    on(document, "transitionend", this.onTransitionEnd_);
    on(window, "resize", this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      const options = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      };
      this.mutationsObserver_.observe(document, options);
    } else {
      on(document, "DOMSubtreeModified", this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  ResizeObserverController2.prototype.disconnect_ = function() {
    if (!isBrowser || !this.connected_) {
      return;
    }
    off(document, "transitionend", this.onTransitionEnd_);
    off(window, "resize", this.refresh);
    this.mutationsObserver_ && this.mutationsObserver_.disconnect();
    if (this.mutationEventsAdded_) {
      off(document, "DOMSubtreeModified", this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
    const _b = _a.propertyName;
    const propertyName = _b === void 0 ? "" : _b;
    const isReflowProperty = transitionKeys.some((key) => !!~propertyName.indexOf(key));
    isReflowProperty && this.refresh();
  };
  ResizeObserverController2.getInstance = function() {
    if (!this._instance) {
      this._instance = new ResizeObserverController2();
    }
    return this._instance;
  };
  ResizeObserverController2._instance = null;
  return ResizeObserverController2;
}();
const defineConfigurable = function(target, props2) {
  for (let i = 0, a = Object.keys(props2); i < a.length; i++) {
    const key = a[i];
    Object.defineProperty(target, key, {
      value: props2[key],
      configurable: true,
      writable: false,
      enumerable: false
    });
  }
  return target;
};
const createRectInit = function(x, y, width, height) {
  return { x, y, width, height };
};
const getWindowOf = function(target) {
  const ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
const emptyRect = createRectInit(0, 0, 0, 0);
const toFloat = (value) => parseFloat(value) || 0;
const getBordersSize = function(styles) {
  let positions = [];
  for (let i = 1; i < arguments.length; i++) {
    positions[i - 1] = arguments[i];
  }
  return positions.reduce((size, position) => {
    const value = styles[`border-${position}-width`];
    return size + toFloat(value);
  }, 0);
};
const getPaddings = function(styles) {
  const positions = ["top", "right", "bottom", "left"];
  let paddings = {};
  for (let i = 0, pos = positions; i < pos.length; i++) {
    const position = pos[i];
    const value = styles[`padding-${position}`];
    paddings[position] = toFloat(value);
  }
  return paddings;
};
const getSVGContentRect = function(target) {
  const bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
};
const isDocumentElement = function(target) {
  return target === getWindowOf(target).document.documentElement;
};
const getHTMLElementContentRect = function(target) {
  const clientWidth = target.clientWidth;
  const clientHeight = target.clientHeight;
  if (!clientHeight && !clientWidth) {
    return emptyRect;
  }
  const styles = getWindowOf(target).getComputedStyle(target);
  const paddings = getPaddings(styles);
  const vertPad = paddings.top + paddings.bottom;
  const horizPad = paddings.left + paddings.right;
  let width = toFloat(styles.width);
  let height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
  }
  if (!isDocumentElement(target)) {
    const horizScrollbar = Math.round(height + vertPad) - clientHeight;
    const vertScrollbar = Math.round(width + horizPad) - clientWidth;
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
};
const isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return (target) => target instanceof getWindowOf(target).SVGGraphicsElement;
  }
  return (target) => target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
}();
const getContentRect = function(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
};
const createReadOnlyRect = function(_a) {
  const x = _a.x;
  const y = _a.y;
  const width = _a.width;
  const height = _a.height;
  const Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  const rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
};
const ResizeObservation = function() {
  function ResizeObservation2(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  ResizeObservation2.prototype.broadcastRect = function() {
    const rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  ResizeObservation2.prototype.isActive = function() {
    const rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  return ResizeObservation2;
}();
const ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target, rectInit) {
    const contentRect = createReadOnlyRect(rectInit);
    defineConfigurable(this, { target, contentRect });
  }
  return ResizeObserverEntry2;
}();
const ResizeObserverSPI = function() {
  function ResizeObserverSPI2(callback, controller, callbackCtx) {
    this.observations_ = new MapShim();
    this.activeObservations_ = [];
    if (typeof callback !== "function") {
      throw new TypeError("[TINY-Resize] The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  ResizeObserverSPI2.prototype.observe = function(target) {
    if (!arguments.length) {
      throw new TypeError("[TINY-Resize] 1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('[TINY-Resize] parameter 1 is not of type "Element".');
    }
    const obserVations = this.observations_;
    if (obserVations.has(target)) {
      return;
    }
    obserVations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    this.controller_.refresh();
  };
  ResizeObserverSPI2.prototype.unobserve = function(target) {
    if (!arguments.length) {
      throw new TypeError("[TINY-Resize]1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('[TINY-Resize] parameter 1 is not of type "Element".');
    }
    const obserVations = this.observations_;
    if (!obserVations.has(target)) {
      return;
    }
    obserVations.delete(target);
    !obserVations.size && this.controller_.removeObserver(this);
  };
  ResizeObserverSPI2.prototype.gatherActive = function() {
    const me = this;
    this.clearActive();
    this.observations_.forEach((observation) => {
      observation.isActive() && me.activeObservations_.push(observation);
    });
  };
  ResizeObserverSPI2.prototype.disconnect = function() {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  ResizeObserverSPI2.prototype.broadcastActive = function() {
    if (!this.hasActive()) {
      return;
    }
    const ctx = this.callbackCtx_;
    const entries = this.activeObservations_.map(
      (observation) => new ResizeObserverEntry(observation.target, observation.broadcastRect())
    );
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  ResizeObserverSPI2.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  };
  ResizeObserverSPI2.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  };
  return ResizeObserverSPI2;
}();
const observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
const ResizeObserver = function() {
  function ResizeObserver2(callback) {
    if (!(this instanceof ResizeObserver2)) {
      throw new TypeError("[TINY-Resize] Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw new TypeError("[TINY-Resize] 1 argument required, but only 0 present.");
    }
    const controller = ResizeObserverController.getInstance();
    const observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver2;
}();
["observe", "unobserve", "disconnect"].forEach((method) => {
  ResizeObserver.prototype[method] = function() {
    let _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
const index$8 = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
}();
var ResizeObserver_default = index$8;
const isServer$1 = typeof window === "undefined";
const cacheKey = "__resizeListeners__";
const resizeHandler = (entries) => {
  entries.forEach((entry) => {
    const listeners = entry.target[cacheKey] || [];
    if (listeners.length) {
      listeners.forEach((fn) => {
        fn();
      });
    }
  });
};
const addResizeListener = (el, fn) => {
  if (isServer$1) {
    return;
  }
  if (!el[cacheKey]) {
    el[cacheKey] = [];
    el.__ro__ = new ResizeObserver_default(resizeHandler);
    el.__ro__.observe(el);
  }
  el[cacheKey].push(fn);
};
const removeResizeListener = (el, fn) => {
  if (!el || !el[cacheKey]) {
    return;
  }
  el[cacheKey].splice(el[cacheKey].indexOf(fn), 1);
  if (!el[cacheKey].length) {
    el.__ro__.disconnect();
    delete el.__ro__;
  }
};
const computedWrapperStyle = (state) => () => {
  const wrapperStyle = {
    transform: `translate3d(0, ${state.offset + state.baseOffset}px, 0)`,
    transitionDuration: `${state.duration}ms`,
    transitionProperty: state.duration ? "all" : "none",
    lineHeight: `${state.itemHeight}px`
  };
  return wrapperStyle;
};
const computedBaseOffset = ({ state, props: props2 }) => () => state.itemHeight * (props2.visibleItemCount - 1) / 2;
const onClickItem = ({ api: api2, state }) => (index3) => {
  if (state.moving) {
    return;
  }
  state.duration = state.defaultDuration;
  api2.setIndex(index3, true);
};
const setIndex = ({ api: api2, state, emit }) => (index3, emitChange2) => {
  index3 = api2.adjustIndex(index3) || 0;
  const offset = -index3 * state.itemHeight;
  const trigger = () => {
    if (index3 !== state.currentIndex) {
      state.currentIndex = index3;
      if (emitChange2) {
        emit("change", index3);
      }
    }
  };
  if (state.moving && offset !== state.offset) {
    state.transitionEndTrigger = trigger;
  }
  trigger();
  state.offset = offset;
};
const range = (num, min, max) => Math.min(Math.max(num, min), max);
const isOptionDisabled = (option) => option !== null && typeof option === "object" && option.disabled;
const adjustIndex = (state) => (index3) => {
  index3 = range(index3, 0, state.count);
  for (let i = index3; i < state.count; i++) {
    if (!isOptionDisabled(state.columnsItem.values[i])) {
      return i;
    }
  }
  for (let i = index3 - 1; i >= 0; i--) {
    if (!isOptionDisabled(state.columnsItem.values[i])) {
      return i;
    }
  }
};
const onTouchstart = ({ vm, state }) => (event) => {
  state.direction = "";
  state.deltaX = 0;
  state.deltaY = 0;
  state.offsetX = 0;
  state.offsetY = 0;
  state.startX = event.touches[0].clientX;
  state.startY = event.touches[0].clientY;
  if (state.moving) {
    const style = window.getComputedStyle(vm.$refs.track);
    const transform = style.transform || style.webkitTransform;
    const translateY = Number(transform.slice(7, transform.length - 1).split(", ")[5]);
    state.offset = Math.min(0, translateY - state.baseOffset);
    state.startOffset = state.offset;
  } else {
    state.startOffset = state.offset;
  }
  state.duration = 0;
  state.transitionEndTrigger = null;
  state.touchStartTime = Date.now();
  state.momentumOffset = state.startOffset;
};
const getDirection = (x, y) => {
  const MIN_DISTANCE = 10;
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }
  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }
  return "";
};
const onTouchmove = ({ state }) => (event) => {
  const touch = event.touches[0];
  state.deltaX = touch.clientX - state.startX;
  state.deltaY = touch.clientY - state.startY;
  state.offsetX = Math.abs(state.deltaX);
  state.offsetY = Math.abs(state.deltaY);
  state.direction = state.direction || getDirection(state.offsetX, state.offsetY);
  if (state.direction === "vertical") {
    state.moving = true;
  }
  state.offset = range(state.startOffset + state.deltaY, -(state.count * state.itemHeight), state.itemHeight);
  const now = Date.now();
  if (now - state.touchStartTime > state.momentumLimitTime) {
    state.touchStartTime = now;
    state.momentumOffset = state.offset;
  }
};
const onTouchend = ({ api: api2, state }) => () => {
  const distance = state.offset - state.momentumOffset;
  const duration = Date.now() - state.touchStartTime;
  const allowMomentum = duration < state.momentumLimitTime && Math.abs(distance) > state.momentumLimitDistance;
  if (allowMomentum) {
    api2.momentum(distance, duration);
    return;
  }
  const index3 = range(Math.round(-state.offset / state.itemHeight), 0, state.count - 1);
  state.duration = state.defaultDuration;
  api2.setIndex(index3, true);
  setTimeout(() => {
    state.moving = false;
  }, 0);
};
const mountedHandler = ({ api: api2, vm, state }) => () => {
  const track = vm.$refs.track;
  on(track, "touchstart", api2.onTouchstart);
  on(track, "touchmove", api2.onTouchmove);
  on(track, "touchend", api2.onTouchend);
  state.clumnsWrapHeight = state.itemHeight * state.visibleItemCount;
  state.maskStyle = {
    backgroundSize: `100% ${(state.clumnsWrapHeight - state.itemHeight) / 2}px`
  };
};
const beforeUnmountHandler = ({ api: api2, vm }) => () => {
  const track = vm.$refs.track;
  off(track, "touchstart", api2.onTouchstart);
  off(track, "touchmove", api2.onTouchmove);
  off(track, "touchend", api2.onTouchend);
};
const momentum = ({ api: api2, state, props: props2 }) => (distance, duration) => {
  const speed = Math.abs(distance / duration);
  distance = state.offset + speed / 2e-3 * (distance < 0 ? -1 : 1);
  const index3 = range(Math.round(-distance / state.itemHeight), 0, state.count - 1);
  state.duration = Number(props2.swipeDuration);
  api2.setIndex(index3, true);
};
const onTransitionEnd = (state) => () => {
  state.moving = false;
  state.duration = 0;
  if (state.transitionEndTrigger) {
    state.transitionEndTrigger();
    state.transitionEndTrigger = null;
  }
};
const setValue = ({ api: api2, state }) => (value) => {
  const { columnsItem } = state;
  const values = columnsItem.values;
  for (let i = 0; i < values.length; i++) {
    if (api2.getOptionText(values[i]) === value) {
      return api2.setIndex(i);
    }
  }
};
const getOptionText = ({ state, props: props2 }) => (option) => {
  if (option !== null && typeof option === "object" && props2.valueKey in option) {
    return option[state.valueKey];
  }
  return option;
};
const getValue = (state) => () => state.columnsItem.values[state.currentIndex];
let deepAssign;
const assignKey = (to, from, key) => {
  const { hasOwnProperty } = Object.prototype;
  const val = from[key];
  if (val === void 0 || val === null) {
    return;
  }
  if (!hasOwnProperty.call(to, key) || typeof val !== "object") {
    to[key] = val;
  } else {
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
};
deepAssign = (to, from) => {
  Object.keys(from).forEach((key) => {
    assignKey(to, from, key);
  });
  return to;
};
const deepClone = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  if (typeof obj === "object" && obj !== null) {
    return deepAssign({}, obj);
  }
  return obj;
};
const setOptions = ({ api: api2, state, props: props2 }) => (options) => {
  if (JSON.stringify(options) !== JSON.stringify(state.columnsItem.values)) {
    state.columnsItem.values = deepClone(options);
    api2.setIndex(props2.defaultIndex);
  }
};
const escapeRegexpString = (value = "") => String(value).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
const isEqual = ({ select, state }) => (a, b) => {
  if (!state.isObject) {
    return a === b;
  } else {
    const valueKey = select.valueKey;
    return getObj(a, valueKey) === getObj(b, valueKey);
  }
};
const contains = ({ select, state }) => (arr = [], target = null) => {
  if (!state.isObject) {
    return arr && arr.includes(target);
  } else {
    const valueKey = select.valueKey;
    return arr && arr.some((item) => {
      return getObj(item, valueKey) === getObj(target, valueKey);
    });
  }
};
const handleGroupDisabled = ({ state, vm }) => (val) => {
  state.groupDisabled = val;
  vm.groupDisabled = val;
};
const hoverItem = ({ select, props: props2, state }) => (e) => {
  const dom = e.target;
  const text = dom.textContent;
  const style = window.getComputedStyle(dom);
  const font = style.font;
  const rect = dom.getBoundingClientRect();
  const textWidth = rect.width - parseInt(style.paddingLeft || 0) - parseInt(style.paddingRight || 0);
  const res = omitText(text, font, textWidth);
  state.showTitle = res.o;
  if (!props2.disabled && !state.groupDisabled && !select.state.disabledOptionHover) {
    select.state.hoverIndex = select.state.optionIndexArr.indexOf(state.index);
  }
};
const selectOptionClick = ({ props: props2, state, select, constants, vm }) => () => {
  if (props2.disabled !== true && state.groupDisabled !== true) {
    if (select.multiple && props2.required === true)
      return;
    select.state.selectEmitter.emit(constants.EVENT_NAME.handleOptionClick, vm, true);
  }
};
const queryChange$1 = ({ select, props: props2, state }) => (query) => {
  const oldVisible = state.visible;
  const newVisible = state.currentLabel.toLowerCase().includes(query.toLowerCase()) || !!props2.created;
  if (oldVisible !== newVisible) {
    state.visible = newVisible;
    select.state.filteredOptionsCount += newVisible ? 1 : -1;
  }
};
const toggleEvent = ({ props: props2, vm, type }) => {
  const optionEl = vm.$refs.option;
  for (let ev in props2.events) {
    optionEl[type + "EventListener"](ev, props2.events[ev]);
  }
};
const initValue$1 = ({ select, props: props2, constants, vm }) => () => {
  if (select.multiple && props2.required) {
    select.state.selectEmitter.emit(constants.EVENT_NAME.initValue, vm);
  }
};
const handleComposition = ({ api: api2, nextTick, state }) => (event) => {
  const text = event.target.value;
  if (event.type === "compositionend") {
    state.isOnComposition = false;
    const isChange = false;
    const isInput = true;
    nextTick(() => api2.handleQueryChange(text, isChange, isInput));
  } else {
    const lastCharacter = text[text.length - 1] || "";
    state.isOnComposition = !isKorean(lastCharacter);
  }
};
const showTip = ({ props: props2, state, vm }) => (show) => {
  if (!props2.showOverflowTooltip) {
    return;
  }
  let overflow;
  if (!show) {
    clearTimeout(state.tipTimer);
    state.tipTimer = setTimeout(() => {
      state.showTip = state.tipHover;
    }, vm.$refs.popover.closeDelay);
  } else {
    if (!props2.multiple) {
      const reference = vm.$refs.reference.$el;
      overflow = reference.querySelector("input").scrollWidth > reference.scrollWidth;
    } else {
      overflow = vm.$refs.tags.scrollHeight > vm.$refs.tags.getBoundingClientRect().height;
    }
    state.showTip = show && overflow && !!state.tips && !state.visible;
  }
};
const gridOnQueryChange = ({ props: props2, vm, constants, state }) => (value) => {
  const { multiple, valueField, filterMethod, filterable, remote, remoteMethod } = props2;
  if (filterable && typeof filterMethod === "function") {
    const table = vm.$refs.selectGrid.$refs.tinyTable;
    const fullData = table.afterFullData;
    vm.$refs.selectGrid.scrollTo(null, 0);
    table.afterFullData = filterMethod(value, fullData) || [];
    vm.$refs.selectGrid.handleTableData(!value).then(() => state.selectEmitter.emit(constants.EVENT_NAME.updatePopper));
    state.previousQuery = value;
  } else if (remote && typeof remoteMethod === "function") {
    state.previousQuery = value;
    remoteMethod(value, props2.extraQueryParams).then((data) => {
      if (multiple) {
        const selectedIds = state.selected.map((sel) => sel[valueField]);
        vm.$refs.selectGrid.clearSelection();
        vm.$refs.selectGrid.setSelection(
          data.filter((row) => ~selectedIds.indexOf(row[valueField])),
          true
        );
        state.remoteData = data.filter((row) => !~selectedIds.indexOf(row[valueField])).concat(state.selected);
      } else {
        vm.$refs.selectGrid.clearRadioRow();
        vm.$refs.selectGrid.setRadioRow(find(data, (item) => props2.modelValue === item[props2.valueField]));
        state.remoteData = data;
      }
      vm.$refs.selectGrid.$refs.tinyTable.lastScrollTop = 0;
      vm.$refs.selectGrid.loadData(data);
      vm.$refs.selectGrid.handleTableData(!value).then(() => state.selectEmitter.emit(constants.EVENT_NAME.updatePopper));
    });
  }
};
const defaultOnQueryChange = ({ props: props2, state, constants, api: api2, nextTick }) => (value, isInput) => {
  if (props2.remote && (typeof props2.remoteMethod === "function" || typeof props2.initQuery === "function")) {
    state.hoverIndex = -1;
    props2.remoteMethod && props2.remoteMethod(value, props2.extraQueryParams);
  } else if (typeof props2.filterMethod === "function") {
    props2.filterMethod(value);
    state.selectEmitter.emit(constants.COMPONENT_NAME.OptionGroup, constants.EVENT_NAME.queryChange);
  } else {
    api2.queryChange(value, isInput);
  }
  setFilteredSelectCls(nextTick, state, props2);
  api2.getOptionIndexArr();
  state.magicKey = state.magicKey > 0 ? -1 : 1;
};
const queryChange = ({ props: props2, state, constants }) => (value, isInput) => {
  if (props2.optimization && isInput) {
    const filterDatas = state.initDatas.filter((item) => new RegExp(escapeRegexpString(value), "i").test(item.label));
    state.datas = filterDatas;
  } else {
    state.selectEmitter.emit(constants.EVENT_NAME.queryChange, value);
  }
};
const setFilteredSelectCls = (nextTick, state, props2) => {
  nextTick(() => {
    if (props2.multiple && props2.showAlloption && props2.filterable && state.query && !props2.remote) {
      const filterSelectedVal = state.options.filter((item) => item.state.visible && item.state.itemSelected).map((opt) => opt.value);
      const visibleOptions = state.options.filter((item) => item.state.visible);
      if (filterSelectedVal.length === visibleOptions.length) {
        state.filteredSelectCls = "checked-sur";
      } else if (filterSelectedVal.length === 0) {
        state.filteredSelectCls = "check";
      } else {
        state.filteredSelectCls = "halfselect";
      }
    }
  });
};
const handleQueryChange$1 = ({ api: api2, constants, nextTick, props: props2, vm, state }) => (value, isChange = false, isInput = false) => {
  if (state.previousQuery === value && !isChange || state.isOnComposition) {
    return;
  }
  if (state.previousQuery === null && !isChange && (typeof props2.filterMethod === "function" || typeof props2.remoteMethod === "function" || typeof props2.initQuery === "function")) {
    state.previousQuery = value;
    return;
  }
  if (props2.renderType === constants.TYPE.Grid) {
    api2.gridOnQueryChange(value);
    return;
  }
  if (props2.renderType === constants.TYPE.Tree) {
    state.previousQuery = value;
    if (props2.filterable && typeof props2.filterMethod === "function") {
      vm.$refs.selectTree && vm.$refs.selectTree.filter(value);
    }
  }
  state.query = value;
  state.previousQuery = value;
  window.requestAnimationFrame(() => {
    if (state.visible) {
      state.selectEmitter.emit(constants.EVENT_NAME.updatePopper);
      state.showWarper = true;
    }
  });
  state.hoverIndex = -1;
  if (props2.multiple && props2.filterable && !props2.shape) {
    nextTick(() => {
      const length = vm.$refs.input.value.length * 15 + 20;
      state.inputLength = state.collapseTags ? Math.min(50, length) : length;
      api2.managePlaceholder();
      api2.resetInputHeight();
    });
  }
  if (props2.renderType === constants.TYPE.Tree) {
    return;
  }
  state.triggerSearch = true;
  api2.defaultOnQueryChange(value, isInput);
};
const scrollToOption = ({ vm, constants }) => (option) => {
  const target = Array.isArray(option) && option[0] && option[0].state ? option[0].state.el : option.state ? option.state.el : "";
  if (vm.$refs.popper && target) {
    const menu = vm.$refs.popper.$el.querySelector(constants.CLASS.SelectDropdownWrap);
    setTimeout(() => scroll_into_view_default(menu, target));
  }
  vm.$refs.scrollbar && vm.$refs.scrollbar.handleScroll();
};
const handleMenuEnter = ({ api: api2, nextTick, state, props: props2 }) => () => {
  if (!props2.optimization) {
    nextTick(() => api2.scrollToOption(state.selected));
  }
};
const emitChange = ({ emit, props: props2, state, constants }) => (value, changed) => {
  if (state.device === "mb" && props2.multiple && !changed)
    return;
  const seekItem = (val, arr, items, flag) => {
    if (constants.TYPE.Tree === flag) {
      const recurNode = (node) => {
        val === node[props2.valueField] && items.push(node);
        val !== node[props2.valueField] && Array.isArray(node[state.childrenName]) && node[state.childrenName].forEach(recurNode);
      };
      arr.forEach(recurNode);
    } else if (constants.TYPE.Grid === flag) {
      for (let i = 0; i < arr.length; i++) {
        if (val === arr[i][props2.valueField]) {
          items.push(arr[i]);
          break;
        }
      }
    }
  };
  if (!isEqual$1(props2.modelValue, state.compareValue)) {
    if (props2.renderType === constants.TYPE.Grid && props2.multiple) {
      value = value || [];
      const gridData = state.gridData || [];
      const items = [];
      value.forEach((valueItem) => {
        seekItem(valueItem, gridData, items, constants.TYPE.Grid);
      });
      emit("change", value, items);
    } else if (props2.renderType === constants.TYPE.Tree && props2.multiple) {
      value = value || [];
      const treeData = state.treeData || [];
      const items = [];
      value.forEach((valueItem) => {
        seekItem(valueItem, treeData, items, constants.TYPE.Tree);
      });
      emit("change", value, items);
    } else {
      emit("change", value);
    }
  }
};
const directEmitChange = ({ emit, props: props2, state }) => (value, key) => {
  if (state.device === "mb" && props2.multiple)
    return;
  emit("change", value, key);
};
const getOption = ({ props: props2, state, api: api2 }) => (value) => {
  let option;
  const isObject2 = Object.prototype.toString.call(value).toLowerCase() === "[object object]";
  const isNull2 = Object.prototype.toString.call(value).toLowerCase() === "[object null]";
  const isUndefined = Object.prototype.toString.call(value).toLowerCase() === "[object undefined]";
  for (let i = state.cachedOptions.length - 1; i >= 0; i--) {
    const cachedOption = state.cachedOptions[i];
    const isEqual2 = isObject2 ? getObj(cachedOption.value, props2.valueKey) === getObj(value, props2.valueKey) : cachedOption.value === value;
    if (isEqual2) {
      option = cachedOption;
      break;
    }
  }
  if (option) {
    return option;
  }
  if (props2.optimization) {
    option = api2.getSelectedOption(value);
    if (option) {
      return { value: option.value, currentLabel: option.label || option.currentLabel };
    }
    option = state.datas.find((v) => getObj(v, props2.valueKey) === value);
    if (option) {
      return { value: option.value, currentLabel: option.label || option.currentLabel };
    }
  }
  const label = !isObject2 && !isNull2 && !isUndefined && !props2.clearNoMatchValue ? value : "";
  let newOption = { value, currentLabel: label };
  if (props2.multiple) {
    newOption.hitState = false;
  }
  return newOption;
};
const getSelectedOption = ({ props: props2, state }) => (value) => {
  let option;
  if (props2.multiple) {
    option = state.selected.find((v) => getObj(v, props2.valueKey) === value);
  } else {
    if (!isEmptyObject(state.selected) && getObj(state.selected, props2.valueKey) === value) {
      option = state.selected;
    }
  }
  return option;
};
const getOptionOfSetSelected = ({ api: api2, props: props2 }) => {
  const option = api2.getOption(props2.modelValue) || {};
  if (!option.state) {
    option.state = {};
  }
  if (option.created) {
    option.createdLabel = option.state.currentLabel;
    option.createdSelected = true;
  } else {
    option.createdSelected = false;
  }
  if (!option.currentLabel) {
    api2.clearNoMatchValue("");
  }
  return option;
};
const getResultOfSetSelected = ({ state, isGrid, isTree, api: api2, props: props2 }) => {
  let result = [];
  const newModelValue = [];
  if (Array.isArray(state.modelValue)) {
    state.modelValue.forEach((value) => {
      if (isGrid || isTree) {
        const option = api2.getPluginOption(value, isTree);
        result = result.concat(option);
        if (props2.clearNoMatchValue && option.length) {
          newModelValue.push(value);
        }
      } else {
        const option = api2.getOption(value);
        if (!props2.clearNoMatchValue || props2.clearNoMatchValue && option.label) {
          result.push(option);
          newModelValue.push(value);
        }
      }
    });
  }
  api2.clearNoMatchValue(newModelValue);
  return result;
};
const setGridOrTreeSelected = ({ props: props2, state, vm, isTree, api: api2 }) => {
  if (!props2.modelValue) {
    state.selectedLabel = "";
    state.selected = {};
    state.currentKey = "";
    vm.$refs.selectGrid && vm.$refs.selectGrid.clearRadioRow();
    vm.$refs.selectTree && vm.$refs.selectTree.setCurrentKey && vm.$refs.selectTree.setCurrentKey(null);
    return;
  }
  const isRemote = props2.filterable && props2.remote && (typeof props2.remoteMethod === "function" || typeof props2.initQuery === "function");
  const nestdata = isRemote ? state.remoteData : isTree ? api2.getTreeData(state.treeData) : state.gridData;
  const data = find(nestdata, (item) => props2.modelValue === item[props2.valueField]);
  if (isEmptyObject(data)) {
    api2.clearNoMatchValue("");
    return;
  }
  const obj = Object.assign({}, data);
  const label = data[props2.textField];
  obj.currentLabel = label;
  state.selectedLabel = label;
  state.selected = obj;
  state.currentKey = data[props2.valueField];
};
const setSelected = ({ api: api2, constants, nextTick, props: props2, vm, state }) => () => {
  const isTree = props2.renderType === constants.TYPE.Tree;
  const isGrid = props2.renderType === constants.TYPE.Grid;
  if (!props2.multiple) {
    if (isGrid || isTree) {
      setGridOrTreeSelected({ props: props2, state, vm, isTree, api: api2 });
    } else {
      const option = getOptionOfSetSelected({ api: api2, props: props2 });
      state.selected = option;
      state.selectedLabel = option.state.currentLabel || option.currentLabel;
      props2.filterable && !props2.shape && (state.query = state.selectedLabel);
    }
  } else {
    const result = getResultOfSetSelected({ state, props: props2, isGrid, isTree, api: api2 });
    state.selectCls = result.length ? result.length === state.options.length ? "checked-sur" : "halfselect" : "check";
    state.selected = result;
    vm.$refs.selectTree && vm.$refs.selectTree.setCheckedNodes && vm.$refs.selectTree.setCheckedNodes(state.selected);
    state.tips = state.selected.map((item) => item.state ? item.state.currentLabel : item.currentLabel).join(",");
    setFilteredSelectCls(nextTick, state, props2);
    nextTick(api2.resetInputHeight);
  }
};
const getPluginOption = ({ api: api2, props: props2, state }) => (value, isTree) => {
  const isRemote = props2.filterable && props2.remote && (typeof props2.remoteMethod === "function" || typeof props2.initQuery === "function");
  const { textField, valueField } = props2;
  const sourceData = isRemote ? state.remoteData : isTree ? api2.getTreeData(state.treeData) : state.gridData;
  const selNode = find(sourceData, (item) => item[valueField] === value);
  const items = [];
  if (selNode) {
    selNode.currentLabel = selNode[textField];
    items.push(selNode);
  }
  return items;
};
const toggleCheckAll = ({ api: api2, state, props: props2 }) => (filtered) => {
  let value = [];
  const enabledValues = state.options.filter((op) => !op.state.disabled && !op.state.groupDisabled && !op.required && op.state.visible).map((op) => op.value);
  if (filtered) {
    if (state.filteredSelectCls === "check" || state.filteredSelectCls === "halfselect") {
      value = [.../* @__PURE__ */ new Set([...state.modelValue, ...enabledValues])];
    } else {
      value = state.modelValue.filter((val) => !enabledValues.includes(val));
    }
  } else {
    if (state.selectCls === "check") {
      value = enabledValues;
    } else if (state.selectCls === "halfselect") {
      const unchecked = state.options.filter((item) => !item.state.disabled && item.state.selectCls === "check");
      unchecked.length ? value = enabledValues : value = [];
    } else if (state.selectCls === "checked-sur") {
      value = [];
    }
  }
  const requiredValue = state.options.filter((op) => op.required).map((op) => op.value);
  const disabledSelectedValues = state.options.filter((op) => (op.state.disabled || op.state.groupDisabled) && op.state.selectCls === "checked-sur").map((op) => op.value);
  value = [...value, ...requiredValue, ...disabledSelectedValues];
  api2.setSoftFocus();
  state.isSilentBlur = true;
  api2.updateModelValue(value);
  api2.directEmitChange(value);
};
const handleFocus = ({ emit, props: props2, state }) => (event) => {
  if (!state.softFocus) {
    if (props2.automaticDropdown || props2.filterable) {
      state.visible = true;
      state.softFocus = true;
    }
    emit("focus", event);
  } else {
    if (state.searchSingleCopy && state.selectedLabel) {
      emit("focus", event);
    }
    state.softFocus = false;
  }
};
const focus = ({ vm, state }) => () => {
  if (!state.softFocus) {
    vm.$refs.reference.focus();
  }
};
const blur = ({ vm, state }) => () => {
  state.visible = false;
  vm.$refs.reference.blur();
};
const handleBlur = ({ constants, dispatch, emit, state, designConfig }) => (event) => {
  var _a;
  clearTimeout(state.timer);
  state.timer = setTimeout(() => {
    var _a2;
    if (state.isSilentBlur) {
      state.isSilentBlur = false;
    } else {
      emit("blur", event);
    }
    if ((_a2 = designConfig == null ? void 0 : designConfig.state) == null ? void 0 : _a2.delayBlur) {
      dispatch(constants.COMPONENT_NAME.FormItem, constants.EVENT_NAME.formBlur, event.target.value);
    }
  }, 200);
  if (!((_a = designConfig == null ? void 0 : designConfig.state) == null ? void 0 : _a.delayBlur)) {
    dispatch(constants.COMPONENT_NAME.FormItem, constants.EVENT_NAME.formBlur, event.target.value);
  }
  state.softFocus = false;
};
const handleClearClick = (api2) => (event) => {
  api2.deleteSelected(event);
};
const doDestroy = (vm) => () => {
  var _a;
  if ((_a = vm == null ? void 0 : vm.$refs) == null ? void 0 : _a.popper) {
    vm.$refs.popper.doDestroy();
  }
};
const handleClose = (state) => () => {
  state.visible = false;
};
const toggleLastOptionHitState = ({ state }) => (hit) => {
  if (!Array.isArray(state.selected)) {
    return;
  }
  const option = state.selected[state.selected.length - 1];
  if (!option) {
    return;
  }
  if (option.required) {
    return true;
  }
  const hitTarget = option.state || option;
  if (hit === true || hit === false) {
    hitTarget.hitState = hit;
    return hit;
  }
  hitTarget.hitState = !hitTarget.hitState;
  return hitTarget.hitState;
};
const deletePrevTag = ({ api: api2, constants, props: props2, state, vm }) => (event) => {
  if (event.target.value.length <= 0 && !api2.toggleLastOptionHitState()) {
    const value = state.modelValue.slice();
    value.pop();
    state.compareValue = deepClone(value);
    api2.updateModelValue(value);
    api2.emitChange(value);
    if (props2.renderType === constants.TYPE.Grid) {
      const rows = state.selected.slice().filter((item) => value.includes(item[props2.valueField]));
      vm.$refs.selectGrid.clearSelection();
      vm.$refs.selectGrid.setSelection(rows, true);
    }
  }
};
const managePlaceholder = ({ vm, state }) => () => {
  if (state.currentPlaceholder !== "") {
    state.currentPlaceholder = vm.$refs.input.value ? "" : state.cachedPlaceHolder;
  }
};
const resetInputState = ({ api: api2, vm, state }) => (event) => {
  if (event.keyCode !== 8) {
    api2.toggleLastOptionHitState(false);
  }
  state.inputLength = vm.$refs.input.value.length * 15 + 20;
  api2.resetInputHeight();
};
const resetInputHeight = ({ constants, nextTick, props: props2, vm, state, api: api2, designConfig }) => () => {
  if (state.collapseTags && !props2.filterable) {
    return;
  }
  nextTick(() => {
    var _a;
    if (!vm.$refs.reference) {
      return;
    }
    let input = vm.$refs.reference.type === "text" && vm.$refs.reference.$el.querySelector("input");
    const tags = vm.$refs.tags;
    const limitText = vm.$refs.reference.$el.querySelector("span.tiny-select__limit-txt");
    if (!input) {
      return;
    }
    if (!state.isDisplayOnly && (props2.hoverExpand || props2.clickExpand) && !props2.disabled) {
      api2.calcCollapseTags();
    }
    const sizeInMap = (designConfig == null ? void 0 : designConfig.state.initialInputHeight) || state.initialInputHeight || (state.isSaaSTheme ? 28 : 30);
    const noSelected = state.selected.length === 0;
    const spacingHeight = designConfig ? (_a = designConfig.state) == null ? void 0 : _a.spacingHeight : constants.SPACING_HEIGHT;
    if (!state.isDisplayOnly) {
      if (!noSelected && tags) {
        singleton_default.measure(() => {
          const tagsClientHeight = tags.clientHeight;
          singleton_default.mutate(() => {
            input.style.height = Math.max(tagsClientHeight + spacingHeight, sizeInMap) + "px";
          });
        });
      } else {
        input.style.height = noSelected ? sizeInMap + "px" : Math.max(0, sizeInMap) + "px";
      }
    } else {
      input.style.height = "auto";
    }
    if (limitText && props2.multipleLimit) {
      const { width, marginLeft, marginRight } = getComputedStyle(limitText);
      vm.$refs.tags.style.paddingRight = `${Math.ceil(
        parseFloat(width) + parseFloat(marginLeft) + parseFloat(marginRight)
      )}px`;
    }
    if (state.visible && state.emptyText !== false) {
      state.selectEmitter.emit(constants.EVENT_NAME.updatePopper, true);
    }
  });
};
const resetHoverIndex = ({ props: props2, state }) => () => {
  if (!props2.showOverflowTooltip) {
    state.hoverIndex = -1;
  } else if (!props2.multiple) {
    state.hoverIndex = state.options.indexOf(state.selected);
  } else {
    if (state.selected.length > 0) {
      state.hoverIndex = Math.min.apply(
        null,
        state.selected.map((item) => state.options.indexOf(item))
      );
    } else {
      state.hoverIndex = -1;
    }
  }
};
const resetDatas = ({ props: props2, state }) => () => {
  if (props2.optimization && !props2.remote && !props2.filterMethod) {
    state.datas = state.initDatas;
  }
};
const handleOptionSelect = ({ api: api2, nextTick, props: props2, vm, state }) => (option, byClick) => {
  state.memorize && state.memorize.updateByKey(option[state.memorize._dataKey] || option.value);
  if (props2.multiple) {
    const value = (state.modelValue || []).slice();
    const optionIndex = api2.getValueIndex(value, option.value);
    if (optionIndex > -1) {
      value.splice(optionIndex, 1);
    } else if (state.multipleLimit <= 0 || value.length < state.multipleLimit) {
      value.push(option.value);
    }
    state.compareValue = deepClone(value);
    api2.updateModelValue(value);
    api2.emitChange(value);
    if (option.created) {
      const isChange = false;
      const isInput = true;
      state.query = "";
      api2.handleQueryChange("", isChange, isInput);
      state.inputLength = 20;
    }
    if (props2.filterable) {
      vm.$refs.input.focus();
    }
    if (props2.autoClose) {
      state.visible = false;
    }
  } else {
    state.compareValue = deepClone(option.value);
    api2.updateModelValue(option.value);
    api2.emitChange(option.value);
    if (option.created) {
      state.createdSelected = true;
      state.createdLabel = option.value;
    }
    state.visible = false;
  }
  state.isSilentBlur = byClick;
  api2.setSoftFocus();
  if (state.visible) {
    return;
  }
  nextTick(() => {
    api2.scrollToOption(option);
  });
};
const initValue = ({ state }) => (vm) => {
  const isExist = state.initValue.find((val) => val === vm.value);
  !isExist && state.initValue.push(vm.value);
};
const setSoftFocus = ({ vm, state }) => () => {
  state.softFocus = true;
  const input = vm.$refs.input || vm.$refs.reference;
  if (input) {
    input.focus();
  }
  state.softFocus = false;
};
const getValueIndex = (props2) => (arr = [], value = null) => {
  const isObject2 = Object.prototype.toString.call(value).toLowerCase() === "[object object]";
  if (!isObject2) {
    return arr.indexOf(value);
  } else {
    const valueKey = props2.valueKey;
    let index3 = -1;
    arr.some((item, i) => {
      if (getObj(item, valueKey) === getObj(value, valueKey)) {
        index3 = i;
        return true;
      }
      return false;
    });
    return index3;
  }
};
const toggleMenu = ({ vm, state, props: props2, api: api2 }) => (e) => {
  if (props2.keepFocus && state.visible && props2.filterable) {
    return;
  }
  const event = e || window.event;
  const enterCode = 13;
  const nodeName = event.target && event.target.nodeName;
  const toggleVisible = props2.ignoreEnter ? event.keyCode !== enterCode && nodeName === "INPUT" : true;
  if (!props2.displayOnly) {
    event.stopPropagation();
  }
  if (!state.selectDisabled) {
    toggleVisible && !state.softFocus && (state.visible = !state.visible);
    state.softFocus = false;
    if (state.visible) {
      if (!(props2.filterable && props2.shape)) {
        const dom = vm.$refs.input || vm.$refs.reference;
        (dom == null ? void 0 : dom.focus) && dom.focus();
        api2.setOptionHighlight();
      }
    }
  }
};
const selectOption = ({ api: api2, state, props: props2 }) => (e) => {
  if (!state.visible || props2.hideDrop) {
    api2.toggleMenu(e);
  } else {
    let option = "";
    if (state.query || props2.remote) {
      option = state.options.find((item) => item.state.index === state.hoverValue);
    } else {
      option = state.options[state.hoverIndex];
    }
    option && api2.handleOptionSelect(option);
  }
};
const deleteSelected$1 = ({ api: api2, constants, emit, props: props2, vm, state }) => (event) => {
  event && event.stopPropagation();
  let selectedValue = [];
  if (props2.multiple) {
    const requireOptions = state.options.filter((opt) => opt.required && opt.value);
    selectedValue = state.modelValue.slice().filter((v) => requireOptions.find((opt) => opt.value === v));
  }
  const value = props2.multiple ? selectedValue : "";
  if (props2.renderType === constants.TYPE.Tree) {
    state.selected = {};
    state.selectedLabel = "";
    vm.$refs.selectTree.state.currentRadio.value = null;
    vm.$refs.selectTree.setCurrentKey(null);
  } else if (props2.renderType === constants.TYPE.Grid) {
    state.selected = {};
    state.selectedLabel = "";
    vm.$refs.selectGrid.clearRadioRow();
  }
  state.showTip = false;
  state.compareValue = deepClone(value);
  api2.updateModelValue(value, true);
  api2.emitChange(value, true);
  state.visible = false;
  emit("clear");
};
const deleteTag = ({ api: api2, constants, emit, props: props2, state, nextTick, vm }) => (event, tag) => {
  if (tag.required)
    return;
  const isTree = props2.renderType === constants.TYPE.Tree;
  const index3 = state.selected.indexOf(tag);
  const treeValue = [];
  const treeIds = [tag[props2.valueField]];
  if (isTree && !props2.treeOp.checkStrictly) {
    let node = vm.$refs.selectTree.getNode(tag[props2.valueField]);
    if (!node.isLeaf) {
      treeIds.push(...api2.getChildValue(node.childNodes, props2.valueField));
    }
    while (node.parent && !Array.isArray(node.parent.data)) {
      node.parent.data && treeIds.push(node.parent.data[props2.valueField]);
      node = node.parent;
    }
    state.selected.slice().map((node2) => !treeIds.includes(node2[props2.valueField]) && treeValue.push(node2[props2.valueField]));
  }
  if (index3 > -1 && !state.selectDisabled) {
    const value = state.modelValue.slice();
    value.splice(index3, 1);
    if (props2.renderType === constants.TYPE.Tree) {
      props2.treeOp.checkStrictly && treeValue.push(...value);
      vm.$refs.selectTree.setCheckedKeys(treeValue);
    } else if (props2.renderType === constants.TYPE.Grid) {
      const rows = state.selected.slice().filter((item) => value.includes(item[props2.valueField]));
      vm.$refs.selectGrid.clearSelection();
      vm.$refs.selectGrid.setSelection(rows, true);
    }
    state.compareValue = deepClone(value);
    api2.updateModelValue(isTree ? treeValue : value);
    api2.emitChange(value);
    emit(constants.EVENT_NAME.removeTag, tag[props2.valueField]);
    nextTick(() => state.key++);
  }
  event && event.stopPropagation();
};
const onInputChange = ({ api: api2, props: props2, state, constants, nextTick }) => () => {
  if (!props2.delay) {
    if (props2.filterable && state.query !== state.selectedLabel) {
      const isChange = false;
      const isInput = true;
      state.query = state.selectedLabel;
      api2.handleQueryChange(state.query, isChange, isInput);
      nextTick(() => {
        state.selectEmitter.emit(constants.EVENT_NAME.updatePopper);
      });
    }
  } else {
    api2.debouncRquest();
  }
  nextTick(() => {
    state.selectEmitter.emit(constants.EVENT_NAME.updatePopper);
  });
};
const onOptionDestroy = (state) => (index3) => {
  if (index3 > -1) {
    state.optionsCount--;
    state.filteredOptionsCount--;
    state.options.splice(index3, 1);
  }
};
const resetInputWidth = ({ vm, state }) => () => {
  if (vm.$refs.reference && vm.$refs.reference.$el) {
    state.inputWidth = vm.$refs.reference.$el.getBoundingClientRect().width;
  }
};
const handleResize$1 = ({ api: api2, props: props2, state }) => () => {
  api2.resetInputWidth();
  if (props2.multiple && !state.isDisplayOnly) {
    api2.resetInputHeight();
  }
};
const setOptionHighlight = (state) => () => {
  for (let i = 0; i < state.options.length; ++i) {
    const option = state.options[i];
    if (!option.disabled && !option.groupDisabled && !option.state.created && option.state.visible && option.state.itemSelected) {
      state.hoverIndex = i;
      break;
    }
  }
};
const checkDefaultFirstOption = (state) => () => {
  state.hoverIndex = -1;
  let hasCreated = false;
  const visibleOptions = state.options.filter((item) => item.visible && item.state.visible);
  for (let i = visibleOptions.length - 1; i >= 0; i--) {
    if (visibleOptions[i].created) {
      hasCreated = true;
      state.hoverIndex = i;
      state.hoverValue = state.optionIndexArr[i];
      break;
    }
  }
  if (hasCreated) {
    return;
  }
  for (let i = 0; i < visibleOptions.length; i++) {
    const option = visibleOptions[i];
    if (state.query) {
      if (!option.disabled && !option.groupDisabled && option.state.visible && option.visible) {
        state.hoverIndex = i;
        state.hoverValue = state.optionIndexArr[i];
        break;
      }
    } else {
      if (option.itemSelected) {
        state.hoverIndex = i;
        state.hoverValue = state.optionIndexArr[i];
        break;
      }
    }
  }
};
const getValueKey = (props2) => (item) => {
  if (!item)
    return;
  if (Object.prototype.toString.call(item.value).toLowerCase() !== "[object object]") {
    return item.value || item[props2.valueField];
  }
  return getObj(item.value, props2.valueKey);
};
const navigateOptions = ({ api: api2, state, props: props2, nextTick }) => (direction) => {
  const { optimization } = props2;
  if (optimization) {
    return;
  }
  const len = state.options.filter((item) => item.visible && item.state.visible).length;
  if (!state.visible) {
    state.visible = true;
    return;
  }
  if (len === 0 || state.filteredOptionsCount === 0) {
    return;
  }
  state.disabledOptionHover = true;
  setTimeout(() => {
    state.disabledOptionHover = false;
  }, 100);
  if (state.hoverIndex < -1 || state.hoverIndex >= len) {
    state.hoverIndex = 0;
  }
  if (!state.optionsAllDisabled) {
    if (direction === "next") {
      state.hoverIndex++;
      if (state.hoverIndex === len) {
        state.hoverIndex = 0;
      }
    } else if (direction === "prev") {
      state.hoverIndex--;
      if (state.hoverIndex < 0) {
        state.hoverIndex = len - 1;
      }
    }
    let option = {};
    state.hoverValue = state.optionIndexArr[state.hoverIndex];
    if (state.query || props2.remote) {
      option = state.options.find((item) => item.state.index === state.hoverValue);
    } else {
      option = state.options[state.hoverIndex];
    }
    if (option.disabled === true || option.groupDisabled === true || !option.state.visible || option.state.limitReached) {
      api2.navigateOptions(direction);
    }
    nextTick(() => api2.scrollToOption(state.hoverIndex === -9 ? {} : option || {}));
  }
};
const emptyFlag = ({ props: props2, state }) => () => {
  if (props2.optimization) {
    if (props2.allowCreate) {
      return state.query === "" && state.datas.length === 0;
    } else {
      return state.datas.length === 0;
    }
  } else {
    return state.options.length === 0;
  }
};
const recycleScrollerHeight = ({ state, props: props2, recycle }) => () => {
  const { ITEM_HEIGHT, SAFE_MARGIN, SAAS_HEIGHT, AURORA_HEIGHT } = recycle;
  let length = state.datas.length;
  if (state.showNewOption) {
    length += 1;
  }
  if (length === 0 || props2.loading) {
    return 0;
  } else if (length < 6) {
    return length * ITEM_HEIGHT + (state.isSaaSTheme ? SAFE_MARGIN * 2 : 0);
  } else {
    return state.isSaaSTheme ? SAAS_HEIGHT : AURORA_HEIGHT;
  }
};
const emptyText = ({ I18N, props: props2, state, t: t2, isMobileFirstMode }) => () => {
  if (props2.loading) {
    return props2.loadingText || t2(I18N.loading);
  }
  if (props2.remote && state.query === "" && props2.renderType) {
    return remoteEmptyText(props2, state);
  }
  if (props2.remote && state.query === "" && state.emptyFlag && !state.triggerSearch) {
    return props2.shape === "filter" || isMobileFirstMode ? "" : false;
  }
  if (props2.filterable && state.query && (props2.remote && state.emptyFlag || !state.options.some((option) => option.visible && option.state.visible))) {
    return props2.noMatchText || t2(I18N.noMatch);
  }
  if (state.emptyFlag) {
    return props2.noDataText || t2(I18N.noData);
  }
  return null;
};
const remoteEmptyText = function(props2, state) {
  if (props2.multiple) {
    return state.selected.length > 0 || state.remoteData.length >= 0;
  }
  return state.selected[props2.valueField] || state.remoteData.length >= 0;
};
const watchValue = ({ api: api2, constants, dispatch, props: props2, vm, state }) => (value, oldValue) => {
  if (props2.multiple) {
    api2.resetInputHeight();
    if (value && value.length > 0 || vm.$refs.input && state.query !== "") {
      state.currentPlaceholder = "";
    } else {
      state.currentPlaceholder = state.cachedPlaceHolder;
    }
    if (props2.filterable && !props2.reserveKeyword) {
      props2.renderType !== constants.TYPE.Grid && !props2.searchable && (state.query = "");
    }
  }
  api2.setSelected();
  !state.isClickChoose && api2.initQuery({ init: true }).then(() => api2.setSelected());
  state.isClickChoose = false;
  if (props2.filterable && !props2.multiple) {
    state.inputLength = 20;
  }
  if (state.completed && !isEqual$1(value, oldValue)) {
    dispatch(constants.COMPONENT_NAME.FormItem, constants.EVENT_NAME.formChange, value);
  }
  props2.optimization && optmzApis.setValueIndex({ props: props2, state });
};
const calcOverFlow = ({ vm, props: props2, state }) => (height) => {
  if (props2.multiple && props2.showOverflowTooltip) {
    state.overflow = false;
    const tagDom = vm.$refs.tags;
    const tags = tagDom.querySelectorAll('[data-tag="tiny-tag"]');
    if (tags.length) {
      tagDom.scrollTo && tagDom.scrollTo({ top: 0 });
      let { x, width } = tags[0].getBoundingClientRect();
      if (width >= tagDom.getBoundingClientRect().width) {
        state.overflow = 0;
      } else {
        for (let i = 1; i < tags.length; i++) {
          let tx = tags[i].getBoundingClientRect().x;
          if (tx === x) {
            state.overflow = i - 1;
            break;
          }
        }
      }
    }
    vm.$refs.select.style.height = vm.$refs.select.style.height || height;
    vm.$refs.reference.$el.style.position = "absolute";
    const inputWidth = vm.$refs.select.getBoundingClientRect().width;
    const position = state.visible ? "absolute" : "";
    state.selectFiexd = {
      height,
      position,
      width: inputWidth + "px",
      zIndex: popup_manager_default.nextZIndex()
    };
    state.inputWidth = inputWidth;
  }
};
const postOperOfToVisible = ({ props: props2, state, constants }) => {
  if (props2.multiple) {
    return;
  }
  if (state.selected) {
    if (props2.renderType === constants.TYPE.Grid || props2.renderType === constants.TYPE.Tree) {
      state.selectedLabel = state.selected.currentLabel;
    } else {
      if (props2.filterable && props2.allowCreate && state.createdSelected && state.createdLabel) {
        state.selectedLabel = state.createdLabel;
      } else {
        state.selectedLabel = state.selected.state.currentLabel || state.selected.currentLabel;
      }
      if (props2.filterable) {
        state.query = state.selectedLabel;
      }
    }
    if (props2.filterable) {
      state.currentPlaceholder = state.cachedPlaceHolder;
    }
  }
};
const toVisible = ({ constants, state, props: props2, vm, api: api2, nextTick }) => () => {
  state.selectEmitter.emit(constants.EVENT_NAME.destroyPopper);
  props2.remote && props2.dropOnlySearch && (state.showWarper = false);
  if (vm.$refs.input) {
    vm.$refs.input.blur();
  }
  state.query = "";
  state.selectedLabel = "";
  state.inputLength = 20;
  state.previousQuery !== state.query && api2.initQuery().then(() => api2.setSelected());
  if (props2.renderType !== constants.TYPE.Tree) {
    state.previousQuery = null;
  }
  api2.resetHoverIndex();
  api2.resetDatas();
  nextTick(() => {
    if (vm.$refs.input && vm.$refs.input.value === "" && state.selected.length === 0) {
      state.currentPlaceholder = state.cachedPlaceHolder;
    }
    if (vm.$refs.selectGrid) {
      vm.$refs.selectGrid.clearScroll();
    }
  });
  postOperOfToVisible({ props: props2, state, constants });
};
const toHide = ({ constants, state, props: props2, vm, api: api2 }) => () => {
  const { filterable, remote, remoteConfig, shape, renderType, multiple, valueField } = props2;
  state.selectEmitter.emit(constants.COMPONENT_NAME.SelectDropdown, constants.EVENT_NAME.updatePopper);
  if (filterable) {
    state.query = remote || shape ? "" : renderType !== constants.TYPE.Tree ? state.selectedLabel : "";
    const isChange = remote && remoteConfig.autoSearch && (state.firstAutoSearch || remoteConfig.clearData);
    state.firstAutoSearch = false;
    api2.handleQueryChange(state.query, isChange);
    if (multiple) {
      vm.$refs.input.focus();
    } else {
      if (!remote) {
        state.selectEmitter.emit(constants.EVENT_NAME.queryChange, "");
        state.selectEmitter.emit(constants.COMPONENT_NAME.OptionGroup, constants.EVENT_NAME.queryChange);
      }
      if (state.selectedLabel && !shape) {
        state.currentPlaceholder = state.selectedLabel;
        state.selectedLabel = "";
      }
    }
  }
  if (vm.$refs.selectGrid) {
    let { fullData } = vm.$refs.selectGrid.getTableData();
    if (multiple) {
      const selectedIds = state.selected.map((sel) => sel[valueField]);
      vm.$refs.selectGrid.clearSelection();
      vm.$refs.selectGrid.setSelection(
        fullData.filter((row) => ~selectedIds.indexOf(row[valueField])),
        true
      );
    } else {
      vm.$refs.selectGrid.clearRadioRow();
      vm.$refs.selectGrid.setRadioRow(find(fullData, (item) => props2.modelValue === item[valueField]));
    }
    if (filterable && typeof props2.filterMethod === "function") {
      vm.$refs.selectGrid.handleTableData(true);
    } else if (filterable && remote && (typeof props2.remoteMethod === "function" || typeof props2.initQuery === "function")) {
      vm.$refs.selectGrid.handleTableData();
    }
  }
};
const watchVisible = ({ api: api2, constants, emit, state, vm, props: props2 }) => (value) => {
  if ((props2.filterable || props2.remote) && !value) {
    vm.$refs.reference.blur();
  }
  if (api2.onCopying()) {
    return;
  }
  if (value && props2.multiple && state.device === "mb") {
    state.selectedCopy = state.selected.slice();
  }
  setTimeout(() => {
    if (!value && !state.selectedLabel) {
      state.cachedOptions.forEach((item) => {
        item.state.visible = true;
      });
    }
  }, 200);
  value ? api2.toHide() : api2.toVisible();
  emit(constants.EVENT_NAME.visibleChange, value);
  setTimeout(() => {
    state.selectEmitter.emit(constants.EVENT_NAME.updatePopper);
    if (value && vm.$refs.scrollbar) {
      if (props2.optimization) {
        optmzApis.setScrollTop({ refs: vm.$refs, state });
        vm.$refs.scrollbar.updateVisibleItems(true, true);
      } else {
        vm.$refs.scrollbar.handleScroll();
      }
    }
  }, props2.updateDelay);
  if (!value && props2.shape === "filter") {
    state.softFocus = false;
  }
};
const watchOptions = ({ api: api2, constants, nextTick, parent, props: props2, state }) => () => {
  if (typeof window === "undefined") {
    return;
  }
  nextTick(() => {
    state.selectEmitter.emit(constants.EVENT_NAME.updatePopper);
  });
  if (props2.multiple) {
    api2.resetInputHeight();
  }
  nextTick(() => {
    if (parent.$el.querySelector("input") !== document.activeElement) {
      api2.setSelected();
    }
  });
  api2.getOptionIndexArr();
};
const getOptionIndexArr = ({ props: props2, state, api: api2 }) => () => {
  setTimeout(() => {
    state.optionIndexArr = api2.queryVisibleOptions().map((item) => Number(item.getAttribute("data-index")));
    if (props2.defaultFirstOption && (props2.filterable || props2.remote) && state.filteredOptionsCount) {
      if (props2.optimization) {
        optmzApis.checkDefaultFirstOption({ state });
      } else {
        api2.checkDefaultFirstOption();
      }
    }
  });
};
const queryVisibleOptions = ({ props: props2, vm, isMobileFirstMode }) => () => {
  if (props2.optimization) {
    return optmzApis.queryVisibleOptions(vm, isMobileFirstMode);
  } else {
    return vm.$refs.scrollbar ? Array.from(vm.$refs.scrollbar.$el.querySelectorAll('[data-index]:not([style*="display: none"])')) : [];
  }
};
const handleCopyClick = ({ parent, props: props2, state }) => () => {
  const input = document.createElement("input");
  input.style.height = 0;
  input.style.border = "none";
  input.style.position = "absolute";
  parent.$el.appendChild(input);
  input.value = state.selected.map((item) => item.state ? item.state.currentLabel : item.currentLabel).join(props2.textSplit);
  input.select();
  document.execCommand("copy");
  parent.$el.removeChild(input);
};
const selectChange = ({ props: props2, state, api: api2 }) => ({ $table, selection, checked, row }) => {
  const { textField, valueField } = props2;
  const remoteItem = (row2) => {
    const removeItem = find(state.selected, (item) => item[valueField] === row2[valueField]);
    removeItem && state.selected.splice(state.selected.indexOf(removeItem), 1);
  };
  if (row) {
    checked ? state.selected.push(__spreadProps(__spreadValues({}, row), { value: row[valueField], currentLabel: row[textField] })) : remoteItem(row);
  } else {
    checked ? state.selected = state.selected.concat(
      selection.filter((row2) => !~state.modelValue.indexOf(row2[valueField]))
    ) : $table.tableFullData.forEach((row2) => remoteItem(row2));
  }
  const keys = state.selected.map((item) => item[valueField]);
  api2.updateModelValue(keys);
  api2.directEmitChange(keys, state.selected);
};
const getcheckedData = ({ props: props2, state }) => () => {
  const checkedKey = [];
  if (!Array.isArray(state.selected)) {
    return props2.modelValue ? [props2.modelValue] : [state.selected[props2.valueField]];
  } else {
    state.selected.length > 0 && state.selected.forEach((item) => {
      checkedKey.push(item[props2.valueField]);
    });
    return checkedKey;
  }
};
const radioChange = ({ props: props2, state, api: api2, vm }) => ({ row }) => {
  row.value = row[props2.valueField];
  row.currentLabel = row[props2.textField];
  !state.hasClearSelection && vm.$refs.selectGrid.clearSelection();
  state.hasClearSelection = true;
  state.selected = row;
  state.visible = false;
  state.currentKey = row[props2.valueField];
  api2.updateModelValue(row.value);
  api2.directEmitChange(row);
};
const getTreeData = (props2, state) => (data) => {
  const nodes = [];
  const getChild = (data2, pId) => {
    data2.forEach((node) => {
      node.pId = pId;
      nodes.push(node);
      if (node[state.childrenName] && node[state.childrenName].length > 0) {
        getChild(node[state.childrenName], node[props2.valueField]);
      }
    });
  };
  getChild(data, null);
  return nodes;
};
const treeNodeClick = ({ props: props2, state, api: api2, vm }) => (data) => {
  if (!props2.multiple) {
    data.currentLabel = data[props2.textField];
    data.value = data[props2.valueField];
    state.selected = data;
    state.visible = false;
    api2.updateModelValue(data.value);
    api2.directEmitChange(data);
  } else {
    if (props2.treeOp.checkOnClickNode) {
      const checkedNodes = vm.$refs.selectTree.getCheckedNodes();
      const checkedKeys = vm.$refs.selectTree.getCheckedKeys();
      api2.nodeCheckClick(data, { checkedNodes, checkedKeys });
    }
  }
};
const nodeCheckClick = ({ props: props2, state, api: api2 }) => (data, { checkedKeys, checkedNodes }) => {
  const selected = state.selected.map((item) => api2.getValueKey(item));
  if (isEqual$1(selected, checkedKeys)) {
    return;
  }
  state.selected = checkedNodes.filter((node) => {
    node.currentLabel = node[props2.textField];
    node.value = node[props2.valueField];
  });
  api2.updateModelValue(checkedKeys);
  api2.directEmitChange(checkedKeys, checkedNodes);
};
const nodeCollapse = ({ state, constants }) => () => {
  setTimeout(() => {
    state.selectEmitter.emit(constants.EVENT_NAME.updatePopper);
  }, 310);
};
const nodeExpand = ({ state, constants }) => () => {
  setTimeout(() => {
    state.selectEmitter.emit(constants.EVENT_NAME.updatePopper);
  }, 310);
};
const debouncRquest = ({ api: api2, state, props: props2 }) => debounce_default(props2.delay, () => {
  if (props2.filterable && state.query !== state.selectedLabel) {
    const isChange = false;
    const isInput = true;
    state.query = state.selectedLabel;
    api2.handleQueryChange(state.query, isChange, isInput);
  }
});
const getChildValue = () => (data, key) => {
  const ids = [];
  const getChild = (nodes) => {
    nodes.forEach((node) => {
      ids.push(node.data[key]);
      if (node.childNodes.length > 0) {
        getChild(node.childNodes);
      }
    });
  };
  getChild(data);
  return ids;
};
const watchPropsOption = ({ constants, parent, props: props2, state }) => () => {
  const renderType = props2.renderType;
  const { key, parentKey } = props2.treeOp;
  const dataset = {
    dataset: props2.options || props2.dataset,
    service: parent.$service,
    tree: { key, parentKey }
  };
  getDataset(dataset).then((data) => {
    if (renderType === constants.TYPE.Tree) {
      state.treeData = data;
    } else if (renderType === constants.TYPE.Grid) {
      state.gridData = data;
    } else {
      let sortData = data.slice();
      if (props2.multiple) {
        const requiredData = [];
        sortData = sortData.filter((item) => {
          if (item.required) {
            requiredData.push(item);
            return false;
          }
          return true;
        });
        sortData = requiredData.concat(sortData);
      }
      if (props2.cacheOp && props2.cacheOp.key) {
        state.memorize = new memorize_default(props2.cacheOp);
        state.datas = state.memorize.assemble(sortData.slice());
      } else {
        state.datas = sortData;
        state.initDatas = sortData;
      }
    }
  });
};
const buildSelectConfig = ({ props: props2, state }) => () => {
  const checkRowKeys = state.gridCheckedData;
  const selectConfig = props2.selectConfig;
  return Object.assign({}, selectConfig, { checkRowKeys });
};
const buildRadioConfig = ({ props: props2, state }) => () => {
  const checkRowKey = state.currentKey;
  const highlight = true;
  const radioConfig = props2.radioConfig;
  return Object.assign({}, radioConfig, { checkRowKey, highlight });
};
const onMouseenterNative = ({ state }) => () => {
  state.inputHovering = true;
  if (state.searchSingleCopy && state.selectedLabel) {
    state.softFocus = true;
  }
};
const onMouseleaveNative = ({ state }) => (e) => {
  if (e.target === e.currentTarget)
    return;
  state.inputHovering = false;
  if (state.searchSingleCopy && state.selectedLabel) {
    state.softFocus = false;
  }
};
const onCopying = ({ state, vm }) => () => {
  return state.searchSingleCopy && state.selectedLabel && vm.$refs.reference && vm.$refs.reference.hasSelection && vm.$refs.reference.hasSelection();
};
const watchHoverIndex = ({ state }) => (value) => {
  if (value === -1 || value === -9) {
    state.hoverValue = -1;
  } else {
    state.hoverValue = state.optionIndexArr[value];
  }
};
const handleDropdownClick = ({ vm, state, props: props2, emit }) => ($event) => {
  if (props2.allowCopy && vm.$refs.reference) {
    vm.$refs.reference.$el.querySelector("input").selectionEnd = 0;
  }
  state.softFocus = false;
  emit("dropdown-click", $event);
};
const handleEnterTag = ({ state }) => ($event, key) => {
  const target = $event.target;
  if (target && target.scrollWidth > target.offsetWidth) {
    state.tooltipContent = __spreadProps(__spreadValues({}, state.tooltipContent), { [key]: target.innerText });
  }
};
const calcCollapseTags = ({ state, vm, props: props2 }) => () => {
  if (state.inputHovering && !props2.clickExpand) {
    return state.isHidden = true;
  }
  const tags = vm.$refs.tags;
  const collapseTag = tags && tags.querySelector('[data-tag="tags-collapse"]');
  if (!collapseTag || !tags) {
    return;
  }
  const { width: tagsContentWidth, paddingLeft, paddingRight } = window.getComputedStyle(tags);
  const tagsWidth = parseFloat(tagsContentWidth) - parseFloat(paddingLeft) - parseFloat(paddingRight);
  const { width: collapseTagContentWidth, marginRight } = collapseTag && window.getComputedStyle(collapseTag);
  const collapseTagWidth = collapseTag && parseFloat(collapseTagContentWidth) + parseFloat(marginRight);
  const tagList = Array.from(tags.querySelectorAll('[data-tag="tiny-tag"]'));
  let [dom, idx, currentRowWidth, currentTagIndex] = [null, 0, 0, 0];
  for (let rowNum = 0; rowNum < props2.maxVisibleRows; rowNum++) {
    currentRowWidth = 0;
    let currentTagWidth = 0;
    for (currentTagIndex; currentTagIndex < tagList.length; currentTagIndex++) {
      const tag = tagList[currentTagIndex];
      if (tag !== collapseTag) {
        const { width: tagContentWidth, marginRight: marginRight2, marginLeft } = tag && window.getComputedStyle(tag);
        currentTagWidth = parseFloat(tagContentWidth) + parseFloat(marginRight2) + parseFloat(marginLeft);
        currentRowWidth += currentTagWidth;
      }
      if (tag !== collapseTag && currentRowWidth > tagsWidth) {
        if (!dom && rowNum === props2.maxVisibleRows - 1) {
          if (currentRowWidth - currentTagWidth + collapseTagWidth < tagsWidth) {
            dom = tag;
            idx = currentTagIndex;
          } else {
            dom = tagList[currentTagIndex - 1];
            idx = currentTagIndex - 1;
          }
        }
        break;
      }
    }
    if (currentTagIndex === tagList.length - 1) {
      break;
    }
  }
  if (idx === 0) {
    state.exceedMaxVisibleRow = false;
    state.showCollapseTag = false;
    return state.isHidden = true;
  }
  if (dom) {
    dom.before(collapseTag);
    state.isHidden = false;
  } else {
    state.isHidden = true;
  }
  state.collapseTagsLength = tagList.length - idx;
  state.exceedMaxVisibleRow = true;
  state.toHideIndex = idx;
};
const watchInputHover = ({ vm }) => (newVal) => {
  const [inputHovering, visible] = newVal;
  if (!inputHovering && !visible) {
    const tags = vm.$refs.tags;
    const content = vm.$refs["tags-content"];
    tags && content && tags.scrollTo({ top: content });
  }
};
const initQuery = ({ props: props2, state, constants, vm }) => ({ init } = {}) => {
  const isRemote = props2.filterable && props2.remote && (typeof props2.remoteMethod === "function" || typeof props2.initQuery === "function");
  const isGrid = props2.renderType === constants.TYPE.Grid;
  let selected;
  if (isRemote && isGrid && props2.initQuery) {
    let initData = props2.initQuery(props2.modelValue, props2.extraQueryParams, !!init);
    if (initData.then) {
      return new Promise((resolve) => {
        initData.then((selected2) => {
          state.remoteData = selected2;
          vm.$refs.selectGrid.loadData(selected2);
          resolve(selected2);
        });
      });
    }
    selected = initData;
    state.remoteData = selected;
    vm.$refs.selectGrid.loadData(selected);
  }
  return Promise.resolve(selected);
};
const mounted$2 = ({ api: api2, parent, state, props: props2, vm, designConfig }) => () => {
  var _a;
  state.defaultCheckedKeys = state.gridCheckedData;
  const parentEl = parent.$el;
  const inputEl = parentEl.querySelector('input[data-tag="tiny-input-inner"]');
  const inputClientRect = inputEl && inputEl.getBoundingClientRect() || {};
  if (inputEl === document.activeElement) {
    document.activeElement.blur();
  }
  state.completed = true;
  const defaultSizeMap = { default: 28, mini: 24, small: 32, medium: 40 };
  const sizeMap = ((_a = designConfig == null ? void 0 : designConfig.state) == null ? void 0 : _a.sizeMap) || defaultSizeMap;
  if (props2.multiple && Array.isArray(props2.modelValue) && props2.modelValue.length > 0) {
    state.currentPlaceholder = "";
  }
  state.initialInputHeight = state.isDisplayOnly ? sizeMap[state.selectSize || "default"] : inputClientRect.height || sizeMap[state.selectSize];
  addResizeListener(parentEl, api2.handleResize);
  if (vm.$refs.tags) {
    addResizeListener(vm.$refs.tags, api2.resetInputHeight);
  }
  if (props2.remote && props2.multiple) {
    api2.resetInputHeight();
  }
  state.inputWidth = inputClientRect.width;
  api2.initQuery({ init: true }).then(() => api2.setSelected());
  if (props2.dataset) {
    api2.watchPropsOption();
  }
};
const unMount = ({ api: api2, parent, vm, state }) => () => {
  if (parent.$el && api2.handleResize) {
    removeResizeListener(parent.$el, api2.handleResize);
  }
  if (vm.$refs.tags) {
    removeResizeListener(vm.$refs.tags, api2.resetInputHeight);
  }
  state.popperElm = null;
};
const optmzApis = {
  exist: (val, multiple) => multiple ? Array.isArray(val) && val.length : val,
  getValueIndex: (props2) => {
    const { options, valueField, modelValue, multiple } = props2;
    const contain = (val, arr) => Array.isArray(arr) && ~arr.indexOf(val);
    const equal = (val, opt) => multiple ? contain(opt[valueField], [val]) : opt[valueField] === val;
    let start = 0;
    if (optmzApis.exist(modelValue, multiple) && options) {
      const lastVal = multiple ? modelValue[modelValue.length - 1] : modelValue;
      for (let i = 0; i < options.length; i++) {
        if (!equal(lastVal, options[i]))
          continue;
        return i;
      }
    }
    return start;
  },
  queryVisibleOptions: (vm, isMobileFirstMode) => {
    const querySelectKey = isMobileFirstMode ? ".cursor-not-allowed" : ".is-disabled";
    return Array.from(
      vm.$refs.scrollbar.$el.querySelectorAll(
        '.tiny-recycle-scroller__slot, .tiny-recycle-scroller__item-view:not([style*="transform: translateY(-9999px) translateX(0px)"])'
      )
    ).map((item) => item.querySelector(`[data-tag="tiny-select-dropdown-item"]:not(${querySelectKey})`)).filter((v) => v);
  },
  setScrollTop: ({ refs, state }) => {
    const { optimizeStore } = state;
    refs.scrollbar.scrollToItem(optimizeStore.valueIndex);
  },
  setValueIndex: ({ props: props2, state }) => {
    state.optimizeStore.valueIndex = optmzApis.getValueIndex(props2);
  },
  natural: (val) => val < 0 ? 0 : val,
  checkDefaultFirstOption: ({ state }) => {
    state.hoverIndex = 0;
    state.hoverValue = state.optionIndexArr[0];
  }
};
const computeOptimizeOpts = ({ props: props2, designConfig }) => () => {
  const { optimization } = props2;
  const baseOpts = (designConfig == null ? void 0 : designConfig.baseOpts) ? designConfig.baseOpts : { gt: 20, rSize: 10, optionHeight: 30, limit: 20 };
  let optOpts;
  if (optimization) {
    if (typeof optimization === "boolean") {
      optOpts = extend(true, {}, baseOpts);
    } else {
      optOpts = extend(true, {}, baseOpts, optimization);
    }
    return optOpts;
  }
};
const watchOptimizeOpts = ({ props: props2, state }) => () => {
  const { optimizeOpts, optimizeStore } = state;
  if (optimizeOpts) {
    if (props2.optimization) {
      optimizeStore.valueIndex = optmzApis.getValueIndex(props2);
    }
  }
};
const computeCollapseTags = (props2) => () => props2.collapseTags;
const computeMultipleLimit = ({ props: props2, state }) => () => {
  const { multipleLimit, multiple, optimization } = props2;
  const { optimizeOpts } = state;
  return optmzApis.natural(multiple && optimization ? multipleLimit || optimizeOpts.limit : multipleLimit);
};
const updateModelValue = ({ props: props2, emit, state }) => (value, needUpdate) => {
  state.isClickChoose = true;
  if (state.device === "mb" && props2.multiple && !needUpdate) {
    state.modelValue = value;
  } else {
    emit("update:modelValue", value);
  }
};
const getLabelSlotValue = ({ props: props2, state }) => (item) => {
  const datas = state.datas;
  const value = item.state ? item.state.currentValue : item.value;
  const data = datas.find((data2) => data2.value === value);
  const obj = __spreadProps(__spreadValues({}, data), {
    label: item.state ? item.state.currentLabel : item.currentLabel,
    value
  });
  return ["grid", "tree"].includes(props2.renderType) ? item : obj;
};
const computedTagsStyle = ({ props: props2, parent, state, vm }) => () => {
  const isReadonly = props2.disabled || (parent.form || {}).disabled || props2.displayOnly;
  let tagsStyle = {
    "max-width": isReadonly ? "" : state.inputWidth - state.inputPaddingRight + "px",
    width: "100%"
  };
  if (props2.clickExpand && !state.exceedMaxVisibleRow || state.visible) {
    Object.assign(tagsStyle, { height: "auto" });
  }
  if (props2.clickExpand && state.exceedMaxVisibleRow && !state.showCollapseTag) {
    const tags = vm.$refs.tags;
    const { paddingTop: tagsPaddingTop, paddingBottom: tagsPaddingBottom } = window.getComputedStyle(tags);
    const tagsPaddingVertical = parseFloat(tagsPaddingTop) + parseFloat(tagsPaddingBottom);
    const tag = tags == null ? void 0 : tags.querySelector('[data-tag="tiny-tag"]');
    if (tag) {
      const { height: tagHeight, marginTop, marginBottom } = window.getComputedStyle(tag);
      const rowHeight = (parseFloat(tagHeight) + parseFloat(marginTop) + parseFloat(marginBottom)) * props2.maxVisibleRows;
      Object.assign(tagsStyle, { "height": `${rowHeight + tagsPaddingVertical}px` });
    }
  }
  return tagsStyle;
};
const computedReadonly = ({ props: props2, state }) => () => state.device === "mb" || props2.readonly || !props2.filterable || props2.multiple || browser_default.name !== BROWSER_NAME.IE && browser_default.name !== BROWSER_NAME.Edge && !state.visible;
const computedShowClose = ({ props: props2, state }) => () => props2.clearable && !state.selectDisabled && (state.inputHovering || props2.multiple && state.visible) && (props2.multiple ? Array.isArray(props2.modelValue) && props2.modelValue.length > 0 : !isNull(props2.modelValue) && props2.modelValue !== "");
const computedCollapseTagSize = (state) => () => state.selectSize;
const computedShowNewOption = ({ props: props2, state }) => () => {
  const query = state.device === "mb" ? state.queryValue : state.query;
  return props2.filterable && props2.allowCreate && query && !state.options.filter((option) => !option.created).some((option) => option.state.currentLabel === state.query);
};
const computedShowCopy = ({ props: props2, state }) => () => props2.multiple && props2.copyable && state.inputHovering && state.selected.length;
const computedOptionsAllDisabled = (state) => () => state.options.filter((option) => option.visible).every((option) => option.disabled);
const computedDisabledTooltipContent = (state) => () => state.selected.map((item) => item.state ? item.state.currentLabel : item.currentLabel).join("；");
const computedSelectDisabled = ({ props: props2, parent }) => () => props2.disabled || (parent.form || {}).disabled || props2.displayOnly || (parent.form || {}).displayOnly;
const computedIsExpand = ({ props: props2, state }) => () => {
  const hoverExpanded = (state.selectHover || state.visible) && props2.hoverExpand && !props2.disabled;
  const clickExpanded = props2.clickExpand && state.exceedMaxVisibleRow && state.showCollapseTag;
  return hoverExpanded || clickExpanded;
};
const computedIsExpandAll = (props2) => () => {
  const { defaultExpandAll, lazy } = props2.treeOp;
  return !lazy && defaultExpandAll !== false;
};
const loadTreeData = ({ state, vm, props: props2, api: api2 }) => ({ data = [], init = false }) => {
  const getTreeDatas = (datas, newDatas = []) => {
    datas.forEach(({ data: data2, childNodes }) => {
      let temData = __spreadProps(__spreadValues({}, data2), { [state.childrenName]: [] });
      if (childNodes && childNodes.length) {
        getTreeDatas(childNodes, temData[state.childrenName]);
      }
      newDatas.push(temData);
    });
  };
  if (init) {
    state.treeData = data;
  } else if (vm.$refs.selectTree) {
    const treeData = [];
    getTreeDatas(vm.$refs.selectTree.state.root.childNodes, treeData);
    state.treeData = treeData;
    const { multiple, treeOp } = props2;
    if (multiple && treeOp.lazy) {
      const checkedNodes = vm.$refs.selectTree.getCheckedNodes();
      const checkedKeys = vm.$refs.selectTree.getCheckedKeys();
      api2.nodeCheckClick(null, { checkedNodes, checkedKeys });
    }
  }
};
const watchInitValue = ({ props: props2, emit }) => (value) => {
  if (props2.multiple) {
    let modelValue = props2.modelValue.slice();
    value.forEach((val) => {
      modelValue = modelValue.filter((item) => item !== val);
    });
    emit("update:modelValue", value.concat(modelValue));
  }
};
const watchShowClose = ({ nextTick, state, parent }) => () => {
  nextTick(() => {
    const parentEl = parent.$el;
    const inputEl = parentEl.querySelector('input[data-tag="tiny-input-inner"]');
    if (inputEl) {
      const { paddingRight } = getComputedStyle(inputEl);
      state.inputPaddingRight = parseFloat(paddingRight);
    }
  });
};
const computedGetIcon = ({ designConfig, props: props2 }) => () => {
  return props2.dropdownIcon ? { icon: props2.dropdownIcon } : {
    icon: (designConfig == null ? void 0 : designConfig.icons.dropdownIcon) || "icon-delta-down",
    isDefault: true
  };
};
const computedGetTagType = ({ designConfig, props: props2 }) => () => {
  var _a;
  if (((_a = designConfig == null ? void 0 : designConfig.props) == null ? void 0 : _a.tagType) && !props2.tagType) {
    return designConfig.props.tagType;
  }
  return props2.tagType;
};
const clearSearchText = ({ state, api: api2 }) => () => {
  state.query = "";
  state.previousQuery = void 0;
  api2.handleQueryChange(state.query);
};
const clearNoMatchValue = ({ props: props2, emit }) => (newModelValue) => {
  if (!props2.clearNoMatchValue) {
    return;
  }
  if (props2.multiple && props2.modelValue.length !== newModelValue.length || !props2.multiple && props2.modelValue !== newModelValue) {
    emit("update:modelValue", newModelValue);
  }
};
const handleDebouncedQueryChange = ({ state, api: api2 }) => debounce_default(state.debounce, (value) => {
  api2.handleQueryChange(value);
});
const onClickCollapseTag = ({ state, props: props2, nextTick, api: api2 }) => (event) => {
  event.stopPropagation();
  if (props2.clickExpand && !props2.disabled && !state.isDisplayOnly) {
    state.showCollapseTag = !state.showCollapseTag;
    nextTick(api2.resetInputHeight);
  }
};
const api$7 = [
  "state",
  "nodeCollapse",
  "nodeExpand",
  "toggleCheckAll",
  "handleCopyClick",
  "focus",
  "blur",
  "showTip",
  "doDestroy",
  "getOption",
  "emitChange",
  "handleBlur",
  "toggleMenu",
  "getValueKey",
  "handleFocus",
  "handleClose",
  "setSoftFocus",
  "getValueIndex",
  "scrollToOption",
  "resetHoverIndex",
  "onOptionDestroy",
  "resetInputWidth",
  "resetInputHeight",
  "managePlaceholder",
  "checkDefaultFirstOption",
  "setOptionHighlight",
  "toggleLastOptionHitState",
  "deleteTag",
  "setSelected",
  "selectOption",
  "handleResize",
  "deletePrevTag",
  "onInputChange",
  "deleteSelected",
  "handleMenuEnter",
  "resetInputState",
  "handleClearClick",
  "handleComposition",
  "handleQueryChange",
  "handleOptionSelect",
  "debouncedOnInputChange",
  "debouncedQueryChange",
  "navigateOptions",
  "selectChange",
  "radioChange",
  "treeNodeClick",
  "nodeCheckClick",
  "buildSelectConfig",
  "buildRadioConfig",
  "onMouseenterNative",
  "onMouseleaveNative",
  "onCopying",
  "handleDropdownClick",
  "handleEnterTag",
  "getLabelSlotValue",
  "loadTreeData",
  "updateModelValue",
  "clearSearchText",
  "onClickCollapseTag"
];
const initState$2 = ({ reactive: reactive2, computed, props: props2, api: api2, emitter, parent, constants, useBreakpoint, vm, designConfig }) => {
  const stateAdd = initStateAdd({ computed, props: props2, api: api2, parent });
  const state = reactive2(__spreadProps(__spreadValues({}, stateAdd), {
    selectEmitter: emitter(),
    datas: [],
    initDatas: [],
    query: "",
    magicKey: 0,
    options: [],
    visible: false,
    showCopy: computed(() => api2.computedShowCopy()),
    showWarper: true,
    // 显示下拉外层控制
    selected: props2.multiple ? [] : {},
    softFocus: false,
    hover: false,
    triggerSearch: false,
    firstAutoSearch: props2.remoteConfig.autoSearch,
    tagsStyle: computed(() => api2.computedTagsStyle()),
    readonly: computed(() => api2.computedReadonly()),
    iconClass: computed(() => state.visible ? "" : constants.CLASS.IsReverse),
    showClose: computed(() => api2.computedShowClose()),
    optionsAllDisabled: computed(() => api2.computedOptionsAllDisabled()),
    collapseTagSize: computed(() => api2.computedCollapseTagSize()),
    showNewOption: computed(() => api2.computedShowNewOption()),
    selectSize: computed(() => props2.size || state.formItemSize),
    optimizeOpts: computed(() => api2.computeOptimizeOpts()),
    optimizeStore: { valueIndex: 0, recycleScrollerHeight: computed(() => api2.recycleScrollerHeight()) },
    collapseTags: computed(() => api2.computeCollapseTags()),
    multipleLimit: computed(() => api2.computeMultipleLimit()),
    disabledTooltipContent: computed(() => api2.computedDisabledTooltipContent()),
    isExpand: computed(() => api2.computedIsExpand()),
    collapseTagsLength: 0,
    initValue: [],
    key: 0,
    device: "",
    timer: null,
    modelValue: [],
    queryValue: "",
    selectedCopy: [],
    compareValue: null,
    selectedVal: computed(
      () => state.device === "mb" && props2.multiple && state.visible ? state.selectedCopy : state.selected
    ),
    displayOnlyContent: computed(
      () => props2.multiple && Array.isArray(state.selected) ? state.selected.map((item) => item.state ? item.state.currentLabel : item.currentLabel).join("; ") : ""
    ),
    breakpoint: useBreakpoint ? useBreakpoint().current : "",
    isSaaSTheme: vm.theme === "saas",
    disabledOptionHover: false,
    hasClearSelection: false,
    // tiny 新增
    getIcon: computed(() => api2.computedGetIcon()),
    getTagType: computed(() => api2.computedGetTagType()),
    isSelectAll: computed(() => state.selectCls === "checked-sur"),
    autoHideDownIcon: (() => {
      if ((designConfig == null ? void 0 : designConfig.state) && "autoHideDownIcon" in designConfig.state) {
        return designConfig.state.autoHideDownIcon;
      }
      return true;
    })()
  }));
  return state;
};
const initStateAdd = ({ computed, props: props2, api: api2, parent }) => {
  return {
    selectedTags: [],
    tips: "",
    showTip: false,
    tipHover: false,
    selectHover: false,
    tipTimer: null,
    selectCls: "checked-sur",
    filteredSelectCls: "checked-sur",
    overflow: null,
    completed: false,
    inputWidth: 0,
    inputPaddingRight: 0,
    hoverIndex: -1,
    hoverValue: -1,
    optionsIndex: -1,
    inputLength: 20,
    optionsCount: 0,
    selectFiexd: {},
    createdLabel: null,
    isSilentBlur: false,
    cachedOptions: [],
    selectedLabel: "",
    previousQuery: null,
    inputHovering: false,
    createdSelected: false,
    isOnComposition: false,
    cachedPlaceHolder: props2.placeholder,
    inputHeight: 0,
    initialInputHeight: 0,
    currentPlaceholder: props2.placeholder,
    filteredOptionsCount: 0,
    gridData: [],
    treeData: [],
    remoteData: [],
    currentKey: props2.modelValue,
    updateId: "",
    popperElm: null,
    debounce: computed(() => isNumber(props2.queryDebounce) ? props2.queryDebounce : props2.remote ? 300 : 0),
    emptyText: computed(() => api2.emptyText()),
    emptyFlag: computed(() => api2.emptyFlag()),
    formItemSize: computed(() => (parent.formItem || { state: {} }).state.formItemSize),
    selectDisabled: computed(() => api2.computedSelectDisabled()),
    isDisplayOnly: computed(() => props2.displayOnly || (parent.form || {}).displayOnly),
    gridCheckedData: computed(() => api2.getcheckedData()),
    isExpandAll: computed(() => api2.computedIsExpandAll()),
    searchSingleCopy: computed(() => props2.allowCopy && !props2.multiple && props2.filterable),
    childrenName: computed(() => props2.treeOp.props && props2.treeOp.props.children || "children"),
    tooltipContent: {},
    isHidden: false,
    defaultCheckedKeys: [],
    optionIndexArr: [],
    showCollapseTag: false,
    exceedMaxVisibleRow: false,
    // 是否超出默认最大显示行数
    toHideIndex: Infinity
    // 第一个超出被隐藏的索引
  };
};
const initApi$2 = ({
  api: api2,
  props: props2,
  state,
  emit,
  maskState,
  constants,
  parent,
  nextTick,
  dispatch,
  t: t2,
  vm,
  isMobileFirstMode,
  designConfig
}) => {
  Object.assign(api2, {
    state,
    maskState,
    doDestroy: doDestroy(vm),
    getTreeData: getTreeData(props2, state),
    blur: blur({ vm, state }),
    focus: focus({ vm, state }),
    getValueKey: getValueKey(props2),
    handleClose: handleClose(state),
    getValueIndex: getValueIndex(props2),
    getChildValue: getChildValue(),
    getOption: getOption({ props: props2, state, api: api2 }),
    getSelectedOption: getSelectedOption({ props: props2, state }),
    emitChange: emitChange({ emit, props: props2, state, constants }),
    directEmitChange: directEmitChange({ emit, props: props2, state, constants }),
    toggleMenu: toggleMenu({ vm, state, props: props2, api: api2, isMobileFirstMode }),
    showTip: showTip({ props: props2, state, vm }),
    onOptionDestroy: onOptionDestroy(state),
    setSoftFocus: setSoftFocus({ vm, state }),
    getcheckedData: getcheckedData({ props: props2, state }),
    resetInputWidth: resetInputWidth({ vm, state }),
    resetHoverIndex: resetHoverIndex({ props: props2, state }),
    resetDatas: resetDatas({ props: props2, state }),
    scrollToOption: scrollToOption({ vm, constants }),
    selectChange: selectChange({ emit, props: props2, vm, state, api: api2 }),
    radioChange: radioChange({ emit, props: props2, state, api: api2, vm }),
    handleCopyClick: handleCopyClick({ parent, props: props2, state }),
    treeNodeClick: treeNodeClick({ emit, props: props2, state, api: api2, vm }),
    managePlaceholder: managePlaceholder({ vm, state }),
    nodeCheckClick: nodeCheckClick({ emit, props: props2, state, api: api2 }),
    checkDefaultFirstOption: checkDefaultFirstOption(state),
    setOptionHighlight: setOptionHighlight(state),
    nodeExpand: nodeExpand({ state, constants, nextTick }),
    nodeCollapse: nodeCollapse({ state, constants, nextTick }),
    handleBlur: handleBlur({ constants, dispatch, emit, state, designConfig }),
    toggleLastOptionHitState: toggleLastOptionHitState({ state }),
    emptyText: emptyText({ I18N: constants.I18N, props: props2, state, t: t2, isMobileFirstMode }),
    emptyFlag: emptyFlag({ props: props2, state }),
    getOptionIndexArr: getOptionIndexArr({ props: props2, state, api: api2 }),
    queryVisibleOptions: queryVisibleOptions({ props: props2, vm, isMobileFirstMode }),
    recycleScrollerHeight: recycleScrollerHeight({ state, props: props2, recycle: constants.RECYCLE }),
    watchPropsOption: watchPropsOption({ constants, parent, props: props2, state }),
    buildSelectConfig: buildSelectConfig({ props: props2, state }),
    buildRadioConfig: buildRadioConfig({ props: props2, state }),
    onMouseenterNative: onMouseenterNative({ state }),
    onMouseleaveNative: onMouseleaveNative({ state }),
    onCopying: onCopying({ state, vm }),
    gridOnQueryChange: gridOnQueryChange({ props: props2, vm, constants, state }),
    watchHoverIndex: watchHoverIndex({ state }),
    computeOptimizeOpts: computeOptimizeOpts({ props: props2, designConfig }),
    computeCollapseTags: computeCollapseTags(props2),
    computeMultipleLimit: computeMultipleLimit({ props: props2, state }),
    watchInputHover: watchInputHover({ vm }),
    initQuery: initQuery({ props: props2, state, constants, vm }),
    updateModelValue: updateModelValue({ props: props2, emit, state }),
    computedTagsStyle: computedTagsStyle({ props: props2, parent, state, vm }),
    computedReadonly: computedReadonly({ props: props2, state }),
    computedShowClose: computedShowClose({ props: props2, state }),
    computedCollapseTagSize: computedCollapseTagSize(state),
    computedShowNewOption: computedShowNewOption({ props: props2, state }),
    computedShowCopy: computedShowCopy({ props: props2, state }),
    computedOptionsAllDisabled: computedOptionsAllDisabled(state),
    computedDisabledTooltipContent: computedDisabledTooltipContent(state),
    computedSelectDisabled: computedSelectDisabled({ props: props2, parent }),
    computedIsExpand: computedIsExpand({ props: props2, state }),
    computedIsExpandAll: computedIsExpandAll(props2),
    watchInitValue: watchInitValue({ props: props2, emit }),
    watchShowClose: watchShowClose({ nextTick, state, parent }),
    // tiny 新增
    computedGetIcon: computedGetIcon({ designConfig, props: props2 }),
    computedGetTagType: computedGetTagType({ designConfig, props: props2 }),
    clearSearchText: clearSearchText({ state, api: api2 }),
    clearNoMatchValue: clearNoMatchValue({ props: props2, emit })
  });
  addApi({ api: api2, props: props2, state, emit, constants, parent, nextTick, dispatch, vm, isMobileFirstMode, designConfig });
};
const addApi = ({
  api: api2,
  props: props2,
  state,
  emit,
  constants,
  parent,
  nextTick,
  dispatch,
  vm,
  isMobileFirstMode,
  designConfig
}) => {
  Object.assign(api2, {
    resetInputHeight: resetInputHeight({ api: api2, constants, nextTick, props: props2, vm, state, designConfig }),
    calcOverFlow: calcOverFlow({ vm, props: props2, state }),
    handleFocus: handleFocus({ api: api2, emit, props: props2, state }),
    deleteTag: deleteTag({ api: api2, constants, emit, props: props2, vm, nextTick, state }),
    watchValue: watchValue({ api: api2, constants, dispatch, props: props2, vm, state }),
    toHide: toHide({ constants, state, props: props2, vm, api: api2 }),
    toVisible: toVisible({ constants, state, props: props2, vm, api: api2, nextTick }),
    setSelected: setSelected({ api: api2, constants, nextTick, props: props2, vm, state }),
    selectOption: selectOption({ api: api2, state, props: props2 }),
    handleResize: handleResize$1({ api: api2, props: props2, state }),
    watchOptions: watchOptions({ api: api2, constants, nextTick, parent, props: props2, state, vm }),
    watchVisible: watchVisible({ api: api2, constants, emit, state, vm, props: props2, isMobileFirstMode }),
    deletePrevTag: deletePrevTag({ api: api2, constants, props: props2, state, vm }),
    onInputChange: onInputChange({ api: api2, props: props2, state, constants, nextTick }),
    deleteSelected: deleteSelected$1({ api: api2, constants, emit, props: props2, vm, state }),
    handleMenuEnter: handleMenuEnter({ api: api2, nextTick, state, props: props2 }),
    resetInputState: resetInputState({ api: api2, vm, state }),
    navigateOptions: navigateOptions({ api: api2, state, props: props2, nextTick }),
    handleClearClick: handleClearClick(api2),
    handleComposition: handleComposition({ api: api2, nextTick, state }),
    handleQueryChange: handleQueryChange$1({ api: api2, constants, nextTick, props: props2, vm, state }),
    handleOptionSelect: handleOptionSelect({ api: api2, nextTick, props: props2, vm, state }),
    getPluginOption: getPluginOption({ api: api2, props: props2, state }),
    toggleCheckAll: toggleCheckAll({ api: api2, emit, state, props: props2 }),
    handleDebouncedQueryChange: handleDebouncedQueryChange({ state, api: api2 }),
    debouncedQueryChange: (event) => {
      const value = props2.shape ? event : event.target.value;
      api2.handleDebouncedQueryChange(value);
    },
    debouncedOnInputChange: debounce_default(state.debounce, () => {
      api2.onInputChange();
    }),
    debouncRquest: debouncRquest({ api: api2, state, props: props2 }),
    defaultOnQueryChange: defaultOnQueryChange({ props: props2, state, constants, api: api2, nextTick, vm }),
    queryChange: queryChange({ props: props2, state, constants, api: api2, nextTick, vm }),
    mounted: mounted$2({ api: api2, parent, state, props: props2, vm, designConfig }),
    unMount: unMount({ api: api2, parent, vm, state }),
    watchOptimizeOpts: watchOptimizeOpts({ props: props2, state }),
    handleDropdownClick: handleDropdownClick({ props: props2, vm, state, emit }),
    handleEnterTag: handleEnterTag({ state }),
    calcCollapseTags: calcCollapseTags({ state, vm, props: props2 }),
    initValue: initValue({ state }),
    getLabelSlotValue: getLabelSlotValue({ props: props2, state }),
    loadTreeData: loadTreeData({ state, vm, props: props2, api: api2 }),
    onClickCollapseTag: onClickCollapseTag({ state, props: props2, nextTick, api: api2 })
  });
};
const initWatch$2 = ({ watch, props: props2, api: api2, state, nextTick }) => {
  watch(
    () => props2.treeOp.data,
    (data) => data && (state.treeData = data),
    { immediate: true, deep: true }
  );
  watch(
    () => props2.gridOp.data,
    (data) => data && (state.gridData = data),
    { immediate: true, deep: true }
  );
  watch(
    () => state.selectDisabled,
    () => nextTick(api2.resetInputHeight)
  );
  watch(
    () => props2.placeholder,
    (value) => {
      state.cachedPlaceHolder = state.currentPlaceholder = value;
    }
  );
  watch(
    () => props2.modelValue,
    () => {
      if (props2.multiple && Array.isArray(props2.modelValue)) {
        state.modelValue = [...props2.modelValue];
      } else {
        state.modelValue = props2.modelValue;
      }
    },
    { immediate: true, deep: true }
  );
  watch(() => state.modelValue, api2.watchValue);
  watch(
    () => state.selectedLabel,
    () => {
      if (props2.trim) {
        state.selectedLabel = state.selectedLabel.trim();
      }
    }
  );
  watch(
    () => props2.extraQueryParams,
    () => api2.handleQueryChange(state.previousQuery, true),
    { deep: true }
  );
  watch(
    () => state.breakpoint,
    (val) => {
      if (val === "default") {
        state.device = "mb";
      } else {
        state.device = "pc";
      }
    },
    { immediate: true, deep: true }
  );
  watch(
    () => state.device,
    (newVal, oldVal) => {
      if (oldVal !== "" && state.visible) {
        api2.updateModelValue(state.modelValue, true);
      }
    }
  );
  watch(() => state.visible, api2.watchVisible);
  watch(() => state.initValue, api2.watchInitValue, { deep: true });
  addWatch({ watch, props: props2, api: api2, state, nextTick });
};
const addWatch = ({ watch, props: props2, api: api2, state, nextTick }) => {
  watch(() => [...state.options], api2.watchOptions);
  if (props2.renderType === "grid" && !props2.optimization) {
    watch(() => state.gridData, api2.setSelected, { immediate: true });
  }
  if (props2.renderType === "tree" && !props2.optimization) {
    watch(() => state.treeData, api2.setSelected, { immediate: true });
  }
  watch(() => state.hoverIndex, api2.watchHoverIndex);
  props2.options && watch(() => props2.options, api2.watchPropsOption, { immediate: true, deep: true });
  props2.optimization && watch(() => state.optimizeOpts, api2.watchOptimizeOpts, { immediate: true });
  watch([() => state.inputHovering, () => state.visible], api2.watchInputHover);
  watch(() => state.showClose, api2.watchShowClose, { immediate: true });
  watch(
    () => state.selectHover,
    () => props2.hoverExpand && !props2.disabled && !state.isDisplayOnly && nextTick(api2.resetInputHeight)
  );
};
const renderless$7 = (props2, { computed, onBeforeUnmount, onMounted, reactive: reactive2, watch, provide: provide2, inject }, { vm, parent, emit, constants, nextTick, dispatch, t: t2, emitter, isMobileFirstMode, useBreakpoint, designConfig }) => {
  const api2 = {};
  const state = initState$2({
    reactive: reactive2,
    computed,
    props: props2,
    api: api2,
    emitter,
    parent,
    constants,
    useBreakpoint,
    vm,
    designConfig
  });
  const dialog = inject("dialog", null);
  provide2("selectEmitter", state.selectEmitter);
  provide2("selectVm", vm);
  const maskState = reactive2({ width: "", height: "", top: "" });
  initApi$2({
    api: api2,
    props: props2,
    state,
    emit,
    maskState,
    constants,
    parent,
    nextTick,
    dispatch,
    t: t2,
    vm,
    isMobileFirstMode,
    designConfig
  });
  parent.$on("handle-clear", (event) => {
    api2.handleClearClick(event);
  });
  if (props2.multiple && !Array.isArray(props2.modelValue)) {
    emit("update:modelValue", []);
  }
  if (!props2.multiple && Array.isArray(props2.modelValue)) {
    emit("update:modelValue", "");
  }
  dialog && dialog.state.emitter.on("handleSelectClose", api2.handleClose);
  state.selectEmitter.on(constants.EVENT_NAME.handleOptionClick, api2.handleOptionSelect);
  state.selectEmitter.on(constants.EVENT_NAME.setSelected, api2.setSelected);
  state.selectEmitter.on(constants.EVENT_NAME.initValue, api2.initValue);
  initWatch$2({ watch, props: props2, api: api2, state, nextTick });
  onMounted(api2.mounted);
  onBeforeUnmount(() => {
    api2.unMount();
    dialog && dialog.state.emitter.off("handleSelectClose", api2.handleClose);
  });
  return api2;
};
const api$6 = ["state", "visible", "hoverItem", "selectOptionClick"];
const initState$1 = ({ reactive: reactive2, computed, props: props2, api: api2, markRaw, select, parent }) => {
  const state = reactive2({
    parent: markRaw(parent),
    selectMultiple: computed(() => select.multiple),
    created: computed(() => props2.created),
    index: -1,
    hover: computed(() => !select.optimization && select.state.hoverValue === state.index),
    visible: true,
    hitState: false,
    groupDisabled: false,
    disabled: computed(() => props2.disabled || state.groupDisabled),
    isObject: computed(() => Object.prototype.toString.call(props2.value).toLowerCase() === "[object object]"),
    currentLabel: computed(() => props2.label || (state.isObject ? "" : props2.value)),
    showTitle: false,
    currentValue: computed(() => props2.value || props2.label || ""),
    itemSelected: computed(() => {
      if (!select.multiple) {
        return api2.isEqual(props2.value, select.state.modelValue);
      } else {
        return api2.contains(select.state.modelValue, props2.value);
      }
    }),
    limitReached: computed(() => {
      if (select.multiple) {
        const multipleLimit = select.state.multipleLimit;
        return !state.itemSelected && (select.state.modelValue || []).length >= multipleLimit && multipleLimit > 0;
      } else {
        return false;
      }
    }),
    selectCls: computed(() => {
      return state.itemSelected ? "checked-sur" : "check";
    })
  });
  return state;
};
const initApi$1 = ({ api: api2, props: props2, state, select, constants, vm }) => {
  Object.assign(api2, {
    state,
    isEqual: isEqual({ select, state }),
    contains: contains({ select, state }),
    hoverItem: hoverItem({ select, props: props2, state }),
    queryChange: queryChange$1({ select, props: props2, state }),
    selectOptionClick: selectOptionClick({ constants, vm, props: props2, state, select }),
    handleGroupDisabled: handleGroupDisabled({ state, vm }),
    initValue: initValue$1({ select, props: props2, constants, vm })
  });
};
const initWatch$1 = ({ watch, props: props2, state, select, constants }) => {
  watch(
    () => state.currentLabel,
    () => {
      if (!props2.created && !select.remote) {
        select.state.selectEmitter.emit(constants.EVENT_NAME.setSelected);
      }
    }
  );
  watch(
    () => props2.value,
    (value, oldVal) => {
      const { remote, valueKey } = select;
      if (!props2.created && !remote) {
        if (valueKey && typeof value === "object" && typeof oldVal === "object" && value[valueKey] === oldVal[valueKey]) {
          return;
        }
        select.state.selectEmitter.emit(constants.EVENT_NAME.setSelected);
      }
    }
  );
};
const initOnMounted = ({ onMounted, props: props2, api: api2, vm, state, constants, select }) => {
  onMounted(() => {
    state.el = vm.$el;
    toggleEvent({ props: props2, vm, type: "add" });
    if (!select.optimization) {
      select.state.selectEmitter.on(constants.EVENT_NAME.queryChange, api2.queryChange);
    }
    api2.initValue();
  });
};
const initOnBeforeUnmount = ({ onBeforeUnmount, props: props2, select, vm, state }) => {
  onBeforeUnmount(() => {
    let selectedOptions = select.multiple ? select.state.selected : [select.state.selected];
    const index3 = select.state.cachedOptions.findIndex((opt) => opt.state === state);
    const selectedIndex = selectedOptions.findIndex((opt) => opt.state === state);
    toggleEvent({ props: props2, vm, type: "remove" });
    if (index3 > -1 && selectedIndex < 0) {
      select.state.cachedOptions.splice(index3, 1);
    }
    select.onOptionDestroy(select.state.options.findIndex((opt) => opt.state === state));
  });
};
const initSelectState = ({ state, select, markRaw, props: props2 }) => {
  let vm = __spreadProps(__spreadValues({}, props2), { state });
  select.state.options.push(markRaw(vm));
  select.state.cachedOptions.push(markRaw(vm));
  select.state.optionsIndex++;
  state.index = select.state.optionsIndex;
  select.state.optionsCount++;
  select.state.filteredOptionsCount++;
};
const renderless$6 = (props2, { computed, onMounted, onBeforeUnmount, reactive: reactive2, watch, inject, markRaw }, { vm, parent }) => {
  const api2 = {};
  const select = inject("select");
  const constants = select._constants;
  const state = initState$1({ reactive: reactive2, computed, props: props2, api: api2, markRaw, select, parent });
  initApi$1({ api: api2, props: props2, state, select, constants, vm });
  initWatch$1({ watch, props: props2, state, select, constants });
  initOnMounted({ onMounted, props: props2, api: api2, vm, state, constants, select });
  initOnBeforeUnmount({ onBeforeUnmount, props: props2, select, vm, state });
  initSelectState({ state, select, markRaw, props: props2 });
  parent.$on(constants.EVENT_NAME.handleGroupDisabled, api2.handleGroupDisabled);
  return api2;
};
const index$7 = "";
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
var _export_sfc$a = function _export_sfc2(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$a(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$b = defineComponent({
  name: $prefix + "Option",
  componentName: "Option",
  components: {
    IconCheck: index$b(),
    IconCheckedSur: index$c(),
    IconFinish: index$d(),
    TinyCheckbox: Checkbox
  },
  props: [].concat(props, ["value", "label", "created", "disabled", "events", "visible", "highlightClass", "required", "icon"]),
  setup: function setup$1(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$6,
      api: api$6
    });
  }
});
var _hoisted_1$8 = ["data-index"];
var _hoisted_2$8 = {
  key: 0,
  class: "tiny-option__checkbox-wrap tiny-select-dropdown__item-checkbox"
};
var _hoisted_3$7 = ["title"];
function _sfc_render$a(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_checkbox = resolveComponent("tiny-checkbox");
  return withDirectives((openBlock(), createElementBlock("li", {
    ref: "option",
    onMouseenter: _cache[0] || (_cache[0] = function() {
      return _ctx.hoverItem && _ctx.hoverItem.apply(_ctx, arguments);
    }),
    onClick: _cache[1] || (_cache[1] = withModifiers(function() {
      return _ctx.selectOptionClick && _ctx.selectOptionClick.apply(_ctx, arguments);
    }, ["stop"])),
    onMousedown: _cache[2] || (_cache[2] = withModifiers(function() {
    }, ["stop"])),
    "data-tag": "tiny-option",
    "data-index": _ctx.state.index,
    class: normalizeClass(["tiny-option tiny-select-dropdown__item", [{
      selected: _ctx.state.itemSelected,
      "is-disabled": _ctx.disabled || _ctx.state.groupDisabled || _ctx.state.limitReached,
      hover: _ctx.state.hover && !_ctx.state.limitReached,
      "is-required": _ctx.required
    }, _ctx.highlightClass]])
  }, [_ctx.state.selectMultiple ? (openBlock(), createElementBlock("span", _hoisted_2$8, [createVNode(_component_tiny_checkbox, {
    "model-value": _ctx.state.itemSelected,
    disabled: _ctx.disabled || _ctx.state.groupDisabled || _ctx.state.limitReached
  }, null, 8, ["model-value", "disabled"])])) : createCommentVNode("v-if", true), _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), {
    key: 1,
    class: "tiny-option__icon"
  })) : createCommentVNode("v-if", true), createBaseVNode(
    "div",
    {
      class: normalizeClass(["tiny-option-wrapper", _ctx.state.selectMultiple ? "calc-width" : "full-width"])
    },
    [renderSlot(_ctx.$slots, "default", {}, function() {
      return [createBaseVNode("span", {
        class: "tiny-option-label",
        title: _ctx.state.showTitle ? _ctx.state.currentLabel : ""
      }, toDisplayString(_ctx.state.currentLabel), 9, _hoisted_3$7)];
    })],
    2
    /* CLASS */
  )], 42, _hoisted_1$8)), [[vShow, _ctx.visible && _ctx.state.visible]]);
}
var pc$4 = /* @__PURE__ */ _export_sfc$a(_sfc_main$b, [["render", _sfc_render$a]]);
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
var _export_sfc$9 = function _export_sfc22(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$9(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$a = defineComponent({
  components: {
    IconCheck: index$b(),
    IconCheckedSur: index$c(),
    IconFinish: index$d()
  },
  props: [].concat(props, ["value", "label", "created", "disabled", "events", "visible", "highlightClass", "required"]),
  setup: function setup$12(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$6,
      api: api$6
    });
  }
});
var _hoisted_1$7 = ["data-index"];
var _hoisted_2$7 = {
  key: 0,
  class: "w-4 mr-2"
};
var _hoisted_3$6 = {
  class: "inline-block flex-1 leading-5 overflow-hidden text-ellipsis whitespace-normal sm:whitespace-nowrap"
};
var _hoisted_4$6 = {
  key: 1,
  class: "inline-block sm:hidden w-4 ml-4 shrink-0"
};
function _sfc_render$9(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_finish = resolveComponent("icon-finish");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "option",
    onMouseenter: _cache[0] || (_cache[0] = function() {
      return _ctx.hoverItem && _ctx.hoverItem.apply(_ctx, arguments);
    }),
    onClick: _cache[1] || (_cache[1] = withModifiers(function() {
      return _ctx.selectOptionClick && _ctx.selectOptionClick.apply(_ctx, arguments);
    }, ["stop"])),
    onMousedown: _cache[2] || (_cache[2] = withModifiers(function() {
    }, ["stop"])),
    "data-index": _ctx.state.index,
    class: normalizeClass(_ctx.m("h-fit flex items-center justify-between rounded text-color-text-primary text-sm sm:text-xs", "min-h-[40px] sm:min-h-[32px] cursor-pointer group sm:hover:bg-color-bg-4 sm:active:bg-color-bg-3 pl-0 pr-3 sm:px-3 my-1 sm:m-1", {
      "text-color-brand bg-color-bg-1 sm:bg-color-fill-6": _ctx.state.itemSelected && !_ctx.disabled,
      "text-color-text-disabled cursor-not-allowed [&_svg]:fill-color-icon-disabled [&_svg_path:first-of-type]:fill-color-bg-3": _ctx.disabled || _ctx.state.groupDisabled || _ctx.state.limitReached,
      "bg-color-bg-1 sm:bg-color-bg-4": _ctx.state.hover,
      "text-color-text-disabled cursor-not-allowed": _ctx.required
    }, _ctx.highlightClass)),
    "data-tag": "tiny-select-dropdown-item"
  }, [_ctx.state.selectMultiple ? (openBlock(), createElementBlock("span", _hoisted_2$7, [(openBlock(), createBlock(resolveDynamicComponent("icon-" + _ctx.state.selectCls), {
    class: normalizeClass(_ctx.m("fill-color-icon-secondary relative", {
      "group-hover:fill-color-brand-hover": _ctx.state.hover,
      "fill-color-brand": _ctx.state.itemSelected,
      "fill-color-brand-disabled": _ctx.state.itemSelected && _ctx.required
    }))
  }, null, 8, ["class"]))])) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default", {}, function() {
    return [createBaseVNode(
      "span",
      _hoisted_3$6,
      toDisplayString(_ctx.state.currentLabel),
      1
      /* TEXT */
    )];
  }), !_ctx.state.selectMultiple && _ctx.state.itemSelected && !_ctx.disabled && !_ctx.state.groupDisabled ? (openBlock(), createElementBlock("span", _hoisted_4$6, [createVNode(_component_icon_finish, {
    "custom-class": "w-4 h-4 fill-color-brand"
  })])) : createCommentVNode("v-if", true)], 42, _hoisted_1$7)), [[vShow, _ctx.visible && _ctx.state.visible]]);
}
var mobileFirst$3 = /* @__PURE__ */ _export_sfc$9(_sfc_main$a, [["render", _sfc_render$9]]);
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
var template$4 = function template2(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$4;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$3;
  }
  return pc$4;
};
var optionsProps = _extends$7({}, $props, {
  value: {
    required: true
  },
  label: [String, Number],
  created: Boolean,
  disabled: {
    type: Boolean,
    default: false
  },
  events: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  visible: {
    type: Boolean,
    default: true
  },
  highlightClass: String,
  required: {
    type: Boolean,
    default: false
  },
  // tiny 新增
  icon: Object
});
var Option = defineComponent({
  name: $prefix + "Option",
  componentName: "Option",
  props: optionsProps,
  setup: function setup2(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$4
    });
  }
});
var version$6 = "3.16.0";
Option.install = function(Vue) {
  Vue.component(Option.name, Option);
};
Option.version = version$6;
const horizontal = {
  key: "horizontal",
  offset: "offsetWidth",
  scroll: "scrollLeft",
  scrollSize: "scrollWidth",
  size: "width",
  axis: "X",
  client: "clientX",
  direction: "left"
};
const vertical = {
  key: "vertical",
  offset: "offsetHeight",
  scroll: "scrollTop",
  scrollSize: "scrollHeight",
  size: "height",
  axis: "Y",
  client: "clientY",
  direction: "top"
};
const BAR_MAP = {
  horizontal,
  vertical
};
const renderThumbStyle = ({ bar, move, size }) => {
  const style = {};
  const translate = `translate${bar.axis}(${move}%)`;
  style[bar.size] = size;
  Object.assign(style, { transform: translate, msTransform: translate, webkitTransform: translate });
  return style;
};
const clickThumbHandler = ({ api: api2, state }) => (event) => {
  if (event.ctrlKey || event.button === 2) {
    return;
  }
  api2.startDrag(event);
  state[state.bar.axis] = event.currentTarget[state.bar.offset] - (event[state.bar.client] - event.currentTarget.getBoundingClientRect()[state.bar.direction]);
};
const clickTrackHandler = ({ vm, state }) => (event) => {
  const offset = Math.abs(event.target.getBoundingClientRect()[state.bar.direction] - event[state.bar.client]);
  const thumbHalf = vm.$refs.thumb[state.bar.offset] / 2;
  const thumbPositionPercentage = (offset - thumbHalf) * 100 / vm.$refs.bar[state.bar.offset];
  state.wrap[state.bar.scroll] = thumbPositionPercentage * state.wrap[state.bar.scrollSize] / 100;
};
const startDrag = ({ api: api2, on: on2, state }) => (event) => {
  event.stopImmediatePropagation();
  state.cursorDown = true;
  on2(document, "mousemove", api2.mouseMoveDocumentHandler);
  on2(document, "mouseup", api2.mouseUpDocumentHandler);
  document.onselectstart = () => false;
};
const mouseMoveDocumentHandler = ({ vm, state }) => (event) => {
  if (state.cursorDown === false) {
    return;
  }
  const prevPage = state[state.bar.axis];
  if (!prevPage) {
    return;
  }
  const offset = (vm.$refs.bar.getBoundingClientRect()[state.bar.direction] - event[state.bar.client]) * -1;
  const thumbClickPosition = vm.$refs.thumb[state.bar.offset] - prevPage;
  const thumbPositionPercentage = (offset - thumbClickPosition) * 100 / vm.$refs.bar[state.bar.offset];
  state.wrap[state.bar.scroll] = thumbPositionPercentage * state.wrap[state.bar.scrollSize] / 100;
};
const mouseUpDocumentHandler = ({ api: api2, off: off2, state }) => () => {
  state.cursorDown = false;
  state[state.bar.axis] = 0;
  off2(document, "mousemove", api2.mouseMoveDocumentHandler);
  document.onselectstart = null;
};
const handleScroll$1 = ({ vm, state, emit }) => (event) => {
  const wrap = vm.$refs.wrap;
  state.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
  state.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
  emit("scroll", event);
};
const update$1 = ({ vm, state }) => () => {
  let heightPercentage, widthPercentage;
  const wrap = vm.$refs.wrap;
  if (!wrap) {
    return;
  }
  heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
  widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;
  state.sizeHeight = heightPercentage < 100 ? heightPercentage + "%" : "";
  state.sizeWidth = widthPercentage < 100 ? widthPercentage + "%" : "";
};
const api$5 = ["state", "update", "handleScroll"];
const renderless$5 = (props2, { onBeforeUnmount, onMounted, reactive: reactive2 }, { vm, nextTick, emit }) => {
  const state = reactive2({
    sizeWidth: "0",
    sizeHeight: "0",
    moveX: 0,
    moveY: 0
  });
  const api2 = {
    state,
    update: update$1({ vm, state }),
    handleScroll: handleScroll$1({ vm, state, emit })
  };
  onMounted(() => {
    if (props2.native) {
      return;
    }
    nextTick(api2.update);
    !props2.noresize && addResizeListener(vm.$refs.resize, api2.update);
  });
  onBeforeUnmount(() => {
    if (props2.native) {
      return;
    }
    !props2.noresize && removeResizeListener(vm.$refs.resize, api2.update);
  });
  return api2;
};
let scrollBarWidth;
const isServer = typeof window === "undefined";
function scrollbar_width_default() {
  if (isServer) {
    return 0;
  }
  if (scrollBarWidth !== void 0) {
    return scrollBarWidth;
  }
  const container = document.createElement("div");
  container.className = "tiny-scrollbar";
  container.style.visibility = "hidden";
  container.style.position = "absolute";
  container.style.top = "-9999px";
  const outer = document.createElement("div");
  outer.className = "tiny-scrollbar__wrap";
  outer.style.width = "100px";
  container.appendChild(outer);
  document.body.appendChild(container);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
}
const api$4 = [
  "state",
  "startDrag",
  "renderThumbStyle",
  "clickTrackHandler",
  "clickThumbHandler",
  "mouseUpDocumentHandler",
  "mouseMoveDocumentHandler"
];
const renderless$4 = (props2, { computed, onUnmounted, reactive: reactive2 }, { vm, parent }) => {
  const state = reactive2({
    bar: computed(() => BAR_MAP[props2.vertical ? "vertical" : "horizontal"]),
    wrap: computed(() => parent.$refs.wrap)
  });
  const api2 = {
    state,
    renderThumbStyle,
    clickTrackHandler: clickTrackHandler({ vm, state }),
    mouseMoveDocumentHandler: mouseMoveDocumentHandler({ vm, state })
  };
  onUnmounted(() => off(document, "mouseup", api2.mouseUpDocumentHandler));
  return Object.assign(api2, {
    startDrag: startDrag({ api: api2, on, state }),
    clickThumbHandler: clickThumbHandler({ api: api2, state }),
    mouseUpDocumentHandler: mouseUpDocumentHandler({ api: api2, off, state })
  });
};
const index$6 = "";
var _sfc_main$1$1 = /* @__PURE__ */ defineComponent({
  name: $prefix + "Bar",
  props: {
    vertical: Boolean,
    show: Boolean,
    size: String,
    move: Number
  },
  setup: function setup$13(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$4,
      api: api$4,
      mono: true,
      h
    });
  },
  render: function render2() {
    var size = this.size, move = this.move, show = this.show, renderThumbStyle2 = this.renderThumbStyle, clickTrackHandler2 = this.clickTrackHandler, clickThumbHandler2 = this.clickThumbHandler, bar = this.state.bar;
    return createVNode("div", {
      "ref": "bar",
      "class": ["tiny-scrollbar__bar", "is-" + bar.key, show ? "is-show" : ""],
      "onMousedown": clickTrackHandler2
    }, [createVNode("div", {
      "ref": "thumb",
      "class": "tiny-scrollbar__thumb",
      "onMousedown": clickThumbHandler2,
      "style": renderThumbStyle2({
        bar,
        move,
        size
      })
    }, null)]);
  }
});
var _sfc_main$9 = /* @__PURE__ */ defineComponent({
  name: $prefix + "Scrollbar",
  emits: ["mouseenter", "mousemove", "scroll"],
  components: {
    Bar: _sfc_main$1$1
  },
  props: {
    marginBottomAdjust: {
      type: Number,
      default: 0
    },
    native: Boolean,
    // 如果container尺寸不会发生变化，最好设置它可以优化性能
    noresize: Boolean,
    // select 选择器下拉框数据过多时默认显示滚动条
    show: Boolean,
    tag: {
      type: String,
      default: "div"
    },
    viewClass: {},
    viewStyle: {},
    wrapClass: {},
    wrapStyle: {}
  },
  setup: function setup22(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$5,
      api: api$5,
      mono: true
    });
  },
  render: function render22() {
    var _this = this;
    var tag = this.tag, $slots = this.vm.$slots, native = this.native, wrapStyle = this.wrapStyle, wrapClass = this.wrapClass, viewStyle = this.viewStyle, viewClass = this.viewClass, handleScroll2 = this.handleScroll, state = this.state, show = this.show, marginBottomAdjust = this.marginBottomAdjust;
    var gutter = scrollbar_width_default();
    var style = wrapStyle;
    if (gutter) {
      var gutterWith = "-" + gutter + "px";
      var gutterHeight = "-" + (gutter - marginBottomAdjust) + "px";
      var gutterStyle = "margin-bottom: " + gutterHeight + "; margin-right: " + gutterWith + ";";
      if (Array.isArray(wrapStyle)) {
        style = toObject(wrapStyle);
        style.marginRight = gutterWith;
        style.marginBottom = gutterHeight;
      } else if (typeof wrapStyle === "string") {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }
    var view = h(tag, {
      class: ["tiny-scrollbar__view", viewClass],
      style: viewStyle,
      ref: "resize"
    }, $slots.default ? $slots.default() : $slots.empty && $slots.empty());
    var wrap = createVNode("div", {
      "ref": "wrap",
      "style": style,
      "onScroll": handleScroll2,
      "class": [wrapClass, "tiny-scrollbar__wrap", gutter ? "" : "tiny-scrollbar__wrap--hidden-default"]
    }, [[view]]);
    var nodes;
    if (native) {
      nodes = [createVNode("div", {
        "ref": "wrap",
        "class": [wrapClass, "tiny-scrollbar__wrap"],
        "style": style
      }, [[view]])];
    } else {
      nodes = [wrap, createVNode(_sfc_main$1$1, {
        "move": state.moveX,
        "size": state.sizeWidth,
        "show": show
      }, null), createVNode(_sfc_main$1$1, {
        "vertical": true,
        "move": state.moveY,
        "size": state.sizeHeight,
        "show": show
      }, null)];
    }
    return createVNode("div", {
      "class": "tiny-scrollbar",
      "onMouseenter": function onMouseenter(e) {
        _this.$emit("mouseenter", e);
      },
      "onMousemove": function onMousemove(e) {
        _this.$emit("mousemove", e);
      }
    }, [nodes]);
  }
});
var version$5 = "3.16.0";
_sfc_main$9.install = function(Vue) {
  Vue.component(_sfc_main$9.name, _sfc_main$9);
};
_sfc_main$9.version = version$5;
const mounted$1 = ({ selectEmitter, constants, state, selectVm, updatePopper, destroyPopper, parent }) => () => {
  selectEmitter.on(constants.EVENT_NAME.updatePopper, (keepZIndex) => {
    let hideDrop = false;
    if (!state.referenceElm || state.referenceElm.nodeType !== 1) {
      state.referenceElm = selectVm.$refs.reference ? selectVm.$refs.reference.$el : selectVm.$refs.select;
      selectVm.popperElm = selectVm.state.popperElm = state.popperElm = parent.$el;
    }
    if (parent.select.state.visible && !hideDrop) {
      updatePopper(keepZIndex);
      hideDrop = true;
    }
  });
  selectEmitter.on(constants.EVENT_NAME.destroyPopper, destroyPopper);
};
const closeModal = ({ selectVm, state, props: props2 }) => ($event, isMask) => {
  if (!props2.closeByMask && isMask)
    return;
  selectVm.multiple && selectVm.updateModelValue(state.originValue);
  selectVm.state.visible = false;
  selectVm.state.softFocus = false;
};
const handleQueryChange = ({ selectVm }) => (value) => {
  selectVm.handleQueryChange(value);
};
const toggleSelectedBox = ({ state }) => (show) => {
  if (show) {
    state.selectedArr = state.selected.slice(0);
    state.deletedArr = [];
  }
  state.showSelectedBox = show;
};
const deleteSelected = ({ state }) => (option, clear2) => {
  if (clear2) {
    state.deletedArr = state.selectedArr.slice(0);
    state.selectedArr = [];
  } else {
    state.selectedArr = state.selectedArr.filter((item) => item[state.valueField] !== option[state.valueField]);
    state.deletedArr.push(option);
  }
};
const selectedBoxConfirm = ({ state, selectVm }) => () => {
  if (state.deletedArr.length) {
    if (state.deletedArr.length === state.selected.length) {
      selectVm.updateModelValue([]);
    } else {
      selectVm.updateModelValue(state.selectedArr.map((item) => item[state.valueField]));
    }
  }
  state.showSelectedBox = false;
};
const selectDropdownConfirm = ({ selectVm }) => () => {
  selectVm.multiple && selectVm.updateModelValue(selectVm.state.modelValue, true);
  selectVm.state.visible = false;
  selectVm.state.softFocus = false;
  selectVm.$emit("confirm", selectVm.state.modelValue);
  selectVm.emitChange(selectVm.state.modelValue, true);
};
const cancelSearch = ({ api: api2, state }) => () => {
  state.query = "";
  api2.debouncedQueryChange("");
};
const handleClear$1 = ({ selectVm }) => () => {
  selectVm.deleteSelected();
};
const api$3 = [
  "state",
  "doDestroy",
  "closeModal",
  "debouncedQueryChange",
  "toggleSelectedBox",
  "deleteSelected",
  "selectedBoxConfirm",
  "selectDropdownConfirm",
  "cancelSearch",
  "handleClear"
];
const initState = ({ reactive: reactive2, computed, popper, selectVm }) => {
  const { showPopper, currentPlacement, popperElm, referenceElm } = popper;
  const state = reactive2({
    showPopper,
    currentPlacement,
    popperElm,
    referenceElm,
    minWidth: "",
    query: "",
    showSelectedBox: false,
    debounce: 300,
    selectedArr: [],
    deletedArr: [],
    originValue: [],
    showClose: computed(() => selectVm.clearable && !selectVm.multiple && selectVm.modelValue !== ""),
    filterable: computed(() => selectVm.filterable),
    multiple: computed(() => selectVm.multiple),
    popperClass: computed(() => selectVm.popperClass),
    selected: computed(
      () => selectVm.renderType === "tree" && !selectVm.treeOp.checkStrictly ? selectVm.state.selected.filter((item) => !item.children) : selectVm.state.selected
    ),
    device: computed(() => selectVm.state.device),
    visible: false,
    windowScrollTop: 0,
    zIndex: 2e3,
    valueField: computed(() => selectVm.renderType === "tree" ? "id" : "value")
  });
  return state;
};
const initApi = ({ api: api2, popper, state, selectEmitter, constants, selectVm, parent, nextTick, props: props2 }) => {
  const { destroyPopper, doDestroy: doDestroy2, updatePopper } = popper;
  Object.assign(api2, {
    state,
    doDestroy: doDestroy2,
    handleQueryChange: handleQueryChange({ state, selectVm }),
    debouncedQueryChange: debounce_default(state.debounce, (value) => {
      api2.handleQueryChange(value);
    }),
    toggleSelectedBox: toggleSelectedBox({ state }),
    deleteSelected: deleteSelected({ state }),
    selectedBoxConfirm: selectedBoxConfirm({ state, selectVm, nextTick }),
    selectDropdownConfirm: selectDropdownConfirm({ state, selectVm }),
    closeModal: closeModal({ state, selectVm, props: props2 }),
    cancelSearch: cancelSearch({ api: api2, state, selectVm }),
    handleClear: handleClear$1({ state, selectVm }),
    mounted: mounted$1({ selectEmitter, constants, state, selectVm, updatePopper, destroyPopper, parent })
  });
};
const initWatch = ({ watch, selectVm, state, nextTick }) => {
  watch(
    () => selectVm.state.inputWidth,
    (val) => {
      nextTick(() => {
        state.minWidth = (selectVm && selectVm.$el && selectVm.$el.getBoundingClientRect().width || val) + "px";
      });
    },
    { immediate: true }
  );
  watch(
    () => state.query,
    (val) => {
      selectVm.state.queryValue = val;
    }
  );
  watch(
    () => selectVm.state.visible,
    (val) => {
      state.query = "";
      setTimeout(() => {
        state.visible = val;
        state.zIndex = popup_manager_default.nextZIndex();
      }, 0);
      if (val && selectVm.multiple) {
        state.originValue = selectVm.modelValue.slice(0);
      }
    }
  );
  watch(
    () => selectVm.shape,
    () => {
      nextTick(() => {
        state.referenceElm = selectVm.$refs.reference && selectVm.$refs.reference.$el;
      });
    }
  );
};
const renderless$3 = (props2, { computed, onBeforeUnmount, onDeactivated, onMounted, reactive: reactive2, toRefs, watch, inject }, { vm, slots, parent, emit, nextTick, isMobileFirstMode }) => {
  const api2 = {};
  const constants = parent.select._constants;
  const selectEmitter = inject("selectEmitter");
  const selectVm = inject("selectVm");
  const popper = vue_popper_default({
    emit,
    nextTick,
    onBeforeUnmount,
    onDeactivated,
    props: props2,
    reactive: reactive2,
    vm,
    slots,
    toRefs,
    watch
  });
  const state = initState({ reactive: reactive2, computed, popper, props: props2, selectVm });
  initApi({ api: api2, popper, state, selectEmitter, constants, selectVm, parent, nextTick, props: props2, isMobileFirstMode });
  initWatch({ watch, selectVm, state, nextTick, api: api2 });
  onBeforeUnmount(() => {
    popper.destroyPopper("remove");
    state.popperElm = null;
    state.referenceElm = null;
  });
  onMounted(api2.mounted);
  return api2;
};
const index$5 = "";
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
var _export_sfc$8 = function _export_sfc23(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$8(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$8 = defineComponent({
  props: [].concat(props, ["placement", "boundariesPadding", "popperOptions", "visibleArrow", "appendToBody", "transformOrigin", "reference", "popper", "offset", "modelValue", "arrowOffset", "isDropInheritWidth"]),
  setup: function setup$14(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$3,
      api: api$3
    });
  }
});
function _sfc_render$8(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-select-dropdown tiny-popper", [{
        "is-multiple": _ctx.state.multiple
      }, _ctx.state.popperClass]]),
      onMousedown: _cache[0] || (_cache[0] = withModifiers(function() {
      }, ["stop"])),
      style: normalizeStyle({
        minWidth: _ctx.state.minWidth,
        width: _ctx.isDropInheritWidth ? _ctx.state.minWidth : "auto"
      })
    },
    [renderSlot(_ctx.$slots, "default")],
    38
    /* CLASS, STYLE, NEED_HYDRATION */
  );
}
var pc$3 = /* @__PURE__ */ _export_sfc$8(_sfc_main$8, [["render", _sfc_render$8]]);
const emitInput = ({ emit }) => (...args) => {
  emit("update:modelValue", ...args);
  emit("input", ...args);
};
const handleChange = ({ emit, state }) => (event) => {
  const value = event.target.value;
  emit("change", state.searchValue, value);
};
const handleInput = ({ api: api2, props: props2, state }) => (event) => {
  const value = event.target ? event.target.value : event;
  api2.emitInput(value, state.searchValue);
};
const showSelector = ({ vm, state }) => () => {
  vm.$refs.selector.style.zIndex = popup_manager_default.nextZIndex();
  state.show = true;
};
const changeKey = ({ emit, state }) => (key) => {
  state.searchValue = key;
  state.show = false;
  emit("select", key);
};
const searchClick = ({ emit, props: props2, state }) => (event) => {
  event.preventDefault();
  if (props2.mini && state.collapse) {
    state.collapse = false;
  } else {
    emit("search", state.searchValue, state.currentValue);
  }
};
const searchEnterKey = ({ api: api2, props: props2, vm, nextTick }) => (event) => {
  if (props2.isEnterSearch) {
    api2.searchClick(event);
    nextTick(() => vm.$refs.input.blur());
  }
};
const clickOutside = ({ parent, props: props2, state }) => (event) => {
  if (!parent.$el.contains(event.target)) {
    state.show = false;
    props2.mini && !state.currentValue && (state.collapse = true);
  }
};
const setDefaultType = (searchTypes, typeValue) => {
  if (typeValue && searchTypes.includes(typeValue)) {
    return typeValue;
  }
  let type = {};
  for (let i = 0, len = searchTypes.length; i < len; i++) {
    if (isObject(searchTypes[i]) && typeOf(searchTypes[i].value) !== "undefined" && typeOf(searchTypes[i].text) !== "undefined") {
      type = searchTypes[i];
      break;
    }
  }
  return type;
};
const formatSearchTypes = (searchTypes) => {
  const types = [];
  for (let i = 0, len = searchTypes.length; i < len; i++) {
    if (isObject(searchTypes[i]) && typeOf(searchTypes[i].value) !== "undefined" && typeOf(searchTypes[i].text) !== "undefined") {
      types.push(searchTypes[i]);
    }
  }
  return types;
};
const mounted = ({ api: api2 }) => () => {
  on(document.body, "click", api2.clickOutside);
};
const beforeDestroy = ({ api: api2 }) => () => {
  off(document.body, "click", api2.clickOutside);
};
const clear = ({ api: api2, emit, vm, state }) => (event) => {
  event.preventDefault();
  state.currentValue = "";
  vm.$refs.input.focus();
  state.focus = true;
  api2.emitInput("", state.searchValue);
  emit("change", [], "");
  emit("clear");
};
const api$2 = [
  "state",
  "handleChange",
  "handleInput",
  "showSelector",
  "changeKey",
  "searchClick",
  "searchEnterKey",
  "inputStyle",
  "formatSearchTypes",
  "setDefaultType",
  "clear"
];
const useFormatSearchTypes = ({ computed, props: props2, reactive: reactive2, toRefs, watch }) => {
  const api2 = {
    setDefaultType,
    formatSearchTypes
  };
  const state = reactive2({
    searchValue: props2.typeValue,
    types: computed(() => api2.formatSearchTypes(props2.searchTypes))
  });
  watch(
    () => props2.typeValue,
    () => {
      state.searchValue = api2.setDefaultType(props2.searchTypes, props2.typeValue);
    },
    { immediate: true }
  );
  return {
    api: api2,
    state: toRefs(state)
  };
};
const renderless$2 = (props2, { computed, onBeforeUnmount, onMounted, reactive: reactive2, toRefs, watch }, { vm, parent, emit, nextTick }) => {
  const formatSearchTypes2 = useFormatSearchTypes({
    computed,
    props: props2,
    reactive: reactive2,
    toRefs,
    watch
  });
  const state = reactive2(__spreadProps(__spreadValues({
    show: false,
    focus: false,
    hovering: false,
    collapse: props2.mini,
    currentValue: props2.modelValue
  }, formatSearchTypes2.state), {
    showClear: computed(() => props2.clearable && (state.focus || state.hovering) && state.currentValue),
    formItemSize: computed(() => (parent.formItem || {}).formItemSize),
    searchSize: computed(() => props2.size || state.formItemSize)
  }));
  const api2 = __spreadValues({
    state,
    changeKey: changeKey({ state, emit }),
    handleChange: handleChange({ emit, state }),
    showSelector: showSelector({ vm, state }),
    searchClick: searchClick({ emit, props: props2, state }),
    clickOutside: clickOutside({ parent, props: props2, state }),
    emitInput: emitInput({ emit })
  }, formatSearchTypes2.api);
  Object.assign(api2, {
    clear: clear({ api: api2, emit, vm, state }),
    handleInput: handleInput({ api: api2, props: props2, state }),
    searchEnterKey: searchEnterKey({ api: api2, props: props2, vm, nextTick })
  });
  onMounted(mounted({ api: api2 }));
  onBeforeUnmount(beforeDestroy({ api: api2 }));
  watch(
    () => props2.modelValue,
    (value) => state.currentValue = value
  );
  return api2;
};
const index$4 = "";
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
var _export_sfc$7 = function _export_sfc24(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$7(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: [].concat(props, ["mini", "transparent", "searchTypes", "placeholder", "modelValue", "tabindex", "clearable", "isEnterSearch", "typeValue", "size"]),
  emits: ["change", "search", "update:modelValue", "clear", "select", "input"],
  components: {
    IconChevronDown: index$e(),
    IconSearch: index$f(),
    IconClose: index$g()
  },
  setup: function setup$15(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$2,
      api: api$2
    });
  }
});
var _hoisted_1$6 = {
  key: 0,
  class: "tiny-search__prefix"
};
var _hoisted_2$6 = {
  class: "tiny-search__text"
};
var _hoisted_3$5 = {
  class: "icon-outer"
};
var _hoisted_4$5 = ["placeholder", "tabindex"];
var _hoisted_5$4 = {
  key: 0,
  class: "tiny-search__input-btn"
};
var _hoisted_6$4 = {
  key: 2,
  class: "tiny-search__input-btn"
};
var _hoisted_7$4 = {
  ref: "selector",
  class: "tiny-search__selector"
};
var _hoisted_8$4 = {
  class: "tiny-search__selector-body"
};
var _hoisted_9$4 = {
  class: "tiny-search__poplist"
};
var _hoisted_10$3 = ["onClick"];
function _sfc_render$7(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_chevron_down = resolveComponent("icon-chevron-down");
  var _component_icon_close = resolveComponent("icon-close");
  var _component_icon_search = resolveComponent("icon-search");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-search", {
        mini: _ctx.mini
      }, {
        collapse: _ctx.state.collapse
      }, _ctx.state.searchSize ? "tiny-search--" + _ctx.state.searchSize : ""]),
      onMouseenter: _cache[11] || (_cache[11] = function($event) {
        return _ctx.state.hovering = true;
      }),
      onMouseleave: _cache[12] || (_cache[12] = function($event) {
        return _ctx.state.hovering = false;
      })
    },
    [createBaseVNode(
      "div",
      {
        class: normalizeClass(["tiny-search__line", {
          focus: _ctx.state.focus
        }])
      },
      [_ctx.slots.prefix ? (openBlock(), createElementBlock("div", _hoisted_1$6, [renderSlot(_ctx.$slots, "prefix")])) : createCommentVNode("v-if", true), createVNode(Transition, {
        name: "tiny-transition-search-line-fade",
        mode: "out-in",
        persisted: ""
      }, {
        default: withCtx(function() {
          return [withDirectives(createBaseVNode(
            "div",
            {
              class: "tiny-search__present",
              onClick: _cache[0] || (_cache[0] = function() {
                return _ctx.showSelector && _ctx.showSelector.apply(_ctx, arguments);
              })
            },
            [renderSlot(_ctx.$slots, "text", {
              slotScope: _ctx.state.searchValue
            }, function() {
              return [createBaseVNode(
                "span",
                _hoisted_2$6,
                toDisplayString(_ctx.state.searchValue.text),
                1
                /* TEXT */
              )];
            }), createBaseVNode("span", _hoisted_3$5, [createVNode(_component_icon_chevron_down, {
              class: "tiny-svg-size"
            })])],
            512
            /* NEED_PATCH */
          ), [[vShow, !_ctx.state.collapse && _ctx.state.types.length]])];
        }),
        _: 3
        /* FORWARDED */
      }), withDirectives(createBaseVNode("input", mergeProps({
        ref: "input"
      }, _ctx.a(_ctx.$attrs, ["type", "class", "style", "^on[A-Z]", "id", "disabled", "clearable"]), {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function($event) {
          return _ctx.state.currentValue = $event;
        }),
        style: _ctx.transparent ? {
          border: "transparent",
          background: _ctx.state.collapse ? "rgba(255,255,255,0.3)" : "#fff"
        } : {},
        placeholder: _ctx.placeholder,
        type: "text",
        class: "tiny-search__input",
        onKeyup: _cache[2] || (_cache[2] = withKeys(function($event) {
          return _ctx.searchEnterKey($event);
        }, ["enter"])),
        onChange: _cache[3] || (_cache[3] = function() {
          return _ctx.handleChange && _ctx.handleChange.apply(_ctx, arguments);
        }),
        onInput: _cache[4] || (_cache[4] = function() {
          return _ctx.handleInput && _ctx.handleInput.apply(_ctx, arguments);
        }),
        onFocus: _cache[5] || (_cache[5] = function($event) {
          return _ctx.state.focus = true;
        }),
        onBlur: _cache[6] || (_cache[6] = function($event) {
          return _ctx.state.focus = false;
        }),
        onSelect: _cache[7] || (_cache[7] = withModifiers(function() {
        }, ["stop"])),
        tabindex: _ctx.tabindex
      }), null, 16, _hoisted_4$5), [[vModelText, _ctx.state.currentValue]]), createVNode(Transition, {
        name: "tiny-transition-icon-scale-in"
      }, {
        default: withCtx(function() {
          return [_ctx.state.showClear && !_ctx.state.collapse ? (openBlock(), createElementBlock("div", _hoisted_5$4, [createBaseVNode("a", {
            onClick: _cache[9] || (_cache[9] = function($event) {
              return _ctx.clear($event);
            })
          }, [createVNode(_component_icon_close, {
            onMousedown: _cache[8] || (_cache[8] = withModifiers(function() {
            }, ["prevent"])),
            class: "tiny-svg-size"
          })])])) : createCommentVNode("v-if", true)];
        }),
        _: 1
        /* STABLE */
      }), _ctx.slots.suffix ? renderSlot(_ctx.$slots, "suffix", {
        key: 1
      }) : !_ctx.slots.prefix && !_ctx.slots.suffix ? (openBlock(), createElementBlock("div", _hoisted_6$4, [createBaseVNode("a", {
        onClick: _cache[10] || (_cache[10] = function($event) {
          return _ctx.searchClick($event);
        })
      }, [createVNode(_component_icon_search, {
        style: normalizeStyle({
          fill: _ctx.state.collapse && _ctx.transparent ? "#fff" : ""
        }),
        class: "tiny-svg-size"
      }, null, 8, ["style"])])])) : createCommentVNode("v-if", true)],
      2
      /* CLASS */
    ), createVNode(Transition, {
      name: "tiny-transition-zoom-in-top",
      mode: "out-in",
      persisted: ""
    }, {
      default: withCtx(function() {
        return [withDirectives(createBaseVNode(
          "div",
          _hoisted_7$4,
          [createBaseVNode("div", _hoisted_8$4, [createBaseVNode("ul", _hoisted_9$4, [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.types, function(item, index3) {
              return openBlock(), createElementBlock("li", {
                key: index3,
                class: "tiny-search__poplist-item",
                onClick: function onClick($event) {
                  return _ctx.changeKey(item);
                }
              }, [renderSlot(_ctx.$slots, "poplist", {
                slotScope: item
              }, function() {
                return [createTextVNode(
                  toDisplayString(item.text),
                  1
                  /* TEXT */
                )];
              })], 8, _hoisted_10$3);
            }),
            128
            /* KEYED_FRAGMENT */
          ))])])],
          512
          /* NEED_PATCH */
        ), [[vShow, _ctx.state.show && _ctx.state.types.length]])];
      }),
      _: 3
      /* FORWARDED */
    })],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
var pc$2 = /* @__PURE__ */ _export_sfc$7(_sfc_main$7, [["render", _sfc_render$7]]);
const index$3 = "";
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
var _export_sfc$6 = function _export_sfc25(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$6(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: [].concat(props, ["transparent", "searchTypes", "placeholder", "buttonText", "modelValue", "themeType", "isEnterSearch"]),
  components: {
    IconSearch: index$f(),
    IconClose: index$g()
  },
  emits: ["change", "search", "update:modelValue", "clear", "select", "input"],
  setup: function setup$16(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$2,
      api: api$2
    });
  }
});
var _hoisted_1$5 = {
  class: /* @__PURE__ */ normalizeClass(["tiny-mobile-search__line"])
};
var _hoisted_2$5 = {
  class: "tiny-mobile-search__box"
};
var _hoisted_3$4 = {
  class: "tiny-mobile-search__input-btn"
};
var _hoisted_4$4 = {
  class: "tiny-mobile-search__icon"
};
var _hoisted_5$3 = ["placeholder"];
var _hoisted_6$3 = {
  class: "tiny-mobile-search__close-icon"
};
var _hoisted_7$3 = {
  class: "tiny-mobile-search__label"
};
var _hoisted_8$3 = {
  class: "tiny-mobile-search__right"
};
var _hoisted_9$3 = {
  class: "tiny-mobile-search__text"
};
function _sfc_render$6(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_search = resolveComponent("icon-search");
  var _component_icon_close = resolveComponent("icon-close");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-mobile-search", "tiny-mobile-search-" + _ctx.themeType, {
        collapse: _ctx.state.collapse
      }, {
        focus: _ctx.state.focus || !_ctx.state.focus && _ctx.state.currentValue
      }])
    },
    [createBaseVNode("div", _hoisted_1$5, [createBaseVNode("div", _hoisted_2$5, [createBaseVNode("div", _hoisted_3$4, [createBaseVNode("a", _hoisted_4$4, [createVNode(_component_icon_search, {
      style: normalizeStyle({
        fill: _ctx.state.collapse && _ctx.transparent ? "#fff" : ""
      }),
      onClick: _ctx.searchClick
    }, null, 8, ["style", "onClick"])])]), withDirectives(createBaseVNode("input", {
      ref: "input",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
        return _ctx.state.currentValue = $event;
      }),
      style: normalizeStyle(_ctx.transparent ? {
        border: "transparent",
        background: _ctx.state.collapse ? "rgba(255,255,255,0.3)" : "#fff"
      } : {}),
      placeholder: _ctx.placeholder,
      type: "text",
      class: normalizeClass(["tiny-mobile-search__input", "tiny-mobile-search__input-" + _ctx.themeType]),
      onKeyup: _cache[1] || (_cache[1] = withKeys(function() {
        return _ctx.searchEnterKey && _ctx.searchEnterKey.apply(_ctx, arguments);
      }, ["enter"])),
      onChange: _cache[2] || (_cache[2] = function() {
        return _ctx.handleChange && _ctx.handleChange.apply(_ctx, arguments);
      }),
      onInput: _cache[3] || (_cache[3] = function() {
        return _ctx.handleInput && _ctx.handleInput.apply(_ctx, arguments);
      }),
      onFocus: _cache[4] || (_cache[4] = function($event) {
        return _ctx.state.focus = true;
      }),
      onBlur: _cache[5] || (_cache[5] = function($event) {
        return _ctx.state.focus = false;
      }),
      onSelect: _cache[6] || (_cache[6] = withModifiers(function() {
      }, ["stop"]))
    }, null, 46, _hoisted_5$3), [[vModelText, _ctx.state.currentValue]]), withDirectives(createBaseVNode(
      "span",
      _hoisted_6$3,
      [createVNode(_component_icon_close, {
        onClick: _ctx.clear
      }, null, 8, ["onClick"])],
      512
      /* NEED_PATCH */
    ), [[vShow, _ctx.state.currentValue]])]), createBaseVNode("label", _hoisted_7$3, [createBaseVNode(
      "span",
      null,
      toDisplayString(_ctx.placeholder),
      1
      /* TEXT */
    )])]), createBaseVNode("div", _hoisted_8$3, [renderSlot(_ctx.$slots, "default", {}, function() {
      return [createBaseVNode("div", {
        class: "tiny-mobile-search__present",
        onClick: _cache[7] || (_cache[7] = function() {
          return _ctx.searchClick && _ctx.searchClick.apply(_ctx, arguments);
        })
      }, [createBaseVNode(
        "span",
        _hoisted_9$3,
        toDisplayString(_ctx.buttonText),
        1
        /* TEXT */
      )])];
    })])],
    2
    /* CLASS */
  );
}
var mobile = /* @__PURE__ */ _export_sfc$6(_sfc_main$6, [["render", _sfc_render$6]]);
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
var _export_sfc$5 = function _export_sfc26(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$5(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var classes$1 = {
  "search-default": "relative inline-block text-xs w-full px-3 sm:px-0",
  "pc-search-line": "w-full border border-solid rounded bg-color-bg-1 transition duration-300 ease-in-out border-separate hidden sm:inline-table",
  "pc-search-line-focus": "border-color-border-focus",
  "pc-search-line-unfocus": "border-color-border hover:border-color-border-hover",
  "pc-search-line-big": "h-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-line-medium": "h-[calc(theme(spacing.8)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-line-mini": "h-[calc(theme(spacing.6)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-line-unbig": "h-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-present": "table-cell relative align-middle right-0 text-color-text-primary w-px whitespace-nowrap",
  "pc-search-present-big": "pl-4 text-sm leading-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))",
  "pc-search-present-medium": "pl-4 text-sm leading-[calc(theme(spacing.8)-2*theme(borderWidth.DEFAULT))",
  "pc-search-present-mini": "pl-4 text-sm leading-[calc(theme(spacing.6)-2*theme(borderWidth.DEFAULT))",
  "pc-search-present-unbig": "pl-3 text-xs leading-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-present-pointer": "cursor-pointer",
  "pc-search-present-icon-outer": "h-4 leading-4 inline-block pl-2 pr-3 py-0 border-r border-solid border-color-border-separator cursor-pointer",
  "pc-search-present-icon-chevron-down": "text-base fill-color-icon-primary hover:fill-color-icon-hover",
  "pc-search-input-background-transparent": " border-transparent",
  "pc-search-input-background-transparent-collapse": "bg-color-bg-1",
  "pc-search-input-default": "pl-2 table-cell relative align-middle right-0 text-color-text-primary border-0 outline-0 bg-transparent placeholder:text-color-none focus:placeholder:text-color-text-placeholder",
  "pc-search-input-collapse": "w-7 float-right p-0",
  "pc-search-input-uncollapse": "w-full",
  "pc-search-input-collapse-big": "pl-3",
  "pc-search-input-collapse-medium": "pl-3",
  "pc-search-input-collapse-mini": "pl-1",
  "pc-search-input-collapse-unbig": "pl-2",
  "pc-search-input-big": "pl-3 text-sm h-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))] leading-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-input-medium": "pl-3 text-sm h-[calc(theme(spacing.8)-2*theme(borderWidth.DEFAULT))] leading-[calc(theme(spacing.8)-2*theme(borderWidth.DEFAULT))] placeholder:text-sm",
  "pc-search-input-mini": "pl-3 text-xs h-[calc(theme(spacing.6)-2*theme(borderWidth.DEFAULT))] leading-[calc(theme(spacing.6)-2*theme(borderWidth.DEFAULT))] placeholder:text-xs",
  "pc-search-input-unbig": "text-xs h-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))] leading-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-input-btn-transtion": "table-cell relative align-middle right-0 w-8 text-center z-10",
  "pc-search-input-btn-transtion-big": "h-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))] translate-x-4",
  "pc-search-input-btn-transtion-medium": "h-[calc(theme(spacing.8)-2*theme(borderWidth.DEFAULT))] translate-x-4",
  "pc-search-input-btn-transtion-mini": "h-[calc(theme(spacing.6)-2*theme(borderWidth.DEFAULT))] translate-x-4",
  "pc-search-input-btn-transtion-unbig": "h-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))] translate-x-3.5",
  "pc-search-input-btn-transtion-a": "no-underline block w-8",
  "pc-search-input-btn-transtion-a-big": "leading-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-input-btn-transtion-a-medium": "leading-[calc(theme(spacing.8)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-input-btn-transtion-a-mini": "leading-[calc(theme(spacing.6)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-input-btn-transtion-a-unbig": "leading-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-input-btn-transtion-svg-size": "text-base fill-color-icon-primary hover:fill-color-icon-hover",
  "pc-search-input-btn": "table-cell relative align-middle right-0 text-center",
  "pc-search-input-btn-big": "h-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))] w-11",
  "pc-search-input-btn-medium": "h-[calc(theme(spacing.8)-2*theme(borderWidth.DEFAULT))] w-11",
  "pc-search-input-btn-mini": "h-[calc(theme(spacing.6)-2*theme(borderWidth.DEFAULT))] w-11",
  "pc-search-input-btn-unbig": "h-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))] w-10",
  "pc-search-input-btn-a": "no-underline block",
  "pc-search-input-btn-a-big": "w-11 leading-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-input-btn-a-medium": "w-11 leading-[calc(theme(spacing.8)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-input-btn-a-mini": "w-11 leading-[calc(theme(spacing.6)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-input-btn-a-unbig": "w-10 leading-[calc(theme(spacing.7)-2*theme(borderWidth.DEFAULT))]",
  "pc-search-input-btn-icon-search-transparent": "fill-color-bg-1",
  "pc-search-input-btn-icon-search": "text-base fill-color-none",
  "search-selector": "absolute top-full left-0 overflow-hidden min-w-[theme(spacing.18)] border border-solid border-color-border rounded text-xs shadow bg-color-bg-1 text-color-text-primary mt-0.5 py-1 hidden sm:block",
  "search-selector-body": "max-h-[theme(spacing.72)] overflow-x-hidden overflow-y-auto",
  "search-selector-poplist-item": "px-3 min-h-[theme(spacing.6)] leading-6 max-w-full overflow-hidden text-left text-ellipsis whitespace-nowrap cursor-pointer hover:bg-color-bg-2",
  "search-selector-poplist-item-big": "text-sm",
  "search-selector-poplist-item-medium": "text-sm",
  "search-selector-poplist-item-mini": "text-xs",
  "search-selector-poplist-item-unbig": "text-xs",
  "mobile-search": "flex sm:hidden w-full items-center shrink-0",
  "mobile-search-input": "bg-color-bg-4 pl-9    placeholder:text-color-none focus:placeholder:text-color-text-placeholder rounded-full",
  "mobile-search-input-bg-change": "bg-color-bg-1",
  "mobile-search-svg-size": "text-base fill-color-none translate-x-1.5",
  "mobile-search-svg-size-color": "fill-color-bg-1",
  "mobile-search-button": "w-16 text-center cursor-pointer",
  "mobile-search-button-notShowButton": "hidden",
  "mobile-search-input-big": "leading-8 h-8"
};
var _sfc_main$5 = defineComponent({
  emits: ["change", "update:modelValue", "input", "select", "search", "clear"],
  props: [].concat(props, ["mini", "big", "size", "suffixIcon", "transparent", "searchTypes", "placeholder", "modelValue", "tabindex", "clearable", "isEnterSearch", "showButton", "changeBgColor"]),
  components: {
    IconChevronDown: index$e(),
    IconSearch: index$f(),
    IconClose: index$g(),
    IconError: index$h(),
    TinyInput: Input,
    TinyButton: Button
  },
  setup: function setup$17(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$2,
      api: api$2,
      classes: classes$1
    });
  }
});
var _hoisted_1$4 = ["placeholder", "tabindex"];
var _hoisted_2$4 = {
  "data-tag": "tiny-search__poplist"
};
var _hoisted_3$3 = ["onClick"];
var _hoisted_4$3 = {
  class: "inline-block rounded-full"
};
function _sfc_render$5(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_chevron_down = resolveComponent("icon-chevron-down");
  var _component_icon_close = resolveComponent("icon-close");
  var _component_icon_search = resolveComponent("icon-search");
  var _component_icon_error = resolveComponent("icon-error");
  var _component_tiny_input = resolveComponent("tiny-input");
  var _component_tiny_button = resolveComponent("tiny-button");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.m(_ctx.gcls("search-default"))),
      "data-tag": "tiny-search",
      onMouseenter: _cache[12] || (_cache[12] = function($event) {
        return _ctx.state.hovering = true;
      }),
      onMouseleave: _cache[13] || (_cache[13] = function($event) {
        return _ctx.state.hovering = false;
      })
    },
    [createBaseVNode(
      "div",
      {
        class: normalizeClass(_ctx.m(_ctx.gcls("pc-search-line"), _ctx.gcls({
          "pc-search-line-focus": _ctx.state.focus
        }), _ctx.gcls({
          "pc-search-line-unfocus": !_ctx.state.focus
        }), _ctx.gcls({
          "pc-search-line-big": _ctx.big
        }), _ctx.gcls("pc-search-line-" + _ctx.size), _ctx.gcls({
          "pc-search-line-unbig": _ctx.size === "small" && !_ctx.big
        }))),
        "data-tag": "tiny-search__line"
      },
      [createVNode(Transition, {
        name: "mf-transition-search-line-fade",
        mode: "out-in",
        persisted: ""
      }, {
        default: withCtx(function() {
          return [withDirectives(createBaseVNode(
            "div",
            {
              "data-tag": "tiny-search__present",
              class: normalizeClass(_ctx.m(_ctx.gcls("pc-search-present"), _ctx.gcls({
                "pc-search-present-big": _ctx.big
              }), _ctx.gcls("pc-search-present-" + _ctx.size), _ctx.gcls({
                "pc-search-present-unbig": _ctx.size === "small" && !_ctx.big
              }))),
              onClick: _cache[0] || (_cache[0] = function() {
                return _ctx.showSelector && _ctx.showSelector.apply(_ctx, arguments);
              })
            },
            [renderSlot(_ctx.$slots, "text", {
              slotScope: _ctx.state.searchValue
            }, function() {
              return [createBaseVNode(
                "span",
                {
                  "data-tag": "tiny-search__text",
                  class: normalizeClass(_ctx.m(_ctx.gcls("pc-search-present-pointer")))
                },
                toDisplayString(_ctx.state.searchValue.text),
                3
                /* TEXT, CLASS */
              )];
            }), createBaseVNode(
              "span",
              {
                "data-tag": "tiny-icon-outer",
                class: normalizeClass(_ctx.m(_ctx.gcls("pc-search-present-icon-outer")))
              },
              [createVNode(_component_icon_chevron_down, {
                "data-tag": "tiny-svg-size",
                class: normalizeClass(_ctx.m(_ctx.gcls("pc-search-present-icon-chevron-down")))
              }, null, 8, ["class"])],
              2
              /* CLASS */
            )],
            2
            /* CLASS */
          ), [[vShow, !_ctx.state.collapse && _ctx.state.types.length]])];
        }),
        _: 3
        /* FORWARDED */
      }), withDirectives(createBaseVNode("input", {
        ref: "input",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function($event) {
          return _ctx.state.currentValue = $event;
        }),
        class: normalizeClass(_ctx.m(_ctx.gcls({
          "pc-search-input-background-transparent": _ctx.transparent
        }), _ctx.gcls({
          "pc-search-input-background-transparent-collapse": _ctx.transparent && _ctx.state.collapse
        }), _ctx.gcls("pc-search-input-default"), _ctx.gcls({
          "pc-search-input-collapse": _ctx.state.collapse
        }), _ctx.gcls({
          "pc-search-input-uncollapse": !_ctx.state.collapse
        }), _ctx.gcls({
          "pc-search-input-collapse-big": _ctx.state.collapse && _ctx.big
        }), _ctx.gcls("pc-search-input-collapse-" + _ctx.size), _ctx.gcls({
          "pc-search-input-collapse-unbig": _ctx.state.collapse && _ctx.size === "small" && !_ctx.big
        }), _ctx.gcls({
          "pc-search-input-big": _ctx.big
        }), _ctx.gcls("pc-search-input-" + _ctx.size), _ctx.gcls({
          "pc-search-input-unbig": _ctx.size === "small" && !_ctx.big
        }))),
        style: normalizeStyle(_ctx.transparent && _ctx.state.collapse ? {
          background: "rgba(255,255,255,0.3)"
        } : {}),
        placeholder: _ctx.placeholder,
        type: "text",
        "data-tag": "tiny-search__input",
        onKeyup: _cache[2] || (_cache[2] = withKeys(function() {
          return _ctx.searchEnterKey && _ctx.searchEnterKey.apply(_ctx, arguments);
        }, ["enter"])),
        onInput: _cache[3] || (_cache[3] = function() {
          return _ctx.handleInput && _ctx.handleInput.apply(_ctx, arguments);
        }),
        onChange: _cache[4] || (_cache[4] = function() {
          return _ctx.handleChange && _ctx.handleChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[5] || (_cache[5] = function($event) {
          return _ctx.state.focus = true;
        }),
        onBlur: _cache[6] || (_cache[6] = function($event) {
          return _ctx.state.focus = false;
        }),
        onSelect: _cache[7] || (_cache[7] = withModifiers(function() {
        }, ["stop"])),
        tabindex: _ctx.tabindex
      }, null, 46, _hoisted_1$4), [[vModelText, _ctx.state.currentValue]]), createVNode(Transition, {
        name: "mf-transition-icon-scale-in"
      }, {
        default: withCtx(function() {
          return [_ctx.state.showClear && !_ctx.state.collapse ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              "data-tag": "tiny-search__input-btn",
              class: normalizeClass(_ctx.m(_ctx.gcls("pc-search-input-btn-transtion"), _ctx.gcls({
                "pc-search-input-btn-transtion-big": _ctx.big
              }), _ctx.gcls("pc-search-input-btn-transtion-" + _ctx.size), _ctx.gcls({
                "pc-search-input-btn-transtion-unbig": _ctx.size === "small" && !_ctx.big
              })))
            },
            [createBaseVNode(
              "a",
              {
                class: normalizeClass(_ctx.m(_ctx.gcls("pc-search-input-btn-transtion-a"), _ctx.gcls({
                  "pc-search-input-btn-transtion-a-big": _ctx.big
                }), _ctx.gcls("pc-search-input-btn-transtion-a-" + _ctx.size), _ctx.gcls({
                  "pc-search-input-btn-transtion-a-unbig": _ctx.size === "small" && !_ctx.big
                }))),
                onClick: _cache[9] || (_cache[9] = function() {
                  return _ctx.clear && _ctx.clear.apply(_ctx, arguments);
                })
              },
              [createVNode(_component_icon_close, {
                onMousedown: _cache[8] || (_cache[8] = withModifiers(function() {
                }, ["prevent"])),
                "data-tag": "tiny-svg-size",
                class: normalizeClass(_ctx.m(_ctx.gcls("pc-search-input-btn-transtion-svg-size")))
              }, null, 8, ["class"])],
              2
              /* CLASS */
            )],
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true)];
        }),
        _: 1
        /* STABLE */
      }), createBaseVNode(
        "div",
        {
          "data-tag": "tiny-search__input-btn",
          class: normalizeClass(_ctx.m(_ctx.gcls("pc-search-input-btn"), _ctx.gcls({
            "pc-search-input-btn-big": _ctx.big
          }), _ctx.gcls("pc-search-input-btn-" + _ctx.size), _ctx.gcls({
            "pc-search-input-btn-unbig": _ctx.size === "small" && !_ctx.big
          })))
        },
        [createBaseVNode(
          "a",
          {
            class: normalizeClass(_ctx.m(_ctx.gcls("pc-search-input-btn-a"), _ctx.gcls({
              "pc-search-input-btn-a-big": _ctx.big
            }), _ctx.gcls("pc-search-input-btn-a-" + _ctx.size), _ctx.gcls({
              "pc-search-input-btn-a-unbig": _ctx.size === "small" && !_ctx.big
            }))),
            onClick: _cache[10] || (_cache[10] = function() {
              return _ctx.searchClick && _ctx.searchClick.apply(_ctx, arguments);
            })
          },
          [createVNode(_component_icon_search, {
            class: normalizeClass(_ctx.m(_ctx.gcls("pc-search-input-btn-icon-search"), _ctx.gcls({
              "pc-search-input-btn-icon-search-transparent": _ctx.state.collapse && _ctx.transparent
            }))),
            "data-tag": "tiny-svg-size"
          }, null, 8, ["class"])],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), createVNode(Transition, {
      name: "mf-transition-zoom-in-top",
      mode: "out-in",
      persisted: ""
    }, {
      default: withCtx(function() {
        return [withDirectives(createBaseVNode(
          "div",
          {
            ref: "selector",
            "data-tag": "tiny-search__selector",
            class: normalizeClass(_ctx.m(_ctx.gcls("search-selector")))
          },
          [createBaseVNode(
            "div",
            {
              "data-tag": "tiny-search__selector-body",
              class: normalizeClass(_ctx.m(_ctx.gcls("search-selector-body")))
            },
            [createBaseVNode("ul", _hoisted_2$4, [(openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.state.types, function(item, index3) {
                return openBlock(), createElementBlock("li", {
                  key: index3,
                  "data-tag": "tiny-search__poplist-item",
                  class: normalizeClass(_ctx.m(_ctx.gcls("search-selector-poplist-item"), _ctx.gcls({
                    "search-selector-poplist-item-big": _ctx.big
                  }), _ctx.gcls("search-selector-poplist-item-" + _ctx.size), _ctx.gcls({
                    "search-selector-poplist-item-unbig": _ctx.size === "small" && !_ctx.big
                  }))),
                  onClick: function onClick($event) {
                    return _ctx.changeKey(item);
                  }
                }, [renderSlot(_ctx.$slots, "poplist", {
                  slotScope: item
                }, function() {
                  return [createTextVNode(
                    toDisplayString(item.text),
                    1
                    /* TEXT */
                  )];
                })], 10, _hoisted_3$3);
              }),
              128
              /* KEYED_FRAGMENT */
            ))])],
            2
            /* CLASS */
          )],
          2
          /* CLASS */
        ), [[vShow, _ctx.state.show && _ctx.state.types.length]])];
      }),
      _: 3
      /* FORWARDED */
    }), createBaseVNode(
      "div",
      {
        class: normalizeClass(_ctx.m(_ctx.gcls("mobile-search")))
      },
      [createVNode(_component_tiny_input, {
        modelValue: _ctx.state.currentValue,
        "onUpdate:modelValue": _cache[11] || (_cache[11] = function($event) {
          return _ctx.state.currentValue = $event;
        }),
        onInput: _ctx.handleInput,
        "custom-class": _ctx.m(_ctx.gcls("mobile-search-input"), _ctx.gcls({
          "mobile-search-input-bg-change": _ctx.changeBgColor
        }), _ctx.gcls({
          "mobile-search-input-big": _ctx.big
        })),
        placeholder: _ctx.placeholder,
        size: _ctx.size
      }, createSlots({
        prefix: withCtx(function() {
          return [createVNode(_component_icon_search, {
            class: normalizeClass(_ctx.m(_ctx.gcls("mobile-search-svg-size"), _ctx.gcls({
              "mobile-search-svg-size-color": _ctx.state.collapse && _ctx.transparent
            }))),
            "data-tag": "tiny-svg-size"
          }, null, 8, ["class"])];
        }),
        _: 2
        /* DYNAMIC */
      }, [_ctx.state.showClear && !_ctx.state.collapse ? {
        name: "suffix",
        fn: withCtx(function() {
          return [createBaseVNode("span", _hoisted_4$3, [createVNode(_component_icon_error, {
            "data-tag": "tiny-svg-size",
            "custom-class": "w-4 h-4 fill-color-none-hover relative -top-0.5",
            onClick: _ctx.clear
          }, null, 8, ["onClick"])])];
        }),
        key: "0"
      } : void 0]), 1032, ["modelValue", "onInput", "custom-class", "placeholder", "size"]), createVNode(_component_tiny_button, {
        type: "text",
        onClick: _ctx.searchClick,
        class: normalizeClass(_ctx.m(_ctx.gcls("mobile-search-button"), _ctx.gcls({
          "mobile-search-button-notShowButton": !_ctx.showButton
        })))
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.search.placeholder")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["onClick", "class"])],
      2
      /* CLASS */
    )],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
var mobileFirst$2 = /* @__PURE__ */ _export_sfc$5(_sfc_main$5, [["render", _sfc_render$5]]);
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
var template$3 = function template22(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$2;
  }
  if ("mobile" === (tinyMode || mode)) {
    return mobile;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$2;
  }
  return pc$2;
};
var searchProps = _extends$6({}, $props, {
  mini: {
    type: Boolean,
    default: false
  },
  big: {
    type: Boolean,
    default: false
  },
  buttonText: {
    type: String,
    default: function _default2() {
      return t("ui.search.placeholder");
    }
  },
  /**
   * 设置为透明模式，配置为true时，边框变为透明且收缩后半透明显示，一般用在带有背景的场景
   */
  transparent: {
    type: Boolean,
    default: false
  },
  /**
   * 搜索的类型选项，格式为[{text:'文档',value:1},...]，不配置时类型选择固定显示为All
   */
  searchTypes: {
    type: Array,
    default: function _default22() {
      return [];
    }
  },
  /**
   * 设置搜索输入框内的提示占位文本
   */
  placeholder: {
    type: String,
    default: ""
  },
  modelValue: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: false
  },
  tabindex: {
    type: String,
    default: "1"
  },
  /**
   * 配置搜索输入框enter键,enter按下触发搜索
   */
  isEnterSearch: {
    type: Boolean,
    default: true
  },
  /**
   * 配置主题色，primary:蓝 gray:灰
   */
  themeType: {
    type: String,
    default: "primary",
    validator: function validator(value) {
      return ["primary", "gray"].includes(value);
    }
  },
  showButton: {
    type: Boolean,
    default: false
  },
  changeBgColor: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: "small"
  },
  typeValue: Object,
  suffixIcon: [Object, String]
});
var Search = defineComponent({
  name: $prefix + "Search",
  props: searchProps,
  setup: function setup3(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$3
    });
  }
});
var version$4 = "3.16.0";
Search.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
Search.install = function(Vue) {
  Vue.component(Search.name, Search);
};
Search.version = version$4;
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
var _export_sfc$4 = function _export_sfc27(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$4(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$4 = defineComponent({
  components: {
    TinySearch: Search,
    TinyButton: Button,
    IconClose: index$g(),
    IconChevronUp: index$i(),
    IconError: index$h()
  },
  props: [].concat(props, ["placement", "boundariesPadding", "popperOptions", "visibleArrow", "appendToBody", "transformOrigin", "reference", "popper", "offset", "modelValue", "arrowOffset", "isDropInheritWidth", "title", "closeByMask", "searchPlaceholder"]),
  setup: function setup$18(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$3,
      api: api$3
    });
  }
});
var _hoisted_1$3 = {
  key: 1,
  "data-tag": "tiny-select-dropdown tiny-popper",
  class: "text-sm overflow-hidden"
};
var _hoisted_2$3 = {
  "data-tag": "tiny-select-dropdown-header",
  class: "px-4 pt-4"
};
var _hoisted_3$2 = {
  class: "flex mb-3"
};
var _hoisted_4$2 = {
  class: "flex-1 text-base text-center leading-5"
};
var _hoisted_5$2 = {
  key: 0,
  class: "flex mb-3"
};
var _hoisted_6$2 = {
  "data-tag": "tiny-select-dropdown-body",
  class: "px-4 pb-4 overflow-auto flex-1 scrollbar-size-0"
};
var _hoisted_7$2 = {
  key: 0,
  "data-tag": "tiny-select-dropdown-footer",
  class: "px-4 h-18 flex justify-between items-center bg-color-bg-1 shadow-[0_-2px_6px_rgba(0,0,0,0.08)] shrink-0"
};
var _hoisted_8$2 = {
  "data-tag": "tiny-selected-box-header",
  class: "flex h-10 justify-between items-center"
};
var _hoisted_9$2 = {
  "data-tag": "tiny-selected-box-body",
  class: "flex-1 overflow-auto mb-3"
};
var _hoisted_10$2 = {
  class: "mr-4 flex-1 leading-5 line-clamp-2"
};
var _hoisted_11$2 = {
  "data-tag": "tiny-selected-box-footer",
  class: "text-center"
};
function _sfc_render$4(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_close = resolveComponent("icon-close");
  var _component_tiny_search = resolveComponent("tiny-search");
  var _component_icon_chevron_up = resolveComponent("icon-chevron-up");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _component_icon_error = resolveComponent("icon-error");
  return _ctx.state.device === "pc" ? (openBlock(), createElementBlock(
    "div",
    {
      key: 0,
      "data-tag": "tiny-select-dropdown tiny-popper",
      class: normalizeClass(["absolute z-[1001] border-none rounded bg-color-bg-1 shadow-md mt-1 box-border transition-[transform,opacity] ease-in-out duration-300 origin-top", [_ctx.state.popperClass, _ctx.state.visible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"]]),
      onMousedown: _cache[0] || (_cache[0] = withModifiers(function() {
      }, ["stop"])),
      style: normalizeStyle({
        minWidth: _ctx.state.minWidth,
        width: _ctx.isDropInheritWidth ? _ctx.state.minWidth : "auto"
      })
    },
    [renderSlot(_ctx.$slots, "default")],
    38
    /* CLASS, STYLE, NEED_HYDRATION */
  )) : (openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode(
    "div",
    {
      ref: "mask",
      class: normalizeClass(_ctx.m("fixed left-0 right-0 top-0 bottom-0 w-full h-full bg-color-bg-7 transition-[opacity] ease-linear duration-100 opacity-0", {
        "opacity-100": _ctx.state.visible
      })),
      onClick: _cache[1] || (_cache[1] = function($event) {
        return _ctx.closeModal($event, true);
      }),
      style: normalizeStyle({
        "z-index": _ctx.state.zIndex
      })
    },
    null,
    6
    /* CLASS, STYLE */
  ), createBaseVNode(
    "div",
    {
      "data-tag": "tiny-select-dropdown-main",
      ref: "drawerBox",
      style: normalizeStyle({
        "z-index": _ctx.state.zIndex
      }),
      class: normalizeClass(_ctx.m("fixed w-full max-w-full flex flex-col justify-between bg-color-bg-1 shadow-sm border-color-border-separator max-h-[90%]", "min-h-[256px] left-0 bottom-0 border-t-0.5 rounded-t-lg transition-translate ease-linear duration-200 translate-y-full", {
        "translate-y-0": _ctx.state.visible
      }))
    },
    [createBaseVNode("div", _hoisted_2$3, [createBaseVNode("div", _hoisted_3$2, [_ctx.state.showClose ? (openBlock(), createElementBlock(
      "span",
      {
        key: 0,
        class: "inline-block h-6 leading-6 text-color-brand",
        onClick: _cache[2] || (_cache[2] = function() {
          return _ctx.handleClear && _ctx.handleClear.apply(_ctx, arguments);
        })
      },
      toDisplayString(_ctx.t("ui.base.clear")),
      1
      /* TEXT */
    )) : createCommentVNode("v-if", true), createBaseVNode(
      "p",
      _hoisted_4$2,
      toDisplayString(_ctx.title),
      1
      /* TEXT */
    ), createVNode(_component_icon_close, {
      "custom-class": "w-5 h-5 ml-4  cursor-pointer",
      onClick: _cache[3] || (_cache[3] = function($event) {
        return _ctx.closeModal($event, false);
      })
    })]), _ctx.state.filterable ? (openBlock(), createElementBlock("div", _hoisted_5$2, [createVNode(_component_tiny_search, {
      modelValue: _ctx.state.query,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = function($event) {
        return _ctx.state.query = $event;
      }),
      placeholder: _ctx.searchPlaceholder,
      class: "flex-1 px-0",
      onInput: _ctx.debouncedQueryChange,
      clearable: "",
      big: ""
    }, null, 8, ["modelValue", "placeholder", "onInput"]), createBaseVNode(
      "span",
      {
        class: "inline-block h-8 leading-8 text-color-text-secondary shrink-0 ml-3 text-base",
        onClick: _cache[5] || (_cache[5] = function() {
          return _ctx.cancelSearch && _ctx.cancelSearch.apply(_ctx, arguments);
        })
      },
      toDisplayString(_ctx.t("ui.base.cancel")),
      1
      /* TEXT */
    )])) : createCommentVNode("v-if", true)]), createBaseVNode("div", _hoisted_6$2, [renderSlot(_ctx.$slots, "default")]), _ctx.state.multiple ? (openBlock(), createElementBlock("div", _hoisted_7$2, [createBaseVNode("div", null, [createBaseVNode(
      "span",
      {
        onClick: _cache[6] || (_cache[6] = function($event) {
          return _ctx.toggleSelectedBox(true);
        }),
        class: "mr-2"
      },
      toDisplayString(_ctx.t("ui.select.selectedNum").replace("{num}", _ctx.state.selected.length)),
      1
      /* TEXT */
    ), _ctx.state.selected.length !== 0 ? (openBlock(), createBlock(_component_icon_chevron_up, {
      key: 0,
      "custom-class": "w-5 h-5 cursor-pointer"
    })) : createCommentVNode("v-if", true)]), createVNode(_component_tiny_button, {
      type: "primary",
      "custom-class": "w-28",
      onClick: _ctx.selectDropdownConfirm
    }, {
      default: withCtx(function() {
        return [createTextVNode(
          toDisplayString(_ctx.t("ui.base.confirm")),
          1
          /* TEXT */
        )];
      }),
      _: 1
      /* STABLE */
    }, 8, ["onClick"])])) : createCommentVNode("v-if", true), _ctx.state.multiple ? (openBlock(), createElementBlock(
      "div",
      {
        key: 1,
        "data-tag": "tiny-selected-box",
        class: normalizeClass(["absolute left-0 bottom-0 flex flex-col w-full bg-color-bg-1 transition-all ease-linear duration-200 overflow-hidden z-[2001]", [_ctx.state.showSelectedBox ? "h-full p-4" : "h-0 p-0"]])
      },
      [createBaseVNode("div", _hoisted_8$2, [createBaseVNode(
        "span",
        {
          class: "inline-block h-6 py-1 text-color-brand",
          onClick: _cache[7] || (_cache[7] = function($event) {
            return _ctx.deleteSelected("", true);
          })
        },
        toDisplayString(_ctx.t("ui.base.clear")),
        1
        /* TEXT */
      ), createVNode(_component_icon_close, {
        "custom-class": "w-5 h-5 ml-4 cursor-pointer",
        onClick: _cache[8] || (_cache[8] = function($event) {
          return _ctx.toggleSelectedBox(false);
        })
      })]), createBaseVNode("div", _hoisted_9$2, [createBaseVNode("ul", null, [(openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList(_ctx.state.selectedArr, function(item, index3) {
          return openBlock(), createElementBlock("li", {
            key: (item.value || "") + index3,
            class: "flex h-12 justify-between items-center"
          }, [createBaseVNode(
            "span",
            _hoisted_10$2,
            toDisplayString(item.label),
            1
            /* TEXT */
          ), createVNode(_component_icon_error, {
            "custom-class": "w-5 h-5 cursor-pointer fill-color-none-hover",
            onClick: function onClick($event) {
              return _ctx.deleteSelected(item);
            }
          }, null, 8, ["onClick"])]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))])]), createBaseVNode("div", _hoisted_11$2, [createVNode(_component_tiny_button, {
        type: "primary",
        "custom-class": "w-full",
        onClick: _ctx.selectedBoxConfirm
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.base.confirm")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["onClick"])])],
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true)],
    6
    /* CLASS, STYLE */
  )]));
}
var mobileFirst$1 = /* @__PURE__ */ _export_sfc$4(_sfc_main$4, [["render", _sfc_render$4]]);
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
var template$2 = function template23(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$3;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$1;
  }
  return pc$3;
};
var SelectDropdown = defineComponent({
  name: $prefix + "SelectDropdown",
  componentName: "SelectDropdown",
  inject: ["select"],
  props: _extends$5({}, $props, {
    appendToBody: {
      type: Boolean,
      default: function _default3() {
        return true;
      }
    },
    arrowOffset: {
      type: Number,
      default: function _default23() {
        return 35;
      }
    },
    boundariesPadding: {
      default: function _default32() {
        return 0;
      }
    },
    isDropInheritWidth: Boolean,
    modelValue: Boolean,
    offset: {
      default: function _default4() {
        return 0;
      }
    },
    placement: {
      default: function _default5() {
        return "bottom-start";
      }
    },
    popper: {},
    popperOptions: {
      default: function _default6() {
        return {
          gpuAcceleration: false
        };
      }
    },
    reference: {},
    transformOrigin: {
      type: [Boolean, String],
      default: function _default7() {
        return true;
      }
    },
    visibleArrow: {
      default: function _default8() {
        return false;
      }
    },
    closeByMask: {
      type: Boolean,
      default: true
    },
    searchPlaceholder: {
      type: String,
      default: ""
    },
    title: String
  }),
  setup: function setup4(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$2
    });
  }
});
var version$3 = "3.16.0";
SelectDropdown.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
SelectDropdown.install = function(Vue) {
  Vue.component(SelectDropdown.name, SelectDropdown);
};
SelectDropdown.version = version$3;
const handleClear = ({ dispatch, emit }) => ($event) => {
  dispatch("Picker", "handle-clear", $event);
  dispatch("Select", "handle-clear", $event);
  dispatch("Cascader", "handle-clear", $event);
  dispatch("Amount", "handle-clear", $event);
  emit("handle-clear");
};
const handeClick = ({ props: props2, emit }) => ($event) => {
  if (props2.disabled)
    return;
  $event.stopPropagation();
  emit("click", $event);
};
const api$1 = ["state", "handleClear", "focus", "blur", "handeClick"];
const renderless$1 = (props2, { reactive: reactive2 }, { dispatch, emit }) => {
  const state = reactive2({});
  const api2 = {};
  Object.assign(api2, {
    state,
    focus: () => state,
    blur: () => state,
    handleClear: handleClear({ dispatch, emit }),
    handeClick: handeClick({ props: props2, emit })
  });
  return api2;
};
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
var _export_sfc$3 = function _export_sfc28(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$3(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
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
var _sfc_main$3 = defineComponent({
  name: $prefix + "FilterBox",
  emits: ["click", "handle-clear"],
  components: {
    IconArrowBottom: index$j(),
    IconError: index$h(),
    IconHelpCircle: index$k(),
    TinyTooltip: Tooltip
  },
  props: _extends$4({}, $props, {
    label: String,
    value: [String, Number],
    tip: String,
    placeholder: {
      type: String,
      default: ""
    },
    showClose: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dropDownVisible: {
      type: Boolean,
      default: false
    },
    blank: {
      type: Boolean,
      default: false
    }
  }),
  setup: function setup$19(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1,
      mono: true
    });
  }
});
function _sfc_render$3(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_help_circle = resolveComponent("icon-help-circle");
  var _component_tiny_tooltip = resolveComponent("tiny-tooltip");
  var _component_icon_error = resolveComponent("icon-error");
  var _component_icon_arrow_bottom = resolveComponent("icon-arrow-bottom");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-filter-box", _ctx.disabled && "disabled", _ctx.blank && "is-blank"]),
      onClick: _cache[0] || (_cache[0] = function() {
        return _ctx.handeClick && _ctx.handeClick.apply(_ctx, arguments);
      })
    },
    [createBaseVNode(
      "p",
      {
        class: normalizeClass(["title", _ctx.dropDownVisible && "active"])
      },
      [createBaseVNode(
        "label",
        null,
        toDisplayString(_ctx.label),
        1
        /* TEXT */
      ), _ctx.tip ? (openBlock(), createBlock(_component_tiny_tooltip, {
        key: 0,
        effect: "light",
        content: _ctx.tip,
        placement: "top"
      }, {
        default: withCtx(function() {
          return [createVNode(_component_icon_help_circle)];
        }),
        _: 1
        /* STABLE */
      }, 8, ["content"])) : createCommentVNode("v-if", true)],
      2
      /* CLASS */
    ), createBaseVNode(
      "p",
      {
        class: normalizeClass(["value", ["value", !_ctx.value && _ctx.value !== 0 && "placeholder"]])
      },
      toDisplayString(_ctx.value || _ctx.value === 0 ? _ctx.value : _ctx.placeholder),
      3
      /* TEXT, CLASS */
    ), _ctx.value && _ctx.showClose && !_ctx.disabled ? (openBlock(), createBlock(_component_icon_error, {
      key: 0,
      class: "filter-icon-close",
      onClick: withModifiers(_ctx.handleClear, ["stop"])
    }, null, 8, ["onClick"])) : (openBlock(), createBlock(_component_icon_arrow_bottom, {
      key: 1,
      class: normalizeClass(["filter-box-icon", _ctx.dropDownVisible && "is-reverse"])
    }, null, 8, ["class"]))],
    2
    /* CLASS */
  );
}
var FilterBox = /* @__PURE__ */ _export_sfc$3(_sfc_main$3, [["render", _sfc_render$3]]);
var version$2 = "3.16.0";
FilterBox.install = function(Vue) {
  Vue.component(FilterBox.name, FilterBox);
};
FilterBox.version = version$2;
const cached = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => cache[str] || (cache[str] = fn(str));
};
const camelizeRE = /-(\w)/g;
const camelize = cached((str) => str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : ""));
const getElementStyle = (elem, styleKey) => {
  if (!elem || !styleKey)
    return "";
  let key = camelize(styleKey);
  if (key === "float")
    key = "cssFloat";
  try {
    const styleValue = elem.style[key];
    if (styleValue)
      return styleValue;
    const computedStyle = document.defaultView ? document.defaultView.getComputedStyle(elem, "") : null;
    return computedStyle ? computedStyle[key] : "";
  } catch (e) {
    return elem.style[key];
  }
};
const canScroll = (el, isVertical) => {
  const overflowKey = { undefined: "overflow", true: "overflow-y", false: "overflow-x" }[String(isVertical)];
  const overflowVal = getElementStyle(el, overflowKey);
  return ["scroll", "auto", "overlay"].some((s) => overflowVal.includes(s));
};
const getScrollContainer = (el, isVertical) => {
  let parentEl = el;
  while (parentEl) {
    if ([window, document, document.documentElement].includes(parentEl))
      return window;
    if (canScroll(parentEl, isVertical))
      return parentEl;
    parentEl = parentEl.parentNode;
  }
  return parentEl;
};
let supportsPassive = false;
if (typeof window !== "undefined") {
  supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      // eslint-disable-next-line getter-return
      get() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e) {
  }
}
const handleVisibilityChange = ({ api: api2, emit, state }) => (isVisible, entry) => {
  if (state.ready) {
    if (isVisible || entry.boundingClientRect.width !== 0 || entry.boundingClientRect.height !== 0) {
      emit("visible");
      requestAnimationFrame(() => {
        api2.updateVisibleItems(false);
      });
    } else {
      emit("hidden");
    }
  }
};
const updateVisibleItems = ({ api: api2, emit, props: props2, state, vm }) => (checkItem, checkPositionDiff = false) => {
  const itemSize = props2.itemSize;
  const gridItems = props2.gridItems || 1;
  const itemSecondarySize = props2.itemSecondarySize || itemSize;
  const minItemSize = state.temporary.computedMinItemSize;
  const typeField = props2.typeField;
  const keyField = state.simpleArray ? null : props2.keyField;
  const items = props2.items;
  const count = items.length;
  const sizes = state.sizes;
  const views = state.temporary.views;
  const unusedViews = state.temporary.unusedViews;
  const pool = state.pool;
  const itemIndexByKey = state.itemIndexByKey;
  let startIndex, endIndex, visibleStartIndex, visibleEndIndex, totalSize;
  if (!count) {
    startIndex = endIndex = visibleStartIndex = visibleEndIndex = totalSize = 0;
  } else if (state.temporary.prerender) {
    startIndex = visibleStartIndex = 0;
    visibleEndIndex = endIndex = Math.min(props2.prerender, items.length);
    totalSize = null;
  } else {
    const scroll = api2.getScroll();
    if (doCheckPositionDiff({ checkPositionDiff, scroll, state, itemSize, minItemSize })) {
      return { continuous: true };
    }
    state.temporary.lastUpdateScrollPosition = scroll.start;
    const args2 = { props: props2, scroll, vm, itemSize, count, sizes, startIndex, totalSize };
    Object.assign(args2, { endIndex, items, visibleStartIndex, visibleEndIndex, gridItems });
    const ret = computeRange(args2);
    startIndex = ret.startIndex;
    endIndex = ret.endIndex;
    visibleStartIndex = ret.visibleStartIndex;
    visibleEndIndex = ret.visibleEndIndex;
    totalSize = ret.totalSize;
  }
  if (endIndex - startIndex > props2.itemsLimit) {
    throw new Error("[TINY Error][RecycleScroller] Rendered items limit reached");
  }
  state.totalSize = totalSize;
  const continuous = startIndex <= state.temporary.endIndex && endIndex >= state.temporary.startIndex;
  const args = { continuous, pool, checkItem, itemIndexByKey, keyField, startIndex };
  Object.assign(args, { endIndex, api: api2, items, views, itemSize, sizes, typeField, unusedViews });
  Object.assign(args, { emit, gridItems, itemSecondarySize });
  computePool(args);
  state.temporary.startIndex = startIndex;
  state.temporary.endIndex = endIndex;
  if (props2.emitUpdate) {
    emit("update", startIndex, endIndex, visibleStartIndex, visibleEndIndex);
  }
  clearTimeout(state.temporary.sortTimer);
  state.temporary.sortTimer = setTimeout(api2.sortViews, props2.updateInterval + 300);
  return { continuous };
};
const computedSizes = ({ props: props2, state }) => () => {
  if (props2.itemSize === null) {
    const sizes = { "-1": { accumulator: 0 } };
    const items = props2.items;
    const field = props2.sizeField;
    const minItemSize = props2.minItemSize;
    let computedMinSize = 1e4;
    let accumulator = 0;
    let current;
    for (let i = 0, l = items.length; i < l; i++) {
      current = items[i][field] || minItemSize;
      if (current < computedMinSize) {
        computedMinSize = current;
      }
      accumulator += current;
      sizes[i] = { accumulator, size: current };
    }
    state.temporary.computedMinItemSize = computedMinSize;
    return sizes;
  }
  return [];
};
const computedItemIndexByKey = (props2) => () => {
  const { keyField, items } = props2;
  const result = {};
  for (let i = 0, l = items.length; i < l; i++) {
    result[items[i][keyField]] = i;
  }
  return result;
};
const getScroll = ({ props: props2, vm }) => () => {
  const { $el: el } = vm;
  const direction = props2.direction;
  const isVertical = direction === "vertical";
  let scrollRange;
  if (props2.pageMode) {
    const bounds = el.getBoundingClientRect();
    const boundsSize = isVertical ? bounds.height : bounds.width;
    let size = isVertical ? window.innerHeight : window.innerWidth;
    let start = -(isVertical ? bounds.top : bounds.left);
    if (start < 0) {
      size += start;
      start = 0;
    }
    if (start + size > boundsSize) {
      size = boundsSize - start;
    }
    scrollRange = { start, end: start + size };
  } else if (isVertical) {
    scrollRange = { start: el.scrollTop, end: el.scrollTop + el.clientHeight };
  } else {
    scrollRange = { start: el.scrollLeft, end: el.scrollLeft + el.clientWidth };
  }
  return scrollRange;
};
const unuseView = (state) => (view, fake = false) => {
  const unusedViews = state.temporary.unusedViews;
  const type = view.nr.type;
  let unusedPool = unusedViews.get(type);
  if (!unusedPool) {
    unusedPool = [];
    unusedViews.set(type, unusedPool);
  }
  unusedPool.push(view);
  if (!fake) {
    view.nr.used = false;
    view.position = -9999;
  }
};
let uid = 0;
const addView = ({ markRaw, shallowReactive }) => (pool, index3, item, key, type) => {
  const nr = markRaw({ id: uid++, index: index3, used: true, key, type });
  const view = shallowReactive({ item, position: 0, nr });
  pool.push(view);
  return view;
};
const sortViews = (state) => () => {
  state.pool.sort((viewA, viewB) => viewA.nr.index - viewB.nr.index);
};
const handleScroll = ({ api: api2, props: props2, state }) => () => {
  if (!state.temporary.scrollDirty) {
    state.temporary.scrollDirty = true;
    if (state.temporary.updateTimeout)
      return;
    const requestUpdate = () => requestAnimationFrame(() => {
      state.temporary.scrollDirty = false;
      const { continuous } = api2.updateVisibleItems(false, true);
      if (!continuous) {
        cancelAnimationFrame(state.temporary.refreshTimeout);
        state.temporary.refreshTimeout = requestAnimationFrame(() => api2.updateVisibleItems(false));
      }
    });
    requestUpdate();
    if (props2.updateInterval) {
      state.temporary.updateTimeout = setTimeout(() => {
        state.temporary.updateTimeout = 0;
        if (state.temporary.scrollDirty)
          requestUpdate();
      }, props2.updateInterval);
    }
  }
};
const handleResize = ({ api: api2, emit, state }) => () => {
  emit("resize");
  if (state.ready)
    api2.updateVisibleItems(false);
};
const applyPageMode = ({ api: api2, props: props2 }) => () => {
  if (props2.pageMode) {
    api2.addListeners();
  } else {
    api2.removeListeners();
  }
};
const addListeners = ({ api: api2, state }) => () => {
  state.listenerTarget = api2.getListenerTarget();
  const options = supportsPassive ? { passive: true } : false;
  state.listenerTarget.addEventListener("scroll", api2.handleScroll, options);
  state.listenerTarget.addEventListener("resize", api2.handleResize);
};
const removeListeners = ({ api: api2, state }) => () => {
  if (!state.listenerTarget) {
    return;
  }
  state.listenerTarget.removeEventListener("scroll", api2.handleScroll);
  state.listenerTarget.removeEventListener("resize", api2.handleResize);
  state.listenerTarget = null;
};
const getListenerTarget = ({ props: props2, vm }) => () => {
  let target = getScrollContainer(vm.$el.parentNode, props2.direction === "vertical");
  if (window.document && (target === window.document.documentElement || target === window.document.body)) {
    target = window;
  }
  return target;
};
const scrollToPosition = ({ props: props2, vm }) => (position) => {
  const direction = props2.direction === "vertical" ? { scroll: "scrollTop", start: "top" } : { scroll: "scrollLeft", start: "left" };
  let viewport, scrollDirection, scrollDistance;
  if (props2.pageMode) {
    const viewportEl = getScrollContainer(vm.$el.parentNode, props2.direction === "vertical");
    const scrollTop = viewportEl.tagName === "HTML" ? 0 : viewportEl[direction.scroll];
    const bounds = viewportEl.getBoundingClientRect();
    const scroller = vm.$el.getBoundingClientRect();
    const scrollerPosition = scroller[direction.start] - bounds[direction.start];
    viewport = viewportEl;
    scrollDirection = direction.scroll;
    scrollDistance = position + scrollTop + scrollerPosition;
  } else {
    viewport = vm.$el;
    scrollDirection = direction.scroll;
    scrollDistance = position;
  }
  viewport[scrollDirection] = scrollDistance;
};
const scrollToItem = ({ api: api2, props: props2, state }) => (index3) => {
  const gridItems = props2.gridItems || 1;
  let scroll;
  if (props2.itemSize === null) {
    scroll = index3 > 0 ? state.sizes[index3 - 1].accumulator : 0;
  } else {
    scroll = Math.floor(index3 / gridItems) * props2.itemSize;
  }
  api2.scrollToPosition(scroll);
};
const doCheckPositionDiff = ({ checkPositionDiff, scroll, state, itemSize, minItemSize }) => {
  if (checkPositionDiff) {
    let positionDiff = scroll.start - state.temporary.lastUpdateScrollPosition;
    if (positionDiff < 0)
      positionDiff = -positionDiff;
    if (itemSize === null && positionDiff < minItemSize || positionDiff < itemSize) {
      return true;
    }
  }
};
const computeRange = (args) => {
  let { props: props2, scroll, vm, itemSize, count, sizes, startIndex, totalSize } = args;
  let { endIndex, items, visibleStartIndex, visibleEndIndex, gridItems } = args;
  const buffer = props2.buffer;
  let beforeSize = 0;
  scroll.start -= buffer;
  scroll.end += buffer;
  if (vm.$refs.before) {
    beforeSize = vm.$refs.before.scrollHeight;
    scroll.start -= beforeSize;
  }
  if (vm.$refs.after) {
    const afterSize = vm.$refs.after.scrollHeight;
    scroll.end += afterSize;
  }
  if (itemSize === null) {
    let args2 = { count, sizes, scroll, startIndex, totalSize, endIndex };
    Object.assign(args2, { items, visibleStartIndex, beforeSize, visibleEndIndex });
    const ret = computeRangeVariableSizeMode(args2);
    startIndex = ret.startIndex;
    endIndex = ret.endIndex;
    visibleStartIndex = ret.visibleStartIndex;
    visibleEndIndex = ret.visibleEndIndex;
    totalSize = ret.totalSize;
  } else {
    startIndex = ~~(scroll.start / itemSize * gridItems);
    const remainer = startIndex % gridItems;
    startIndex -= remainer;
    endIndex = Math.ceil(scroll.end / itemSize * gridItems);
    visibleStartIndex = Math.max(0, Math.floor((scroll.start - beforeSize) / itemSize * gridItems));
    visibleEndIndex = Math.floor((scroll.end - beforeSize) / itemSize * gridItems);
    startIndex < 0 && (startIndex = 0);
    endIndex > count && (endIndex = count);
    visibleStartIndex < 0 && (visibleStartIndex = 0);
    visibleEndIndex > count && (visibleEndIndex = count);
    totalSize = Math.ceil(count / gridItems) * itemSize;
  }
  return { startIndex, endIndex, visibleStartIndex, visibleEndIndex, totalSize };
};
const computeRangeVariableSizeMode = (args) => {
  let { count, sizes, scroll, startIndex, totalSize, endIndex } = args;
  let { items, visibleStartIndex, beforeSize, visibleEndIndex } = args;
  let h2, a, b, i, oldI;
  a = 0;
  b = count - 1;
  i = ~~(count / 2);
  do {
    oldI = i;
    h2 = sizes[i].accumulator;
    if (h2 < scroll.start) {
      a = i;
    } else if (i < count - 1 && sizes[i + 1].accumulator > scroll.start) {
      b = i;
    }
    i = ~~((a + b) / 2);
  } while (i !== oldI);
  i < 0 && (i = 0);
  startIndex = i;
  totalSize = sizes[count - 1].accumulator;
  for (endIndex = i; endIndex < count && sizes[endIndex].accumulator < scroll.end; endIndex++) {
  }
  if (endIndex === -1) {
    endIndex = items.length - 1;
  } else {
    endIndex++;
    endIndex > count && (endIndex = count);
  }
  for (visibleStartIndex = startIndex; visibleStartIndex < count && beforeSize + sizes[visibleStartIndex].accumulator < scroll.start; visibleStartIndex++) {
  }
  for (visibleEndIndex = visibleStartIndex; visibleEndIndex < count && beforeSize + sizes[visibleEndIndex].accumulator < scroll.end; visibleEndIndex++) {
  }
  return { startIndex, totalSize, endIndex, visibleStartIndex, visibleEndIndex };
};
const computePool = (args) => {
  let { continuous, pool, checkItem, itemIndexByKey, keyField, startIndex } = args;
  let { endIndex, api: api2, items, views, itemSize, sizes, typeField, unusedViews } = args;
  let { emit, gridItems, itemSecondarySize } = args;
  let view = unuseInvisible({ continuous, pool, checkItem, itemIndexByKey, keyField, startIndex, endIndex, api: api2 });
  const unusedIndex = continuous ? null : /* @__PURE__ */ new Map();
  let item, type;
  for (let i = startIndex; i < endIndex; i++) {
    item = items[i];
    const key = keyField ? item[keyField] : item;
    if (isNull(key)) {
      throw new Error(`[TINY Error][RecycleScroller] Key is ${key} on item (keyField is '${keyField}')`);
    }
    view = views.get(key);
    if (!itemSize && !sizes[i].size) {
      if (view)
        api2.unuseView(view);
      continue;
    }
    type = item[typeField];
    let unusedPool = unusedViews.get(type);
    let newlyUsedView = false;
    let args2 = { view, continuous, unusedPool, api: api2, pool, i, item };
    Object.assign(args2, { key, type, unusedIndex, unusedViews, views, newlyUsedView });
    const ret = computePoolView(args2);
    view = ret.view;
    unusedPool = ret.unusedPool;
    newlyUsedView = ret.newlyUsedView;
    if (newlyUsedView) {
      if (i === items.length - 1)
        emit("scroll-end");
      if (i === 0)
        emit("scroll-start");
    }
    if (itemSize === null) {
      view.position = sizes[i - 1].accumulator;
      view.offset = 0;
    } else {
      view.position = Math.floor(i / gridItems) * itemSize;
      view.offset = i % gridItems * itemSecondarySize;
    }
  }
};
const unuseInvisible = ({ continuous, pool, checkItem, itemIndexByKey, keyField, startIndex, endIndex, api: api2 }) => {
  let view;
  if (continuous) {
    for (let i = 0, l = pool.length; i < l; i++) {
      view = pool[i];
      if (view.nr.used) {
        if (checkItem) {
          view.nr.index = itemIndexByKey[view.item[keyField]];
        }
        if (isNull(view.nr.index) || view.nr.index < startIndex || view.nr.index >= endIndex) {
          api2.unuseView(view);
        }
      }
    }
  }
  return view;
};
const computePoolView = (args) => {
  let { view, continuous, unusedPool, api: api2, pool, i, item } = args;
  let { key, type, unusedIndex, unusedViews, views, newlyUsedView } = args;
  let v;
  if (!view) {
    if (continuous) {
      if (unusedPool && unusedPool.length) {
        view = unusedPool.pop();
      } else {
        view = api2.addView(pool, i, item, key, type);
      }
    } else {
      v = unusedIndex.get(type) || 0;
      if (!unusedPool || v >= unusedPool.length) {
        view = api2.addView(pool, i, item, key, type);
        api2.unuseView(view, true);
        unusedPool = unusedViews.get(type);
      }
      view = unusedPool[v];
      unusedIndex.set(type, v + 1);
    }
    views.delete(view.nr.key);
    view.nr.used = true;
    view.nr.index = i;
    view.nr.key = key;
    view.nr.type = type;
    views.set(key, view);
    newlyUsedView = true;
  } else {
    if (!view.nr.used) {
      view.nr.used = true;
      newlyUsedView = true;
      if (unusedPool) {
        const index3 = unusedPool.indexOf(view);
        if (~index3)
          unusedPool.splice(index3, 1);
      }
    }
  }
  view.item = item;
  return { view, unusedPool, newlyUsedView };
};
const computeViewStyle = ({ props: props2, state }) => (view) => {
  const { direction, gridItems, itemSecondarySize, itemSize } = props2;
  let transform = `translate${direction === "vertical" ? "Y" : "X"}(${view.position}px)`;
  transform = `${transform} translate${direction === "vertical" ? "X" : "Y"}(${view.offset}px)`;
  let width = gridItems ? `${direction === "vertical" ? itemSecondarySize || itemSize : itemSize}px` : void 0;
  let height = gridItems ? `${direction === "horizontal" ? itemSecondarySize || itemSize : itemSize}px` : void 0;
  return state.ready ? { transform, width, height } : null;
};
const computeViewEvent = ({ props: props2, state }) => (view) => {
  if (props2.skipHover) {
    return {};
  } else {
    return {
      mouseenter: () => state.hoverKey = view.nr.key,
      mouseleave: () => state.hoverKey = null
    };
  }
};
const api = [
  "state",
  "handleVisibilityChange",
  "handleScroll",
  "scrollToItem",
  "computeViewStyle",
  "computeViewEvent",
  "updateVisibleItems"
];
const addWatchers = ({ watch, props: props2, api: api2, state }) => {
  watch(
    () => props2.items,
    () => api2.updateVisibleItems(true)
  );
  watch(
    () => props2.pageMode,
    () => {
      api2.applyPageMode();
      api2.updateVisibleItems(false);
    }
  );
  watch(
    () => state.sizes,
    () => api2.updateVisibleItems(false),
    { deep: true }
  );
  watch(
    () => props2.gridItems,
    () => api2.updateVisibleItems(true)
  );
  watch(
    () => props2.itemSecondarySize,
    () => api2.updateVisibleItems(true)
  );
};
const checkProps = (props2) => {
  if (props2.gridItems && !props2.itemSize) {
    throw new Error("[TINY Error][RecycleScroller] You must provide an itemSize when using gridItems");
  }
};
const renderless = (props2, { reactive: reactive2, computed, onBeforeUnmount, onMounted, onActivated, watch, markRaw, shallowReactive }, { vm, nextTick, emit }) => {
  const state = reactive2({
    pool: [],
    totalSize: 0,
    ready: false,
    hoverKey: null,
    simpleArray: computed(() => props2.items.length && typeof props2.items[0] !== "object"),
    sizes: computed(() => api2.computedSizes()),
    itemIndexByKey: computed(() => api2.computedItemIndexByKey())
  });
  const api2 = {
    state,
    computedSizes: computedSizes({ props: props2, state }),
    computedItemIndexByKey: computedItemIndexByKey(props2),
    getScroll: getScroll({ props: props2, vm }),
    unuseView: unuseView(state),
    addView: addView({ markRaw, shallowReactive }),
    sortViews: sortViews(state),
    getListenerTarget: getListenerTarget({ props: props2, vm }),
    scrollToPosition: scrollToPosition({ props: props2, vm }),
    computeViewStyle: computeViewStyle({ props: props2, state }),
    computeViewEvent: computeViewEvent({ props: props2, state })
  };
  Object.assign(api2, {
    handleVisibilityChange: handleVisibilityChange({ api: api2, emit, state }),
    updateVisibleItems: updateVisibleItems({ api: api2, emit, props: props2, state, vm }),
    handleScroll: handleScroll({ api: api2, props: props2, state }),
    handleResize: handleResize({ api: api2, emit, state }),
    applyPageMode: applyPageMode({ api: api2, props: props2 }),
    addListeners: addListeners({ api: api2, state }),
    removeListeners: removeListeners({ api: api2, state }),
    scrollToItem: scrollToItem({ api: api2, props: props2, state })
  });
  state.temporary = {
    startIndex: 0,
    endIndex: 0,
    views: /* @__PURE__ */ new Map(),
    unusedViews: /* @__PURE__ */ new Map(),
    scrollDirty: false,
    lastUpdateScrollPosition: 0
  };
  if (props2.prerender) {
    state.temporary.prerender = true;
    api2.updateVisibleItems(false);
  }
  checkProps(props2);
  onActivated(() => {
    const lastPosition = state.temporary.lastUpdateScrollPosition;
    if (typeof lastPosition === "number") {
      nextTick(() => {
        api2.scrollToPosition(lastPosition);
      });
    }
  });
  onMounted(() => {
    addResizeListener(vm.$el, api2.handleResize);
    api2.applyPageMode();
    nextTick(() => {
      state.temporary.prerender = false;
      api2.updateVisibleItems(true);
      state.ready = true;
    });
  });
  onBeforeUnmount(() => {
    removeResizeListener(vm.$el, api2.handleResize);
    api2.removeListeners();
  });
  addWatchers({ watch, props: props2, api: api2, state });
  return api2;
};
const CONTEXT_KEY = "@@observevisibilityContext";
const processOptions = (value) => {
  let options;
  if (typeof value === "function") {
    options = { callback: value };
  } else {
    options = value;
  }
  return options;
};
const createObserver = ({ options, instance, state }) => {
  if (state.observer) {
    destroyObserver(state);
  }
  if (state.frozen)
    return;
  state.options = processOptions(options);
  state.callback = (result, entry) => {
    state.options.callback(result, entry);
    if (result && state.options.once) {
      state.frozen = true;
      destroyObserver(state);
    }
  };
  if (state.callback && state.options.throttle) {
    state.callback = throttle_default(state.options.throttleDelay || 20, state.callback);
  }
  state.observer = new IntersectionObserver((entries) => {
    let entry = entries[0];
    if (entries.length > 1) {
      const intersectingEntry = entries.find((e) => e.isIntersecting);
      if (intersectingEntry) {
        entry = intersectingEntry;
      }
    }
    if (state.callback) {
      state.callback(entry.isIntersecting, entry);
    }
  }, state.options.intersection);
  instance.$nextTick(() => {
    if (state.observer) {
      state.observer.observe(state.el);
    }
  });
};
const destroyObserver = (state) => {
  if (state.observer) {
    state.observer.disconnect();
    state.observer = null;
  }
  if (state.callback) {
    state.callback = null;
  }
};
const createVisibilityState = ({ el, options, instance }) => {
  const state = { el, observer: null, frozen: false };
  createObserver({ options, instance, state });
  return state;
};
const bind = (el, { value, instance }, { context }) => {
  if (!value)
    return;
  if (typeof IntersectionObserver === "undefined") {
    throw new TypeError("[TINY Error][ObserveVisibility] IntersectionObserver API is not available in your browser");
  } else {
    instance = instance || context;
    el[CONTEXT_KEY] = createVisibilityState({ el, options: value, instance });
  }
};
const update = (el, { value, oldValue, instance }, { context }) => {
  if (isEqual$1(value, oldValue))
    return;
  const state = el[CONTEXT_KEY];
  if (!value) {
    unbind(el);
    return;
  }
  instance = instance || context;
  if (state) {
    createObserver({ options: value, instance, state });
  } else {
    bind(el, { value, instance }, { context });
  }
};
const unbind = (el) => {
  const state = el[CONTEXT_KEY];
  if (state) {
    destroyObserver(state);
    delete el[CONTEXT_KEY];
  }
};
const ObserveVisibility = {
  bind,
  update,
  unbind,
  beforeMount: bind,
  updated: update,
  unmounted: unbind
};
var observe_visibility_default = ObserveVisibility;
const index$1 = "";
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
var _export_sfc$2 = function _export_sfc29(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$2(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$2 = defineComponent({
  emits: ["resize", "visible", "hidden", "update", "scroll-start", "scroll-end"],
  props: [].concat(props, ["items", "keyField", "direction", "listTag", "itemTag", "itemSize", "gridItems", "itemSecondarySize", "minItemSize", "sizeField", "typeField", "buffer", "pageMode", "prerender", "emitUpdate", "updateInterval", "skipHover", "listClass", "itemClass", "itemsLimit"]),
  directives: {
    ObserveVisibility: observe_visibility_default
  },
  setup: function setup$110(props2, context) {
    return setup({
      props: props2,
      context,
      renderless,
      api
    });
  }
});
var _hoisted_1$2 = {
  key: 0,
  ref: "before",
  class: "tiny-recycle-scroller__slot"
};
var _hoisted_2$2 = {
  key: 1,
  ref: "after",
  class: "tiny-recycle-scroller__slot"
};
function _sfc_render$2(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _ref, _normalizeStyle;
  var _directive_observe_visibility = resolveDirective("observe-visibility");
  return withDirectives((openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-recycle-scroller", (_ref = {
        ready: _ctx.state.ready,
        "page-mode": _ctx.pageMode
      }, _ref["direction-" + _ctx.direction] = true, _ref)]),
      onScrollPassive: _cache[0] || (_cache[0] = function() {
        return _ctx.handleScroll && _ctx.handleScroll.apply(_ctx, arguments);
      })
    },
    [_ctx.slots.before ? (openBlock(), createElementBlock(
      "div",
      _hoisted_1$2,
      [renderSlot(_ctx.$slots, "before")],
      512
      /* NEED_PATCH */
    )) : createCommentVNode("v-if", true), (openBlock(), createBlock(resolveDynamicComponent(_ctx.listTag), {
      ref: "wrapper",
      style: normalizeStyle((_normalizeStyle = {}, _normalizeStyle[_ctx.direction === "vertical" ? "minHeight" : "minWidth"] = _ctx.state.totalSize + "px", _normalizeStyle)),
      class: normalizeClass(["tiny-recycle-scroller__item-wrapper", _ctx.listClass])
    }, {
      default: withCtx(function() {
        return [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.state.pool, function(view) {
            return openBlock(), createBlock(resolveDynamicComponent(_ctx.itemTag), mergeProps({
              key: view.nr.id,
              style: _ctx.computeViewStyle(view),
              class: ["tiny-recycle-scroller__item-view", [_ctx.itemClass, {
                hover: !_ctx.skipHover && _ctx.state.hoverKey === view.nr.key
              }]]
            }, toHandlers(_ctx.computeViewEvent(view))), {
              default: withCtx(function() {
                return [renderSlot(_ctx.$slots, "default", {
                  item: view.item,
                  index: view.nr.index,
                  active: view.nr.used
                })];
              }),
              _: 2
              /* DYNAMIC */
            }, 1040, ["style", "class"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )), renderSlot(_ctx.$slots, "empty")];
      }),
      _: 3
      /* FORWARDED */
    }, 8, ["style", "class"])), _ctx.slots.after ? (openBlock(), createElementBlock(
      "div",
      _hoisted_2$2,
      [renderSlot(_ctx.$slots, "after")],
      512
      /* NEED_PATCH */
    )) : createCommentVNode("v-if", true)],
    34
    /* CLASS, NEED_HYDRATION */
  )), [[_directive_observe_visibility, _ctx.handleVisibilityChange]]);
}
var pc$1 = /* @__PURE__ */ _export_sfc$2(_sfc_main$2, [["render", _sfc_render$2]]);
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
var template$1 = function template24(mode) {
  var _process$env;
  typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  return pc$1;
};
var RecycleScroller = defineComponent({
  name: $prefix + "RecycleScroller",
  props: _extends$3({}, $props, {
    items: {
      type: Array,
      required: true
    },
    keyField: {
      type: String,
      default: "id"
    },
    direction: {
      type: String,
      default: "vertical",
      validator: function validator2(value) {
        return ["vertical", "horizontal"].includes(value);
      }
    },
    listTag: {
      type: String,
      default: "div"
    },
    itemTag: {
      type: String,
      default: "div"
    },
    itemSize: {
      type: Number,
      default: null
    },
    gridItems: {
      type: Number,
      default: void 0
    },
    itemSecondarySize: {
      type: Number,
      default: void 0
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: "size"
    },
    typeField: {
      type: String,
      default: "type"
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: false
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: false
    },
    updateInterval: {
      type: Number,
      default: 0
    },
    skipHover: {
      type: Boolean,
      default: false
    },
    listClass: {
      type: [String, Object, Array],
      default: ""
    },
    itemClass: {
      type: [String, Object, Array],
      default: ""
    },
    itemsLimit: {
      type: Number,
      default: 1e3
    }
  }),
  setup: function setup5(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$1
    });
  }
});
var reactive = reactive$1;
var buildInstanceTemporary = function buildInstanceTemporary2(store) {
  var temporary = {};
  temporary.stateId = null;
  temporary.getId = null;
  temporary.updateIdState = function(vm) {
    var id = temporary.getId();
    if (isNull(id)) {
      console.warn("[TINY Error][Mixin IdState] No id found for IdState with idProp");
    }
    if (id !== temporary.stateId) {
      if (!store[id]) {
        temporary.idStateInit(id, vm);
      }
      vm.idState = store[id];
    }
  };
  temporary.idStateInit = function(id, vm) {
    var factory = vm.$options.idState;
    if (typeof factory === "function") {
      var data = factory.call(vm, vm);
      store[id] = data;
      temporary.stateId = id;
      return data;
    } else {
      throw new TypeError("[TINY Error][Mixin IdState] Missing `idState` function on component definition");
    }
  };
  return temporary;
};
function IdState(_ref) {
  var _ref2;
  var idProp = _ref.idProp, stateGetterName = _ref.stateGetterName;
  idProp = idProp || function(vm) {
    return vm.item.id;
  };
  stateGetterName = stateGetterName || "getIdState";
  var store = reactive({});
  return _ref2 = {
    data: function data() {
      return {
        idState: null
      };
    },
    created: function created() {
      var _this = this;
      this.temporary = buildInstanceTemporary(store);
      if (typeof idProp === "function") {
        this.temporary.getId = function() {
          return idProp.call(_this, _this);
        };
      } else {
        this.temporary.getId = function() {
          return _this[idProp];
        };
      }
      this.$watch(this.temporary.getId, {
        handler: function handler(value) {
          var _this2 = this;
          this.$nextTick(function() {
            return _this2.temporary.stateId = value;
          });
        },
        immediate: true
      });
      this.temporary.updateIdState(this);
    },
    beforeUpdate: function beforeUpdate() {
      this.temporary.updateIdState(this);
    }
  }, _ref2[stateGetterName] = function(id) {
    return isNull(id) ? store : store[id] ? store[id] : null;
  }, _ref2;
}
var version$1 = "3.16.0";
RecycleScroller.IdState = IdState;
RecycleScroller.install = function(Vue) {
  Vue.component(RecycleScroller.name, RecycleScroller);
};
RecycleScroller.version = version$1;
const index = "";
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
var _export_sfc$1 = function _export_sfc210(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$1(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
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
var getReference$1 = function getReference2(el, binding, vnode) {
  var _ref = binding.expression ? binding.value : binding.arg;
  var popper = vnode.context.$refs[_ref];
  if (popper) {
    if (Array.isArray(popper)) {
      popper[0].$refs.reference = el;
    } else {
      popper.$refs.reference = el;
    }
  }
};
var _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  emits: ["update:modelValue", "change", "focus", "blur", "clear", "remove-tag", "visible-change", "handleDropdownClick", "dropdown-click", "top-create-click"],
  directives: directive({
    Clickoutside: clickoutside_default,
    popover: {
      bind: function bind2(el, binding, vnode) {
        getReference$1(el, binding, vnode);
      },
      inserted: function inserted(el, binding, vnode) {
        getReference$1(el, binding, vnode);
      }
    }
  }),
  components: {
    TinyTag: Tag,
    TinyInput: Input,
    TinyOption: Option,
    TinyGrid: Grid,
    TinyTree: Tree,
    TinyButton: Button,
    IconClose: index$g(),
    TinyScrollbar: _sfc_main$9,
    IconCopy: index$a(),
    IconPlus: index$9(),
    TinySelectDropdown: SelectDropdown,
    IconHalfselect: index$l(),
    IconCheck: index$b(),
    IconCheckedSur: index$c(),
    TinyFilterBox: FilterBox,
    TinyTooltip: Tooltip,
    TinyRecycleScroller: RecycleScroller,
    // tiny 新增，
    IconSearch: index$f(),
    IconDeltaDown: index$m(),
    // 默认下拉图标
    TinyCheckbox: Checkbox,
    IconEllipsis: index$n(),
    IconChevronUp: index$i()
  },
  props: [].concat(props, [
    "id",
    "multiple",
    "name",
    "dataset",
    "readonly",
    "tabindex",
    "dropStyle",
    "valueField",
    "textField",
    "copyable",
    "size",
    "options",
    "showCheck",
    "showAlloption",
    "hideDrop",
    "modelValue",
    "showOverflowTooltip",
    "remote",
    "remoteConfig",
    "placement",
    "loading",
    "disabled",
    "valueKey",
    "clearable",
    "noDataText",
    "filterable",
    "loadingText",
    "noMatchText",
    "popperClass",
    "allowCreate",
    "placeholder",
    "remoteMethod",
    "filterMethod",
    "collapseTags",
    "autocomplete",
    "multipleLimit",
    "reserveKeyword",
    "automaticDropdown",
    "defaultFirstOption",
    "popperAppendToBody",
    "showDropdown",
    "expandTags",
    "renderType",
    "gridOp",
    "treeOp",
    "delay",
    "cacheOp",
    "isDropInheritWidth",
    "tagSelectable",
    "selectConfig",
    "radioConfig",
    "allowCopy",
    "textSplit",
    "autoClose",
    "queryDebounce",
    "ignoreEnter",
    "dropdownIcon",
    "disabledTooltipContent",
    "hoverExpand",
    "optimization",
    "displayOnly",
    "initQuery",
    "extraQueryParams",
    "shape",
    "label",
    "tip",
    "updateDelay",
    "showTips",
    "popperOptions",
    "trim",
    "topCreate",
    "topCreateText",
    "keepFocus",
    "blank",
    // 以下为 tiny 新增
    "searchable",
    "showEmptyImage",
    "inputBoxType",
    "tagType",
    "clearNoMatchValue",
    "showLimitText",
    "showProportion",
    "clickExpand",
    "maxVisibleRows",
    "showAllTextTag",
    "allText"
  ]),
  setup: function setup$111(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$7,
      api: api$7
    });
  }
});
var _hoisted_1$1 = {
  key: 0
};
var _hoisted_2$1 = {
  key: 0
};
var _hoisted_3$1 = {
  class: "tiny-select__tags-text"
};
var _hoisted_4$1 = {
  key: 0
};
var _hoisted_5$1 = {
  class: "tiny-select__tags-text"
};
var _hoisted_6$1 = {
  key: 1,
  ref: "tags-content"
};
var _hoisted_7$1 = {
  key: 0,
  class: "tiny-select__tags-text"
};
var _hoisted_8$1 = {
  key: 1,
  class: "tiny-select__tags-text"
};
var _hoisted_9$1 = {
  key: 0
};
var _hoisted_10$1 = {
  key: 1
};
var _hoisted_11$1 = {
  key: 1,
  class: "tiny-select__tags-text is-disabled"
};
var _hoisted_12$1 = {
  key: 0
};
var _hoisted_13 = {
  key: 1
};
var _hoisted_14 = ["disabled", "autocomplete"];
var _hoisted_15 = {
  key: 0,
  class: "tiny-select__limit-txt"
};
var _hoisted_16 = {
  key: 1,
  class: "tiny-select__proportion-txt"
};
var _hoisted_17 = {
  key: 1,
  class: "tiny-select__top-create"
};
var _hoisted_18 = {
  class: "tiny-icon-close"
};
var _hoisted_19 = {
  key: 0
};
var _hoisted_20 = {
  key: 1,
  class: "tiny-select-dropdown__empty-images"
};
var _hoisted_21 = {
  key: 2,
  class: "tiny-select-dropdown__empty"
};
var _hoisted_22 = {
  key: 1,
  class: "tiny-select-dropdown__loading"
};
var _hoisted_23 = {
  key: 0,
  class: "tiny-select-dropdown__empty-images"
};
var _hoisted_24 = {
  key: 1,
  class: "tiny-select-dropdown__empty"
};
var _hoisted_25 = {
  key: 1,
  class: "circular",
  viewBox: "25 25 50 50"
};
var _hoisted_26 = /* @__PURE__ */ createBaseVNode(
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
var _hoisted_27 = [_hoisted_26];
var _hoisted_28 = {
  key: 0,
  class: "tiny-select__placeholder"
};
var _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "input",
  {
    class: "tiny-input__inner",
    disabled: ""
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_30 = [_hoisted_29];
function _sfc_render$1(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_filter_box = resolveComponent("tiny-filter-box");
  var _component_tiny_tooltip = resolveComponent("tiny-tooltip");
  var _component_tiny_tag = resolveComponent("tiny-tag");
  var _component_icon_ellipsis = resolveComponent("icon-ellipsis");
  var _component_icon_chevron_up = resolveComponent("icon-chevron-up");
  var _component_icon_copy = resolveComponent("icon-copy");
  var _component_icon_close = resolveComponent("icon-close");
  var _component_tiny_input = resolveComponent("tiny-input");
  var _component_icon_plus = resolveComponent("icon-plus");
  var _component_tiny_grid = resolveComponent("tiny-grid");
  var _component_tiny_tree = resolveComponent("tiny-tree");
  var _component_icon_search = resolveComponent("icon-search");
  var _component_tiny_option = resolveComponent("tiny-option");
  var _component_tiny_recycle_scroller = resolveComponent("tiny-recycle-scroller");
  var _component_tiny_checkbox = resolveComponent("tiny-checkbox");
  var _component_tiny_scrollbar = resolveComponent("tiny-scrollbar");
  var _component_tiny_select_dropdown = resolveComponent("tiny-select-dropdown");
  var _directive_popover = resolveDirective("popover");
  var _directive_clickoutside = resolveDirective("clickoutside");
  return withDirectives((openBlock(), createElementBlock(
    "div",
    mergeProps({
      ref: "select",
      class: ["tiny-select", [_ctx.state.selectSize ? "tiny-select--" + _ctx.state.selectSize : "", _ctx.state.collapseTags ? "tiny-select__collapse-tags" : "", _ctx.filterable ? "tiny-select__filterable" : "", _ctx.multiple ? "tiny-select__multiple" : "", (_ctx.state.inputHovering || _ctx.state.visible) && !_ctx.clickExpand ? "is-hover" : "", _ctx.state.isDisplayOnly ? "is-display-only" : "", _ctx.hoverExpand ? "is-hover-expand" : "", _ctx.clickExpand ? "is-click-expand" : "", _ctx.state.showCollapseTag ? "collapse-tag-clicked" : "", _ctx.state.selectDisabled ? "is-disabled" : "", _ctx.$parent.$attrs.class, _ctx.inputBoxType === "underline" ? "tiny-select__underline" : ""]],
      onMouseleave: _cache[41] || (_cache[41] = withModifiers(function() {
        _ctx.state.selectHover = false;
        _ctx.state.inputHovering = false;
      }, ["self"])),
      onMouseenter: _cache[42] || (_cache[42] = withModifiers(function() {
        _ctx.state.selectHover = true;
        _ctx.state.inputHovering = true;
      }, ["self"])),
      onClick: _cache[43] || (_cache[43] = function() {
        return _ctx.toggleMenu && _ctx.toggleMenu.apply(_ctx, arguments);
      })
    }, _ctx.a(_ctx.$attrs, ["class", "style"], true)),
    [createBaseVNode(
      "div",
      {
        ref: "tagsGroup",
        style: normalizeStyle(_ctx.state.selectFiexd),
        class: normalizeClass(["tiny-select__tags-group", {
          "is-expand": _ctx.state.isExpand
        }])
      },
      [renderSlot(_ctx.$slots, "reference", {}, function() {
        return [_ctx.shape === "filter" ? (openBlock(), createBlock(_component_tiny_filter_box, {
          key: 0,
          ref: "reference",
          onClick: _ctx.toggleMenu,
          "show-close": _ctx.clearable,
          placeholder: _ctx.placeholder,
          disabled: _ctx.state.selectDisabled,
          label: _ctx.label,
          tip: _ctx.tip,
          value: _ctx.multiple ? _ctx.state.selected.map(function(item) {
            return item.state ? item.state.currentLabel : item.currentLabel;
          }).join("; ") : _ctx.state.selectedLabel,
          "drop-down-visible": _ctx.state.visible,
          blank: _ctx.blank
        }, null, 8, ["onClick", "show-close", "placeholder", "disabled", "label", "tip", "value", "drop-down-visible", "blank"])) : createCommentVNode("v-if", true), _ctx.multiple && !_ctx.state.isDisplayOnly && !_ctx.shape ? (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            ref: "tags",
            class: normalizeClass(["tiny-select__tags", {
              "is-showicon": _ctx.slots.prefix,
              "not-selected": !_ctx.state.selected.length
            }]),
            style: normalizeStyle(_ctx.state.tagsStyle)
          },
          [!_ctx.state.selectDisabled ? (openBlock(), createElementBlock("span", _hoisted_1$1, [_ctx.collapseTags && _ctx.state.selected.length ? (openBlock(), createElementBlock("span", _hoisted_2$1, [(openBlock(), createBlock(_component_tiny_tag, {
            closable: !_ctx.state.selectDisabled,
            size: _ctx.state.collapseTagSize,
            hit: _ctx.state.selected[0].state ? _ctx.state.selected[0].state.hitState : _ctx.state.selected[0].hitState,
            key: _ctx.state.key,
            type: _ctx.state.getTagType,
            onClose: _cache[1] || (_cache[1] = function($event) {
              return _ctx.deleteTag($event, _ctx.state.selected[0]);
            }),
            "disable-transitions": ""
          }, {
            default: withCtx(function() {
              return [createVNode(_component_tiny_tooltip, {
                effect: "light",
                placement: "top",
                onMouseenter: _cache[0] || (_cache[0] = function($event) {
                  return _ctx.handleEnterTag($event, _ctx.getValueKey(_ctx.state.selected[0]));
                })
              }, {
                content: withCtx(function() {
                  return [_ctx.state.tooltipContent[_ctx.getValueKey(_ctx.state.selected[0])] ? (openBlock(), createElementBlock("span", _hoisted_4$1, [renderSlot(_ctx.$slots, "label", {
                    item: _ctx.getLabelSlotValue(_ctx.state.selected[0])
                  }, function() {
                    return [createTextVNode(
                      toDisplayString(_ctx.state.selected[0].state ? _ctx.state.selected[0].state.currentLabel : _ctx.state.selected[0].currentLabel),
                      1
                      /* TEXT */
                    )];
                  })])) : createCommentVNode("v-if", true)];
                }),
                default: withCtx(function() {
                  return [createBaseVNode("span", _hoisted_3$1, [renderSlot(_ctx.$slots, "label", {
                    item: _ctx.getLabelSlotValue(_ctx.state.selected[0])
                  }, function() {
                    return [createTextVNode(
                      toDisplayString(_ctx.state.selected[0].state ? _ctx.state.selected[0].state.currentLabel : _ctx.state.selected[0].currentLabel),
                      1
                      /* TEXT */
                    )];
                  })])];
                }),
                _: 3
                /* FORWARDED */
              })];
            }),
            _: 3
            /* FORWARDED */
          }, 8, ["closable", "size", "hit", "type"])), _ctx.state.selected.length > 1 ? (openBlock(), createBlock(_component_tiny_tag, {
            key: 0,
            closable: false,
            size: _ctx.state.collapseTagSize,
            type: _ctx.state.getTagType,
            "disable-transitions": "",
            class: "tiny-select__tags-number"
          }, {
            default: withCtx(function() {
              return [createBaseVNode(
                "span",
                _hoisted_5$1,
                "+ " + toDisplayString(_ctx.state.selected.length - 1),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }, 8, ["size", "type"])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), !_ctx.collapseTags ? (openBlock(), createElementBlock(
            "span",
            _hoisted_6$1,
            [_ctx.showAllTextTag && _ctx.state.selectCls === "checked-sur" ? (openBlock(), createBlock(_component_tiny_tag, {
              type: _ctx.state.getTagType,
              key: "tags-all-text-tag",
              "data-tag": "tags-all-text-tag",
              closable: true,
              size: _ctx.state.collapseTagSize,
              onClose: _cache[2] || (_cache[2] = function($event) {
                return _ctx.toggleCheckAll(false);
              })
            }, {
              default: withCtx(function() {
                return [createTextVNode(
                  toDisplayString(_ctx.allText || _ctx.t("ui.base.all")),
                  1
                  /* TEXT */
                )];
              }),
              _: 1
              /* STABLE */
            }, 8, ["type", "size"])) : (openBlock(), createElementBlock(
              Fragment,
              {
                key: 1
              },
              [_ctx.hoverExpand || _ctx.clickExpand ? (openBlock(), createBlock(_component_tiny_tag, {
                class: normalizeClass(["tiny-select__tags-collapse", {
                  "is-hidden": _ctx.state.isHidden
                }]),
                type: _ctx.state.getTagType,
                key: "tags-collapse",
                "data-tag": "tags-collapse",
                closable: false,
                size: _ctx.state.collapseTagSize,
                onClick: _cache[3] || (_cache[3] = function($event) {
                  return _ctx.onClickCollapseTag($event);
                })
              }, {
                default: withCtx(function() {
                  return [_ctx.hoverExpand ? (openBlock(), createElementBlock(
                    Fragment,
                    {
                      key: 0
                    },
                    [createTextVNode(
                      " + " + toDisplayString(_ctx.state.collapseTagsLength),
                      1
                      /* TEXT */
                    )],
                    64
                    /* STABLE_FRAGMENT */
                  )) : (openBlock(), createBlock(_component_icon_ellipsis, {
                    key: 1
                  }))];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class", "type", "size"])) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(_ctx.state.selected, function(item, index3) {
                  return openBlock(), createBlock(_component_tiny_tag, {
                    key: _ctx.getValueKey(item),
                    class: normalizeClass({
                      "not-visible": _ctx.state.toHideIndex <= index3 && !_ctx.state.isExpand
                    }),
                    closable: !item.disabled && !item.required,
                    size: _ctx.state.collapseTagSize,
                    hit: item.state ? item.state.hitState : item.hitState,
                    type: _ctx.state.getTagType,
                    onClose: function onClose($event) {
                      return _ctx.deleteTag($event, item);
                    },
                    "disable-transitions": ""
                  }, {
                    default: withCtx(function() {
                      return [createVNode(_component_tiny_tooltip, {
                        effect: "light",
                        placement: "top",
                        onMouseenter: function onMouseenter($event) {
                          return _ctx.handleEnterTag($event, _ctx.getValueKey(item));
                        }
                      }, createSlots({
                        default: withCtx(function() {
                          return [!_ctx.state.visible && _ctx.state.overflow === index3 ? (openBlock(), createElementBlock(
                            "span",
                            _hoisted_7$1,
                            toDisplayString(item.state ? item.state.currentLabel + "... " : item.currentLabel + "... "),
                            1
                            /* TEXT */
                          )) : (openBlock(), createElementBlock("span", _hoisted_8$1, [renderSlot(_ctx.$slots, "label", {
                            item: _ctx.getLabelSlotValue(item)
                          }, function() {
                            return [createTextVNode(
                              toDisplayString(item.state ? item.state.currentLabel : item.currentLabel),
                              1
                              /* TEXT */
                            )];
                          })]))];
                        }),
                        _: 2
                        /* DYNAMIC */
                      }, [_ctx.state.tooltipContent[_ctx.getValueKey(item)] ? {
                        name: "content",
                        fn: withCtx(function() {
                          return [!_ctx.state.visible && _ctx.state.overflow === index3 ? (openBlock(), createElementBlock(
                            "span",
                            _hoisted_9$1,
                            toDisplayString(item.state ? item.state.currentLabel + "... " : item.currentLabel + "... "),
                            1
                            /* TEXT */
                          )) : (openBlock(), createElementBlock("span", _hoisted_10$1, [renderSlot(_ctx.$slots, "label", {
                            item: _ctx.getLabelSlotValue(item)
                          }, function() {
                            return [createTextVNode(
                              toDisplayString(item.state ? item.state.currentLabel : item.currentLabel),
                              1
                              /* TEXT */
                            )];
                          })]))];
                        }),
                        key: "0"
                      } : void 0]), 1032, ["onMouseenter"])];
                    }),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["class", "closable", "size", "hit", "type", "onClose"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )), _ctx.clickExpand && _ctx.state.showCollapseTag ? (openBlock(), createElementBlock("span", {
                key: 1,
                class: "tiny-select__collapse-text",
                onClick: _cache[4] || (_cache[4] = function($event) {
                  return _ctx.onClickCollapseTag($event);
                })
              }, [createTextVNode(
                toDisplayString(_ctx.t("ui.select.collapse")) + " ",
                1
                /* TEXT */
              ), createVNode(_component_icon_chevron_up)])) : createCommentVNode("v-if", true)],
              64
              /* STABLE_FRAGMENT */
            ))],
            512
            /* NEED_PATCH */
          )) : createCommentVNode("v-if", true)])) : (openBlock(), createElementBlock("span", _hoisted_11$1, [createVNode(_component_tiny_tooltip, {
            effect: "light",
            placement: "top",
            disabled: !_ctx.showTips
          }, {
            content: withCtx(function() {
              return [createBaseVNode(
                "div",
                {
                  class: normalizeClass([_ctx.state.showTips && "tiny-select__show-tips", "tiny-select__show-common"])
                },
                [_ctx.slots.label ? (openBlock(), createElementBlock("span", _hoisted_12$1, [(openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.state.selected, function(item) {
                    return openBlock(), createElementBlock("span", {
                      key: _ctx.getValueKey(item)
                    }, [renderSlot(_ctx.$slots, "label", {
                      item
                    })]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))])) : (openBlock(), createElementBlock(
                  "span",
                  _hoisted_13,
                  toDisplayString(_ctx.disabledTooltipContent || _ctx.state.disabledTooltipContent),
                  1
                  /* TEXT */
                ))],
                2
                /* CLASS */
              )];
            }),
            default: withCtx(function() {
              return [createBaseVNode("span", null, [(openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(_ctx.state.selected, function(item) {
                  return openBlock(), createElementBlock("span", {
                    key: item.value
                  }, [renderSlot(_ctx.$slots, "label", {
                    item
                  }, function() {
                    return [createTextVNode(
                      toDisplayString(item.state ? item.state.currentLabel : item.currentLabel),
                      1
                      /* TEXT */
                    )];
                  }), createTextVNode("; ")]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))])];
            }),
            _: 3
            /* FORWARDED */
          }, 8, ["disabled"])])), withDirectives(createBaseVNode("input", {
            ref: "input",
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function($event) {
              return _ctx.state.query = $event;
            }),
            type: "text",
            class: normalizeClass(["tiny-select__input", [_ctx.state.selectSize ? "is-" + _ctx.state.selectSize : ""]]),
            disabled: _ctx.state.selectDisabled,
            autocomplete: _ctx.autocomplete,
            onFocus: _cache[6] || (_cache[6] = function() {
              return _ctx.handleFocus && _ctx.handleFocus.apply(_ctx, arguments);
            }),
            onBlur: _cache[7] || (_cache[7] = function() {
              return _ctx.handleBlur && _ctx.handleBlur.apply(_ctx, arguments);
            }),
            onKeyup: _cache[8] || (_cache[8] = function() {
              return _ctx.managePlaceholder && _ctx.managePlaceholder.apply(_ctx, arguments);
            }),
            onKeydown: [_cache[9] || (_cache[9] = function() {
              return _ctx.resetInputState && _ctx.resetInputState.apply(_ctx, arguments);
            }), _cache[10] || (_cache[10] = withKeys(withModifiers(function($event) {
              return _ctx.navigateOptions("next");
            }, ["prevent"]), ["down"])), _cache[11] || (_cache[11] = withKeys(withModifiers(function($event) {
              return _ctx.navigateOptions("prev");
            }, ["prevent"]), ["up"])), _cache[12] || (_cache[12] = withKeys(withModifiers(function() {
              return _ctx.selectOption && _ctx.selectOption.apply(_ctx, arguments);
            }, ["prevent"]), ["enter"])), _cache[13] || (_cache[13] = withKeys(withModifiers(function($event) {
              return _ctx.state.visible = false;
            }, ["stop", "prevent"]), ["esc"])), _cache[14] || (_cache[14] = withKeys(function() {
              return _ctx.deletePrevTag && _ctx.deletePrevTag.apply(_ctx, arguments);
            }, ["delete"])), _cache[15] || (_cache[15] = withKeys(function($event) {
              return _ctx.state.visible = false;
            }, ["tab"]))],
            onCompositionstart: _cache[16] || (_cache[16] = function() {
              return _ctx.handleComposition && _ctx.handleComposition.apply(_ctx, arguments);
            }),
            onCompositionupdate: _cache[17] || (_cache[17] = function() {
              return _ctx.handleComposition && _ctx.handleComposition.apply(_ctx, arguments);
            }),
            onCompositionend: _cache[18] || (_cache[18] = function() {
              return _ctx.handleComposition && _ctx.handleComposition.apply(_ctx, arguments);
            }),
            onInput: _cache[19] || (_cache[19] = function() {
              return _ctx.debouncedQueryChange && _ctx.debouncedQueryChange.apply(_ctx, arguments);
            }),
            style: normalizeStyle({
              "flex-grow": "1",
              width: _ctx.state.inputLength / (_ctx.state.inputWidth - 32) + "%",
              "max-width": _ctx.state.inputWidth - 42 + "px",
              height: "auto"
            })
          }, null, 46, _hoisted_14), [[vShow, _ctx.filterable && !_ctx.searchable && !_ctx.state.selectDisabled], [vModelText, _ctx.state.query]])],
          6
          /* CLASS, STYLE */
        )) : createCommentVNode("v-if", true), !_ctx.shape ? (openBlock(), createBlock(_component_tiny_input, {
          key: 2,
          tiny_mode: "pc",
          ref: "reference",
          modelValue: _ctx.state.selectedLabel,
          "onUpdate:modelValue": _cache[22] || (_cache[22] = function($event) {
            return _ctx.state.selectedLabel = $event;
          }),
          type: "text",
          placeholder: _ctx.state.currentPlaceholder,
          name: _ctx.name,
          id: _ctx.id,
          autocomplete: _ctx.autocomplete,
          size: _ctx.state.selectSize,
          disabled: _ctx.state.selectDisabled,
          readonly: _ctx.state.readonly,
          "display-only": _ctx.state.isDisplayOnly,
          "display-only-content": _ctx.state.displayOnlyContent,
          unselectable: _ctx.state.readonly ? "on" : "off",
          "validate-event": false,
          class: normalizeClass({
            "is-focus": _ctx.state.visible,
            overflow: _ctx.state.overflow,
            "is-show-close": _ctx.state.showClose
          }),
          tabindex: _ctx.multiple && _ctx.filterable ? "-1" : _ctx.tabindex,
          onFocus: _ctx.handleFocus,
          onBlur: _ctx.handleBlur,
          onKeyup: _ctx.debouncedOnInputChange,
          onKeydown: [_cache[23] || (_cache[23] = withKeys(withModifiers(function($event) {
            return _ctx.navigateOptions("next");
          }, ["stop", "prevent"]), ["down"])), _cache[24] || (_cache[24] = withKeys(withModifiers(function($event) {
            return _ctx.navigateOptions("prev");
          }, ["stop", "prevent"]), ["up"])), withKeys(withModifiers(_ctx.selectOption, ["prevent"]), ["enter"]), _cache[25] || (_cache[25] = withKeys(withModifiers(function($event) {
            return _ctx.state.visible = false;
          }, ["stop", "prevent"]), ["esc"])), _cache[26] || (_cache[26] = withKeys(function($event) {
            return _ctx.state.visible = false;
          }, ["tab"]))],
          onPaste: _ctx.debouncedOnInputChange,
          onMouseenter: _ctx.onMouseenterNative,
          onMouseleave: _ctx.onMouseleaveNative,
          onCompositionend: _ctx.handleComposition
        }, createSlots({
          suffix: withCtx(function() {
            return [renderSlot(_ctx.$slots, "suffix"), _ctx.showLimitText && _ctx.multiple && _ctx.multipleLimit ? (openBlock(), createElementBlock(
              "span",
              _hoisted_15,
              toDisplayString(_ctx.state.selected.length) + "/" + toDisplayString(_ctx.multipleLimit),
              1
              /* TEXT */
            )) : _ctx.showProportion && _ctx.state.selected.length > 0 && _ctx.state.options.length > 1 ? (openBlock(), createElementBlock(
              "span",
              _hoisted_16,
              toDisplayString(_ctx.state.selected.length + "/" + _ctx.state.options.length),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true), _ctx.state.showCopy ? (openBlock(), createElementBlock("span", {
              key: 2,
              class: "tiny-select__copy",
              onClick: _cache[20] || (_cache[20] = withModifiers(function() {
                return _ctx.handleCopyClick && _ctx.handleCopyClick.apply(_ctx, arguments);
              }, ["stop"]))
            }, [createVNode(_component_icon_copy, {
              class: "tiny-svg-size tiny-select__caret"
            })])) : createCommentVNode("v-if", true), _ctx.state.showClose ? (openBlock(), createBlock(_component_icon_close, {
              key: 3,
              class: "tiny-svg-size tiny-select__caret icon-close",
              onClick: _ctx.handleClearClick,
              onMouseenter: _cache[21] || (_cache[21] = function($event) {
                return _ctx.state.inputHovering = true;
              })
            }, null, 8, ["onClick"])) : createCommentVNode("v-if", true), withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.state.getIcon.icon), {
              class: normalizeClass(["tiny-svg-size", "tiny-select__caret", _ctx.state.iconClass, {
                "is-reverse": !_ctx.state.visible && _ctx.state.getIcon.isDefault
              }, {
                "not-reverse": !_ctx.state.getIcon.isDefault
              }]),
              onClick: _ctx.handleDropdownClick
            }, null, 8, ["class", "onClick"])), [[vShow, _ctx.state.autoHideDownIcon ? !_ctx.state.showClose && !(_ctx.remote && _ctx.filterable && !_ctx.remoteConfig.showIcon) : !(_ctx.remote && _ctx.filterable && !_ctx.remoteConfig.showIcon)]])];
          }),
          _: 2
          /* DYNAMIC */
        }, [_ctx.slots.prefix ? {
          name: "prefix",
          fn: withCtx(function() {
            return [renderSlot(_ctx.$slots, "prefix")];
          }),
          key: "0"
        } : void 0]), 1032, ["modelValue", "placeholder", "name", "id", "autocomplete", "size", "disabled", "readonly", "display-only", "display-only-content", "unselectable", "class", "tabindex", "onFocus", "onBlur", "onKeyup", "onKeydown", "onPaste", "onMouseenter", "onMouseleave", "onCompositionend"])) : createCommentVNode("v-if", true)];
      }), createVNode(Transition, {
        name: "tiny-zoom-in-top",
        onBeforeEnter: _ctx.handleMenuEnter,
        onAfterLeave: _ctx.doDestroy,
        persisted: ""
      }, {
        default: withCtx(function() {
          return [withDirectives(createVNode(_component_tiny_select_dropdown, {
            ref: "popper",
            "is-drop-inherit-width": _ctx.isDropInheritWidth,
            placement: _ctx.placement,
            "append-to-body": _ctx.popperAppendToBody,
            style: normalizeStyle(_ctx.dropStyle),
            "popper-options": _ctx.popperOptions
          }, {
            default: withCtx(function() {
              return [_ctx.shape && _ctx.filterable ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: normalizeClass(["tiny-select__filter-input", [_ctx.remote && !_ctx.state.options.length ? "tiny-select__remote-input" : ""]])
                },
                [createVNode(_component_tiny_input, {
                  ref: "input",
                  type: "text",
                  modelValue: _ctx.state.query,
                  "onUpdate:modelValue": _cache[27] || (_cache[27] = function($event) {
                    return _ctx.state.query = $event;
                  }),
                  placeholder: _ctx.placeholder,
                  onInput: _ctx.debouncedQueryChange,
                  onFocus: _ctx.handleFocus,
                  autofocus: ""
                }, null, 8, ["modelValue", "placeholder", "onInput", "onFocus"])],
                2
                /* CLASS */
              )) : createCommentVNode("v-if", true), _ctx.topCreate ? (openBlock(), createElementBlock("div", _hoisted_17, [createBaseVNode("div", {
                onClick: _cache[28] || (_cache[28] = function($event) {
                  return _ctx.$emit("top-create-click", $event);
                })
              }, [createVNode(_component_icon_plus), createBaseVNode(
                "span",
                null,
                toDisplayString(_ctx.topCreateText),
                1
                /* TEXT */
              )])])) : createCommentVNode("v-if", true), _ctx.renderType === "grid" ? (openBlock(), createBlock(_component_tiny_grid, mergeProps({
                key: 2,
                "auto-resize": "",
                "row-id": _ctx.valueField,
                "select-config": _ctx.buildSelectConfig(),
                "radio-config": _ctx.buildRadioConfig(),
                ref: "selectGrid",
                "highlight-current-row": true,
                columns: _ctx.gridOp.columns,
                data: _ctx.state.gridData,
                onSelectAll: _ctx.selectChange,
                onSelectChange: _ctx.selectChange,
                onRadioChange: _ctx.radioChange,
                onMousedown: _cache[29] || (_cache[29] = withModifiers(function() {
                }, ["stop"]))
              }, _ctx.gridOp), null, 16, ["row-id", "select-config", "radio-config", "columns", "data", "onSelectAll", "onSelectChange", "onRadioChange"])) : createCommentVNode("v-if", true), _ctx.renderType === "tree" ? (openBlock(), createBlock(_component_tiny_tree, mergeProps({
                key: 3,
                "filter-node-method": _ctx.filterMethod,
                props: _extends$2({
                  label: _ctx.textField,
                  isLeaf: "isLeaf"
                }, _ctx.treeOp.props),
                "expand-on-click-node": false,
                "icon-trigger-click-node": false,
                "node-key": _ctx.valueField,
                "default-expand-all": _ctx.state.isExpandAll,
                "check-strictly": _ctx.treeOp.checkStrictly,
                "default-checked-keys": _ctx.multiple ? _ctx.state.defaultCheckedKeys : [],
                ref: "selectTree",
                "current-node-key": !_ctx.multiple ? _ctx.state.currentKey : "",
                "show-checkbox": _ctx.multiple,
                onLoadData: _ctx.loadTreeData,
                onNodeCollapse: _ctx.nodeCollapse,
                onNodeExpand: _ctx.nodeExpand,
                onCheck: _ctx.nodeCheckClick,
                onNodeClick: _ctx.treeNodeClick
              }, _ctx.treeOp), null, 16, ["filter-node-method", "props", "node-key", "default-expand-all", "check-strictly", "default-checked-keys", "current-node-key", "show-checkbox", "onLoadData", "onNodeCollapse", "onNodeExpand", "onCheck", "onNodeClick"])) : createCommentVNode("v-if", true), _ctx.searchable ? (openBlock(), createBlock(_component_tiny_input, {
                key: 4,
                modelValue: _ctx.state.query,
                "onUpdate:modelValue": [_cache[30] || (_cache[30] = function($event) {
                  return _ctx.state.query = $event;
                }), _cache[31] || (_cache[31] = function($event) {
                  return _ctx.handleQueryChange(_ctx.state.query);
                })],
                placeholder: _ctx.t("ui.search.placeholder"),
                class: "tiny-select-dropdown__search"
              }, {
                prefix: withCtx(function() {
                  return [createVNode(_component_icon_search, {
                    class: "tiny-select-dropdown__search-prefix"
                  })];
                }),
                suffix: withCtx(function() {
                  return [withDirectives(createBaseVNode(
                    "span",
                    _hoisted_18,
                    [createVNode(_component_icon_close, {
                      onClick: _ctx.clearSearchText
                    }, null, 8, ["onClick"])],
                    512
                    /* NEED_PATCH */
                  ), [[vShow, _ctx.state.query]]), createVNode(_component_icon_search, {
                    class: "tiny-select-dropdown__search-suffix"
                  })];
                }),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "placeholder"])) : createCommentVNode("v-if", true), _ctx.optimization && !~["grid", "tree"].indexOf(_ctx.renderType) ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 5,
                  style: normalizeStyle({
                    height: _ctx.state.optimizeStore.recycleScrollerHeight + "px"
                  })
                },
                [withDirectives((openBlock(), createBlock(_component_tiny_recycle_scroller, {
                  ref: "scrollbar",
                  style: {
                    "height": "100%"
                  },
                  key: _ctx.state.magicKey,
                  "key-field": _ctx.valueField,
                  "list-class": ["tiny-select-dropdown__wrap"],
                  "item-class": ["tiny-select-dropdown__item-view"],
                  items: _ctx.state.datas,
                  "item-size": _ctx.state.optimizeOpts.optionHeight
                }, {
                  before: withCtx(function() {
                    return [_ctx.state.showNewOption ? (openBlock(), createBlock(_component_tiny_option, {
                      key: 0,
                      value: _ctx.state.query,
                      created: ""
                    }, null, 8, ["value"])) : createCommentVNode("v-if", true)];
                  }),
                  default: withCtx(function(_ref2) {
                    var item = _ref2.item;
                    return [renderSlot(_ctx.$slots, "default", {
                      item
                    }, function() {
                      return [(openBlock(), createBlock(_component_tiny_option, {
                        key: "" + item[_ctx.valueField],
                        label: item[_ctx.textField],
                        value: item[_ctx.valueField],
                        disabled: item.disabled,
                        required: item.required,
                        "highlight-class": item._highlightClass,
                        events: item.events,
                        icon: item.icon,
                        onMousedown: _cache[32] || (_cache[32] = withModifiers(function() {
                        }, ["stop"]))
                      }, null, 8, ["label", "value", "disabled", "required", "highlight-class", "events", "icon"]))];
                    })];
                  }),
                  _: 3
                  /* FORWARDED */
                }, 8, ["key-field", "items", "item-size"])), [[vShow, !_ctx.state.emptyFlag && !_ctx.loading]])],
                4
                /* STYLE */
              )) : createCommentVNode("v-if", true), !_ctx.optimization && !~["grid", "tree"].indexOf(_ctx.renderType) ? withDirectives((openBlock(), createBlock(_component_tiny_scrollbar, {
                key: 6,
                ref: "scrollbar",
                show: "",
                tag: "ul",
                "wrap-class": ["tiny-select-dropdown__wrap"],
                "view-class": ["tiny-select-dropdown__list"],
                onMousedown: _cache[40] || (_cache[40] = withModifiers(function() {
                }, ["stop"])),
                class: normalizeClass({
                  "is-empty": !_ctx.allowCreate && _ctx.state.query && _ctx.state.filteredOptionsCount === 0
                })
              }, {
                default: withCtx(function() {
                  return [renderSlot(_ctx.$slots, "dropdown"), _ctx.multiple && _ctx.showCheck && _ctx.showAlloption && !_ctx.state.multipleLimit && !_ctx.state.query && !_ctx.remote ? (openBlock(), createElementBlock(
                    "li",
                    {
                      key: 0,
                      class: normalizeClass(["tiny-option tiny-select-dropdown__item", [{
                        hover: _ctx.state.hoverIndex === -9 && _ctx.state.selectCls !== "checked-sur"
                      }, {
                        "selected": _ctx.state.selectCls === "checked-sur"
                      }]]),
                      "data-tag": "tiny-select-dropdown-item",
                      onClick: _cache[33] || (_cache[33] = withModifiers(function($event) {
                        return _ctx.toggleCheckAll(false);
                      }, ["stop"])),
                      onMousedown: _cache[34] || (_cache[34] = withModifiers(function() {
                      }, ["stop"])),
                      onMouseenter: _cache[35] || (_cache[35] = function($event) {
                        return _ctx.state.hoverIndex = -9;
                      })
                    },
                    [createVNode(_component_tiny_checkbox, {
                      "model-value": _ctx.state.selectCls === "checked-sur",
                      indeterminate: _ctx.state.selectCls === "halfselect",
                      class: normalizeClass(_ctx.state.selectCls)
                    }, {
                      default: withCtx(function() {
                        return [createTextVNode(
                          toDisplayString(_ctx.allText || _ctx.t("ui.base.all")),
                          1
                          /* TEXT */
                        )];
                      }),
                      _: 1
                      /* STABLE */
                    }, 8, ["model-value", "indeterminate", "class"])],
                    34
                    /* CLASS, NEED_HYDRATION */
                  )) : createCommentVNode("v-if", true), _ctx.multiple && _ctx.showCheck && _ctx.showAlloption && !_ctx.state.multipleLimit && _ctx.state.query && !_ctx.state.emptyText && !_ctx.remote ? (openBlock(), createElementBlock(
                    "li",
                    {
                      key: 1,
                      class: normalizeClass(["tiny-option tiny-select-dropdown__item", [{
                        hover: _ctx.state.hoverIndex === -9 && _ctx.state.filteredSelectCls !== "checked-sur"
                      }, {
                        "selected": _ctx.state.filteredSelectCls === "checked-sur"
                      }]]),
                      "data-tag": "tiny-select-dropdown-item",
                      onClick: _cache[36] || (_cache[36] = withModifiers(function($event) {
                        return _ctx.toggleCheckAll(true);
                      }, ["stop"])),
                      onMousedown: _cache[37] || (_cache[37] = withModifiers(function() {
                      }, ["stop"])),
                      onMouseenter: _cache[38] || (_cache[38] = function($event) {
                        return _ctx.state.hoverIndex = -9;
                      })
                    },
                    [createVNode(_component_tiny_checkbox, {
                      "model-value": _ctx.state.filteredSelectCls === "checked-sur",
                      indeterminate: _ctx.state.filteredSelectCls === "halfselect",
                      class: normalizeClass(_ctx.state.selectCls)
                    }, {
                      default: withCtx(function() {
                        return [createTextVNode(
                          toDisplayString(_ctx.allText || _ctx.t("ui.base.all")),
                          1
                          /* TEXT */
                        )];
                      }),
                      _: 1
                      /* STABLE */
                    }, 8, ["model-value", "indeterminate", "class"])],
                    34
                    /* CLASS, NEED_HYDRATION */
                  )) : createCommentVNode("v-if", true), _ctx.state.showNewOption ? (openBlock(), createBlock(_component_tiny_option, {
                    key: 2,
                    value: _ctx.state.query,
                    created: ""
                  }, null, 8, ["value"])) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default", {}, function() {
                    return [(openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(_ctx.state.datas, function(item) {
                        return openBlock(), createBlock(_component_tiny_option, {
                          key: "" + item[_ctx.valueField],
                          label: item[_ctx.textField],
                          value: item[_ctx.valueField],
                          disabled: item.disabled,
                          required: item.required,
                          "highlight-class": item._highlightClass,
                          events: item.events,
                          onMousedown: _cache[39] || (_cache[39] = withModifiers(function() {
                          }, ["stop"])),
                          icon: item.icon
                        }, null, 8, ["label", "value", "disabled", "required", "highlight-class", "events", "icon"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))];
                  })];
                }),
                _: 3
                /* FORWARDED */
              }, 8, ["class"])), [[vShow, _ctx.state.options.length > 0 && !_ctx.loading]]) : createCommentVNode("v-if", true), _ctx.renderType !== "grid" && _ctx.renderType !== "tree" && _ctx.state.emptyText && (!_ctx.allowCreate || _ctx.loading || _ctx.allowCreate && _ctx.state.emptyFlag) ? (openBlock(), createElementBlock(
                Fragment,
                {
                  key: 7
                },
                [_ctx.loadingText || _ctx.slots.empty ? (openBlock(), createElementBlock("div", _hoisted_19, [_ctx.slots.empty ? renderSlot(_ctx.$slots, "empty", {
                  key: 0
                }) : _ctx.showEmptyImage ? (openBlock(), createElementBlock("span", _hoisted_20)) : (openBlock(), createElementBlock(
                  "p",
                  _hoisted_21,
                  toDisplayString(_ctx.state.emptyText),
                  1
                  /* TEXT */
                ))])) : (openBlock(), createElementBlock("div", _hoisted_22, [!_ctx.loading ? (openBlock(), createElementBlock(
                  Fragment,
                  {
                    key: 0
                  },
                  [_ctx.showEmptyImage ? (openBlock(), createElementBlock("span", _hoisted_23)) : (openBlock(), createElementBlock(
                    "span",
                    _hoisted_24,
                    toDisplayString(_ctx.state.emptyText),
                    1
                    /* TEXT */
                  ))],
                  64
                  /* STABLE_FRAGMENT */
                )) : (openBlock(), createElementBlock("svg", _hoisted_25, _hoisted_27))]))],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "footer")];
            }),
            _: 3
            /* FORWARDED */
          }, 8, ["is-drop-inherit-width", "placement", "append-to-body", "style", "popper-options"]), [[vShow, !_ctx.onCopying() && !_ctx.hideDrop && _ctx.state.visible && _ctx.state.emptyText !== false]])];
        }),
        _: 3
        /* FORWARDED */
      }, 8, ["onBeforeEnter", "onAfterLeave"])],
      6
      /* CLASS, STYLE */
    ), _ctx.hoverExpand && !_ctx.state.isDisplayOnly ? (openBlock(), createElementBlock("div", _hoisted_28, _hoisted_30)) : createCommentVNode("v-if", true)],
    16
    /* FULL_PROPS */
  )), [[_directive_popover, void 0, "popover"], [_directive_clickoutside, _ctx.handleClose]]);
}
var pc = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["render", _sfc_render$1]]);
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
var _export_sfc = function _export_sfc211(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
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
var classes = {
  "caret": "text-base rotate-0 transition-transform duration-300 fill-color-text-placeholder cursor-pointer ",
  "select-tags": "absolute leading-normal whitespace-normal sm:pl-3 pr-2 z-[1] top-1/2 -translate-y-2/4 flex items-center flex-wrap [&_[data-tag=tiny-tag]]:my-0.5 [&_[data-tag=tiny-tag]]:h-7 [&_[data-tag=tiny-tag]]:text-sm [&_[data-tag=tiny-tag]]:sm:h-5 [&_[data-tag=tiny-tag]]:sm:text-sm [&_[data-tag=tiny-tag]_svg]:shrink-0",
  "tags-text": "inline-block w-full whitespace-nowrap text-ellipsis overflow-hidden align-bottom",
  "tag-info": "whitespace-nowrap text-ellipsis overflow-hidden inline-flex justify-start items-center border-transparent text-color-text-primary"
};
var getReference = function getReference22(el, binding, vnode) {
  var _ref = binding.expression ? binding.value : binding.arg;
  var popper = vnode.context.$refs[_ref];
  if (popper) {
    if (Array.isArray(popper)) {
      popper[0].$refs.reference = el;
    } else {
      popper.$refs.reference = el;
    }
  }
};
var _sfc_main = defineComponent({
  inheritAttrs: false,
  emits: ["update:modelValue", "change", "focus", "blur", "clear", "remove-tag", "visible-change", "handleDropdownClick", "dropdown-click", "confirm"],
  directives: directive({
    Clickoutside: clickoutside_default,
    popover: {
      bind: function bind3(el, binding, vnode) {
        getReference(el, binding, vnode);
      },
      inserted: function inserted2(el, binding, vnode) {
        getReference(el, binding, vnode);
      }
    }
  }),
  components: {
    TinyTag: Tag,
    TinyInput: Input,
    TinyOption: Option,
    TinyTree: Tree,
    TinyScrollbar: _sfc_main$9,
    TinyFilterBox: FilterBox,
    TinyTooltip: Tooltip,
    IconClose: index$g(),
    IconCopy: index$a(),
    TinySelectDropdown: SelectDropdown,
    IconHalfselect: index$l(),
    IconCheck: index$b(),
    IconCheckedSur: index$c(),
    IconLoading: index$o(),
    IconChevronRight: index$p(),
    TinyRecycleScroller: RecycleScroller
  },
  props: [].concat(props, ["id", "multiple", "name", "dataset", "readonly", "tabindex", "dropStyle", "valueField", "textField", "copyable", "size", "options", "showCheck", "showAlloption", "showProportion", "hideDrop", "modelValue", "showOverflowTooltip", "remote", "remoteConfig", "placement", "loading", "disabled", "valueKey", "clearable", "noDataText", "filterable", "loadingText", "noMatchText", "popperClass", "allowCreate", "placeholder", "remoteMethod", "filterMethod", "collapseTags", "autocomplete", "multipleLimit", "reserveKeyword", "automaticDropdown", "defaultFirstOption", "popperAppendToBody", "showDropdown", "expandTags", "renderType", "gridOp", "treeOp", "delay", "cacheOp", "isDropInheritWidth", "tagSelectable", "selectConfig", "radioConfig", "allowCopy", "textSplit", "autoClose", "queryDebounce", "ignoreEnter", "dropdownIcon", "disabledTooltipContent", "hoverExpand", "optimization", "displayOnly", "initQuery", "extraQueryParams", "shape", "label", "tip", "updateDelay", "showTips", "popperOptions", "title", "closeByMask", "searchPlaceholder", "blank", "allText"]),
  setup: function setup$112(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$7,
      api: api$7,
      classes
    });
  }
});
var _hoisted_1 = {
  key: 1,
  ref: "tags-content",
  class: "sm:contents hidden"
};
var _hoisted_2 = {
  class: "inline-block w-full whitespace-nowrap text-ellipsis overflow-hidden text-color-text-disabled"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 1
};
var _hoisted_5 = ["disabled", "autocomplete"];
var _hoisted_6 = {
  key: 1
};
var _hoisted_7 = {
  key: 0
};
var _hoisted_8 = {
  key: 1,
  class: "py-2.5 px-0 m-0 text-center text-color-text-secondary text-xs"
};
var _hoisted_9 = {
  key: 1,
  class: "text-center py-2.5 px-0"
};
var _hoisted_10 = {
  key: 0,
  class: "py-2.5 px-0 m-0 text-center text-color-text-secondary text-xs"
};
var _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "input",
  {
    disabled: ""
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_12 = [_hoisted_11];
function _sfc_render(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_filter_box = resolveComponent("tiny-filter-box");
  var _component_tiny_tooltip = resolveComponent("tiny-tooltip");
  var _component_tiny_tag = resolveComponent("tiny-tag");
  var _component_icon_copy = resolveComponent("icon-copy");
  var _component_icon_close = resolveComponent("icon-close");
  var _component_icon_chevron_right = resolveComponent("icon-chevron-right");
  var _component_tiny_input = resolveComponent("tiny-input");
  var _component_tiny_tree = resolveComponent("tiny-tree");
  var _component_tiny_option = resolveComponent("tiny-option");
  var _component_tiny_recycle_scroller = resolveComponent("tiny-recycle-scroller");
  var _component_tiny_scrollbar = resolveComponent("tiny-scrollbar");
  var _component_icon_loading = resolveComponent("icon-loading");
  var _component_tiny_select_dropdown = resolveComponent("tiny-select-dropdown");
  var _directive_popover = resolveDirective("popover");
  var _directive_clickoutside = resolveDirective("clickoutside");
  return withDirectives((openBlock(), createElementBlock(
    "div",
    mergeProps({
      ref: "select",
      class: ["inline-block relative w-full outline-0 group [&_[data-tag=tiny-tag]]:max-w-[144px]", [_ctx.hoverExpand ? "align-top" : "", _ctx.$parent.$attrs.class]],
      onMouseleave: _cache[34] || (_cache[34] = withModifiers(function() {
        _ctx.state.selectHover = false;
        _ctx.state.inputHovering = false;
      }, ["self"])),
      onMouseenter: _cache[35] || (_cache[35] = withModifiers(function() {
        _ctx.state.selectHover = true;
        _ctx.state.inputHovering = true;
      }, ["self"])),
      onClick: _cache[36] || (_cache[36] = function() {
        return _ctx.toggleMenu && _ctx.toggleMenu.apply(_ctx, arguments);
      })
    }, _ctx.a(_ctx.$attrs, ["class", "style"], true)),
    [createBaseVNode(
      "div",
      {
        ref: "tagsGroup",
        style: normalizeStyle(_ctx.state.selectFiexd),
        class: normalizeClass([{
          "absolute top-0 left-0 right-0": _ctx.hoverExpand
        }, {
          "absolute w-full": _ctx.state.isExpand && _ctx.hoverExpand
        }, {
          "z-[2]": _ctx.state.isExpand && _ctx.hoverExpand && (_ctx.state.inputHovering || _ctx.state.visible)
        }])
      },
      [_ctx.shape === "filter" ? (openBlock(), createBlock(_component_tiny_filter_box, {
        key: 0,
        ref: "reference",
        onClick: _ctx.toggleMenu,
        "show-close": _ctx.clearable,
        placeholder: _ctx.placeholder,
        disabled: _ctx.state.selectDisabled,
        label: _ctx.label,
        tip: _ctx.tip,
        value: _ctx.multiple ? _ctx.state.selected.map(function(item) {
          return item.state ? item.state.currentLabel : item.currentLabel;
        }).join("; ") : _ctx.state.selectedLabel,
        "drop-down-visible": _ctx.state.visible,
        blank: _ctx.blank
      }, null, 8, ["onClick", "show-close", "placeholder", "disabled", "label", "tip", "value", "drop-down-visible", "blank"])) : createCommentVNode("v-if", true), _ctx.multiple && !_ctx.state.isDisplayOnly && !_ctx.shape ? (openBlock(), createElementBlock(
        "div",
        {
          key: 1,
          ref: "tags",
          class: normalizeClass(_ctx.m(_ctx.gcls("select-tags"), {
            "pl-9 sm:pl-9": _ctx.slots.prefix
          }, {
            "overflow-y-hidden": (_ctx.state.inputHovering || _ctx.state.visible) && !_ctx.state.selected.length
          }, {
            "h-6 overflow-hidden": _ctx.hoverExpand
          }, {
            "pr-6": _ctx.state.selectDisabled
          }, {
            "overflow-y-auto max-h-28 h-auto": _ctx.hoverExpand && (_ctx.state.inputHovering || _ctx.state.visible)
          })),
          style: normalizeStyle(_ctx.state.tagsStyle)
        },
        [!_ctx.state.selectDisabled ? (openBlock(), createElementBlock(
          "span",
          {
            key: 0,
            class: normalizeClass([_ctx.collapseTags ? _ctx.filterable && _ctx.state.device === "pc" ? "w-auto max-w-[76%] flex" : "w-full flex" : "contents"])
          },
          [(_ctx.collapseTags || _ctx.state.device === "mb") && _ctx.state.selectedVal.length ? (openBlock(), createElementBlock(
            "span",
            {
              key: 0,
              class: normalizeClass(["contents", _ctx.collapseTags && _ctx.filterable ? "max-w-full flex-1" : ""])
            },
            [(openBlock(), createBlock(_component_tiny_tag, {
              closable: !_ctx.state.selectDisabled && _ctx.state.device !== "mb",
              size: _ctx.state.collapseTagSize,
              hit: _ctx.state.selectedVal[0].state ? _ctx.state.selectedVal[0].state.hitState : _ctx.state.selectedVal[0].hitState,
              key: _ctx.state.key,
              type: "info",
              class: normalizeClass(_ctx.gcls("tag-info")),
              onClose: _cache[1] || (_cache[1] = function($event) {
                return _ctx.deleteTag($event, _ctx.state.selectedVal[0]);
              }),
              "disable-transitions": ""
            }, {
              default: withCtx(function() {
                return [createVNode(
                  _component_tiny_tooltip,
                  {
                    effect: "light",
                    placement: "top",
                    onMouseenter: _cache[0] || (_cache[0] = function($event) {
                      return _ctx.handleEnterTag($event, _ctx.getValueKey(_ctx.state.selectedVal[0]));
                    })
                  },
                  createSlots({
                    default: withCtx(function() {
                      return [createBaseVNode(
                        "span",
                        {
                          class: normalizeClass(_ctx.gcls("tags-text"))
                        },
                        [renderSlot(_ctx.$slots, "label", {
                          item: _ctx.getLabelSlotValue(_ctx.state.selectedVal[0])
                        }, function() {
                          return [createTextVNode(
                            toDisplayString(_ctx.state.selectedVal[0].state ? _ctx.state.selectedVal[0].state.currentLabel : _ctx.state.selectedVal[0].currentLabel),
                            1
                            /* TEXT */
                          )];
                        })],
                        2
                        /* CLASS */
                      )];
                    }),
                    _: 2
                    /* DYNAMIC */
                  }, [_ctx.state.tooltipContent[_ctx.getValueKey(_ctx.state.selectedVal[0])] ? {
                    name: "content",
                    fn: withCtx(function() {
                      return [createBaseVNode(
                        "span",
                        {
                          class: normalizeClass(_ctx.gcls("tags-text"))
                        },
                        [renderSlot(_ctx.$slots, "label", {
                          item: _ctx.getLabelSlotValue(_ctx.state.selectedVal[0])
                        }, function() {
                          return [createTextVNode(
                            toDisplayString(_ctx.state.selectedVal[0].state ? _ctx.state.selectedVal[0].state.currentLabel : _ctx.state.selectedVal[0].currentLabel),
                            1
                            /* TEXT */
                          )];
                        })],
                        2
                        /* CLASS */
                      )];
                    }),
                    key: "0"
                  } : void 0]),
                  1024
                  /* DYNAMIC_SLOTS */
                )];
              }),
              _: 3
              /* FORWARDED */
            }, 8, ["closable", "size", "hit", "class"])), _ctx.state.selectedVal.length > 1 ? (openBlock(), createBlock(_component_tiny_tag, {
              key: 0,
              closable: false,
              size: _ctx.state.collapseTagSize,
              class: normalizeClass(["overflow-visible", _ctx.gcls("tag-info")]),
              type: "info",
              "disable-transitions": ""
            }, {
              default: withCtx(function() {
                return [createBaseVNode(
                  "span",
                  {
                    class: normalizeClass(_ctx.gcls("tags-text"))
                  },
                  "+ " + toDisplayString(_ctx.state.selectedVal.length - 1),
                  3
                  /* TEXT, CLASS */
                )];
              }),
              _: 1
              /* STABLE */
            }, 8, ["size", "class"])) : createCommentVNode("v-if", true)],
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true), !_ctx.collapseTags ? (openBlock(), createElementBlock(
            "span",
            _hoisted_1,
            [_ctx.hoverExpand ? (openBlock(), createBlock(_component_tiny_tag, {
              class: normalizeClass(_ctx.m(_ctx.gcls("tag-info"), {
                "visible static": _ctx.hoverExpand
              }, {
                "invisible absolute": _ctx.hoverExpand && (_ctx.state.inputHovering || _ctx.state.visible || _ctx.state.isHidden)
              })),
              type: "info",
              "data-tag": "tags-collapse",
              key: "tags-collapse",
              closable: false,
              size: _ctx.state.collapseTagSize
            }, {
              default: withCtx(function() {
                return [createTextVNode(
                  "+ " + toDisplayString(_ctx.state.collapseTagsLength),
                  1
                  /* TEXT */
                )];
              }),
              _: 1
              /* STABLE */
            }, 8, ["class", "size"])) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.state.selected, function(item, index3) {
                return openBlock(), createBlock(_component_tiny_tag, {
                  key: _ctx.getValueKey(item),
                  closable: !item.selectDisabled && !item.required && _ctx.state.device !== "mb",
                  size: _ctx.state.collapseTagSize,
                  hit: item.state ? item.state.hitState : item.hitState,
                  class: normalizeClass(_ctx.gcls("tag-info")),
                  type: "info",
                  onClose: function onClose($event) {
                    return _ctx.deleteTag($event, item);
                  },
                  "disable-transitions": ""
                }, {
                  default: withCtx(function() {
                    return [createVNode(_component_tiny_tooltip, {
                      effect: "light",
                      placement: "top",
                      onMouseenter: function onMouseenter($event) {
                        return _ctx.handleEnterTag($event, _ctx.getValueKey(item));
                      }
                    }, createSlots({
                      default: withCtx(function() {
                        return [!_ctx.state.visible && _ctx.state.overflow === index3 ? (openBlock(), createElementBlock(
                          "span",
                          {
                            key: 0,
                            class: normalizeClass(_ctx.gcls("tags-text"))
                          },
                          toDisplayString(item.state ? item.state.currentLabel + "... " : item.currentLabel + "... "),
                          3
                          /* TEXT, CLASS */
                        )) : (openBlock(), createElementBlock(
                          "span",
                          {
                            key: 1,
                            class: normalizeClass(_ctx.gcls("tags-text"))
                          },
                          [renderSlot(_ctx.$slots, "label", {
                            item: _ctx.getLabelSlotValue(item)
                          }, function() {
                            return [createTextVNode(
                              toDisplayString(item.state ? item.state.currentLabel : item.currentLabel),
                              1
                              /* TEXT */
                            )];
                          })],
                          2
                          /* CLASS */
                        ))];
                      }),
                      _: 2
                      /* DYNAMIC */
                    }, [_ctx.state.tooltipContent[_ctx.getValueKey(item)] ? {
                      name: "content",
                      fn: withCtx(function() {
                        return [!_ctx.state.visible && _ctx.state.overflow === index3 ? (openBlock(), createElementBlock(
                          "span",
                          {
                            key: 0,
                            class: normalizeClass(_ctx.gcls("tags-text"))
                          },
                          toDisplayString(item.state ? item.state.currentLabel + "... " : item.currentLabel + "... "),
                          3
                          /* TEXT, CLASS */
                        )) : (openBlock(), createElementBlock(
                          "span",
                          {
                            key: 1,
                            class: normalizeClass(_ctx.gcls("tags-text"))
                          },
                          [renderSlot(_ctx.$slots, "label", {
                            item: _ctx.getLabelSlotValue(item)
                          }, function() {
                            return [createTextVNode(
                              toDisplayString(item.state ? item.state.currentLabel : item.currentLabel),
                              1
                              /* TEXT */
                            )];
                          })],
                          2
                          /* CLASS */
                        ))];
                      }),
                      key: "0"
                    } : void 0]), 1032, ["onMouseenter"])];
                  }),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["closable", "size", "hit", "class", "onClose"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))],
            512
            /* NEED_PATCH */
          )) : createCommentVNode("v-if", true)],
          2
          /* CLASS */
        )) : (openBlock(), createElementBlock(
          "span",
          {
            key: 1,
            class: normalizeClass([_ctx.gcls("tags-text"), "flex"])
          },
          [createVNode(_component_tiny_tooltip, {
            effect: "light",
            placement: "top",
            disabled: !_ctx.showTips || _ctx.state.device === "mb"
          }, {
            content: withCtx(function() {
              return [createBaseVNode(
                "div",
                {
                  class: normalizeClass([_ctx.state.showTips && "max-h-[theme(spacing.72)] overflow-x-hidden w-full", "inline-block"])
                },
                [_ctx.slots.label ? (openBlock(), createElementBlock("span", _hoisted_3, [(openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.state.selected, function(item) {
                    return openBlock(), createElementBlock("span", {
                      key: _ctx.getValueKey(item)
                    }, [renderSlot(_ctx.$slots, "label", {
                      item
                    })]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))])) : (openBlock(), createElementBlock(
                  "span",
                  _hoisted_4,
                  toDisplayString(_ctx.disabledTooltipContent || _ctx.state.disabledTooltipContent),
                  1
                  /* TEXT */
                ))],
                2
                /* CLASS */
              )];
            }),
            default: withCtx(function() {
              return [createBaseVNode("span", _hoisted_2, [(openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(_ctx.state.selected, function(item) {
                  return openBlock(), createElementBlock("span", {
                    key: item.value
                  }, [renderSlot(_ctx.$slots, "label", {
                    item
                  }, function() {
                    return [createTextVNode(
                      toDisplayString(item.state ? item.state.currentLabel : item.currentLabel),
                      1
                      /* TEXT */
                    )];
                  }), createTextVNode("; ")]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))])];
            }),
            _: 3
            /* FORWARDED */
          }, 8, ["disabled"])],
          2
          /* CLASS */
        )), _ctx.filterable && !_ctx.state.selectDisabled ? withDirectives((openBlock(), createElementBlock("input", {
          key: 2,
          ref: "input",
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function($event) {
            return _ctx.state.query = $event;
          }),
          type: "text",
          class: normalizeClass(["hidden sm:inline-block border-none outline-0 p-0 ml-px text-color-text-primary text-xs h-7 appearance-none bg-transparent", [_ctx.state.selectSize === "mini" ? "h-6" : "", _ctx.state.selectSize === "small" ? "h-9" : "", _ctx.state.selectSize === "medium" ? "h-8" : ""]]),
          disabled: _ctx.state.selectDisabled,
          autocomplete: _ctx.autocomplete,
          onFocus: _cache[3] || (_cache[3] = function() {
            return _ctx.handleFocus && _ctx.handleFocus.apply(_ctx, arguments);
          }),
          onBlur: _cache[4] || (_cache[4] = function() {
            return _ctx.handleBlur && _ctx.handleBlur.apply(_ctx, arguments);
          }),
          onKeyup: _cache[5] || (_cache[5] = function() {
            return _ctx.managePlaceholder && _ctx.managePlaceholder.apply(_ctx, arguments);
          }),
          onKeydown: [_cache[6] || (_cache[6] = function() {
            return _ctx.resetInputState && _ctx.resetInputState.apply(_ctx, arguments);
          }), _cache[7] || (_cache[7] = withKeys(withModifiers(function($event) {
            return _ctx.navigateOptions("next");
          }, ["prevent"]), ["down"])), _cache[8] || (_cache[8] = withKeys(withModifiers(function($event) {
            return _ctx.navigateOptions("prev");
          }, ["prevent"]), ["up"])), _cache[9] || (_cache[9] = withKeys(withModifiers(function() {
            return _ctx.selectOption && _ctx.selectOption.apply(_ctx, arguments);
          }, ["prevent"]), ["enter"])), _cache[10] || (_cache[10] = withKeys(withModifiers(function($event) {
            return _ctx.state.visible = false;
          }, ["stop", "prevent"]), ["esc"])), _cache[11] || (_cache[11] = withKeys(function() {
            return _ctx.deletePrevTag && _ctx.deletePrevTag.apply(_ctx, arguments);
          }, ["delete"])), _cache[12] || (_cache[12] = withKeys(function($event) {
            return _ctx.state.visible = false;
          }, ["tab"]))],
          onCompositionstart: _cache[13] || (_cache[13] = function() {
            return _ctx.handleComposition && _ctx.handleComposition.apply(_ctx, arguments);
          }),
          onCompositionupdate: _cache[14] || (_cache[14] = function() {
            return _ctx.handleComposition && _ctx.handleComposition.apply(_ctx, arguments);
          }),
          onCompositionend: _cache[15] || (_cache[15] = function() {
            return _ctx.handleComposition && _ctx.handleComposition.apply(_ctx, arguments);
          }),
          onInput: _cache[16] || (_cache[16] = function() {
            return _ctx.debouncedQueryChange && _ctx.debouncedQueryChange.apply(_ctx, arguments);
          }),
          style: normalizeStyle({
            "flex-grow": "1",
            width: _ctx.state.inputLength / (_ctx.state.inputWidth - 32) + "%",
            "max-width": _ctx.state.inputWidth - 42 + "px",
            height: "auto"
          })
        }, null, 46, _hoisted_5)), [[vModelText, _ctx.state.query]]) : createCommentVNode("v-if", true)],
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true), !_ctx.shape ? (openBlock(), createBlock(_component_tiny_input, {
        key: 2,
        ref: "reference",
        modelValue: _ctx.state.selectedLabel,
        "onUpdate:modelValue": _cache[19] || (_cache[19] = function($event) {
          return _ctx.state.selectedLabel = $event;
        }),
        type: "text",
        placeholder: _ctx.state.currentPlaceholder,
        name: _ctx.name,
        id: _ctx.id,
        autocomplete: _ctx.autocomplete,
        size: _ctx.state.selectSize,
        disabled: _ctx.state.selectDisabled,
        readonly: _ctx.state.readonly,
        "display-only": _ctx.state.isDisplayOnly,
        "display-only-content": _ctx.state.displayOnlyContent,
        unselectable: _ctx.state.readonly ? "on" : "off",
        "validate-event": false,
        tabindex: _ctx.multiple && _ctx.filterable ? "-1" : _ctx.tabindex,
        onFocus: _ctx.handleFocus,
        onBlur: _ctx.handleBlur,
        onKeyup: _ctx.debouncedOnInputChange,
        onKeydown: [_cache[20] || (_cache[20] = withKeys(withModifiers(function($event) {
          return _ctx.navigateOptions("next");
        }, ["stop", "prevent"]), ["down"])), _cache[21] || (_cache[21] = withKeys(withModifiers(function($event) {
          return _ctx.navigateOptions("prev");
        }, ["stop", "prevent"]), ["up"])), withKeys(withModifiers(_ctx.selectOption, ["prevent"]), ["enter"]), _cache[22] || (_cache[22] = withKeys(withModifiers(function($event) {
          return _ctx.state.visible = false;
        }, ["stop", "prevent"]), ["esc"])), _cache[23] || (_cache[23] = withKeys(function($event) {
          return _ctx.state.visible = false;
        }, ["tab"]))],
        onPaste: _ctx.debouncedOnInputChange,
        onMouseenter: _ctx.onMouseenterNative,
        onMouseleave: _ctx.onMouseleaveNative,
        onCompositionend: _ctx.handleComposition
      }, createSlots({
        suffix: withCtx(function() {
          return [renderSlot(_ctx.$slots, "suffix"), _ctx.state.showCopy ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "h-4 cursor-pointer relative z-[1]",
            onClick: _cache[17] || (_cache[17] = withModifiers(function() {
              return _ctx.handleCopyClick && _ctx.handleCopyClick.apply(_ctx, arguments);
            }, ["stop"]))
          }, [createVNode(_component_icon_copy, {
            class: normalizeClass([_ctx.gcls("caret"), "align-top group-hover:fill-color-brand"])
          }, null, 8, ["class"])])) : createCommentVNode("v-if", true), _ctx.showProportion && _ctx.state.selected.length > 0 && _ctx.state.options.length > 1 ? (openBlock(), createElementBlock(
            "span",
            _hoisted_6,
            toDisplayString(_ctx.state.selected.length + "/" + _ctx.state.options.length),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true), _ctx.state.showClose ? (openBlock(), createBlock(_component_icon_close, {
            key: 2,
            class: normalizeClass([_ctx.gcls("caret"), "hidden sm:inline-block", {
              "mr-2 fill-color-text-placeholder hover:fill-color-icon-primary": _ctx.state.showClose
            }, {
              "mr-1": _ctx.multiple && _ctx.state.showClose
            }]),
            onClick: _ctx.handleClearClick,
            onMouseenter: _cache[18] || (_cache[18] = function($event) {
              return _ctx.state.inputHovering = true;
            })
          }, null, 8, ["class", "onClick"])) : createCommentVNode("v-if", true), withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.dropdownIcon), {
            class: normalizeClass(_ctx.m(_ctx.gcls("caret"), "hidden sm:inline-block", _ctx.state.iconClass, {
              "hidden": _ctx.state.selectDisabled
            }, {
              "fill-color-brand-hover rotate-180 ": _ctx.state.visible
            })),
            onClick: _ctx.handleDropdownClick
          }, null, 8, ["class", "onClick"])), [[vShow, !(_ctx.remote && _ctx.filterable && !_ctx.remoteConfig.showIcon)]]), createVNode(_component_icon_chevron_right, {
            "custom-class": "h-5 w-5 sm:h-4 sm:w-4",
            class: normalizeClass(["inline-block sm:hidden", [_ctx.state.selectDisabled ? "fill-color-icon-placeholder sm:fill-color-icon-disabled" : "fill-color-icon-secondary"]])
          }, null, 8, ["class"])];
        }),
        _: 2
        /* DYNAMIC */
      }, [_ctx.slots.prefix ? {
        name: "prefix",
        fn: withCtx(function() {
          return [renderSlot(_ctx.$slots, "prefix")];
        }),
        key: "0"
      } : void 0]), 1032, ["modelValue", "placeholder", "name", "id", "autocomplete", "size", "disabled", "readonly", "display-only", "display-only-content", "unselectable", "tabindex", "onFocus", "onBlur", "onKeyup", "onKeydown", "onPaste", "onMouseenter", "onMouseleave", "onCompositionend"])) : createCommentVNode("v-if", true), createVNode(Transition, {
        onBeforeEnter: _ctx.handleMenuEnter,
        onAfterLeave: _ctx.doDestroy,
        persisted: ""
      }, {
        default: withCtx(function() {
          return [withDirectives(createVNode(_component_tiny_select_dropdown, {
            ref: "popper",
            title: _ctx.title,
            "close-by-mask": _ctx.closeByMask,
            "search-placeholder": _ctx.searchPlaceholder,
            "is-drop-inherit-width": _ctx.isDropInheritWidth,
            placement: _ctx.placement,
            "append-to-body": _ctx.popperAppendToBody,
            style: normalizeStyle(_ctx.dropStyle),
            "popper-options": _ctx.popperOptions,
            class: normalizeClass(_ctx.m("duration-300"))
          }, {
            default: withCtx(function() {
              return [_ctx.shape && _ctx.filterable ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: normalizeClass(["px-3 pt-3 pb-1 hidden sm:block", [_ctx.remote && !_ctx.state.options.length ? "pb-3" : ""]])
                },
                [createVNode(_component_tiny_input, {
                  ref: "input",
                  type: "text",
                  modelValue: _ctx.state.query,
                  "onUpdate:modelValue": _cache[24] || (_cache[24] = function($event) {
                    return _ctx.state.query = $event;
                  }),
                  placeholder: _ctx.placeholder,
                  onInput: _ctx.debouncedQueryChange,
                  onFocus: _ctx.handleFocus,
                  autofocus: ""
                }, null, 8, ["modelValue", "placeholder", "onInput", "onFocus"])],
                2
                /* CLASS */
              )) : createCommentVNode("v-if", true), _ctx.renderType === "tree" ? (openBlock(), createBlock(_component_tiny_tree, mergeProps({
                key: 1,
                class: "[&_[data-tag=tiny-checkbox]_>span_>span]:p-1.5 sm:[&_[data-tag=tiny-checkbox]_>span_>span]:p-0",
                "filter-node-method": _ctx.filterMethod,
                props: _extends$1({
                  label: _ctx.textField,
                  isLeaf: "isLeaf"
                }, _ctx.treeOp.props),
                "expand-on-click-node": false,
                "icon-trigger-click-node": false,
                "node-key": _ctx.valueField,
                "default-expand-all": _ctx.state.isExpandAll,
                "check-strictly": _ctx.treeOp.checkStrictly,
                "default-checked-keys": _ctx.multiple ? _ctx.state.defaultCheckedKeys : [],
                ref: "selectTree",
                "current-node-key": !_ctx.multiple ? _ctx.state.currentKey : "",
                "show-checkbox": _ctx.multiple,
                onLoadData: _ctx.loadTreeData,
                onNodeCollapse: _ctx.nodeCollapse,
                onNodeExpand: _ctx.nodeExpand,
                onCheck: _ctx.nodeCheckClick,
                onNodeClick: _ctx.treeNodeClick,
                "show-checked-mark": _ctx.state.device === "mb"
              }, _ctx.treeOp), null, 16, ["filter-node-method", "props", "node-key", "default-expand-all", "check-strictly", "default-checked-keys", "current-node-key", "show-checkbox", "onLoadData", "onNodeCollapse", "onNodeExpand", "onCheck", "onNodeClick", "show-checked-mark"])) : createCommentVNode("v-if", true), _ctx.optimization && _ctx.renderType !== "tree" ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 2,
                  style: normalizeStyle({
                    height: _ctx.state.optimizeStore.recycleScrollerHeight + "px"
                  })
                },
                [withDirectives((openBlock(), createBlock(_component_tiny_recycle_scroller, {
                  ref: "scrollbar",
                  style: {
                    "height": "100%"
                  },
                  "key-field": _ctx.valueField,
                  key: _ctx.state.magicKey,
                  "list-class": ["tiny-select-dropdown__wrap sm:max-h-56 pb-1 sm:pb-0", _ctx.state.device === "mb" ? "scrollbar-size-0" : ""],
                  items: _ctx.state.datas,
                  "item-size": _ctx.state.optimizeOpts.optionHeight
                }, {
                  before: withCtx(function() {
                    return [_ctx.state.showNewOption ? (openBlock(), createBlock(_component_tiny_option, {
                      key: 0,
                      highlightClass: "sm:mb-0",
                      created: "",
                      value: _ctx.state.device === "mb" ? _ctx.state.queryValue : _ctx.state.query
                    }, null, 8, ["value"])) : createCommentVNode("v-if", true)];
                  }),
                  default: withCtx(function(_ref2) {
                    var item = _ref2.item;
                    return [renderSlot(_ctx.$slots, "default", {
                      item
                    }, function() {
                      return [(openBlock(), createBlock(_component_tiny_option, {
                        class: normalizeClass(["absolute w-full"]),
                        key: "" + item[_ctx.valueField],
                        label: item[_ctx.textField],
                        value: item[_ctx.valueField],
                        disabled: item.disabled,
                        required: item.required,
                        "highlight-class": item._highlightClass,
                        events: item.events,
                        onMousedown: _cache[25] || (_cache[25] = withModifiers(function() {
                        }, ["stop"]))
                      }, null, 8, ["label", "value", "disabled", "required", "highlight-class", "events"]))];
                    })];
                  }),
                  _: 3
                  /* FORWARDED */
                }, 8, ["key-field", "list-class", "items", "item-size"])), [[vShow, !_ctx.state.emptyFlag && !_ctx.loading]])],
                4
                /* STYLE */
              )) : createCommentVNode("v-if", true), !_ctx.optimization && _ctx.renderType !== "tree" ? withDirectives((openBlock(), createBlock(_component_tiny_scrollbar, {
                key: 3,
                ref: "scrollbar",
                tag: "ul",
                "wrap-class": ["tiny-select-dropdown__wrap sm:max-h-56 pb-1 sm:pb-0", _ctx.state.device === "mb" ? "scrollbar-size-0" : ""],
                "view-class": ["tiny-select-dropdown__list"],
                onMousedown: _cache[33] || (_cache[33] = withModifiers(function() {
                }, ["stop"]))
              }, {
                default: withCtx(function() {
                  return [renderSlot(_ctx.$slots, "dropdown"), _ctx.multiple && _ctx.showCheck && _ctx.showAlloption && !_ctx.state.multipleLimit && !_ctx.state.query && !_ctx.remote ? (openBlock(), createElementBlock(
                    "div",
                    {
                      key: 0,
                      class: normalizeClass(["whitespace-nowrap box-border py-0 h-10 leading-10 sm:h-8 sm:leading-8 text-sm sm:text-xs pl-0 pr-3 sm:px-3 my-1 sm:m-1 rounded cursor-pointer", [{
                        hover: _ctx.state.hoverIndex === -9 && _ctx.state.selectCls !== "checked-sur"
                      }, {
                        "text-color-brand sm:bg-color-fill-6 bg-color-bg-1": _ctx.state.selectCls === "checked-sur"
                      }]]),
                      "data-tag": "tiny-select-dropdown-item",
                      onClick: _cache[26] || (_cache[26] = withModifiers(function($event) {
                        return _ctx.toggleCheckAll(false);
                      }, ["stop"])),
                      onMousedown: _cache[27] || (_cache[27] = withModifiers(function() {
                      }, ["stop"])),
                      onMouseenter: _cache[28] || (_cache[28] = function($event) {
                        return _ctx.state.hoverIndex = -9;
                      })
                    },
                    [(openBlock(), createBlock(resolveDynamicComponent("icon-" + _ctx.state.selectCls), {
                      class: normalizeClass(_ctx.m(["-mt-0.5 mr-2 fill-color-icon-secondary", _ctx.state.selectCls !== "check" && "fill-color-brand"]))
                    }, null, 8, ["class"])), createBaseVNode(
                      "span",
                      {
                        class: normalizeClass([_ctx.state.selectCls === "checked-sur" ? "text-color-brand" : "text-color-text-primary"])
                      },
                      toDisplayString(_ctx.allText || _ctx.t("ui.base.all")),
                      3
                      /* TEXT, CLASS */
                    )],
                    34
                    /* CLASS, NEED_HYDRATION */
                  )) : createCommentVNode("v-if", true), _ctx.multiple && _ctx.showCheck && _ctx.showAlloption && !_ctx.state.multipleLimit && _ctx.state.query && !_ctx.state.emptyText && !_ctx.remote ? (openBlock(), createElementBlock(
                    "div",
                    {
                      key: 1,
                      class: normalizeClass(["whitespace-nowrap box-border py-0 h-10 leading-10 sm:h-8 sm:leading-8 text-sm sm:text-xs pl-0 pr-3 sm:px-3 my-1 sm:m-1 rounded cursor-pointer", [{
                        hover: _ctx.state.hoverIndex === -9 && _ctx.state.filteredSelectCls !== "checked-sur"
                      }, {
                        "text-color-brand sm:bg-color-fill-6 bg-color-bg-1": _ctx.state.filteredSelectCls === "checked-sur"
                      }]]),
                      "data-tag": "tiny-select-dropdown-item",
                      onClick: _cache[29] || (_cache[29] = withModifiers(function($event) {
                        return _ctx.toggleCheckAll(true);
                      }, ["stop"])),
                      onMousedown: _cache[30] || (_cache[30] = withModifiers(function() {
                      }, ["stop"])),
                      onMouseenter: _cache[31] || (_cache[31] = function($event) {
                        return _ctx.state.hoverIndex = -9;
                      })
                    },
                    [(openBlock(), createBlock(resolveDynamicComponent("icon-" + _ctx.state.filteredSelectCls), {
                      class: normalizeClass(_ctx.m(["-mt-0.5 mr-2 fill-color-icon-secondary", _ctx.state.filteredSelectCls !== "check" && "fill-color-brand"]))
                    }, null, 8, ["class"])), createBaseVNode(
                      "span",
                      {
                        class: normalizeClass([_ctx.state.filteredSelectCls === "checked-sur" ? "text-color-brand" : "text-color-text-primary"])
                      },
                      toDisplayString(_ctx.allText || _ctx.t("ui.base.all")),
                      3
                      /* TEXT, CLASS */
                    )],
                    34
                    /* CLASS, NEED_HYDRATION */
                  )) : createCommentVNode("v-if", true), _ctx.state.showNewOption ? (openBlock(), createBlock(_component_tiny_option, {
                    key: 2,
                    value: _ctx.state.device === "mb" ? _ctx.state.queryValue : _ctx.state.query,
                    created: ""
                  }, null, 8, ["value"])) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default", {}, function() {
                    return [(openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(_ctx.state.datas, function(item) {
                        return openBlock(), createBlock(_component_tiny_option, {
                          class: normalizeClass(["relative"]),
                          key: "" + item[_ctx.valueField],
                          label: item[_ctx.textField],
                          value: item[_ctx.valueField],
                          disabled: item.disabled,
                          required: item.required,
                          "highlight-class": item._highlightClass,
                          events: item.events,
                          onMousedown: _cache[32] || (_cache[32] = withModifiers(function() {
                          }, ["stop"]))
                        }, null, 8, ["label", "value", "disabled", "required", "highlight-class", "events"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))];
                  })];
                }),
                _: 3
                /* FORWARDED */
              }, 8, ["wrap-class"])), [[vShow, _ctx.state.options.length > 0 && !_ctx.loading]]) : createCommentVNode("v-if", true), _ctx.renderType !== "tree" && _ctx.state.emptyText && (!_ctx.allowCreate || _ctx.loading || _ctx.allowCreate && _ctx.state.emptyFlag) ? (openBlock(), createElementBlock(
                Fragment,
                {
                  key: 4
                },
                [_ctx.loadingText || _ctx.slots.empty ? (openBlock(), createElementBlock("div", _hoisted_7, [_ctx.slots.empty ? renderSlot(_ctx.$slots, "empty", {
                  key: 0
                }) : (openBlock(), createElementBlock(
                  "p",
                  _hoisted_8,
                  toDisplayString(_ctx.state.emptyText),
                  1
                  /* TEXT */
                ))])) : (openBlock(), createElementBlock("div", _hoisted_9, [!_ctx.loading ? (openBlock(), createElementBlock(
                  "span",
                  _hoisted_10,
                  toDisplayString(_ctx.state.emptyText),
                  1
                  /* TEXT */
                )) : (openBlock(), createBlock(_component_icon_loading, {
                  key: 1,
                  class: "fill-color-brand h-4 w-4 inline-block align-top animate-spin"
                }))]))],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true)];
            }),
            _: 3
            /* FORWARDED */
          }, 8, ["title", "close-by-mask", "search-placeholder", "is-drop-inherit-width", "placement", "append-to-body", "style", "popper-options", "class"]), [[vShow, !_ctx.onCopying() && !_ctx.hideDrop && _ctx.state.visible && _ctx.state.emptyText !== false]])];
        }),
        _: 3
        /* FORWARDED */
      }, 8, ["onBeforeEnter", "onAfterLeave"])],
      6
      /* CLASS, STYLE */
    ), _ctx.hoverExpand && !_ctx.state.isDisplayOnly ? (openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        class: normalizeClass(_ctx.m("h-7 invisible", {
          "h-6": _ctx.state.selectSize === "mini"
        }, {
          "h-7": _ctx.state.selectSize === "small"
        }, {
          "h-8": _ctx.state.selectSize === "medium"
        }))
      },
      _hoisted_12,
      2
      /* CLASS */
    )) : createCommentVNode("v-if", true)],
    16
    /* FULL_PROPS */
  )), [[_directive_popover, void 0, "popover"], [_directive_clickoutside, _ctx.handleClose]]);
}
var mobileFirst = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
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
var template = function template25(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst;
  }
  return pc;
};
var $constants = {
  CLASS: {
    SelectDropdownWrap: ".tiny-select-dropdown__wrap",
    IsReverse: "is-reverse"
  },
  I18N: {
    noData: "ui.select.noData",
    noMatch: "ui.select.noMatch",
    loading: "ui.select.loading"
  },
  COMPONENT_NAME: {
    Form: "Form",
    Select: "Select",
    Option: "Option",
    FormItem: "FormItem",
    OptionGroup: "OptionGroup",
    SelectDropdown: "SelectDropdown"
  },
  EVENT_NAME: {
    removeTag: "remove-tag",
    formChange: "form.change",
    formBlur: "form.blur",
    queryChange: "queryChange",
    setSelected: "setSelected",
    updatePopper: "updatePopper",
    destroyPopper: "destroyPopper",
    visibleChange: "visible-change",
    handleOptionClick: "handleOptionClick",
    handleGroupDisabled: "handleGroupDisabled",
    initValue: "initValue"
  },
  TYPE: {
    Grid: "grid",
    Tree: "tree"
  },
  MAX_WIDTH: 132,
  RECYCLE: {
    SAAS_HEIGHT: 220,
    AURORA_HEIGHT: 180,
    ITEM_HEIGHT: 34,
    SAFE_MARGIN: 4
  },
  SAAS_SIZE: {
    mini: 24,
    small: 28,
    medium: 32
  },
  AURORA_SIZE: {
    mini: 24,
    small: 36,
    medium: 42
  },
  SPACING_HEIGHT: 0,
  MAX_VISIBLE_ROWS: 1
  // 多选默认最大显示行数，超出后自动隐藏
};
var Select = defineComponent({
  name: $prefix + "Select",
  componentName: "Select",
  inject: {
    form: {
      default: ""
    },
    formItem: {
      default: ""
    }
  },
  provide: function provide() {
    return {
      select: this
    };
  },
  props: _extends({}, $props, {
    _constants: {
      type: Object,
      default: function _default9() {
        return $constants;
      }
    },
    id: [Number, String],
    name: String,
    size: String,
    remote: Boolean,
    remoteConfig: {
      type: Object,
      default: function _default24() {
        return {
          showIcon: false,
          clearData: false,
          autoSearch: false
        };
      }
    },
    title: String,
    shape: String,
    tip: String,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    options: Array,
    dataset: Object,
    textField: {
      type: String,
      default: "label"
    },
    tabindex: {
      type: String,
      default: "1"
    },
    valueField: {
      type: String,
      default: "value"
    },
    placement: {
      type: String,
      default: "bottom-start"
    },
    showCheck: {
      type: Boolean,
      default: true
    },
    showAlloption: {
      type: Boolean,
      default: true
    },
    multiple: Boolean,
    clearable: Boolean,
    noDataText: String,
    filterable: Boolean,
    loadingText: String,
    noMatchText: String,
    popperClass: String,
    allowCreate: Boolean,
    collapseTags: Boolean,
    remoteMethod: Function,
    filterMethod: Function,
    reserveKeyword: Boolean,
    automaticDropdown: Boolean,
    defaultFirstOption: Boolean,
    modelValue: {},
    valueKey: {
      type: String,
      default: "value"
    },
    placeholder: {
      type: String,
      default: function _default33() {
        return t("ui.select.placeholder");
      }
    },
    searchPlaceholder: {
      type: String,
      default: function _default42() {
        return t("ui.select.pleaseSearch");
      }
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    multipleLimit: {
      type: Number,
      default: 0
    },
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    hideDrop: {
      type: Boolean,
      default: false
    },
    copyable: {
      type: Boolean,
      default: false
    },
    renderType: String,
    gridOp: {
      type: Object,
      default: function _default52() {
        return {};
      }
    },
    treeOp: {
      type: Object,
      default: function _default62() {
        return {};
      }
    },
    delay: {
      type: Number,
      default: 200
    },
    readonly: Boolean,
    dropStyle: {
      type: Object,
      default: function _default72() {
        return {};
      }
    },
    cacheOp: Object,
    isDropInheritWidth: Boolean,
    tagSelectable: {
      type: Boolean,
      default: false
    },
    selectConfig: {
      type: Object,
      default: function _default82() {
        return {
          checkMethod: function checkMethod() {
            return true;
          }
        };
      }
    },
    radioConfig: {
      type: Object,
      default: function _default92() {
        return {
          checkMethod: function checkMethod() {
            return true;
          }
        };
      }
    },
    allowCopy: {
      type: Boolean,
      default: false
    },
    textSplit: {
      type: String,
      default: ","
    },
    autoClose: Boolean,
    queryDebounce: Number,
    ignoreEnter: {
      type: Boolean,
      default: false
    },
    dropdownIcon: {
      type: [Object, String],
      default: function _default10() {
        var defaultDropdownIcon = index$e();
        defaultDropdownIcon.isDefault = true;
        return defaultDropdownIcon;
      }
    },
    disabledTooltipContent: String,
    hoverExpand: {
      type: Boolean,
      default: false
    },
    optimization: [Boolean, Object],
    displayOnly: {
      type: Boolean,
      default: false
    },
    initQuery: Function,
    extraQueryParams: {
      type: [Object, String, Boolean, Array, Number],
      default: ""
    },
    updateDelay: {
      type: Number,
      default: 0
    },
    showTips: {
      type: Boolean,
      default: true
    },
    closeByMask: {
      type: Boolean,
      default: true
    },
    keepFocus: {
      type: Boolean,
      default: false
    },
    popperOptions: {
      type: Object,
      default: function _default11() {
        return {
          gpuAcceleration: false,
          boundariesPadding: 0
        };
      }
    },
    trim: {
      type: Boolean,
      default: false
    },
    topCreate: {
      type: Boolean,
      default: false
    },
    topCreateText: {
      type: String,
      default: function _default12() {
        return t("ui.select.add");
      }
    },
    blank: {
      type: Boolean,
      default: false
    },
    // 以下为 tiny 新增
    searchable: {
      type: Boolean,
      default: false
    },
    showEmptyImage: {
      type: Boolean,
      default: false
    },
    InputBoxType: {
      type: String,
      default: "input",
      validator: function validator3(value) {
        return ["input", "underline"].includes(value);
      }
    },
    tagType: {
      type: String,
      default: ""
    },
    clearNoMatchValue: {
      type: Boolean,
      default: false
    },
    showLimitText: {
      type: Boolean,
      default: false
    },
    showProportion: {
      type: Boolean,
      default: false
    },
    clickExpand: {
      type: Boolean,
      default: false
    },
    maxVisibleRows: {
      type: Number,
      default: $constants.MAX_VISIBLE_ROWS
    },
    allText: {
      type: String,
      default: ""
    },
    showAllTextTag: {
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
var version = "3.undefined";
Select.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
Select.install = function(Vue) {
  Vue.component(Select.name, Select);
};
Select.version = version;
export {
  FilterBox as F,
  Option as O,
  RecycleScroller as R,
  Select as S,
  _sfc_main$9 as _,
  adjustIndex as a,
  onTouchstart as b,
  getOptionText as c,
  deepClone as d,
  onTransitionEnd as e,
  computedBaseOffset as f,
  getValue as g,
  computedWrapperStyle as h,
  setValue as i,
  onTouchend as j,
  setOptions as k,
  setIndex as l,
  momentum as m,
  onClickItem as n,
  onTouchmove as o,
  mountedHandler as p,
  beforeUnmountHandler as q,
  Search as r,
  scroll_into_view_default as s,
  addResizeListener as t,
  removeResizeListener as u,
  index$9 as v
};
