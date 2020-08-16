<template>
    <body>
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
                <h1 class="display-4">Your Cart</h1>                
            </div>
            <!-- End -->

            <div class="pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                            <!-- Shopping cart table -->
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="p-2 px-3 text-uppercase">Product</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Price</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Quantity</div>
                                            </th>
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Remove</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" class="border-0">
                                                <div class="p-2">
                                                    <img src="https://via.placeholder.com/70x70" alt="" width="70" class="img-fluid rounded shadow-sm">
                                                    <div class="ml-3 d-inline-block align-middle">
                                                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">Burger</a></h5>
                                                        <span class="text-muted font-weight-normal font-italic d-block">Restaurant 1</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="border-0 align-middle"><strong>$30.00</strong></td>
                                            <td class="border-0 align-middle"><strong>3</strong></td>
                                            <td class="border-0 align-middle">
                                            <a href="#" class="text-dark"><i class="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div class="p-2">
                                                    <img src="https://via.placeholder.com/70x70" alt="" width="70" class="img-fluid rounded shadow-sm">
                                                    <div class="ml-3 d-inline-block align-middle">
                                                        <h5 class="mb-0"><a href="#" class="text-dark d-inline-block">Drinks</a></h5>
                                                        <span class="text-muted font-weight-normal font-italic">Restaurant 2</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="align-middle"><strong>$9.00</strong></td>
                                            <td class="align-middle"><strong>3</strong></td>
                                            <td class="align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div class="p-2">
                                                    <img src="https://via.placeholder.com/70x70" alt="" width="70" class="img-fluid rounded shadow-sm">
                                                    <div class="ml-3 d-inline-block align-middle">
                                                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block">French Fries </a></h5>
                                                        <span class="text-muted font-weight-normal font-italic">Restauran 2</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="align-middle"><strong>$15.00</strong></td>
                                            <td class="align-middle"><strong>3</strong></td>
                                            <td class="align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- End -->
                        </div>
                    </div>

                    <div class="row py-5 p-4 bg-white rounded shadow-sm">
                        <div class="col-lg-6">
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                            <div class="p-4">
                                <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                                <div class="input-group mb-4 border rounded-pill p-2">
                                    <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0">
                                    <div class="input-group-append border-0">
                                        <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
                            <div class="p-4">
                                <p class="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                                <textarea name="" cols="30" rows="2" class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                            <div class="p-4">
                                <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                <ul class="list-unstyled mb-4">
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>$0.00</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                        <h5 class="font-weight-bold">$400.00</h5>
                                    </li>
                                </ul><a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </body>
</template>