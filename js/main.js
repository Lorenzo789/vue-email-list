const app = new Vue(
    {
        el: '#root',
        data: {
            mailList: [],
            clicked:  false,
        },
        methods: {
            generateTenMail: function () {

                this.clicked = true;

                for (let index = 0; index < 10; index++) {
                    
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    
                        .then( (response) => {
    
                            const result = response.data.response;
                            
                            this.mailList.push(result);

                            console.log(this.mailList);
                        });
                };
            }
        },
    }
);
