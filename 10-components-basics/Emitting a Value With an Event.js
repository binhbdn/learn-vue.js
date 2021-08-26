Vue.component('blog-post', {
    props: ['post'],
    template:`
    <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button @click="$emit('enlarge-text', 0.1)">
            Phóng to
        </button>
        <p v-html="post.content"></p>
    </div>`
})

new Vue({
    el: '#app7a',
    data: {
        posts: [
            { id: 1, title: 'Giới thiệu về Vue', content: 'content 1...' },
            { id: 2, title: 'Các khái niệm trong Vue', content: 'content 2...' },
            { id: 3, title: 'Vue căn bản và vô cùng nâng cao', content: 'content 3...' }
        ],
        postFontSize: 1
    }
})

new Vue({
    el: '#app7b',
    data: {
        posts: [
            { id: 1, title: 'Giới thiệu về Vue', content: 'content 1...' },
            { id: 2, title: 'Các khái niệm trong Vue', content: 'content 2...' },
            { id: 3, title: 'Vue căn bản và vô cùng nâng cao', content: 'content 3...' }
        ],
        postFontSize: 1
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount
        }
    }
})