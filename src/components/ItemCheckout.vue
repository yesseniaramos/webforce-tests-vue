<template>
  <tr>
    <th scope="row">{{item.id}}</th>
    <td>{{item.name}}</td>
    <td>{{item.qty}}</td>
    <td>
        <button class="btn btn-success btn-sm" @click="increase(item.id)">
            +
        </button>
        <button class="btn btn-danger btn-sm" @click="decrease(item.id)">
            -
        </button>
    </td>
    <td>${{item.price * item.qty}}</td>
  </tr>
</template>

<script>
import { useStore } from 'vuex'
export default {
    props: ['item'],
    setup(){
        const store = useStore()
        const increase = id => {store.commit('increase', id)}
        const decrease = id => {store.commit('decrease', id)}
        return {increase, decrease}
    }
}
</script>