import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:
        'ed7e16e3949b482d977130731e4170f6'
    }
})