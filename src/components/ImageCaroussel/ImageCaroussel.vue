<template>
    <v-container>
        <v-card class="mt-4">
            <v-row>
                <!--                <h5>Caroussel</h5>-->
                <!--                <div id="mainPicture">-->
                <v-img
                        width="550px"
                        height="550px"
                        contain
                        transition="scale-transition"
                        :src="'http://localhost:9293/images/' + pick"
                />

                <!--                </div>-->
            </v-row>

            <!--            <v-row class="smallPickRow">-->
            <v-row>
                <v-col v-for="picture in images" :key="picture" >
                    <!--                    <v-card  @click="setPicture(picture.image)" id="smallPick">-->
                    <v-card @click="setPicture(picture.image)">
                        <v-img
                                height="100px"
                                width="100px"

                                :src="'http://localhost:9293/images/'+picture.image"

                                transition="scale-transition"
                        />
                    </v-card>
                    <!--                                    :src="'http://kinder.ru/image/'+picture"-->
                </v-col>
            </v-row>
            <!--                {{setPicsArr}}-->
        </v-card>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "ImageCaroussel",
        props: {
            pick: String,
            images: [{}]
        },
        data() {
            return {
                // picture: this.getCurrentProduct.image,
                // picsArr:[]
            }
        },
        created() {
            // return this.picture=this.getSelectedProduct.image
        },


        methods: {

            setPicture(picture) {
                this.pick = picture
            }
        }
    }
</script>

<style scoped>
    #mainPicture {
        margin: 5px;
        padding: 5px;
        border: 1px solid;
        border-radius: 4px;
        /*max-height: 550px;*/
        /*max-width: 100%;*/
    }

    .smallPickRow {
        margin-top: 10px;
        margin-left: 5px;
        padding-left: 3px;
        border: 1px solid;
        border-radius: 6px;
        /*max-width: 100%;*/
        /*max-height: 80px;*/
    }

    #smallPick {
        margin: 8px;
        border: 1px solid;
        border-radius: 6px;
        height: 95px;
    }
</style>