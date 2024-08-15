import { d as defineComponent, u as openBlock, v as createElementBlock, l as createVNode, H as withCtx, V as unref, w as createBaseVNode, E as toDisplayString, J as createTextVNode, Y as pushScopeId, Z as popScopeId, $ as useI18n, r as ref, j as onMounted, n as nextTick, a1 as watch, i as inject, a7 as reactive, k as resolveComponent } from "./vue.js";
import { _ as _imports_0$2, a as _imports_1, b as _imports_2, c as _imports_3 } from "./home-down.js";
import { R as Row, C as Col, P as Pager, a as Column, G as Grid } from "./index26.js";
import { L as Layout, _ as _export_sfc, av as useLocale } from "./index.js";
import "./index27.js";
import "./chevron-up.js";
import "./index25.js";
const _imports_4 = "/ui/admin/assets/home-mainup.png";
const _imports_5 = "/ui/admin/assets/home-main1.png";
const _withScopeId$4 = (n) => (pushScopeId("data-v-2ef760ef"), n = n(), popScopeId(), n);
const _hoisted_1$7 = { class: "main" };
const _hoisted_2$5 = { class: "col" };
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "img" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0$2,
    class: "image"
  })
], -1));
const _hoisted_4$1 = { class: "num" };
const _hoisted_5 = { class: "up" };
const _hoisted_6 = { class: "left" };
const _hoisted_7 = {
  id: "up",
  class: "right"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1,
  class: "image"
}, null, -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("span", null, "0.88%", -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "down" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "left" }, "3.23"),
  /* @__PURE__ */ createBaseVNode("span", { class: "right" }, " / S")
], -1));
const _hoisted_11 = { class: "col" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "img" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    class: "image"
  })
], -1));
const _hoisted_13 = { class: "num" };
const _hoisted_14 = { class: "up" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("span", { class: "left" }, "DOM Ready", -1));
const _hoisted_16 = {
  id: "down",
  class: "right"
};
const _hoisted_17 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_3,
  class: "image"
}, null, -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("span", null, "0.88%", -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "down" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "left" }, "1.56"),
  /* @__PURE__ */ createBaseVNode("span", { class: "right" }, " / S")
], -1));
const _hoisted_20 = { class: "col" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "img" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_4,
    class: "image"
  })
], -1));
const _hoisted_22 = { class: "num" };
const _hoisted_23 = { class: "up" };
const _hoisted_24 = { class: "left" };
const _hoisted_25 = {
  id: "up",
  class: "right"
};
const _hoisted_26 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1,
  class: "image"
}, null, -1));
const _hoisted_27 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("span", null, "0.88%", -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "down" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "left" }, "3.69"),
  /* @__PURE__ */ createBaseVNode("span", { class: "right" }, " / S")
], -1));
const _hoisted_29 = { class: "col" };
const _hoisted_30 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "img" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_5,
    class: "image"
  })
], -1));
const _hoisted_31 = { class: "num" };
const _hoisted_32 = { class: "up" };
const _hoisted_33 = { class: "left" };
const _hoisted_34 = {
  id: "down",
  class: "right"
};
const _hoisted_35 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_3,
  class: "image"
}, null, -1));
const _hoisted_36 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("span", null, "0.88%", -1));
const _hoisted_37 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "down" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "left" }, "0.69"),
  /* @__PURE__ */ createBaseVNode("span", { class: "right" }, " / S")
], -1));
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "main",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(unref(Layout), null, {
          default: withCtx(() => [
            createVNode(unref(Row), {
              flex: true,
              justify: "center"
            }, {
              default: withCtx(() => [
                createVNode(unref(Col), { span: 4 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2$5, [
                      _hoisted_3$2,
                      createBaseVNode("div", _hoisted_4$1, [
                        createBaseVNode("div", _hoisted_5, [
                          createBaseVNode("span", _hoisted_6, toDisplayString(_ctx.$t("home.main.one")), 1),
                          createBaseVNode("span", _hoisted_7, [
                            createTextVNode(toDisplayString(_ctx.$t("home.main.day")) + " ", 1),
                            _hoisted_8,
                            _hoisted_9
                          ])
                        ]),
                        _hoisted_10
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(Col), { span: 4 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_11, [
                      _hoisted_12,
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("div", _hoisted_14, [
                          _hoisted_15,
                          createBaseVNode("span", _hoisted_16, [
                            createTextVNode(toDisplayString(_ctx.$t("home.main.day")) + " ", 1),
                            _hoisted_17,
                            _hoisted_18
                          ])
                        ]),
                        _hoisted_19
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(Col), { span: 4 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_20, [
                      _hoisted_21,
                      createBaseVNode("div", _hoisted_22, [
                        createBaseVNode("div", _hoisted_23, [
                          createBaseVNode("span", _hoisted_24, toDisplayString(_ctx.$t("home.main.up")), 1),
                          createBaseVNode("span", _hoisted_25, [
                            createTextVNode(toDisplayString(_ctx.$t("home.main.day")) + " ", 1),
                            _hoisted_26,
                            _hoisted_27
                          ])
                        ]),
                        _hoisted_28
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(Col), { span: 4 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_29, [
                      _hoisted_30,
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("div", _hoisted_32, [
                          createBaseVNode("span", _hoisted_33, toDisplayString(_ctx.$t("home.main.down")), 1),
                          createBaseVNode("span", _hoisted_34, [
                            createTextVNode(toDisplayString(_ctx.$t("home.main.day")) + " ", 1),
                            _hoisted_35,
                            _hoisted_36
                          ])
                        ]),
                        _hoisted_37
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
        })
      ]);
    };
  }
});
const main_vue_vue_type_style_index_0_scoped_2ef760ef_lang = "";
const main_vue_vue_type_style_index_1_scoped_2ef760ef_lang = "";
const Main = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2ef760ef"]]);
const _imports_0$1 = "data:image/png;base64,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";
const _withScopeId$3 = (n) => (pushScopeId("data-v-f83ab95d"), n = n(), popScopeId(), n);
const _hoisted_1$6 = { class: "curve" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0$1,
  class: "image"
}, null, -1));
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "curve",
  setup(__props) {
    const { t } = useI18n();
    const { currentLocale } = useLocale();
    let echarts = inject("echarts");
    const echartsDom = ref();
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      legend: {
        data: [t("home.main.down"), t("home.curve.play"), t("home.curve.page")],
        top: "10"
      },
      dataZoom: [
        {
          type: "inside",
          start: 10
        },
        {
          type: "slider"
        }
      ],
      xAxis: [
        {
          type: "category",
          data: new Array(20).fill("16:00"),
          axisPointer: {
            type: "shadow"
          },
          axisLabel: {
            // eslint-disable-line
            formatter(value, index2) {
              if (index2 % 2 !== 0) {
                return value;
              }
              return value;
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          min: 0,
          max: 50,
          interval: 5,
          axisLabel: {
            formatter: "{value} s"
          }
        },
        {
          type: "value",
          min: 0,
          max: 30,
          interval: 5,
          axisLabel: {
            formatter: "{value}"
          }
        }
      ],
      series: [
        {
          name: t("home.main.down"),
          type: "bar",
          barWidth: 12,
          itemStyle: {
            color: "#4e85f4",
            barBorderRadius: [5, 5, 0, 0]
          },
          tooltip: {
            valueFormatter(value) {
              return `${value} s`;
            }
          },
          data: [
            22,
            4.9,
            7,
            23.2,
            25.6,
            16.7,
            15.6,
            22.2,
            12.6,
            22,
            6.4,
            33.3,
            22,
            4.9,
            7,
            23.2,
            25.6,
            16.7,
            15.6,
            22.2,
            12.6,
            22,
            6.4,
            33.3,
            22,
            4.9,
            7,
            23.2,
            25.6,
            16.7,
            15.6,
            22.2,
            12.6,
            22,
            6.4,
            33.3
          ]
        },
        {
          name: t("home.curve.play"),
          type: "line",
          smooth: true,
          showSymbol: false,
          yAxisIndex: 1,
          lineStyle: {
            normal: {
              color: "#5f45ff"
            }
          },
          // 区域填充样式
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(163, 156, 211,0.2)"
                },
                {
                  offset: 1,
                  color: "rgba(58,132,255, 0)"
                }
              ],
              global: false
            }
          },
          tooltip: {
            valueFormatter(value) {
              return value;
            }
          },
          data: [
            22,
            4.9,
            7,
            23.2,
            25.6,
            16.7,
            15.6,
            22.2,
            12.6,
            22,
            6.4,
            3.3,
            22,
            4.9,
            7,
            23.2,
            25.6,
            16.7,
            15.6,
            22.2,
            12.6,
            22,
            6.4,
            3.3,
            22,
            4.9,
            7,
            23.2,
            25.6,
            16.7,
            15.6,
            22.2,
            12.6,
            22,
            6.4,
            33.3
          ]
        },
        {
          name: t("home.curve.page"),
          type: "line",
          smooth: true,
          showSymbol: false,
          yAxisIndex: 1,
          lineStyle: {
            normal: {
              color: "#ff9e03"
            }
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(226, 210, 66,0.2)"
                },
                {
                  offset: 1,
                  color: "rgba(58,132,255, 0)"
                }
              ],
              global: false
            }
          },
          tooltip: {
            valueFormatter(value) {
              return value;
            }
          },
          data: [
            22,
            9,
            17,
            27.2,
            15.6,
            26.7,
            25.6,
            22.2,
            12.6,
            22,
            26.4,
            13.3,
            22,
            24.9,
            12,
            23.2,
            25.6,
            26.7,
            25.6,
            22.2,
            22.6,
            22,
            26.4,
            23.3,
            22,
            24,
            27,
            13.2,
            15.6,
            16.7,
            11.6,
            22.2,
            22.6,
            32,
            16.4,
            13.3
          ]
        }
      ]
    };
    onMounted(() => {
      const chartDom = echartsDom.value;
      const myChart = echarts.init(chartDom);
      option && myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      nextTick(() => {
        myChart.resize();
      });
    });
    watch(currentLocale, (newValue, oldValue) => {
      const chartDom = echartsDom.value;
      const myChart = echarts.init(chartDom);
      if (newValue === "zhCN") {
        option.legend.data = ["采样PV", "首屏可见", "页面Onload"];
        option.series[0].name = "采样PV";
        option.series[1].name = "首屏可见";
        option.series[2].name = "页面Onload";
      } else {
        option.legend.data = [
          "Sampling PV",
          "Visible on the first screen",
          "Page Onload"
        ];
        option.series[0].name = "Sampling PV";
        option.series[1].name = "Visible on the first screen";
        option.series[2].name = "Page Onload";
      }
      myChart.setOption(option);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        _hoisted_2$4,
        createBaseVNode("h3", null, toDisplayString(_ctx.$t("home.curve.trend")), 1),
        createBaseVNode("div", {
          id: "line",
          ref_key: "echartsDom",
          ref: echartsDom
        }, null, 512)
      ]);
    };
  }
});
const curve_vue_vue_type_style_index_0_scoped_f83ab95d_lang = "";
const Curve = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f83ab95d"]]);
const _imports_0 = "data:image/png;base64,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";
const _withScopeId$2 = (n) => (pushScopeId("data-v-282ced62"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "falls" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  class: "image"
}, null, -1));
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "falls",
  setup(__props) {
    const { t } = useI18n();
    const { currentLocale } = useLocale();
    let echarts = inject("echarts");
    const echartsDom = ref();
    const list = [
      {
        label: "Dns",
        value: "Dns"
      },
      {
        label: t("home.falls.tcp"),
        value: "TCP"
      },
      {
        label: t("home.falls.ssl"),
        value: "SSL"
      },
      {
        label: "Dns",
        value: "Dns"
      },
      {
        label: t("home.falls.tcp"),
        value: "TCP"
      },
      {
        label: t("home.falls.ssl"),
        value: "SSL"
      },
      {
        label: "Dns",
        value: "Dns"
      },
      {
        label: t("home.falls.tcp"),
        value: "TCP"
      },
      {
        label: t("home.falls.ssl"),
        value: "SSL"
      },
      {
        label: "Dns",
        value: "Dns"
      },
      {
        label: t("home.falls.tcp"),
        value: "TCP"
      },
      {
        label: t("home.falls.ssl"),
        value: "SSL"
      }
    ];
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        },
        formatter(params) {
          let tar;
          if (params[1].value !== "-") {
            tar = params[1];
          } else {
            tar = params[0];
          }
          return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value",
        show: false
      },
      yAxis: {
        type: "category",
        axisLabel: {
          formatter(value, index2) {
            var _a, _b;
            return (
              // eslint-disable-next-line prefer-template
              ((_a = list[index2]) == null ? void 0 : _a.label) + "  " + ((_b = list[index2]) == null ? void 0 : _b.value) + "  " + value + "s"
            );
          },
          margin: 20
        }
      },
      series: [
        {
          name: "Placeholder",
          type: "bar",
          stack: "Total",
          itemStyle: {
            borderColor: "transparent",
            color: "transparent"
          },
          emphasis: {
            itemStyle: {
              borderColor: "transparent",
              color: "transparent"
            }
          },
          data: [0, 900, 405, 250, 136, 236, 651, 169, 156, 195, 192]
        },
        {
          name: "Income",
          type: "bar",
          stack: "Total",
          itemStyle: {
            color: "#4e85f4",
            barBorderRadius: [2, 2, 2, 2]
          },
          label: {
            show: false
          },
          data: [500, "-", 593, "-", "-", 135, 178, 286, "-", "-", "-"]
        },
        {
          name: "Expenses",
          type: "bar",
          stack: "Total",
          itemStyle: {
            color: "#5f45ff",
            barBorderRadius: [5, 5, 5, 5]
          },
          label: {
            show: false
          },
          data: ["-", "-", "-", 408, 154, "-", "-", "-", 119, 361, "-"]
        },
        {
          name: "test",
          type: "bar",
          stack: "Total",
          itemStyle: {
            color: "#e2b525 ",
            barBorderRadius: [5, 5, 5, 5]
          },
          label: {
            show: false
          },
          data: ["-", 99, "-", "-", "-", "-", "-", "-", "-", "-", 32]
        }
      ]
    };
    onMounted(() => {
      const chartDom = echartsDom.value;
      const myChart = echarts.init(chartDom);
      option && myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      nextTick(() => {
        myChart.resize();
      });
    });
    watch(currentLocale, (newValue, oldValue) => {
      const chartDom = echartsDom.value;
      const myChart = echarts.init(chartDom);
      myChart.setOption(option);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _hoisted_2$3,
        createBaseVNode("h3", null, toDisplayString(_ctx.$t("home.falls.line")), 1),
        createBaseVNode("div", {
          id: "flow",
          ref_key: "echartsDom",
          ref: echartsDom
        }, null, 512)
      ]);
    };
  }
});
const falls_vue_vue_type_style_index_0_scoped_282ced62_lang = "";
const Falls = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-282ced62"]]);
const _hoisted_1$4 = { class: "container" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "roundtable",
  setup(__props) {
    const { t } = useI18n();
    const pagerConfig = reactive({
      component: Pager,
      attrs: {
        currentPage: 1,
        pageSize: 10,
        pageSizes: [5, 10],
        total: 0,
        layout: "total, prev, pager, next, jumper, sizes"
      }
    });
    async function fetchData(params = {
      pageIndex: 1,
      pageSize: 10
    }) {
      let offset = (params.pageIndex - 1) * params.pageSize;
      const total = tableData.length;
      return {
        result: tableData.slice(offset, offset + params.pageSize),
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
    const tableData = [
      {
        id: "1",
        space: "4G",
        pv: "1767(97.77%)",
        play: "0.44s",
        page: "2.7s"
      },
      {
        id: "2",
        space: "2G",
        pv: "22(1.77%)",
        play: "0.43s",
        page: "1.1s"
      },
      {
        id: "3",
        space: t("home.round.unknow"),
        pv: "32(1.77%)",
        play: "0.44s",
        page: "1.7s"
      },
      {
        id: "4",
        space: t("home.round.unknow"),
        pv: "32(1.77%)",
        play: "0.44s",
        page: "1.7s"
      },
      {
        id: "5",
        space: "3G",
        pv: "16(0.88%)",
        play: "0.66s",
        page: "3.12s"
      },
      {
        id: "6",
        space: "5G",
        pv: "1765(97.35%)",
        play: "0.44s",
        page: "1.7s"
      },
      {
        id: "7",
        space: "2G",
        pv: "32(1.77%)",
        play: "0.65s",
        page: "2.92s"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(unref(Grid), {
          ref: "grid",
          "fetch-data": fetchDataOption,
          pager: pagerConfig
        }, {
          default: withCtx(() => [
            createVNode(unref(Column), {
              field: "id",
              title: _ctx.$t("home.roundtable.index"),
              width: "100"
            }, null, 8, ["title"]),
            createVNode(unref(Column), {
              field: "space",
              title: _ctx.$t("home.roundtable.space"),
              width: "200"
            }, null, 8, ["title"]),
            createVNode(unref(Column), {
              field: "pv",
              title: _ctx.$t("home.roundtable.pv"),
              width: "220"
            }, null, 8, ["title"]),
            createVNode(unref(Column), {
              field: "play",
              title: _ctx.$t("home.roundtable.play"),
              width: "200"
            }, null, 8, ["title"]),
            createVNode(unref(Column), {
              field: "page",
              title: _ctx.$t("home.roundtable.page")
            }, null, 8, ["title"])
          ]),
          _: 1
        }, 8, ["fetch-data", "pager"])
      ]);
    };
  }
});
const roundtable_vue_vue_type_style_index_0_scoped_83d55124_lang = "";
const RoundTable = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-83d55124"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-efe9211a"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "round" };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0$1,
  class: "image"
}, null, -1));
const _hoisted_3$1 = { class: "round-from" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "round",
  setup(__props) {
    useI18n();
    const { currentLocale } = useLocale();
    let echarts = inject("echarts");
    const echartsDom = ref();
    let option = {
      tooltip: {
        trigger: "item"
      },
      legend: {
        orient: "vertical",
        y: "center",
        x: "right"
      },
      series: [
        {
          type: "pie",
          selectedMode: "single",
          radius: ["60%", "80%"],
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2
          },
          avoidLabelOverlap: true,
          label: {
            show: false,
            position: "center"
          },
          width: "100%",
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 300, name: "5G" },
            { value: 1048, name: "4G" },
            { value: 735, name: "unknow" },
            { value: 580, name: "3G" }
          ]
        }
      ]
    };
    onMounted(() => {
      const chartDom = echartsDom.value;
      const myChart = echarts.init(chartDom);
      option && myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      nextTick(() => {
        myChart.resize();
      });
    });
    watch(currentLocale, (newValue, oldValue) => {
      const chartDom = echartsDom.value;
      const myChart = echarts.init(chartDom);
      myChart.setOption(option);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", null, [
          _hoisted_2$2,
          createBaseVNode("h3", null, toDisplayString(_ctx.$t("home.round.title")), 1),
          createBaseVNode("div", {
            id: "circled",
            ref_key: "echartsDom",
            ref: echartsDom
          }, null, 512)
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createVNode(RoundTable)
        ])
      ]);
    };
  }
});
const round_vue_vue_type_style_index_0_scoped_efe9211a_lang = "";
const Round = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-efe9211a"]]);
const _hoisted_1$2 = { class: "container" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "regiontable",
  setup(__props) {
    useI18n();
    const tableData = [
      {
        id: "1",
        space: "上海",
        pv: "1767(97.77%)",
        page: "2.7s"
      },
      {
        id: "2",
        space: "香港",
        pv: "22(1.77%)",
        page: "1.1s"
      },
      {
        id: "3",
        space: "北京",
        pv: "32(1.77%)",
        page: "1.7s"
      },
      {
        id: "4",
        space: "广东",
        pv: "32(1.77%)",
        page: "1.7s"
      },
      {
        id: "5",
        space: "江苏",
        pv: "16(0.88%)",
        page: "3.12s"
      },
      {
        id: "6",
        space: "福建",
        pv: "1765(97.35%)",
        page: "1.7s"
      },
      {
        id: "7",
        space: "四川",
        pv: "32(1.77%)",
        page: "2.92s"
      }
    ];
    const pagerConfig = reactive({
      component: Pager,
      attrs: {
        currentPage: 1,
        pageSize: 10,
        pageSizes: [5, 10],
        total: 0,
        layout: "total, prev, pager, next, jumper, sizes"
      }
    });
    const fetchDataOption = reactive({
      api: ({ page }) => {
        const { currentPage, pageSize } = page;
        return fetchData({
          pageIndex: currentPage,
          pageSize
        });
      }
    });
    async function fetchData(params = {
      pageIndex: 1,
      pageSize: 10
    }) {
      let offset = (params.pageIndex - 1) * params.pageSize;
      const total = tableData.length;
      return {
        result: tableData.slice(offset, offset + params.pageSize),
        page: { total }
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(Grid), {
          ref: "grid",
          "fetch-data": fetchDataOption,
          pager: pagerConfig
        }, {
          default: withCtx(() => [
            createVNode(unref(Column), {
              field: "id",
              title: _ctx.$t("home.roundtable.index"),
              width: "200"
            }, null, 8, ["title"]),
            createVNode(unref(Column), {
              field: "space",
              title: _ctx.$t("home.region.title"),
              width: "260"
            }, null, 8, ["title"]),
            createVNode(unref(Column), {
              field: "pv",
              title: _ctx.$t("home.roundtable.pv"),
              width: "260"
            }, null, 8, ["title"]),
            createVNode(unref(Column), {
              field: "page",
              title: _ctx.$t("home.roundtable.page")
            }, null, 8, ["title"])
          ]),
          _: 1
        }, 8, ["fetch-data", "pager"])
      ]);
    };
  }
});
const regiontable_vue_vue_type_style_index_0_scoped_6c846ff9_lang = "";
const RegionTable = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6c846ff9"]]);
const _withScopeId = (n) => (pushScopeId("data-v-5c348cc6"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "region" };
const _hoisted_2$1 = { class: "region-title" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0$1,
  class: "image"
}, null, -1));
const _hoisted_4 = { class: "region-from" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "region",
  setup(__props) {
    const data = [
      { name: "北京", value: 35e4 },
      { name: "天津", value: 12e4 },
      { name: "上海", value: 3e5 },
      { name: "重庆", value: 92e3 },
      { name: "河北", value: 25e3 },
      { name: "河南", value: 2e4 },
      { name: "云南", value: 500 },
      { name: "辽宁", value: 3050 },
      { name: "黑龙江", value: 8e4 },
      { name: "湖南", value: 2e3 },
      { name: "安徽", value: 24580 },
      { name: "山东", value: 40629 },
      { name: "新疆", value: 36981 },
      { name: "江苏", value: 13569 },
      { name: "浙江", value: 24956 },
      { name: "江西", value: 15194 },
      { name: "湖北", value: 41398 },
      { name: "广西", value: 41150 },
      { name: "甘肃", value: 17630 },
      { name: "山西", value: 27370 },
      { name: "内蒙古", value: 27370 },
      { name: "陕西", value: 97208 },
      { name: "吉林", value: 88290 },
      { name: "福建", value: 19978 },
      { name: "贵州", value: 94485 },
      { name: "广东", value: 89426 },
      { name: "青海", value: 35484 },
      { name: "西藏", value: 97413 },
      { name: "四川", value: 54161 },
      { name: "宁夏", value: 56515 },
      { name: "海南", value: 54871 },
      { name: "台湾", value: 48544 },
      { name: "香港", value: 49474 },
      { name: "澳门", value: 34594 }
    ];
    let echarts = inject("echarts");
    const echartsDom = ref();
    let options = {
      tooltip: {
        trigger: "item"
      },
      visualMap: {
        show: true,
        top: "-5px",
        x: "left",
        y: "bottom",
        realtime: false,
        splitList: [
          { start: 5e3, end: 5e5 },
          { start: 4e3, end: 5e3 },
          { start: 3e3, end: 4e3 },
          { start: 2e3, end: 3e3 },
          { start: 1e3, end: 2e3 },
          { start: 0, end: 1e3 }
        ],
        color: ["#9feaa5", "#5475f5", "#85daef", "#74e2ca", "#e6ac53", "#9fb5ea"]
      },
      series: [
        {
          name: "china",
          type: "map",
          mapType: "china",
          roam: false,
          zoom: 1.2,
          top: "30px",
          itemStyle: {
            normal: {
              areaColor: "#000",
              borderColor: "skyblue",
              borderWidth: 1,
              shadowColor: "#ccc",
              shadowBlur: 30,
              opacity: 1
            }
          },
          label: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 5
              }
            }
          },
          data
        }
      ]
    };
    onMounted(() => {
      const chartDom = echartsDom.value;
      const myChart = echarts.init(chartDom);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      options && myChart.setOption(options);
      nextTick(() => {
        myChart.resize();
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_2$1, [
            _hoisted_3,
            createBaseVNode("h3", null, toDisplayString(_ctx.$t("home.region.title")), 1)
          ]),
          createBaseVNode("div", {
            id: "earth",
            ref_key: "echartsDom",
            ref: echartsDom
          }, null, 512)
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(RegionTable)
        ])
      ]);
    };
  }
});
const region_vue_vue_type_style_index_0_scoped_5c348cc6_lang = "";
const Region = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5c348cc6"]]);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "contain" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Breadcrumb = resolveComponent("Breadcrumb");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_Breadcrumb, { items: ["menu.board", "menu.home"] }),
        createBaseVNode("div", _hoisted_2, [
          createVNode(Main),
          createVNode(Curve),
          createVNode(Falls),
          createVNode(Round),
          createVNode(Region)
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_9655f689_lang = "";
const index_vue_vue_type_style_index_1_scoped_9655f689_lang = "";
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9655f689"]]);
export {
  index as default
};
