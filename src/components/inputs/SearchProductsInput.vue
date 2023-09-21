<template>
    <div class="input_field">
<!--        <h4>Input Field Yere</h4>-->
        <v-row>
            <v-col>
                <v-text-field
                        v-model="searchName"
                        label="Solo"
                        clearable
                ></v-text-field>
            </v-col>
            <v-col>
                <v-btn
                color="indigo"
                @click="doSearch"
                >Search</v-btn>

            </v-col>
        </v-row>

    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "SearchProductsInput",
        data()  {
            return{
                searchName: ''
            }
        },
        methods: {
            ...mapActions(['searchProductAction']),
            doSearch(){
                this.$store.dispatch('searchProductAction', this.searchName)

            }
        }
    }
</script>

<style scoped>
.input_field {
    width: 60rem;
max-height: 2rem;
}
</style>