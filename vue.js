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
	},
    mounted(){
        let socials = document.getElementsByClassName("iconCustom")
        console.log(socials)
        let i = 0
        while (i < socials.length) {
            let social = socials[i]
            social.style.color = 'blue'
            social.addEventListener('mouseover', () => {
                social.style.color = 'red'
			})

            social.addEventListener('mouseout', () => {
                social.style.color = 'blue'
        })
            i++
        }
	}
})