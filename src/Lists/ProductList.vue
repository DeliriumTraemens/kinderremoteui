<template>
    <div>
        <h2>ProductList</h2>
        <v-row class="mt-2">
            <div v-for="product in getProductsList" :key="product.id">
                    <ItemCard :item="product"/>
            </div>


        </v-row>
    </div>
</template>

<script>
    import ItemCard from "@/components/cards/ItemCard";
    import {mapGetters} from 'vuex'
    export default {
        name: "ProductList",
        components: {ItemCard},
        // props: {
        //     productList:[]
        // },
        computed:{
            ...mapGetters(['getProductsList'])
        }
    }
</script>

<style scoped>

</style>