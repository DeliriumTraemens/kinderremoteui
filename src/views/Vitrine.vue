<template>
    <v-container>
        <div>Vitrine</div>
        <v-row>
<!--            <v-col cols="3">-->
<!--                <v-card class="mb-3">-->
<!--                <div>CATALOG</div>-->

<!--                </v-card>-->
<!--&lt;!&ndash;                <v-card class="overflow-y-auto"&ndash;&gt;-->
<!--&lt;!&ndash;                        height="500px">&ndash;&gt;-->
<!--&lt;!&ndash;                    <CatBrowserLite v-for="(nodes,idx) in getCategoryList"&ndash;&gt;-->
<!--&lt;!&ndash;                                    :key="idx"&ndash;&gt;-->
<!--&lt;!&ndash;                                    :nodes="nodes" />&ndash;&gt;-->
<!--&lt;!&ndash;                </v-card>&ndash;&gt;-->

<!--&lt;!&ndash;                <ManufacturersFilter/>&ndash;&gt;-->
<!--                &lt;!&ndash;                    <CheckBoxTrainer />&ndash;&gt;-->

<!--            </v-col>-->
            <v-col cols="7">
            <ProductList />
            </v-col>
            <v-col cols="2">
<!--                <BrowserTrainerLayout1 />-->
<!--                <ListSwitcherTrain />-->
                <ManufacturerList />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import CatBrowserLite from "@/components/browsers/CatBrowserLite";
    import ProductList from "@/Lists/ProductList";
    import ManufacturerList from "@/Lists/ManufacturerList";
    export default {
        name: "Vitrine",
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
    //    await this.$store.dispatch('categoryListAction');
    //    await this.$store.dispatch('initialProductList')
    }

    }
</script>

<style scoped>

</style>