<template>
<!--    outlined-->
    <v-card  shaped  elevation="5" class="mb-4" style="max-width: 250px;  margin: 4px; padding: 6px">
        <v-img
                height="200px"
                :src="'http://localhost:9293/images/'+item.image"
        />
        <v-card-title class="d-inline-block text-truncate"
                      style="max-width: 245px;">
<!--            {{item.id}}-->
            {{item.name}}
        </v-card-title>
        <v-card-subtitle>
            <div v-if="item.manufacturer == undefined">
                <h5>
                    {{item.manName}} -- initialList
                </h5>
            </div>
            <div v-else>
                <h5>
                    {{item.manufacturer.name}} -- categoryIdList
                </h5>
            </div>
        </v-card-subtitle>
        <v-card-text>
           <h3>{{item.price}} Rub </h3>
        </v-card-text>
        <v-card-actions>
<!--      -->
        <v-btn @click="show_details" x-small color="warning" class="mr-2">Show Details</v-btn>
        <v-btn x-small color="warning">Order</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name: "ItemCard",
        data: () => ({
            //
        }),
        props: {
            item:{}
        },
        methods: {
            ...mapActions(['setCurrentProductAction']),
            async show_details(){
                // alert(this.item.name)
                await this.$store.dispatch('setCurrentProductAction',this.item.id)
                await this.$router.push('/ProductDetails')
            }
            }

    }
</script>

<style scoped>

</style>