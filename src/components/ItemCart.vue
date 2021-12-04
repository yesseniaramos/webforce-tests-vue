<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
        <div class="col-md-4">
        <img style="max-width: 100%" src="https://picsum.photos/id/0/600" :alt="`image-${product.name}`">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-left">{{product.name}}</h5>
            <p class="card-text text-left">{{product.description}}</p>
            <p class="card-text text-right"><b class="text-muted">${{product.price}}</b></p>
            <p class="card-text text-right"><b class="text-muted">Quantity: {{product.qty}}</b></p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['product']
    }
</script>