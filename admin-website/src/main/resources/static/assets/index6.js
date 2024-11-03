import { l as createVNode, k as resolveComponent, u as openBlock, v as createElementBlock, G as normalizeStyle, A as normalizeClass, I as withDirectives, L as vShow, D as renderSlot, z as createCommentVNode, d as defineComponent$1, a8 as reactive, w as createBaseVNode, E as toDisplayString, W as unref, H as withCtx, Z as pushScopeId, _ as popScopeId, J as createTextVNode } from "./vue.js";
import { aD as capitalize, am as KEY_CODE, aE as POSITION, o as on, a as off, l as $props, d as defineComponent, $ as $prefix, al as Tooltip, ag as index$5, e as index$6, f as setup, h, j as props, ak as t, Z as debounce_default, aF as random, aG as KeepAlive, m as $setup, g as axios, I as Input, B as Button, ay as Checkbox, _ as _export_sfc$3 } from "./index.js";
import { D as Dropdown, q as DropdownMenu, r as DropdownItem, f as index$4, i as index$8, E as touchStart, F as touchMove, H as singleton_default, I as index$9, G as Grid, C as Column } from "./index15.js";
import { t as addResizeListener, u as removeResizeListener, v as index$7, S as Select } from "./index16.js";
import "./index13.js";
const getOrderedPanes = (parent, panes) => {
  const slotDefault = parent.$slots.default;
  let orders;
  if (typeof slotDefault === "function") {
    orders = [];
    const tabVnodes = slotDefault();
    const handler = ({ type, componentOptions, props: props2 }) => {
      let componentName = type && type.componentName;
      if (!componentName)
        componentName = componentOptions && componentOptions.Ctor.extendOptions.componentName;
      if (componentName === "TabItem") {
        const paneName = props2 && props2.name || componentOptions && componentOptions.propsData.name;
        orders.push(paneName);
      }
    };
    tabVnodes.forEach(({ type, componentOptions, props: props2, children }) => {
      if (type && (type.toString() === "Symbol(Fragment)" || // vue@3.3之前的开发模式
      type.toString() === "Symbol(v-fgt)" || //   vue@3.3.1 的变更
      type.toString() === "Symbol()")) {
        Array.isArray(children) && children.forEach(({ type: type2, componentOptions: componentOptions2, props: props22 }) => handler({ type: type2, componentOptions: componentOptions2, props: props22 }));
      } else {
        handler({ type, componentOptions, props: props2 });
      }
    });
  }
  if (orders.length > 0) {
    let tmpPanes = [];
    orders.forEach((paneName) => {
      let pane = panes.find((pane2) => pane2.name === paneName);
      if (pane)
        tmpPanes.push(pane);
    });
    panes = tmpPanes;
  }
  return panes;
};
const calcPaneInstances = ({
  constants,
  parent,
  state,
  childrenHandler
}) => (isForceUpdate = false) => {
  const tabItemVNodes = parent.$slots.default;
  if (tabItemVNodes) {
    const orderPanes = [];
    tabItemVNodes().forEach((vnode) => {
      var _a;
      if (Array.isArray(vnode.children)) {
        vnode.children.forEach((child) => {
          var _a2;
          const name = (_a2 = child.props) == null ? void 0 : _a2.name;
          name && orderPanes.push(name);
        });
      } else {
        const name = (_a = vnode.props) == null ? void 0 : _a.name;
        name && orderPanes.push(name);
      }
    });
    const currentPanes = [];
    childrenHandler(({ vm, isLevel1 }) => {
      if (isLevel1 && vm.$options.componentName === constants.TAB_ITEM) {
        const index2 = orderPanes.findIndex((name) => name === vm.name);
        index2 > -1 ? currentPanes[index2] = vm : currentPanes.push(vm);
      }
    });
    const newPanes = getOrderedPanes(parent, currentPanes);
    const panesChanged = !(newPanes.length === state.panes.length && newPanes.every((pane, index2) => pane.state === state.panes[index2].state));
    if (isForceUpdate || panesChanged) {
      state.panes = newPanes;
    }
  } else if (state.panes.length !== 0) {
    state.panes = [];
  }
};
const calcMorePanes = ({ parent, props: props2, state, refs }) => () => {
  if (!props2.showMoreTabs) {
    return;
  }
  const el = parent.$el;
  const tabs = el.querySelectorAll(".tiny-tabs__item");
  const tabNavRefs = refs.nav.$refs;
  if (props2.moreShowAll) {
    state.showPanesCount = 0;
    return;
  }
  if (tabs && tabs.length) {
    let tabsAllWidth = 0;
    for (let i = 0; i < tabs.length; i++) {
      const tabItem = tabs[i];
      tabsAllWidth = tabItem.offsetLeft + tabItem.offsetWidth / 2;
      const tabsHeaderWidth = tabNavRefs.navScroll.offsetWidth;
      const currentName = Number(state.currentName || 0);
      if (tabsAllWidth > tabsHeaderWidth && currentName >= 0) {
        if (currentName >= i + 1) {
          state.showPanesCount = currentName - 0;
        } else {
          state.showPanesCount = i;
        }
        break;
      }
    }
  }
};
const calcExpandPanes = ({ parent, props: props2, state }) => () => {
  if (!props2.showExpandTabs) {
    return;
  }
  const el = parent.$el;
  const tabsHeader = el.querySelector(".tiny-mobile-tabs__header");
  if (tabsHeader) {
    state.expandPanesWidth = tabsHeader.clientWidth;
  }
};
const handleTabClick = ({ api: api2, emit, props: props2, refs }) => (pane, tabName, event) => {
  if (pane.disabled) {
    return;
  }
  api2.setCurrentName(tabName);
  emit("click", pane, event);
  if (props2.showExpandTabs) {
    refs.nav && refs.nav.expandTabHide();
  }
};
const handleTabRemove = ({ emit, props: props2 }) => (pane, event) => {
  if (pane.disabled) {
    return;
  }
  event.stopPropagation();
  const emitEvent = () => {
    emit("edit", pane.name, "remove");
    emit("close", pane.name);
  };
  if (typeof props2.beforeClose === "function") {
    const beforeCloseResult = props2.beforeClose(pane.name);
    if (beforeCloseResult && beforeCloseResult.then) {
      beforeCloseResult.then((res) => res && emitEvent());
    } else {
      beforeCloseResult && emitEvent();
    }
  } else {
    emitEvent();
  }
};
const handleTabAdd = (emit) => () => {
  emit("edit", null, "add");
  emit("add");
};
const setCurrentName = ({ api: api2, props: props2, refs, state }) => (value) => {
  api2.changeDirection(state.currentName);
  if (state.currentName !== value && props2.beforeLeave) {
    const before = props2.beforeLeave(value, state.currentName);
    if (before && before.then) {
      before.then(() => {
        api2.changeCurrentName(value);
        refs.nav && refs.nav.removeFocus(value);
      }).catch(() => null);
    } else if (before !== false) {
      api2.changeCurrentName(value);
    }
  } else {
    api2.changeCurrentName(value);
  }
};
const changeCurrentName$1 = ({ emit, state }) => (value) => {
  state.currentName = value;
  emit("update:modelValue", value);
};
const created = ({ api: api2, parent, state }) => () => {
  api2.changeDirection(state.currentName);
  parent.$on("tab-nav-update", api2.calcPaneInstances.bind(null, true));
};
const changeDirection = ({ props: props2, state }) => (currentName) => {
  const panes = state.panes;
  panes.forEach((item, index2) => {
    if (item.state.paneName === currentName && state.currentIndex !== index2) {
      const isTopOrBottom = ~["top", "bottom"].indexOf(props2.position);
      const isPrev = state.currentIndex < index2;
      state.direction = isTopOrBottom ? isPrev ? "right" : "left" : isPrev ? "bottom" : "top";
      state.currentIndex = index2;
    }
  });
};
const handleTabDragStart$1 = ({ emit }) => (event) => {
  emit("tab-drag-start", event);
};
const handleTabDragOver = ({ emit }) => (event) => {
  emit("tab-drag-over", event);
};
const handleTabDragEnd$1 = ({ state, emit }) => (event) => {
  const { oldDraggableIndex, newDraggableIndex } = event;
  const panel = state.panes.splice(oldDraggableIndex, 1)[0];
  state.panes.splice(newDraggableIndex, 0, panel);
  emit("tab-drag-end", event);
};
const api$8 = [
  "state",
  "handleTabAdd",
  "calcPaneInstances",
  "handleTabRemove",
  "handleTabClick",
  "handleTabDragStart",
  "handleTabDragOver",
  "handleTabDragEnd",
  "setCurrentName",
  "getNavRefs"
];
const initState = ({ reactive: reactive2, props: props2 }) => reactive2({
  panes: [],
  currentName: props2.modelValue || props2.activeName,
  currentIndex: -1,
  showPanesCount: -1,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  offsetX: 0,
  offsetY: 0,
  direction: "",
  expandPanesWidth: "",
  activeIndex: 1,
  separator: props2.separator
});
const initWatcher = ({
  watch,
  props: props2,
  api: api2,
  state,
  nextTick,
  refs
}) => {
  watch(() => props2.modelValue, api2.setCurrentName);
  watch(() => props2.activeName, api2.setCurrentName);
  watch(
    () => state.currentName,
    () => {
      nextTick(() => {
        refs.nav.scrollToActiveTab();
      });
    },
    { deep: true }
  );
  watch(
    () => props2.showMoreTabs,
    (value) => {
      if (!value) {
        state.morePanes = [];
        state.showPanesCount = -1;
      }
    },
    { immediate: true }
  );
};
const renderless$9 = (props2, { onMounted, onUpdated, provide: provide2, reactive: reactive2, watch }, { refs, parent, emit, constants, nextTick, childrenHandler }) => {
  const api2 = {};
  const state = initState({ reactive: reactive2, props: props2 });
  Object.assign(api2, {
    state,
    handleTabAdd: handleTabAdd(emit),
    handleTabRemove: handleTabRemove({ emit, props: props2 }),
    changeDirection: changeDirection({ props: props2, state }),
    changeCurrentName: changeCurrentName$1({ emit, state }),
    calcMorePanes: calcMorePanes({ parent, props: props2, state, refs }),
    calcExpandPanes: calcExpandPanes({ parent, props: props2, state }),
    calcPaneInstances: calcPaneInstances({ constants, parent, state, childrenHandler }),
    handleTabDragStart: handleTabDragStart$1({ emit }),
    handleTabDragOver: handleTabDragOver({ emit }),
    handleTabDragEnd: handleTabDragEnd$1({ state, emit }),
    handleTabClick: handleTabClick({ api: api2, emit, props: props2, refs }),
    setCurrentName: setCurrentName({ api: api2, props: props2, refs, state }),
    created: created({ api: api2, parent, state })
  });
  api2.created();
  provide2("rootTabs", parent);
  provide2("separator", state.separator);
  initWatcher({ watch, props: props2, api: api2, state, nextTick, refs });
  onMounted(() => {
    api2.calcPaneInstances();
    api2.calcMorePanes();
    api2.calcExpandPanes();
  });
  onUpdated(() => {
    api2.calcPaneInstances();
    api2.calcMorePanes();
    api2.calcExpandPanes();
  });
  return api2;
};
const computedNavStyle = (state) => {
  const dir = ~[POSITION.Top, POSITION.Bottom].indexOf(state.rootTabs.position) ? "X" : "Y";
  if (state.mode === "mobile") {
    const { offset, width } = state.lineStyle;
    return {
      width: `${width}px`,
      transform: `translate${dir}(${offset}px) translate${dir}(-50%)`
    };
  } else {
    return {
      transform: `translate${dir}(-${state.navOffset}px)`
    };
  }
};
const scrollIntoView = ({ parent, vm, state }) => () => {
  if (!state.scrollable) {
    return;
  }
  const nav = vm.$refs.nav;
  const activeTab = parent.$el.querySelector(".is-active");
  if (!activeTab) {
    return;
  }
  const to = activeTab.offsetLeft - (nav.offsetWidth - activeTab.offsetWidth) / 2;
  const from = nav.scrollLeft;
  if (state.mode === "mobile") {
    nav.scrollLeft += to - from;
    const nameHtml = activeTab.querySelector(".tiny-mobile-tabs__name");
    state.lineStyle.width = nameHtml.offsetWidth;
    state.lineStyle.offset = activeTab.offsetLeft + activeTab.offsetWidth / 2;
  }
};
const computedSizeName = (state) => ~[POSITION.Top, POSITION.Bottom].indexOf(state.rootTabs.position) ? "width" : "height";
const updated = ({ api: api2, vm, state }) => () => {
  if (!vm.$refs.nav || state.dragging) {
    return;
  }
  let navSize = vm.$refs.nav[`offset${capitalize(state.sizeName)}`];
  if (state.mode === "mobile") {
    Array.prototype.forEach.call(vm.$refs.nav.children, (item) => {
      if (item.classList && item.classList.contains("tiny-mobile-tabs__item")) {
        navSize += item.offsetWidth;
      }
      if (item.classList && item.classList.contains("is-active")) {
        const nameHtml = item.querySelector(".tiny-mobile-tabs__name");
        state.isActive = true;
        state.lineStyle.width = nameHtml.offsetWidth;
        state.lineStyle.offset = item.offsetLeft + item.offsetWidth / 2;
      }
    });
  }
  const containerSize = vm.$refs.navScroll[`offset${capitalize(state.sizeName)}`];
  const currentOffset = state.navOffset;
  if (containerSize < navSize) {
    const currentOffset2 = state.navOffset;
    if (!state.scrollable) {
      state.scrollable = {
        prev: currentOffset2,
        next: currentOffset2 + containerSize < navSize
      };
    }
    if (navSize - currentOffset2 < containerSize) {
      state.navOffset = navSize - containerSize;
    }
  } else {
    state.scrollable = false;
    if (currentOffset > 0) {
      state.navOffset = 0;
    }
  }
  state.isActive && api2.scrollIntoView();
  if (vm.$refs.tabBar) {
    vm.$refs.tabBar.state.barStyle = vm.$refs.tabBar.computedBarStyle(vm.$refs.tabBar, state);
  } else {
    const line = vm.$refs.nav.querySelector("tiny-mobile-tabs__line");
    line && line.style && (line.style.transform = api2.computedNavStyle(state).transform);
  }
};
const mounted = ({ api: api2, parent }) => {
  const el = parent.$refs.nav.$el;
  addResizeListener(el, api2.updated);
  on(document, "visibilitychange", api2.visibilityChangeHandler);
  on(window, "blur", api2.windowBlurHandler);
  on(window, "focus", api2.windowFocusHandler);
  api2.scrollToActiveTab();
  api2.scrollIntoView();
  api2.sortableEvent();
};
const beforeUnmount = ({ api: api2, parent }) => {
  const el = parent.$refs.nav && parent.$refs.nav.$el;
  if (el && api2.updated) {
    removeResizeListener(el, api2.updated);
  }
  off(document, "visibilitychange", api2.visibilityChangeHandler);
  off(window, "blur", api2.windowBlurHandler);
  off(window, "focus", api2.windowFocusHandler);
};
const visibilityChangeHandler = (state) => () => {
  const visibility = document.visibilityState;
  if (visibility === "hidden") {
    state.focusable = false;
  } else if (visibility === "visible") {
    setTimeout(() => {
      state.focusable = true;
    }, 50);
  }
};
const windowBlurHandler = (state) => () => {
  state.focusable = false;
};
const windowFocusHandler = (state) => () => {
  setTimeout(() => {
    state.focusable = true;
  }, 50);
};
const scrollToActiveTab = ({ parent, vm, state }) => () => {
  if (!state.scrollable) {
    return;
  }
  const nav = vm.$refs.nav;
  const activeTab = parent.$el.querySelector(".is-active");
  if (!activeTab) {
    return;
  }
  const navScroll = vm.$refs.navScroll;
  const activeTabBounding = activeTab.getBoundingClientRect();
  const navScrollBounding = navScroll.getBoundingClientRect();
  let maxOffset = nav.offsetWidth - navScrollBounding.width;
  if (state.mode === "mobile") {
    if (activeTabBounding.left > navScrollBounding.width) {
      maxOffset = activeTabBounding.left - navScrollBounding.width + activeTabBounding.width;
    } else {
      maxOffset = activeTabBounding.width;
    }
  }
  const currentOffset = state.navOffset;
  let newOffset = currentOffset;
  if (activeTabBounding.left < navScrollBounding.left) {
    newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
  }
  if (activeTabBounding.right > navScrollBounding.right) {
    newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
  }
  newOffset = Math.max(newOffset, 0);
  state.navOffset = Math.min(newOffset, maxOffset);
};
const scrollPrev = ({ vm, state }) => () => {
  const containerSize = vm.$refs.navScroll[`offset${capitalize(state.sizeName)}`];
  const currentOffset = state.navOffset;
  if (!currentOffset) {
    return;
  }
  const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;
  state.navOffset = newOffset;
};
const scrollNext = ({ vm, state }) => () => {
  const navSize = vm.$refs.nav[`offset${capitalize(state.sizeName)}`];
  const containerSize = vm.$refs.navScroll[`offset${capitalize(state.sizeName)}`];
  const currentOffset = state.navOffset;
  if (navSize - currentOffset <= containerSize) {
    return;
  }
  const newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;
  state.navOffset = newOffset;
};
const changeTab = (api2) => (event) => {
  const keyCode = event.keyCode;
  let nextIndex;
  let currentIndex, tabList;
  if (~[KEY_CODE.ArrowLeft, KEY_CODE.ArrowRight, KEY_CODE.ArrowUp, KEY_CODE.ArrowDown].indexOf(keyCode) && event.currentTarget) {
    const target = event.currentTarget;
    tabList = target.querySelectorAll("[role=tab]");
    currentIndex = Array.prototype.indexOf.call(tabList, event.target);
  } else {
    return;
  }
  if (keyCode === KEY_CODE.ArrowLeft || keyCode === KEY_CODE.ArrowUp) {
    if (currentIndex === 0) {
      nextIndex = tabList.length - 1;
    } else {
      nextIndex = currentIndex - 1;
    }
  } else {
    if (currentIndex < tabList.length - 1) {
      nextIndex = currentIndex + 1;
    } else {
      nextIndex = 0;
    }
  }
  tabList[nextIndex].focus();
  tabList[nextIndex].click();
  api2.setFocus();
};
const setFocus = (state) => () => {
  if (state.focusable) {
    state.isFocus = true;
  }
};
const removeFocus = (state) => () => {
  state.isFocus = true;
};
const moreTabShow = (state) => () => {
  if (state.showMoreItem) {
    state.showMoreItem = false;
  } else {
    state.showMoreItem = true;
  }
};
const expandTabShow = ({ api: api2, state }) => () => {
  state.showExpandItem = !state.showExpandItem;
  if (state.showExpandItem) {
    api2.computedHeaderStyle();
  }
};
const expandTabHide = (state) => () => state.showExpandItem = false;
const computedHeaderStyle = ({ vm, state }) => () => {
  if (vm.$refs.nav) {
    state.expandHeaderStyle[state.sizeName] = vm.$refs.nav[`offset${capitalize(state.sizeName)}`] + "px";
  }
  return state.expandHeaderStyle;
};
const handleTabDragStart = ({ state, vm, emit }) => (event) => {
  state.dragging = true;
  if (![POSITION.Top, POSITION.Bottom].includes(state.rootTabs.position)) {
    emit("tab-drag-start", event);
    return;
  }
  const navContainer = vm.$refs.navScroll;
  const nav = vm.$refs.nav;
  const containerWidth = navContainer.offsetWidth;
  const navWidth = nav.offsetWidth;
  if (navWidth > containerWidth) {
    const navHeight = nav.offsetHeight;
    navContainer.style.height = navHeight + "px";
    nav.style.transition = "none";
    nav.style.transform = "";
    nav.style.width = containerWidth + "px";
    nav.style.overflowX = "scroll";
    nav.scrollTo(state.navOffset, 0);
  }
  emit("tab-drag-start", event);
};
const handleTabDragEnd = ({ vm, state, nextTick }) => () => {
  state.dragging = false;
  if (![POSITION.Top, POSITION.Bottom].includes(state.rootTabs.position)) {
    return;
  }
  const nav = vm.$refs.nav;
  if (nav.style.width) {
    const navOffset = nav.scrollLeft;
    const navContainer = vm.$refs.navScroll;
    navContainer.style.height = "";
    nav.style.width = "";
    nav.style.overflowX = "";
    state.navOffset = navOffset;
    nextTick(() => {
      nav.style.transition = "";
    });
  }
};
const sortableEvent = ({
  api: api2,
  props: props2,
  state,
  vm,
  emit,
  markRaw
}) => () => {
  if (!props2.dropConfig || typeof props2.dropConfig.plugin !== "function") {
    return;
  }
  const navSortableObj = new props2.dropConfig.plugin(vm.$refs.nav, {
    sort: true,
    draggable: ".tiny-tabs__item",
    onUpdate(event) {
      emit("tab-drag-end", event);
    },
    onMove(event) {
      emit("tab-drag-over", event);
    },
    onStart(event) {
      api2.handleTabDragStart(event);
    },
    onEnd() {
      api2.handleTabDragEnd();
    }
  });
  state.navSortableObj = markRaw(navSortableObj);
};
const watchCurrentName = ({ nextTick, vm, state }) => () => {
  nextTick(() => {
    const tabBarVnode = vm.$refs.tabBar;
    if (tabBarVnode) {
      tabBarVnode.state.barStyle = tabBarVnode.computedBarStyle(tabBarVnode, state);
    }
  });
};
const handleTitleMouseenter = ({ state, vm, props: props2 }) => (e, title) => {
  const dom = e.target;
  const el = title == null ? void 0 : title.el;
  if (props2.tooltipConfig) {
    return;
  }
  if (dom && el && el.scrollWidth > el.offsetWidth) {
    const tooltip = vm.$refs.tooltip;
    tooltip.state.referenceElm = dom;
    tooltip.state.popperElm && (tooltip.state.popperElm.style.display = "none");
    tooltip.doDestroy();
    state.tooltipContent = title;
    state.tooltipVisible = true;
    setTimeout(tooltip.updatePopper, 20);
  }
};
const handleTitleMouseleave = ({ state }) => () => {
  state.tooltipVisible = false;
};
const api$7 = [
  "state",
  "setFocus",
  "removeFocus",
  "scrollPrev",
  "scrollNext",
  "changeTab",
  "scrollToActiveTab",
  "scrollIntoView",
  "moreTabShow",
  "expandTabShow",
  "expandTabHide",
  "computedHeaderStyle",
  "swiperHandle",
  "updated",
  "handleTitleMouseenter",
  "handleTitleMouseleave"
];
const renderless$8 = (props2, { computed, inject, onBeforeUnmount, onMounted, onUpdated, reactive: reactive2, markRaw }, { parent, vm, nextTick, mode: tinyMode, emit }) => {
  const api2 = { mounted, beforeUnmount, computedNavStyle, computedSizeName };
  const state = reactive2({
    dragging: false,
    navOffset: 0,
    lineStyle: {
      width: 20,
      offset: 0
    },
    scrollable: false,
    isFocus: false,
    focusable: false,
    showMoreItem: false,
    isActive: false,
    tooltipVisible: false,
    tooltipContent: "",
    showMoreTabs: props2.showMoreTabs,
    showExpandItem: false,
    showExpandTabs: props2.showExpandTabs,
    expandHeaderStyle: {},
    mode: props2._mode || parent.$mode || tinyMode || "pc",
    rootTabs: inject("rootTabs"),
    sizeName: computed(() => api2.computedSizeName(state)),
    navStyle: computed(() => api2.computedNavStyle(state)),
    navSortableObj: {},
    separator: inject("separator", null)
  });
  Object.assign(api2, {
    state,
    setFocus: setFocus(state),
    removeFocus: removeFocus(state),
    moreTabShow: moreTabShow(state),
    expandTabShow: expandTabShow({ api: api2, state }),
    expandTabHide: expandTabHide(state),
    scrollPrev: scrollPrev({ vm, state }),
    scrollNext: scrollNext({ vm, state }),
    windowBlurHandler: windowBlurHandler(state),
    windowFocusHandler: windowFocusHandler(state),
    visibilityChangeHandler: visibilityChangeHandler(state),
    scrollToActiveTab: scrollToActiveTab({ parent, vm, state }),
    scrollIntoView: scrollIntoView({ parent, vm, state }),
    computedHeaderStyle: computedHeaderStyle({ vm, state }),
    watchCurrentName: watchCurrentName({ nextTick, vm, state }),
    handleTabDragStart: handleTabDragStart({ state, vm, emit }),
    handleTabDragEnd: handleTabDragEnd({ state, vm, nextTick }),
    sortableEvent: sortableEvent({ api: api2, props: props2, state, vm, emit, markRaw }),
    handleTitleMouseenter: handleTitleMouseenter({ state, vm, props: props2 }),
    handleTitleMouseleave: handleTitleMouseleave({ state })
  });
  Object.assign(api2, { updated: updated({ api: api2, vm, state }), changeTab: changeTab(api2) });
  onUpdated(() => api2.updated());
  onMounted(() => api2.mounted({ api: api2, parent }));
  onBeforeUnmount(() => api2.beforeUnmount({ api: api2, parent }));
  return api2;
};
const computedBarStyle = (parent) => (props2, state) => {
  const style = {};
  let offset = 0;
  let tabSize = 0;
  const sizeName = ~[POSITION.Top, POSITION.Bottom].indexOf(state.rootTabs.position) ? "width" : "height";
  const sizeDir = sizeName === "width" ? "x" : "y";
  if (props2.tabs && props2.tabs.length) {
    props2.tabs.every(({ state: state2 }) => {
      const $el = parent.$refs[`tabs-${state2.paneName}`];
      if (!$el) {
        return false;
      }
      const barLength = $el.getBoundingClientRect()[sizeName];
      const barMarginRight = parseFloat(window.getComputedStyle($el).marginRight);
      if (!state2.active) {
        if ($el.getBoundingClientRect().width === 0) {
          const unactive = $el.cloneNode(true);
          document.body.appendChild(unactive);
          const unactiveSty = window.getComputedStyle(unactive);
          offset += parseFloat(unactiveSty[sizeName]) - parseFloat(unactiveSty.marginRight);
          document.body.removeChild(unactive);
        } else {
          offset += sizeName === "height" ? barLength : barLength + barMarginRight;
        }
        return true;
      } else {
        const copyEl = $el.cloneNode(true);
        const eleStyle = window.getComputedStyle(copyEl);
        tabSize = barLength;
        if (tabSize === 0) {
          document.body.appendChild(copyEl);
          tabSize = parseFloat(eleStyle.width) - parseFloat(eleStyle.paddingLeft) - parseFloat(eleStyle.paddingRight);
          document.body.removeChild(copyEl);
        } else {
          if (sizeName === "width") {
            document.body.appendChild(copyEl);
            tabSize -= parseFloat(eleStyle.paddingRight);
            document.body.removeChild(copyEl);
            return false;
          }
        }
      }
    });
  }
  const transform = `translate${capitalize(sizeDir)}(${offset}px)`;
  style[sizeName] = state.separator ? "" : tabSize + "px";
  style.transform = transform;
  style.msTransform = transform;
  style.webkitTransform = transform;
  return style;
};
const api$6 = ["state", "computedBarStyle"];
const renderless$7 = (props2, { inject, reactive: reactive2 }, { parent }) => {
  const state = reactive2({
    rootTabs: inject("rootTabs"),
    barStyle: {},
    separator: inject("separator", null)
  });
  const api2 = {
    state,
    computedBarStyle: computedBarStyle(parent)
  };
  return api2;
};
const index$3 = "";
function _extends$1$2() {
  return _extends$1$2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t2 = arguments[e];
      for (var r in t2)
        ({}).hasOwnProperty.call(t2, r) && (n[r] = t2[r]);
    }
    return n;
  }, _extends$1$2.apply(null, arguments);
}
var tabNavPcProps = _extends$1$2({}, $props, {
  panes: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  currentName: String,
  editable: Boolean,
  overflowTitle: Boolean,
  onTabClick: {
    type: Function,
    default: function _default2() {
    }
  },
  onTabRemove: {
    type: Function,
    default: function _default3() {
    }
  },
  tabStyle: String,
  stretch: Boolean,
  showMoreTabs: Boolean,
  showPanesCount: Number,
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  dropConfig: {
    type: Object,
    default: function _default4() {
      return null;
    }
  },
  titleWidth: {
    type: String,
    default: "256px"
  },
  // tiny 新增
  tooltipConfig: [String, Object],
  panelMaxHeight: String,
  panelWidth: String
});
_extends$1$2({}, $props, {
  panes: {
    type: Array,
    default: function _default5() {
      return [];
    }
  },
  currentName: String,
  activeColor: {
    type: String,
    default: ""
  },
  onTabClick: {
    type: Function,
    default: function _default6() {
    }
  },
  onTabRemove: {
    type: Function,
    default: function _default7() {
    }
  },
  showExpandTabs: Boolean,
  expandPanesWidth: {
    type: String,
    default: ""
  },
  expandTabsTitle: {
    type: String,
    default: "请选择"
  },
  expandTabsMode: {
    type: String,
    default: "columns"
  },
  stretch: {
    type: Boolean,
    default: false
  }
});
var tabBarProps = _extends$1$2({}, $props, {
  tabs: Array
});
function _createForOfIteratorHelperLoose$2(r, e) {
  var t2 = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t2)
    return (t2 = t2.call(r)).next.bind(t2);
  if (Array.isArray(r) || (t2 = _unsupportedIterableToArray$2(r)) || e && r && "number" == typeof r.length) {
    t2 && (r = t2);
    var o = 0;
    return function() {
      return o >= r.length ? { done: true } : { done: false, value: r[o++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray$2(r, a);
    var t2 = {}.toString.call(r).slice(8, -1);
    return "Object" === t2 && r.constructor && (t2 = r.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray$2(r, a) : void 0;
  }
}
function _arrayLikeToArray$2(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r[e];
  return n;
}
var _export_sfc$2 = function _export_sfc2(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$2(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key2 = _step$value[0], val = _step$value[1];
    target[key2] = val;
  }
  return target;
};
function _extends$6() {
  return _extends$6 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t2 = arguments[e];
      for (var r in t2)
        ({}).hasOwnProperty.call(t2, r) && (n[r] = t2[r]);
    }
    return n;
  }, _extends$6.apply(null, arguments);
}
var _sfc_main$2$2 = /* @__PURE__ */ defineComponent({
  name: $prefix + "TabBar",
  props: tabBarProps,
  setup: function setup$1(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$7,
      api: api$6,
      mono: true
    });
  }
});
function _sfc_render$2(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      style: normalizeStyle(_ctx.state.barStyle),
      class: normalizeClass(["is-" + _ctx.state.rootTabs.position, _ctx.state.separator ? "" : "tiny-tabs__active-bar"])
    },
    null,
    6
    /* CLASS, STYLE */
  );
}
var TabBar = /* @__PURE__ */ _export_sfc$2(_sfc_main$2$2, [["render", _sfc_render$2]]);
var _sfc_main$1$3 = /* @__PURE__ */ defineComponent({
  name: $prefix + "TabNav",
  components: {
    TabBar,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Tooltip,
    IconChevronLeft: index$4(),
    IconChevronRight: index$5(),
    IconClose: index$6()
  },
  props: tabNavPcProps,
  inject: ["moreIcon"],
  setup: function setup2(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$8,
      api: api$7,
      mono: true
    });
  },
  render: function render() {
    var state = this.state, tabStyle = this.tabStyle, editable = this.editable, stretch = this.stretch, showPanesCount = this.showPanesCount, onTabClick = this.onTabClick, onTabRemove = this.onTabRemove, scrollNext2 = this.scrollNext, scrollPrev2 = this.scrollPrev, changeTab2 = this.changeTab, setFocus2 = this.setFocus, removeFocus2 = this.removeFocus, showMoreTabs = this.showMoreTabs, popperClass = this.popperClass, overflowTitle = this.overflowTitle, titleWidth = this.titleWidth, handleTitleMouseenter2 = this.handleTitleMouseenter, handleTitleMouseleave2 = this.handleTitleMouseleave, moreIcon = this.moreIcon, tooltipConfig = this.tooltipConfig, panelMaxHeight = this.panelMaxHeight, panelWidth = this.panelWidth;
    var panes = this.panes;
    var spans = [createVNode("span", {
      "class": ["tiny-tabs__nav-prev", state.scrollable.prev ? "" : "is-disabled"],
      "onClick": scrollPrev2
    }, [createVNode(resolveComponent("icon-chevron-left"), null, null)]), !showMoreTabs ? createVNode("span", {
      "class": ["tiny-tabs__nav-next", state.scrollable.next ? "" : "is-disabled"],
      "onClick": scrollNext2
    }, [createVNode(resolveComponent("icon-chevron-right"), null, null)]) : null];
    var scrollBtn = state.scrollable ? spans : null;
    var moreTabs = null;
    if (showMoreTabs && state.scrollable) {
      var reference = function reference2() {
        return moreIcon ? createVNode("span", {
          "class": "tiny-tabs__more-icon"
        }, [moreIcon() || t("ui.tabs.moreItem")]) : createVNode("span", {
          "class": "tiny-tabs__more"
        }, [t("ui.tabs.moreItem")]);
      };
      var dropdowpList = panes.slice(showPanesCount);
      var isShowDropDown = showPanesCount !== -1 && Boolean(dropdowpList.length);
      var menuSlot = function menuSlot2() {
        return isShowDropDown ? dropdowpList.map(function(pane, index2) {
          var tabName = pane.name || pane.state.index || index2;
          var tabLabelContent = pane.$slots.title || pane.title;
          var tabindex = pane.state.active ? 0 : -1;
          pane.state.index = "" + (index2 + showPanesCount);
          return createVNode(resolveComponent("dropdown-item"), {
            "class": "tiny-tabs__more-item",
            "tabindex": tabindex,
            "onFocus": function onFocus() {
              setFocus2();
            },
            "onBlur": function onBlur() {
              removeFocus2();
            },
            "onClick": function onClick(e) {
              removeFocus2();
              onTabClick(pane, tabName, e);
            }
          }, {
            default: function _default12() {
              return [typeof tabLabelContent === "function" ? tabLabelContent() : tabLabelContent];
            }
          });
        }) : null;
      };
      var dropdownSlot = function dropdownSlot2() {
        return isShowDropDown ? h(DropdownMenu, {
          attrs: {
            popperClass: "tiny-tabs-dropdown tiny-tabs__more-dropdown" + (popperClass ? " " + popperClass : ""),
            placement: "bottom-start",
            style: {
              maxHeight: panelMaxHeight,
              width: panelWidth
            }
          },
          scopedSlots: {
            default: menuSlot
          }
        }) : null;
      };
      moreTabs = createVNode("div", {
        "class": "tiny-tabs__more-container",
        "ref": "more"
      }, [isShowDropDown ? h(Dropdown, {
        attrs: {
          trigger: "hover"
        },
        scopedSlots: {
          default: reference,
          dropdown: dropdownSlot
        }
      }) : reference()]);
    }
    var tabs = panes.map(function(pane, index2) {
      var _class;
      var tabName = pane.name || pane.state.index || index2;
      var withClose = pane.state.isClosable || editable;
      pane.state.index = "" + index2;
      var btnClose = withClose ? createVNode("span", {
        "class": "tiny-tabs__icon-close"
      }, [createVNode(resolveComponent("icon-close"), {
        "onClick": function onClick(e) {
          onTabRemove(pane, e);
        }
      }, null)]) : null;
      var getTabTitle = function getTabTitle2(title) {
        return h("span", {
          class: {
            "tiny-tabs__item-title": true
          },
          style: {
            "max-width": titleWidth
          },
          on: {
            mouseenter: function mouseenter(e) {
              handleTitleMouseenter2(e, title);
            },
            mouseleave: function mouseleave(e) {
              handleTitleMouseleave2(e);
            }
          }
        }, [title]);
      };
      var tipComp = function tipComp2() {
        return tooltipConfig === "title" ? h("span", {
          class: "tiny-tabs__item__title",
          attrs: {
            title: pane.title
          }
        }, [pane.title]) : h(Tooltip, {
          class: "tiny-tabs__item__title",
          props: _extends$6({
            content: pane.title
          }, tooltipConfig)
        }, [h("span", {}, [pane.title])]);
      };
      var toolTipComp = function toolTipComp2() {
        return tooltipConfig ? tipComp() : h("span", {
          class: "tiny-tabs__item__title"
        }, [pane.title]);
      };
      var itemsSeparator = createVNode("span", {
        "class": "tiny-tabs__item-separator"
      }, null);
      var tabLabelContent = pane.$slots.title ? pane.$slots.title() : toolTipComp();
      var tabindex = pane.state.active ? 0 : -1;
      return h("div", {
        ref: "tabs-" + tabName,
        key: "tab-" + tabName + "-" + index2,
        class: (_class = {
          "tiny-tabs__item": true,
          "tiny-tabs__item-separator-space": state.separator
        }, _class["is-" + state.rootTabs.position] = true, _class["is-active"] = pane.state.active, _class["is-disabled"] = pane.disabled, _class["is-closable"] = withClose, _class["is-focus"] = state.isFocus, _class),
        attrs: {
          id: "tab-" + tabName,
          "aria-controls": "pane-" + tabName,
          "data-index": index2 + 1,
          role: "tab",
          "aria-selected": pane.state.active,
          tabindex,
          refInFor: true
        },
        on: {
          focus: function focus() {
            setFocus2();
          },
          blur: function blur() {
            removeFocus2();
          },
          click: function click(e) {
            removeFocus2();
            onTabClick(pane, tabName, e);
          },
          keydown: function keydown(e) {
            if (withClose && (e.keyCode === 46 || e.keyCode === 8)) {
              onTabRemove(pane, e);
            }
          }
        }
      }, [overflowTitle ? getTabTitle(tabLabelContent) : tabLabelContent, btnClose, state.separator && itemsSeparator]);
    });
    var paddingRight = this.$refs.more ? this.$refs.more.offsetWidth + "px" : "46px";
    return createVNode("div", {
      "style": showMoreTabs ? {
        paddingRight
      } : {},
      "class": ["tiny-tabs__nav-wrap", !state.separator && "tiny-tabs__nav-wrap-not-separator", state.scrollable ? "is-scrollable" : "", showMoreTabs ? "is-show-more" : "", "is-" + state.rootTabs.position]
    }, [[scrollBtn, moreTabs], createVNode("div", {
      "class": ["tiny-tabs__nav-scroll"],
      "ref": "navScroll"
    }, [createVNode("div", {
      "class": ["tiny-tabs__nav", "is-" + state.rootTabs.position, stretch && ["top", "bottom"].includes(state.rootTabs.position) ? "is-stretch" : "", !tabStyle ? "is-show-active-bar" : ""],
      "ref": "nav",
      "style": state.navStyle,
      "role": "tablist",
      "on-keydown": changeTab2
    }, [!tabStyle ? createVNode(resolveComponent("tab-bar"), {
      "ref": "tabBar",
      "tabs": panes
    }, null) : null, tabs])]), overflowTitle ? createVNode(Tooltip, {
      "ref": "tooltip",
      "modelValue": state.tooltipVisible,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return state.tooltipVisible = $event;
      },
      "manual": true,
      "effect": "light",
      "content": state.tooltipContent,
      "placement": "top"
    }, null) : null]);
  }
});
var _sfc_main$7 = /* @__PURE__ */ defineComponent({
  emits: ["add", "click", "close", "edit", "update:modelValue", "tab-nav-update", "tab-drag-start", "tab-drag-over", "tab-drag-end"],
  props: [].concat(props, ["tabStyle", "activeName", "withClose", "withAdd", "size", "modelValue", "editable", "position", "beforeLeave", "stretch", "showMoreTabs", "popperClass", "popperAppendToBody", "dropConfig", "tooltipConfig", "separator", "beforeClose", "overflowTitle", "titleWidth", "moreShowAll", "panelMaxHeight", "panelWidth"]),
  components: {
    TabNav: _sfc_main$1$3,
    IconPlus: index$7()
  },
  provide: function provide() {
    return {
      moreIcon: this.$slots.moreIcon
    };
  },
  setup: function setup3(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$9,
      api: api$8
    });
  },
  render: function render2() {
    var _this = this, _class2;
    var state = this.state, tabStyle = this.tabStyle, handleTabClick2 = this.handleTabClick, handleTabRemove2 = this.handleTabRemove, handleTabAdd2 = this.handleTabAdd, handleTabDragStart2 = this.handleTabDragStart, handleTabDragOver2 = this.handleTabDragOver, handleTabDragEnd2 = this.handleTabDragEnd, editable = this.editable, withAdd = this.withAdd, position = this.position, size = this.size, stretch = this.stretch, showMoreTabs = this.showMoreTabs, popperClass = this.popperClass, popperAppendToBody = this.popperAppendToBody, dropConfig = this.dropConfig, tooltipConfig = this.tooltipConfig, overflowTitle = this.overflowTitle, titleWidth = this.titleWidth, panelMaxHeight = this.panelMaxHeight, panelWidth = this.panelWidth;
    var newButton = editable || withAdd ? createVNode("span", {
      "class": "tiny-tabs__new-tab",
      "onClick": handleTabAdd2,
      "tabindex": "0",
      "onKeydown": function onKeydown(ev) {
        if (ev.keyCode === 13) {
          handleTabAdd2();
        }
      }
    }, [createVNode(resolveComponent("icon-plus"), null, null)]) : null;
    var navData = {
      props: {
        currentName: state.currentName,
        panes: state.panes,
        onTabClick: handleTabClick2,
        onTabRemove: handleTabRemove2,
        showPanesCount: state.showPanesCount,
        editable,
        tabStyle,
        size,
        stretch,
        showMoreTabs,
        popperClass,
        popperAppendToBody,
        dropConfig,
        tooltipConfig,
        overflowTitle,
        titleWidth,
        separator: state.separator,
        panelMaxHeight,
        panelWidth
      },
      on: {
        "tab-drag-start": handleTabDragStart2,
        "tab-drag-over": handleTabDragOver2,
        "tab-drag-end": handleTabDragEnd2
      },
      ref: "nav"
    };
    var TabNavComponent = h(_sfc_main$1$3, _extends$6({}, navData));
    this.$nextTick(function() {
      _this.$refs.nav && _this.$refs.nav.$forceUpdate();
    });
    var header = createVNode("div", {
      "class": ["tiny-tabs__header", "is-" + position]
    }, [TabNavComponent, newButton]);
    var panels = createVNode("div", {
      "class": "tiny-tabs__content"
    }, [this.slots.default && this.slots.default()]);
    return createVNode("div", {
      "class": (_class2 = {
        "tiny-tabs": true,
        "tiny-tabs--card": tabStyle === "card"
      }, _class2["tiny-tabs--" + (!state.separator ? position : "top")] = true, _class2["tiny-tabs--border-card"] = tabStyle === "border-card", _class2["tiny-tabs--button-card"] = tabStyle === "button-card", _class2["tiny-tabs--small"] = size === "small", _class2["tiny-tabs--large"] = size === "large", _class2)
    }, [position !== "bottom" ? [header, panels] : [panels, header]]);
  }
});
const index$2 = "";
function _extends$1$1() {
  return _extends$1$1 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t2 = arguments[e];
      for (var r in t2)
        ({}).hasOwnProperty.call(t2, r) && (n[r] = t2[r]);
    }
    return n;
  }, _extends$1$1.apply(null, arguments);
}
_extends$1$1({}, $props, {
  panes: {
    type: Array,
    default: function _default8() {
      return [];
    }
  },
  currentName: String,
  editable: Boolean,
  overflowTitle: Boolean,
  onTabClick: {
    type: Function,
    default: function _default22() {
    }
  },
  onTabRemove: {
    type: Function,
    default: function _default32() {
    }
  },
  tabStyle: String,
  stretch: Boolean,
  showMoreTabs: Boolean,
  showPanesCount: Number,
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  dropConfig: {
    type: Object,
    default: function _default42() {
      return null;
    }
  },
  titleWidth: {
    type: String,
    default: "256px"
  },
  // tiny 新增
  tooltipConfig: [String, Object],
  panelMaxHeight: String,
  panelWidth: String
});
var tabNavMobileProps = _extends$1$1({}, $props, {
  panes: {
    type: Array,
    default: function _default52() {
      return [];
    }
  },
  currentName: String,
  activeColor: {
    type: String,
    default: ""
  },
  onTabClick: {
    type: Function,
    default: function _default62() {
    }
  },
  onTabRemove: {
    type: Function,
    default: function _default72() {
    }
  },
  showExpandTabs: Boolean,
  expandPanesWidth: {
    type: String,
    default: ""
  },
  expandTabsTitle: {
    type: String,
    default: "请选择"
  },
  expandTabsMode: {
    type: String,
    default: "columns"
  },
  stretch: {
    type: Boolean,
    default: false
  }
});
_extends$1$1({}, $props, {
  tabs: Array
});
function _extends$5() {
  return _extends$5 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t2 = arguments[e];
      for (var r in t2)
        ({}).hasOwnProperty.call(t2, r) && (n[r] = t2[r]);
    }
    return n;
  }, _extends$5.apply(null, arguments);
}
var _sfc_main$1$2 = /* @__PURE__ */ defineComponent({
  name: $prefix + "TabNav",
  components: {
    IconClose: index$6(),
    IconChevronDown: index$8()
  },
  props: tabNavMobileProps,
  setup: function setup$12(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$8,
      api: api$7,
      mono: true,
      h
    });
  },
  render: function render3() {
    var state = this.state, panes = this.panes, onTabClick = this.onTabClick, onTabRemove = this.onTabRemove, showExpandTabs = this.showExpandTabs, expandTabShow2 = this.expandTabShow, activeColor = this.activeColor, expandPanesWidth = this.expandPanesWidth, currentName = this.currentName, expandTabsTitle = this.expandTabsTitle, expandTabsMode = this.expandTabsMode, stretch = this.stretch;
    var tabsExpandIcon = showExpandTabs ? createVNode("div", {
      "class": "tiny-mobile-tabs__expand-icon"
    }, [createVNode("span", {
      "slot": "reference",
      "class": "tiny-mobile-tabs__expand",
      "onClick": function onClick() {
        expandTabShow2();
      }
    }, [createVNode(resolveComponent("icon-chevron-down"), null, null)])]) : null;
    var tabsExpandContent = createVNode("div", {
      "class": "tiny-mobile-tabs__expand-content",
      "style": state.showExpandItem ? {
        display: "block",
        width: expandPanesWidth ? expandPanesWidth + "px" : ""
      } : {
        display: "none"
      }
    }, [createVNode("div", {
      "class": "tiny-mobile-tabs__expand-mask"
    }, null), createVNode("div", {
      "class": "tiny-mobile-tabs__expand-header"
    }, [createVNode("label", {
      "class": "tiny-mobile-tabs__expand-header-title",
      "style": state.expandHeaderStyle
    }, [expandTabsTitle]), createVNode("span", {
      "slot": "reference",
      "class": "tiny-mobile-tabs__expand",
      "style": {
        transform: "rotate(180deg)"
      }
    }, [createVNode(resolveComponent("icon-chevron-down"), null, null)])]), createVNode("div", {
      "class": "tiny-mobile-tabs__expand-list"
    }, [panes.map(function(pane, index2) {
      var _class;
      var tabName = pane.name || pane.state.index || index2;
      var tabTitle = pane.$slots.title || pane.title;
      return createVNode("div", {
        "class": (_class = {
          "tiny-mobile-tabs__expand-item": true
        }, _class["tiny-mobile-tabs__expand-mode-" + expandTabsMode] = expandTabsMode === "columns", _class)
      }, [createVNode("div", {
        "class": {
          "tiny-mobile-tabs__expand-item-title": true,
          "is-current": currentName === tabName
        },
        "onClick": function onClick(e) {
          onTabClick(pane, tabName, e);
        }
      }, [tabTitle])]);
    })])]);
    var navStyle = {};
    var tabs = panes.map(function(pane, index2) {
      var _class2;
      var tabName = pane.name || pane.state.index || index2;
      var withClose = pane.state.isClosable;
      pane.state.index = "" + index2;
      var btnClose = withClose && panes.length > 1 ? createVNode("span", {
        "class": "tiny-mobile-tabs__icon-close"
      }, [createVNode(resolveComponent("icon-close"), {
        "onClick": function onClick(e) {
          onTabRemove(pane, e);
        }
      }, null)]) : null;
      var tabTitle = pane.$slots.title || pane.title;
      var tabItemStyle = {};
      if (!stretch) {
        tabItemStyle.flex = 0;
        navStyle.justifyContent = "center";
      }
      if (index2 === panes.length - 1) {
        tabItemStyle.marginRight = 0;
      }
      return createVNode("div", {
        "class": (_class2 = {
          "tiny-mobile-tabs__item": true
        }, _class2["is-" + state.rootTabs.position] = true, _class2["is-active"] = pane.state.active, _class2["is-disabled"] = pane.disabled, _class2["is-closable"] = withClose, _class2),
        "style": tabItemStyle,
        "role": "tab",
        "ref": "tabs",
        "id": "tab-" + tabName,
        "key": "tab-" + tabName,
        "aria-controls": "pane-" + tabName,
        "aria-selected": pane.state.active,
        "onClick": function onClick(e) {
          onTabClick(pane, tabName, e);
        }
      }, [createVNode("span", {
        "class": "tiny-mobile-tabs__name",
        "style": activeColor && pane.state.active ? {
          color: activeColor
        } : {}
      }, [tabTitle, btnClose])]);
    });
    return createVNode("div", {
      "style": showExpandTabs ? {
        paddingRight: "46px"
      } : {},
      "class": ["tiny-mobile-tabs__nav-wrap", state.scrollable ? "is-scrollable" : "", panes.length > 4 ? "tiny-mobile-tabs__wrap-scrollable" : "", showExpandTabs ? "is-show-expand" : "", "is-" + state.rootTabs.position]
    }, [createVNode("div", {
      "class": ["tiny-mobile-tabs__nav-scroll"],
      "ref": "navScroll"
    }, [createVNode("div", {
      "class": ["tiny-mobile-tabs__nav", "is-" + state.rootTabs.position],
      "style": navStyle,
      "ref": "nav",
      "role": "tablist"
    }, [tabs, createVNode("div", {
      "class": "tiny-mobile-tabs__line",
      "style": [state.navStyle, activeColor ? {
        backgroundColor: activeColor
      } : {}]
    }, null)])]), [tabsExpandIcon, tabsExpandContent]]);
  }
});
var MIN_SWIPE_DISTANCE = 50;
var _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: [].concat(props, ["activeName", "position", "withClose", "withAdd", "activeColor", "modelValue", "beforeLeave", "editable", "showExpandTabs", "childrenTabs", "swipeable", "expandTabsTitle", "expandTabsMode", "stretch", "size"]),
  components: {
    TabNav: _sfc_main$1$2,
    IconPlus: index$7()
  },
  setup: function setup22(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$9,
      api: api$8
    });
  },
  methods: {
    getCurIndex: function getCurIndex() {
      var _this = this;
      var current = 0;
      this.state.panes.filter(function(node, index2) {
        return node.name === _this.state.currentName && (current = index2);
      });
      return current;
    },
    onTouchEnd: function onTouchEnd() {
      var _this$state = this.state, direction = _this$state.direction, deltaX = _this$state.deltaX;
      var currentIndex = this.getCurIndex();
      if (direction === "horizontal" && this.state.offsetX >= MIN_SWIPE_DISTANCE) {
        if (deltaX > 0 && currentIndex !== 0) {
          var name = this.state.panes[currentIndex - 1].name;
          this.$emit("swipeLeft", name);
          this.setCurrentName(name);
          this.$refs.nav.scrollToActiveTab();
        } else if (deltaX < 0 && currentIndex !== this.state.panes.length - 1) {
          var _name = this.state.panes[currentIndex + 1].name;
          this.$emit("swipeRight", _name);
          this.setCurrentName(_name);
          this.$refs.nav.scrollToActiveTab();
        }
      }
    }
  },
  render: function render22() {
    var _class3;
    var state = this.state, position = this.position, handleTabClick2 = this.handleTabClick, handleTabRemove2 = this.handleTabRemove, handleTabAdd2 = this.handleTabAdd, editable = this.editable, withAdd = this.withAdd, showExpandTabs = this.showExpandTabs, swipeable = this.swipeable, activeColor = this.activeColor, expandTabsTitle = this.expandTabsTitle, expandTabsMode = this.expandTabsMode, stretch = this.stretch, size = this.size;
    var newButton = editable || withAdd ? createVNode("span", {
      "class": "tiny-mobile-tabs__new-tab",
      "onClick": handleTabAdd2,
      "tabindex": "0",
      "onKeydown": function onKeydown(ev) {
        if (ev.keyCode === 13) {
          handleTabAdd2();
        }
      }
    }, [createVNode(resolveComponent("icon-plus"), null, null)]) : null;
    var navData = {
      props: {
        currentName: state.currentName,
        panes: state.panes,
        activeColor,
        onTabClick: handleTabClick2,
        onTabRemove: handleTabRemove2,
        showExpandTabs,
        expandPanesWidth: state.expandPanesWidth,
        expandTabsTitle,
        expandTabsMode,
        stretch
      },
      ref: "nav"
    };
    var TabNavComponent = h(_sfc_main$1$2, _extends$5({}, navData));
    var header = createVNode("div", {
      "class": ["tiny-mobile-tabs__header", "is-" + position]
    }, [newButton, TabNavComponent]);
    var listeners = swipeable ? {
      touchstart: touchStart(state),
      touchmove: touchMove(state),
      touchend: this.onTouchEnd,
      touchcancel: this.onTouchEnd
    } : {};
    var panels = h("div", {
      class: "tiny-mobile-tabs__content",
      on: _extends$5({}, listeners)
    }, this.slots.default());
    return createVNode("div", {
      "class": (_class3 = {
        "tiny-mobile-tabs": true
      }, _class3["tiny-mobile--" + position] = true, _class3["tiny-mobile-tabs-small"] = size === "small", _class3)
    }, [[header, panels]]);
  }
});
const setActive = ({ state, props: props2, api: api2 }) => (name) => {
  const current = state.currentItem ? state.currentItem.name : "";
  if (current && current !== name && props2.beforeLeave) {
    const before = props2.beforeLeave(name, current);
    if (before && before.then) {
      before.then(() => {
        api2.changeCurrentName(name);
      }).catch(() => null);
    } else if (before !== false) {
      api2.changeCurrentName(name);
    }
  } else {
    api2.changeCurrentName(name);
  }
};
const changeCurrentName = ({ emit, state }) => (name) => {
  state.items.forEach((item) => item.selected = item.name === name);
  emit("update:activeName", name);
  emit("update:modelValue", name);
};
const addItem = (state) => (item) => {
  state.items = [...state.items, item];
};
const addNav = (state) => (nav) => {
  state.navs = [...state.navs, nav];
};
const scrollTo = ({ vm, state }) => (name) => {
  const { navs } = state;
  const { $refs } = vm;
  const { tabbar } = $refs;
  const { scroll } = tabbar.$refs;
  singleton_default.measure(() => {
    const { clientWidth, scrollWidth } = scroll;
    if (name && scrollWidth > clientWidth) {
      const total = navs.length;
      const index2 = navs.findIndex((nav) => nav.name === name);
      const max = scrollWidth - clientWidth;
      if (~index2) {
        singleton_default.mutate(() => {
          scroll.scrollLeft = max / (total - 1) * index2;
          tabbar.wheelListener();
        });
      }
    }
  });
};
const clickMore = (api2) => (name) => {
  api2.setActive(name);
  api2.scrollTo(name);
};
const removeItem = ({ state, emit }) => (name, silent = false) => {
  const itemIndex = state.items.findIndex((item) => item.name === name);
  const navIndex = state.navs.findIndex((item) => item.name === name);
  if (~itemIndex) {
    state.items.splice(itemIndex, 1);
    state.items = [...state.items];
    state.navs.splice(navIndex, 1);
    state.navs = [...state.navs];
    if (!silent) {
      emit("edit", name, "remove");
      emit("close", name);
    }
  }
};
const wheelListener = ({ vm, api: api2, tabs, state }) => debounce_default(10, (e) => {
  const { $refs } = vm;
  const { getBoundRect: getBoundRect2 } = api2;
  e && e.stopPropagation();
  $refs.scroll && ($refs.scroll.scrollLeft += ((e || {}).deltaY || 0) / 3);
  state.tabMoreWidth = $refs.tabMore && $refs.tabMore.offsetWidth || 0;
  state.navPaddingRight = state.tabMoreWidth + 1;
  const { left, width } = getBoundRect2();
  const barRange = { left, width, reserve: state.tabMoreWidth };
  let { moreList = [], moreLeft = false, moreRight = false } = {};
  tabs.state.navs.forEach((nav) => {
    const { name, rect } = nav.getBoundRect();
    const { left: left2, width: width2 } = rect;
    const navRange = { name, left: left2, width: width2 };
    if (navRange.left < barRange.left || navRange.left + navRange.width > barRange.left + barRange.width - barRange.reserve) {
      moreList.push(navRange.name);
    }
  });
  if (tabs.state.items.length) {
    moreLeft = ~moreList.indexOf(tabs.state.items[0].name);
    moreRight = ~moreList.indexOf(tabs.state.items[tabs.state.items.length - 1].name);
  }
  Object.assign(state, { moreList, moreLeft, moreRight });
});
const getBoundRect = (vm) => () => vm.$el.getBoundingClientRect();
const handleClickDropdownItem = (tabs) => (name) => tabs.clickMore(name);
const key = (opt) => opt.name + "-" + random();
const emitAdd = (tabs) => () => {
  tabs.$emit("edit", null, "add");
  tabs.$emit("add");
};
const handleNavItemClick = ({ tabs, props: props2 }) => () => {
  tabs.setActive(props2.navItem.name);
  tabs.$emit("click", props2.navItem);
};
const getBoundRectNV = ({ vm, props: props2 }) => () => ({
  name: props2.navItem.name,
  rect: vm.$el.getBoundingClientRect()
});
const handleNavItemClose = ({ tabs, props: props2 }) => (e) => {
  e.stopPropagation();
  tabs.removeItem(props2.navItem.name);
};
const api$5 = ["state", "setActive", "addItem", "addNav", "scrollTo", "clickMore", "removeItem"];
const renderless$6 = (props2, { onMounted, onBeforeUnmount, provide: provide2, reactive: reactive2, watch, computed }, { vm, emit }) => {
  const state = reactive2({
    items: [],
    navs: [],
    currentItem: computed(() => state.items.find((item) => item.selected)),
    key: computed(() => state.currentItem ? state.currentItem.name : random()),
    separator: props2.separator
  });
  const api2 = {};
  Object.assign(api2, {
    state,
    setActive: setActive({ api: api2, state, props: props2 }),
    addItem: addItem(state),
    addNav: addNav(state),
    scrollTo: scrollTo({ vm, state }),
    removeItem: removeItem({ state, emit }),
    changeCurrentName: changeCurrentName({ state, emit }),
    clickMore: clickMore(api2)
  });
  provide2("tabs", vm);
  watch(
    () => props2.activeName,
    (name) => name && api2.setActive(name)
  );
  watch(
    () => props2.modelValue,
    (name) => name && api2.setActive(name)
  );
  onMounted(() => {
    props2.activeName && api2.scrollTo(props2.activeName);
    props2.modelValue && api2.scrollTo(props2.modelValue);
  });
  onBeforeUnmount(() => {
    state.navs.forEach((n, i) => state.navs[i] = null);
    state.navs.length = 0;
  });
  provide2("separator", state.separator);
  return api2;
};
const getAddWheelListener = (window2, document2) => {
  const { addApiName, removeApiName, prefix } = detectEventModel(window2);
  const support = detectAvailableWheelEvent(document2);
  const params = { addApiName, removeApiName, prefix, support, window: window2 };
  const { add, remove } = getWheelListener(params);
  return {
    addWheelListener: (elem, callback, useCapture) => {
      support === "DOMMouseScroll" ? add(elem, "MozMousePixelScroll", callback, useCapture) : add(elem, support, callback, useCapture);
    },
    removeWheelListener: (elem, callback, useCapture) => {
      support === "DOMMouseScroll" ? remove(elem, "MozMousePixelScroll", callback, useCapture) : remove(elem, support, callback, useCapture);
    }
  };
};
const detectEventModel = (window2) => {
  const flag = window2.addEventListener;
  const addApiName = flag ? "addEventListener" : "attachEvent";
  const removeApiName = flag ? "removeEventListener" : "detachEvent";
  const prefix = flag ? "" : "on";
  return { addApiName, removeApiName, prefix };
};
const detectAvailableWheelEvent = (document2) => {
  let support;
  if ("onwheel" in document2.createElement("div")) {
    support = "wheel";
  } else if (document2.onmousewheel !== void 0) {
    support = "mousewheel";
  } else {
    support = "DOMMouseScroll";
  }
  return support;
};
const elemCbMap = /* @__PURE__ */ new WeakMap();
const getWheelListener = ({ addApiName, removeApiName, prefix, support, window: window2 }) => ({
  add: (elem, eventName, callback, useCapture) => {
    let cb = callback;
    if (support !== "wheel") {
      cb = (oEvent) => {
        !oEvent && (oEvent = window2.event);
        const event = {
          originalEvent: oEvent,
          target: oEvent.target || oEvent.srcElement,
          type: "wheel",
          deltaMode: oEvent.type === "MozMousePixelScroll" ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: () => {
            oEvent.preventDefault ? oEvent.preventDefault() : oEvent.returnValue = false;
          }
        };
        if (support === "mousewheel") {
          event.deltaY = -1 / 40 * oEvent.wheelDelta;
          oEvent.wheelDeltaX && (event.deltaX = -1 / 40 * oEvent.wheelDeltaX);
        } else {
          event.deltaY = oEvent.detail;
        }
        return callback(event);
      };
    }
    elemCbMap.set(elem, cb);
    elem[addApiName](prefix + eventName, cb, useCapture || false);
  },
  remove: (elem, eventName, callback, useCapture) => {
    const cb = elemCbMap.get(elem);
    elem[removeApiName](prefix + eventName, cb, useCapture || false);
    elemCbMap.delete(elem);
  }
});
const { addWheelListener, removeWheelListener } = getAddWheelListener(window, document);
const api$4 = ["state", "wheelListener", "handleClickDropdownItem", "key", "emitAdd"];
const renderless$5 = (props2, { onMounted, onBeforeUnmount, reactive: reactive2, watch, inject, computed }, { vm }) => {
  const tabs = inject("tabs", null);
  const state = reactive2({
    moreList: [],
    moreLeft: false,
    moreRight: false,
    moreOptions: [],
    tabMoreWidth: 0,
    navPaddingRight: 0,
    withAdd: computed(() => tabs.withAdd),
    slotCustom: tabs.slots.custom,
    separator: inject("separator", null)
  });
  const api2 = {
    getBoundRect: getBoundRect(vm),
    handleClickDropdownItem: handleClickDropdownItem(tabs),
    key,
    emitAdd: emitAdd(tabs)
  };
  Object.assign(api2, {
    state,
    wheelListener: wheelListener({ vm, api: api2, tabs, state })
  });
  watch(
    () => state.moreList,
    () => {
      state.moreOptions = state.moreList.map((name) => tabs.state.items.find((item) => item.name === name));
    }
  );
  onMounted(() => {
    addWheelListener(vm.$refs.scroll, api2.wheelListener);
    addResizeListener(vm.$el, api2.wheelListener);
    api2.wheelListener();
  });
  onBeforeUnmount(() => {
    removeWheelListener(vm.$refs.scroll, api2.wheelListener);
    removeResizeListener(vm.$el, api2.wheelListener);
  });
  return api2;
};
const api$3 = ["state"];
const renderless$4 = (props2, { reactive: reactive2, inject, computed, onMounted, onBeforeUnmount }, { vm }) => {
  const tabs = inject("tabs", null);
  const state = reactive2({
    navItems: computed(() => tabs.state.items),
    currentNav: computed(() => tabs.state.navs[state.currentIndex]),
    currentIndex: computed(
      () => tabs.state.navs.findIndex((item) => tabs.state.currentItem && tabs.state.currentItem.name === item.name)
    ),
    currentWidth: 0,
    currentPosition: 0
  });
  let rafId, observer;
  onMounted(() => {
    observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "attributes") {
          if (rafId) {
            cancelAnimationFrame(rafId);
          }
          rafId = requestAnimationFrame(() => {
            const nav = state.currentNav;
            state.currentWidth = nav && nav.$el.offsetWidth || 0;
            state.currentPosition = nav && nav.$el.offsetLeft || 0;
          });
        }
      }
    });
    observer.observe(vm.$el, { attributes: true, subtree: true });
  });
  onBeforeUnmount(() => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    observer.disconnect();
    observer = null;
  });
  return { state };
};
const api$2 = ["state", "handleNavItemClick", "getBoundRect", "handleNavItemClose"];
const renderless$3 = (props2, { inject, markRaw, reactive: reactive2, computed }, { vm }) => {
  const tabs = inject("tabs", null);
  tabs.addNav(markRaw(vm));
  const state = reactive2({
    tabSize: computed(() => tabs.size),
    withClose: computed(() => tabs.withClose),
    separator: inject("separator", null)
  });
  const api2 = {
    state,
    handleNavItemClick: handleNavItemClick({ tabs, props: props2 }),
    getBoundRect: getBoundRectNV({ vm, props: props2 }),
    handleNavItemClose: handleNavItemClose({ tabs, props: props2 })
  };
  return api2;
};
function _extends$4() {
  return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t2 = arguments[e];
      for (var r in t2)
        ({}).hasOwnProperty.call(t2, r) && (n[r] = t2[r]);
    }
    return n;
  }, _extends$4.apply(null, arguments);
}
var _sfc_main$4$1 = defineComponent({
  props: _extends$4({}, $props, {
    title: String,
    name: String,
    selected: Boolean,
    navItem: Object
  }),
  setup: function setup$13(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$3,
      api: api$2,
      mono: true
    });
  },
  render: function render4() {
    var state = this.state, handleNavItemClick2 = this.handleNavItemClick, selected = this.selected, title = this.title, handleNavItemClose2 = this.handleNavItemClose, navItem = this.navItem;
    var settingClick = function settingClick2(e) {
      return e.stopPropagation();
    };
    return h("div", {
      attrs: {
        "data-tag": "tiny-tab-nav-item"
      },
      class: ["w-max h-11 sm:h-10 inline-flex flex-col justify-center group", "first:ml-3 last:mr-3 hover:cursor-pointer sm:first:pl-0 sm:last:pr-0 sm:first:ml-0 sm:last:mr-0", state.separator ? "mx-3.5 [&:last-of-type>div>span:last-of-type]:hidden [&:not(:last-of-type)]:mr-px" : "mx-3"],
      on: {
        click: handleNavItemClick2
      }
    }, [h("span", {
      class: ["text-base sm:text-sm leading-6 sm:leading-5.5 group-hover:text-color-brand", state.tabSize === "large" ? "min-w-[theme(spacing.8)]" : "min-w-[theme(spacing.7)]", selected ? "text-color-brand font-bold" : "text-color-text-primary"],
      style: state.tabSize === "large" ? "font-size: 1rem" : ""
    }, [navItem.slotTitle ? navItem.slotTitle(navItem) : h("span", {}, title), navItem.slotSetting || state.withClose ? h("span", {
      class: ["pl-2 inline-flex translate-y-0.5 text-xs fill-color-icon-primary", "hover:fill-color-icon-hover focus:fill-color-icon-focus", navItem.slotSetting ? "-translate-y-0.5" : ""],
      on: {
        click: navItem.slotSetting ? settingClick : handleNavItemClose2
      }
    }, [navItem.slotSetting ? navItem.slotSetting(navItem) : h(index$6())]) : null, state.separator ? h("span", {
      attrs: {
        "data-tag": "tiny-tab-nav-item-separator"
      },
      class: "relative left-3.5 inline-flex bg-color-border-separator w-px h-3"
    }) : null])]);
  }
});
var _sfc_main$3$1 = defineComponent({
  props: _extends$4({}, $props, {
    customClass: {
      type: String,
      default: ""
    }
  }),
  setup: function setup23(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$4,
      api: api$3,
      mono: true
    });
  },
  render: function render23() {
    var state = this.state, customClass = this.customClass, m = this.m;
    return h("div", {
      attrs: {
        "data-tag": "tiny-tab-nav"
      },
      class: m("relative", customClass)
    }, [].concat(state.navItems.map(function(item) {
      return typeof item.visible === "undefined" || item.visible ? h(_sfc_main$4$1, {
        key: item.name,
        props: {
          title: item.title,
          name: item.name,
          selected: item.selected,
          navItem: item
        }
      }) : null;
    }), [h("div", {
      class: m("absolute bottom-0.5 h-0.5 bg-color-brand transition-all duration-300", {
        "hidden": !state.currentNav
      }),
      style: {
        width: state.currentWidth + "px",
        left: state.currentPosition + "px"
      }
    })]));
  }
});
var _sfc_main$2$1 = defineComponent({
  props: [].concat(props),
  setup: function setup32(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$5,
      api: api$4,
      mono: true
    });
  },
  render: function render32() {
    var state = this.state, handleClickDropdownItem2 = this.handleClickDropdownItem, key2 = this.key, emitAdd2 = this.emitAdd;
    var tabNavClass = state.moreList.length > 0 ? "w-max inline-block" : "w-full inline-flex justify-around sm:w-max sm:inline-block";
    return h("div", {
      attrs: {
        "data-tag": "tiny-tab-bar"
      },
      class: "w-full h-11 sm:h-10 overflow-hidden relative"
    }, [h("div", {
      ref: "scroll",
      class: ["scrollbar-size-0 w-full overflow-x-auto whitespace-nowrap", "before:block before:absolute before:w-0 before:h-11 sm:before:h-10", "after:block after:absolute after:top-0 after:right-0 after:w-0 after:h-11 sm:after:h-10", "before:shadow-[1px_-10px_4px_4px_rgba(0,0,0,0.08)] after:shadow-[-1px_-10_4px_4px_rgba(0,0,0,0.08)]", !state.moreLeft && !state.moreRight ? "before:hidden after:hidden" : "", !state.moreLeft ? "before:hidden" : "", !state.moreRight ? "after:hidden" : ""]
    }, [h(_sfc_main$3$1, {
      ref: "tabNav",
      props: {
        customClass: tabNavClass
      },
      style: "margin-right:" + state.navPaddingRight + "px"
    })]), h("div", {
      class: [state.separator ? "sm:invisible" : "invisible sm:visible absolute w-full h-px bottom-px bg-color-border-separator z-10"]
    }), h("div", {
      ref: "tabMore",
      attrs: {
        "data-tag": "tiny-tab-more"
      },
      class: ["inline-flex w-max h-11 sm:h-10 absolute top-0 right-0 z-0 bg-color-bg-1", state.moreRight ? "shadow-[-1px_-10px_4px_4px_rgba(0,0,0,0.08)]" : ""]
    }, [state.moreList.length ? h("div", {
      class: "hidden sm:inline-block w-11 h-11 sm:h-10 text-sm cursor-pointer"
    }, [h("span", {
      class: "inline-flex w-full h-full flex-col justify-center items-center"
    }, [h(Dropdown, {
      on: {
        "item-click": handleClickDropdownItem2
      },
      props: {
        showIcon: false
      }
    }, [h("span", {}, [h(index$9(), {
      class: "fill-color-icon-focus text-base"
    })]), h(DropdownMenu, {
      slot: "dropdown",
      props: {
        popperClass: "max-h-[theme(spacing.80)] overflow-x-hidden overflow-y-auto"
      }
    }, state.moreOptions.map(function(opt) {
      return h(DropdownItem, {
        key: key2(opt),
        props: {
          itemData: opt.name
        }
      }, [opt.slotTitle ? opt.slotTitle() : opt.title]);
    }))])])]) : null, state.withAdd ? h("div", {
      attrs: {
        "data-tag": "tiny-tab-add"
      },
      class: "hidden sm:inline-block w-11 h-11 sm:h-10 text-sm cursor-pointer",
      on: {
        click: emitAdd2
      }
    }, [h("span", {
      class: "inline-flex w-full h-full flex-col justify-center items-center"
    }, [h(index$7(), {
      class: "fill-color-icon-primary hover:fill-color-icon-focus"
    })])]) : null, state.slotCustom ? h("div", {
      attrs: {
        "data-tag": "tiny-tab-custom"
      },
      class: "hidden sm:inline-block w-max h-11 sm:h-10 text-sm"
    }, [h("span", {
      class: "inline-flex w-max h-full flex-col justify-center"
    }, [state.slotCustom()])]) : null])]);
  }
});
var _sfc_main$1$1 = defineComponent({
  props: _extends$4({}, $props, {
    item: Object
  }),
  setup: function setup4(props2) {
    if (props2.item) {
      props2.item.rendered = true;
    }
  },
  render: function render42() {
    var slots = "$scopedSlots" in this ? this.$scopedSlots : this.$slots;
    return h("div", {
      attrs: {
        "data-tag": "tiny-tab-panel"
      }
    }, typeof slots.default === "function" && slots.default());
  }
});
var _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: [].concat(props, ["activeName", "modelValue", "size", "withClose", "withAdd", "beforeLeave", "separator", "optimized", "beforeClose"]),
  emits: ["update:activeName", "update:modelValue", "click", "edit", "close", "add"],
  components: {
    TabBar: _sfc_main$2$1,
    TabPanel: _sfc_main$1$1
  },
  setup: function setup5(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$6,
      api: api$5
    });
  },
  render: function render5() {
    var state = this.state, slots = this.slots, optimized = this.optimized;
    var runFnuc = function runFnuc2(fn) {
      return typeof fn === "function" && fn() || "";
    };
    var hiddens = createVNode("div", {
      "data-tag": "tiny-tabs-hidden",
      "class": "hidden"
    }, [runFnuc(slots.default)]);
    var tabPanel = [];
    if (optimized) {
      var defaultSlot, vnodes;
      if (state.currentItem) {
        defaultSlot = state.currentItem.slotDefault;
      }
      vnodes = [];
      state.items.forEach(function(item) {
        if (item !== state.currentItem) {
          return;
        }
        vnodes.push(h(_sfc_main$1$1, {
          key: state.currentItem.name
        }, function() {
          return runFnuc(defaultSlot);
        }));
      });
      tabPanel.push(h(KeepAlive, {}, function() {
        return vnodes;
      }));
    } else {
      state.items.forEach(function(item) {
        if (item.lazy && item !== state.currentItem && !item.rendered) {
          return;
        }
        var itemDefSlot = item.slotDefault;
        var props2 = {
          style: {
            display: item === state.currentItem ? "block" : "none"
          },
          attrs: {
            "data-tag": "tiny-tab-panel"
          },
          class: "w-full",
          props: {
            item
          },
          key: item.name
        };
        tabPanel.push(h(_sfc_main$1$1, props2, function() {
          return runFnuc(itemDefSlot);
        }));
      });
    }
    return createVNode("div", {
      "data-tag": "tiny-tabs"
    }, [hiddens, createVNode(resolveComponent("tab-bar"), {
      "ref": "tabbar"
    }, null), tabPanel]);
  }
});
function _extends$3() {
  return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t2 = arguments[e];
      for (var r in t2)
        ({}).hasOwnProperty.call(t2, r) && (n[r] = t2[r]);
    }
    return n;
  }, _extends$3.apply(null, arguments);
}
var template$2 = function template2(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return _sfc_main$7;
  }
  if ("mobile" === (tinyMode || mode)) {
    return _sfc_main$6;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return _sfc_main$5;
  }
  return _sfc_main$7;
};
var $constants$2 = {
  TAB_ITEM: "TabItem"
};
var tabsProps = _extends$3({}, $props, {
  _constants: {
    type: Object,
    default: function _default9() {
      return $constants$2;
    }
  },
  tabStyle: String,
  activeName: String,
  withClose: Boolean,
  withAdd: Boolean,
  size: String,
  activeColor: {
    type: String,
    default: ""
  },
  modelValue: {},
  editable: Boolean,
  position: {
    type: String,
    default: "top"
  },
  beforeLeave: Function,
  stretch: Boolean,
  showMoreTabs: Boolean,
  swipeable: {
    type: Boolean,
    default: true
  },
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  dropConfig: {
    type: Object,
    default: function _default23() {
      return null;
    }
  },
  separator: Boolean,
  // tiny 新增
  showExpandTabs: Boolean,
  expandTabsTitle: String,
  expandTabsMode: String,
  tooltipConfig: [String, Object],
  optimized: {
    type: Boolean,
    default: true
  },
  beforeClose: Function,
  overflowTitle: Boolean,
  titleWidth: String,
  // tiny 新增
  moreShowAll: Boolean,
  panelMaxHeight: String,
  panelWidth: String
});
var Tabs = defineComponent({
  name: $prefix + "Tabs",
  props: tabsProps,
  setup: function setup6(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$2
    });
  }
});
var version$2 = "3.undefined";
Tabs.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
Tabs.install = function(Vue) {
  Vue.component(Tabs.name, Tabs);
};
Tabs.version = version$2;
const computedIsClosable = ({ rootTabs, props: props2 }) => () => props2.withClose || rootTabs.withClose;
const computedActive = ({ nextTick, props: props2, state }) => () => {
  const active = state.rootTabs.state.currentName === (props2.name || state.index);
  if (active) {
    state.loaded = true;
    nextTick(() => {
      state.animateShow = true;
    });
  } else {
    state.animateShow = false;
  }
  return active;
};
const computedPaneName = ({ props: props2, state }) => () => props2.name || state.index;
const watchTitle = (parent) => () => parent.$emit("tab-nav-update");
const api$1 = ["state"];
const renderless$2 = (props2, { computed, inject, reactive: reactive2, watch }, { parent, nextTick }) => {
  const rootTabs = inject("rootTabs");
  const api2 = {
    watchTitle: watchTitle(parent),
    computedIsClosable: computedIsClosable({ rootTabs, props: props2 })
  };
  const state = reactive2({
    index: null,
    loaded: false,
    animateShow: true,
    rootTabs,
    active: computed(() => api2.computedActive()),
    paneName: computed(() => api2.computedPaneName()),
    isClosable: computed(() => api2.computedIsClosable())
  });
  Object.assign(api2, {
    state,
    computedActive: computedActive({ nextTick, props: props2, state }),
    computedPaneName: computedPaneName({ props: props2, state })
  });
  watch(() => props2.title, api2.watchTitle);
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
var _export_sfc$1 = function _export_sfc22(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$1(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key2 = _step$value[0], val = _step$value[1];
    target[key2] = val;
  }
  return target;
};
var _sfc_main$4 = defineComponent({
  name: $prefix + "TabItem",
  componentName: "TabItem",
  emits: ["tab-nav-update"],
  props: {
    title: String,
    name: String,
    withClose: Boolean,
    disabled: Boolean,
    lazy: Boolean
  },
  setup: function setup$14(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$2,
      api: api$1
    });
  }
});
var _hoisted_1$2 = ["aria-hidden", "id", "aria-labelledby"];
function _sfc_render$1(_ctx, _cache, $props2, $setup2, $data, $options) {
  return !_ctx.lazy || _ctx.state.loaded || _ctx.state.active ? withDirectives((openBlock(), createElementBlock("div", {
    key: 0,
    "aria-hidden": !_ctx.state.active,
    id: "pane-" + _ctx.state.paneName,
    "aria-labelledby": "tab-" + _ctx.state.paneName,
    class: normalizeClass(["tiny-tab-pane", _ctx.state.animateShow ? "active-item" : ""]),
    role: "tabpanel"
  }, [renderSlot(_ctx.$slots, "default")], 10, _hoisted_1$2)), [[vShow, _ctx.state.active]]) : createCommentVNode("v-if", true);
}
var pc$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$1]]);
const renderless$1 = (props2, { inject, onBeforeUnmount, reactive: reactive2, toRef, markRaw }, { slots, vm }) => {
  const tabs = inject("tabs", null);
  const { lazy } = props2;
  const item = reactive2({
    title: toRef(props2, "title"),
    name: toRef(props2, "name"),
    slotDefault: slots.default,
    slotTitle: props2.renderTitle ? toRef(props2, "renderTitle") : slots.title,
    slotSetting: props2.renderSetting ? toRef(props2, "renderSetting") : slots.setting,
    lazy,
    selected: false,
    vm: markRaw(vm)
  });
  item.selected = (tabs.activeName || tabs.modelValue) === item.name;
  tabs.addItem(item);
  onBeforeUnmount(() => tabs.removeItem(item.name, true));
  return {};
};
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key2 in source) {
        if (Object.prototype.hasOwnProperty.call(source, key2)) {
          target[key2] = source[key2];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
var _sfc_main$3 = defineComponent({
  props: _extends$2({}, $props, {
    title: String,
    name: String,
    selected: Boolean,
    renderTitle: Function,
    renderSetting: Function,
    lazy: Boolean
  }),
  setup: function setup$15(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: null
    });
  },
  render: function render6() {
    return null;
  }
});
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key2 in source) {
        if (Object.prototype.hasOwnProperty.call(source, key2)) {
          target[key2] = source[key2];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var template$1 = function template22(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$1;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return _sfc_main$3;
  }
  return pc$1;
};
var $constants$1 = {};
var tabItemProps = _extends$1({}, $props, {
  _constants: {
    type: Object,
    default: function _default10() {
      return $constants$1;
    }
  },
  title: String,
  name: String,
  withClose: Boolean,
  disabled: Boolean,
  lazy: Boolean,
  selected: Boolean,
  renderTitle: Function,
  renderSetting: Function
});
var TabItem = defineComponent({
  name: $prefix + "TabItem",
  componentName: "TabItem",
  props: tabItemProps,
  setup: function setup7(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$1
    });
  }
});
var version$1 = "3.16.0";
TabItem.install = function(Vue) {
  Vue.component(TabItem.name, TabItem);
};
TabItem.version = version$1;
const api = [];
const renderless = () => {
  return api;
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
var _export_sfc = function _export_sfc23(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key2 = _step$value[0], val = _step$value[1];
    target[key2] = val;
  }
  return target;
};
var _sfc_main$2 = defineComponent({
  props: [].concat(props, ["direction", "color", "borderStyle", "contentPosition", "contentColor", "contentBackgroundColor"]),
  setup: function setup$16(props2, context) {
    return setup({
      props: props2,
      context,
      renderless,
      api
    });
  }
});
function _sfc_render(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-divider", "tiny-divider--" + _ctx.direction]),
      style: normalizeStyle({
        "border-top-style": _ctx.direction === "horizontal" ? _ctx.borderStyle : "",
        "border-left-style": _ctx.direction === "vertical" ? _ctx.borderStyle : "",
        "border-color": _ctx.color
      })
    },
    [_ctx.slots.default ? (openBlock(), createElementBlock(
      "div",
      {
        key: 0,
        class: normalizeClass(["tiny-divider__text", "is-" + _ctx.contentPosition]),
        style: normalizeStyle({
          color: _ctx.contentColor,
          "background-color": _ctx.contentBackgroundColor
        })
      },
      [renderSlot(_ctx.$slots, "default")],
      6
      /* CLASS, STYLE */
    )) : createCommentVNode("v-if", true)],
    6
    /* CLASS, STYLE */
  );
}
var pc = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const index$1 = "";
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key2 in source) {
        if (Object.prototype.hasOwnProperty.call(source, key2)) {
          target[key2] = source[key2];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var template = function template23(mode) {
  var _process$env;
  typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  return pc;
};
var $constants = {};
var Divider = defineComponent({
  name: $prefix + "Divider",
  props: _extends({}, $props, {
    _constants: {
      type: Object,
      default: function _default11() {
        return $constants;
      }
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    color: {
      type: String,
      default: ""
    },
    borderStyle: {
      type: String,
      default: "solid"
    },
    contentPosition: {
      type: String,
      default: "center"
    },
    contentColor: {
      type: String,
      default: ""
    },
    contentBackgroundColor: {
      type: String,
      default: ""
    }
  }),
  setup: function setup8(props2, context) {
    return $setup({
      props: props2,
      context,
      template
    });
  }
});
var version = "3.16.0";
Divider.install = function(Vue) {
  Vue.component(Divider.name, Divider);
};
Divider.version = version;
const _withScopeId = (n) => (pushScopeId("data-v-bb043909"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "main" };
const _hoisted_2$1 = { class: "main-title" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, null, -1));
const _hoisted_4 = { class: "main-content" };
const _hoisted_5 = { class: "main-content-method-and-url" };
const _hoisted_6 = { class: "main-content-params" };
const _hoisted_7 = { class: "main-content-params-table" };
const _hoisted_8 = { class: "main-content-params" };
const _hoisted_9 = { class: "main-content-params-table" };
const _hoisted_10 = { class: "main-content-params" };
const _hoisted_11 = { class: "main-content-params-text" };
const _hoisted_12 = { class: "main-textarea" };
const _hoisted_13 = { class: "main-content-response" };
const _hoisted_14 = { class: "main-textarea" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent$1({
  __name: "main",
  setup(__props) {
    const state = reactive({
      method: "GET",
      methodList: [
        { value: "GET", label: "GET" },
        { value: "POST", label: "POST" },
        { value: "PUT", label: "PUT" },
        { value: "DELETE", label: "DELETE" }
      ],
      url: "",
      params: [{ id: 0, key: "", value: "", checked: false }],
      headers: [{ id: 0, key: "", value: "", checked: false }],
      body: "",
      activeTab: "query",
      response: {}
    });
    const onQueryInputChange = (id) => {
      state.params.forEach((element, index2) => {
        if (element.id === id) {
          element.checked = true;
        }
      });
      if (state.params[state.params.length - 1].key !== "") {
        state.params.push({ id: state.params.length, key: "", value: "", checked: false });
      }
    };
    const onHeaderInputChange = (id) => {
      state.headers.forEach((element, index2) => {
        if (element.id === id) {
          element.checked = true;
        }
      });
      if (state.headers[state.headers.length - 1].key !== "") {
        state.headers.push({ id: state.headers.length, key: "", value: "", checked: false });
      }
    };
    const deleteQueryRow = (id) => {
      state.params.splice(id, 1);
    };
    const deleteHeaderRow = (id) => {
      state.headers.splice(id, 1);
    };
    const sendRequest = () => {
      const params = {};
      state.params.forEach((element, index2) => {
        if (element.key !== "" && element.checked === true) {
          params[element.key] = element.value;
        }
      });
      const headers = {};
      state.headers.forEach((element, index2) => {
        if (element.key !== "" && element.checked === true) {
          headers[element.key] = element.value;
        }
      });
      axios({
        url: state.url,
        method: state.method,
        headers,
        params,
        data: state.body
      }).then(function(data) {
        state.response.status = "Response Success";
        state.response.data = JSON.stringify(data);
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3,
          createBaseVNode("p", null, toDisplayString(_ctx.$t("maintenance.restapi.main.title")), 1)
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createVNode(unref(Select), {
              modelValue: state.method,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.method = $event),
              class: "url-select",
              options: state.methodList
            }, null, 8, ["modelValue", "options"]),
            createVNode(unref(Input), {
              modelValue: state.url,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.url = $event),
              class: "url-input"
            }, null, 8, ["modelValue"]),
            createVNode(unref(Button), {
              class: "url-button",
              type: "primary",
              onClick: sendRequest
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("maintenance.restapi.main.send")), 1)
              ]),
              _: 1
            })
          ]),
          createVNode(unref(Tabs), {
            modelValue: state.activeTab,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.activeTab = $event)
          }, {
            default: withCtx(() => [
              createVNode(unref(TabItem), {
                title: "Query Params",
                name: "query"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("div", _hoisted_7, [
                      createVNode(unref(Grid), {
                        data: state.params
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Column), {
                            field: "",
                            title: ""
                          }, {
                            default: withCtx((data) => [
                              createVNode(unref(Checkbox), {
                                modelValue: data.row.checked,
                                "onUpdate:modelValue": ($event) => data.row.checked = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Column), {
                            field: "Key",
                            title: "Key"
                          }, {
                            default: withCtx((data) => [
                              createVNode(unref(Input), {
                                modelValue: data.row.key,
                                "onUpdate:modelValue": ($event) => data.row.key = $event,
                                onInput: ($event) => onQueryInputChange(data.row.id)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Column), {
                            field: "Value",
                            title: "Value"
                          }, {
                            default: withCtx((data) => [
                              createVNode(unref(Input), {
                                modelValue: data.row.value,
                                "onUpdate:modelValue": ($event) => data.row.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Column), {
                            field: "",
                            title: ""
                          }, {
                            default: withCtx((data) => [
                              createVNode(unref(Button), {
                                onClick: ($event) => deleteQueryRow(data.row.id)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("maintenance.restapi.main.deleteRow")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["data"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(TabItem), {
                title: "Header Params",
                name: "header"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createVNode(unref(Grid), {
                        data: state.headers
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Column), {
                            field: "",
                            title: ""
                          }, {
                            default: withCtx((data) => [
                              createVNode(unref(Checkbox), {
                                modelValue: data.row.checked,
                                "onUpdate:modelValue": ($event) => data.row.checked = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Column), {
                            field: "Key",
                            title: "Key"
                          }, {
                            default: withCtx((data) => [
                              createVNode(unref(Input), {
                                modelValue: data.row.key,
                                "onUpdate:modelValue": ($event) => data.row.key = $event,
                                onInput: ($event) => onHeaderInputChange(data.row.id)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Column), {
                            field: "Value",
                            title: "Value"
                          }, {
                            default: withCtx((data) => [
                              createVNode(unref(Input), {
                                modelValue: data.row.value,
                                "onUpdate:modelValue": ($event) => data.row.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Column), {
                            field: "",
                            title: ""
                          }, {
                            default: withCtx((data) => [
                              createVNode(unref(Button), {
                                onClick: ($event) => deleteHeaderRow(data.row.id)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("maintenance.restapi.main.deleteRow")), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["data"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(TabItem), {
                title: "Body",
                name: "body"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", _hoisted_12, [
                        createVNode(unref(Input), {
                          type: "textarea",
                          modelValue: state.body,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => state.body = $event),
                          placeholder: "",
                          autosize: { minRows: 20, maxRows: 100 }
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(unref(Divider)),
          createBaseVNode("div", _hoisted_13, [
            createVNode(unref(Input), {
              modelValue: state.response.status,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => state.response.status = $event),
              disabled: "",
              label: "Status Code: "
            }, null, 8, ["modelValue"]),
            createBaseVNode("div", _hoisted_14, [
              createVNode(unref(Input), {
                type: "textarea",
                modelValue: state.response.data,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => state.response.data = $event),
                disabled: "",
                placeholder: "",
                autosize: { minRows: 20, maxRows: 100 }
              }, null, 8, ["modelValue"])
            ])
          ])
        ])
      ]);
    };
  }
});
const main_vue_vue_type_style_index_0_scoped_bb043909_lang = "";
const Main = /* @__PURE__ */ _export_sfc$3(_sfc_main$1, [["__scopeId", "data-v-bb043909"]]);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "contain" };
const _sfc_main = /* @__PURE__ */ defineComponent$1({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_Breadcrumb, { items: ["menu.maintenance", "menu.maintenance.restapi"] }),
          createVNode(Main)
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_cda33033_lang = "";
const index_vue_vue_type_style_index_1_scoped_cda33033_lang = "";
const index = /* @__PURE__ */ _export_sfc$3(_sfc_main, [["__scopeId", "data-v-cda33033"]]);
export {
  index as default
};
