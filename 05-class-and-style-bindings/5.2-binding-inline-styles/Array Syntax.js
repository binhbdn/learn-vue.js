var vm = new Vue({
    el: '#app2',
    data: {
        activeColor: '#777',
        activeBgColor: 'lightgrey',
        fontSize: 30,
        baseStyles: {
            color: 'blue',
            'background-color': 'grey',
            borderBottom: '5px solid red'
        }
    },
    computed: {
        overridingStyles: function(){
            return {
                color: this.activeColor,
                fontSize: this.fontSize*2 + 'px',
                'background-color': this.activeBgColor,
                borderBottom: this.fontSize/5 + 'px solid black'
            }
        }
    }
})