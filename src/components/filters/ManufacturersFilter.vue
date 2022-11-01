<template>
    <div class="filter-outline">
        ManufacturerFilter
        <PriceChooser/>
        <div class="manuf-block">
            <p class="my-3">{{selectedMans}}</p>
            <v-card class="overflow-y-auto mt-5"
                    max-height="200px">
                <div v-if="isVisible">
                    <div v-for="n in 5" :key="n">
                        <input type="checkbox"
                               v-model="selectedMans"
                               :value="getCurrentProductListManufacturers[n].id"
                               id="id1"
                        >
                        <label for="id" class="ml-2">{{getCurrentProductListManufacturers[n].name}}</label>
                    </div>
                </div>

                <div v-else>
                    <div v-for="it in getCurrentProductListManufacturers" :key="it">
                        <input type="checkbox"
                               v-model="selectedMans"
                               label="it.name"
                               :value="it.id"
                               id="id"
                        >
                        <label for="id" class="ml-2">{{it.name}}</label>
                    </div>
                </div>

            </v-card>
            <hr class="my-2">
            <v-btn x-small block color="orange" @click="toggleList">{{toggle}}</v-btn>
            <hr class="my-2">
            <v-btn @click="filter">Show Selected</v-btn>
        </div>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    import PriceChooser from "../common_ui/PriceChooser";
    export default {
        name: "ManufacturersFilter",
        components: {PriceChooser},
        computed: {
            ...mapGetters(['getCurrentProductListManufacturers','getSelectedCategoryId'])
        },
        data() {
            return{
                isVisible:true,
                toggle:'Expand',
                selectedMans:[]
            }
        },
        methods: {
            ...mapActions(['setFilteredProdList']),
            toggleList(){
                this.isVisible = !this.isVisible
                this.setToggle()
            },
            setToggle(){
                if(this.isVisible){
                    this.toggle = 'Expand'
                }else{
                    this.toggle = 'Collapse'
                }
            },
            filter() {
                if(this.selectedMans.length > 0){
                    this.$store.dispatch('setFilteredProdList', this.selectedMans)
                    this.selectedMans=[]
                }

            }
        }
    }
</script>

<style scoped>
    .filter-outline{
        padding: 5px;
        border: 1px solid;
        border-color: #ee7c2a;
        border-radius: 5px;
        margin: 5px;
    }
    .manuf-block{}
</style>