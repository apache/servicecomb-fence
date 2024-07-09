import { u as openBlock, v as createElementBlock, w as createBaseVNode, k as resolveComponent, l as createVNode, H as withCtx, J as createTextVNode, E as toDisplayString, z as createCommentVNode, y as createBlock, A as normalizeClass, I as withDirectives, L as vShow, M as Fragment, N as renderList, P as withModifiers, F as mergeProps, S as toHandlers, B as resolveDynamicComponent, D as renderSlot, d as defineComponent$1, a9 as toRefs, a8 as reactive, a0 as useI18n, r as ref, c as computed, W as unref, j as onMounted, a2 as watch } from "./vue.js";
import { s as svg, w as copyArray, y as __spreadProps, z as __spreadValues, d as defineComponent, b as $prefix, C as Checkbox, I as Input, A as index$4, D as index$5, a as setup, B as Button, E as index$8, p as props, $ as $props, c as $setup, n as Layout, T as TINYModal, _ as _export_sfc$2, G as useAppStore } from "./index.js";
import { T as TimeLine } from "./index38.js";
import { P as Pager, i as index$6, b as index$7, c as index$9, R as Row, C as Col, L as Loadings } from "./index31.js";
import { a as getStepData } from "./form.js";
import { D as DatePicker } from "./index36.js";
import { F as FormItem, a as Form } from "./index29.js";
import { S as Select, O as Option } from "./index34.js";
import { h as headtop } from "./head.js";
import "./chevron-up.js";
import "./index30.js";
import "./index35.js";
var _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$5 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "arrow-down_svg__st0",
    d: "m13 17.7 5.4-5.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7.1 7.1c-.4.4-1 .4-1.4 0-.2-.2-.3-.5-.3-.8 0 .5.5 1 1 1s1-.4 1-1c0 .3-.1.5-.3.7-.4.4-1 .4-1.4 0l-7.1-7.1c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.4 5.4V4c0-.6.4-1 1-1s1 .4 1 1v13.7z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$5 = [_hoisted_2$5];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, [].concat(_hoisted_3$5));
}
var ArrowDown = {
  render: render$1
};
var index$3 = function index2() {
  return svg({
    name: "IconArrowDown",
    component: ArrowDown
  })();
};
var _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$4 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "arrow-up_svg__st0",
    d: "m11 6.3-5.4 5.4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l7.1-7.1c.4-.4 1-.4 1.4 0l7.1 7.1c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L13 6.3V20c0 .6-.4 1-1 1s-1-.4-1-1V6.3z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$4 = [_hoisted_2$4];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, [].concat(_hoisted_3$4));
}
var ArrowUp = {
  render
};
var index$2 = function index22() {
  return svg({
    name: "IconArrowUp",
    component: ArrowUp
  })();
};
const getObj = (props2) => () => props2.data.reduce((o, cur) => (o[cur[props2.props.key]] = cur) && o, {});
const getSourceData = ({ props: props2, Tree }) => () => {
  if (props2.render && props2.render.plugin.name === Tree) {
    return props2.data;
  }
  return props2.data.filter((item) => !props2.modelValue.includes(item[props2.props.key]));
};
const getFlatData = (data, hasChildren) => {
  const nodes = [];
  const getChild = (data2) => {
    data2.forEach((node) => {
      nodes.push(node);
      if (node.children && node.children.length > 0) {
        getChild(node.children);
      }
    });
  };
  getChild(data);
  if (hasChildren) {
    nodes.forEach((item) => {
      if (item.children) {
        delete item.children;
      }
    });
  }
  return nodes;
};
const getTargetData = ({
  props: props2,
  state,
  Tree,
  Table
}) => () => {
  if (props2.render && props2.render.plugin.name === Tree) {
    const nodes = getFlatData(copyArray(props2.data), true);
    const rightData = nodes.filter((item) => props2.modelValue.includes(item[props2.props.key]));
    const sortAry = [];
    props2.modelValue.forEach((value) => {
      sortAry.push(rightData.filter((item) => item[props2.props.key] === value)[0]);
    });
    sortAry.flag = "sort";
    return sortAry;
  }
  if (props2.targetOrder === "original") {
    return props2.data.filter((item) => props2.modelValue.includes(item[props2.props.key]));
  } else {
    const data = props2.modelValue.reduce((arr, cur) => {
      const val = state.dataObj[cur];
      if (val) {
        arr.push(val);
      }
      return arr;
    }, []);
    if (props2.render && props2.render.plugin.name === Table) {
      data.flag = "table";
    }
    return data;
  }
};
const onSourceCheckedChange = ({ emit, state }) => (val, movedKeys) => {
  state.leftChecked = val;
  if (movedKeys === void 0) {
    return;
  }
  emit("left-check-change", val, movedKeys);
};
const onTargetCheckedChange = ({ emit, state }) => (val, movedKeys) => {
  state.rightChecked = val;
  if (movedKeys === void 0) {
    return;
  }
  emit("right-check-change", val, movedKeys);
};
const addToLeft = ({ emit, props: props2, state }) => (value) => {
  const change = () => {
    state.isToLeft = true;
    let currentValue = props2.modelValue.slice();
    if (value === "all") {
      state.rightChecked = state.rightData.map((item) => item[props2.props.key]);
    }
    state.rightChecked.forEach((item) => {
      const index3 = currentValue.indexOf(item);
      if (index3 > -1) {
        currentValue.splice(index3, 1);
      }
    });
    state.rightChecked = state.rightChecked.slice(0);
    emit("update:modelValue", currentValue);
    emit("change", currentValue, "left", state.rightChecked);
  };
  props2.beforeTransfer ? props2.beforeTransfer(change) : change();
};
const addToRight = ({
  emit,
  refs,
  props: props2,
  state,
  Tree
}) => (value) => {
  const change = () => {
    state.isToLeft = false;
    let currentValue = props2.modelValue.slice();
    const itemsToBeMoved = [];
    const key = props2.props.key;
    if (props2.render && props2.render.plugin.name === Tree) {
      if (!props2.treeOp.checkStrictly) {
        currentValue = refs.leftPanel.$refs.plugin.getCheckedKeys();
      } else {
        state.leftChecked.forEach((item) => !currentValue.includes(item) && currentValue.push(item));
      }
    } else {
      if (value === "all") {
        state.leftData.forEach((item) => {
          const itemKey = item[key];
          if (!props2.modelValue.includes(itemKey)) {
            itemsToBeMoved.push(itemKey);
          }
        });
        state.leftChecked = itemsToBeMoved.slice();
      } else {
        props2.data.forEach((item) => {
          const itemKey = item[key];
          if (state.leftChecked.includes(itemKey) && !props2.modelValue.includes(itemKey)) {
            itemsToBeMoved.push(itemKey);
          }
        });
      }
      currentValue = props2.targetOrder === "unshift" ? itemsToBeMoved.concat(currentValue) : currentValue.concat(itemsToBeMoved);
    }
    state.rightDisabled = false;
    emit("update:modelValue", currentValue);
    emit("change", currentValue, "right", state.leftChecked);
  };
  props2.beforeTransfer ? props2.beforeTransfer(change) : change();
};
const clearQuery$1 = (refs) => (which) => {
  if (which === "left") {
    refs.leftPanel.state.query = "";
  } else if (which === "right") {
    refs.rightPanel.state.query = "";
  }
};
const logicFun = ({ props: props2, emit, state }) => ({ event, isAdd, pullMode }) => {
  let currentValue = props2.modelValue.slice();
  let movedKeys = [];
  if (pullMode) {
    currentValue.splice(event.newIndex, 0, currentValue.splice(event.oldIndex, 1)[0]);
  } else {
    const key = isAdd ? state.targetData[event.oldIndex][props2.props.key] : state.sourceData[event.oldIndex][props2.props.key];
    const index3 = isAdd ? state.rightChecked.indexOf(key) : state.leftChecked.indexOf(key);
    const valueIndex = currentValue.indexOf(key);
    if (isAdd) {
      ~valueIndex && currentValue.splice(valueIndex, 1);
    } else {
      !~valueIndex && currentValue.splice(event.newIndex, 0, key);
    }
    if (~index3) {
      isAdd ? state.rightChecked.splice(index3, 1) : state.leftChecked.splice(index3, 1);
    }
    movedKeys = [key];
  }
  state.rightChecked = state.rightChecked.slice(0);
  emit("update:modelValue", currentValue);
  emit("change", currentValue, "left", movedKeys);
};
const sortableEvent = ({
  api: api2,
  droppanel,
  props: props2,
  queryDom,
  refs
}) => () => {
  if (props2.dropConfig) {
    const leftPanel = refs.leftPanel.$el.querySelector(droppanel);
    const Sortable = props2.dropConfig.plugin;
    new Sortable(leftPanel, {
      group: "sorting",
      handle: queryDom,
      sort: false,
      filter: ".is-disabled",
      onAdd(event) {
        api2.logicFun({ event, isAdd: true });
      },
      onRemove(event) {
        api2.logicFun({ event, isAdd: false });
      }
    });
    const rightPanle = refs.rightPanel.$el.querySelector(droppanel);
    new Sortable(rightPanle, {
      group: "sorting",
      handle: queryDom,
      sort: true,
      filter: ".is-disabled",
      onUpdate(event) {
        if (event.pullMode) {
          return;
        }
        api2.logicFun({ event, pullMode: "sort" });
      }
    });
  }
};
const getLeftCheckedData = ({ props: props2, state }) => () => state.sourceData.filter((item) => !item[props2.props.disabled]);
const getRightCheckedData = ({ props: props2, state }) => () => state.targetData.filter((item) => !item[props2.props.disabled]);
const api$1 = ["state", "onSourceCheckedChange", "onTargetCheckedChange", "addToLeft", "addToRight", "clearQuery"];
const initState$1 = ({ reactive: reactive2, computed: computed2, api: api2, props: props2, h, slots }) => reactive2({
  leftChecked: [],
  rightChecked: [],
  rightData: computed2(() => api2.getRightCheckedData()),
  leftData: computed2(() => api2.getLeftCheckedData()),
  dataObj: computed2(() => api2.getObj()),
  sourceData: computed2(() => api2.getSourceData()),
  targetData: computed2(() => api2.getTargetData()),
  hasButtonTexts: computed2(() => props2.buttonTexts.length === 2),
  isToLeft: false,
  optionRender: computed2(() => (option) => {
    if (props2.renderContent) {
      return props2.renderContent(h, option);
    }
    if (slots.default) {
      return slots.default({ option });
    }
    return h("span", option[props2.props.label] || option[props2.props.key]);
  })
});
const renderless$1 = (props2, { computed: computed2, onMounted: onMounted2, reactive: reactive2, h }, { $prefix: $prefix2, emit, refs, parent, slots }) => {
  const api2 = {};
  const Tree = $prefix2 + "Tree";
  const Table = $prefix2 + "Table";
  const state = initState$1({ reactive: reactive2, computed: computed2, api: api2, props: props2, h, slots });
  const { DROPPANEL, TRANSFERPANEL } = parent.$constants;
  Object.assign(api2, {
    state,
    getObj: getObj(props2),
    clearQuery: clearQuery$1(refs),
    getSourceData: getSourceData({ props: props2, Tree }),
    addToLeft: addToLeft({ emit, props: props2, state }),
    getLeftCheckedData: getLeftCheckedData({ props: props2, state }),
    getRightCheckedData: getRightCheckedData({ props: props2, state }),
    addToRight: addToRight({ emit, refs, props: props2, state, Tree }),
    onTargetCheckedChange: onTargetCheckedChange({ emit, state }),
    onSourceCheckedChange: onSourceCheckedChange({ emit, state }),
    logicFun: logicFun({ props: props2, emit, state }),
    getTargetData: getTargetData({ props: props2, state, Tree, Table }),
    sortableEvent: sortableEvent({ api: api2, droppanel: DROPPANEL, props: props2, queryDom: TRANSFERPANEL, refs })
  });
  onMounted2(api2.sortableEvent);
  return api2;
};
const showFilterData = (data, sign) => {
  const getChild = (data2, sign2) => data2.filter((node) => {
    if (node.children && node.children.length > 0) {
      node.children = getChild(node.children, sign2);
    }
    return node[sign2];
  });
  return getChild(data, sign);
};
const getFilterData = ({ api: api2, props: props2, state, Table, Tree }) => () => {
  if (state.renderType === Table) {
    let tableData = [];
    if (props2.filterMethod) {
      tableData = props2.data.filter((item) => props2.filterMethod(state.query, item));
    } else {
      tableData = props2.data;
    }
    state.pagerTotal = tableData;
    if (props2.showPager) {
      const pageSize = state.sizes || 10;
      const totalPageCount = Math.ceil(tableData.length / pageSize);
      if (state.internalPage > totalPageCount) {
        api2.handlePageChange(totalPageCount);
      }
      if (totalPageCount > 0 && state.internalPage === 0) {
        state.internalPage = 1;
      }
      if (totalPageCount > 0 && state.currentPage === 0) {
        state.currentPage = 1;
      }
      return tableData.slice((state.internalPage - 1) * pageSize, pageSize * state.internalPage);
    } else {
      return tableData;
    }
  } else if (state.renderType === Tree) {
    return showFilterData(api2.getFilterTreeData(copyArray(props2.data)), "visible");
  } else {
    return props2.data.filter((item) => {
      if (typeof props2.filterMethod === "function") {
        return props2.filterMethod(state.query, item);
      } else {
        const label = item[state.labelProp] || item[state.keyProp].toString();
        return label.toLowerCase().includes(state.query.toLowerCase());
      }
    });
  }
};
const getCheckableData = ({ api: api2, state, Tree }) => () => {
  if (state.renderType === Tree) {
    return api2.getTreeCheckableData(state.filteredData);
  } else {
    return state.filteredData.filter((item) => !item[state.disabledProp]);
  }
};
const getCheckedSummary = ({ props: props2, state, Tree }) => () => {
  const checkedLength = state.checked.length;
  let dataLength = 0;
  if (state.renderType === Tree) {
    dataLength = getFlatData(copyArray(props2.data)).length;
  } else {
    dataLength = props2.data.length;
  }
  const { noChecked, hasChecked } = props2.format;
  if (noChecked && hasChecked) {
    return checkedLength > 0 ? hasChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength) : noChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength);
  } else {
    return `${checkedLength} / ${dataLength}`;
  }
};
const getDeteminate = (state) => () => state.checked.length > 0 && state.checked.length < state.checkableData.length;
const watchChecked = ({ api: api2, emit, state }) => ({ value, oldvalue }) => {
  api2.updateAllChecked();
  if (state.checkChangeByUser) {
    const movedKeys = value.concat(oldvalue).filter((v) => !value.includes(v) || !oldvalue.includes(v));
    emit("checked-change", value, movedKeys);
  } else {
    emit("checked-change", value);
    state.checkChangeByUser = true;
  }
};
const watchData = ({ api: api2, props: props2, state, Tree }) => (value) => {
  state.pagerTotal = value;
  const checked = [];
  if (state.renderType === Tree && !props2.treeOp.checkStrictly) {
    state.checked = api2.getStrictData(state.filteredData).keys;
  } else {
    const filteredDataKeys = state.filteredData.map((item) => item[state.keyProp]);
    state.checked.forEach((item) => {
      if (filteredDataKeys.includes(item)) {
        checked.push(item);
      }
    });
    state.checkChangeByUser = false;
    state.checked = checked;
  }
};
const watchDefaultCheckded = ({ api: api2, props: props2, state, Tree }) => ({ value, oldvalue }) => {
  if (oldvalue && value.length === oldvalue.length && value.every((item) => oldvalue.includes(item))) {
    return;
  }
  if (state.renderType === Tree && !props2.treeOp.checkStrictly) {
    if (!state.render) {
      return;
    }
    state.render.defaultCheckedKeys = state.checked = api2.getStrictData(state.filteredData).keys;
  } else {
    const checked = [];
    const checkableDataKeys = state.checkableData.map((item) => item[state.keyProp]);
    value.forEach((item) => {
      if (checkableDataKeys.includes(item)) {
        checked.push(item);
      }
    });
    state.checkChangeByUser = false;
    state.checked = checked;
  }
};
const updateAllChecked = ({ state, Table, Tree }) => () => {
  const checkableDataKeys = state.checkableData.map((item) => item[state.keyProp]);
  state.allChecked = checkableDataKeys && checkableDataKeys.length > 0 && checkableDataKeys.every((item) => state.checked.includes(item));
  if (state.renderType === Table || state.renderType === Tree) {
    state.render.data = state.filteredData;
    if (state.renderType === Tree) {
      state.render.defaultCheckedKeys = state.checked;
    } else {
      const pageCheckedKeys = [];
      state.filteredData.forEach((data) => {
        state.checked.includes(data[state.keyProp]) && pageCheckedKeys.push(data[state.keyProp]);
      });
      state.render.defaultChecked = pageCheckedKeys;
    }
  }
};
const handleAllCheckedChange = ({ state, Table, Tree, vm }) => (value) => {
  state.checked = value ? state.checkableData.map((item) => item[state.keyProp]) : [];
  if (state.renderType === Table) {
    state.render.defaultChecked = state.checked;
  } else if (state.renderType === Tree) {
    state.checked.length !== 0 ? state.render.defaultCheckedKeys = state.checked : vm.$refs.plugin.setCheckedKeys(state.checked);
  }
};
const clearQuery = (state) => () => {
  if (state.inputIcon === "circle-close") {
    state.query = "";
  }
};
const checkedEvent = (state) => (value, disabled) => {
  if (disabled) {
    return;
  }
  const index3 = state.checked.indexOf(value);
  let tmpArray = [...state.checked];
  if (~index3) {
    tmpArray.splice(index3, 1);
    state.checked = tmpArray;
  } else {
    tmpArray.push(value);
    state.checked = tmpArray;
  }
};
const setPosition = ({ parent, state }) => (trend, event) => {
  event.stopPropagation();
  event.preventDefault();
  const checkedKey = [];
  const uncheckedKey = [];
  state.filteredData.forEach((item) => {
    if (~state.checked.indexOf(item[state.keyProp])) {
      checkedKey.push(item[state.keyProp]);
    } else {
      uncheckedKey.push(item[state.keyProp]);
    }
  });
  const result = trend === "up" ? [...checkedKey, ...uncheckedKey] : [...uncheckedKey, ...checkedKey];
  parent.$parent.$emit("update:modelValue", result);
};
const selectChange = (state) => (keys) => state.checked = keys;
const handlePageChange = (state) => (currentPage) => {
  state.pageChangeData = true;
  state.internalPage = currentPage;
  state.currentPage = currentPage;
};
const getFilterTreeData = ({ props: props2, state }) => (data) => {
  const getChild = (data2, query) => {
    data2.forEach((node) => {
      const label = node[state.labelProp];
      if (typeof props2.treeOp.filterNodeMethod === "function") {
        const result = props2.treeOp.filterNodeMethod(state.query, node);
        if (typeof result !== "boolean") {
          node.visible = true;
        } else {
          node.visible = result;
        }
      } else {
        node.visible = label.toLowerCase().includes(query.toLowerCase());
      }
      if (node.children && node.children.length > 0) {
        getChild(node.children, query);
      }
      if (!node.visible && node.children && node.children.length) {
        let allHidden = true;
        allHidden = !node.children.some((child) => child.visible);
        node.visible = allHidden === false;
      }
    });
  };
  getChild(data, state.query);
  return data;
};
const getTreeCheckableData = (state) => (data) => {
  const nodes = [];
  const getChild = (data2) => {
    data2.forEach((node) => {
      !node[state.disabledProp] && nodes.push(node);
      if (node.children && node.children.length > 0) {
        getChild(node.children);
      }
    });
  };
  getChild(data);
  return nodes;
};
const getStrictData = ({ props: props2, state }) => (data) => {
  const keys = [];
  const strictData = (data2, isStrict) => {
    data2.forEach((node) => {
      if (props2.defaultChecked.includes(node[state.keyProp])) {
        node.isCheckable = true;
        keys.push(node[state.keyProp]);
      } else {
        node.isCheckable = isStrict;
        isStrict && keys.push(node[state.keyProp]);
      }
      if (node.children && node.children.length > 0) {
        strictData(node.children, node.isCheckable);
      }
    });
  };
  strictData(data, false);
  return { data, keys };
};
const sizesChange = (state) => (sizes) => state.sizes = sizes;
const setExpandCache = (state) => (node, expand) => {
  const { expanded, keyProp } = state;
  const index3 = state.expanded.indexOf(node[keyProp]);
  if (expand) {
    index3 === -1 && expanded.push(node[keyProp]);
  } else {
    index3 !== -1 && expanded.splice(index3, 1);
  }
};
const api = [
  "markRaw",
  "toRaw",
  "state",
  "check",
  "sizesChange",
  "clearQuery",
  "handleAllCheckedChange",
  "checkedEvent",
  "setPosition",
  "selectChange",
  "handlePageChange"
];
const initState = ({ reactive: reactive2, props: props2, parent, computed: computed2, api: api2, slots }) => {
  const state = reactive2({
    query: "",
    checked: [],
    allChecked: false,
    inputHover: false,
    internalPage: props2.pagerOp.pageVO.currentPage || 1,
    pagerTotal: 0,
    pageChangeData: parent.state.isToLeft,
    currentPage: props2.pagerOp.pageVO.currentPage || 1,
    sizes: props2.pagerOp && props2.pagerOp.pageVO.pageSize,
    render: {},
    checkChangeByUser: true,
    filteredData: computed2(() => api2.getFilterData()),
    checkableData: computed2(() => api2.getCheckableData()),
    checkedSummary: computed2(() => api2.getCheckedSummary()),
    isIndeterminate: computed2(() => api2.getDeteminate()),
    hasNoMatch: computed2(() => state.query.length > 0 && state.filteredData.length === 0),
    inputIcon: computed2(() => state.query.length > 0 && state.inputHover ? "circle-close" : "search"),
    labelProp: computed2(() => props2.props.label || "label"),
    keyProp: computed2(() => props2.props.key || "key"),
    disabledProp: computed2(() => props2.props.disabled || "disabled"),
    childrenProp: computed2(() => props2.treeOp && props2.treeOp.props && props2.treeOp.props.childern || "children"),
    hasFooter: computed2(() => (!!parent.slots["left-footer"] || !!parent.slots["right-footer"]) && !!slots.default),
    renderType: computed2(() => props2.render && props2.render.plugin.name),
    expanded: []
  });
  return state;
};
const initStateRender = ({ reactive: reactive2, state, props: props2, api: api2 }) => reactive2(__spreadProps(__spreadValues({
  keys: state.keyProp,
  data: [],
  defaultChecked: state.checked,
  defaultExpandedKeys: state.expanded,
  columns: props2.columns
}, props2.treeOp), {
  on: {
    "checked-change": (selected, isAll) => {
      api2.selectChange(selected, isAll);
    },
    check: (data, { checkedKeys }) => {
      state.checked = checkedKeys;
    },
    "node-expand": (node) => api2.setExpandCache(node, true),
    "node-collapse": (node) => api2.setExpandCache(node, false)
  }
}));
const initWatcher = ({ watch: watch2, state, api: api2, props: props2, Table }) => {
  watch2(
    () => state.checked,
    (value, oldvalue) => api2.watchChecked({ value, oldvalue })
  );
  watch2(
    () => props2.pagerOp.pageVO.currentPage,
    (value) => {
      state.currentPage = value;
    },
    { deep: true, immediate: true }
  );
  watch2(() => props2.data, api2.watchData, { immediate: true });
  watch2(() => state.checkableData, api2.updateAllChecked);
  watch2(
    () => props2.defaultChecked,
    (value, oldvalue) => api2.watchDefaultCheckded({ value, oldvalue }),
    { immediate: true }
  );
  watch2(
    () => props2.isToLeft,
    () => {
      if (state.renderType === Table) {
        state.internalPage = 1;
        state.currentPage = 1;
        state.render.data = state.filteredData;
      }
    }
  );
};
const renderless = (props2, { computed: computed2, reactive: reactive2, watch: watch2, toRaw }, { $prefix: $prefix2, emit, parent, vm, slots }) => {
  const api2 = {};
  const Table = $prefix2 + "Table";
  const Tree = $prefix2 + "Tree";
  const state = initState({ reactive: reactive2, props: props2, parent, computed: computed2, api: api2, slots });
  Object.assign(api2, {
    state,
    toRaw,
    sizesChange: sizesChange(state),
    setPosition: setPosition({ parent, state }),
    selectChange: selectChange(state),
    handlePageChange: handlePageChange(state),
    clearQuery: clearQuery(state),
    checkedEvent: checkedEvent(state),
    getDeteminate: getDeteminate(state),
    updateAllChecked: updateAllChecked({ state, Table, Tree }),
    handleAllCheckedChange: handleAllCheckedChange({ state, Table, Tree, vm }),
    getCheckedSummary: getCheckedSummary({ props: props2, state, Tree }),
    getFilterTreeData: getFilterTreeData({ props: props2, state }),
    getTreeCheckableData: getTreeCheckableData(state),
    getStrictData: getStrictData({ props: props2, state }),
    setExpandCache: setExpandCache(state),
    getCheckableData: getCheckableData({ api: api2, state, Tree }),
    getFilterData: getFilterData({ api: api2, props: props2, state, Table, Tree }),
    watchData: watchData({ api: api2, props: props2, state, Tree }),
    watchDefaultCheckded: watchDefaultCheckded({ api: api2, props: props2, state, Tree }),
    watchChecked: watchChecked({ api: api2, emit, state })
  });
  state.render = initStateRender({ reactive: reactive2, state, props: props2, api: api2 });
  initWatcher({ watch: watch2, state, api: api2, props: props2, Table });
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
var transferPanelProps = {
  columns: Array,
  data: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  defaultChecked: Array,
  filterMethod: Function,
  filterable: Boolean,
  format: Object,
  isToLeft: Boolean,
  optionRender: Function,
  pagerOp: Object,
  placeholder: String,
  props: Object,
  render: Object,
  renderContent: Function,
  showLeft: Boolean,
  showPager: Boolean,
  title: String,
  treeOp: Object,
  value: {
    type: Array,
    default: function _default2() {
      return [];
    }
  }
};
var _sfc_main$7 = defineComponent({
  name: $prefix + "TransferPanel",
  componentName: "TransferPanel",
  inheritAttrs: false,
  components: {
    TinyCheckbox: Checkbox,
    TinyInput: Input,
    TinyPager: Pager,
    IconArrowDown: index$3(),
    IconArrowUp: index$2(),
    IconCheckedSur: index$4(),
    IconCheck: index$5(),
    OptionContent: {
      props: {
        option: [Object, Array]
      },
      render: function render2() {
        return this.option;
      }
    }
  },
  props: transferPanelProps,
  setup: function setup$1(props2, context) {
    return setup({
      props: props2,
      context,
      renderless,
      api,
      mono: true
    });
  }
});
var _hoisted_1$4 = {
  class: "tiny-transfer-panel__header"
};
var _hoisted_2$3 = {
  key: 0,
  class: "headSort"
};
var _hoisted_3$3 = ["onClick"];
var _hoisted_4$3 = {
  class: "tiny-checkbox__inner"
};
var _hoisted_5$2 = ["disabled", "value"];
var _hoisted_6$2 = {
  class: "tiny-checkbox__label"
};
var _hoisted_7$1 = {
  key: 0,
  class: "tiny-transfer-panel__footer"
};
function _sfc_render$1(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_arrow_up = resolveComponent("icon-arrow-up");
  var _component_icon_arrow_down = resolveComponent("icon-arrow-down");
  var _component_tiny_checkbox = resolveComponent("tiny-checkbox");
  var _component_tiny_input = resolveComponent("tiny-input");
  var _component_icon_check = resolveComponent("icon-check");
  var _component_icon_checked_sur = resolveComponent("icon-checked-sur");
  var _component_option_content = resolveComponent("option-content");
  var _component_tiny_pager = resolveComponent("tiny-pager");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-transfer-panel", [_ctx.state.renderType === "TinyTable" ? "transferGrid" : ""]])
    },
    [createBaseVNode("p", _hoisted_1$4, [createVNode(_component_tiny_checkbox, {
      modelValue: _ctx.state.allChecked,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = function($event) {
        return _ctx.state.allChecked = $event;
      }),
      onChange: _ctx.handleAllCheckedChange,
      indeterminate: _ctx.state.isIndeterminate
    }, {
      default: withCtx(function() {
        return [createTextVNode(
          toDisplayString(_ctx.title) + " ",
          1
          /* TEXT */
        ), _ctx.render && _ctx.state.renderType !== "TinyTable" && _ctx.data.flag === "sort" ? (openBlock(), createElementBlock("div", _hoisted_2$3, [createBaseVNode("div", {
          class: "sort-btn disabled up",
          onClick: _cache[0] || (_cache[0] = function($event) {
            return _ctx.setPosition("up", $event);
          })
        }, [createVNode(_component_icon_arrow_up)]), createBaseVNode("div", {
          class: "sort-btn disabled down",
          onClick: _cache[1] || (_cache[1] = function($event) {
            return _ctx.setPosition("down", $event);
          })
        }, [createVNode(_component_icon_arrow_down)])])) : createCommentVNode("v-if", true), createBaseVNode(
          "span",
          null,
          toDisplayString(_ctx.state.checkedSummary),
          1
          /* TEXT */
        )];
      }),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "onChange", "indeterminate"])]), createBaseVNode(
      "div",
      {
        class: normalizeClass(["tiny-transfer-panel__body", _ctx.state.hasFooter ? "is-with-footer" : ""]),
        ref: "reference"
      },
      [_ctx.filterable ? (openBlock(), createBlock(_component_tiny_input, {
        key: 0,
        class: "tiny-transfer-panel__filter",
        modelValue: _ctx.state.query,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function($event) {
          return _ctx.state.query = $event;
        }),
        size: "small",
        placeholder: _ctx.placeholder,
        onMouseenter: _cache[5] || (_cache[5] = function($event) {
          return _ctx.state.inputHover = true;
        }),
        onMouseleave: _cache[6] || (_cache[6] = function($event) {
          return _ctx.state.inputHover = false;
        })
      }, {
        prefix: withCtx(function() {
          return [createBaseVNode(
            "i",
            {
              class: normalizeClass(["tiny-input__icon", "tiny-icon-" + _ctx.state.inputIcon]),
              onClick: _cache[3] || (_cache[3] = function() {
                return _ctx.clearQuery && _ctx.clearQuery.apply(_ctx, arguments);
              })
            },
            null,
            2
            /* CLASS */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "placeholder"])) : createCommentVNode("v-if", true), withDirectives(createBaseVNode(
        "div",
        {
          role: "group",
          "aria-label": "checkbox-group",
          class: normalizeClass(["tiny-checkbox-group tiny-transfer-panel__list", {
            "is-filterable": _ctx.filterable
          }])
        },
        [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.state.filteredData, function(item) {
            return openBlock(), createElementBlock("label", {
              class: normalizeClass(["tiny-checkbox tiny-transfer-panel__item", [item[_ctx.state.disabledProp] ? "is-disabled" : "", _ctx.state.checked.length > 0 && _ctx.state.checked.indexOf(item[_ctx.state.keyProp]) > -1 ? "is-checked" : ""]]),
              onClick: withModifiers(function($event) {
                return _ctx.checkedEvent(item[_ctx.state.keyProp], item[_ctx.state.disabledProp]);
              }, ["stop", "prevent"]),
              key: item[_ctx.state.keyProp]
            }, [createBaseVNode(
              "span",
              {
                class: normalizeClass(["tiny-checkbox__input", [item[_ctx.state.disabledProp] ? "is-disabled" : "", _ctx.state.checked.length > 0 && _ctx.state.checked.indexOf(item[_ctx.state.keyProp]) > -1 ? "is-checked" : ""]])
              },
              [createBaseVNode("span", _hoisted_4$3, [!(_ctx.state.checked.length > 0 && _ctx.state.checked.indexOf(item[_ctx.state.keyProp]) > -1) ? (openBlock(), createBlock(_component_icon_check, {
                key: 0,
                class: "tiny-svg-size"
              })) : (openBlock(), createBlock(_component_icon_checked_sur, {
                key: 1,
                class: "tiny-svg-size"
              }))]), createBaseVNode("input", {
                type: "checkbox",
                "aria-hidden": "false",
                disabled: item[_ctx.state.disabledProp],
                class: "tiny-checkbox__original",
                value: item[_ctx.state.keyProp]
              }, null, 8, _hoisted_5$2)],
              2
              /* CLASS */
            ), createBaseVNode("span", _hoisted_6$2, [createVNode(_component_option_content, {
              option: _ctx.optionRender(item)
            }, null, 8, ["option"])])], 10, _hoisted_3$3);
          }),
          128
          /* KEYED_FRAGMENT */
        ))],
        2
        /* CLASS */
      ), [[vShow, !_ctx.render]]), _ctx.render && _ctx.render.plugin ? (openBlock(), createBlock(
        resolveDynamicComponent(_ctx.toRaw(_ctx.render.plugin)),
        mergeProps({
          key: 1,
          ref: "plugin"
        }, _ctx.state.render, toHandlers(_ctx.state.render.on)),
        null,
        16
        /* FULL_PROPS */
      )) : createCommentVNode("v-if", true), withDirectives(createVNode(_component_tiny_pager, {
        onSizeChange: _ctx.sizesChange,
        ref: "pager",
        total: _ctx.state.pagerTotal.length,
        "current-page": _ctx.state.currentPage,
        "onUpdate:currentPage": _cache[7] || (_cache[7] = function($event) {
          return _ctx.state.currentPage = $event;
        }),
        "page-size": _ctx.pagerOp.pageVO.pageSize,
        layout: _ctx.pagerOp.pageVO.layout,
        "page-sizes": _ctx.pagerOp.pageVO.pageSizes,
        mode: _ctx.pagerOp.mode,
        "pager-count": _ctx.pagerOp.pagerCount,
        onCurrentChange: _ctx.handlePageChange
      }, null, 8, ["onSizeChange", "total", "current-page", "page-size", "layout", "page-sizes", "mode", "pager-count", "onCurrentChange"]), [[vShow, _ctx.showPager && _ctx.state.renderType === "TinyTable"]]), withDirectives(createBaseVNode(
        "p",
        {
          class: "tiny-transfer-panel__empty"
        },
        toDisplayString(_ctx.t("ui.transfer.noMatch")),
        513
        /* TEXT, NEED_PATCH */
      ), [[vShow, !_ctx.render && _ctx.state.hasNoMatch]]), withDirectives(createBaseVNode(
        "p",
        {
          class: "tiny-transfer-panel__empty"
        },
        toDisplayString(_ctx.t("ui.transfer.noData")),
        513
        /* TEXT, NEED_PATCH */
      ), [[vShow, !_ctx.render && _ctx.data.length === 0 && !_ctx.state.hasNoMatch]])],
      2
      /* CLASS */
    ), _ctx.$parent.slots["left-footer"] || _ctx.$parent.slots["right-footer"] ? (openBlock(), createElementBlock("p", _hoisted_7$1, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true)],
    2
    /* CLASS */
  );
}
var TransferPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$1]]);
var version$1 = "3.16.0";
TransferPanel.install = function(Vue) {
  Vue.component(TransferPanel.name, TransferPanel);
};
TransferPanel.version = version$1;
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
var _export_sfc = function _export_sfc22(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$6 = defineComponent({
  components: {
    TinyButton: Button,
    TinyTransferPanel: TransferPanel,
    IconDoubleLeft: index$6(),
    IconChevronLeft: index$7(),
    IconChevronRight: index$8(),
    IconDoubleRight: index$9()
  },
  props: [].concat(props, ["data", "titles", "buttonTexts", "filterPlaceholder", "filterMethod", "leftDefaultChecked", "rightDefaultChecked", "renderContent", "modelValue", "format", "filterable", "props", "targetOrder", "dropConfig", "showAllBtn", "toLeftDisable", "toRightDisable", "renderType", "leftColumns", "rightColumns", "columns", "pageVO", "pagerOp", "showPager", "render", "treeOp", "beforeTransfer"]),
  setup: function setup$12(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1
    });
  }
});
var _hoisted_1$3 = {
  class: "tiny-transfer"
};
var _hoisted_2$2 = {
  key: 1,
  class: "tiny-transfer-panel transfer-custom-left-panel"
};
var _hoisted_3$2 = {
  class: "tiny-transfer__buttons"
};
var _hoisted_4$2 = {
  class: "defaultButton"
};
var _hoisted_5$1 = {
  key: 0
};
var _hoisted_6$1 = {
  key: 0
};
var _hoisted_7 = {
  key: 3,
  class: "tiny-transfer-panel transfer-custom-right-panel"
};
function _sfc_render(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_transfer_panel = resolveComponent("tiny-transfer-panel");
  var _component_icon_double_right = resolveComponent("icon-double-right");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _component_icon_chevron_right = resolveComponent("icon-chevron-right");
  var _component_icon_chevron_left = resolveComponent("icon-chevron-left");
  var _component_icon_double_left = resolveComponent("icon-double-left");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [!_ctx.slots["right-panel"] && !_ctx.slots["left-panel"] ? (openBlock(), createBlock(_component_tiny_transfer_panel, mergeProps({
    key: 0,
    id: "leftPanel"
  }, _ctx.$props, {
    "option-render": _ctx.state.optionRender,
    "tree-op": _ctx.treeOp,
    render: _ctx.render,
    "show-pager": _ctx.showPager,
    "pager-op": _ctx.pagerOp,
    ref: "leftPanel",
    "page-v-o": _ctx.pageVO,
    "render-type": _ctx.renderType,
    columns: _ctx.leftColumns || _ctx.columns,
    data: _ctx.state.sourceData,
    title: _ctx.titles[0] || _ctx.t("ui.transfer.titles.0"),
    "default-checked": _ctx.leftDefaultChecked,
    placeholder: _ctx.filterPlaceholder || _ctx.t("ui.transfer.filterPlaceholder"),
    onCheckedChange: _ctx.onSourceCheckedChange
  }), {
    default: withCtx(function() {
      return [renderSlot(_ctx.$slots, "left-footer"), renderSlot(_ctx.$slots, "filter")];
    }),
    _: 3
    /* FORWARDED */
  }, 16, ["option-render", "tree-op", "render", "show-pager", "pager-op", "page-v-o", "render-type", "columns", "data", "title", "default-checked", "placeholder", "onCheckedChange"])) : createCommentVNode("v-if", true), _ctx.slots["left-panel"] && _ctx.slots["right-panel"] ? (openBlock(), createElementBlock("div", _hoisted_2$2, [renderSlot(_ctx.$slots, "left-panel")])) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_3$2, [renderSlot(_ctx.$slots, "button-panel", {}, function() {
    return [_ctx.showAllBtn ? (openBlock(), createBlock(_component_tiny_button, {
      key: 0,
      type: "primary",
      disabled: _ctx.state.leftData.length === 0,
      class: "tiny-transfer__button",
      onClick: _cache[0] || (_cache[0] = function($event) {
        return _ctx.addToRight("all");
      })
    }, {
      default: withCtx(function() {
        return [createVNode(_component_icon_double_right, {
          class: "tiny-svg-size"
        })];
      }),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_4$2, [createVNode(_component_tiny_button, {
      type: "primary",
      class: normalizeClass(["tiny-transfer__button", _ctx.state.hasButtonTexts ? "is-with-texts" : ""]),
      onClick: _ctx.addToRight,
      disabled: _ctx.toLeftDisable && _ctx.state.leftChecked.length === 0
    }, {
      default: withCtx(function() {
        return [_ctx.buttonTexts[1] !== void 0 ? (openBlock(), createElementBlock(
          "span",
          _hoisted_5$1,
          toDisplayString(_ctx.buttonTexts[1]),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true), createVNode(_component_icon_chevron_right, {
          class: "tiny-svg-size"
        })];
      }),
      _: 1
      /* STABLE */
    }, 8, ["class", "onClick", "disabled"]), createVNode(_component_tiny_button, {
      type: "primary",
      class: normalizeClass(["tiny-transfer__button", _ctx.state.hasButtonTexts ? "is-with-texts" : ""]),
      onClick: _ctx.addToLeft,
      disabled: _ctx.toRightDisable && _ctx.state.rightChecked.length === 0
    }, {
      default: withCtx(function() {
        return [createVNode(_component_icon_chevron_left, {
          class: "tiny-svg-size"
        }), _ctx.buttonTexts[0] !== void 0 ? (openBlock(), createElementBlock(
          "span",
          _hoisted_6$1,
          toDisplayString(_ctx.buttonTexts[0]),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)];
      }),
      _: 1
      /* STABLE */
    }, 8, ["class", "onClick", "disabled"])]), _ctx.showAllBtn ? (openBlock(), createBlock(_component_tiny_button, {
      key: 1,
      type: "primary",
      disabled: _ctx.state.rightData.length === 0,
      class: "tiny-transfer__button",
      onClick: _cache[1] || (_cache[1] = function($event) {
        return _ctx.addToLeft("all");
      })
    }, {
      default: withCtx(function() {
        return [createVNode(_component_icon_double_left, {
          class: "tiny-svg-size"
        })];
      }),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])) : createCommentVNode("v-if", true)];
  })]), !_ctx.slots["right-panel"] && !_ctx.slots["left-panel"] ? (openBlock(), createBlock(_component_tiny_transfer_panel, mergeProps({
    key: 2
  }, _ctx.$props, {
    id: "rightPanel",
    render: _ctx.render,
    "option-render": _ctx.state.optionRender,
    "tree-op": _ctx.treeOp,
    "show-pager": _ctx.showPager,
    "is-to-left": _ctx.state.isToLeft,
    "pager-op": _ctx.pagerOp,
    ref: "rightPanel",
    "page-v-o": _ctx.pageVO,
    "render-type": _ctx.renderType,
    columns: _ctx.rightColumns || _ctx.columns,
    data: _ctx.state.targetData,
    title: _ctx.titles[1] || _ctx.t("ui.transfer.titles.1"),
    "default-checked": _ctx.rightDefaultChecked,
    placeholder: _ctx.filterPlaceholder || _ctx.t("ui.transfer.filterPlaceholder"),
    onCheckedChange: _ctx.onTargetCheckedChange
  }), {
    default: withCtx(function() {
      return [renderSlot(_ctx.$slots, "right-footer"), renderSlot(_ctx.$slots, "filter")];
    }),
    _: 3
    /* FORWARDED */
  }, 16, ["render", "option-render", "tree-op", "show-pager", "is-to-left", "pager-op", "page-v-o", "render-type", "columns", "data", "title", "default-checked", "placeholder", "onCheckedChange"])) : createCommentVNode("v-if", true), _ctx.slots["left-panel"] && _ctx.slots["right-panel"] ? (openBlock(), createElementBlock("div", _hoisted_7, [renderSlot(_ctx.$slots, "right-panel")])) : createCommentVNode("v-if", true)]);
}
var pc = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render]]);
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
var $constants = {
  ISCHECKED: "is-checked",
  DROPPANEL: ".tiny-transfer-panel__list",
  TRANSFERPANEL: ".tiny-transfer-panel__item"
};
var transferProps = _extends({}, $props, {
  _constants: {
    type: Object,
    default: function _default3() {
      return $constants;
    }
  },
  buttonTexts: {
    type: Array,
    default: function _default22() {
      return [];
    }
  },
  columns: Array,
  leftColumns: Array,
  rightColumns: Array,
  data: {
    type: Array,
    default: function _default32() {
      return [];
    }
  },
  dropConfig: Object,
  filterMethod: Function,
  filterPlaceholder: {
    type: String,
    default: ""
  },
  filterable: Boolean,
  format: {
    type: Object,
    default: function _default4() {
      return {};
    }
  },
  leftDefaultChecked: {
    type: Array,
    default: function _default5() {
      return [];
    }
  },
  modelValue: {
    type: Array,
    default: function _default6() {
      return [];
    }
  },
  pagerOp: {
    type: Object,
    default: function _default7() {
      return {
        mode: "fixed",
        pageVO: {
          currentPage: 1,
          pageSize: 10
        }
      };
    }
  },
  props: {
    type: Object,
    default: function _default8() {
      return {
        label: "label",
        key: "key",
        disabled: "disabled"
      };
    }
  },
  render: Object,
  renderContent: Function,
  renderType: String,
  rightDefaultChecked: {
    type: Array,
    default: function _default9() {
      return [];
    }
  },
  showAllBtn: Boolean,
  showPager: {
    type: Boolean,
    default: false
  },
  targetOrder: {
    type: String,
    default: "original"
  },
  titles: {
    type: Array,
    default: function _default10() {
      return [];
    }
  },
  toLeftDisable: {
    type: Boolean,
    default: true
  },
  toRightDisable: {
    type: Boolean,
    default: true
  },
  treeOp: Object,
  beforeTransfer: Function
});
var Transfer = defineComponent({
  name: $prefix + "Transfer",
  props: transferProps,
  setup: function setup2(props2, context) {
    return $setup({
      props: props2,
      context,
      template
    });
  }
});
var version = "3.16.0";
Transfer.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
Transfer.install = function(Vue) {
  Vue.component(Transfer.name, Transfer);
};
Transfer.version = version;
const _sfc_main$5 = /* @__PURE__ */ defineComponent$1({
  __name: "coach-from",
  props: {
    projectData: Object,
    coachPlay: Boolean
  },
  setup(__props, { expose: __expose }) {
    const props2 = __props;
    const { coachPlay } = toRefs(props2);
    const state = reactive({
      filterOptions: {}
    });
    const { t } = useI18n();
    const coachFormRef = ref();
    const disabled = ref(false);
    const handleBlur = () => {
      const start = new Date(
        JSON.parse(JSON.stringify(state.filterOptions.startTime))
      ).getTime();
      const end = new Date(
        JSON.parse(JSON.stringify(state.filterOptions.endTime))
      ).getTime();
      if (end < start) {
        state.filterOptions.endTime = "";
        TINYModal.message({
          message: t("userInfo.time.message"),
          status: "error"
        });
      }
    };
    const rulesType = {
      required: true,
      trigger: "blur"
    };
    const rulesSelect = {
      required: true,
      message: "必选",
      trigger: "blur"
    };
    const rules = computed(() => {
      return {
        sector: coachPlay.value ? [rulesType] : "",
        position: coachPlay.value ? [rulesSelect] : "",
        hr: coachPlay.value ? [rulesSelect] : "",
        teacher: coachPlay.value ? [rulesSelect] : "",
        startTime: coachPlay.value ? [rulesType] : "",
        endTime: coachPlay.value ? [rulesType] : ""
      };
    });
    const coachValid = () => {
      let coachValidate = false;
      coachFormRef.value.validate((valid) => {
        if (valid) {
          disabled.value = true;
        }
        coachValidate = valid;
      });
      return coachValidate;
    };
    const coachReset = () => {
      disabled.value = false;
      state.filterOptions = {};
    };
    __expose({
      coachValid,
      coachReset
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Layout), null, {
        default: withCtx(() => [
          createVNode(unref(Form), {
            ref_key: "coachFormRef",
            ref: coachFormRef,
            model: state.filterOptions,
            rules: rules.value,
            "label-width": "150px",
            "label-align": true,
            "label-position": "left",
            size: "small"
          }, {
            default: withCtx(() => [
              createVNode(unref(Row), {
                flex: true,
                justify: "left"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), {
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("stepForm.coach.culture"),
                        prop: "sector"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: state.filterOptions.sector,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.filterOptions.sector = $event),
                            disabled: disabled.value,
                            placeholder: _ctx.$t("searchTable.form.input")
                          }, null, 8, ["modelValue", "disabled", "placeholder"])
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
                        label: _ctx.$t("stepForm.coach.position"),
                        prop: "position"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Select), {
                            modelValue: state.filterOptions.position,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.filterOptions.position = $event),
                            disabled: disabled.value,
                            placeholder: _ctx.$t("baseForm.form.label.placeholder"),
                            multiple: ""
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                (openBlock(true), createElementBlock(Fragment, null, renderList((_a = __props.projectData) == null ? void 0 : _a.position, (item) => {
                                  return openBlock(), createBlock(unref(Option), {
                                    key: item.value,
                                    label: item.label,
                                    value: item.value
                                  }, null, 8, ["label", "value"]);
                                }), 128))
                              ];
                            }),
                            _: 1
                          }, 8, ["modelValue", "disabled", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Row), {
                flex: true,
                justify: "left"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), {
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: "HR",
                        prop: "hr"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Select), {
                            modelValue: state.filterOptions.hr,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => state.filterOptions.hr = $event),
                            disabled: disabled.value,
                            placeholder: _ctx.$t("baseForm.form.label.placeholder"),
                            multiple: ""
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                (openBlock(true), createElementBlock(Fragment, null, renderList((_a = __props.projectData) == null ? void 0 : _a.HR, (item) => {
                                  return openBlock(), createBlock(unref(Option), {
                                    key: item.value,
                                    label: item.label,
                                    value: item.value
                                  }, null, 8, ["label", "value"]);
                                }), 128))
                              ];
                            }),
                            _: 1
                          }, 8, ["modelValue", "disabled", "placeholder"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Col), {
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("stepForm.coach.mentor"),
                        prop: "teacher"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Select), {
                            modelValue: state.filterOptions.teacher,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.filterOptions.teacher = $event),
                            disabled: disabled.value,
                            placeholder: _ctx.$t("baseForm.form.label.placeholder"),
                            multiple: ""
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                (openBlock(true), createElementBlock(Fragment, null, renderList((_a = __props.projectData) == null ? void 0 : _a.mentor, (item) => {
                                  return openBlock(), createBlock(unref(Option), {
                                    key: item,
                                    label: item,
                                    value: item
                                  }, null, 8, ["label", "value"]);
                                }), 128))
                              ];
                            }),
                            _: 1
                          }, 8, ["modelValue", "disabled", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Row), {
                flex: true,
                justify: "left"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), {
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("stepForm.coach.startTime"),
                        prop: "startTime"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DatePicker), {
                            modelValue: state.filterOptions.startTime,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => state.filterOptions.startTime = $event),
                            disabled: disabled.value,
                            placeholder: _ctx.$t("searchTable.form.input")
                          }, null, 8, ["modelValue", "disabled", "placeholder"])
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
                        label: _ctx.$t("stepForm.coach.endTime"),
                        prop: "endTime"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DatePicker), {
                            modelValue: state.filterOptions.endTime,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => state.filterOptions.endTime = $event),
                            disabled: disabled.value,
                            placeholder: _ctx.$t("searchTable.form.input"),
                            onBlur: handleBlur
                          }, null, 8, ["modelValue", "disabled", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ]),
        _: 1
      });
    };
  }
});
const coachFrom_vue_vue_type_style_index_0_scoped_2ab0c792_lang = "";
const coachfrom = /* @__PURE__ */ _export_sfc$2(_sfc_main$5, [["__scopeId", "data-v-2ab0c792"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent$1({
  __name: "director-from",
  props: {
    projectData: Object,
    directorPlay: Boolean
  },
  setup(__props, { expose: __expose }) {
    const props2 = __props;
    const { directorPlay } = toRefs(props2);
    const state = reactive({
      filterOptions: {}
    });
    const { t } = useI18n();
    const directorFormRef = ref();
    const disabled = ref(false);
    const rulesType = {
      required: true,
      trigger: "blur"
    };
    const rulesSelect = {
      required: true,
      message: "必选",
      trigger: "blur"
    };
    const rules = computed(() => {
      return {
        director: directorPlay.value ? [rulesSelect] : "",
        remark: directorPlay.value ? [rulesType] : "",
        startTime: directorPlay.value ? [rulesType] : "",
        endTime: directorPlay.value ? [rulesType] : ""
      };
    });
    const handleBlur = () => {
      const start = new Date(
        JSON.parse(JSON.stringify(state.filterOptions.startTime))
      ).getTime();
      const end = new Date(
        JSON.parse(JSON.stringify(state.filterOptions.endTime))
      ).getTime();
      if (end < start) {
        state.filterOptions.endTime = "";
        TINYModal.message({
          message: t("userInfo.time.message"),
          status: "error"
        });
      }
    };
    const directorValid = () => {
      let directorValidate = false;
      directorFormRef.value.validate((valid) => {
        if (valid) {
          disabled.value = true;
        }
        directorValidate = valid;
      });
      return directorValidate;
    };
    const directorReset = () => {
      disabled.value = false;
      state.filterOptions = {};
    };
    __expose({
      directorValid,
      directorReset
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Layout), null, {
        default: withCtx(() => [
          createVNode(unref(Form), {
            ref_key: "directorFormRef",
            ref: directorFormRef,
            model: state.filterOptions,
            rules: rules.value,
            "label-width": "150px",
            "label-align": true,
            "label-position": "left",
            size: "small"
          }, {
            default: withCtx(() => [
              createVNode(unref(Row), {
                flex: true,
                justify: "left"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), {
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("stepForm.dire.supervisor"),
                        prop: "director"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Select), {
                            modelValue: state.filterOptions.director,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.filterOptions.director = $event),
                            disabled: disabled.value,
                            placeholder: _ctx.$t("baseForm.form.label.placeholder"),
                            multiple: ""
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                (openBlock(true), createElementBlock(Fragment, null, renderList((_a = __props.projectData) == null ? void 0 : _a.director, (item) => {
                                  return openBlock(), createBlock(unref(Option), {
                                    key: item,
                                    label: _ctx.$t(item),
                                    value: item
                                  }, null, 8, ["label", "value"]);
                                }), 128))
                              ];
                            }),
                            _: 1
                          }, 8, ["modelValue", "disabled", "placeholder"])
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
                        label: _ctx.$t("stepForm.dire.remarks"),
                        prop: "remark"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: state.filterOptions.remark,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.filterOptions.remark = $event),
                            disabled: disabled.value
                          }, null, 8, ["modelValue", "disabled"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Row), {
                flex: true,
                justify: "left"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), {
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("stepForm.dire.startTime"),
                        prop: "startTime"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DatePicker), {
                            modelValue: state.filterOptions.startTime,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => state.filterOptions.startTime = $event),
                            disabled: disabled.value
                          }, null, 8, ["modelValue", "disabled"])
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
                        label: _ctx.$t("stepForm.dire.endTime"),
                        prop: "endTime"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DatePicker), {
                            modelValue: state.filterOptions.endTime,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.filterOptions.endTime = $event),
                            disabled: disabled.value,
                            onBlur: handleBlur
                          }, null, 8, ["modelValue", "disabled"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$2 = { class: "contain" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent$1({
  __name: "target-from",
  setup(__props, { expose: __expose }) {
    const targetFormRef = ref();
    const arr = reactive([]);
    for (let i = 0; i <= 15; i += 1) {
      arr.push({
        key: i,
        label: `Options ${i}`,
        disabled: false
      });
    }
    const length = ref([]);
    const targetSubmit = () => {
      if (length.value.length > 0) {
        arr.forEach((item) => {
          item.disabled = true;
        });
        return true;
      }
      return false;
    };
    const targetReset = () => {
      length.value = [];
    };
    __expose({
      targetReset,
      targetSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(Transfer), {
          ref_key: "targetFormRef",
          ref: targetFormRef,
          modelValue: length.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => length.value = $event),
          data: arr,
          titles: [_ctx.$t("stepForm.target.list"), _ctx.$t("stepForm.target.sure")]
        }, null, 8, ["modelValue", "data", "titles"])
      ]);
    };
  }
});
const targetFrom_vue_vue_type_style_index_0_scoped_14c87db0_lang = "";
const targetfrom = /* @__PURE__ */ _export_sfc$2(_sfc_main$3, [["__scopeId", "data-v-14c87db0"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent$1({
  __name: "summation-from",
  props: {
    summationPlay: Boolean
  },
  setup(__props, { expose: __expose }) {
    const props2 = __props;
    const { summationPlay } = toRefs(props2);
    const state = reactive({
      filterOptions: {}
    });
    const summarizeRef = ref();
    const disabled = ref(false);
    const rulesType = {
      required: true,
      trigger: "blur"
    };
    const rules = computed(() => {
      return {
        summarize: summationPlay.value ? [rulesType] : ""
      };
    });
    const summarizeValid = () => {
      let sumValid = false;
      summarizeRef.value.validate((valid) => {
        if (valid) {
          disabled.value = true;
        }
        sumValid = valid;
      });
      return sumValid;
    };
    const summarizeReset = () => {
      disabled.value = false;
      state.filterOptions = {};
    };
    __expose({
      summarizeValid,
      summarizeReset
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Layout), null, {
        default: withCtx(() => [
          createVNode(unref(Form), {
            ref_key: "summarizeRef",
            ref: summarizeRef,
            model: state.filterOptions,
            rules: rules.value,
            "label-width": "100px",
            "label-align": true,
            "label-position": "left",
            size: "small"
          }, {
            default: withCtx(() => [
              createVNode(unref(Row), {
                flex: true,
                justify: "left"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), {
                    span: 4,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("stepForm.sum.self"),
                        prop: "summarize"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: state.filterOptions.summarize,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.filterOptions.summarize = $event),
                            disabled: disabled.value,
                            type: "textarea"
                          }, null, 8, ["modelValue", "disabled"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$1 = { id: "container" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = {
  key: 1,
  class: "targetStyle"
};
const _hoisted_4$1 = { key: 2 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent$1({
  __name: "collapse-from",
  setup(__props, { expose: __expose }) {
    const state = reactive({
      loading: null
    });
    const { t } = useI18n();
    const appStore = useAppStore();
    const coachFormRef = ref();
    const directorRef = ref();
    const targetRef = ref();
    const summationRef = ref();
    const directorVis = ref(false);
    const targetVis = ref(false);
    const summationVis = ref(false);
    const coachPlay = ref(true);
    const directorPlay = ref(true);
    const summationPlay = ref(true);
    const projectData = reactive({
      position: [],
      HR: [],
      mentor: [],
      director: []
    });
    const fetchData = async () => {
      state.loading = Loadings.service({
        text: "loading...",
        target: document.getElementById("container"),
        background: "rgba(0, 0, 0, 0.7)"
      });
      try {
        const { data } = await getStepData();
        projectData.position = data.position;
        projectData.HR = data.HR;
        projectData.mentor = data.mentor;
        projectData.director = data.director;
      } finally {
        state.loading.close();
      }
    };
    onMounted(() => {
      fetchData();
    });
    watch(
      appStore.$state,
      (newValue, oldValue) => {
        if (newValue.step === 1) {
          directorVis.value = true;
        } else if (newValue.step === 2) {
          targetVis.value = true;
        } else if (newValue.step === 3) {
          summationVis.value = true;
        }
      },
      { immediate: true }
    );
    const collapseReset = () => {
      if (appStore.step === 0) {
        coachFormRef.value.coachReset();
      } else if (appStore.step === 1) {
        directorRef.value.directorReset();
      } else if (appStore.step === 2) {
        targetRef.value.targetReset();
      } else if (appStore.step === 3) {
        summationRef.value.summarizeReset();
      }
    };
    const packaged = (vaild, index3, key) => {
      if (vaild) {
        TINYModal.message({
          message: t("baseForm.form.submit.success"),
          status: "success"
        });
        appStore.updateStep(index3);
      } else {
        TINYModal.message({
          message: index3 !== 3 ? t("baseForm.form.submit.error") : t("stepForm.error.target"),
          status: "error"
        });
      }
    };
    const collapseSubmit = () => {
      if (appStore.step === 0) {
        const vaild = coachFormRef.value.coachValid();
        packaged(vaild, 1);
      } else if (appStore.step === 1) {
        const vaild = directorRef.value.directorValid();
        packaged(vaild, 2);
      } else if (appStore.step === 2) {
        const vaild = targetRef.value.targetSubmit();
        packaged(vaild, 3);
      } else if (appStore.step === 3) {
        const vaild = summationRef.value.summarizeValid();
        packaged(vaild, 4);
      }
    };
    const collapseRestore = () => {
      appStore.updateStep(0);
      coachFormRef.value.coachReset();
      directorRef.value.directorReset();
      targetRef.value.targetReset();
      summationRef.value.summarizeReset();
      directorVis.value = false;
      targetVis.value = false;
      summationVis.value = false;
    };
    __expose({
      collapseReset,
      collapseSubmit,
      collapseRestore
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", null, [
          createBaseVNode("h3", null, toDisplayString(_ctx.$t("stepForm.collapse.base")), 1),
          createVNode(coachfrom, {
            ref_key: "coachFormRef",
            ref: coachFormRef,
            "project-data": projectData,
            "coach-play": coachPlay.value
          }, null, 8, ["project-data", "coach-play"])
        ]),
        directorVis.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createBaseVNode("h3", null, toDisplayString(_ctx.$t("stepForm.collapse.supervisor")), 1),
          createVNode(_sfc_main$4, {
            ref_key: "directorRef",
            ref: directorRef,
            "project-data": projectData,
            "director-play": directorPlay.value
          }, null, 8, ["project-data", "director-play"])
        ])) : createCommentVNode("", true),
        targetVis.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          createBaseVNode("h3", null, toDisplayString(_ctx.$t("stepForm.collapse.goals")), 1),
          createVNode(targetfrom, {
            ref_key: "targetRef",
            ref: targetRef,
            "project-data": projectData
          }, null, 8, ["project-data"])
        ])) : createCommentVNode("", true),
        summationVis.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          createBaseVNode("h3", null, toDisplayString(_ctx.$t("stepForm.collapse.summary")), 1),
          createVNode(_sfc_main$2, {
            ref_key: "summationRef",
            ref: summationRef,
            "project-data": projectData,
            "summation-play": summationPlay.value
          }, null, 8, ["project-data", "summation-play"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const collapseFrom_vue_vue_type_style_index_0_scoped_4fd609cb_lang = "";
const collapsefrom = /* @__PURE__ */ _export_sfc$2(_sfc_main$1, [["__scopeId", "data-v-4fd609cb"]]);
const _hoisted_1 = { class: "container-step" };
const _hoisted_2 = { class: "general-card" };
const _hoisted_3 = { class: "general-top" };
const _hoisted_4 = { class: "general-contain" };
const _hoisted_5 = { class: "general-foot" };
const _hoisted_6 = { class: "general-btn" };
const _sfc_main = /* @__PURE__ */ defineComponent$1({
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const appStore = useAppStore();
    const collapseRef = ref();
    const normalActive = computed(() => appStore.step);
    function handleFormReset() {
      collapseRef.value.collapseReset();
    }
    function handleSubmit() {
      collapseRef.value.collapseSubmit();
    }
    function handleFormRestore() {
      collapseRef.value.collapseRestore();
    }
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_Breadcrumb, { items: ["menu.form", "menu.form.step"] }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(headtop)
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", null, toDisplayString(_ctx.$t("stepForm.coaching.process")), 1),
            createBaseVNode("div", null, [
              createVNode(unref(TimeLine), {
                data: [
                  { name: unref(t)("stepForm.start.coaching") },
                  { name: unref(t)("stepForm.immediate.supervisor") },
                  { name: unref(t)("stepForm.overall.goals") },
                  { name: unref(t)("stepForm.overall.summary") },
                  { name: unref(t)("stepForm.overall.end") }
                ],
                active: normalActive.value,
                type: "normal"
              }, null, 8, ["data", "active"])
            ])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(collapsefrom, {
              ref_key: "collapseRef",
              ref: collapseRef
            }, null, 512),
            createBaseVNode("div", _hoisted_6, [
              normalActive.value !== 4 ? (openBlock(), createBlock(unref(Button), {
                key: 0,
                type: "primary",
                "native-type": "submit",
                onClick: handleSubmit
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("stepForm.button.submit")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              normalActive.value !== 4 ? (openBlock(), createBlock(unref(Button), {
                key: 1,
                onClick: handleFormReset
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("stepForm.button.cancel")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              normalActive.value === 4 ? (openBlock(), createBlock(unref(Button), {
                key: 2,
                onClick: handleFormRestore
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("stepForm.button.restore")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ])
          ])
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_dcaaabb9_lang = "";
const index = /* @__PURE__ */ _export_sfc$2(_sfc_main, [["__scopeId", "data-v-dcaaabb9"]]);
export {
  index as default
};
