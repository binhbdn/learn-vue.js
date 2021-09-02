Vue.component('base-input', {
    data: function(){
        return {
          counter: 0
        }
    },
    template:`
    <div>
        <h4>Hello this is for refs man!</h4>
        <p>You have counted {{this.counter}} times</p>
        <input type="text" ref="input">
        <button @click="focus">input focus</button>
        <button @click="submit">Add 1 to counter</button>
    </div>
    `,
    methods: {
        submit: function() {
            this.counter++;
            console.log(this.$refs);
        },
        focus: function () {
            this.$refs.input.focus();
        }
    }
});

new Vue({
    el: '#app13',
    mounted: function () {
        console.log('<base-input ref="usernameInput"></base-input>');
        console.log(this.$refs.usernameInput);
    }
})