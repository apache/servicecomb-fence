import { u as openBlock, v as createElementBlock, w as createBaseVNode, k as resolveComponent, l as createVNode, H as withCtx, J as createTextVNode, E as toDisplayString, z as createCommentVNode, y as createBlock, A as normalizeClass, I as withDirectives, K as vShow, L as Fragment, M as renderList, O as withModifiers, F as mergeProps, R as toHandlers, B as resolveDynamicComponent, D as renderSlot, d as defineComponent$1, a8 as toRefs, a7 as reactive, $ as useI18n, r as ref, c as computed, V as unref, j as onMounted, a1 as watch, Y as pushScopeId, Z as popScopeId } from "./vue.js";
import { s as svg, r as copyArray, t as __spreadProps, v as __spreadValues, d as defineComponent, b as $prefix, C as Checkbox, I as Input, w as index$4, y as index$5, a as setup, B as Button, z as index$8, p as props, $ as $props, c as $setup, L as Layout, T as TINYModal, _ as _export_sfc$2, A as useAppStore, u as useUserStore } from "./index.js";
import { T as TimeLine } from "./index32.js";
import { P as Pager, i as index$6, b as index$7, c as index$9, R as Row, C as Col, L as Loadings } from "./index26.js";
import { a as getStepData } from "./form.js";
import { D as DatePicker } from "./index28.js";
import { F as FormItem, a as Form } from "./index24.js";
import { S as Select, O as Option } from "./index30.js";
import "./chevron-up.js";
import "./index25.js";
var _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$6 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "arrow-down_svg__st0",
    d: "m13 17.7 5.4-5.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7.1 7.1c-.4.4-1 .4-1.4 0-.2-.2-.3-.5-.3-.8 0 .5.5 1 1 1s1-.4 1-1c0 .3-.1.5-.3.7-.4.4-1 .4-1.4 0l-7.1-7.1c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.4 5.4V4c0-.6.4-1 1-1s1 .4 1 1v13.7z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$6 = [_hoisted_2$6];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, [].concat(_hoisted_3$6));
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
var _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$5 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "arrow-up_svg__st0",
    d: "m11 6.3-5.4 5.4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l7.1-7.1c.4-.4 1-.4 1.4 0l7.1 7.1c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L13 6.3V20c0 .6-.4 1-1 1s-1-.4-1-1V6.3z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$5 = [_hoisted_2$5];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, [].concat(_hoisted_3$5));
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
var _sfc_main$8 = defineComponent({
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
var _hoisted_1$5 = {
  class: "tiny-transfer-panel__header"
};
var _hoisted_2$4 = {
  key: 0,
  class: "headSort"
};
var _hoisted_3$4 = ["onClick"];
var _hoisted_4$4 = {
  class: "tiny-checkbox__inner"
};
var _hoisted_5$3 = ["disabled", "value"];
var _hoisted_6$3 = {
  class: "tiny-checkbox__label"
};
var _hoisted_7$2 = {
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
    [createBaseVNode("p", _hoisted_1$5, [createVNode(_component_tiny_checkbox, {
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
        ), _ctx.render && _ctx.state.renderType !== "TinyTable" && _ctx.data.flag === "sort" ? (openBlock(), createElementBlock("div", _hoisted_2$4, [createBaseVNode("div", {
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
              [createBaseVNode("span", _hoisted_4$4, [!(_ctx.state.checked.length > 0 && _ctx.state.checked.indexOf(item[_ctx.state.keyProp]) > -1) ? (openBlock(), createBlock(_component_icon_check, {
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
              }, null, 8, _hoisted_5$3)],
              2
              /* CLASS */
            ), createBaseVNode("span", _hoisted_6$3, [createVNode(_component_option_content, {
              option: _ctx.optionRender(item)
            }, null, 8, ["option"])])], 10, _hoisted_3$4);
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
    ), _ctx.$parent.slots["left-footer"] || _ctx.$parent.slots["right-footer"] ? (openBlock(), createElementBlock("p", _hoisted_7$2, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true)],
    2
    /* CLASS */
  );
}
var TransferPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["render", _sfc_render$1]]);
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
var _sfc_main$7 = defineComponent({
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
var _hoisted_1$4 = {
  class: "tiny-transfer"
};
var _hoisted_2$3 = {
  key: 1,
  class: "tiny-transfer-panel transfer-custom-left-panel"
};
var _hoisted_3$3 = {
  class: "tiny-transfer__buttons"
};
var _hoisted_4$3 = {
  class: "defaultButton"
};
var _hoisted_5$2 = {
  key: 0
};
var _hoisted_6$2 = {
  key: 0
};
var _hoisted_7$1 = {
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
  return openBlock(), createElementBlock("div", _hoisted_1$4, [!_ctx.slots["right-panel"] && !_ctx.slots["left-panel"] ? (openBlock(), createBlock(_component_tiny_transfer_panel, mergeProps({
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
  }, 16, ["option-render", "tree-op", "render", "show-pager", "pager-op", "page-v-o", "render-type", "columns", "data", "title", "default-checked", "placeholder", "onCheckedChange"])) : createCommentVNode("v-if", true), _ctx.slots["left-panel"] && _ctx.slots["right-panel"] ? (openBlock(), createElementBlock("div", _hoisted_2$3, [renderSlot(_ctx.$slots, "left-panel")])) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_3$3, [renderSlot(_ctx.$slots, "button-panel", {}, function() {
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
    }, 8, ["disabled"])) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_4$3, [createVNode(_component_tiny_button, {
      type: "primary",
      class: normalizeClass(["tiny-transfer__button", _ctx.state.hasButtonTexts ? "is-with-texts" : ""]),
      onClick: _ctx.addToRight,
      disabled: _ctx.toLeftDisable && _ctx.state.leftChecked.length === 0
    }, {
      default: withCtx(function() {
        return [_ctx.buttonTexts[1] !== void 0 ? (openBlock(), createElementBlock(
          "span",
          _hoisted_5$2,
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
          _hoisted_6$2,
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
  }, 16, ["render", "option-render", "tree-op", "show-pager", "is-to-left", "pager-op", "page-v-o", "render-type", "columns", "data", "title", "default-checked", "placeholder", "onCheckedChange"])) : createCommentVNode("v-if", true), _ctx.slots["left-panel"] && _ctx.slots["right-panel"] ? (openBlock(), createElementBlock("div", _hoisted_7$1, [renderSlot(_ctx.$slots, "right-panel")])) : createCommentVNode("v-if", true)]);
}
var pc = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render]]);
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
const _sfc_main$6 = /* @__PURE__ */ defineComponent$1({
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
const coachfrom = /* @__PURE__ */ _export_sfc$2(_sfc_main$6, [["__scopeId", "data-v-2ab0c792"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent$1({
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
const _hoisted_1$3 = { class: "contain" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent$1({
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
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
const targetfrom = /* @__PURE__ */ _export_sfc$2(_sfc_main$4, [["__scopeId", "data-v-14c87db0"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent$1({
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
const _hoisted_1$2 = { id: "container" };
const _hoisted_2$2 = { key: 0 };
const _hoisted_3$2 = {
  key: 1,
  class: "targetStyle"
};
const _hoisted_4$2 = { key: 2 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent$1({
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
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", null, [
          createBaseVNode("h3", null, toDisplayString(_ctx.$t("stepForm.collapse.base")), 1),
          createVNode(coachfrom, {
            ref_key: "coachFormRef",
            ref: coachFormRef,
            "project-data": projectData,
            "coach-play": coachPlay.value
          }, null, 8, ["project-data", "coach-play"])
        ]),
        directorVis.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          createBaseVNode("h3", null, toDisplayString(_ctx.$t("stepForm.collapse.supervisor")), 1),
          createVNode(_sfc_main$5, {
            ref_key: "directorRef",
            ref: directorRef,
            "project-data": projectData,
            "director-play": directorPlay.value
          }, null, 8, ["project-data", "director-play"])
        ])) : createCommentVNode("", true),
        targetVis.value ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          createBaseVNode("h3", null, toDisplayString(_ctx.$t("stepForm.collapse.goals")), 1),
          createVNode(targetfrom, {
            ref_key: "targetRef",
            ref: targetRef,
            "project-data": projectData
          }, null, 8, ["project-data"])
        ])) : createCommentVNode("", true),
        summationVis.value ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
          createBaseVNode("h3", null, toDisplayString(_ctx.$t("stepForm.collapse.summary")), 1),
          createVNode(_sfc_main$3, {
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
const collapsefrom = /* @__PURE__ */ _export_sfc$2(_sfc_main$2, [["__scopeId", "data-v-4fd609cb"]]);
const _imports_0 = "/ui/admin/assets/user-head.png";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFPElEQVRYR7VYW2yURRT+Zrfd3naXllJ7ozaFNEEbiVYLCWkTaaqIPJDQgjHygNAWg/qCMTUkqHiJ1nh5ASOFYkgwRtua8GCq2KwmJWrVVoMpElGw1N7ofS/d+46Z2f3//vvfZgs4L3uZmTPffOc7Z84MQaJRSokngGYAB2JAFSjshACUAuzzjjcCL6EYBtDpyMRpQghla/ClfJQWR4M4Rynqb2thZpJZ5KYV3xMbkjbHPnl3YsMWC1zWDOzNIWSCMGa8QfQxMGp7GnCCBdXjJWxGBCvNEQKXIwMNxO2nLQA69JgRrS/agBqQyB6AVgboRwps1mF45QSJEIj0YMEAcQeoB4Cdj73TWxZRou33Ek+AShqT9Sj5XC1CzQYFjKijVGNPNZ/9ZC6TYkJWvRTmRlFhlAZE44WEsRTDGBK51qhfBEA9L5XxtwXo79EgPv9qDmM3w3zt0rvSseex1VhflnGre4wzZOQiM6s+fwyvnhjH2iIbttyfw4f+8JsPo5MhHHu2BDlZFk2MpBKExBuksqpFIlT2D/8VwIlPp/D24TI4si0ckMcXw0sfjOLQk4WoWp+pCRL1HxoXMlEzQHKqFxGt2OLQH0s43T2ND4+WJ8069PoImpsKUH1PttZaCmmFeJmoUz08FQaZft47O4m2/cUoL7HxxUcmQmjvnMAL+4riOhKEla4LGUOGeUcnT0hrxGJA+5lJTM2GsWFdJgd05VoAhfnpaNtfBEvci6ZNDy/xMZcZNFHe8IcovhvwoP9XluyBugcceHizA1m2+BZT8JA8Rh7vC61AQwbAT/XM8J6WxjXJI1IJK5VNU4aMCjSJUylKJEDNu5IBrbSwY+M5oFTzUNeFefQPehGOxETy4P22dAtqq+3Ysy1Pd7xe5iZLzGUptOv/htB+ZgKNj+QhPzctPkMgktnFCHq+meeRWLHWJpfD6opRZpKdZRyQQcmpxDl0eQkd3dP46OVywxJVTzLPvDaCVpaX7tXJS2r9sMTIAMlhryqJpfGDw0voH/LiynU/ttY4UVdtR2lhummaGZsK8znf/uzGhoosPuehquykS4OGYMaQ38RlbELvRTfOuxZQeXcGnA4rboyHMO+O4EhLMT9MJaPKzY7fDOPNUxPIc6bxpOn2RPHnjSB21ufi8VqnqUOSGFJLiS3W9v4YNm3MQWNDLk/oMQocPT6OjZVZeGJ73rKOFJr6rHcel6768cZzJfIVqqdvAQOXfHjncOnyMjo+jjOU8JmeBg4eG0Hr7gI8yDSQoKOjK553Wpv0805Hd7z/4O41MoODl5dwsmsaHa+Uc7fpNR72SkB6UfP8W6PY1ZCLrTUOuaJ89+wUCvLSsG9nfpJdKYw/Pj+LmbkIXny6UNaM6ycPvuhbwPEjZTIg3eoiEDYP+5NdM7g2GsS2Wiecdiv+GQvhwveLaGkqQA0TqXTbVED7ZTgekY9uWYWKUhsWvVF8fdGNdWUZnDWzRswAMaisEPvkyzn8ftWPUDiGVfY01G9yYHud0/Q07+13g7Gy6I3wBHlfZRae2rEa9kTtxCWXuKYr85IpIPVOREeTqD+F/AsO6BbKoVRsa8ZortaqPzhjwcjyRVGvpNTTiCGalVzmdYwQC7wkFF6+SmtviuavGaKzTEijugCkGCCRCG2JJR4bRDfL/1tThD02sOeYcBR9FKgXMa6XyZXPQWrGRLcYpUcI4Eq3ooHrmVJaHIniHANlRnMqN0+hm/S0A7jSrNhL2IOV1M+YigLNNIoDsKCKUthvWyMm6AiBFxTDBOi0Wpef9P4DgizUToFSVrwAAAAASUVORK5CYII=";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFIklEQVRYR61Ye2xTVRj/nT7WrrRkHW5j65ygGUYXDM4ZYkJwkhkNiVmUGAMiCgMNxiyoUUlUjMRkKpEofyjBLaBZ4juSYCSTZWHGB4tPEgbzAVgXurqNdetju23v7THn9ra7va/TMu4/d9059zu/7/t9z0OgPJRSEhOwHUBHBmgChZcQgFKAva/6QxAnFMMAenxudBNCKDtDPipBaa2URC+lWLegg5lIJlEWrfpbUSinHHvLy4rCNhsG7C5sXkTIGGGWiSfRz8Bo5enAcQ7U7s9hMzOwWhwhGPC50Eaic3QHgENGluGdz1NAC4gnD8DjDNApCqw2sHDpBuIh4PmDDUMkKtAYAK+892qrzDOJfj1OYgLN+VjeH3Oca51QpyDHItoo1cnTfM9+MspyMZH3+lyYm0WFWRrg7ecajKUYZiEetWbrPADa74rZvyBAXEquQFMZkBlFPHnBUAp938/g37EURJGivrYMd7b4cEtjuWGMFBOEJJ6kea/maaxeHxiK4YsTEQSqnVjZ6IHbTTByQcC5C3NY27IYD93r1wWJ9h86CplTM0D5VM8ziaJicCyFfYfDaL3dhw13+wtq3fFvZ3BscBrbHqhCS5OnUGIRaYXEmVMXWzwVgUeOXkYwlMTLT9TBZlOdqQB+p3ccQiqDF7YttaxthhQyC5nmHYM8wTDtPRhCY4MbG9dXGtbSEz9EcezkNN7e3QC7GrCGAaM0QBKMMpPHLG+80R1GbZUTW9qXGAL66uQMBoaieOv5a2FjFd1EvqGFEqkSfEgR/NHxKZwemcWenQF43IV8ZzJA1/tjWOSxY9eW6vlyVExpYk5tZSGzBi0SlbD3vRCW17uw9f5r4C3P8iJJQPeXEzg9Mofnti7F8kAZL0wK1tl5MqAryUNnzws4cnQSokRxfb0LbrcNfwcFzCUpHrzHjzW3enWlqJjMTWYZZSU+sdkMvh6cwXe/xZGhFBU+h9wqxBIZGWDzTR6031WBqkpHAWXc0sFqmQzIpOU0aoiC4RQOfjyBtESxoc2P22724NxFAf2nonhqYzX+/EfAp30RxBKSTOeqG8tLSnMyoHzYa1piLaDJKRFdPWEsqyvL+o7HJkfZoc8n8cvZBHZ31GJZoAzpNMUnfRH8+Hscux6pQWODSxalqwTa85iF5iwo04b9/g/+w0RExJ6ddSh3kXzIv3jgEi5Pi3Jeam3xZesYBd48HMZMXMKrTwbgVLFnRUiBhXROp9Lg/GhSLhedD9eg6QZ3disBErMZPLNvVP55xyovHmtfkk88E1MiXnk3hE3rK7GmOduUFoaVqktV0kLWQgpnVtX4s28i+HV4Fl1PBwoy3cVLKbzeE5Ylr7jOjWcfrVGGq+xr/4fjcDiAzk3V+RnPLIzksFcDMuqpz/wlIBITMfhzTHbkttWLdYqOhlP4IyhgbbMPZc7CRPnTmQTCk2nc11oBv8+BlSvcMjBDn2I+JKStw/6lAyGMR9IlJgbj7dV+J17rrLOUZQmomLxhNanytDCSz7WQWiiv4+Ot8wDKNDLKSmyHik50vKAy7CCT4vygaNRS5nJRMdrpe1bNV5yOkdgQJ6n0/CitnxStbzO4ky5PC20DSDFERJHuyCiXDbzJkkcBdxDklCbCLhvYdUxaQj8F1vGuT6wyebZeFJ7Im2LUjBBgwGlHm+zPlNJaUUIvA2VlZW4a4FFkss7AOOzYTNiFVW4Ps5QEbKcSOmBDE6XwLthHLAASgjgohgnQY7fPX+n9D2R/2E6UK56VAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFdUlEQVRYR61YaWxUVRT+7pvO1plpi9Bph7YDCIjaKC5EQ02VkOoPqn80JiUWE2yLGmIEkhrTGDWGKHVPDAnKUhVi0ogrLih1goGktBqixJKghraUznRsp8vMtJ39mvs665v75s5Q3p9Z7nvnfuc753zn3EcQvyilxBdAK4CWGFALCjMhAKUA+7zuF4GfUAwAOGwx4BAhhLI95K1mKbVFgzhGKTYvamNmklmUTad9jzuUcI59ystxhyUJDo0ezSZCXIQx4w+ih4FR2ssCJ9hQeX8CmxrB6eYIgcOiRwPxztM2AB/xmBHtL3JACUhkD8AOBugcBe7lMFw4QSIEonyQ0Ee8AeoDYJbvvd4uiyjJXvcTX4AmciyZj4mYK5Mwy0EBI8oqzbKneJ79ZCFL1EQy6xNlrlYVajIgul9IGJMYxpAotGrrIgDK5/K5f1GALg0FcKrXiyvOEELhGJaWFeHOW014aGMJdNprU1MZkFqI1JiJxYDuk5M4e94HbZGE6gotTMUaXHWHMO2NoHyJFi2PLkONTZdLJ7k1RPxBmsxqURIm1n88M4Pvfp3G+nXF2Nq4FJZiKYm9989ZHP9pEkaDhJeeXg6Dniy0g3yUmyU1A5SUelEyEWBsIoK9Hzpht+nQvr2S2+d+G5hD15fjuP9uC5q23JCymoesED9L6nzDTYGTZ7349vQUdjZVoHaNIdOFtDJ+7YATXl8Mb7dXq/Y2rmowhlR1h6MTn57woPcPP/btrkGJWVLNka6vPOj/y4932u0oNvA95skAmWUhU7l4D3z+8xQcfV50tC1HdaVWFdD7R934eziIDzrskFIplrETl6HZUAE5BOD8xTkc/GIcW+rL8MimUq4r074oXtnvRJVVixeeqowPOXm0JpbUuRjiDWis5N88MoaRsRCee8KKm1cZ5CEucQVCFAe6x8E0atc2K9atVORZjsJh+8mACtUh90QEnUdcYJvfd4cZt6w2wGLSyAL5S78XUzMRPFhXiscaynJOnDzlJnMsZNdw9fT6cPzUJPfJVdV6PPN4OUotmtQEwSIWH4eVE2OyN7J1GZDKyMkbiC47Q+j+YRLDriCMegkrq/SyJkkEmPZHMXg1iLGJMDQSQeMDpWisLy1E5hYAJcteMRIrAf3Dquaz/+S/Wb9qqCuBUUey/Lk0GMDXjmkMjgZxz20mbHt4GbRFqRk6mSLK/RhD8zlCll72w64Q3v3EjSINwZ4nK1BVkSp5nspEosDREx6cu+DHziYrbr/JmNW7eDN3BkNZ40KaB291uTHsDMplvMKm4/YmXrccdYdl8NyLI0QLDMVdVBsAL14OgAndpg0l2Nq4JNUKFLuc/t0HVoGr7XpsqC1G34VZDDlDGb2MTQB16018fKzs0wGpzdQff+MB6+Kde6pQZtZwGyqrnBffG8WUL4I1NQa0b6/A3oMujLjSAAGwlevw6rO2heavOIjKVRgIi8v+9UNj8PqieGN3Vc75JhoDgiEKIxs54pvNBzNVxaAjqq1EBpkLUEI3nt83AqYtu5qtmUKnaHbfn5mB2xPB2hV61N9lhqPfh6HRTIbslTo0bLTIDHGFMR+GmGFmaK1dn4yqbDAt6Znxl/c74faEUXujUW4bnV1u/HslkJEvTLc6WitVpVhmqIBxKCNkhQp8Vpkr/pAZC0ZSB8UsCtNYyGvzQg7zHINEgp+EwqmjdPZJMffbDOFJV+SFcgCk6CORCG2LxV82iE6WSvuio7xonWNvh/w6JhxFDwU2ixjPpeQLZZPJqOgUkx4RAji0GjTI+UwptUWiOMZA5WJZOD6IQqSyzsAUadBM2AurxD2MqSjQSqNogYRaSmFedI7kAEgI/KAYIMBhjSb1Su9/gpLiTiknRRsAAAAASUVORK5CYII=";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFrUlEQVRYR61Ya2xURRT+5u6j++p2W0pLW7ABJEKLqEhAqQRTmgKNMRaN1FBNlEIAkZBgNPqHSDUhNhL9JRJAQQyJMYSINpqUxooKGJuQCPjgIaWUtrxa9tHdu7t3x8zs7t3u3XvvbJVJNtvuzJz5znfO+eZBkGqUUhKIoA3A2gRQCwoPIQClAPu+540gSCjOAdhX6MBeQghla/ClQpRWKDIOUYr6/7UwM8ksctPj/k45lHaOffPulMOShG5LAVrdhAwSxkxQRhcDo7WXA06woHZ8GpsRwePNEYLuwgI0EH+YrgOwR48Z0foiB7SARPYArGeATlFgkQ7DEydIhECUDxJOE3+EBgB4+Nh77bKIktz+IAlEaDrH1HxMx1ybhDkOChjRVmmOPc189i8LWbom1KxPl7lRVRjJgGi8kDAmMYwhUWiN+kUAtPPyGZ83oAtXZRw/6UffoAx/UDH1wWohqCq3o/Z+J1bUFcFiyd9lDsgoRGkz3/3sxzc/jKKyzIaaGU54PeYrKApF/1AUZ/4cw5RSG7a0lsPjknJzVKOjvNKDMlWzWi8JL1+TsevAMJYt8qK5wacqLC/K1LZiFPSBoRg++mIYc2Y48EpzaUbFjZQ7DUiVeh1md395E3fuxvFWWwWINE4a8ozCyTMhfH7sFnZsrkKpz5q9tehIOwmypDbZPN/+cAAL57nxTL1P1alolCIi69QCSe5PhW6GPAk+MJbAm7v60fbsZMyvcWW0LnerS8ogC5mh7hBgU3sfVq8swdIFhWoOvN7Rj7FIwpCjl54uxeMPudX+ze9dxaqGYtQvKsyaoycDJCQblz2boAfo7ysy/CElR9i5sBGgZoYDLoek9jNAzTqAdHU1FKXULIc2tvehJcVQ2j1FAeRYMmQ2K/sYxDy14vv7h9C01Ie5Mx3mOcQcMmOIebthRx9amkrw5IIM3ds6riEUTmqRJBHseLUKk3zZUqAkklVonYgGsRxkgMx0SI+hsxcjPGSMALuN4NEal7rtnLsUwbc9o1yHGKCp5XY01nn5mHyUm4yxkJk0PYbU4Zqs7PzxLr7uGcXMaQ48/IATkoXg7IUw/rgc5jr2XGOxCpyLoPaIzHSNAzI4crJJWYBMdsfLA1F07B9C42IvVi3zQY5S2O2Es/j9L34c6RrBa2vKUcvyyKDxomCA1LLXkfKtO/uxckkRltd5TaX/06O3+T63fUMlJALs3DeEukc8WDLfw0PHEtvlkrC5pUy9NOQcvxhDYZOQsQm7PhuG0ylh4+rJOX6NL9vtH1/H7GonXmgq5uPa9wzC67Zg9nQHFj7oxoneIE70BtCxbapZQLIZykk6AD2/BXC4cwRbXyzDnOkOVVuSm1pmK2nfPYjpUwvQ+lQJV+O9R25h8GaMj3m+sQTnL4Vx+vcQdm6tyiyjI0RJhlIx0xMqZvyDg8O41C/zo8TcWU4UuS1wuyQ47Bn9OXDsNv76R8Y7myphsyXXVG9EFGj/ZBClxVZsWj2Zh1CvsSTPAmR0po7FgaPdI+j+NYBEImmtrNiGd7dUqnav34jxMD02z401TZP4GYgtkEgAX3WN4PipAN54eQpmTrOrgHSPuJFY/ifGaBy4NhTFaFBBaZEV91XYskLY0xvE4c47KCuxciaZaJ6/GMbAjRia631Y8YTXTGGSrJoBEh45dWSg73oUnT/dxZWBKGezurIAyxd7Mau6ID9hnAhDomuXqF9IT5qhfN8SRNc20YI5V2vNDzwicjxzUcwJ0UQPiBO5zOugJxKCJBrLXKWFp/B7EZPxQLQXRYrTJB6n6xKpxwbRzVLrlAifqF/H3nr+HBNT0EWBehHjekquih/r1CTZRK7SBOi2WdDA85lSWhFXcIiBMktMoQyIstp4l++2WtBK2INVegxjSgHaqIK1kFBLKTzC15D/CIALIEEQFOcIsM9iyTzp/QtooetOyaI6EwAAAABJRU5ErkJggg==";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFe0lEQVRYR61Ya2hcRRT+Zh/ZzXYb82yyaZI2Jq3RmNhWsRVDhVipb4wWlBJRzKNFhSJSsNCHKIIFC0KraGlENIRWESmxYjSNptiQpBUjJA21tWqTNDVpnns3u5vdm5GZ3b179+7dnZum8yePmTnzzXfO+c6ZSxAelFLi9qEeQN0CUA4KJyEApQD7ecsHgUQoBgA0LbfjGCGEsjP4UR5KXbIfzZSiekkHM5PMIjet+j18ocjl2E8+Hb6wyYQOsw21ywgZJYwZyY92BkZrLw6c4EDt+gi2RASrzRGCjuU2bCGzXtoA4KgeM6LzRRfQAhLZA9DIAHVTYKMOw4snSIRAFA8m9JBZH3UDcPK1t/rKIkri5yXi9tFIjCnxGPG5NgjjLihgRJulcfY0+9mfzGWRnFCiPpLmibIikQyI1gsJYxLDGBK5NtE82/nJV+PovzSnLCnMs+Gt+jzdLSLAPI6XAogx1XlOQm+/hL+H/SgusKGi1IGtVWk3e8cQoEQuMmI1EKT4udeNkx1TeOqhdFRvSoPNGopCoYs0OsoZkvxUiWpREKrnBy758FP3DK4M+RGUo15/YJ0TtU9mQZYBizkKypByRwApUi+ihACBAMWXrRM4P+CB1WJC5dpUlBTZ4HSY4fUtYE2RHY5UE/YdHkbdszmovCM1atWArBCJBbXB4rkgA4dbxnDxHy9uL7DjpaezkJNpAXPb5at+3Fli55Swc9t+ncWme5YhPS1Mk47y6qoGc1lC3dHsONkxjbazM6havxzbn8jkhZQtOdsnobl1Avt35iMvxxpzv75BLxYoxYa7HIaUn3j8idNezfDkjIwDH40gM82CvTtcSLESJWg7et34um0Se+pdKHSlKIDY/qZvbkCmFI3bcozpqmeeUiMxdOrMDL7rnMau2lyUFdtjjP9yzo0TP4QAFblSonM3UduSMqTOqoPHrmPKLeP9N1YqBzJu5wMUHx8f53FVsdaBV57Jht0WH5RGGj12HgdkRId2HxrGKlcKXt++QgHE9n17OhRXq/Jt+Pean4MqLbQpDVhJoQ0X/vLhtwsevP1qfgyzespN5pjLDIzX3ruKdWUONDyXHZPGLOsuD/mxt8GFdz69xjNOPZgM1DySgaHReWy+16nUS5502haZ1TIOKEHLqTa858MRZKdb8ObLuTEt6pnzElq+n1CWvvB4JorzQwwxs3lZVl0X6nHAqz0DpKS9jpRHNrI4Gbziw6HdBXGlobd/jit2eakdd69JjWYZBfzzFAc/u47Hqm7D/RWOmEdDnE4yhrxJXKbe0PW7B1+03kDNwxnY+mCoeIp6ZramtTOUnSztmRYleQOEbKoZ0tKoBhSUgf1HRjArydjXyATQEo9Ic+UbU0G8e3QUGWkWHNjpin9O6chCiKGwz0Sy0f+nD0eOjyEv24od27LhyrHG3kFlYGI6iA8+/w8zbhm7XlyBstV2xV2J0oinvRqQqKdmG073MBGcgtUC1FRnYPN9Tq7aPIjDutTe7caPXTPw+inqarKxsTJUNkQNGp/3BYylfSRr2NF9F71oOTWJaXeQV3ymzqzCj08FMD4RhLxAsTI3Bc8/momy1aGMMzqSAkp2I6bQXX940Dc4h5GxACSvDIfdhKLcFGwod6BqfUhzkg1dYVwMQ6IYE80bYYkzZLAdEoWY8Lw4mdD8gzPmD0YfinEUqvpi4WlGhEnQMRITJDIfiD6l41+Kyb9m3GrKCEUPCQZpw0L4Y4PoZallSRQzonkde438c0xARjsFqo2UArURvVqkrg2iV4zaIwTosJqxhcczpdQVlNHMQC02TY00XqL4Y2AsZtQS9sEqspgxJQP1VEYdTCinFM4lx0gSJIRAAsUAAZrM5ugnvf8Bb0rwTh5TJ8wAAAAASUVORK5CYII=";
const _imports_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAE/klEQVRYR8WYWWyUVRTHf2eWdjozbWcpdJnSImsMKAEBARMFBTQR1BBAeSEQIAgalRhfiMZADE8uaFQ0QQgabVGCBGgMkCghAWNEdgTpA0HaKaWd6bSdTtvZrvk+6EJhOlvB+/Zlzvmf37333HPPXGHAUEqJN8BCFEtRTFFCiShMA+0y/VZCDEWTwAUR9pY6qRaRaH896f9R16bGSYTvFUzNNGgGfrUCKzxuOdHj2wvV0KqmxWIcRuHIQDg7FyEswhKPU/ZrQjpUXZtyE+EcUJadeubeAh1iZmpZgVy+BeVTW4E3M5ccGk8RDnpcslCUUrleP00K8odGOjsVgQppaFFzYnF+zU5q6LwF1khdi1pBnJ1DJ5udkgE+EG+LeiMe59N0pHb/0sxIj4XHH7UndKuqaWZMpYVpExPb3MtZ4LOMoD7Z5WVUuYUXn3ElhPpoh5fxo/JYMNuZzny1cpA6VLM/yqWrIVpaY5y9HKTAbuKhckvCgGcuBXEUmPQVLbAZGTvSgqc4JylgylCnL3Xw8xEfRqPgyDfhC0TIMQn59sS3j68lQk6OgXybkfaOGJ3dcebOcjBnesGgYClBaYIf7vQyYbSVRfPdmIyQ7vYpBYePBzh2so31y0oGXbGUoM5fCVFV08TGtSOwWw36LI+faqekyMzoisTbp9mUDs9hVHmu7qOBbd52nSenFg66WilBnTjdzsGjfrZsqEyaD8kMUkn+tKA2vV6RLOagv4e64mz9zsusyQXMm1mY0DYtqKyIbjvn5RpZt6yEImfiA5IW1JLnirLiMhlFr22223mZSCwtqHRy6tw/IWqvddLkj1LkMjG2Mo9J460pTWrIobq7FT/UNOlAnuJchrvM3PRHqG/s1sGWLRiGJeeOZvcu0LSgKkr7jr/RCAvnuPSy0H/sOezjYm1IDz6u0qKXARGovdalw2q1bvGz7uyLZ09JmPxw38VqMMIzMxw48o29AbRr6ONd9bw01830R+z61n1VfYONa8vRJvHnhaB+K2xY7mGYe4gSPVlOnfq7gz2HfLy3fgR5ucL1hjDbqht4Z5UHu9VILA6bv7jO4vlupkywZVcSfj/TzoHfkhfPP84GOXDUz/uvVWA20QulRS/MN/H2Sg+bPv+X52c7mTEpcZObUk5dvtrJt/tu8tbyMoa778yh/tOtuxHmy6oGViwq1vMpElE0t976O2ezGGj0Rdi5t5F1r5QyojRxt5ASVDis9AvYbjPywtMuipxmPXl7hlZ/tEtaS+qvdzcSDMVYs6SYwn751hqMsf3HRqxWA6++XHKH/8B9TAlKc6pvDFNd04yvNXJXLpjNBt5dW47ZLPgCUbb/1Eh3OM5jE+0Mc5ppaonw14Wg3sasXlw8aDXXxFOG0oyjMfDeDBNoi6L6oVktBsZW9pWLrrDiyPEAV6514g9EcTtMjKnIY94TDv0AJBs6VH1ArVIxticzzuT3njqVlq+wRbwBNT8e41BajvfTWFgvN5SyRf00A4k7tvsJMUA7x8Q4fZPrfWqHgpUPMPY9Q4lwzOOSp3QoX0iVd3Zx/n95cenBEyIGA7PKHHKy9zjouRVnP4pbTfUDHCIoDKzxOOSb22WhL3qdT80UoUopsm/IU5yUCD4RVpc5ZV/fog1w1l9hWlilYKloz4v34TVGIKTgokHYa4FtLpe09sdIWs2UUnnNDN2bZwziJSIdgy3kf5DfUfMqCzyiAAAAAElFTkSuQmCC";
const _withScopeId = (n) => (pushScopeId("data-v-89282645"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "user" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "user",
  class: "user-image"
}, null, -1));
const _hoisted_3$1 = { class: "user-name" };
const _hoisted_4$1 = { class: "user-name" };
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1));
const _hoisted_6$1 = { class: "user-content" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1,
  class: "head-image"
}, null, -1));
const _hoisted_8 = { class: "col" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "space" }, null, -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_2,
  class: "head-image"
}, null, -1));
const _hoisted_11 = { class: "col" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "space" }, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_3,
  class: "head-image"
}, null, -1));
const _hoisted_14 = { class: "col" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "space" }, null, -1));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_4,
  class: "head-image"
}, null, -1));
const _hoisted_17 = { class: "col" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "space" }, null, -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_5,
  class: "head-image"
}, null, -1));
const _hoisted_20 = { class: "col" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "space" }, null, -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_6,
  class: "head-image"
}, null, -1));
const _hoisted_23 = { class: "col" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "space" }, null, -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent$1({
  __name: "head",
  setup(__props) {
    const userStore = useUserStore();
    onMounted(() => {
      userStore.info();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
          _hoisted_2$1,
          createBaseVNode("div", null, [
            createBaseVNode("h3", _hoisted_3$1, toDisplayString(_ctx.$t("stepForm.head.admin")), 1),
            createBaseVNode("h3", _hoisted_4$1, toDisplayString(unref(userStore).userInfo.username), 1)
          ])
        ]),
        _hoisted_5$1,
        createBaseVNode("div", _hoisted_6$1, [
          createVNode(unref(Layout), null, {
            default: withCtx(() => [
              createVNode(unref(Row), {
                flex: true,
                justify: "center",
                class: "margin-bottom"
              }, {
                default: withCtx(() => [
                  _hoisted_7,
                  createVNode(unref(Col), { span: 6 }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_8, [
                        createBaseVNode("div", null, toDisplayString(_ctx.$t("stepForm.recruitment.department")), 1),
                        _hoisted_9,
                        createBaseVNode("div", null, toDisplayString(unref(userStore).userInfo.department), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  _hoisted_10,
                  createVNode(unref(Col), { span: 6 }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("div", null, toDisplayString(_ctx.$t("stepForm.recruitment.type")), 1),
                        _hoisted_12,
                        createBaseVNode("div", null, toDisplayString(unref(userStore).userInfo.employeeType), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  _hoisted_13,
                  createVNode(unref(Col), { span: 6 }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_14, [
                        createBaseVNode("div", null, toDisplayString(_ctx.$t("stepForm.recruitment.position")), 1),
                        _hoisted_15,
                        createBaseVNode("div", null, toDisplayString(unref(userStore).userInfo.job), 1)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Row), {
                flex: true,
                justify: "center",
                class: "margin-bottom"
              }, {
                default: withCtx(() => [
                  _hoisted_16,
                  createVNode(unref(Col), { span: 6 }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("div", null, toDisplayString(_ctx.$t("stepForm.probation.start")), 1),
                        _hoisted_18,
                        createBaseVNode("div", null, toDisplayString(unref(userStore).userInfo.probationStart) + " ~ " + toDisplayString(unref(userStore).userInfo.probationEnd), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  _hoisted_19,
                  createVNode(unref(Col), { span: 6 }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("div", null, toDisplayString(_ctx.$t("stepForm.start.date")), 1),
                        _hoisted_21,
                        createBaseVNode("div", null, toDisplayString(unref(userStore).userInfo.protocolStart), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  _hoisted_22,
                  createVNode(unref(Col), { span: 6 }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_23, [
                        createBaseVNode("div", null, toDisplayString(_ctx.$t("stepForm.probation.period")), 1),
                        _hoisted_24,
                        createBaseVNode("div", null, toDisplayString(unref(userStore).userInfo.probationDuration) + toDisplayString(_ctx.$t("stepForm.probation.day")), 1)
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
        ])
      ], 64);
    };
  }
});
const head_vue_vue_type_style_index_0_scoped_89282645_lang = "";
const head_vue_vue_type_style_index_1_scoped_89282645_lang = "";
const headtop = /* @__PURE__ */ _export_sfc$2(_sfc_main$1, [["__scopeId", "data-v-89282645"]]);
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
