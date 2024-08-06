import { s as svg, as as format, t as __spreadProps, v as __spreadValues, d as defineComponent, p as props, j as index$3, bb as index$4, a as setup, $ as $props, b as $prefix, c as $setup } from "./index.js";
import { u as openBlock, v as createElementBlock, w as createBaseVNode, k as resolveComponent, L as Fragment, E as toDisplayString, y as createBlock, B as resolveDynamicComponent, A as normalizeClass, D as renderSlot, G as normalizeStyle, J as createTextVNode, I as withDirectives, K as vShow, z as createCommentVNode, M as renderList, H as withCtx, l as createVNode } from "./vue.js";
import { i as index$5, a as index$6 } from "./chevron-up.js";
var _hoisted_1$4 = {
  viewBox: "0 0 2 12",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M1 0a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 1 0Zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$3 = [_hoisted_2$3];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [].concat(_hoisted_3$3));
}
var Warn = {
  render
};
var index$2 = svg({
  name: "IconWarn",
  component: Warn
});
const index$1 = "";
const getDate$1 = (dateTime) => ({
  date: format(dateTime, "yyyy-MM-dd"),
  time: format(dateTime, "hh:mm")
});
const getStatus$1 = ({ state, t }) => (value) => {
  const status = state.current - value;
  return status > 0 ? t("ui.steps.done") : status === 0 ? t("ui.steps.doing") : t("ui.steps.wait");
};
const computedSpace = ({ props: props2 }) => () => {
  const { space } = props2;
  if (/^\d+$/.test(space)) {
    return `${space}px`;
  }
  return space;
};
const handleClick$1 = ({ emit, state }) => ({ index: index2, node }) => {
  if (!node.disabled) {
    emit("click", state.isReverse ? state.nodes.length - index2 - 1 : index2, node);
  }
};
const getStatusCls$1 = ({ constants, state }) => (index2, node) => {
  const { PROCESS_DONE_CLS, PROCESS_CUR_CLS, PROCESS_WAIT_CLS, PROCESS_DISABLED_CLS, PROCESS_ERROR_CLS } = constants;
  const cls = {};
  const reverse = state.isReverse;
  if (node == null ? void 0 : node.disabled) {
    cls[PROCESS_DISABLED_CLS] = true;
  } else if (node == null ? void 0 : node.error) {
    cls[PROCESS_ERROR_CLS] = true;
  } else {
    cls[PROCESS_DONE_CLS] = reverse ? index2 > state.current : index2 < state.current;
    cls[PROCESS_CUR_CLS] = index2 === state.current;
    cls[PROCESS_WAIT_CLS] = reverse ? index2 < state.current : index2 > state.current;
  }
  return cls;
};
const computedData = ({ props: props2, state }) => () => {
  if (props2.data) {
    return state.isReverse ? props2.data.map((item, i) => __spreadProps(__spreadValues({}, props2.data[props2.data.length - 1 - i]), { index: i })) : props2.data.map((item, i) => __spreadProps(__spreadValues({}, item), { index: i }));
  }
  return state.timelineItems;
};
const computedCurrent$1 = ({ props: props2, state }) => () => state.isReverse ? state.nodes.length - props2.active - 1 : props2.active;
const computedIsReverse$1 = (props2) => () => props2.reverse && props2.vertical;
const computedStackNodes = ({ state, props: props2 }) => () => {
  if (state.nodes.length >= props2.nodeMax && !props2.foldDisabled) {
    state.showData = true;
    return state.nodes.slice(0, props2.limitedNodes);
  }
  return state.nodes;
};
const changeStatus = ({ state }) => () => {
  state.showAll = !state.showAll;
  return state.showAll;
};
const computedWrapperClass = ({ props: props2 }) => () => {
  const { vertical, reverse, textPosition, showDivider } = props2;
  const wrapperClass = [];
  if (vertical) {
    wrapperClass.push("tiny-steps-timeline", { reverse, "tiny-timeline__shape-dot": props2.shape === "dot" });
  } else {
    wrapperClass.push("tiny-steps-normal", textPosition === "right" ? "text-right" : "text-bottom");
  }
  if (showDivider && textPosition === "right") {
    wrapperClass.push("show-divider");
  }
  return wrapperClass;
};
const toggleFold = ({ props: props2 }) => (node) => {
  const isFold = !props2.data[node.index].fold;
  props2.data[node.index].fold = isFold;
  return isFold;
};
const api$1 = ["state", "handleClick", "getStatusCls", "getStatus", "getDate", "changeStatus", "toggleFold"];
const renderless$1 = (props2, { computed, reactive, provide, watch }, { t, emit, constants, designConfig }) => {
  const api2 = {};
  const state = reactive({
    nodes: computed(() => api2.computedData()),
    timelineItems: [],
    current: computed(() => api2.computedCurrent()),
    isReverse: computed(() => api2.computedIsReverse()),
    stackNodes: computed(() => state.showAll ? state.nodes : api2.computedStackNodes()),
    computedSpace: computed(() => api2.computedSpace()),
    showData: false,
    showAll: false,
    computedWrapperClass: computed(() => api2.computedWrapperClass())
  });
  Object.assign(api2, {
    state,
    getDate: getDate$1,
    computedData: computedData({ props: props2, state }),
    computedCurrent: computedCurrent$1({ props: props2, state }),
    computedIsReverse: computedIsReverse$1(props2),
    computedSpace: computedSpace({ props: props2 }),
    getStatus: getStatus$1({ state, t }),
    handleClick: handleClick$1({ emit, state }),
    getStatusCls: getStatusCls$1({ constants, state }),
    computedStackNodes: computedStackNodes({ state, props: props2 }),
    changeStatus: changeStatus({ state }),
    computedWrapperClass: computedWrapperClass({ props: props2 }),
    toggleFold: toggleFold({ props: props2 })
  });
  provide("nodesInject", { timelineItems: state.timelineItems, nodes: state.nodes, props: props2 });
  watch(
    () => state.timelineItems,
    (newVal) => {
      newVal.forEach((item, i) => item.index = i);
    },
    {
      immediate: true,
      deep: true
    }
  );
  return api2;
};
const getDate = (dateTime) => ({
  date: format(dateTime, "yyyy-MM-dd"),
  time: format(dateTime, "hh:mm")
});
const getStatus = ({ state, t }) => (value) => {
  const status = state.current - value;
  return status > 0 ? t("ui.steps.done") : status === 0 ? t("ui.steps.doing") : t("ui.steps.wait");
};
const computedWidth = () => (width) => {
  return /^\d+$/.test(String(width)) ? `${width}px` : width || "";
};
const handleClick = ({ emit, state }) => (node) => {
  const { index: index2 } = node || {};
  if (!node.disabled) {
    emit("click", state.isReverse ? state.nodesLength - index2 - 1 : index2, node);
  }
};
const getStatusCls = ({ constants, state }) => (node) => {
  const { index: index2 } = node;
  const { PROCESS_DONE_CLS, PROCESS_CUR_CLS, PROCESS_WAIT_CLS, PROCESS_DISABLED_CLS, PROCESS_ERROR_CLS } = constants;
  const cls = {};
  const reverse = state.isReverse;
  if (node == null ? void 0 : node.disabled) {
    cls[PROCESS_DISABLED_CLS] = true;
  } else if (node == null ? void 0 : node.error) {
    cls[PROCESS_ERROR_CLS] = true;
  } else {
    cls[PROCESS_DONE_CLS] = reverse ? index2 > state.current : index2 < state.current;
    cls[PROCESS_CUR_CLS] = index2 === state.current;
    cls[PROCESS_WAIT_CLS] = reverse ? index2 < state.current : index2 > state.current;
  }
  return cls;
};
const computedCurrent = ({ state, api: api2 }) => () => state.isReverse ? state.nodesLength - api2.rootProps.active - 1 : api2.rootProps.active;
const computedIsReverse = (api2) => () => api2.rootProps.reverse && api2.rootProps.vertical;
const computedItemCls = ({ props: props2, api: api2, state }) => () => {
  const itemClass = [];
  if (api2.rootProps.vertical) {
    itemClass.push("timeline");
    if (props2.node.type) {
      itemClass.push(`timeline-item--${props2.node.type}`);
    }
  } else {
    itemClass.push("normal");
  }
  if (!props2.node.type) {
    itemClass.push(api2.getStatusCls(props2.node));
  }
  if (state.computedLineWidth) {
    itemClass.push("no-flex");
  }
  return itemClass;
};
const computedIconClass = ({ props: props2, api: api2 }) => () => {
  let iconClass = ["icon", { "step-icon": api2.rootProps.textPosition === "right" }];
  const defaultIcons = ["success", "warning", "error"];
  if (defaultIcons.includes(props2.node[props2.autoColorField])) {
    iconClass.push(`icon-${props2.node[props2.autoColorField]}`);
  } else if (props2.node[props2.autoColorField]) {
    iconClass.push("icon-custom");
  }
  return iconClass;
};
const computedItemStyle = ({ props: props2, state, api: api2 }) => () => {
  const { index: index2 } = props2.node;
  const { computedSpace: computedSpace2, nodesLength } = state;
  const { textPosition, vertical } = api2.rootProps;
  if (vertical) {
    return { height: index2 === nodesLength - 1 ? "" : computedSpace2 };
  }
  if (textPosition === "right") {
    if (computedSpace2 && !state.computedLineWidth) {
      return { flex: `0 0 ${computedSpace2}` };
    }
    return null;
  }
  return { width: computedSpace2 || 100 / nodesLength + "%" };
};
const api = ["state", "handleClick", "getStatusCls", "getStatus", "getDate", "rootProps"];
const renderless = (props2, { computed, reactive, inject }, { t, emit, constants }) => {
  const api2 = {};
  const { timelineItems, nodes, props: rootProps } = inject("nodesInject");
  timelineItems.push(props2.node);
  const state = reactive({
    nodesLength: computed(() => nodes.length),
    current: computed(() => api2.computedCurrent()),
    isReverse: computed(() => api2.computedIsReverse()),
    computedSpace: computed(() => api2.computedWidth(props2.space || api2.rootProps.space)),
    computedItemCls: computed(() => api2.computedItemCls()),
    computedItemStyle: computed(() => api2.computedItemStyle()),
    computedLineWidth: computed(() => api2.computedWidth(props2.lineWidth || api2.rootProps.lineWidth)),
    iconClass: computed(() => api2.computedIconClass())
  });
  Object.assign(api2, {
    state,
    rootProps,
    getDate,
    computedCurrent: computedCurrent({ state, api: api2 }),
    computedIsReverse: computedIsReverse(api2),
    computedItemCls: computedItemCls({ props: props2, api: api2, state }),
    computedItemStyle: computedItemStyle({ props: props2, state, api: api2 }),
    computedWidth: computedWidth(),
    getStatus: getStatus({ state, t }),
    handleClick: handleClick({ emit, state }),
    getStatusCls: getStatusCls({ constants, state }),
    computedIconClass: computedIconClass({ props: props2, api: api2 })
  });
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
  emits: ["click"],
  props: [].concat(props, ["node", "space", "lineWidth", "shape", "autoColorField"]),
  components: {
    IconWarn: index$2(),
    IconClose: index$3(),
    IconYes: index$4()
  },
  setup: function setup$1(props2, context) {
    return setup({
      props: props2,
      context,
      renderless,
      api
    });
  }
});
var _hoisted_1$3 = {
  key: 0,
  class: "number"
};
var _hoisted_2$2 = {
  class: "node-description"
};
var _hoisted_3$2 = ["textContent"];
var _hoisted_4$2 = {
  class: "tiny-timeline-item__description",
  ref: "description"
};
var _hoisted_5$2 = {
  class: "date-time"
};
var _hoisted_6$2 = {
  class: "time"
};
var _hoisted_7$2 = {
  class: "tiny-steps__node"
};
var _hoisted_8$2 = {
  key: 0,
  class: "number"
};
var _hoisted_9$2 = {
  class: "node-description"
};
var _hoisted_10$2 = ["textContent"];
var _hoisted_11$2 = {
  key: 0,
  class: "status"
};
var _hoisted_12$2 = {
  key: 0,
  class: "date-time"
};
var _hoisted_13$2 = {
  class: "date"
};
var _hoisted_14$2 = {
  class: "time"
};
var _hoisted_15$1 = {
  class: "tiny-timeline-item__pillar"
};
var _hoisted_16$1 = {
  key: 1,
  class: "number"
};
var _hoisted_17$1 = {
  key: 1,
  class: "dot"
};
var _hoisted_18$1 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "line"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_19$1 = {
  class: "name"
};
var _hoisted_20$1 = {
  key: 0,
  class: "time"
};
function _sfc_render$3(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_close = resolveComponent("icon-close");
  var _component_icon_warn = resolveComponent("icon-warn");
  var _component_icon_yes = resolveComponent("icon-yes");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-timeline-item", _ctx.state.computedItemCls]),
      style: normalizeStyle(_ctx.state.computedItemStyle)
    },
    [!_ctx.rootProps.vertical ? (openBlock(), createElementBlock(
      Fragment,
      {
        key: 0
      },
      [_ctx.rootProps.textPosition === "right" ? (openBlock(), createElementBlock(
        Fragment,
        {
          key: 0
        },
        [createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.state.iconClass),
            onClick: _cache[0] || (_cache[0] = function($event) {
              return _ctx.handleClick(_ctx.node);
            })
          },
          [(_ctx.node.index >= _ctx.state.current || _ctx.rootProps.onlyNumber) && !_ctx.node[_ctx.autoColorField] && !_ctx.node.error ? (openBlock(), createElementBlock(
            "span",
            _hoisted_1$3,
            toDisplayString(_ctx.rootProps.showNumber ? _ctx.node.index + _ctx.rootProps.start : ""),
            1
            /* TEXT */
          )) : (openBlock(), createElementBlock(
            Fragment,
            {
              key: 1
            },
            [_ctx.node[_ctx.autoColorField] === "error" || _ctx.node.error ? (openBlock(), createBlock(_component_icon_close, {
              key: 0,
              class: "tiny-svg-size fixicon icon-error"
            })) : _ctx.node[_ctx.autoColorField] === "warning" ? (openBlock(), createBlock(_component_icon_warn, {
              key: 1,
              class: "tiny-svg-size fixicon icon-warning"
            })) : _ctx.node[_ctx.autoColorField] === "success" || _ctx.node.index < _ctx.state.current && !_ctx.node[_ctx.autoColorField] ? (openBlock(), createBlock(_component_icon_yes, {
              key: 2,
              class: "tiny-svg-size fixicon icon-yes"
            })) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.node[_ctx.autoColorField]), {
              key: 3,
              class: "fixicons"
            }))],
            64
            /* STABLE_FRAGMENT */
          ))],
          2
          /* CLASS */
        ), createBaseVNode("div", _hoisted_2$2, [renderSlot(_ctx.$slots, "text", {
          slotScope: _ctx.node
        }, function() {
          return [createBaseVNode("div", {
            class: "name",
            textContent: toDisplayString(_ctx.node[_ctx.rootProps.nameField]),
            onClick: _cache[1] || (_cache[1] = function($event) {
              return _ctx.handleClick(_ctx.node);
            })
          }, null, 8, _hoisted_3$2)];
        }), createBaseVNode(
          "div",
          {
            class: normalizeClass(["line", {
              "line-done": _ctx.node.index < _ctx.state.current,
              "line-end": _ctx.node.index === _ctx.state.nodesLength - 1
            }]),
            style: normalizeStyle({
              width: _ctx.state.computedLineWidth
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), createBaseVNode(
          "div",
          _hoisted_4$2,
          [renderSlot(_ctx.$slots, "description", {
            slotScope: _ctx.node
          }, function() {
            return [createTextVNode(
              toDisplayString(_ctx.node.description),
              1
              /* TEXT */
            )];
          }), withDirectives(createBaseVNode(
            "div",
            null,
            [renderSlot(_ctx.$slots, "active-node-desc", {
              slotScope: _ctx.node
            })],
            512
            /* NEED_PATCH */
          ), [[vShow, _ctx.node.index === _ctx.rootProps.active]])],
          512
          /* NEED_PATCH */
        )])],
        64
        /* STABLE_FRAGMENT */
      )) : (openBlock(), createElementBlock(
        Fragment,
        {
          key: 1
        },
        [renderSlot(_ctx.$slots, "top", {
          slotScope: _ctx.node
        }, function() {
          return [createBaseVNode("div", _hoisted_5$2, [createBaseVNode(
            "span",
            _hoisted_6$2,
            toDisplayString(_ctx.getDate(_ctx.node[_ctx.rootProps.timeField]).date) + " " + toDisplayString(_ctx.getDate(_ctx.node[_ctx.rootProps.timeField]).time),
            1
            /* TEXT */
          )])];
        }), createBaseVNode("div", _hoisted_7$2, [createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.state.iconClass),
            onClick: _cache[2] || (_cache[2] = function($event) {
              return _ctx.handleClick(_ctx.node);
            })
          },
          [(_ctx.node.index >= _ctx.state.current || _ctx.rootProps.onlyNumber) && !_ctx.node[_ctx.autoColorField] && !_ctx.node.error ? (openBlock(), createElementBlock(
            "span",
            _hoisted_8$2,
            toDisplayString(_ctx.rootProps.showNumber ? _ctx.node.index + _ctx.rootProps.start : ""),
            1
            /* TEXT */
          )) : (openBlock(), createElementBlock(
            Fragment,
            {
              key: 1
            },
            [_ctx.node[_ctx.autoColorField] === "error" || _ctx.node.error ? (openBlock(), createBlock(_component_icon_close, {
              key: 0,
              class: "tiny-svg-size fixicon icon-error"
            })) : _ctx.node[_ctx.autoColorField] === "warning" ? (openBlock(), createBlock(_component_icon_warn, {
              key: 1,
              class: "tiny-svg-size fixicon icon-warning"
            })) : _ctx.node[_ctx.autoColorField] === "success" || _ctx.node.index < _ctx.state.current && !_ctx.node[_ctx.autoColorField] ? (openBlock(), createBlock(_component_icon_yes, {
              key: 2,
              class: "tiny-svg-size fixicon icon-yes"
            })) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.node[_ctx.autoColorField]), {
              key: 3,
              class: "fixicons"
            }))],
            64
            /* STABLE_FRAGMENT */
          ))],
          2
          /* CLASS */
        ), createBaseVNode(
          "div",
          {
            class: normalizeClass(["line", {
              "line-done": _ctx.node.index < _ctx.state.current,
              "line-end": _ctx.node.index === _ctx.state.nodesLength - 1
            }])
          },
          null,
          2
          /* CLASS */
        )]), createBaseVNode("div", _hoisted_9$2, [renderSlot(_ctx.$slots, "bottom", {
          slotScope: _ctx.node
        }, function() {
          return [createBaseVNode("div", {
            class: "name",
            textContent: toDisplayString(_ctx.node[_ctx.rootProps.nameField]),
            onClick: _cache[3] || (_cache[3] = function($event) {
              return _ctx.handleClick(_ctx.node);
            })
          }, null, 8, _hoisted_10$2), _ctx.rootProps.showStatus ? (openBlock(), createElementBlock(
            "div",
            _hoisted_11$2,
            toDisplayString(_ctx.getStatus(_ctx.node.index)),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true)];
        })])],
        64
        /* STABLE_FRAGMENT */
      ))],
      64
      /* STABLE_FRAGMENT */
    )) : (openBlock(), createElementBlock(
      Fragment,
      {
        key: 1
      },
      [renderSlot(_ctx.$slots, "left", {
        slotScope: _ctx.node
      }, function() {
        return [_ctx.shape === "circle" ? (openBlock(), createElementBlock("div", _hoisted_12$2, [createBaseVNode(
          "span",
          _hoisted_13$2,
          toDisplayString(_ctx.getDate(_ctx.node[_ctx.rootProps.timeField]).date),
          1
          /* TEXT */
        ), createBaseVNode(
          "span",
          _hoisted_14$2,
          toDisplayString(_ctx.getDate(_ctx.node[_ctx.rootProps.timeField]).time),
          1
          /* TEXT */
        )])) : createCommentVNode("v-if", true)];
      }), createBaseVNode("div", _hoisted_15$1, [_ctx.shape === "circle" ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(_ctx.state.iconClass),
          onClick: _cache[4] || (_cache[4] = function($event) {
            return _ctx.handleClick(_ctx.node);
          })
        },
        [(_ctx.state.isReverse ? _ctx.node.index > _ctx.state.current : _ctx.node.index < _ctx.state.current) || _ctx.node[_ctx.autoColorField] ? (openBlock(), createElementBlock(
          Fragment,
          {
            key: 0
          },
          [_ctx.node[_ctx.autoColorField] === "error" || _ctx.node.error ? (openBlock(), createBlock(_component_icon_close, {
            key: 0,
            class: "tiny-svg-size fixicon icon-error"
          })) : _ctx.node[_ctx.autoColorField] === "warning" ? (openBlock(), createBlock(_component_icon_warn, {
            key: 1,
            class: "tiny-svg-size fixicon icon-warning"
          })) : _ctx.node[_ctx.autoColorField] === "success" || !_ctx.node[_ctx.autoColorField] ? (openBlock(), createBlock(_component_icon_yes, {
            key: 2,
            class: "tiny-svg-size fixicon icon-yes"
          })) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.node[_ctx.autoColorField]), {
            key: 3,
            class: "fixicons"
          }))],
          64
          /* STABLE_FRAGMENT */
        )) : (openBlock(), createElementBlock(
          "span",
          _hoisted_16$1,
          toDisplayString(_ctx.rootProps.showNumber ? _ctx.state.isReverse ? _ctx.state.nodesLength - 1 - _ctx.node.index + _ctx.rootProps.start : _ctx.node.index + _ctx.rootProps.start : ""),
          1
          /* TEXT */
        ))],
        2
        /* CLASS */
      )) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: "dot-container",
        onClick: _cache[5] || (_cache[5] = function($event) {
          return _ctx.handleClick(_ctx.node);
        })
      }, [_ctx.node[_ctx.autoColorField] ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.node[_ctx.autoColorField]), {
        key: 0,
        class: "fixicons"
      })) : (openBlock(), createElementBlock("span", _hoisted_17$1))])), _hoisted_18$1]), renderSlot(_ctx.$slots, "right", {
        slotScope: _ctx.node
      }, function() {
        return [createBaseVNode("div", {
          class: "tiny-timeline-item__content",
          onClick: _cache[6] || (_cache[6] = function($event) {
            return _ctx.handleClick(_ctx.node);
          })
        }, [createBaseVNode(
          "div",
          _hoisted_19$1,
          toDisplayString(_ctx.node[_ctx.rootProps.nameField]),
          1
          /* TEXT */
        ), _ctx.shape === "dot" ? (openBlock(), createElementBlock(
          "div",
          _hoisted_20$1,
          toDisplayString(_ctx.node[_ctx.rootProps.timeField]),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)])];
      })],
      64
      /* STABLE_FRAGMENT */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var pc$1 = /* @__PURE__ */ _export_sfc$3(_sfc_main$3, [["render", _sfc_render$3]]);
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
  typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  return pc$1;
};
var $constants$1 = {
  PROCESS_DONE_CLS: "process-done",
  PROCESS_CUR_CLS: "process-current",
  PROCESS_WAIT_CLS: "process-wait",
  PROCESS_DISABLED_CLS: "process-disabled",
  PROCESS_ERROR_CLS: "process-error",
  STACK_NODES_MAX: 7,
  LIMITED_STACK_NODES: 3
};
var timelineItemProps = _extends$1({}, $props, {
  node: {
    type: Object,
    default: {}
  },
  _constants: {
    type: Object,
    default: function _default() {
      return $constants$1;
    }
  },
  space: {
    type: [String, Number],
    default: ""
  },
  lineWidth: {
    type: [String, Number],
    default: ""
  },
  autoColorField: {
    type: String,
    default: "autoColor"
  }
});
var TimelineItem = defineComponent({
  name: $prefix + "TimelineItem",
  props: timelineItemProps,
  setup: function setup2(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$1
    });
  }
});
var version$1 = "3.16.0";
TimelineItem.install = function(Vue) {
  Vue.component(TimelineItem.name, TimelineItem);
};
TimelineItem.version = version$1;
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
  emits: ["click"],
  props: [].concat(props, ["vertical", "horizontal", "showNumber", "nameField", "timeField", "start", "data", "space", "active", "reverse", "showStatus", "size", "textPosition", "showDivider", "onlyNumber", "lineWidth", "shape", "autoColorField"]),
  components: {
    TinyTimelineItem: TimelineItem
  },
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
  key: 0,
  class: "tiny-steps__bottom-divider"
};
function _sfc_render$2(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_timeline_item = resolveComponent("tiny-timeline-item");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-timeline tiny-steps", {
        "is-horizontal": _ctx.horizontal && !_ctx.vertical,
        "tiny-steps--mini": _ctx.size === "mini"
      }])
    },
    [createBaseVNode(
      "div",
      {
        class: normalizeClass(_ctx.state.computedWrapperClass)
      },
      [renderSlot(_ctx.$slots, "default", {}, function() {
        return [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.state.nodes, function(node, index2) {
            return openBlock(), createBlock(_component_tiny_timeline_item, {
              key: index2,
              node,
              space: _ctx.space,
              "line-width": _ctx.lineWidth,
              shape: _ctx.shape,
              autoColorField: _ctx.autoColorField,
              onClick: function onClick($event) {
                return _ctx.handleClick({
                  index: index2,
                  node
                });
              }
            }, {
              "active-node-desc": withCtx(function(slotScoped) {
                return [renderSlot(_ctx.$slots, "active-node-desc", {
                  node: slotScoped.node
                })];
              }),
              top: withCtx(function(_ref) {
                var slotScope = _ref.slotScope;
                return [renderSlot(_ctx.$slots, "top", {
                  slotScope
                })];
              }),
              bottom: withCtx(function(_ref2) {
                var slotScope = _ref2.slotScope;
                return [renderSlot(_ctx.$slots, "bottom", {
                  slotScope
                })];
              }),
              left: withCtx(function(_ref3) {
                var slotScope = _ref3.slotScope;
                return [renderSlot(_ctx.$slots, "left", {
                  slotScope
                })];
              }),
              right: withCtx(function(_ref4) {
                var slotScope = _ref4.slotScope;
                return [renderSlot(_ctx.$slots, "right", {
                  slotScope
                })];
              }),
              _: 2
              /* DYNAMIC */
            }, 1032, ["node", "space", "line-width", "shape", "autoColorField", "onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))];
      })],
      2
      /* CLASS */
    ), _ctx.textPosition === "right" && _ctx.showDivider ? (openBlock(), createElementBlock("div", _hoisted_1$2)) : createCommentVNode("v-if", true)],
    2
    /* CLASS */
  );
}
var pc = /* @__PURE__ */ _export_sfc$2(_sfc_main$2, [["render", _sfc_render$2]]);
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
var _export_sfc$1 = function _export_sfc23(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$1(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$1 = /* @__PURE__ */ defineComponent({
  emits: ["click"],
  props: [].concat(props, ["vertical", "horizontal", "showNumber", "nameField", "timeField", "start", "data", "space", "active", "reverse", "showStatus", "showFoldBtn"]),
  components: {
    IconYes: index$4()
  },
  setup: function setup$13(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
var _hoisted_1$1 = {
  key: 0,
  class: "tiny-mobile-steps-normal"
};
var _hoisted_2$1 = {
  class: "date-time"
};
var _hoisted_3$1 = {
  class: "time"
};
var _hoisted_4$1 = ["onClick"];
var _hoisted_5$1 = {
  key: 0
};
var _hoisted_6$1 = ["custom-title"];
var _hoisted_7$1 = {
  class: "node-description"
};
var _hoisted_8$1 = ["textContent"];
var _hoisted_9$1 = {
  class: "status"
};
var _hoisted_10$1 = {
  class: "header"
};
var _hoisted_11$1 = {
  key: 0,
  class: "date-time-vertical"
};
var _hoisted_12$1 = {
  class: "time"
};
var _hoisted_13$1 = {
  class: "name"
};
var _hoisted_14$1 = ["onClick"];
function _sfc_render$1(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_yes = resolveComponent("icon-yes");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-mobile-steps", {
        "is-horizontal": _ctx.horizontal && !_ctx.vertical
      }])
    },
    [!_ctx.vertical ? (openBlock(), createElementBlock("div", _hoisted_1$1, [(openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.state.nodes, function(node, index2) {
        return openBlock(), createElementBlock(
          "div",
          {
            key: index2,
            style: normalizeStyle({
              width: _ctx.horizontal ? _ctx.space ? _ctx.space + "px" : 100 / _ctx.state.nodes.length + "%" : null
            }),
            class: normalizeClass(["normal", _ctx.getStatusCls(index2)])
          },
          [renderSlot(_ctx.$slots, "top", {
            slotScope: node
          }, function() {
            return [createBaseVNode("div", _hoisted_2$1, [createBaseVNode(
              "span",
              _hoisted_3$1,
              toDisplayString(_ctx.getDate(node[_ctx.timeField]).date) + " " + toDisplayString(_ctx.getDate(node[_ctx.timeField]).time),
              1
              /* TEXT */
            )])];
          }), createBaseVNode("div", {
            class: "icon",
            onClick: function onClick($event) {
              return _ctx.handleClick({
                index: index2,
                node
              });
            }
          }, [index2 >= _ctx.state.current ? (openBlock(), createElementBlock(
            "span",
            _hoisted_5$1,
            toDisplayString(_ctx.showNumber ? index2 + _ctx.start : ""),
            1
            /* TEXT */
          )) : (openBlock(), createElementBlock("span", {
            key: 1,
            "custom-title": index2 + _ctx.start,
            class: "icon-wrap"
          }, [createVNode(_component_icon_yes, {
            class: "tiny-svg-size fixicon"
          })], 8, _hoisted_6$1))], 8, _hoisted_4$1), createBaseVNode(
            "div",
            {
              class: normalizeClass(["line", {
                "line-done": index2 < _ctx.state.current,
                "line-end": index2 === _ctx.state.nodes.length - 1
              }])
            },
            null,
            2
            /* CLASS */
          ), createBaseVNode("div", _hoisted_7$1, [renderSlot(_ctx.$slots, "bottom", {
            item: node
          }, function() {
            return [createBaseVNode("div", {
              class: "name",
              textContent: toDisplayString(node[_ctx.nameField])
            }, null, 8, _hoisted_8$1), createBaseVNode(
              "div",
              _hoisted_9$1,
              toDisplayString(_ctx.showStatus ? _ctx.getStatus(index2) : ""),
              1
              /* TEXT */
            )];
          })])],
          6
          /* CLASS, STYLE */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))])) : (openBlock(), createElementBlock(
      "div",
      {
        key: 1,
        class: normalizeClass(["tiny-mobile-steps-timeline", {
          reverse: _ctx.reverse
        }])
      },
      [(openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList(_ctx.state.nodes, function(node, index2) {
          return openBlock(), createElementBlock("div", {
            key: index2,
            class: "timeline"
          }, [createBaseVNode("ul", null, [createBaseVNode("li", null, [createBaseVNode("div", _hoisted_10$1, [node.time ? (openBlock(), createElementBlock("div", _hoisted_11$1, [createBaseVNode(
            "span",
            _hoisted_12$1,
            toDisplayString(_ctx.getDate(node[_ctx.timeField]).date) + " " + toDisplayString(_ctx.getDate(node[_ctx.timeField]).time),
            1
            /* TEXT */
          )])) : createCommentVNode("v-if", true), createBaseVNode(
            "span",
            {
              class: normalizeClass(["round", "round-" + node.state])
            },
            null,
            2
            /* CLASS */
          ), renderSlot(_ctx.$slots, "header", {
            item: node
          }, function() {
            return [createBaseVNode(
              "div",
              _hoisted_13$1,
              toDisplayString(node.name),
              1
              /* TEXT */
            )];
          }), node.showFoldBtn ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "arrow-btn",
            onClick: function onClick($event) {
              return _ctx.toggleFold(node);
            }
          }, [createBaseVNode(
            "div",
            {
              class: normalizeClass(["arrow-btn-arrow", node.fold ? "arrow-btn-arrow-fold" : ""])
            },
            null,
            2
            /* CLASS */
          )], 8, _hoisted_14$1)) : createCommentVNode("v-if", true)]), !node.fold ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              class: normalizeClass(["content", node.time ? "content-left-margin" : null])
            },
            [renderSlot(_ctx.$slots, "content", {
              item: node
            })],
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true), _ctx.state.nodes.length > 1 ? (openBlock(), createElementBlock(
            "div",
            {
              key: 1,
              class: normalizeClass(["line", node.time ? "line-left-margin" : null])
            },
            null,
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true)])])]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ))],
    2
    /* CLASS */
  );
}
var mobile = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["render", _sfc_render$1]]);
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
  emits: ["click"],
  props: [].concat(props, ["vertical", "nameField", "timeField", "tipsField", "autoColorField", "data", "space", "subField", "foldDisabled", "nodeMax", "limitedNodes"]),
  components: {
    IconChevronDown: index$5(),
    IconChevronUp: index$6()
  },
  setup: function setup$14(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
var _hoisted_1 = {
  class: "inline-flex flex-col",
  "data-tag": "tiny-timeline"
};
var _hoisted_2 = {
  class: "inline-flex sm:items-start",
  "data-tag": "tiny-timeline-list"
};
var _hoisted_3 = {
  class: "text-color-text-secondary text-left !mr-2 inline-flex text-xs"
};
var _hoisted_4 = {
  class: "sm:inline-block hidden leading-5 w-32"
};
var _hoisted_5 = {
  class: "ml-1"
};
var _hoisted_6 = {
  class: "sm:hidden inline-flex flex-col leading-5.5 w-20"
};
var _hoisted_7 = {
  class: "text-sm"
};
var _hoisted_8 = {
  class: "text-sm mb-6"
};
var _hoisted_9 = {
  class: "mt-1 w-3 h-3 leading-3 box-border relative text-xs text-center -ml-1.5 cursor-pointer inline-flex items-center justify-center align-top"
};
var _hoisted_10 = {
  key: 1,
  class: /* @__PURE__ */ normalizeClass(["rounded-full block w-1.5 h-1.5 bg-color-brand"])
};
var _hoisted_11 = {
  "data-tag": "tiny-timeline-list-left",
  class: "sm:text-color-text-secondary text-color-text-placeholder text-left sm:pl-3 !pl-2 inline-flex flex-col sm:flex-row"
};
var _hoisted_12 = {
  class: "inline-block sm:text-xs text-sm sm:leading-5 leading-5.5"
};
var _hoisted_13 = {
  key: 0,
  class: "sm:hidden inline-block sm:leading-5 leading-5.5 text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[theme(spacing.56)] mb-6 text-color-text-primary"
};
var _hoisted_14 = {
  key: 1,
  class: "sm:hidden max-w-[theme(spacing.56)] inline-block text-color-icon-secondary text-xs mt-2.5 leading-5"
};
var _hoisted_15 = {
  key: 0,
  class: "max-w-[theme(spacing.56)] inline-block text-color-icon-secondary sm:text-xs text-sm leading-5 mb-4 break-all break-words"
};
var _hoisted_16 = {
  class: "inline-block leading-5.5 sm:text-xs text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[theme(spacing.56)]"
};
var _hoisted_17 = {
  key: 0,
  class: "max-w-[theme(spacing.56)] break-all break-words leading-5 inline-block text-color-icon-secondary text-xs sm:text-xs"
};
var _hoisted_18 = {
  key: 0,
  "data-tag": "tiny-timeline-showdata",
  class: "sm:ml-6 ml-5 sm:m-0 my-1 sm:leading-5 sm:h-5 leading-5.5 inline-flex items-center"
};
var _hoisted_19 = {
  key: 0,
  class: "inline-flex items-center"
};
var _hoisted_20 = {
  key: 1,
  class: "inline-flex items-center"
};
function _sfc_render(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_chevron_up = resolveComponent("icon-chevron-up");
  var _component_icon_chevron_down = resolveComponent("icon-chevron-down");
  return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(
    Fragment,
    null,
    renderList(_ctx.state.stackNodes, function(node, index2) {
      return openBlock(), createElementBlock(
        "div",
        {
          "data-tag": "tiny-timeline-nodes",
          key: index2,
          style: normalizeStyle({
            height: index2 === _ctx.state.stackNodes.length - 1 ? "" : _ctx.space && _ctx.space + "px"
          }),
          class: normalizeClass(["inline-flex", _ctx.getStatusCls(index2)])
        },
        [createBaseVNode("ul", _hoisted_2, [_ctx.subField ? renderSlot(_ctx.$slots, "left", {
          key: 0,
          slotScope: node
        }, function() {
          return [createBaseVNode("li", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode(
            "span",
            null,
            toDisplayString(_ctx.getDate(node[_ctx.timeField]).date),
            1
            /* TEXT */
          ), createBaseVNode(
            "span",
            _hoisted_5,
            toDisplayString(_ctx.getDate(node[_ctx.timeField]).time),
            1
            /* TEXT */
          )]), createBaseVNode("div", _hoisted_6, [createBaseVNode(
            "span",
            _hoisted_7,
            toDisplayString(_ctx.getDate(node[_ctx.timeField]).date),
            1
            /* TEXT */
          ), createBaseVNode(
            "span",
            _hoisted_8,
            toDisplayString(_ctx.getDate(node[_ctx.timeField]).time),
            1
            /* TEXT */
          )])])];
        }) : createCommentVNode("v-if", true), createBaseVNode(
          "li",
          {
            "data-tag": "tiny-timeline-autocolor",
            style: normalizeStyle({
              height: index2 === _ctx.state.stackNodes.length - 1 ? "" : _ctx.space && _ctx.space + "px"
            }),
            class: "ml-1.5 relative h-full"
          },
          [createBaseVNode(
            "div",
            {
              class: normalizeClass(["sm:w-px absolute mt-4 h-[calc(100%-theme(spacing.3))]", {
                "sm:bg-color-bg-3 sm:border-0 border-l-0.5 border-l-color-bg-3": index2 !== _ctx.state.stackNodes.length - 1
              }])
            },
            null,
            2
            /* CLASS */
          ), createBaseVNode("div", _hoisted_9, [typeof node[_ctx.autoColorField] === "string" ? (openBlock(), createElementBlock(
            "span",
            {
              key: 0,
              class: normalizeClass(["rounded-full block w-1.5 h-1.5", node[_ctx.autoColorField] === "success" && "bg-color-success", node[_ctx.autoColorField] === "error" && "bg-color-error", node[_ctx.autoColorField] === "info" && "bg-color-text-disabled"])
            },
            null,
            2
            /* CLASS */
          )) : !node[_ctx.autoColorField] ? (openBlock(), createElementBlock("span", _hoisted_10)) : (openBlock(), createBlock(resolveDynamicComponent(node[_ctx.autoColorField]), {
            key: 2
          }))])],
          4
          /* STYLE */
        ), !_ctx.subField ? renderSlot(_ctx.$slots, "left", {
          key: 1,
          slotScope: node
        }, function() {
          return [createBaseVNode("li", _hoisted_11, [createBaseVNode(
            "span",
            _hoisted_12,
            toDisplayString(_ctx.getDate(node[_ctx.timeField]).date) + " " + toDisplayString(_ctx.getDate(node[_ctx.timeField]).time),
            1
            /* TEXT */
          ), node[_ctx.nameField] ? (openBlock(), createElementBlock(
            "span",
            _hoisted_13,
            toDisplayString(node[_ctx.nameField]),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true), node[_ctx.tipsField] ? (openBlock(), createElementBlock(
            "span",
            _hoisted_14,
            toDisplayString(node[_ctx.tipsField]),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true)])];
        }) : createCommentVNode("v-if", true), createBaseVNode(
          "li",
          {
            class: normalizeClass(["hidden sm:text-xs text-sm text-color-text-primary sm:inline-flex flex-col", _ctx.subField ? "!ml-4.5" : "!ml-3 "])
          },
          [createBaseVNode(
            "span",
            {
              class: normalizeClass(["inline-block leading-5 sm:text-xs text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[theme(spacing.56)]", {
                "mb-4": !_ctx.subField
              }])
            },
            toDisplayString(node[_ctx.nameField]),
            3
            /* TEXT, CLASS */
          ), _ctx.subField ? (openBlock(), createElementBlock(
            "span",
            _hoisted_15,
            toDisplayString(node[_ctx.tipsField]),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true)],
          2
          /* CLASS */
        ), _ctx.subField ? (openBlock(), createElementBlock(
          "li",
          {
            key: 2,
            class: normalizeClass(["sm:hidden text-xs text-color-text-primary inline-flex flex-col", _ctx.subField ? "!ml-4.5" : "!ml-3 "])
          },
          [createBaseVNode(
            "span",
            _hoisted_16,
            toDisplayString(node[_ctx.nameField]),
            1
            /* TEXT */
          ), node[_ctx.tipsField] ? (openBlock(), createElementBlock(
            "span",
            _hoisted_17,
            toDisplayString(node[_ctx.tipsField]),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true)],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true)])],
        6
        /* CLASS, STYLE */
      );
    }),
    128
    /* KEYED_FRAGMENT */
  )), _ctx.state.showData ? (openBlock(), createElementBlock("div", _hoisted_18, [createBaseVNode("div", {
    "data-tag": "tiny-timeline-status",
    class: "sm:h-3 h-3.5 cursor-pointer inline-flex text-color-brand fill-color-brand sm:text-xs text-sm",
    onClick: _cache[0] || (_cache[0] = function() {
      return _ctx.changeStatus && _ctx.changeStatus.apply(_ctx, arguments);
    })
  }, [_ctx.state.showAll ? (openBlock(), createElementBlock("span", _hoisted_19, "收起")) : (openBlock(), createElementBlock("span", _hoisted_20, "展开")), _ctx.state.showAll ? (openBlock(), createBlock(_component_icon_chevron_up, {
    key: 2,
    class: "w-3 h-3 sm:ml-2 ml-1 my-px sm:my-0"
  })) : (openBlock(), createBlock(_component_icon_chevron_down, {
    key: 3,
    class: "w-3 h-3 sm:ml-2 ml-1 my-px sm:my-0"
  }))])])) : createCommentVNode("v-if", true)]);
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
var template = function template22(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc;
  }
  if ("mobile" === (tinyMode || mode)) {
    return mobile;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst;
  }
  return pc;
};
var $constants = {
  PROCESS_DONE_CLS: "process-done",
  PROCESS_CUR_CLS: "process-current",
  PROCESS_WAIT_CLS: "process-wait",
  PROCESS_DISABLED_CLS: "process-disabled",
  PROCESS_ERROR_CLS: "process-error",
  STACK_NODES_MAX: 7,
  LIMITED_STACK_NODES: 3
};
var timelineProps = _extends({}, $props, {
  _constants: {
    type: Object,
    default: function _default2() {
      return $constants;
    }
  },
  vertical: {
    type: Boolean,
    default: false
  },
  horizontal: {
    type: Boolean,
    default: true
  },
  showNumber: {
    type: Boolean,
    default: true
  },
  nameField: {
    type: String,
    default: "name"
  },
  timeField: {
    type: String,
    default: "time"
  },
  tipsField: {
    type: String,
    default: "tips"
  },
  autoColorField: {
    type: String,
    default: "autoColor"
  },
  showIconField: {
    type: String,
    default: "showIcon"
  },
  start: {
    type: Number,
    default: 1
  },
  data: Array,
  space: {
    type: [String, Number],
    default: ""
  },
  active: {
    type: Number,
    default: -1
  },
  reverse: {
    type: Boolean,
    default: false
  },
  showStatus: {
    type: Boolean,
    default: false
  },
  subField: {
    type: Boolean,
    default: false
  },
  foldDisabled: {
    type: Boolean,
    default: false
  },
  nodeMax: {
    type: [Number, String],
    default: $constants.STACK_NODES_MAX
  },
  limitedNodes: {
    type: [Number, String],
    default: $constants.LIMITED_STACK_NODES
  },
  onlyNumber: {
    type: Boolean,
    default: false
  },
  lineWidth: {
    type: [String, Number],
    default: ""
  },
  shape: {
    type: String,
    default: "circle"
  }
});
var TimeLine = defineComponent({
  name: $prefix + "TimeLine",
  props: timelineProps,
  setup: function setup3(props2, context) {
    return $setup({
      props: props2,
      context,
      template
    });
  }
});
var version = "3.16.0";
TimeLine.install = function(Vue) {
  Vue.component(TimeLine.name, TimeLine);
};
TimeLine.version = version;
export {
  TimeLine as T
};
