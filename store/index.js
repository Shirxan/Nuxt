import {createStore} from 'vuex'
import {user} from './modules/user.ts'
export const store = createStore({
    modules : {
        user,
    }
})

