import { bz as log, bA as hasOwn, A as __spreadValues, aH as isNull, bB as isFunction, z as __spreadProps, q as isDate, E as isNumber, aY as isObject, aZ as typeOf, bC as isNullOrEmpty, ai as format$1, bD as getLength } from "./index.js";
const formatRegExp = /%[sdj%]/g;
const warning = () => void 0;
function convertFieldsError(errors) {
  if (!errors || !errors.length) {
    return null;
  }
  const fields = {};
  errors.forEach((error) => {
    const field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(i18nTemplate, ...rest) {
  if (typeof i18nTemplate === "function") {
    return i18nTemplate(...rest);
  }
  if (typeof i18nTemplate === "string") {
    let i = 0;
    const len = rest.length;
    let str = String(i18nTemplate).replace(formatRegExp, (matchChar) => {
      if (matchChar === "%%") {
        return "%";
      }
      if (i >= len) {
        return matchChar;
      }
      switch (matchChar) {
        case "%j":
          try {
            return JSON.stringify(rest[i++]);
          } catch (e) {
            return "[Circular]";
          }
        case "%d":
          return Number(rest[i++]);
        case "%s":
          return String(rest[i++]);
        default:
          return matchChar;
      }
    });
    return str;
  }
  return i18nTemplate;
}
function isNativeStringType(type) {
  return [
    "string",
    "url",
    "hex",
    "email",
    "pattern",
    "digits",
    "time",
    "dateYMD",
    "longDateTime",
    "dateTime",
    "dateYM",
    "version",
    "speczh",
    "specialch",
    "specialch2",
    "acceptImg",
    "acceptFile",
    "fileSize"
  ].includes(type);
}
function isEmptyValue(data, dataType) {
  if (isNull(data)) {
    return true;
  }
  if (dataType === "array" && Array.isArray(data) && !data.length) {
    return true;
  }
  if (isNativeStringType(dataType) && typeof data === "string" && !data) {
    return true;
  }
  return false;
}
function isEmptyObject(data) {
  return Object.keys(data).length === 0;
}
function asyncParallelArray(arrData, func, callback) {
  let count = 0;
  const results = [];
  const arrLength = arrData.length;
  function checkCount(errors) {
    results.push(...errors);
    count++;
    if (count === arrLength) {
      callback(results);
    }
  }
  arrData.forEach((rule) => {
    func(rule, checkCount);
  });
}
function asyncSerialArray(arr, fn, cb) {
  let idx = 0;
  const arrLength = arr.length;
  function checkNext(errorList) {
    if (errorList && errorList.length) {
      cb(errorList);
      return;
    }
    const original = idx;
    idx = idx + 1;
    if (original < arrLength) {
      fn(arr[original], checkNext);
    } else {
      cb([]);
    }
  }
  checkNext([]);
}
function flattenObjArr(objArr) {
  const result = [];
  Object.keys(objArr).forEach((item) => {
    result.push(...objArr[item]);
  });
  return result;
}
function asyncMap(objArray, option, func, callback) {
  if (option.first) {
    const pending2 = new Promise((resolve, reject) => {
      const errorFn = reject;
      const next = (errors) => {
        callback(errors);
        return errors.length ? errorFn({ errors, fields: convertFieldsError(errors) }) : resolve();
      };
      const flattenArr = flattenObjArr(objArray);
      asyncSerialArray(flattenArr, func, next);
    });
    pending2.catch((error) => error.errors && error.fields || log.logger.error(error));
    return pending2;
  }
  let firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArray);
  }
  let total = 0;
  const objArrayKeys = Object.keys(objArray);
  const objArrLength = objArrayKeys.length;
  const results = [];
  const pending = new Promise((resolve, reject) => {
    const errorFn = reject;
    const next = (errors) => {
      results.push(...errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? errorFn({ errors: results, fields: convertFieldsError(results) }) : resolve();
      }
    };
    objArrayKeys.forEach((key) => {
      const arr = objArray[key];
      if (firstFields.includes(key)) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending.catch((error) => error.errors && error.fields || log.logger.error(error));
  return pending;
}
function complementError(rule) {
  return (onError) => {
    if (onError && onError.message) {
      onError.field = onError.field || rule.fullField;
      return onError;
    }
    return {
      message: typeof onError === "function" ? onError() : onError,
      field: onError.field || rule.fullField
    };
  };
}
function deepMerge(target, sources) {
  if (!sources) {
    return target;
  }
  for (const source in sources) {
    if (hasOwn.call(sources, source)) {
      const value = sources[source];
      if (typeof value === "object" && typeof target[source] === "object") {
        target[source] = __spreadValues(__spreadValues({}, target[source]), value);
      } else {
        target[source] = value;
      }
    }
  }
  return target;
}
const util = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  asyncMap,
  complementError,
  convertFieldsError,
  deepMerge,
  format,
  isEmptyObject,
  isEmptyValue,
  warning
}, Symbol.toStringTag, { value: "Module" }));
function Schema(descriptor, translate) {
  Schema.getSystemMessage = () => Schema.getDefaultMessage(translate);
  Schema.messages = Schema.getSystemMessage(translate);
  Schema.systemMessages = Schema.messages;
  this.rules = null;
  this._messages = Schema.systemMessages;
  this.define(descriptor);
}
const getCompleteFn = (validCallback) => (results) => {
  let idx;
  let errors = [];
  let fields = {};
  function addValid(eror) {
    if (Array.isArray(eror)) {
      errors = errors.concat(...eror);
    } else {
      errors.push(eror);
    }
  }
  for (idx = 0; idx < results.length; idx++) {
    addValid(results[idx]);
  }
  if (errors.length) {
    fields = convertFieldsError(errors);
  } else {
    errors = null;
    fields = null;
  }
  validCallback(errors, fields);
};
const isDeep = (rule, data) => {
  let deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
  deep = deep && (rule.required || !rule.required && data.value);
  return deep;
};
const getFieldsSchema = (rule, data) => {
  let schema = {};
  function addFullfield(key, item) {
    return __spreadProps(__spreadValues({}, item), {
      fullField: `${rule.fullField}.${key}`
    });
  }
  if (rule.defaultField) {
    for (const k in data.value) {
      if (hasOwn.call(data.value, k)) {
        schema[k] = rule.defaultField;
      }
    }
  }
  schema = __spreadValues(__spreadValues({}, schema), data.rule.fields);
  for (const f in schema) {
    if (hasOwn.call(schema, f)) {
      const fieldSchema = Array.isArray(schema[f]) ? schema[f] : [schema[f]];
      schema[f] = fieldSchema.map(addFullfield.bind(null, f));
    }
  }
  return schema;
};
const arrayed = (failds) => {
  if (!Array.isArray(failds)) {
    failds = [failds];
  }
  return failds;
};
const getRequiredErrorFeilds = ({ rule, failds, options }) => {
  if (rule.message) {
    failds = [].concat(rule.message).map(complementError(rule));
  } else if (options.error) {
    failds = [options.error(rule, format(options.messages.required, rule.field))];
  } else {
    failds = [];
  }
  return failds;
};
const setDataRuleOptions = ({ data, options }) => {
  if (data.rule.options) {
    let { messages, error } = options;
    Object.assign(data.rule.options, { messages, error });
  }
};
const getValidateCallback = ({ failds, doIt }) => (errs) => {
  const finalErrors = [];
  if (failds && failds.length) {
    finalErrors.push(...failds);
  }
  if (errs && errs.length) {
    finalErrors.push(...errs);
  }
  doIt(finalErrors.length ? finalErrors : null);
};
const asyncCallback = (options, rule, errorFields, doIt, data) => (e = []) => {
  let failds = e;
  const deep = isDeep(rule, data);
  failds = arrayed(failds);
  if (!options.suppressWarning && failds.length) {
    Schema.warning("async-validator:", failds);
  }
  if (failds.length && rule.message) {
    failds = [].concat(rule.message);
  }
  failds = failds.map(complementError(rule));
  if (options.first && failds.length) {
    errorFields[rule.field] = 1;
    return doIt(failds);
  }
  if (deep) {
    if (rule.required && !data.value) {
      failds = getRequiredErrorFeilds({ rule, failds, options });
      return doIt(failds);
    }
    const schema = new Schema(getFieldsSchema(rule, data));
    schema.messages(options.messages);
    setDataRuleOptions({ data, options });
    schema.validate(data.value, data.rule.options || options, getValidateCallback({ failds, doIt }));
  } else {
    doIt(failds);
  }
};
Schema.prototype = {
  messages(messages) {
    if (messages) {
      this._messages = deepMerge(Schema.getSystemMessage(), messages);
    }
    return this._messages;
  },
  /** 格式化检验规则并添加到实例上。
   *  rules格式化后的数据结构: { key: [ { type: 'xx', ...others } ] }
   */
  define(rules) {
    if (!rules) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (Array.isArray(rules) || typeof rules !== "object") {
      throw new TypeError("Rules must be an object");
    }
    this.rules = {};
    let rule;
    Object.keys(rules).forEach((key) => {
      if (hasOwn.call(rules, key)) {
        rule = rules[key];
        this.rules[key] = Array.isArray(rule) ? rule : [rule];
      }
    });
  },
  /** 将检验规则和源数据合并转化成新数据
   *  rules: { key: [rule1, rule2] }, source: { key: sourceData, key2: sourceData2 }
   *  series { key: [{ rule: rule1, value: sourceData, source, field: key }, ...] }
   */
  getSeries(options, source, source_) {
    let arr;
    let value;
    const series = {};
    const keys = options.keys || Object.keys(this.rules);
    keys.forEach((key) => {
      arr = this.rules[key];
      value = source[key];
      arr.forEach((r) => {
        let rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = __spreadValues({}, source);
          }
          source[key] = rule.transform(value);
          value = source[key];
        }
        if (typeof rule === "function") {
          rule = { validator: rule };
        } else {
          rule = __spreadValues({}, rule);
        }
        rule.validator = this.getValidationMethod(rule);
        rule.field = key;
        rule.fullField = rule.fullField || key;
        rule.type = this.getType(rule);
        options.custom && Object.assign(rule, options.custom);
        if (!rule.validator) {
          return;
        }
        series[key] = series[key] || [];
        series[key].push({ rule, value, source, field: key });
      });
    });
    return series;
  },
  mergeMessage(options) {
    if (options.messages) {
      let messages = this.messages();
      if (messages === Schema.systemMessages) {
        messages = Schema.getSystemMessage();
      }
      deepMerge(messages, options.messages);
      options.messages = messages;
    } else {
      options.messages = this.messages();
    }
  },
  validate(source_, o = {}, oc = () => void 0) {
    let source = source_;
    let options = o;
    let validCallback = oc;
    if (typeof options === "function") {
      validCallback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      validCallback && validCallback();
      return Promise.resolve();
    }
    const complete = getCompleteFn(validCallback);
    this.mergeMessage(options);
    const seriesData = this.getSeries(options, source, source_);
    const errorFields = {};
    return asyncMap(
      seriesData,
      options,
      (data, doIt) => {
        const rule = data.rule;
        const validHandler = asyncCallback(options, rule, errorFields, doIt, data);
        let validResult;
        if (rule.asyncValidator) {
          validResult = rule.asyncValidator(rule, data.value, validHandler, data.source, options);
        } else if (rule.validator) {
          validResult = rule.validator(rule, data.value, validHandler, data.source, options);
          if (validResult === true) {
            validHandler();
          } else if (validResult === false) {
            validHandler(rule.message || `${rule.field} fails`);
          } else if (Array.isArray(validResult)) {
            validHandler(validResult);
          } else if (validResult instanceof Error) {
            validHandler(validResult.message);
          }
        }
        if (validResult && validResult.then) {
          validResult.then(
            () => validHandler(),
            (e) => validHandler(e)
          );
        }
      },
      (results) => {
        complete(results);
      }
    );
  },
  getValidationMethod(rule) {
    if (isFunction(rule.validator)) {
      return rule.validator;
    }
    const ruleKeys = Object.keys(rule);
    const messageIndex = ruleKeys.indexOf("message");
    if (messageIndex > -1) {
      ruleKeys.splice(messageIndex, 1);
    }
    if (ruleKeys.length === 1 && ruleKeys[0] === "required") {
      return Schema.validators.required;
    }
    return Schema.validators[this.getType(rule)] || false;
  },
  getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !hasOwn.call(Schema.validators, rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  }
};
Schema.register = (type, validator) => {
  if (typeof validator !== "function") {
    throw new TypeError("Cannot register a validator by type, validator is not a function");
  }
  Schema.validators[type] = validator;
};
Schema.validators = {};
Schema.warning = warning;
Schema.messages = {};
Schema.systemMessages = {};
Schema.getDefaultMessage = () => void 0;
var schema_default = Schema;
function required_default$1({ rule, checkValue, source, errors, options, type }) {
  if (rule.required && (!hasOwn.call(source, rule.field) || isEmptyValue(checkValue, type || rule.type))) {
    errors.push(format(options.messages.required, ""));
  }
}
const emailReg1 = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))';
const emailReg = new RegExp(
  emailReg1 + "@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,6}))$"
);
const pattern = {
  acceptImg: /\.(png|jpe?g|gif)$/,
  acceptFile: /\.(doc?x|xls?x|ppt?x|txt)$/,
  email: emailReg,
  fileSize: /^\d+(\.\d+)?[KMGTPEZY]?B$/i,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  speczh: /^[0-9a-zA-Z_\u4E00-\u9FA5]+$/,
  specialch: /^[0-9a-zA-Z_\-.]+$/,
  specialch2: /^[0-9a-zA-Z_-]+$/,
  url: /^(([a-zA-Z]{3,}):)?\/\/([\w-]+\.)+[\w]+(\/[a-zA-Z- ./?%&=]*)?/i,
  version: /^\d+\.\d+(\.\d+)*$/
};
const types = {
  integer: (value) => types.number(value) && /^[-]?[\d]+$/.test(value),
  float: (value) => types.number(value) && !types.integer(value),
  array: Array.isArray,
  regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: isDate,
  number: (value) => isNumber(Number(value)),
  object: (value) => isObject(value) && !types.array(value),
  method: (value) => typeOf(value) === "function",
  email: (value) => isNullOrEmpty(value) || !!value.match(pattern.email) && value.length < 255,
  url: (value) => isNullOrEmpty(value) || !!value.match(pattern.url),
  hex: (value) => isNullOrEmpty(value) || !!value.match(pattern.hex),
  digits: (value) => isNullOrEmpty(value) || /^\d+$/.test(value),
  time: (value) => isNullOrEmpty(value) || /^((0)[0-9]|1[0-9]|20|21|22|23):([0-5][0-9])$/.test(value),
  dateYM: (value) => isNullOrEmpty(value) || format$1(value, "yyyy-MM") === value,
  dateYMD: (value) => isNullOrEmpty(value) || format$1(value, "yyyy-MM-dd") === value,
  dateTime: (value) => isNullOrEmpty(value) || format$1(value, "yyyy-MM-dd hh:mm") === value,
  longDateTime: (value) => isNullOrEmpty(value) || format$1(value, "yyyy-MM-dd hh:mm:ss") === value,
  version: (value) => isNullOrEmpty(value) || !!value.match(pattern.version),
  speczh: (value) => isNullOrEmpty(value) || !!value.match(pattern.speczh),
  specialch: (value) => isNullOrEmpty(value) || !!value.match(pattern.specialch),
  specialch2: (value) => isNullOrEmpty(value) || !!value.match(pattern.specialch2),
  acceptImg: (value) => isNullOrEmpty(value) || !!value.match(pattern.acceptImg),
  acceptFile: (value) => isNullOrEmpty(value) || !!value.match(pattern.acceptFile),
  fileSize: (value) => isNullOrEmpty(value) || !!value.match(pattern.fileSize)
};
function type_default$1(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required_default$1(rule);
    return;
  }
  const custom = [
    "array",
    "acceptImg",
    "acceptFile",
    "date",
    "digits",
    "dateTime",
    "dateYM",
    "dateYMD",
    "email",
    "float",
    "fileSize",
    "hex",
    "integer",
    "longDateTime",
    "method",
    "number",
    "object",
    "regexp",
    "speczh",
    "specialch",
    "specialch2",
    "time",
    "version",
    "url"
  ];
  const ruleType = rule.type;
  if (custom.includes(ruleType)) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], "", rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], "", rule.type));
  }
}
function getErro({ min, max, val, key, rule, errors, util: util2, options }) {
  if (min && !max && val < rule.min) {
    errors.push(util2.format(options.messages[key].min, "", rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(util2.format(options.messages[key].max, "", rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(util2.format(options.messages[key].range, "", rule.min, rule.max));
  }
}
function range_default(rule, checkValue, source, errors, options) {
  const len = isNumber(rule.len);
  const min = isNumber(rule.min);
  const max = isNumber(rule.max);
  let val = checkValue;
  let key = null;
  const num = isNumber(Number(checkValue));
  const str = typeof checkValue === "string";
  const arr = Array.isArray(checkValue);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = checkValue.length;
  }
  if (str) {
    val = getLength(checkValue, "string");
  }
  if (rule.type === "number") {
    val = checkValue;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, "", rule.len));
    }
  } else {
    getErro({ min, max, val, key, rule, errors, util, options });
  }
}
const ENUM$1 = "enum";
function enum_default$1(rule, checkValue, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
  if (!rule[ENUM$1].includes(checkValue)) {
    errors.push(format(options.messages[ENUM$1], "", rule[ENUM$1].join(", ")));
  }
}
function pattern_default$1(rule, checkValue, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(checkValue)) {
        errors.push(format(options.messages.pattern.mismatch, "", checkValue, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      const _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(checkValue)) {
        errors.push(format(options.messages.pattern.mismatch, "", checkValue, rule.pattern));
      }
    }
  }
}
function whitespace_default(rule, checkValue, source, errors, options) {
  if (/^\s+$/.test(checkValue) || checkValue === "") {
    errors.push(format(options.messages.whitespace, ""));
  }
}
var rules_default = {
  type: type_default$1,
  range: range_default,
  pattern: pattern_default$1,
  required: required_default$1,
  whitespace: whitespace_default,
  enum: enum_default$1
};
function date_default(rule, checkValue, callback, source, options) {
  const errors = [];
  const validate = rule.required || !rule.required && hasOwn.call(source, rule.field);
  const isValidDateStr = (value) => value && typeof value === "string" && new Date(value).toString() !== "Invalid Date";
  if (validate) {
    if (isEmptyValue(checkValue) && !rule.required) {
      return callback();
    }
    rules_default.required({ rule, checkValue, source, errors, options });
    if (!isEmptyValue(checkValue)) {
      let dateObject;
      if (typeof checkValue === "number" || isValidDateStr(checkValue)) {
        dateObject = new Date(checkValue);
      } else {
        dateObject = checkValue;
      }
      rules_default.type(rule, dateObject, source, errors, options);
      if (dateObject && typeof dateObject.getTime === "function") {
        rules_default.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}
function type_default(rule, checkValue, callback, source, options) {
  const ruleType = rule.type;
  const errors = [];
  const validate = rule.required || !rule.required && hasOwn.call(source, rule.field);
  if (validate) {
    if (isEmptyValue(checkValue, ruleType) && !rule.required) {
      return callback();
    }
    rules_default.required({
      rule,
      checkValue,
      source,
      errors,
      options,
      type: ruleType
    });
    if (!isEmptyValue(checkValue, ruleType)) {
      rules_default.type(rule, checkValue, source, errors, options);
    }
  }
  callback(errors);
}
function float_default(rule, checkValue, cb, source, options) {
  const errors = [];
  const validate = rule.required || !rule.required && hasOwn.call(source, rule.field);
  if (validate) {
    if (isEmptyValue(checkValue) && !rule.required) {
      return cb();
    }
    rules_default.required({ rule, checkValue, source, errors, options });
    if (checkValue !== void 0) {
      rules_default.type(rule, checkValue, source, errors, options);
      rules_default.range(rule, checkValue, source, errors, options);
    }
  }
  cb(errors);
}
function array_default(rule, checkValue, callback, source, options) {
  const errors = [];
  const validate = rule.required || !rule.required && hasOwn.call(source, rule.field);
  if (validate) {
    if (isEmptyValue(checkValue, "array") && !rule.required) {
      return callback();
    }
    rules_default.required({ rule, checkValue, source, errors, options, type: "array" });
    if (!isEmptyValue(checkValue, "array")) {
      rules_default.type(rule, checkValue, source, errors, options);
      rules_default.range(rule, checkValue, source, errors, options);
    }
  }
  callback(errors);
}
function string_default(rule, checkValue, callback, source, options) {
  const errors = [];
  const validate = rule.required || !rule.required && hasOwn.call(source, rule.field);
  if (validate) {
    if (isEmptyValue(checkValue, "string") && !rule.required) {
      return callback();
    }
    rules_default.required({
      rule,
      checkValue,
      source,
      errors,
      options,
      type: "string"
    });
    if (!isEmptyValue(checkValue, "string")) {
      rules_default.type(rule, checkValue, source, errors, options);
      rules_default.range(rule, checkValue, source, errors, options);
      rules_default.pattern(rule, checkValue, source, errors, options);
      if (rule.whitespace === true) {
        rules_default.whitespace(rule, checkValue, source, errors, options);
      }
    }
  }
  callback(errors);
}
function method_default(rule, checkValue, callback, source, options) {
  const validate = rule.required || !rule.required && hasOwn.call(source, rule.field);
  const errors = [];
  if (validate) {
    if (!rule.required && isEmptyValue(checkValue)) {
      return callback();
    }
    rules_default.required({ rule, checkValue, source, errors, options });
    if (checkValue !== void 0) {
      rules_default.type(rule, checkValue, source, errors, options);
    }
  }
  callback(errors);
}
function number_default(rule, checkValue, callback, source, options) {
  const errors = [];
  const validate = rule.required || !rule.required && hasOwn.call(source, rule.field);
  if (validate) {
    if (checkValue === "") {
      checkValue = void 0;
    }
    if (!rule.required && isEmptyValue(checkValue)) {
      return callback();
    }
    rules_default.required({ rule, checkValue, source, errors, options });
    if (checkValue !== void 0) {
      rules_default.type(rule, checkValue, source, errors, options);
      rules_default.range(rule, checkValue, source, errors, options);
    }
  }
  callback(errors);
}
function integer_default(rule, checkValue, callback, source, options) {
  const errors = [];
  const validate = rule.required || !rule.required && hasOwn.call(source, rule.field);
  if (validate) {
    if (isEmptyValue(checkValue) && !rule.required) {
      return callback();
    }
    rules_default.required({ rule, checkValue, source, errors, options });
    if (checkValue !== void 0 && checkValue !== "") {
      rules_default.type(rule, checkValue, source, errors, options);
      rules_default.range(rule, checkValue, source, errors, options);
    }
  }
  callback(errors);
}
function pattern_default(rule, checkValue, callback, source, options) {
  const errors = [];
  const validate = rule.required || !rule.required && hasOwn.call(source, rule.field);
  if (validate) {
    if (isEmptyValue(checkValue, "string") && !rule.required) {
      return callback();
    }
    rules_default.required({ rule, checkValue, source, errors, options });
    if (!isEmptyValue(checkValue, "string")) {
      rules_default.pattern(rule, checkValue, source, errors, options);
    }
  }
  callback(errors);
}
function required_default(rule, checkValue, callback, source, options) {
  const errors = [];
  const type = Array.isArray(checkValue) ? "array" : typeof checkValue;
  rules_default.required({ rule, checkValue, source, errors, options, type });
  callback(errors);
}
const ENUM = "enum";
function enum_default(rule, checkValue, callback, source, options) {
  const errors = [];
  const validate = rule.required || !rule.required && hasOwn.call(source, rule.field);
  if (validate) {
    if (isEmptyValue(checkValue) && !rule.required) {
      return callback();
    }
    rules_default.required({ rule, checkValue, source, errors, options });
    if (checkValue !== void 0) {
      rules_default[ENUM](rule, checkValue, source, errors, options);
    }
  }
  callback(errors);
}
var validations_default = {
  date: date_default,
  float: float_default,
  array: array_default,
  string: string_default,
  method: method_default,
  number: number_default,
  integer: integer_default,
  pattern: pattern_default,
  required: required_default,
  hex: type_default,
  url: type_default,
  time: type_default,
  email: type_default,
  digits: type_default,
  dateYM: type_default,
  speczh: type_default,
  dateYMD: type_default,
  version: type_default,
  fileSize: type_default,
  regexp: method_default,
  object: method_default,
  dateTime: type_default,
  specialch: type_default,
  boolean: method_default,
  acceptImg: type_default,
  specialch2: type_default,
  acceptFile: type_default,
  longDateTime: type_default,
  enum: enum_default
};
const getTypesObj = (translate) => ({
  string: translate("validation.types.string"),
  method: translate("validation.types.method"),
  array: translate("validation.types.array"),
  object: translate("validation.types.object"),
  number: translate("validation.types.number"),
  date: translate("validation.types.date"),
  boolean: translate("validation.types.boolean"),
  integer: translate("validation.types.integer"),
  float: translate("validation.types.float"),
  regexp: translate("validation.types.regexp"),
  email: translate("validation.types.email"),
  url: translate("validation.types.url"),
  hex: translate("validation.types.hex"),
  digits: translate("validation.types.digits"),
  time: translate("validation.types.time"),
  dateYM: translate("validation.types.dateYM"),
  dateYMD: translate("validation.types.dateYMD"),
  dateTime: translate("validation.types.dateTime"),
  longDateTime: translate("validation.types.longDateTime"),
  version: translate("validation.types.version"),
  speczh: translate("validation.types.speczh"),
  specialch: translate("validation.types.specialch"),
  specialch2: translate("validation.types.hex"),
  acceptImg: translate("validation.types.acceptImg"),
  acceptFile: translate("validation.types.acceptFile"),
  fileSize: translate("validation.types.fileSize")
});
var messages_default = (translate = (value) => value) => ({
  default: translate("validation.default"),
  required: translate("validation.required"),
  enum: translate("validation.enum"),
  whitespace: translate("validation.whitespace"),
  date: {
    format: translate("validation.date.format"),
    parse: translate("validation.date.parse"),
    invalid: translate("validation.date.invalid")
  },
  types: getTypesObj(translate),
  string: {
    len: translate("validation.string.len"),
    min: translate("validation.string.min"),
    max: translate("validation.string.max"),
    range: translate("validation.string.range")
  },
  number: {
    len: translate("validation.number.len"),
    min: translate("validation.number.min"),
    max: translate("validation.number.max"),
    range: translate("validation.number.range")
  },
  array: {
    len: translate("validation.array.len"),
    min: translate("validation.array.min"),
    max: translate("validation.array.max"),
    range: translate("validation.array.range")
  },
  pattern: {
    mismatch: translate("validation.pattern.mismatch")
  }
});
schema_default.validators = validations_default;
schema_default.getDefaultMessage = messages_default;
var validate_default = schema_default;
export {
  validate_default as v
};
