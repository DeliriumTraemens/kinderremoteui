<template>
    <div class="node">

        <v-layout
                class="lay1"
                justify-space-between
                @click="nodeClicked(nodes)">

            <div
                    draggable="true"
                    @dragover.prevent
                    @dragenter.prevent
                    @dragstart="startDrag2(nodes)"
                    @drop="onDrop2(nodes)"
            >
          <span
                  v-if="nodes.children.length>0"
                  class="type"
                  style="font-size:10px; color: darkorange"
          >
            {{ expanded ? '&#9660;' : '&#9658;' }}
          </span>
                <span
                        v-else
                        style="font-size:10px; color: mediumblue"
                > &#9671; </span>
                {{ nodes.name }}
            </div>
            <!--            <strong>{{nodes.id}}</strong>-->
            <v-layout
                    align-start
                    justify-end
            >

                    <AddCategoryDialog />
                <v-btn x-small color="success" >+</v-btn>
                <v-btn x-small @click="catRemove(nodes.id)" color="warning">x</v-btn>
            </v-layout>
        </v-layout>

        <div
                v-if="expanded"
                class="ml-3"
        >

            <CatBrowser1
                    v-for="(child, indx) in nodes.children"
                    :key="indx"
                    :nodes="child"
                    :depth="depth + 1" />
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions} from 'vuex';
    import AddCategoryDialog from "@/components/dialogs/AddCategoryDialog";
    export default {
        name: "CatBrowser1",
        components: {AddCategoryDialog},
        props:{
            nodes: [Array, Number, Object],
            depth: {
                type: Number,
                default: 0
            }
        },
        data() {
            return{
                expanded: false
            }
        },
        computed:{
            ...mapGetters(['getCurrentProdList'])
        },
        methods: {
            ...mapActions(['setCurrentProdList', 'setSelectedCategoryId', 'setTargetCategoryId', 'editCategoryIerarchy','deleteCategory']),

            async  nodeClicked(nodes){
                this.expanded = !this.expanded
                // console.log(nodes)
                await     this.$store.dispatch('setCurrentProdList',nodes)

            },
            catRemove(id){
                this.$store.dispatch('deleteCategory', id)
                // alert(id)
            },
            startDrag2(nodes){
                // alert('Dragged ' + nodes.id)
                this.$store.dispatch('setSelectedCategoryId', nodes.id)
            },
            onDrop2(nodes){
                this.$store.dispatch('setTargetCategoryId',nodes.id);
                this.$store.dispatch('editCategoryIerarchy')

            }
        },
    }
</script>

<style scoped>
    .node {
        /*cursor: pointer;*/
        border-top: 1px solid;
        border-left: 1px solid;
        border-top-left-radius: 4px;

        border-left-color: #0802aa;

        text-align: left;
        margin-top: 3px;
        font-size: 13px;
        font-weight: bold;
        /*max-height: 2em;*/
    }

    .lay1{

        padding-top: 3px;
        max-height:30px;
        line-height: 1.2;
        padding-left:0.5em;
    }
</style>