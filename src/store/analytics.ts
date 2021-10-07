import { defineStore } from 'pinia'

export type Item = { name: string; url: string }

export const useAnalyticsStore = defineStore({
  id: 'analytics',
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount() {
      return this.count
    },
  },
  actions: {
    addEvent(name: string) {
      this.count++
      console.log(name, new Date())
    },
  },
})
