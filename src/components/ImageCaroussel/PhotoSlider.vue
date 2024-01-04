<template>
    <v-container>
        <v-row justify="center" class="row1">
            <v-col cols="1" class="col-prev">
                <v-btn class="prev-btn" icon @click="previousImage">
                    <v-icon class="arrow-icon">mdi-chevron-left</v-icon>
                </v-btn>
            </v-col>

            <v-col cols="8" sm="9" md="10" align-self="center">
<!--                <v-img :src="'http://localhost:9293/images/' + currentImage.image  + '?' + Math.random()"  ></v-img>-->
                <v-img :src="getImageUrl() + currentImage.image  + '?' + Math.random()"  ></v-img>
            </v-col>

            <v-col cols="1" class="col-next">
                <v-btn class="next-btn" icon @click="nextImage">
                    <v-icon class="arrow-icon">mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    import urls from "@/axiosEtc/urls/urls";

    export default {
        name: "PhotoSlider",
        props: {
            mainImage: {
                type: String,
                required: true
            },
            imageArray: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        computed: {
            currentImage() {
                return this.imageArray[this.currentIndex];
                // return this.getCurrentProduct.images[this.currentIndex];
            },
            ...mapGetters(['getCurrentProduct'])
        },
        methods: {
            getImageUrl(){
                return urls.PICTURE_LOCAL
            },
            previousImage() {
                this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.imageArray.length - 1;
            },
            nextImage() {
                this.currentIndex = this.currentIndex < this.imageArray.length - 1 ? this.currentIndex + 1 : 0;
            }
        }
    }

</script>
<style>
    .col-prev,
    .col-next {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .prev-btn,
    .next-btn {
        width: 80px;
        height: 80px;
        background-color: rgba(47, 119, 219, 0.5);
        color: #e9d87d;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
        /*z-index: 2;*/
    }

    .arrow-icon {
        /*font-size: 32px;*/
        font-size: 52px;


    }

    .prev-btn:hover,
    .next-btn:hover {
        background-color: rgba(229, 46, 46, 0.8);
    }

    #border2{
        background-color: #a7a78c;
        max-height: 600px;
        border: 2px;
        border-color: black;
        margin-left: 4px;
    }
    .row1{
        max-height: 800px;
        /*background-color: #ee7c2a;*/
    }
</style>
