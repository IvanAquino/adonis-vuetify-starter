export default function (Vue) {

    Vue.auth = {

        destroyToken() {
            localStorage.removeItem('token')
            localStorage.clear()
        },

        getToken() {
            let token = localStorage.getItem('token')
            if (!token) return null

            return 'Bearer ' + token;
        },

        setToken(token) {
            localStorage.setItem('token', token)
        },

        isAuthenticated() {
            if (this.getToken())
                return true;
            return false;
        }

    }

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: () => {
                return Vue.auth
            }
        }
    })

}