//title double
let alertShow = false

if (document.title === "Home") {
    setInterval(() => {
        document.title =
            alertShow ? "Home"
                : "digitalHouse"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "404 Not Found") {
    setInterval(() => {
        document.title =
            alertShow ? "404 Not Found"
                : "digitalHouse"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Babbage") {
    setInterval(() => {
        document.title =
            alertShow ? "Babbage"
                : "digitalHouse"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Joan Clarke") {
    setInterval(() => {
        document.title =
            alertShow ? "Joan Clarke"
                : "digitalHouse"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Margaret Hamilton") {
    setInterval(() => {
        document.title =
            alertShow ? "Margaret Hamilton"
                : "digitalHouse"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Grace Murray Hopper") {
    setInterval(() => {
        document.title =
            alertShow ? "Grace Murray Hopper"
                : "digitalHouse"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Ada Lovelace") {
    setInterval(() => {
        document.title =
            alertShow ? "Ada Lovelace"
                : "digitalHouse"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Alan Turing") {
    setInterval(() => {
        document.title =
            alertShow ? "Alan Turing"
                : "digitalHouse"

        alertShow = !alertShow
    }, 1000)
}


const botonModo = document.getElementById("modo");
botonModo.addEventListener("click", cambiarModo);

// Obtener el estado del modo del almacenamiento local
if (localStorage.getItem('modo') === 'noche') {
    document.querySelector('body').classList.add('noche');
}

function cambiarModo() {
    const body = document.querySelector("body");

    body.classList.toggle("dia");
    body.classList.toggle("noche");
    if (localStorage.getItem('modo') === 'dia') {
        localStorage.setItem('modo', 'noche');
    } else {
        localStorage.setItem('modo', 'dia');

    }

}

