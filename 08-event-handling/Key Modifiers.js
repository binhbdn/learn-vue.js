Vue.config.keyCodes = {
    v: 86,
    f1: 112,
    // camelCase won`t work
    mediaPlayPause: 179,
    // instead you can use kebab-case with double quotation marks
    "media-play-pause": 179,
    up: [38, 87]
}
var vm = new Vue({
    el: '#app5',
    methods: {
        onSubmit: function () {
            alert('onSubmit: bạn vừa ấn phím Enter!')
        },
        test_v_key: function () {
            alert('test_v_key: bạn vừa ấn phím "v"')
        },
        test_media_key: function () {
            alert('test_media_key: bạn vừa ấn phím "Media"')
        },
        onPageDown: function () {
            alert('onPageDown: bạn vừa ấn phím "PageDown"')
        }
    }
})