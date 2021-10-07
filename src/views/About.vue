<template>
  <div class="container">
    <h1>About</h1>
    <Card>
      <h4>Your items ({{ cart.itemsCount }})</h4>
      <ItemsList />
    </Card>
    <div>Analytics count: {{ analytics.getCount }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/Card.vue'
import ItemsList from '@/components/ItemsList.vue'
import { useCartStore } from '@/store/cart'
import { useAnalyticsStore } from '@/store/analytics'

export default defineComponent({
  components: { Card, ItemsList },
  setup() {
    const cart = useCartStore()
    const analytics = useAnalyticsStore()
    return { cart, analytics }
  },
})
</script>
