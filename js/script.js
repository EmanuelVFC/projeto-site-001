var article_aviao = window.document.querySelector("article.viagem-aviao")
var article_hotel = window.document.querySelector("article.viagem-hotel")
var article_rental = window.document.querySelector("article.viagem-rental")

function exibir1(){
    if (article_aviao.style.display == "none"){
        article_aviao.style.display = "block"
        article_hotel.style.display = "none"
        article_rental.style.display = "none"
    }else{
        article_aviao.style.display = "none"
        article_hotel.style.display = "none"
        article_rental.style.display = "none"
    }
}

function exibir2(){
    if (article_hotel.style.display == "none"){
        article_hotel.style.display = "block"
        article_aviao.style.display = "none"
        article_rental.style.display = "none"
    }else{
        article_aviao.style.display = "none"
        article_hotel.style.display = "none"
        article_rental.style.display = "none"
    }
}

function exibir3(){
    if (article_rental.style.display == "none"){
        article_rental.style.display = "block"
        article_hotel.style.display = "none"
        article_aviao.style.display = "none"
    }else{
        article_aviao.style.display = "none"
        article_hotel.style.display = "none"
        article_rental.style.display = "none"
    }
}