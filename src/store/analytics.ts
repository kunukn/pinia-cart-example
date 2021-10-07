import { defineStore } from 'pinia'

export type Item = { name: string; url: string }

export const useAnalyticsStore = defineStore({
  id: 'analytics',
  state: () => ({}),
  actions: {
    addEvent(id: string) {
      console.log(id)
    },
  },
})
