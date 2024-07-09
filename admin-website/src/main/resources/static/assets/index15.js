import { d as defineComponent, u as openBlock, y as createBlock, H as withCtx, W as unref, l as createVNode, w as createBaseVNode, E as toDisplayString, Z as pushScopeId, _ as popScopeId, a8 as reactive, j as onMounted, r as ref, a2 as watch, v as createElementBlock, M as Fragment, N as renderList, k as resolveComponent } from "./vue.js";
import { C as Col, R as Row, L as Loadings } from "./index31.js";
import { n as Layout, _ as _export_sfc, q as axios } from "./index.js";
import { O as Option, S as Select } from "./index34.js";
import "./chevron-up.js";
import "./index30.js";
import "./index35.js";
const _imports_0$2 = "/ui/admin/assets/woker.png";
const _imports_0$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAA0UlEQVRIS2M0jHvl+e8f4yyG//9lGIgBjIxPmJj+p51fJLYdWbl+9Kv/RGnXj3n9mGjLYCYyMj65uERUljwLiXQZuusvLhVjHJoWorsc5gv0OKKaD0cthAXxaJDiKgQYiS0hCOVDYkoZkJoBsJCcoo2BgQFX9iHkU0aSC2+oiWRbSMhFuORJjntoLYNSAJNiOckWglMM4xP6WgiykxRfkVMdoZtPdLYgVJQRW+iPWgiPgtEgpXuiITZ7US2V0t5CcmoZUNFGbJmIHkck1zLQwhsA3xTnTytjJ1oAAAAASUVORK5CYII=";
const _imports_1$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAFAUlEQVRYR82YfUyUdRzAPw/cCwLH5SGCmOfAyAmuSCfOF5opTCk1bZhhNiNfSpoTNYr5ksylmWVgknMa6lpmjRaZiMrEmk1ts2VYVC5LhBMEOY578UDv5Wl3gvHcCXeEOJ7/nj2/3/f7eb7vv5+Ax9NcI44WRZYAqYAWkVDPNb18NyNQC5QDn4QPF6o6yxM6XkRRVBiuko/Aa6JIQC+V+rVdEHAisGvgMFYLgmBzbXIDtcMcF+EpvyTd70UCFRotaS4oN1BztfixCFn3W09P5AkBFGq0wgrBFTOIVD4oN3UFKQg4RHhc0F8VCxBZ2ZO/6cO1+YK+WvwdGNWHSvwWLQhUuSxkQSTE1y6rUaRotZ5L524xYqyCxR+GExbhnYxVp29xcIOBm0YnM5apSMtS+RLd+bvZZSHRnx1fvtPCheOtzH1DTWmhiUfGKln03kDJVqcdssdcIzF1ANoEBV9sMrDum0hiEhX+qEAQEP0Gyl94g4fjFcxbq6Z0p4nKk22sOzxYokhf6+Ct5Do2fzeEyBgZb06sZ9bKMJLn+3SAW45PIL3OwaE8AzVVNkxNDlIWq0jPVXO00My3BUZUmkAJkMMhYtY7ePd0NBHaQHIn17tdp4mSkbwghJTM7ou+T6Ct6Y20mkWS5oRyttjC6CeDyMhTU7LdxLmvrUx9OUwCZDU6KSs0sPnUECJjZaxJqiduXBDqwYGcOmAi+9MIEpKVXbrPJ9CyWB0Ltgxi5IQgyncbuVhh5ZnXwzix10zsGCWz13jEkAO2za3j0fFKho5SULqjheV7oogeKWdvViOJKUHMXiX9CUkf6zaGRFgSU0tm/mC38ttWkcPvG/jnlza0CUrm5AxkgNo7y6orb1G2owWr2cmk+SompN9x077sG8RPVDA3R/0/LeQB5CnF1iZid7dD6SNTCsjvkVR9DvTD52Yun2/1AkqcHsITM7yzqs+BLp9vo6nGfheosdqGXmdjckYYcUlBXqB9DtRZoyu7SrY1u2MrecG9K/MDBaooMtLwt415G8ORK+/OfBIrHVzbRMIkZbetpPu09xHUHdpcbjuS30xXsdOxzmkXiY4RELqZRe8LUEdwP5cbjjpSWrmdDjhXbOaPM63odXai4+QkzQxmysKQ9llVGmq9BnIpPLShCUWQwLy3w6VtxA77sxtpqrW7W0ZUrJxrl2xUHDATN07JiqJBXtbqNVBzvYPD2/QMi1eSslRa8Cr2mfj5qIWNZVHoLtk4U3yTZR9puFHjYNPM6zybrSblFWlv6zVQ/V82fiq1MHy0ksdSgyUWKnjxOtOXhjJ1USg/llj5/qCF3K/uTAdHdpi4eMp7Wug1UFc9wGGHvGk6cg5FMHKC0g1U8oGRaYtCmZapovJkK/tzmtn521CJCJ/NdWViHckZKia90KOpz62kIKOetOVhTHkphIYrdo7tMhMoh+fXP8TJIgsXyq2sPxLZM6ATe8wUb2lBM0RGgOze9cXTSq46lJkfwdliM5XlVjaWRRKq+S/XDXUO8tIaeDpLxfRXpT/q00IuZVd/tVFTdRvR2WWTlnxwNdfxs4Pd67emN9By3UHqUpU7y3R/2ijfa0YbL2fVZxEESKtE+8To55DvH450lf02HNtt4sKJVhqv2IkaISNpVrB78vSEad9p6pfHoP51UOx3R2mX7/rVZYMLqN9dx3SC6h8XVp2Ttc+v9AQsQE1XV3r/Ahkdh5YlQ8AtAAAAAElFTkSuQmCC";
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAADsklEQVRYR9WYW2gUVxjH/9+Z2XF3za4mkkSzRhERognaYmlUBNHFG4jggxe0ikgRihaT9KG0IFoKLT6YRNpSEBHxhpcHodRLK6svQrRU1JLogpRis1t3U4xxN252Z2fOkRnJJGuy2VlcdTxvZ+Z83/md73LOdw7hlSYeP6mHrn8KwVeAaBqEKHt1zGv1ifohxL8g9jsk6QhNmdQ1XB8NdoQQCiI9rSB8BiHYa01qV5iIQ+BnTK1qISLVEDOBTJho/DIEltnVVdJxhGsIVK82oF4Cdcd/BMSukk5StDL6iWqrd9PLmNH+emtuygdquE+S55KI9LRB8KaiF/QmBIi1k+iOGVE+pxj9IhFD9v5VaOHr4L2PwBNxU5z5q8EqpkOuWwrXnOUg/+Ri1Bpj75OIxJN2U1skepAOtSH753kIwSFVzYI0pQ7krzYnFok49Mdh6D0PQcTg+mg93MFmkL/KHhhRv2EhYWe09iCE1LkmQM9CWbgNysdbwCZNH1WUP3kE9Y9TUDuOA5IL3g3tkGcH7UwDW0BqxzGkf/0WUmAevJt/AE0M2FIu+qJInf4cevQe3Gv2Qlm4vaBcQSDTMid3Qq5fBe+GNkBWCirNGaCpSJ1rhtZ1Bd5PDhe01JhARswk24KQKmdh/M4zuTCcQ4tFwZ/2QqQHTAZye8DKKyBPDgBs2GavqXh+eBP0/x/C1xwaM6bGBBq48BWydy7A1xLKcRNPPoP2z9/gmfSo1mLj3JBnzATzTbD+G+5Ltgbh+nAdPOu+z2vlvEBGaicPLIayeAfcq7+2FBgw2XAXCmWCcQS46upzoNKXv4N64yh8X97IuyXkBVJvnsDAL/vg++L6UDZxDrXzbq5lPB6QxwPR2zti1YallIYPLPcZ2Zc8uBSetd9AWbB1VCvlBUod2wHeF0VZ02+WoPZfN7Rod44i16JFYJWVyFy8CGjaiEnkQC3kmlrre3/7SrCJAXi3Hy0OqL81CCnQAM/GQ5ag2nUPPPU8R5GyZAlYRQXSly4BmcxIK3nHQ6mfZ30fOLsHerQTZS2h4oAS+xugNG7OiZ/M7ZsQnBcFRIxh3PwFlowZR7dOw7+/8z0HKtZleiQCkclAC4cB1Sz+zMZK5TLbQd3YCKmmZijOOjrAYzGrX7Kgtp32kgRWXm4CCE2D6Osbsk4p095xG6OxTEcdHaYLnHa4GlCOKj8Go9NRBdog1NsrYR1Y5DvtGuS0i6LTrtLmfuOkxwYTyGnPMRaUUx6shpdu7/pJ7wUKGa1nPNRZtgAAAABJRU5ErkJggg==";
const _withScopeId$5 = (n) => (pushScopeId("data-v-dec666ba"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "col" };
const _hoisted_2$5 = { class: "title" };
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_0$1 }, null, -1));
const _hoisted_4$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", { class: "plan-pass" }, "1890", -1));
const _hoisted_5$5 = { class: "num" };
const _hoisted_6$5 = { class: "col" };
const _hoisted_7$5 = { class: "title" };
const _hoisted_8$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_1$1 }, null, -1));
const _hoisted_9$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", { class: "plan-pass" }, "23", -1));
const _hoisted_10$4 = { class: "num" };
const _hoisted_11$4 = { class: "col" };
const _hoisted_12$3 = { class: "title" };
const _hoisted_13$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_2 }, null, -1));
const _hoisted_14$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", { class: "plan-fail" }, "113", -1));
const _hoisted_15$2 = { class: "num" };
const _hoisted_16 = { class: "col" };
const _hoisted_17 = { class: "title" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_3 }, null, -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", { class: "plan-pass" }, "56", -1));
const _hoisted_20 = { class: "num" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "learn-plan",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Layout), null, {
        default: withCtx(() => [
          createVNode(unref(Row), {
            flex: true,
            justify: "center"
          }, {
            default: withCtx(() => [
              createVNode(unref(Col), null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$5, [
                    createBaseVNode("div", _hoisted_2$5, [
                      _hoisted_3$5,
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.plans")), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _hoisted_4$5,
                      createBaseVNode("span", _hoisted_5$5, " / " + toDisplayString(_ctx.$t("work.index.Numbers")), 1)
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Col), null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_6$5, [
                    createBaseVNode("div", _hoisted_7$5, [
                      _hoisted_8$5,
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.Unfinished")), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _hoisted_9$5,
                      createBaseVNode("span", _hoisted_10$4, " / " + toDisplayString(_ctx.$t("work.index.Numbers")), 1)
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Col), null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_11$4, [
                    createBaseVNode("div", _hoisted_12$3, [
                      _hoisted_13$2,
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.beOverdue")), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _hoisted_14$2,
                      createBaseVNode("span", _hoisted_15$2, " / " + toDisplayString(_ctx.$t("work.index.Numbers")), 1)
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Col), null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("div", _hoisted_17, [
                      _hoisted_18,
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.Overdue")), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _hoisted_19,
                      createBaseVNode("span", _hoisted_20, " / " + toDisplayString(_ctx.$t("work.index.Numbers")), 1)
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const learnPlan_vue_vue_type_style_index_0_scoped_dec666ba_lang = "";
const learnplan = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-dec666ba"]]);
const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "/ui/admin/assets/coach-2.png";
function getUserData() {
  return axios.get("/api/user/getdata");
}
function getUserPractic() {
  return axios.get("/api/user/getrpractic");
}
function getUserTrain() {
  return axios.get("/api/user/getrtrain");
}
function getUserChange(data) {
  return axios.post("/api/user/getselect", data);
}
const _withScopeId$4 = (n) => (pushScopeId("data-v-5b4740cd"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "coach-select" };
const _hoisted_2$4 = { class: "col" };
const _hoisted_3$4 = { class: "left" };
const _hoisted_4$4 = { class: "left-content" };
const _hoisted_5$4 = { class: "num" };
const _hoisted_6$4 = { class: "left-title" };
const _hoisted_7$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1));
const _hoisted_8$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "right" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 })
], -1));
const _hoisted_9$4 = { class: "col" };
const _hoisted_10$3 = { class: "left" };
const _hoisted_11$3 = { class: "left-content" };
const _hoisted_12$2 = { class: "num" };
const _hoisted_13$1 = { class: "left-title" };
const _hoisted_14$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1));
const _hoisted_15$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "right" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_1 })
], -1));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "learn-coach",
  setup(__props) {
    const state = reactive({
      loading: null,
      options: [],
      project: ""
    });
    const fetchData = async () => {
      state.loading = Loadings.service({
        text: "loading...",
        target: document.getElementById("container"),
        background: "rgba(0, 0, 0, 0.7)"
      });
      try {
        const { data } = await getUserData();
        state.options = data.options;
      } finally {
        state.loading.close();
      }
    };
    onMounted(() => {
      fetchData();
    });
    let number = ref([]);
    const fetchSelect = async (param) => {
      const { data } = await getUserChange(param);
      number.value = data;
    };
    watch(
      state,
      (newValue, oldValue) => {
        fetchSelect(newValue.project);
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("h3", null, toDisplayString(_ctx.$t("work.index.coach")), 1),
          createVNode(unref(Select), {
            modelValue: state.project,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.project = $event),
            placeholder: _ctx.$t("baseForm.form.label.placeholder"),
            filterable: ""
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(state.options, (item) => {
                return openBlock(), createBlock(unref(Option), {
                  key: item.value,
                  label: _ctx.$t(item.label),
                  value: item.value
                }, null, 8, ["label", "value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder"])
        ]),
        createBaseVNode("div", null, [
          createVNode(unref(Layout), null, {
            default: withCtx(() => [
              createVNode(unref(Row), {
                flex: true,
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), { span: 8 }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_2$4, [
                        createBaseVNode("div", _hoisted_3$4, [
                          createBaseVNode("div", _hoisted_4$4, [
                            createBaseVNode("span", _hoisted_5$4, toDisplayString(unref(number)[0]), 1),
                            createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                          ]),
                          createBaseVNode("div", _hoisted_6$4, toDisplayString(_ctx.$t("work.index.trainees")), 1)
                        ]),
                        _hoisted_7$4,
                        _hoisted_8$4
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Col), { span: 8 }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_9$4, [
                        createBaseVNode("div", _hoisted_10$3, [
                          createBaseVNode("div", _hoisted_11$3, [
                            createBaseVNode("span", _hoisted_12$2, toDisplayString(unref(number)[1]), 1),
                            createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                          ]),
                          createBaseVNode("div", _hoisted_13$1, toDisplayString(_ctx.$t("work.index.coachNum")), 1)
                        ]),
                        _hoisted_14$1,
                        _hoisted_15$1
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
const learnCoach_vue_vue_type_style_index_0_scoped_5b4740cd_lang = "";
const learncoach = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5b4740cd"]]);
const _withScopeId$3 = (n) => (pushScopeId("data-v-1dcb662d"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "col" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", { class: "font-pass" }, "6", -1));
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1));
const _hoisted_4$3 = { class: "col" };
const _hoisted_5$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", { class: "font-pass" }, "186", -1));
const _hoisted_6$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1));
const _hoisted_7$3 = { class: "col" };
const _hoisted_8$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", { class: "font-pass" }, "324", -1));
const _hoisted_9$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1));
const _hoisted_10$2 = { class: "col" };
const _hoisted_11$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", { class: "font-pass" }, "736", -1));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "learn-probation",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Layout), null, {
        default: withCtx(() => [
          createVNode(unref(Row), {
            flex: true,
            justify: "center",
            class: "margin-bottom"
          }, {
            default: withCtx(() => [
              createVNode(unref(Col), { span: 3 }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$3, [
                    createBaseVNode("div", null, [
                      _hoisted_2$3,
                      createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                    ]),
                    createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.unpark")), 1)
                  ])
                ]),
                _: 1
              }),
              _hoisted_3$3,
              createVNode(unref(Col), { span: 3 }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4$3, [
                    createBaseVNode("div", null, [
                      _hoisted_5$3,
                      createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                    ]),
                    createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.entered")), 1)
                  ])
                ]),
                _: 1
              }),
              _hoisted_6$3,
              createVNode(unref(Col), { span: 3 }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_7$3, [
                    createBaseVNode("div", null, [
                      _hoisted_8$3,
                      createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                    ]),
                    createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.approved")), 1)
                  ])
                ]),
                _: 1
              }),
              _hoisted_9$3,
              createVNode(unref(Col), { span: 3 }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_10$2, [
                    createBaseVNode("div", null, [
                      _hoisted_11$2,
                      createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                    ]),
                    createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.put")), 1)
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const learnProbation_vue_vue_type_style_index_0_scoped_1dcb662d_lang = "";
const learnprobation = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1dcb662d"]]);
const _withScopeId$2 = (n) => (pushScopeId("data-v-999aa533"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "practiced-select" };
const _hoisted_2$2 = { class: "col" };
const _hoisted_3$2 = { class: "font-pass" };
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1));
const _hoisted_5$2 = { class: "col" };
const _hoisted_6$2 = { class: "font-pass" };
const _hoisted_7$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1));
const _hoisted_8$2 = { class: "col" };
const _hoisted_9$2 = { class: "font-pass" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "learn-practiced",
  setup(__props) {
    const state = reactive({
      loading: null,
      options: [],
      project: ""
    });
    const fetchData = async () => {
      state.loading = Loadings.service({
        text: "loading...",
        target: document.getElementById("container"),
        background: "rgba(0, 0, 0, 0.7)"
      });
      try {
        const { data } = await getUserPractic();
        state.options = data.options;
      } finally {
        state.loading.close();
      }
    };
    onMounted(() => {
      fetchData();
    });
    let number = ref([]);
    const fetchSelect = async (param) => {
      const { data } = await getUserChange(param);
      number.value = data;
    };
    watch(
      state,
      (newValue, oldValue) => {
        fetchSelect(newValue.project);
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("h3", null, toDisplayString(_ctx.$t("work.index.practiced")), 1),
          createVNode(unref(Select), {
            modelValue: state.project,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.project = $event),
            placeholder: _ctx.$t("baseForm.form.label.placeholder"),
            filterable: ""
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(state.options, (item) => {
                return openBlock(), createBlock(unref(Option), {
                  key: item.value,
                  label: _ctx.$t(item.label),
                  value: item.value
                }, null, 8, ["label", "value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder"])
        ]),
        createVNode(unref(Layout), null, {
          default: withCtx(() => [
            createVNode(unref(Row), {
              flex: true,
              justify: "center",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 3 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2$2, [
                      createBaseVNode("div", null, [
                        createBaseVNode("span", _hoisted_3$2, toDisplayString(unref(number)[0]), 1),
                        createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.allocated")), 1)
                    ])
                  ]),
                  _: 1
                }),
                _hoisted_4$2,
                createVNode(unref(Col), { span: 3 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_5$2, [
                      createBaseVNode("div", null, [
                        createBaseVNode("span", _hoisted_6$2, toDisplayString(unref(number)[1]), 1),
                        createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.start")), 1)
                    ])
                  ]),
                  _: 1
                }),
                _hoisted_7$2,
                createVNode(unref(Col), { span: 3 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_8$2, [
                      createBaseVNode("div", null, [
                        createBaseVNode("span", _hoisted_9$2, toDisplayString(unref(number)[2]), 1),
                        createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.practice")), 1)
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
      ]);
    };
  }
});
const learnPracticed_vue_vue_type_style_index_0_scoped_999aa533_lang = "";
const learnpracticed = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-999aa533"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-cff1f1d5"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "train-select" };
const _hoisted_2$1 = { class: "col" };
const _hoisted_3$1 = { class: "font-pass" };
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1));
const _hoisted_5$1 = { class: "col" };
const _hoisted_6$1 = { class: "font-pass" };
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1));
const _hoisted_8$1 = { class: "col" };
const _hoisted_9$1 = { class: "font-pass" };
const _hoisted_10$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "divider" }, null, -1));
const _hoisted_11$1 = { class: "col" };
const _hoisted_12$1 = { class: "font-pass" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "learn-traini",
  setup(__props) {
    const state = reactive({
      loading: null,
      options: [],
      project: ""
    });
    const fetchData = async () => {
      state.loading = Loadings.service({
        text: "loading...",
        target: document.getElementById("container"),
        background: "rgba(0, 0, 0, 0.7)"
      });
      try {
        const { data } = await getUserTrain();
        state.options = data.options;
      } finally {
        state.loading.close();
      }
    };
    onMounted(() => {
      fetchData();
    });
    let number = ref([]);
    const fetchSelect = async (param) => {
      const { data } = await getUserChange(param);
      number.value = data;
    };
    watch(
      state,
      (newValue, oldValue) => {
        fetchSelect(newValue.project);
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("h3", null, toDisplayString(_ctx.$t("work.index.train")), 1),
          createVNode(unref(Select), {
            modelValue: state.project,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.project = $event),
            placeholder: _ctx.$t("baseForm.form.label.placeholder"),
            filterable: ""
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(state.options, (item) => {
                return openBlock(), createBlock(unref(Option), {
                  key: item.value,
                  label: _ctx.$t(item.label),
                  value: item.value
                }, null, 8, ["label", "value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder"])
        ]),
        createVNode(unref(Layout), null, {
          default: withCtx(() => [
            createVNode(unref(Row), {
              flex: true,
              justify: "center",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 3 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2$1, [
                      createBaseVNode("div", null, [
                        createBaseVNode("span", _hoisted_3$1, toDisplayString(unref(number)[0]), 1),
                        createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.assign")), 1)
                    ])
                  ]),
                  _: 1
                }),
                _hoisted_4$1,
                createVNode(unref(Col), { span: 3 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_5$1, [
                      createBaseVNode("div", null, [
                        createBaseVNode("span", _hoisted_6$1, toDisplayString(unref(number)[1]), 1),
                        createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.prepare")), 1)
                    ])
                  ]),
                  _: 1
                }),
                _hoisted_7$1,
                createVNode(unref(Col), { span: 3 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_8$1, [
                      createBaseVNode("div", null, [
                        createBaseVNode("span", _hoisted_9$1, toDisplayString(unref(number)[2]), 1),
                        createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.open")), 1)
                    ])
                  ]),
                  _: 1
                }),
                _hoisted_10$1,
                createVNode(unref(Col), { span: 3 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_11$1, [
                      createBaseVNode("div", null, [
                        createBaseVNode("span", _hoisted_12$1, toDisplayString(unref(number)[3]), 1),
                        createBaseVNode("span", null, " / " + toDisplayString(_ctx.$t("work.index.Person")), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("work.index.classes")), 1)
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
      ]);
    };
  }
});
const learnTraini_vue_vue_type_style_index_0_scoped_cff1f1d5_lang = "";
const learntrain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cff1f1d5"]]);
const _withScopeId = (n) => (pushScopeId("data-v-9c8c59f2"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container-work" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "work-image" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0$2,
    alt: "403",
    class: "user-image"
  })
], -1));
const _hoisted_3 = { class: "content" };
const _hoisted_4 = { class: "left" };
const _hoisted_5 = { class: "card" };
const _hoisted_6 = { class: "card" };
const _hoisted_7 = { class: "card" };
const _hoisted_8 = { class: "card" };
const _hoisted_9 = { class: "card" };
const _hoisted_10 = { class: "right" };
const _hoisted_11 = { class: "card more" };
const _hoisted_12 = { href: "javascript:;" };
const _hoisted_13 = { class: "card more" };
const _hoisted_14 = { href: "javascript:;" };
const _hoisted_15 = { class: "card less" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const Inquiry = [
      { label: "work.index.policy", value: "work.index.Period" },
      { label: "work.index.Hotline", value: "work.index.service" },
      { label: "work.index.Attendance", value: "work.index.FAQs" },
      { label: "work.index.Payroll", value: "work.index.Tax" },
      { label: "work.index.net", value: "work.index.netonline" }
    ];
    const Home = [
      { label: "work.index.Brave", value: "work.index.Growth" },
      { label: "work.index.Termbase", value: "work.index.lingo" },
      { label: "work.index.Library", value: "work.index.domain" },
      { label: "work.index.learning", value: "work.index.platform" },
      { label: "work.index.net", value: "work.index.netonline" }
    ];
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_Breadcrumb, { items: ["menu.board", "menu.work"] }),
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("h3", null, toDisplayString(_ctx.$t("work.index.learn")), 1),
              createBaseVNode("div", null, [
                createVNode(learnplan)
              ])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", null, [
                createVNode(learncoach)
              ])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("h3", null, toDisplayString(_ctx.$t("work.index.formalization")), 1),
              createBaseVNode("div", null, [
                createVNode(learnprobation)
              ])
            ]),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", null, [
                createVNode(learnpracticed)
              ])
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", null, [
                createVNode(learntrain)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("h3", null, toDisplayString(_ctx.$t("work.index.Inquiry")), 1),
            createBaseVNode("div", _hoisted_11, [
              (openBlock(), createElementBlock(Fragment, null, renderList(Inquiry, (item) => {
                return createBaseVNode("dl", {
                  key: item
                }, [
                  createBaseVNode("dt", null, toDisplayString(_ctx.$t(item.label)), 1),
                  createBaseVNode("dd", null, [
                    createBaseVNode("a", _hoisted_12, toDisplayString(_ctx.$t(item.value)), 1)
                  ])
                ]);
              }), 64))
            ]),
            createBaseVNode("h3", null, toDisplayString(_ctx.$t("work.index.Home")), 1),
            createBaseVNode("div", _hoisted_13, [
              (openBlock(), createElementBlock(Fragment, null, renderList(Home, (item) => {
                return createBaseVNode("dl", {
                  key: item
                }, [
                  createBaseVNode("dt", null, toDisplayString(_ctx.$t(item.label)), 1),
                  createBaseVNode("dd", null, [
                    createBaseVNode("a", _hoisted_14, toDisplayString(_ctx.$t(item.value)), 1)
                  ])
                ]);
              }), 64))
            ]),
            createBaseVNode("h3", null, toDisplayString(_ctx.$t("work.index.Guide")), 1),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("dl", null, [
                createBaseVNode("dt", null, toDisplayString(_ctx.$t("work.index.Operation")), 1)
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_9c8c59f2_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c8c59f2"]]);
export {
  index as default
};
