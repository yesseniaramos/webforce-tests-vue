import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    product: [],
    cart: {}
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
    setProduct(state, payload) {
      state.product = payload
    },
    setCart(state, payload) {
      state.cart[payload.id] = payload
    },
    setEmpty(state) {
      state.cart = {}
    },
    increase(state, payload) {
      console.log(payload);
      state.cart[payload].qty = state.cart[payload].qty + 1
    },
    decrease(state, payload) {
      console.log(payload);
      state.cart[payload].qty = state.cart[payload].qty - 1
      if (state.cart[payload].qty === 0) {
        delete state.cart[payload]
      }
    }
  },
  actions: {
    async fetchProducts({commit}) {
      try {
        const res = await fetch('http://localhost/api/products')
        const data = await res.json()
        commit('setProducts', data)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchProduct({commit}, slug) {
      try {
        const res = await fetch('http://localhost/api/products/' + slug.slug)
        const data = await res.json()
        commit('setProduct', data[0])
      } catch (error) {
        console.log(error);
      }
    },
    addToCart({commit, state}, product){
      console.log(product);
      if(Object.prototype.hasOwnProperty.call(state.cart, product.id)){
        product.qty = state.cart[product.id].qty + 1
      }
      else{
        product.qty = 1
      }
      commit('setCart', product)
    }
  },
  getters: {
    totalQty(state) {
      return Object.values(state.cart).reduce((acc, {qty}) => acc + qty, 0)
    },
    totalPrice(state) {
      return Object.values(state.cart).reduce((acc, {qty, price}) => acc + qty * price, 0)
    }
  },
  modules: {},
});
