import axios from 'axios'

class CoastersService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/coasters` })
    }

    getAllCoasters = () => {
        return this.api.get('/getAllCoasters')
    }

    getOneCoaster = id => {
        return this.api.get(`/getOneCoaster/${id}`)
    }

    saveCoaster = coaster => {
        return this.api.post(`/saveCoaster`, coaster)
    }
}

const coastersService = new CoastersService()

export default coastersService