import { s as svg, D as DATEPICKER, E as isDateObject, G as isDate, J as formatDate$1, K as getDateWithNewTimezone, M as getLocalTimezone, N as getStrTimezone, O as parseDate, P as vue_popper_default, t as __spreadProps, v as __spreadValues, Q as extend, S as isNumber, U as toDate, V as getWeekNumber, W as prevDate, X as nextDate, Y as isDate$1, Z as clearMilliseconds, a0 as clearTime, a1 as prevMonth, a2 as nextMonth, a3 as prevYear, a4 as nextYear, a5 as modifyTime, a6 as modifyWithTimeString, a7 as modifyDate, a8 as changeYearMonthAndClampDate, o as on, f as off, a9 as timeWithinRange, aa as debounce_default, ab as fillChar, ac as extractTimeFormat, ad as extractDateFormat, ae as DATE, af as limitTimeRange, ag as getRangeHours, ah as getRangeMinutes, ai as once, d as defineComponent, aj as directive, p as props, a as setup, b as $prefix, c as $setup, $ as $props$1, B as Button, ak as getFirstDayOfMonth, al as getDayCountOfMonth, am as getStartDateOfMonth, an as hasClass, ao as range, ap as getDayCountOfYear, aq as clickoutside_default, I as Input, z as index$m, ar as language, as as format$1, at as ActionSheet, au as t, av as Tooltip, j as index$n } from "./index.js";
import { _ as _sfc_main$p, s as scroll_into_view_default, R as RecycleScroller, F as FilterBox, d as deepClone, g as getValue, a as adjustIndex, o as onTouchmove, b as onTouchstart, c as getOptionText, e as onTransitionEnd, f as computedBaseOffset, h as computedWrapperStyle, i as setValue$1, j as onTouchend, k as setOptions, m as momentum$1, l as setIndex, n as onClickItem, p as mountedHandler, q as beforeUnmountHandler } from "./index31.js";
import { i as index$h, a as index$i } from "./chevron-up.js";
import { u as openBlock, v as createElementBlock, x as createStaticVNode, w as createBaseVNode, k as resolveComponent, U as resolveDirective, L as Fragment, l as createVNode, H as withCtx, M as renderList, A as normalizeClass, E as toDisplayString, I as withDirectives, K as vShow, z as createCommentVNode, y as createBlock, T as Transition, J as createTextVNode, O as withModifiers, D as renderSlot, B as resolveDynamicComponent, G as normalizeStyle, a9 as createSlots, F as mergeProps } from "./vue.js";
import { d as Popup, c as index$j, i as index$k, b as index$l } from "./index28.js";
var _hoisted_1$q = {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$j = /* @__PURE__ */ createStaticVNode('<defs><filter x="-50%" y="-53.6%" width="200%" height="205.4%" filterUnits="objectBoundingBox" id="calendar_svg__a"><feOffset dx="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.145098039 0 0 0 0 0.168627451 0 0 0 0 0.22745098 0 0 0 0.08 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><g filter="url(#calendar_svg__a)" transform="translate(1 1.474)"><path fill="currentColor" fill-rule="nonzero" d="M3 4.526h2v2H3zM6 4.526h2v2H6zM9 4.526h2v2H9zM3 8.526h2v2H3zM6 8.526h2v2H6zM9 8.526h2v2H9z"></path><rect stroke="currentColor" y=".526" width="14" height="13" rx="2"></rect><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M4.474 0v2M9.474 0v2"></path></g></g>', 2);
var _hoisted_4$d = [_hoisted_2$j];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, [].concat(_hoisted_4$d));
}
var Calendar = {
  render: render$2
};
var index$g = function index2() {
  return svg({
    name: "IconCalendar",
    component: Calendar
  })();
};
var _hoisted_1$p = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_2$i = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M670.344 369.644c-6.248-6.249-16.371-6.249-22.62 0L511.992 505.376 376.258 369.644c-6.247-6.249-16.386-6.249-22.62 0-6.248 6.247-6.248 16.37 0 22.619l135.733 135.732L353.64 663.73c-6.249 6.248-6.249 16.37 0 22.619 6.233 6.248 16.37 6.248 22.619 0l135.733-135.734 135.734 135.734c6.248 6.248 16.37 6.248 22.619 0s6.248-16.371 0-22.62L534.61 527.996l135.734-135.732c6.248-6.248 6.248-16.372-.001-22.62zM511.99 128.092c-212.026 0-383.906 171.881-383.906 383.907 0 212.027 171.88 383.908 383.906 383.908 212.027 0 383.923-171.881 383.923-383.908 0-212.026-171.896-383.907-383.923-383.907zm0 735.823c-194.36 0-351.914-157.556-351.914-351.915s157.556-351.914 351.914-351.914c194.345 0 351.915 157.555 351.915 351.914s-157.57 351.915-351.915 351.915z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$h = [_hoisted_2$i];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, [].concat(_hoisted_3$h));
}
var CloseCircle = {
  render: render$1
};
var index$f = function index22() {
  return svg({
    name: "IconCloseCircle",
    component: CloseCircle
  })();
};
var _hoisted_1$o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "xml:space": "preserve"
};
var _hoisted_2$h = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    class: "time_svg__st0",
    d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm7.1 19.1c-.9.9-2 1.6-3.2 2.1-1.2.5-2.5.8-3.9.8s-2.7-.3-3.9-.8c-1.2-.5-2.3-1.2-3.2-2.1-.9-.9-1.6-2-2.1-3.2-.5-1.2-.8-2.5-.8-3.9s.3-2.7.8-3.9C3.3 6.9 4 5.8 4.9 4.9c.9-.9 2-1.6 3.2-2.1C9.3 2.3 10.6 2 12 2s2.7.3 3.9.8c1.2.5 2.3 1.2 3.2 2.1.9.9 1.6 2 2.1 3.2.5 1.2.8 2.5.8 3.9s-.3 2.7-.8 3.9c-.5 1.2-1.2 2.3-2.1 3.2zM17 12h-4V6.1c0-.5-.5-1.1-1-1.1h-.2c-.4 0-.8.6-.8 1.1v6.1c0 1 .1 1.9 1 1.9h5c.5 0 1.1-.5 1.1-1S17.5 12 17 12z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3$g = [_hoisted_2$h];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, [].concat(_hoisted_3$g));
}
var Time$1 = {
  render
};
var index$e = function index23() {
  return svg({
    name: "IconTime",
    component: Time$1
  })();
};
var timezone_default = {
  "enUS": [
    {
      name: "(UTC-12:00)International Date Line West",
      code: "001-12",
      offset: -12,
      tz: "Etc/GMT+12"
    },
    {
      name: "(UTC+13:00)Samoa",
      code: "002-11",
      offset: 14,
      tz: "Pacific/Apia"
    },
    {
      name: "(UTC-11:00)Coordinated Universal Time-11",
      code: "003-11",
      offset: -11,
      tz: "Etc/GMT+11"
    },
    {
      name: "(UTC-10:00)Hawaii",
      code: "004-10",
      offset: -10,
      tz: "Pacific/Honolulu"
    },
    {
      name: "(UTC-09:00)Alaska",
      code: "005-9",
      offset: -9,
      tz: "America/Anchorage"
    },
    {
      name: "(UTC-08:00)Pacific Time (US & Canada)",
      code: "006-8",
      offset: -8,
      tz: "America/Los_Angeles"
    },
    {
      name: "(UTC-08:00)Baja California",
      code: "007-8",
      offset: -8,
      tz: "America/Santa_Isabel"
    },
    {
      name: "(UTC-07:00)Chihuahua, La Paz, Mazatlan",
      code: "008-7",
      offset: -7,
      tz: "America/Chihuahua"
    },
    {
      name: "(UTC-07:00)Mountain Time (US & Canada)",
      code: "009-7",
      offset: -7,
      tz: "America/Denver"
    },
    {
      name: "(UTC-07:00)Arizona",
      code: "010-7",
      offset: -7,
      tz: "America/Phoenix"
    },
    {
      name: "(UTC-06:00)Guadalajara, Mexico City, Monterey",
      code: "011-6",
      offset: -6,
      tz: "America/Mexico_City"
    },
    {
      name: "(UTC-06:00)Saskatchewan",
      code: "012-6",
      offset: -6,
      tz: "America/Regina"
    },
    {
      name: "(UTC-06:00)Central Time (US & Canada)",
      code: "013-6",
      offset: -6,
      tz: "America/Chicago"
    },
    {
      name: "(UTC-06:00)Central America",
      code: "014-6",
      offset: -6,
      tz: "America/Guatemala"
    },
    {
      name: "(UTC-05:00)Bogota, Lima, Quito",
      code: "015-5",
      offset: -5,
      tz: "America/Bogota"
    },
    {
      name: "(UTC-05:00)Eastern Time (US & Canada)",
      code: "016-5",
      offset: -5,
      tz: "America/New_York"
    },
    {
      name: "(UTC-05:00)Indiana(East)",
      code: "017-5",
      offset: -5,
      tz: "America/Indiana/Indianapolis"
    },
    {
      name: "(UTC-04:30)Caracas",
      code: "018-4.5",
      offset: -4,
      tz: "America/Caracas"
    },
    {
      name: "(UTC-04:00)Atlantic Time (Canada)",
      code: "019-4",
      offset: -4,
      tz: "America/Halifax"
    },
    {
      name: "(UTC-04:00)Cuiaba",
      code: "020-4",
      offset: -4,
      tz: "America/Cuiaba"
    },
    {
      name: "(UTC-04:00)Georgetown, La Paz, Manaus, San Juan",
      code: "021-4",
      offset: -4,
      tz: "America/La_Paz"
    },
    {
      name: "(UTC-04:00)Santiago",
      code: "022-4",
      offset: -3,
      tz: "America/Santiago"
    },
    {
      name: "(UTC-04:00)Asuncion",
      code: "023-4",
      offset: -3,
      tz: "America/Asuncion"
    },
    {
      name: "(UTC-03:30)Newfoundland",
      code: "024-3.5",
      offset: -3.5,
      tz: "America/St_Johns"
    },
    {
      name: "(UTC-03:00)Brasilia",
      code: "025-3",
      offset: -3,
      tz: "America/Sao_Paulo"
    },
    {
      name: "(UTC-03:00)Buenos Aires",
      code: "026-3",
      offset: -3,
      tz: "America/Argentina/Buenos_Aires"
    },
    {
      name: "(UTC-03:00)Greenland",
      code: "027-3",
      offset: -3,
      tz: "America/Godthab"
    },
    {
      name: "(UTC-03:00)Cayenne, Fortaleza",
      code: "028-3",
      offset: -3,
      tz: "America/Cayenne"
    },
    {
      name: "(UTC-03:00)Montevideo",
      code: "029-3",
      offset: -3,
      tz: "America/Montevideo"
    },
    {
      name: "(UTC-11:00)Coordinated Universal Time-11",
      code: "030-2",
      offset: -11,
      tz: "Etc/GMT+11"
    },
    {
      name: "(UTC-02:00)Mid-Atlantic",
      code: "031-2",
      offset: -4,
      tz: "America/Halifax"
    },
    {
      name: "(UTC-01:00)Cape Verde Is",
      code: "032-1",
      offset: -1,
      tz: "Atlantic/Cape_Verde"
    },
    {
      name: "(UTC-01:00)Azores",
      code: "033-1",
      offset: -1,
      tz: "Atlantic/Azores"
    },
    {
      name: "(UTC)Dublin, Edinburgh, Lisbon, London",
      code: "034-0",
      offset: 0,
      tz: "Europe/London"
    },
    {
      name: "(UTC)Casablanca",
      code: "035-0",
      offset: 1,
      tz: "Africa/Casablanca"
    },
    {
      name: "(UTC)Monrovia, Reykjavik",
      code: "036-0",
      offset: 0,
      tz: "Atlantic/Reykjavik"
    },
    {
      name: "(UTC)Coordinated Universal Time",
      code: "037-0",
      offset: 0,
      tz: "Etc/GMT"
    },
    {
      name: "(UTC+01:00)Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
      code: "038+1",
      offset: 1,
      tz: "Europe/Berlin"
    },
    {
      name: "(UTC+01:00)Belgrade, Bratislava, Budapest, Ljubljana, Prague",
      code: "039+1",
      offset: 1,
      tz: "Europe/Budapest"
    },
    {
      name: "(UTC+01:00)Brussels, Copenhagen, Madrid, Paris",
      code: "040+1",
      offset: 1,
      tz: "Europe/Paris"
    },
    {
      name: "(UTC+01:00)Sarajevo, Skopje, Warsaw, Zagreb",
      code: "041+1",
      offset: 1,
      tz: "Europe/Warsaw"
    },
    {
      name: "(UTC+01:00)Windhoek",
      code: "042+1",
      offset: 2,
      tz: "Africa/Windhoek"
    },
    {
      name: "(UTC+01:00)West Central Africa",
      code: "043+1",
      offset: 1,
      tz: "Africa/Lagos"
    },
    {
      name: "(UTC+02:00)Amman",
      code: "044+2",
      offset: 2,
      tz: "Asia/Amman"
    },
    {
      name: "(UTC+02:00)Beirut",
      code: "045+2",
      offset: 2,
      tz: "Asia/Beirut"
    },
    {
      name: "(UTC+02:00)Damascus",
      code: "046+2",
      offset: 2,
      tz: "Asia/Damascus"
    },
    {
      name: "(UTC+02:00)Harare, Pretoria",
      code: "047+2",
      offset: 2,
      tz: "Africa/Johannesburg"
    },
    {
      name: "(UTC+02:00)Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius",
      code: "048+2",
      offset: 2,
      tz: "Europe/Kiev"
    },
    {
      name: "(UTC+02:00)Cairo",
      code: "049+2",
      offset: 2,
      tz: "Africa/Cairo"
    },
    {
      name: "(UTC+02:00)Minsk",
      code: "050+2",
      offset: 3,
      tz: "Europe/Minsk"
    },
    {
      name: "(UTC+02:00)Athens, Bucharest, Istanbul",
      code: "051+2",
      offset: 3,
      tz: "Europe/Istanbul"
    },
    {
      name: "(UTC+02:00)Jerusalem",
      code: "052+2",
      offset: 2,
      tz: "Asia/Jerusalem"
    },
    {
      name: "(UTC+03:00)Baghdad",
      code: "053+3",
      offset: 3,
      tz: "Asia/Baghdad"
    },
    {
      name: "(UTC+03:00)Kuwait, Riyadh",
      code: "054+3",
      offset: 3,
      tz: "Asia/Riyadh"
    },
    {
      name: "(UTC+03:00)Moscow, St. Petersburg, Volgograd",
      code: "055+3",
      offset: 3,
      tz: "Europe/Moscow"
    },
    {
      name: "(UTC+03:00)Nairobi",
      code: "056+3",
      offset: 3,
      tz: "Africa/Nairobi"
    },
    {
      name: "(UTC+03:30)Teheran",
      code: "057+3.5",
      offset: 3.5,
      tz: "Asia/Tehran"
    },
    {
      name: "(UTC+04:00)Abu Dhabi, Muscat",
      code: "058+4",
      offset: 4,
      tz: "Asia/Dubai"
    },
    {
      name: "(UTC+04:00)Yerevan",
      code: "059+4",
      offset: 4,
      tz: "Asia/Yerevan"
    },
    {
      name: "(UTC+04:00)Baku",
      code: "060+4",
      offset: 4,
      tz: "Asia/Baku"
    },
    {
      name: "(UTC+04:00)Tbilisi",
      code: "061+4",
      offset: 4,
      tz: "Asia/Tbilisi"
    },
    {
      name: "(UTC+04:00)Port Louis",
      code: "062+4",
      offset: 4,
      tz: "Indian/Mauritius"
    },
    {
      name: "(UTC+04:30)Kabul",
      code: "063+4.5",
      offset: 4.5,
      tz: "Asia/Kabul"
    },
    {
      name: "(UTC+05:00)Tashkent",
      code: "064+5",
      offset: 5,
      tz: "Asia/Tashkent"
    },
    {
      name: "(UTC+05:00)Yekaterinburg",
      code: "065+5",
      offset: 5,
      tz: "Asia/Yekaterinburg"
    },
    {
      name: "(UTC+05:00)Islamabad, Karachi",
      code: "066+5",
      offset: 5,
      tz: "Asia/Karachi"
    },
    {
      name: "(UTC+05:30)Chennai, Kolkata, Mumbai, New Delhi",
      code: "067+5.5",
      offset: 5.5,
      tz: "Asia/Kolkata"
    },
    {
      name: "(UTC+05:30)Sri Jayawardenepura",
      code: "068+5.5",
      offset: 5.5,
      tz: "Asia/Colombo"
    },
    {
      name: "(UTC+05:45)Katmandu",
      code: "069+5.75",
      offset: 5.75,
      tz: "Asia/Kathmandu"
    },
    {
      name: "(UTC+06:00)Astana",
      code: "070+6",
      offset: 6,
      tz: "Asia/Almaty"
    },
    {
      name: "(UTC+06:00)Dhaka",
      code: "071+6",
      offset: 6,
      tz: "Asia/Dhaka"
    },
    {
      name: "(UTC+07:00)Novosibirsk",
      code: "072+6",
      offset: 7,
      tz: "Asia/Novosibirsk"
    },
    {
      name: "(UTC+06:30)Yangon(Rangoon)",
      code: "073+6.5",
      offset: 6.5,
      tz: "Asia/Yangon"
    },
    {
      name: "(UTC+07:00)Krasnoyarsk",
      code: "074+7",
      offset: 7,
      tz: "Asia/Krasnoyarsk"
    },
    {
      name: "(UTC+07:00)Bangkok, Hanoi, Jakarta",
      code: "075+7",
      offset: 7,
      tz: "Asia/Bangkok"
    },
    {
      name: "(UTC+08:00)Beijing, Chongqing, Hong Kong, Urumqi",
      code: "076+8",
      offset: 8,
      tz: "Asia/Shanghai"
    },
    {
      name: "(UTC+08:00)Kuala Lumpur, Singapore",
      code: "077+8",
      offset: 8,
      tz: "Asia/Singapore"
    },
    {
      name: "(UTC+08:00)Perth",
      code: "078+8",
      offset: 8,
      tz: "Australia/Perth"
    },
    {
      name: "(UTC+08:00)Taipei",
      code: "079+8",
      offset: 8,
      tz: "Asia/Taipei"
    },
    {
      name: "(UTC+08:00)Ulaanbaatar",
      code: "080+8",
      offset: 8,
      tz: "Asia/Ulaanbaatar"
    },
    {
      name: "(UTC+08:00)Irkutsk",
      code: "081+8",
      offset: 8,
      tz: "Asia/Irkutsk"
    },
    {
      name: "(UTC+09:00)Osaka, Sapporo, Tokyo",
      code: "082+9",
      offset: 9,
      tz: "Asia/Tokyo"
    },
    {
      name: "(UTC+09:00)Seoul",
      code: "083+9",
      offset: 9,
      tz: "Asia/Seoul"
    },
    {
      name: "(UTC+09:00)Yakutsk",
      code: "084+9",
      offset: 9,
      tz: "Asia/Yakutsk"
    },
    {
      name: "(UTC+09:30)Adelaide",
      code: "085+9.5",
      offset: 10.5,
      tz: "Australia/Adelaide"
    },
    {
      name: "(UTC+09:30)Darwin",
      code: "086+9.5",
      offset: 9.5,
      tz: "Australia/Darwin"
    },
    {
      name: "(UTC+10:00)Brisbane",
      code: "087+10",
      offset: 10,
      tz: "Australia/Brisbane"
    },
    {
      name: "(UTC+10:00)Vladivostok",
      code: "088+10",
      offset: 10,
      tz: "Asia/Vladivostok"
    },
    {
      name: "(UTC+10:00)Guam, Port Moresby",
      code: "089+10",
      offset: 10,
      tz: "Pacific/Port_Moresby"
    },
    {
      name: "(UTC+10:00)Hobart",
      code: "090+10",
      offset: 11,
      tz: "Australia/Hobart"
    },
    {
      name: "(UTC+10:00)Canberra, Melbourne, Sydney",
      code: "091+10",
      offset: 11,
      tz: "Australia/Sydney"
    },
    {
      name: "(UTC+11:00)Magadan",
      code: "092+11",
      offset: 11,
      tz: "Asia/Magadan"
    },
    {
      name: "(UTC+11:00)Solomon Is, New Caledonia",
      code: "093+11",
      offset: 11,
      tz: "Pacific/Guadalcanal"
    },
    {
      name: "(UTC+12:00)Auckland, Wellington",
      code: "094+12",
      offset: 13,
      tz: "Pacific/Auckland"
    },
    {
      name: "(UTC+12:00)Fiji",
      code: "095+12",
      offset: 13,
      tz: "Pacific/Fiji"
    },
    {
      name: "(UTC+12:00)Coordinated Universal Time+12",
      code: "096+12",
      offset: 12,
      tz: "Etc/GMT-12"
    },
    {
      name: "(UTC+13:00)Nuku`alofa",
      code: "097+13",
      offset: 13,
      tz: "Pacific/Tongatapu"
    }
  ],
  "zhCN": [
    {
      name: "(UTC-12:00)国际日期变更线西",
      code: "001-12",
      offset: -12,
      tz: "Etc/GMT+12"
    },
    {
      name: "(UTC+13:00) 萨摩亚群岛",
      code: "002-11",
      offset: 14,
      tz: "Pacific/Apia"
    },
    {
      name: "(UTC-11:00)协调世界时-11",
      code: "003-11",
      offset: -11,
      tz: "Etc/GMT+11"
    },
    {
      name: "(UTC-10:00)夏威夷",
      code: "004-10",
      offset: -10,
      tz: "Pacific/Honolulu"
    },
    {
      name: "(UTC-09:00)阿拉斯加",
      code: "005-9",
      offset: -9,
      tz: "America/Anchorage"
    },
    {
      name: "(UTC-08:00)太平洋时间(美国和加拿大)",
      code: "006-8",
      offset: -8,
      tz: "America/Los_Angeles"
    },
    {
      name: "(UTC-08:00)下加利福尼亚州",
      code: "007-8",
      offset: -8,
      tz: "America/Santa_Isabel"
    },
    {
      name: "(UTC-07:00)奇瓦瓦，拉巴斯，马萨特兰",
      code: "008-7",
      offset: -7,
      tz: "America/Chihuahua"
    },
    {
      name: "(UTC-07:00)山地时间(美国和加拿大)",
      code: "009-7",
      offset: -7,
      tz: "America/Denver"
    },
    {
      name: "(UTC-07:00)亚利桑那",
      code: "010-7",
      offset: -7,
      tz: "America/Phoenix"
    },
    {
      name: "(UTC-06:00)瓜达拉哈拉，墨西哥城，蒙特雷",
      code: "011-6",
      offset: -6,
      tz: "America/Mexico_City"
    },
    {
      name: "(UTC-06:00)萨斯喀彻温",
      code: "012-6",
      offset: -6,
      tz: "America/Regina"
    },
    {
      name: "(UTC-06:00)中部时间(美国和加拿大)",
      code: "013-6",
      offset: -6,
      tz: "America/Chicago"
    },
    {
      name: "(UTC-06:00)中美洲",
      code: "014-6",
      offset: -6,
      tz: "America/Guatemala"
    },
    {
      name: "(UTC-05:00)波哥大，利马，基多",
      code: "015-5",
      offset: -5,
      tz: "America/Bogota"
    },
    {
      name: "(UTC-05:00)东部时间(美国和加拿大)",
      code: "016-5",
      offset: -5,
      tz: "America/New_York"
    },
    {
      name: "(UTC-05:00)印地安那州(东部)",
      code: "017-5",
      offset: -5,
      tz: "America/Indiana/Indianapolis"
    },
    {
      name: "(UTC-04:30)加拉加斯",
      code: "018-4.5",
      offset: -4,
      tz: "America/Caracas"
    },
    {
      name: "(UTC-04:00)大西洋时间(加拿大)",
      code: "019-4",
      offset: -4,
      tz: "America/Halifax"
    },
    {
      name: "(UTC-04:00)库亚巴",
      code: "020-4",
      offset: -4,
      tz: "America/Cuiaba"
    },
    {
      name: "(UTC-04:00)乔治敦，拉巴斯，马瑙斯，圣胡安",
      code: "021-4",
      offset: -4,
      tz: "America/La_Paz"
    },
    {
      name: "(UTC-04:00)圣地亚哥",
      code: "022-4",
      offset: -3,
      tz: "America/Santiago"
    },
    {
      name: "(UTC-04:00)亚松森",
      code: "023-4",
      offset: -3,
      tz: "America/Asuncion"
    },
    {
      name: "(UTC-03:30)纽芬兰",
      code: "024-3.5",
      offset: -3.5,
      tz: "America/St_Johns"
    },
    {
      name: "(UTC-03:00)巴西利亚",
      code: "025-3",
      offset: -3,
      tz: "America/Sao_Paulo"
    },
    {
      name: "(UTC-03:00)布宜诺斯艾利斯",
      code: "026-3",
      offset: -3,
      tz: "America/Argentina/Buenos_Aires"
    },
    {
      name: "(UTC-03:00)格陵兰",
      code: "027-3",
      offset: -3,
      tz: "America/Godthab"
    },
    {
      name: "(UTC-03:00)卡宴，福塔雷萨",
      code: "028-3",
      offset: -3,
      tz: "America/Cayenne"
    },
    {
      name: "(UTC-03:00)蒙得维的亚",
      code: "029-3",
      offset: -3,
      tz: "America/Montevideo"
    },
    {
      name: "(UTC-11:00)协调世界时-11",
      code: "030-2",
      offset: -11,
      tz: "Etc/GMT+11"
    },
    {
      name: "(UTC-02:00)中大西洋",
      code: "031-2",
      offset: -4,
      tz: "America/Halifax"
    },
    {
      name: "(UTC-01:00)佛得角群岛",
      code: "032-1",
      offset: -1,
      tz: "Atlantic/Cape_Verde"
    },
    {
      name: "(UTC-01:00)亚速尔群岛",
      code: "033-1",
      offset: -1,
      tz: "Atlantic/Azores"
    },
    {
      name: "(UTC)都柏林，爱丁堡，里斯本，伦敦",
      code: "034-0",
      offset: 0,
      tz: "Europe/London"
    },
    {
      name: "(UTC)卡萨布兰卡",
      code: "035-0",
      offset: 1,
      tz: "Africa/Casablanca"
    },
    {
      name: "(UTC)蒙罗维亚，雷克雅未克",
      code: "036-0",
      offset: 0,
      tz: "Atlantic/Reykjavik"
    },
    {
      name: "(UTC)协调世界时",
      code: "037-0",
      offset: 0,
      tz: "Etc/GMT"
    },
    {
      name: "(UTC+01:00)阿姆斯特丹，柏林，伯尔尼，罗马，斯德哥尔摩，维也纳",
      code: "038+1",
      offset: 1,
      tz: "Europe/Berlin"
    },
    {
      name: "(UTC+01:00)贝尔格莱德，布拉迪斯拉发，布达佩斯，卢布尔雅那，布拉格",
      code: "039+1",
      offset: 1,
      tz: "Europe/Budapest"
    },
    {
      name: "(UTC+01:00)布鲁塞尔，哥本哈根，马德里，巴黎",
      code: "040+1",
      offset: 1,
      tz: "Europe/Paris"
    },
    {
      name: "(UTC+01:00)萨拉热窝，斯科普里，华沙，萨格勒布",
      code: "041+1",
      offset: 1,
      tz: "Europe/Warsaw"
    },
    {
      name: "(UTC+01:00)温得和克",
      code: "042+1",
      offset: 2,
      tz: "Africa/Windhoek"
    },
    {
      name: "(UTC+01:00)中非西部",
      code: "043+1",
      offset: 1,
      tz: "Africa/Lagos"
    },
    {
      name: "(UTC+02:00)安曼",
      code: "044+2",
      offset: 2,
      tz: "Asia/Amman"
    },
    {
      name: "(UTC+02:00)贝鲁特",
      code: "045+2",
      offset: 2,
      tz: "Asia/Beirut"
    },
    {
      name: "(UTC+02:00)大马士革",
      code: "046+2",
      offset: 2,
      tz: "Asia/Damascus"
    },
    {
      name: "(UTC+02:00)哈拉雷，比勒陀利亚",
      code: "047+2",
      offset: 2,
      tz: "Africa/Johannesburg"
    },
    {
      name: "(UTC+02:00)赫尔辛基，基辅，里加，索非亚，塔林，维尔纽斯",
      code: "048+2",
      offset: 2,
      tz: "Europe/Kiev"
    },
    {
      name: "UTC+02:00)开罗",
      code: "049+2",
      offset: 2,
      tz: "Africa/Cairo"
    },
    {
      name: "(UTC+02:00)明斯克",
      code: "050+2",
      offset: 3,
      tz: "Europe/Minsk"
    },
    {
      name: "(UTC+02:00)雅典，布加勒斯特，伊斯坦布尔",
      code: "051+2",
      offset: 3,
      tz: "Europe/Istanbul"
    },
    {
      name: "(UTC+02:00)耶路撒冷",
      code: "052+2",
      offset: 2,
      tz: "Asia/Jerusalem"
    },
    {
      name: "(UTC+03:00)巴格达",
      code: "053+3",
      offset: 3,
      tz: "Asia/Baghdad"
    },
    {
      name: "(UTC+03:00)科威特，利雅得",
      code: "054+3",
      offset: 3,
      tz: "Asia/Riyadh"
    },
    {
      name: "(UTC+03:00)莫斯科，圣彼得堡，伏尔加格勒",
      code: "055+3",
      offset: 3,
      tz: "Europe/Moscow"
    },
    {
      name: "(UTC+03:00)内罗毕",
      code: "056+3",
      offset: 3,
      tz: "Africa/Nairobi"
    },
    {
      name: "(UTC+03:30)德黑兰",
      code: "057+3.5",
      offset: 3.5,
      tz: "Asia/Tehran"
    },
    {
      name: "(UTC+04:00)阿布扎比，马斯喀特",
      code: "058+4",
      offset: 4,
      tz: "Asia/Dubai"
    },
    {
      name: "(UTC+04:00)埃里温",
      code: "059+4",
      offset: 4,
      tz: "Asia/Yerevan"
    },
    {
      name: "(UTC+04:00)巴库",
      code: "060+4",
      offset: 4,
      tz: "Asia/Baku"
    },
    {
      name: "(UTC+04:00)第比利斯",
      code: "061+4",
      offset: 4,
      tz: "Asia/Tbilisi"
    },
    {
      name: "(UTC+04:00)路易港",
      code: "062+4",
      offset: 4,
      tz: "Indian/Mauritius"
    },
    {
      name: "(UTC+04:30)喀布尔",
      code: "063+4.5",
      offset: 4.5,
      tz: "Asia/Kabul"
    },
    {
      name: "(UTC+05:00)塔什干",
      code: "064+5",
      offset: 5,
      tz: "Asia/Tashkent"
    },
    {
      name: "(UTC+05:00)叶卡捷琳堡",
      code: "065+5",
      offset: 5,
      tz: "Asia/Yekaterinburg"
    },
    {
      name: "(UTC+05:00)伊斯兰堡，卡拉奇",
      code: "066+5",
      offset: 5,
      tz: "Asia/Karachi"
    },
    {
      name: "(UTC+05:30)钦奈，加尔各答，孟买，新德里",
      code: "067+5.5",
      offset: 5.5,
      tz: "Asia/Kolkata"
    },
    {
      name: "(UTC+05:30)斯里加亚渥登普拉",
      code: "068+5.5",
      offset: 5.5,
      tz: "Asia/Colombo"
    },
    {
      name: "(UTC+05:45)加德满都",
      code: "069+5.75",
      offset: 5.75,
      tz: "Asia/Kathmandu"
    },
    {
      name: "(UTC+06:00)阿斯塔纳",
      code: "070+6",
      offset: 6,
      tz: "Asia/Almaty"
    },
    {
      name: "(UTC+06:00)达卡",
      code: "071+6",
      offset: 6,
      tz: "Asia/Dhaka"
    },
    {
      name: "(UTC+07:00)新西伯利亚",
      code: "072+6",
      offset: 7,
      tz: "Asia/Novosibirsk"
    },
    {
      name: "(UTC+06:30)仰光",
      code: "073+6.5",
      offset: 6.5,
      tz: "Asia/Yangon"
    },
    {
      name: "(UTC+07:00)克拉斯诺亚尔斯克",
      code: "074+7",
      offset: 7,
      tz: "Asia/Krasnoyarsk"
    },
    {
      name: "(UTC+07:00)曼谷，河内，雅加达",
      code: "075+7",
      offset: 7,
      tz: "Asia/Bangkok"
    },
    {
      name: "(UTC+08:00)北京，重庆，香港特别行政区，乌鲁木齐",
      code: "076+8",
      offset: 8,
      tz: "Asia/Shanghai"
    },
    {
      name: "(UTC+08:00)吉隆坡，新加坡",
      code: "077+8",
      offset: 8,
      tz: "Asia/Singapore"
    },
    {
      name: "(UTC+08:00)珀斯",
      code: "078+8",
      offset: 8,
      tz: "Australia/Perth"
    },
    {
      name: "(UTC+08:00)台北",
      code: "079+8",
      offset: 8,
      tz: "Asia/Taipei"
    },
    {
      name: "(UTC+08:00)乌兰巴托",
      code: "080+8",
      offset: 8,
      tz: "Asia/Ulaanbaatar"
    },
    {
      name: "(UTC+08:00)伊尔库茨克",
      code: "081+8",
      offset: 8,
      tz: "Asia/Irkutsk"
    },
    {
      name: "(UTC+09:00)大阪，札幌，东京",
      code: "082+9",
      offset: 9,
      tz: "Asia/Tokyo"
    },
    {
      name: "(UTC+09:00)首尔",
      code: "083+9",
      offset: 9,
      tz: "Asia/Seoul"
    },
    {
      name: "(UTC+09:00)雅库茨克",
      code: "084+9",
      offset: 9,
      tz: "Asia/Yakutsk"
    },
    {
      name: "(UTC+09:30)阿德莱德",
      code: "085+9.5",
      offset: 10.5,
      tz: "Australia/Adelaide"
    },
    {
      name: "(UTC+09:30)达尔文",
      code: "086+9.5",
      offset: 9.5,
      tz: "Australia/Darwin"
    },
    {
      name: "(UTC+10:00)布里斯班",
      code: "087+10",
      offset: 10,
      tz: "Australia/Brisbane"
    },
    {
      name: "(UTC+10:00)符拉迪沃斯托克",
      code: "088+10",
      offset: 10,
      tz: "Asia/Vladivostok"
    },
    {
      name: "(UTC+10:00)关岛，莫尔兹比港",
      code: "089+10",
      offset: 10,
      tz: "Pacific/Port_Moresby"
    },
    {
      name: "(UTC+10:00)霍巴特",
      code: "090+10",
      offset: 11,
      tz: "Australia/Hobart"
    },
    {
      name: "(UTC+10:00)堪培拉，墨尔本，悉尼",
      code: "091+10",
      offset: 11,
      tz: "Australia/Sydney"
    },
    {
      name: "(UTC+11:00)马加丹",
      code: "092+11",
      offset: 11,
      tz: "Asia/Magadan"
    },
    {
      name: "(UTC+11:00)所罗门群岛，新喀里多尼亚",
      code: "093+11",
      offset: 11,
      tz: "Pacific/Guadalcanal"
    },
    {
      name: "(UTC+12:00)奥克兰，惠灵顿",
      code: "094+12",
      offset: 13,
      tz: "Pacific/Auckland"
    },
    {
      name: "(UTC+12:00)斐济",
      code: "095+12",
      offset: 13,
      tz: "Pacific/Fiji"
    },
    {
      name: "(UTC+12:00)协调世界时+12",
      code: "096+12",
      offset: 12,
      tz: "Etc/GMT-12"
    },
    {
      name: "(UTC+13:00)努库阿洛法",
      code: "097+13",
      offset: 13,
      tz: "Pacific/Tongatapu"
    }
  ]
};
const iso8601Reg = /^\d{4}-\d{2}-\d{2}(.)\d{2}:\d{2}:\d{2}(.+)$/;
const getPanel = ({
  DatePanel: DatePanel2,
  DateRangePanel,
  MonthRangePanel,
  YearRangePanel,
  TimePanel: TimePanel2,
  TimeRangePanel,
  QuarterPanel,
  TimeSelect
}) => (type) => {
  if (type === DATEPICKER.DateRange || type === DATEPICKER.DateTimeRange) {
    return DateRangePanel;
  } else if (type === DATEPICKER.MonthRange) {
    return MonthRangePanel;
  } else if (type === DATEPICKER.YearRange) {
    return YearRangePanel;
  } else if (type === DATEPICKER.TimeRange) {
    return TimeRangePanel;
  } else if (type === DATEPICKER.Time) {
    return TimePanel2;
  } else if (type === DATEPICKER.TimeSelect) {
    return TimeSelect;
  } else if (type === DATEPICKER.Quarter) {
    return QuarterPanel;
  }
  return DatePanel2;
};
const watchMobileVisible = ({ api: api2, props: props2, state, nextTick }) => ([dateMobileVisible, timeMobileVisible]) => {
  if (dateMobileVisible || timeMobileVisible) {
    state.valueOnOpen = Array.isArray(props2.modelValue) ? [...props2.modelValue] : props2.modelValue;
  } else {
    nextTick(() => {
      api2.emitChange(props2.modelValue);
    });
  }
};
const watchPickerVisible$1 = ({ api: api2, vm, dispatch, emit, props: props2, state, nextTick }) => (value) => {
  if (props2.readonly || state.pickerDisabled || state.isMobileScreen)
    return;
  if (value) {
    api2.showPicker();
    state.valueOnOpen = Array.isArray(props2.modelValue) ? [...props2.modelValue] : props2.modelValue;
  } else {
    api2.hidePicker();
    nextTick(() => {
      api2.emitChange(props2.modelValue);
    });
    state.userInput = null;
    if (props2.validateEvent) {
      dispatch("FormItem", "form.blur");
    }
    if (props2.changeOnConfirm && !valueEquals(props2.modelValue, state.oldValue)) {
      emit("update:modelValue", state.oldValue);
    }
    emit("blur", vm);
    api2.blur();
  }
};
const getValueEmpty = (props2) => () => {
  const modelValue = props2.modelValue;
  if (Array.isArray(modelValue)) {
    for (let i = 0, len = modelValue.length; i < len; i++) {
      if (modelValue[i]) {
        return false;
      }
    }
  } else {
    if (modelValue) {
      return false;
    }
  }
  return true;
};
const getMode = ({ state }) => () => {
  if (state.type === DATEPICKER.Week) {
    return DATEPICKER.Week;
  } else if (state.type === DATEPICKER.Month) {
    return DATEPICKER.Month;
  } else if ([DATEPICKER.Year, DATEPICKER.Years, DATEPICKER.YearRange].includes(state.type)) {
    return state.type;
  } else if (state.type === DATEPICKER.Dates) {
    return DATEPICKER.Dates;
  }
  return DATEPICKER.Day;
};
const formatAsFormatAndType = ({ api: api2 }) => (value, customFormat, type, formatObj) => {
  if (!value)
    return null;
  const formatter = (api2.typeValueResolveMap()[type] || api2.typeValueResolveMap().default).formatter;
  const format2 = customFormat || DATEPICKER.DateFormats[type];
  return formatter(value, format2, formatObj);
};
const displayValue = ({ api: api2, props: props2, state }) => () => {
  const formatObj = {
    rangeSeparator: props2.rangeSeparator
  };
  const formattedValue = api2.formatAsFormatAndType(state.parsedValue, state.format, state.type, formatObj);
  if (Array.isArray(state.userInput)) {
    return [
      state.userInput[0] || formattedValue && formattedValue[0] || "",
      state.userInput[1] || formattedValue && formattedValue[1] || ""
    ];
  } else if (state.userInput !== null) {
    return state.userInput;
  } else if (formattedValue) {
    return [DATEPICKER.Dates, DATEPICKER.Years].includes(state.type) ? formattedValue.join(", ") : formattedValue;
  }
  return "";
};
const parseAsFormatAndType = ({ api: api2 }) => (value, customFormat, type, rangeSeparator = "-") => {
  if (!value) {
    return null;
  }
  const parser = (api2.typeValueResolveMap()[type] || api2.typeValueResolveMap().default).parser;
  const format2 = customFormat || DATEPICKER.DateFormats[type];
  return parser(value, format2, rangeSeparator);
};
const parsedValue = ({ api: api2, props: props2, state, t: t2 }) => () => {
  if (!props2.modelValue) {
    return props2.modelValue;
  }
  if (state.type === DATEPICKER.TimeSelect) {
    return props2.modelValue;
  }
  const valueIsDateObject = isDateObject(props2.modelValue) || Array.isArray(props2.modelValue) && props2.modelValue.every(isDateObject);
  const { from, to, isServiceTimezone, timezoneOffset } = state.timezone;
  if (valueIsDateObject && !isServiceTimezone) {
    return props2.modelValue;
  }
  if (state.valueFormat) {
    let date = props2.modelValue;
    if (isServiceTimezone) {
      if (Array.isArray(date)) {
        date = [].concat(date).map((item) => {
          return isDate(item) ? formatDate$1(item, state.valueFormat, t2) : item;
        });
      } else {
        if (state.valueFormat !== DATEPICKER.TimesTamp) {
          date = formatDate$1(date, state.valueFormat, t2);
        }
      }
    }
    const result = api2.parseAsFormatAndType(date, state.valueFormat, state.type, props2.rangeSeparator);
    if (Array.isArray(result)) {
      return result.map((date2) => getDateWithNewTimezone(date2, from, to, timezoneOffset));
    }
    return getDateWithNewTimezone(result || props2.modelValue, from, to, timezoneOffset);
  }
  const trans = (value) => typeof value === "string" || isNumber(value) ? toDate(value) : value;
  const values = [].concat(props2.modelValue).map((val) => getDateWithNewTimezone(trans(val), from, to, timezoneOffset));
  return values.length > 1 ? values : values[0];
};
const getTimezone = ({ props: props2, utils }) => () => {
  const { dbTimezone, timezone, isutc8, type = "date", iso8601, timezoneOffset } = props2;
  const setting = utils.getDateFormat && utils.getDateFormat();
  const { DbTimezone, Timezone, TimezoneOffset } = setting || {};
  const cur = getLocalTimezone();
  const isTzNumber = (z) => typeof z === "number" && z >= -12 && z <= 12;
  if (!~type.indexOf("datetime")) {
    return { from: cur, to: cur };
  }
  let serveTimezone = isTzNumber(dbTimezone) ? dbTimezone : isTzNumber(DbTimezone) ? DbTimezone : cur;
  let clientTimezone = isTzNumber(timezone) ? timezone : isTzNumber(Timezone) ? Timezone : cur;
  let clientTimezoneOffset = isNumber(timezoneOffset) ? timezoneOffset : isNumber(TimezoneOffset) ? TimezoneOffset : 0;
  const value = props2.modelValue;
  const str = (Array.isArray(value) ? value[0] : value) || "";
  const match = typeof str === "string" && str.match(/(-|\+)(\d{2}):?(\d{2})$/);
  if ((iso8601 || setting) && match) {
    serveTimezone = getStrTimezone(str);
  }
  return {
    from: serveTimezone,
    to: isutc8 ? 8 : clientTimezone,
    isServiceTimezone: !!setting,
    timezoneOffset: clientTimezoneOffset
  };
};
const nullOrString = (value) => {
  const arr = Array.isArray(value) ? value : [value];
  return arr.every((val) => !val && !isNumber(val) || typeof val === "string");
};
const getValueFormat = ({ props: props2, utils }) => {
  const { valueFormat, iso8601, modelValue: value, type = "date" } = props2;
  const setting = utils.getDateFormat && utils.getDateFormat();
  let suffix = "";
  let separator = " ";
  if (!valueFormat && ~type.indexOf("datetime") && (iso8601 || setting) && nullOrString(value)) {
    const str = (Array.isArray(value) ? value[0] : value) || "";
    const match = str.match(iso8601Reg);
    if (match && match.length === 3) {
      suffix = match[2] || "";
      separator = match[1];
    }
    return `yyyy-MM-dd${separator}HH:mm:ss${suffix}`;
  }
  return valueFormat;
};
const dateFormatter = ({ t: t2 }) => (value, format2) => {
  if (format2 === DATEPICKER.TimesTamp) {
    return value.getTime();
  }
  return formatDate$1(value, format2, t2);
};
const dateParser = ({ t: t2, props: props2 }) => (text, format2) => {
  if (format2 === DATEPICKER.TimesTamp) {
    return new Date(Number(text));
  }
  const value = props2.autoFormat ? formatText({ text, format: format2 }) : text;
  return parseDate(value, format2, t2);
};
const rangeFormatter = (api2) => (value, format2) => {
  if (Array.isArray(value) && value.length === 2) {
    const start = value[0];
    const end = value[1];
    if (start && end) {
      return [api2.dateFormatter(start, format2), api2.dateFormatter(end, format2)];
    }
  }
  return "";
};
const rangeParser = (api2) => (array, format2, separator) => {
  if (!Array.isArray(array)) {
    array = array.split(separator);
  }
  if (array.length === 2) {
    const range1 = array[0];
    const range2 = array[1];
    return [api2.dateParser(range1, format2), api2.dateParser(range2, format2)];
  }
  return [];
};
const getWeekData = (value) => {
  const valueday = new Date(value).getDay();
  let newDate = new Date(value);
  if (valueday >= 2) {
    newDate.setTime(new Date(value).getTime() - (valueday - 1) * 864e5);
  } else if (valueday === 0) {
    newDate.setTime(new Date(value).getTime() + (valueday + 1) * 864e5);
  }
  return newDate;
};
const getDefaultOfTypeValueResolveMap = () => ({
  formatter(value) {
    return value ? String(value) : "";
  },
  parser(text) {
    return text === void 0 || text === "" ? null : text;
  }
});
const getWeekOfTypeValueResolveMap = ({ t: t2, props: props2, api: api2 }) => ({
  formatter(value, format2, formatObj) {
    const weekDate = getWeekData(value);
    let week = getWeekNumber(weekDate);
    let month = weekDate.getMonth();
    const trueDate = new Date(weekDate);
    const { rangeSeparator = "-", type = "format" } = formatObj;
    if (week === 1 && month === 11) {
      trueDate.setHours(0, 0, 0, 0);
      trueDate.setDate(trueDate.getDate() + 3 - (trueDate.getDay() + 6) % 7);
    }
    let date;
    if (type === "format" && !/W/.test(format2)) {
      const { start, end } = getWeekRange(value, format2, t2, props2.pickerOptions);
      date = `${start} ${rangeSeparator} ${end}`;
    } else {
      date = formatDate$1(trueDate, format2, t2);
      date = /WW/.test(date) ? date.replace(/WW/, week < 10 ? "0" + week : week) : date.replace(/W/, week);
    }
    return date;
  },
  parser(text, format2) {
    return api2.typeValueResolveMap().date.parser(text, format2);
  }
});
const getWeekRange = (value, format2, t2, pickerOptions) => {
  const firstDayOfWeek = pickerOptions && pickerOptions.firstDayOfWeek ? pickerOptions.firstDayOfWeek : 7;
  const dayOffset = (value.getDay() - firstDayOfWeek + 7) % 7;
  const startDate = prevDate(value, dayOffset);
  const endDate = nextDate(startDate, 6);
  const start = formatDate$1(startDate, format2, t2);
  const end = formatDate$1(endDate, format2, t2);
  return {
    start,
    end
  };
};
const getNumberOfTypeValueResolveMap = () => ({
  formatter(value) {
    return value ? String(value) : "";
  },
  parser(text) {
    let result = Number(text);
    return !isNaN(text) ? result : null;
  }
});
const getDatesOfTypeValueResolveMap = (api2) => ({
  formatter(value, format2) {
    return value.map((date) => api2.dateFormatter(date, format2));
  },
  parser(value, format2) {
    return (typeof value === "string" ? value.split(", ") : value).map(
      (date) => date instanceof Date ? date : api2.dateParser(date, format2)
    );
  }
});
const typeValueResolveMap = ({ api: api2, props: props2, t: t2 }) => () => ({
  default: getDefaultOfTypeValueResolveMap(),
  week: getWeekOfTypeValueResolveMap({ t: t2, props: props2, api: api2 }),
  date: { formatter: api2.dateFormatter, parser: api2.dateParser },
  datetime: { formatter: api2.dateFormatter, parser: api2.dateParser },
  daterange: { formatter: api2.rangeFormatter, parser: api2.rangeParser },
  monthrange: { formatter: api2.rangeFormatter, parser: api2.rangeParser },
  datetimerange: { formatter: api2.rangeFormatter, parser: api2.rangeParser },
  timerange: { formatter: api2.rangeFormatter, parser: api2.rangeParser },
  time: { formatter: api2.dateFormatter, parser: api2.dateParser },
  month: { formatter: api2.dateFormatter, parser: api2.dateParser },
  year: { formatter: api2.dateFormatter, parser: api2.dateParser },
  years: getDatesOfTypeValueResolveMap(api2),
  yearrange: getDatesOfTypeValueResolveMap(api2),
  number: getNumberOfTypeValueResolveMap(),
  dates: getDatesOfTypeValueResolveMap(api2),
  quarter: {
    formatter: (value) => `${value.getFullYear()}-Q${DATEPICKER.MonthQuarterMap[value.getMonth()]}`,
    parser: api2.dateParser
  }
});
const firstInputId = ({ props: props2, state }) => () => {
  const obj = {};
  let id;
  if (state.ranged) {
    id = props2.id && props2.id[0];
  } else {
    id = props2.id;
  }
  if (id) {
    obj.id = id;
  }
  return obj;
};
const secondInputId = ({ props: props2, state }) => () => {
  const obj = {};
  let id;
  if (state.ranged) {
    id = props2.id && props2.id[1];
  }
  if (id) {
    obj.id = id;
  }
  return obj;
};
const focus = ({ api: api2, props: props2, vm }) => () => !props2.isRange ? vm.$refs.reference.querySelector("input").focus() : api2.handleFocus();
const blur = (state) => () => state.refInput.forEach((input) => input.blur());
const parseValue = ({ api: api2, props: props2, state }) => (value) => {
  const isParsed = isDateObject(value) || Array.isArray(value) && value.every(isDateObject);
  if (state.valueFormat && !isParsed) {
    return api2.parseAsFormatAndType(value, state.valueFormat, state.type, props2.rangeSeparator) || value;
  }
  return value;
};
const formatToValue = ({ api: api2, state }) => (date) => {
  const isFormattable = isDateObject(date) || Array.isArray(date) && date.every(isDateObject);
  if (state.valueFormat && isFormattable) {
    return api2.formatAsFormatAndType(date, state.valueFormat, state.type, {
      type: "value-format"
    });
  }
  return date;
};
const parseString = ({ api: api2, state }) => (value) => {
  const type = Array.isArray(value) ? state.type : state.type.replace(DATEPICKER.Range, "");
  return api2.parseAsFormatAndType(value, state.format, type);
};
const formatToString = ({ api: api2, state }) => (value) => {
  const type = Array.isArray(value) ? state.type : state.type.replace(DATEPICKER.Range, "");
  return api2.formatAsFormatAndType(value, state.format, type);
};
const handleMouseEnter = ({ props: props2, state }) => () => {
  if (props2.readonly || state.pickerDisabled) {
    return;
  }
  if (!state.valueIsEmpty && props2.clearable) {
    state.showClose = true;
  }
};
const handleInput = ({ state, props: props2, api: api2 }) => (val, event) => {
  event = val.target ? val : event;
  if (props2.autoFormat) {
    const value = api2.formatInputValue({ event, prevValue: state.displayValue });
    state.userInput = value;
  } else {
    const val2 = event.target.value;
    state.userInput = val2;
  }
};
const formatInputValue = ({ props: props2, state }) => ({ event, prevValue = "" }) => {
  const val = event.target.value;
  const inputData = event.data;
  const format2 = state.type === "time-select" ? "HH:mm" : props2.format || DATEPICKER.DateFormats[state.type];
  if (inputData && inputData.charCodeAt() >= 48 && inputData.charCodeAt() <= 57) {
    return formatText({ event, format: format2, text: prevValue, needSelectionStart: true });
  } else {
    return val;
  }
};
const getSelectionStart = ({ value, format: format2, regx, event }) => {
  const formatMatchArr = format2.match(regx);
  let selectionStart = getSelectionStartIndex(event);
  let I = 0;
  if (value !== "") {
    const match = value.match(/[0-9]/g);
    I = match === null ? 0 : match.length;
    for (let i = 0; i < formatMatchArr.length; i++) {
      I -= Math.max(formatMatchArr[i].length, 2);
    }
    I = I >= 0 ? 1 : 0;
    I === 1 && selectionStart >= value.length && (selectionStart = value.length - 1);
  }
  return { selectionStart, I };
};
const getNum = (value, format2, regx) => {
  let len = value.length;
  if (format2 && regx) {
    const formatMatchArr = format2.match(regx);
    len = Math.max(len, formatMatchArr.join("").length);
  }
  let num = { str: "", arr: [] };
  for (let i = 0; i < len; i++) {
    let char = value.charAt(i) ? value.charAt(i) : "00";
    if (/[0-9]/.test(char)) {
      num.str += char;
    } else {
      num.arr[i] = 1;
    }
  }
  return num;
};
const getSelectionStartIndex = (event) => {
  const inputElem = event.target;
  return inputElem.selectionStart - (event.data ? event.data.length : 0);
};
const moveStart = (inputElem, moveStartIndex) => {
  if (inputElem.setSelectionRange) {
    inputElem.focus();
    setTimeout(() => {
      inputElem.setSelectionRange(moveStartIndex, moveStartIndex);
    }, 0);
  }
};
const formatText = ({ event, text, format: format2, needSelectionStart = false }) => {
  if (!format2)
    return text;
  let cursorOffset = 0;
  let value = "";
  let regx = /yyyy|yyy|yy|y|MM|M|dd|d|HH|hh|H|h|mm|m|ss|s|WW|W|w/g;
  let startIndex = 0;
  let { numStr, selectionStart } = getNumAndSelectionStart({
    value: text,
    format: format2,
    regx,
    event,
    needSelectionStart
  });
  let matchResult = regx.exec(format2);
  while (numStr.str !== "" && matchResult !== null) {
    let subStr;
    let newNum;
    let subLen;
    const endIndex = matchResult.index;
    if (startIndex >= 0) {
      value += format2.substring(startIndex, endIndex);
    }
    selectionStart >= startIndex + cursorOffset && selectionStart <= endIndex + cursorOffset && (selectionStart = selectionStart + endIndex - startIndex);
    startIndex = regx.lastIndex;
    subLen = startIndex - endIndex;
    subStr = numStr.str.substring(0, subLen);
    const firstMatchChar = matchResult[0].charAt(0);
    const firstChar = parseInt(subStr.charAt(0), 10);
    if (numStr.str.length > 1) {
      const secondChar = numStr.str.charAt(1);
      newNum = 10 * firstChar + parseInt(secondChar, 10);
    } else {
      newNum = firstChar;
    }
    if (numStr.arr[endIndex + 1] || firstMatchChar === "M" && newNum > 12 || firstMatchChar === "d" && newNum > 31 || ["H", "h"].includes(firstMatchChar) && newNum > 23 || "ms".includes(firstMatchChar) && newNum > 59) {
      subStr = matchResult[0].length === 2 ? "0" + firstChar : firstChar;
      selectionStart++;
    } else {
      if (subLen === 1) {
        subStr = String(newNum);
        subLen++;
        cursorOffset++;
      }
    }
    value += subStr;
    numStr.str = numStr.str.substring(subLen);
    matchResult = regx.exec(format2);
  }
  const { value: val, selectionStart: cursorPos } = checkFormat({
    value,
    format: format2,
    startIndex,
    selectionStart,
    regx,
    needSelectionStart
  });
  value = val;
  selectionStart = cursorPos;
  needSelectionStart && moveStart(event.target, selectionStart);
  return value;
};
const getNumAndSelectionStart = ({ value, format: format2, regx, event, needSelectionStart }) => {
  if (needSelectionStart) {
    let { selectionStart, I } = getSelectionStart({ value, format: format2, regx, event });
    let valueStr;
    if (event.data) {
      valueStr = value.substring(0, selectionStart) + event.data + value.substring(selectionStart + I);
      selectionStart++;
    } else {
      valueStr = value;
    }
    const numStr = getNum(valueStr);
    return { numStr, selectionStart };
  } else {
    const numStr = getNum(value, format2, regx);
    return { numStr };
  }
};
const checkFormat = ({ value, format: format2, startIndex, selectionStart, regx, needSelectionStart }) => {
  if (!needSelectionStart && regx.lastIndex === 0 || needSelectionStart && regx.lastIndex === 0 && selectionStart >= startIndex) {
    const subFormat = `(?<=${format2.substring(0, startIndex)})(\\s*\\S*\\s*)+`;
    const pattern = new RegExp(subFormat, "g");
    const res = format2.match(pattern);
    if (res) {
      value += res[0];
      selectionStart = value.length;
    }
  }
  return { value, selectionStart };
};
const handleChange$2 = ({ api: api2, state }) => () => {
  if (state.userInput) {
    const value = api2.parseString(state.displayValue);
    if (value) {
      state.picker.state.value = value;
      if (api2.isValidValue(value)) {
        api2.emitInput(value);
        state.userInput = null;
      }
    }
  }
  if (state.userInput === "") {
    api2.emitInput(null);
    api2.emitChange(null);
    state.userInput = null;
  }
};
const handleStartInput = ({ state, props: props2, api: api2 }) => (event) => {
  const value = props2.autoFormat ? api2.formatInputValue({ event, prevValue: state.displayValue[0] }) : event.target.value;
  if (state.userInput) {
    state.userInput = [value, state.userInput[1]];
  } else {
    state.userInput = [value, null];
  }
};
const handleEndInput = ({ state, props: props2, api: api2 }) => (event) => {
  const value = props2.autoFormat ? api2.formatInputValue({ event, prevValue: state.displayValue[1] }) : event.target.value;
  if (state.userInput) {
    state.userInput = [state.userInput[0], value];
  } else {
    state.userInput = [null, value];
  }
};
const handleStartChange = ({ api: api2, state }) => () => {
  const value = api2.parseString(state.userInput && state.userInput[0]);
  if (value) {
    let newValue;
    if (state.displayValue[1]) {
      state.userInput = [api2.formatToString(value), state.displayValue[1]];
      newValue = [value, state.picker.state.value && state.picker.state.value[1]];
      state.startStatus = true;
    } else {
      let now = /* @__PURE__ */ new Date();
      if (now.getTime() < value.getTime()) {
        state.userInput = [api2.formatToString(value), api2.formatToString(value)];
        newValue = [value, value];
      } else {
        state.userInput = [api2.formatToString(value), ""];
        newValue = [value, ""];
      }
    }
    if (api2.isValidValue(newValue)) {
      state.picker.state.value = newValue;
      state.historyUserInput = [value, state.picker.state.value && state.picker.state.value[1]];
      state.historyUserValue = newValue;
      api2.emitInput(newValue);
      state.userInput = null;
    } else {
      if (state.startStatus) {
        state.picker.state.value = state.historyUserValue ? state.historyUserValue : state.historyValue;
        api2.emitInput(state.historyUserValue ? state.historyUserValue : state.historyValue);
        state.userInput = state.historyUserInput ? state.historyUserInput : state.historyInput;
      } else {
        state.picker.state.value = newValue;
      }
    }
  }
};
const handleEndChange = ({ api: api2, state }) => () => {
  const value = api2.parseString(state.userInput && state.userInput[1]);
  if (value) {
    let newValue;
    if (state.displayValue[0]) {
      state.userInput = [state.displayValue[0], api2.formatToString(value)];
      newValue = [state.picker.state.value && state.picker.state.value[0], value];
      state.endStatus = true;
    } else {
      let now = /* @__PURE__ */ new Date();
      if (now.getTime() < value.getTime()) {
        state.userInput = [api2.formatToString(now), api2.formatToString(value)];
        newValue = [now, value];
      } else {
        state.userInput = [api2.formatToString(value), api2.formatToString(value)];
        newValue = [value, value];
      }
    }
    if (api2.isValidValue(newValue)) {
      state.historyValue = newValue;
      state.historyInput = [state.displayValue[0], api2.formatToString(value)];
      state.picker.state.value = newValue;
      api2.emitInput(newValue);
      state.userInput = null;
    } else {
      if (state.endStatus) {
        state.picker.state.value = state.historyValue;
        api2.emitInput(state.historyValue);
        state.userInput = state.historyInput;
      } else {
        state.picker.state.value = state.historyValue;
        state.userInput = state.historyInput;
      }
    }
  }
};
const handleClickIcon = ({ api: api2, props: props2, state }) => (event) => {
  if (props2.readonly || state.pickerDisabled) {
    return;
  }
  if (state.showClose) {
    state.valueOnOpen = props2.modelValue;
    event.stopPropagation();
    api2.emitInput(null);
    api2.emitChange(null);
    state.showClose = false;
    if (state.picker && typeof state.picker.handleClear === "function") {
      state.picker.handleClear();
    }
  } else {
    state.pickerVisible = !state.pickerVisible;
  }
};
const handleClose = ({ api: api2, props: props2, state }) => () => {
  if (!state.pickerVisible) {
    return;
  }
  state.pickerVisible = false;
  if (state.type === DATEPICKER.Dates) {
    const oldValue = api2.parseAsFormatAndType(state.valueOnOpen, state.valueFormat, state.type, props2.rangeSeparator) || state.valueOnOpen;
    api2.emitInput(oldValue, true);
  }
};
const handleFocus = ({ emit, vm, state, api: api2 }) => () => {
  const type = state.type;
  if (DATEPICKER.TriggerTypes.includes(type)) {
    if (state.isMobileScreen && state.isDateMobileComponent) {
      api2.dateMobileToggle(true);
    } else if (state.isMobileScreen && state.isTimeMobileComponent) {
      api2.timeMobileToggle(true);
    } else {
      state.pickerVisible = true;
    }
  }
  emit("focus", vm.$refs.reference);
};
const handleKeydown$4 = ({ api: api2, state }) => (event) => {
  const keyCode = event.keyCode;
  if (keyCode === 27) {
    state.pickerVisible = false;
    event.stopPropagation();
    return;
  }
  if (keyCode === 9) {
    if (!state.ranged) {
      api2.handleChange();
      state.pickerVisible = state.picker.state.visible = false;
      api2.blur();
      event.stopPropagation();
    } else {
      setTimeout(() => {
        if (!state.refInput.includes(document.activeElement)) {
          state.pickerVisible = false;
          api2.blur();
          event.stopPropagation();
        }
      }, 0);
    }
    return;
  }
  if (keyCode === 13) {
    if (state.userInput === "" || api2.isValidValue(api2.parseString(state.displayValue))) {
      api2.handleChange();
      state.pickerVisible = state.picker.state.visible = false;
      api2.blur();
    }
    event.stopPropagation();
    return;
  }
  if (state.userInput) {
    event.stopPropagation();
    return;
  }
  if (state.picker && state.picker.handleKeydown) {
    state.picker.handleKeydown(event);
  }
};
const hidePicker = ({ destroyPopper, state }) => () => {
  if (state.picker) {
    state.picker.resetView && state.picker.resetView();
    state.pickerVisible = state.picker.visible = state.picker.state.visible = false;
    destroyPopper();
  }
};
const showPicker = ({ api: api2, nextTick, updatePopper, state }) => () => {
  if (state.$isServer) {
    return;
  }
  if (!state.picker) {
    api2.mountPicker();
  }
  state.pickerVisible = state.picker.state.visible = true;
  state.picker.state.value = state.parsedValue;
  state.picker.resetView && state.picker.resetView();
  nextTick(() => {
    updatePopper(state.picker.$el);
    state.picker.adjustSpinners && state.picker.adjustSpinners();
  });
};
const handlePick = ({ state, api: api2 }) => (date = "", visible = false) => {
  if (!state.picker)
    return;
  state.userInput = null;
  state.pickerVisible = state.picker.state.visible = visible;
  api2.emitInput(date, visible);
  state.date = date;
  state.picker.resetView && state.picker.resetView();
};
const handleSelectRange = (state) => (start, end, pos) => {
  if (state.refInput.length === 0) {
    return;
  }
  const adjust = (value, start2, end2) => {
    if (value) {
      const valueReg = /(\d+):(\d+):(\d+)(\s+.+)?/;
      if (valueReg.test(value)) {
        const matched = valueReg.exec(value);
        const hourLength = matched[1].length;
        const minuteLength = matched[2].length;
        const secondLength = matched[3].length;
        if (start2 === 0) {
          end2 = hourLength;
        } else if (start2 === 3) {
          start2 = hourLength + 1;
          end2 = hourLength + minuteLength + 1;
        } else {
          start2 = hourLength + minuteLength + 2;
          end2 = hourLength + minuteLength + secondLength + 2;
        }
      }
    }
    return { start: start2, end: end2 };
  };
  if (!pos || pos === "min") {
    const value = state.refInput[0].value;
    const res = adjust(value, start, end);
    state.refInput[0].setSelectionRange(res.start, res.end);
    state.refInput[0].focus();
  } else if (pos === "max") {
    const value = state.refInput[1].value;
    const res = adjust(value, start, end);
    state.refInput[1].setSelectionRange(res.start, res.end);
    state.refInput[1].focus();
  }
};
const mountPicker = ({ api: api2, props: props2, state, vm, updatePopper }) => () => {
  state.picker = vm.$refs.picker;
  state.picker.state.defaultValue = props2.defaultValue;
  state.picker.state.defaultTime = props2.defaultTime;
  state.picker.state.popperClass = props2.popperClass;
  state.picker.state.popperAppendToBody = props2.popperAppendToBody;
  state.picker.state.fnUpdatePopper = updatePopper;
  state.picker.state.currentInstans = state.picker;
  state.picker.state.timezone = state.timezone;
  state.picker.state.timezoneData = state.timezoneData;
  state.picker.state.showTimezone = props2.showTimezone || state.timezone.isServiceTimezone;
  state.picker.state.width = state.reference.getBoundingClientRect().width;
  state.picker.state.timefmt = props2.timeFormat || "";
  state.picker.state.showTime = state.type === DATEPICKER.DateTime || state.type === DATEPICKER.DateTimeRange;
  state.picker.state.selectionMode = state.selectionMode;
  state.picker.state.defaultTimezone = props2.defaultTimezone;
  state.picker.state.unlinkPanels = props2.unlinkPanels;
  state.picker.state.emitDbTime = api2.emitDbTime;
  state.picker.state.arrowControl = state.arrowControl || props2.timeArrowControl || props2.arrowControl || false;
  api2.updateOptions();
  state.picker.resetView && state.picker.resetView();
};
const updateOptions = ({ api: api2, props: props2, state }) => () => {
  if (!state.picker) {
    return;
  }
  const options = props2.pickerOptions;
  if (options && options.selectableRange) {
    let ranges = options.selectableRange;
    const parser = api2.typeValueResolveMap().datetimerange.parser;
    const format2 = DATEPICKER.DateFormats.timerange;
    ranges = Array.isArray(ranges) ? ranges : [ranges];
    state.picker.state.selectableRange = ranges.map((range2) => parser(range2, format2, props2.rangeSeparator));
  }
  for (const option in options) {
    if (option in options && option !== DATEPICKER.SelectbaleRange) {
      state.picker.state[option] = options[option];
    }
  }
  if (props2.format) {
    state.picker.state.format = props2.format;
  }
};
const valueEquals = (left, right) => {
  const dateEquals = (a, b) => {
    const bIsDate = b instanceof Date;
    const aIsDate = a instanceof Date;
    if (aIsDate && bIsDate) {
      return a.getTime() === b.getTime();
    }
    if (!aIsDate && !bIsDate) {
      return a === b;
    }
    return false;
  };
  const aIsArray = Array.isArray(left);
  const bIsArray = Array.isArray(right);
  if (aIsArray && bIsArray) {
    if (left.length !== right.length) {
      return false;
    }
    return left.every((item, index3) => dateEquals(item, right[index3]));
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(left, right);
  }
  return false;
};
const emitChange = ({ api: api2, dispatch, emit, props: props2, state }) => (val) => {
  if (!valueEquals(val, state.valueOnOpen)) {
    emit("change", val);
    state.valueOnOpen = val;
    if (props2.validateEvent) {
      dispatch("FormItem", "form.change", val);
    }
    api2.emitDbTime(props2.value);
  }
};
const emitInput = ({ api: api2, emit, props: props2, state }) => (val, visible = false) => {
  let value = val;
  const { from, to, timezoneOffset } = state.timezone;
  if (props2.type === "datetime") {
    value = getDateWithNewTimezone(value, to, from, -timezoneOffset);
  } else if (props2.type === "datetimerange" && Array.isArray(value)) {
    value = value.map((val2) => getDateWithNewTimezone(val2, to, from, -timezoneOffset));
  }
  const formatted = api2.formatToValue(value) || val;
  if (!valueEquals(props2.modelValue, formatted)) {
    emit("update:modelValue", formatted);
  }
  if (!visible && !valueEquals(state.oldValue, formatted)) {
    state.oldValue = formatted;
  }
};
const isValidValue$7 = ({ api: api2, state }) => (value) => {
  if (!state.picker) {
    api2.mountPicker();
  }
  if (state.picker.isValidValue) {
    return value && state.picker.isValidValue(value);
  }
  return true;
};
const watchIsRange = ({ api: api2, state, TimePanel: TimePanel2, TimeRangePanel }) => (value) => {
  state.type = value ? DATEPICKER.TimeRange : DATEPICKER.Time;
  state.panel = value ? TimeRangePanel : TimePanel2;
  api2.mountPicker();
};
const getType = ({ parent, props: props2 }) => () => {
  if (parent.componentName === DATEPICKER.DatePicker) {
    return props2.type;
  } else if (parent.componentName === DATEPICKER.TimePicker) {
    return props2.isRange ? DATEPICKER.TimeRange : DATEPICKER.Time;
  }
  return DATEPICKER.TimeSelect;
};
const watchModelValue$2 = ({ api: api2, props: props2, state, dispatch }) => (value, oldValue) => {
  state.historyInput = state.displayValue;
  if (state.picker) {
    state.historyValue = [
      state.picker.state.value && state.picker.state.value[0],
      api2.parseString(state.historyInput && state.historyInput[1])
    ];
  }
  if (props2.changeCompat) {
    api2.emitChange(props2.modelValue);
  }
  if (!valueEquals(value, oldValue) && !state.pickerVisible && props2.validateEvent) {
    dispatch("FormItem", "form.change", value);
  }
};
const computedFormat = ({ props: props2, utils }) => () => {
  let { type, format: format2 } = props2;
  if (!format2 && utils.getDateFormat) {
    const config = utils.getDateFormat() || {};
    if (~["date", "dates", "daterange"].indexOf(type)) {
      format2 = config.DateFormat;
    }
    if (~["datetime", "datetimerange"].indexOf(type)) {
      format2 = config.DateTimeFormat;
    }
  }
  return format2;
};
const computedTriggerClass = ({ props: props2, state }) => () => {
  return props2.suffixIcon || props2.prefixIcon || (state.type.includes(DATEPICKER.Time) ? DATEPICKER.IconTime : DATEPICKER.IconDate);
};
const computedHaveTrigger = ({ props: props2 }) => () => {
  return typeof props2.showTrigger !== "undefined" ? props2.showTrigger : DATEPICKER.TriggerTypes.includes(props2.type);
};
const initPopper = ({ props: props2, hooks, vnode }) => {
  const { reactive, watch, toRefs, onBeforeUnmount, onDeactivated } = hooks;
  const { emit, vm, slots, nextTick } = vnode;
  const placementMap = DATEPICKER.PlacementMap;
  return vue_popper_default({
    reactive,
    watch,
    emit,
    props: __spreadProps(__spreadValues({}, props2), {
      popperOptions: Object.assign({ boundariesPadding: 0, gpuAcceleration: false }, props2.popperOptions),
      visibleArrow: true,
      offset: 0,
      boundariesPadding: 5,
      arrowOffset: 35,
      placement: placementMap[props2.align] || placementMap.left
    }),
    toRefs,
    vm,
    slots,
    nextTick,
    onBeforeUnmount,
    onDeactivated
  });
};
const emitDbTime = ({ emit, state, t: t2 }) => (date) => {
  const { isServiceTimezone, from } = state.timezone;
  if (isServiceTimezone && !valueEquals(date, state.dbTime)) {
    let hasDate = false;
    const dbTime = [].concat(date).map((item) => {
      if (isDate(item)) {
        hasDate = true;
        let currentDate = getDateWithNewTimezone(item, getLocalTimezone(), from);
        if (state.valueFormat) {
          currentDate = formatDate$1(currentDate, state.valueFormat, t2);
        }
        return currentDate;
      }
      return item;
    });
    state.dbTime = dbTime.length > 1 ? dbTime : dbTime[0];
    hasDate && emit("input", state.dbTime);
  }
};
const initGlobalTimezone = ({ api: api2, state, props: props2 }) => () => {
  const { isServiceTimezone } = state.timezone;
  if (isServiceTimezone) {
    state.timezoneData = timezone_default;
  } else if (props2.showTimezone) {
    state.timezoneData = props2.timezoneData ? extend(true, {}, props2.timezoneData) : timezone_default;
  }
  api2.emitDbTime(props2.value);
};
const handleEnterDisplayOnlyContent = ({ state, t: t2 }) => ($event) => {
  const target = $event.target;
  if (target && target.scrollWidth > target.offsetWidth) {
    state.displayOnlyTooltip = state.displayValue.join(` ${t2("ui.datepicker.to")} `);
  }
};
const handleEnterPickerlabel = ({ state, props: props2 }) => ($event) => {
  const target = $event.target;
  if (target && target.scrollWidth > target.offsetWidth) {
    state.labelTooltip = props2.label;
  }
};
const setInputPaddingLeft = ({ props: props2, state, vm, nextTick }) => () => {
  const ml = 12;
  const mr = 8;
  if (props2.label && !state.ranged && vm.$refs.label && vm.$refs.reference) {
    nextTick(() => {
      vm.$refs.reference.querySelector("input").style.paddingLeft = vm.$refs.label.offsetWidth + ml + mr + "px";
    });
  }
};
const dateMobileToggle = ({ state, props: props2 }) => (visible) => {
  if (props2.readonly || state.pickerDisabled || state.dateMobileOption.visible === visible)
    return;
  if (visible) {
    state.dateMobileOption.value = props2.modelValue;
  }
  state.dateMobileOption.visible = visible;
};
const timeMobileToggle = ({ state, props: props2, api: api2 }) => (visible) => {
  if (props2.readonly || state.pickerDisabled || state.timeMobileOption.visible === visible)
    return;
  if (visible) {
    state.timeMobileOption.value = api2.dateToTimeArray(props2.modelValue);
  }
  state.timeMobileOption.visible = visible;
};
const timeMobileConfirm = ({ state, api: api2 }) => () => {
  api2.emitInput(api2.timeArrayToDate(state.timeMobileOption.value));
};
const dateToTimeArray = (value) => {
  const date = new Date(value);
  return [date.getHours(), date.getMinutes(), date.getSeconds()];
};
const timeArrayToDate = ({ props: props2 }) => (value) => {
  const timeArr = value;
  let date = new Date(props2.modelValue);
  if (isNaN(date.getTime())) {
    date = /* @__PURE__ */ new Date();
  }
  date.setHours(timeArr[0]);
  date.setMinutes(timeArr[1]);
  date.setSeconds(timeArr[2]);
  return date;
};
const api$j = [
  "state",
  "btnClick",
  "handleEndChange",
  "handleEndInput",
  "focus",
  "handleFocus",
  "handleStartChange",
  "handleStartInput",
  "handleKeydown",
  "handleClickIcon",
  "handleMouseEnter",
  "handleInput",
  "handleChange",
  "handleClose",
  "handlePick",
  "handleSelectRange",
  "handleSelectChange",
  "popperElm",
  "handleEnterDisplayOnlyContent",
  "handleEnterPickerlabel",
  "timeMobileToggle",
  "timeMobileConfirm",
  "emitInput",
  "dateMobileToggle"
];
const initState$b = ({ api: api2, reactive, vm, computed, props: props2, utils, parent, breakpoint }) => {
  const state = reactive({
    historyValue: [],
    historyInput: [],
    historyUserInput: [],
    historyUserValue: [],
    startStatus: false,
    endStatus: false,
    date: null,
    pickerVisible: false,
    showClose: false,
    userInput: null,
    valueOnOpen: null,
    popperElm: null,
    unwatchPickerOptions: null,
    ranged: computed(() => state.type.includes(DATEPICKER.Range)),
    reference: computed(() => vm.$refs.reference.$el || vm.$refs.reference),
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    refInput: computed(() => state.reference ? [].slice.call(state.reference.querySelectorAll("input")) : []),
    valueIsEmpty: computed(() => api2.getValueEmpty()),
    triggerClass: computed(() => api2.computedTriggerClass()),
    selectionMode: computed(() => api2.getMode()),
    haveTrigger: computed(() => api2.computedHaveTrigger()),
    displayValue: computed(() => api2.displayValue()),
    parsedValue: computed(() => api2.parsedValue()),
    oldValue: props2.modelValue,
    pickerSize: computed(() => props2.size),
    pickerDisabled: computed(() => props2.disabled || state.formDisabled || state.isDisplayOnly),
    firstInputId: computed(() => api2.firstInputId()),
    secondInputId: computed(() => api2.secondInputId()),
    type: computed(() => api2.getType()),
    timezone: computed(() => api2.getTimezone()),
    valueFormat: computed(() => getValueFormat({ props: props2, utils })),
    format: computed(() => api2.computedFormat()),
    labelTooltip: "",
    displayOnlyTooltip: "",
    isDisplayOnly: computed(() => props2.displayOnly || (parent.tinyForm || {}).displayOnly),
    isMobileScreen: computed(() => breakpoint.current.value === "default"),
    dateMobileOption: {
      visible: false,
      type: props2.type,
      value: props2.modelValue
    },
    timeMobileOption: {
      visible: false,
      type: props2.type,
      value: [0, 0, 0]
    },
    isDateMobileComponent: computed(
      () => [
        DATEPICKER.DateRange,
        DATEPICKER.DateTimeRange,
        DATEPICKER.DateTime,
        DATEPICKER.DatePicker,
        DATEPICKER.Date,
        DATEPICKER.Dates
      ].includes(props2.type)
    ),
    isTimeMobileComponent: computed(
      () => [DATEPICKER.Time, DATEPICKER.TimeRange, DATEPICKER.TimeSelect, DATEPICKER.TimePicker].includes(props2.type)
    ),
    showSeconds: computed(
      () => (state.format || props2.pickerOptions && props2.pickerOptions.format || "ss").includes("ss")
    )
  });
  return state;
};
const initApi$5 = ({ api: api2, props: props2, hooks, state, vnode, others, utils, parent }) => {
  const { t: t2, emit, dispatch, nextTick, vm } = vnode;
  const { TimePanel: TimePanel2, TimeRangePanel } = others;
  const { destroyPopper, popperElm, updatePopper } = initPopper({ props: props2, hooks, vnode });
  state.popperElm = popperElm;
  state.picker = null;
  Object.assign(api2, {
    destroyPopper,
    emitDbTime: emitDbTime({ emit, state, t: t2 }),
    hidePicker: hidePicker({ destroyPopper, state }),
    handleSelectChange: ({ tz, date }) => !state.ranged && emit("select-change", { tz, date }),
    getPanel: getPanel(others),
    handleFocus: handleFocus({ emit, vm, state, api: api2 }),
    getTimezone: getTimezone({ props: props2, utils }),
    emitChange: emitChange({ api: api2, dispatch, emit, props: props2, state }),
    parsedValue: parsedValue({ api: api2, props: props2, state, t: t2 }),
    parseAsFormatAndType: parseAsFormatAndType({ api: api2 }),
    typeValueResolveMap: typeValueResolveMap({ api: api2, props: props2, t: t2 }),
    updateOptions: updateOptions({ api: api2, props: props2, state }),
    focus: focus({ api: api2, props: props2, vm }),
    handleInput: handleInput({ api: api2, state, props: props2 }),
    handleChange: handleChange$2({ api: api2, state }),
    isValidValue: isValidValue$7({ api: api2, state }),
    emitInput: emitInput({ api: api2, emit, props: props2, state }),
    handleKeydown: handleKeydown$4({ api: api2, state }),
    handleEndChange: handleEndChange({ api: api2, state }),
    handleStartChange: handleStartChange({ api: api2, state }),
    handleClickIcon: handleClickIcon({ api: api2, props: props2, state }),
    showPicker: showPicker({ api: api2, nextTick, updatePopper, state }),
    formatToValue: formatToValue({ api: api2, props: props2, state }),
    formatAsFormatAndType: formatAsFormatAndType({ api: api2 }),
    parseString: parseString({ api: api2, state }),
    handleClose: handleClose({ api: api2, props: props2, state }),
    displayValue: displayValue({ api: api2, props: props2, state }),
    handlePick: handlePick({ api: api2, state }),
    watchPickerVisible: watchPickerVisible$1({ api: api2, vm, dispatch, emit, props: props2, state, nextTick }),
    watchMobileVisible: watchMobileVisible({ api: api2, props: props2, state, nextTick }),
    formatToString: formatToString({ api: api2, state }),
    watchIsRange: watchIsRange({ api: api2, state, TimePanel: TimePanel2, TimeRangePanel }),
    mountPicker: mountPicker({ api: api2, vm, props: props2, state, updatePopper }),
    watchModelValue: watchModelValue$2({ api: api2, props: props2, state, dispatch }),
    computedFormat: computedFormat({ props: props2, utils }),
    computedTriggerClass: computedTriggerClass({ props: props2, state }),
    computedHaveTrigger: computedHaveTrigger({ props: props2 }),
    setInputPaddingLeft: setInputPaddingLeft({ props: props2, state, vm, nextTick }),
    formatInputValue: formatInputValue({ props: props2, state })
  });
  initApi2({ api: api2, props: props2, state, t: t2, parent });
  initMobileApi({ api: api2, props: props2, state, t: t2, parent });
};
const initApi2 = ({ api: api2, props: props2, state, t: t2, parent }) => {
  Object.assign(api2, {
    t: t2,
    state,
    blur: blur(state),
    getMode: getMode({ state }),
    getType: getType({ props: props2, parent }),
    dateParser: dateParser({ t: t2, props: props2 }),
    rangeParser: rangeParser(api2),
    rangeFormatter: rangeFormatter(api2),
    dateFormatter: dateFormatter({ t: t2 }),
    getValueEmpty: getValueEmpty(props2),
    handleEndInput: handleEndInput({ state, props: props2, api: api2 }),
    handleStartInput: handleStartInput({ state, props: props2, api: api2 }),
    firstInputId: firstInputId({ props: props2, state }),
    secondInputId: secondInputId({ props: props2, state }),
    handleMouseEnter: handleMouseEnter({ props: props2, state }),
    initGlobalTimezone: initGlobalTimezone({ api: api2, state, props: props2 }),
    parseValue: parseValue({ api: api2, props: props2, state }),
    handleSelectRange: handleSelectRange(state),
    handleEnterPickerlabel: handleEnterPickerlabel({ state, props: props2 }),
    handleEnterDisplayOnlyContent: handleEnterDisplayOnlyContent({ state, t: t2 })
  });
};
const initMobileApi = ({ api: api2, props: props2, state }) => {
  Object.assign(api2, {
    dateMobileToggle: dateMobileToggle({ state, props: props2, api: api2 }),
    timeMobileToggle: timeMobileToggle({ state, props: props2, api: api2 }),
    timeMobileConfirm: timeMobileConfirm({ state, props: props2, api: api2 }),
    dateToTimeArray,
    timeArrayToDate: timeArrayToDate({ state, props: props2, api: api2 })
  });
};
const initWatch$6 = ({ api: api2, state, props: props2, watch, markRaw }) => {
  watch(
    () => state.type,
    (type) => state.panel = markRaw(api2.getPanel(type)),
    { immediate: true }
  );
  watch(() => [state.dateMobileOption.visible, state.timeMobileOption.visible], api2.watchMobileVisible);
  watch(() => state.pickerVisible, api2.watchPickerVisible);
  watch(
    () => props2.defaultValue,
    (value) => state.picker && (state.picker.state.defaultValue = value)
  );
  watch(
    () => state.parsedValue,
    (value) => state.picker && (state.picker.state.value = value),
    { immediate: true }
  );
  watch(() => props2.isRange, api2.watchIsRange);
  watch(() => props2.modelValue, api2.watchModelValue);
  watch(() => props2.pickerOptions, api2.updateOptions, { deep: true });
  watch(() => props2.label, api2.setInputPaddingLeft);
};
const renderless$j = (props2, hooks, vnode, others) => {
  const api2 = {};
  const { reactive, computed, watch, onBeforeUnmount, inject, markRaw, onMounted } = hooks;
  const { vm, service, parent, useBreakpoint } = vnode;
  const { utils = {} } = service || {};
  const breakpoint = useBreakpoint();
  const state = initState$b({ api: api2, reactive, vm, computed, props: props2, utils, parent, inject, breakpoint });
  parent.tinyForm = parent.tinyForm || inject("form", null);
  initApi$5({ api: api2, props: props2, hooks, state, vnode, others, utils, parent });
  initWatch$6({ api: api2, state, props: props2, watch, markRaw });
  api2.initGlobalTimezone();
  onMounted(() => {
    api2.setInputPaddingLeft();
  });
  parent.$on("handle-clear", (event) => {
    state.showClose = true;
    api2.handleClickIcon(event);
  });
  onBeforeUnmount(() => {
    api2.destroyPopper("remove");
    state.popperElm = null;
    state.picker = null;
  });
  return api2;
};
const getYearLabel$1 = ({ state, t: t2 }) => () => {
  const { YearI18n, Year, PanelYearNum } = DATEPICKER;
  const yearTranslation = t2(YearI18n);
  if (state.currentView === Year) {
    const startYear = state.startYear;
    if (yearTranslation) {
      return startYear + " " + yearTranslation + " - " + (startYear + PanelYearNum - 1) + " " + yearTranslation;
    }
    return startYear + " - " + (startYear + PanelYearNum - 1);
  }
  return state.year + " " + yearTranslation;
};
const watchValue$6 = ({ api: api2, state }) => (value) => {
  if ([DATEPICKER.Dates, DATEPICKER.Years].includes(state.selectionMode) && state.value) {
    return;
  }
  if (isDate$1(value)) {
    state.date = state.selectionMode === "week" ? getWeekData(value) : new Date(value);
  } else {
    state.date = api2.getDefaultValue();
  }
};
const watchDefaultValue$2 = ({ state }) => (value) => {
  if (!isDate$1(state.value)) {
    state.date = value ? new Date(value) : /* @__PURE__ */ new Date();
  }
};
const watchTimePickerVisible = ({ nextTick, vm }) => (value) => {
  if (value) {
    nextTick(() => {
      vm.$refs.timepicker.adjustSpinners();
    });
  }
};
const watchSelectionMode = ({ state }) => (value) => {
  if (value === DATEPICKER.Month) {
    if (state.currentView !== DATEPICKER.Year || state.currentView !== DATEPICKER.Month) {
      state.currentView = DATEPICKER.Month;
    }
  } else if (value === DATEPICKER.Dates) {
    state.currentView = DATEPICKER.Date;
  } else if ([DATEPICKER.Year, DATEPICKER.Years, DATEPICKER.YearRange].includes(value)) {
    state.currentView = DATEPICKER.Year;
  }
};
const proxyTimePickerDataProperties = ({ vm, state, watch }) => () => {
  const format2 = (timeFormat) => {
    if (vm.$refs.timepicker) {
      vm.$refs.timepicker.state.format = timeFormat;
    }
  };
  const value = (value2) => {
    if (vm.$refs.timepicker) {
      vm.$refs.timepicker.state.value = null;
      if (value2) {
        vm.$refs.timepicker.state.value = value2;
      }
    }
  };
  const date = (date2) => {
    if (vm.$refs.timepicker) {
      vm.$refs.timepicker.state.date = date2;
    }
  };
  const selectableRange = (selectableRange2) => {
    if (vm.$refs.timepicker) {
      vm.$refs.timepicker.state.selectableRange = selectableRange2;
    }
  };
  watch(() => state.value, value);
  watch(() => state.date, date, { deep: true });
  watch(() => state.selectableRange, selectableRange, { deep: true });
  format2(state.timeFormat);
  value(state.value);
  date(state.date);
  selectableRange(state.selectableRange);
};
const handleClear$5 = ({ api: api2, state, emit }) => () => {
  state.date = api2.getDefaultValue();
  emit("pick", null);
};
const cusEmit = ({ state, emit }) => (value, ...args) => {
  if (!value) {
    emit("pick", value, ...args);
  } else if (Array.isArray(value)) {
    const dates = value.map((date) => state.showTime ? clearMilliseconds(date) : clearTime(date));
    emit("pick", dates, ...args);
  } else {
    emit("pick", state.showTime ? clearMilliseconds(value) : clearTime(value), ...args);
  }
  state.userInputDate = null;
  state.userInputTime = null;
};
const showMonthPicker = ({ state }) => () => state.currentView = DATEPICKER.Month;
const showYearPicker$1 = ({ state }) => () => state.currentView = DATEPICKER.Year;
const cusPrevMonth = ({ state }) => () => state.date = prevMonth(state.date);
const cusNextMonth = ({ state }) => () => state.date = nextMonth(state.date);
const cusPrevYear$1 = ({ state }) => () => {
  if (state.currentView === DATEPICKER.Year) {
    state.startYear = state.startYear - DATEPICKER.PanelYearNum;
  } else {
    state.date = prevYear(state.date);
  }
};
const cusNextYear$1 = ({ state }) => () => {
  if (state.currentView === DATEPICKER.Year) {
    state.startYear = state.startYear + DATEPICKER.PanelYearNum;
  } else {
    state.date = nextYear(state.date);
  }
};
const handleShortcutClick$3 = (api2) => (shortcut) => {
  if (shortcut.onClick) {
    const picker = {
      $emit: (type, start, end) => {
        api2.doPick(start, end);
      }
    };
    shortcut.onClick(picker);
  }
};
const doPick$3 = (emit) => (date) => {
  emit("pick", date, false);
};
const handleTimePick = ({ api: api2, state, t: t2 }) => (value, visible, first) => {
  if (isDate$1(value)) {
    const newDate = state.value ? modifyTime(state.value, value.getHours(), value.getMinutes(), value.getSeconds()) : modifyWithTimeString(api2.getDefaultValue(), state.defaultTime, t2);
    state.date = newDate;
    api2.cusEmit(state.date, true);
  } else {
    api2.cusEmit(value, true);
  }
  if (!first) {
    state.timePickerVisible = visible;
  }
};
const handleTimePickClose = (state) => () => {
  state.timePickerVisible = false;
};
const handleMonthPick = ({ api: api2, state }) => (month) => {
  if (state.selectionMode === DATEPICKER.Month) {
    state.date = modifyDate(state.date, state.year, month, 1);
    api2.cusEmit(state.date);
  } else {
    state.date = changeYearMonthAndClampDate(state.date, state.year, month);
    state.currentView = DATEPICKER.Date;
  }
};
const handleDatePick = ({ api: api2, state, t: t2 }) => (value) => {
  if (state.selectionMode === DATEPICKER.Day) {
    let newDate = state.value ? modifyDate(state.value, value.getFullYear(), value.getMonth(), value.getDate()) : modifyWithTimeString(value, state.defaultTime, t2);
    if (!api2.checkDateWithinRange(newDate)) {
      newDate = modifyDate(state.selectableRange[0][0], value.getFullYear(), value.getMonth(), value.getDate());
    }
    state.date = newDate;
    api2.cusEmit(state.date, state.showTime);
  } else if (state.selectionMode === DATEPICKER.Week) {
    api2.cusEmit(value.date);
  } else if (state.selectionMode === DATEPICKER.Dates) {
    api2.cusEmit(value, true);
  }
};
const handleYearPick$1 = ({ api: api2, state }) => (value) => {
  if (state.selectionMode === DATEPICKER.Year) {
    state.date = modifyDate(state.date, value, 0, 2);
    api2.cusEmit(state.date);
  } else if ([DATEPICKER.Years].includes(state.selectionMode)) {
    state.date = value.map((year) => new Date(year, 0, 2));
    api2.cusEmit(state.date, state.selectionMode === DATEPICKER.YearRange ? value.length < 2 : true);
  } else {
    state.date = changeYearMonthAndClampDate(state.date, value, state.month);
    state.currentView = DATEPICKER.Month;
  }
};
const getDisabledNow = ({ state }) => () => {
  let disabledDate = state.disabledDate;
  if (!disabledDate)
    return false;
  return disabledDate(/* @__PURE__ */ new Date());
};
const getDisabledConfirm = ({ state }) => () => {
  let disabledDate = state.disabledDate;
  if (!disabledDate)
    return false;
  if (!state.value)
    return true;
  return disabledDate(state.value);
};
const dateToLocaleStringForIE = (timezone, value) => {
  const localTimezone = getLocalTimezone();
  const offsetTimezone = timezone - localTimezone;
  const offsetTime = new Date(value).getTime() + offsetTimezone * 36e5;
  return new Date(offsetTime);
};
const changeToNow = ({ api: api2, state }) => () => {
  const now = /* @__PURE__ */ new Date();
  const timezone = state.timezone;
  const isServiceTimezone = timezone.isServiceTimezone;
  let disabledDate = !state.disabledDate;
  if (isServiceTimezone) {
    const date = getDateWithNewTimezone(now, getLocalTimezone(), timezone.to);
    state.date = date;
    disabledDate = disabledDate || !state.disabledDate(date);
  } else {
    disabledDate = disabledDate || !state.disabledDate(now);
  }
  if (disabledDate && api2.checkDateWithinRange(now)) {
    if (!isServiceTimezone) {
      if (state.showTimezone && state.selectedTz) {
        state.date = dateToLocaleStringForIE(state.selectedTz.offset, now);
      } else {
        state.date = now;
      }
    }
    api2.cusEmit(state.date);
    state.emitDbTime(now);
  }
};
const confirm$4 = ({ api: api2, state, t: t2 }) => () => {
  if ([DATEPICKER.Dates, DATEPICKER.Years].includes(state.selectionMode)) {
    api2.cusEmit(state.value);
  } else {
    let value = state.value ? state.value : modifyWithTimeString(api2.getDefaultValue(), state.defaultTime, t2);
    const timezone = state.timezone;
    if (!state.value && timezone.isServiceTimezone) {
      value = state.date = getDateWithNewTimezone(value, getLocalTimezone(), timezone.to);
    } else {
      state.date = new Date(value);
    }
    api2.cusEmit(value);
  }
};
const resetView$3 = ({ state }) => () => {
  if (state.selectionMode === DATEPICKER.Month) {
    state.currentView = DATEPICKER.Month;
  } else if ([DATEPICKER.Year, DATEPICKER.Years, DATEPICKER.YearRange].includes(state.selectionMode)) {
    state.currentView = DATEPICKER.Year;
  } else {
    state.currentView = DATEPICKER.Date;
  }
};
const handleEnter = (api2) => () => {
  on(document.body, "keydown", api2.handleKeydown);
};
const handleLeave = ({ api: api2, emit }) => () => {
  emit("dodestroy");
  off(document.body, "keydown", api2.handleKeydown);
};
const handleKeydown$3 = ({ api: api2, state }) => (event) => {
  const keyCode = event.keyCode;
  if (state.visible && !state.timePickerVisible) {
    if (DATEPICKER.List.includes(keyCode)) {
      api2.handleKeyControl(keyCode);
      event.stopPropagation();
      event.preventDefault();
    }
    if (keyCode === 13 && state.userInputDate === null && state.userInputTime === null) {
      api2.cusEmit(state.date, false);
    }
  }
};
const handleKeyControl = ({ state, emit }) => (keyCode) => {
  const mapping = {
    year: __spreadProps(__spreadValues({}, DATEPICKER.YearObj), {
      offset: (date, step) => date.setFullYear(date.getFullYear() + step)
    }),
    month: __spreadProps(__spreadValues({}, DATEPICKER.YearObj), {
      offset: (date, step) => date.setMonth(date.getMonth() + step)
    }),
    week: __spreadProps(__spreadValues({}, DATEPICKER.WeekObj), {
      offset: (date, step) => date.setDate(date.getDate() + step * 7)
    }),
    day: __spreadProps(__spreadValues({}, DATEPICKER.DayObj), {
      offset: (date, step) => date.setDate(date.getDate() + step)
    })
  };
  const mode = state.selectionMode;
  const year = 31536e6;
  const now = state.date.getTime();
  const newDate = new Date(state.date.getTime());
  while (Math.abs(now - newDate.getTime()) <= year) {
    const map = mapping[mode];
    map.offset(newDate, map[keyCode]);
    if (!(typeof state.disabledDate === "function" && state.disabledDate(newDate))) {
      state.date = newDate;
      emit("pick", newDate, true);
      break;
    }
  }
};
const handleVisibleTimeChange = ({ api: api2, vm, state, t: t2 }) => (value) => {
  const time = parseDate(value, state.timeFormat, t2);
  if (time && api2.checkDateWithinRange(time)) {
    state.date = modifyDate(time, state.year, state.month, state.monthDate);
    state.userInputTime = null;
    if (vm.$refs.timepicker) {
      vm.$refs.timepicker.state.value = state.date;
    }
    state.timePickerVisible = false;
    api2.cusEmit(state.date, true);
  }
};
const handleVisibleDateChange = ({ api: api2, state, t: t2 }) => (value) => {
  const date = parseDate(value, state.dateFormat, t2);
  if (date) {
    if (typeof state.disabledDate === "function" && state.disabledDate(date)) {
      return;
    }
    state.date = modifyTime(date, state.date.getHours(), state.date.getMinutes(), state.date.getSeconds());
    state.userInputDate = null;
    api2.resetView();
    api2.cusEmit(state.date, true);
  }
};
const isValidValue$6 = ({ api: api2, state }) => (value) => value && !isNaN(value) && (typeof state.disabledDate === "function" ? !state.disabledDate(value) : true) && api2.checkDateWithinRange(value);
const getDefaultValue = (state) => () => state.defaultValue ? new Date(state.defaultValue) : /* @__PURE__ */ new Date();
const checkDateWithinRange = ({ state }) => (date) => state.selectableRange.length > 0 ? timeWithinRange(date, state.selectableRange, state.format || "HH:mm:ss") : true;
const selectTz = ({ emit, state }) => (tz) => {
  if (state.timezone.isServiceTimezone) {
    return;
  }
  state.tz = tz.name;
  state.selectedTz = tz;
  state.showpopup = false;
  state.value = dateToLocaleStringForIE(tz.offset, state.date);
  emit("select-change", { tz, date: state.value });
};
const searchTz = ({ api: api2, state }) => (input) => api2.debounceChange(state, input);
const debounceChange = debounce_default(500, (state, input) => {
  if (!input) {
    state.showpopup = false;
    return;
  }
  const tzList = state.renderTzdata.slice();
  let count = 0;
  const filterAry = [];
  state.renderTzdata = tzList.map((tz) => {
    if (tz.name.toLowerCase().includes(input)) {
      tz.visible = false;
      filterAry.push(tz);
      count++;
    } else {
      tz.visible = true;
    }
    return tz;
  });
  if (count === 1) {
    state.tz = filterAry[0].name;
    state.showpopup = false;
  } else {
    state.showpopup = true;
  }
});
const toggleTz = (state) => () => {
  if (state.timezone.isServiceTimezone) {
    return;
  }
  state.renderTzdata = state.renderTzdata && state.renderTzdata.map((item) => {
    item.visible = false;
    return item;
  });
  state.showpopup = true;
};
const handleTzPickClose = (state) => () => state.showpopup = false;
const getRenderTz = ({ state }) => (value) => {
  if (!state.showTimezone || !value) {
    return;
  }
  state.renderTzdata = value[state.lang];
  if (state.renderTzdata) {
    const { isServiceTimezone, to } = state.timezone;
    const selectedTz = state.selectedTz || {};
    const defaultTimezone = selectedTz.tz ? selectedTz.tz : state.defaultTimezone;
    let findTimezoneKey;
    if (to === 0) {
      findTimezoneKey = "";
    } else {
      findTimezoneKey = to > 0 ? "+" : "-";
      findTimezoneKey = findTimezoneKey + fillChar(String(Math.abs(to)), 2) + ":00";
    }
    findTimezoneKey = `(UTC${findTimezoneKey})`;
    state.renderTzdata.some((item) => {
      if (~[selectedTz.tz, defaultTimezone].indexOf(item.tz) || isServiceTimezone && ~item.name.indexOf(findTimezoneKey)) {
        state.selectedTz = item;
        state.tz = state.selectedTz.name;
        return true;
      }
      return false;
    }) || (state.selectedTz = void 0);
  }
};
const computerVisibleTime = ({ state, t: t2 }) => () => state.userInputTime !== null ? state.userInputTime : formatDate$1(state.value || state.defaultValue, state.timeFormat, t2);
const computerVisibleDate = ({ state, t: t2 }) => () => state.userInputDate !== null ? state.userInputDate : formatDate$1(state.value || state.defaultValue, state.dateFormat, t2);
const computerTimeFormat = ({ state }) => () => state.format ? extractTimeFormat(state.timefmt || state.format) : DATEPICKER.DateFormats.timerange;
const watchVisible$5 = ({ api: api2, state }) => () => {
  if (state.needChangeTimezoneData) {
    api2.getRenderTz(state.timezoneData);
    state.needChangeTimezoneData = false;
  }
};
const api$i = [
  "state",
  "isValidValue",
  "handleTzPickClose",
  "toggleTz",
  "searchTz",
  "selectTz",
  "confirm",
  "cusPrevYear",
  "cusNextYear",
  "cusPrevMonth",
  "cusNextMonth",
  "changeToNow",
  "handleMonthPick",
  "handleYearPick",
  "handleDatePick",
  "showMonthPicker",
  "showYearPicker",
  "handleTimePick",
  "handleEnter",
  "handleVisibleTimeChange",
  "handleVisibleDateChange",
  "handleLeave",
  "handleShortcutClick",
  "handleTimePickClose"
];
const initState$a = ({ reactive, computed, api: api2, i18n }) => {
  const state = reactive({
    popperClass: "",
    date: /* @__PURE__ */ new Date(),
    value: "",
    defaultValue: null,
    defaultTime: null,
    showTime: false,
    selectionMode: DATEPICKER.Day,
    shortcuts: "",
    visible: false,
    currentView: DATEPICKER.Date,
    disabledDate: "",
    cellClassName: "",
    selectableRange: [],
    firstDayOfWeek: 7,
    showWeekNumber: false,
    timePickerVisible: false,
    format: "",
    timeFmt: "",
    timezone: {},
    arrowControl: false,
    userInputDate: null,
    userInputTime: null,
    showTimezone: false,
    showpopup: false,
    tz: "",
    selectedTz: null,
    animationName: "",
    startYear: Math.floor((/* @__PURE__ */ new Date()).getFullYear() / 10) * 10,
    disabledNow: computed(() => api2.getDisabledNow()),
    disabledConfirm: computed(() => api2.getDisabledConfirm()),
    year: computed(() => !Array.isArray(state.date) && state.date.getFullYear()),
    month: computed(() => !Array.isArray(state.date) && state.date.getMonth()),
    week: computed(() => getWeekNumber(state.date)),
    monthDate: computed(() => state.date.getDate()),
    footerVisible: computed(() => state.showTime || [DATEPICKER.Dates, DATEPICKER.Years].includes(state.selectionMode)),
    visibleTime: computed(() => api2.computerVisibleTime()),
    visibleDate: computed(() => api2.computerVisibleDate()),
    yearLabel: computed(() => api2.getYearLabel()),
    timeFormat: computed(() => api2.computerTimeFormat()),
    dateFormat: computed(() => state.format ? extractDateFormat(state.format.replace(state.timefmt, "")) : DATE.Date),
    lang: computed(() => i18n ? i18n.locale.replace(/_/g, "-") : "zh-CN"),
    isShowTz: computed(() => state.showTimezone && state.showTime),
    isShowFooter: computed(() => state.footerVisible && [DATEPICKER.Date, DATEPICKER.Year].includes(state.currentView))
  });
  state.needChangeTimezoneData = true;
  return state;
};
const initWatch$5 = ({ watch, state, api: api2, nextTick }) => {
  watch(
    () => state.isShowTz,
    () => {
      setTimeout(() => state.fnUpdatePopper && state.fnUpdatePopper());
    }
  );
  watch(
    () => state.isShowFooter,
    () => {
      setTimeout(() => state.fnUpdatePopper && state.fnUpdatePopper());
    }
  );
  watch(
    () => state.lang,
    () => state.needChangeTimezoneData = true
  );
  watch(() => state.defaultValue, api2.watchDefaultValue);
  watch(() => state.value, api2.watchValue);
  watch(() => state.timePickerVisible, api2.watchTimePickerVisible);
  watch(() => state.selectionMode, api2.watchSelectionMode);
  watch(
    () => state.timePickerVisible,
    () => nextTick(api2.proxyTimePickerDataProperties)
  );
  watch(() => state.visible, api2.watchVisible);
};
const initApi$4 = ({ api: api2, state, t: t2, emit, nextTick, vm, watch }) => {
  Object.assign(api2, {
    t: t2,
    state,
    debounceChange,
    toggleTz: toggleTz(state),
    watchVisible: watchVisible$5({ api: api2, state }),
    getRenderTz: getRenderTz({ state }),
    selectTz: selectTz({ emit, state }),
    handleTzPickClose: handleTzPickClose(state),
    getDefaultValue: getDefaultValue(state),
    showYearPicker: showYearPicker$1({ state }),
    handleTimePickClose: handleTimePickClose(state),
    cusNextMonth: cusNextMonth({ state }),
    cusPrevMonth: cusPrevMonth({ state }),
    resetView: resetView$3({ state }),
    showMonthPicker: showMonthPicker({ state }),
    cusNextYear: cusNextYear$1({ state }),
    cusPrevYear: cusPrevYear$1({ state }),
    watchDefaultValue: watchDefaultValue$2({ state }),
    getYearLabel: getYearLabel$1({ state, t: t2 }),
    cusEmit: cusEmit({ state, emit }),
    watchTimePickerVisible: watchTimePickerVisible({ nextTick, vm }),
    checkDateWithinRange: checkDateWithinRange({ state }),
    watchSelectionMode: watchSelectionMode({ state }),
    proxyTimePickerDataProperties: proxyTimePickerDataProperties({ vm, state, watch }),
    handleKeyControl: handleKeyControl({ state, emit }),
    doPick: doPick$3(emit),
    searchTz: searchTz({ api: api2, state }),
    handleEnter: handleEnter(api2),
    handleLeave: handleLeave({ api: api2, emit }),
    changeToNow: changeToNow({ api: api2, state }),
    isValidValue: isValidValue$6({ api: api2, state }),
    handleClear: handleClear$5({ api: api2, state, emit }),
    watchValue: watchValue$6({ api: api2, state }),
    handleKeydown: handleKeydown$3({ api: api2, state }),
    confirm: confirm$4({ api: api2, state, t: t2 }),
    handleMonthPick: handleMonthPick({ api: api2, state }),
    handleVisibleDateChange: handleVisibleDateChange({ api: api2, state, t: t2 }),
    handleTimePick: handleTimePick({ api: api2, state, t: t2 }),
    handleYearPick: handleYearPick$1({ api: api2, state }),
    handleDatePick: handleDatePick({ api: api2, state, t: t2 }),
    computerVisibleTime: computerVisibleTime({ state, t: t2 }),
    handleShortcutClick: handleShortcutClick$3(api2),
    computerVisibleDate: computerVisibleDate({ state, t: t2 }),
    handleVisibleTimeChange: handleVisibleTimeChange({ api: api2, vm, state, t: t2 }),
    computerTimeFormat: computerTimeFormat({ state }),
    getDisabledNow: getDisabledNow({ state }),
    getDisabledConfirm: getDisabledConfirm({ state })
  });
};
const renderless$i = (props2, { computed, reactive, watch, nextTick }, { t: t2, emit: $emit, vm, i18n }) => {
  const api2 = {};
  const emit = props2.emitter ? props2.emitter.emit : $emit;
  const state = initState$a({ reactive, computed, api: api2, i18n });
  initApi$4({ api: api2, state, t: t2, emit, nextTick, vm, watch });
  initWatch$5({ watch, state, api: api2, nextTick });
  return api2;
};
const watchValue$5 = ({ api: api2, nextTick, state }) => (value) => {
  let date;
  if (value instanceof Date) {
    date = limitTimeRange(value, state.selectableRange, state.format);
  } else if (!value) {
    date = state.defaultValue ? new Date(state.defaultValue) : /* @__PURE__ */ new Date();
  }
  state.date = date;
  if (state.visible && state.needInitAdjust) {
    nextTick(() => api2.adjustSpinners());
    state.needInitAdjust = false;
  }
};
const watchVisible$4 = ({ nextTick, vm, state, api: api2 }) => (value) => {
  if (value) {
    state.oldValue = state.value;
    nextTick(() => {
      vm.$refs.spinner.emitSelectRange("hours");
      api2.adjustSpinners();
    });
  } else {
    state.needInitAdjust = true;
  }
};
const handleCancel$1 = ({ state, emit }) => () => {
  emit("pick", state.oldValue, false);
};
const handleChange$1 = ({ api: api2, state, emit }) => (date) => {
  if (state.visible) {
    state.date = clearMilliseconds(date);
    if (api2.isValidValue(state.date)) {
      emit("pick", state.date, true);
    }
  }
};
const setSelectionRange = ({ state, emit }) => (start, end) => {
  emit("select-range", start, end);
  state.selectionRange = [start, end];
};
const handleConfirm$4 = ({ state, emit }) => (visible = false, first = null) => {
  if (first) {
    return;
  }
  const date = clearMilliseconds(limitTimeRange(state.date, state.selectableRange, state.format));
  emit("pick", date, visible, first);
};
const handleKeydown$2 = ({ api: api2, vm }) => (event) => {
  const mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };
  const keyCode = event.keyCode;
  if (keyCode === 37 || keyCode === 39) {
    const key = mapping[keyCode];
    api2.changeSelectionRange(key);
    event.preventDefault();
    return;
  }
  if (keyCode === 38 || keyCode === 40) {
    const key = mapping[keyCode];
    vm.$refs.spinner.scrollDown(key);
    event.preventDefault();
  }
};
const isValidValue$5 = ({ state }) => (date) => timeWithinRange(date, state.selectableRange, state.format);
const adjustSpinners$2 = (vm) => () => vm.$refs.spinner.adjustSpinners();
const changeSelectionRange$1 = ({ vm, state }) => (step) => {
  const list = [0, 3].concat(state.showSeconds ? [6] : []);
  const mapping = ["hours", "minutes"].concat(state.showSeconds ? ["seconds"] : []);
  const index3 = list.indexOf(state.selectionRange[0]);
  const next = (index3 + step + list.length) % list.length;
  vm.$refs.spinner.emitSelectRange(mapping[next]);
};
const minTimeOfDay = ({ MIN_TIME }) => (date) => modifyDate(MIN_TIME, date.getFullYear(), date.getMonth(), date.getDate());
const maxTimeOfDay = ({ MAX_TIME }) => (date) => modifyDate(MAX_TIME, date.getFullYear(), date.getMonth(), date.getDate());
const advanceTime = (api2) => (date, amount) => new Date(Math.min(date.getTime() + amount, api2.maxTimeOfDay(date).getTime()));
const compuAmPmMode = (state) => () => {
  if ((state.format || "").includes("A")) {
    return "A";
  }
  if ((state.format || "").includes("a")) {
    return "a";
  }
  return "";
};
const watchValue$4 = ({ api: api2, state }) => (value) => {
  if (Array.isArray(value)) {
    if (value[0]) {
      state.minDate = new Date(value[0]);
    } else {
      state.minDate = value[1] ? new Date(api2.minTimeOfDay(new Date(value[1])).getTime()) : /* @__PURE__ */ new Date();
    }
    if (value[1]) {
      state.maxDate = new Date(value[1]);
    } else {
      state.maxDate = value[0] ? api2.advanceTime(new Date(value[0]), 60 * 60 * 1e3) : api2.advanceTime(/* @__PURE__ */ new Date(), 60 * 60 * 1e3);
    }
  } else {
    if (Array.isArray(state.defaultValue)) {
      state.minDate = new Date(state.defaultValue[0]);
      state.maxDate = new Date(state.defaultValue[1]);
    } else if (state.defaultValue) {
      state.minDate = new Date(state.defaultValue);
      state.maxDate = api2.advanceTime(new Date(state.defaultValue), 60 * 60 * 1e3);
    } else {
      state.minDate = /* @__PURE__ */ new Date();
      state.maxDate = api2.advanceTime(/* @__PURE__ */ new Date(), 60 * 60 * 1e3);
    }
  }
};
const adjustSpinners$1 = ({ vm }) => () => {
  if (vm.$refs.minSpinner) {
    vm.$refs.minSpinner.adjustSpinners("min");
    vm.$refs.maxSpinner.adjustSpinners("max");
  }
};
const setMaxMinData = (state) => {
  if (Array.isArray(state.oldValue)) {
    state.oldValue[0] && (state.minDate = clearMilliseconds(state.oldValue[0]));
    state.oldValue[1] && (state.maxDate = clearMilliseconds(state.oldValue[1]));
  }
};
const watchVisible$3 = ({ nextTick, api: api2, state }) => (value) => {
  if (value) {
    state.oldValue = state.value;
    nextTick(() => {
      setMaxMinData(state);
      api2.adjustSpinners();
    });
  }
};
const handleClear$4 = (emit) => () => emit("pick", null);
const handleCancel = ({ emit, api: api2, state }) => () => {
  state.visible = false;
  emit("pick", state.oldValue);
  setMaxMinData(state);
  api2.adjustSpinners();
};
const handleMinChange = ({ api: api2, state }) => (date) => {
  state.minDate = clearMilliseconds(date);
  api2.handleChange();
};
const handleMaxChange = ({ api: api2, state }) => (date) => {
  state.maxDate = clearMilliseconds(date);
  api2.handleChange();
};
const handleChange = ({ api: api2, emit, vm, state }) => () => {
  if (!vm.$refs.minSpinner || !vm.$refs.maxSpinner || !state.visible)
    return;
  if (api2.isValidValue([state.minDate, state.maxDate])) {
    vm.$refs.minSpinner.state.selectableRange = [[api2.minTimeOfDay(state.minDate), state.maxDate]];
    vm.$refs.maxSpinner.state.selectableRange = [[state.minDate, api2.maxTimeOfDay(state.maxDate)]];
    emit("pick", [state.minDate, state.maxDate], state.visible);
  }
};
const setMinSelectionRange = ({ emit, state }) => (start, end) => {
  emit("select-range", start, end, "min");
  state.selectionRange = [start, end];
};
const setMaxSelectionRange = ({ emit, state }) => (start, end) => {
  emit("select-range", start, end, "max");
  state.selectionRange = [start + state.offset, end + state.offset];
};
const handleConfirm$3 = ({ emit, vm, state }) => (visible = false) => {
  const minSelectableRange = vm.$refs.minSpinner.state.selectableRange;
  const maxSelectableRange = vm.$refs.maxSpinner.state.selectableRange;
  state.minDate = limitTimeRange(state.minDate, minSelectableRange, state.format);
  state.maxDate = limitTimeRange(state.maxDate, maxSelectableRange, state.format);
  emit("pick", [state.minDate, state.maxDate], visible);
};
const changeSelectionRange = ({ vm, state }) => (step) => {
  const list = state.showSeconds ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11];
  const mapping = ["hours", "minutes"].concat(state.showSeconds ? ["seconds"] : []);
  const index3 = list.indexOf(state.selectionRange[0]);
  const next = (index3 + step + list.length) % list.length;
  const half = list.length / 2;
  if (next < half) {
    vm.$refs.minSpinner.emitSelectRange(mapping[next]);
  } else {
    vm.$refs.maxSpinner.emitSelectRange(mapping[next - half]);
  }
};
const isValidValue$4 = ({ vm, state }) => (date) => Array.isArray(date) && timeWithinRange(state.minDate, vm.$refs.minSpinner.state.selectableRange) && timeWithinRange(state.maxDate, vm.$refs.maxSpinner.state.selectableRange);
const handleKeydown$1 = ({ api: api2, state }) => (event) => {
  const keyCode = event.keyCode;
  const mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };
  if (keyCode === 37 || keyCode === 39) {
    const step = mapping[keyCode];
    api2.changeSelectionRange(step);
    event.preventDefault();
    return;
  }
  if (keyCode === 38 || keyCode === 40) {
    const step = mapping[keyCode];
    state.spinner.scrollDown(step);
    event.preventDefault();
  }
};
const api$h = ["state", "handleChange", "setSelectionRange", "handleCancel", "handleConfirm", "adjustSpinners"];
const initState$9 = ({ reactive, props: props2, computed, api: api2 }) => {
  const state = reactive({
    popperClass: "",
    format: "HH:mm:ss",
    value: "",
    defaultValue: null,
    date: props2.value || /* @__PURE__ */ new Date(),
    oldValue: /* @__PURE__ */ new Date(),
    selectableRange: [],
    selectionRange: [0, 2],
    disabled: false,
    arrowControl: false,
    visible: false,
    needInitAdjust: true,
    showSeconds: computed(() => (state.format || "").includes("ss")),
    useArrow: computed(() => state.arrowControl || props2.timeArrowControl || false),
    amPmMode: computed(() => api2.compuAmPmMode())
  });
  return state;
};
const renderless$h = (props2, { computed, onMounted, reactive, watch, nextTick }, { t: t2, emit: $emit, vm }) => {
  const api2 = {};
  const emit = props2.emitter ? props2.emitter.emit : $emit;
  const state = initState$9({ reactive, props: props2, computed, api: api2 });
  Object.assign(api2, {
    t: t2,
    state,
    compuAmPmMode: compuAmPmMode(state),
    adjustSpinners: adjustSpinners$2(vm),
    handleCancel: handleCancel$1({ state, emit }),
    setSelectionRange: setSelectionRange({ state, emit }),
    watchVisible: watchVisible$4({ nextTick, vm, state, api: api2 }),
    isValidValue: isValidValue$5({ state }),
    changeSelectionRange: changeSelectionRange$1({ vm, state }),
    handleConfirm: handleConfirm$4({ state, emit }),
    handleKeydown: handleKeydown$2({ api: api2, vm }),
    handleChange: handleChange$1({ api: api2, emit, state }),
    watchValue: watchValue$5({ api: api2, emit, nextTick, state })
  });
  watch(() => state.value, api2.watchValue);
  watch(
    () => props2.show,
    (value) => {
      state.visible = value;
    },
    { immediate: true }
  );
  watch(
    () => state.selectableRange,
    (value) => vm.$refs.spinner.state.selectableRange = value
  );
  watch(
    () => state.defaultValue,
    (value) => !isDate$1(state.value) && (state.date = value ? new Date(value) : /* @__PURE__ */ new Date())
  );
  onMounted(() => {
    api2.handleConfirm(true, true);
  });
  watch(() => state.visible, api2.watchVisible);
  return api2;
};
const getArrowHourList = (state) => () => {
  const hours = state.hours;
  const step = state.step.hours;
  return [hours - step >= 0 ? hours - step : void 0, hours, hours + step <= 23 ? hours + step : void 0];
};
const getArrowMinuteList = (state) => () => {
  const minutes = state.minutes;
  const step = state.step.minutes;
  return [minutes - step >= 0 ? minutes - step : void 0, minutes, minutes + step <= 59 ? minutes + step : void 0];
};
const getArrowSecondList = (state) => () => {
  const seconds = state.seconds;
  const step = state.step.seconds;
  return [seconds - step >= 0 ? seconds - step : void 0, seconds, seconds + step <= 59 ? seconds + step : void 0];
};
const increase = ({ api: api2, state }) => () => api2.scrollDown(state.step[state.currentScrollbar]);
const decrease = ({ api: api2, state }) => () => api2.scrollDown(-state.step[state.currentScrollbar]);
const modifyDateField = ({ emit, props: props2, state }) => (type, value) => {
  if (state[type] === value) {
    return;
  }
  switch (type) {
    case "hours":
      emit("change", modifyTime(props2.date, value, state.minutes, state.seconds));
      break;
    case "minutes":
      emit("change", modifyTime(props2.date, state.hours, value, state.seconds));
      break;
    case "seconds":
      emit("change", modifyTime(props2.date, state.hours, state.minutes, value));
      break;
  }
};
const handleClick$2 = (api2) => (type, { value, disabled }) => {
  if (!disabled) {
    api2.modifyDateField(type, value);
    api2.emitSelectRange(type);
    api2.adjustSpinner(type, value);
  }
};
const emitSelectRange = ({ emit, state }) => (type) => {
  if (type === "hours") {
    emit("select-range", 0, 2);
  } else if (type === "minutes") {
    emit("select-range", 3, 5);
  } else if (type === "seconds") {
    emit("select-range", 6, 8);
  }
  state.currentScrollbar = type;
};
const bindScrollEvent = ({ api: api2, vm }) => () => {
  const bindFuntion = (type) => {
    vm.$refs[type].$refs.wrap.onscroll = (e) => {
      api2.handleScroll(type, e);
    };
  };
  bindFuntion("hours");
  bindFuntion("minutes");
  bindFuntion("seconds");
};
const handleScroll = ({ api: api2, vm, state }) => (type) => {
  let value = Math.round(
    (vm.$refs[type].$refs.wrap.scrollTop - (api2.scrollBarHeight(type) * 0.5 - 10) / api2.typeItemHeight(type) + 3) / api2.typeItemHeight(type)
  );
  const step = state.step[type];
  const limitVal = { hours: 23, minutes: 59, seconds: 59 };
  Object.keys(limitVal).forEach((key) => limitVal[key] = Math.floor(limitVal[key] / step) * step);
  value = api2.selectDateScroll(type, Math.min(value * step, limitVal[type]));
  api2.modifyDateField(type, value);
};
const selectDateScroll = ({ state, props: props2 }) => (type, value) => {
  if (Object.keys(props2.endDate).length !== 0) {
    const endHours = props2.endDate.getHours();
    const endMinutes = props2.endDate.getMinutes();
    const endSeconds = props2.endDate.getSeconds();
    if (type === "hours") {
      value = value > endHours ? state.hours : value;
    } else if (type === "minutes") {
      value = state.hours === endHours && value > endMinutes ? state.minutes : value;
    } else {
      value = state.hours === endHours && state.minutes === endMinutes && value > endSeconds ? state.seconds : value;
    }
  } else if (Object.keys(props2.startDate).length !== 0) {
    const startHours = props2.startDate.getHours();
    const startMinutes = props2.startDate.getMinutes();
    const startSeconds = props2.startDate.getSeconds();
    if (type === "hours") {
      value = value < startHours ? state.hours : value;
    } else if (type === "minutes") {
      value = state.hours === startHours && value < startMinutes ? state.minutes : value;
    } else {
      value = state.hours === startHours && state.minutes === startMinutes && value < startSeconds ? state.seconds : value;
    }
  } else if (state.selectableRange.length > 0) {
    const [startRange, endRange] = state.selectableRange[0];
    const startRangeHours = startRange.getHours();
    const endRangeHours = endRange.getHours();
    const startRangeMinutes = startRange.getMinutes();
    const endRangeMinutes = endRange.getMinutes();
    const startRangeSeconds = startRange.getSeconds();
    const endRangeSeconds = endRange.getSeconds();
    if (type === "hours") {
      value = value < startRangeHours || value > endRangeHours ? state.hours : value;
    } else if (type === "minutes") {
      if (state.hours === startRangeHours) {
        value = value < startRangeMinutes ? startRangeMinutes : value;
      } else if (state.hours === endRangeHours) {
        value = value > endRangeMinutes ? endRangeMinutes : value;
      }
    } else {
      if (state.hours === startRangeHours && state.minutes === startRangeMinutes) {
        value = value < startRangeSeconds ? startRangeSeconds : value;
      } else if (state.hours === endRangeHours && state.minutes === endRangeMinutes) {
        value = value > endRangeSeconds ? endRangeSeconds : value;
      }
      value = startRangeSeconds === 0 && value < 1 ? 0 : value;
    }
  }
  return value;
};
const adjustSpinners = ({ api: api2, state, vm }) => (type) => {
  if (type) {
    const year = vm.date.getFullYear();
    const month = vm.date.getUTCMonth() + 1;
    const day = vm.date.getDate();
    if (type === "min" && vm.endDate instanceof Date) {
      state.selectableRange = [[/* @__PURE__ */ new Date(`${year}-${month}-${day} 00:00:00`), vm.endDate]];
    } else if (type === "max" && vm.startDate instanceof Date) {
      state.selectableRange = [[vm.startDate, /* @__PURE__ */ new Date(`${year}-${month}-${day} 23:59:59`)]];
    }
  }
  api2.adjustSpinner("hours", state.hours);
  api2.adjustSpinner("minutes", state.minutes);
  api2.adjustSpinner("seconds", state.seconds);
};
const adjustCurrentSpinner = ({ api: api2, state }) => (type) => {
  api2.adjustSpinner(type, state[type]);
};
const adjustSpinner = ({ api: api2, props: props2, vm, state }) => (type, value) => {
  if (props2.arrowControl) {
    return;
  }
  const el = vm.$refs[type].$refs.wrap;
  if (el) {
    el.scrollTop = Math.max(0, value / state.step[type] * api2.typeItemHeight(type));
  }
};
const scrollDown$1 = ({ api: api2, state }) => (step) => {
  if (!state.currentScrollbar) {
    api2.emitSelectRange("hours");
  }
  const label = state.currentScrollbar;
  const hoursArr = state.hoursList;
  let now = state[label];
  let diabledHour;
  const find = (arr, value, key) => arr.find((item) => item[key] === value);
  if (state.currentScrollbar === "hours") {
    let total = Math.abs(step);
    let length = hoursArr.length;
    while (length-- && total) {
      now = (now + step + hoursArr.length * total) % (hoursArr.length * total);
      diabledHour = find(hoursArr, now, "hour");
      if (diabledHour && diabledHour.disabled) {
        continue;
      }
      total -= total;
    }
    if (diabledHour && diabledHour.disabled) {
      return;
    }
  } else {
    now = (now + step + 60) % 60;
  }
  now = Math.round(now / state.step[label]) * state.step[label];
  api2.modifyDateField(label, now);
  api2.adjustSpinner(label, now);
};
const amPm = (props2) => (hour) => {
  let shouldShowAmPm = props2.amPmMode.toLowerCase() === "a";
  if (!shouldShowAmPm) {
    return "";
  }
  let isCapital = props2.amPmMode === "A";
  let content = hour < 12 ? " am" : " pm";
  if (isCapital) {
    content = content.toUpperCase();
  }
  return content;
};
const typeItemHeight = ({ vm }) => (type) => vm.$refs[type].$el.querySelector(DATEPICKER.Qurtyli).offsetHeight;
const scrollBarHeight = (vm) => (type) => vm.$refs[type].$el.offsetHeight;
const api$g = [
  "state",
  "emitSelectRange",
  "adjustCurrentSpinner",
  "handleClick",
  "decrease",
  "increase",
  "amPm",
  "adjustSpinners"
];
const initState$8 = ({ reactive, computed, props: props2, api: api2 }) => {
  const state = reactive({
    selectableRange: [],
    currentScrollbar: null,
    hours: computed(() => props2.date.getHours()),
    minutes: computed(() => props2.date.getMinutes()),
    seconds: computed(() => props2.date.getSeconds()),
    hoursList: computed(
      () => Array.from(getRangeHours(state.selectableRange)).map((disabled, hour) => ({ disabled, hour })).filter(({ hour }) => !(hour % state.step.hours))
    ),
    minutesList: computed(
      () => Array.from(getRangeMinutes(state.selectableRange, state.hours)).map((disabled, minute) => ({ disabled, minute })).filter(({ minute }) => !(minute % state.step.minutes))
    ),
    secondsList: computed(
      () => Array.from(new Array(60)).map((item, second) => ({ second })).filter(({ second }) => !(second % state.step.seconds))
    ),
    arrowHourList: computed(() => api2.getArrowHourList()),
    arrowMinuteList: computed(() => api2.getArrowMinuteList()),
    arrowSecondList: computed(() => api2.getArrowSecondList()),
    animationName: "",
    step: computed(() => ({
      hours: props2.step.hour * 1 || 1,
      minutes: props2.step.minute * 1 || 1,
      seconds: props2.step.second * 1 || 1
    }))
  });
  return state;
};
const renderless$g = (props2, { computed, onMounted, reactive, watch, nextTick }, { emit, vm, constants }) => {
  const api2 = {};
  const state = initState$8({ reactive, computed, props: props2, api: api2 });
  onMounted(() => {
    !props2.arrowControl && api2.bindScrollEvent();
  });
  Object.assign(api2, {
    state,
    amPm: amPm(props2),
    typeItemHeight: typeItemHeight({ vm }),
    scrollBarHeight: scrollBarHeight(vm),
    getArrowHourList: getArrowHourList(state),
    getArrowSecondList: getArrowSecondList(state),
    getArrowMinuteList: getArrowMinuteList(state),
    emitSelectRange: emitSelectRange({ emit, state }),
    modifyDateField: modifyDateField({ emit, props: props2, state }),
    bindScrollEvent: bindScrollEvent({ api: api2, vm }),
    adjustSpinners: adjustSpinners({ api: api2, state, vm }),
    adjustSpinner: adjustSpinner({ api: api2, props: props2, vm, state }),
    increase: increase({ api: api2, state }),
    decrease: decrease({ api: api2, state }),
    handleClick: handleClick$2(api2),
    scrollDown: scrollDown$1({ api: api2, state }),
    handleScroll: handleScroll({ api: api2, vm, state }),
    adjustCurrentSpinner: adjustCurrentSpinner({ api: api2, state }),
    selectDateScroll: selectDateScroll({ state, props: props2 })
  });
  watch(
    () => props2.date,
    () => {
      const timeType = ["hours", "minutes", "seconds"];
      timeType.forEach((type) => {
        api2.modifyDateField(type, Math.round(state[type] / state.step[type]) * state.step[type]);
      });
      nextTick(api2.adjustSpinners);
    },
    { immediate: true }
  );
  watch(
    () => state.hoursList,
    () => {
      state.animationName = constants.ANIMATIONNAME;
    },
    { immediate: true }
  );
  return api2;
};
var repeat_click_default = (el, binding) => {
  const LONG_PRESS_INTERVAL = 200;
  let interval = null;
  let startTime;
  const handler = () => {
    typeof binding.value === "function" && binding.value.apply();
  };
  const clear2 = () => {
    if (Date.now() - startTime < LONG_PRESS_INTERVAL) {
      handler();
    }
    clearInterval(interval);
    interval = null;
  };
  on(el, "mousedown", (e) => {
    if (e.button !== 0) {
      return;
    }
    startTime = Date.now();
    once(document, "mouseup", clear2);
    clearInterval(interval);
    interval = setInterval(handler, LONG_PRESS_INTERVAL);
  });
};
function _createForOfIteratorHelperLoose$o(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$o(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$o(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$o(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$o(o, minLen);
}
function _arrayLikeToArray$o(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$o = function _export_sfc2(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$o(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$o = defineComponent({
  emits: ["change", "select-range"],
  components: {
    TinyScrollbar: _sfc_main$p,
    IconChevronDown: index$h(),
    IconChevronUp: index$i()
  },
  directives: directive({
    repeatClick: {
      bind: repeat_click_default
    }
  }),
  props: [].concat(props, ["date", "defaultValue", "showSeconds", "arrowControl", "amPmMode", "step", "startDate", "endDate"]),
  setup: function setup$1(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$g,
      api: api$g
    });
  }
});
var _hoisted_1$n = ["onClick"];
var _hoisted_2$g = ["onClick"];
var _hoisted_3$f = ["onClick"];
var _hoisted_4$c = {
  class: "tiny-time-spinner__arrow tiny-icon-arrow-up"
};
var _hoisted_5$b = {
  class: "tiny-time-spinner__arrow tiny-icon-arrow-down"
};
var _hoisted_6$b = {
  class: "tiny-time-spinner__arrow tiny-icon-arrow-up"
};
var _hoisted_7$a = {
  class: "tiny-time-spinner__arrow tiny-icon-arrow-down"
};
var _hoisted_8$9 = {
  class: "tiny-time-spinner__arrow tiny-icon-arrow-up"
};
var _hoisted_9$7 = {
  class: "tiny-time-spinner__arrow tiny-icon-arrow-down"
};
function _sfc_render$o(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_scrollbar = resolveComponent("tiny-scrollbar");
  var _component_icon_chevron_up = resolveComponent("icon-chevron-up");
  var _component_icon_chevron_down = resolveComponent("icon-chevron-down");
  var _directive_repeat_click = resolveDirective("repeat-click");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["tiny-time-spinner", {
        "has-seconds": _ctx.showSeconds
      }])
    },
    [!_ctx.arrowControl ? (openBlock(), createElementBlock(
      Fragment,
      {
        key: 0
      },
      [createVNode(_component_tiny_scrollbar, {
        onMouseenter: _cache[0] || (_cache[0] = function($event) {
          return _ctx.emitSelectRange("hours");
        }),
        onMousemove: _cache[1] || (_cache[1] = function($event) {
          return _ctx.adjustCurrentSpinner("hours");
        }),
        class: normalizeClass([[_ctx.state.animationName], "tiny-time-spinner__wrapper"]),
        "wrap-style": "max-height: inherit;",
        "view-class": "tiny-time-spinner__list",
        noresize: "",
        tag: "ul",
        ref: "hours"
      }, {
        default: withCtx(function() {
          return [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.hoursList, function(_ref) {
              var disabled = _ref.disabled, hour = _ref.hour;
              return openBlock(), createElementBlock("li", {
                class: normalizeClass(["tiny-time-spinner__item", {
                  active: hour === _ctx.state.hours,
                  disabled
                }]),
                "data-tag": "li",
                key: hour,
                onClick: function onClick($event) {
                  return _ctx.handleClick("hours", {
                    value: hour,
                    disabled
                  });
                }
              }, [createBaseVNode(
                "span",
                null,
                toDisplayString(("0" + (_ctx.amPmMode ? hour % 12 || 12 : hour)).slice(-2)) + toDisplayString(_ctx.amPm(hour)),
                1
                /* TEXT */
              )], 10, _hoisted_1$n);
            }),
            128
            /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */
      }, 8, ["class"]), createVNode(_component_tiny_scrollbar, {
        onMouseenter: _cache[2] || (_cache[2] = function($event) {
          return _ctx.emitSelectRange("minutes");
        }),
        onMousemove: _cache[3] || (_cache[3] = function($event) {
          return _ctx.adjustCurrentSpinner("minutes");
        }),
        class: normalizeClass([[_ctx.state.animationName + "-up"], "tiny-time-spinner__wrapper"]),
        "wrap-style": "max-height: inherit;",
        "view-class": "tiny-time-spinner__list",
        noresize: "",
        tag: "ul",
        ref: "minutes"
      }, {
        default: withCtx(function() {
          return [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.minutesList, function(_ref2) {
              var disabled = _ref2.disabled, minute = _ref2.minute;
              return openBlock(), createElementBlock("li", {
                onClick: function onClick($event) {
                  return _ctx.handleClick("minutes", {
                    value: minute,
                    disabled: false
                  });
                },
                key: minute,
                class: normalizeClass(["tiny-time-spinner__item", {
                  active: minute === _ctx.state.minutes,
                  disabled: !disabled
                }]),
                "data-tag": "li"
              }, [createBaseVNode(
                "span",
                null,
                toDisplayString(("0" + minute).slice(-2)),
                1
                /* TEXT */
              )], 10, _hoisted_2$g);
            }),
            128
            /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */
      }, 8, ["class"]), withDirectives(createVNode(_component_tiny_scrollbar, {
        onMouseenter: _cache[4] || (_cache[4] = function($event) {
          return _ctx.emitSelectRange("seconds");
        }),
        onMousemove: _cache[5] || (_cache[5] = function($event) {
          return _ctx.adjustCurrentSpinner("seconds");
        }),
        class: normalizeClass([[_ctx.state.animationName], "tiny-time-spinner__wrapper"]),
        "wrap-style": "max-height: inherit;",
        "view-class": "tiny-time-spinner__list",
        noresize: "",
        tag: "ul",
        ref: "seconds"
      }, {
        default: withCtx(function() {
          return [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.secondsList, function(_ref3) {
              var second = _ref3.second;
              return openBlock(), createElementBlock("li", {
                onClick: function onClick($event) {
                  return _ctx.handleClick("seconds", {
                    value: second,
                    disabled: false
                  });
                },
                class: normalizeClass(["tiny-time-spinner__item", {
                  active: second === _ctx.state.seconds
                }]),
                "data-tag": "li",
                key: second
              }, [createBaseVNode(
                "span",
                null,
                toDisplayString(("0" + second).slice(-2)),
                1
                /* TEXT */
              )], 10, _hoisted_3$f);
            }),
            128
            /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */
      }, 8, ["class"]), [[vShow, _ctx.showSeconds]])],
      64
      /* STABLE_FRAGMENT */
    )) : createCommentVNode("v-if", true), _ctx.arrowControl ? (openBlock(), createElementBlock(
      Fragment,
      {
        key: 1
      },
      [createBaseVNode(
        "div",
        {
          onMouseenter: _cache[6] || (_cache[6] = function($event) {
            return _ctx.emitSelectRange("hours");
          }),
          class: "tiny-time-spinner__wrapper is-arrow"
        },
        [withDirectives((openBlock(), createElementBlock("i", _hoisted_4$c, [createVNode(_component_icon_chevron_up)])), [[_directive_repeat_click, _ctx.decrease]]), withDirectives((openBlock(), createElementBlock("i", _hoisted_5$b, [createVNode(_component_icon_chevron_down)])), [[_directive_repeat_click, _ctx.increase]]), createBaseVNode(
          "ul",
          {
            class: normalizeClass(["tiny-time-spinner__list", [_ctx.state.animationName]]),
            ref: "hours"
          },
          [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.arrowHourList, function(hour, key) {
              return openBlock(), createElementBlock(
                "li",
                {
                  class: normalizeClass(["tiny-time-spinner__item", {
                    active: hour === _ctx.state.hours,
                    disabled: _ctx.state.hoursList.find(function(item) {
                      return item.hour === hour;
                    }) && _ctx.state.hoursList.find(function(item) {
                      return item.hour === hour;
                    }).disabled
                  }]),
                  "data-tag": "li",
                  key
                },
                [createBaseVNode(
                  "span",
                  null,
                  toDisplayString(hour === void 0 ? "" : ("0" + (_ctx.amPmMode ? hour % 12 || 12 : hour)).slice(-2) + _ctx.amPm(hour)),
                  1
                  /* TEXT */
                )],
                2
                /* CLASS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        )],
        32
        /* NEED_HYDRATION */
      ), createBaseVNode(
        "div",
        {
          onMouseenter: _cache[7] || (_cache[7] = function($event) {
            return _ctx.emitSelectRange("minutes");
          }),
          class: "tiny-time-spinner__wrapper is-arrow"
        },
        [withDirectives((openBlock(), createElementBlock("i", _hoisted_6$b, [createVNode(_component_icon_chevron_up)])), [[_directive_repeat_click, _ctx.decrease]]), withDirectives((openBlock(), createElementBlock("i", _hoisted_7$a, [createVNode(_component_icon_chevron_down)])), [[_directive_repeat_click, _ctx.increase]]), createBaseVNode(
          "ul",
          {
            class: normalizeClass(["tiny-time-spinner__list", [_ctx.state.animationName + "-up"]]),
            ref: "minutes"
          },
          [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.arrowMinuteList, function(minute, key) {
              return openBlock(), createElementBlock(
                "li",
                {
                  class: normalizeClass(["tiny-time-spinner__item", {
                    active: minute === _ctx.state.minutes
                  }]),
                  "data-tag": "li",
                  key
                },
                [createBaseVNode(
                  "span",
                  null,
                  toDisplayString(minute === void 0 ? "" : ("0" + minute).slice(-2)),
                  1
                  /* TEXT */
                )],
                2
                /* CLASS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        )],
        32
        /* NEED_HYDRATION */
      ), _ctx.showSeconds ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          onMouseenter: _cache[8] || (_cache[8] = function($event) {
            return _ctx.emitSelectRange("seconds");
          }),
          class: "tiny-time-spinner__wrapper is-arrow"
        },
        [withDirectives((openBlock(), createElementBlock("i", _hoisted_8$9, [createVNode(_component_icon_chevron_up)])), [[_directive_repeat_click, _ctx.decrease]]), withDirectives((openBlock(), createElementBlock("i", _hoisted_9$7, [createVNode(_component_icon_chevron_down)])), [[_directive_repeat_click, _ctx.increase]]), createBaseVNode(
          "ul",
          {
            class: normalizeClass(["tiny-time-spinner__list", [_ctx.state.animationName]]),
            ref: "seconds"
          },
          [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.arrowSecondList, function(second, key) {
              return openBlock(), createElementBlock(
                "li",
                {
                  class: normalizeClass(["tiny-time-spinner__item", {
                    active: second === _ctx.state.seconds
                  }]),
                  "data-tag": "li",
                  key
                },
                [createBaseVNode(
                  "span",
                  null,
                  toDisplayString(second === void 0 ? "" : ("0" + second).slice(-2)),
                  1
                  /* TEXT */
                )],
                2
                /* CLASS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        )],
        32
        /* NEED_HYDRATION */
      )) : createCommentVNode("v-if", true)],
      64
      /* STABLE_FRAGMENT */
    )) : createCommentVNode("v-if", true)],
    2
    /* CLASS */
  );
}
var pc$6 = /* @__PURE__ */ _export_sfc$o(_sfc_main$o, [["render", _sfc_render$o]]);
function _createForOfIteratorHelperLoose$n(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$n(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$n(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$n(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$n(o, minLen);
}
function _arrayLikeToArray$n(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$n = function _export_sfc22(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$n(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var classes$5 = {
  "wrapper": "max-h-[270px] overflow-hidden flex-1 align-top relative",
  "is-arrow": "left-0 box-border text-center overflow-hidden",
  "list": "translate-y-[110px] p-0 m-0 list-none text-center after:content-[''] after:block after:h-[100px] after:w-full",
  "item": "text-sm text-color-text-primary h-12 w-12 py-1 cursor-pointer mx-auto my-0",
  "text": "rounded my-0 flex items-center justify-center h-full hover:bg-color-bg-2",
  "arrow": "text-xs text-color-text-placeholder h-3 leading-3 absolute left-0 w-full z-[1] text-center cursor-pointer",
  "active": "bg-color-fill-6 hover:bg-color-fill-6 text-color-brand",
  "disabled": "text-color-text-placeholder cursor-not-allowed bg-transparent hover:bg-transparent"
};
var _sfc_main$n = defineComponent({
  emits: ["change", "select-range"],
  components: {
    TinyScrollbar: _sfc_main$p,
    IconChevronDown: index$h(),
    IconChevronUp: index$i()
  },
  directives: directive({
    repeatClick: {
      bind: repeat_click_default
    }
  }),
  props: [].concat(props, ["date", "defaultValue", "showSeconds", "arrowControl", "amPmMode", "step"]),
  setup: function setup$12(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$g,
      api: api$g,
      classes: classes$5
    });
  }
});
var _hoisted_1$m = ["onClick"];
var _hoisted_2$f = ["onClick"];
var _hoisted_3$e = ["onClick"];
var _hoisted_4$b = {
  "data-tag": "tiny-time-spinner__arrow tiny-icon-arrow-up"
};
var _hoisted_5$a = {
  "data-tag": "tiny-time-spinner__arrow tiny-icon-arrow-down"
};
var _hoisted_6$a = {
  "data-tag": "tiny-time-spinner__arrow tiny-icon-arrow-up"
};
var _hoisted_7$9 = {
  "data-tag": "tiny-time-spinner__arrow tiny-icon-arrow-down"
};
var _hoisted_8$8 = {
  "data-tag": "tiny-time-spinner__arrow tiny-icon-arrow-up"
};
var _hoisted_9$6 = {
  "data-tag": "tiny-time-spinner__arrow tiny-icon-arrow-down"
};
function _sfc_render$n(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_scrollbar = resolveComponent("tiny-scrollbar");
  var _component_icon_chevron_up = resolveComponent("icon-chevron-up");
  var _component_icon_chevron_down = resolveComponent("icon-chevron-down");
  var _directive_repeat_click = resolveDirective("repeat-click");
  return openBlock(), createElementBlock(
    "div",
    {
      "data-tag": "tiny-time-spinner",
      class: normalizeClass(["flex", {
        "has-seconds": _ctx.showSeconds
      }])
    },
    [!_ctx.arrowControl ? (openBlock(), createElementBlock(
      Fragment,
      {
        key: 0
      },
      [createVNode(_component_tiny_scrollbar, {
        onMouseenter: _cache[0] || (_cache[0] = function($event) {
          return _ctx.emitSelectRange("hours");
        }),
        onMousemove: _cache[1] || (_cache[1] = function($event) {
          return _ctx.adjustCurrentSpinner("hours");
        }),
        class: normalizeClass([_ctx.gcls("wrapper"), _ctx.state.animationName]),
        "data-tag": "tiny-time-spinner__wrapper",
        "wrap-style": "max-height: inherit;",
        "data-view-class": "tiny-time-spinner__list",
        "view-class": _ctx.gcls("list"),
        noresize: "",
        tag: "div",
        ref: "hours"
      }, {
        default: withCtx(function() {
          return [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.hoursList, function(_ref) {
              var _ctx$m;
              var disabled = _ref.disabled, hour = _ref.hour;
              return openBlock(), createElementBlock("div", {
                onClick: function onClick($event) {
                  return _ctx.handleClick("hours", {
                    value: hour,
                    disabled
                  });
                },
                "data-tag": "li",
                key: hour,
                class: normalizeClass([_ctx.gcls("item")])
              }, [createBaseVNode(
                "span",
                {
                  class: normalizeClass(_ctx.m(_ctx.gcls("text"), (_ctx$m = {}, _ctx$m[_ctx.gcls("active")] = hour === _ctx.state.hours, _ctx$m[_ctx.gcls("disabled")] = disabled, _ctx$m)))
                },
                toDisplayString(("0" + (_ctx.amPmMode ? hour % 12 || 12 : hour)).slice(-2)) + toDisplayString(_ctx.amPm(hour)),
                3
                /* TEXT, CLASS */
              )], 10, _hoisted_1$m);
            }),
            128
            /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */
      }, 8, ["class", "view-class"]), createVNode(_component_tiny_scrollbar, {
        onMouseenter: _cache[2] || (_cache[2] = function($event) {
          return _ctx.emitSelectRange("minutes");
        }),
        onMousemove: _cache[3] || (_cache[3] = function($event) {
          return _ctx.adjustCurrentSpinner("minutes");
        }),
        class: normalizeClass([_ctx.gcls("wrapper"), _ctx.state.animationName + "-up"]),
        "data-tag": "tiny-time-spinner__wrapper",
        "wrap-style": "max-height: inherit;",
        "data-view-class": "tiny-time-spinner__list",
        "view-class": _ctx.gcls("list"),
        noresize: "",
        tag: "div",
        ref: "minutes"
      }, {
        default: withCtx(function() {
          return [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.minutesList, function(_ref2) {
              var _ctx$m2;
              var disabled = _ref2.disabled, minute = _ref2.minute;
              return openBlock(), createElementBlock("div", {
                onClick: function onClick($event) {
                  return _ctx.handleClick("minutes", {
                    value: minute,
                    disabled: false
                  });
                },
                key: minute,
                "data-tag": "li",
                class: normalizeClass([_ctx.gcls("item")])
              }, [createBaseVNode(
                "span",
                {
                  class: normalizeClass(_ctx.m(_ctx.gcls("text"), (_ctx$m2 = {}, _ctx$m2[_ctx.gcls("active")] = minute === _ctx.state.minutes, _ctx$m2[_ctx.gcls("disabled")] = !disabled, _ctx$m2)))
                },
                toDisplayString(("0" + minute).slice(-2)),
                3
                /* TEXT, CLASS */
              )], 10, _hoisted_2$f);
            }),
            128
            /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */
      }, 8, ["class", "view-class"]), withDirectives(createVNode(_component_tiny_scrollbar, {
        onMouseenter: _cache[4] || (_cache[4] = function($event) {
          return _ctx.emitSelectRange("seconds");
        }),
        onMousemove: _cache[5] || (_cache[5] = function($event) {
          return _ctx.adjustCurrentSpinner("seconds");
        }),
        class: normalizeClass([_ctx.gcls("wrapper"), _ctx.state.animationName]),
        "data-tag": "tiny-time-spinner__wrapper",
        "wrap-style": "max-height: inherit;",
        "data-view-class": "tiny-time-spinner__list",
        "view-class": _ctx.gcls("list"),
        noresize: "",
        tag: "div",
        ref: "seconds"
      }, {
        default: withCtx(function() {
          return [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.secondsList, function(_ref3) {
              var _ctx$m3;
              var second = _ref3.second;
              return openBlock(), createElementBlock("div", {
                onClick: function onClick($event) {
                  return _ctx.handleClick("seconds", {
                    value: second,
                    disabled: false
                  });
                },
                "data-tag": "li",
                class: normalizeClass([_ctx.gcls("item")]),
                key: second
              }, [createBaseVNode(
                "span",
                {
                  class: normalizeClass(_ctx.m(_ctx.gcls("text"), (_ctx$m3 = {}, _ctx$m3[_ctx.gcls("active")] = second === _ctx.state.seconds, _ctx$m3)))
                },
                toDisplayString(("0" + second).slice(-2)),
                3
                /* TEXT, CLASS */
              )], 10, _hoisted_3$e);
            }),
            128
            /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */
      }, 8, ["class", "view-class"]), [[vShow, _ctx.showSeconds]])],
      64
      /* STABLE_FRAGMENT */
    )) : createCommentVNode("v-if", true), _ctx.arrowControl ? (openBlock(), createElementBlock(
      Fragment,
      {
        key: 1
      },
      [createBaseVNode(
        "div",
        {
          onMouseenter: _cache[6] || (_cache[6] = function($event) {
            return _ctx.emitSelectRange("hours");
          }),
          "data-tag": "tiny-time-spinner__wrapper is-arrow",
          class: normalizeClass(_ctx.gcls(["wrapper", "is-arrow"]))
        },
        [withDirectives((openBlock(), createElementBlock("i", _hoisted_4$b, [createVNode(_component_icon_chevron_up)])), [[_directive_repeat_click, _ctx.decrease]]), withDirectives((openBlock(), createElementBlock("i", _hoisted_5$a, [createVNode(_component_icon_chevron_down)])), [[_directive_repeat_click, _ctx.increase]]), createBaseVNode(
          "ul",
          {
            "data-tag": "tiny-time-spinner__list",
            ref: "hours",
            class: normalizeClass([_ctx.state.animationName])
          },
          [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.arrowHourList, function(hour, key) {
              var _ctx$m4;
              return openBlock(), createElementBlock("div", {
                "data-tag": "li",
                key
              }, [createBaseVNode(
                "span",
                {
                  class: normalizeClass(_ctx.m(_ctx.gcls("text"), (_ctx$m4 = {}, _ctx$m4[_ctx.gcls("active")] = hour === _ctx.state.hours, _ctx$m4[_ctx.gcls("disabled")] = _ctx.state.hoursList.find(function(item) {
                    return item.hour === hour;
                  }) && _ctx.state.hoursList.find(function(item) {
                    return item.hour === hour;
                  }).disabled, _ctx$m4)))
                },
                toDisplayString(hour === void 0 ? "" : ("0" + (_ctx.amPmMode ? hour % 12 || 12 : hour)).slice(-2) + _ctx.amPm(hour)),
                3
                /* TEXT, CLASS */
              )]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        )],
        34
        /* CLASS, NEED_HYDRATION */
      ), createBaseVNode(
        "div",
        {
          onMouseenter: _cache[7] || (_cache[7] = function($event) {
            return _ctx.emitSelectRange("minutes");
          }),
          "data-tag": "tiny-time-spinner__wrapper is-arrow",
          class: normalizeClass(_ctx.gcls(["wrapper", "is-arrow"]))
        },
        [withDirectives((openBlock(), createElementBlock("i", _hoisted_6$a, [createVNode(_component_icon_chevron_up)])), [[_directive_repeat_click, _ctx.decrease]]), withDirectives((openBlock(), createElementBlock("i", _hoisted_7$9, [createVNode(_component_icon_chevron_down)])), [[_directive_repeat_click, _ctx.increase]]), createBaseVNode(
          "ul",
          {
            "data-tag": "tiny-time-spinner__list",
            ref: "minutes",
            class: normalizeClass([_ctx.state.animationName + "-up"])
          },
          [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.arrowMinuteList, function(minute, key) {
              var _ctx$m5;
              return openBlock(), createElementBlock("div", {
                "data-tag": "li",
                key
              }, [createBaseVNode(
                "span",
                {
                  class: normalizeClass(_ctx.m(_ctx.gcls("text"), (_ctx$m5 = {}, _ctx$m5[_ctx.gcls("active")] = minute === _ctx.state.minutes, _ctx$m5)))
                },
                toDisplayString(minute === void 0 ? "" : ("0" + minute).slice(-2)),
                3
                /* TEXT, CLASS */
              )]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        )],
        34
        /* CLASS, NEED_HYDRATION */
      ), _ctx.showSeconds ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          onMouseenter: _cache[8] || (_cache[8] = function($event) {
            return _ctx.emitSelectRange("seconds");
          }),
          "data-tag": "tiny-time-spinner__wrapper is-arrow",
          class: normalizeClass(_ctx.gcls(["wrapper", "is-arrow"]))
        },
        [withDirectives((openBlock(), createElementBlock("i", _hoisted_8$8, [createVNode(_component_icon_chevron_up)])), [[_directive_repeat_click, _ctx.decrease]]), withDirectives((openBlock(), createElementBlock("i", _hoisted_9$6, [createVNode(_component_icon_chevron_down)])), [[_directive_repeat_click, _ctx.increase]]), createBaseVNode(
          "ul",
          {
            "data-tag": "tiny-time-spinner__list",
            ref: "seconds",
            class: normalizeClass([_ctx.state.animationName])
          },
          [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.arrowSecondList, function(second, key) {
              var _ctx$m6;
              return openBlock(), createElementBlock("div", {
                "data-tag": "li",
                key
              }, [createBaseVNode(
                "span",
                {
                  class: normalizeClass(_ctx.m(_ctx.gcls("text"), (_ctx$m6 = {}, _ctx$m6[_ctx.gcls("active")] = second === _ctx.state.seconds, _ctx$m6)))
                },
                toDisplayString(second === void 0 ? "" : ("0" + second).slice(-2)),
                3
                /* TEXT, CLASS */
              )]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        )],
        34
        /* CLASS, NEED_HYDRATION */
      )) : createCommentVNode("v-if", true)],
      64
      /* STABLE_FRAGMENT */
    )) : createCommentVNode("v-if", true)],
    2
    /* CLASS */
  );
}
var mobileFirst$7 = /* @__PURE__ */ _export_sfc$n(_sfc_main$n, [["render", _sfc_render$n]]);
const index$d = "";
function _extends$h() {
  _extends$h = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$h.apply(this, arguments);
}
var template$9 = function template2(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$6;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$7;
  }
  return pc$6;
};
var $constants$5 = {
  ANIMATIONNAME: "tiny-transition-timepicker"
};
var TimeSpinner = defineComponent({
  name: $prefix + "TimeSpinner",
  componentName: "TimeSpinner",
  props: _extends$h({}, $props$1, {
    _constants: {
      type: Object,
      default: function _default() {
        return $constants$5;
      }
    },
    date: {},
    defaultValue: {},
    showSeconds: {
      type: Boolean,
      default: true
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: ""
      // 'a': am/pm; 'A': AM/PM
    },
    step: {
      type: Object,
      default: function _default2() {
        return {
          hour: 1,
          minute: 1,
          second: 1
        };
      },
      validator: function validator(_ref) {
        var hour = _ref.hour, minute = _ref.minute, second = _ref.second;
        var validateArray = [{
          value: hour,
          range: 24
        }, {
          value: minute,
          range: 60
        }, {
          value: second,
          range: 60
        }];
        return validateArray.every(function(_ref2) {
          var value = _ref2.value, range2 = _ref2.range;
          return value || value === 0 ? Math.floor(value) === value && value > 0 && value <= range2 : true;
        });
      }
    },
    startDate: {
      type: Object,
      default: function _default3() {
        return {};
      }
    },
    endDate: {
      type: Object,
      default: function _default4() {
        return {};
      }
    }
  }),
  setup: function setup2(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$9
    });
  }
});
var version$i = "3.16.0";
TimeSpinner.install = function(Vue) {
  Vue.component(TimeSpinner.name, TimeSpinner);
};
TimeSpinner.version = version$i;
function _createForOfIteratorHelperLoose$m(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$m(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$m(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$m(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$m(o, minLen);
}
function _arrayLikeToArray$m(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$m = function _export_sfc23(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$m(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$m = /* @__PURE__ */ defineComponent({
  emits: ["dodestroy", "pick", "select-range"],
  components: {
    TimeSpinner
  },
  props: [].concat(props, ["show", "timeArrowControl", "emitter", "value", "step"]),
  setup: function setup$13(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$h,
      api: api$h
    });
  }
});
var _hoisted_1$l = {
  class: "tiny-time-panel__footer"
};
function _sfc_render$m(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_time_spinner = resolveComponent("time-spinner");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    onAfterLeave: _cache[2] || (_cache[2] = function($event) {
      return _ctx.$emit("dodestroy");
    }),
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["tiny-time-panel tiny-popper", _ctx.state.popperClass])
        },
        [createBaseVNode(
          "div",
          {
            class: normalizeClass(["tiny-time-panel__content", {
              "has-seconds": _ctx.state.showSeconds
            }])
          },
          [createVNode(_component_time_spinner, {
            ref: "spinner",
            step: _ctx.step,
            onChange: _ctx.handleChange,
            "arrow-control": _ctx.state.useArrow,
            "show-seconds": _ctx.state.showSeconds,
            "am-pm-mode": _ctx.state.amPmMode,
            onSelectRange: _ctx.setSelectionRange,
            date: _ctx.state.date
          }, null, 8, ["step", "onChange", "arrow-control", "show-seconds", "am-pm-mode", "onSelectRange", "date"])],
          2
          /* CLASS */
        ), createBaseVNode("div", _hoisted_1$l, [createBaseVNode(
          "button",
          {
            type: "button",
            class: "tiny-time-panel__btn cancel",
            onClick: _cache[0] || (_cache[0] = function() {
              return _ctx.handleCancel && _ctx.handleCancel.apply(_ctx, arguments);
            })
          },
          toDisplayString(_ctx.t("ui.datepicker.cancel")),
          1
          /* TEXT */
        ), createBaseVNode(
          "button",
          {
            type: "button",
            class: normalizeClass(["tiny-time-panel__btn", {
              confirm: !_ctx.state.disabled
            }]),
            onClick: _cache[1] || (_cache[1] = function($event) {
              return _ctx.handleConfirm();
            })
          },
          toDisplayString(_ctx.t("ui.datepicker.confirm")),
          3
          /* TEXT, CLASS */
        )])],
        2
        /* CLASS */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 1
    /* STABLE */
  });
}
var pc$5 = /* @__PURE__ */ _export_sfc$m(_sfc_main$m, [["render", _sfc_render$m]]);
function _createForOfIteratorHelperLoose$l(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$l(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$l(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$l(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$l(o, minLen);
}
function _arrayLikeToArray$l(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$l = function _export_sfc24(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$l(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$l = defineComponent({
  emits: ["dodestroy", "pick", "select-range"],
  components: {
    TimeSpinner,
    TinyButton: Button
  },
  props: [].concat(props, ["show", "timeArrowControl", "emitter", "value", "step"]),
  setup: function setup$14(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$h,
      api: api$h
    });
  }
});
var _hoisted_1$k = {
  "data-tag": "tiny-time-panel__footer",
  class: "border-t border-t-color-bg-3 py-3 px-4 h-14 leading-7 box-border flex justify-between"
};
function _sfc_render$l(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_time_spinner = resolveComponent("time-spinner");
  var _component_tiny_button = resolveComponent("tiny-button");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    onAfterLeave: _cache[1] || (_cache[1] = function($event) {
      return _ctx.$emit("dodestroy");
    }),
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          "data-tag": "tiny-time-panel tiny-popper us",
          class: normalizeClass(_ctx.m("my-1 bg-color-bg-1 shadow-md rounded absolute w-60 right-0 z-[1000] box-content select-none", _ctx.state.popperClass))
        },
        [createBaseVNode(
          "div",
          {
            "data-tag": "tiny-time-panel__content",
            class: normalizeClass(["relative overflow-hidden", {
              "has-seconds": _ctx.state.showSeconds
            }])
          },
          [createVNode(_component_time_spinner, {
            ref: "spinner",
            step: _ctx.step,
            onChange: _ctx.handleChange,
            "arrow-control": _ctx.state.useArrow,
            "show-seconds": _ctx.state.showSeconds,
            "am-pm-mode": _ctx.state.amPmMode,
            onSelectRange: _ctx.setSelectionRange,
            date: _ctx.state.date
          }, null, 8, ["step", "onChange", "arrow-control", "show-seconds", "am-pm-mode", "onSelectRange", "date"])],
          2
          /* CLASS */
        ), createBaseVNode("div", _hoisted_1$k, [createVNode(_component_tiny_button, {
          "data-tag": "tiny-time-panel__btn cancel",
          type: "text",
          "custom-class": "text-color-brand text-left p-0",
          onClick: _ctx.handleCancel
        }, {
          default: withCtx(function() {
            return [createTextVNode(
              toDisplayString(_ctx.t("ui.datepicker.cancel")),
              1
              /* TEXT */
            )];
          }),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]), createVNode(_component_tiny_button, {
          "data-tag": "tiny-time-panel__btn",
          type: "primary",
          disabled: _ctx.state.disabled,
          onClick: _cache[0] || (_cache[0] = function($event) {
            return _ctx.handleConfirm();
          })
        }, {
          default: withCtx(function() {
            return [createTextVNode(
              toDisplayString(_ctx.t("ui.datepicker.confirm")),
              1
              /* TEXT */
            )];
          }),
          _: 1
          /* STABLE */
        }, 8, ["disabled"])])],
        2
        /* CLASS */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 1
    /* STABLE */
  });
}
var mobileFirst$6 = /* @__PURE__ */ _export_sfc$l(_sfc_main$l, [["render", _sfc_render$l]]);
const index$c = "";
function _extends$g() {
  _extends$g = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$g.apply(this, arguments);
}
var template$8 = function template22(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$5;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$6;
  }
  return pc$5;
};
var Time = defineComponent({
  name: $prefix + "Time",
  componentName: "Time",
  props: _extends$g({}, $props$1, {
    show: Boolean,
    timeArrowControl: Boolean,
    emitter: Object,
    value: Date,
    step: {
      type: Object,
      default: function _default5() {
        return {
          hour: 1,
          minute: 1,
          second: 1
        };
      }
    }
  }),
  setup: function setup3(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$8
    });
  }
});
var version$h = "3.16.0";
Time.install = function(Vue) {
  Vue.component(Time.name, Time);
};
Time.version = version$h;
const formatJudg = ({ day, offset, j, i, cell, count, dateCountOfLastMonth }) => {
  const nodfpm = day + offset <= 0 ? 7 + day + offset : day + offset;
  if (j + i * 7 >= nodfpm) {
    cell.text = count++;
  } else {
    cell.text = dateCountOfLastMonth - (nodfpm - j % 7) + 1 + i * 7;
    cell.type = DATEPICKER.PreMonth;
  }
  return { count };
};
const getOffsetDay = (props2) => () => {
  const week = props2.firstDayOfWeek;
  return week > 3 ? 7 - week : -week;
};
const getWeeks = ({ props: props2, state }) => () => {
  const week = props2.firstDayOfWeek;
  return state.constWeeks.concat(state.constWeeks).slice(week, week + 7);
};
const getDateTimestamp = (time) => {
  if (typeof time === "number" || typeof time === "string") {
    return clearTime(new Date(time)).getTime();
  } else if (time instanceof Date) {
    return clearTime(time).getTime();
  }
  return NaN;
};
const getSelected = (props2, cell, format2, t2, cellDate, selectedDate) => {
  let selected = cell.selected;
  if (props2.selectionMode === "dates") {
    selected = arrayFind(selectedDate, (date) => formatDate$1(date, format2, t2) === formatDate$1(cellDate, format2, t2));
  } else {
    selected = arrayFind(selectedDate, (date) => date.getTime() === cellDate.getTime());
  }
  return selected;
};
const getCell = ({ state, props: props2 }) => (row, i, j) => {
  const now = getDateTimestamp(/* @__PURE__ */ new Date());
  let cell = row[props2.showWeekNumber ? j + 1 : j];
  if (!cell) {
    cell = { row: i, column: j, inRange: false, start: false, end: false, type: DATEPICKER.Normal };
  }
  cell.type = DATEPICKER.Normal;
  const index3 = i * 7 + j;
  const time = nextDate(state.startDate, index3 - state.offsetDay).getTime();
  cell.inRange = time >= getDateTimestamp(props2.minDate) && time <= getDateTimestamp(props2.maxDate);
  cell.start = props2.minDate && time === getDateTimestamp(props2.minDate);
  cell.end = props2.maxDate && time === getDateTimestamp(props2.maxDate);
  time === now && (cell.type = DATEPICKER.Today);
  return { cell, cellDate: new Date(time) };
};
const doCount = ({ i, day, offset, j, cell, count, dateCountOfLastMonth, dateCountOfMonth }) => {
  if (i >= 0 && i <= 1) {
    const ret = formatJudg({ day, offset, j, i, cell, count, dateCountOfLastMonth });
    count = ret.count;
  } else {
    if (count <= dateCountOfMonth) {
      cell.text = count++;
    } else {
      cell.text = count++ - dateCountOfMonth;
      cell.type = DATEPICKER.NextMonth;
    }
  }
  return count;
};
const getRows$2 = ({ api: api2, props: props2, state, t: t2, vm }) => () => {
  const date = new Date(state.year, state.month, 1);
  let day = getFirstDayOfMonth(date);
  const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
  const dateCountOfLastMonth = getDayCountOfMonth(
    date.getFullYear(),
    date.getMonth() === 0 ? 11 : date.getMonth() - 1
  );
  day = day === 0 ? 7 : day;
  const offset = state.offsetDay;
  const rows = state.tableRows;
  const startDate = state.startDate;
  const disabledDate = props2.disabledDate;
  const cellClassName = props2.cellClassName;
  const selectedDate = props2.selectionMode === DATEPICKER.Dates ? coerceTruthyValueToArray(props2.value) : [];
  let count = 1;
  const isFunction = props2.formatWeeks instanceof Function;
  const arr = [];
  for (let i = 0; i < 6; i++) {
    const row = rows[i];
    if (props2.showWeekNumber) {
      row[0] = {
        type: DATEPICKER.Week,
        text: getWeekNumber(nextDate(startDate, i * 7 + 1))
      };
    }
    arr[i] = [];
    for (let j = 0; j < 7; j++) {
      const { cell, cellDate } = api2.getCell(row, i, j, DATEPICKER.Normal, props2);
      count = doCount({ i, day, offset, j, cell, count, dateCountOfLastMonth, dateCountOfMonth });
      cell.disabled = typeof disabledDate === "function" && disabledDate(cellDate);
      cell.selected = getSelected(props2, cell, DATEPICKER.DateFormats.date, t2, cellDate, selectedDate);
      cell.customClass = typeof cellClassName === "function" && cellClassName(cellDate);
      vm.$set(row, props2.showWeekNumber ? j + 1 : j, cell);
      arr[i].push(cellDate);
    }
    if (props2.selectionMode === DATEPICKER.Week) {
      const [start, end] = props2.showWeekNumber ? [1, 7] : [0, 6];
      const isWeekActive2 = api2.isWeekActive(row[start + 1]);
      Object.assign(row[start], { inRange: isWeekActive2, start: isWeekActive2 });
      Object.assign(row[end], { inRange: isWeekActive2, end: isWeekActive2 });
    }
  }
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i][0].getFullYear() + "/" + (arr[i][0].getMonth() + 1) + "/" + arr[i][0].getDate());
  }
  if (props2.showWeekNumber && isFunction) {
    for (let i = 0; i < 6; i++) {
      let val = getWeekNumber(nextDate(startDate, i * 7 + 1));
      rows[i][0].text = props2.formatWeeks(val, res);
    }
  }
  return rows;
};
const arrayFindIndex = (arr, pred) => {
  for (let i = 0, len = arr.length; i !== len; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};
const arrayFind = (arr, pred) => {
  const idx = arrayFindIndex(arr, pred);
  return ~idx ? arr[idx] : void 0;
};
const coerceTruthyValueToArray = (val) => Array.isArray(val) ? val : val ? [val] : [];
const watchMinDate$1 = ({ api: api2, props: props2 }) => (value, oldvalue) => {
  if (getDateTimestamp(value) !== getDateTimestamp(oldvalue)) {
    api2.markRange(props2.minDate, props2.maxDate);
  }
};
const watchMaxDate$1 = ({ api: api2, props: props2 }) => (value, oldvalue) => {
  if (getDateTimestamp(value) !== getDateTimestamp(oldvalue)) {
    api2.markRange(props2.minDate, props2.maxDate);
  }
};
const cellMatchesDate$1 = (state) => (cell, date) => {
  const value = new Date(date);
  return state.year === value.getFullYear() && state.month === value.getMonth() && Number(cell.text) === value.getDate();
};
const getCellRangeClasses = ({ props: props2 }) => (cell, classes2) => {
  if (cell.type === DATEPICKER.Normal || cell.type === DATEPICKER.Today || props2.selectionMode === DATEPICKER.Week) {
    classes2.push(DATEPICKER.InRange);
    if (cell.start) {
      classes2.push(DATEPICKER.StartDate);
    }
    if (cell.end) {
      classes2.push(DATEPICKER.EndDate);
    }
  }
};
const getCellClasses = ({ api: api2, props: props2, state }) => (cell) => {
  let classes2 = [];
  const selectionMode = props2.selectionMode;
  const defaultValue = props2.defaultValue ? Array.isArray(props2.defaultValue) ? props2.defaultValue : [props2.defaultValue] : [];
  if ((cell.type === DATEPICKER.Normal || cell.type === DATEPICKER.Today) && !cell.disabled) {
    classes2.push(DATEPICKER.Aviailable);
    if (cell.type === DATEPICKER.Today) {
      classes2.push(DATEPICKER.Today);
    }
  } else {
    classes2.push(cell.type);
  }
  if (cell.type === DATEPICKER.Normal && defaultValue.some((date) => api2.cellMatchesDate(cell, date))) {
    classes2.push(DATEPICKER.Default);
  }
  if (selectionMode === DATEPICKER.Day && ~[DATEPICKER.Normal, DATEPICKER.Today].indexOf(cell.type) && api2.cellMatchesDate(cell, props2.value || state.date)) {
    classes2.push(DATEPICKER.Current);
  }
  if (cell.inRange) {
    api2.getCellRangeClasses(cell, classes2);
  }
  if (cell.disabled) {
    classes2.push(DATEPICKER.Disabled);
  }
  if (cell.selected) {
    classes2.push(DATEPICKER.Selected);
  }
  if (cell.customClass) {
    classes2.push(cell.customClass);
  }
  return classes2.join(" ");
};
const getDateOfCell = ({ props: props2, state }) => (row, column) => {
  const offsetFromStart = row * 7 + (column - (props2.showWeekNumber ? 1 : 0)) - state.offsetDay;
  return nextDate(state.startDate, offsetFromStart);
};
const isWeekActive = ({ props: props2, state }) => (cell) => {
  if (props2.selectionMode !== DATEPICKER.Week) {
    return false;
  }
  const newDate = new Date(state.year, state.month, 1);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  if (cell.type === DATEPICKER.PreMonth) {
    newDate.setMonth(month === 0 ? 11 : month - 1);
    newDate.setFullYear(month === 0 ? year - 1 : year);
  }
  if (cell.type === DATEPICKER.NextMonth) {
    newDate.setMonth(month === 11 ? 0 : month + 1);
    newDate.setFullYear(month === 11 ? year + 1 : year);
  }
  newDate.setDate(parseInt(cell.text, 10));
  if (isDate$1(props2.value)) {
    const dayOffset = (props2.value.getDay() - props2.firstDayOfWeek + 7) % 7 - 1;
    const weekDate = prevDate(props2.value, dayOffset);
    return weekDate.getTime() === newDate.getTime();
  }
  return false;
};
const markRange$2 = ({ props: props2, state }) => (minDate, maxDate) => {
  const minDateTimestamp = getDateTimestamp(minDate);
  const maxDateTimestamp = getDateTimestamp(maxDate) || minDateTimestamp;
  minDate = Math.min(minDateTimestamp, maxDateTimestamp);
  maxDate = Math.max(minDateTimestamp, maxDateTimestamp);
  const startDate = state.startDate;
  const rows = state.rows;
  for (let i = 0, k = rows.length; i < k; i++) {
    const row = rows[i];
    for (let j = 0, l = row.length; j < l; j++) {
      if (props2.showWeekNumber && j === 0)
        continue;
      const cell = row[j];
      const index3 = i * 7 + j + (props2.showWeekNumber ? -1 : 0);
      const time = nextDate(startDate, index3 - state.offsetDay).getTime();
      cell.inRange = minDate && time >= minDate && time <= maxDate;
      cell.start = minDate && time === minDate;
      cell.end = maxDate && time === maxDate;
    }
  }
};
const handleMouseMove$2 = ({ api: api2, emit, props: props2, state }) => (event) => {
  if (!props2.rangeState.selecting) {
    return;
  }
  let targetEl = event.target;
  if (targetEl.tagName === "SPAN") {
    targetEl = targetEl.parentNode.parentNode;
  }
  if (targetEl.tagName === "DIV") {
    targetEl = targetEl.parentNode;
  }
  if (targetEl.tagName !== "TD") {
    return;
  }
  const row = targetEl.parentNode.rowIndex - 1;
  const column = targetEl.cellIndex;
  if (state.rows[row][column].disabled) {
    return;
  }
  if (row !== state.lastRow || column !== state.lastColumn) {
    state.lastRow = row;
    state.lastColumn = column;
    emit("changerange", {
      minDate: props2.minDate,
      maxDate: props2.maxDate,
      rangeState: {
        selecting: true,
        endDate: api2.getDateOfCell(row, column)
      }
    });
  }
};
const getTarget$3 = (event) => {
  let target = event.target;
  if (target.tagName === "SPAN") {
    target = target.parentNode.parentNode;
  }
  if (target.tagName === "DIV") {
    target = target.parentNode;
  }
  return target;
};
const handleClick$1 = ({ api: api2, emit, props: props2, state }) => (event) => {
  let target = getTarget$3(event);
  if (target.tagName !== "TD") {
    return;
  }
  const row = target.parentNode.rowIndex - 1;
  const column = props2.selectionMode === DATEPICKER.Week ? 1 : target.cellIndex;
  const cell = state.rows[row][column];
  if (cell.disabled || cell.type === DATEPICKER.Week) {
    return;
  }
  const newDate = api2.getDateOfCell(row, column);
  if (props2.selectionMode === DATEPICKER.Range) {
    if (!props2.rangeState.selecting) {
      props2.rangeState.selecting = true;
      emit("pick", { minDate: newDate, maxDate: null });
    } else {
      if (newDate >= props2.minDate) {
        emit("pick", { minDate: props2.minDate, maxDate: newDate });
      } else {
        emit("pick", { minDate: newDate, maxDate: props2.minDate });
      }
      props2.rangeState.selecting = false;
    }
  } else if (props2.selectionMode === DATEPICKER.Day) {
    emit("pick", newDate);
  } else if (props2.selectionMode === DATEPICKER.Week) {
    const weekNumber = getWeekNumber(newDate);
    const value = newDate.getFullYear() + "w" + weekNumber;
    emit("pick", {
      year: newDate.getFullYear(),
      week: weekNumber,
      value,
      date: newDate
    });
  } else if (props2.selectionMode === DATEPICKER.Dates) {
    const value = props2.value || [];
    const newValue = cell.selected ? removeFromArray(value, (date) => date.getTime() === newDate.getTime()) : [...value, newDate];
    emit("pick", newValue);
  }
};
const removeFromArray = (arr, pred) => {
  const idx = typeof pred === "function" ? arrayFindIndex(arr, pred) : arr.indexOf(pred);
  return idx >= 0 ? [...arr.slice(0, idx), ...arr.slice(idx + 1)] : arr;
};
const getCssToken = ({ api: api2 }) => (cell, prexfix = "") => {
  const cssStr = api2.getCellClasses(cell) || "";
  return cssStr.split(" ").map((className) => prexfix + className);
};
const api$f = ["state", "getCellClasses", "getCssToken", "isWeekActive", "handleMouseMove", "handleClick"];
const initState$7 = ({ reactive, computed, api: api2, props: props2 }) => {
  const state = reactive({
    tableRows: [[], [], [], [], [], []],
    lastRow: null,
    lastColumn: null,
    constWeeks: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
    rows: computed(() => api2.getRows()),
    weeks: computed(() => api2.getWeeks()),
    month: computed(() => !Array.isArray(props2.date) && props2.date.getMonth()),
    offsetDay: computed(() => api2.getOffsetDay()),
    year: computed(() => !Array.isArray(props2.date) && props2.date.getFullYear()),
    startDate: computed(() => getStartDateOfMonth(state.year, state.month, state.offsetDay)),
    date: props2.value
  });
  return state;
};
const initApi$3 = ({ api: api2, state, props: props2, emit, t: t2, vm }) => {
  Object.assign(api2, {
    t: t2,
    state,
    getOffsetDay: getOffsetDay(props2),
    getWeeks: getWeeks({ props: props2, state }),
    markRange: markRange$2({ props: props2, state }),
    cellMatchesDate: cellMatchesDate$1(state),
    getDateOfCell: getDateOfCell({ props: props2, state }),
    getCell: getCell({ state, props: props2 }),
    isWeekActive: isWeekActive({ props: props2, state }),
    watchMaxDate: watchMaxDate$1({ api: api2, props: props2 }),
    watchMinDate: watchMinDate$1({ api: api2, props: props2 }),
    handleMouseMove: handleMouseMove$2({ api: api2, emit, props: props2, state }),
    getRows: getRows$2({ api: api2, props: props2, state, t: t2, vm }),
    handleClick: handleClick$1({ api: api2, emit, props: props2, state }),
    getCellClasses: getCellClasses({ api: api2, props: props2, state }),
    getCssToken: getCssToken({ api: api2 }),
    getCellRangeClasses: getCellRangeClasses({ props: props2 })
  });
};
const initWatch$4 = ({ watch, props: props2, api: api2 }) => {
  watch(
    () => props2.rangeState,
    (value) => api2.markRange(props2.minDate, value.endDate),
    { deep: true }
  );
  watch(() => props2.minDate, api2.watchMinDate);
  watch(() => props2.maxDate, api2.watchMaxDate);
};
const renderless$f = (props2, { computed, reactive, watch }, { t: t2, vm, emit }) => {
  const api2 = {};
  const state = initState$7({ reactive, computed, api: api2, props: props2 });
  initApi$3({ api: api2, state, props: props2, emit, t: t2, vm });
  initWatch$4({ watch, props: props2, api: api2 });
  return api2;
};
function _createForOfIteratorHelperLoose$k(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$k(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$k(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$k(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$k(o, minLen);
}
function _arrayLikeToArray$k(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$k = function _export_sfc25(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$k(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$k = defineComponent({
  emits: ["changerange", "pick"],
  props: [].concat(props, ["cellClassName", "date", "defaultValue", "disabledDate", "firstDayOfWeek", "maxDate", "minDate", "rangeState", "selectionMode", "showWeekNumber", "value", "formatWeeks"]),
  setup: function setup$15(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$f,
      api: api$f,
      mono: true
    });
  }
});
var _hoisted_1$j = {
  key: 0
};
function _sfc_render$k(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock(
    "table",
    {
      class: normalizeClass(["tiny-date-table", {
        "is-week-mode": _ctx.selectionMode === "week"
      }]),
      cellspacing: "0",
      onMousemove: _cache[0] || (_cache[0] = withModifiers(function() {
        return _ctx.handleMouseMove && _ctx.handleMouseMove.apply(_ctx, arguments);
      }, ["stop"])),
      cellpadding: "0",
      onClick: _cache[1] || (_cache[1] = withModifiers(function() {
        return _ctx.handleClick && _ctx.handleClick.apply(_ctx, arguments);
      }, ["stop"]))
    },
    [createBaseVNode("tbody", null, [createBaseVNode("tr", null, [_ctx.showWeekNumber ? (openBlock(), createElementBlock(
      "th",
      _hoisted_1$j,
      toDisplayString(_ctx.t("ui.datepicker.week")),
      1
      /* TEXT */
    )) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.state.weeks, function(weekDay, key) {
        return openBlock(), createElementBlock(
          "th",
          {
            key
          },
          toDisplayString(_ctx.t("ui.datepicker.weeks." + weekDay)),
          1
          /* TEXT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))]), (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.state.rows, function(row, key) {
        return openBlock(), createElementBlock(
          "tr",
          {
            class: normalizeClass(["tiny-date-table__row", {
              current: _ctx.isWeekActive(row[1])
            }]),
            key
          },
          [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(row, function(cellValue, key2) {
              return openBlock(), createElementBlock(
                "td",
                {
                  key: key2,
                  class: normalizeClass(_ctx.getCellClasses(cellValue))
                },
                [createBaseVNode("div", null, [createBaseVNode(
                  "span",
                  null,
                  toDisplayString(cellValue.text),
                  1
                  /* TEXT */
                )])],
                2
                /* CLASS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))])],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
var pc$4 = /* @__PURE__ */ _export_sfc$k(_sfc_main$k, [["render", _sfc_render$k]]);
function _createForOfIteratorHelperLoose$j(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$j(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$j(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$j(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$j(o, minLen);
}
function _arrayLikeToArray$j(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$j = function _export_sfc26(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$j(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
function _extends$f() {
  _extends$f = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$f.apply(this, arguments);
}
var common = {
  "next-month": "text-color-text-disabled cursor-pointer group-hover:bg-inherit",
  "current": "group-hover:text-color-text-inverse group-hover:bg-color-brand text-color-text-inverse bg-color-brand",
  "start-date": "text-color-text-inverse bg-color-brand group-hover:bg-color-brand"
};
var classes$4 = _extends$f({}, common, {
  "today": "border border-solid border-color-border-focus",
  "pre-month": common["next-month"],
  "selected": common["current"],
  "th": "px-1 py-4 text-color-text-primary font-normal whitespace-nowrap",
  "td": "box-border text-center cursor-pointer relative group",
  "cell": "h-8 mb-2.5 box-border",
  "in-range": "",
  "cell-in-range": "bg-color-brand-hover-subtle text-color-brand",
  "disabled": "text-color-text-disabled group-hover:text-color-text-disabled cursor-pointer cursor-not-allowed bg-color-bg-3 group-hover:bg-color-bg-3",
  "cell-disabled": "bg-color-bg-3 text-color-text-disabled",
  "text": "w-8 h-8 leading-8 block absolute left-1/2 box-border -translate-x-2/4 rounded group-hover:bg-color-brand-hover-subtle",
  "end-date": common["start-date"],
  "token": ""
});
var _sfc_main$j = defineComponent({
  props: [].concat(props, ["cellClassName", "date", "defaultValue", "disabledDate", "firstDayOfWeek", "maxDate", "minDate", "rangeState", "selectionMode", "showWeekNumber", "value", "formatWeeks"]),
  setup: function setup$16(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$f,
      api: api$f,
      classes: classes$4
    });
  }
});
var _hoisted_1$i = {
  key: 0
};
var _hoisted_2$e = ["data-tag"];
var _hoisted_3$d = ["textContent"];
function _sfc_render$j(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock(
    "table",
    {
      cellpadding: "0",
      cellspacing: "0",
      "data-tag": "tiny-date-table",
      class: normalizeClass(["table-fixed w-full"]),
      onMousemove: _cache[0] || (_cache[0] = function() {
        return _ctx.handleMouseMove && _ctx.handleMouseMove.apply(_ctx, arguments);
      }),
      onClick: _cache[1] || (_cache[1] = function() {
        return _ctx.handleClick && _ctx.handleClick.apply(_ctx, arguments);
      })
    },
    [createBaseVNode("tbody", null, [createBaseVNode("tr", null, [_ctx.showWeekNumber ? (openBlock(), createElementBlock("th", _hoisted_1$i, [createBaseVNode(
      "div",
      {
        class: normalizeClass(_ctx.gcls("th"))
      },
      toDisplayString(_ctx.t("ui.datepicker.week")),
      3
      /* TEXT, CLASS */
    )])) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.state.weeks, function(week, weekIdx) {
        return openBlock(), createElementBlock("th", {
          key: weekIdx
        }, [createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.gcls("th"))
          },
          toDisplayString(_ctx.t("ui.datepicker.weeks." + week)),
          3
          /* TEXT, CLASS */
        )]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))]), (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.state.rows, function(row, trIdx) {
        return openBlock(), createElementBlock(
          "tr",
          {
            "data-tag": "tiny-date-table__row",
            key: trIdx,
            class: normalizeClass({
              current: _ctx.isWeekActive(row[1])
            })
          },
          [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(row, function(cell, tdIdx) {
              return openBlock(), createElementBlock("td", {
                key: tdIdx,
                "data-tag": _ctx.getCellClasses(cell),
                class: normalizeClass(_ctx.gcls("td"))
              }, [createBaseVNode(
                "div",
                {
                  class: normalizeClass(_ctx.m(_ctx.gcls("cell"), _ctx.gcls(_ctx.getCssToken(cell, "cell-")), {
                    "rounded-l": tdIdx === 0
                  }, {
                    "rounded-r": tdIdx === 6
                  }))
                },
                [createBaseVNode("span", {
                  textContent: toDisplayString(cell.text),
                  class: normalizeClass(_ctx.m(_ctx.gcls("text"), _ctx.gcls(_ctx.getCellClasses(cell).split(" "))))
                }, null, 10, _hoisted_3$d)],
                2
                /* CLASS */
              )], 10, _hoisted_2$e);
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))])],
    32
    /* NEED_HYDRATION */
  );
}
var mobileFirst$5 = /* @__PURE__ */ _export_sfc$j(_sfc_main$j, [["render", _sfc_render$j]]);
const index$b = "";
function _extends$e() {
  _extends$e = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$e.apply(this, arguments);
}
var template$7 = function template23(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$4;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$5;
  }
  return pc$4;
};
var DateTable = defineComponent({
  name: $prefix + "DateTable",
  componentName: "DateTable",
  props: _extends$e({}, $props$1, {
    cellClassName: {},
    date: {},
    defaultValue: {
      validator: function validator2(val) {
        return val === null || isDate$1(val) || Array.isArray(val) && val.every(isDate$1);
      }
    },
    disabledDate: {},
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: function validator22(val) {
        return val >= 1 && val <= 7;
      }
    },
    maxDate: {},
    minDate: {},
    rangeState: {
      default: function _default6() {
        return {
          endDate: null,
          selecting: false
        };
      }
    },
    selectionMode: {
      default: function _default22() {
        return "day";
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: function _default32() {
        return false;
      }
    },
    value: {},
    formatWeeks: Function
  }),
  setup: function setup4(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$7
    });
  }
});
var version$g = "3.16.0";
DateTable.install = function(Vue) {
  Vue.component(DateTable.name, DateTable);
};
DateTable.version = version$g;
const datesInYear = (year) => {
  const numOfDays = getDayCountOfYear(year);
  const firstDay = new Date(year, 0, 1);
  return range(numOfDays).map((n) => nextDate(firstDay, n));
};
const getCellStyle$2 = ({ props: props2 }) => (cell) => {
  const { defaultValue } = props2;
  const year = cell.text;
  const style = {};
  const today = /* @__PURE__ */ new Date();
  style.disabled = typeof props2.disabledDate === "function" ? datesInYear(year).every(props2.disabledDate) : false;
  const execDate = typeof props2.value === "object" ? props2.value : toDate(props2.value);
  style.current = arrayFindIndex(coerceTruthyValueToArray(execDate), (date) => date.getFullYear() === year) >= 0;
  style.today = today.getFullYear() === year;
  style.default = Array.isArray(defaultValue) ? defaultValue.some((v) => v && v.getFullYear() === year) : defaultValue && defaultValue.getFullYear() === year;
  if (cell.inRange) {
    style[DATEPICKER.InRange] = true;
  }
  if (cell.start) {
    style[DATEPICKER.StartDate] = true;
  }
  if (cell.end) {
    style[DATEPICKER.EndDate] = true;
  }
  return style;
};
const getRows$1 = ({ props: props2, state, vm }) => () => {
  const { tableRows } = state;
  const { minDate, maxDate, disabledDate, startYear, selectionMode } = props2;
  const selectedDate = [];
  const now = (/* @__PURE__ */ new Date()).getFullYear();
  for (let i = 0; i < 3; i++) {
    const row = tableRows[i];
    for (let j = 0; j < 4; j++) {
      let cell = row[j];
      if (!cell) {
        cell = {
          type: DATEPICKER.Normal,
          row: i,
          column: j,
          inRange: false,
          start: false,
          end: false
        };
      }
      const year = startYear + (cell.row * 4 + cell.column);
      const isToday = year === now;
      cell.text = year;
      cell.type = isToday ? DATEPICKER.Today : DATEPICKER.Normal;
      cell.disabled = typeof disabledDate === "function" && disabledDate(new Date(year, 0, 1));
      if (selectionMode === DATEPICKER.YearRange) {
        const minYear = typeof minDate === "object" && minDate ? minDate.getFullYear() : minDate;
        const maxYear = typeof maxDate === "object" && maxDate ? maxDate.getFullYear() : maxDate;
        cell.start = minYear === year;
        cell.end = maxYear === year;
        cell.inRange = year > minYear && year < maxYear || [minYear, maxYear].includes(year);
        cell.selected = arrayFind(
          selectedDate,
          (item) => (typeof item === "object" ? item.getFullYear() : item) === year
        );
      }
      vm.$set(row, j, cell);
    }
  }
  return tableRows;
};
const markRange$1 = ({ props: props2, state }) => (min, max) => {
  const rows = state.rows;
  const [minDate, maxDate] = [min, max].sort((a, b) => a && a < b ? -1 : 1);
  const minYear = typeof minDate === "object" && minDate ? minDate.getFullYear() : minDate;
  const maxYear = typeof maxDate === "object" && maxDate ? maxDate.getFullYear() : maxDate;
  if (props2.selectionMode === DATEPICKER.YearRange) {
    for (let i = 0, len = rows.length; i < len; i++) {
      const row = rows[i];
      for (let j = 0, l = row.length; j < l; j++) {
        const cell = row[j];
        const year = cell.text;
        cell.start = minYear && minYear === year;
        cell.end = maxYear && maxYear === year;
        cell.inRange = year > minYear && year < maxYear || cell.start || cell.end;
        cell.selected = cell.inRange;
      }
    }
  }
};
const watchDate$1 = ({ api: api2, props: props2 }) => (value, oldvalue) => {
  if (value !== oldvalue) {
    api2.markRange(props2.minDate, props2.maxDate);
  }
};
const handleYearTableClick = ({ emit, props: props2 }) => (event) => {
  const target = event.target;
  const { selectionMode } = props2;
  if (target.tagName === "A") {
    if (hasClass(target.parentNode.parentNode, "disabled")) {
      return;
    }
    const year = Number(target.textContent || target.innerText);
    if (selectionMode === DATEPICKER.Years) {
      const years = Array.isArray(props2.value) ? props2.value.map((v) => v.getFullYear()) : [];
      const index3 = years.indexOf(year);
      if (index3 === -1) {
        years.push(year);
      } else {
        years.splice(index3, 1);
      }
      emit("pick", years.slice());
    } else if (selectionMode === DATEPICKER.YearRange) {
      let { minDate, maxDate } = props2;
      if (props2.rangeState.selecting) {
        props2.rangeState.selecting = false;
        if (year < minDate) {
          maxDate = minDate;
          minDate = year;
        } else {
          maxDate = year;
        }
      } else {
        props2.rangeState.selecting = true;
        minDate = year;
        maxDate = null;
      }
      emit("pick", { minDate, maxDate });
    } else {
      emit("pick", year);
    }
  }
};
const getTarget$2 = (evt) => {
  let target = evt.target;
  const tagName = target.tagName;
  if (tagName === "A") {
    target = target.parentNode.parentNode;
  }
  if (tagName === "DIV") {
    target = target.parentNode;
  }
  if (tagName !== "TD") {
    return;
  }
  return target;
};
const handleMouseMove$1 = ({ emit, props: props2, state }) => (event) => {
  const { selectionMode, startYear, rangeState, minDate, maxDate } = props2;
  if (selectionMode !== DATEPICKER.YearRange || !rangeState.selecting) {
    return;
  }
  const target = getTarget$2(event);
  if (!target) {
    return;
  }
  const row = target.parentNode.rowIndex;
  const column = target.cellIndex;
  if (state.rows[row][column].disabled || minDate === maxDate) {
    return;
  }
  if (row !== state.lastRow || column !== state.lastColumn) {
    state.lastColumn = column;
    state.lastRow = row;
    const year = startYear + row * 4 + column;
    emit("changerange", {
      minDate,
      maxDate,
      rangeState: {
        selecting: true,
        endDate: year
      }
    });
  }
};
const api$e = ["state", "handleYearTableClick", "getCellStyle", "handleMouseMove"];
const renderless$e = (props2, { computed, reactive, watch }, { emit, vm }) => {
  const api2 = {};
  const state = reactive({
    tableRows: [[], [], []],
    rows: computed(() => api2.getRows())
  });
  Object.assign(api2, {
    state,
    getCellStyle: getCellStyle$2({ props: props2 }),
    handleYearTableClick: handleYearTableClick({ emit, props: props2, state }),
    markRange: markRange$1({ props: props2, state }),
    watchDate: watchDate$1({ api: api2, props: props2 }),
    getRows: getRows$1({ props: props2, state, vm }),
    handleMouseMove: handleMouseMove$1({ api: api2, emit, props: props2, state })
  });
  watch(
    () => props2.rangeState,
    (value, oldValue) => value !== oldValue && api2.markRange(props2.minDate, value.endDate),
    { deep: true }
  );
  watch(() => props2.minDate, api2.watchDate);
  watch(() => props2.maxDate, api2.watchDate);
  return api2;
};
const index$a = "";
function _createForOfIteratorHelperLoose$i(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$i(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$i(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$i(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$i(o, minLen);
}
function _arrayLikeToArray$i(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$i = function _export_sfc27(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$i(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$i = defineComponent({
  name: $prefix + "YearTable",
  emits: ["pick"],
  props: {
    disabledDate: {},
    value: {},
    defaultValue: {
      validator: function validator3(val) {
        return val === null || val instanceof Date && isDate$1(val);
      }
    },
    date: [Date, Array],
    selectionMode: String,
    startYear: Number,
    maxDate: {},
    minDate: {},
    rangeState: {
      default: function _default7() {
        return {
          endDate: null,
          selecting: false
        };
      }
    }
  },
  setup: function setup$17(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$e,
      api: api$e,
      mono: true
    });
  }
});
var _hoisted_1$h = {
  class: "cell"
};
function _sfc_render$i(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock(
    "table",
    {
      class: "tiny-year-table",
      onMousemove: _cache[0] || (_cache[0] = function() {
        return _ctx.handleMouseMove && _ctx.handleMouseMove.apply(_ctx, arguments);
      }),
      onClick: _cache[1] || (_cache[1] = function() {
        return _ctx.handleYearTableClick && _ctx.handleYearTableClick.apply(_ctx, arguments);
      })
    },
    [createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.state.rows, function(row, key) {
        return openBlock(), createElementBlock("tr", {
          key
        }, [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(row, function(cell, key2) {
            return openBlock(), createElementBlock(
              "td",
              {
                class: normalizeClass(["available", _ctx.getCellStyle(cell)]),
                key: key2
              },
              [createBaseVNode("div", null, [createBaseVNode(
                "a",
                _hoisted_1$h,
                toDisplayString(cell.text),
                1
                /* TEXT */
              )])],
              2
              /* CLASS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))])],
    32
    /* NEED_HYDRATION */
  );
}
var YearTable = /* @__PURE__ */ _export_sfc$i(_sfc_main$i, [["render", _sfc_render$i]]);
var version$f = "3.16.0";
YearTable.install = function(Vue) {
  Vue.component(YearTable.name, YearTable);
};
YearTable.version = version$f;
const datesInMonth = (year, month) => {
  const numOfDays = getDayCountOfMonth(year, month);
  const firstDay = new Date(year, month, 1);
  return range(numOfDays).map((n) => nextDate(firstDay, n));
};
const clearDate = (date) => new Date(date.getFullYear(), date.getMonth());
const getMonthTimestamp = (time) => {
  if (typeof time === "number" || typeof time === "string") {
    return clearDate(new Date(time)).getTime();
  } else if (time instanceof Date) {
    return clearDate(time).getTime();
  }
  return NaN;
};
const getRows = ({ props: props2, state, vm }) => () => {
  const tableRows = state.tableRows;
  const disabledDate = state.disabledDate;
  const selectedDate = [];
  const now = getMonthTimestamp(/* @__PURE__ */ new Date());
  const { date, minDate, maxDate } = props2;
  for (let i = 0; i < 3; i++) {
    const row = tableRows[i];
    for (let j = 0; j < 4; j++) {
      let cell = row[j];
      if (!cell) {
        cell = {
          type: DATEPICKER.Normal,
          row: i,
          column: j,
          inRange: false,
          start: false,
          end: false
        };
      }
      cell.type = DATEPICKER.Normal;
      const index3 = i * 4 + j;
      const time = new Date(date.getFullYear(), index3).getTime();
      cell.start = minDate && time === getMonthTimestamp(minDate);
      cell.end = maxDate && time === getMonthTimestamp(maxDate);
      cell.inRange = time >= getMonthTimestamp(minDate) && time <= getMonthTimestamp(maxDate);
      const isToday = time === now;
      if (isToday) {
        cell.type = DATEPICKER.Today;
      }
      cell.text = index3;
      let cellDate = new Date(time);
      cell.disabled = typeof disabledDate === "function" && disabledDate(cellDate);
      cell.selected = arrayFind(selectedDate, (selectDate) => selectDate.getTime() === cellDate.getTime());
      vm.$set(row, j, cell);
    }
  }
  return tableRows;
};
const markRange = ({ props: props2, state }) => (minDate, maxDate) => {
  minDate = getMonthTimestamp(minDate);
  maxDate = getMonthTimestamp(maxDate);
  if (minDate > maxDate) {
    [minDate, maxDate] = [maxDate, minDate];
  }
  const rows = state.rows;
  for (let i = 0, len = rows.length; i < len; i++) {
    const row = rows[i];
    for (let j = 0, l = row.length; j < l; j++) {
      const cell = row[j];
      const index3 = i * 4 + j;
      const time = new Date(props2.date.getFullYear(), index3).getTime();
      cell.start = minDate && time === minDate;
      cell.end = maxDate && time === maxDate;
      cell.inRange = minDate && time >= minDate && time <= maxDate;
    }
  }
};
const watchDate = ({ api: api2, props: props2 }) => (value, oldvalue) => {
  if (getMonthTimestamp(value) !== getMonthTimestamp(oldvalue)) {
    api2.markRange(props2.minDate, props2.maxDate);
  }
};
const getTarget$1 = (event) => {
  let target = event.target;
  if (target.tagName === "A") {
    target = target.parentNode.parentNode;
  }
  if (target.tagName === "DIV") {
    target = target.parentNode;
  }
  if (target.tagName !== "TD") {
    return;
  }
  return target;
};
const handleMouseMove = ({ api: api2, emit, props: props2, state }) => (event) => {
  if (!props2.rangeState.selecting) {
    return;
  }
  const target = getTarget$1(event);
  if (!target) {
    return;
  }
  const row = target.parentNode.rowIndex;
  const colu = target.cellIndex;
  if (state.rows[row][colu].disabled) {
    return;
  }
  if (row !== state.lastRow || colu !== state.lastColumn) {
    state.lastColumn = colu;
    state.lastRow = row;
    emit("changerange", {
      maxDate: props2.maxDate,
      minDate: props2.minDate,
      rangeState: {
        selecting: true,
        endDate: api2.getMonthOfCell(row * 4 + colu)
      }
    });
  }
};
const handleMonthTableClick = ({ api: api2, emit, props: props2 }) => (event) => {
  const target = getTarget$1(event);
  if (!target) {
    return;
  }
  if (hasClass(target, "disabled")) {
    return;
  }
  const column = target.cellIndex;
  const row = target.parentNode.rowIndex;
  const month = row * 4 + column;
  const newDate = api2.getMonthOfCell(month);
  if (props2.selectionMode === DATEPICKER.Range) {
    if (props2.rangeState.selecting) {
      if (newDate < props2.minDate) {
        emit("pick", { minDate: newDate, maxDate: props2.minDate });
      } else {
        emit("pick", { minDate: props2.minDate, maxDate: newDate });
      }
      props2.rangeState.selecting = false;
    } else {
      emit("pick", { minDate: newDate, maxDate: null });
      props2.rangeState.selecting = true;
    }
  } else {
    emit("pick", month);
  }
};
const cellMatchesDate = (props2) => (cell, date) => {
  const value = new Date(date);
  return props2.date.getFullYear() === value.getFullYear() && Number(cell.text) === value.getMonth();
};
const getCellStyle$1 = ({ api: api2, props: props2 }) => (cell) => {
  const style = {};
  const year = props2.date.getFullYear();
  const today = /* @__PURE__ */ new Date();
  const month = cell.text;
  const defaultValue = props2.defaultValue ? Array.isArray(props2.defaultValue) ? props2.defaultValue : [props2.defaultValue] : [];
  style.disabled = typeof props2.disabledDate === "function" ? datesInMonth(year, month).every(props2.disabledDate) : false;
  const execDate = typeof props2.value === "object" ? props2.value : toDate(props2.value);
  style.current = arrayFindIndex(
    coerceTruthyValueToArray(execDate),
    (date) => date.getFullYear() === year && date.getMonth() === month
  ) >= 0;
  style.today = today.getFullYear() === year && today.getMonth() === month;
  style.default = defaultValue.some((date) => api2.cellMatchesDate(cell, date));
  if (cell.inRange) {
    style[DATEPICKER.InRange] = true;
    if (cell.start) {
      style[DATEPICKER.StartDate] = true;
    }
    if (cell.end) {
      style[DATEPICKER.EndDate] = true;
    }
  }
  return style;
};
const getMonthOfCell = (props2) => (month) => new Date(props2.date.getFullYear(), month, 1);
const api$d = ["state", "handleMonthTableClick", "handleMouseMove", "getCellStyle"];
const renderless$d = (props2, { computed, reactive, watch }, { t: t2, vm, emit }) => {
  const api2 = {};
  const { MonhtList } = DATEPICKER;
  const state = reactive({
    months: MonhtList,
    tableRows: [[], [], []],
    lastRow: null,
    lastColumn: null,
    rows: computed(() => api2.getRows())
  });
  Object.assign(api2, {
    t: t2,
    state,
    getMonthOfCell: getMonthOfCell(props2),
    cellMatchesDate: cellMatchesDate(props2),
    markRange: markRange({ api: api2, props: props2, state }),
    watchDate: watchDate({ api: api2, props: props2 }),
    getMonthTimestamp: getMonthTimestamp(api2),
    handleMouseMove: handleMouseMove({ api: api2, emit, props: props2, state }),
    handleMonthTableClick: handleMonthTableClick({ api: api2, emit, props: props2 }),
    getCellStyle: getCellStyle$1({ api: api2, props: props2 }),
    getRows: getRows({ props: props2, state, vm })
  });
  watch(
    () => props2.rangeState,
    (value) => api2.markRange(props2.minDate, value.endDate),
    { deep: true }
  );
  watch(() => props2.minDate, api2.watchDate);
  watch(() => props2.maxDate, api2.watchDate);
  return api2;
};
const index$9 = "";
function _createForOfIteratorHelperLoose$h(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$h(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$h(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$h(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$h(o, minLen);
}
function _arrayLikeToArray$h(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$h = function _export_sfc28(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$h(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$h = defineComponent({
  name: $prefix + "MonthTable",
  emits: ["changerange", "pick"],
  props: {
    date: {},
    defaultValue: {
      validator: function validator4(val) {
        return val === null || isDate$1(val) || Array.isArray(val) && val.every(isDate$1);
      }
    },
    disabledDate: {},
    maxDate: {},
    minDate: {},
    rangeState: {
      default: function _default8() {
        return {
          endDate: null,
          selecting: false
        };
      }
    },
    selectionMode: {
      default: "month"
    },
    value: {}
  },
  setup: function setup$18(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$d,
      api: api$d,
      mono: true
    });
  }
});
var _hoisted_1$g = ["textContent"];
function _sfc_render$h(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock(
    "table",
    {
      class: "tiny-month-table",
      onMousemove: _cache[0] || (_cache[0] = function() {
        return _ctx.handleMouseMove && _ctx.handleMouseMove.apply(_ctx, arguments);
      }),
      onClick: _cache[1] || (_cache[1] = function() {
        return _ctx.handleMonthTableClick && _ctx.handleMonthTableClick.apply(_ctx, arguments);
      })
    },
    [createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.state.rows, function(row, key) {
        return openBlock(), createElementBlock("tr", {
          key
        }, [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(row, function(cell, key2) {
            return openBlock(), createElementBlock(
              "td",
              {
                class: normalizeClass(_ctx.getCellStyle(cell)),
                key: key2
              },
              [createBaseVNode("div", null, [createBaseVNode("a", {
                class: "cell",
                textContent: toDisplayString(_ctx.t("ui.datepicker.months." + _ctx.state.months[cell.text]))
              }, null, 8, _hoisted_1$g)])],
              2
              /* CLASS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))])],
    32
    /* NEED_HYDRATION */
  );
}
var MonthTable = /* @__PURE__ */ _export_sfc$h(_sfc_main$h, [["render", _sfc_render$h]]);
var version$e = "3.16.0";
MonthTable.install = function(Vue) {
  Vue.component(MonthTable.name, MonthTable);
};
MonthTable.version = version$e;
function _createForOfIteratorHelperLoose$g(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$g(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$g(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$g(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$g(o, minLen);
}
function _arrayLikeToArray$g(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$g = function _export_sfc29(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$g(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
function _extends$d() {
  _extends$d = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$d.apply(this, arguments);
}
var _sfc_main$g = defineComponent({
  name: $prefix + "DatePanel",
  directives: directive({
    Clickoutside: clickoutside_default
  }),
  components: {
    TimePicker: Time,
    YearTable,
    MonthTable,
    DateTable,
    TinyInput: Input,
    TinyButton: Button,
    TinyPopup: Popup,
    IconDoubleRight: index$j(),
    IconDoubleLeft: index$k(),
    IconChevronLeft: index$l(),
    IconChevronRight: index$m(),
    IconChevronDown: index$h(),
    IconChevronUp: index$i()
  },
  props: _extends$d({}, $props$1, {
    emitter: Object,
    step: {
      type: Object,
      default: function _default9() {
        return {
          hour: 1,
          minute: 1,
          second: 1
        };
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    formatWeeks: Function,
    timeEditable: {
      type: Boolean,
      default: true
    }
  }),
  emits: ["pick", "select-change", "dodestroy"],
  setup: function setup$19(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$i,
      api: api$i,
      extendOptions: {
        language
      }
    });
  }
});
var _hoisted_1$f = {
  class: "tiny-picker-panel__body-wrapper"
};
var _hoisted_2$d = {
  key: 0,
  class: "tiny-picker-panel__sidebar"
};
var _hoisted_3$c = ["onClick", "title"];
var _hoisted_4$a = {
  class: "tiny-picker-panel__body"
};
var _hoisted_5$9 = {
  key: 0,
  class: "tiny-date-picker__time-header"
};
var _hoisted_6$9 = {
  class: "tiny-date-picker__editor-wrap"
};
var _hoisted_7$8 = {
  class: "tiny-date-picker__editor-wrap"
};
var _hoisted_8$7 = ["aria-label"];
var _hoisted_9$5 = ["aria-label"];
var _hoisted_10$4 = ["aria-label"];
var _hoisted_11$3 = ["aria-label"];
var _hoisted_12$3 = {
  class: "tiny-picker-panel__content"
};
var _hoisted_13$3 = {
  key: 0,
  class: "tiny-picker-panel__timezone"
};
var _hoisted_14$3 = {
  class: "tiny-picker-panel__tzlist"
};
var _hoisted_15$3 = {
  class: "tzlist"
};
var _hoisted_16$3 = ["title", "onClick"];
var _hoisted_17$2 = {
  class: "tiny-picker-panel__footer"
};
function _sfc_render$g(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_input = resolveComponent("tiny-input");
  var _component_time_picker = resolveComponent("time-picker");
  var _component_icon_double_left = resolveComponent("icon-double-left");
  var _component_icon_chevron_left = resolveComponent("icon-chevron-left");
  var _component_icon_double_right = resolveComponent("icon-double-right");
  var _component_icon_chevron_right = resolveComponent("icon-chevron-right");
  var _component_date_table = resolveComponent("date-table");
  var _component_year_table = resolveComponent("year-table");
  var _component_month_table = resolveComponent("month-table");
  var _component_tiny_popup = resolveComponent("tiny-popup");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    onAfterEnter: _ctx.handleEnter,
    onAfterLeave: _ctx.handleLeave,
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["tiny-picker-panel tiny-date-picker tiny-popper", [{
            "has-sidebar": _ctx.slots.sidebar || _ctx.state.shortcuts,
            "has-time": _ctx.state.showTime
          }, _ctx.state.popperClass]])
        },
        [createBaseVNode("div", _hoisted_1$f, [renderSlot(_ctx.$slots, "sidebar", {
          class: "tiny-picker-panel__sidebar"
        }), _ctx.state.shortcuts ? (openBlock(), createElementBlock("div", _hoisted_2$d, [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.state.shortcuts, function(shortcut, key) {
            return openBlock(), createElementBlock("button", {
              type: "button",
              class: "tiny-picker-panel__shortcut",
              key,
              onClick: function onClick($event) {
                return _ctx.handleShortcutClick(shortcut);
              },
              title: shortcut.text
            }, toDisplayString(shortcut.text), 9, _hoisted_3$c);
          }),
          128
          /* KEYED_FRAGMENT */
        ))])) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_4$a, [_ctx.state.showTime ? (openBlock(), createElementBlock("div", _hoisted_5$9, [createBaseVNode("span", _hoisted_6$9, [createVNode(_component_tiny_input, {
          placeholder: _ctx.t("ui.datepicker.selectDate"),
          "model-value": _ctx.state.visibleDate,
          size: "small",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = function(val) {
            return _ctx.state.userInputDate = val;
          }),
          onChange: _ctx.handleVisibleDateChange
        }, null, 8, ["placeholder", "model-value", "onChange"])]), withDirectives((openBlock(), createElementBlock("span", _hoisted_7$8, [createVNode(_component_tiny_input, {
          ref: "input",
          onFocus: _cache[1] || (_cache[1] = function($event) {
            return _ctx.state.timePickerVisible = true;
          }),
          placeholder: _ctx.t("ui.datepicker.selectTime"),
          "model-value": _ctx.state.visibleTime,
          size: "small",
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function(val) {
            return _ctx.state.userInputTime = val;
          }),
          onChange: _ctx.handleVisibleTimeChange,
          readonly: !_ctx.timeEditable
        }, null, 8, ["placeholder", "model-value", "onChange", "readonly"]), _ctx.state.timePickerVisible ? (openBlock(), createBlock(_component_time_picker, {
          key: 0,
          ref: "timepicker",
          step: _ctx.step,
          "time-arrow-control": _ctx.state.arrowControl,
          show: _ctx.state.timePickerVisible,
          value: _ctx.state.date,
          onPick: _ctx.handleTimePick
        }, null, 8, ["step", "time-arrow-control", "show", "value", "onPick"])) : createCommentVNode("v-if", true)])), [[_directive_clickoutside, _ctx.handleTimePickClose]])])) : createCommentVNode("v-if", true), withDirectives(createBaseVNode(
          "div",
          {
            class: normalizeClass(["tiny-date-picker__header", {
              "tiny-date-picker__header--bordered": ["month", "year", "years", "yearrange"].includes(_ctx.state.currentView)
            }])
          },
          [createBaseVNode("button", {
            type: "button",
            onClick: _cache[3] || (_cache[3] = function() {
              return _ctx.cusPrevYear && _ctx.cusPrevYear.apply(_ctx, arguments);
            }),
            "aria-label": _ctx.t("ui.datepicker.prevYear"),
            class: "tiny-picker-panel__icon-btn tiny-date-picker__prev-btn tiny-icon-d-arrow-left"
          }, [createVNode(_component_icon_double_left)], 8, _hoisted_8$7), withDirectives(createBaseVNode("button", {
            type: "button",
            onClick: _cache[4] || (_cache[4] = function() {
              return _ctx.cusPrevMonth && _ctx.cusPrevMonth.apply(_ctx, arguments);
            }),
            "aria-label": _ctx.t("ui.datepicker.prevMonth"),
            class: "tiny-picker-panel__icon-btn tiny-date-picker__prev-btn tiny-icon-arrow-left"
          }, [createVNode(_component_icon_chevron_left)], 8, _hoisted_9$5), [[vShow, _ctx.state.currentView === "date"]]), createBaseVNode(
            "span",
            {
              onClick: _cache[5] || (_cache[5] = function() {
                return _ctx.showYearPicker && _ctx.showYearPicker.apply(_ctx, arguments);
              }),
              role: "button",
              class: "tiny-date-picker__header-label"
            },
            toDisplayString(_ctx.state.yearLabel),
            1
            /* TEXT */
          ), withDirectives(createBaseVNode(
            "span",
            {
              onClick: _cache[6] || (_cache[6] = function() {
                return _ctx.showMonthPicker && _ctx.showMonthPicker.apply(_ctx, arguments);
              }),
              role: "button",
              class: normalizeClass(["tiny-date-picker__header-label", {
                active: _ctx.state.currentView === "month"
              }])
            },
            toDisplayString(_ctx.t("ui.datepicker.month" + (_ctx.state.month + 1))),
            3
            /* TEXT, CLASS */
          ), [[vShow, _ctx.state.currentView === "date"]]), createBaseVNode("button", {
            type: "button",
            onClick: _cache[7] || (_cache[7] = function() {
              return _ctx.cusNextYear && _ctx.cusNextYear.apply(_ctx, arguments);
            }),
            "aria-label": _ctx.t("ui.datepicker.nextYear"),
            class: "tiny-picker-panel__icon-btn tiny-date-picker__next-btn tiny-icon-d-arrow-right"
          }, [createVNode(_component_icon_double_right)], 8, _hoisted_10$4), withDirectives(createBaseVNode("button", {
            type: "button",
            onClick: _cache[8] || (_cache[8] = function() {
              return _ctx.cusNextMonth && _ctx.cusNextMonth.apply(_ctx, arguments);
            }),
            "aria-label": _ctx.t("ui.datepicker.nextMonth"),
            class: "tiny-picker-panel__icon-btn tiny-date-picker__next-btn tiny-icon-arrow-right"
          }, [createVNode(_component_icon_chevron_right)], 8, _hoisted_11$3), [[vShow, _ctx.state.currentView === "date"]])],
          2
          /* CLASS */
        ), [[vShow, _ctx.state.currentView !== "time"]]), createBaseVNode("div", _hoisted_12$3, [_ctx.state.currentView === "date" ? (openBlock(), createBlock(_component_date_table, {
          key: 0,
          ref: "dateTable",
          onPick: _ctx.handleDatePick,
          "selection-mode": _ctx.state.selectionMode,
          "first-day-of-week": _ctx.state.firstDayOfWeek,
          value: _ctx.state.value,
          "default-value": _ctx.state.defaultValue ? new Date(_ctx.state.defaultValue) : null,
          date: _ctx.state.date,
          "cell-class-name": _ctx.state.cellClassName,
          "disabled-date": _ctx.state.disabledDate,
          "show-week-number": _ctx.showWeekNumber,
          "format-weeks": _ctx.formatWeeks
        }, null, 8, ["onPick", "selection-mode", "first-day-of-week", "value", "default-value", "date", "cell-class-name", "disabled-date", "show-week-number", "format-weeks"])) : createCommentVNode("v-if", true), ["year", "years", "yearrange"].includes(_ctx.state.currentView) ? (openBlock(), createBlock(_component_year_table, {
          key: 1,
          ref: "yearTable",
          value: _ctx.state.value,
          "default-value": _ctx.state.defaultValue ? new Date(_ctx.state.defaultValue) : null,
          date: _ctx.state.date,
          "disabled-date": _ctx.state.disabledDate,
          "selection-mode": _ctx.state.selectionMode,
          "start-year": _ctx.state.startYear,
          onPick: _ctx.handleYearPick
        }, null, 8, ["value", "default-value", "date", "disabled-date", "selection-mode", "start-year", "onPick"])) : createCommentVNode("v-if", true), _ctx.state.currentView === "month" ? (openBlock(), createBlock(_component_month_table, {
          key: 2,
          ref: "monthTable",
          onPick: _ctx.handleMonthPick,
          value: _ctx.state.value,
          "default-value": _ctx.state.defaultValue ? new Date(_ctx.state.defaultValue) : null,
          date: _ctx.state.date,
          "disabled-date": _ctx.state.disabledDate
        }, null, 8, ["onPick", "value", "default-value", "date", "disabled-date"])) : createCommentVNode("v-if", true)])])]), _ctx.state.isShowTz || _ctx.state.timezone.isServiceTimezone ? withDirectives((openBlock(), createElementBlock("div", _hoisted_13$3, [createVNode(_component_tiny_input, {
          modelValue: _ctx.state.tz,
          "onUpdate:modelValue": [_cache[9] || (_cache[9] = function($event) {
            return _ctx.state.tz = $event;
          }), _ctx.searchTz],
          disabled: _ctx.state.timezone.isServiceTimezone,
          placeholder: _ctx.t("ui.datepicker.timezone")
        }, {
          suffix: withCtx(function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.state.showpopup ? "IconChevronDown" : "IconChevronUp"), {
              fill: "#ccc",
              onClick: _ctx.toggleTz
            }, null, 8, ["onClick"]))];
          }),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled", "onUpdate:modelValue", "placeholder"]), createBaseVNode("div", _hoisted_14$3, [createVNode(_component_tiny_popup, {
          modelValue: _ctx.state.showpopup,
          "onUpdate:modelValue": _cache[10] || (_cache[10] = function($event) {
            return _ctx.state.showpopup = $event;
          }),
          overlay: false,
          position: "up",
          duration: 0.2,
          closeable: false
        }, {
          default: withCtx(function() {
            return [createBaseVNode("div", _hoisted_15$3, [createBaseVNode("ul", null, [(openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.state.renderTzdata, function(tz, index3) {
                return withDirectives((openBlock(), createElementBlock("li", {
                  class: "tiny-picker-panel__tzlist-li",
                  title: tz.name,
                  key: index3,
                  onClick: function onClick($event) {
                    return _ctx.selectTz(tz);
                  }
                }, toDisplayString(tz.name), 9, _hoisted_16$3)), [[vShow, !tz.visible]]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))])])];
          }),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])])])), [[_directive_clickoutside, _ctx.handleTzPickClose]]) : createCommentVNode("v-if", true), withDirectives(createBaseVNode(
          "div",
          _hoisted_17$2,
          [withDirectives(createVNode(_component_tiny_button, {
            size: "mini",
            type: "text",
            class: "tiny-picker-panel__link-btn",
            onClick: _ctx.changeToNow
          }, {
            default: withCtx(function() {
              return [createTextVNode(
                toDisplayString(_ctx.t("ui.datepicker.now")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]), [[vShow, !["dates", "years"].includes(_ctx.state.selectionMode)]]), createVNode(_component_tiny_button, {
            type: "primary",
            size: "mini",
            class: "tiny-picker-panel__link-btn",
            onClick: _ctx.confirm
          }, {
            default: withCtx(function() {
              return [createTextVNode(
                toDisplayString(_ctx.t("ui.datepicker.confirm")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])],
          512
          /* NEED_PATCH */
        ), [[vShow, _ctx.state.isShowFooter]])],
        2
        /* CLASS */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
var pc$3 = /* @__PURE__ */ _export_sfc$g(_sfc_main$g, [["render", _sfc_render$g]]);
function _createForOfIteratorHelperLoose$f(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$f(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$f(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$f(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$f(o, minLen);
}
function _arrayLikeToArray$f(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$f = function _export_sfc210(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$f(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
function _extends$c() {
  _extends$c = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$c.apply(this, arguments);
}
var classes$3 = {
  "picker-panel": "w-96 text-color-text-primary text-xs shadow-md bg-color-bg-1 rounded leading-4 my-0.5 mx-0",
  "picker-panel-body": "after:content-[''] after:table after:clear-both",
  "content": "relative py-0 px-4",
  "header": "p-4 h-12 text-center",
  "bordered": "mb-0 pb-3",
  "disabled": "text-color-text-disabled",
  "icon-btn": "text-sm leading-4 fill-color-text-primary border-0 cursor-pointer outline-0 hover:fill-color-brand",
  "header-label": "text-xs font-medium py-0 px-1 text-center text-color-text-primary align-middle",
  "body-content": "float-left w-1/2 box-border m-0 pt-4 pr-4 pb-1.5 pl-4",
  "today": "border border-solid border-color-border-focus",
  "footer": "border-t border-t-color-bg-3 py-3 px-4 bg-color-bg-1 overflow-hidden rounded-b",
  "link-btn": "align-middle rounded",
  "time-header": "relative text-xs h-10 leading-10 table w-full box-border border-b border-b-color-bg-3",
  "editor-wrap": "relative table-cell px-1"
};
var _sfc_main$f = defineComponent({
  directives: directive({
    Clickoutside: clickoutside_default
  }),
  components: {
    TimePicker: Time,
    YearTable,
    MonthTable,
    DateTable,
    TinyInput: Input,
    TinyButton: Button,
    TinyPopup: Popup,
    IconDoubleRight: index$j(),
    IconDoubleLeft: index$k(),
    IconChevronLeft: index$l(),
    IconChevronRight: index$m(),
    IconChevronDown: index$h(),
    IconChevronUp: index$i()
  },
  props: _extends$c({}, props, {
    emitter: Object,
    step: {
      type: Object,
      default: function _default10() {
        return {
          hour: 1,
          minute: 1,
          second: 1
        };
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    formatWeeks: Function
  }),
  emits: ["pick", "select-change", "dodestroy"],
  setup: function setup$110(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$i,
      api: api$i,
      classes: classes$3,
      extendOptions: {
        language
      }
    });
  }
});
var _hoisted_1$e = {
  key: 0,
  "data-tag": "tiny-picker-panel__sidebar"
};
var _hoisted_2$c = ["onClick"];
var _hoisted_3$b = ["aria-label"];
var _hoisted_4$9 = ["aria-label"];
var _hoisted_5$8 = {
  key: 0,
  "data-tag": "tiny-picker-panel__timezone"
};
var _hoisted_6$8 = {
  "data-tag": "tiny-picker-panel__tzlist"
};
var _hoisted_7$7 = {
  "data-tag": "tzlist"
};
var _hoisted_8$6 = ["title", "onClick"];
function _sfc_render$f(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_input = resolveComponent("tiny-input");
  var _component_time_picker = resolveComponent("time-picker");
  var _component_icon_chevron_left = resolveComponent("icon-chevron-left");
  var _component_icon_chevron_right = resolveComponent("icon-chevron-right");
  var _component_date_table = resolveComponent("date-table");
  var _component_year_table = resolveComponent("year-table");
  var _component_month_table = resolveComponent("month-table");
  var _component_tiny_popup = resolveComponent("tiny-popup");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    onAfterEnter: _ctx.handleEnter,
    onAfterLeave: _ctx.handleLeave,
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          "data-tag": "tiny-picker-panel tiny-date-picker tiny-popper",
          class: normalizeClass([_ctx.gcls("picker-panel"), _ctx.state.popperClass])
        },
        [createBaseVNode(
          "div",
          {
            "data-tag": "tiny-picker-panel__body-wrapper",
            class: normalizeClass(_ctx.gcls("picker-panel-body"))
          },
          [renderSlot(_ctx.$slots, "sidebar", {
            dataTag: "tiny-picker-panel__sidebar"
          }), _ctx.state.shortcuts ? (openBlock(), createElementBlock("div", _hoisted_1$e, [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.shortcuts, function(shortcut, key) {
              return openBlock(), createElementBlock("button", {
                type: "button",
                "data-tag": "tiny-picker-panel__shortcut",
                key,
                onClick: function onClick($event) {
                  return _ctx.handleShortcutClick(shortcut);
                }
              }, toDisplayString(shortcut.text), 9, _hoisted_2$c);
            }),
            128
            /* KEYED_FRAGMENT */
          ))])) : createCommentVNode("v-if", true), createBaseVNode(
            "div",
            {
              "data-tag": "tiny-picker-panel__body",
              class: normalizeClass(_ctx.gcls("picker-panel-body"))
            },
            [_ctx.state.showTime ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                "data-tag": "tiny-date-picker__time-header",
                class: normalizeClass(_ctx.gcls("time-header"))
              },
              [createBaseVNode(
                "span",
                {
                  "data-tag": "tiny-date-picker__editor-wrap",
                  class: normalizeClass(_ctx.gcls("editor-wrap"))
                },
                [createVNode(_component_tiny_input, {
                  placeholder: _ctx.t("ui.datepicker.selectDate"),
                  "model-value": _ctx.state.visibleDate,
                  size: "small",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = function(val) {
                    return _ctx.state.userInputDate = val;
                  }),
                  onChange: _ctx.handleVisibleDateChange
                }, null, 8, ["placeholder", "model-value", "onChange"])],
                2
                /* CLASS */
              ), withDirectives((openBlock(), createElementBlock(
                "span",
                {
                  "data-tag": "tiny-date-picker__editor-wrap",
                  class: normalizeClass(_ctx.gcls("editor-wrap"))
                },
                [createVNode(_component_tiny_input, {
                  ref: "input",
                  onFocus: _cache[1] || (_cache[1] = function($event) {
                    return _ctx.state.timePickerVisible = true;
                  }),
                  placeholder: _ctx.t("ui.datepicker.selectTime"),
                  "model-value": _ctx.state.visibleTime,
                  size: "small",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function(val) {
                    return _ctx.state.userInputTime = val;
                  }),
                  onChange: _ctx.handleVisibleTimeChange
                }, null, 8, ["placeholder", "model-value", "onChange"]), _ctx.state.timePickerVisible ? (openBlock(), createBlock(_component_time_picker, {
                  key: 0,
                  ref: "timepicker",
                  step: _ctx.step,
                  "time-arrow-control": _ctx.state.arrowControl,
                  show: _ctx.state.timePickerVisible,
                  value: _ctx.state.date,
                  onPick: _ctx.handleTimePick
                }, null, 8, ["step", "time-arrow-control", "show", "value", "onPick"])) : createCommentVNode("v-if", true)],
                2
                /* CLASS */
              )), [[_directive_clickoutside, _ctx.handleTimePickClose]])],
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true), withDirectives(createBaseVNode(
              "div",
              {
                "data-tag": "tiny-date-picker__header",
                class: normalizeClass([_ctx.gcls("header"), ["month", "year", "years", "yearrange"].includes(_ctx.state.currentView) && _ctx.gcls("bordered")])
              },
              [withDirectives(createBaseVNode("button", {
                type: "button",
                onClick: _cache[3] || (_cache[3] = function() {
                  return _ctx.cusPrevMonth && _ctx.cusPrevMonth.apply(_ctx, arguments);
                }),
                "aria-label": _ctx.t("ui.datepicker.prevMonth"),
                "data-tag": "tiny-picker-panel__icon-btn tiny-date-picker__prev-btn tiny-icon-arrow-left",
                class: normalizeClass([_ctx.gcls("icon-btn"), "float-left"])
              }, [createVNode(_component_icon_chevron_left)], 10, _hoisted_3$b), [[vShow, _ctx.state.currentView === "date"]]), createBaseVNode(
                "span",
                {
                  role: "button",
                  "data-tag": "tiny-date-picker__header-label",
                  class: normalizeClass([_ctx.gcls("header-label")])
                },
                toDisplayString(_ctx.state.yearLabel),
                3
                /* TEXT, CLASS */
              ), withDirectives(createBaseVNode(
                "span",
                {
                  role: "button",
                  "data-tag": "tiny-date-picker__header-label",
                  class: normalizeClass([_ctx.gcls("header-label"), {
                    "text-color-brand": _ctx.state.currentView === "month"
                  }])
                },
                toDisplayString(_ctx.t("ui.datepicker.month" + (_ctx.state.month + 1))),
                3
                /* TEXT, CLASS */
              ), [[vShow, _ctx.state.currentView === "date"]]), withDirectives(createBaseVNode("button", {
                type: "button",
                onClick: _cache[4] || (_cache[4] = function() {
                  return _ctx.cusNextMonth && _ctx.cusNextMonth.apply(_ctx, arguments);
                }),
                "aria-label": _ctx.t("ui.datepicker.nextMonth"),
                "data-tag": "tiny-picker-panel__icon-btn tiny-date-picker__next-btn tiny-icon-arrow-right",
                class: normalizeClass([_ctx.gcls("icon-btn"), "float-right"])
              }, [createVNode(_component_icon_chevron_right)], 10, _hoisted_4$9), [[vShow, _ctx.state.currentView === "date"]])],
              2
              /* CLASS */
            ), [[vShow, _ctx.state.currentView !== "time"]]), createBaseVNode(
              "div",
              {
                "data-tag": "tiny-picker-panel__content",
                class: normalizeClass(_ctx.gcls("content"))
              },
              [_ctx.state.currentView === "date" ? (openBlock(), createBlock(_component_date_table, {
                key: 0,
                ref: "dateTable",
                onPick: _ctx.handleDatePick,
                "selection-mode": _ctx.state.selectionMode,
                "first-day-of-week": _ctx.state.firstDayOfWeek,
                value: _ctx.state.value,
                "default-value": _ctx.state.defaultValue ? new Date(_ctx.state.defaultValue) : null,
                date: _ctx.state.date,
                "cell-class-name": _ctx.state.cellClassName,
                "disabled-date": _ctx.state.disabledDate,
                "show-week-number": _ctx.showWeekNumber,
                "format-weeks": _ctx.formatWeeks
              }, null, 8, ["onPick", "selection-mode", "first-day-of-week", "value", "default-value", "date", "cell-class-name", "disabled-date", "show-week-number", "format-weeks"])) : createCommentVNode("v-if", true), ["year", "years", "yearrange"].includes(_ctx.state.currentView) ? (openBlock(), createBlock(_component_year_table, {
                key: 1,
                ref: "yearTable",
                value: _ctx.state.value,
                "default-value": _ctx.state.defaultValue ? new Date(_ctx.state.defaultValue) : null,
                date: _ctx.state.date,
                "disabled-date": _ctx.state.disabledDate,
                "selection-mode": _ctx.state.selectionMode,
                "start-year": _ctx.state.startYear,
                onPick: _ctx.handleYearPick
              }, null, 8, ["value", "default-value", "date", "disabled-date", "selection-mode", "start-year", "onPick"])) : createCommentVNode("v-if", true), _ctx.state.currentView === "month" ? (openBlock(), createBlock(_component_month_table, {
                key: 2,
                ref: "monthTable",
                onPick: _ctx.handleMonthPick,
                value: _ctx.state.value,
                "default-value": _ctx.state.defaultValue ? new Date(_ctx.state.defaultValue) : null,
                date: _ctx.state.date,
                "disabled-date": _ctx.state.disabledDate
              }, null, 8, ["onPick", "value", "default-value", "date", "disabled-date"])) : createCommentVNode("v-if", true)],
              2
              /* CLASS */
            )],
            2
            /* CLASS */
          )],
          2
          /* CLASS */
        ), _ctx.state.isShowTz || _ctx.state.timezone.isServiceTimezone ? withDirectives((openBlock(), createElementBlock("div", _hoisted_5$8, [createVNode(_component_tiny_input, {
          modelValue: _ctx.state.tz,
          "onUpdate:modelValue": [_cache[5] || (_cache[5] = function($event) {
            return _ctx.state.tz = $event;
          }), _ctx.searchTz],
          disabled: _ctx.state.timezone.isServiceTimezone,
          placeholder: _ctx.t("ui.datepicker.timezone")
        }, {
          suffix: withCtx(function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.state.showpopup ? "IconChevronDown" : "IconChevronUp"), {
              fill: "#ccc",
              onClick: _ctx.toggleTz
            }, null, 8, ["onClick"]))];
          }),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled", "onUpdate:modelValue", "placeholder"]), createBaseVNode("div", _hoisted_6$8, [createVNode(_component_tiny_popup, {
          modelValue: _ctx.state.showpopup,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = function($event) {
            return _ctx.state.showpopup = $event;
          }),
          overlay: false,
          position: "up",
          duration: 0.2,
          closeable: false
        }, {
          default: withCtx(function() {
            return [createBaseVNode("div", _hoisted_7$7, [createBaseVNode("ul", null, [(openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.state.renderTzdata, function(tz, index3) {
                return withDirectives((openBlock(), createElementBlock("li", {
                  "data-tag": "tiny-picker-panel__tzlist-li",
                  title: tz.name,
                  key: index3,
                  onClick: function onClick($event) {
                    return _ctx.selectTz(tz);
                  }
                }, toDisplayString(tz.name), 9, _hoisted_8$6)), [[vShow, !tz.visible]]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))])])];
          }),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])])])), [[_directive_clickoutside, _ctx.handleTzPickClose]]) : createCommentVNode("v-if", true), withDirectives(createBaseVNode(
          "div",
          {
            "data-tag": "tiny-picker-panel__footer",
            class: normalizeClass(_ctx.gcls("footer"))
          },
          [withDirectives(createVNode(_component_tiny_button, {
            size: "mini",
            type: "text",
            "data-tag": "tiny-picker-panel__link-btn",
            class: normalizeClass(_ctx.gcls("link-btn")),
            onClick: _ctx.changeToNow
          }, {
            default: withCtx(function() {
              return [createTextVNode(
                toDisplayString(_ctx.t("ui.datepicker.now")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }, 8, ["class", "onClick"]), [[vShow, !["dates", "years"].includes(_ctx.state.selectionMode)]]), createVNode(_component_tiny_button, {
            type: "primary",
            size: "mini",
            "data-tag": "tiny-picker-panel__link-btn",
            class: normalizeClass(["float-right", _ctx.gcls("link-btn")]),
            onClick: _ctx.confirm
          }, {
            default: withCtx(function() {
              return [createTextVNode(
                toDisplayString(_ctx.t("ui.datepicker.confirm")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }, 8, ["class", "onClick"])],
          2
          /* CLASS */
        ), [[vShow, _ctx.state.isShowFooter]])],
        2
        /* CLASS */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
var mobileFirst$4 = /* @__PURE__ */ _export_sfc$f(_sfc_main$f, [["render", _sfc_render$f]]);
const index$8 = "";
function _extends$b() {
  _extends$b = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$b.apply(this, arguments);
}
var template$6 = function template24(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$3;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$4;
  }
  return pc$3;
};
var DatePanel = defineComponent({
  name: $prefix + "DatePanel",
  componentName: "DatePanel",
  props: _extends$b({}, $props$1, {
    emitter: Object,
    step: {
      type: Object,
      default: function _default11() {
        return {
          hour: 1,
          minute: 1,
          second: 1
        };
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    formatWeeks: Function
  }),
  setup: function setup5(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$6
    });
  }
});
var version$d = "3.16.0";
DatePanel.install = function(Vue) {
  Vue.component(DatePanel.name, DatePanel);
};
DatePanel.version = version$d;
const calcDefaultValue$2 = (defaultVal) => {
  if (Array.isArray(defaultVal)) {
    return [new Date(defaultVal[0]), new Date(defaultVal[1])];
  } else if (defaultVal) {
    return [new Date(defaultVal), nextDate(new Date(defaultVal), 1)];
  }
  return [/* @__PURE__ */ new Date(), nextDate(/* @__PURE__ */ new Date(), 1)];
};
const getMinVisibleDate = ({ state, t: t2 }) => () => {
  if (state.dateUserInput.min !== null) {
    return state.dateUserInput.min;
  }
  if (state.minDate) {
    return formatDate$1(state.minDate, state.dateFormat, t2);
  }
  return "";
};
const getMaxVisibleDate = ({ state, t: t2 }) => () => {
  if (state.dateUserInput.max !== null) {
    return state.dateUserInput.max;
  }
  if (state.maxDate || state.minDate) {
    return formatDate$1(state.maxDate || state.minDate, state.dateFormat, t2);
  }
  return "";
};
const getMinVisibleTime = ({ state, t: t2 }) => () => {
  if (state.timeUserInput.min !== null) {
    return state.timeUserInput.min;
  }
  if (state.minDate) {
    return formatDate$1(state.minDate, state.timeFormat, t2);
  }
  return "";
};
const getMaxVisibleTime = ({ state, t: t2 }) => () => {
  if (state.timeUserInput.max !== null) {
    return state.timeUserInput.max;
  }
  if (state.maxDate || state.minDate) {
    return formatDate$1(state.maxDate || state.minDate, state.timeFormat, t2);
  }
  return "";
};
const getEnableMonthArrow = (state) => () => {
  const nextMonth2 = (state.leftMonth + 1) % 12;
  const yearOffset = state.leftMonth + 1 >= 12 ? 1 : 0;
  return state.unlinkPanels && new Date(state.leftYear + yearOffset, nextMonth2) < new Date(state.rightYear, state.rightMonth);
};
const watchMinDate = ({ state, t: t2, vm }) => (value) => {
  state.dateUserInput.min = null;
  state.timeUserInput.min = null;
  const minTimePicker = vm.$refs.minTimePicker;
  if (!minTimePicker) {
    return;
  }
  if (state.maxDate && state.maxDate < state.minDate) {
    const format2 = "HH:mm:ss";
    minTimePicker.state.selectableRange = [
      [parseDate(formatDate$1(state.minDate, format2, t2), format2, t2), parseDate("23:59:59", format2, t2)]
    ];
  }
  if (value) {
    minTimePicker.state.value = value;
  }
};
const watchMaxDate = ({ state, vm }) => (value) => {
  state.dateUserInput.max = null;
  state.timeUserInput.max = null;
  const maxTimePicker = vm.$refs.maxTimePicker;
  if (value && maxTimePicker) {
    maxTimePicker.state.value = value;
  }
};
const watchMinTimePickerVisible = ({ nextTick, state, vm }) => (value) => {
  if (value) {
    nextTick(() => {
      vm.$refs.minTimePicker.state.value = state.minDate;
    });
  }
};
const watchMaxTimePickerVisible = ({ nextTick, state, vm }) => (value) => {
  if (value) {
    nextTick(() => {
      vm.$refs.maxTimePicker.state.value = state.maxDate;
    });
  }
};
const watchValue$3 = ({ state }) => (value) => {
  if (!value) {
    state.minDate = null;
    state.maxDate = null;
  } else if (Array.isArray(value)) {
    state.minDate = isDate$1(value[0]) ? new Date(value[0]) : null;
    state.maxDate = isDate$1(value[1]) ? new Date(value[1]) : null;
    if (state.minDate) {
      state.leftDate = state.minDate;
      if (state.unlinkPanels && state.maxDate) {
        const minDateYear = state.minDate.getFullYear();
        const minDateMonth = state.minDate.getMonth();
        const maxDateYear = state.maxDate.getFullYear();
        const maxDateMonth = state.maxDate.getMonth();
        state.rightDate = minDateYear === maxDateYear && minDateMonth === maxDateMonth ? nextMonth(state.maxDate) : state.maxDate;
      } else {
        state.rightDate = nextMonth(state.leftDate);
      }
    } else {
      state.leftDate = calcDefaultValue$2(state.defaultValue)[0];
      state.rightDate = nextMonth(state.leftDate);
    }
  }
};
const watchDefault = ({ state }) => (value) => {
  if (!Array.isArray(state.value)) {
    const [left, right] = calcDefaultValue$2(value);
    state.leftDate = left;
    state.rightDate = value && value[1] && state.unlinkPanels ? right : nextMonth(state.leftDate);
  }
};
const handleClear$3 = ({ emit, state }) => () => {
  state.minDate = null;
  state.maxDate = null;
  state.leftDate = calcDefaultValue$2(state.defaultValue)[0];
  state.rightDate = nextMonth(state.leftDate);
  state.rangeState.selecting = false;
  state.rangeState.endDate = null;
  emit("pick", null);
};
const handleChangeRange$2 = (state) => (val) => {
  state.minDate = val.minDate;
  state.maxDate = val.maxDate;
  state.rangeState = val.rangeState;
};
const handleDateInput = ({ state, t: t2 }) => (value, type) => {
  state.dateUserInput[type] = value;
  if (value.length !== state.dateFormat.length) {
    return;
  }
  const parsedValue2 = parseDate(value, state.dateFormat, t2);
  if (parsedValue2) {
    if (typeof state.disabledDate === "function" && state.disabledDate(new Date(parsedValue2))) {
      return;
    }
    if (type === "min") {
      state.minDate = modifyDate(
        state.minDate || /* @__PURE__ */ new Date(),
        parsedValue2.getFullYear(),
        parsedValue2.getMonth(),
        parsedValue2.getDate()
      );
      state.leftDate = new Date(parsedValue2);
      if (!state.unlinkPanels) {
        state.rightDate = nextMonth(state.leftDate);
      }
    } else {
      state.maxDate = modifyDate(
        state.maxDate || /* @__PURE__ */ new Date(),
        parsedValue2.getFullYear(),
        parsedValue2.getMonth(),
        parsedValue2.getDate()
      );
      state.rightDate = new Date(parsedValue2);
      if (!state.unlinkPanels) {
        state.leftDate = prevMonth(parsedValue2);
      }
    }
  }
};
const handleDateChange = ({ state, t: t2 }) => (value, type) => {
  const parsedValue2 = parseDate(value, state.dateFormat, t2);
  if (parsedValue2) {
    if (type === "min") {
      state.minDate = modifyDate(
        state.minDate || /* @__PURE__ */ new Date(),
        parsedValue2.getFullYear(),
        parsedValue2.getMonth(),
        parsedValue2.getDate()
      );
      if (state.minDate > state.maxDate) {
        state.maxDate = state.minDate;
      }
    } else {
      state.maxDate = modifyDate(
        state.maxDate || /* @__PURE__ */ new Date(),
        parsedValue2.getFullYear(),
        parsedValue2.getMonth(),
        parsedValue2.getDate()
      );
      if (state.maxDate < state.minDate) {
        state.minDate = state.maxDate;
      }
    }
  }
};
const handleTimeInput = ({ state, t: t2 }) => (value, type) => {
  state.timeUserInput[type] = value;
  if (value.length !== state.timeFormat.length) {
    return;
  }
  const parsedValue2 = parseDate(value, state.timeFormat, t2);
  if (parsedValue2) {
    if (type === "min") {
      state.minDate = modifyTime(
        state.minDate,
        parsedValue2.getHours(),
        parsedValue2.getMinutes(),
        parsedValue2.getSeconds()
      );
    } else {
      state.maxDate = modifyTime(
        state.maxDate,
        parsedValue2.getHours(),
        parsedValue2.getMinutes(),
        parsedValue2.getSeconds()
      );
    }
  }
};
const handleTimeChange = ({ state, t: t2, vm }) => (value, type) => {
  const parsedValue2 = parseDate(value, state.timeFormat, t2);
  if (parsedValue2) {
    if (type === "min") {
      state.minDate = modifyTime(
        state.minDate,
        parsedValue2.getHours(),
        parsedValue2.getMinutes(),
        parsedValue2.getSeconds()
      );
      if (state.minDate > state.maxDate) {
        state.maxDate = state.minDate;
      }
      vm.$refs.minTimePicker.state.value = state.minDate;
      state.minTimePickerVisible = false;
    } else {
      state.maxDate = modifyTime(
        state.maxDate,
        parsedValue2.getHours(),
        parsedValue2.getMinutes(),
        parsedValue2.getSeconds()
      );
      if (state.maxDate < state.minDate) {
        state.minDate = state.maxDate;
      }
      vm.$refs.maxTimePicker.state.value = state.minDate;
      state.maxTimePickerVisible = false;
    }
  }
};
const handleRangePick$2 = ({ api: api2, state, t: t2 }) => (val, close2 = true) => {
  const defaultTime = state.defaultTime || [];
  let minDateVal = val.minDate;
  let maxDateVal = val.maxDate;
  if (state.singleSelect) {
    Object.assign(state.rangeState, { selecting: false });
    const effectDate = val.minDate || val.maxDate;
    const rangeDate = state.shortcutType === "startFrom" ? state.maxRangeDate : state.minRangeDate;
    minDateVal = rangeDate > effectDate ? effectDate : rangeDate;
    maxDateVal = rangeDate > effectDate ? rangeDate : effectDate;
  }
  const minDate = modifyWithTimeString(minDateVal, defaultTime[0], t2);
  const maxDate = modifyWithTimeString(maxDateVal, defaultTime[1], t2);
  if (state.maxDate === maxDate && state.minDate === minDate) {
    return;
  }
  state.onPick && state.onPick(val);
  state.maxDate = maxDate;
  state.minDate = minDate;
  setTimeout(() => {
    state.maxDate = maxDate;
    state.minDate = minDate;
  }, 10);
  if (!close2 || state.showTime) {
    return;
  }
  api2.handleConfirm();
};
const handleShortcutClick$2 = (state, api2) => (shortcut) => {
  if (shortcut.type) {
    state.singleSelect = true;
    state.shortcutType = shortcut.type;
    state.shortcutText = shortcut.text;
    if (shortcut.type === "startFrom" && shortcut.endDate && isDate$1(shortcut.endDate)) {
      state.maxRangeDate = shortcut.endDate;
    }
    if (shortcut.type === "endAt" && shortcut.startDate && isDate$1(shortcut.startDate)) {
      state.minRangeDate = shortcut.startDate;
    }
    state.value = [];
    return;
  }
  if (shortcut.onClick) {
    const picker = {
      $emit: (type, [start, end]) => {
        api2.doPick(start, end);
      }
    };
    shortcut.onClick(picker);
  }
};
const doPick$2 = (emit) => (start, end) => {
  emit("pick", [start, end], false);
};
const handleMinTimePick = ({ state }) => (value, visible, first) => {
  state.minDate = state.minDate || /* @__PURE__ */ new Date();
  if (value) {
    state.minDate = modifyTime(state.minDate, value.getHours(), value.getMinutes(), value.getSeconds());
  }
  if (!first) {
    state.minTimePickerVisible = visible;
  }
  if (!state.maxDate || state.maxDate && state.maxDate.getTime() < state.minDate.getTime()) {
    state.maxDate = new Date(state.minDate);
  }
};
const handleMinTimeClose = (state) => () => state.minTimePickerVisible = false;
const handleMaxTimePick = ({ state }) => (value, visible, first) => {
  if (state.maxDate && value) {
    state.maxDate = modifyTime(state.maxDate, value.getHours(), value.getMinutes(), value.getSeconds());
  }
  if (!first) {
    state.maxTimePickerVisible = visible;
  }
  if (state.maxDate && state.minDate && state.minDate.getTime() > state.maxDate.getTime()) {
    state.minDate = new Date(state.maxDate);
  }
};
const handleMaxTimeClose = (state) => () => state.maxTimePickerVisible = false;
const leftPrevYear$2 = ({ state }) => () => {
  state.leftDate = prevYear(state.leftDate);
  if (!state.unlinkPanels) {
    state.rightDate = nextMonth(state.leftDate);
  }
};
const leftPrevMonth = ({ state }) => () => {
  state.leftDate = prevMonth(state.leftDate);
  if (!state.unlinkPanels) {
    state.rightDate = nextMonth(state.leftDate);
  }
};
const rightNextYear$2 = ({ state }) => () => {
  const { leftDate, rightDate, unlinkPanels } = state;
  if (!unlinkPanels) {
    state.leftDate = nextYear(leftDate);
    state.rightDate = nextMonth(state.leftDate);
  } else {
    state.rightDate = nextYear(rightDate);
  }
};
const rightNextMonth = ({ state }) => () => {
  if (!state.unlinkPanels) {
    state.leftDate = nextMonth(state.leftDate);
    state.rightDate = nextMonth(state.leftDate);
  } else {
    state.rightDate = nextMonth(state.rightDate);
  }
};
const leftNextYear$1 = ({ state }) => () => state.leftDate = nextYear(state.leftDate);
const leftNextMonth = ({ state }) => () => state.leftDate = nextMonth(state.leftDate);
const rightPrevYear$1 = ({ state }) => () => state.rightDate = prevYear(state.rightDate);
const rightPrevMonth = ({ state }) => () => state.rightDate = prevMonth(state.rightDate);
const handleConfirm$2 = ({ api: api2, emit, state }) => (visible = false) => {
  if (api2.isValidValue([state.minDate, state.maxDate])) {
    emit("pick", [state.minDate, state.maxDate], visible);
  }
};
const isValidValue$3 = ({ state }) => (value) => Array.isArray(value) && value && value[0] && value[1] && isDate$1(value[0]) && isDate$1(value[1]) && value[0].getTime() <= value[1].getTime() && (typeof state.disabledDate === "function" ? !state.disabledDate(value[0]) && !state.disabledDate(value[1]) : true);
const resetView$2 = ({ state }) => () => {
  state.minDate = state.value && isDate$1(state.value[0]) ? new Date(state.value[0]) : null;
  state.maxDate = state.value && isDate$1(state.value[0]) ? new Date(state.value[1]) : null;
};
const setTimeFormat = ({ nextTick, vm, state }) => () => {
  nextTick(() => {
    vm.$refs.maxTimePicker.state.format = state.timeFormat;
    vm.$refs.minTimePicker.state.format = state.timeFormat;
  });
};
const computerBtnDisabled = ({ state, api: api2 }) => () => !(state.minDate && state.maxDate && !state.selecting && api2.isValidValue([state.minDate, state.maxDate]));
const computerLabel = ({ state, t: t2 }) => (type) => `${state[type].getFullYear()} ${t2("ui.datepicker.year")} ${t2(`ui.datepicker.month${state[type].getMonth() + 1}`)}`;
const computerEnableYearArrow = (state) => () => state.unlinkPanels && state.rightYear * 12 + state.rightMonth - (state.leftYear * 12 + state.leftMonth + 1) >= 12;
const watchPickerVisible = ({ state, constants }) => (val) => {
  if (!val) {
    state.singleSelect = false;
    state.minRangeDate = constants.startDate;
    state.maxRangeDate = constants.endDate;
  }
};
const api$c = [
  "state",
  "handleShortcutClick",
  "handleConfirm",
  "handleClear",
  "handleChangeRange",
  "rightNextMonth",
  "rightNextYear",
  "rightPrevMonth",
  "rightPrevYear",
  "handleRangePick",
  "leftNextMonth",
  "leftNextYear",
  "leftPrevMonth",
  "leftPrevYear",
  "handleMaxTimePick",
  "handleDateInput",
  "handleMinTimePick",
  "handleTimeChange",
  "handleTimeInput",
  "handleMinTimeClose",
  "handleDateChange",
  "handleMaxTimeClose",
  "isValidValue"
];
const initState$6 = ({ reactive, computed, api: api2, constants, designConfig }) => {
  var _a;
  const state = reactive({
    popperElm: null,
    popperClass: "",
    value: [],
    defaultValue: null,
    defaultTime: null,
    minDate: "",
    maxDate: "",
    shortcutType: "",
    shortcutText: "",
    singleSelect: false,
    minRangeDate: constants.startDate,
    maxRangeDate: constants.endDate,
    leftDate: /* @__PURE__ */ new Date(),
    rightDate: nextMonth(/* @__PURE__ */ new Date()),
    rangeState: { endDate: null, selecting: false, row: null, column: null },
    showTime: false,
    format: "",
    arrowControl: false,
    unlinkPanels: false,
    firstDayOfWeek: 7,
    minTimePickerVisible: false,
    maxTimePickerVisible: false,
    shortcuts: "",
    visible: "",
    disabledDate: "",
    cellClassName: "",
    dateUserInput: { min: null, max: null },
    timeUserInput: { min: null, max: null },
    btnDisabled: computed(() => api2.computerBtnDisabled()),
    leftLabel: computed(() => api2.computerLabel("leftDate")),
    rightLabel: computed(() => api2.computerLabel("rightDate")),
    leftYear: computed(() => state.leftDate.getFullYear()),
    leftMonth: computed(() => state.leftDate.getMonth()),
    leftMonthDate: computed(() => state.leftDate.getDate()),
    rightYear: computed(() => state.rightDate.getFullYear()),
    rightMonth: computed(() => state.rightDate.getMonth()),
    rightMonthDate: computed(() => state.rightDate.getDate()),
    minVisibleDate: computed(() => api2.getMinVisibleDate()),
    maxVisibleDate: computed(() => api2.getMaxVisibleDate()),
    minVisibleTime: computed(() => api2.getMinVisibleTime()),
    maxVisibleTime: computed(() => api2.getMaxVisibleTime()),
    timeFormat: computed(() => state.format ? extractTimeFormat(state.format) : "HH:mm:ss"),
    dateFormat: computed(() => state.format ? extractDateFormat(state.format) : "yyyy-MM-dd"),
    enableMonthArrow: computed(() => api2.getEnableMonthArrow()),
    enableYearArrow: computed(() => api2.computerEnableYearArrow()),
    // tiny 新增
    confirmButtonProps: __spreadValues({
      plain: true,
      type: "default"
    }, (_a = designConfig == null ? void 0 : designConfig.state) == null ? void 0 : _a.confirmButtonProps)
  });
  return state;
};
const initWatch$3 = ({ watch, state, api: api2 }) => {
  watch(() => state.minDate, api2.watchMinDate);
  watch(() => state.maxDate, api2.watchMaxDate);
  watch(() => state.minTimePickerVisible, api2.watchMinTimePickerVisible);
  watch(() => state.maxTimePickerVisible, api2.watchMaxTimePickerVisible);
  watch(() => state.value, api2.watchValue);
  watch(() => state.defaultValue, api2.watchDefault);
  watch(() => state.showTime, api2.setTimeFormat);
  watch(() => state.visible, api2.watchPickerVisible);
};
const initApi$2 = ({ api: api2, state, t: t2, vm, nextTick, emit, constants }) => {
  Object.assign(api2, {
    t: t2,
    state,
    computerLabel: computerLabel({ state, t: t2 }),
    resetView: resetView$2({ state }),
    watchMaxDate: watchMaxDate({ state, vm }),
    handleChangeRange: handleChangeRange$2(state),
    handleMaxTimeClose: handleMaxTimeClose(state),
    handleMinTimeClose: handleMinTimeClose(state),
    isValidValue: isValidValue$3({ state }),
    leftNextYear: leftNextYear$1({ state }),
    getEnableMonthArrow: getEnableMonthArrow(state),
    leftNextMonth: leftNextMonth({ state }),
    rightPrevYear: rightPrevYear$1({ state }),
    rightPrevMonth: rightPrevMonth({ state }),
    rightNextMonth: rightNextMonth({ state }),
    leftPrevYear: leftPrevYear$2({ state }),
    handleMaxTimePick: handleMaxTimePick({ state }),
    handleMinTimePick: handleMinTimePick({ state }),
    getMaxVisibleTime: getMaxVisibleTime({ state, t: t2 }),
    getMinVisibleTime: getMinVisibleTime({ state, t: t2 }),
    getMaxVisibleDate: getMaxVisibleDate({ state, t: t2 }),
    getMinVisibleDate: getMinVisibleDate({ state, t: t2 }),
    rightNextYear: rightNextYear$2({ state }),
    leftPrevMonth: leftPrevMonth({ state }),
    handleDateChange: handleDateChange({ state, t: t2 }),
    handleTimeChange: handleTimeChange({ state, t: t2, vm }),
    watchMinDate: watchMinDate({ state, t: t2, vm }),
    handleTimeInput: handleTimeInput({ state, t: t2 }),
    watchMaxTimePickerVisible: watchMaxTimePickerVisible({ nextTick, state, vm }),
    watchMinTimePickerVisible: watchMinTimePickerVisible({ nextTick, state, vm }),
    handleDateInput: handleDateInput({ state, t: t2 }),
    doPick: doPick$2(emit),
    watchValue: watchValue$3({ state }),
    watchDefault: watchDefault({ state }),
    handleClear: handleClear$3({ emit, state }),
    setTimeFormat: setTimeFormat({ nextTick, vm, state }),
    handleConfirm: handleConfirm$2({ api: api2, emit, state }),
    handleRangePick: handleRangePick$2({ api: api2, state, t: t2 }),
    handleShortcutClick: handleShortcutClick$2(state, api2),
    computerBtnDisabled: computerBtnDisabled({ state, api: api2 }),
    computerEnableYearArrow: computerEnableYearArrow(state),
    watchPickerVisible: watchPickerVisible({ state, constants })
  });
};
const renderless$c = (props2, { computed, reactive, watch, nextTick }, { t: t2, emit: $emit, vm, constants, designConfig }) => {
  const api2 = {};
  const emit = props2.emitter ? props2.emitter.emit : $emit;
  const state = initState$6({ reactive, computed, api: api2, constants, designConfig });
  initApi$2({ api: api2, state, t: t2, vm, nextTick, emit, constants });
  initWatch$3({ watch, state, api: api2 });
  return api2;
};
function _createForOfIteratorHelperLoose$e(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$e(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$e(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$e(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$e(o, minLen);
}
function _arrayLikeToArray$e(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$e = function _export_sfc211(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$e(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$e = defineComponent({
  directives: directive({
    Clickoutside: clickoutside_default
  }),
  components: {
    TimePicker: Time,
    DateTable,
    TinyInput: Input,
    TinyButton: Button,
    IconDoubleRight: index$j(),
    IconDoubleLeft: index$k(),
    IconChevronLeft: index$l(),
    IconChevronRight: index$m()
  },
  props: [].concat(props, ["emitter", "step", "showWeekNumber", "formatWeeks", "timeEditable"]),
  emits: ["dodestroy", "pick"],
  setup: function setup$111(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$c,
      api: api$c
    });
  }
});
var _hoisted_1$d = {
  class: "tiny-picker-panel__body-wrapper"
};
var _hoisted_2$b = {
  key: 0,
  ref: "shortcut",
  class: "tiny-picker-panel__sidebar"
};
var _hoisted_3$a = ["onClick", "title"];
var _hoisted_4$8 = {
  class: "tiny-picker-panel__body"
};
var _hoisted_5$7 = {
  key: 0,
  class: "tiny-date-range-picker__time-header"
};
var _hoisted_6$7 = {
  class: "tiny-date-range-picker__editors-wrap"
};
var _hoisted_7$6 = {
  class: "tiny-date-range-picker__time-picker-wrap"
};
var _hoisted_8$5 = {
  class: "tiny-date-range-picker__time-picker-wrap"
};
var _hoisted_9$4 = /* @__PURE__ */ createBaseVNode(
  "span",
  {
    class: "tiny-icon-arrow-right"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_10$3 = {
  class: "tiny-date-range-picker__editors-wrap is-right"
};
var _hoisted_11$2 = {
  class: "tiny-date-range-picker__time-picker-wrap"
};
var _hoisted_12$2 = {
  class: "tiny-date-range-picker__time-picker-wrap"
};
var _hoisted_13$2 = {
  class: "tiny-picker-panel__content tiny-date-range-picker__content is-left"
};
var _hoisted_14$2 = {
  class: "tiny-date-range-picker__header"
};
var _hoisted_15$2 = ["disabled"];
var _hoisted_16$2 = ["disabled"];
var _hoisted_17$1 = {
  class: "tiny-picker-panel__content tiny-date-range-picker__content is-right"
};
var _hoisted_18$1 = {
  class: "tiny-date-range-picker__header"
};
var _hoisted_19$1 = ["disabled"];
var _hoisted_20$1 = ["disabled"];
var _hoisted_21$1 = {
  key: 0,
  class: "tiny-picker-panel__footer"
};
function _sfc_render$e(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_input = resolveComponent("tiny-input");
  var _component_time_picker = resolveComponent("time-picker");
  var _component_icon_double_left = resolveComponent("icon-double-left");
  var _component_icon_chevron_left = resolveComponent("icon-chevron-left");
  var _component_icon_double_right = resolveComponent("icon-double-right");
  var _component_icon_chevron_right = resolveComponent("icon-chevron-right");
  var _component_date_table = resolveComponent("date-table");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    onAfterLeave: _cache[19] || (_cache[19] = function($event) {
      return _ctx.$emit("dodestroy");
    }),
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["tiny-picker-panel tiny-date-range-picker tiny-popper", [{
            "has-sidebar": _ctx.slots.sidebar || _ctx.state.shortcuts,
            "has-time": _ctx.state.showTime
          }, _ctx.state.popperClass]]),
          ref: "refDateRange"
        },
        [createBaseVNode("div", _hoisted_1$d, [renderSlot(_ctx.$slots, "sidebar", {
          class: "tiny-picker-panel__sidebar"
        }), _ctx.state.shortcuts ? (openBlock(), createElementBlock(
          "div",
          _hoisted_2$b,
          [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.shortcuts, function(shortcut, key) {
              return openBlock(), createElementBlock("button", {
                type: "button",
                class: normalizeClass(["tiny-picker-panel__shortcut", {
                  "tiny-picker-panel__shortcut-selected": _ctx.state.singleSelect && shortcut.type === _ctx.state.shortcutType && shortcut.text === _ctx.state.shortcutText
                }]),
                key,
                onClick: function onClick($event) {
                  return _ctx.handleShortcutClick(shortcut);
                },
                title: shortcut.text
              }, toDisplayString(shortcut.text), 11, _hoisted_3$a);
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          512
          /* NEED_PATCH */
        )) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_4$8, [_ctx.state.showTime ? (openBlock(), createElementBlock("div", _hoisted_5$7, [createBaseVNode("span", _hoisted_6$7, [createBaseVNode("span", _hoisted_7$6, [createVNode(_component_tiny_input, {
          size: "small",
          disabled: _ctx.state.rangeState.selecting,
          ref: "minInput",
          placeholder: _ctx.t("ui.datepicker.startDate"),
          class: "tiny-date-range-picker__editor",
          modelValue: _ctx.state.minVisibleDate,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = function(val) {
            return _ctx.handleDateInput(val, "min");
          }),
          onChange: _cache[1] || (_cache[1] = function(val) {
            return _ctx.handleDateChange(val, "min");
          })
        }, null, 8, ["disabled", "placeholder", "modelValue"])]), withDirectives((openBlock(), createElementBlock("span", _hoisted_8$5, [createVNode(_component_tiny_input, {
          size: "small",
          class: "tiny-date-range-picker__editor",
          disabled: _ctx.state.rangeState.selecting,
          placeholder: _ctx.t("ui.datepicker.startTime"),
          modelValue: _ctx.state.minVisibleTime,
          onFocus: _cache[2] || (_cache[2] = function($event) {
            return _ctx.state.minTimePickerVisible = true;
          }),
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function(val) {
            return _ctx.handleTimeInput(val, "min");
          }),
          onChange: _cache[4] || (_cache[4] = function(val) {
            return _ctx.handleTimeChange(val, "min");
          }),
          readonly: !_ctx.timeEditable
        }, null, 8, ["disabled", "placeholder", "modelValue", "readonly"]), createVNode(_component_time_picker, {
          ref: "minTimePicker",
          step: _ctx.step,
          "time-arrow-control": _ctx.state.arrowControl,
          show: _ctx.state.minTimePickerVisible,
          value: _ctx.state.minDate,
          onPick: _ctx.handleMinTimePick
        }, null, 8, ["step", "time-arrow-control", "show", "value", "onPick"])])), [[_directive_clickoutside, _ctx.handleMinTimeClose]])]), _hoisted_9$4, createBaseVNode("span", _hoisted_10$3, [createBaseVNode("span", _hoisted_11$2, [createVNode(_component_tiny_input, {
          size: "small",
          class: "tiny-date-range-picker__editor",
          disabled: _ctx.state.rangeState.selecting,
          placeholder: _ctx.t("ui.datepicker.endDate"),
          modelValue: _ctx.state.maxVisibleDate,
          readonly: !_ctx.state.minDate,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = function(val) {
            return _ctx.handleDateInput(val, "max");
          }),
          onChange: _cache[6] || (_cache[6] = function(val) {
            return _ctx.handleDateChange(val, "max");
          })
        }, null, 8, ["disabled", "placeholder", "modelValue", "readonly"])]), withDirectives((openBlock(), createElementBlock("span", _hoisted_12$2, [createVNode(_component_tiny_input, {
          size: "small",
          class: "tiny-date-range-picker__editor",
          disabled: _ctx.state.rangeState.selecting,
          placeholder: _ctx.t("ui.datepicker.endTime"),
          modelValue: _ctx.state.maxVisibleTime,
          readonly: !_ctx.state.minDate || !_ctx.timeEditable,
          onFocus: _cache[7] || (_cache[7] = function($event) {
            return _ctx.state.minDate && (_ctx.state.maxTimePickerVisible = true);
          }),
          "onUpdate:modelValue": _cache[8] || (_cache[8] = function(val) {
            return _ctx.handleTimeInput(val, "max");
          }),
          onChange: _cache[9] || (_cache[9] = function(val) {
            return _ctx.handleTimeChange(val, "max");
          })
        }, null, 8, ["disabled", "placeholder", "modelValue", "readonly"]), createVNode(_component_time_picker, {
          ref: "maxTimePicker",
          step: _ctx.step,
          "time-arrow-control": _ctx.state.arrowControl,
          show: _ctx.state.maxTimePickerVisible,
          value: _ctx.state.maxDate,
          onPick: _ctx.handleMaxTimePick
        }, null, 8, ["step", "time-arrow-control", "show", "value", "onPick"])])), [[_directive_clickoutside, _ctx.handleMaxTimeClose]])])])) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_13$2, [createBaseVNode("div", _hoisted_14$2, [createBaseVNode("button", {
          type: "button",
          onClick: _cache[10] || (_cache[10] = function() {
            return _ctx.leftPrevYear && _ctx.leftPrevYear.apply(_ctx, arguments);
          }),
          class: "tiny-picker-panel__icon-btn tiny-icon-d-arrow-left"
        }, [createVNode(_component_icon_double_left)]), createBaseVNode("button", {
          type: "button",
          onClick: _cache[11] || (_cache[11] = function() {
            return _ctx.leftPrevMonth && _ctx.leftPrevMonth.apply(_ctx, arguments);
          }),
          class: "tiny-picker-panel__icon-btn tiny-icon-arrow-left"
        }, [createVNode(_component_icon_chevron_left)]), _ctx.state.unlinkPanels ? (openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          onClick: _cache[12] || (_cache[12] = function() {
            return _ctx.leftNextYear && _ctx.leftNextYear.apply(_ctx, arguments);
          }),
          disabled: !_ctx.state.enableYearArrow,
          class: normalizeClass([{
            "is-disabled": !_ctx.state.enableYearArrow
          }, "tiny-picker-panel__icon-btn tiny-icon-d-arrow-right"])
        }, [createVNode(_component_icon_double_right)], 10, _hoisted_15$2)) : createCommentVNode("v-if", true), _ctx.state.unlinkPanels ? (openBlock(), createElementBlock("button", {
          key: 1,
          type: "button",
          onClick: _cache[13] || (_cache[13] = function() {
            return _ctx.leftNextMonth && _ctx.leftNextMonth.apply(_ctx, arguments);
          }),
          disabled: !_ctx.state.enableMonthArrow,
          class: normalizeClass([{
            "is-disabled": !_ctx.state.enableMonthArrow
          }, "tiny-picker-panel__icon-btn tiny-icon-arrow-right"])
        }, [createVNode(_component_icon_chevron_right)], 10, _hoisted_16$2)) : createCommentVNode("v-if", true), createBaseVNode(
          "div",
          null,
          toDisplayString(_ctx.state.leftLabel),
          1
          /* TEXT */
        )]), createVNode(_component_date_table, {
          "selection-mode": "range",
          date: _ctx.state.leftDate,
          "default-value": _ctx.state.defaultValue,
          "min-date": _ctx.state.minDate,
          "max-date": _ctx.state.maxDate,
          "range-state": _ctx.state.rangeState,
          "disabled-date": _ctx.state.disabledDate,
          "cell-class-name": _ctx.state.cellClassName,
          onChangerange: _ctx.handleChangeRange,
          "first-day-of-week": _ctx.state.firstDayOfWeek,
          "show-week-number": _ctx.showWeekNumber,
          "format-weeks": _ctx.formatWeeks,
          onPick: _ctx.handleRangePick
        }, null, 8, ["date", "default-value", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "first-day-of-week", "show-week-number", "format-weeks", "onPick"])]), createBaseVNode("div", _hoisted_17$1, [createBaseVNode("div", _hoisted_18$1, [_ctx.state.unlinkPanels ? (openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          onClick: _cache[14] || (_cache[14] = function() {
            return _ctx.rightPrevYear && _ctx.rightPrevYear.apply(_ctx, arguments);
          }),
          disabled: !_ctx.state.enableYearArrow,
          class: normalizeClass([{
            "is-disabled": !_ctx.state.enableYearArrow
          }, "tiny-picker-panel__icon-btn tiny-icon-d-arrow-left"])
        }, [createVNode(_component_icon_double_left)], 10, _hoisted_19$1)) : createCommentVNode("v-if", true), _ctx.state.unlinkPanels ? (openBlock(), createElementBlock("button", {
          key: 1,
          type: "button",
          onClick: _cache[15] || (_cache[15] = function() {
            return _ctx.rightPrevMonth && _ctx.rightPrevMonth.apply(_ctx, arguments);
          }),
          disabled: !_ctx.state.enableMonthArrow,
          class: normalizeClass([{
            "is-disabled": !_ctx.state.enableMonthArrow
          }, "tiny-picker-panel__icon-btn tiny-icon-arrow-left"])
        }, [createVNode(_component_icon_chevron_left)], 10, _hoisted_20$1)) : createCommentVNode("v-if", true), createBaseVNode("button", {
          type: "button",
          onClick: _cache[16] || (_cache[16] = function() {
            return _ctx.rightNextYear && _ctx.rightNextYear.apply(_ctx, arguments);
          }),
          class: "tiny-picker-panel__icon-btn tiny-icon-d-arrow-right"
        }, [createVNode(_component_icon_double_right)]), createBaseVNode("button", {
          type: "button",
          onClick: _cache[17] || (_cache[17] = function() {
            return _ctx.rightNextMonth && _ctx.rightNextMonth.apply(_ctx, arguments);
          }),
          class: "tiny-picker-panel__icon-btn tiny-icon-arrow-right"
        }, [createVNode(_component_icon_chevron_right)]), createBaseVNode(
          "div",
          null,
          toDisplayString(_ctx.state.rightLabel),
          1
          /* TEXT */
        )]), createVNode(_component_date_table, {
          "selection-mode": "range",
          date: _ctx.state.rightDate,
          "default-value": _ctx.state.defaultValue,
          "min-date": _ctx.state.minDate,
          "max-date": _ctx.state.maxDate,
          "range-state": _ctx.state.rangeState,
          "disabled-date": _ctx.state.disabledDate,
          "cell-class-name": _ctx.state.cellClassName,
          onChangerange: _ctx.handleChangeRange,
          "first-day-of-week": _ctx.state.firstDayOfWeek,
          "show-week-number": _ctx.showWeekNumber,
          "format-weeks": _ctx.formatWeeks,
          onPick: _ctx.handleRangePick
        }, null, 8, ["date", "default-value", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "first-day-of-week", "show-week-number", "format-weeks", "onPick"])])])]), _ctx.state.showTime ? (openBlock(), createElementBlock("div", _hoisted_21$1, [createVNode(_component_tiny_button, {
          size: "mini",
          type: "text",
          class: "tiny-picker-panel__link-btn",
          onClick: _ctx.handleClear
        }, {
          default: withCtx(function() {
            return [createTextVNode(
              toDisplayString(_ctx.t("ui.datepicker.clear")),
              1
              /* TEXT */
            )];
          }),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]), createVNode(_component_tiny_button, {
          plain: _ctx.state.confirmButtonProps.plain,
          size: "mini",
          type: _ctx.state.confirmButtonProps.type,
          class: "tiny-picker-panel__link-btn",
          disabled: _ctx.state.btnDisabled,
          onClick: _cache[18] || (_cache[18] = function($event) {
            return _ctx.handleConfirm(false);
          })
        }, {
          default: withCtx(function() {
            return [createTextVNode(
              toDisplayString(_ctx.t("ui.datepicker.confirm")),
              1
              /* TEXT */
            )];
          }),
          _: 1
          /* STABLE */
        }, 8, ["plain", "type", "disabled"])])) : createCommentVNode("v-if", true)],
        2
        /* CLASS */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 3
    /* FORWARDED */
  });
}
var pc$2 = /* @__PURE__ */ _export_sfc$e(_sfc_main$e, [["render", _sfc_render$e]]);
function _createForOfIteratorHelperLoose$d(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$d(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$d(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$d(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$d(o, minLen);
}
function _arrayLikeToArray$d(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$d = function _export_sfc212(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$d(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var classes$2 = {
  "picker-panel": "text-color-text-primary text-xs shadow-md bg-color-bg-1 rounded leading-4 my-0.5 mx-0",
  "date-range-picker": "w-144",
  "sidebar": "absolute top-0 bottom-0 w-28 border-r border-r-color-bg-3 box-border pt-5 bg-color-bg-1 overflow-auto",
  "shortcut": "block my-0 mx-auto w-24 rounded border-0 bg-transparent leading-8 text-xs text-color-text-primary pl-4 text-left outline-0 cursor-pointer hover:bg-color-bg-2",
  "shortcut-selected": "text-color-brand bg-color-brand-hover-subtle",
  "body": "min-w-[513px]",
  "time-header": "relative text-xs h-10 leading-10 table w-full box-border border-b border-b-color-bg-3",
  "content": "float-left w-1/2 box-border pt-4 pr-4 pb-1.5 pl-4",
  "header": "relative text-center p-4 h-12",
  "icon-btn": "text-sm leading-4 fill-color-text-primary border-0 cursor-pointer outline-0 hover:fill-color-brand",
  "is-disabled": "text-color-text-disabled hover:cursor-not-allowed",
  "arrow-left": "float-left",
  "arrow-right": "float-right",
  "editors-wrap": "box-border table-cell",
  "is-left": "border-r border-r-color-bg-3 relative -left-px",
  "is-right": "text-right",
  "time-picker-wrap": "relative table-cell px-1",
  "time-picker-wrap-left": "before:content-[''] before:h-6 before:absolute before:right-0 before:top-2 before:border-r before:border-r-color-bg-3",
  "editor": "relative items-center sm:border-0 text-center",
  "footer": "border-t border-t-color-bg-3 py-3 px-4 bg-color-bg-1 overflow-hidden rounded-b"
};
var _sfc_main$d = defineComponent({
  directives: directive({
    Clickoutside: clickoutside_default
  }),
  components: {
    TimePicker: Time,
    DateTable,
    TinyInput: Input,
    TinyButton: Button,
    IconDoubleRight: index$j(),
    IconDoubleLeft: index$k(),
    IconChevronLeft: index$l(),
    IconChevronRight: index$m()
  },
  props: [].concat(props, ["emitter", "step", "showWeekNumber", "formatWeeks"]),
  emits: ["dodestroy", "pick"],
  setup: function setup$112(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$c,
      api: api$c,
      classes: classes$2
    });
  }
});
var _hoisted_1$c = {
  "data-tag": "tiny-picker-panel__body-wrapper",
  class: "relative"
};
var _hoisted_2$a = ["onClick"];
var _hoisted_3$9 = {
  "data-tag": "tiny-picker-panel__body"
};
var _hoisted_4$7 = /* @__PURE__ */ createBaseVNode(
  "span",
  {
    "data-tag": "tiny-icon-arrow-right"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_5$6 = ["disabled"];
var _hoisted_6$6 = ["disabled"];
var _hoisted_7$5 = {
  class: "mx-12"
};
var _hoisted_8$4 = ["disabled"];
var _hoisted_9$3 = ["disabled"];
function _sfc_render$d(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_input = resolveComponent("tiny-input");
  var _component_time_picker = resolveComponent("time-picker");
  var _component_icon_double_left = resolveComponent("icon-double-left");
  var _component_icon_chevron_left = resolveComponent("icon-chevron-left");
  var _component_icon_double_right = resolveComponent("icon-double-right");
  var _component_icon_chevron_right = resolveComponent("icon-chevron-right");
  var _component_date_table = resolveComponent("date-table");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    onAfterLeave: _cache[19] || (_cache[19] = function($event) {
      return _ctx.$emit("dodestroy");
    }),
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          "data-tag": "tiny-picker-panel tiny-date-range-picker tiny-popper",
          class: normalizeClass(_ctx.m(_ctx.gcls(["picker-panel", "date-range-picker"]), _ctx.state.popperClass)),
          ref: "refDateRange"
        },
        [createBaseVNode("div", _hoisted_1$c, [renderSlot(_ctx.$slots, "sidebar", {
          dataTag: "tiny-picker-panel__sidebar",
          class: normalizeClass(_ctx.gcls("sidebar"))
        }), _ctx.state.shortcuts ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            ref: "shortcut",
            "data-tag": "tiny-picker-panel__sidebar",
            class: normalizeClass(_ctx.gcls("sidebar"))
          },
          [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.state.shortcuts, function(shortcut, key) {
              return openBlock(), createElementBlock("button", {
                type: "button",
                "data-tag": "tiny-picker-panel__shortcut",
                key,
                class: normalizeClass(_ctx.m(_ctx.gcls("shortcut"), _ctx.state.singleSelect && shortcut.type === _ctx.state.shortcutType && shortcut.text === _ctx.state.shortcutText && _ctx.gcls("shortcut-selected"))),
                onClick: function onClick($event) {
                  return _ctx.handleShortcutClick(shortcut);
                }
              }, toDisplayString(shortcut.text), 11, _hoisted_2$a);
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_3$9, [_ctx.state.showTime ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            "data-tag": "tiny-date-range-picker__time-header",
            class: normalizeClass(_ctx.gcls("time-header"))
          },
          [createBaseVNode(
            "span",
            {
              "data-tag": "tiny-date-range-picker__editors-wrap",
              class: normalizeClass(_ctx.gcls(["editors-wrap", "is-left"]))
            },
            [createBaseVNode(
              "span",
              {
                "data-tag": "tiny-date-range-picker__time-picker-wrap",
                class: normalizeClass(_ctx.gcls(["time-picker-wrap", "time-picker-wrap-left"]))
              },
              [createVNode(_component_tiny_input, {
                size: "small",
                disabled: _ctx.state.rangeState.selecting,
                ref: "minInput",
                placeholder: _ctx.t("ui.datepicker.startDate"),
                "data-tag": "tiny-date-range-picker__editor",
                "custom-class": _ctx.gcls("editor"),
                modelValue: _ctx.state.minVisibleDate,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = function(val) {
                  return _ctx.handleDateInput(val, "min");
                }),
                onChange: _cache[1] || (_cache[1] = function(val) {
                  return _ctx.handleDateChange(val, "min");
                })
              }, null, 8, ["disabled", "placeholder", "custom-class", "modelValue"])],
              2
              /* CLASS */
            ), withDirectives((openBlock(), createElementBlock(
              "span",
              {
                "data-tag": "tiny-date-range-picker__time-picker-wrap",
                class: normalizeClass(_ctx.gcls("time-picker-wrap"))
              },
              [createVNode(_component_tiny_input, {
                size: "small",
                "data-tag": "tiny-date-range-picker__editor",
                "custom-class": _ctx.gcls("editor"),
                disabled: _ctx.state.rangeState.selecting,
                placeholder: _ctx.t("ui.datepicker.startTime"),
                modelValue: _ctx.state.minVisibleTime,
                onFocus: _cache[2] || (_cache[2] = function($event) {
                  return _ctx.state.minTimePickerVisible = true;
                }),
                "onUpdate:modelValue": _cache[3] || (_cache[3] = function(val) {
                  return _ctx.handleTimeInput(val, "min");
                }),
                onChange: _cache[4] || (_cache[4] = function(val) {
                  return _ctx.handleTimeChange(val, "min");
                })
              }, null, 8, ["custom-class", "disabled", "placeholder", "modelValue"]), createVNode(_component_time_picker, {
                ref: "minTimePicker",
                step: _ctx.step,
                "time-arrow-control": _ctx.state.arrowControl,
                show: _ctx.state.minTimePickerVisible,
                value: _ctx.state.minDate,
                onPick: _ctx.handleMinTimePick
              }, null, 8, ["step", "time-arrow-control", "show", "value", "onPick"])],
              2
              /* CLASS */
            )), [[_directive_clickoutside, _ctx.handleMinTimeClose]])],
            2
            /* CLASS */
          ), _hoisted_4$7, createBaseVNode(
            "span",
            {
              "data-tag": "tiny-date-range-picker__editors-wrap is-right",
              class: normalizeClass(_ctx.gcls(["editors-wrap", "is-right"]))
            },
            [createBaseVNode(
              "span",
              {
                "data-tag": "tiny-date-range-picker__time-picker-wrap",
                class: normalizeClass(_ctx.gcls(["time-picker-wrap", "time-picker-wrap-left"]))
              },
              [createVNode(_component_tiny_input, {
                size: "small",
                "data-tag": "tiny-date-range-picker__editor",
                "custom-class": _ctx.gcls("editor"),
                disabled: _ctx.state.rangeState.selecting,
                placeholder: _ctx.t("ui.datepicker.endDate"),
                modelValue: _ctx.state.maxVisibleDate,
                readonly: !_ctx.state.minDate,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = function(val) {
                  return _ctx.handleDateInput(val, "max");
                }),
                onChange: _cache[6] || (_cache[6] = function(val) {
                  return _ctx.handleDateChange(val, "max");
                })
              }, null, 8, ["custom-class", "disabled", "placeholder", "modelValue", "readonly"])],
              2
              /* CLASS */
            ), withDirectives((openBlock(), createElementBlock(
              "span",
              {
                "data-tag": "tiny-date-range-picker__time-picker-wrap",
                class: normalizeClass(_ctx.gcls("time-picker-wrap"))
              },
              [createVNode(_component_tiny_input, {
                size: "small",
                "data-tag": "tiny-date-range-picker__editor",
                "custom-class": _ctx.gcls("editor"),
                disabled: _ctx.state.rangeState.selecting,
                placeholder: _ctx.t("ui.datepicker.endTime"),
                modelValue: _ctx.state.maxVisibleTime,
                readonly: !_ctx.state.minDate,
                onFocus: _cache[7] || (_cache[7] = function($event) {
                  return _ctx.state.minDate && (_ctx.state.maxTimePickerVisible = true);
                }),
                "onUpdate:modelValue": _cache[8] || (_cache[8] = function(val) {
                  return _ctx.handleTimeInput(val, "max");
                }),
                onChange: _cache[9] || (_cache[9] = function(val) {
                  return _ctx.handleTimeChange(val, "max");
                })
              }, null, 8, ["custom-class", "disabled", "placeholder", "modelValue", "readonly"]), createVNode(_component_time_picker, {
                ref: "maxTimePicker",
                step: _ctx.step,
                "time-arrow-control": _ctx.state.arrowControl,
                show: _ctx.state.maxTimePickerVisible,
                value: _ctx.state.maxDate,
                onPick: _ctx.handleMaxTimePick
              }, null, 8, ["step", "time-arrow-control", "show", "value", "onPick"])],
              2
              /* CLASS */
            )), [[_directive_clickoutside, _ctx.handleMaxTimeClose]])],
            2
            /* CLASS */
          )],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true), createBaseVNode(
          "div",
          {
            "data-tag": "tiny-picker-panel__content tiny-date-range-picker__content is-left",
            class: normalizeClass(_ctx.gcls(["content", "is-left"]))
          },
          [createBaseVNode(
            "div",
            {
              "data-tag": "tiny-date-range-picker__header",
              class: normalizeClass(_ctx.gcls("header"))
            },
            [createBaseVNode(
              "button",
              {
                type: "button",
                onClick: _cache[10] || (_cache[10] = function() {
                  return _ctx.leftPrevYear && _ctx.leftPrevYear.apply(_ctx, arguments);
                }),
                "data-tag": "tiny-picker-panel__icon-btn tiny-icon-d-arrow-left",
                class: normalizeClass(_ctx.gcls(["icon-btn", "arrow-left"]))
              },
              [createVNode(_component_icon_double_left)],
              2
              /* CLASS */
            ), createBaseVNode(
              "button",
              {
                type: "button",
                onClick: _cache[11] || (_cache[11] = function() {
                  return _ctx.leftPrevMonth && _ctx.leftPrevMonth.apply(_ctx, arguments);
                }),
                "data-tag": "tiny-picker-panel__icon-btn tiny-icon-arrow-left",
                class: normalizeClass(_ctx.gcls(["icon-btn", "arrow-left"]))
              },
              [createVNode(_component_icon_chevron_left)],
              2
              /* CLASS */
            ), _ctx.state.unlinkPanels ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              onClick: _cache[12] || (_cache[12] = function() {
                return _ctx.leftNextYear && _ctx.leftNextYear.apply(_ctx, arguments);
              }),
              disabled: !_ctx.state.enableYearArrow,
              class: normalizeClass({
                "is-disabled": !_ctx.state.enableYearArrow
              }),
              "data-tag": "tiny-picker-panel__icon-btn tiny-icon-d-arrow-right"
            }, [createVNode(_component_icon_double_right)], 10, _hoisted_5$6)) : createCommentVNode("v-if", true), _ctx.state.unlinkPanels ? (openBlock(), createElementBlock("button", {
              key: 1,
              type: "button",
              onClick: _cache[13] || (_cache[13] = function() {
                return _ctx.leftNextMonth && _ctx.leftNextMonth.apply(_ctx, arguments);
              }),
              disabled: !_ctx.state.enableMonthArrow,
              class: normalizeClass({
                "is-disabled": !_ctx.state.enableMonthArrow
              }),
              "data-tag": "tiny-picker-panel__icon-btn tiny-icon-arrow-right"
            }, [createVNode(_component_icon_chevron_right)], 10, _hoisted_6$6)) : createCommentVNode("v-if", true), createBaseVNode(
              "div",
              _hoisted_7$5,
              toDisplayString(_ctx.state.leftLabel),
              1
              /* TEXT */
            )],
            2
            /* CLASS */
          ), createVNode(_component_date_table, {
            "selection-mode": "range",
            date: _ctx.state.leftDate,
            "default-value": _ctx.state.defaultValue,
            "min-date": _ctx.state.minDate,
            "max-date": _ctx.state.maxDate,
            "range-state": _ctx.state.rangeState,
            "disabled-date": _ctx.state.disabledDate,
            "cell-class-name": _ctx.state.cellClassName,
            onChangerange: _ctx.handleChangeRange,
            "first-day-of-week": _ctx.state.firstDayOfWeek,
            "show-week-number": _ctx.showWeekNumber,
            "format-weeks": _ctx.formatWeeks,
            onPick: _ctx.handleRangePick
          }, null, 8, ["date", "default-value", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "first-day-of-week", "show-week-number", "format-weeks", "onPick"])],
          2
          /* CLASS */
        ), createBaseVNode(
          "div",
          {
            "data-tag": "tiny-picker-panel__content tiny-date-range-picker__content is-right",
            class: normalizeClass(_ctx.gcls(["content", "is-right"]))
          },
          [createBaseVNode(
            "div",
            {
              "data-tag": "tiny-date-range-picker__header",
              class: normalizeClass(_ctx.gcls("header"))
            },
            [_ctx.state.unlinkPanels ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              onClick: _cache[14] || (_cache[14] = function() {
                return _ctx.rightPrevYear && _ctx.rightPrevYear.apply(_ctx, arguments);
              }),
              disabled: !_ctx.state.enableYearArrow,
              class: normalizeClass(_ctx.m(_ctx.gcls(["icon-btn", "arrow-left"]), !_ctx.state.enableYearArrow && _ctx.gcls("is-disabled"))),
              "data-tag": "tiny-picker-panel__icon-btn tiny-icon-d-arrow-left"
            }, [createVNode(_component_icon_double_left)], 10, _hoisted_8$4)) : createCommentVNode("v-if", true), _ctx.state.unlinkPanels ? (openBlock(), createElementBlock("button", {
              key: 1,
              "data-tag": "tiny-picker-panel__icon-btn tiny-icon-arrow-left",
              type: "button",
              disabled: !_ctx.state.enableMonthArrow,
              class: normalizeClass(_ctx.m(_ctx.gcls(["icon-btn", "arrow-left"]), !_ctx.state.enableMonthArrow && _ctx.gcls("is-disabled"))),
              onClick: _cache[15] || (_cache[15] = function() {
                return _ctx.rightPrevMonth && _ctx.rightPrevMonth.apply(_ctx, arguments);
              })
            }, [createVNode(_component_icon_chevron_left)], 10, _hoisted_9$3)) : createCommentVNode("v-if", true), createBaseVNode(
              "button",
              {
                type: "button",
                onClick: _cache[16] || (_cache[16] = function() {
                  return _ctx.rightNextYear && _ctx.rightNextYear.apply(_ctx, arguments);
                }),
                "data-tag": "tiny-picker-panel__icon-btn tiny-icon-d-arrow-right",
                class: normalizeClass(_ctx.gcls(["icon-btn", "arrow-right"]))
              },
              [createVNode(_component_icon_double_right)],
              2
              /* CLASS */
            ), createBaseVNode(
              "button",
              {
                type: "button",
                onClick: _cache[17] || (_cache[17] = function() {
                  return _ctx.rightNextMonth && _ctx.rightNextMonth.apply(_ctx, arguments);
                }),
                "data-tag": "tiny-picker-panel__icon-btn tiny-icon-arrow-right",
                class: normalizeClass(_ctx.gcls(["icon-btn", "arrow-right"]))
              },
              [createVNode(_component_icon_chevron_right)],
              2
              /* CLASS */
            ), createBaseVNode(
              "div",
              null,
              toDisplayString(_ctx.state.rightLabel),
              1
              /* TEXT */
            )],
            2
            /* CLASS */
          ), createVNode(_component_date_table, {
            "selection-mode": "range",
            date: _ctx.state.rightDate,
            "default-value": _ctx.state.defaultValue,
            "min-date": _ctx.state.minDate,
            "max-date": _ctx.state.maxDate,
            "range-state": _ctx.state.rangeState,
            "disabled-date": _ctx.state.disabledDate,
            "cell-class-name": _ctx.state.cellClassName,
            onChangerange: _ctx.handleChangeRange,
            "first-day-of-week": _ctx.state.firstDayOfWeek,
            "show-week-number": _ctx.showWeekNumber,
            "format-weeks": _ctx.formatWeeks,
            onPick: _ctx.handleRangePick
          }, null, 8, ["date", "default-value", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "first-day-of-week", "show-week-number", "format-weeks", "onPick"])],
          2
          /* CLASS */
        )])]), _ctx.state.showTime ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            "data-tag": "tiny-picker-panel__footer",
            class: normalizeClass(_ctx.gcls("footer"))
          },
          [createVNode(_component_tiny_button, {
            size: "mini",
            type: "text",
            "data-tag": "tiny-picker-panel__link-btn",
            onClick: _ctx.handleClear,
            "custom-class": "text-left pl-0"
          }, {
            default: withCtx(function() {
              return [createTextVNode(
                toDisplayString(_ctx.t("ui.datepicker.clear")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]), createVNode(_component_tiny_button, {
            type: "primary",
            size: "mini",
            "data-tag": "tiny-picker-panel__link-btn",
            "custom-class": "float-right",
            disabled: _ctx.state.btnDisabled,
            onClick: _cache[18] || (_cache[18] = function($event) {
              return _ctx.handleConfirm(false);
            })
          }, {
            default: withCtx(function() {
              return [createTextVNode(
                toDisplayString(_ctx.t("ui.datepicker.confirm")),
                1
                /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true)],
        2
        /* CLASS */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 3
    /* FORWARDED */
  });
}
var mobileFirst$3 = /* @__PURE__ */ _export_sfc$d(_sfc_main$d, [["render", _sfc_render$d]]);
const index$7 = "";
function _extends$a() {
  _extends$a = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$a.apply(this, arguments);
}
var template$5 = function template25(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$2;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$3;
  }
  return pc$2;
};
var $constants$4 = {
  startDate: /* @__PURE__ */ new Date("1970-01-01"),
  endDate: /* @__PURE__ */ new Date("2099-12-31")
};
var DateRange = defineComponent({
  name: $prefix + "DateRange",
  componentName: "DateRange",
  props: _extends$a({}, $props$1, {
    _constants: {
      type: Object,
      default: function _default12() {
        return $constants$4;
      }
    },
    emitter: Object,
    step: {
      type: Object,
      default: function _default23() {
        return {
          hour: 1,
          minute: 1,
          second: 1
        };
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    formatWeeks: Function,
    timeEditable: {
      type: Boolean,
      default: true
    }
  }),
  setup: function setup6(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$5
    });
  }
});
var version$c = "3.16.0";
DateRange.install = function(Vue) {
  Vue.component(DateRange.name, DateRange);
};
DateRange.version = version$c;
const calcDefaultValue$1 = (defaultValue) => {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    return [new Date(defaultValue), nextMonth(new Date(defaultValue))];
  }
  return [/* @__PURE__ */ new Date(), nextMonth(/* @__PURE__ */ new Date())];
};
const watchValue$2 = ({ state }) => (val) => {
  if (!val) {
    state.maxDate = null;
    state.minDate = null;
  } else if (Array.isArray(val)) {
    if (isDate$1(val[0])) {
      state.minDate = new Date(val[0]);
    } else {
      state.minDate = null;
    }
    if (isDate$1(val[1])) {
      state.maxDate = new Date(val[1]);
    } else {
      state.maxDate = null;
    }
    if (state.minDate) {
      state.leftDate = state.minDate;
      if (state.maxDate && state.unlinkPanels) {
        const maxDateYear = state.maxDate.getFullYear();
        const minDateYear = state.minDate.getFullYear();
        state.rightDate = maxDateYear === minDateYear ? nextYear(state.maxDate) : state.maxDate;
      } else {
        state.rightDate = nextYear(state.leftDate);
      }
    } else {
      state.leftDate = calcDefaultValue$1(state.defaultValue)[0];
      state.rightDate = nextYear(state.leftDate);
    }
  }
};
const watchDefaultValue$1 = ({ state }) => (value) => {
  if (!Array.isArray(state.value)) {
    const [left, right] = calcDefaultValue$1(value);
    state.leftDate = left;
    state.rightDate = value && value[1] && left.getFullYear() !== right.getFullYear() && state.unlinkPanels ? right : nextYear(state.leftDate);
  }
};
const handleClear$2 = ({ emit, state }) => () => {
  state.minDate = null;
  state.maxDate = null;
  state.leftDate = calcDefaultValue$1(state.defaultValue)[0];
  state.rightDate = nextYear(state.leftDate);
  emit("pick", null);
};
const handleChangeRange$1 = (state) => (val) => {
  state.minDate = val.minDate;
  state.maxDate = val.maxDate;
  state.rangeState = val.rangeState;
};
const handleRangePick$1 = ({ api: api2, state, t: t2 }) => (val, close2 = true) => {
  const defaultTime = state.defaultTime || [];
  const max = modifyWithTimeString(val.maxDate, defaultTime[1], t2);
  const min = modifyWithTimeString(val.minDate, defaultTime[0], t2);
  if (state.minDate === min && state.maxDate === max) {
    return;
  }
  if (state.onPick) {
    state.onPick(val);
  }
  state.minDate = min;
  state.maxDate = max;
  setTimeout(() => {
    state.minDate = min;
    state.maxDate = max;
  }, 10);
  if (!close2) {
    return;
  }
  api2.handleConfirm();
};
const handleShortcutClick$1 = (api2) => (shortcutObj) => {
  if (shortcutObj.onClick) {
    const choose = {
      $emit: (type, [start, end]) => {
        api2.doPick(start, end);
      }
    };
    shortcutObj.onClick(choose);
  }
};
const doPick$1 = (emit) => (begin, end) => {
  emit("pick", [begin, end], false);
};
const leftPrevYear$1 = (state) => () => {
  state.leftDate = prevYear(state.leftDate);
  if (!state.unlinkPanels) {
    state.rightDate = prevYear(state.rightDate);
  }
};
const rightNextYear$1 = (state) => () => {
  if (!state.unlinkPanels) {
    state.leftDate = nextYear(state.leftDate);
  }
  state.rightDate = nextYear(state.rightDate);
};
const leftNextYear = (state) => () => state.leftDate = nextYear(state.leftDate);
const rightPrevYear = (state) => () => state.rightDate = prevYear(state.rightDate);
const handleConfirm$1 = ({ api: api2, emit, state }) => (visible = false) => {
  if (api2.isValidValue([state.minDate, state.maxDate])) {
    emit("pick", [state.minDate, state.maxDate], visible);
  }
};
const isValidValue$2 = (state) => (value) => Array.isArray(value) && value && value[1] && value[0] && isDate$1(value[1]) && isDate$1(value[0]) && value[0].getTime() <= value[1].getTime() && (typeof state.disabledDate === "function" ? !state.disabledDate(value[1]) && !state.disabledDate(value[0]) : true);
const resetView$1 = (state) => () => {
  state.minDate = state.value && isDate$1(state.value[0]) ? new Date(state.value[0]) : null;
  state.maxDate = state.value && isDate$1(state.value[0]) ? new Date(state.value[1]) : null;
};
const api$b = [
  "state",
  "rightNextYear",
  "rightPrevYear",
  "handleRangePick",
  "handleShortcutClick",
  "handleChangeRange",
  "leftPrevYear",
  "leftNextYear",
  "isValidValue"
];
const initState$5 = ({ reactive, computed, api: api2, t: t2 }) => {
  const state = reactive({
    popperClass: "",
    value: [],
    defaultValue: null,
    defaultTime: null,
    minDate: "",
    maxDate: "",
    leftDate: /* @__PURE__ */ new Date(),
    rightDate: nextYear(/* @__PURE__ */ new Date()),
    rangeState: { endDate: null, selecting: false, row: null, column: null },
    shortcuts: "",
    visible: "",
    disabledDate: "",
    format: "",
    arrowControl: false,
    unlinkPanels: false,
    btnDisabled: computed(
      () => !(state.minDate && state.maxDate && !state.selecting && api2.isValidValue([state.minDate, state.maxDate]))
    ),
    leftLabel: computed(() => state.leftDate.getFullYear() + " " + t2("ui.datepicker.year")),
    rightLabel: computed(() => state.rightDate.getFullYear() + " " + t2("ui.datepicker.year")),
    leftYear: computed(() => state.leftDate.getFullYear()),
    rightYear: computed(
      () => state.rightDate.getFullYear() === state.leftDate.getFullYear() ? state.leftDate.getFullYear() + 1 : state.rightDate.getFullYear()
    ),
    enableYearArrow: computed(() => state.unlinkPanels && state.rightYear > state.leftYear + 1)
  });
  return state;
};
const renderless$b = (props2, { computed, reactive, watch }, { t: t2, emit: $emit }) => {
  const api2 = {};
  const emit = props2.emitter ? props2.emitter.emit : $emit;
  const state = initState$5({ reactive, computed, api: api2, t: t2 });
  Object.assign(api2, {
    state,
    resetView: resetView$1(state),
    handleChangeRange: handleChangeRange$1(state),
    isValidValue: isValidValue$2(state),
    leftNextYear: leftNextYear(state),
    leftPrevYear: leftPrevYear$1(state),
    doPick: doPick$1(emit),
    rightNextYear: rightNextYear$1(state),
    rightPrevYear: rightPrevYear(state),
    watchValue: watchValue$2({ state }),
    handleClear: handleClear$2({ emit, state }),
    watchDefaultValue: watchDefaultValue$1({ state }),
    handleConfirm: handleConfirm$1({ api: api2, emit, state }),
    handleRangePick: handleRangePick$1({ api: api2, state, t: t2 }),
    handleShortcutClick: handleShortcutClick$1(api2)
  });
  watch(() => state.value, api2.watchValue);
  watch(() => state.defaultValue, api2.watchDefaultValue);
  return api2;
};
const index$6 = "";
function _createForOfIteratorHelperLoose$c(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$c(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$c(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$c(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$c(o, minLen);
}
function _arrayLikeToArray$c(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$c = function _export_sfc213(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$c(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
function _extends$9() {
  _extends$9 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$9.apply(this, arguments);
}
var _sfc_main$c = defineComponent({
  name: $prefix + "MonthRange",
  directives: directive({
    Clickoutside: clickoutside_default
  }),
  components: {
    MonthTable,
    IconDoubleRight: index$j(),
    IconDoubleLeft: index$k()
  },
  props: _extends$9({}, $props$1, {
    emitter: Object
  }),
  emits: ["dodestroy", "pick"],
  setup: function setup$113(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$b,
      api: api$b,
      mono: true
    });
  }
});
var _hoisted_1$b = {
  class: "tiny-picker-panel__body-wrapper"
};
var _hoisted_2$9 = {
  key: 0,
  class: "tiny-picker-panel__sidebar"
};
var _hoisted_3$8 = ["onClick", "title"];
var _hoisted_4$6 = {
  class: "tiny-picker-panel__body"
};
var _hoisted_5$5 = {
  class: "tiny-picker-panel__content tiny-date-range-picker__content is-left"
};
var _hoisted_6$5 = {
  class: "tiny-date-range-picker__header"
};
var _hoisted_7$4 = ["disabled"];
var _hoisted_8$3 = {
  class: "tiny-picker-panel__content tiny-date-range-picker__content is-right"
};
var _hoisted_9$2 = {
  class: "tiny-date-range-picker__header"
};
var _hoisted_10$2 = ["disabled"];
function _sfc_render$c(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_double_left = resolveComponent("icon-double-left");
  var _component_icon_double_right = resolveComponent("icon-double-right");
  var _component_month_table = resolveComponent("month-table");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    onAfterLeave: _cache[4] || (_cache[4] = function($event) {
      return _ctx.$emit("dodestroy");
    }),
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["tiny-picker-panel tiny-date-range-picker tiny-popper", [{
            "has-sidebar": _ctx.slots.sidebar || _ctx.state.shortcuts
          }, _ctx.state.popperClass]])
        },
        [createBaseVNode("div", _hoisted_1$b, [renderSlot(_ctx.$slots, "sidebar", {
          class: "tiny-picker-panel__sidebar"
        }), _ctx.state.shortcuts ? (openBlock(), createElementBlock("div", _hoisted_2$9, [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.state.shortcuts, function(shortcut, key) {
            return openBlock(), createElementBlock("button", {
              type: "button",
              class: "tiny-picker-panel__shortcut",
              key,
              onClick: function onClick($event) {
                return _ctx.handleShortcutClick(shortcut);
              },
              title: shortcut.text
            }, toDisplayString(shortcut.text), 9, _hoisted_3$8);
          }),
          128
          /* KEYED_FRAGMENT */
        ))])) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_4$6, [createBaseVNode("div", _hoisted_5$5, [createBaseVNode("div", _hoisted_6$5, [createBaseVNode("button", {
          type: "button",
          onClick: _cache[0] || (_cache[0] = function() {
            return _ctx.leftPrevYear && _ctx.leftPrevYear.apply(_ctx, arguments);
          }),
          class: "tiny-picker-panel__icon-btn tiny-icon-d-arrow-left"
        }, [createVNode(_component_icon_double_left)]), _ctx.state.unlinkPanels ? (openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          onClick: _cache[1] || (_cache[1] = function() {
            return _ctx.leftNextYear && _ctx.leftNextYear.apply(_ctx, arguments);
          }),
          disabled: !_ctx.state.enableYearArrow,
          class: normalizeClass([{
            "is-disabled": !_ctx.state.enableYearArrow
          }, "tiny-picker-panel__icon-btn tiny-icon-d-arrow-right"])
        }, [createVNode(_component_icon_double_right)], 10, _hoisted_7$4)) : createCommentVNode("v-if", true), createBaseVNode(
          "div",
          null,
          toDisplayString(_ctx.state.leftLabel),
          1
          /* TEXT */
        )]), createVNode(_component_month_table, {
          "selection-mode": "range",
          date: _ctx.state.leftDate,
          "default-value": _ctx.state.defaultValue,
          "min-date": _ctx.state.minDate,
          "max-date": _ctx.state.maxDate,
          "range-state": _ctx.state.rangeState,
          "disabled-date": _ctx.state.disabledDate,
          onChangerange: _ctx.handleChangeRange,
          onPick: _ctx.handleRangePick
        }, null, 8, ["date", "default-value", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onPick"])]), createBaseVNode("div", _hoisted_8$3, [createBaseVNode("div", _hoisted_9$2, [_ctx.state.unlinkPanels ? (openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          onClick: _cache[2] || (_cache[2] = function() {
            return _ctx.rightPrevYear && _ctx.rightPrevYear.apply(_ctx, arguments);
          }),
          disabled: !_ctx.state.enableYearArrow,
          class: normalizeClass([{
            "is-disabled": !_ctx.state.enableYearArrow
          }, "tiny-picker-panel__icon-btn tiny-icon-d-arrow-left"])
        }, [createVNode(_component_icon_double_left)], 10, _hoisted_10$2)) : createCommentVNode("v-if", true), createBaseVNode("button", {
          type: "button",
          onClick: _cache[3] || (_cache[3] = function() {
            return _ctx.rightNextYear && _ctx.rightNextYear.apply(_ctx, arguments);
          }),
          class: "tiny-picker-panel__icon-btn tiny-icon-d-arrow-right"
        }, [createVNode(_component_icon_double_right)]), createBaseVNode(
          "div",
          null,
          toDisplayString(_ctx.state.rightLabel),
          1
          /* TEXT */
        )]), createVNode(_component_month_table, {
          "selection-mode": "range",
          date: _ctx.state.rightDate,
          "default-value": _ctx.state.defaultValue,
          "min-date": _ctx.state.minDate,
          "max-date": _ctx.state.maxDate,
          "range-state": _ctx.state.rangeState,
          "disabled-date": _ctx.state.disabledDate,
          onChangerange: _ctx.handleChangeRange,
          onPick: _ctx.handleRangePick
        }, null, 8, ["date", "default-value", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onPick"])])])])],
        2
        /* CLASS */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 3
    /* FORWARDED */
  });
}
var MonthRange = /* @__PURE__ */ _export_sfc$c(_sfc_main$c, [["render", _sfc_render$c]]);
var version$b = "3.16.0";
MonthRange.install = function(Vue) {
  Vue.component(MonthRange.name, MonthRange);
};
MonthRange.version = version$b;
const calcDefaultValue = (value) => {
  if (Array.isArray(value)) {
    return [new Date(value[0]), new Date(value[1])];
  } else if (value) {
    return [new Date(value), nextMonth(new Date(value))];
  }
  return [/* @__PURE__ */ new Date(), nextMonth(/* @__PURE__ */ new Date())];
};
const watchValue$1 = ({ state }) => (data) => {
  if (!data) {
    state.minDate = null;
    state.maxDate = null;
  } else if (Array.isArray(data)) {
    if (isDate$1(data[1])) {
      state.maxDate = new Date(data[1]);
    } else {
      state.maxDate = null;
    }
    if (isDate$1(data[0])) {
      state.minDate = new Date(data[0]);
    } else {
      state.minDate = null;
    }
    if (!state.minDate) {
      state.leftDate = calcDefaultValue(state.defaultValue)[0];
      state.rightDate = nextYear(state.leftDate);
    } else {
      state.leftDate = state.minDate;
      if (state.maxDate && state.unlinkPanels) {
        const minDateYear = state.minDate.getFullYear();
        const maxDateYear = state.maxDate.getFullYear();
        state.rightDate = maxDateYear === minDateYear ? nextYear(state.maxDate) : state.maxDate;
      } else {
        state.rightDate = nextYear(state.leftDate);
      }
    }
  }
};
const handleClear$1 = ({ emit, state }) => () => {
  state.maxDate = null;
  state.minDate = null;
  state.leftDate = calcDefaultValue(state.defaultValue)[0];
  state.rightDate = nextYear(state.leftDate);
  emit("pick", null);
};
const handleChangeRange = (state) => (val) => {
  state.rangeState = val.rangeState;
  state.minDate = val.minDate;
  state.maxDate = val.maxDate;
};
const watchDefaultValue = ({ state }) => (data) => {
  if (!Array.isArray(state.value)) {
    const [left, right] = calcDefaultValue(data);
    state.leftDate = left;
    state.rightDate = data && data[1] && left.getFullYear() !== right.getFullYear() && state.unlinkPanels ? right : nextYear(state.leftDate);
  }
};
const handleRangePick = ({ api: api2, state }) => (val, close2 = true) => {
  const maxDate = val.maxDate;
  const minDate = val.minDate;
  if (state.minDate === minDate && state.maxDate === maxDate) {
    return;
  }
  if (state.onPick) {
    state.onPick(val);
  }
  state.minDate = minDate;
  state.maxDate = maxDate;
  setTimeout(() => {
    state.minDate = minDate;
    state.maxDate = maxDate;
  }, 10);
  if (!close2) {
    return;
  }
  api2.handleConfirm();
};
const handleShortcutClick = (api2) => (shortcutEvent) => {
  if (shortcutEvent.onClick) {
    const choose = {
      $emit: (type, [start, end]) => {
        api2.doPick(start, end);
      }
    };
    shortcutEvent.onClick(choose);
  }
};
const doPick = (emit) => (begin, end) => {
  emit("pick", [begin, end], false);
};
const leftPrevYear = (state) => () => {
  state.leftStartYear = state.leftStartYear - DATEPICKER.PanelYearNum * 2;
};
const rightNextYear = (state) => () => {
  state.leftStartYear = state.leftStartYear + DATEPICKER.PanelYearNum * 2;
};
const handleConfirm = ({ api: api2, emit, state }) => (show = false) => {
  const { minDate, maxDate } = state;
  api2.isValidValue([minDate, maxDate]) && emit("pick", [new Date(minDate, 0, 2), new Date(maxDate, 0, 2)], show);
};
const isValidValue$1 = (state) => (data) => {
  return data && Array.isArray(data) && data[1] && data[0] && isDate$1(data[1]) && isDate$1(data[0]) && data[0] <= data[1] && (typeof state.disabledDate === "function" ? !state.disabledDate(data[1]) && !state.disabledDate(data[0]) : true);
};
const resetView = (state) => () => {
  state.maxDate = state.value && isDate$1(state.value[0]) ? new Date(state.value[1]) : null;
  state.minDate = state.value && isDate$1(state.value[0]) ? new Date(state.value[0]) : null;
};
const api$a = [
  "state",
  "rightNextYear",
  "handleRangePick",
  "handleShortcutClick",
  "handleChangeRange",
  "leftPrevYear"
];
const initState$4 = ({ reactive, computed, api: api2, t: t2 }) => {
  const state = reactive({
    selectionMode: DATEPICKER.YearRange,
    popperClass: "",
    value: [],
    defaultValue: null,
    defaultTime: null,
    minDate: "",
    maxDate: "",
    leftDate: /* @__PURE__ */ new Date(),
    rightDate: nextYear(/* @__PURE__ */ new Date()),
    rangeState: { startDate: null, endDate: null, selecting: false, row: null, column: null },
    shortcuts: "",
    visible: "",
    disabledDate: "",
    format: "",
    arrowControl: false,
    unlinkPanels: false,
    leftStartYear: Math.floor((/* @__PURE__ */ new Date()).getFullYear() / 10) * 10,
    rightStartYear: computed(() => state.leftStartYear + DATEPICKER.PanelYearNum),
    btnDisabled: computed(
      () => !(state.minDate && state.maxDate && !state.selecting && api2.isValidValue([state.minDate, state.maxDate]))
    ),
    leftLabel: computed(
      () => `${state.leftStartYear} ${t2("ui.datepicker.year")} - ${state.leftStartYear + DATEPICKER.PanelYearNum - 1} ${t2(
        "ui.datepicker.year"
      )}`
    ),
    rightLabel: computed(
      () => `${state.rightStartYear} ${t2("ui.datepicker.year")} - ${state.rightStartYear + DATEPICKER.PanelYearNum - 1} ${t2(
        "ui.datepicker.year"
      )}`
    )
  });
  return state;
};
const renderless$a = (props2, { computed, reactive, watch }, { t: t2, emit: $emit }) => {
  const emit = props2.emitter ? props2.emitter.emit : $emit;
  const api2 = {};
  const state = initState$4({ reactive, computed, api: api2, t: t2 });
  Object.assign(api2, {
    state,
    doPick: doPick(emit),
    resetView: resetView(state),
    watchValue: watchValue$1({ state }),
    isValidValue: isValidValue$1(state),
    leftPrevYear: leftPrevYear(state),
    rightNextYear: rightNextYear(state),
    handleClear: handleClear$1({ emit, state }),
    handleChangeRange: handleChangeRange(state),
    handleShortcutClick: handleShortcutClick(api2),
    watchDefaultValue: watchDefaultValue({ state }),
    handleConfirm: handleConfirm({ api: api2, emit, state }),
    handleRangePick: handleRangePick({ api: api2, state, t: t2 })
  });
  watch(() => state.value, api2.watchValue);
  watch(() => state.defaultValue, api2.watchDefaultValue);
  return api2;
};
function _createForOfIteratorHelperLoose$b(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$b(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$b(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$b(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$b(o, minLen);
}
function _arrayLikeToArray$b(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$b = function _export_sfc214(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$b(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
function _extends$8() {
  _extends$8 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
var _sfc_main$b = defineComponent({
  name: $prefix + "YearRange",
  directives: directive({
    Clickoutside: clickoutside_default
  }),
  components: {
    YearTable,
    IconDoubleRight: index$j(),
    IconDoubleLeft: index$k()
  },
  props: _extends$8({}, $props$1, {
    emitter: Object
  }),
  emits: ["dodestroy", "pick"],
  setup: function setup$114(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$a,
      api: api$a,
      mono: true
    });
  }
});
var _hoisted_1$a = {
  class: "tiny-picker-panel__body-wrapper"
};
var _hoisted_2$8 = {
  key: 0,
  class: "tiny-picker-panel__sidebar"
};
var _hoisted_3$7 = ["onClick", "title"];
var _hoisted_4$5 = {
  class: "tiny-picker-panel__body"
};
var _hoisted_5$4 = {
  class: "tiny-picker-panel__content tiny-date-range-picker__content is-left"
};
var _hoisted_6$4 = {
  class: "tiny-date-range-picker__header"
};
var _hoisted_7$3 = {
  class: "tiny-picker-panel__content tiny-date-range-picker__content is-right"
};
var _hoisted_8$2 = {
  class: "tiny-date-range-picker__header"
};
function _sfc_render$b(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_double_left = resolveComponent("icon-double-left");
  var _component_year_table = resolveComponent("year-table");
  var _component_icon_double_right = resolveComponent("icon-double-right");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    onAfterLeave: _cache[2] || (_cache[2] = function($event) {
      return _ctx.$emit("dodestroy");
    }),
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["tiny-picker-panel tiny-date-range-picker tiny-popper", [{
            "has-sidebar": _ctx.slots.sidebar || _ctx.state.shortcuts
          }, _ctx.state.popperClass]])
        },
        [createBaseVNode("div", _hoisted_1$a, [renderSlot(_ctx.$slots, "sidebar", {
          class: "tiny-picker-panel__sidebar"
        }), _ctx.state.shortcuts ? (openBlock(), createElementBlock("div", _hoisted_2$8, [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.state.shortcuts, function(shortcut, idx) {
            return openBlock(), createElementBlock("button", {
              type: "button",
              class: "tiny-picker-panel__shortcut",
              key: idx,
              onClick: function onClick($event) {
                return _ctx.handleShortcutClick(shortcut);
              },
              title: shortcut.text
            }, toDisplayString(shortcut.text), 9, _hoisted_3$7);
          }),
          128
          /* KEYED_FRAGMENT */
        ))])) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_4$5, [createBaseVNode("div", _hoisted_5$4, [createBaseVNode("div", _hoisted_6$4, [createBaseVNode("button", {
          type: "button",
          onClick: _cache[0] || (_cache[0] = function() {
            return _ctx.leftPrevYear && _ctx.leftPrevYear.apply(_ctx, arguments);
          }),
          class: "tiny-picker-panel__icon-btn tiny-icon-d-arrow-left"
        }, [createVNode(_component_icon_double_left)]), createBaseVNode(
          "div",
          null,
          toDisplayString(_ctx.state.leftLabel),
          1
          /* TEXT */
        )]), createVNode(_component_year_table, {
          ref: "leftYearTable",
          "selection-mode": _ctx.state.selectionMode,
          date: _ctx.state.leftDate,
          "default-value": _ctx.state.defaultValue,
          "min-date": _ctx.state.minDate,
          "max-date": _ctx.state.maxDate,
          "range-state": _ctx.state.rangeState,
          "disabled-date": _ctx.state.disabledDate,
          "start-year": _ctx.state.leftStartYear,
          onChangerange: _ctx.handleChangeRange,
          onPick: _ctx.handleRangePick
        }, null, 8, ["selection-mode", "date", "default-value", "min-date", "max-date", "range-state", "disabled-date", "start-year", "onChangerange", "onPick"])]), createBaseVNode("div", _hoisted_7$3, [createBaseVNode("div", _hoisted_8$2, [createBaseVNode("button", {
          type: "button",
          onClick: _cache[1] || (_cache[1] = function() {
            return _ctx.rightNextYear && _ctx.rightNextYear.apply(_ctx, arguments);
          }),
          class: "tiny-picker-panel__icon-btn tiny-icon-d-arrow-right"
        }, [createVNode(_component_icon_double_right)]), createBaseVNode(
          "div",
          null,
          toDisplayString(_ctx.state.rightLabel),
          1
          /* TEXT */
        )]), createVNode(_component_year_table, {
          ref: "rightRearTable",
          "selection-mode": _ctx.state.selectionMode,
          date: _ctx.state.rightDate,
          "default-value": _ctx.state.defaultValue,
          "min-date": _ctx.state.minDate,
          "max-date": _ctx.state.maxDate,
          "range-state": _ctx.state.rangeState,
          "disabled-date": _ctx.state.disabledDate,
          "start-year": _ctx.state.rightStartYear,
          onChangerange: _ctx.handleChangeRange,
          onPick: _ctx.handleRangePick
        }, null, 8, ["selection-mode", "date", "default-value", "min-date", "max-date", "range-state", "disabled-date", "start-year", "onChangerange", "onPick"])])])])],
        2
        /* CLASS */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 3
    /* FORWARDED */
  });
}
var YearRange = /* @__PURE__ */ _export_sfc$b(_sfc_main$b, [["render", _sfc_render$b]]);
var version$a = "3.16.0";
YearRange.install = function(Vue) {
  Vue.component(YearRange.name, YearRange);
};
YearRange.version = version$a;
const api$9 = [
  "state",
  "handleMinChange",
  "handleConfirm",
  "setMinSelectionRange",
  "handleCancel",
  "setMaxSelectionRange",
  "handleMaxChange"
];
const initState$3 = ({ reactive, computed, vm, api: api2 }) => {
  const state = reactive({
    popperClass: "",
    defaultValue: null,
    format: "HH:mm:ss",
    visible: false,
    value: [],
    oldValue: [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()],
    selectionRange: [0, 2],
    arrowControl: false,
    maxDate: /* @__PURE__ */ new Date(),
    minDate: /* @__PURE__ */ new Date(),
    showSeconds: computed(() => (state.format || "").includes("ss")),
    offset: computed(() => state.showSeconds ? 11 : 8),
    spinner: computed(() => state.selectionRange[0] < state.offset ? vm.$refs.minSpinner : vm.$refs.maxSpinner),
    btnDisabled: computed(() => state.minDate.getTime() > state.maxDate.getTime()),
    amPmMode: computed(() => api2.compuAmPmMode())
  });
  return state;
};
const renderless$9 = (props2, { computed, reactive, watch, nextTick }, { t: t2, vm, emit: $emit }) => {
  const api2 = {};
  const emit = props2.emitter ? props2.emitter.emit : $emit;
  const MIN_TIME = parseDate("00:00:00", "HH:mm:ss", t2);
  const MAX_TIME = parseDate("23:59:59", "HH:mm:ss", t2);
  const state = initState$3({ reactive, computed, vm, api: api2 });
  Object.assign(api2, {
    t: t2,
    state,
    handleClear: handleClear$4(emit),
    compuAmPmMode: compuAmPmMode(state),
    maxTimeOfDay: maxTimeOfDay({ MAX_TIME }),
    minTimeOfDay: minTimeOfDay({ MIN_TIME }),
    changeSelectionRange: changeSelectionRange({ vm, state }),
    setMaxSelectionRange: setMaxSelectionRange({ emit, state }),
    setMinSelectionRange: setMinSelectionRange({ emit, state }),
    isValidValue: isValidValue$4({ vm, state }),
    handleConfirm: handleConfirm$3({ emit, vm, state }),
    handleCancel: handleCancel({ emit, api: api2, state }),
    watchVisible: watchVisible$3({ nextTick, api: api2, state }),
    advanceTime: advanceTime(api2),
    watchValue: watchValue$4({ api: api2, state }),
    handleKeydown: handleKeydown$1({ api: api2, state }),
    handleChange: handleChange({ api: api2, emit, vm, state }),
    handleMinChange: handleMinChange({ api: api2, state }),
    handleMaxChange: handleMaxChange({ api: api2, state }),
    adjustSpinners: adjustSpinners$1({ vm })
  });
  watch(() => state.value, api2.watchValue);
  watch(() => state.visible, api2.watchVisible);
  return api2;
};
const index$5 = "";
function _createForOfIteratorHelperLoose$a(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$a(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$a(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$a(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$a(o, minLen);
}
function _arrayLikeToArray$a(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$a = function _export_sfc215(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$a(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$a = defineComponent({
  name: $prefix + "TimeRange",
  emits: ["dodestroy", "pick", "select-range"],
  components: {
    TimeSpinner
  },
  props: {
    emitter: Object
  },
  setup: function setup$115(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$9,
      api: api$9,
      mono: true
    });
  }
});
var _hoisted_1$9 = {
  class: "tiny-time-range-picker__content"
};
var _hoisted_2$7 = {
  class: "tiny-time-range-picker__cell"
};
var _hoisted_3$6 = {
  class: "tiny-time-range-picker__header"
};
var _hoisted_4$4 = {
  class: "tiny-time-range-picker__cell"
};
var _hoisted_5$3 = {
  class: "tiny-time-range-picker__header"
};
var _hoisted_6$3 = {
  class: "tiny-time-panel__footer"
};
var _hoisted_7$2 = ["disabled"];
function _sfc_render$a(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_time_spinner = resolveComponent("time-spinner");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    onAfterLeave: _cache[2] || (_cache[2] = function($event) {
      return _ctx.$emit("dodestroy");
    }),
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["tiny-time-range-picker tiny-picker-panel tiny-popper", _ctx.state.popperClass])
        },
        [createBaseVNode("div", _hoisted_1$9, [createBaseVNode("div", _hoisted_2$7, [createBaseVNode(
          "div",
          _hoisted_3$6,
          toDisplayString(_ctx.t("ui.datepicker.startTime")),
          1
          /* TEXT */
        ), createBaseVNode(
          "div",
          {
            class: normalizeClass([{
              "has-seconds": _ctx.state.showSeconds,
              "is-arrow": _ctx.state.arrowControl
            }, "tiny-time-range-picker__body tiny-time-panel__content"])
          },
          [createVNode(_component_time_spinner, {
            ref: "minSpinner",
            "show-seconds": _ctx.state.showSeconds,
            "am-pm-mode": _ctx.state.amPmMode,
            onChange: _ctx.handleMinChange,
            "end-date": _ctx.state.maxDate,
            "arrow-control": _ctx.state.arrowControl,
            onSelectRange: _ctx.setMinSelectionRange,
            date: _ctx.state.minDate
          }, null, 8, ["show-seconds", "am-pm-mode", "onChange", "end-date", "arrow-control", "onSelectRange", "date"])],
          2
          /* CLASS */
        )]), createBaseVNode("div", _hoisted_4$4, [createBaseVNode(
          "div",
          _hoisted_5$3,
          toDisplayString(_ctx.t("ui.datepicker.endTime")),
          1
          /* TEXT */
        ), createBaseVNode(
          "div",
          {
            class: normalizeClass([{
              "has-seconds": _ctx.state.showSeconds,
              "is-arrow": _ctx.state.arrowControl
            }, "tiny-time-range-picker__body tiny-time-panel__content"])
          },
          [createVNode(_component_time_spinner, {
            ref: "maxSpinner",
            "show-seconds": _ctx.state.showSeconds,
            "am-pm-mode": _ctx.state.amPmMode,
            onChange: _ctx.handleMaxChange,
            "start-date": _ctx.state.minDate,
            "arrow-control": _ctx.state.arrowControl,
            onSelectRange: _ctx.setMaxSelectionRange,
            date: _ctx.state.maxDate
          }, null, 8, ["show-seconds", "am-pm-mode", "onChange", "start-date", "arrow-control", "onSelectRange", "date"])],
          2
          /* CLASS */
        )])]), createBaseVNode("div", _hoisted_6$3, [createBaseVNode(
          "button",
          {
            type: "button",
            class: "tiny-time-panel__btn cancel",
            onClick: _cache[0] || (_cache[0] = function($event) {
              return _ctx.handleCancel();
            })
          },
          toDisplayString(_ctx.t("ui.datepicker.cancel")),
          1
          /* TEXT */
        ), createBaseVNode("button", {
          type: "button",
          class: "tiny-time-panel__btn confirm",
          onClick: _cache[1] || (_cache[1] = function($event) {
            return _ctx.handleConfirm();
          }),
          disabled: _ctx.state.btnDisabled
        }, toDisplayString(_ctx.t("ui.datepicker.confirm")), 9, _hoisted_7$2)])],
        2
        /* CLASS */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 1
    /* STABLE */
  });
}
var TimeRange = /* @__PURE__ */ _export_sfc$a(_sfc_main$a, [["render", _sfc_render$a]]);
var version$9 = "3.16.0";
TimeRange.install = function(Vue) {
  Vue.component(TimeRange.name, TimeRange);
};
TimeRange.version = version$9;
const getTarget = (event) => {
  let target = event.target;
  const tagName = target.tagName;
  if (tagName === "A") {
    target = target.parentNode.parentNode;
  }
  if (tagName === "DIV") {
    target = target.parentNode;
  }
  if (target.tagName !== "TD") {
    return;
  }
  return target;
};
const handleQuarterTableClick = ({ state, emit }) => (event) => {
  const target = getTarget(event);
  const currentDate = new Date(state.date.getFullYear(), DATEPICKER.QuarterMap[target.cellIndex], 1);
  state.value = currentDate;
  emit("pick", currentDate);
};
const showYearPicker = ({ state }) => () => state.currentView = DATEPICKER.Year;
const cusPrevYear = ({ state }) => () => {
  if (state.currentView === DATEPICKER.Year) {
    state.startYear = state.startYear - DATEPICKER.PanelYearNum;
  } else {
    state.date = prevYear(state.date);
  }
};
const cusNextYear = ({ state }) => () => {
  if (state.currentView === DATEPICKER.Year) {
    state.startYear = state.startYear + DATEPICKER.PanelYearNum;
  } else {
    state.date = nextYear(state.date);
  }
};
const handleYearPick = ({ state }) => (value) => {
  state.currentView = DATEPICKER.Quarter;
  state.date = modifyDate(state.date, value, state.date.getMonth(), state.date.getDate());
};
const getYearLabel = ({ state, t: t2 }) => () => {
  return state.date.getFullYear();
};
const getCellStyle = ({ api: api2, props: props2, state }) => (cell) => {
  const year = state.date.getFullYear();
  const quarter = cell.text.slice(1) - 1;
  const style = {};
  style.current = state.value && state.value.getFullYear() === year && state.value.getMonth() === DATEPICKER.QuarterMap[quarter];
  return style;
};
const api$8 = [
  "state",
  "handleQuarterTableClick",
  "showYearPicker",
  "handleYearPick",
  "cusPrevYear",
  "cusNextYear",
  "getCellStyle"
];
const renderless$8 = (props2, { reactive, computed }, { emit, t: t2 }) => {
  const api2 = {};
  const state = reactive({
    date: /* @__PURE__ */ new Date(),
    visible: false,
    currentView: DATEPICKER.Quarter,
    yearLabel: computed(() => api2.getYearLabel()),
    startYear: Math.floor((/* @__PURE__ */ new Date()).getFullYear() / 10) * 10,
    rows: [{ text: "Q1" }, { text: "Q2" }, { text: "Q3" }, { text: "Q4" }]
  });
  Object.assign(api2, {
    state,
    handleQuarterTableClick: handleQuarterTableClick({ state, emit }),
    showYearPicker: showYearPicker({ state }),
    handleYearPick: handleYearPick({ state }),
    cusPrevYear: cusPrevYear({ state }),
    cusNextYear: cusNextYear({ state }),
    getYearLabel: getYearLabel({ state, t: t2 }),
    getCellStyle: getCellStyle({ api: api2, props: props2, state })
  });
  return api2;
};
const index$4 = "";
function _createForOfIteratorHelperLoose$9(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$9(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$9(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$9(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$9(o, minLen);
}
function _arrayLikeToArray$9(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$9 = function _export_sfc216(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$9(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$9 = defineComponent({
  name: $prefix + "QuarterPanel",
  components: {
    YearTable,
    IconDoubleRight: index$j(),
    IconDoubleLeft: index$k()
  },
  setup: function setup$116(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$8,
      api: api$8,
      mono: true
    });
  }
});
var _hoisted_1$8 = {
  class: "tiny-quarter-panel tiny-picker-panel tiny-date-picker"
};
var _hoisted_2$6 = {
  class: "tiny-quarter-panel__header"
};
var _hoisted_3$5 = {
  class: "tiny-quarter-panel__content tiny-picker-panel__content"
};
var _hoisted_4$3 = ["textContent"];
function _sfc_render$9(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_double_left = resolveComponent("icon-double-left");
  var _component_icon_double_right = resolveComponent("icon-double-right");
  var _component_year_table = resolveComponent("year-table");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        _hoisted_1$8,
        [createBaseVNode("div", _hoisted_2$6, [createBaseVNode("button", {
          type: "button",
          onClick: _cache[0] || (_cache[0] = function() {
            return _ctx.cusPrevYear && _ctx.cusPrevYear.apply(_ctx, arguments);
          }),
          class: "tiny-picker-panel__icon-btn tiny-date-picker__prev-btn tiny-icon-d-arrow-left"
        }, [createVNode(_component_icon_double_left)]), createBaseVNode(
          "span",
          {
            onClick: _cache[1] || (_cache[1] = function() {
              return _ctx.showYearPicker && _ctx.showYearPicker.apply(_ctx, arguments);
            }),
            role: "button",
            class: "tiny-date-picker__header-label"
          },
          toDisplayString(_ctx.state.yearLabel),
          1
          /* TEXT */
        ), createBaseVNode("button", {
          type: "button",
          onClick: _cache[2] || (_cache[2] = function() {
            return _ctx.cusNextYear && _ctx.cusNextYear.apply(_ctx, arguments);
          }),
          class: "tiny-picker-panel__icon-btn tiny-date-picker__next-btn tiny-icon-d-arrow-right"
        }, [createVNode(_component_icon_double_right)])]), createBaseVNode("div", _hoisted_3$5, [_ctx.state.currentView === "quarter" ? (openBlock(), createElementBlock("table", {
          key: 0,
          class: "tiny-quarter-panel__table",
          onClick: _cache[3] || (_cache[3] = function() {
            return _ctx.handleQuarterTableClick && _ctx.handleQuarterTableClick.apply(_ctx, arguments);
          })
        }, [createBaseVNode("tbody", null, [createBaseVNode("tr", null, [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.state.rows, function(row, key) {
            return openBlock(), createElementBlock(
              "td",
              {
                key,
                class: normalizeClass(_ctx.getCellStyle(row))
              },
              [createBaseVNode("div", null, [createBaseVNode("a", {
                class: "cell",
                textContent: toDisplayString(row.text)
              }, null, 8, _hoisted_4$3)])],
              2
              /* CLASS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))])])])) : createCommentVNode("v-if", true), _ctx.state.currentView === "year" ? (openBlock(), createBlock(_component_year_table, {
          key: 1,
          ref: "yearTable",
          value: _ctx.state.value,
          "default-value": _ctx.state.defaultValue ? new Date(_ctx.state.defaultValue) : null,
          date: _ctx.state.date,
          "disabled-date": _ctx.state.disabledDate,
          "selection-mode": _ctx.state.selectionMode,
          "start-year": _ctx.state.startYear,
          onPick: _ctx.handleYearPick
        }, null, 8, ["value", "default-value", "date", "disabled-date", "selection-mode", "start-year", "onPick"])) : createCommentVNode("v-if", true)])],
        512
        /* NEED_PATCH */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 1
    /* STABLE */
  });
}
var QuerterPanel = /* @__PURE__ */ _export_sfc$9(_sfc_main$9, [["render", _sfc_render$9]]);
var version$8 = "3.16.0";
QuerterPanel.install = function(Vue) {
  Vue.component(QuerterPanel.name, QuerterPanel);
};
QuerterPanel.version = version$8;
const parseTime = () => (time) => {
  const values = (time || "").split(":");
  if (values.length >= 2) {
    const hours = parseInt(values[0], 10);
    const minutes = parseInt(values[1], 10);
    return {
      hours,
      minutes
    };
  }
  return null;
};
const compareTime = (api2) => (time1, time2) => {
  const value1 = api2.parseTime(time1);
  const value2 = api2.parseTime(time2);
  const minutes1 = value1.minutes + value1.hours * 60;
  const minutes2 = value2.minutes + value2.hours * 60;
  if (minutes1 === minutes2) {
    return 0;
  }
  return minutes1 > minutes2 ? 1 : -1;
};
const formatTime = () => (time) => (time.hours < 10 ? "0" + time.hours : time.hours) + ":" + (time.minutes < 10 ? "0" + time.minutes : time.minutes);
const nextTime = (api2) => (time, step) => {
  const timeValue = api2.parseTime(time);
  const stepValue = api2.parseTime(step);
  const next = {
    hours: timeValue.hours,
    minutes: timeValue.minutes
  };
  next.minutes += stepValue.minutes;
  next.hours += stepValue.hours;
  next.hours += Math.floor(next.minutes / 60);
  next.minutes = next.minutes % 60;
  return api2.formatTime(next);
};
const emitDestroy = (emit) => () => emit("dodestroy");
const emitPick = ({ emit, state }) => ({ value = null, visible = false } = {}) => {
  const lastEmitValue = JSON.stringify({ value, visible });
  if (!state.lastEmitValue || state.lastEmitValue !== lastEmitValue) {
    state.lastEmitValue = lastEmitValue;
    emit("pick", value, visible);
  }
};
const watchValue = ({ api: api2, nextTick }) => (value) => {
  if (!value) {
    return;
  }
  nextTick(() => api2.scrollToOption());
};
const computItems = ({ api: api2, state }) => () => {
  const start = state.start;
  const end = state.end;
  const step = state.step;
  const result = [];
  if (start && end && step) {
    let current = start;
    while (api2.compareTime(current, end) <= 0) {
      result.push({
        value: current,
        disabled: api2.compareTime(current, state.minTime || DATEPICKER.CompareOne) <= 0 || api2.compareTime(current, state.maxTime || DATEPICKER.CompareHundred) >= 0
      });
      current = api2.nextTime(current, step);
    }
  }
  return result;
};
const handleClick = (api2) => (item) => !item.disabled && api2.emitPick({ value: item.value });
const handleClear = ({ api: api2, state }) => () => {
  state.defaultValue = "";
  state.defaultTime = "";
  api2.emitPick();
};
const scrollToOption = ({ vm }) => (selector = DATEPICKER.selClass) => {
  const menu = vm.$refs.popper.querySelector(DATEPICKER.queryClass);
  scroll_into_view_default(menu, menu.querySelector(selector));
};
const handleMenuEnter = ({ api: api2, nextTick, state }) => () => {
  const selected = state.items.map((item) => item.value).includes(state.value);
  const hasDefault = state.items.map((item) => item.value).includes(state.default);
  const option = selected && DATEPICKER.selClass || hasDefault && DATEPICKER.defaultClass || DATEPICKER.disableClass;
  nextTick(() => api2.scrollToOption(option));
};
const scrollDown = ({ api: api2, state }) => (step) => {
  const items = state.items;
  const length = items.length;
  let total = items.length;
  let index3 = items.map((item) => item.value).indexOf(state.value);
  while (total--) {
    index3 = (index3 + step + length) % length;
    if (!items[index3].disabled) {
      api2.emitPick({ value: items[index3].value, visible: true });
      return;
    }
  }
};
const isValidValue = (state) => (date) => state.items.filter((item) => !item.disabled).map((item) => item.value).includes(date);
const handleKeydown = ({ api: api2 }) => (event) => {
  const keyCode = event.keyCode;
  if (keyCode === 38 || keyCode === 40) {
    const mapping = DATEPICKER.MappingKeyCode;
    const offset = mapping[keyCode.toString()];
    api2.scrollDown(offset);
    event.stopPropagation();
  }
};
const api$7 = ["state", "handleMenuEnter", "handleClick", "handleClear", "emitDestroy"];
const initState$2 = ({ reactive, computed, api: api2 }) => {
  const { Start, End, Step } = DATEPICKER;
  const state = reactive({
    popperClass: "",
    start: Start,
    end: End,
    step: Step,
    realValue: "",
    defaultValue: "",
    defaultTime: "",
    visible: false,
    minTime: "",
    maxTime: "",
    width: 0,
    lastEmitValue: "",
    items: computed(() => api2.computItems()),
    default: computed(() => state.defaultValue || state.defaultTime || ""),
    value: computed({
      get: () => state.realValue || state.default,
      set: (value) => {
        const valid = state.items.some((item) => item.value === value);
        state.realValue = valid ? value : "";
      }
    })
  });
  return state;
};
const renderless$7 = (props2, { computed, reactive, watch, nextTick }, { vm, emit: $emit }) => {
  const api2 = {};
  const emit = props2.emitter ? props2.emitter.emit : $emit;
  const state = initState$2({ reactive, computed, api: api2 });
  Object.assign(api2, {
    state,
    parseTime: parseTime(),
    formatTime: formatTime(),
    isValidValue: isValidValue(state),
    scrollToOption: scrollToOption({ vm }),
    emitPick: emitPick({ emit, state }),
    emitDestroy: emitDestroy(emit),
    nextTime: nextTime(api2),
    compareTime: compareTime(api2),
    handleClick: handleClick(api2),
    scrollDown: scrollDown({ api: api2, state }),
    handleClear: handleClear({ api: api2, state }),
    watchValue: watchValue({ api: api2, nextTick }),
    handleKeydown: handleKeydown({ api: api2 }),
    computItems: computItems({ api: api2, state }),
    handleMenuEnter: handleMenuEnter({ api: api2, nextTick, state })
  });
  watch(() => state.value, api2.watchValue);
  watch(
    () => state.visible,
    () => setTimeout(() => state.fnUpdatePopper && state.fnUpdatePopper())
  );
  return api2;
};
function _createForOfIteratorHelperLoose$8(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$8(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$8(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$8(o, minLen);
}
function _arrayLikeToArray$8(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$8 = function _export_sfc217(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$8(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$8 = defineComponent({
  emits: ["dodestroy", "pick"],
  components: {
    TinyScrollbar: _sfc_main$p
  },
  props: [].concat(props, ["emitter"]),
  setup: function setup$117(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$7,
      api: api$7
    });
  }
});
var _hoisted_1$7 = ["disabled", "onClick"];
function _sfc_render$8(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_scrollbar = resolveComponent("tiny-scrollbar");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    onBeforeEnter: _ctx.handleMenuEnter,
    onAfterLeave: _ctx.emitDestroy,
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          ref: "popper",
          style: normalizeStyle({
            width: _ctx.state.width + "px"
          }),
          class: normalizeClass([_ctx.state.popperClass, "tiny-picker-panel tiny-time-select tiny-popper"])
        },
        [createVNode(_component_tiny_scrollbar, {
          noresize: "",
          "wrap-class": "tiny-picker-panel__content"
        }, {
          default: withCtx(function() {
            return [(openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.state.items, function(item) {
                return openBlock(), createElementBlock("div", {
                  class: normalizeClass(["tiny-time-select__item", {
                    selected: _ctx.state.value === item.value,
                    disabled: item.disabled,
                    default: item.value === _ctx.state.default
                  }]),
                  disabled: item.disabled,
                  key: item.value,
                  onClick: function onClick($event) {
                    return _ctx.handleClick(item);
                  }
                }, toDisplayString(item.value), 11, _hoisted_1$7);
              }),
              128
              /* KEYED_FRAGMENT */
            ))];
          }),
          _: 1
          /* STABLE */
        })],
        6
        /* CLASS, STYLE */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 1
    /* STABLE */
  }, 8, ["onBeforeEnter", "onAfterLeave"]);
}
var pc$1 = /* @__PURE__ */ _export_sfc$8(_sfc_main$8, [["render", _sfc_render$8]]);
function _createForOfIteratorHelperLoose$7(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$7(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$7(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$7(o, minLen);
}
function _arrayLikeToArray$7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$7 = function _export_sfc218(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$7(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$7 = defineComponent({
  emits: ["dodestroy", "pick"],
  components: {
    TinyScrollbar: _sfc_main$p
  },
  props: [].concat(props, ["emitter"]),
  setup: function setup$118(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$7,
      api: api$7
    });
  }
});
var _hoisted_1$6 = ["disabled", "onClick"];
function _sfc_render$7(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_scrollbar = resolveComponent("tiny-scrollbar");
  return openBlock(), createBlock(Transition, {
    name: "tiny-zoom-in-top",
    onBeforeEnter: _ctx.handleMenuEnter,
    onAfterLeave: _ctx.emitDestroy,
    persisted: ""
  }, {
    default: withCtx(function() {
      return [withDirectives(createBaseVNode(
        "div",
        {
          ref: "popper",
          style: normalizeStyle({
            width: _ctx.state.width + "px"
          }),
          class: normalizeClass(_ctx.state.popperClass),
          "data-tag": "tiny-picker-panel tiny-time-select tiny-popper"
        },
        [createVNode(_component_tiny_scrollbar, {
          noresize: "",
          "wrap-class": "tiny-picker-panel__content"
        }, {
          default: withCtx(function() {
            return [(openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.state.items, function(item) {
                return openBlock(), createElementBlock("div", {
                  "data-tag": "tiny-time-select__item",
                  class: normalizeClass({
                    selected: _ctx.state.value === item.value,
                    disabled: item.disabled,
                    default: item.value === _ctx.state.default
                  }),
                  disabled: item.disabled,
                  key: item.value,
                  onClick: function onClick($event) {
                    return _ctx.handleClick(item);
                  }
                }, toDisplayString(item.value), 11, _hoisted_1$6);
              }),
              128
              /* KEYED_FRAGMENT */
            ))];
          }),
          _: 1
          /* STABLE */
        })],
        6
        /* CLASS, STYLE */
      ), [[vShow, _ctx.state.visible]])];
    }),
    _: 1
    /* STABLE */
  }, 8, ["onBeforeEnter", "onAfterLeave"]);
}
var mobileFirst$2 = /* @__PURE__ */ _export_sfc$7(_sfc_main$7, [["render", _sfc_render$7]]);
function _extends$7() {
  _extends$7 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$7.apply(this, arguments);
}
var template$4 = function template26(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc$1;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst$2;
  }
  return pc$1;
};
var TimePanel = defineComponent({
  name: $prefix + "TimePanel",
  componentName: "TimePanel",
  props: _extends$7({}, $props$1, {
    emitter: Object
  }),
  setup: function setup7(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$4
    });
  }
});
var version$7 = "3.16.0";
TimePanel.install = function(Vue) {
  Vue.component(TimePanel.name, TimePanel);
};
TimePanel.version = version$7;
const index$3 = "";
const getFormatTime = (time) => {
  return ("0" + time).slice(-2);
};
const getDaysByMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};
const isSameDay = (day1, day2) => {
  const theDay1 = new Date(day1);
  const theDay2 = new Date(day2);
  return theDay1.getFullYear() === theDay2.getFullYear() && theDay1.getMonth() === theDay2.getMonth() && theDay1.getDate() === theDay2.getDate();
};
const getDateStr = (year, month, day = "01", seperator = "/") => {
  const arr = [year, month, day];
  return arr.join(seperator);
};
const getCurrentDate = ({ api: api2, props: props2 }) => (dateValue) => {
  const today = /* @__PURE__ */ new Date();
  const theDate = new Date(dateValue);
  const year = theDate.getFullYear();
  const month = theDate.getMonth() + 1;
  const day = theDate.getDate();
  const yearMonth = getDateStr(year, month);
  const startWeek = new Date(year, month - 1, 1).getDay();
  const index3 = startWeek + day - 1;
  const { disabledDate } = props2.pickerOptions || {};
  return {
    value: api2.formatDate(theDate),
    yearMonth,
    index: index3,
    day,
    year,
    month,
    isStartDay: false,
    isEndDay: false,
    disabled: typeof disabledDate === "function" && !!disabledDate(theDate),
    isToday: isSameDay(today, theDate)
  };
};
const formatDate = ({ props: props2, constants }) => (date, dateFormat) => {
  const { YEAR_MONTH_RANGE, YEAR_MONTH } = constants.TYPE;
  const defaultFormet = [YEAR_MONTH_RANGE, YEAR_MONTH].includes(props2.type) ? "yyyy/MM/01" : "yyyy/MM/dd";
  return format$1(date, dateFormat === void 0 ? defaultFormet : dateFormat);
};
const getDateFromStr = (dateStr, direction = "top") => {
  const arr = dateStr.split("/").map((item) => +item);
  const yarr = arr[0];
  const month = direction == "top" ? arr[1] - 1 : arr[1];
  return new Date(yarr, month, 1);
};
const loadingDate = ({ state, api: api2 }) => (direction) => {
  const list = Object.keys(state.dateList);
  const value = direction === "top" ? list[0] : list[list.length - 1];
  const date = getDateFromStr(value, direction);
  api2.initPanel({ dateValue: date, direction });
  setTimeout(() => {
    state.loading = false;
  }, 100);
};
const initPanel = ({ state, api: api2 }) => ({ dateValue, direction, isInit }) => {
  const currentDate = dateValue || (Array.isArray(state.date) ? state.date[0] : state.date) || /* @__PURE__ */ new Date();
  let month = currentDate.getMonth() + 1;
  let year = direction === "top" ? currentDate.getFullYear() - state.yearNum : currentDate.getFullYear();
  if (isInit) {
    year -= Math.floor(state.yearNum / 2);
  }
  let date = new Date(year, month - 1, 1);
  const dateList = {};
  Array.from({ length: 12 * state.yearNum }).map(() => {
    const startWeek = date.getDay();
    dateList[getDateStr(year, month)] = Array.from({ length: startWeek }).map(() => ({}));
    const days = getDaysByMonth(year, month);
    Array.from({ length: days }).map((v, index3) => {
      const day = index3 + 1;
      const dayInfo = api2.getCurrentDate(new Date(year, month - 1, day));
      dateList[getDateStr(year, month)].push(dayInfo);
    });
    month++;
    if (month > 12) {
      year++;
      month = 1;
    }
    date = new Date(year, month - 1, 1);
  });
  state.dateList = direction === "top" ? Object.assign({}, dateList, state.dateList) : Object.assign({}, state.dateList, dateList);
};
const getWeeksByMonth = ({ state }) => (yearMonth) => {
  const length = state.dateList[yearMonth].length;
  return Math.ceil(length / 7);
};
const getDaysByWeek = ({ state, api: api2 }) => (yearMonth, week) => {
  const length = state.dateList[yearMonth].length;
  const weeks = api2.getWeeksByMonth(yearMonth);
  return week === weeks ? length % 7 : 7;
};
const getDate = ({ state }) => ({ date, yearMonth, index: index3 }) => {
  let currentDate;
  if (date) {
    const theDate = new Date(date);
    const key = getDateStr(theDate.getFullYear(), theDate.getMonth + 1);
    currentDate = state.dateList[key].filter((item) => item.day === theDate.getDate()).shift();
  } else {
    currentDate = state.dateList[yearMonth][index3];
  }
  return currentDate || {};
};
const getSelectedPosition = ({ state, api: api2 }) => (dateFormat) => {
  const { selected } = state;
  const length = selected.length;
  if (!length) {
    return "";
  }
  const index3 = selected.indexOf(api2.formatDate(dateFormat));
  return index3 === 0 ? "start" : index3 === length - 1 ? "end" : index3 > -1 ? "inner" : "";
};
const watchVisible$2 = ({ emit, api: api2, state }) => (bool) => {
  if (bool) {
    api2.watchModelValue();
    const currentDate = (Array.isArray(state.date) ? state.date[0] : state.date) || /* @__PURE__ */ new Date();
    setTimeout(() => api2.scrollToCurrentDate({ date: currentDate }), 300);
  }
  emit("update:visible", bool);
};
const scrollToCurrentDate = ({ state, vm, nextTick }) => ({ date, value }) => {
  const { isYearMonthPanel, computedYears, months } = state;
  let field;
  let list;
  let year;
  let month;
  let index3 = -1;
  if (date) {
    year = date.getFullYear();
    month = date.getMonth() + 1;
  }
  if (isYearMonthPanel) {
    field = "year";
    value = value || `${year}`;
    list = computedYears;
  } else {
    field = "yearMonth";
    value = value || getDateStr(year, month);
    list = months;
  }
  list.some((item, i) => {
    if (item[field] === value) {
      index3 = i;
      return true;
    }
    return false;
  });
  nextTick(() => {
    index3 !== -1 && vm.$refs.recycleScroller.scrollToItem(index3);
  });
};
const watchModelValue$1 = ({ props: props2, state, constants }) => () => {
  const { DATE: DATE2, DATE_TIME, DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE, YEAR_MONTH } = constants.TYPE;
  const { modelValue, type } = props2;
  if ([DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE].includes(type)) {
    state.date = modelValue && modelValue.length ? modelValue.map((date) => new Date(date)) : [];
  }
  if ([DATE2, DATE_TIME, YEAR_MONTH].includes(type)) {
    state.date = modelValue ? new Date(modelValue) : "";
  }
  if ([DATE_TIME_RANGE, DATE_TIME].includes(type)) {
    const length = type === DATE_TIME ? 1 : 2;
    Array.from({ length }).forEach((v, index3) => {
      const date = type === DATE_TIME ? state.date : state.date[index3];
      if (date) {
        state.timeList[index3] = [
          getFormatTime(date.getHours()),
          getFormatTime(date.getMinutes()),
          getFormatTime(date.getSeconds())
        ];
      }
    });
  }
};
const selectOption = ({ emit, state, props: props2, constants }) => ({ value, index: index3 }) => {
  const { DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE, YEAR_MONTH } = constants.TYPE;
  const { type } = props2;
  const { dateList, years } = state;
  const current = [YEAR_MONTH_RANGE, YEAR_MONTH].includes(type) ? years[value][index3] : dateList[value][index3];
  if (!current || current.disabled) {
    return;
  }
  if ([DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE].includes(type)) {
    if (state.date.length > 1) {
      state.date = [];
    }
    state.date.push(new Date(current.value));
    if (state.date.length === 2) {
      state.date.sort((a, b) => a.getTime() - b.getTime());
    }
  } else {
    state.date = new Date(current.value);
    emit("click", current);
  }
};
const confirm$3 = ({ emit, state, props: props2, api: api2, constants }) => () => {
  const { DATE_TIME, DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE } = constants.TYPE;
  const { date, timeList } = state;
  const { type } = props2;
  if ([DATE_TIME, DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE].includes(type)) {
    const length = type === DATE_TIME ? 1 : 2;
    Array.from({ length }).forEach((v, index3) => {
      let thisDate = type === DATE_TIME ? date : date[index3];
      if (thisDate) {
        const currentDate = api2.getCurrentDate(thisDate);
        const time = timeList[index3];
        thisDate = new Date(currentDate.year, currentDate.month - 1, currentDate.day, time[0], time[1], time[2]);
        if (type === DATE_TIME) {
          state.date = thisDate;
        } else {
          state.date[index3] = thisDate;
        }
      }
    });
  }
  emit("confirm", state.date);
  emit("update:visible", false);
  emit("update:modelValue", state.date);
};
const timeConfirm = ({ emit, state }) => (value) => {
  state.timeVisible = false;
  state.timeList[state.showTimeIndex] = value;
  emit("time-confirm", value);
};
const timeToggle = ({ state }) => (index3) => {
  state.showTimeIndex = index3;
  state.time = state.timeList[index3];
  state.timeVisible = true;
};
const selectedComputed = ({ state, props: props2, constants, api: api2 }) => () => {
  const { type } = props2;
  const { DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE } = constants.TYPE;
  if ([DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE].includes(type)) {
    if (state.date && state.date.length) {
      if (state.date.length === 1) {
        return [api2.formatDate(state.date[0])];
      }
      const list = [];
      let date1 = state.date[0].getTime();
      let date2 = state.date[1].getTime();
      while (date1 <= date2) {
        const date = new Date(date1);
        list.push(api2.formatDate(date));
        if (type === YEAR_MONTH_RANGE) {
          date1 = api2.getOffsetMonth(date, 1).getTime();
        } else {
          date1 += 3600 * 24 * 1e3;
        }
      }
      return list;
    }
    return [];
  }
  return state.date ? [api2.formatDate(state.date)] : [];
};
const scrollStart = ({ state, api: api2, props: props2 }) => () => {
  if (state.loading || !props2.visible || !state.ready) {
    return;
  }
  state.loading = true;
  const value = state.isYearMonthPanel ? state.computedYears[1].year : state.months[1].yearMonth;
  state.isYearMonthPanel ? api2.loadYearMonth("top") : api2.loadingDate("top");
  api2.scrollToCurrentDate({ value });
};
const scrollEnd = ({ state, api: api2 }) => () => {
  if (state.loading) {
    return;
  }
  state.loading = true;
  state.isYearMonthPanel ? api2.loadYearMonth("down") : api2.loadingDate("down");
};
const clear$2 = ({ state, emit, api: api2 }) => () => {
  state.date = Array.isArray(state.date) ? [] : "";
  emit("update:modelValue", state.date);
  emit("clear", state.date);
  api2.close();
};
const close$1 = ({ emit, vm }) => () => {
  vm.$refs.actionSheet.close();
  emit("close");
};
const initYearMonthPanel = ({ state, props: props2 }) => ({ dateValue, direction, isInit }) => {
  const years = [];
  const currentDate = dateValue || (Array.isArray(state.date) ? state.date[0] : state.date) || /* @__PURE__ */ new Date();
  let year = direction === "top" ? currentDate.getFullYear() - state.yearNum : currentDate.getFullYear();
  const today = /* @__PURE__ */ new Date();
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth() + 1;
  const { disabledDate } = props2.pickerOptions || {};
  if (isInit) {
    year -= Math.floor(state.yearNum / 2);
  }
  Array.from({ length: state.yearNum }).map((item, index3) => {
    const currentYear2 = year + index3 + 1;
    years[currentYear2] = Array.from({ length: 12 }).map((v, index24) => {
      const month = index24 + 1;
      return {
        value: getDateStr(currentYear2, month),
        year: currentYear2,
        month,
        disabled: typeof disabledDate === "function" && !!disabledDate(new Date(currentYear2, month - 1, 1)),
        isToday: thisYear === currentYear2 && thisMonth === month
      };
    });
  });
  state.years = direction === "top" ? Object.assign({}, years, state.years) : Object.assign({}, state.years, years);
};
const loadYearMonth = ({ state, api: api2 }) => (direction) => {
  const list = Object.keys(state.years);
  let date;
  if (direction === "top") {
    date = new Date(list[0], 0, 1);
  } else {
    date = new Date(list[list.length - 1], 0, 1);
  }
  api2.initYearMonthPanel({ dateValue: date, direction });
  setTimeout(() => {
    state.loading = false;
  }, 100);
};
const getOffsetMonth = () => (date, offset) => {
  const theDate = new Date(date);
  let year = theDate.getFullYear();
  let month = theDate.getMonth();
  let day = theDate.getDate();
  return new Date(year, month + offset, day);
};
const api$6 = [
  "state",
  "getDate",
  "getWeeksByMonth",
  "getDaysByWeek",
  "getSelectedPosition",
  "selectOption",
  "confirm",
  "timeToggle",
  "timeConfirm",
  "scrollStart",
  "scrollEnd",
  "loadingDate",
  "clear",
  "close",
  "formatDate"
];
const renderless$6 = (props2, { computed, reactive, watch, onMounted }, { emit, vm, nextTick, constants }) => {
  const { DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE, YEAR_MONTH } = constants.TYPE;
  const api2 = {};
  const state = reactive({
    scrollerHeight: window.innerHeight || 1e3,
    toggle: false,
    date: null,
    loading: false,
    ready: false,
    dateList: {},
    timeVisible: false,
    showTimeIndex: 0,
    time: ["00", "00", "00"],
    timeList: [
      ["00", "00", "00"],
      ["00", "00", "00"]
    ],
    years: [],
    isYearMonthPanel: computed(() => [YEAR_MONTH_RANGE, YEAR_MONTH].includes(props2.type)),
    yearNum: computed(() => [YEAR_MONTH, YEAR_MONTH_RANGE].includes(props2.type) ? 40 : 10),
    itemSize: computed(() => [YEAR_MONTH, YEAR_MONTH_RANGE].includes(props2.type) ? 150 : 300),
    buffer: 200,
    selected: computed(() => api2.selectedComputed()),
    months: computed(() => Object.keys(state.dateList).map((item) => ({ id: item, yearMonth: item }))),
    btnDisabled: computed(
      () => [DATE_RANGE, DATE_TIME_RANGE, YEAR_MONTH_RANGE].includes(props2.type) && state.date && state.date.length === 1
    ),
    computedYears: computed(() => Object.keys(state.years).map((item) => ({ id: item, year: item })))
  });
  Object.assign(api2, {
    state,
    initPanel: initPanel({ state, api: api2 }),
    initYearMonthPanel: initYearMonthPanel({ state, props: props2 }),
    getCurrentDate: getCurrentDate({ api: api2, props: props2 }),
    getWeeksByMonth: getWeeksByMonth({ state }),
    getDate: getDate({ state }),
    getDaysByWeek: getDaysByWeek({ state, api: api2 }),
    getSelectedPosition: getSelectedPosition({ state, api: api2 }),
    confirm: confirm$3({ state, emit, props: props2, api: api2, constants }),
    timeConfirm: timeConfirm({ state, emit }),
    scrollStart: scrollStart({ state, api: api2, props: props2, constants }),
    scrollEnd: scrollEnd({ state, api: api2, props: props2, constants }),
    selectOption: selectOption({ state, emit, props: props2, constants }),
    timeToggle: timeToggle({ state }),
    watchVisible: watchVisible$2({ emit, api: api2, state }),
    scrollToCurrentDate: scrollToCurrentDate({ state, vm, nextTick }),
    watchModelValue: watchModelValue$1({ props: props2, state, constants }),
    selectedComputed: selectedComputed({ props: props2, state, constants, api: api2 }),
    loadingDate: loadingDate({ state, api: api2 }),
    loadYearMonth: loadYearMonth({ state, api: api2 }),
    getOffsetMonth: getOffsetMonth(),
    formatDate: formatDate({ props: props2, constants }),
    clear: clear$2({ state, emit, api: api2 }),
    close: close$1({ emit, vm })
  });
  watch(() => props2.visible, api2.watchVisible);
  watch(() => props2.modelValue, api2.watchModelValue, { immediate: true });
  onMounted(() => {
    state.isYearMonthPanel ? api2.initYearMonthPanel({ isInit: true }) : api2.initPanel({ isInit: true });
    props2.visible && api2.scrollToCurrentDate({ date: (Array.isArray(state.date) ? state.date[0] : state.date) || /* @__PURE__ */ new Date() });
    nextTick(() => {
      state.ready = true;
    });
  });
  return api2;
};
const optionMethod = (value) => {
  const val = ("0" + value).slice(-2);
  return { id: +val, label: val };
};
const watchModelValue = ({ props: props2, state }) => () => {
  const { modelValue, showSeconds } = props2;
  const num = showSeconds ? 3 : 2;
  if (!showSeconds && modelValue.length === 3) {
    state.seconds = modelValue[2];
  }
  state.dateArr = modelValue && state.dateArr.toString() !== "NaN,NaN,NaN" ? modelValue.slice(0, num) : [];
};
const watchVisible$1 = ({ api: api2, state }) => (value) => {
  state.visible = value;
  value && api2.watchModelValue();
};
const updateVisible = ({ state, emit }) => (value) => {
  state.visible = value;
  emit("update:visible", value);
};
const confirm$2 = ({ emit, state }) => (value) => {
  const dateArr = value.map((item) => ("0" + item).slice(-2));
  state.dateArr = dateArr;
  emit("update:modelValue", state.value);
  emit("confirm", state.value);
};
const clear$1 = ({ state, emit, api: api2, vm, dispatch }) => ($event) => {
  state.dateArr = [];
  vm.$refs.cascaderSelect.clear(state.dateArr);
  emit("update:modelValue", state.dateArr);
  emit("clear", state.dateArr);
  dispatch("Picker", "handle-clear", $event);
  api2.updateVisible(false);
};
const getTimePeriod = ({ state, props: props2 }) => (unit, length) => {
  const step = props2.step || {};
  const value = step[unit] || 1;
  return Array.from({ length }).map((v, key) => key).filter((v) => v % value === 0).map((v) => optionMethod(v));
};
const computedOptions = ({ state, api: api2, props: props2 }) => () => {
  const { showSeconds } = props2;
  const options = [];
  options.push(api2.getTimePeriod("hour", 24));
  options.push(api2.getTimePeriod("minute", 60));
  showSeconds && options.push(api2.getTimePeriod("second", 60));
  return options;
};
const api$5 = ["state", "confirm", "updateVisible", "clear"];
const renderless$5 = (props2, { reactive, watch, computed }, { emit, vm, dispatch }) => {
  const api2 = {};
  const state = reactive({
    visible: false,
    dateArr: [],
    seconds: null,
    options: computed(() => api2.computedOptions()),
    value: computed(
      () => !props2.showSeconds && state.seconds !== null ? [...state.dateArr, state.seconds] : state.dateArr
    )
  });
  Object.assign(api2, {
    state,
    watchModelValue: watchModelValue({ props: props2, state }),
    watchVisible: watchVisible$1({ api: api2, state }),
    confirm: confirm$2({ emit, state }),
    clear: clear$1({ state, emit, api: api2, vm, dispatch }),
    updateVisible: updateVisible({ emit, state }),
    getTimePeriod: getTimePeriod({ state, props: props2 }),
    computedOptions: computedOptions({ state, api: api2, props: props2 }),
    optionMethod
  });
  watch(() => props2.visible, api2.watchVisible);
  watch(() => props2.modelValue, api2.watchModelValue, { immediate: true });
  return api2;
};
const watchActionSheetVisible = ({ emit, api: api2, props: props2 }) => (visible) => {
  emit("update:visible", visible);
  if (!visible)
    return;
  api2.setValue(props2.modelValue);
};
const close = (state) => () => state.actionSheetVisible && (state.actionSheetVisible = false);
const confirm$1 = ({ api: api2, emit, defaultValues, selectedOptions, isDisabled, vm }) => () => {
  if (isDisabled.value)
    return;
  let refs = vm.$refs.swipeRef;
  let moving = false;
  if (!Array.isArray(vm.$refs.swipeRef)) {
    refs = [refs];
  }
  defaultValues.value = refs.map((comp) => {
    if (comp.state.moving) {
      moving = true;
    }
    return comp.state.currentValue;
  });
  if (moving)
    return;
  emit("confirm", {
    selectedValue: defaultValues.value.slice(),
    selectedOptions: selectedOptions.value.slice()
  });
  emit("update:modelValue", defaultValues.value.slice());
  api2.close();
};
const clear = ({ api: api2, emit }) => (value) => {
  emit("update:modelValue", value);
  api2.close();
};
const columnStyle = ({ props: props2, computed }) => computed(() => {
  return {
    height: `${+props2.visibleOptionNum * +props2.optionHeight}px`,
    "--lineHeight": `${+props2.optionHeight}px`
  };
});
const DEFAULT_FILED_NAMES = {
  text: "label",
  value: "id",
  children: "children"
};
const createSourceData = ({ props: props2, state, api: api2 }) => () => {
  if (!api2.validProps())
    return;
  const { options, valueField, textField, type } = props2;
  if (type === "cascade")
    return options;
  const values = api2.parseType(state.defaultValues.slice());
  const types = Array.from({ length: values.length });
  const ranges = Array.from({ length: values.length });
  const indices = Array.from({ length: values.length });
  const visibleOptions = options.map((opt, i) => {
    let slicedValues, existOption;
    if (Array.isArray(opt)) {
      if (opt.length === 0)
        return [];
      let index3 = opt.findIndex((item) => item[valueField] === values[i]);
      index3 = index3 === -1 ? 0 : index3;
      types[i] = "a";
      ranges[i] = [0, opt.length - 1];
      indices[i] = index3;
      slicedValues = api2.sliceValue(0, opt.length - 1);
      existOption = (i2) => opt[i2];
    } else if (opt && typeof opt === "object") {
      let range2;
      if (Array.isArray(opt.range)) {
        range2 = opt.range.slice(0, 2);
      } else if (typeof opt.rangeMethod === "function") {
        range2 = opt.rangeMethod(...values);
        state.isOldCascadeType = true;
      }
      types[i] = "o";
      ranges[i] = api2.parseType(range2);
      slicedValues = api2.sliceValue(ranges[i][0], ranges[i][1]);
      existOption = (i2) => opt.optionMethod(i2, ...values);
    }
    if (!slicedValues || !existOption)
      return [];
    return slicedValues.map((slicedValue) => {
      const option = slicedValue === null ? { [valueField]: null, [textField]: "" } : existOption(slicedValue);
      return option;
    });
  });
  return visibleOptions;
};
const changeHandler = ({ state, columnFieldNames, columnsType, api: api2 }) => (columnIndex, option) => {
  const fields = columnFieldNames.value;
  if (option && Object.keys(option).length) {
    state.defaultValues = state.defaultValues ? state.defaultValues : [];
    if (columnsType.value === "cascade") {
      state.defaultValues[columnIndex] = option[fields.value] || "";
      let index3 = columnIndex;
      let cursor = option;
      while (cursor && cursor[fields.children] && cursor[fields.children][0]) {
        state.defaultValues[index3 + 1] = cursor[fields.children][0][fields.value];
        index3++;
        cursor = cursor[fields.children][0];
      }
      if (cursor && cursor[fields.children] && cursor[fields.children].length === 0) {
        state.defaultValues = state.defaultValues.slice(0, index3 + 1);
      }
    } else {
      state.defaultValues[columnIndex] = Object.prototype.hasOwnProperty.call(option, fields.value) ? option[fields.value] : "";
    }
    api2.change(columnIndex);
  }
};
const formatCascade$1 = ({ columnFieldNames }) => (columns, defaultValues) => {
  const formatted = [];
  const fields = columnFieldNames.value;
  let cursor = {
    text: "",
    value: "",
    [fields.children]: columns
  };
  let columnIndex = 0;
  while (cursor && cursor[fields.children]) {
    const options = cursor[fields.children];
    const value = defaultValues[columnIndex];
    let index3 = options.findIndex((columnItem) => columnItem[fields.value] === value);
    if (index3 === -1)
      index3 = 0;
    cursor = cursor[fields.children][index3];
    columnIndex++;
    formatted.push(options);
  }
  return formatted.slice();
};
const columnFieldNamesComputed = ({ props: props2, computed }) => computed(() => {
  return __spreadProps(__spreadValues({}, DEFAULT_FILED_NAMES), {
    text: props2.textField,
    value: props2.valueField,
    children: props2.childrenField
  });
});
const defaultIndexes = ({ state, computed, columnFieldNames, columnsList }) => computed(() => {
  const fields = columnFieldNames.value;
  return columnsList.value.map((column, index3) => {
    const targetIndex = column.findIndex((item) => item[fields.value] === state.defaultValues[index3]);
    return targetIndex === -1 ? 0 : targetIndex;
  });
});
const confirmDisabled = ({ props: props2, state, columnsList }) => () => {
  if (typeof props2.disabled !== "function") {
    return false;
  }
  state.isDisabled = columnsList.value.some((column, columnIndex) => {
    return props2.disabled(state.defaultValues[columnIndex], ...state.defaultValues);
  });
};
const change$1 = ({ api: api2, state, columnFieldNames, columnsList }) => () => {
  if (api2.isSameValue(state.oldValues, state.defaultValues))
    return;
  state.oldValues = state.defaultValues.slice();
  if (state.isOldCascadeType) {
    state.formattedColumns = api2.createSourceData();
  }
  api2.getColumnsList();
  api2.confirmDisabled();
  const fields = columnFieldNames.value;
  state.selectedOptions = columnsList.value.map((column, index3) => {
    return column.find((item) => item[fields.value] === state.defaultValues[index3]) || column[0];
  });
};
const columnsTypeComputed = ({ state, computed, columnFieldNames }) => computed(() => {
  const firstColumn = state.formattedColumns[0];
  const fields = columnFieldNames.value;
  if (firstColumn) {
    if (Array.isArray(firstColumn)) {
      return "multiple";
    }
    if (fields.children in firstColumn) {
      return "cascade";
    }
  }
  return "single";
});
const getColumnsList = ({ state, api: api2, columnsType, columnsList }) => () => {
  let result = [];
  switch (columnsType.value) {
    case "multiple":
      result = state.formattedColumns;
      break;
    case "cascade":
      result = api2.formatCascade(state.formattedColumns, state.defaultValues ? state.defaultValues : []);
      break;
    default:
      result = [state.formattedColumns];
      break;
  }
  columnsList.value = result;
};
const setValue = ({ api: api2, state }) => (value) => {
  if (!api2.isSameValue(value, state.defaultValues)) {
    state.defaultValues = (value || []).slice();
    api2.change();
  }
};
const isSameValue = (valA, valB) => JSON.stringify(valA) === JSON.stringify(valB);
const sliceValue = (min, max) => {
  const values = [min];
  Array.from({ length: max - min }).map((v, i) => values.push(min + i + 1));
  return values;
};
const validArr = (arr) => Array.isArray(arr) && arr.length;
const validProps = ({ props: props2 }) => () => {
  const { modelValue, options } = props2;
  return validArr(modelValue) && validArr(options) && modelValue.length === options.length;
};
const parseType = ({ props: props2 }) => (values) => {
  const { valueType } = props2;
  return values.map(valueType === "number" ? Number : valueType === "string" ? String : (i) => i);
};
const init = ({ api: api2, state }) => () => {
  state.isInit = true;
  state.formattedColumns = api2.createSourceData();
  api2.getColumnsList();
};
const usePicker = (args) => {
  const { ref, reactive, watch, computed, toRefs, props: props2 } = args;
  const state = reactive({
    formattedColumns: [],
    defaultValues: [],
    selectedOptions: [],
    oldValues: [],
    isOldCascadeType: false,
    isDisabled: false,
    isInit: false
  });
  const api2 = {};
  const columnsList = ref([]);
  const pickerColumn = ref([]);
  const columnFieldNames = columnFieldNamesComputed({ props: props2, computed });
  const columnsType = columnsTypeComputed({ state, computed, columnFieldNames });
  Object.assign(api2, {
    change: change$1({ api: api2, state, columnFieldNames, columnsList }),
    changeHandler: changeHandler({ state, columnFieldNames, columnsType, api: api2 }),
    formatCascade: formatCascade$1({ columnFieldNames }),
    setValue: setValue({ api: api2, state }),
    validProps: validProps({ props: props2 }),
    parseType: parseType({ props: props2 }),
    init: init({ api: api2, state }),
    isSameValue,
    sliceValue,
    getColumnsList: getColumnsList({ state, api: api2, columnsType, columnsList }),
    confirmDisabled: confirmDisabled({ props: props2, state, columnsList }),
    defaultIndexes: defaultIndexes({ state, computed, columnFieldNames, columnsList }),
    createSourceData: createSourceData({ props: props2, state, api: api2 })
  });
  initWatch$2({ props: props2, api: api2, state, watch });
  return __spreadProps(__spreadValues({}, toRefs(state)), {
    columnsType,
    columnsList,
    columnFieldNames,
    changeHandler: api2.changeHandler,
    defaultIndexes: api2.defaultIndexes,
    pickerColumn,
    isSameValue: api2.isSameValue,
    setValue: api2.setValue
  });
};
const initWatch$2 = ({ props: props2, api: api2, state, watch }) => {
  watch(
    () => props2.modelValue,
    (newValues) => {
      api2.setValue(newValues);
    },
    { deep: true, immediate: true }
  );
  watch(
    () => props2.options,
    () => props2.visible && api2.init(),
    { deep: true, immediate: true }
  );
  watch(
    () => props2.visible,
    () => props2.visible && !state.isInit && api2.init(),
    { deep: true, immediate: true }
  );
};
const api$4 = [
  "state",
  "close",
  "confirm",
  "clear",
  "columnsType",
  "columnsList",
  "columnFieldNames",
  "changeHandler",
  "defaultValues",
  "isDisabled",
  "selectedOptions",
  "columnStyle"
];
const renderless$4 = (props2, { reactive, computed, watch, ref, toRefs }, { emit, vm }) => {
  const state = reactive({
    actionSheetVisible: false,
    visibleOptionNum: 5
  });
  const {
    changeHandler: changeHandler2,
    defaultValues,
    columnsList,
    columnsType,
    columnFieldNames,
    selectedOptions,
    setValue: setValue2,
    isDisabled
  } = usePicker({ ref, reactive, watch, computed, toRefs, props: props2, emit });
  const api2 = {
    state
  };
  Object.assign(api2, {
    close: close(state),
    clear: clear({ api: api2, emit }),
    confirm: confirm$1({ api: api2, emit, props: props2, state, defaultValues, selectedOptions, isDisabled, vm }),
    watchActionSheetVisible: watchActionSheetVisible({ emit, api: api2, props: props2 }),
    columnsType,
    columnsList,
    columnFieldNames,
    changeHandler: changeHandler2,
    defaultValues,
    selectedOptions,
    setValue: setValue2,
    isDisabled,
    columnStyle: columnStyle({ props: props2, computed })
  });
  watch(
    () => props2.visible,
    (value) => state.actionSheetVisible = value
  );
  watch(
    () => state.actionSheetVisible,
    (value) => api2.watchActionSheetVisible(value)
  );
  return api2;
};
const DEFAULT_DURATION = 200;
const INERTIA_TIME = 300;
const INERTIA_DISTANCE = 15;
const preventDefault = (event, isStopPropagation) => {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    event.stopPropagation();
  }
};
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const pxCheck = (value) => {
  return isNaN(Number(value)) ? String(value) : `${value}px`;
};
const stopMomentum = ({ state, api: api2 }) => () => {
  state.moving = false;
  state.touchTime = 0;
  api2.setChooseValue();
};
const setRollerStyle = ({ state }) => (index3) => {
  return `transform: rotate3d(1, 0, 0, ${-state.rotation * index3}deg) translate3d(0px, 0px, 104px)`;
};
const onTouchStart = ({ state, props: props2, touch, vm }) => (event) => {
  touch.start(event);
  if (state.moving) {
    const dom = vm.$refs.roller;
    const { transform } = window.getComputedStyle(dom);
    if (props2.threeDimensional) {
      const circle = Math.floor(parseInt(state.touchDeg) / 360);
      const cos = +transform.split(", ")[5];
      const sin = +transform.split(", ")[6] < 0 ? 180 : 0;
      const endDeg = circle * 360 + Math.acos(cos) / Math.PI * 180 + sin;
      state.scrollDistance = -Math.abs((endDeg / state.rotation - 1) * +props2.optionHeight);
    } else {
      state.scrollDistance = +transform.slice(7, transform.length - 1).split(", ")[5];
    }
  }
  preventDefault(event, true);
  state.touchParams.startY = touch.deltaY.value;
  state.touchParams.startTime = Date.now();
  state.transformY = state.scrollDistance;
};
const onTouchMove = ({ state, api: api2, touch }) => (event) => {
  touch.move(event);
  if (touch.isVertical()) {
    state.moving = true;
    preventDefault(event, true);
  }
  state.touchParams.lastY = touch.deltaY.value;
  let move = state.touchParams.lastY - state.touchParams.startY;
  api2.setMove(move);
};
const onTouchEnd = ({ state, props: props2, api: api2, touch }) => () => {
  state.touchParams.lastY = touch.deltaY.value;
  state.touchParams.lastTime = Date.now();
  let move = state.touchParams.lastY - state.touchParams.startY;
  let moveTime = state.touchParams.lastTime - state.touchParams.startTime;
  if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
    const distance = api2.momentum(move, moveTime);
    api2.setMove(distance, "end", +props2.swipeDuration);
    return;
  } else {
    api2.setMove(move, "end");
  }
  setTimeout(() => {
    touch.reset();
    state.moving = false;
  }, 0);
};
const momentum = (distance, duration) => {
  const speed = Math.abs(distance / duration);
  distance = speed / 3e-3 * (distance < 0 ? -1 : 1);
  return distance;
};
const isHidden = ({ state }) => (index3) => {
  if (index3 >= state.currIndex + 8 || index3 <= state.currIndex - 8) {
    return true;
  } else {
    return false;
  }
};
const setTransform = ({ state }) => (type, deg, translateY = 0, time = DEFAULT_DURATION) => {
  if (type === "end") {
    state.touchTime = time;
  } else {
    state.touchTime = 0;
  }
  state.touchDeg = deg;
  state.scrollDistance = translateY;
};
const setMove = ({ state, props: props2, api: api2 }) => (move, type, time) => {
  const { optionHeight } = props2;
  let updateMove = move + state.transformY;
  if (type === "end") {
    if (updateMove > 0) {
      updateMove = 0;
    }
    if (updateMove < -(props2.column.length - 1) * +optionHeight) {
      updateMove = -(props2.column.length - 1) * +optionHeight;
    }
    let endMove = Math.round(updateMove / +optionHeight) * +optionHeight;
    let deg = `${(Math.abs(Math.round(endMove / +optionHeight)) + 1) * state.rotation}deg`;
    api2.setTransform(type, deg, endMove, time);
    state.currIndex = Math.abs(Math.round(endMove / +optionHeight)) + 1;
  } else {
    let deg = 0;
    let currentDeg = (-updateMove / +optionHeight + 1) * state.rotation;
    const maxDeg = (props2.column.length + 1) * state.rotation;
    const minDeg = 0;
    deg = clamp(currentDeg, minDeg, maxDeg);
    if (minDeg < deg && deg < maxDeg) {
      api2.setTransform(null, deg + "deg", updateMove, void 0);
      state.currIndex = Math.abs(Math.round(updateMove / +optionHeight)) + 1;
    }
  }
};
const setChooseValue = ({ props: props2, state, emit }) => () => {
  emit("change", props2.column[state.currIndex - 1]);
};
const modifyStatus = ({ state, props: props2, api: api2 }) => (type) => {
  const { column } = props2;
  let index3 = column.findIndex((columnItem) => columnItem[props2.fieldNames.value] === props2.value);
  state.currIndex = index3 === -1 ? 1 : index3 + 1;
  let move = index3 === -1 ? 0 : index3 * +props2.optionHeight;
  type && api2.setChooseValue();
  api2.setMove(-move);
};
const OptionStyle = ({ state }) => (option, column, offset) => {
  const currentIndex = state.currIndex - 1;
  return option === column[currentIndex + offset] || option === column[currentIndex - offset];
};
const MIN_DISTANCE = 10;
const getDirection = (x, y) => {
  if (x > y && x > MIN_DISTANCE)
    return "horizontal";
  if (y > x && y > MIN_DISTANCE)
    return "vertical";
  return "";
};
function useTouch({ ref }) {
  const startX = ref(0);
  const startY = ref(0);
  const moveX = ref(0);
  const moveY = ref(0);
  const deltaX = ref(0);
  const deltaY = ref(0);
  const offsetX = ref(0);
  const offsetY = ref(0);
  const direction = ref("");
  const isVertical = () => direction.value === "vertical";
  const isHorizontal = () => direction.value === "horizontal";
  const move = (event) => {
    const touchEvent = event.touches[0];
    deltaX.value = touchEvent.clientX - startX.value;
    deltaY.value = touchEvent.clientY - startY.value;
    moveY.value = touchEvent.clientY;
    moveX.value = touchEvent.clientX;
    offsetY.value = Math.abs(deltaY.value);
    offsetX.value = Math.abs(deltaX.value);
    if (!direction.value) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
  };
  const reset = () => {
    deltaX.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    deltaY.value = 0;
    direction.value = "";
  };
  const start = (event) => {
    reset();
    startY.value = event.touches[0].clientY;
    startX.value = event.touches[0].clientX;
  };
  return {
    start,
    move,
    reset,
    startY,
    startX,
    moveY,
    moveX,
    deltaY,
    deltaX,
    offsetY,
    offsetX,
    isVertical,
    direction,
    isHorizontal
  };
}
const api$3 = [
  "state",
  "touch",
  "OptionStyle",
  "setRollerStyle",
  "isHidden",
  "onTouchStart",
  "onTouchMove",
  "onTouchEnd",
  "setMove",
  "stopMomentum",
  "pxCheck"
];
const renderless$3 = (props2, { reactive, computed, watch, ref, onMounted }, { emit, vm }) => {
  const touch = useTouch({ ref });
  const state = reactive({
    touchParams: {
      startY: 0,
      endY: 0,
      startTime: 0,
      endTime: 0,
      lastY: 0,
      lastTime: 0
    },
    currIndex: 1,
    transformY: 0,
    scrollDistance: 0,
    rotation: 20,
    moving: false,
    touchDeg: 0,
    touchTime: 0,
    currentValue: computed(() => props2.column[state.currIndex - 1][props2.fieldNames.value]),
    touchTileStyle: computed(() => {
      const { optionHeight } = props2;
      return {
        transition: `transform ${state.touchTime}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${state.scrollDistance}px, 0)`,
        top: `calc(50% - ${+optionHeight / 2}px)`,
        height: `${optionHeight}px`
      };
    }),
    touchRollerStyle: computed(() => {
      return {
        transition: `transform ${state.touchTime}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `rotate3d(1, 0, 0, ${state.touchDeg})`,
        top: `calc(50% - ${+props2.optionHeight / 2}px)`
      };
    }),
    maskStyles: computed(() => {
      return {
        backgroundSize: `100% ${(+props2.visibleOptionNum - 1) * +props2.optionHeight / 2}px`
      };
    })
  });
  const api2 = {};
  Object.assign(api2, {
    state,
    touch,
    OptionStyle: OptionStyle({ state }),
    setRollerStyle: setRollerStyle({ state }),
    isHidden: isHidden({ state }),
    onTouchStart: onTouchStart({ state, props: props2, touch, vm }),
    onTouchMove: onTouchMove({ state, api: api2, touch }),
    onTouchEnd: onTouchEnd({ state, props: props2, api: api2, touch }),
    setMove: setMove({ state, props: props2, api: api2 }),
    stopMomentum: stopMomentum({ state, api: api2 }),
    setTransform: setTransform({ state }),
    setChooseValue: setChooseValue({ props: props2, state, emit }),
    modifyStatus: modifyStatus({ state, props: props2, api: api2 }),
    pxCheck,
    momentum
  });
  watch(
    () => props2.column,
    () => {
      if (props2.column && props2.column.length > 0) {
        state.transformY = 0;
        api2.modifyStatus(false);
      }
    },
    {
      deep: true
    }
  );
  watch(
    () => props2.value,
    () => {
      state.transformY = 0;
      api2.modifyStatus(false);
    },
    {
      deep: true
    }
  );
  onMounted(() => {
    api2.modifyStatus(false);
  });
  return api2;
};
function _createForOfIteratorHelperLoose$6(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$6(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$6(o, minLen);
}
function _arrayLikeToArray$6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$6 = function _export_sfc219(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$6(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
function _extends$6() {
  _extends$6 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6.apply(this, arguments);
}
var classes$1 = {
  "header-item": "cursor-pointer px-4 flex items-center justify-center min-w-[50px] h-full text-sm",
  "picker-column": "flex relative before:content-[''] before:absolute before:top-1/2 before:h-[var(--lineHeight)] before:w-full before:border-t before:border-b before:border-color-bg-3 before:scale-90 before:-translate-y-1/2",
  "picker-columnitem": "flex-1 h-full relative",
  "picker-bar": "flex h-12 items-center justify-between",
  "col-list": "relative block w-full h-full overflow-hidden text-center scrolling-touch",
  "col-roller": "absolute block top-1/2 w-full z1 -translate-y-1/2 [transform-style:preserve-3d] h-[var(--lineHeight)]",
  "col-roller-item": "block [backface-visibility:hidden] absolute top-0 w-full h-9 leading-9 text-color-text-primary truncate",
  "col-item-tile": "block text-center w-full truncate",
  "col-roller-mask": "absolute w-full h-full block [background-image:linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.4)),linear-gradient(0deg,rgba(255,255,255,0.9),rgba(255,255,255,0.4))] [background-position:top,bottom] bg-no-repeat z-1"
};
var _sfc_main$1$3 = defineComponent({
  name: $prefix + "CascaderSelectColumn",
  props: _extends$6({}, $props$1, {
    // 当前选中项
    value: [String, Number],
    columnsType: String,
    column: {
      type: Array,
      default: function _default13() {
        return [];
      }
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    },
    fieldNames: {
      type: Object,
      default: function _default24() {
        return {};
      }
    },
    disabled: Boolean,
    textColor: {
      type: Object,
      default: function _default33() {
        return {};
      }
    }
  }),
  emits: ["click", "change"],
  setup: function setup$119(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$3,
      api: api$3,
      classes: classes$1,
      mono: true
    });
  }
});
function _sfc_render$1$3(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      "data-tag": "tiny-cascader-picker__list",
      class: normalizeClass(_ctx.gcls("col-list")),
      onTouchstart: _cache[1] || (_cache[1] = function() {
        return _ctx.onTouchStart && _ctx.onTouchStart.apply(_ctx, arguments);
      }),
      onTouchmove: _cache[2] || (_cache[2] = function() {
        return _ctx.onTouchMove && _ctx.onTouchMove.apply(_ctx, arguments);
      }),
      onTouchend: _cache[3] || (_cache[3] = function() {
        return _ctx.onTouchEnd && _ctx.onTouchEnd.apply(_ctx, arguments);
      })
    },
    [createBaseVNode(
      "div",
      {
        ref: "roller",
        "data-tag": "tiny-cascader-picker-roller",
        class: normalizeClass(_ctx.gcls("col-roller")),
        style: normalizeStyle(_ctx.threeDimensional ? _ctx.state.touchRollerStyle : _ctx.state.touchTileStyle),
        onTransitionend: _cache[0] || (_cache[0] = function() {
          return _ctx.stopMomentum && _ctx.stopMomentum.apply(_ctx, arguments);
        })
      },
      [(openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList(_ctx.column, function(item, index3) {
          var _ctx$m, _ctx$m2, _ctx$m3, _ctx$m4;
          return openBlock(), createElementBlock("div", {
            key: item[_ctx.fieldNames.value] || index3
          }, [item && item[_ctx.fieldNames.text] && _ctx.threeDimensional ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              "data-tag": "tiny-cascader-picker-roller-item",
              class: normalizeClass(_ctx.m(_ctx.gcls("col-roller-item"), {
                "invisible opacity-0": _ctx.isHidden(index3 + 1)
              }, {
                "text-color-brand": item === _ctx.column[_ctx.state.currIndex - 1]
              }, {
                "text-color-icon-disabled": item === _ctx.column[_ctx.state.currIndex - 1] && _ctx.disabled
              })),
              style: normalizeStyle(_ctx.setRollerStyle(index3 + 1))
            },
            toDisplayString(item[_ctx.fieldNames.text]),
            7
            /* TEXT, CLASS, STYLE */
          )) : createCommentVNode("v-if", true), item && item[_ctx.fieldNames.text] && !_ctx.threeDimensional ? (openBlock(), createElementBlock(
            "div",
            {
              key: 1,
              "data-tag": "tiny-cascader-picker-roller-item-tile",
              class: normalizeClass(_ctx.m(_ctx.gcls("col-item-tile"), _ctx.textColor.default || "text-color-text-primary", (_ctx$m = {}, _ctx$m[_ctx.textColor.third || "text-color-icon-placeholder"] = _ctx.OptionStyle(item, _ctx.column, 2), _ctx$m), (_ctx$m2 = {}, _ctx$m2[_ctx.textColor.second || "text-color-icon-secondary"] = _ctx.OptionStyle(item, _ctx.column, 1), _ctx$m2), (_ctx$m3 = {}, _ctx$m3[_ctx.textColor.first || "text-color-icon-focus"] = _ctx.OptionStyle(item, _ctx.column, 0), _ctx$m3), (_ctx$m4 = {}, _ctx$m4[_ctx.textColor.disabled || "text-color-icon-disabled"] = _ctx.OptionStyle(item, _ctx.column, 0) && _ctx.disabled, _ctx$m4))),
              style: normalizeStyle({
                height: _ctx.pxCheck(_ctx.optionHeight),
                lineHeight: _ctx.pxCheck(_ctx.optionHeight)
              })
            },
            toDisplayString(item[_ctx.fieldNames.text]),
            7
            /* TEXT, CLASS, STYLE */
          )) : createCommentVNode("v-if", true)]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    ), createBaseVNode(
      "div",
      {
        "data-tag": "tiny-cascader-picker-roller-mask",
        class: normalizeClass(_ctx.gcls("col-roller-mask")),
        style: normalizeStyle(_ctx.state.maskStyles)
      },
      null,
      6
      /* CLASS, STYLE */
    )],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
var PickerColumn$1 = /* @__PURE__ */ _export_sfc$6(_sfc_main$1$3, [["render", _sfc_render$1$3]]);
var _sfc_main$6 = defineComponent({
  components: {
    PickerColumn: PickerColumn$1,
    TinyActionSheet: ActionSheet,
    TinyButton: Button
  },
  emits: ["cancel", "change", "confirm", "update:modelValue", "update:visible"],
  props: [].concat(props, ["modelValue", "options", "threeDimensional", "swipeDuration", "visibleOptionNum", "optionHeight", "fieldNames", "visible", "valueType", "valueField", "textField", "childrenField", "disabled", "textColor", "lockScroll", "customClass", "panelCustomClass", "type"]),
  setup: function setup22(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$4,
      api: api$4,
      classes: classes$1
    });
  }
});
var _hoisted_1$5 = {
  "data-tag": "tiny-mobile-cascader-select"
};
var _hoisted_2$5 = {
  "data-tag": "tiny-cascader-select-picker",
  class: "relative text-sm"
};
var _hoisted_3$4 = {
  class: "w-full h-11 mt-4 flex justify-center items-center",
  "data-tag": "tiny-mobile-cascader-select-button"
};
function _sfc_render$6(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_picker_column = resolveComponent("picker-column");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _component_tiny_action_sheet = resolveComponent("tiny-action-sheet");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [createVNode(_component_tiny_action_sheet, {
    "custom-class": _ctx.m("rounded-t-lg bg-color-bg-1", _ctx.customClass),
    "lock-scroll": _ctx.lockScroll,
    visible: _ctx.state.actionSheetVisible,
    "onUpdate:visible": _cache[1] || (_cache[1] = function($event) {
      return _ctx.state.actionSheetVisible = $event;
    })
  }, {
    "header-left": withCtx(function() {
      return [renderSlot(_ctx.$slots, "header-left")];
    }),
    default: withCtx(function() {
      return [createBaseVNode("div", {
        "data-tag": "tiny-mobile-cascader-select-body",
        class: "w-full h-max rounded-t-lg bg-color-bg-1 select-none overflow-hidden",
        onClick: _cache[0] || (_cache[0] = withModifiers(function() {
        }, ["stop"]))
      }, [createBaseVNode(
        "div",
        {
          "data-tag": "tiny-mobile-cascader-select-selectpanel",
          ref: "selectPanel",
          class: normalizeClass(_ctx.m("w-full h-max grid", _ctx.panelCustomClass))
        },
        [createBaseVNode("div", _hoisted_2$5, [renderSlot(_ctx.$slots, "top"), createBaseVNode(
          "div",
          {
            "data-tag": "tiny-cascader-picker__column",
            class: normalizeClass(_ctx.gcls("picker-column")),
            style: normalizeStyle(_ctx.columnStyle)
          },
          [(openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.columnsList, function(column, columnIndex) {
              return openBlock(), createElementBlock(
                "div",
                {
                  key: columnIndex,
                  "data-tag": "tiny-cascader-picker__columnitem",
                  class: normalizeClass(_ctx.gcls("picker-columnitem"))
                },
                [columnIndex > 0 ? renderSlot(_ctx.$slots, "split", {
                  key: 0
                }) : createCommentVNode("v-if", true), createVNode(_component_picker_column, {
                  ref_for: true,
                  ref: "swipeRef",
                  column,
                  disabled: _ctx.isDisabled,
                  "text-color": _ctx.textColor,
                  "columns-type": _ctx.columnsType,
                  "field-names": _ctx.columnFieldNames,
                  value: _ctx.defaultValues[columnIndex],
                  "three-dimensional": _ctx.threeDimensional,
                  "swipe-duration": _ctx.swipeDuration,
                  "visible-option-num": _ctx.visibleOptionNum,
                  "option-height": _ctx.optionHeight,
                  onChange: function onChange2(option) {
                    _ctx.changeHandler(columnIndex, option);
                  }
                }, null, 8, ["column", "disabled", "text-color", "columns-type", "field-names", "value", "three-dimensional", "swipe-duration", "visible-option-num", "option-height", "onChange"])],
                2
                /* CLASS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          6
          /* CLASS, STYLE */
        ), renderSlot(_ctx.$slots, "default")])],
        2
        /* CLASS */
      ), createBaseVNode("div", _hoisted_3$4, [createVNode(_component_tiny_button, {
        type: "primary",
        size: "large",
        "custom-class": _ctx.m("h-10 sm:h-10 w-full sm:w-auto mx-4 sm:mx-0 flex justify-center items-center", _ctx.isDisabled ? "bg-color-icon-disabled" : "bg-color-icon-focus"),
        disabled: _ctx.isDisabled,
        onClick: _ctx.confirm
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.button.confirm")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["custom-class", "disabled", "onClick"])])])];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["custom-class", "lock-scroll", "visible"])]);
}
var mobileFirst$1 = /* @__PURE__ */ _export_sfc$6(_sfc_main$6, [["render", _sfc_render$6]]);
function _extends$5() {
  _extends$5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
var $constants$3 = {};
var template$3 = function template27() {
  return mobileFirst$1;
};
var CascaderSelect = {
  name: $prefix + "CascaderSelect",
  props: _extends$5({}, $props$1, {
    _constants: {
      type: Object,
      default: function _default14() {
        return $constants$3;
      }
    },
    modelValue: {
      type: Array,
      default: function _default25() {
        return [];
      }
    },
    options: {
      type: Array,
      default: function _default34() {
        return [];
      }
    },
    threeDimensional: {
      type: Boolean,
      default: false
    },
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 5
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    },
    fieldNames: {
      type: Object,
      default: function _default42() {
        return {
          text: "label",
          value: "id",
          children: "children"
        };
      }
    },
    visible: Boolean,
    valueType: {
      type: String,
      default: "number"
    },
    valueField: {
      type: String,
      default: "id"
    },
    textField: {
      type: String,
      default: "label"
    },
    childrenField: {
      type: String,
      default: "children"
    },
    disabled: Function,
    textColor: {
      type: Object,
      default: function _default52() {
        return {
          default: "",
          first: "",
          second: "",
          third: "",
          disabled: ""
        };
      }
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    customClass: [String, Object, Array],
    panelCustomClass: [String, Object, Array],
    type: {
      type: String,
      validator: function validator5(value) {
        return ~["cascade", "single"].indexOf(value);
      },
      default: "single"
    }
  }),
  setup: function setup8(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$3
    });
  }
};
var version$6 = "3.16.0";
CascaderSelect.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
CascaderSelect.install = function(Vue) {
  Vue.component(CascaderSelect.name, CascaderSelect);
};
CascaderSelect.version = version$6;
function _createForOfIteratorHelperLoose$5(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$5(o, minLen);
}
function _arrayLikeToArray$5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$5 = function _export_sfc220(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$5(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
function _extends$4() {
  _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
var _sfc_main$5 = defineComponent({
  name: $prefix + "TimePickerMobile",
  components: {
    TinyCascaderSelect: CascaderSelect
  },
  emits: ["update:modelValue", "confirm", "update:visible", "clear"],
  props: _extends$4({}, $props$1, {
    modelValue: Array,
    visible: {
      type: Boolean,
      default: false
    },
    cycleRoll: {
      type: Boolean,
      default: true
    },
    disabled: Function,
    lockScroll: {
      type: Boolean,
      default: true
    },
    step: {
      type: Object,
      default: function _default15() {
        return {
          hour: 1,
          minute: 1,
          second: 1
        };
      }
    },
    showSeconds: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    }
  }),
  setup: function setup$120(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$5,
      api: api$5,
      mono: true
    });
  }
});
var _hoisted_1$4 = {
  "data-tag": "tiny-time-picker-mobile"
};
var _hoisted_2$4 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    "data-tag": "tiny-time-picker-split",
    class: "h-full w-1 flex items-center justify-center absolute left-0 -ml-0.5 text-color-text-primary select-none"
  },
  " : ",
  -1
  /* HOISTED */
);
function _sfc_render$5(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_cascader_select = resolveComponent("tiny-cascader-select");
  return withDirectives((openBlock(), createElementBlock(
    "div",
    _hoisted_1$4,
    [createVNode(_component_tiny_cascader_select, {
      ref: "cascaderSelect",
      modelValue: _ctx.state.dateArr,
      "onUpdate:modelValue": [_cache[1] || (_cache[1] = function($event) {
        return _ctx.state.dateArr = $event;
      }), _ctx.confirm],
      "cycle-roll": _ctx.cycleRoll,
      options: _ctx.state.options,
      disabled: _ctx.disabled,
      "lock-scroll": _ctx.lockScroll,
      "custom-panel-class": "px-4 pb-4",
      visible: _ctx.state.visible,
      "onUpdate:visible": _ctx.updateVisible
    }, {
      split: withCtx(function() {
        return [_hoisted_2$4];
      }),
      "header-left": withCtx(function() {
        return [_ctx.clearable ? (openBlock(), createElementBlock(
          "span",
          {
            key: 0,
            class: "cursor-pointer text-color-brand",
            onClick: _cache[0] || (_cache[0] = function() {
              return _ctx.clear && _ctx.clear.apply(_ctx, arguments);
            })
          },
          toDisplayString(_ctx.t("ui.datepicker.clear")),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)];
      }),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "cycle-roll", "options", "disabled", "lock-scroll", "visible", "onUpdate:visible", "onUpdate:modelValue"])],
    512
    /* NEED_PATCH */
  )), [[vShow, _ctx.visible]]);
}
var TimePickerMobile = /* @__PURE__ */ _export_sfc$5(_sfc_main$5, [["render", _sfc_render$5]]);
var version$5 = "3.16.0";
TimePickerMobile.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
TimePickerMobile.install = function(Vue) {
  Vue.component(TimePickerMobile.name, TimePickerMobile);
};
TimePickerMobile.version = version$5;
function _createForOfIteratorHelperLoose$4(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$4(o, minLen);
}
function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$4 = function _export_sfc221(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$4(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
var _sfc_main$2$1 = {
  inheritAttrs: false,
  components: {},
  props: {
    data: Object
  }
};
var _hoisted_1$2$1 = {
  class: "w-full flex"
};
function _sfc_render$2$1(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2$1, [renderSlot(_ctx.$slots, "default", {
    data: $props2.data
  }, function() {
    return [createTextVNode(
      toDisplayString($props2.data.value),
      1
      /* TEXT */
    )];
  })]);
}
var Option = /* @__PURE__ */ _export_sfc$4(_sfc_main$2$1, [["render", _sfc_render$2$1]]);
var _sfc_main$1$2 = defineComponent({
  components: {
    TinyOption: Option,
    TinyActionSheet: ActionSheet,
    TinyTimePickerMobile: TimePickerMobile,
    TinyRecycleScroller: RecycleScroller,
    TinyButton: Button
  },
  emits: ["click", "confirm", "update:visible", "update:modelValue", "time-confirm"],
  props: [].concat(props, ["modelValue", "visible", "title", "type", "lockScroll", "pickerOptions", "customClass", "clearable", "step", "rangeSeparator", "endPlaceholder", "showTimeSecond"]),
  setup: function setup$121(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$6,
      api: api$6
    });
  }
});
var _hoisted_1$1$2 = {
  "data-tag": "tiny-date-picker-mobile"
};
var _hoisted_2$1$2 = {
  "data-tag": "tiny-date-picker-inner",
  class: /* @__PURE__ */ normalizeClass(["flex flex-col flex-auto h-full"])
};
var _hoisted_3$1$1 = {
  "data-tag": "date-picker-header",
  class: "flex leading-6 py-2.5 px-4 text-sm items-center text-center border-b border-color-bg-4 shadow-sm"
};
var _hoisted_4$1 = {
  ref: "datePickerBody",
  "data-tag": "date-picker-body",
  class: "flex-auto overflow-hidden px-4"
};
var _hoisted_5$1 = {
  class: "mt-4"
};
var _hoisted_6$1 = {
  class: "text-xl leading-7 text-color-text-primary"
};
var _hoisted_7$1 = {
  class: "text-center leading-9 text-xs font-medium"
};
var _hoisted_8$1 = ["onClick"];
var _hoisted_9$1 = {
  "data-tag": "date-picker-footer",
  class: "flex flex-none flex-col items-center justify-center p-4 border-t border-color-bg-4 shadow-sm"
};
var _hoisted_10$1 = {
  key: 0,
  "data-tag": "rang-box",
  class: "w-full"
};
var _hoisted_11$1 = {
  class: "w-full flex mb-4 h-6 leading-6 text-base text-center"
};
var _hoisted_12$1 = {
  class: "min-w-[theme(spacing.32)]"
};
var _hoisted_13$1 = {
  class: "flex-auto min-w-[theme(spacing.4)]"
};
var _hoisted_14$1 = {
  key: 0,
  class: "h-9 border-l-0.5 inline-block rotate-45 relative top-6 border-color-bg-2"
};
var _hoisted_15$1 = {
  key: 1,
  class: "text-center"
};
var _hoisted_16$1 = {
  class: "min-w-[theme(spacing.32)]"
};
var _hoisted_17 = {
  key: 0,
  class: "text-color-icon-placeholder"
};
var _hoisted_18 = {
  key: 1
};
var _hoisted_19 = {
  key: 0,
  class: "w-full h-9 flex mb-4 leading-9 text-base text-center"
};
var _hoisted_20 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "flex-auto min-w-[theme(spacing.4)]"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_21 = {
  key: 1,
  "data-tag": "datetime-box",
  class: "w-full"
};
var _hoisted_22 = {
  class: "w-full flex mb-4 leading-6 text-base text-center"
};
var _hoisted_23 = {
  class: "min-w-[theme(spacing.32)]"
};
var _hoisted_24 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "flex-auto min-w-[theme(spacing.4)]"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_25 = {
  class: "w-full text-center"
};
function _sfc_render$1$2(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_option = resolveComponent("tiny-option");
  var _component_tiny_recycle_scroller = resolveComponent("tiny-recycle-scroller");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _component_tiny_action_sheet = resolveComponent("tiny-action-sheet");
  var _component_tiny_time_picker_mobile = resolveComponent("tiny-time-picker-mobile");
  return openBlock(), createElementBlock("div", _hoisted_1$1$2, [createVNode(_component_tiny_action_sheet, {
    ref: "actionSheet",
    title: _ctx.title,
    "custom-class": _ctx.m("h-full max-h-full rounded-none min-h-[95vh]", _ctx.customClass),
    "lock-scroll": _ctx.lockScroll,
    visible: _ctx.visible,
    "onUpdate:visible": _cache[4] || (_cache[4] = function($event) {
      return _ctx.$emit("update:visible", $event);
    })
  }, createSlots({
    default: withCtx(function() {
      return [createBaseVNode("div", _hoisted_2$1$2, [createBaseVNode("div", _hoisted_3$1$1, [(openBlock(), createElementBlock(
        Fragment,
        null,
        renderList(7, function(item, index3) {
          return createBaseVNode(
            "div",
            {
              key: index3,
              class: "flex-1"
            },
            toDisplayString(_ctx.t("ui.calendarBar.week." + index3)),
            1
            /* TEXT */
          );
        }),
        64
        /* STABLE_FRAGMENT */
      ))]), createBaseVNode(
        "div",
        _hoisted_4$1,
        [createVNode(_component_tiny_recycle_scroller, {
          ref: "recycleScroller",
          class: "h-full scrollbar-size-0",
          "key-field": "id",
          style: normalizeStyle({
            height: _ctx.state.scrollerHeight ? _ctx.state.scrollerHeight + "px" : null
          }),
          items: _ctx.state.months,
          "item-size": _ctx.state.itemSize,
          buffer: _ctx.state.buffer,
          onScrollStart: _ctx.scrollStart,
          onScrollEnd: _ctx.scrollEnd
        }, {
          default: withCtx(function(scopeSlots) {
            return [createBaseVNode("div", _hoisted_5$1, [createBaseVNode(
              "div",
              _hoisted_6$1,
              toDisplayString(_ctx.formatDate(scopeSlots.item.yearMonth, _ctx.t("ui.datepicker.yearMonth", {
                year: "yyyy",
                month: "MM"
              }))),
              1
              /* TEXT */
            ), createBaseVNode("div", _hoisted_7$1, [(openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.getWeeksByMonth(scopeSlots.item.yearMonth), function(item, week) {
                return openBlock(), createElementBlock("div", {
                  key: week,
                  class: normalizeClass(["flex mt-2"])
                }, [(openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList(7, function(item2, index3) {
                    return createBaseVNode("div", {
                      key: index3,
                      class: normalizeClass(["flex-1 h-9 cursor-pointer", index3 === 0 || index3 === 6 ? "text-color-text-placeholder" : "text-color-text-primary"]),
                      onClick: withModifiers(function($event) {
                        return _ctx.selectOption({
                          value: scopeSlots.item.yearMonth,
                          index: index3 + week * 7
                        });
                      }, ["stop"])
                    }, [createVNode(_component_tiny_option, {
                      data: _ctx.getDate({
                        yearMonth: scopeSlots.item.yearMonth,
                        index: index3 + week * 7
                      })
                    }, {
                      default: withCtx(function(_ref) {
                        var data = _ref.data;
                        return [createBaseVNode(
                          "div",
                          {
                            class: normalizeClass(["flex-1", {
                              "bg-color-info-primary-subtler": !data.disabled && _ctx.state.date.length === 2 && ["end", "inner"].includes(_ctx.getSelectedPosition(data.value))
                            }, {
                              "rounded-l": index3 === 0
                            }])
                          },
                          null,
                          2
                          /* CLASS */
                        ), createBaseVNode(
                          "div",
                          {
                            class: normalizeClass(_ctx.m("w-9 h-9", {
                              "text-color-brand border-0.5 border-current rounded": data.isToday
                            }, {
                              "bg-color-info-primary-subtler": ["inner"].includes(_ctx.getSelectedPosition(data.value))
                            }, {
                              "bg-color-brand text-color-text-inverse rounded": ["start", "end"].includes(_ctx.getSelectedPosition(data.value))
                            }, {
                              "bg-white text-color-text-disabled cursor-not-allowed": data.disabled
                            }))
                          },
                          [renderSlot(_ctx.$slots, "default", {
                            data
                          }, function() {
                            return [createTextVNode(
                              toDisplayString(data.day),
                              1
                              /* TEXT */
                            )];
                          })],
                          2
                          /* CLASS */
                        ), createBaseVNode(
                          "div",
                          {
                            class: normalizeClass(["flex-1", {
                              "bg-color-info-primary-subtler": !data.disabled && _ctx.state.date.length === 2 && _ctx.state.selected.length > 1 && ["start", "inner"].includes(_ctx.getSelectedPosition(data.value))
                            }, {
                              "rounded-r": index3 === 6
                            }])
                          },
                          null,
                          2
                          /* CLASS */
                        )];
                      }),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["data"])], 10, _hoisted_8$1);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))])])];
          }),
          _: 3
          /* FORWARDED */
        }, 8, ["style", "items", "item-size", "buffer", "onScrollStart", "onScrollEnd"])],
        512
        /* NEED_PATCH */
      ), createBaseVNode("div", _hoisted_9$1, [["datetimerange", "daterange"].includes(_ctx.type) && _ctx.state.date.length ? (openBlock(), createElementBlock("div", _hoisted_10$1, [createBaseVNode("div", _hoisted_11$1, [createBaseVNode(
        "div",
        _hoisted_12$1,
        toDisplayString(_ctx.formatDate(_ctx.state.date[0], _ctx.t("ui.datepicker.yearMonthDay", {
          year: "yyyy",
          month: "MM",
          day: "dd"
        }))),
        1
        /* TEXT */
      ), createBaseVNode("div", _hoisted_13$1, [["datetimerange"].includes(_ctx.type) ? (openBlock(), createElementBlock("div", _hoisted_14$1)) : (openBlock(), createElementBlock("div", _hoisted_15$1, [typeof _ctx.rangeSeparator === "string" ? (openBlock(), createElementBlock(
        Fragment,
        {
          key: 0
        },
        [createTextVNode(
          toDisplayString(_ctx.rangeSeparator),
          1
          /* TEXT */
        )],
        64
        /* STABLE_FRAGMENT */
      )) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.rangeSeparator), {
        key: 1
      }))]))]), createBaseVNode("div", _hoisted_16$1, [_ctx.state.btnDisabled ? (openBlock(), createElementBlock(
        "span",
        _hoisted_17,
        toDisplayString(_ctx.endPlaceholder),
        1
        /* TEXT */
      )) : (openBlock(), createElementBlock(
        "span",
        _hoisted_18,
        toDisplayString(_ctx.formatDate(_ctx.state.date[1], _ctx.t("ui.datepicker.yearMonthDay", {
          year: "yyyy",
          month: "MM",
          day: "dd"
        }))),
        1
        /* TEXT */
      ))])]), _ctx.type === "datetimerange" ? (openBlock(), createElementBlock("div", _hoisted_19, [createBaseVNode(
        "div",
        {
          class: "w-32 bg-color-bg-2",
          onClick: _cache[1] || (_cache[1] = withModifiers(function($event) {
            return _ctx.timeToggle(0);
          }, ["stop"]))
        },
        toDisplayString(_ctx.state.timeList[0].join(":")),
        1
        /* TEXT */
      ), _hoisted_20, createBaseVNode(
        "div",
        {
          class: "w-32 bg-color-bg-2",
          onClick: _cache[2] || (_cache[2] = withModifiers(function($event) {
            return _ctx.timeToggle(1);
          }, ["stop"]))
        },
        toDisplayString(_ctx.state.timeList[1].join(":")),
        1
        /* TEXT */
      )])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), ["datetime"].includes(_ctx.type) && _ctx.state.date ? (openBlock(), createElementBlock("div", _hoisted_21, [createBaseVNode("div", _hoisted_22, [createBaseVNode(
        "div",
        _hoisted_23,
        toDisplayString(_ctx.formatDate(_ctx.state.date, _ctx.t("ui.datepicker.yearMonthDay", {
          year: "yyyy",
          month: "MM",
          day: "dd"
        }))),
        1
        /* TEXT */
      ), _hoisted_24, createBaseVNode(
        "div",
        {
          class: "w-32 bg-color-bg-2",
          onClick: _cache[3] || (_cache[3] = withModifiers(function($event) {
            return _ctx.timeToggle(0);
          }, ["stop"]))
        },
        toDisplayString(_ctx.state.timeList[0].join(":")),
        1
        /* TEXT */
      )])])) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_25, [createVNode(_component_tiny_button, {
        tiny_mode: "mobile-first",
        "custom-class": "w-full",
        disabled: _ctx.state.btnDisabled,
        type: "primary",
        size: "medium",
        "reset-time": 0,
        onClick: _ctx.confirm
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.button.confirm")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["disabled", "onClick"])])])])];
    }),
    _: 2
    /* DYNAMIC */
  }, [_ctx.clearable ? {
    name: "header-left",
    fn: withCtx(function() {
      return [createBaseVNode(
        "div",
        {
          class: "cursor-pointer text-color-brand",
          onClick: _cache[0] || (_cache[0] = function() {
            return _ctx.clear && _ctx.clear.apply(_ctx, arguments);
          })
        },
        toDisplayString(_ctx.t("ui.datepicker.clear")),
        1
        /* TEXT */
      )];
    }),
    key: "0"
  } : void 0]), 1032, ["title", "custom-class", "lock-scroll", "visible"]), createVNode(_component_tiny_time_picker_mobile, {
    modelValue: _ctx.state.time,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function($event) {
      return _ctx.state.time = $event;
    }),
    title: _ctx.t("ui.datepicker.selectTime"),
    step: _ctx.step,
    "show-seconds": _ctx.showTimeSecond,
    visible: _ctx.state.timeVisible,
    "onUpdate:visible": _cache[6] || (_cache[6] = function($event) {
      return _ctx.state.timeVisible = $event;
    }),
    onConfirm: _ctx.timeConfirm
  }, null, 8, ["modelValue", "title", "step", "show-seconds", "visible", "onConfirm"])]);
}
var NormalTemplate = /* @__PURE__ */ _export_sfc$4(_sfc_main$1$2, [["render", _sfc_render$1$2]]);
var _sfc_main$4 = defineComponent({
  components: {
    TinyOption: Option,
    TinyActionSheet: ActionSheet,
    TinyRecycleScroller: RecycleScroller,
    TinyButton: Button
  },
  emits: ["click", "confirm", "update:visible", "update:modelValue", "time-confirm"],
  props: [].concat(props, ["modelValue", "visible", "title", "type", "lockScroll", "pickerOptions"]),
  setup: function setup23(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$6,
      api: api$6
    });
  }
});
var _hoisted_1$3 = {
  "data-tag": "tiny-date-picker-mobile year-month"
};
var _hoisted_2$3 = {
  "data-tag": "tiny-date-picker-inner",
  class: /* @__PURE__ */ normalizeClass(["flex flex-col overflow-hidden"])
};
var _hoisted_3$3 = {
  ref: "datePickerBody",
  "data-tag": "date-picker-body",
  class: "flex-auto overflow-hidden px-4"
};
var _hoisted_4$2 = {
  class: "mt-4"
};
var _hoisted_5$2 = {
  class: "text-xl leading-7"
};
var _hoisted_6$2 = {
  class: "text-center leading-9 text-xs font-medium"
};
var _hoisted_7 = ["onClick"];
var _hoisted_8 = {
  "data-tag": "date-picker-footer",
  class: "w-full flex-none flex flex-col items-center justify-center p-4 border-t border-color-bg-4 shadow-sm"
};
var _hoisted_9 = {
  key: 0,
  "data-tag": "rang-box",
  class: "w-full"
};
var _hoisted_10 = {
  class: "w-full flex mb-4 h-6 leading-6 text-base text-center"
};
var _hoisted_11 = {
  class: "min-w-[theme(spacing.32)]"
};
var _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "flex-auto min-w-[theme(spacing.4)] justify-center"
  },
  "~",
  -1
  /* HOISTED */
);
var _hoisted_13 = {
  class: "min-w-[theme(spacing.32)]"
};
var _hoisted_14 = {
  key: 0,
  class: "text-color-icon-placeholder"
};
var _hoisted_15 = {
  key: 1
};
var _hoisted_16 = {
  class: "w-full text-center"
};
function _sfc_render$4(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_option = resolveComponent("tiny-option");
  var _component_tiny_recycle_scroller = resolveComponent("tiny-recycle-scroller");
  var _component_tiny_button = resolveComponent("tiny-button");
  var _component_tiny_action_sheet = resolveComponent("tiny-action-sheet");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(_component_tiny_action_sheet, {
    "custom-class": "h-full",
    title: _ctx.title,
    "lock-scroll": _ctx.lockScroll,
    visible: _ctx.visible,
    "onUpdate:visible": _cache[0] || (_cache[0] = function($event) {
      return _ctx.$emit("update:visible", $event);
    })
  }, {
    default: withCtx(function() {
      return [createBaseVNode("div", _hoisted_2$3, [createBaseVNode(
        "div",
        _hoisted_3$3,
        [createVNode(_component_tiny_recycle_scroller, {
          ref: "recycleScroller",
          "key-field": "id",
          class: "h-full scrollbar-size-0",
          style: normalizeStyle({
            height: _ctx.state.scrollerHeight ? _ctx.state.scrollerHeight + "px" : null
          }),
          items: _ctx.state.computedYears,
          "item-size": _ctx.state.itemSize,
          buffer: _ctx.state.buffer,
          onScrollStart: _ctx.scrollStart,
          onScrollEnd: _ctx.scrollEnd
        }, {
          default: withCtx(function(scopeSlots) {
            return [createBaseVNode("div", _hoisted_4$2, [createBaseVNode(
              "div",
              _hoisted_5$2,
              toDisplayString(scopeSlots.item.year) + toDisplayString(_ctx.t("ui.datepicker.year")),
              1
              /* TEXT */
            ), createBaseVNode("div", _hoisted_6$2, [(openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(2, function(v, row) {
                return createBaseVNode("div", {
                  key: row,
                  class: normalizeClass(["flex mt-2"])
                }, [(openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList(6, function(v2, col) {
                    return createBaseVNode("div", {
                      key: col,
                      class: normalizeClass(["flex-1 h-9 cursor-pointer"]),
                      onClick: withModifiers(function($event) {
                        return _ctx.selectOption({
                          value: scopeSlots.item.year,
                          index: row * 6 + col
                        });
                      }, ["stop"])
                    }, [createVNode(_component_tiny_option, {
                      data: _ctx.state.years[scopeSlots.item.year][row * 6 + col]
                    }, {
                      default: withCtx(function(_ref2) {
                        var data = _ref2.data;
                        return [createBaseVNode(
                          "div",
                          {
                            class: normalizeClass(["flex-1", {
                              "bg-color-info-primary-subtler": !data.disabled && _ctx.state.date.length === 2 && ["end", "inner"].includes(_ctx.getSelectedPosition(data.value))
                            }])
                          },
                          null,
                          2
                          /* CLASS */
                        ), createBaseVNode(
                          "div",
                          {
                            class: normalizeClass(_ctx.m("w-9 h-9", {
                              "text-color-brand border-0.5 border-current": data.isToday
                            }, {
                              "bg-color-info-primary-subtler": ["inner"].includes(_ctx.getSelectedPosition(data.value))
                            }, {
                              "bg-color-brand text-color-text-inverse": ["start", "end"].includes(_ctx.getSelectedPosition(data.value))
                            }, {
                              "bg-white text-color-text-disabled cursor-not-allowed": data.disabled
                            }))
                          },
                          [renderSlot(_ctx.$slots, "default", {
                            data
                          }, function() {
                            return [createTextVNode(
                              toDisplayString(data.month),
                              1
                              /* TEXT */
                            )];
                          })],
                          2
                          /* CLASS */
                        ), createBaseVNode(
                          "div",
                          {
                            class: normalizeClass(["flex-1", {
                              "bg-color-info-primary-subtler": !data.disabled && _ctx.state.date.length === 2 && _ctx.state.selected.length > 1 && ["start", "inner"].includes(_ctx.getSelectedPosition(data.value))
                            }])
                          },
                          null,
                          2
                          /* CLASS */
                        )];
                      }),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["data"])], 8, _hoisted_7);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))])])];
          }),
          _: 3
          /* FORWARDED */
        }, 8, ["style", "items", "item-size", "buffer", "onScrollStart", "onScrollEnd"])],
        512
        /* NEED_PATCH */
      ), createBaseVNode("div", _hoisted_8, [["year-month-range"].includes(_ctx.type) && _ctx.state.date.length ? (openBlock(), createElementBlock("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode(
        "div",
        _hoisted_11,
        toDisplayString(_ctx.formatDate(_ctx.state.date[0], _ctx.t("ui.datepicker.yearMonth", {
          year: "yyyy",
          month: "MM"
        }))),
        1
        /* TEXT */
      ), _hoisted_12, createBaseVNode("div", _hoisted_13, [_ctx.state.btnDisabled ? (openBlock(), createElementBlock(
        "span",
        _hoisted_14,
        toDisplayString(_ctx.t("ui.datepicker.endTime")),
        1
        /* TEXT */
      )) : (openBlock(), createElementBlock(
        "span",
        _hoisted_15,
        toDisplayString(_ctx.formatDate(_ctx.state.date[1], _ctx.t("ui.datepicker.yearMonth", {
          year: "yyyy",
          month: "MM"
        }))),
        1
        /* TEXT */
      ))])])])) : createCommentVNode("v-if", true), createBaseVNode("div", _hoisted_16, [createVNode(_component_tiny_button, {
        tiny_mode: "mobile-first",
        "custom-class": "w-full",
        disabled: _ctx.state.btnDisabled,
        type: "primary",
        size: "medium",
        "reset-time": 0,
        onClick: _ctx.confirm
      }, {
        default: withCtx(function() {
          return [createTextVNode(
            toDisplayString(_ctx.t("ui.button.confirm")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["disabled", "onClick"])])])])];
    }),
    _: 3
    /* FORWARDED */
  }, 8, ["title", "lock-scroll", "visible"])]);
}
var YearMonthTemplate = /* @__PURE__ */ _export_sfc$4(_sfc_main$4, [["render", _sfc_render$4]]);
var $constants$2 = {
  TYPE: {
    DATE: "date",
    DATE_TIME: "datetime",
    DATE_RANGE: "daterange",
    DATE_TIME_RANGE: "datetimerange",
    YEAR_MONTH_RANGE: "year-month-range",
    YEAR_MONTH: "year-month"
  }
};
var template$2 = function template28(mode, props2) {
  var _$constants$TYPE = $constants$2.TYPE, YEAR_MONTH_RANGE = _$constants$TYPE.YEAR_MONTH_RANGE, YEAR_MONTH = _$constants$TYPE.YEAR_MONTH;
  return [YEAR_MONTH_RANGE, YEAR_MONTH].includes(props2.type) ? YearMonthTemplate : NormalTemplate;
};
var DatePickerMobile = defineComponent({
  name: $prefix + "DatePickerMobile",
  props: _extends$3({}, $props$1, {
    _constants: {
      type: Object,
      default: function _default16() {
        return $constants$2;
      }
    },
    modelValue: [Number, String, Array, Date],
    visible: {
      type: Boolean,
      default: false
    },
    title: String,
    type: {
      type: String,
      default: "date",
      validator: function validator6(value) {
        return !value || ~Object.values($constants$2.TYPE).indexOf(value);
      }
    },
    clearable: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    pickerOptions: {
      type: Object,
      default: function _default26() {
        return {
          disabledDate: null
        };
      }
    },
    customClass: [String, Object, Array],
    step: {
      type: Object,
      default: function _default35() {
        return {
          hour: 1,
          minute: 1,
          second: 1
        };
      }
    },
    endPlaceholder: {
      type: String,
      default: function _default43() {
        return t("ui.datepicker.endTime");
      }
    },
    rangeSeparator: {
      type: [Object, String],
      default: "~"
    },
    showTimeSecond: {
      type: Boolean,
      default: true
    }
  }),
  setup: function setup32(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$2
    });
  }
});
var version$4 = "3.16.0";
DatePickerMobile.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
DatePickerMobile.install = function(Vue) {
  Vue.component(DatePickerMobile.name, DatePickerMobile);
};
DatePickerMobile.version = version$4;
var pickerProps = {
  type: {
    type: String,
    default: "date"
  },
  tabindex: {
    type: String,
    default: "1"
  },
  timeArrowControl: Boolean,
  timeEditable: {
    type: Boolean,
    default: true
  },
  size: String,
  format: String,
  valueFormat: String,
  timeFormat: String,
  readonly: Boolean,
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  prefixIcon: Object,
  suffixIcon: Object,
  label: String,
  shape: String,
  tip: String,
  clearIcon: {
    type: Object,
    default: function _default17() {
      return index$n();
    }
  },
  name: {
    default: "",
    validator: function validator7(value) {
      return value === null || value === void 0 || typeof value === "string" || value instanceof String || Array.isArray(value) && value.length === 2 && value.every(function(item) {
        return typeof item === "string" || item instanceof String;
      });
    }
  },
  clearable: {
    type: Boolean,
    default: true
  },
  changeOnConfirm: {
    type: Boolean,
    default: false
  },
  disabled: Boolean,
  id: {
    default: "",
    validator: function validator23(value) {
      return value === null || value === void 0 || typeof value === "string" || value instanceof String || Array.isArray(value) && value.length === 2 && value.every(function(item) {
        return typeof item === "string" || item instanceof String;
      });
    }
  },
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  align: {
    type: String,
    default: "left"
  },
  editable: {
    type: Boolean,
    default: true
  },
  modelValue: {},
  defaultValue: {},
  defaultTime: {},
  rangeSeparator: {
    type: [Object, String],
    default: "-"
  },
  unlinkPanels: Boolean,
  pickerOptions: {},
  validateEvent: {
    type: Boolean,
    default: true
  },
  isRange: Boolean,
  arrowControl: Boolean,
  timezoneData: {},
  showTimezone: {
    type: Boolean,
    default: false
  },
  defaultTimezone: String,
  isutc8: {
    type: Boolean,
    default: false
  },
  dbTimezone: Number,
  timezone: Number,
  timezoneOffset: Number,
  iso8601: Boolean,
  displayOnly: {
    type: Boolean,
    default: false
  },
  step: {
    type: Object,
    default: function _default27() {
      return {
        hour: 1,
        minute: 1,
        second: 1
      };
    }
  },
  showWeekNumber: {
    type: Boolean,
    default: false
  },
  formatWeeks: Function,
  autoFormat: {
    type: Boolean,
    default: false
  },
  title: String,
  blank: {
    type: Boolean,
    default: false
  },
  changeCompat: {
    type: Boolean,
    default: false
  }
};
function _createForOfIteratorHelperLoose$3(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$3(o, minLen);
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$3 = function _export_sfc222(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$3(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$1$1 = defineComponent({
  components: {
    TinyInput: Input,
    TinyFilterBox: FilterBox,
    TinyTooltip: Tooltip,
    IconCalendar: index$g(),
    IconTime: index$e()
  },
  emits: ["created", "select-change", "update:modelValue", "blur", "focus", "change"],
  props: pickerProps,
  directives: directive({
    Clickoutside: clickoutside_default
  }),
  setup: function setup$122(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$j,
      api: api$j,
      extendOptions: {
        DatePanel,
        DateRangePanel: DateRange,
        MonthRangePanel: MonthRange,
        YearRangePanel: YearRange,
        TimePanel: Time,
        TimeRangePanel: TimeRange,
        QuarterPanel: QuerterPanel,
        TimeSelect: TimePanel
      }
    });
  }
});
var _hoisted_1$1$1 = {
  ref: "reference",
  class: "tiny-date-container"
};
var _hoisted_2$1$1 = {
  class: "tiny-input__icon-container"
};
var _hoisted_3$1 = ["placeholder", "value", "disabled", "readonly", "name"];
var _hoisted_4 = {
  key: 0,
  class: "tiny-range-separator"
};
var _hoisted_5 = ["placeholder", "value", "disabled", "readonly", "name"];
var _hoisted_6 = {
  key: 1,
  class: "tiny-input__icon tiny-range__icon tiny-input__suffix"
};
function _sfc_render$1$1(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_filter_box = resolveComponent("tiny-filter-box");
  var _component_tiny_tooltip = resolveComponent("tiny-tooltip");
  var _component_tiny_input = resolveComponent("tiny-input");
  var _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1$1$1,
    [_ctx.shape === "filter" ? withDirectives((openBlock(), createBlock(_component_tiny_filter_box, {
      key: 0,
      onClick: _ctx.handleFocus,
      "show-close": _ctx.clearable,
      placeholder: _ctx.placeholder,
      disabled: _ctx.state.pickerDisabled,
      label: _ctx.label,
      tip: _ctx.tip,
      value: _ctx.state.displayValue.toString(),
      "drop-down-visible": _ctx.state.pickerVisible,
      blank: _ctx.blank
    }, null, 8, ["onClick", "show-close", "placeholder", "disabled", "label", "tip", "value", "drop-down-visible", "blank"])), [[_directive_clickoutside, _ctx.handleClose]]) : !_ctx.state.ranged ? withDirectives((openBlock(), createBlock(_component_tiny_input, mergeProps({
      key: 1,
      tabindex: _ctx.tabindex,
      class: ["tiny-date-editor", "tiny-date-editor--" + _ctx.state.type],
      readonly: !_ctx.editable || _ctx.readonly || _ctx.state.type === "dates" || _ctx.state.type === "week",
      disabled: _ctx.state.pickerDisabled,
      size: _ctx.state.pickerSize,
      name: _ctx.name
    }, _ctx.state.firstInputId, {
      placeholder: _ctx.placeholder,
      onFocus: _ctx.handleFocus,
      onKeydown: _ctx.handleKeydown,
      "model-value": _ctx.state.displayValue,
      title: _ctx.state.type === "date" ? "" : _ctx.state.displayValue,
      "display-only": _ctx.state.isDisplayOnly,
      "display-only-content": _ctx.state.displayValue,
      onInput: _ctx.handleInput,
      onChange: _ctx.handleChange,
      onMouseenter: _ctx.handleMouseEnter,
      onMouseleave: _cache[2] || (_cache[2] = function($event) {
        return _ctx.state.showClose = false;
      }),
      "validate-event": false
    }), createSlots({
      suffix: withCtx(function() {
        return [createBaseVNode("i", _hoisted_2$1$1, [createVNode(Transition, {
          name: "tiny-transition-icon-scale-in"
        }, {
          default: withCtx(function() {
            return [_ctx.state.haveTrigger ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.state.showClose ? _ctx.clearIcon : null), {
              key: 0,
              onClick: _ctx.handleClickIcon,
              onMouseenter: _cache[0] || (_cache[0] = function($event) {
                return _ctx.state.showClose = true;
              }),
              onMouseleave: _cache[1] || (_cache[1] = function($event) {
                return _ctx.state.showClose = false;
              }),
              class: "baseClearicon"
            }, null, 40, ["onClick"])) : createCommentVNode("v-if", true)];
          }),
          _: 1
          /* STABLE */
        }), (openBlock(), createBlock(resolveDynamicComponent(_ctx.state.triggerClass), {
          onClick: _ctx.handleFocus,
          class: "tiny-svg-size"
        }, null, 8, ["onClick"]))])];
      }),
      _: 2
      /* DYNAMIC */
    }, [_ctx.label ? {
      name: "prefix",
      fn: withCtx(function() {
        return [createVNode(_component_tiny_tooltip, {
          effect: "light",
          content: _ctx.state.labelTooltip,
          placement: "top",
          onMouseenter: _ctx.handleEnterPickerlabel
        }, {
          default: withCtx(function() {
            return [createBaseVNode(
              "span",
              {
                class: "tiny-input__label",
                ref: "label"
              },
              toDisplayString(_ctx.label),
              513
              /* TEXT, NEED_PATCH */
            )];
          }),
          _: 1
          /* STABLE */
        }, 8, ["content", "onMouseenter"])];
      }),
      key: "0"
    } : void 0]), 1040, ["tabindex", "class", "readonly", "disabled", "size", "name", "placeholder", "onFocus", "onKeydown", "model-value", "title", "display-only", "display-only-content", "onInput", "onChange", "onMouseenter"])), [[_directive_clickoutside, _ctx.handleClose]]) : withDirectives((openBlock(), createElementBlock(
      "div",
      {
        key: 2,
        class: normalizeClass(["tiny-date-editor tiny-range-editor tiny-input tiny-input__inner", ["tiny-date-editor--" + _ctx.state.type, _ctx.state.pickerSize ? "tiny-range-editor--" + _ctx.state.pickerSize : "", _ctx.state.pickerDisabled ? "is-disabled" : "", _ctx.state.pickerVisible ? "is-active" : "", _ctx.state.isDisplayOnly ? "is-display-only" : ""]]),
        onClick: _cache[10] || (_cache[10] = function() {
          return _ctx.handleFocus && _ctx.handleFocus.apply(_ctx, arguments);
        }),
        onMouseenter: _cache[11] || (_cache[11] = function() {
          return _ctx.handleMouseEnter && _ctx.handleMouseEnter.apply(_ctx, arguments);
        }),
        onMouseleave: _cache[12] || (_cache[12] = function($event) {
          return _ctx.state.showClose = false;
        }),
        onKeydown: _cache[13] || (_cache[13] = function() {
          return _ctx.handleKeydown && _ctx.handleKeydown.apply(_ctx, arguments);
        })
      },
      [createVNode(_component_tiny_tooltip, {
        effect: "light",
        content: _ctx.state.labelTooltip,
        placement: "top",
        onMouseenter: _ctx.handleEnterPickerlabel
      }, {
        default: withCtx(function() {
          return [_ctx.label ? (openBlock(), createElementBlock(
            "span",
            {
              key: 0,
              class: "tiny-input__label",
              ref: "label"
            },
            toDisplayString(_ctx.label),
            513
            /* TEXT, NEED_PATCH */
          )) : createCommentVNode("v-if", true)];
        }),
        _: 1
        /* STABLE */
      }, 8, ["content", "onMouseenter"]), createBaseVNode("input", mergeProps({
        autocomplete: "off",
        placeholder: _ctx.startPlaceholder,
        value: _ctx.state.displayValue && _ctx.state.displayValue[0],
        disabled: _ctx.state.pickerDisabled
      }, _ctx.state.firstInputId, {
        readonly: !_ctx.editable || _ctx.readonly,
        name: _ctx.name && _ctx.name[0],
        onInput: _cache[3] || (_cache[3] = function() {
          return _ctx.handleStartInput && _ctx.handleStartInput.apply(_ctx, arguments);
        }),
        onChange: _cache[4] || (_cache[4] = function() {
          return _ctx.handleStartChange && _ctx.handleStartChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[5] || (_cache[5] = function() {
          return _ctx.handleFocus && _ctx.handleFocus.apply(_ctx, arguments);
        }),
        class: "tiny-range-input"
      }), null, 16, _hoisted_3$1), renderSlot(_ctx.$slots, "range-separator", {}, function() {
        return [typeof _ctx.rangeSeparator === "string" ? (openBlock(), createElementBlock(
          "span",
          _hoisted_4,
          toDisplayString(_ctx.rangeSeparator),
          1
          /* TEXT */
        )) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.rangeSeparator), {
          key: 1
        }))];
      }), createBaseVNode("input", mergeProps({
        autocomplete: "off",
        placeholder: _ctx.endPlaceholder,
        value: _ctx.state.displayValue && _ctx.state.displayValue[1],
        disabled: _ctx.state.pickerDisabled
      }, _ctx.state.secondInputId, {
        readonly: !_ctx.editable || _ctx.readonly,
        name: _ctx.name && _ctx.name[1],
        onInput: _cache[6] || (_cache[6] = function() {
          return _ctx.handleEndInput && _ctx.handleEndInput.apply(_ctx, arguments);
        }),
        onChange: _cache[7] || (_cache[7] = function() {
          return _ctx.handleEndChange && _ctx.handleEndChange.apply(_ctx, arguments);
        }),
        onFocus: _cache[8] || (_cache[8] = function() {
          return _ctx.handleFocus && _ctx.handleFocus.apply(_ctx, arguments);
        }),
        class: "tiny-range-input"
      }), null, 16, _hoisted_5), _ctx.state.haveTrigger ? (openBlock(), createElementBlock("i", {
        key: 0,
        onClick: _cache[9] || (_cache[9] = function() {
          return _ctx.handleClickIcon && _ctx.handleClickIcon.apply(_ctx, arguments);
        }),
        class: "tiny-input__icon tiny-range__close-icon"
      }, [createVNode(Transition, {
        name: "tiny-transition-icon-scale-in"
      }, {
        default: withCtx(function() {
          return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.state.showClose ? _ctx.clearIcon : null)))];
        }),
        _: 1
        /* STABLE */
      })])) : createCommentVNode("v-if", true), !_ctx.state.isDisplayOnly ? (openBlock(), createElementBlock("i", _hoisted_6, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.state.triggerClass)))])) : createCommentVNode("v-if", true), _ctx.state.isDisplayOnly ? (openBlock(), createBlock(_component_tiny_tooltip, {
        key: 2,
        class: "tiny-range-editor-display-only",
        content: _ctx.state.displayOnlyTooltip,
        effect: "light",
        placement: "top",
        onMouseenter: _ctx.handleEnterDisplayOnlyContent
      }, {
        default: withCtx(function() {
          return [createBaseVNode(
            "span",
            null,
            toDisplayString(_ctx.state.displayValue && _ctx.state.displayValue.join(" " + _ctx.t("ui.datepicker.to") + " ")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["content", "onMouseenter"])) : createCommentVNode("v-if", true)],
      34
      /* CLASS, NEED_HYDRATION */
    )), [[_directive_clickoutside, _ctx.handleClose]]), (openBlock(), createBlock(resolveDynamicComponent(_ctx.state.panel), {
      step: _ctx.step,
      "show-week-number": _ctx.showWeekNumber,
      "time-editable": _ctx.timeEditable,
      "format-weeks": _ctx.formatWeeks,
      ref: "picker",
      visible: _ctx.state.pickerVisible,
      onPick: _ctx.handlePick,
      onSelectRange: _ctx.handleSelectRange,
      onSelectChange: _ctx.handleSelectChange
    }, null, 40, ["step", "show-week-number", "time-editable", "format-weeks", "visible", "onPick", "onSelectRange", "onSelectChange"]))],
    512
    /* NEED_PATCH */
  );
}
var pc = /* @__PURE__ */ _export_sfc$3(_sfc_main$1$1, [["render", _sfc_render$1$1]]);
var classes = {
  "input-label": "text-color-text-placeholder text-xs sm:text-sm mr-2 inline-block text-left max-w-[100px] truncate",
  "range-editor": "bg-color-bg-1 relative inline-flex items-center py-1 sm:px-3 border-0 sm:border border-color-border hover:border-color-border-hover rounded mt-0.5",
  "range-input": "appearance-none border-none outline-0 p-0 w-[35%] text-color-text-primary focus:border-color-brand-focus disabled:border-color-border placeholder:text-color-text-placeholder disabled:cursor-not-allowed text-sm sm:placeholder:text-sm sm:text-sm h-full m-0 truncate disabled:text-color-icon-placeholder disabled:bg-transparent sm:disabled:bg-color-border-disabled",
  "datetimerange": "w-full sm:w-96 sm:max-w-full",
  "range-separator": "px-1 leading-5 w-[12%] text-color-text-primary text-xs sm:text-sm h-full m-0",
  "close-icon": "absolute right-1.5 text-base w-6 float-right leading-8 mr-5 flex justify-center items-center cursor-pointer",
  "suffix": "absolute top-1/2 -translate-y-2/4 transition-all duration-300 text-center text-color-text-secondary flex items-center right-2 pointer-events-none z-[1]",
  "is-disabled": "sm:bg-color-border-disabled border-color-border text-color-text-disabled cursor-not-allowed focus:border-color-border hover:border-color-border",
  "is-active": "border-color-border-focus",
  "is-display-only": "leading-7 relative inline border-0 sm:border-0 text-color-text-primary bg-transparent hover:bg-transparent px-0 py-0"
};
var _sfc_main$3 = defineComponent({
  components: {
    TinyInput: Input,
    TinyFilterBox: FilterBox,
    TinyDatePickerMobile: DatePickerMobile,
    TinyTimePickerMobile: TimePickerMobile,
    IconCalendar: index$g(),
    IconTime: index$e(),
    IconClose: index$n(),
    TinyTooltip: Tooltip
  },
  emits: ["created", "select-change", "update:modelValue", "blur", "focus", "change"],
  props: pickerProps,
  directives: directive({
    Clickoutside: clickoutside_default
  }),
  setup: function setup$123(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$j,
      api: api$j,
      classes,
      extendOptions: {
        DatePanel,
        DateRangePanel: DateRange,
        MonthRangePanel: MonthRange,
        YearRangePanel: YearRange,
        TimePanel: Time,
        TimeRangePanel: TimeRange,
        TimeSelect: TimePanel
      }
    });
  }
});
var _hoisted_1$2 = {
  "data-tag": "icon",
  class: "flex items-center cursor-pointer"
};
var _hoisted_2$2 = ["placeholder", "value", "title", "disabled", "readonly", "name"];
var _hoisted_3$2 = ["placeholder", "value", "title", "disabled", "readonly", "name"];
function _sfc_render$3(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_tiny_filter_box = resolveComponent("tiny-filter-box");
  var _component_tiny_tooltip = resolveComponent("tiny-tooltip");
  var _component_tiny_input = resolveComponent("tiny-input");
  var _component_tiny_date_picker_mobile = resolveComponent("tiny-date-picker-mobile");
  var _component_tiny_time_picker_mobile = resolveComponent("tiny-time-picker-mobile");
  var _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createElementBlock(
    "div",
    {
      ref: "reference",
      "data-tag": "tiny-date-container",
      class: normalizeClass(_ctx.state.isDisplayOnly ? "inline" : "")
    },
    [_ctx.shape === "filter" ? withDirectives((openBlock(), createBlock(_component_tiny_filter_box, {
      key: 0,
      onClick: _ctx.handleFocus,
      "show-close": _ctx.clearable,
      placeholder: _ctx.placeholder,
      disabled: _ctx.state.pickerDisabled,
      label: _ctx.label,
      tip: _ctx.tip,
      value: _ctx.state.displayValue.toString(),
      "drop-down-visible": _ctx.state.pickerVisible,
      blank: _ctx.blank
    }, null, 8, ["onClick", "show-close", "placeholder", "disabled", "label", "tip", "value", "drop-down-visible", "blank"])), [[_directive_clickoutside, _ctx.handleClose]]) : !_ctx.state.ranged ? withDirectives((openBlock(), createBlock(_component_tiny_input, mergeProps({
      key: 1,
      tabindex: _ctx.tabindex,
      "data-tag": "tiny-date-editor",
      readonly: _ctx.state.isMobileScreen || !_ctx.editable || _ctx.readonly || _ctx.state.type === "dates" || _ctx.state.type === "week",
      disabled: _ctx.state.pickerDisabled,
      size: _ctx.state.pickerSize,
      name: _ctx.name
    }, _ctx.state.firstInputId, {
      placeholder: _ctx.placeholder,
      onFocus: _ctx.handleFocus,
      onKeydown: _ctx.handleKeydown,
      "model-value": _ctx.state.displayValue,
      title: _ctx.state.type === "date" ? "" : _ctx.state.displayValue,
      "display-only": _ctx.state.isDisplayOnly,
      "display-only-content": _ctx.state.displayValue,
      onInput: _ctx.handleInput,
      onChange: _ctx.handleChange,
      onMouseenter: _ctx.handleMouseEnter,
      onMouseleave: _cache[2] || (_cache[2] = function($event) {
        return _ctx.state.showClose = false;
      }),
      "validate-event": false,
      "custom-class": "sm:border " + _ctx.gcls(_ctx.state.type)
    }), createSlots({
      suffix: withCtx(function() {
        return [createBaseVNode("i", _hoisted_1$2, [!_ctx.state.isMobileScreen ? (openBlock(), createBlock(Transition, {
          key: 0,
          name: "tiny-transition-icon-scale-in"
        }, {
          default: withCtx(function() {
            return [_ctx.state.haveTrigger ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.state.showClose ? _ctx.clearIcon : null), {
              key: 0,
              onClick: _ctx.handleClickIcon,
              onMouseenter: _cache[0] || (_cache[0] = function($event) {
                return _ctx.state.showClose = true;
              }),
              onMouseleave: _cache[1] || (_cache[1] = function($event) {
                return _ctx.state.showClose = false;
              }),
              class: "fill-color-text-placeholder hover:fill-color-text-primary"
            }, null, 40, ["onClick"])) : createCommentVNode("v-if", true)];
          }),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true), (openBlock(), createBlock(resolveDynamicComponent(_ctx.state.triggerClass), {
          onClick: _ctx.handleFocus,
          "custom-class": "h-5 w-5 sm:h-4 sm:w-4",
          class: normalizeClass(!_ctx.state.isDisplayOnly && _ctx.state.pickerDisabled ? "fill-color-icon-placeholder sm:fill-color-icon-disabled" : "fill-color-icon-secondary sm:fill-color-text-placeholder")
        }, null, 8, ["onClick", "class"]))])];
      }),
      _: 2
      /* DYNAMIC */
    }, [_ctx.label ? {
      name: "prefix",
      fn: withCtx(function() {
        return [createVNode(_component_tiny_tooltip, {
          effect: "light",
          content: _ctx.state.labelTooltip,
          placement: "top",
          onMouseenter: _ctx.handleEnterPickerlabel
        }, {
          default: withCtx(function() {
            return [createBaseVNode(
              "span",
              {
                "data-tag": "tiny-input__label",
                class: normalizeClass(_ctx.gcls("input-label")),
                ref: "label"
              },
              toDisplayString(_ctx.label),
              3
              /* TEXT, CLASS */
            )];
          }),
          _: 1
          /* STABLE */
        }, 8, ["content", "onMouseenter"])];
      }),
      key: "0"
    } : void 0]), 1040, ["tabindex", "readonly", "disabled", "size", "name", "placeholder", "onFocus", "onKeydown", "model-value", "title", "display-only", "display-only-content", "onInput", "onChange", "onMouseenter", "custom-class"])), [[_directive_clickoutside, _ctx.handleClose]]) : withDirectives((openBlock(), createElementBlock(
      "div",
      {
        key: 2,
        "data-tag": "tiny-date-editor tiny-range-editor tiny-input tiny-input__inner",
        class: normalizeClass(_ctx.m(_ctx.gcls("range-editor"), _ctx.gcls(_ctx.state.type), _ctx.state.pickerVisible && _ctx.gcls("is-active"), !_ctx.state.isDisplayOnly && _ctx.state.pickerDisabled && _ctx.gcls("is-disabled"), _ctx.state.isDisplayOnly && _ctx.gcls("is-display-only"))),
        onClick: _cache[10] || (_cache[10] = function() {
          return _ctx.handleFocus && _ctx.handleFocus.apply(_ctx, arguments);
        }),
        onMouseenter: _cache[11] || (_cache[11] = function() {
          return _ctx.handleMouseEnter && _ctx.handleMouseEnter.apply(_ctx, arguments);
        }),
        onMouseleave: _cache[12] || (_cache[12] = function($event) {
          return _ctx.state.showClose = false;
        }),
        onKeydown: _cache[13] || (_cache[13] = function() {
          return _ctx.handleKeydown && _ctx.handleKeydown.apply(_ctx, arguments);
        })
      },
      [createVNode(_component_tiny_tooltip, {
        effect: "light",
        content: _ctx.state.labelTooltip,
        placement: "top",
        onMouseenter: _ctx.handleEnterPickerlabel
      }, {
        default: withCtx(function() {
          return [_ctx.label ? (openBlock(), createElementBlock(
            "span",
            {
              key: 0,
              "data-tag": "tiny-input__label",
              ref: "label"
            },
            toDisplayString(_ctx.label),
            513
            /* TEXT, NEED_PATCH */
          )) : createCommentVNode("v-if", true)];
        }),
        _: 1
        /* STABLE */
      }, 8, ["content", "onMouseenter"]), !_ctx.state.isDisplayOnly ? (openBlock(), createElementBlock(
        Fragment,
        {
          key: 0
        },
        [createBaseVNode("input", mergeProps({
          autocomplete: "off",
          placeholder: _ctx.startPlaceholder,
          value: _ctx.state.displayValue && _ctx.state.displayValue[0],
          title: _ctx.state.displayValue && _ctx.state.displayValue[0],
          disabled: _ctx.state.pickerDisabled
        }, _ctx.state.firstInputId, {
          readonly: _ctx.state.isMobileScreen || !_ctx.editable || _ctx.readonly,
          name: _ctx.name && _ctx.name[0],
          onInput: _cache[3] || (_cache[3] = function() {
            return _ctx.handleStartInput && _ctx.handleStartInput.apply(_ctx, arguments);
          }),
          onChange: _cache[4] || (_cache[4] = function() {
            return _ctx.handleStartChange && _ctx.handleStartChange.apply(_ctx, arguments);
          }),
          onFocus: _cache[5] || (_cache[5] = function() {
            return _ctx.handleFocus && _ctx.handleFocus.apply(_ctx, arguments);
          }),
          "data-tag": "tiny-range-input",
          class: _ctx.gcls("range-input")
        }), null, 16, _hoisted_2$2), renderSlot(_ctx.$slots, "range-separator", {}, function() {
          return [typeof _ctx.rangeSeparator === "string" ? (openBlock(), createElementBlock(
            "span",
            {
              key: 0,
              "data-tag": "tiny-range-separator",
              class: normalizeClass(_ctx.m(_ctx.gcls("range-separator"), {
                "text-center": _ctx.type === "datetimerange"
              }, {
                "text-color-icon-placeholder": !_ctx.state.isDisplayOnly && _ctx.state.pickerDisabled
              }))
            },
            toDisplayString(_ctx.rangeSeparator),
            3
            /* TEXT, CLASS */
          )) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.rangeSeparator), {
            key: 1
          }))];
        }), createBaseVNode("input", mergeProps({
          autocomplete: "off",
          placeholder: _ctx.endPlaceholder,
          value: _ctx.state.displayValue && _ctx.state.displayValue[1],
          title: _ctx.state.displayValue && _ctx.state.displayValue[1],
          disabled: _ctx.state.pickerDisabled
        }, _ctx.state.secondInputId, {
          readonly: _ctx.state.isMobileScreen || !_ctx.editable || _ctx.readonly,
          name: _ctx.name && _ctx.name[1],
          onInput: _cache[6] || (_cache[6] = function() {
            return _ctx.handleEndInput && _ctx.handleEndInput.apply(_ctx, arguments);
          }),
          onChange: _cache[7] || (_cache[7] = function() {
            return _ctx.handleEndChange && _ctx.handleEndChange.apply(_ctx, arguments);
          }),
          onFocus: _cache[8] || (_cache[8] = function() {
            return _ctx.handleFocus && _ctx.handleFocus.apply(_ctx, arguments);
          }),
          "data-tag": "tiny-range-input",
          class: _ctx.gcls("range-input")
        }), null, 16, _hoisted_3$2), !_ctx.state.isMobileScreen && _ctx.state.haveTrigger ? (openBlock(), createElementBlock(
          "i",
          {
            key: 0,
            onClick: _cache[9] || (_cache[9] = function() {
              return _ctx.handleClickIcon && _ctx.handleClickIcon.apply(_ctx, arguments);
            }),
            "data-tag": "tiny-input__icon tiny-range__close-icon",
            class: normalizeClass(_ctx.gcls("close-icon"))
          },
          [createVNode(Transition, {
            name: "tiny-transition-icon-scale-in"
          }, {
            default: withCtx(function() {
              return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.state.showClose ? _ctx.clearIcon : null), {
                "custom-class": "fill-color-text-placeholder"
              }))];
            }),
            _: 1
            /* STABLE */
          })],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true), !_ctx.state.isDisplayOnly ? (openBlock(), createElementBlock(
          "i",
          {
            key: 1,
            "data-tag": "tiny-input__icon tiny-range__icon tiny-input__suffix",
            class: normalizeClass(_ctx.gcls("suffix"))
          },
          [(openBlock(), createBlock(resolveDynamicComponent(_ctx.state.triggerClass), {
            "custom-class": "h-5 w-5 sm:h-4 sm:w-4",
            class: normalizeClass(!_ctx.state.isDisplayOnly && _ctx.state.pickerDisabled ? "fill-color-icon-placeholder sm:fill-color-icon-secondary" : "fill-color-icon-secondary sm:fill-color-text-placeholder")
          }, null, 8, ["class"]))],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true)],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true), _ctx.state.isDisplayOnly ? (openBlock(), createBlock(_component_tiny_tooltip, {
        key: 1,
        "data-tag": "tiny-range-editor-display-only",
        content: _ctx.state.displayOnlyTooltip,
        effect: "light",
        placement: "top",
        onMouseenter: _ctx.handleEnterDisplayOnlyContent
      }, {
        default: withCtx(function() {
          return [createBaseVNode(
            "span",
            null,
            toDisplayString(_ctx.state.displayValue && _ctx.state.displayValue.join(" " + _ctx.t("ui.datepicker.to") + " ")),
            1
            /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */
      }, 8, ["content", "onMouseenter"])) : createCommentVNode("v-if", true)],
      34
      /* CLASS, NEED_HYDRATION */
    )), [[_directive_clickoutside, _ctx.handleClose]]), !_ctx.state.isMobileScreen ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.state.panel), {
      key: 3,
      step: _ctx.step,
      "show-week-number": _ctx.showWeekNumber,
      "format-weeks": _ctx.formatWeeks,
      ref: "picker",
      visible: _ctx.state.pickerVisible,
      class: "tiny-tw",
      onPick: _ctx.handlePick,
      onSelectRange: _ctx.handleSelectRange,
      onSelectChange: _ctx.handleSelectChange
    }, null, 40, ["step", "show-week-number", "format-weeks", "visible", "onPick", "onSelectRange", "onSelectChange"])) : createCommentVNode("v-if", true), _ctx.state.isMobileScreen && _ctx.state.isDateMobileComponent ? (openBlock(), createBlock(_component_tiny_date_picker_mobile, {
      key: 4,
      ref: "datePickerMobile",
      modelValue: _ctx.state.dateMobileOption.value,
      "onUpdate:modelValue": _cache[14] || (_cache[14] = function($event) {
        return _ctx.state.dateMobileOption.value = $event;
      }),
      title: _ctx.title,
      clearable: _ctx.clearable,
      step: _ctx.step,
      "show-time-second": _ctx.state.showSeconds,
      "range-separator": _ctx.rangeSeparator,
      "end-placeholder": _ctx.endPlaceholder,
      "custom-class": "max-h-[80%]",
      type: _ctx.state.dateMobileOption.type,
      visible: _ctx.state.dateMobileOption.visible,
      "picker-options": _ctx.pickerOptions,
      onConfirm: _ctx.emitInput,
      onClear: _ctx.emitInput,
      "onUpdate:visible": _ctx.dateMobileToggle
    }, null, 8, ["modelValue", "title", "clearable", "step", "show-time-second", "range-separator", "end-placeholder", "type", "visible", "picker-options", "onConfirm", "onClear", "onUpdate:visible"])) : createCommentVNode("v-if", true), _ctx.state.isMobileScreen && _ctx.state.isTimeMobileComponent ? (openBlock(), createBlock(_component_tiny_time_picker_mobile, {
      key: 5,
      ref: "datePickerMobile",
      modelValue: _ctx.state.timeMobileOption.value,
      "onUpdate:modelValue": _cache[15] || (_cache[15] = function($event) {
        return _ctx.state.timeMobileOption.value = $event;
      }),
      title: _ctx.title,
      clearable: _ctx.clearable,
      step: _ctx.step,
      "show-seconds": _ctx.state.showSeconds,
      "custom-class": "max-h-[80%]",
      type: _ctx.state.timeMobileOption.type,
      visible: _ctx.state.timeMobileOption.visible,
      onConfirm: _ctx.timeMobileConfirm,
      "onUpdate:visible": _ctx.timeMobileToggle
    }, null, 8, ["modelValue", "title", "clearable", "step", "show-seconds", "type", "visible", "onConfirm", "onUpdate:visible"])) : createCommentVNode("v-if", true)],
    2
    /* CLASS */
  );
}
var mobileFirst = /* @__PURE__ */ _export_sfc$3(_sfc_main$3, [["render", _sfc_render$3]]);
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
var template$1 = function template29(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return pc;
  }
  if ("mobile-first" === (tinyMode || mode)) {
    return mobileFirst;
  }
  return pc;
};
var Picker = defineComponent({
  name: $prefix + "Picker",
  componentName: "Picker",
  props: _extends$2({}, $props$1, pickerProps),
  setup: function setup9(props2, context) {
    return $setup({
      props: props2,
      context,
      template: template$1
    });
  }
});
var version$3 = "3.16.0";
Picker.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
Picker.install = function(Vue) {
  Vue.component(Picker.name, Picker);
};
Picker.version = version$3;
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var DatePicker$1 = extend(true, {
  props: _extends$1({}, $props$1, {
    _constants: {
      type: Object,
      default: function _default18() {
        return {};
      }
    },
    componentName: {
      type: String,
      default: "DatePicker"
    }
  })
}, Picker);
const getMonthEndDay = (constants) => (year, month) => constants.MonthDay - new Date(year, month - 1, constants.MonthDay).getDate();
const getTrueValue = (value) => {
  if (!value) {
    return 0;
  }
  while (isNaN(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }
  return parseInt(value, 10);
};
const getBoundary = ({ api: api2, constants, props: props2 }) => ({
  type,
  value: val
}) => {
  const boundary = props2[`${type}${constants.CapDate}`];
  const year = boundary.getFullYear();
  let month = 1;
  let date = 1;
  let hour = 0;
  let minute = 0;
  if (type === constants.Max) {
    month = constants.TotalMonth;
    date = api2.getMonthEndDay(val.getFullYear(), val.getMonth() + 1);
    hour = constants.Hours;
    minute = constants.Minutes;
  }
  if (val.getFullYear() === year) {
    month = boundary.getMonth() + 1;
    if (val.getMonth() + 1 === month) {
      date = boundary.getDate();
      if (val.getDate() === date) {
        hour = boundary.getHours();
        if (val.getHours() === hour) {
          minute = boundary.getMinutes();
        }
      }
    }
  }
  return {
    [`${type}${constants.CapYear}`]: year,
    [`${type}${constants.CapMonth}`]: month,
    [`${type}${constants.CapDate}`]: date,
    [`${type}${constants.CapHour}`]: hour,
    [`${type}${constants.CapMinute}`]: minute
  };
};
const updateInnerValue = ({
  api: api2,
  constants,
  props: props2,
  refs,
  state
}) => () => {
  const indexes = refs.picker && refs.picker.getIndexes();
  const getValue2 = (index3) => {
    const { values } = state.originColumns[index3];
    return getTrueValue(values[indexes[index3]]);
  };
  const year = getValue2(0);
  const month = getValue2(1);
  const maxDate = api2.getMonthEndDay(year, month);
  let date;
  if (props2.type === constants.YearMonth) {
    date = 1;
  } else {
    date = getValue2(2);
  }
  date = date > maxDate ? maxDate : date;
  let hour = 0;
  let minute = 0;
  if (props2.type === constants.DateTime) {
    hour = getValue2(3);
    minute = getValue2(4);
  }
  const value = new Date(year, month - 1, date, hour, minute);
  state.innerValue = api2.formatValue(value);
};
const formatValue = (props2) => (value) => {
  if (!Object.prototype.toString.call(value) === "[object Date]" && !isNaN(value.getTime())) {
    value = props2.minDate;
  }
  value = Math.max(value, props2.minDate.getTime());
  value = Math.min(value, props2.maxDate.getTime());
  return new Date(value);
};
const onChange$1 = ({ api: api2, emit, refs, nextTick }) => () => {
  api2.updateInnerValue();
  nextTick(() => {
    nextTick(() => {
      emit("change", refs.picker);
      document.body.style.overflow = "";
    });
  });
};
const padZero = (num, targetLength = 2) => {
  let str = String(num);
  while (str.length < targetLength) {
    str = "0" + str;
  }
  return str;
};
const updateColumnValue = ({
  constants,
  nextTick,
  props: props2,
  refs,
  state
}) => () => {
  const value = state.innerValue;
  const { formatter } = props2;
  let values = [
    formatter("year", `${value.getFullYear()}`),
    formatter("month", padZero(value.getMonth() + 1)),
    formatter("day", padZero(value.getDate()))
  ];
  if (props2.type === constants.DateTime) {
    values.push(formatter("hour", padZero(value.getHours())), formatter("minute", padZero(value.getMinutes())));
  }
  if (props2.type === constants.YearMonth) {
    values = values.slice(0, 2);
  }
  nextTick(() => {
    refs.picker.setValues(values);
  });
};
const getRanges = ({ api: api2, constants, props: props2, state }) => () => {
  const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = api2.getBoundary({
    type: constants.Max,
    value: state.innerValue
  });
  const { minYear, minDate, minMonth, minHour, minMinute } = api2.getBoundary({
    type: constants.Min,
    value: state.innerValue
  });
  const result = [
    {
      type: constants.Year,
      range: [minYear, maxYear]
    },
    {
      type: "month",
      range: [minMonth, maxMonth]
    },
    {
      type: constants.Day,
      range: [minDate, maxDate]
    },
    {
      type: constants.Hour,
      range: [minHour, maxHour]
    },
    {
      type: constants.Minute,
      range: [minMinute, maxMinute]
    }
  ];
  if (props2.type === constants.Date) {
    result.splice(3, 2);
  }
  if (props2.type === constants.YearMonth) {
    result.splice(2, 3);
  }
  return result;
};
function times(n, iteratee) {
  let index3 = -1;
  const result = Array(n);
  while (++index3 < n) {
    result[index3] = iteratee(index3);
  }
  return result;
}
const getOriginColumns = (state) => () => state.ranges.map(({ type, range: rangeArr }) => {
  let values = times(rangeArr[1] - rangeArr[0] + 1, (index3) => {
    const value = padZero(rangeArr[0] + index3);
    return value;
  });
  return {
    type,
    values
  };
});
const getColumns = ({ props: props2, state }) => () => state.originColumns.map((column) => ({
  values: column.values.map((value) => props2.formatter(column.type, value))
}));
const onConfirm = ({ api: api2, emit, state }) => () => {
  state.visible = false;
  emit("confirm", state.innerValue);
  emit("update:modelValue", state.innerValue);
  emit("update:visible", state.visible);
  document.body.style.overflow = "";
  state.displayValue = api2.getDisplayValue();
  state.clearable = false;
};
const onCancel = ({ emit, state }) => () => {
  state.visible = false;
  emit("cancel");
  emit("update:visible", state.visible);
  document.body.style.overflow = "";
};
const getDisplayValue = ({ constants, DATE: DATE2, props: props2, state }) => () => {
  const format2 = function(value, fmt) {
    const o = {
      "M+": value.getMonth() + 1,
      "d+": value.getDate(),
      "h+": value.getHours(),
      "m+": value.getMinutes(),
      "s+": value.getSeconds(),
      "q+": Math.floor((value.getMonth() + 3) / 3),
      "S": value.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, String(value.getFullYear()).substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(String(o[k]).length));
      }
    }
    return fmt;
  };
  return format2(state.innerValue, props2.type === constants.DateTime ? DATE2.Datetime : DATE2.Date);
};
const hookMounted = ({
  constants,
  parent,
  refs,
  nextTick
}) => () => {
  nextTick(() => {
    parent.$emit(constants.HookMounted, refs.refrence.$el);
  });
};
const showPickerAndLockScroll = ({ constants, state }) => () => {
  state.visible = true;
  document.body.style.overflow = constants.Hidden;
  state.isReadonly = true;
};
const clearDisplayValue = (state) => () => {
  state.displayValue = "";
  state.clearable = true;
};
const api$2 = [
  "state",
  "clearDisplayValue",
  "showPickerAndLockScroll",
  "hookMounted",
  "onConfirm",
  "onCancel",
  "onChange"
];
const setWatchFn = ({ api: api2, watch, props: props2, state, emit }) => {
  watch(
    () => props2.minDate,
    () => api2.updateInnerValue(),
    {
      lazy: true
    }
  );
  watch(
    () => props2.visible,
    (value) => state.visible = value,
    { lazy: true }
  );
  watch(
    () => props2.maxDate,
    () => api2.updateInnerValue(),
    {
      lazy: true
    }
  );
  watch(
    () => props2.modelValue,
    (value) => {
      if (value) {
        const val = api2.formatValue(new Date(value));
        if (val.valueOf() !== state.innerValue.valueOf()) {
          state.innerValue = val;
        }
        state.displayValue = api2.getDisplayValue();
      }
    },
    {
      immediate: true
    }
  );
  watch(
    () => state.columns,
    () => api2.updateColumnValue(),
    {
      lazy: true
    }
  );
  watch(
    () => state.innerValue,
    (value) => emit("input", value),
    {
      lazy: true
    }
  );
};
const renderless$2 = (props2, { computed, onMounted, reactive, watch }, { constants, emit, nextTick, refs, parent }) => {
  const api2 = {
    formatValue: formatValue(props2),
    getMonthEndDay: getMonthEndDay(constants),
    hookMounted: hookMounted({ constants, parent, refs, nextTick })
  };
  const state = reactive({
    visible: false,
    innerValue: formatValue(props2)(props2.modelValue),
    ranges: computed(() => api2.getRanges()),
    originColumns: computed(() => api2.getOriginColumns()),
    columns: computed(() => api2.getColumns()),
    displayValue: "",
    isReadonly: false,
    clearable: props2.clearable
  });
  Object.assign(api2, {
    state,
    getOriginColumns: getOriginColumns(state),
    onCancel: onCancel({ emit, state }),
    getColumns: getColumns({ props: props2, state }),
    clearDisplayValue: clearDisplayValue(state),
    getDisplayValue: getDisplayValue({ constants, DATE, props: props2, state }),
    showPickerAndLockScroll: showPickerAndLockScroll({ constants, state }),
    updateColumnValue: updateColumnValue({ constants, nextTick, props: props2, refs, state })
  });
  api2.getBoundary = getBoundary({ api: api2, constants, props: props2 });
  api2.updateInnerValue = updateInnerValue({ api: api2, constants, props: props2, refs, state });
  api2.getRanges = getRanges({ api: api2, constants, props: props2, state });
  setWatchFn({ api: api2, watch, props: props2, state, emit });
  onMounted(() => {
    api2.updateColumnValue();
    nextTick(() => {
      api2.updateInnerValue();
    });
  });
  return Object.assign(api2, {
    onConfirm: onConfirm({ api: api2, emit, state }),
    onChange: onChange$1({ api: api2, emit, refs, nextTick })
  });
};
const visibleHandle = (emit) => () => emit("update:visible", false);
const watchVisible = (emit) => ({ state, value }) => {
  setTimeout(() => {
    value ? state.toggle = true : state.toggle = false;
  }, 0);
  emit("update:visible", value);
};
const getDataType = (state) => () => {
  const { columns } = state;
  const firstColumn = columns[0] || {};
  if (firstColumn.children) {
    return "cascade";
  }
  if (firstColumn.values) {
    return "object";
  }
  return "text";
};
const format = ({ state, api: api2 }) => () => {
  const { columns, dataType } = state;
  if (dataType === "text") {
    state.formattedColumns = [{ values: columns }];
  } else if (dataType === "cascade") {
    api2.formatCascade();
  } else {
    state.formattedColumns = columns;
  }
};
const formatCascade = ({ state, props: props2 }) => () => {
  const formatted = [];
  let cursor = { children: state.columns };
  while (cursor && cursor.children) {
    const defaultIndex = cursor.defaultIndex || Number(state.defaultIndex);
    formatted.push({
      values: cursor.children.map((item) => item[props2.valueKey]),
      defaultIndex
    });
    cursor = cursor.children[defaultIndex];
  }
  state.formattedColumns = formatted;
};
const change = (api2) => (index3) => {
  api2.onChange(index3);
};
const setColumnValue = (api2) => (index3, value) => {
  const column = api2.getColumn(index3);
  column && column.setValue(value);
};
const setValues = (api2) => (values) => {
  values.forEach((value, index3) => {
    api2.setColumnValue(index3, value);
  });
};
const getColumnValue = (api2) => (index3) => {
  const column = api2.getColumn(index3);
  return column && column.getValue();
};
const confirm = ({ api: api2, childrenPickerRefs }) => () => {
  const children = childrenPickerRefs.childrenPicker;
  children && children.forEach((child) => child.onTransitionEnd());
  api2.emitEvent("confirm");
  api2.visibleHandle();
};
const cancel = ({ api: api2, emit }) => () => {
  emit("cancel");
  api2.visibleHandle();
};
const emitEvent = ({ api: api2, state, emit }) => (event) => {
  if (state.dataType === "text") {
    emit(event, api2.getColumnValue(0), api2.getColumnIndex(0));
  } else {
    emit(event, api2.getValues(), api2.getIndexes());
  }
};
const getColumn = (childrenPickerRefs) => (index3) => {
  const children = childrenPickerRefs.childrenPicker;
  return children[index3];
};
const getColumnIndex = (api2) => (columnIndex) => (api2.getColumn(columnIndex) || {}).state.currentIndex;
const getValues = (childrenPickerRefs) => () => childrenPickerRefs.childrenPicker && childrenPickerRefs.childrenPicker.map((child) => child.getValue());
const getIndexes = (childrenPickerRefs) => () => childrenPickerRefs.childrenPicker && childrenPickerRefs.childrenPicker.map((child) => child.state.currentIndex);
const setIndexes = (api2) => (indexes) => {
  indexes.forEach((optionIndex, columnIndex) => {
    api2.setColumnIndex(columnIndex, optionIndex);
  });
};
const setColumnIndex = (api2) => (columnIndex, optionIndex) => {
  const column = api2.getColumn(columnIndex);
  column && column.setIndex(optionIndex);
};
const getColumnValues = (childrenPickerRefs) => (index3) => (childrenPickerRefs.childrenPicker[index3] || {}).state.columnsItem.values;
const setColumnValues = (childrenPickerRefs) => (index3, options) => {
  const children = childrenPickerRefs.childrenPicker;
  const column = children[index3];
  if (column) {
    column.setOptions(options);
  }
};
const onCascadeChange = ({ api: api2, state, props: props2 }) => (columnIndex) => {
  const { columns } = state;
  let cursor = { children: columns };
  const indexes = api2.getIndexes();
  for (let i = 0; i <= columnIndex; i++) {
    cursor = cursor.children[indexes[i]];
  }
  while (columnIndex < state.formattedColumns.length) {
    if (cursor.children && cursor.children.length !== 0) {
      columnIndex++;
      api2.setColumnValues(
        columnIndex,
        cursor.children.map((item) => item[props2.valueKey])
      );
      cursor = cursor.children[cursor.defaultIndex || 0];
    } else {
      columnIndex++;
      api2.setColumnValues(columnIndex, []);
    }
  }
};
const onChange = ({ api: api2, state, emit }) => (columnIndex) => {
  if (state.dataType === "cascade") {
    api2.onCascadeChange(columnIndex);
  }
  if (api2.dataType === "text") {
    emit("change", api2.getColumnValue(0), api2.getColumnIndex(0));
  } else {
    emit("change", api2.getValues(), columnIndex);
  }
};
const getChildrenComponent = ({ state, vm, constants }) => {
  const childrenName = constants.CHILDREN_PICKER;
  const children = [];
  for (let index3 = 0; index3 < state.formattedColumns.length; index3++) {
    children.push(
      Array.isArray(vm.$refs[childrenName + index3]) ? vm.$refs[childrenName + index3][0] : vm.$refs[childrenName + index3]
    );
  }
  return children;
};
const api$1 = [
  "state",
  "visibleHandle",
  "watchVisible",
  "change",
  "setValues",
  "getColumnValue",
  "confirm",
  "cancel",
  "getColumnIndex",
  "getValues",
  "getIndexes",
  "setIndexes",
  "setColumnIndex",
  "getColumnValues",
  "setColumnValues",
  "onChange",
  "onCascadeChange",
  "emitEvent",
  "getColumn",
  "setColumnValue"
];
const initState$1 = ({ reactive, computed, props: props2, api: api2 }) => {
  const state = reactive({
    columns: props2.columns,
    toggle: false,
    itemHeight: Number(props2.itemHeight),
    defaultIndex: props2.defaultIndex,
    visibleItemCount: props2.visibleItemCount,
    clumnsWrapHeight: null,
    formattedColumns: [],
    dataType: computed(() => api2.getDataType())
  });
  return state;
};
const initApi$1 = ({ api: api2, props: props2, state, emit, childrenPickerRefs }) => {
  Object.assign(api2, {
    state,
    getColumn: getColumn(childrenPickerRefs),
    getValues: getValues(childrenPickerRefs),
    getIndexes: getIndexes(childrenPickerRefs),
    getDataType: getDataType(state),
    visibleHandle: visibleHandle(emit),
    formatCascade: formatCascade({ state, props: props2 }),
    getColumnValues: getColumnValues(childrenPickerRefs),
    setColumnValues: setColumnValues(childrenPickerRefs),
    emitEvent: emitEvent({ api: api2, state, emit }),
    change: change(api2),
    onChange: onChange({ api: api2, state, emit }),
    cancel: cancel({ api: api2, emit }),
    confirm: confirm({ api: api2, childrenPickerRefs }),
    format: format({ state, api: api2 }),
    setValues: setValues(api2),
    setIndexes: setIndexes(api2),
    watchVisible: watchVisible(emit),
    setColumnIndex: setColumnIndex(api2),
    getColumnValue: getColumnValue(api2),
    getColumnIndex: getColumnIndex(api2),
    setColumnValue: setColumnValue(api2),
    onCascadeChange: onCascadeChange({ api: api2, state, props: props2 })
  });
};
const initWatch$1 = ({ watch, props: props2, state, api: api2 }) => {
  watch(
    () => props2.visible,
    (value) => {
      api2.watchVisible({ state, value });
    }
  );
  watch(
    () => props2.columns,
    (value) => {
      state.columns = value;
      api2.format();
    }
  );
};
const renderless$1 = (props2, { computed, onMounted, reactive, watch }, { emit, nextTick, vm, constants }) => {
  const api2 = {};
  const childrenPickerRefs = { childrenPicker: null };
  const state = initState$1({ reactive, computed, props: props2, api: api2 });
  initApi$1({ api: api2, props: props2, state, emit, childrenPickerRefs });
  initWatch$1({ watch, props: props2, state, api: api2 });
  onMounted(() => {
    nextTick(() => {
      childrenPickerRefs.childrenPicker = getChildrenComponent({ state, vm, constants });
    });
    api2.format();
    state.clumnsWrapHeight = state.itemHeight * state.visibleItemCount;
  });
  return api2;
};
const api = ["state", "onClickItem", "onTransitionEnd", "setValue", "getValue", "setOptions", "setIndex"];
const initState = ({ reactive, computed, props: props2, api: api2 }) => {
  const state = reactive({
    columnsItem: props2.columnsItem,
    columnsItemArr: props2.columnsItem.values,
    currentIndex: props2.defaultIndex,
    itemHeight: props2.itemHeight,
    visibleItemCount: props2.visibleItemCount,
    offset: 0,
    duration: 0,
    startOffset: 0,
    moving: false,
    defaultDuration: 200,
    momentumLimitTime: 300,
    momentumLimitDistance: 15,
    touchStartTime: null,
    momentumOffset: 0,
    direction: "",
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    count: props2.columnsItem.values.length,
    transitionEndTrigger: null,
    clumnsWrapHeight: null,
    maskStyle: null,
    wrapperStyle: computed(() => api2.computedWrapperStyle()),
    baseOffset: computed(() => api2.computedBaseOffset())
  });
  return state;
};
const initApi = ({ api: api2, props: props2, state, vm, emit }) => {
  Object.assign(api2, {
    state,
    getValue: getValue(state),
    adjustIndex: adjustIndex(state),
    onTouchmove: onTouchmove({ state }),
    onTouchstart: onTouchstart({ state }),
    getOptionText: getOptionText({ state, props: props2 }),
    onTransitionEnd: onTransitionEnd(state),
    computedBaseOffset: computedBaseOffset({ state, props: props2 }),
    computedWrapperStyle: computedWrapperStyle(state),
    setValue: setValue$1({ api: api2, state }),
    onTouchend: onTouchend({ api: api2, state }),
    setOptions: setOptions({ api: api2, state, props: props2 }),
    momentum: momentum$1({ api: api2, state, props: props2 }),
    setIndex: setIndex({ api: api2, state, emit }),
    onClickItem: onClickItem({ api: api2, state }),
    mountedHandler: mountedHandler({ api: api2, state, vm }),
    beforeUnmountHandler: beforeUnmountHandler({ api: api2, vm })
  });
};
const initWatch = ({ watch, props: props2, state, api: api2 }) => {
  watch(() => props2.defaultIndex, api2.setIndex, { immediate: true });
  watch(
    () => props2.columnsItem,
    (value) => {
      state.columnsItem = value;
    },
    { immediate: true }
  );
  watch(
    () => props2.columnsItem.values,
    (value) => {
      state.count = value.length;
    },
    { immediate: true }
  );
};
const renderless = (props2, { computed, onMounted, reactive, watch, onBeforeUnmount }, { emit, vm }) => {
  const api2 = {};
  const state = initState({ reactive, computed, props: props2, api: api2 });
  initApi({ api: api2, props: props2, state, vm, emit });
  api2.setIndex(state.currentIndex);
  state.columnsItem = deepClone(props2.columnsItem);
  initWatch({ watch, props: props2, state, api: api2 });
  onMounted(api2.mountedHandler);
  onBeforeUnmount(api2.beforeUnmountHandler);
  return api2;
};
const index$2 = "";
function _createForOfIteratorHelperLoose$2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$2 = function _export_sfc223(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$2(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main$2 = defineComponent({
  name: $prefix + "PickerColumn",
  emits: ["change"],
  props: {
    columnsItem: {
      type: Object,
      default: function _default19() {
        return {};
      }
    },
    defaultIndex: Number,
    itemHeight: Number,
    visibleItemCount: Number,
    swipeDuration: Number,
    valueKey: String
  },
  setup: function setup$124(props2, context) {
    return setup({
      props: props2,
      context,
      renderless,
      api,
      mono: true
    });
  }
});
var _hoisted_1$1 = {
  class: "tiny-mobile-picker-column"
};
var _hoisted_2$1 = ["onClick"];
function _sfc_render$2(_ctx, _cache, $props2, $setup2, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode(
    "div",
    {
      class: "tiny-mobile-picker-column__mask",
      style: normalizeStyle(_ctx.state.maskStyle)
    },
    null,
    4
    /* STYLE */
  ), createBaseVNode(
    "div",
    {
      class: "tiny-mobile-picker-column__indicator",
      style: normalizeStyle({
        height: _ctx.itemHeight + "px"
      })
    },
    null,
    4
    /* STYLE */
  ), createBaseVNode(
    "ul",
    {
      class: "tiny-mobile-picker-column__wrapper",
      ref: "track",
      style: normalizeStyle(_ctx.state.wrapperStyle),
      onClick: _cache[1] || (_cache[1] = function($event) {
        return _ctx.onClickItem(1);
      })
    },
    [(openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.state.columnsItem.values, function(item, index3) {
        return openBlock(), createElementBlock("li", {
          class: normalizeClass({
            "tiny-mobile-picker-column__item": true,
            "is-select": index3 === _ctx.state.currentIndex
          }),
          key: index3,
          onClick: withModifiers(function($event) {
            return _ctx.onClickItem(index3);
          }, ["stop"]),
          style: normalizeStyle({
            height: _ctx.itemHeight + "px",
            lineHeight: _ctx.itemHeight + "px"
          }),
          onTransitionend: _cache[0] || (_cache[0] = function() {
            return _ctx.onTransitionEnd && _ctx.onTransitionEnd.apply(_ctx, arguments);
          })
        }, toDisplayString(item), 47, _hoisted_2$1);
      }),
      128
      /* KEYED_FRAGMENT */
    ))],
    4
    /* STYLE */
  )]);
}
var PickerColumn = /* @__PURE__ */ _export_sfc$2(_sfc_main$2, [["render", _sfc_render$2]]);
var version$2 = "3.16.0";
PickerColumn.install = function(Vue) {
  Vue.component(PickerColumn.name, PickerColumn);
};
PickerColumn.version = version$2;
const index$1 = "";
function _createForOfIteratorHelperLoose$1(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc$1 = function _export_sfc224(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose$1(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var $constants$1 = {
  CHILDREN_PICKER: "childrenPicker"
};
var _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: $prefix + "MiniPicker",
  components: {
    PickerColumn
  },
  props: {
    _constants: {
      type: Object,
      default: function _default20() {
        return $constants$1;
      }
    },
    columns: {
      type: Array,
      default: function _default28() {
        return [];
      }
    },
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    confirmButtonText: {
      type: String,
      default: function _default36() {
        return t("ui.miniPicker.confirm");
      }
    },
    cancelButtonText: {
      type: String,
      default: function _default44() {
        return t("ui.miniPicker.cancel");
      }
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    valueKey: {
      type: String,
      default: "text"
    },
    itemHeight: {
      type: Number,
      default: 34
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    swipeDuration: {
      type: Number,
      default: 1e3
    }
  },
  setup: function setup$125(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$1,
      api: api$1,
      mono: true
    });
  }
});
var _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "tiny-mobile-mini-picker__mask"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_2 = {
  class: "tiny-mobile-mini-picker__toolbar"
};
var _hoisted_3 = {
  class: "picker_action picker_title"
};
function _sfc_render$1(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_picker_column = resolveComponent("picker-column");
  return withDirectives((openBlock(), createElementBlock(
    "div",
    {
      class: "tiny-mobile-mini-picker",
      onClick: _cache[2] || (_cache[2] = function() {
        return _ctx.visibleHandle && _ctx.visibleHandle.apply(_ctx, arguments);
      })
    },
    [_hoisted_1, createBaseVNode(
      "div",
      {
        class: normalizeClass(["tiny-mobile-mini-picker__content", _ctx.state.toggle ? "is-toggle" : ""])
      },
      [createBaseVNode("div", _hoisted_2, [renderSlot(_ctx.$slots, "toolbar", {}, function() {
        return [createBaseVNode(
          "div",
          {
            class: "picker_action picker_cancel",
            onClick: _cache[0] || (_cache[0] = function() {
              return _ctx.cancel && _ctx.cancel.apply(_ctx, arguments);
            })
          },
          toDisplayString(_ctx.cancelButtonText),
          1
          /* TEXT */
        ), createBaseVNode(
          "div",
          _hoisted_3,
          toDisplayString(_ctx.title),
          1
          /* TEXT */
        ), createBaseVNode(
          "div",
          {
            class: "picker_action picker_confirm",
            onClick: _cache[1] || (_cache[1] = function() {
              return _ctx.confirm && _ctx.confirm.apply(_ctx, arguments);
            })
          },
          toDisplayString(_ctx.confirmButtonText),
          1
          /* TEXT */
        )];
      })]), createBaseVNode(
        "div",
        {
          class: "tiny-mobile-mini-picker__columns",
          style: normalizeStyle({
            height: _ctx.state.clumnsWrapHeight + "px"
          })
        },
        [(openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.state.formattedColumns, function(item, index3) {
            return openBlock(), createBlock(_component_picker_column, {
              "columns-item": item,
              ref_for: true,
              ref: "childrenPicker" + index3,
              key: index3,
              "default-index": item.defaultIndex || +_ctx.state.defaultIndex,
              "item-height": _ctx.itemHeight,
              "swipe-duration": _ctx.swipeDuration,
              "value-key": _ctx.valueKey,
              onChange: function onChange2($event) {
                return _ctx.change(index3);
              },
              "visible-item-count": _ctx.visibleItemCount
            }, null, 8, ["columns-item", "default-index", "item-height", "swipe-duration", "value-key", "onChange", "visible-item-count"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))],
        4
        /* STYLE */
      )],
      2
      /* CLASS */
    )],
    512
    /* NEED_PATCH */
  )), [[vShow, _ctx.visible]]);
}
var MiniPicker = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["render", _sfc_render$1]]);
var version$1 = "3.16.0";
MiniPicker.install = function(Vue) {
  Vue.component(MiniPicker.name, MiniPicker);
};
MiniPicker.version = version$1;
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var _export_sfc = function _export_sfc225(sfc, props2) {
  var target = sfc.__vccOpts || sfc;
  for (var _iterator = _createForOfIteratorHelperLoose(props2), _step; !(_step = _iterator()).done; ) {
    var _step$value = _step.value, key = _step$value[0], val = _step$value[1];
    target[key] = val;
  }
  return target;
};
var _sfc_main = defineComponent({
  components: {
    TinyMiniPicker: MiniPicker,
    TinyInput: Input,
    IconClose: index$f()
  },
  props: [].concat(props, ["modelValue", "type", "clearable", "visible", "minDate", "maxDate", "formatter"]),
  setup: function setup$126(props2, context) {
    return setup({
      props: props2,
      context,
      renderless: renderless$2,
      api: api$2
    });
  }
});
function _sfc_render(_ctx, _cache, $props2, $setup2, $data, $options) {
  var _component_icon_close = resolveComponent("icon-close");
  var _component_tiny_input = resolveComponent("tiny-input");
  var _component_tiny_mini_picker = resolveComponent("tiny-mini-picker");
  return openBlock(), createElementBlock("div", null, [createVNode(_component_tiny_input, {
    onHookMounted: _ctx.hookMounted,
    modelValue: _ctx.state.displayValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
      return _ctx.state.displayValue = $event;
    }),
    ref: "refrence",
    onFocus: _ctx.showPickerAndLockScroll,
    readOnly: "true",
    _mode: _ctx._mode
  }, {
    default: withCtx(function() {
      return [!_ctx.state.clearable ? (openBlock(), createBlock(_component_icon_close, {
        key: 0,
        slot: "suffix",
        onClick: _ctx.clearDisplayValue
      }, null, 8, ["onClick"])) : createCommentVNode("v-if", true)];
    }),
    _: 1
    /* STABLE */
  }, 8, ["onHookMounted", "modelValue", "onFocus", "_mode"]), createVNode(_component_tiny_mini_picker, {
    visible: _ctx.state.visible,
    "onUpdate:visible": _cache[1] || (_cache[1] = function($event) {
      return _ctx.state.visible = $event;
    }),
    ref: "picker",
    columns: _ctx.state.columns,
    onChange: _ctx.onChange,
    onConfirm: _ctx.onConfirm,
    onCancel: _ctx.onCancel
  }, null, 8, ["visible", "columns", "onChange", "onConfirm", "onCancel"])]);
}
var mobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const index = "";
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var template = function template210(mode) {
  var _process$env;
  var tinyMode = typeof process === "object" ? (_process$env = {}) == null ? void 0 : _process$env.TINY_MODE : null;
  if ("pc" === (tinyMode || mode)) {
    return DatePicker$1;
  }
  if ("mobile" === (tinyMode || mode)) {
    return mobile;
  }
  return DatePicker$1;
};
var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
var $constants = {
  MonthDay: 32,
  Minutes: 59,
  Hours: 23,
  TotalMonth: 12,
  Max: "max",
  Min: "min",
  Hour: "hour",
  Minute: "minute",
  CapYear: "Year",
  CapMonth: "Month",
  CapDate: "Date",
  CapHour: "Hour",
  CapMinute: "Minute",
  YearMonth: "year-month",
  DateTime: "datetime",
  Date: "date",
  HookMounted: "hook-mounted",
  Hidden: "hidden",
  Year: "year",
  Day: "day"
};
var validator8 = function validator24(value) {
  var result = value === null || value === void 0 || typeof value === "string" || value instanceof String || Array.isArray(value) && value.length === 2 && value.every(function(item) {
    return typeof item === "string" || item instanceof String;
  });
  return result;
};
var $props = {
  "tiny_mode": String,
  "tiny_mode_root": Boolean,
  "tiny_template": [Function, Object],
  "tiny_renderless": Function,
  "tiny_theme": String,
  "tiny_chart_theme": Object
};
var datePickerProps = _extends({}, $props, {
  tabindex: {
    type: String,
    default: "0"
  },
  timeFormat: String,
  suffixIcon: Object,
  label: String,
  shape: String,
  tip: String,
  changeOnConfirm: {
    type: Boolean,
    default: false
  },
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  isutc8: {
    type: Boolean,
    default: false
  },
  dbTimezone: Number,
  timezoneOffset: Number,
  iso8601: Boolean,
  autoFormat: {
    type: Boolean,
    default: false
  },
  title: String,
  blank: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "date"
  },
  _constants: {
    type: Object,
    default: function _default21() {
      return $constants;
    }
  },
  timeArrowControl: Boolean,
  timeEditable: {
    type: Boolean,
    default: true
  },
  size: String,
  format: String,
  valueFormat: String,
  readonly: Boolean,
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  prefixIcon: Object,
  clearIcon: {
    type: Object,
    default: function _default29() {
      return index$n();
    }
  },
  name: {
    default: "",
    validator: validator8
  },
  disabled: Boolean,
  clearable: {
    type: Boolean,
    default: true
  },
  id: {
    default: "",
    validator: validator8
  },
  popperClass: String,
  editable: {
    type: Boolean,
    default: true
  },
  align: {
    type: String,
    default: "left"
  },
  modelValue: {},
  defaultValue: {},
  defaultTime: {},
  rangeSeparator: {
    type: [Object, String],
    default: "-"
  },
  pickerOptions: {},
  unlinkPanels: Boolean,
  validateEvent: {
    type: Boolean,
    default: true
  },
  isRange: Boolean,
  arrowControl: Boolean,
  timezoneData: {},
  showTimezone: {
    type: Boolean,
    default: false
  },
  defaultTimezone: {},
  visible: Boolean,
  minDate: {
    type: Date,
    default: function _default37() {
      return new Date(currentYear - 10, 0, 1);
    },
    validator: function validator32(val) {
      return Object.prototype.toString.call(val) === "[object Date]" && !isNaN(val.getTime());
    }
  },
  maxDate: {
    type: Date,
    default: function _default45() {
      return new Date(currentYear + 10, 11, 31);
    },
    validator: function validator42(val) {
      return Object.prototype.toString.call(val) === "[object Date]" && !isNaN(val.getTime());
    }
  },
  formatter: {
    type: Function,
    default: function _default53(type, value) {
      return value;
    }
  },
  componentName: {
    type: String,
    default: "DatePicker"
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  step: {
    type: Object,
    default: function _default62() {
      return {
        hour: 1,
        minute: 1,
        second: 1
      };
    }
  },
  showWeekNumber: {
    type: Boolean,
    default: false
  },
  formatWeeks: Function,
  changeCompat: {
    type: Boolean,
    default: false
  }
});
var DatePicker = defineComponent({
  name: $prefix + "DatePicker",
  props: datePickerProps,
  setup: function setup10(props2, context) {
    return $setup({
      props: props2,
      context,
      template
    });
  }
});
var version = "3.16.0";
DatePicker.model = {
  prop: "modelValue",
  event: "update:modelValue"
};
DatePicker.install = function(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};
DatePicker.version = version;
export {
  DatePicker as D
};
