<template>
    <div>
    <b-navbar style="background-color: #D33F49;" type="dark" >
        <b-navbar-brand href="#">
            <b-img src="../assets/logo-white.png" width="50%" class="mr-4" fluid alt="WebDevils Logo"/>
        WebDevils</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto mr-4">
                <!-- CADA UM DESTES NAV ITEMS TERÁ UM ROUTER LINK ASSOCIADO -->
                <b-nav-item class="mr-4">Apply Now</b-nav-item>
                <b-nav-item class="mr-4">Our Team</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<style scoped>
    div {
        font-family: 'Poppins';
    }
</style>