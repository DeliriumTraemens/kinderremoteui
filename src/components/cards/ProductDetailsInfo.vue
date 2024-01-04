<template>
    <v-card>
            <h6>ProductDetailsInfo</h6>
        <v-card-title>
        </v-card-title>
        <ManufecturerDisplay :get-current-product="getCurrentProduct"/>
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
    import {mapGetters} from 'vuex'
    import ManufecturerDisplay from "@/components/cards/ManufecturerDisplay";

    export default {
        name: "ProductDetailsInfo",
        components: {ManufecturerDisplay},
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

