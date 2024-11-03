import { d as defineComponent, a0 as useI18n, a8 as reactive, u as openBlock, v as createElementBlock, w as createBaseVNode, l as createVNode, H as withCtx, W as unref, E as toDisplayString, J as createTextVNode, Z as pushScopeId, _ as popScopeId } from "./vue.js";
import { R as Row, C as Col } from "./index14.js";
import { P as Pager, C as Column, G as Grid } from "./index15.js";
import { L as Layout, _ as _export_sfc } from "./index.js";
import "./index13.js";
const _imports_0 = "/ui/admin/assets/home-main1.png";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABP0lEQVQoU32Rv0vDQBzF38spTRBBcGtNcbKLOjgJCqJTJ3XwH9DNooJuOjm5qUhsRx07Ce3qqEMnEcRJHIpRwR+DIG0abPKV1CbEVrzl7t7d5/u+944iIAlBezSOUyNCVaJ4i/ra012ohzPjQM0yk5pCBWAaQNX3ZKpv3X6OQww3cjg80Eh4lwBHIw1yY7hqhpvVj8ghWNgHQ8ZgQjsnMd3ZAkQu3l3JmluPTnDWcqjnzRLJha7LbYHAmZ57WIqARiGZodajIDLuC4sxcEfTUJam1wwDiN7QciqkJglVifr1vUxnUr+AmmXOa4rlH0BujZw91hVrXHAK6W0Ae21gxcjZp/8C9Xz6isREkIz+Zs9yF34caP1ZKDiWuQzFEwLXX3Sz/asvr53VI+DTSs31KrXvi180PP2IG/fuXxEHwDfMeXQKr4imkAAAAABJRU5ErkJggg==";
const _imports_2 = "/ui/admin/assets/home-main2.png";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABOUlEQVQoU33RPS9DURgH8P9z7hWRGMylL5MOwmAit1rdGomLRux8CyaTyeQDMDaRCKeNGCzNzaUTEjGJoVokTDaanHseOVfKdaM908l5/r/z8hxiBhVq6SKAXSZUhq2BvbOFhw56DDKACJyrJdcFi30AN0p9li7Lr2//GYou5qvpKwDTAHvedauIbeg4+gPmZGaTiHdMSJPe8BfbB31BXiZdkJDfIb7z3NZkX+BUMzMWuNENaaWyfvn5PorCKzkykRVsW7B5irSodAPMvAWGZB2oLgxBvpaSYHJ7tRLAkec+rpp6CGYPx4bsQXFORE4cMbOnOrrUWHv6+AFmMn+cGQks7RNoIoJuRUCF+krzPWyD+bPojo5MJgSJBgEpAM2AtXOx1H75fVMMmELudHRcBPaJVmo53iFzwhc8eHkK6yuMVQAAAABJRU5ErkJggg==";
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
