const allSeats = document.querySelectorAll("#seat");
let seat = 0;
for (const allSeat of allSeats) {
    allSeat.addEventListener("click", function (event) {
        seat += 1;
        if (seat > 4) {
            alert("4 any more");
            return;
        }
        const applyBtn = document.getElementById("applyBtn");
        if(seat == 4){
            applyBtn.removeAttribute("disabled", false);
        }
        const phone = parseInt(document.getElementById("phone").value);
        
        const email = document.getElementById("email").innerText;
        // document.getElementById("phone").addEventListener("keyup",function(event){
        //     console.log("even");
        // })
        // function phone(){
        //     // const phone = document.getElementById("phone").value;
        //     console.log("phone");
        // }
        const nextBtn = document.getElementById("next");
        if (event.target.childNodes.length == 1 && typeof phone == "number" && !isNaN(phone)) {
            nextBtn.removeAttribute("disabled", true);
        }
        const busSeatName = event.target.innerText;
        const seatPrice = document.getElementById("setPrice").innerText;
        const seatsLeft = document.getElementById("SeatsLeft").innerText;

        event.target.style.backgroundColor = "#1DD100"
        event.target.setAttribute("disabled", false);
        const seatsLeftCoverter = parseInt(seatsLeft);
        document.getElementById("SeatsLeft").innerText = seatsLeftCoverter - 1;
        const setContainer = document.getElementById("seatFiled");
        const h3 = document.createElement("h3");
        h3.innerHTML = `
        <div class="grid grid-cols-3 justify-between  ">
            <h3>${busSeatName}</h3>
            <h3>Ecomarcr</h3>
            <h3>${seatPrice}</h3>
            `
        setContainer.appendChild(h3);
        total("total", parseInt(seatPrice))
        total("grandTotal", parseInt(seatPrice));
        setInnerText("setSeat", seat)
        console.log(busSeatName)
        // phone("phone", phone);

    })

}

// function discount(id, value){
//     const setContainer = document.getElementById(id);
//         const h3 = document.createElement("h3");
//         h3.innerHTML = `
//         <div class="grid grid-cols-3 justify-between  ">
//             <h3>Discont</h3>
//             <h3>${value}</h3>
//             `
//         setContainer.appendChild(h3);
// }
function cupupon(){
    const copupon = document.getElementById("copupon").value;
    const total = document.getElementById("total").innerText;
    const grandTotal = document.getElementById("grandTotal").innerText;
    const copuponSection = document.getElementById("applyArear")
    const newCopupon = total*15/100;
    const coupleCopupon = total*20/100;
    const totalGrand1 = grandTotal - newCopupon;
    const totalGrand2 = grandTotal - coupleCopupon;


    if(copupon == "NEW15"){
        const setContainer = document.getElementById("discount");
        const h3 = document.createElement("h3");
        h3.innerHTML = `
        <div class="flex justify-between  font-bold">
            <h3>Discont</h3>
            <h3>${newCopupon}</h3>
            `
        setContainer.appendChild(h3);
        copuponSection.style.display = "none";
        document.getElementById("grandTotal").innerText = totalGrand1;

    }
    else if ( copupon == "Couple 20"){
        const setContainer = document.getElementById("discount");
        const h3 = document.createElement("h3");
        h3.innerHTML = `
        <div class="flex justify-between  font-bold">
            <h3>Discont</h3>
            <h3>${coupleCopupon}</h3>
            `
        setContainer.appendChild(h3);
        copuponSection.style.display = "none";
        document.getElementById("grandTotal").innerText = totalGrand2;

    }else{
        alert("Enter valid copupon");
    }

}


// document.getElementById("phone").addEventListener("keyup",function(event){
//     console.log(event);
// })

function phone(id, value) {
    document.getElementById(id).addEventListener("keyup", function (event) {
        // console.log(event.target.value)
        let phone = parseInt(event.target.value);
            phone = value;
        // console.log(phone)
        // return phone;
    })
}

// phone("phone", phone);
// set innerText 
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
// total 
function total(id, value) {
    const total = document.getElementById(id).innerText;
    const totalCovert = parseInt(total);
    const sum = totalCovert + parseInt(value);
    setInnerText(id, sum);
}

