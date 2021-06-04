<template>
    <div class="blog">
        <NavBar/>
        <header class="mt-5">
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal" style="font-family: 'Poppins'; font-style: italic; color: #D33F49">Blog Posts</h1>
            </div>
        </header>

         <svg id="svg1" xmlns="http://www.w3.org/2000/svg" xml:lang="en"
            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
            <title>Cursor</title>
            <defs>
                <path id="textcircle"
                    d="M250,400
                        a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                    transform="rotate(12,250,250)"/>
            </defs>
            <rect width="100%" height="100%" fill="none" />
            <text>
                <textPath xlink:href="#textcircle"
                        aria-label="All for One &amp; One for All"
                        textLength="942">CATCH UP WITH OUR BLOG .</textPath>
            </text>
        </svg>
        
        <div id="articles">
            <b-container fluid>
                <b-row>
                    <b-col>
                        <h2>How to self advertise</h2>
                    </b-col>  
                </b-row>
                <b-row>
                    <b-col>
                        <p>While there are plenty of people out there who love being the centre of attention, there are also those of us who prefer to stay out of the 
                        limelight. Too much self-promotion could easily come across as bragging – and that’s not good for your reputation.
                        The last thing you want is to start your social media profiles, begin establishing your personal brand, and discover that you’re coming off as a 
                        bragging, pompous, idiot. The overwhelming threat of “making the wrong impression” can convince would-be entrepreneurs, creative minds, and freelancers 
                        to avoid self-marketing entirely. However, this could mean that you miss out on valuable opportunities to boost your career.
                        While speaking highly of yourself might feel uncomfortable, it serves an important purpose. After all, if you’re not willing to sing your praises, 
                        who will be?
                        Effective self-promotional strategies are all about finding the balance between demonstrating your skills and boasting about them. As difficult as it 
                        can be to toe that line if you can get your promotional methods right, you could find that they open the door to promotions, new clients, and incredible 
                        opportunities.
                        When it comes to standing out in any marketplace, even individuals need to figure out how to successfully strut their stuff.
                        </p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <h2>The importance of social media marketing</h2>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <p>
                        Social media has become the most influential and important virtual space where the platform is not only used for social networking but is also a 
                        great way of digitally advertising your brand and your products.
                        Social media's power is commendable as you get to reach a large number of people within seconds of posting an ad, helping you reduce your costs, and 
                        making your ads reach out to your potential audience through these social media advertisements.
                        With the huge number of online users, which is almost 59% of the world’s population, marketers must not miss out on their chance of marketing on these 
                        digital forums where they can reach all the maximum number of potential buyers compared with print or television media marketing.
                        </p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <h2>Summer Blog Ideas</h2>
                    </b-col>
                    
                </b-row>
                <b-row>
                    <b-col>
                        <p>Can’t believe it’s already time to share our next season’s blog post idea list! Summer is always tough in blogging because who doesn’t want to 
                            just be outside? We tried to make most of these ideas experienced-based, meaning that you actually have to go outside and *do* things in order to 
                            write the blog post. It seems like a long process, but that results in really fun experiences and it also means that with each event comes not just 
                            one quality blog post but often many. If you’re strategic about documenting your summer fun, you’ll be left with tons of engaging content for your 
                            readers to enjoy! Onto the blog post ideas…

                            1. Create a neighborhood guide for your fave hood in your city 
                            2. Style a sunset shoot and turn it into an event to enjoy with your friends or partner.
                            3. Look on your own actual bookshelf to create a summer reading list of old faves you want to revisit
                            4. Attend an outdoor show or event and write a review or recap
                            5. Take photos at a summer craft fair and promote some of the brands
                            6. Share your editing process for editing natural light photos
                            7. Make a craft for your next dinner party, like a cute table runner or drink stirrers
                            8. Go on a solo walk or hike for some time to yourself and write your reflections
                            9. Host a backyard cocktail party—have everyone bring an ingredient and experiment with new recipes
                            10. Take a summer art class at a local arts center or college… you can write about this all quarter long!
                            11. Find a local networking event and then share insights you gained from the experience
                            12. Host a crafting in the park day where you get together with your local community to create. You can create a post recapping and one with a DIY tutorial
                            13. Create a roundup of products based on your favorite summer colors
                            14. Practice or experiment with golden hour photography and share the photos
                            15. Create a summer fashion DIY and share the process on your blog
                            16. Share some travel hacks that will make life easier for summer vacays
                            17. Use downtime to write a post on a subject you don’t normally tackle, as inspired by our post on surprising readers
                            18. Have a summer fun photo shoot featuring one of these trendy items or your own summer-themed pool and partyware
                            19. Take photos during a trip and create something with them that you can do a blog tutorial on, like postcards or art
                            </p>
                    </b-col>
                </b-row>
            </b-container>
            
        </div>
        
    </div>
</template>


<script>
import NavBar from "@/components/navbar.vue";

export default ({
    name: "Blog",
    components: {
        NavBar,
    },
        mounted(){
        const circleSvg = document.getElementById('svg1')
        let mouseX = 0
        let mouseY = 0
        window.addEventListener('mousemove', (event) => {
            mouseY = (event.clientY / 16) - (45 / 16) + 'rem'
            mouseX = (event.clientX / 16) - (45 / 16) + 'rem'
    })
        const mouseMove = () => {
        circleSvg.style.top = mouseY
        circleSvg.style.left = mouseX
        window.requestAnimationFrame(mouseMove)
    }
        mouseMove()
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
    #articles{
        font-family: 'Poppins'; 
        font-style: italic; 
        color: #D33F49;
        margin:2%;
        text-align: left;
    }


     svg {
    width: 100px;
    position: absolute;
    animation: rotation 4s infinite linear;
    pointer-events: none;
    transition: top 1s, left 1s;
    transition-timing-function: ease-out;
    z-index: 9999;
  }

    text{
    font-family: 'Poppins';
    font-style: italic;
    font-size: 4.5em;
    fill: #D33F49;
  }

  @keyframes rotation {
    from {
      transform: rotate(359deg);
    }
    to {
      transform: rotate(0deg);
    }
}

</style>