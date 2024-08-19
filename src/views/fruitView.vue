<template>
    <h1>SHOP YOUR FAVORITE FRUITS</h1>
    <div>
        <section v-for="fruit in $store.state.fruits" :key="fruit.id">
            {{ fruit.fruits_id }}
            {{ fruit.fruit_name}}
            {{ fruit.weight }}
            {{ fruit.amount }}
            <button @click="addToCart(fruit.fruits_id)">Add to CART</button>
        </section>
    </div>
</template>
<script>
export default {
    name:'fruitView',
    methods: {
        getFruit(){
            this.$store.dispatch('getFruits')
        },
        addToCart(fruits_id){
            this.$store.dispatch('addToCart', fruits_id)
        }
    },
    data(){
    },
    mounted(){
        this.getFruit()
    }
}
</script>
<style>
    
</style>