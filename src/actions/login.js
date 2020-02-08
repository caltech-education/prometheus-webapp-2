import axios from 'axios'

export default function LoginRequired(username, password){
    const data = {
        scope: "web",
        grant_type: "password",
        username,
        password
    }

    const options = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Basic MWUxY2QwYjMtYWY0OC00ZjAwLTg4ODUtMmM0MDc0YWVhZTU4OjYxNjU3MDBlLTU1MzQtNGE1NC1hZDNkLWZkMTdjNDk2YmYxNg==' 
        },
        data,
        url: 'https://dev.prometheus-gateway.com/auth/login'
    }

    const getUser = (token) => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        axios.get('https://dev.prometheus-gateway.com/auth/user-details', config)
        .then(e => {
            console.log(e)
        }).catch(err => 
            console.log(err)
        );

    }

    axios(options)
        .then(e => {
            console.log('token', e.data.access_token);
            getUser(e.data.access_token)
        });
}