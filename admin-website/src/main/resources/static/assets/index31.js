import { d as defineComponent, p as props, a as setup, $ as $props, b as $prefix, c as $setup, aQ as guid, aR as CollapseTransition, z as index$1, aS as index$2 } from "./index.js";
import { u as openBlock, v as createElementBlock, D as renderSlot, k as resolveComponent, w as createBaseVNode, A as normalizeClass, P as withKeys, O as withModifiers, l as createVNode, J as createTextVNode, E as toDisplayString, H as withCtx, I as withDirectives, K as vShow } from "./vue.js";
const setActiveNames = ({ emit, props: props2, state }) => (activeNames) => {
  activeNames = [].concat(activeNames);
  const value = props2.accordion ? activeNames[0] : activeNames;
  state.activeNames = activeNames;
  emit("update:modelValue", value);
  emit("change", value);
};
const handleItemClick = ({ api: api2, props: props2, state }) => (item) => {
  const activeNames = state.activeNames.slice(0);
  const index2 = activeNames.indexOf(item == null ? void 0 : item.name);
  const beforeClose = () => {
    let result = props2.beforeClose ? props2.beforeClose(item, state.activeNames) : true;
    return new Promise((resolve) => {
      if (result && result.then) {
        result.then(() => resolve(true)).catch(() => resolve(false));
      } else {
        resolve(result);
      }
    });
  };
  beforeClose().then((next) => {
    if (props2.accordion) {
      if (next || !activeNames.length) {
        api2.setActiveNames(activeNames[0] === (item == null ? void 0 : item.name) ? "" : item == null ? void 0 : item.name);
      }
    } else {
      index2 > -1 ? next && activeNames.splice(index2, 1) : activeNames.push(item == null ? void 0 : item.name);
      api2.setActiveNames(activeNames);
    }
  });
};
const api$1 = ["state"];
const renderless$1 = (props2, { reactive, watch }, { parent, emit, constants }) => {
  const eventName = constants.EVENT_NAME.CollapseItemClick;
  const state = reactive({
    activeNames: []
  });
  const api2 = {
    state,
    setActiveNames: setActiveNames({ emit, props: props2, state })
  };
  api2.handleItemClick = handleItemClick({ api: api2, props: props2, state });
  watch(
    () => props2.modelValue,
    (value) => {
      state.activeNames = value || value === 0 ? [].concat(value) : [];
    },
    { immediate: true, deep: true }
  );
  parent.$on(eventName, api2.handleItemClick);
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
var _export_sfc$3 = function _export_sfc2(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$3(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$3 = defineComponent({
  props: [].concat(props, ["accordion", "modelValue", "beforeClose"]),
  setup: function setup$1(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
var _hoisted_1$3 = {
  class: "tiny-collapse",
  role: "tablist",
  "aria-multiselectable": "true"
};
function _sfc_render$3(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [renderSlot(_ctx.$slots, "default")]);
}
var pc$1 = /* @__PURE__ */ _export_sfc$3(_sfc_main$3, [["render", _sfc_render$3]]);
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
var _export_sfc$2 = function _export_sfc22(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$2(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$2 = defineComponent({
  props: [].concat(props, ["accordion", "modelValue", "beforeClose"]),
  emits: ["update:modelValue", "change"],
  setup: function setup$12(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
var _hoisted_1$2 = {
  role: "tablist",
  "aria-multiselectable": "true",
  "data-tag": "tiny-collapse"
};
function _sfc_render$2(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [renderSlot(_ctx.$slots, "default")]);
}
var mobileFirst$1 = /* @__PURE__ */ _export_sfc$2(_sfc_main$2, [["render", _sfc_render$2]]);
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
var template$1 = function template2(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$1;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$1;
  }
  return pc$1;
};
var $constants$1 = {
  COMPONENT_NAME: {
    Collapse: "Collapse"
  },
  EVENT_NAME: {
    CollapseItemClick: "collapse-item.click"
  }
};
var collapseProps = _extends$1({}, $props, {
  _constants: {
    type: Object,
    default: function _default() {
      return $constants$1;
    }
  },
  accordion: Boolean,
  beforeClose: Function,
  modelValue: {
    type: [Array, String, Number],
    default: function _default2() {
      return [];
    }
  }
});
var Collapse = defineComponent({
  name: $prefix + "Collapse",
  componentName: "Collapse",
  props: collapseProps,
  provide: function provide() {
    return {
      collapse: this
    };
  },
  setup: function setup2(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$1
    });
  }
});
var version$1 = "3.16.0";
Collapse.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
Collapse.install = function(Vue) {
  Vue.component(Collapse.name, Collapse);
};
Collapse.version = version$1;
const handleFocus = ({ state, interval }) => () => {
  setTimeout(() => {
    if (!state.isClick) {
      state.focusing = true;
    } else {
      state.isClick = false;
    }
  }, interval);
};
const handleHeaderClick = ({
  componentName,
  dispatch,
  eventName,
  props: props2,
  parent,
  state
}) => () => {
  if (props2.disabled) {
    return;
  }
  dispatch(componentName, eventName, parent);
  state.focusing = false;
  state.isClick = true;
};
const handleEnterClick = ({
  componentName,
  dispatch,
  eventName,
  parent
}) => () => dispatch(componentName, eventName, parent);
const api = ["state", "isActive", "handleFocus", "handleEnterClick", "handleHeaderClick"];
const renderless = (props2, { computed, reactive }, { parent, constants, dispatch }) => {
  const _constants = parent.collapse._constants;
  const componentName = _constants.COMPONENT_NAME.Collapse;
  const eventName = _constants.EVENT_NAME.CollapseItemClick;
  const state = reactive({
    id: guid(),
    isClick: false,
    focusing: false,
    contentHeight: 0,
    contentWrapStyle: { height: "auto", display: "block" },
    isActive: computed(() => parent.collapse.state.activeNames.includes(props2.name))
  });
  const api2 = {
    state,
    handleFocus: handleFocus({ state, interval: constants.INTERVAL }),
    handleEnterClick: handleEnterClick({ componentName, dispatch, eventName, parent }),
    handleHeaderClick: handleHeaderClick({ componentName, dispatch, eventName, props: props2, parent, state })
  };
  return api2;
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
var _export_sfc$1 = function _export_sfc23(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$1(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: [].concat(props, ["title", "titleRight", "name", "disabled"]),
  components: {
    CollapseTransition,
    IconChevronRight: index$1()
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
var _hoisted_1$1 = ["aria-expanded", "aria-controls", "aria-describedby"];
var _hoisted_2$1 = ["id", "tabindex"];
var _hoisted_3$1 = {
  class: "tiny-collapse-item__title__right"
};
var _hoisted_4$1 = ["aria-hidden", "aria-labelledby", "id"];
var _hoisted_5$1 = {
  class: "tiny-collapse-item__content"
};
function _sfc_render$1(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_chevron_right = resolveComponent("icon-chevron-right");
  var _component_collapse_transition = resolveComponent("collapse-transition");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-collapse-item", {
        "is-active": _ctx.state.isActive,
        "is-disabled": _ctx.disabled
      }])
    },
    [createBaseVNode("div", {
      role: "tab",
      "aria-expanded": _ctx.state.isActive,
      "aria-controls": "tiny-collapse-content-" + _ctx.state.id,
      "aria-describedby": "tiny-collapse-content-" + _ctx.state.id
    }, [createBaseVNode("div", {
      class: normalizeClass(["tiny-collapse-item__header", {
        focusing: _ctx.state.focusing,
        "is-active": _ctx.state.isActive
      }]),
      role: "button",
      id: "tiny-collapse-head-" + _ctx.state.id,
      tabindex: _ctx.disabled ? void 0 : 0,
      onKeyup: _cache[2] || (_cache[2] = withKeys(withModifiers(function() {
        return _ctx.handleEnterClick && _ctx.handleEnterClick.apply(_ctx, arguments);
      }, ["stop"]), ["space", "enter"])),
      onFocus: _cache[3] || (_cache[3] = function() {
        return _ctx.handleFocus && _ctx.handleFocus.apply(_ctx, arguments);
      }),
      onBlur: _cache[4] || (_cache[4] = function($event) {
        return _ctx.state.focusing = false;
      }),
      onClick: _cache[5] || (_cache[5] = function() {
        return _ctx.handleHeaderClick && _ctx.handleHeaderClick.apply(_ctx, arguments);
      })
    }, [createBaseVNode("div", {
      class: "tiny-collapse-item__arrow",
      onClick: _cache[0] || (_cache[0] = withModifiers(function() {
        return _ctx.handleHeaderClick && _ctx.handleHeaderClick.apply(_ctx, arguments);
      }, ["stop"]))
    }, [renderSlot(_ctx.$slots, "icon", {}, function() {
      return [createVNode(_component_icon_chevron_right, {
        class: normalizeClass(["tiny-svg-size", {
          "is-active": _ctx.state.isActive
        }])
      }, null, 8, ["class"])];
    })]), createBaseVNode("div", {
      class: "tiny-collapse-item__word-overflow",
      onClick: _cache[1] || (_cache[1] = withModifiers(function() {
        return _ctx.handleHeaderClick && _ctx.handleHeaderClick.apply(_ctx, arguments);
      }, ["stop"]))
    }, [renderSlot(_ctx.$slots, "title", {}, function() {
      return [createTextVNode(
        toDisplayString(_ctx.title),
        1
        /* TEXT */
      )];
    })]), createBaseVNode("div", _hoisted_3$1, [renderSlot(_ctx.$slots, "title-right", {}, function() {
      return [createTextVNode(
        toDisplayString(_ctx.titleRight),
        1
        /* TEXT */
      )];
    })])], 42, _hoisted_2$1), createVNode(_component_collapse_transition, null, {
      default: withCtx(function() {
        return [withDirectives(createBaseVNode("div", {
          class: "tiny-collapse-item__wrap",
          role: "tabpanel",
          "aria-hidden": !_ctx.state.isActive,
          "aria-labelledby": "tiny-collapse-head-" + _ctx.state.id,
          id: "tiny-collapse-content-" + _ctx.state.id
        }, [createBaseVNode("div", _hoisted_5$1, [renderSlot(_ctx.$slots, "default")])], 8, _hoisted_4$1), [[vShow, _ctx.state.isActive]])];
      }),
      _: 3
      /* FORWARDED */
    })], 8, _hoisted_1$1)],
    2
    /* CLASS */
  );
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
var _export_sfc = function _export_sfc24(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main = defineComponent({
  props: [].concat(props, ["title", "titleRight", "name", "disabled"]),
  components: {
    CollapseTransition,
    IconArrowBottom: index$2()
  },
  setup: function setup$14(props2, context) {
    return setup({
      props: props2,
      context,
      renderless,
      api
    });
  }
});
var _hoisted_1 = {
  "data-tag": "tiny-collapse-item",
  class: "border-b-0.5 sm:border-b border-solid border-color-border-separator last:border-0"
};
var _hoisted_2 = ["aria-expanded", "aria-controls", "aria-describedby"];
var _hoisted_3 = ["id", "tabindex"];
var _hoisted_4 = {
  "data-tag": "tiny-collapse-item-titleright",
  class: "text-xs font-normal"
};
var _hoisted_5 = ["aria-hidden", "aria-labelledby", "id"];
var _hoisted_6 = {
  class: "pb-6 pt-0 px-4 sm:pt-0 sm:pr-0 sm:pl-4 sm:pb-4 text-xs text-color-text-primary leading-relaxed"
};
function _sfc_render(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_arrow_bottom = resolveComponent("icon-arrow-bottom");
  var _component_collapse_transition = resolveComponent("collapse-transition");
  return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
    role: "tab",
    "data-tag": "tiny-collapse-item-tab",
    "aria-expanded": _ctx.state.isActive,
    "aria-controls": "tiny-collapse-content-" + _ctx.state.id,
    "aria-describedby": "tiny-collapse-content-" + _ctx.state.id
  }, [createBaseVNode("div", {
    "data-tag": "tiny-collapse-item-body",
    class: normalizeClass(["flex relative items-center h-12 sm:h-10 py-0 sm:pr-0 pl-4 pr-10 text-sm font-bold justify-between whitespace-nowrap", _ctx.disabled ? "text-color-text-disabled" : "text-color-text-primary sm:[&:has(.peer:hover)_[role=title]]:text-color-brand"]),
    id: "tiny-collapse-head-" + _ctx.state.id,
    tabindex: _ctx.disabled ? void 0 : 0,
    onKeyup: _cache[2] || (_cache[2] = withKeys(withModifiers(function() {
      return _ctx.handleEnterClick && _ctx.handleEnterClick.apply(_ctx, arguments);
    }, ["stop"]), ["space", "enter"])),
    onFocus: _cache[3] || (_cache[3] = function() {
      return _ctx.handleFocus && _ctx.handleFocus.apply(_ctx, arguments);
    }),
    onBlur: _cache[4] || (_cache[4] = function($event) {
      return _ctx.state.focusing = false;
    })
  }, [createBaseVNode(
    "div",
    {
      "data-tag": "tiny-collapse-item-title",
      class: normalizeClass(["whitespace-nowrap overflow-hidden overflow-ellipsis inline-block peer", [_ctx.disabled ? "cursor-not-allowed" : "cursor-pointer sm:hover:text-color-brand"]]),
      role: "title",
      onClick: _cache[0] || (_cache[0] = function() {
        return _ctx.handleHeaderClick && _ctx.handleHeaderClick.apply(_ctx, arguments);
      })
    },
    [renderSlot(_ctx.$slots, "title", {}, function() {
      return [createTextVNode(
        toDisplayString(_ctx.title),
        1
        /* TEXT */
      )];
    })],
    2
    /* CLASS */
  ), createBaseVNode("div", _hoisted_4, [renderSlot(_ctx.$slots, "title-right", {}, function() {
    return [createTextVNode(
      toDisplayString(_ctx.titleRight),
      1
      /* TEXT */
    )];
  })]), createBaseVNode(
    "div",
    {
      "data-tag": "tiny-collapse-item-icon",
      class: normalizeClass(["absolute sm:left-0 right-3.5 text-xs mr-1 w-3 peer", [_ctx.disabled ? "fill-color-text-disabled  cursor-not-allowed" : "fill-color-icon-secondary cursor-pointer sm:peer-hover:fill-color-brand sm:hover:fill-color-brand"]]),
      onClick: _cache[1] || (_cache[1] = function() {
        return _ctx.handleHeaderClick && _ctx.handleHeaderClick.apply(_ctx, arguments);
      })
    },
    [renderSlot(_ctx.$slots, "icon", {
      active: _ctx.state.isActive,
      disabled: _ctx.disabled
    }, function() {
      return [createVNode(_component_icon_arrow_bottom, {
        "custom-class": "w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-300",
        class: normalizeClass([_ctx.state.isActive ? "sm:rotate-0 rotate-180" : "sm:-rotate-90 rotate-0"])
      }, null, 8, ["class"])];
    })],
    2
    /* CLASS */
  )], 42, _hoisted_3)], 8, _hoisted_2), createVNode(_component_collapse_transition, null, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode("div", {
        "data-tag": "tiny-collapse-item-active",
        class: "will-change-[height] bg-color-bg-1 overflow-hidden box-border",
        role: "tabpanel",
        "aria-hidden": !_ctx.state.isActive,
        "aria-labelledby": "tiny-collapse-head-" + _ctx.state.id,
        id: "tiny-collapse-content-" + _ctx.state.id
      }, [createBaseVNode("div", _hoisted_6, [renderSlot(_ctx.$slots, "default")])], 8, _hoisted_5), [[vShow, _ctx.state.isActive]])];
    }),
    _: 3
    /* FORWARDED */
  })]);
}
var mobileFirst = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const index = "";
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
var template = function template22(mode) {
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
  INTERVAL: 50
};
var collapseItemProps = _extends({}, $props, {
  _constants: {
    type: Object,
    default: function _default3() {
      return $constants;
    }
  },
  title: String,
  titleRight: String,
  name: {
    type: [String, Number],
    default: function _default22() {
      return this._uid;
    }
  },
  disabled: Boolean
});
var CollapseItem = defineComponent({
  name: $prefix + "CollapseItem",
  componentName: "CollapseItem",
  inject: ["collapse"],
  props: collapseItemProps,
  setup: function setup3(props2, context) {
    return $setup({
      props: props2,
      context,
      template
    });
  }
});
var version = "3.16.0";
CollapseItem.install = function(Vue) {
  Vue.component(CollapseItem.name, CollapseItem);
};
CollapseItem.version = version;
export {
  CollapseItem as C,
  Collapse as a
};
