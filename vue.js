new Vue({ 
	el: '#app',
	data(){
		return{
			items: [
		        { title: 'Link One' },
		        { title: 'Link Two' },
		        { title: 'Link Three' }
		      ]
		}
	},
	methods:{
		test(){
			console.log('aaa')
		}
	}
})