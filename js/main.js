const app = new Vue(
    {
        el: '#root',
        data: {
            mailList: '',
        },
        methods: {
            generateTenMail: function () {

                for (let index = 0; index < 10; index++) {
                    
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    
                        .then( (response) => {
    
                            this.mail = response.data.response;
                            
                            console.log(this.mail);
                        });
                };
            }
        },
    }
);
