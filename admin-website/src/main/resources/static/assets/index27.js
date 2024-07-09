import { d as defineComponent, u as openBlock, v as createElementBlock, a1 as useRouter, w as createBaseVNode } from "./vue.js";
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", null, "notfound", -1);
const _hoisted_3 = [
  _hoisted_2
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    useRouter();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3);
    };
  }
});
export {
  _sfc_main as default
};
