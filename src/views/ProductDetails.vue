<template>
    <v-container>

        <v-row>
            <!--            -->

        </v-row>
        <v-row>
            <v-col cols="7">
                <v-row>
                    <ImageCaroussel :pick="getCurrentProduct.image" :images="getCurrentProduct.images"/>
                </v-row>
                <v-row class="mt-6">
                    <h5>{{getCurrentProduct.description}}</h5>

                </v-row >
                <v-row>
                    <div class="mt-6">DETAILS New</div>
                    <div>
                        <ul>
                            <li v-for="(value, key, index) in getCurrentProduct" :key="value">
                                <!--                    {{ index }} -->
                                {{ key }} {{ value }}
                            </li>
                        </ul>
                    </div>
                </v-row>
                <!--                <v-img class="mt-5"-->

                <!--                       :src="'http://localhost:9293/images/'+getCurrentProduct.image"-->
                <!--                />-->

            </v-col>
            <v-col cols="5">

                <v-card>
                    <v-card-title>
                        <h3>Prod Id {{getCurrentProduct.id}}</h3><br>-->
                        <h3>{{getCurrentProduct.name}}</h3>
                        <h4>Price: {{getCurrentProduct.price}}</h4>
                        <p></p>
                        <v-card-subtitle>
                            <div v-if="getCurrentProduct.manName">
                                Manufacturer {{ getCurrentProduct.manName }}
                            </div>
                            <div v-else-if="getCurrentProduct.manufacturer && getCurrentProduct.manufacturer.name">
                                Manufacturer {{ getCurrentProduct.manufacturer.name }}
                            </div>
                            <div v-else>
                                No manufacturer name available
                            </div>
                        </v-card-subtitle>


                        <!--                        -->

                    </v-card-title>
                    <v-card-text>
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-card-title>
                        <!--                        {{getCurrentProduct.groupAttribute}}-->
                    </v-card-title>
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
                    </v-card-title>
                    <v-card-subtitle>
                        <h5>
                        </h5>
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn> Order NOW </v-btn>
                    </v-card-actions>
                </v-card>
                <!--                <h1>DETAILS</h1>-->
                <!--                <h3>{{getCurrentProduct}}</h3>-->

            </v-col>
            <!--                       height="400px"-->

        </v-row>


    </v-container>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    import ImageCaroussel from "@/components/ImageCaroussel/ImageCaroussel";

    export default {
        name: "ProductDetails",
        components: {ImageCaroussel},
        computed: {
            // getCurrentObject() {
            //     return this.$store.getters.getCurrentObject;
            // },
            ...mapGetters(['getCurrentProduct'])
        },

    }
</script>

<style scoped>

</style>