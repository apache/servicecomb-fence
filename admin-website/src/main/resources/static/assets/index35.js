import { s as svg, be as isBrowser, o as on, f as off, d as defineComponent, b as $prefix, a as setup, bf as toObject, k as h, ab as index$5, i as index$6, O as index$7, N as Tooltip, $ as $props, aj as isNull, aq as isEqual, bg as throttle_default, p as props, c as $setup } from "./index.js";
import { u as openBlock, v as createElementBlock, w as createBaseVNode, l as createVNode, k as resolveComponent, E as toDisplayString, y as createBlock, H as withCtx, z as createCommentVNode, A as normalizeClass, P as withModifiers, V as resolveDirective, I as withDirectives, D as renderSlot, M as Fragment, N as renderList, B as resolveDynamicComponent, F as mergeProps, S as toHandlers, G as normalizeStyle, a8 as reactive$1 } from "./vue.js";
var _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "plus_svg__st0",
    d: "M20.2 11.2h-7.5V3.9c0-.5-.4-.8-.8-.8s-.8.4-.8.8v7.3H3.8c-.5 0-.8.4-.8.8s.4.8.8.8h7.3v7.3c0 .5.4.8.8.8s.8-.4.8-.8v-7.3h7.5c.5 0 .8-.4.8-.8s-.3-.8-.8-.8z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3 = [_hoisted_2$1];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [].concat(_hoisted_3));
}
var Plus = {
  render
};
var index$4 = function index2() {
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
const MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  const getIndex = (arr, key) => {
    let result = -1;
    arr.some((entry, index22) => {
      if (entry[0] === key) {
        result = index22;
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
      const index22 = getIndex(this.__entries__, key);
      const entry = this.__entries__[index22];
      return entry && entry[1];
    };
    obClass.prototype.set = function(key, value) {
      const index22 = getIndex(this.__entries__, key);
      if (~index22) {
        this.__entries__[index22][1] = value;
      } else {
        this.__entries__.push([key, value]);
      }
    };
    obClass.prototype.delete = function(key) {
      const entries = this.__entries__;
      const index22 = getIndex(entries, key);
      if (~index22) {
        entries.splice(index22, 1);
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
    const index22 = observers2.indexOf(observer);
    ~index22 && observers2.splice(index22, 1);
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
const index$3 = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
}();
var ResizeObserver_default = index$3;
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
const setIndex = ({ api: api2, state, emit }) => (index3, emitChange) => {
  index3 = api2.adjustIndex(index3) || 0;
  const offset = -index3 * state.itemHeight;
  const trigger = () => {
    if (index3 !== state.currentIndex) {
      state.currentIndex = index3;
      if (emitChange) {
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
const api$3 = ["state", "update", "handleScroll"];
const renderless$3 = (props2, { onBeforeUnmount, onMounted, reactive: reactive2 }, { vm, nextTick, emit }) => {
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
const api$2 = [
  "state",
  "startDrag",
  "renderThumbStyle",
  "clickTrackHandler",
  "clickThumbHandler",
  "mouseUpDocumentHandler",
  "mouseMoveDocumentHandler"
];
const renderless$2 = (props2, { computed, onUnmounted, reactive: reactive2 }, { vm, parent }) => {
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
const index$2 = "";
var _sfc_main$1$1 = /* @__PURE__ */ defineComponent({
  name: $prefix + "Bar",
  props: {
    vertical: Boolean,
    show: Boolean,
    size: String,
    move: Number
  },
  setup: function setup$1(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$2,
      api: api$2,
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
var _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
  setup: function setup2(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$3,
      api: api$3,
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
var version$2 = "3.16.0";
_sfc_main$2.install = function(Vue) {
  Vue.component(_sfc_main$2.name, _sfc_main$2);
};
_sfc_main$2.version = version$2;
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
var _export_sfc$1 = function _export_sfc2(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$1(props2), _step; !(_step = _iterator()).done; ) {
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
var _sfc_main$1 = defineComponent({
  name: $prefix + "FilterBox",
  emits: ["click", "handle-clear"],
  components: {
    IconArrowBottom: index$5(),
    IconError: index$6(),
    IconHelpCircle: index$7(),
    TinyTooltip: Tooltip
  },
  props: _extends$1({}, $props, {
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
  setup: function setup$12(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1,
      mono: true
    });
  }
});
function _sfc_render$1(_ctx, _cache, $props2, $setup2, $data, $options) {
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
var FilterBox = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["render", _sfc_render$1]]);
var version$1 = "3.16.0";
FilterBox.install = function(Vue) {
  Vue.component(FilterBox.name, FilterBox);
};
FilterBox.version = version$1;
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
  if (isEqual(value, oldValue))
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
var _export_sfc = function _export_sfc22(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main = defineComponent({
  emits: ["resize", "visible", "hidden", "update", "scroll-start", "scroll-end"],
  props: [].concat(props, ["items", "keyField", "direction", "listTag", "itemTag", "itemSize", "gridItems", "itemSecondarySize", "minItemSize", "sizeField", "typeField", "buffer", "pageMode", "prerender", "emitUpdate", "updateInterval", "skipHover", "listClass", "itemClass", "itemsLimit"]),
  directives: {
    ObserveVisibility: observe_visibility_default
  },
  setup: function setup$13(props2, context) {
    return setup({
      props: props2,
      context,
      renderless,
      api
    });
  }
});
var _hoisted_1 = {
  key: 0,
  ref: "before",
  class: "tiny-recycle-scroller__slot"
};
var _hoisted_2 = {
  key: 1,
  ref: "after",
  class: "tiny-recycle-scroller__slot"
};
function _sfc_render(_ctx, _cache, $props2, $setup2, $data, $options) {
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
      _hoisted_1,
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
      _hoisted_2,
      [renderSlot(_ctx.$slots, "after")],
      512
      /* NEED_PATCH */
    )) : createCommentVNode("v-if", true)],
    34
    /* CLASS, NEED_HYDRATION */
  )), [[_directive_observe_visibility, _ctx.handleVisibilityChange]]);
}
var pc = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
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
var RecycleScroller = defineComponent({
  name: $prefix + "RecycleScroller",
  props: _extends({}, $props, {
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
      validator: function validator(value) {
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
  setup: function setup3(props2, context) {
    return $setup({
      props: props2,
      context,
      template
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
var version = "3.16.0";
RecycleScroller.IdState = IdState;
RecycleScroller.install = function(Vue) {
  Vue.component(RecycleScroller.name, RecycleScroller);
};
RecycleScroller.version = version;
export {
  FilterBox as F,
  RecycleScroller as R,
  _sfc_main$2 as _,
  addResizeListener as a,
  adjustIndex as b,
  onTouchstart as c,
  deepClone as d,
  getOptionText as e,
  onTransitionEnd as f,
  getValue as g,
  computedBaseOffset as h,
  index$4 as i,
  computedWrapperStyle as j,
  setValue as k,
  onTouchend as l,
  setOptions as m,
  momentum as n,
  onTouchmove as o,
  setIndex as p,
  onClickItem as q,
  removeResizeListener as r,
  scroll_into_view_default as s,
  mountedHandler as t,
  beforeUnmountHandler as u
};
