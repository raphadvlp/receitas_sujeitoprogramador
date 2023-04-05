import axios from 'axios';

/*
    Rodar com IPV4: json-server --watch -d 180 --host 192.168.2.100 db.json
    Rodar com IPV4: json-server --watch -d 180 --host 10.10.100.153 db.json // ip no trabalho
*/

const api = axios.create({
    // baseURL: 'http://192.168.2.100:3000'
    baseURL: 'http://10.10.100.153:3000' //ip no trabalho
})

export default api;