<template>
    <v-container>
        <v-img :src="'http://localhost:9293/images/' + currentImage.image" height="500px" contain></v-img>
        <div>
            <v-btn icon @click="previousImage">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn icon @click="nextImage">
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
    </v-container>
</template>

<script>
    export default {
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
            };
        },
        computed: {
            currentImage() {
                return this.imageArray[this.currentIndex];
            }
        },
        methods: {
            previousImage() {
                this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.imageArray.length - 1;
            },
            nextImage() {
                this.currentIndex = this.currentIndex < this.imageArray.length - 1 ? this.currentIndex + 1 : 0;
            }
        }
    };
</script>

<style scoped>

</style>