<template>
    <footer id="footer">
            <div class="container footer_container">

                <div class="footer_logo_block">
                    <div id="footer_logo"><a href="#main_page"><img src="assets/images/logo.png" alt="Site Logo"></a>
                    </div>
                    <div class="footer_description">
                        <p>Some food has looked so awful that it's looked like something that the dog's brought home.
                        </p>
                    </div>
                    <div class="footer_network">
                        <p class="network_title">Fllow Us</p>
                        <ul class="network_list">
                            <li class="network_list_item"><a href="" target="_blank" rel="nofollow"><img
                                        src="assets/images/facebook.png" alt="Facebook logo"></a>
                            </li>
                            <li class="network_list_item"><a href="" target="_blank" rel="nofollow"><img
                                        src="assets/images/twitter.png" alt="Twitter logo"></a>
                            </li>
                            <li class="network_list_item"><a href="" target="_blank" rel="nofollow"><img
                                        src="assets/images/instagram.png" alt="Instagram logo"></a>
                            </li>
                            <li class="network_list_item"><a href="" target="_blank" rel="nofollow"><img
                                        src="assets/images/linkedin.png" alt="Linkedin logo"></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="footer_navigation_block">
                    <nav id="footer_navigation">
                        <ul>
                            <li><a href="#main_page">Home</a></li>
                            <li><a href="#product">Product</a></li>
                            <li><a href="#articles">Articles</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="footer_subscribe_block">
                    <h5>Newsletter</h5>
                        <SubscribeForm />
                    <ul class="pay_list">
                        <li class="pay_list_item small"><img src="assets/images/pay-pal.png" alt="Paypal logo"></li>
                        <li class="pay_list_item middle"><img src="assets/images/master-card.png" alt="Mastercard logo">
                        </li>
                        <li class="pay_list_item big"><img src="assets/images/visa.png" alt="Visa logo"></li>
                    </ul>
                </div>

            </div>
        </footer>
</template>

<script>
import SubscribeForm from '../parts/SuscribeForm.vue'
export default {
    name:"Footer",
    components:{
        SubscribeForm
    }
}
</script>