import {Model} from 'pinia-orm'
import {Str, Uid} from "~/node_modules/pinia-orm/dist/decorators";
import {email, minLength, required} from "@vuelidate/validators";

export default class User extends Model {
    @Uid() declare id: string
    @Str('') declare nickname: string
    @Str('') declare email: string
    @Str('') declare password: string

    toApi() {
        return {
            ...this,
        }
    }

    toJSON() {
        return {...this}
    }

    rules = {
        nickname: {required,},
        email: {required, email,},
        password: {required, min: minLength(8),},
    }

    reset() {
        this.nickname = ''
        this.email = ''
        this.password = ''
    }
}
