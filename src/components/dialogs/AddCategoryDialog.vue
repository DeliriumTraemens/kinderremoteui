<template>
    <div>
        <div class="pt-0.5">
            <v-btn
                    icon
                    color="indigo"
                    @click.stop="dialog = true"
            >
                <v-icon
                        small
                        dark
                >
                    mdi-plus
                </v-icon>
            </v-btn>
        </div>

        <v-dialog
                v-model="dialog"
                max-width="390">
            <v-card>
                <v-card-title class="text-h5">
                    Input Subcategory for {{getSelectedCategoryId}}
                </v-card-title>
                <v-card-text>
                    <v-text-field
                            v-model="newSubCategory.name"
                            label="Name"
                    />
                    <v-text-field
                            v-model="newSubCategory.description"
                            label="Description"
                    />
                    <i>Lorem ipsum. Ткскзть</i>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />

                    <v-btn
                            color="warning"
                            text
                            @click="dialog = false"
                    >
                        Cancel
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="createSubCategory()"
                    >
                        Submit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "AddCategoryDialog",
        data() {
            return {
                dialog: false,
                newSubCategory: {
                    parentId: '',
                    name: '',
                    description: '',

                }
            }
        },
        computed: {
            ...mapGetters(['getSelectedCategoryId'])
        },
        methods:{
            ...mapActions(['addNewSubCategory']),
            async createSubCategory(){
                this.newSubCategory.parentId = this.getSelectedCategoryId
                this.dialog = false
                await this.$store.dispatch('addNewSubCategory', this.newSubCategory)

                // alert('Pressed'+this.newSubCategory.name)

            }
        }
    }
</script>

<style scoped>

</style>