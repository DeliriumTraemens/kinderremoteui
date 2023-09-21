<template>
    <v-container>
        <v-row justify="center">
            <h1>DETAILS</h1>
            <v-col cols="5">
                <v-img class="mt-5"

                       height="200px"
                       :src="'http://localhost:9293/images/'+getCurrentProduct.image"
                />
            </v-col>
<!--            Card-->
            <v-col cols="7">
                <h1>Its Product details</h1>
                <v-row>
                    <h2>{{ getCurrentProduct.id}}</h2><br>
                    <h2>{{ getCurrentProduct.name}}</h2><br>
                    <h3>{{ getCurrentProduct.manufacturer.name}}</h3><br>
                    <h2>Цена {{getCurrentProduct.price}} р</h2>

                </v-row>
                <v-row class="mt-5">
                    {{getCurrentProduct.description}}
                </v-row>

                <p class="mt-6">{{ getCurrentProduct}}</p>
                <hr >
            </v-col>
        </v-row>




    </v-container>
</template>

<script>
    import {mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name: "ProductDetails",
        computed:{
            ...mapGetters(['getCurrentProduct'])
        },

    }
</script>

<style scoped>

</style>