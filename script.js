//
const category = document.querySelector(".category")
const quote = document.querySelector(".quote")
const author = document.querySelector(".author")
const newQuote = document.querySelector(".new-quote")
const typeOfQuote = document.querySelector(".type")
const likeQoute = document.querySelector(".like-qoute")
const copyQoute = document.querySelector(".copy-qoute")
const savedQuote = document.querySelector(".saved-quote")

let QOUTE;
let FavoriteQoute = JSON.parse(localStorage.getItem("FavQoute")) || []


function getQuote () {
    let quote_category = category.value;
       fetch(`https://api.api-ninjas.com/v1/quotes?category=${quote_category}`, {
           method : "GET",
           headers : {'X-Api-Key': 'UrZJd6J1yWQviS690/xp7A==pURG6yTUMGClK3Fi'}
       } ).then(response => {
            console.log(response.ok)
            return response.json()
        }).then(data => 
        {
            QOUTE = data
            quote.innerHTML = `<q>${QOUTE[0].quote}</q>`
            typeOfQuote.textContent = `#${QOUTE[0].category}`
            typeOfQuote.style.display = "block";
            author.textContent = `--${QOUTE[0].author}`
        })
        
    
}

newQuote.addEventListener("click",getQuote)

copyQoute.addEventListener("click", function () {
    if (!navigator.clipboard) {
        alert("Your browser does not support the Clipboard API.");
        return;
    }
    navigator.clipboard.writeText(quote.textContent)
    alert("Copied!")
})

likeQoute.addEventListener("click",function () {
    FavoriteQoute.push(QOUTE[0])
    localStorage.setItem("FavQoute", JSON.stringify(FavoriteQoute))
    alert("Added to Favorites!")
    console.log(FavoriteQoute)
})

savedQuote.addEventListener("click",function () {
    window.location.href = "favQoutePage.html"
})



        
        
        
        