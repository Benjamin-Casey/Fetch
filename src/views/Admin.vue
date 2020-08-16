<template>
    <body class="h-100 bg-dark mh-100" style="background-size:100%">
        <div>
        <!-- Navigation -->
            <nav class="navbar navbar-expand-lg navbar-dark top">
                <div class="container">
                    <router-link to="/" class="navbar-brand">Fetch</router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span> 
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li>
                                <router-link to="/" class="nav-link">Admin Dashboard</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <div class="px-4 px-lg-0">
            <!-- For demo purpose -->
            <div class="container text-white pt-5 text-">
                <h1 class="display-4">Customer Orders</h1>                
            </div>
            <!-- End -->


            <div class="">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                            <!-- Shopping cart table -->
                            <div>
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
                                            <th scope="col" class="border-0 bg-light">
                                                <div class="py-2 text-uppercase">Edit</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class='order-row'>
                                            <th scope="row">
                                                <div class="p-2">
                                                    
                                                    <div class="ml-3 d-inline-block align-middle">
                                                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block row-text" contenteditable="true">Order 1</a></h5>
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="align-middle row-content"><strong class="row-text" contenteditable="true">$30.00</strong></td>
                                            <td class="align-middle row-content"><strong class="row-text" contenteditable="true">Success</strong></td>
                                            <td class="align-middle row-content">
                                                <a href="#" class="text-dark">
                                                    <i class="fa fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr class='order-row'>
                                            <th scope="row">
                                                <div class="p-2">
                                                    <div class="ml-3 d-inline-block align-middle">
                                                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block row-text" contenteditable="true">Order 2</a></h5>
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="align-middle row-content"><strong class="row-text" contenteditable="true">$20.00</strong></td>
                                            <td class="align-middle row-content"><strong class="row-text" contenteditable="true">Cancelled</strong></td>
                                            <td class="align-middle row-content">
                                                <a href="#" class="text-dark">
                                                    <i class="fa fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr class='order-row'>
                                            <th scope="row">
                                                <div class="p-2">
                                                    
                                                    <div class="ml-3 d-inline-block align-middle">
                                                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block row-text" contenteditable="true">Order 3</a></h5>
                                                    </div>
                                                </div>
                                            </th>
                                            <td class="align-middle row-content"><strong class="row-text" contenteditable="true">$15.00</strong></td>
                                            <td class="align-middle row-content"><strong class="row-text" contenteditable="true">Processing</strong></td>
                                            <td class="align-middle row-content">
                                                <a href="#" class="text-dark">
                                                    <i class="fa fa-trash"></i>
                                                </a>
                                            </td>
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