<template>
    <div>
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-light top">
            <div class="container">
                <router-link to="/" class="navbar-brand">Fetch</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span> 
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        
                        <li class="nav-item avatar dropdown">
                            <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span class="badge badge-danger ml-2">1</span>
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                                <a class="dropdown-item" href="customer_orders.html">Order delivered</a>
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

        <!-- Full Page Image Header with Vertically Centered Content -->
        <header class="masthead">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12 text-center">
                        <h1 class="font-weight-light">Fetch</h1>
                        <p class="lead">
                            <a href="#content-1" class="no-style-link">Order now</a>
                        </p>
                    </div>
                </div>
            </div>
        </header>

        <!-- Page Content -->

        <section class="py-5 page-content-1" id="content-1">
            <!-- Restaurants Info -->
            <div class="container">
                <h1 class="font-weight-light">Restaurants Near You</h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <router-link to="/restaurant" class="no-style-link">
                            <img class="food-image" src="img/burger.jpg" alt="Generic placeholder image">
                            <br>
                            <div class="restaurant-label ">
                                <label>Restaurant 1</label>
                                <br>
                                <label class="food-franchise-delivery">Delivery: $5</label>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-sm">
                        <router-link to="/restaurant" class="no-style-link">
                            <img class="food-image" src="img/sushi.jpg" alt="Generic placeholder image">
                            <br>
                            <div class="restaurant-label">
                                <label class="food-franchise">Restaurant 2</label>
                                <br>
                                <label class="food-franchise-delivery">Delivery: $5</label>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-sm">
                        <router-link to="/restaurant" class="no-style-link">
                            <img class="food-image" src="img/pizza.jpg" alt="Generic placeholder image">
                            <br>
                            <div class="restaurant-label">
                                <label class="food-franchise">Restaurant 3</label>
                                <br>
                                <label class="food-franchise-delivery">Delivery: $5</label>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- End Restaurants Info -->
        </section>

        <!-- Section 2 Content-->
        <section class = "py-5 page-content-2">
            <div class="container">
                <div class="col-sm">
                    <label>More advertising space here</label>
                </div>
                <div class="col-sm">
                    <img src="https://via.placeholder.com/800x500">
                </div>
            </div>
        </section>
        <!-- Section 2 Content End -->

        <!-- Footer -->
        <section class = "py-5 page-content-1">
            <div class="container">
                <div class="col-sm">
                    <label>Contact us, etc. here</label>
                </div>
            </div>
        </section>
        <!-- Footer End -->
    </div>
</template>