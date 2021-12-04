<template>
  <div class="container">
    <h1>Product Detail</h1>
    <div class="row">
        <div class="col-md-8">
        <div class="card">
            <img style="max-width: 100%" src="https://picsum.photos/id/0/600" :alt="`image-${product.name}`">
            <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <button class="btn btn-success" @click="add(product)">Add To Card</button>
            </div>
        </div>
        </div>  
        <div class="col-md-4">
            <router-link class="btn btn-success mb-2 text-capitalize fw-bold" style="width: 100%;" to="/checkout">Checkout</router-link>
            <ItemCart 
            v-for="item of cart" :key="item.id"
            :product="item"
            />
            
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { useStore } from 'vuex'
import { computed, onMounted, watch } from 'vue'
import ItemCart from '@/components/ItemCart.vue'

export default {
  name: 'ProductDetail',
  props: ['productslug'],
  components: {
    ItemCart
  },
  setup(props) {
      const store = useStore()
      const add = product => {
        console.log(product);
        store.dispatch('addToCart', product)
      }
    watch(() => {
      const { productslug } = props
      
      onMounted(() => {
        store.dispatch('fetchProduct', {
          slug: productslug
        })

      })
    })
    const product = computed(( ()=> store.state.product))
    const cart = computed(( ()=> store.state.cart))

    return { product, add, cart }
  }
};
</script>