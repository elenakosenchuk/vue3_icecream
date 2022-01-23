<template>
    <div class="article_content">
            <div class="article_picture">
                <img :src="art.image" :alt="art.label">
            </div>
            <div class="article_text_item">
                <h4 class="article_title">{{art.label}}</h4>
                <p class="article_text">
                    <ol>
                        <li v-for='val in art.ingredientLines' :key='val'>{{val}}</li>
                    </ol>
                </p>
                <div class="btn_wrapper">
                    <a class="btn" :href="art.shareAs" target="_blank" rel="nofollow">Read more &rarr;</a>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props:['art'],
    name:"OneArticleShort"
}
</script>

<style lang="scss" scoped>
    .article_content{
        display: flex;
        gap: 40px;
        margin-bottom: 50px;
        background: rgba(242, 206, 218, 0.3);
        .article_text_item{
            padding: 30px 0;
            .article_title{
            font-size: 30px;
            margin-bottom: 20px;
        }
        .article_text{
            padding-left: 10px;
            ol{
                margin-bottom: 40px;
                li{
                    list-style-type: disc;
                    list-style-position: inside;
                }
            }
        }
        .btn_wrapper{
            width: 165px;
            height: 50px;
            .btn{
                width: 100%;
                height: 100%;
                display: inline-block;
                text-align: center;
                padding-top: 13px;
                }
            }
        }        
    }
    .article_picture{
        width: 35%;
    }
    @media screen and (max-width: 850px){
       .article_content{
           flex-direction: column;
           gap: 20px;
           align-items: center;
       } 
       .article_picture{
        width: 100%;
        }
        .article_content .article_text_item{
            width: 80%;
        }
    }   
    
</style>