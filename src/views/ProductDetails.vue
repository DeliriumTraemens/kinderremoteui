<template>
    <v-container class="border1">
        <v-row>
            <v-col align-self="center">
                <h1 class="mt-6">{{getCurrentProduct.name}}</h1>
                <div>Path>To>Category</div>
                <div>Rating Add_toFavorite</div>
            </v-col>
        </v-row>
        <v-row class="mt-1">
            <v-col cols="7">
<!--                <v-col col="12">-->
<!--                    <v-carousel>-->
<!--                        <v-carousel-item-->
<!--                                v-for="(item,i) in getCurrentProduct.images"-->
<!--                                :key="i"-->
<!--                                :src="'http://localhost:9293/images/'+item.image"-->
<!--                                reverse-transition="fade-transition"-->
<!--                                transition="fade-transition"-->
<!--                        ></v-carousel-item>-->
<!--                    </v-carousel>-->
<!--                </v-col>-->
                    <PhotoSlider
                            :mainImage="getCurrentProduct.image"
                            :imageArray="getCurrentProduct.images"
                            :key="getCurrentProduct.id"
                    />
<!--                    <PhotoGallery-->
<!--                            :mainImage="getCurrentProduct.image"-->
<!--                            :imageArray="getCurrentProduct.images"-->
<!--                    />-->
                <v-row class="mt-1">
                    <v-col>
                        <h4>Description</h4>
                        <h3>{{getCurrentProduct.name}}</h3>
                        <h4>{{getCurrentProduct.description}}</h4>
                        <ProductDetailsInfo :product="getCurrentProduct"/>
                    </v-col>

                </v-row>
<!--                <CurrentProductObjectList :get-current-product="getCurrentProduct"/>-->

                <!--<div>-->
<!--    {{getCurrentProduct}}-->
<!--</div>-->
            </v-col>
            <v-col cols="5">
                <p>Price and Availability</p>
                <ProductPriceAndOrder :product="getCurrentProduct"/>
<!--                <ProductDetailsInfo :product="getCurrentProduct"/>-->
                <ManufecturerDisplay :get-current-product="getCurrentProduct"/>
                <v-card>
                    <v-card-actions>
                        <v-btn> Order NOW</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
<!--            <v-col cols="3">-->
<!--            </v-col>-->
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    // import ImageCaroussel from "@/components/ImageCaroussel/ImageCaroussel";
    import PhotoSlider from "@/components/ImageCaroussel/PhotoSlider";
    import ProductDetailsInfo from "@/components/cards/ProductDetailsInfo";
    import ProductPriceAndOrder from "@/components/cards/ProductPriceAndOrder";
    import CurrentProductObjectList from "@/views/CurrentProductObjectList";
    import ManufecturerDisplay from "@/components/cards/ManufecturerDisplay";

    export default {
        name: "ProductDetails",
        // components: {ProductPriceAndOrder, ProductDetailsInfo, PhotoSlider, PhotoGallery, ImageCaroussel},
        components: {
            ManufecturerDisplay,
            CurrentProductObjectList, ProductPriceAndOrder, ProductDetailsInfo, PhotoSlider},
        computed: {
            // getCurrentObject() {
            //     return this.$store.getters.getCurrentObject;
            // },
            ...mapGetters(['getCurrentProduct'])
        },
        beforeRouteEnter(to, from, next) {
            window.scrollTo(0, 0);
            next();
        },

        beforeRouteUpdate(to, from, next) {
            window.scrollTo(0, 0);
            next();
        }

    }
</script>

<style scoped>
.border1 {
    border: 1px solid;
}
</style>