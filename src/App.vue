<template>
    <v-app>
        <v-navigation-drawer app permanent>
            <v-container>
            <v-row>
                <v-col cols="12" align-self="top">
                    <div>
                        <h2>HEADER</h2>
                        <v-card class="overflow-y-auto"
                                height="500px">
                            <CatBrowserLite v-for="(nodes,idx) in getCategoryList"
                                            :key="idx"
                                            :nodes="nodes" />
                        </v-card>
                    </div>
                </v-col>
            </v-row>

            </v-container>
            <!-- Здесь разместите содержимое постоянной боковой панели -->
        </v-navigation-drawer>
        <v-app-bar
                app
                color="orange"
                dark
        >
            <div class="d-flex align-center">
                <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                        transition="scale-transition"
                        width="40"
                />
                <h2>Kinder</h2>
            </div>

            <v-spacer></v-spacer>
            <SearchProductsInput/>
            <v-btn @click="goHome">Go Home</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="show_vitrine" x-small color="warning" class="mr-2">Vitrine New</v-btn>
            <v-btn
                    href="https://github.com/vuetifyjs/vuetify/releases/latest"
                    target="_blank"
                    text
            >
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';

    import SearchProductsInput from "@/components/inputs/SearchProductsInput";
    import CatBrowserLite from "@/components/browsers/CatBrowserLite";

    export default {
        name: 'App',
        components: {CatBrowserLite, SearchProductsInput},
        data: () => ({
            //
        }),

        computed:{
            ...mapGetters(['getCategoryList', 'getProductsList'])
        },
        methods: {
            show_vitrine() {
                this.$router.push('/vitrinenew')
            },
            goHome(){
                this.$router.push('/')
            }
        },
        async created(){
            //        requestFor CategoryList - Catalog
            //        ProductRandomList
            //
            await this.$store.dispatch('categoryListAction');
            await this.$store.dispatch('initialProductList')
        }
    };
</script>
