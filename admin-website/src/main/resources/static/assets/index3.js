import { d as defineComponent, r as ref, j as onMounted, k as resolveComponent, u as openBlock, v as createElementBlock, l as createVNode, w as createBaseVNode, E as toDisplayString } from "./vue.js";
import { H as HwcClientService } from "./hwcClient.service.js";
import { _ as _export_sfc } from "./index.js";
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "content" };
const _hoisted_3 = {
  x: "40",
  y: "150"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const text = ref();
    const helloWorldApigInfo = {
      apigName: "apig_hello_world",
      apigGroupName: "group_hello_world"
    };
    async function getData() {
      const result = await HwcClientService.apiRequest(
        "",
        {},
        helloWorldApigInfo
      );
      text.value = result == null ? void 0 : result.data;
    }
    onMounted(getData);
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_Breadcrumb, { items: ["menu.cloud", "menu.cloud.hello"] }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("text", _hoisted_3, toDisplayString(text.value), 1)
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_7e3c5c0f_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e3c5c0f"]]);
export {
  index as default
};
