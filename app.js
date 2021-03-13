const app = Vue.createApp({
    data(){
        return {
            firstName: "Abdul Samad",
            lastName: "Nizamani",
            email:"abdulsamad@apetchsite.net",
            gender:"male",
            picture:"https://randomuser.me/api/portraits/men/10.jpg"
        }
    },

    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results[0].gender)
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email
            this.picture = results[0].picture.large,
            this.gender = results[0].gender

        }
    }
})

app.mount("#app")