import axios from 'axios';

const state = {
    products: [
        {
        id: 1,
        title: 'Burger',
        price: '10.00',
        restaurant: 'Restaurant1',
        description: 'Lorem Ipsum'
    },
    {
        id: 2,
        title: 'Sushi',
        price: '15.00',
        restaurant: 'Restaurant2',
        description: 'Lorem Ipsum'
    },
    {
        id: 3,
        title: 'Pizza',
        price: '20.00',
        restaurant: 'Restaurant3',
        description: 'Lorem Ipsum'
    }
],
    cart: [
        {
            id: 1,
            title: 'Burger',
            price: '10.00',
            restaurant: 'Restaurant1',
            quantity: '1'
        }
    ]
};

const getters = {
    allProducts: (state) => state.products,
    allOrders: (state) => state.cart
};

const actions = {
    addToCart(context, product) {
        console.log("ADDING PRODUCT "+product+" TO CART")
        // Get item
        const cartItem = context.state.cart.find(item => item.id === product.id)
        // If not in cart, add to cart
        if (!cartItem) {
            context.commit('pushOrderToCart', product.id)
        } else {
            // If in cart, increment quantity
            context.commit('incrementOrderQuantity', cartItem)
        }
    }
};

const mutations = {
    pushOrderToCart(state, productId) {
        state.cart.push({
            id: productId,
            quantity: 1
        })

    },
    incrementOrderQuantity(state, product) {
        product.quantity++
    },
    removeOrder(state, orderId) {
        state.cart = state.cart.filter(item => item.id !== orderId)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}