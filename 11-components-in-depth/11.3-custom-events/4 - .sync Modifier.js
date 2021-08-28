Vue.component('text-document', {
    props: ['title','content'],
    template:`<p v-bind:title="title"> {{content}} </p>`
})

new Vue({
    el: '#app4',
    data: {
        doc: {
            title: 'Bình test title',
            content: 'Nội dung rất chi là dài ....'
        }
    }
})