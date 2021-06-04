<template>
    <div class="blog">
        <NavBar/>
        <header class="mt-4">
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center" style="position: relative; text-align: center; max-width: 500px">
                <svg id="blob" viewBox="0 0 200 200" style="transform: rotate(90deg)" xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgba(211, 63, 73, 0.15)" d="M18.9,-25.7C23.4,-9.3,25.4,-1.5,24.8,7.4C24.1,16.4,20.9,26.4,9.8,39C-1.4,51.6,-20.3,66.6,-32.9,62.7C-45.5,58.8,-51.7,36,-56.9,13C-62.2,-10,-66.5,-33.3,-56.9,-50.8C-47.2,-68.4,-23.6,-80.2,-8.2,-73.7C7.1,-67.1,14.3,-42.1,18.9,-25.7Z" transform="translate(100 100)" />
                </svg>
                <div><h1 class="display-4 fw-normal" style="font-family: 'Poppins'; font-style: italic; color: #D33F49;" text-center>Blog Posts</h1></div>
            </div>
        </header>

        <div id="articles">
            <b-container fluid>
                <b-row fluid style="margin-top: 15vh;" class="px-5">
                    <b-col >
                        <h2>#1 - How to self advertise</h2>
                        <p class="mt-5">While there are plenty of people out there who love being the centre of attention, there are also those of us who prefer to stay out of the limelight. Too much self-promotion could easily come across as bragging – and that’s not good for your reputation.</p>
                        <p>The last thing you want is to start your social media profiles, begin establishing your personal brand, and discover that you’re coming off as a bragging, pompous, idiot. The overwhelming threat of “making the wrong impression” can convince would-be entrepreneurs, creative minds, and freelancers to avoid self-marketing entirely. However, this could mean that you miss out on valuable opportunities to boost your career. </p>
                        <p> While speaking highly of yourself might feel uncomfortable, it serves an important purpose. After all, if you’re not willing to sing your praises, who will be? </p>
                        <p> Effective self-promotional strategies are all about finding the balance between demonstrating your skills and boasting about them. As difficult as it can be to toe that line if you can get your promotional methods right, you could find that they open the door to promotions, new clients, and incredible opportunities. </p>
                        <p> When it comes to standing out in any marketplace, even individuals need to figure out how to successfully strut their stuff. </p>
                    </b-col>
                    <b-col class="px-5">
                        <b-img src="../assets/blog1.jpg" alt="Self Advertising" fluid rounded/>
                    </b-col>
                </b-row>
                
                <b-row style="margin-top: 20vh;" class="px-5">
                    <b-col>
                        <b-img src="../assets/blog2.jpg" alt="Self Advertising" fluid rounded/>
                    </b-col>
                    <b-col class="ml-5">
                        <h2> #2 - The importance of social media marketing</h2>
                        <p class="mt-5">Social media has become the most influential and important virtual space where the platform is not only used for social networking but is also a great way of digitally advertising your brand and your products. </p>
                        <p>Social media's power is commendable as you get to reach a large number of people within seconds of posting an ad, helping you reduce your costs, and making your ads reach out to your potential audience through these social media advertisements.</p>
                        <p>With the huge number of online users, which is almost 59% of the world’s population, marketers must not miss out on their chance of marketing on these digital forums where they can reach all the maximum number of potential buyers compared with print or television media marketing.</p>
                    </b-col>
                </b-row>
                
                <b-row style="margin-top: 20vh;" class="px-5 pb-5">
                    <b-col class="ml-5">
                        <h2>#3 - Five Summer Blog Ideas</h2>
                        <p class="mt-5">Can’t believe it’s already time to share our next season’s blog post idea list! 
                        <p> Summer is always tough in blogging because who doesn’t want to just be outside? We tried to make most of these ideas experienced-based, meaning that you actually have to go outside and *do* things in order to write the blog post. It seems like a long process, but that results in really fun experiences and it also means that with each event comes not just one quality blog post but often many. </p> 
                        <p>If you’re strategic about documenting your summer fun, you’ll be left with tons of engaging content for your readers to enjoy! Onto the blog post ideas:</p>
                            <p>1. Create a neighborhood guide for your fave hood in your city </p>
                            <p>2. Style a sunset shoot and turn it into an event to enjoy with your friends or partner.</p>
                            <p>3. Look on your own actual bookshelf to create a summer reading list of old faves you want to revisit</p>
                            <p>4. Attend an outdoor show or event and write a review or recap</p>
                            <p>5. Take photos at a summer craft fair and promote some of the brands</p>
                    </b-col>
                    <b-col>
                        <b-img src="../assets/blog3.jpg" alt="Self Advertising" fluid rounded/>
                    </b-col>
                </b-row>
            </b-container>
            
        </div>
        <Footer/>
    </div>
</template>


<script>
import NavBar from "@/components/navbar.vue";
import Footer from "@/components/Footer.vue";

export default ({
    name: "Blog",
    components: {
        NavBar,
        Footer,
    },
})
</script>

<style scoped>
main {
    font-family: 'Poppins';
}

p {
    color: black;
    font-style: normal;
}

#articles {
    font-family: 'Poppins'; 
    font-style: italic; 
    color: #D33F49;
    margin:2%;
    text-align: left;
}

#blob {
    width: 450px;
    position: absolute;
    top: -100%;
    left: 0rem;
  }

text {
    font-family: 'Poppins';
    font-style: italic;
    font-size: 4.5em;
    fill: #D33F49;
}
</style>