<template>
    <div>

        <div class="categories">
            <button class="category-button active" onclick="filterCards('all')">Все</button>
            <button class="category-button" onclick="filterCards('игрушки')">Игрушки</button>
            <button class="category-button" onclick="filterCards('игры')">Игры</button>
        </div>

        <div class="product-cards">
            <div class="card" data-category="игрушки">
                <img src="toy1.jpg" alt="Игрушка 1">
                <h3>Игрушка 1</h3>
                <p>Цена: $10</p>
                <button class="view-button" onclick="viewProductDetails('Игрушка 1')">Подробнее</button>
                <button class="order-button" onclick="orderProduct('Игрушка 1')">Заказать</button>
            </div>

            <div class="card" data-category="игрушки">
                <img src="toy2.jpg" alt="Игрушка 2">
                <h3>Игрушка 2</h3>
                <p>Цена: $15</p>
                <button class="view-button" onclick="viewProductDetails('Игрушка 2')">Подробнее</button>
                <button class="order-button" onclick="orderProduct('Игрушка 2')">Заказать</button>
            </div>

            <div class="card" data-category="игры">
                <img src="game1.jpg" alt="Игра 1">
                <h3>Игра 1</h3>
                <p>Цена: $20</p>
                <button class="view-button" onclick="viewProductDetails('Игра 1')">Подробнее</button>
                <button class="order-button" onclick="orderProduct('Игра 1')">Заказать</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VitrineNew"
    }
</script>

<style scoped>
    .categories {
        margin-bottom: 20px;
    }

    .category-button {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        padding: 5px 10px;
        margin-right: 10px;
        font-size: 16px;
    }

    .category-button.active {
        font-weight: bold;
    }

    .product-cards {
        display: flex;
        flex-wrap: wrap;
    }

    .card {
        width: 200px;
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        text-align: center;
    }

    .card img {
        width: 100%;
        height: auto;
        margin-bottom: 10px;
    }

    .card h3 {
        margin-bottom: 5px;
    }

    .card p {
        margin-bottom: 10px;
    }

    .view-button,
    .order-button {
        cursor: pointer;
        padding: 5px 10px;
    }

    .view-button {
        background-color: #eee;
    }

    .order-button {
        background-color: #48c774;
        color: white;
    }
</style>