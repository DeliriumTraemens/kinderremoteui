<template>
    <v-card outlined shaped class="mb-4" style="max-width: 300px;margin: 4px; padding: 3px">
        <v-img

                height="200px"
                :src="'http://localhost:9293/images/'+item.image"
        />
        <v-card-title class="d-inline-block text-truncate"
                      style="max-width: 290px;">
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
    </v-card>
</template>

<script>
    export default {
        name: "ItemCard",
        props: {
            item:{}
        },
    }
</script>

<style scoped>

</style>