var vm = new Vue({
    el: '#app1',
    data: {
        activeColor: 'red',
        activeBgColor: 'lightgrey',
        fontSize: 30,
        styleObject1: {
            color: 'blue',
            fontSize: '40px',
            'background-color': 'grey',
            borderBottom: '5px solid red'
        }
    },
    computed: {
        styleObject2: function(){
            return {
                color: 'purple',
                fontSize: this.fontSize*2 + 'px',
                'background-color': 'yellow',
                borderBottom: this.fontSize/5 + 'px solid red'
            }
        }
    }
})