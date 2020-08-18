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
    // {id, quantity}
    cart: [
        {
            id: 1,
            title: 'Burger',
            price: '10.00',
            restaurant: 'Restaurant1',
            quantity: '1'
        }
    ],
    // {id, quantity, status}
    orders: []
};

const getters = {
    allProducts: (state) => state.products,
    allOrders: (state) => state.orders,
    cartProducts(state) {
        // Convert cart item ids to product information
        return state.cart.map(cartItem => {
            const product = state.products.find(product => product.id === cartItem.id)
            return {
                title: product.title,
                price: product.price,
                restaurant: product.restaurant,
                quantity: cartItem.quantity
            }
        })
    },
    cartTotal(state, getters) {
        // Return cart total
        let price = 0
        getters.cartProducts.forEach(product => {
            price += product.price * product.quantity
        })
        return price
    },
    numberOfOrders(state) {
        return state.orders.length
    }
};

const actions = {
    addToCart(context, product) {
        // Get item
        const cartItem = context.state.cart.find(item => item.id === product.id)
        // If not in cart, add to cart
        if (!cartItem) {
            context.commit('pushOrderToCart', product.id)
        } else {
            // If in cart, increment quantity
            context.commit('incrementOrderQuantity', cartItem)
        }
    },
    addToOrders(context) {
        // Remove everything from cart, make it into an order.
        var cartPrice = document.getElementById('cart-total').innerText
        context.commit('pushOrder', cartPrice)
        state.cart = []
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
    },
    pushOrder(state, cartPrice) {
        // For each item in the cart, get the total price of the items
        // Get incremented id
        var orderId = 1
        if(state.orders.length != 0) {
            orderId = state.orders[state.orders.length-1].id+1
        }
        // Push
        state.orders.push({
            id: orderId,
            price: cartPrice,
            status: 'Pending'
        })
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}