import { d as defineComponent, u as openBlock, v as createElementBlock, l as createVNode, H as withCtx, W as unref, w as createBaseVNode, J as createTextVNode, E as toDisplayString, Z as pushScopeId, _ as popScopeId, a8 as reactive, j as onMounted, k as resolveComponent, M as Fragment, N as renderList, y as createBlock } from "./vue.js";
import { R as Row, C as Col, a as Column, G as Grid, L as Loadings } from "./index31.js";
import { C as CollapseItem, a as Collapse } from "./index37.js";
import { S as Select, O as Option } from "./index34.js";
import { q as axios, n as Layout, _ as _export_sfc } from "./index.js";
import "./index32.js";
import "./chevron-up.js";
import "./index30.js";
import "./index35.js";
function getDetailData() {
  return axios.get("/api/detail/getdata");
}
const _withScopeId$5 = (n) => (pushScopeId("data-v-12d7f218"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "col" };
const _hoisted_2$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _hoisted_3$4 = { class: "col" };
const _hoisted_4$4 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _hoisted_5$3 = { class: "col" };
const _hoisted_6$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _hoisted_7$1 = { class: "col" };
const _hoisted_8$1 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "plan-detail",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(Layout), null, {
          default: withCtx(() => [
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 2 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$5, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.department")) + " ", 1),
                      _hoisted_2$5,
                      createTextVNode(" " + toDisplayString(_ctx.$t("menu.plan.resource")), 1)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(Col), { span: 2 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3$4, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.job")) + " ", 1),
                      _hoisted_4$4,
                      createTextVNode(" All ")
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 2 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_5$3, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.person")) + " ", 1),
                      _hoisted_6$2,
                      createTextVNode(" All ")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(Col), { span: 2 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_7$1, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.attribute")) + " ", 1),
                      _hoisted_8$1,
                      createTextVNode("IT ")
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
const planDetail_vue_vue_type_style_index_0_scoped_12d7f218_lang = "";
const planDetail = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-12d7f218"]]);
const _withScopeId$4 = (n) => (pushScopeId("data-v-e6b9a58f"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "col" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _hoisted_3$3 = { class: "col" };
const _hoisted_4$3 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _hoisted_5$2 = { class: "col" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "target-detail",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(Layout), null, {
          default: withCtx(() => [
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 9 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$4, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.develop")) + " ", 1),
                      _hoisted_2$4,
                      createTextVNode(" " + toDisplayString(_ctx.$t("menu.plan.yes")), 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 9 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3$3, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.role")) + " ", 1),
                      _hoisted_4$3,
                      createTextVNode(" " + toDisplayString(_ctx.$t("menu.plan.mentor")), 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 9 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_5$2, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.condition")) + " ", 1),
                      _hoisted_6$1,
                      createTextVNode(" " + toDisplayString(_ctx.$t("menu.plan.approval")), 1)
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
const targetDetail_vue_vue_type_style_index_0_scoped_e6b9a58f_lang = "";
const targetDetail = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e6b9a58f"]]);
const _withScopeId$3 = (n) => (pushScopeId("data-v-ba8fc2e0"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "col" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _hoisted_3$2 = { class: "col" };
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _hoisted_5$1 = { class: "col" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _hoisted_7 = { class: "col" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _hoisted_9 = { class: "col" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "evaluation-detail",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(Layout), null, {
          default: withCtx(() => [
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 9 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$3, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.develop")) + " ", 1),
                      _hoisted_2$3,
                      createTextVNode(" " + toDisplayString(_ctx.$t("menu.plan.yes")), 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 9 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3$2, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.frequency")) + " ", 1),
                      _hoisted_4$2,
                      createTextVNode(" " + toDisplayString(_ctx.$t("menu.plan.month")), 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 9 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_5$1, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.goal")) + " ", 1),
                      _hoisted_6,
                      createTextVNode(" " + toDisplayString(_ctx.$t("menu.plan.trainees")), 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 9 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_7, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.condition")) + " ", 1),
                      _hoisted_8,
                      createTextVNode(" " + toDisplayString(_ctx.$t("menu.plan.teacher")), 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 9 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_9, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.phase")) + " ", 1),
                      _hoisted_10,
                      createTextVNode(" " + toDisplayString(_ctx.$t("menu.plan.evaluation")), 1)
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
const evaluationDetail_vue_vue_type_style_index_0_scoped_ba8fc2e0_lang = "";
const evaluationDetail = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ba8fc2e0"]]);
const _withScopeId$2 = (n) => (pushScopeId("data-v-80e0925e"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "col" };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _hoisted_3$1 = { class: "col" };
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "whole-detail",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(Layout), null, {
          default: withCtx(() => [
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 9 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$2, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.develop")) + " ", 1),
                      _hoisted_2$2,
                      createTextVNode(" " + toDisplayString(_ctx.$t("menu.plan.yes")), 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 9 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3$1, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.whole")) + " ", 1),
                      _hoisted_4$1,
                      createTextVNode(" " + toDisplayString(_ctx.$t("menu.plan.evaluation")), 1)
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
const wholeDetail_vue_vue_type_style_index_0_scoped_80e0925e_lang = "";
const wholeDetail = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-80e0925e"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-fdf1e4e9"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "col" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "mentor-detail",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(Layout), null, {
          default: withCtx(() => [
            createVNode(unref(Row), {
              flex: true,
              justify: "left",
              class: "margin-bottom"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 9 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$1, [
                      createTextVNode(toDisplayString(_ctx.$t("menu.plan.pool")) + " ", 1),
                      _hoisted_2$1,
                      createTextVNode(" " + toDisplayString(_ctx.$t("menu.plan.no")), 1)
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
const mentorDetail_vue_vue_type_style_index_0_scoped_fdf1e4e9_lang = "";
const mentor = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fdf1e4e9"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "record-detail",
  props: {
    // eslint-disable-next-line vue/require-prop-types
    tableData: []
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(Grid), {
          data: __props.tableData,
          "auto-resize": ""
        }, {
          default: withCtx(() => [
            createVNode(unref(Column), { type: "index" }),
            createVNode(unref(Column), {
              field: "version",
              title: _ctx.$t("menu.plan.version")
            }, null, 8, ["title"]),
            createVNode(unref(Column), {
              field: "operation",
              title: _ctx.$t("menu.plan.operation")
            }, null, 8, ["title"]),
            createVNode(unref(Column), {
              field: "updated",
              title: _ctx.$t("menu.plan.updated")
            }, null, 8, ["title"]),
            createVNode(unref(Column), {
              field: "time",
              title: _ctx.$t("menu.plan.time"),
              "show-overflow": ""
            }, null, 8, ["title"])
          ]),
          _: 1
        }, 8, ["data"])
      ]);
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-f7bfd6d4"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "detail-page" };
const _hoisted_2 = { id: "container" };
const _hoisted_3 = { class: "detail-contain" };
const _hoisted_4 = { class: "col" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, ":", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const state = reactive({
      loading: null,
      filterOptions: {},
      activeNames: ["1", "2", "3", "4", "5", "6", "7"],
      Project: [],
      tableData: [],
      project: ""
    });
    const fetchData = async () => {
      state.loading = Loadings.service({
        text: "loading...",
        target: document.getElementById("container"),
        background: "rgba(0, 0, 0, 0.7)"
      });
      try {
        const { data } = await getDetailData();
        state.Project = data.Project;
        state.tableData = data.tableData;
      } finally {
        state.loading.close();
      }
    };
    onMounted(() => {
      fetchData();
    });
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_Breadcrumb, { items: ["menu.profile", "menu.profile.detail"] }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(unref(Collapse), {
              modelValue: state.activeNames,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.activeNames = $event)
            }, {
              default: withCtx(() => [
                createVNode(unref(CollapseItem), {
                  title: _ctx.$t("baseForm.form.label.type"),
                  name: "1"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Row), {
                      flex: true,
                      justify: "left",
                      class: "margin-bottom"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Col), { span: 9 }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_4, [
                              createTextVNode(toDisplayString(_ctx.$t("baseForm.form.label.type")) + " ", 1),
                              _hoisted_5,
                              createVNode(unref(Select), {
                                modelValue: state.project,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.project = $event),
                                placeholder: _ctx.$t("baseForm.form.label.placeholder"),
                                filterable: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(state.Project, (item) => {
                                    return openBlock(), createBlock(unref(Option), {
                                      key: item,
                                      label: _ctx.$t(item),
                                      value: item
                                    }, null, 8, ["label", "value"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "placeholder"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["title"]),
                createVNode(unref(CollapseItem), {
                  title: _ctx.$t("baseForm.form.label.people"),
                  name: "2"
                }, {
                  default: withCtx(() => [
                    createVNode(planDetail)
                  ]),
                  _: 1
                }, 8, ["title"]),
                createVNode(unref(CollapseItem), {
                  title: _ctx.$t("baseForm.form.label.Objectives"),
                  name: "3"
                }, {
                  default: withCtx(() => [
                    createVNode(targetDetail)
                  ]),
                  _: 1
                }, 8, ["title"]),
                createVNode(unref(CollapseItem), {
                  title: _ctx.$t("baseForm.form.label.plan"),
                  name: "4"
                }, {
                  default: withCtx(() => [
                    createVNode(evaluationDetail)
                  ]),
                  _: 1
                }, 8, ["title"]),
                createVNode(unref(CollapseItem), {
                  title: _ctx.$t("baseForm.form.label.evaluation"),
                  name: "5"
                }, {
                  default: withCtx(() => [
                    createVNode(wholeDetail)
                  ]),
                  _: 1
                }, 8, ["title"]),
                createVNode(unref(CollapseItem), {
                  title: _ctx.$t("baseForm.form.label.mentortitle"),
                  name: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(mentor)
                  ]),
                  _: 1
                }, 8, ["title"]),
                createVNode(unref(CollapseItem), {
                  title: _ctx.$t("baseForm.form.record"),
                  name: "7"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$1, {
                      "table-data": state.tableData
                    }, null, 8, ["table-data"])
                  ]),
                  _: 1
                }, 8, ["title"])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_f7bfd6d4_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f7bfd6d4"]]);
export {
  index as default
};
