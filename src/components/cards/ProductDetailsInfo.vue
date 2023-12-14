<template>
    <v-card>
        <v-card-title>
            <h3>ProductDetailsInfo</h3>
        </v-card-title>
        <v-card>
            <div v-if="getCurrentProduct.manName">
              <h3>  Made by</h3> <span> <h3>{{ getCurrentProduct.manName }}</h3> </span>
            </div>
            <div v-else-if="getCurrentProduct.manufacturer && getCurrentProduct.manufacturer.name">
                <h3>  Made by</h3> <span> <h2> {{ getCurrentProduct.manufacturer.name }} </h2> </span>
            </div>

            <div v-else>
                No manufacturer name available
            </div>
            <v-card-subtitle>
                <v-img :src="'http://localhost:9293/images/' + getCurrentProduct.manufacturer.image" height="100px" contain></v-img>

            </v-card-subtitle>
        </v-card>
        <v-card>
            <v-card-title>
                <h4>
                    <span> {{getCurrentProduct.groupAttribute.groupName}}</span>
                </h4>
                <h5>

                    <ul>
                        <li v-for="atr in getCurrentProduct.groupAttribute.attributes">
                            <span> {{atr.type}}</span> : <span>{{atr.value}}</span>
                        </li>
                    </ul>
                </h5>
<!--                <h5>-->
<!--                    <ul>-->
<!--                        <li>Model: {{getCurrentProduct.model}}</li>-->
<!--                        <li>Sku: {{getCurrentProduct.sku}}</li>-->
<!--                        <li>Upc: {{getCurrentProduct.upc}}</li>-->
<!--                        <li>Isbn: {{getCurrentProduct.isbn}}</li>-->
<!--                        <li>Quantity: {{getCurrentProduct.quantity }}</li>-->
<!--                        <li>Stock Status: {{getCurrentProduct.stockStatus }}</li>-->
<!--                        <li>Points: {{getCurrentProduct.points }}</li>-->
<!--                        <li>Weight : {{getCurrentProduct.weight }}</li>-->
<!--                        <li>Length  : {{getCurrentProduct.length }} cm</li>-->
<!--                        <li>Width   : {{getCurrentProduct.width  }} cm</li>-->
<!--                        <li>Height    : {{getCurrentProduct.height }} cm</li>-->
<!--                    </ul>-->
<!--                </h5>-->
            </v-card-title>
        </v-card>
        <v-card-subtitle>
            <h4>
                <ul>
                    <li>Id: {{getCurrentProduct.id}}</li>
                    <li>Model: {{getCurrentProduct.model}}</li>
                    <li>Sku: {{getCurrentProduct.sku}}</li>
                    <li>Upc: {{getCurrentProduct.upc}}</li>
                    <li>Isbn: {{getCurrentProduct.isbn}}</li>
                    <li>Quantity: {{getCurrentProduct.quantity }}</li>
                    <li>Stock Status: {{getCurrentProduct.stockStatus }}</li>
                    <li>Points: {{getCurrentProduct.points }}</li>
                    <li>Weight : {{getCurrentProduct.weight }}</li>
                    <li>Length  : {{getCurrentProduct.length }} cm</li>
                    <li>Width   : {{getCurrentProduct.width  }} cm</li>
                    <li>Height    : {{getCurrentProduct.height }} cm</li>
                </ul>
            </h4>
        </v-card-subtitle>
    </v-card>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
        name: "ProductDetailsInfo",
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        computed: {
            ...mapGetters(['getCurrentProduct'])

        }
    }
</script>

<style scoped>

</style>