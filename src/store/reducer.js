//由于可能含有多个reducer 因此我们需要分发，并结合到一个reducer里去
import { combineReducers } from 'redux'

import main from './main'


export default combineReducers({
    main
})