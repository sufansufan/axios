import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.165:8081/PxxTiKu/home/";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf8";

// http request 请求拦截器
axios.interceptors.request.use(
    config => {
        console.log(config);
        config.data = Object.assign({}, config.data, {
            source: "1",
            token: "",
            vcode: "1",
            appKey: ""
        });
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 服务器响应拦截器
axios.interceptors.response.use(
    response => {
        switch (response.data.code) {
            case "10000":
                break;
        }
        return response;
    },
    error => {
        // if (error.response) {
        //   switch (error.response.status) {
        //     case 401:
        //       // 这里写清除token的代码
        //       router.replace({
        //         path: "login",
        //         query: { redirect: router.currentRoute.fullPath } //登录成功后跳入浏览的当前页面
        //       });
        //   }
        // }
        return Promise.reject(error.response.data);
    }
);

export default axios;