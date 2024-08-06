import { d as defineComponent, $ as useI18n, r as ref, k as resolveComponent, u as openBlock, v as createElementBlock, l as createVNode, w as createBaseVNode, E as toDisplayString, z as createCommentVNode, H as withCtx, V as unref, J as createTextVNode, Y as pushScopeId, Z as popScopeId } from "./vue.js";
import { T as TINYModal, B as Button, _ as _export_sfc } from "./index.js";
import { T as TimeLine } from "./index34.js";
import "./chevron-up.js";
const _imports_0 = "/ui/admin/assets/success.png";
const _withScopeId = (n) => (pushScopeId("data-v-ca919170"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "content" };
const _hoisted_3 = { class: "content-main" };
const _hoisted_4 = {
  key: 0,
  class: "result-alert"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "success"
}, null, -1));
const _hoisted_6 = { class: "result-btn" };
const _hoisted_7 = { class: "result-line" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const active = ref(4);
    function handleSubmit() {
      if (active.value < 4) {
        active.value += 1;
        TINYModal.message({
          message: t("menu.result.messageSuccess"),
          status: "success"
        });
      } else {
        active.value = 4;
        TINYModal.message({
          message: t("menu.result.messageEnd"),
          status: "success"
        });
      }
    }
    function handleFormReset() {
      if (active.value === 4) {
        active.value = 0;
      }
    }
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_Breadcrumb, { items: ["menu.result", "menu.result.success"] }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            active.value === 4 ? (openBlock(), createElementBlock("div", _hoisted_4, [
              _hoisted_5,
              createBaseVNode("div", null, [
                createBaseVNode("div", null, toDisplayString(_ctx.$t("menu.result.messageSuccess")), 1),
                createBaseVNode("div", null, toDisplayString(_ctx.$t("success.result.title")), 1)
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_6, [
              createVNode(unref(Button), {
                type: "primary",
                "native-type": "submit",
                onClick: handleSubmit
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("menu.btn.submit")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(Button), { onClick: handleFormReset }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("menu.btn.cancel")), 1)
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", null, toDisplayString(_ctx.$t("menu.line.process")), 1),
              createBaseVNode("div", null, [
                createVNode(unref(TimeLine), {
                  data: [
                    { name: unref(t)("stepForm.start.coaching") },
                    { name: unref(t)("stepForm.immediate.supervisor") },
                    { name: unref(t)("stepForm.overall.goals") },
                    { name: unref(t)("stepForm.overall.summary") },
                    { name: unref(t)("stepForm.overall.end") }
                  ],
                  active: active.value,
                  type: "normal"
                }, null, 8, ["data", "active"])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_ca919170_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca919170"]]);
export {
  index as default
};
