import axios from 'axios'
import urls from "@/axiosEtc/urls/urls";
import {v4 as uuidv4} from 'uuid';

export default {
    state: {
        customer: {
            isAuthenticated: Boolean,
            name: '',
            password: '',
            confirmPassword: '',
            email: '',
        },
        currentSession: {
            id:String,
            token:String,
            isExpired:Boolean,
            isValid:Boolean
        }

    },
    getters: {
        getCustomer(state){
            return state.customer
        },
        getCurrentSession(state){
            return state.currentSession
        }
    },
    mutations: {},
    actions: {}
}