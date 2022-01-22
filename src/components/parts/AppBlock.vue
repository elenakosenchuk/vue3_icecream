<template>
    <section id="app_block">
                <div class="container">
                    <div class="app_block_wrapper">
                        <div class="app_block_picture">
                            <img src="assets/images/app-pic.png" alt="App icecream picture">
                        </div>
                        <div class="app_block_content">
                            <h4 class="app_block_title">Simple Way To Order Your Food</h4>
                            <p class="app_block_text">Some food has looked so awful that it's looked like something that
                                the
                                dog's brought home, yet after one mouthful I've been left eating my thoughts.</p>
                            <ul class="app_list">
                                <li class="app_list_item">
                                    <svg>
                                        <use xlink:href="assets/images/icons/sprite.svg#select"></use>
                                    </svg>
                                    <p>Select Your Food</p>
                                </li>
                                <li class="app_list_item">
                                    <svg>
                                        <use xlink:href="assets/images/icons/sprite.svg#cart"></use>
                                    </svg>
                                    <p>Add To Cart</p>
                                </li>
                                <li class="app_list_item">
                                    <svg>
                                        <use xlink:href="assets/images/icons/sprite.svg#order"></use>
                                    </svg>
                                    <p>Order Your Food</p>
                                </li>
                            </ul>
                            <div class="apps_logo">
                                <a href="https://play.google.com" target="_blank" rel="nofollow"><img
                                        src="assets/images/google-play-logo.png" alt="Google play logo"></a>
                                <a href="https://www.apple.com/store" target="_blank" rel="nofollow"><img
                                        src="assets/images/app-store-logo.png" alt="App store logo"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</template>

<script>
export default {
    name:"AppBlock"
}
</script>