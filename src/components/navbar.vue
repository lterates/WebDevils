<template>
    <div>
    <b-navbar type="dark">
        <router-link to="/home"><b-navbar-brand style="color: #D33F49; font-size: 2rem">
            <b-img src="../assets/logo.png" width="70%" class="mr-4" alt="WebDevils Logo"/>
        WebDevils</b-navbar-brand></router-link>

        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto mr-4">
                <!-- CADA UM DESTES NAV ITEMS TERÁ UM ROUTER LINK ASSOCIADO -->
                <a style="color:#D33F49" href="#" class="mr-4 nav-link">Get Started</a>
                <router-link to="/pricing"><a style="color:#D33F49" class="mr-4 nav-link">Pricing</a></router-link>
                <router-link to="ourTeam"><a style="color:#D33F49" href="#" class="mr-4 nav-link">Our Team</a></router-link>
                <router-link to="/blog"><a style="color:#D33F49" href="#" class="mr-4 nav-link">Blogs</a></router-link>
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