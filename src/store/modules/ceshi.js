// src/stores/userStore.js
import { defineStore } from 'pinia'

export const getCeshiStore = defineStore('ceshiStore', {
    state: () => ({
        name: 'John Doe',
        age: 30,
    }),
    actions: {
        setName(newName) {
            this.name = newName
        },
        setAge(newAge
        ) {
            this.age = newAge
        }
    }
})