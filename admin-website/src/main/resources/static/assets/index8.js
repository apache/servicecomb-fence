import { k as resolveComponent, u as openBlock, v as createElementBlock, l as createVNode, w as createBaseVNode, E as toDisplayString, Z as pushScopeId, _ as popScopeId } from "./vue.js";
import { _ as _export_sfc } from "./index.js";
const _imports_0 = "/ui/admin/assets/4042.png";
const index_vue_vue_type_style_index_0_scoped_9c767429_lang = "";
const _sfc_main = {};
const _withScopeId = (n) => (pushScopeId("data-v-9c767429"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "content" };
const _hoisted_3 = { class: "content-main" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "404",
  class: "image"
}, null, -1));
const _hoisted_5 = { class: "tip" };
function _sfc_render(_ctx, _cache) {
  const _component_Breadcrumb = resolveComponent("Breadcrumb");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Breadcrumb, { items: ["menu.exception", "menu.exception.404"] }),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        _hoisted_4,
        createBaseVNode("h3", _hoisted_5, toDisplayString(_ctx.$t("exception.result.404.description")), 1),
        createBaseVNode("span", null, toDisplayString(_ctx.$t("exception.result.permissions.404")), 1)
      ])
    ])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9c767429"]]);
export {
  index as default
};
