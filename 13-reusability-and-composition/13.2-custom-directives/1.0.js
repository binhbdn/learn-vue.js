// Đăng kí một directive tùy biến cấp toàn cục với tên là `v-focus`
Vue.directive('focus', {
    // Khi phần tử liên quan được thêm vào DOM...
    inserted: function (el) {
        // Ta gán focus vào phần tử đó
        el.focus()
    }
})

new Vue({
    el: '#app10'
})