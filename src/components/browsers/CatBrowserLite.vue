<template>
    <div class="node">
<!--        <div>BrowserLite</div>-->

        <v-layout
                class="lay1"
                justify-space-between
                @click="nodeClicked(nodes)">

            <div>
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
                {{ nodes.name }}'
<!--                '{{nodes.id}}-->
            </div>
            <!--            <strong>{{nodes.id}}</strong>-->
        </v-layout>

        <div
                v-if="expanded"
                class="ml-3"
        >

            <CatBrowserLite
                    v-for="(child, indx) in nodes.children"
                    :key="indx"
                    :nodes="child"
                    :depth="depth + 1" />
        </div>
    </div>
</template>

<script>
        // import { mapGetters, mapActions} from 'vuex';
    export default {
        name: "CatBrowserLite",
            components: {},
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
                // ...mapGetters(['getCurrentProdList'])
            },
            methods: {
                // ...mapActions(['setCurrentProdList', 'setSelectedCategoryId', 'setTargetCategoryId', 'editCategoryIerarchy','deleteCategory']),

               async  nodeClicked(nodes){
                    this.expanded = !this.expanded
                    // console.log(nodes)
                  await       this.$store.dispatch('productsListAction',nodes.id);
                     await this.$router.push('/');


                 },
                // catRemove(id){
                //     this.$store.dispatch('deleteCategory', id)
                //     // alert(id)
                // },
                // startDrag2(nodes){
                //     // alert('Dragged ' + nodes.id)
                //     this.$store.dispatch('setSelectedCategoryId', nodes.id)
                // },
                // onDrop2(nodes){
                //     this.$store.dispatch('setTargetCategoryId',nodes.id);
                //     this.$store.dispatch('editCategoryIerarchy')
                //
                // }
            },
        }


</script>

<style scoped>

</style>