import { d as defineComponent, k as resolveComponent, u as openBlock, v as createElementBlock, w as createBaseVNode, l as createVNode, E as toDisplayString, H as withCtx, W as unref, M as Fragment, J as createTextVNode } from "./vue.js";
import { g as axios, T as TINYModal, B as Button } from "./index.js";
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "contain" };
const _hoisted_3 = { class: "main" };
const _hoisted_4 = { class: "main-title" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_6 = { class: "test" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    function handleAdminOnly() {
      axios.post("/api/resource/v1/auth/method/adminSayHello?name=bob", {}).then((response) => {
        TINYModal.message({
          message: `${response}`,
          status: "success"
        });
      });
    }
    function handleGuestOnly() {
      axios.post("/api/resource/v1/auth/method/guestSayHello?name=bob", {}).then((response) => {
        TINYModal.message({
          message: `${response}`,
          status: "success"
        });
      });
    }
    function handleAdminOrGuest() {
      axios.post("/api/resource/v1/auth/method/guestOrAdminSayHello?name=bob", {}).then((response) => {
        TINYModal.message({
          message: `${response}`,
          status: "success"
        });
      });
    }
    function handleEveryOne() {
      axios.post("/api/resource/v1/auth/method/everyoneSayHello?name=bob", {}).then((response) => {
        TINYModal.message({
          message: `${response}`,
          status: "success"
        });
      });
    }
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      const _component_Main = resolveComponent("Main");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_Breadcrumb, { items: ["menu.examples", "menu.examples.testMethodAuth"] }),
            createVNode(_component_Main)
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            _hoisted_5,
            createBaseVNode("p", null, toDisplayString(_ctx.$t("examples.testMethodAuth.authTest")), 1)
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(unref(Button), {
              type: "primary",
              onClick: handleAdminOnly
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("test.method.auth.adminOnly")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(Button), {
              type: "primary",
              onClick: handleGuestOnly
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("test.method.auth.guestOnly")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(Button), {
              type: "primary",
              onClick: handleAdminOrGuest
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("test.method.auth.adminOrGuest")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(Button), {
              type: "primary",
              onClick: handleEveryOne
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("test.method.auth.everyone")), 1)
              ]),
              _: 1
            })
          ])
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
