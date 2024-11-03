import { u as openBlock, v as createElementBlock, w as createBaseVNode, d as defineComponent, a8 as reactive, l as createVNode, H as withCtx, W as unref, J as createTextVNode, Z as pushScopeId, _ as popScopeId, k as resolveComponent } from "./vue.js";
import { R as Row, C as Col } from "./index14.js";
import { F as FormItem, a as Form } from "./index12.js";
import { C as Column, G as Grid } from "./index15.js";
import { s as svg, I as Input, _ as _export_sfc } from "./index.js";
import { S as Select } from "./index16.js";
import { f as findServices, c as findServiceInstances, t as timesHandle, g as getLogs, a as getMetrics } from "./time.js";
import "./index13.js";
var _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "refres_svg__st0",
    d: "M12.2 22.9c.5-.1.8-.5.7-1-.1-.5-.5-.8-1-.7-.4.1-.9.1-1.4.1-2.4 0-4.6-1-6.2-2.7S1.7 14.5 1.7 12s.9-4.8 2.6-6.5 3.9-2.7 6.2-2.7 4.6 1 6.2 2.7 2.6 4.1 2.6 6.5v.3l-1.9-2c-.3-.3-.9-.3-1.2 0-.3.3-.3.9 0 1.2l3.2 3.3c.3.3.9.3 1.2 0l3.2-3.3c.3-.3.3-.9 0-1.2-.3-.3-.9-.3-1.2 0L21 11.9c0-1.5-.3-2.9-.8-4.2-.5-1.3-1.3-2.5-2.2-3.5s-2.1-1.8-3.3-2.4c-1.4-.5-2.8-.8-4.2-.8s-2.8.3-4.1.9C5.2 2.4 4 3.2 3.1 4.2c-1 1-1.7 2.2-2.2 3.5C.3 9.1 0 10.5 0 12s.3 2.9.8 4.3c.5 1.3 1.3 2.5 2.2 3.5 1 1 2.1 1.8 3.3 2.4 1.3.6 2.7.9 4.1.9.7-.1 1.2-.1 1.8-.2z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$1 = [_hoisted_2$2];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [].concat(_hoisted_3$1));
}
var Refres = {
  render
};
var index$1 = function index2() {
  return svg({
    name: "IconRefres",
    component: Refres
  })();
};
const _withScopeId = (n) => (pushScopeId("data-v-27194111"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "main" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "main-title" }, [
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createBaseVNode("p", null, "实例列表查询")
], -1));
const _hoisted_3 = { class: "main-content" };
const _hoisted_4 = { class: "main-content-form" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["onClick"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "service",
  setup(__props) {
    const TinyIconRefres = index$1();
    const state = reactive({
      filterOptions: {
        environment: "",
        application: "",
        serviceLists: [],
        serviceName: ""
      },
      instanceLists: []
    });
    const handleRefreshService = () => {
      findServices().then((response) => {
        let serviceLists = [];
        response.services.forEach((item) => {
          let temp = { value: "", label: "" };
          temp.value = item;
          temp.label = item;
          serviceLists.push(temp);
        });
        state.filterOptions.serviceLists = serviceLists;
        state.filterOptions.application = response.application;
        state.filterOptions.environment = response.environment;
        if (Array.isArray(serviceLists) && serviceLists.length) {
          state.filterOptions.serviceName = serviceLists[0].value;
        }
      });
    };
    const handleFindServiceInstances = () => {
      if (!state.filterOptions.serviceName) {
        return;
      }
      findServiceInstances(state.filterOptions.serviceName).then((response) => {
        state.instanceLists = response.instances;
      });
    };
    const firstInit = async () => {
      let response = await findServices();
      const serviceLists = [];
      response.services.forEach((item) => {
        let temp = { value: "", label: "" };
        temp.value = item;
        temp.label = item;
        serviceLists.push(temp);
      });
      state.filterOptions.serviceLists = serviceLists;
      state.filterOptions.application = response.application;
      state.filterOptions.environment = response.environment;
      if (Array.isArray(serviceLists) && serviceLists.length) {
        state.filterOptions.serviceName = serviceLists[0].value;
      }
      if (!state.filterOptions.serviceName) {
        return;
      }
      response = await findServiceInstances(state.filterOptions.serviceName);
      state.instanceLists = response.instances;
    };
    firstInit();
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
      const dateStr = timesHandle(new Date(Date.now()), false);
      const params = {
        serviceName,
        timestamp: dateStr,
        instanceId
      };
      getLogs(params).then((response) => {
        fileHandle(response, "Log.txt");
      });
    };
    const downloadMetrics = (serviceName, instanceId) => {
      const dateStr = timesHandle(new Date(Date.now()), false);
      const params = {
        serviceName,
        timestamp: dateStr,
        instanceId
      };
      getMetrics(params).then((response) => {
        fileHandle(response, "Metrics.txt");
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _hoisted_2$1,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createVNode(unref(Form), {
              ref: "searchForm",
              model: state.filterOptions,
              "label-width": "100px",
              class: "demo-form"
            }, {
              default: withCtx(() => [
                createVNode(unref(Row), null, {
                  default: withCtx(() => [
                    createVNode(unref(Col), { span: 6 }, {
                      default: withCtx(() => [
                        createVNode(unref(FormItem), { label: "环境" }, {
                          default: withCtx(() => [
                            createVNode(unref(Input), {
                              modelValue: state.filterOptions.environment,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.filterOptions.environment = $event),
                              disabled: ""
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Col), { span: 6 }, {
                      default: withCtx(() => [
                        createVNode(unref(FormItem), { label: "应用" }, {
                          default: withCtx(() => [
                            createVNode(unref(Input), {
                              modelValue: state.filterOptions.application,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.filterOptions.application = $event),
                              disabled: ""
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Col), { span: 6 }, {
                      default: withCtx(() => [
                        createVNode(unref(FormItem), { label: "服务名称" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", null, [
                              createVNode(unref(Select), {
                                modelValue: state.filterOptions.serviceName,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => state.filterOptions.serviceName = $event),
                                options: state.filterOptions.serviceLists,
                                onChange: handleFindServiceInstances
                              }, null, 8, ["modelValue", "options"])
                            ]),
                            createBaseVNode("div", null, [
                              createVNode(unref(TinyIconRefres), { onClick: handleRefreshService })
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
              ]),
              _: 1
            }, 8, ["model"])
          ])
        ]),
        createBaseVNode("div", null, [
          createVNode(unref(Grid), {
            data: state.instanceLists,
            border: "",
            "edit-config": { trigger: "click", mode: "cell", showStatus: true }
          }, {
            default: withCtx(() => [
              createVNode(unref(Column), {
                type: "index",
                width: "60"
              }),
              createVNode(unref(Column), {
                field: "serviceName",
                title: "微服务名称"
              }),
              createVNode(unref(Column), {
                field: "version",
                title: "版本号"
              }),
              createVNode(unref(Column), {
                field: "endpoints",
                title: "协议列表"
              }),
              createVNode(unref(Column), {
                field: "instanceId",
                title: "实例ID"
              }),
              createVNode(unref(Column), {
                field: "registryName",
                title: "注册中心"
              }),
              createVNode(unref(Column), {
                field: "status",
                title: "状态"
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
                    }, "下载日志", 8, _hoisted_5),
                    createTextVNode("  |  "),
                    createBaseVNode("span", {
                      class: "list-operation",
                      onClick: ($event) => downloadMetrics(data.row.serviceName, data.row.instanceId)
                    }, "下载指标", 8, _hoisted_6)
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data"])
        ])
      ]);
    };
  }
});
const service_vue_vue_type_style_index_0_scoped_27194111_lang = "";
const Service = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-27194111"]]);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "contain" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_Breadcrumb, { items: ["menu.management", "menu.management.home"] }),
          createVNode(Service)
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_cb545e45_lang = "";
const index_vue_vue_type_style_index_1_scoped_cb545e45_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cb545e45"]]);
export {
  index as default
};
