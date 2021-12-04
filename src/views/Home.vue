<template>
  <div class="home container">
    <h1>Products</h1>
    <div class="row">
      <div class="col-md-4">

      </div>  
      <div class="col-md-8">
        <ProductCard 
          v-for="product of products" :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: "Home",
  components: {
    ProductCard,
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchProducts')
    })

    const products = computed(() => store.state.products)

    return { products}
  }
};
</script>
