export default function ReservationForm()
{
    const divFragment = document.createElement("div")

    const formContainer = document.createElement("div")
    formContainer.className = "book_form"
    divFragment.appendChild(formContainer)

    const form = document.createElement("form")
    form.addEventListener("submit", e => {
        e.preventDefault()
    })
    formContainer.appendChild(form)
    form.innerHTML = `
        <p>Zarezerwuj wizytę</p>
        <input type="text" id="depart" placeholder="data przyjazdu">
        <input type="text" id="return" placeholder="data wyjazdu">
        <select id="seat">
            <option value="1">Pokój unarny</option>
            <option value="2">Pokój binarny</option>
            <option value="3">Pokój trójkowy</option>
            <option value="3">Pokój czwórkowy</option>
        </select>`

    const btnReserved = document.createElement("button")
    form.appendChild(btnReserved)
    btnReserved.innerText = "Zarezerwuj"
    btnReserved.className = "btn btn-light btn-sm btn-lg btn-radius"
    btnReserved.addEventListener("click", () =>{
        alert("Rezerwacja!")
    })

    return divFragment.innerHTML
}