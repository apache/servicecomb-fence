import { d as defineComponent, a0 as useI18n, r as ref, a8 as reactive, c as computed, u as openBlock, v as createElementBlock, w as createBaseVNode, E as toDisplayString, l as createVNode, H as withCtx, W as unref, J as createTextVNode, Z as pushScopeId, _ as popScopeId, a9 as toRefs, k as resolveComponent, y as createBlock, z as createCommentVNode, M as Fragment, B as resolveDynamicComponent } from "./vue.js";
import { I as Input, B as Button, T as TINYModal, _ as _export_sfc } from "./index.js";
import { R as Row, C as Col, P as Pager, a as Column, G as Grid } from "./index31.js";
import "./index32.js";
import { G as GridToolbar } from "./index33.js";
import { s as sortTime } from "./time.js";
import { H as HwcClientService } from "./hwcClient.service.js";
import { F as FormItem, a as Form } from "./index29.js";
import "./chevron-up.js";
import "./index30.js";
import "./index34.js";
import "./index35.js";
import "./warning-triangle.js";
const _hoisted_1$3 = { class: "container-edit" };
const _hoisted_2$3 = { class: "contain" };
const _hoisted_3$3 = { class: "tip" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    // eslint-disable-next-line vue/require-prop-types
    init: {}
  },
  emits: ["myclick", "mycancel"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { t } = useI18n();
    const ruleForm = ref();
    const props = __props;
    const validatePass = (rule, value, callback) => {
      const nameRe = /^([a-zA-Z0-9]|[\u4e00-\u9fa5])([a-zA-Z0-9._:()（）、：\/-]|[\u4e00-\u9fa5]){2,254}$/;
      if (!nameRe.test(value)) {
        callback(new Error(t("menu.cloud.tip")));
      } else {
        if (ruleForm.value.password !== "") {
          ruleForm.value.validateField("password");
        }
        callback(void 0);
      }
    };
    let createData = reactive({
      name: props.init.name,
      customer: props.init.customer,
      description: props.init.description
    });
    let isvalidate = ref(true);
    const rules = computed(() => {
      return {
        name: [
          {
            required: true,
            message: t("menu.cloud.delpass"),
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ],
        customer: [
          {
            required: false,
            trigger: "blur"
          }
        ],
        description: [
          {
            required: false,
            trigger: "change"
          }
        ]
      };
    });
    const emit = __emit;
    const resultData = () => {
      return createData;
    };
    const handleCancel = () => {
      emit("mycancel");
    };
    const handleSubmit = () => {
      ruleForm.value.validate((e) => {
        if (e) {
          reactive({
            username: createData.name
          });
          TINYModal.message({
            message: t("menu.cloud.editpass"),
            status: "success"
          });
          emit("myclick");
        } else {
          TINYModal.message({
            message: t("login.form.registerError"),
            status: "warning"
          });
        }
      });
    };
    __expose({
      resultData
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("h3", null, toDisplayString(_ctx.$t("menu.cloud.edit")), 1),
        createBaseVNode("div", _hoisted_2$3, [
          createVNode(unref(Form), {
            ref_key: "ruleForm",
            ref: ruleForm,
            model: unref(createData),
            rules: rules.value,
            "validate-on-rule-change": unref(isvalidate),
            "label-align": true,
            "label-position": "left",
            "label-width": "110px"
          }, {
            default: withCtx(() => [
              createVNode(unref(Row), { flex: true }, {
                default: withCtx(() => [
                  createVNode(unref(Col), null, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("menu.cloud.name"),
                        prop: "name"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", null, [
                            createVNode(unref(Input), {
                              modelValue: unref(createData).name,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(createData).name = $event)
                            }, null, 8, ["modelValue"]),
                            createBaseVNode("div", _hoisted_3$3, toDisplayString(_ctx.$t("menu.cloud.tip")), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Row), { flex: true }, {
                default: withCtx(() => [
                  createVNode(unref(Col), null, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("menu.cloud.customer"),
                        prop: "customer"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: unref(createData).customer,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(createData).customer = $event)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Row), { flex: true }, {
                default: withCtx(() => [
                  createVNode(unref(Col), null, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("menu.cloud.description"),
                        prop: "description"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: unref(createData).description,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(createData).description = $event),
                            type: "textarea"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Row), { flex: true }, {
                default: withCtx(() => [
                  createVNode(unref(Col), null, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), { class: "btn" }, {
                        default: withCtx(() => [
                          createVNode(unref(Button), {
                            type: "primary",
                            onClick: handleSubmit
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("menu.cloud.sure")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { onClick: handleCancel }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("menu.cloud.cancel")), 1)
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
              })
            ]),
            _: 1
          }, 8, ["model", "rules", "validate-on-rule-change"])
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_bb007481_lang = "";
const edit = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bb007481"]]);
const _hoisted_1$2 = { class: "container-create" };
const _hoisted_2$2 = { class: "contain" };
const _hoisted_3$2 = { class: "tip" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  emits: ["myclick", "mycancel"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { t } = useI18n();
    const ruleForm = ref();
    const validatePass = (rule, value, callback) => {
      const nameRe = /^([a-zA-Z0-9]|[\u4e00-\u9fa5])([a-zA-Z0-9._:()（）、：\/-]|[\u4e00-\u9fa5]){2,254}$/;
      if (!nameRe.test(value)) {
        callback(new Error(t("menu.cloud.tip")));
      } else {
        if (ruleForm.value.password !== "") {
          ruleForm.value.validateField("password");
        }
        callback(void 0);
      }
    };
    let createData = reactive({
      name: "",
      customer: "",
      description: ""
    });
    let isvalidate = ref(true);
    const rules = computed(() => {
      return {
        name: [
          {
            required: true,
            message: t("menu.cloud.verification"),
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ],
        customer: [
          {
            required: false,
            trigger: "blur"
          }
        ],
        description: [
          {
            required: false,
            trigger: "change"
          }
        ]
      };
    });
    const emit = __emit;
    const resultData = () => {
      return createData;
    };
    const handleCancel = () => {
      emit("mycancel");
    };
    const handleSubmit = () => {
      ruleForm.value.validate((e) => {
        if (e) {
          reactive({
            username: createData.name
          });
          TINYModal.message({
            message: t("login.form.registerPass"),
            status: "success"
          });
          emit("myclick");
        } else {
          TINYModal.message({
            message: t("login.form.registerError"),
            status: "warning"
          });
        }
      });
    };
    __expose({
      resultData
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("h3", null, toDisplayString(_ctx.$t("menu.cloud.create")), 1),
        createBaseVNode("div", _hoisted_2$2, [
          createVNode(unref(Form), {
            ref_key: "ruleForm",
            ref: ruleForm,
            model: unref(createData),
            rules: rules.value,
            "validate-on-rule-change": unref(isvalidate),
            "label-align": true,
            "label-position": "left",
            "label-width": "110px"
          }, {
            default: withCtx(() => [
              createVNode(unref(Row), { flex: true }, {
                default: withCtx(() => [
                  createVNode(unref(Col), null, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("menu.cloud.name"),
                        prop: "name"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", null, [
                            createVNode(unref(Input), {
                              modelValue: unref(createData).name,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(createData).name = $event)
                            }, null, 8, ["modelValue"]),
                            createBaseVNode("div", _hoisted_3$2, toDisplayString(_ctx.$t("menu.cloud.tip")), 1)
                          ])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Row), { flex: true }, {
                default: withCtx(() => [
                  createVNode(unref(Col), null, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("menu.cloud.customer"),
                        prop: "customer"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: unref(createData).customer,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(createData).customer = $event)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Row), { flex: true }, {
                default: withCtx(() => [
                  createVNode(unref(Col), null, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("menu.cloud.description"),
                        prop: "description"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: unref(createData).description,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(createData).description = $event),
                            type: "textarea"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Row), { flex: true }, {
                default: withCtx(() => [
                  createVNode(unref(Col), null, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), { class: "btn" }, {
                        default: withCtx(() => [
                          createVNode(unref(Button), {
                            type: "primary",
                            onClick: handleSubmit
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("menu.cloud.sure")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Button), { onClick: handleCancel }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("menu.cloud.cancel")), 1)
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
              })
            ]),
            _: 1
          }, 8, ["model", "rules", "validate-on-rule-change"])
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_a2c95e32_lang = "";
const create = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a2c95e32"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAhCAYAAAC1ONkWAAADmklEQVRYR82X3WscZRTGzzN9d6qVVkt3lqCiImiEWlpbrcSixAtBvRBmlhZvIg0limlQaP+B9A9QsGrFIFHUC6XsjHqhF960+NFarUZooe2FxFYk7Gy1H1Zl9s37yGy2km1ms/ORat+rYeac5/zmcM6ZM5CCh9y6TAcH9ojISEuKMqG8wXFg/2wRaRRxjn2jWvldERm6Quc9u9p4poh2ITAdONuM4YdJABawTXnh/rxwucH4cf9KPXv2BCk3JwUH5Fe1Gv14NPwjD1xusKZfeYk0uxYLClgvl7z67v8MjJ/0rdVaT5GiFgcTrZTagKdmjmeFy5WxZs05SOEjaYIBOFjywsE0tvNtMoPpoDJkjIk7seMAaBU6ya1XPrMsa0i59fezwGUC4+d33qgvXDxBYV8nlZwpueHt8T0dOKdJubXz7TGjVq28B4/9dD4tXCawpu+8QvKFBeLAlO2F97Xmmu/8IOSGhIzuLXnhi0sORr+yXtMcpciyXGAiswrWJnj1H9PApcoYSWi/8gWFWxJFU2Qs9oPgK+XVHwbAXnCpwLTvDBtysqtYSrDY37IwrNzwncJgDO64SZtLpyh0lgIMQF3hhn640+cWnYG9yHXgvG4MRxe1y5Cxdtb2KTfcmRuMtfJGLfItRaylBIOIUSIPoNr4vptu1xqbK3jnEEUe7JVVyZixuUaQb5QXDnRrhK5g2i+PGMpET6hWlN5zLEnHEhlR1cZbSc8SwejfskZLdJLkmqsJBuCsWrH8bjz+y28LBnJS4MivTAjN3Kqc5uTMWFt6wq42nusJFgV9m0F9mIzLIOUpABY3Ai01YLszR+ZH6whOjlvN4LUjQtmUEumy2Wm72mh9xKNa+WcRuS2TP+RoyR3bDIyby34dYFFQeV6M2ZdJtG0M4LP4kuQTefzFskZtt/7GAjB+2ufov/VJUlbnEi7oBMjv6jrVjydnwvY4mVOMfGdSyOG8+hCJWhkTsfNqCDBpe+GOf8GaH1UeEmO+zFTw86JD8Jeyl98lEaElir+r1+eBA+L3sraUvPohxH/SzeDAd0nLXWrxAl25IAYwVXIH74cOnO3G8O3UEMmGx+1q4952Vx4TkbVF9OLVCE3f+ZrkQBEhiMwCeDbeBGn4ZuKWmyEAgMMx2CWSKzL4XXVTAH8iqpWnRaQ1HK+ZA0wjCpwxMXz1moGKQSxrtDX5tV9+msSYgOtIWfV/QAJyUQTHINyrvMYH/wCqlqCjKgTtawAAAABJRU5ErkJggg==";
const _withScopeId = (n) => (pushScopeId("data-v-2fa667e7"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "container-del" };
const _hoisted_2$1 = { class: "contain" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "deleted"
}, null, -1));
const _hoisted_4$1 = { class: "contain-main" };
const _hoisted_5$1 = { class: "title" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "del" }, "DELETE", -1));
const _hoisted_7$1 = { class: "btn" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    init: Object
  },
  emits: ["myclick", "mycancel"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const value = ref("");
    const props = __props;
    const emit = __emit;
    const handleCancel = () => {
      emit("mycancel");
    };
    const handleSubmit = () => {
      if (value.value.trim() === "DELETE") {
        TINYModal.message({
          message: t("menu.cloud.delpass"),
          status: "success"
        });
        emit("myclick");
      } else {
        TINYModal.message({
          message: t("login.form.registerError"),
          status: "warning"
        });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("h3", null, toDisplayString(_ctx.$t("menu.cloud.del")), 1),
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", null, [
              createTextVNode(toDisplayString(_ctx.$t("menu.cloud.askDel")) + " ", 1),
              createBaseVNode("b", null, toDisplayString(_ctx.$t("menu.cloud.askContracts")), 1),
              createTextVNode("？ ")
            ]),
            createBaseVNode("div", _hoisted_5$1, toDisplayString(_ctx.$t("menu.contracts.name")) + " " + toDisplayString(props.init.name), 1),
            createBaseVNode("div", null, [
              createTextVNode(toDisplayString(_ctx.$t("menu.cloud.askInput")) + " ", 1),
              _hoisted_6$1,
              createTextVNode(" " + toDisplayString(_ctx.$t("menu.cloud.askSure")), 1)
            ]),
            createVNode(unref(Input), {
              modelValue: value.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event)
            }, null, 8, ["modelValue"]),
            createBaseVNode("div", _hoisted_7$1, [
              createVNode(unref(Button), {
                type: "danger",
                onClick: handleSubmit
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("menu.cloud.sure")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(Button), { onClick: handleCancel }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("menu.cloud.cancel")), 1)
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_2fa667e7_lang = "";
const deletes = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2fa667e7"]]);
const _hoisted_1 = { class: "container-contracts" };
const _hoisted_2 = { class: "contracts-card" };
const _hoisted_3 = { class: "btn" };
const _hoisted_4 = { class: "operation" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const state = reactive({
      loading: false,
      filterOptions: {}
    });
    const pagerConfig = reactive({
      component: Pager,
      attrs: {
        currentPage: 1,
        pageSize: 10,
        pageSizes: [10, 20],
        total: 10,
        layout: "total, prev, pager, next, jumper, sizes"
      }
    });
    const update = ref(true);
    const { loading } = toRefs(state);
    const display = ref(false);
    const title = ref();
    const choose = ref("");
    const content = ref();
    const init = ref();
    const taskGrid = ref();
    const table = ref();
    const modalHeight = ref("536");
    const contractApigInfo = {
      apigName: "apig_contract",
      apigGroupName: "group_contract"
    };
    async function getContractsData(params) {
      const result = await HwcClientService.apiRequest(
        "getContracts",
        params,
        contractApigInfo
      );
      return result == null ? void 0 : result.data;
    }
    async function fetchData(params) {
      state.loading = true;
      try {
        table.value = await getContractsData(params);
        let offset = (params.pageIndex - 1) * params.pageSize;
        const data = table.value.sort(sortTime("updatedAt"));
        return {
          result: data.slice(offset, offset + params.pageSize),
          page: {
            total: table.value.length
          }
        };
      } finally {
        update.value = true;
        state.loading = false;
      }
    }
    async function delContracts(params) {
      return HwcClientService.apiRequest("delContract", params, contractApigInfo);
    }
    async function editContracts(params) {
      return HwcClientService.apiRequest(
        "editContract",
        params,
        contractApigInfo
      );
    }
    async function createContracts(params) {
      return HwcClientService.apiRequest("addContract", params, contractApigInfo);
    }
    const fetchDataOption = reactive({
      api: ({ page }) => {
        const { currentPage, pageSize } = page;
        return fetchData({
          pageIndex: currentPage,
          pageSize,
          query: "",
          field: "name"
        });
      }
    });
    const disTheme = (item, data) => {
      init.value = data;
      choose.value = item;
      display.value = !display.value;
      if (item === "edit") {
        title.value = edit;
        modalHeight.value = "536";
      } else if (item === "deletes") {
        title.value = deletes;
        modalHeight.value = "369";
      } else {
        title.value = create;
        modalHeight.value = "536";
      }
    };
    async function confirmClick() {
      display.value = false;
      update.value = false;
      if (choose.value === "edit") {
        const data = content.value.resultData();
        const params = {
          id: init.value.id,
          name: data.name,
          customer: data.customer,
          description: data.description
        };
        await editContracts(params);
        fetchData({
          pageIndex: 1,
          pageSize: 10,
          query: "",
          field: "name"
        });
      }
      if (choose.value === "deletes") {
        const params = {
          id: init.value.id
        };
        await delContracts(params);
        fetchData({
          pageIndex: 1,
          pageSize: 10,
          query: "",
          field: "name"
        });
      }
      if (choose.value === "create") {
        const data = content.value.resultData();
        const params = {
          name: data.name,
          customer: data.customer,
          description: data.description
        };
        await createContracts(params);
        fetchData({
          pageIndex: 1,
          pageSize: 10,
          query: "",
          field: "name"
        });
      }
    }
    const closeClick = () => {
      display.value = false;
    };
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_Breadcrumb, { items: ["menu.cloud", "menu.cloud.contracts"] }),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            update.value ? (openBlock(), createBlock(unref(Grid), {
              key: 0,
              ref: taskGrid.value,
              "fetch-data": fetchDataOption,
              "auto-load": true,
              pager: pagerConfig,
              loading: unref(loading),
              size: "medium",
              "auto-resize": true
            }, {
              toolbar: withCtx(() => [
                createVNode(unref(GridToolbar), null, {
                  buttons: withCtx((slotScope) => [
                    createBaseVNode("div", _hoisted_3, [
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("menu.cloud.contracts")), 1),
                      createVNode(unref(Button), {
                        type: "primary",
                        onClick: ($event) => disTheme("create", slotScope.row)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("menu.cloud.create")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(unref(Column), {
                  type: "index",
                  width: "40"
                }),
                createVNode(unref(Column), {
                  field: "name",
                  title: _ctx.$t("menu.cloud.name"),
                  align: "center",
                  sortable: ""
                }, null, 8, ["title"]),
                createVNode(unref(Column), {
                  field: "id",
                  title: _ctx.$t("menu.cloud.id"),
                  align: "center"
                }, null, 8, ["title"]),
                createVNode(unref(Column), {
                  field: "customer",
                  title: _ctx.$t("menu.cloud.customer"),
                  align: "center"
                }, null, 8, ["title"]),
                createVNode(unref(Column), {
                  field: "description",
                  title: _ctx.$t("menu.cloud.description"),
                  align: "center"
                }, null, 8, ["title"]),
                createVNode(unref(Column), {
                  field: "updatedAt",
                  title: _ctx.$t("menu.cloud.updatedAt"),
                  align: "center",
                  sortable: ""
                }, null, 8, ["title"]),
                createVNode(unref(Column), {
                  title: _ctx.$t("searchTable.columns.operations"),
                  align: "center"
                }, {
                  default: withCtx((slotScope) => [
                    createBaseVNode("span", _hoisted_4, [
                      createBaseVNode("a", {
                        onClick: ($event) => disTheme("edit", slotScope.row)
                      }, toDisplayString(_ctx.$t("menu.cloud.editOpa")), 9, _hoisted_5),
                      createTextVNode("   "),
                      createBaseVNode("a", {
                        onClick: ($event) => disTheme("deletes", slotScope.row)
                      }, toDisplayString(_ctx.$t("menu.cloud.editDel")), 9, _hoisted_6)
                    ])
                  ]),
                  _: 1
                }, 8, ["title"])
              ]),
              _: 1
            }, 8, ["fetch-data", "pager", "loading"])) : createCommentVNode("", true)
          ])
        ]),
        display.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createVNode(unref(TINYModal), {
            modelValue: display.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => display.value = $event),
            "lock-scroll": false,
            "show-header": false,
            "show-footer": false,
            type: "confirm",
            "mask-closable": "true",
            height: modalHeight.value,
            width: "589",
            onConfirm: confirmClick,
            onClose: closeClick
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(title.value), {
                ref_key: "content",
                ref: content,
                init: init.value,
                onMyclick: confirmClick,
                onMycancel: closeClick
              }, null, 40, ["init"]))
            ]),
            _: 1
          }, 8, ["modelValue", "height"])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_19a1fa63_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-19a1fa63"]]);
export {
  index as default
};
