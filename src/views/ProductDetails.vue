<template>
    <v-container>
        <v-row>
            <v-col align-self="center">
        <h1 class="mt-6">{{getCurrentProduct.name}}</h1>

            </v-col>
        </v-row>
        <v-row class="mt-6">
            <v-col cols="6">

<!--                <v-row>-->
                    <v-col>
                        <PhotoSlider
                                :mainImage="getCurrentProduct.image"
                                :imageArray="getCurrentProduct.images"
                        />
                    </v-col>
<!--                </v-row>-->
                <v-row class="mt-6">
                    <v-col>
                        <h4>Description</h4>
                        <h3>{{getCurrentProduct.name}}</h3>
                        <h4>{{getCurrentProduct.description}}</h4>
                    </v-col>

                </v-row>
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
            <v-col cols="3">
                <ProductDetailsInfo :product="getCurrentProduct"/>

                <v-card>
                    <v-card-title>
                        <!--                        {{getCurrentProduct.groupAttribute}}-->
                    </v-card-title>
                </v-card>
                <v-card>

                    <v-card-actions>
                        <v-btn> Order NOW</v-btn>
                    </v-card-actions>
                </v-card>


            </v-col>
            <v-col cols="3">
                <h3>Price and Availability</h3>
            <ProductPriceAndOrder :product="getCurrentProduct"/>
            </v-col>


        </v-row>


    </v-container>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    import ImageCaroussel from "@/components/ImageCaroussel/ImageCaroussel";
    import PhotoGallery from "@/components/ImageCaroussel/PhotoGallery";
    import PhotoSlider from "@/components/ImageCaroussel/PhotoSlider";
    import ProductDetailsInfo from "@/components/cards/ProductDetailsInfo";
    import ProductPriceAndOrder from "@/components/cards/ProductPriceAndOrder";

    export default {
        name: "ProductDetails",
        components: {ProductPriceAndOrder, ProductDetailsInfo, PhotoSlider, PhotoGallery, ImageCaroussel},
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