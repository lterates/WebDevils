<template>
    <div>
    <b-navbar type="dark">
        <b-navbar-brand href="#" style="color: #D33F49; font-size: 2rem">
            <b-img src="../assets/logo.png" width="70%" class="mr-4" alt="WebDevils Logo"/>
        WebDevils</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto mr-4">
                <!-- CADA UM DESTES NAV ITEMS TERÁ UM ROUTER LINK ASSOCIADO -->
                <a style="color:#D33F49" href="#" class="mr-4 nav-link">Get Started</a>
                <a style="color:#D33F49" href="#" class="mr-4 nav-link">Pricing</a>
                <a style="color:#D33F49" href="#" class="mr-4 nav-link">Our Team</a>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<style scoped>
    div {
        font-family: 'Poppins';
        font-style: italic;
    }
</style>