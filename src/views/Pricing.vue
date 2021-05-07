<template>
    <div class="pricing">
        <NavBar/>
    <header class="mt-5">
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal" style="font-family: 'Poppins'; font-style: italic; color: #D33F49">Pricing</h1>
      <p class="fs-5 mt-3 text-muted">Quickly build an effective Marketing Strategy for your company or personal project. Check our three different pricing tiers below.</p>
    </div>
  </header>

  <main>
    <div id="cardGroup" class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">0€<small class="text-muted fw-light">/month</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Newsletter Access</li>
              <li>Accurate Statistics</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-dark">Sign up for our Newsletter</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">15€<small class="text-muted fw-light">/month</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Unlimited Reports</li>
              <li>Powerful Analytics</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary" style="background-color: #D95961; border: none">Get Started</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm" style="border: 2px solid #D95961">
          <div class="card-header py-3 text-white" style="background-color: #D95961;">
            <h4 class="my-0 fw-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary" style="background-color: #D95961; border: none">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  </main>
    </div>
</template>

<script>
import NavBar from "@/components/navbar.vue";

export default ({
    name: "Pricing",
    components: {
        NavBar,
    }
})
</script>

<style scoped>
    .pricing {
        font-family: 'Poppins';
    }

    main {
        font-family: 'Poppins';
    }

    #cardGroup {
        margin-left: 14rem;
        margin-right: 14rem;
    }
</style>