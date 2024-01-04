<template>
    <v-row>
        <div class="mt-6">DETAILS New</div>
        <div>
            <ul>
                <li v-for="(value, key, index) in getCurrentProduct" :key="value">
                    <!--                    {{ index }} -->
                    {{ key }} {{ value }}
                </li>
            </ul>
        </div>
    </v-row>
</template>
<script>
    export default {
        name: 'CurrentProductObjectList',
        props: {
            getCurrentProduct: {}
        }
    }
</script>
