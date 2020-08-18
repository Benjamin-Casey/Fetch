<template>
    <body class="h-100 bg-dark">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark top">
            <div class="container">
                <router-link to="/" class="navbar-brand">Fetch</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span> 
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item avatar dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span class="badge badge-danger ml-2">1</span>
                                <i class="fas fa-envelope"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                                <a class="dropdown-item" href="customer_orders.html">Order delivered </a>
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
        <div class="px-4 px-lg-0 bg-dark">
            <!-- For demo purpose -->
            <div class="container text-white pt-5 text-">
                <h1 class="display-4">Orders</h1>                
            </div>
            <!-- End -->
            <div class="">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                            <!-- Shopping cart table -->
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="p-2 px-3 text-uppercase">Order</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Price</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Status</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="e in allOrders" :key="e.id">
                                            <th scope="row">
                                                <div class="p-2">
                                                    <div class="ml-3 d-inline-block align-middle">
                                                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block">Order {{ e.id }}</a></h5>
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="align-middle"><strong>{{ e.price }}</strong></td>
                                            <td class="align-middle"><strong>{{ e.status }}</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Orders",
    computed: mapGetters(['allOrders'])
}
</script>