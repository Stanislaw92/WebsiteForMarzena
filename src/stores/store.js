import { defineStore } from 'pinia'


export const useToggleStore = defineStore({
    id: 'toggleNavbar',
    state: () => ({
        toggle: false,
    }),
    actions: {
        toggleNavbar() {
            this.toggle = !this.toggle
        },
        closeNavbar(){
            this.toggle = false
        }
    },
    getters: {

    }

})