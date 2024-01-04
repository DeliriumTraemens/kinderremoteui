<template>
    <div class="description-page">
        <v-row>
            <v-col col="12">
                <v-carousel>
                    <v-carousel-item
                            v-for="(item,i) in items"
                            :key="i"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <div class="header">
            <h1>{{ product.name }}</h1>
        </div>
        <div class="content">
            <div class="gallery">
<!--                <v-carousel>-->
<!--                    <v-carousel-item v-for="(image, index) in product.images" :key="index">-->
<!--                        <img :src="getImageUrl(image)" alt="" />-->
<!--                    </v-carousel-item>-->
<!--                </v-carousel>-->
                <v-col col="12">
                    <v-carousel>
                        <v-carousel-item
                                v-for="(item,i) in items"
                                :key="i"
                                :src="item.src"
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                        ></v-carousel-item>
                    </v-carousel>
                </v-col>


                <v-carousel>
                    <v-carousel-item v-for="(image, index) in product.images" :key="index">
                        <img :src="getImageUrl(image)" alt="" />
<!--                        <img :src=product.image alt="" />-->
                    </v-carousel-item>
                </v-carousel>
            </div>
            <div class="description">
                <p>{{ product.description }}</p>
            </div>
        </div>
        <div class="info">
            <div class="left-column">
                <div class="price">
                    {{ product.price }}
                </div>
                <div class="attributes">
                    <h3>{{ product.groupAttribute.groupName }}</h3>
                    <ul>
                        <li v-for="attribute in product.groupAttribute.attributes" :key="attribute.id">
                            <span>{{ attribute.type }}:</span> {{ attribute.value }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right-column">
                <div class="manufacturer">
                    <h3>Производитель</h3>
                    <p>{{ product.manufacturer.name }}</p>
                </div>
                <div class="other-fields">
                    <!-- Остальные поля, например, модель, SKU, количество, статус и т.д. -->
                    <p>Модель: {{ product.model }}</p>
                    <p>SKU: {{ product.sku }}</p>
                    <p>Количество: {{ product.quantity }}</p>
                    <!-- Добавьте остальные поля здесь -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ProductDetailsAI",
        data() {
            return {
                items: [
                    {
                        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
                    },
                    {
                        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
                    },
                    {
                        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
                    },
                ],
                product: {
                    id: 132019,
                    price: 396.1125,
                    image: "http://localhost:9293/images/catalog/YML-V3-Toys/pazly-na-500-elementov/IMG826f037cd91a54d8a12fa3989745a29f.jpg",
                    name: "Пазл \"Свет в лесу\", 500 элементов Castorland",
                    description:
                        "Пазл \"Свет в лесу\" - это красочная картина, разделенная на множество маленьких кусочков. Чтобы собрать их всех воедино, нужно запастись временем и терпением, зато в результате получится красивое изображение, которое надолго сохранит яркость цветов благодаря специальному покрытию. Очаровывающий лесной пейзаж станет необычным аксессуаром любой комнаты и предметом гордости для своего владельца.615724",
                    images: [
                        { id: 0, image: "http://localhost:9293/images/catalog/YML-V3-Toys/pazly-na-500-elementov/IMG826f037cd91a54d8a12fa3989745a29f.jpg" },
                        { id: 1249740, image: "http://localhost:9293/images/catalog/YML-V3-Toys/pazly-na-500-elementov/IMG834547668312fbd981a2a6cb36074ce0.jpg" }
                    ],
                    groupAttribute: {
                        groupName: "Технические характеристики",
                        attributes: [
                            { id: 5, type: "Материал", value: "картон." }
                            // Добавьте другие атрибуты здесь
                        ]
                    },
                    manufacturer: { id: 633, name: "Castorland" }
                    // Добавьте остальные поля продукта здесь
                }
            };
        },
        methods: {
            getImageUrl(image) {
                // return require(${image.image);
                // return require(`@/assets/${image.image}`);
                return this.product.image
            }
        }
    };
</script>


<style scoped>
    .description-page {
        max-width: 1200px;
        margin: 0 auto;
    }

    .header {
        text-align: center;
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .gallery {
        width: 70%;
    }

    .description {
        width: 30%;
    }

    .info {
        display: flex;
    }

    .left-column {
        flex: 1;
    }

    .right-column {
        flex: 1;
    }

    .price {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .attributes {
        margin-bottom: 20px;
    }

    .attributes h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .attributes ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .attributes li {
        margin-bottom: 5px;
    }

    .manufacturer {
        margin-bottom: 20px;
    }

    .manufacturer h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .other-fields {
        /* Стилизуйте остальные поля здесь */
    }
</style>