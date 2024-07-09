import { d as defineComponent, r as ref, a8 as reactive, c as computed, u as openBlock, y as createBlock, H as withCtx, W as unref, l as createVNode, w as createBaseVNode, E as toDisplayString, v as createElementBlock, M as Fragment, N as renderList, J as createTextVNode, Z as pushScopeId, _ as popScopeId, k as resolveComponent } from "./vue.js";
import { q as axios, t as ListType, _ as _export_sfc, I as Input, B as Button } from "./index.js";
import { a as Column, G as Grid, R as Row, C as Col } from "./index31.js";
import { D as DatePicker } from "./index36.js";
import { F as FormItem, a as Form } from "./index29.js";
import { t as timesHandle } from "./time.js";
import "./index32.js";
import { G as GridToolbar } from "./index33.js";
import "./chevron-up.js";
import "./index30.js";
import "./index35.js";
import "./index34.js";
import "./warning-triangle.js";
function searchTrace(data) {
  return axios({
    url: "/api/admin/v1/scb/admin/observability/searchTrace",
    params: {
      timestamp: data.timestamp,
      traceId: data.traceId
    }
  });
}
function searchLog(data) {
  return axios({
    url: "/api/admin/v1/scb/admin/observability/searchLog",
    params: {
      timestamp: data.timestamp,
      traceId: data.traceId
    }
  });
}
function getLogs(params) {
  return axios({
    url: "/api/admin/v1/scb/observability/downloadLog",
    params
  });
}
function getMetrics(params) {
  return axios.get("/api/admin/v1/scb/admin/observability/downloadMetrics", { params });
}
const _hoisted_1$2 = { key: 1 };
const _hoisted_2$2 = ["onClick"];
const _hoisted_3$1 = ["onClick"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "call-chain-list",
  props: {
    traceData: {
      type: Array,
      default() {
        return [];
      }
    },
    listTypes: {
      type: String,
      default() {
        return ListType.TYPE_LIST;
      }
    },
    timestamp: {
      type: String,
      default() {
        return "";
      }
    }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const listRef = ref();
    const state = reactive({
      traceData: computed(() => props.traceData)
    });
    const clearExpand = () => {
      listRef.value.clearRowExpand();
    };
    const fileHandle = (data, type) => {
      const url = window.URL.createObjectURL(new Blob([data], { type: "text/plain" }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", type);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    };
    const downloadLog = (serviceName, instanceId) => {
      const params = {
        serviceName,
        timestamp: props.timestamp,
        instanceId
      };
      getLogs(params).then((response) => {
        fileHandle(response, "Log.txt");
      });
    };
    const downloadMetrics = (serviceName, instanceId) => {
      const params = {
        serviceName,
        timestamp: props.timestamp,
        instanceId
      };
      getMetrics(params).then((response) => {
        fileHandle(response, "Metrics.txt");
      });
    };
    __expose({ clearExpand });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Grid), {
        ref_key: "listRef",
        ref: listRef,
        resizable: "",
        "seq-serial": "",
        data: state.traceData
      }, {
        toolbar: withCtx(() => [
          createVNode(unref(GridToolbar), null, {
            default: withCtx(() => [
              createBaseVNode("span", null, toDisplayString(__props.listTypes === unref(ListType).TYPE_LOGS ? "日志" : "调用链") + "列表", 1)
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(unref(Column), {
            type: "index",
            width: "60"
          }),
          createVNode(unref(Column), { width: "60" }),
          createVNode(unref(Column), {
            type: "expand",
            title: "data",
            width: "60"
          }, {
            default: withCtx((data) => [
              __props.listTypes === unref(ListType).TYPE_LIST ? (openBlock(), createBlock(unref(Grid), {
                key: 0,
                data: data.row.data
              }, {
                default: withCtx(() => [
                  createVNode(unref(Column), {
                    field: "name",
                    title: "name",
                    "show-overflow": ""
                  }),
                  createVNode(unref(Column), {
                    field: "duration",
                    title: "duration"
                  }),
                  createVNode(unref(Column), {
                    field: "traceId",
                    title: "http.status_code"
                  }, {
                    default: withCtx((data2) => [
                      createBaseVNode("div", null, toDisplayString(data2.row.tags["http.status_code"]), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(Column), {
                    field: "timestamp",
                    title: "timestamp"
                  }, {
                    default: withCtx((data2) => [
                      createBaseVNode("div", null, toDisplayString(unref(timesHandle)(data2.row.timestamp / 1e3, false)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(Column), {
                    field: "http.route",
                    title: "http.route"
                  }, {
                    default: withCtx((data2) => [
                      createBaseVNode("div", null, toDisplayString(data2.row.tags["http.route"]), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["data"])) : (openBlock(), createElementBlock("div", _hoisted_1$2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(data.row.data, (item, index2) => {
                  return openBlock(), createElementBlock("div", {
                    key: index2,
                    class: "logs-list"
                  }, toDisplayString(item), 1);
                }), 128))
              ]))
            ]),
            _: 1
          }),
          createVNode(unref(Column), {
            field: "application",
            title: "application"
          }),
          createVNode(unref(Column), {
            field: "instanceId",
            title: "instanceId"
          }),
          createVNode(unref(Column), {
            field: "localhost",
            title: "localhost"
          }),
          createVNode(unref(Column), {
            field: "serviceName",
            title: "serviceName"
          }),
          createVNode(unref(Column), {
            title: "操作",
            width: "150"
          }, {
            default: withCtx((data) => [
              createBaseVNode("div", null, [
                createBaseVNode("span", {
                  class: "list-operation",
                  onClick: ($event) => downloadLog(data.row.serviceName, data.row.instanceId)
                }, "查看日志", 8, _hoisted_2$2),
                createTextVNode(" |  "),
                createBaseVNode("span", {
                  class: "list-operation",
                  onClick: ($event) => downloadMetrics(data.row.serviceName, data.row.instanceId)
                }, "查看Metrics", 8, _hoisted_3$1)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["data"]);
    };
  }
});
const callChainList_vue_vue_type_style_index_0_scoped_7c5944f6_lang = "";
const callChainList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7c5944f6"]]);
const _withScopeId = (n) => (pushScopeId("data-v-69e5064f"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "main" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "main-title" }, [
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createBaseVNode("p", null, "调用链搜索")
], -1));
const _hoisted_3 = { class: "main-content" };
const _hoisted_4 = { class: "main-content-form" };
const _hoisted_5 = { class: "main-content-search" };
const _hoisted_6 = { class: "clear-expand" };
const _hoisted_7 = { class: "main-list" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "main",
  setup(__props) {
    const rules = {
      traceId: [
        { required: true, message: "必填", trigger: "blur" }
      ],
      startTime: [{ required: true, message: "请选择时间" }]
    };
    const searchForm = ref();
    const chainRef = ref();
    const logsRef = ref();
    const state = reactive({
      filterOptions: {
        startTime: "",
        traceId: ""
      },
      timestamp: "",
      traceData: [],
      listData: [],
      validType: "text",
      rules: {
        traceId: [
          { required: true, message: "必填", trigger: "blur" }
        ],
        startTime: [{ required: true, message: "请选择时间" }]
      }
    });
    const searchCallChain = () => {
      searchForm.value.validate((valid) => {
        if (valid) {
          const date = new Date(state.filterOptions.startTime);
          state.timestamp = timesHandle(date, true);
          searchTrace({
            timestamp: state.timestamp,
            traceId: state.filterOptions.traceId
          }).then((response) => {
            state.traceData = response;
          });
          searchLog({
            timestamp: timesHandle(date, true),
            traceId: state.filterOptions.traceId
          }).then((response) => {
            state.listData = response;
          });
        }
      });
    };
    const clearExpand = () => {
      chainRef.value.clearExpand();
      logsRef.value.clearExpand();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _hoisted_2$1,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createVNode(unref(Form), {
              ref_key: "searchForm",
              ref: searchForm,
              model: state.filterOptions,
              "validate-type": state.validType,
              rules,
              "label-width": "100px",
              class: "demo-form"
            }, {
              default: withCtx(() => [
                createVNode(unref(Row), null, {
                  default: withCtx(() => [
                    createVNode(unref(Col), { span: 6 }, {
                      default: withCtx(() => [
                        createVNode(unref(FormItem), {
                          label: "Trace-Id:",
                          prop: "traceId"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Input), {
                              modelValue: state.filterOptions.traceId,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.filterOptions.traceId = $event),
                              clearable: ""
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Col), { span: 6 }, {
                      default: withCtx(() => [
                        createVNode(unref(FormItem), {
                          label: "大概时间:",
                          prop: "startTime"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DatePicker), {
                              modelValue: state.filterOptions.startTime,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.filterOptions.startTime = $event),
                              type: "datetime"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "validate-type"])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(unref(Button), {
              type: "primary",
              onClick: searchCallChain
            }, {
              default: withCtx(() => [
                createTextVNode("搜索")
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(unref(Button), { onClick: clearExpand }, {
            default: withCtx(() => [
              createTextVNode("手动清空展开行状态")
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_7, [
          createVNode(callChainList, {
            ref_key: "chainRef",
            ref: chainRef,
            timestamp: state.timestamp,
            "trace-data": state.traceData
          }, null, 8, ["timestamp", "trace-data"]),
          createVNode(callChainList, {
            ref_key: "logsRef",
            ref: logsRef,
            timestamp: state.timestamp,
            "trace-data": state.listData,
            "list-types": unref(ListType).TYPE_LOGS
          }, null, 8, ["timestamp", "trace-data", "list-types"])
        ])
      ]);
    };
  }
});
const main_vue_vue_type_style_index_0_scoped_69e5064f_lang = "";
const Main = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-69e5064f"]]);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "contain" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_Breadcrumb, { items: ["menu.cloud", "menu.cloud.locate.problems"] }),
          createVNode(Main)
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_e19f70fa_lang = "";
const index_vue_vue_type_style_index_1_scoped_e19f70fa_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e19f70fa"]]);
export {
  index as default
};
