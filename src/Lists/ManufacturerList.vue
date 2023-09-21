<template>
    <div>
        <h2>Manufacturer 1 List</h2>
<!--        <div>-->
<!--            {{getManufacturersList}}-->
<!--        </div>-->
        <div v-for="(item ,idx) in getManufacturersList" :key="idx">
            <v-btn small color="orange" min-width="300" @click="getManufacturer(item.id)">

            {{item.name}} ' ' {{item.id}}
            </v-btn>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name: "ManufacturerList",
        computed:{
            ...mapGetters(['getManufacturersList','getCategoryFilter'])
        },
        methods:{
            ...mapActions(['productListByManufacturer','categoryFilterAction']),
            getManufacturer(id){
                //this.$store.dispatch('categoryFilterAction',false)
                this.$store.dispatch('productListByManufacturer',id)
            }
        }
    }
</script>

<style scoped>

</style>