import { as as merge, d as defineComponent, al as Tooltip, j as props, f as setup, l as $props, $ as $prefix, m as $setup, aH as isNull, aI as VALIDATE_STATE, aE as POSITION, Z as debounce_default, aJ as omitText, h, aK as parseVnode, an as index$4 } from "./index.js";
import { k as resolveComponent, u as openBlock, v as createElementBlock, D as renderSlot, y as createBlock, z as createCommentVNode, A as normalizeClass, P as withModifiers, l as createVNode, t as Text, H as withCtx, G as normalizeStyle, w as createBaseVNode, J as createTextVNode, E as toDisplayString, I as withDirectives, L as vShow } from "./vue.js";
import { v as validate_default } from "./index13.js";
const watchRules = ({ api: api2, props: props2, state }) => (newRules = {}, oldRules = {}) => {
  const newValidFields = Object.keys(newRules);
  const oldValidFields = Object.keys(oldRules);
  const removeValidFields = oldValidFields.filter((item) => !newValidFields.includes(item));
  api2.clearValidate(removeValidFields);
  state.fields.forEach((field) => {
    field.removeValidateEvents();
    field.addValidateEvents();
  });
  if (props2.validateOnRuleChange) {
    api2.validate(() => void 0);
  }
};
const computedAutoLabelWidth = ({ state }) => () => {
  if (!state.potentialLabelWidthArr.length) {
    return "0";
  }
  const max = Math.max(...state.potentialLabelWidthArr);
  return max ? `${max}px` : "";
};
const computedHideRequiredAsterisk = ({ props: props2, designConfig }) => () => {
  var _a, _b;
  return (_b = (_a = props2.hideRequiredAsterisk) != null ? _a : designConfig == null ? void 0 : designConfig.hideRequiredAsterisk) != null ? _b : false;
};
const computedValidateIcon$1 = ({ props: props2, designConfig }) => () => {
  var _a, _b, _c;
  return (_c = (_b = props2.validateIcon) != null ? _b : (_a = designConfig == null ? void 0 : designConfig.icons) == null ? void 0 : _a.validateIcon) != null ? _c : null;
};
const computedIsErrorInline$1 = ({ props: props2, designConfig }) => () => {
  if (props2.messageType) {
    return props2.messageType === "inline";
  }
  if (typeof props2.inlineMessage === "boolean") {
    return props2.inlineMessage;
  }
  return (designConfig == null ? void 0 : designConfig.messageType) === "inline" || false;
};
const computedIsErrorBlock$1 = ({ props: props2, designConfig }) => () => {
  if (props2.messageType) {
    return props2.messageType === "block";
  }
  return (designConfig == null ? void 0 : designConfig.messageType) === "block" || false;
};
const created = ({ parent, state }) => () => {
  parent.$on("form:addField", (field) => {
    if (field) {
      state.fields.push(field);
    }
  });
  parent.$on("form:removeField", (field) => {
    if (field.prop) {
      state.fields.splice(state.fields.indexOf(field), 1);
    }
  });
};
const resetFields = ({ props: props2, state }) => () => {
  if (!props2.model) {
    return;
  }
  state.fields.forEach((field) => {
    field.resetField();
  });
};
const updateTip$1 = ({ props: props2, state }) => () => {
  if (!props2.model) {
    return;
  }
  state.fields.forEach((field) => {
    field.updateTip();
  });
};
const clearValidate$1 = (state) => (props2 = []) => {
  let fields;
  if (props2.length) {
    fields = typeof props2 === "string" ? state.fields.filter((field) => props2 === field.prop) : state.fields.filter((field) => field.prop && props2.includes(field.prop));
  } else {
    fields = state.fields;
  }
  fields.forEach((field) => {
    field.clearValidate();
  });
};
const validate$1 = ({ props: props2, state }) => (callback) => {
  if (!props2.model) {
    return;
  }
  let promise;
  if (typeof callback !== "function" && window.Promise) {
    promise = new window.Promise((resolve, reject) => {
      callback = (valid2) => {
        valid2 ? resolve(valid2) : reject(valid2);
      };
    });
  }
  let valid = true;
  let count = 0;
  if (state.fields.length === 0 && callback) {
    callback(true);
  }
  let invalidFields = {};
  state.fields.forEach((field) => {
    field.validate("", (message, field2) => {
      if (message) {
        valid = false;
      }
      invalidFields = merge({}, invalidFields, field2);
      if (typeof callback === "function" && ++count === state.fields.length) {
        callback(valid, invalidFields);
      }
    });
  });
  if (promise) {
    return promise;
  }
};
const validateField = (state) => (props2, cb) => {
  props2 = [].concat(props2);
  const fields = state.fields.filter((field) => props2.includes(field.prop));
  if (!fields.length) {
    return;
  }
  fields.forEach((field) => {
    field.validate("", cb);
  });
};
const getLabelWidthIndex = (state) => (width) => {
  const index2 = state.potentialLabelWidthArr.indexOf(width);
  if (index2 === -1) {
    throw new Error("unpected width ", width);
  }
  return index2;
};
const registerLabelWidth = ({ api: api2, state }) => (val, oldVal) => {
  if (val && oldVal) {
    const index2 = api2.getLabelWidthIndex(oldVal);
    state.potentialLabelWidthArr.splice(index2, 1, val);
  } else if (val) {
    state.potentialLabelWidthArr.push(val);
  }
};
const deregisterLabelWidth = ({ api: api2, state }) => (val) => {
  const index2 = api2.getLabelWidthIndex(val);
  state.potentialLabelWidthArr.splice(index2, 1);
};
const bindDialogEvent = ({ api: api2, dialog, state }) => {
  let unbindDialogEvent = () => {
  };
  if (dialog) {
    const boxCloseHandler = (isFormReset = true) => {
      isFormReset ? api2.resetFields() : api2.clearValidate();
    };
    const boxDragHandler = () => {
      if (!state.timer) {
        state.timer = window.setTimeout(() => {
          state.timer = 0;
          api2.updateTip();
        }, 10);
      }
    };
    dialog.state.emitter.on("boxclose", boxCloseHandler);
    dialog.state.emitter.on("boxdrag", boxDragHandler);
    unbindDialogEvent = () => {
      dialog.state.emitter.off("boxclose", boxCloseHandler);
      dialog.state.emitter.off("boxdrag", boxDragHandler);
    };
  }
  return unbindDialogEvent;
};
const showTooltip = ({ vm, state }) => (dom, val) => {
  const tooltip = vm.$refs.tooltip;
  tooltip.state.referenceElm = dom;
  tooltip.state.popperElm && (tooltip.state.popperElm.style.display = "none");
  tooltip.doDestroy();
  state.tooltipVisible = true;
  state.displayedValue = val;
  setTimeout(tooltip.updatePopper, 20);
};
const hideTooltip = ({ state }) => () => {
  state.tooltipVisible = false;
};
const api$1 = [
  "state",
  "resetFields",
  "clearValidate",
  "validate",
  "validateField",
  "getLabelWidthIndex",
  "registerLabelWidth",
  "deregisterLabelWidth",
  "updateTip",
  "showTooltip",
  "hideTooltip"
];
const renderless$1 = (props2, { computed, inject, provide: provide2, reactive, watch, onBeforeUnmount }, { vm, parent, designConfig }) => {
  const api2 = {};
  const dialog = inject("dialog", null);
  const state = reactive({
    showAutoWidth: props2.showAutoWidth,
    fields: [],
    timer: 0,
    tooltipVisible: false,
    displayedValue: "",
    potentialLabelWidthArr: [],
    autoLabelWidth: computed(() => api2.computedAutoLabelWidth()),
    hideRequiredAsterisk: computed(() => api2.computedHideRequiredAsterisk()),
    validateIcon: computed(() => api2.computedValidateIcon()),
    isErrorInline: computed(() => api2.computedIsErrorInline()),
    isErrorBlock: computed(() => api2.computedIsErrorBlock()),
    isDisplayOnly: computed(() => props2.displayOnly),
    hasRequired: computed(() => {
      if (props2.rules) {
        return Object.values(props2.rules).find((ruleOrRules) => {
          if (Array.isArray(ruleOrRules)) {
            return ruleOrRules.some((r) => r.required);
          } else {
            return ruleOrRules.required;
          }
        });
      } else {
        return false;
      }
    }),
    labelWidth: computed(() => {
      var _a;
      return props2.labelWidth || ((_a = designConfig == null ? void 0 : designConfig.state) == null ? void 0 : _a.labelWidth) || "80px";
    }),
    tooltipType: computed(() => {
      var _a;
      return ((_a = designConfig == null ? void 0 : designConfig.state) == null ? void 0 : _a.tooltipType) || "normal";
    })
  });
  Object.assign(api2, {
    state,
    updateTip: updateTip$1({ props: props2, state }),
    computedAutoLabelWidth: computedAutoLabelWidth({ state }),
    computedHideRequiredAsterisk: computedHideRequiredAsterisk({ props: props2, designConfig }),
    computedValidateIcon: computedValidateIcon$1({ props: props2, designConfig }),
    computedIsErrorInline: computedIsErrorInline$1({ props: props2, designConfig }),
    computedIsErrorBlock: computedIsErrorBlock$1({ props: props2, designConfig }),
    created: created({ parent, state }),
    resetFields: resetFields({ props: props2, state }),
    clearValidate: clearValidate$1(state),
    validate: validate$1({ props: props2, state }),
    validateField: validateField(state),
    getLabelWidthIndex: getLabelWidthIndex(state),
    registerLabelWidth: registerLabelWidth({ api: api2, state }),
    deregisterLabelWidth: deregisterLabelWidth({ api: api2, state }),
    watchRules: watchRules({ api: api2, props: props2, state }),
    showTooltip: showTooltip({ vm, state }),
    hideTooltip: hideTooltip({ state })
  });
  api2.created();
  provide2("form", parent);
  provide2("showAutoWidth", state.showAutoWidth);
  const unbindDialogEvent = bindDialogEvent({ api: api2, dialog, state });
  onBeforeUnmount(unbindDialogEvent);
  watch(() => props2.rules, api2.watchRules);
  return api2;
};
const index$3 = "";
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
var _export_sfc$3 = function _export_sfc2(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$3(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$4 = /* @__PURE__ */ defineComponent({
  components: {
    TinyTooltip: Tooltip
  },
  props: [].concat(props, ["validateOnRuleChange", "hideRequiredAsterisk", "model", "rules", "inlineMessage", "messageType", "statusIcon", "labelPosition", "labelAlign", "showMessage", "size", "disabled", "labelWidth", "contentOffset", "labelSuffix", "inline", "responsiveLayout", "validateType", "validateIcon", "manual", "appendToBody", "popperOptions", "displayOnly", "showAutoWidth", "showEmptyValue", "validateTag", "overflowTitle"]),
  setup: function setup$1(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
function _sfc_render$3(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_tooltip = resolveComponent("tiny-tooltip");
  return openBlock(), createElementBlock(
    "form",
    {
      class: normalizeClass(["tiny-form", [_ctx.labelPosition ? "tiny-form--label-" + _ctx.labelPosition : "", {
        "tiny-form--inline": _ctx.inline
      }, {
        "label-align": _ctx.labelAlign
      }, {
        "has-required": _ctx.state.hasRequired
      }, {
        "asterisk-form": _ctx.labelPosition === "top" && !_ctx.state.hideRequiredAsterisk
      }, {
        "is-display-only": _ctx.state.isDisplayOnly
      }]]),
      onSubmit: _cache[1] || (_cache[1] = withModifiers(function() {
      }, ["prevent"]))
    },
    [renderSlot(_ctx.$slots, "default"), _ctx.overflowTitle ? (openBlock(), createBlock(_component_tiny_tooltip, {
      key: 0,
      ref: "tooltip",
      modelValue: _ctx.state.tooltipVisible,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
        return _ctx.state.tooltipVisible = $event;
      }),
      manual: true,
      effect: "light",
      content: _ctx.state.displayedValue,
      placement: "top"
    }, null, 8, ["modelValue", "content"])) : createCommentVNode("v-if", true)],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
var pc = /* @__PURE__ */ _export_sfc$3(_sfc_main$4, [["render", _sfc_render$3]]);
const index$1 = "";
const index = "";
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
var _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: [].concat(props, ["validatePosition", "validateOnRuleChange", "hideRequiredAsterisk", "model", "rules", "inlineMessage", "messageType", "statusIcon", "labelPosition", "labelAlign", "showMessage", "size", "disabled", "labelWidth", "contentOffset", "labelSuffix", "inline", "responsiveLayout", "validateType", "validateIcon", "manual"]),
  setup: function setup$12(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
function _sfc_render$2(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock(
    "form",
    {
      class: normalizeClass(["tiny-mobile-form", [_ctx.labelPosition ? "tiny-mobile-form--label-" + _ctx.labelPosition : "", {
        "tiny-mobile-form--inline": _ctx.inline
      }, {
        "label-align": _ctx.labelAlign
      }]]),
      onSubmit: _cache[0] || (_cache[0] = withModifiers(function() {
      }, ["prevent"]))
    },
    [renderSlot(_ctx.$slots, "default")],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
var mobile = /* @__PURE__ */ _export_sfc$2(_sfc_main$3, [["render", _sfc_render$2]]);
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
var _sfc_main$2 = defineComponent({
  components: {
    TinyTooltip: Tooltip
  },
  provide: function provide() {
    return {
      TinyMode: "mobile-first"
    };
  },
  props: [].concat(props, ["validateOnRuleChange", "hideRequiredAsterisk", "model", "rules", "inlineMessage", "messageType", "statusIcon", "labelPosition", "showMessage", "size", "disabled", "labelWidth", "contentOffset", "labelSuffix", "inline", "responsiveLayout", "validateType", "validateIcon", "manual", "appendToBody", "popperOptions", "displayOnly", "showEmptyValue"]),
  setup: function setup$13(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
function _sfc_render$1(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_tooltip = resolveComponent("tiny-tooltip");
  return openBlock(), createElementBlock(
    "form",
    {
      "data-tag": "tiny-form",
      class: normalizeClass(["w-full overflow-hidden", {
        "overflow-x-visible": _ctx.labelPosition === "top" && !_ctx.hideRequiredAsterisk,
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": _ctx.inline
      }]),
      onSubmit: _cache[1] || (_cache[1] = withModifiers(function() {
      }, ["prevent"]))
    },
    [renderSlot(_ctx.$slots, "default"), _ctx.displayOnly ? (openBlock(), createBlock(_component_tiny_tooltip, {
      key: 0,
      ref: "tooltip",
      modelValue: _ctx.state.tooltipVisible,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
        return _ctx.state.tooltipVisible = $event;
      }),
      "popper-class": "absolute",
      manual: true,
      effect: "light",
      content: _ctx.state.displayedValue,
      placement: "top"
    }, null, 8, ["modelValue", "content"])) : createCommentVNode("v-if", true)],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
var mobileFirst$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["render", _sfc_render$1]]);
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
var template$1 = function template2(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc;
  }
  if ("mobile" === (tinyMode || mode)) {
    return mobile;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$1;
  }
  return pc;
};
var formProps = _extends$4({}, $props, {
  model: Object,
  rules: Object,
  inlineMessage: {
    type: Boolean,
    default: void 0
  },
  messageType: String,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: true
  },
  validatePosition: {
    type: String,
    default: "right"
  },
  size: String,
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: void 0
  },
  labelPosition: {
    type: String,
    default: "right",
    validator: function validator(value) {
      return ["left", "top", "right"].includes(value);
    }
  },
  labelWidth: {
    type: String,
    // 默认值挪到design中
    default: ""
  },
  labelAlign: {
    type: Boolean,
    default: false
  },
  contentOffset: Number,
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: {
    type: Boolean,
    default: false
  },
  responsiveLayout: {
    type: Boolean,
    default: false
  },
  validateType: {
    type: String,
    default: "tip",
    validator: function validator2(value) {
      return Boolean(~["tip", "text"].indexOf(value));
    }
  },
  validateIcon: Object,
  manual: {
    type: Boolean,
    default: false
  },
  appendToBody: {
    type: Boolean,
    default: void 0
  },
  popperOptions: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  showAutoWidth: {
    type: Boolean,
    default: false
  },
  showEmptyValue: {
    type: Boolean,
    default: true
  },
  validateTag: {
    type: Boolean,
    default: false
  },
  overflowTitle: {
    type: Boolean,
    default: false
  }
});
var Form = defineComponent({
  name: $prefix + "Form",
  componentName: "Form",
  props: formProps,
  setup: function setup2(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$1
    });
  }
});
var version = "3.16.0";
Form.install = function(Vue) {
  Vue.component(Form.name, Form);
};
Form.version = version;
const watchError = (state) => (value) => {
  if (!isNull(value) && state.getValidateType === "tip") {
    state.canShowTip = true;
  }
  state.validateMessage = value;
  state.validateState = value ? VALIDATE_STATE.Error : "";
};
const watchValidateStatus = (state) => (value) => {
  state.validateState = value;
};
const computedGetValidateType = ({ props: props2, state }) => () => props2.validateType || (state.formInstance ? state.formInstance.validateType : "");
const computedValidateIcon = ({ props: props2, state }) => () => {
  var _a, _b, _c, _d;
  return (_d = (_c = props2.validateIcon) != null ? _c : (_b = (_a = state == null ? void 0 : state.formInstance) == null ? void 0 : _a.state) == null ? void 0 : _b.validateIcon) != null ? _d : null;
};
const computedIsErrorInline = ({ props: props2, state }) => () => {
  var _a, _b, _c;
  if (props2.messageType) {
    return props2.messageType === "inline";
  }
  if (typeof props2.inlineMessage === "boolean") {
    return props2.inlineMessage;
  }
  return (_c = (_b = (_a = state == null ? void 0 : state.formInstance) == null ? void 0 : _a.state) == null ? void 0 : _b.isErrorInline) != null ? _c : false;
};
const computedIsErrorBlock = ({ props: props2, state }) => () => {
  var _a, _b, _c;
  if (props2.messageType) {
    return props2.messageType === "block";
  }
  return (_c = (_b = (_a = state == null ? void 0 : state.formInstance) == null ? void 0 : _a.state) == null ? void 0 : _b.isErrorBlock) != null ? _c : false;
};
const computedLabelStyle = ({ props: props2, state }) => () => {
  const result = { width: "" };
  if (state.form.labelPosition === POSITION.Top) {
    return result;
  }
  const labelWidth = props2.labelWidth || state.form.state.labelWidth;
  if (labelWidth) {
    result.width = labelWidth;
  }
  return result;
};
const computedValueStyle = ({ props: props2, state }) => () => {
  const result = { width: "" };
  if (state.form.labelPosition === POSITION.Top) {
    result.width = "100%";
    return result;
  }
  const labelWidth = props2.labelWidth || state.form.state.labelWidth;
  if (labelWidth) {
    if (labelWidth === "auto") {
      result.width = labelWidth;
    } else {
      result.width = `calc(100% - ${labelWidth})`;
    }
  }
  return result;
};
const computedContentStyle = ({ props: props2, state }) => () => {
  const result = {};
  const label = props2.label;
  if (state.form.labelPosition === POSITION.Top || state.form.inline) {
    return result;
  }
  if (!label && !props2.labelWidth && state.isNested) {
    return result;
  }
  const labelWidth = props2.labelWidth || state.form.state.labelWidth;
  if (labelWidth === "auto") {
    if (props2.labelWidth === "auto") {
      result.marginLeft = state.computedLabelWidth;
    } else if (state.form.state.labelWidth === "auto") {
      result.marginLeft = state.formInstance.state.autoLabelWidth;
    }
  } else {
    result.marginLeft = labelWidth;
  }
  return result;
};
const computedForm = ({ constants, vm, state }) => () => {
  var _a, _b, _c;
  const { FORM_NAME, FORM_ITEM_NAME } = constants;
  let parent = (_a = vm.$parent) == null ? void 0 : _a.$parent;
  let parentName = (_b = parent == null ? void 0 : parent.$options) == null ? void 0 : _b.componentName;
  while (parent && parentName !== FORM_NAME) {
    if (parentName === FORM_ITEM_NAME) {
      state.isNested = true;
    }
    parent = parent == null ? void 0 : parent.$parent;
    parentName = (_c = parent == null ? void 0 : parent.$options) == null ? void 0 : _c.componentName;
  }
  return parent;
};
const computedIsRequired = ({ api: api2, state }) => () => {
  if (state.validationRequired) {
    return true;
  }
  let rules = api2.getRules();
  let isRequired = false;
  if (rules && rules.length) {
    rules.every((rule) => {
      if (rule.required) {
        isRequired = true;
        return false;
      }
      return true;
    });
  }
  return isRequired;
};
const getPropByPath = (obj, path, strict) => {
  let findObj = obj;
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");
  let index2 = 0;
  let keys = path.split(".");
  for (let len = keys.length; index2 < len - 1; ++index2) {
    if (!findObj && !strict) {
      break;
    }
    let key = keys[index2];
    if (findObj && key in findObj) {
      findObj = findObj[key];
    } else {
      if (strict) {
        throw new Error("[Tiny Form] please transfer a valid prop path to form item!");
      }
      break;
    }
  }
  return {
    o: findObj,
    k: keys[index2],
    v: findObj ? findObj[keys[index2]] : null
  };
};
const computedFieldValue = ({ props: props2, state }) => () => {
  const model = state.form.model;
  if (!model || !props2.prop) {
    return;
  }
  let path = props2.prop;
  if (path.includes(":")) {
    path = path.replace(/:/, ".");
  }
  return getPropByPath(model, path, true).v;
};
const mounted = ({ api: api2, vm, props: props2, state }) => () => {
  state.tooltip = vm.$refs.tooltip;
  if (props2.prop) {
    api2.dispatch("Form", "form:addField", vm);
    let initialValue = state.fieldValue;
    if (Array.isArray(initialValue)) {
      initialValue = [].concat(initialValue);
    }
    state.initialValue = initialValue;
    api2.addValidateEvents();
  }
};
const unmounted = ({ api: api2, vm, state }) => () => {
  state.canShowTip = false;
  api2.dispatch("Form", "form:removeField", vm);
};
const validate = ({ api: api2, props: props2, state, t }) => (trigger, callback = () => void 0) => {
  state.validateDisabled = false;
  const rules = api2.getFilteredRule(trigger);
  if ((!rules || rules.length === 0) && props2.required === void 0 || props2.validateDisabled) {
    callback();
    return;
  }
  state.validateState = VALIDATE_STATE.Validating;
  const descriptor = {};
  if (rules && rules.length > 0) {
    rules.forEach((rule) => {
      delete rule.trigger;
    });
  }
  descriptor[props2.prop || ""] = rules;
  const validator3 = new validate_default(descriptor, t);
  const model = {};
  model[props2.prop || ""] = state.fieldValue;
  validator3.validate(model, { firstFields: true }, (errors, invalidFields) => {
    api2.clearValidate();
    const handlerError = () => {
      state.validateState = !errors ? VALIDATE_STATE.Success : VALIDATE_STATE.Error;
      if (errors && props2.error) {
        errors[0].message = props2.error;
      }
      state.validateMessage = errors ? errors[0].message : "";
      state.canShowTip = Boolean(errors);
      callback(state.validateMessage, invalidFields);
      state.formInstance && state.formInstance.$emit("validate", props2.prop, !errors, state.validateMessage || null);
    };
    handlerError();
  });
};
const clearValidate = (state) => () => {
  state.validateState = "";
  state.validateMessage = "";
  state.validateDisabled = false;
};
const resetField = ({ api: api2, nextTick, props: props2, state }) => () => {
  if (state.getValidateType === "tip") {
    state.canShowTip = false;
  }
  state.validateState = "";
  state.validateMessage = "";
  let model = state.form.model || {};
  let value = state.fieldValue;
  let path = props2.prop || "";
  if (path && path.includes(":")) {
    path = path.replace(/:/, ".");
  }
  let prop = getPropByPath(model, path, true);
  state.validateDisabled = true;
  if (Array.isArray(value)) {
    prop.o[prop.k] = [].concat(state.initialValue);
  } else {
    prop.o[prop.k] = state.initialValue;
  }
  nextTick(() => {
    state.validateDisabled = false;
  });
  setTimeout(() => state.validateState && (state.validateState = ""));
  api2.broadcast("timeSelect", "fieldReset", state.initialValue);
};
const getRules = ({ props: props2, state }) => () => {
  let formRules = state.form.rules || {};
  const selfRules = props2.rules;
  const requiredRule = props2.required !== void 0 ? { required: Boolean(props2.required) } : [];
  const prop = getPropByPath(formRules, props2.prop || "");
  formRules = formRules ? prop.o[props2.prop || ""] || prop.v : [];
  return [].concat(selfRules || formRules || []).concat(requiredRule);
};
const getFilteredRule = (api2) => (trigger) => {
  const rules = api2.getRules();
  return rules.filter((rule) => {
    if (!rule.trigger || trigger === "") {
      return true;
    }
    if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger);
    }
    return rule.trigger === trigger;
  }).map((rule) => merge({}, rule));
};
const onFieldBlur = (api2) => () => {
  api2.validate("blur");
};
const onFieldChange = ({ api: api2, state }) => () => {
  if (state.validateDisabled) {
    state.validateDisabled = false;
    return;
  }
  api2.validate("change");
};
const updateComputedLabelWidth = (state) => (width) => {
  state.computedLabelWidth = width ? `${width}px` : "";
};
const addValidateEvents = ({ api: api2, vm, props: props2, state }) => () => {
  const rules = api2.getRules();
  if (rules.length || props2.required !== void 0) {
    const manual = props2.manual || (state.formInstance ? state.formInstance.manual : false);
    if (!manual) {
      vm.$on("form.blur", api2.onFieldBlur);
      vm.$on("form.change", api2.onFieldChange);
    }
  }
};
const removeValidateEvents = (vm) => () => {
  vm.$off();
};
const updateTip = ({ vm, state }) => () => {
  if (state.getValidateType !== "tip" && !state.canShowTip) {
    return;
  }
  const tooltip = vm.$refs.tooltip;
  if (!tooltip) {
    return;
  }
  tooltip.updatePopper();
};
const wrapValidate = ({
  validateFunc,
  props: props2
}) => {
  if (props2.validateDebounce) {
    return debounce_default(500, validateFunc);
  } else {
    return validateFunc;
  }
};
const handleMouseenter = ({ state }) => (e) => {
  if (!state.isDisplayOnly || !state.typeName || !state.form)
    return;
  const dom = e.target;
  const text = dom.textContent;
  const font = window.getComputedStyle(dom).font;
  const rect = dom.getBoundingClientRect();
  let res = {};
  let overHeight = false;
  if (["text", "password", "number"].includes(state.typeName)) {
    res = omitText(text, font, rect.width);
  }
  if (state.typeName === "textarea" && dom && dom.scrollHeight > dom.offsetHeight) {
    overHeight = true;
  }
  if (res.o || overHeight) {
    state.form.showTooltip(dom, state.displayedValue);
  }
};
const handleLabelMouseenter = ({ props: props2, state, slots }) => (e) => {
  if (!state.form.overflowTitle || !state.form || slots.label)
    return;
  const label = e.target;
  if (label && label.scrollWidth > label.offsetWidth) {
    state.form.showTooltip(label, props2.label + state.form.labelSuffix);
  }
};
const handleMouseleave = (state) => () => {
  state.form && state.form.hideTooltip();
};
const getDisplayedValue = ({ state }) => (param) => {
  if (!state.formInstance.displayOnly)
    return;
  state.typeName = param.type;
  state.isBasicComp = true;
  state.displayedValue = param.val;
};
const clearDisplayedValue = ({ state }) => () => {
  state.typeName = "";
  state.isBasicComp = false;
  state.displayedValue = "";
};
const api = [
  "state",
  "validate",
  "clearValidate",
  "resetField",
  "getRules",
  "getFilteredRule",
  "onFieldBlur",
  "onFieldChange",
  "updateComputedLabelWidth",
  "addValidateEvents",
  "removeValidateEvents",
  "updateTip",
  "getDisplayedValue",
  "handleLabelMouseenter",
  "handleMouseenter",
  "handleMouseleave"
];
const initState = ({
  reactive,
  computed,
  api: api2,
  mode,
  inject,
  props: props2
}) => {
  const state = reactive({
    mode,
    validateState: "",
    validateMessage: "",
    validateDisabled: false,
    validator: {},
    isNested: false,
    computedLabelWidth: "",
    initialValue: null,
    canShowTip: false,
    // 兼容 2.0 validation 的 required
    validationRequired: false,
    validateType: "text",
    tooltip: "",
    displayedValue: "",
    isBasicComp: false,
    showTooltip: false,
    typeName: "",
    formInstance: inject("form"),
    labelFor: computed(() => props2.for || props2.prop || ""),
    labelStyle: computed(() => api2.computedLabelStyle()),
    valueStyle: computed(() => api2.computedValueStyle()),
    contentStyle: computed(() => api2.computedContentStyle()),
    form: computed(() => api2.computedForm()),
    fieldValue: computed(() => api2.computedFieldValue()),
    isRequired: computed(() => api2.computedIsRequired()),
    formInline: computed(() => state.formInstance.inline),
    formSize: computed(() => state.formInstance.size),
    formItemSize: computed(() => props2.size || state.formSize),
    isDisplayOnly: computed(() => state.formInstance.displayOnly),
    labelPosition: computed(() => state.formInstance.labelPosition),
    hideRequiredAsterisk: computed(() => state.formInstance.state.hideRequiredAsterisk),
    labelSuffix: computed(() => state.formInstance.labelSuffix),
    labelWidth: computed(() => state.formInstance.labelWidth),
    showMessage: computed(() => state.formInstance.showMessage),
    sizeClass: computed(() => state.formItemSize),
    getValidateType: computed(() => api2.computedGetValidateType()),
    validateIcon: computed(() => api2.computedValidateIcon()),
    isErrorInline: computed(() => api2.computedIsErrorInline()),
    isErrorBlock: computed(() => api2.computedIsErrorBlock()),
    disabled: computed(() => state.formInstance.disabled),
    tooltipType: computed(() => state.formInstance.state.tooltipType)
  });
  return state;
};
const initApi = ({ api: api2, state, dispatch, broadcast, props: props2, constants, vm, t, nextTick, slots }) => {
  Object.assign(api2, {
    state,
    dispatch,
    broadcast,
    watchError: watchError(state),
    updateTip: updateTip({ vm, state }),
    watchValidateStatus: watchValidateStatus(state),
    computedLabelStyle: computedLabelStyle({ props: props2, state }),
    computedValueStyle: computedValueStyle({ props: props2, state }),
    computedContentStyle: computedContentStyle({ props: props2, state }),
    computedForm: computedForm({ constants, vm, state }),
    computedFieldValue: computedFieldValue({ props: props2, state }),
    computedGetValidateType: computedGetValidateType({ props: props2, state }),
    computedValidateIcon: computedValidateIcon({ props: props2, state }),
    computedIsErrorInline: computedIsErrorInline({ props: props2, state }),
    computedIsErrorBlock: computedIsErrorBlock({ props: props2, state }),
    clearValidate: clearValidate(state),
    getRules: getRules({ props: props2, state }),
    updateComputedLabelWidth: updateComputedLabelWidth(state),
    removeValidateEvents: removeValidateEvents(vm),
    unmounted: unmounted({ api: api2, vm, state }),
    mounted: mounted({ api: api2, vm, props: props2, state }),
    computedIsRequired: computedIsRequired({ api: api2, state }),
    resetField: resetField({ api: api2, nextTick, props: props2, state }),
    getFilteredRule: getFilteredRule(api2),
    onFieldBlur: onFieldBlur(api2),
    onFieldChange: onFieldChange({ api: api2, state }),
    addValidateEvents: addValidateEvents({ api: api2, vm, props: props2, state }),
    validate: wrapValidate({ validateFunc: validate({ api: api2, props: props2, state, t }), props: props2 }),
    getDisplayedValue: getDisplayedValue({ state }),
    clearDisplayedValue: clearDisplayedValue({ state }),
    handleLabelMouseenter: handleLabelMouseenter({ props: props2, state, slots }),
    handleMouseenter: handleMouseenter({ state }),
    handleMouseleave: handleMouseleave(state)
  });
};
const initWatch = ({ watch, api: api2, props: props2, state }) => {
  watch(() => props2.error, api2.watchError, { immediate: true });
  watch(() => props2.validateStatus, api2.watchValidateStatus);
  watch(() => state.formInstance.displayOnly, api2.clearDisplayedValue);
};
const renderless = (props2, { computed, inject, onMounted, onUnmounted, provide: provide2, reactive, watch }, { vm, constants, t, nextTick, broadcast, dispatch, mode, slots }) => {
  const api2 = {};
  const state = initState({ reactive, computed, api: api2, mode, inject, props: props2 });
  provide2("formItem", vm);
  initApi({ api: api2, state, dispatch, broadcast, props: props2, constants, vm, t, nextTick, slots });
  initWatch({ watch, api: api2, props: props2, state });
  onMounted(api2.mounted);
  vm.$on("displayed-value-changed", (param) => {
    api2.getDisplayedValue(param);
  });
  onUnmounted(api2.unmounted);
  return api2;
};
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
var labelWrap = defineComponent({
  props: _extends$3({}, $props, {
    isAutoWidth: Boolean,
    updateAll: Boolean,
    isMobile: Boolean,
    isMobileFirst: Boolean
  }),
  inject: ["form", "formItem"],
  render: function render() {
    var slotsDefault = this.slots.default && this.slots.default();
    var classPrefix = this.isMobile ? "tiny-mobile-" : "tiny-";
    if (!slotsDefault)
      return null;
    if (this.isAutoWidth) {
      var autoLabelWidth = this.form.autoLabelWidth;
      var style = {};
      if (autoLabelWidth && autoLabelWidth !== "auto") {
        var marginLeft = parseInt(autoLabelWidth, 10) - this.computedWidth;
        if (marginLeft) {
          style.marginLeft = marginLeft + "px";
        }
      }
      return h("div", {
        class: this.isMobileFirst ? "float-left" : classPrefix + "form-item_label-wrap",
        style
      }, slotsDefault);
    } else {
      return slotsDefault[0];
    }
  },
  methods: {
    getLabelWidth: function getLabelWidth() {
      var computedStylWidth = function computedStylWidth2(elem) {
        return window.getComputedStyle(elem).width;
      };
      var ceilFloat = function ceilFloat2(f) {
        return Math.ceil(parseFloat(f));
      };
      return !this.$el || !this.$el.firstElementChild ? 0 : ceilFloat(computedStylWidth(this.$el.firstElementChild));
    },
    updateLabelWidth: function updateLabelWidth(action) {
      var _this = this;
      if (action === void 0) {
        action = "update";
      }
      if (!this.$slots.default || !this.isAutoWidth || !this.$el.firstElementChild) {
        return;
      }
      var setComputedWidth = function setComputedWidth2() {
        return _this.computedWidth = _this.getLabelWidth();
      };
      var deregisterFormLabelWidth = function deregisterFormLabelWidth2() {
        return _this.form.deregisterLabelWidth(_this.computedWidth);
      };
      if (action === "update") {
        setComputedWidth();
      } else if (action === "remove") {
        deregisterFormLabelWidth();
      }
    }
  },
  watch: {
    computedWidth: function computedWidth(val, oldVal) {
      if (this.updateAll) {
        this.form.registerLabelWidth(val, oldVal);
        this.formItem.updateComputedLabelWidth(val);
      }
    }
  },
  setup: function setup$14(props2, context) {
    var renderless2 = function renderless22(props22, _ref, _ref2) {
      var onMounted = _ref.onMounted, onUpdated = _ref.onUpdated, onBeforeUnmount = _ref.onBeforeUnmount;
      var vm = _ref2.vm;
      onMounted(function() {
        return vm.updateLabelWidth("update");
      });
      onUpdated(function() {
        return vm.updateLabelWidth("update");
      });
      onBeforeUnmount(function() {
        return vm.updateLabelWidth("remove");
      });
      return {
        computedWidth: 0
      };
    };
    var api2 = ["computedWidth"];
    return setup({
      props: props2,
      context,
      renderless: renderless2,
      api: api2
    });
  }
});
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
var $constants$2 = {
  FORM_NAME: "Form",
  FORM_ITEM_NAME: "FormItem"
};
var _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: $prefix + "FormItem",
  componentName: "FormItem",
  components: {
    LabelWrap: labelWrap,
    Tooltip
  },
  props: _extends$2({}, $props, {
    _constants: {
      type: Object,
      default: function _default2() {
        return $constants$2;
      }
    },
    appendToBody: {
      type: Boolean,
      default: void 0
    },
    error: String,
    for: String,
    inlineMessage: {
      type: Boolean,
      default: void 0
    },
    messageType: String,
    label: String,
    labelWidth: String,
    manual: Boolean,
    popperOptions: {
      type: Object,
      default: function _default22() {
        return {};
      }
    },
    prop: String,
    required: {
      type: Boolean,
      default: void 0
    },
    rules: [Object, Array],
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    validateDisabled: Boolean,
    validateDebounce: Boolean,
    validatePosition: String,
    validateStatus: String,
    validateType: String,
    validateIcon: {
      type: Object,
      default: null
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    extra: String
  }),
  setup: function setup$15(props2, context) {
    return setup({
      props: props2,
      context,
      renderless,
      api
    });
  },
  render: function render2() {
    var _this = this, _class, _class2, _class3, _class4, _class5;
    var state = this.state, required = this.required, slots = this.slots, label = this.label, scopedSlots = this.scopedSlots, showMessage = this.showMessage;
    this.inlineMessage;
    var ellipsis = this.ellipsis, vertical = this.vertical, handleLabelMouseenter2 = this.handleLabelMouseenter, handleMouseleave2 = this.handleMouseleave;
    var validateIcon = state.validateIcon, isErrorInline = state.isErrorInline, isErrorBlock = state.isErrorBlock, tooltipType = state.tooltipType;
    var isMobile = state.mode === "mobile";
    var classPrefix = isMobile ? "tiny-mobile-" : "tiny-";
    var labelSlot = slots.label ? slots.label() : null;
    var defaultSlots = slots.default ? slots.default() : null;
    var errorSlot = scopedSlots.error && scopedSlots.error(state.validateMessage);
    var formItemClass = classPrefix + "form-item--" + (state.sizeClass ? state.sizeClass : "default");
    var isShowError = state.validateState === "error" && showMessage && state.form.showMessage;
    state.formInstance && state.formInstance.validateTag;
    var validateMessage;
    var ItemContent = defaultSlots ? defaultSlots.map(function(vnode) {
      var item = parseVnode(vnode);
      item.props = item.props || {};
      var type = item.type;
      Object.assign(item.props, {
        size: state.formItemSize,
        mini: state.formItemSize === "mini"
      });
      if (type && type.name && type.name.toLowerCase().endsWith("button")) {
        return item;
      }
      var propsData = item.props;
      if (propsData) {
        if (!state.isRequired) {
          state.validationRequired = propsData.validation && !!propsData.validation.required;
        }
        if (propsData.validation) {
          return item;
        }
      }
      if (isMobile) {
        return h("div", {
          class: classPrefix + "form-item__value",
          style: state.valueStyle
        }, [item]);
      }
      return item;
    }) : null;
    var getFormItemContnet = function getFormItemContnet2() {
      if (isMobile) {
        var _validatePosition = _this.validatePosition || state.formInstance.validatePosition || "right";
        validateMessage = state.validateMessage ? _validatePosition === "right" ? createVNode("div", {
          "class": "tiny-mobile-input-form__error align-right"
        }, [state.validateMessage]) : createVNode("div", {
          "class": "tiny-mobile-input-form__error align-left"
        }, [state.validateMessage]) : null;
        return ItemContent;
      }
      var tooltipTriggerContent = ItemContent.length > 1 ? h("div", {
        class: "tiny-form-item__content-muti-children"
      }, ItemContent) : ItemContent[0];
      if (!_this.showMessage) {
        return tooltipTriggerContent;
      }
      var formAppendToBody = state.formInstance && state.formInstance.appendToBody;
      var appendToBody = typeof _this.appendToBody === "boolean" ? _this.appendToBody : typeof formAppendToBody === "boolean" ? formAppendToBody : true;
      var validatePosition = _this.validatePosition || state.formInstance && state.formInstance.validatePosition || "top-end";
      var popperOptions = _extends$2({}, state.formInstance.popperOptions, _this.popperOptions, {
        forceAbsolute: !appendToBody,
        onUpdate: function onUpdate(options) {
          var popper = options.instance._popper;
          var translate3d = popper.style.transform;
          var matchTranslate = translate3d.match(/translate3d\((\w+)px, (\w+)px, (\w+)px\)/);
          if (!Array.isArray(matchTranslate)) {
            return;
          }
          var _matchTranslate$slice = matchTranslate.slice(1), x = _matchTranslate$slice[0], y = _matchTranslate$slice[1], z = _matchTranslate$slice[2];
          popper.style.transform = "translate3d(" + x + "px, " + parseInt(y, 10) + "px, " + z + "px)";
        }
      });
      var validateIconNode = validateIcon ? h(validateIcon, {
        class: "tooltip-validate-icon"
      }) : null;
      return h("tooltip", {
        props: {
          popperClass: classPrefix + "form__valid",
          arrowOffset: 0,
          adjustArrow: true,
          type: tooltipType,
          disabled: state.getValidateType !== "tip",
          placement: validatePosition,
          manual: true,
          appendToBody,
          popperOptions,
          modelValue: isShowError ? state.canShowTip : false,
          zIndex: "relative",
          renderContent: function renderContent() {
            var tooltipContent;
            if (errorSlot) {
              tooltipContent = [errorSlot];
            } else {
              tooltipContent = [validateIconNode, createVNode("span", {
                "class": classPrefix + "form-item__validate-message"
              }, [state.validateMessage])];
            }
            return tooltipContent;
          }
        },
        on: {
          "update:modelValue": function updateModelValue(value) {
            state.canShowTip = value;
          }
        },
        ref: "tooltip"
      }, [tooltipTriggerContent.type === Text ? createVNode("span", null, [tooltipTriggerContent]) : tooltipTriggerContent]);
    };
    var FormItemContnet = ItemContent ? getFormItemContnet() : null;
    var ErrorContent = isShowError && state.getValidateType === "text" ? errorSlot || h("div", {
      class: (_class = {}, _class[classPrefix + "form-item__error"] = true, _class[classPrefix + "form-item__error--inline"] = isErrorInline, _class[classPrefix + "form-item__error--block"] = isErrorBlock, _class),
      attrs: {
        title: [state.validateMessage]
      }
    }, [validateIcon ? h(validateIcon, {
      class: "validate-icon"
    }) : null, createVNode("span", {
      "class": classPrefix + "form-item__validate-message"
    }, [state.validateMessage])]) : null;
    var LabelContent = h("label-wrap", {
      props: {
        isAutoWidth: state.labelStyle && state.labelStyle.width === "auto",
        updateAll: state.form.labelWidth === "auto",
        isMobile: state.mode === "mobile"
      }
    }, [labelSlot || label ? h("label", {
      class: (_class2 = {}, _class2[classPrefix + "form-item__label"] = true, _class2["is-ellipsis"] = isMobile && ellipsis, _class2),
      style: state.labelStyle,
      attrs: {
        for: state.labelFor
      },
      on: {
        mouseenter: handleLabelMouseenter2,
        mouseleave: handleMouseleave2
      }
    }, labelSlot || label + state.form.labelSuffix) : null]);
    var ExtraTip = this.extra ? h("div", {
      class: (_class3 = {}, _class3[classPrefix + "form-item__extra-tip"] = true, _class3)
    }, this.extra) : null;
    return h("div", {
      class: (_class4 = {}, _class4[classPrefix + "form-item"] = true, _class4[classPrefix + "form-item--feedback"] = state.formInstance && state.formInstance.statusIcon, _class4["is-error"] = state.validateState === "error", _class4["is-text"] = state.getValidateType === "text", _class4["is-validating"] = state.validateState === "validating", _class4["is-success"] = state.validateState === "success", _class4["is-required"] = state.isRequired || required, _class4["is-no-asterisk"] = state.hideRequiredAsterisk, _class4[formItemClass] = true, _class4)
    }, [!isMobile ? LabelContent : null, h("div", {
      class: (_class5 = {}, _class5[classPrefix + "form-item__content"] = true, _class5["is-vertical"] = isMobile && vertical, _class5),
      style: !isMobile && state.contentStyle
    }, [isMobile ? LabelContent : null, FormItemContnet, isMobile ? validateMessage : null, h("transition", {
      attrs: {
        name: classPrefix + "zoom-in-top"
      }
    }, [ErrorContent]), isMobile ? null : ExtraTip])]);
  }
});
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
var $constants$1 = {
  FORM_NAME: "Form",
  FORM_ITEM_NAME: "FormItem"
};
var _sfc_main = defineComponent({
  name: $prefix + "FormItem",
  componentName: "FormItem",
  components: {
    LabelWrap: labelWrap,
    TinyTooltip: Tooltip,
    IconHelpCircle: index$4()
  },
  props: _extends$1({}, $props, {
    _constants: {
      type: Object,
      default: function _default3() {
        return $constants$1;
      }
    },
    appendToBody: {
      type: Boolean,
      default: void 0
    },
    error: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ""
    },
    label: String,
    labelWidth: String,
    manual: Boolean,
    popperOptions: {
      type: Object,
      default: function _default23() {
        return {};
      }
    },
    prop: String,
    required: {
      type: Boolean,
      default: void 0
    },
    rules: [Object, Array],
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    tipContent: String,
    validateDisabled: Boolean,
    validateDebounce: Boolean,
    validatePosition: String,
    validateStatus: String,
    validateType: String
  }),
  setup: function setup$16(props2, context) {
    return setup({
      props: props2,
      context,
      renderless,
      api
    });
  }
});
var _hoisted_1 = ["for"];
var _hoisted_2 = ["type-name"];
var _hoisted_3 = ["title"];
function _sfc_render(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_help_circle = resolveComponent("icon-help-circle");
  var _component_tiny_tooltip = resolveComponent("tiny-tooltip");
  var _component_label_wrap = resolveComponent("label-wrap");
  return openBlock(), createElementBlock(
    "div",
    {
      "data-tag": "tiny-form-item",
      class: normalizeClass(_ctx.m("flex min-h-[theme(spacing.12)] sm:min-h-[theme(spacing.7)] mb-0 p-0 sm:mb-4 box-border after:content-[''] after:table after:clear-both before:content-['']  before:table border-b-0.5 border-color-border-separator sm:border-none", _ctx.state.validateState === "error" && _ctx.state.validateType === "text" ? "mb-0 sm:mb-5" : "", _ctx.state.formInline ? "align-sub" : "", _ctx.state.labelPosition === "top" ? "block mb-4" : "", _ctx.state.validateState === "error" ? "[&_.tiny-range-editor]:border-color-error [&_[data-tag~=tiny-range-editor]]:border-color-error [&_[data-tag=tiny-numeric-main]]:border-color-error [&_input]:border-color-error [&_textarea]:border-color-error [&_input:focus]:border-color-error [&_input:hover]:border-color-error [&_textarea:focus]:border-color-error [&_textarea:hover]:border-color-error" : "", _ctx.state.labelPosition === "top" && !_ctx.state.hideRequiredAsterisk ? "pl-0" : "", !_ctx.slots.label && !_ctx.label ? "border-none" : "", _ctx.state.isDisplayOnly ? "border-none py-0.5" : ""))
    },
    [createVNode(_component_label_wrap, {
      "is-auto-width": _ctx.state.labelStyle && _ctx.state.labelStyle.width === "auto",
      "update-all": _ctx.state.labelWidth === "auto",
      "is-mobile-first": true
    }, {
      default: withCtx(function() {
        return [_ctx.slots.label || _ctx.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          "data-tag": "tiny-item-label",
          class: normalizeClass(_ctx.m("py-3 sm:py-1.5 sm:min-h-[theme(spacing.7)] relative align-bottom float-left text-sm pr-3 sm:pr-4 box-border leading-5", "overflow-hidden text-ellipsis", _ctx.state.labelPosition === "top" ? "float-none inline-block text-left sm:text-left leading-none px-0 pt-0 pb-1.5 h-auto min-h-0 sm:py-0 sm:pb-1 sm:min-h-[theme(spacing.0)]" : "min-h-[theme(spacing.9)]", _ctx.state.labelPosition === "right" ? "text-right sm:text-right" : "", _ctx.state.labelPosition === "left" ? "text-left sm:text-left" : "", _ctx.state.formInline && _ctx.state.labelPosition === "top" ? "block" : "", _ctx.state.isDisplayOnly ? "leading-none h-auto align-[inherit] pr-4" : "", _ctx.tipContent ? "pr-5 sm:pr-7" : "", _ctx.state.labelPosition === "top" && !_ctx.state.hideRequiredAsterisk ? "overflow-visible relative before:absolute before:-left-2.5" : "", _ctx.state.disabled ? "text-color-icon-placeholder sm:text-color-text-secondary" : "text-color-text-secondary", _ctx.state.formItemSize !== "mini" ? "sm:text-sm" : "sm:text-xs")),
          style: normalizeStyle(_ctx.state.labelStyle),
          for: _ctx.state.labelFor
        }, [createBaseVNode(
          "span",
          {
            class: normalizeClass(_ctx.m("max-h-[theme(spacing.10)] line-clamp-2 inline-block relative top-px pl-2 sm:pl-0 leading-normal", (_ctx.state.isRequired || _ctx.required) && !_ctx.state.hideRequiredAsterisk ? "before:content-['*'] before:text-color-error before:absolute before:left-0 before:sm:relative" : "", _ctx.state.isDisplayOnly ? "pl-0 before:hidden" : ""))
          },
          [renderSlot(_ctx.$slots, "label", {}, function() {
            return [createTextVNode(
              toDisplayString(_ctx.label + _ctx.state.labelSuffix),
              1
              /* TEXT */
            )];
          })],
          2
          /* CLASS */
        ), _ctx.tipContent ? (openBlock(), createBlock(_component_tiny_tooltip, {
          key: 0,
          effect: "light",
          content: _ctx.tipContent,
          placement: "top"
        }, {
          default: withCtx(function() {
            return [createVNode(_component_icon_help_circle, {
              "custom-class": "h-4 w-4 ml-0.5 absolute right-1 sm:right-2 align-text-bottom fill-color-text-secondary",
              class: normalizeClass([_ctx.state.labelPosition === "top" ? "top-0.5 sm:top-1.5" : "top-3.5 sm:top-1.5"])
            }, null, 8, ["class"])];
          }),
          _: 1
          /* STABLE */
        }, 8, ["content"])) : createCommentVNode("v-if", true)], 14, _hoisted_1)) : createCommentVNode("v-if", true)];
      }),
      _: 3
      /* FORWARDED */
    }, 8, ["is-auto-width", "update-all"]), createBaseVNode(
      "div",
      {
        "data-tag": "tiny-form-item-inline",
        class: normalizeClass(_ctx.m("flex-1 m-0 sm:m-auto relative sm:pt-0 sm:top-auto text-sm after:content-['']  after:table after:clear-both before:content-['']  before:table [&_button:not(:last-child)]:mr-2", "[&_[data-tag=tiny-checkbox]]:py-0 [&_[data-tag=tiny-input]]:w-full", "[&_[data-tag=tiny-input]_textarea]:px-0 sm:[&_[data-tag=tiny-input]_textarea]:px-3 [&_[data-tag=tiny-input]_textarea]:w-full [&_[data-tag=tiny-input]_textarea]:pt-1 sm:[&_[data-tag=tiny-input]_textarea]:pt-2", _ctx.state.formInline ? "align-sub leading-none" : "", _ctx.state.labelPosition === "top" && !_ctx.state.hideRequiredAsterisk ? _ctx.state.isDisplayOnly ? "pl-0" : "pl-2 sm:pl-0" : "pt-2", _ctx.state.formItemSize !== "mini" ? "sm:text-sm" : "sm:text-xs"))
      },
      [_ctx.state.isDisplayOnly && _ctx.state.isBasicComp ? (openBlock(), createElementBlock("div", {
        key: 0,
        "data-tag": "tiny-form-item-display-only",
        class: normalizeClass(["break-all min-h-[28px] leading-7 text-color-text-primary", _ctx.state.typeName === "textarea" ? "line-clamp-3" : "line-clamp-1"]),
        "type-name": _ctx.state.typeName,
        onMouseenter: _cache[0] || (_cache[0] = function() {
          return _ctx.handleMouseenter && _ctx.handleMouseenter.apply(_ctx, arguments);
        }),
        onMouseleave: _cache[1] || (_cache[1] = function() {
          return _ctx.handleMouseleave && _ctx.handleMouseleave.apply(_ctx, arguments);
        })
      }, toDisplayString(_ctx.state.displayedValue || "-"), 43, _hoisted_2)) : createCommentVNode("v-if", true), withDirectives(createBaseVNode(
        "div",
        {
          "data-tag": "tiny-form-item-show",
          class: normalizeClass(["[&_[aria-label=checkbox-group]]:pl-0.5 sm:[&_[aria-label=checkbox-group]]:pl-0", "[&_>:first-child[data-tag=tiny-checkbox]]:pl-0.5 sm:[&_>:first-child[data-tag=tiny-checkbox]]:pl-0", "[&_>:first-child[data-tag=tiny-cascader]]:w-full", "[&_>:first-child[class=tiny-autocomplete]]:w-full", "[&_>:first-child[class=tiny-cascader]]:w-full", _ctx.state.isDisplayOnly ? "[&_>*:not([data-tag^=tiny-],[class^=tiny-])]:leading-8 [&_>*:not([data-tag^=tiny-],[class^=tiny-])]:sm:leading-normal" : ""])
        },
        [renderSlot(_ctx.$slots, "default")],
        2
        /* CLASS */
      ), [[vShow, !(_ctx.state.isDisplayOnly && _ctx.state.isBasicComp)]]), _ctx.state.validateState === "error" && _ctx.showMessage && _ctx.state.showMessage ? renderSlot(_ctx.$slots, "error", {
        key: 1,
        dataTag: "tiny-form-item-error"
      }, function() {
        return [createBaseVNode("div", {
          class: normalizeClass(_ctx.m("relative sm:absolute left-0 bottom-1 sm:-bottom-5 text-color-error text-xs leading-normal line-clamp-3 sm:line-clamp-1", typeof _ctx.inlineMessage === "boolean" && _ctx.inlineMessage || _ctx.state.inlineMessage ? "relative top-auto left-auto inline-block" : "", _ctx.state.formItemSize === "small" ? "pt-0.5" : "", _ctx.state.formItemSize === "mini" ? "pt-px" : "")),
          title: _ctx.state.validateMessage
        }, toDisplayString(_ctx.state.validateMessage), 11, _hoisted_3)];
      }) : createCommentVNode("v-if", true), _ctx.state.validateState !== "error" && _ctx.showMessage && _ctx.state.showMessage ? renderSlot(_ctx.$slots, "prompt", {
        key: 2
      }) : createCommentVNode("v-if", true)],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
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
    return _sfc_main$1;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst;
  }
  return _sfc_main$1;
};
var $constants = {
  FORM_NAME: "Form",
  FORM_ITEM_NAME: "FormItem"
};
var formItemProps = _extends({}, $props, {
  _constants: {
    type: Object,
    default: function _default4() {
      return $constants;
    }
  },
  appendToBody: {
    type: Boolean,
    default: void 0
  },
  error: {
    type: String,
    default: ""
  },
  for: String,
  inlineMessage: {
    type: Boolean,
    default: void 0
  },
  messageType: String,
  label: String,
  labelWidth: String,
  manual: Boolean,
  popperOptions: {
    type: Object,
    default: function _default24() {
      return {};
    }
  },
  prop: String,
  required: {
    type: Boolean,
    default: void 0
  },
  rules: [Object, Array],
  showMessage: {
    type: Boolean,
    default: true
  },
  size: String,
  tipContent: String,
  validateDisabled: Boolean,
  validateDebounce: Boolean,
  validatePosition: String,
  validateStatus: String,
  validateType: String,
  validateIcon: Object,
  ellipsis: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  extra: String
});
var FormItem = defineComponent({
  name: $prefix + "FormItem",
  componentName: "FormItem",
  props: formItemProps,
  setup: function setup3(props2, context) {
    return $setup({
      props: props2,
      context,
      template
    });
  }
});
FormItem.install = function(Vue) {
  Vue.component(FormItem.name, FormItem);
};
export {
  FormItem as F,
  Form as a
};
