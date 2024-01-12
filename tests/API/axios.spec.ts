import test from "@playwright/test";

test.describe(async() => {
let client:Axios; 
let userId: string; 
    test.beforeAll(async()=> {
        client = axios.create(
            baseURL: process.env.APIURL,
            validateStatus: function (status) {
                return status >=200 && status <300; 
            },
        )

        const LoginData = client.post('/Account/v1/login', {
            "username":"TestRostQA",
            "password":"Aa123123!",
        })
        userId = LoginData.data.userID; 
    })

    test('post', () =>{
        const response = await client.post('/BookStore/v1/Books', {
            "userID": userId,
                collectionOfIsbns: [
                    {isbn: "9781449331818"}
                ]
        })
    })

})