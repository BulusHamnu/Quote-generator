//

const Container = document.querySelector("main")
let FavoriteQoute = JSON.parse(localStorage.getItem("FavQoute")) || []



function createContainer() {
    let render = ``;

    FavoriteQoute.forEach((quote,index) => {
        render += `
            <div class="quote-cont">
            <p class="quote"><q>${quote.quote}</q></p>
             <p class="author">--${quote.author}</p>
             <p class="type">#${quote.category}</p>
             <section class="menu">
                <img src="/asset/Copy.png" alt="Copy quote" class="copy-qoute" data-quoteid="${index}">
                <img src="/asset/deleteBtn.png" alt="delete qoute" class="delete-qoute" data-quoteid="${index}">
            </section>
        </div>
    
    `
    });

    Container.innerHTML = render;
    const copyBtn = document.querySelectorAll(".copy-qoute");
    const deleteBtn = document.querySelectorAll(".delete-qoute");


    copyBtn.forEach(copyBtn => {
        
        copyBtn.addEventListener("click", function () {
            let quoteText = FavoriteQoute[parseInt(this.dataset.quoteid)].quote
            
            if (!navigator.clipboard) {
                alert("Your browser does not support the Clipboard API.");
                return;
            }
            navigator.clipboard.writeText(quoteText);
            alert("Copied!")
        })
    })

    deleteBtn.forEach(copyBtn => {
        
        copyBtn.addEventListener("click", function () {
            let quoteid = FavoriteQoute[parseInt(this.dataset.quoteid)]
            FavoriteQoute.splice(quoteid,1)
            localStorage.setItem("FavQoute", JSON.stringify(FavoriteQoute))
            createContainer()
        })
    })
}


if (FavoriteQoute.length > 0) {
    createContainer()
} else {
    Container.innerHTML = `<h3>nothing saved here!</h3>`;
}







