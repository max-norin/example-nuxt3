import {defineStore} from 'pinia'
import {useRepo} from 'pinia-orm'
import User from '~/models/User'

interface State {
    user: User
}

export const useUserStore = defineStore<string, State>('user', {
    state() {
        return {
            user: useRepo(User).make({
                id: 1,
                nickname: 'max_norin',
                email: '79068976350@yandex.ru',
            }) as User
        }
    },
})

