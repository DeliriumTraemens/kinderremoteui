<template>
    <v-card>
        <v-card-title>
            <h3>Price: {{product.price}} rub</h3>
        </v-card-title>
    </v-card>
    
</template>

<script>
    export default {
        name: "ProductPriceAndOrder",
        props: {
            product: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>