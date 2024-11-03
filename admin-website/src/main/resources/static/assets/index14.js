import { d as defineComponent, j as props, f as setup, $ as $prefix, m as $setup, l as $props } from "./index.js";
import { u as openBlock, y as createBlock, H as withCtx, D as renderSlot, A as normalizeClass, G as normalizeStyle, B as resolveDynamicComponent } from "./vue.js";
const setSubitemAttrValue = ({ className, item, value }) => {
  if (value) {
    if (typeof value === "number") {
      className[`col-${item}-`] = value;
    } else {
      if ("span" in value) {
        className[`col-${item}-`] = value.span;
      }
      if ("offset" in value) {
        className[`col-${item}-offset-`] = value.offset;
      }
      if ("push" in value) {
        className[`col-${item}-push-`] = value.push;
      }
      if ("pull" in value) {
        className[`col-${item}-pull-`] = value.pull;
      }
    }
  }
};
const setGlobalAttrValue = ({ attr, className, value }) => {
  attr = attr ? attr + "-" : "";
  className[`col-xs-${attr}`] = value;
  className[`col-sm-${attr}`] = value;
  className[`col-md-${attr}`] = value;
  className[`col-lg-${attr}`] = value;
  className[`col-xl-${attr}`] = value;
};
const getClassName = ({ api: api2, props: props2, state }) => () => {
  var _a;
  const multiple = 24 / (((_a = state.layout) == null ? void 0 : _a.cols) || 12);
  const span = props2.span * multiple;
  const offset = props2.offset;
  const push = props2.move ? props2.move : 0;
  const pull = props2.move ? 0 : -props2.move;
  const subitems = {
    xs: props2.xs * multiple,
    sm: props2.sm * multiple,
    md: props2.md * multiple,
    lg: props2.lg * multiple,
    xl: props2.xl * multiple
  };
  const className = {};
  const result = [];
  let item = {};
  if (span) {
    api2.setGlobalAttrValue({ attr: "", value: span, className });
  }
  if (offset) {
    api2.setGlobalAttrValue({ attr: "offset", value: offset, className });
  }
  if (push) {
    api2.setGlobalAttrValue({ attr: "push", value: push, className });
  }
  if (pull) {
    api2.setGlobalAttrValue({ attr: "pull", value: pull, className });
  }
  for (item of Object.keys(subitems)) {
    api2.setSubitemAttrValue({ item, value: subitems[item], className });
  }
  for (item of Object.keys(className)) {
    result.push(item + className[item]);
  }
  return result.join(" ");
};
const row = (pcontext) => () => {
  const ROW_NAME = "Row";
  const COL_NAME = "Col";
  let parent = pcontext.$parent.$parent;
  let parentName = parent ? parent.$options.componentName : null;
  let depth = 10;
  while (parent && parentName !== ROW_NAME && parentName !== COL_NAME && depth--) {
    parent = parent.$parent;
    parentName = parent && parent.$options ? parent.$options.componentName : null;
  }
  return parentName === ROW_NAME ? parent : null;
};
const getStyle = ({ props: props2, state }) => () => {
  const parent = state.row;
  const no = props2.no;
  const styles = [];
  let gutter = parent ? parent.gutter : null;
  let noSpace = parent ? parent.noSpace : null;
  let order = "";
  if (gutter) {
    gutter = gutter / 2;
    styles.push(`padding-left:${gutter}px;padding-right:${gutter}px;`);
  } else if (noSpace) {
    styles.push("padding-left:0;padding-right:0;");
  }
  if (parent && parent.flex && parent.order) {
    order = parent.order === "asc" ? no : -no;
    styles.push(`order:${order};-webkit-order:${order};-ms-order:${order};-moz-order:${order};`);
  }
  return styles.join("");
};
const api$1 = ["state"];
const renderless$1 = (props2, { computed, reactive, inject }, { parent }) => {
  const api2 = {};
  const state = reactive({
    row: computed(() => api2.row()),
    style: computed(() => api2.getStyle()),
    className: computed(() => api2.getClassName()),
    layout: inject("layout", {})
  });
  Object.assign(api2, {
    state,
    row: row(parent),
    setGlobalAttrValue,
    setSubitemAttrValue,
    getStyle: getStyle({ props: props2, state }),
    getClassName: getClassName({ api: api2, props: props2, state })
  });
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
var _export_sfc$1 = function _export_sfc2(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$1(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$1 = defineComponent({
  props: [].concat(props, ["span", "offset", "no", "move", "xs", "sm", "md", "lg", "xl", "tag"]),
  setup: function setup$1(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
function _sfc_render$1(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: normalizeClass([_ctx.state.className, "tiny-col"]),
    style: normalizeStyle(_ctx.state.style)
  }, {
    default: withCtx(function() {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "style"]);
}
var pc$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["render", _sfc_render$1]]);
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
var template$1 = function template2(mode) {
  var _process$env;
  typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  return pc$1;
};
var Col = defineComponent({
  name: $prefix + "Col",
  props: _extends$1({}, $props, {
    /**
     * @property {number} [span=12] - 栅格占据的列数（一行以12/24栅格划分）
     */
    span: {
      type: Number,
      default: 12,
      validator: function validator(value) {
        return Math.floor(value) === value && value > 0 && value <= 24;
      }
    },
    /**
     * @property {number} [offset=0] - 栅格左侧的间隔格数
     */
    offset: {
      type: Number,
      default: 0,
      validator: function validator2(value) {
        return value >= 0;
      }
    },
    /**
     * @property {no} [no=0] - 排序编号
     */
    no: {
      type: Number,
      default: 0
    },
    /**
     * @property {number} [move=0] - 栅格向左向右移动格数
     */
    move: {
      type: Number,
      default: 0
    },
    /**
     * @property {(number|object)} xs - <768px 响应式栅格数或者栅格属性对象
     */
    xs: {
      type: [Number, Object]
    },
    /**
     * @property {(number|object)} sm - ≥768px 响应式栅格数或者栅格属性对象
     */
    sm: {
      type: [Number, Object]
    },
    /**
     * @property {(number|object)} md - ≥992px 响应式栅格数或者栅格属性对象
     */
    md: {
      type: [Number, Object]
    },
    /**
     * @property {(number|object)} lg - ≥1200px 响应式栅格数或者栅格属性对象
     */
    lg: {
      type: [Number, Object]
    },
    /**
     * @property {(number|object)} xl - ≥1920px 响应式栅格数或者栅格属性对象
     */
    xl: {
      type: [Number, Object]
    },
    /**
     * @property {string} [tag=div] - 自定义元素标签
     */
    tag: {
      type: String,
      default: "div"
    }
  }),
  setup: function setup2(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$1
    });
  }
});
var version$1 = "3.16.0";
Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};
Col.version = version$1;
const computedClassName = ({ flex, justify, align }) => {
  const className = [];
  if (flex) {
    className.push("row-flex");
    className.push(`row-justify-${justify}`);
    className.push(`row-align-${align}`);
  }
  return className.join(" ");
};
const computedStyle = (gutter) => {
  const value = gutter ? -(gutter / 2) : 0;
  return value ? { marginLeft: value + "px", marginRight: value + "px" } : {};
};
const api = ["state"];
const renderless = (props2, { computed, reactive }) => {
  const api2 = {
    computedStyle,
    computedClassName
  };
  const state = reactive({
    style: computed(() => api2.computedStyle(props2.gutter)),
    className: computed(
      () => api2.computedClassName({
        flex: props2.flex,
        justify: props2.justify,
        align: props2.align
      })
    )
  });
  api2.state = state;
  return api2;
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
var _export_sfc = function _export_sfc22(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main = defineComponent({
  props: [].concat(props, ["flex", "gutter", "justify", "align", "order", "tag", "noSpace"]),
  setup: function setup$12(props2, context) {
    return setup({
      props: props2,
      context,
      renderless,
      api
    });
  }
});
function _sfc_render(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: normalizeClass([_ctx.state.className, "tiny-row"]),
    style: normalizeStyle(_ctx.state.style)
  }, {
    default: withCtx(function() {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "style"]);
}
var pc = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
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
  typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  return pc;
};
var Row = defineComponent({
  name: $prefix + "Row",
  componentName: "Row",
  props: _extends({}, $props, {
    flex: Boolean,
    gutter: {
      type: Number,
      default: 0,
      validator: function validator3(value) {
        return value >= 0;
      }
    },
    justify: {
      type: String,
      default: "start",
      validator: function validator22(value) {
        return Boolean(~["start", "center", "end", "space-between", "space-around"].indexOf(value));
      }
    },
    align: {
      type: String,
      default: "top",
      validator: function validator32(value) {
        return Boolean(~["top", "middle", "bottom"].indexOf(value));
      }
    },
    order: {
      type: String,
      validator: function validator4(value) {
        return Boolean(~["asc", "des"].indexOf(value));
      }
    },
    tag: {
      type: String,
      default: "div"
    },
    noSpace: {
      type: Boolean,
      default: false
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
var version = "3.16.0";
Row.install = function(Vue) {
  Vue.component(Row.name, Row);
};
Row.version = version;
export {
  Col as C,
  Row as R
};
