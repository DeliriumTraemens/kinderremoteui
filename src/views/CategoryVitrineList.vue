<template>
    <div>
        <div>Vitrine</div>
        <v-row>
            <v-col cols="3">
                <v-card class="mb-3">
                    <div>CATALOG</div>

                </v-card>
                <!--                <v-card class="overflow-y-auto"-->
                <!--                        height="500px">-->
                <!--                    <CatBrowserLite v-for="(nodes,idx) in getCategoryList"-->
                <!--                                    :key="idx"-->
                <!--                                    :nodes="nodes" />-->
                <!--                </v-card>-->

                <!--                <ManufacturersFilter/>-->
                <!--                    <CheckBoxTrainer />-->

            </v-col>
            <v-col cols="7">
                <ProductList />
            </v-col>
            <v-col cols="2">
                <!--                <BrowserTrainerLayout1 />-->
                <!--                <ListSwitcherTrain />-->
                <ManufacturerList />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import CatBrowserLite from "@/components/browsers/CatBrowserLite";
    import ProductList from "@/Lists/ProductList";
    import ManufacturerList from "@/Lists/ManufacturerList";
    export default {
        name: "CategoryVitrineList",
        components: {ManufacturerList, CatBrowserLite, ProductList},
        data() {
            return{
                categoryList:[{}]
            }
        },
        computed:{
            ...mapGetters(['getCategoryList', 'getProductsList'])
        },
        methods: {
            ...mapActions(['categoryListAction', 'initialProductList']),

            clickAction(){
                // alert('Pressed')
                this.$store.dispatch('categoryListAction')
            }
        },

        async created(){
            //        requestFor CategoryList - Catalog
            //        ProductRandomList
            //
            await this.$store.dispatch('categoryListAction');
            await this.$store.dispatch('initialProductList')
        }
    }
</script>

<style scoped>

</style>