<template>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <router-link to="/" class="navbar-brand">Fetch</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span> 
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item avatar dropdown">
                            <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span class="badge badge-danger ml-2"> {{ numberOfOrders }}</span>
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                                <div v-for="e in allOrders" :key="e.id">
                                    <router-link to="/orders" class="dropdown-item">Order {{ e.id }} - {{ e.status }}</router-link>
                                </div>
                            </div>
                        </li>
                        
                        <li class="nav-item">
                            <router-link to="/orders" class="nav-link">Orders</router-link>
                        </li>
                        
                        <li class="nav-item">
                            <router-link to="/cart" class="nav-link">Cart</router-link>
                        </li>
                        
                        <li>
                            <router-link to="/admin" class="nav-link">Admin</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Page Content -->
        <div class="container">

            <!-- Page Heading -->
            <h1 class="my-4 pt-5">Restaurant</h1>

            <!-- Render products -->
            <div v-for="product in allProducts" :key="product.id">
                <div class="row">
                    <div class="col-md-7">
                        <a href="#">
                            <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="">
                        </a>
                    </div>
                    <div class="col-md-5">
                        <h3>{{ product.title }}</h3>
                        <p>{{ product.description }}</p>
                        <p>${{ product.price }}</p>
                        <button @click.prevent="addToCart(product)" class="btn btn-primary">Order</button>
                    </div>
                </div>
                <hr>
            </div>
        </div>

        <!-- Footer -->
        <section class = "py-5 page-content-1">
            <div class="container">
                <div class="col-sm">
                    <label>Contact us, etc. here</label>
                </div>
            </div>
        </section>
        <!-- Footer End -->

    </body>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Products",
    computed: mapGetters(['allProducts', 'numberOfOrders']),
    methods: mapActions(['addToCart'])
}
</script>