import { d as defineComponent, $ as useI18n, a7 as reactive, u as openBlock, v as createElementBlock, w as createBaseVNode, l as createVNode, H as withCtx, V as unref, E as toDisplayString, J as createTextVNode, Y as pushScopeId, Z as popScopeId } from "./vue.js";
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3 } from "./home-down.js";
import { P as Pager, R as Row, C as Col, a as Column, G as Grid } from "./index28.js";
import "./index29.js";
import { L as Layout, _ as _export_sfc } from "./index.js";
import "./chevron-up.js";
import "./index27.js";
const _withScopeId = (n) => (pushScopeId("data-v-b51475b6"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "preview-main" };
const _hoisted_2 = { class: "preview-card" };
const _hoisted_3 = { class: "col" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "img" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    class: "image"
  })
], -1));
const _hoisted_5 = { class: "num" };
const _hoisted_6 = { class: "up" };
const _hoisted_7 = { class: "left" };
const _hoisted_8 = {
  id: "up",
  class: "right"
};
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1,
  class: "image"
}, null, -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "0.88%", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "down" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "left" }, "3.23"),
  /* @__PURE__ */ createBaseVNode("span", { class: "right" }, "/ s")
], -1));
const _hoisted_12 = { class: "col" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "img" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    class: "image"
  })
], -1));
const _hoisted_14 = { class: "num" };
const _hoisted_15 = { class: "up" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "left" }, "DOM Ready", -1));
const _hoisted_17 = {
  id: "down",
  class: "right"
};
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_3,
  class: "image"
}, null, -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "0.88%", -1));
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "down" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "left" }, "1.56"),
  /* @__PURE__ */ createBaseVNode("span", { class: "right" }, "/ s")
], -1));
const _hoisted_21 = { class: "preview-table" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const tableData = [
      {
        id: "1",
        space: "4G",
        pv: "1767(97.77%)",
        play: "0.44s"
      },
      {
        id: "2",
        space: "2G",
        pv: "22(1.77%)",
        play: "0.43s"
      },
      {
        id: "3",
        space: t("home.round.unknow"),
        pv: "32(1.77%)",
        play: "0.44s"
      },
      {
        id: "4",
        space: t("home.round.unknow"),
        pv: "32(1.77%)",
        play: "0.44s"
      }
    ];
    const pagerConfig = reactive({
      component: Pager,
      attrs: {
        currentPage: 1,
        pageSize: 5,
        pageSizes: [5, 10],
        total: 0,
        layout: "total, prev, pager, next, jumper, sizes"
      }
    });
    async function fetchData(params = {
      pageIndex: 1,
      pageSize: 10
    }) {
      const total = tableData.length;
      return {
        result: tableData,
        page: { total }
      };
    }
    const fetchDataOption = reactive({
      api: ({ page }) => {
        const { currentPage, pageSize } = page;
        return fetchData({
          pageIndex: currentPage,
          pageSize
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(Layout), null, {
            default: withCtx(() => [
              createVNode(unref(Row), { flex: true }, {
                default: withCtx(() => [
                  createVNode(unref(Col), { span: 6 }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_3, [
                        _hoisted_4,
                        createBaseVNode("div", _hoisted_5, [
                          createBaseVNode("div", _hoisted_6, [
                            createBaseVNode("span", _hoisted_7, toDisplayString(_ctx.$t("home.main.one")), 1),
                            createBaseVNode("span", _hoisted_8, [
                              createTextVNode(toDisplayString(_ctx.$t("home.main.day")) + " ", 1),
                              _hoisted_9,
                              _hoisted_10
                            ])
                          ]),
                          _hoisted_11
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Col), { span: 6 }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_12, [
                        _hoisted_13,
                        createBaseVNode("div", _hoisted_14, [
                          createBaseVNode("div", _hoisted_15, [
                            _hoisted_16,
                            createBaseVNode("span", _hoisted_17, [
                              createTextVNode(toDisplayString(_ctx.$t("home.main.day")) + " ", 1),
                              _hoisted_18,
                              _hoisted_19
                            ])
                          ]),
                          _hoisted_20
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Row), {
                flex: true,
                justify: "center"
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_21, [
          createVNode(unref(Grid), {
            ref: "grid",
            "fetch-data": fetchDataOption,
            pager: pagerConfig
          }, {
            default: withCtx(() => [
              createVNode(unref(Column), {
                field: "id",
                title: _ctx.$t("home.roundtable.index"),
                width: "160"
              }, null, 8, ["title"]),
              createVNode(unref(Column), {
                field: "space",
                title: _ctx.$t("home.roundtable.space"),
                width: "180"
              }, null, 8, ["title"]),
              createVNode(unref(Column), {
                field: "pv",
                title: _ctx.$t("home.roundtable.pv"),
                width: "180"
              }, null, 8, ["title"]),
              createVNode(unref(Column), {
                field: "play",
                title: _ctx.$t("home.roundtable.play"),
                width: "200"
              }, null, 8, ["title"])
            ]),
            _: 1
          }, 8, ["fetch-data", "pager"])
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_b51475b6_lang = "";
const index_vue_vue_type_style_index_1_scoped_b51475b6_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b51475b6"]]);
export {
  index as default
};
