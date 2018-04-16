import axios from 'axios';

export default function (Vue) {

    Vue.axios = axios;

    Object.defineProperties(Vue.prototype, {
        $http: {
            get: () => {
                return Vue.axios
            }
        }
    })

}