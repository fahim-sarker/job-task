function changeThumbnail(image) {
    document.getElementById('mainThumbnail').src = image;
}

let checkout = document.getElementsByClassName(".checkout");
let modal = document.getElementById("modal");
let cartcolor = document.getElementsByClassName(".cartcolor")
let cartbtn = document.getElementById("cartbtn")

modal.style.display = "none";
checkout.addEventListener("click", () => {
    modal.style.display = (modal.style.display === "none") ? "block" : "none";
});
document.addEventListener("click", (event) => {
    if (modal.style.display === "block" && !modal.contains(event.target) && event.target !== checkout) {
        modal.style.display = "none";
    }
});

checkout.style.display = "none";

cartbtn.addEventListener("click", (()=>{
        checkout.style.display = (checkout.style.display === "none") ?"block" : "none";
}))



