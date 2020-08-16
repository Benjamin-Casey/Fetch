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

        <!-- Page Content -->
        <div class="container">

            <!-- Page Heading -->
            <h1 class="my-4 pt-5">Restaurant</h1>

            <!-- Project One -->
            <div class="row">
                <div class="col-md-7">
                    <a href="#">
                        <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="">
                    </a>
                </div>
                <div class="col-md-5">
                    <h3>Meal One</h3>
                    <p>Meal Description</p>
                    <p>Price:</p>
                    <a class="btn btn-primary" href="#">Order</a>
                </div>
            </div>
            <!-- /.row -->

            <hr>

            <!-- Project Two -->
            <div class="row">
                <div class="col-md-7">
                    <a href="#">
                        <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="">
                    </a>
                </div>
                <div class="col-md-5">
                    <h3>Meal Two</h3>
                    <p>Meal Description</p>
                    <p>Price:</p>
                    <a class="btn btn-primary" href="#">Order</a>
                </div>
            </div>
            <!-- /.row -->

            <hr>

            <!-- Project Three -->
            <div class="row">
                <div class="col-md-7">
                    <a href="#">
                        <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="">
                    </a>
                </div>
                <div class="col-md-5">
                    <h3>Meal Three</h3>
                    <p>Meal Description</p>
                    <p>Price:</p>
                    <a class="btn btn-primary" href="#">Order</a>
                </div>
            </div>
            <!-- /.row -->

            <hr>

            <!-- Project Four -->
            <div class="row">

                <div class="col-md-7 pb-5">
                    <a href="#">
                        <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="">
                    </a>
                </div>
                <div class="col-md-5">
                    <h3>Meal Four</h3>
                    <p>Meal Description</p>
                    <p>Price:</p>
                    <a class="btn btn-primary" href="#">Order</a>
                </div>
            </div>

        </div>

        <!-- Footer -->
        <section class = "py-5 page-content-1">
            <div class="container">
                <div class="col-sm">
                    <text>Contact us, etc. here</text>
                </div>
            </div>
        </section>
        <!-- Footer End -->

    </body>
</template>