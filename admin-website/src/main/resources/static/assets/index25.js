import { d as defineComponent, a8 as reactive, r as ref, a0 as useI18n, c as computed, u as openBlock, y as createBlock, H as withCtx, W as unref, l as createVNode, v as createElementBlock, N as renderList, M as Fragment, k as resolveComponent, w as createBaseVNode, J as createTextVNode, E as toDisplayString } from "./vue.js";
import { I as Input, n as Layout, T as TINYModal, _ as _export_sfc, u as useUserStore, B as Button } from "./index.js";
import { g as getSimpleDate } from "./time.js";
import { h as headtop } from "./head.js";
import { R as Row, C as Col } from "./index31.js";
import { D as DatePicker } from "./index36.js";
import { F as FormItem, a as Form } from "./index29.js";
import { S as Select, O as Option } from "./index34.js";
import "./chevron-up.js";
import "./index30.js";
import "./index35.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "set-from",
  setup(__props, { expose: __expose }) {
    const projectData = [
      {
        value: "1",
        label: "social recruitment"
      },
      {
        value: "2",
        label: "scholl recruitment"
      },
      {
        value: "3",
        label: "Job transfer"
      }
    ];
    const state = reactive({
      filterOptions: {},
      department: "",
      position: [],
      type: [],
      date: [],
      during: "",
      startTime: "",
      endTime: ""
    });
    const setFormRef = ref();
    const { t } = useI18n();
    const rulesType = {
      required: true,
      trigger: "blur"
    };
    const rulesSelect = {
      required: true,
      message: "必选",
      trigger: "blur"
    };
    const rules = computed(() => {
      return {
        department: [rulesType],
        position: [rulesType],
        type: [rulesSelect],
        date: [rulesType],
        during: [rulesType],
        startTime: [rulesType],
        endTime: [rulesType]
      };
    });
    const handleBlur = () => {
      var _a, _b;
      const start = (_a = state.filterOptions.startTime) == null ? void 0 : _a.getTime();
      const end = (_b = state.filterOptions.endTime) == null ? void 0 : _b.getTime();
      if (end < start) {
        state.filterOptions.endTime = "";
        TINYModal.message({
          message: t("userInfo.time.message"),
          status: "error"
        });
      }
    };
    const setFormValid = () => {
      let setValidate = false;
      setFormRef.value.validate((valid) => {
        setValidate = valid;
      });
      return setValidate;
    };
    const setReset = () => {
      state.filterOptions = {};
    };
    const setData = () => {
      return state;
    };
    __expose({
      setData,
      setFormValid,
      setReset
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Layout), null, {
        default: withCtx(() => [
          createVNode(unref(Form), {
            ref_key: "setFormRef",
            ref: setFormRef,
            model: state.filterOptions,
            rules: rules.value,
            "label-width": "150px",
            "label-align": true,
            "label-position": "left",
            size: "small"
          }, {
            default: withCtx(() => [
              createVNode(unref(Row), {
                flex: true,
                justify: "left"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), {
                    span: 5,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("userSetting.department"),
                        prop: "department"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: state.filterOptions.department,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.filterOptions.department = $event)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Col), {
                    span: 5,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("userSetting.position"),
                        prop: "position"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: state.filterOptions.position,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.filterOptions.position = $event)
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
              createVNode(unref(Row), {
                flex: true,
                justify: "left"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), {
                    span: 5,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("userSetting.type"),
                        prop: "type"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Select), {
                            modelValue: state.filterOptions.type,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => state.filterOptions.type = $event),
                            placeholder: _ctx.$t("baseForm.form.label.placeholder")
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(projectData, (item) => {
                                return openBlock(), createBlock(unref(Option), {
                                  key: item.value,
                                  label: _ctx.$t(item.label),
                                  value: item.label
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Col), {
                    span: 5,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("userSetting.date"),
                        prop: "date"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DatePicker), {
                            modelValue: state.filterOptions.date,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.filterOptions.date = $event),
                            "unlink-panels": "",
                            type: "daterange",
                            "range-separator": "-",
                            "start-placeholder": _ctx.$t("userSetting.first"),
                            "end-placeholder": _ctx.$t("userSetting.last")
                          }, null, 8, ["modelValue", "start-placeholder", "end-placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Row), {
                flex: true,
                justify: "left"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), {
                    span: 5,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("userSetting.during"),
                        prop: "during"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Input), {
                            modelValue: state.filterOptions.during,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => state.filterOptions.during = $event)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Col), {
                    span: 5,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("userSetting.startTime"),
                        prop: "startTime"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DatePicker), {
                            modelValue: state.filterOptions.startTime,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => state.filterOptions.startTime = $event),
                            onBlur: handleBlur
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
              createVNode(unref(Row), {
                flex: true,
                justify: "left"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Col), {
                    span: 5,
                    "label-width": "100px"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FormItem), {
                        label: _ctx.$t("userSetting.endTime"),
                        prop: "endTime"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DatePicker), {
                            modelValue: state.filterOptions.endTime,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => state.filterOptions.endTime = $event),
                            onBlur: handleBlur
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ]),
        _: 1
      });
    };
  }
});
const setFrom_vue_vue_type_style_index_0_scoped_0e48261b_lang = "";
const setFrom = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0e48261b"]]);
const _hoisted_1 = { class: "container-set" };
const _hoisted_2 = { class: "general-card" };
const _hoisted_3 = { class: "general-top" };
const _hoisted_4 = { class: "general-contain" };
const _hoisted_5 = { class: "general-btn" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const setFormRef = ref();
    const userStore = useUserStore();
    function handleFormReset() {
      setFormRef.value.setReset();
    }
    async function handleSubmit() {
      let data = setFormRef.value.setData();
      if (setFormRef.value.setFormValid()) {
        let newTemp = {
          department: data.filterOptions.department,
          job: data.filterOptions.position,
          employeeType: data.filterOptions.type,
          probationStart: getSimpleDate(data.filterOptions.date[0]),
          probationEnd: getSimpleDate(data.filterOptions.date[1]),
          probationDuration: data.filterOptions.during,
          protocolStart: getSimpleDate(data.filterOptions.startTime),
          protocolEnd: getSimpleDate(data.filterOptions.endTime)
        };
        await userStore.updateInfo(newTemp);
        TINYModal.message({
          message: t("baseForm.form.submit.success"),
          status: "success"
        });
        handleFormReset();
      } else {
        TINYModal.message({
          message: t("baseForm.form.submit.error"),
          status: "error"
        });
      }
    }
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_Breadcrumb, { items: ["menu.user", "menu.user.setting"] }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(headtop)
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(setFrom, {
              ref_key: "setFormRef",
              ref: setFormRef
            }, null, 512),
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(Button), {
                type: "primary",
                "native-type": "submit",
                onClick: handleSubmit
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("userSetting.save")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(Button), { onClick: handleFormReset }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("userSetting.cancel")), 1)
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
const index_vue_vue_type_style_index_0_scoped_1616658a_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1616658a"]]);
export {
  index as default
};
