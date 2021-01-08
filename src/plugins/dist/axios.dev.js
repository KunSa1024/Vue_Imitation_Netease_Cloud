"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _axios2 = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
var config = {
  // baseURL: 'http://musicapi.leanapp.cn/' // 设置请求的域名 接口版本 v1 v2
  baseURL: 'http://music.kele8.cn/' // 设置请求的域名 接口版本 v1 v2
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control

};

var _axios = _axios2["default"].create(config);

_axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
}); // Add a response interceptor


_axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

Plugin.install = function (Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get: function get() {
        return _axios;
      }
    },
    $axios: {
      get: function get() {
        return _axios;
      }
    },
    $http: {
      get: function get() {
        return _axios;
      }
    }
  });
};

_vue["default"].use(Plugin);

var _default = Plugin;
exports["default"] = _default;