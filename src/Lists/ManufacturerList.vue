<template>
    <div class="mt-4">
        <h2>Manufacturer's List</h2>
<!--        <div>-->
<!--            {{getManufacturersList}}-->
<!--        </div>-->

        <div class="custom-list">
            <div v-for="(item, idx) in getManufacturersList" :key="idx" class="custom-item" @click="getManufacturer(item.id)">
                <span class="item-name">{{ item.name }}</span>
                <span class="tooltip">{{ item.id }}</span>
            </div>
        </div>

<!--        <v-list dense class="my-custom-list">-->
<!--            <v-list-item-group >-->
<!--                <v-list-item v-for="(item, idx) in getManufacturersList" :key="idx" class="v-list-item&#45;&#45;link my-custom-item" @click="getManufacturer(item.id)">-->
<!--                    <v-list-item-content>-->
<!--                        <v-list-item-title>{{ item.name }} {{ item.id }}</v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                </v-list-item>-->
<!--            </v-list-item-group>-->
<!--        </v-list>-->


<!--        <ul>-->
<!--            <li v-for="(item ,idx) in getManufacturersList" :key="idx" @click="getManufacturer(item.id)">-->
<!--              <div>  {{item.name}} ' ' {{item.id}}</div>-->
<!--&lt;!&ndash;                <v-btn small color="light yellow" min-width="200" @click="getManufacturer(item.id)">&ndash;&gt;-->

<!--&lt;!&ndash;                    <h5> {{item.name}} ' ' {{item.id}} </h5>&ndash;&gt;-->
<!--&lt;!&ndash;                </v-btn>&ndash;&gt;-->
<!--            </li>-->
<!--        </ul>-->
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
    .my-custom-item {
        padding-top: 2px; /* Уменьшите верхний внутренний отступ */
        padding-bottom: 2px; /* Уменьшите нижний внутренний отступ */
        margin-top: 0; /* Установите верхний внешний отступ */
        margin-bottom: 0; /* Установите нижний внешний отступ */
        line-height: 1; /* Установите значение для межстрочного интервала */
    }

    .custom-list {
        display: flex;
        flex-direction: column;
    }

    .custom-item {
        cursor: pointer;
        padding: 1px 1px; /* Измените размеры дива */
        margin-bottom: 2px; /* Измените отступ между строками */
        transition: background-color 0.3s;
        position: relative;
    }

    .custom-item:hover {
        background-color: lightgray;
    }

    .item-name {
        position: relative;
    }

    .tooltip {
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: black;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s;
    }

    .custom-item:hover .tooltip {
        opacity: 1;
        visibility: visible;
    }

    .item-name,
    .tooltip {
        line-height: 1.2; /* Измените межстрочный интервал */
    }
</style>