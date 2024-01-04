<template>
    <v-card>
        <v-row>
            <v-col cols="6">
                <div v-if="getCurrentProduct.manName">
                    <h4> Made by</h4> <span> <h3>{{ getCurrentProduct.manName }}</h3> </span>
                </div>
                <div v-else-if="getCurrentProduct.manufacturer && getCurrentProduct.manufacturer.name">
                    <h5> Made by</h5> <span> <h4> {{ getCurrentProduct.manufacturer.name }} </h4> </span>
                </div>

                <div v-else>
                    No manufacturer name available
                </div>
            </v-col>
            <v-col cols="6">
                <v-img :src="'http://localhost:9293/images/' + getCurrentProduct.manufacturer.image" height="50px"
                       contain></v-img>
            </v-col>
        </v-row>

        <v-card-subtitle>


        </v-card-subtitle>
    </v-card>
</template>
<script>
    export default {
        name: 'ManufecturerDisplay',
        props: {
            getCurrentProduct: {}
        }
    }
</script>
