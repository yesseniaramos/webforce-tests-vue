<template>
    <tfoot>
        <tr v-if="totalQty === 0">
            <th scope="row" colspan="5">Empty Cart</th>
        </tr>
        <tr v-else>
            <th scope="row" colspan="2">Total Items</th>
            <td>{{totalQty}}</td>
            <td>
                <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="empty">
                    Clear Out
                </button>
            </td>
            <td class="font-weight-bold">$ <span>{{totalPrice}}</span></td>
        </tr>
    </tfoot>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        const totalQty = computed(() => store.getters.totalQty)
        const totalPrice = computed(() => store.getters.totalPrice)
        const empty = () => {store.commit('setEmpty')}

        return {totalQty, totalPrice, empty}
    }
}
</script>