import {defineStore} from 'pinia'
import {computed} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

export const useServerStore = defineStore('server', () => {
    const router = useRouter()

    const url = import.meta.env.VITE_URL
    const url_api = import.meta.env.VITE_URL_API

    async function request(method,api_url,formData={}) {
        try {
            const {data} = await axios({
                method,
                url: encodeURI(`${url_api}/${api_url}`),
                data: formData
            })
            if(data.err[0]===400){
                console.log('storeServer err 400', url_api)
                return false
            } else if (data.err[0]===401) {
                await router.replace('/404')
                return false
            }
            return data
        } catch (error) {
            console.warn('Error', error.message);
            return false
        }
    }
    async function requestAdmin(method,api_url,formData={}) {
        try {
            const {data} = await axios({
                method,
                url: encodeURI(`${url_api}/${api_url}`),
                data: formData
            })
            if(data.err[0]===400){
                console.log('storeServer err 400', url_api)
                return false
            } else if (data.err[0]===401) {
                await router.replace('/404')
                return false
            }
            return data
        } catch (error) {
            console.warn('Error', error.message);
            return false
        }
    }

    const isClient = computed(() => {
       return  typeof window !== 'undefined' && typeof document !== 'undefined'
    })


    return {url, isClient, request, requestAdmin}
})