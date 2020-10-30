var vm = new Vue({
    el: '#app2',
    data: {
        items: [
            { name: 'Cà phê' },
            { name: 'Trà đặc' },
            { name: 'Bò húc' }
        ]
    },
    methods: {
        compare: function( a, b ) {
            if ( a.name < b.name ){
              return -1;
            }
            if ( a.name > b.name ){
              return 1;
            }
            return 0;
        }
    }
})