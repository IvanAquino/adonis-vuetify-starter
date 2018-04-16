const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
    const View = use('View')
    View.global('absoluteUrl', function (path) {
        const req = this.resolve('request')
        let baseUrl = req.secure() ? 'https://' : 'http://'
        baseUrl += req.headers().host
        if (typeof path !== 'undefined') {
            path = (path.substring(0, 1) === '/') ? path.substring(1) : path
            return baseUrl + path
        }
        return baseUrl
    })
})