
import * as types from './actionTypes'
import axios from 'axios'
export default {
     getBannerList () {
        return {
            type: types.GET_BANNER_LIST,
            payload: axios.get('/mw/app/index/banner')
        }
    }
}