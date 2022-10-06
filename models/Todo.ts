import {Model} from 'pinia-orm'
import {Bool, Str, Uid} from "~/node_modules/pinia-orm/dist/decorators";
import {required} from "@vuelidate/validators";

export default class Todo extends Model {
    static entity = 'todos'

    @Uid() declare id: string
    @Bool(false) declare done: boolean
    @Str('') declare title: string
    @Str('') declare description: string

    toApi() {
        return {
            ...this,
        }
    }

    toJSON() {
        return {...this}
    }

    rules = {
        done: {},
        title: {required,},
        description: {},
    }

    reset() {
        this.done = false
        this.title = ''
        this.description = ''
    }
}
