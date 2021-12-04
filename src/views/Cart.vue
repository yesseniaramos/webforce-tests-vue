<template>
    <div class="my-5">
        <h4 v-if="Object.keys(cart).length > 0">Almost yours!</h4>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
                <th scope="col">Total</th>
            </tr>
            </thead>
            <tbody id="items">
                <Items
                    v-for="item in cart" :key="item.id"
                    :item="item"
                />
            </tbody>
            <Footer />
        </table>
    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import Items from '@/components/ItemCheckout'
    import Footer from '@/components/FooterCheckout'
    export default {
        components: {Items, Footer},
        setup(){
            const store = useStore()
            const cart = computed(() => store.state.cart)

            return {cart}
        }
    }
</script>