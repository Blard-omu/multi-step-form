const arc = document.querySelector("#arcade")
const adv = document.querySelector("#advance")
const pro = document.querySelector("#pro")
const arcP = document.querySelector("#arcadePrice")
const advP = document.querySelector("#advancePrice")
const proP = document.querySelector("#proPrice")
const toggleBtn = document.querySelector("#flexSwitchCheckChecked")


console.log(toggleBtn.checked); // true


// function to update Price
function updatePrice(){
    const isYearly = toggleBtn.checked

    // update pricess for each plan
    arcP.innerHTML = isYearly ? "$90/yr" : "$9/mo"
    advP.innerHTML = isYearly ? "$120/yr" : "$12/mo"
    proP.innerHTML = isYearly ? "$150/yr" : "$15/mo"

    // update plan message
    arc.innerHTML = isYearly ? "2 months free" : ""
    adv.innerHTML = isYearly ? "2 months free" : ""
    pro.innerHTML = isYearly ? "2 months free" : ""
}

updatePrice()

// function to toggle monthly/yearly
toggleBtn.addEventListener("change", updatePrice)



