let API = "https://randomuser.me/api/?results=20";

let getData = async (API) => {
    let request = await fetch(API);

    let data = await request.json();

    return data;
};

getData(API)
    .then((data) => {
        let myarr = data.results;
        myarr.map((item) => {

            let img = document.createElement("img")
            img.src = item.picture.large;
            img.classList.add("image")

            let card = document.getElementById("card");
            let cards = document.getElementById("cards")

            let name = document.createElement("p");
            name.innerHTML = item.name.first + ' ' + item.name.last;

            let world = document.createElement("p");
            world.innerHTML = item.location.country

            let email = document.createElement("p");
            email.innerHTML = item.email;

            card.appendChild(img)
            card.appendChild(name)
            card.appendChild(world)
            card.appendChild(email)
            cards.appendChild(card)
        });
    })
    .then((err) => {
        console.log(err);
    })
