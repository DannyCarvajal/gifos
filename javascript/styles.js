/* TEMPLATE FOR NAV AND FOOTER */
const navcontainer = document.getElementsByClassName('navcontainer')[0]
let templatenav = document.createElement('template')

templatenav.innerHTML = `<nav>

<img src="Assets/GIFOSLOGO.svg" alt="Logo de Gifos " class="logo">

<ul>
    <li class="titulo nav-items item1">MODO NOCTURNO</li>
    <li class="titulo nav-items"><a class="titulo item2" href="./favoritos.html">FAVORITOS</a></li>
    <li class="titulo nav-items"><a class="titulo item3" href="./misgifos.html">MIS GIFOS</a></li>
    <li>
        <a class="item4" href="./creatugifo.html">
            <img src="Assets/button-crear-gifo.svg" alt="Simbolo de añadir Gifo" class="nav-items creatugifo ">
        </a>
    </li>
</ul>


</nav>
<div class="hamburguer"  "><span></span><span></span><span></span></div>
</div>

<div class="navbg"></div>
<div class="responsive-nav" ">
    <ul>
        <li style="list-style: none;" class="responsive1 titulo item1">MODO NOCTURNO</li>
        <li style="list-style: none;" class="responsive2 titulo "><a class="titulo item2"  href="favoritos.html">FAVORITOS</a></li>
        <li style="list-style: none;" class="responsive3 titulo "><a class="titulo item3"  href="misgifos.html">MIS GIFOS</a></li>
    
    </ul>
</div>
`
navcontainer.appendChild(templatenav.content)


/* HAMBURGUER RESPONSIVE */

let hamburguer = document.getElementsByClassName('hamburguer')[0]


let contadornav = 0


window.addEventListener('scroll', () => {
    containeranimation(true)
})
hamburguer.addEventListener('click', () => {
    containeranimation(false)
})


function containeranimation(quit) {

    let firstspan = hamburguer.firstElementChild
    let secondspan = hamburguer.firstElementChild.nextElementSibling
    let thirdspan = hamburguer.lastElementChild
    let responsivenav = document.getElementsByClassName('responsive-nav')[0]
    let navbg = document.getElementsByClassName('navbg')[0]

    if (contadornav == 0 && quit === false) {

        firstspan.setAttribute('style', ' transition:1s;transform: rotate(45deg) translateY(5.3px) translateX(5.3px);')
        secondspan.setAttribute('style', 'transition:1s; transform: rotate(-45deg) translateX(0px);')
        thirdspan.setAttribute('style', 'display:none;')
        responsivenav.setAttribute('style', 'transition:1s; transform: none;')
        navbg.setAttribute('style', 'transition:1s; transform:none;')
        contadornav = 1

    } else {
        firstspan.setAttribute('style', ' transition:1s;transform: none;')
        secondspan.setAttribute('style', 'transition:1s; transform: none;')
        thirdspan.setAttribute('style', 'transition:2s; display:block;')
        responsivenav.setAttribute('style', 'transition:1s; transform: translateX(-100%);')
        navbg.setAttribute('style', 'transition:1s; transform: translateX(-100%);')
        contadornav = 0

    }

}


const footercontainer = document.getElementsByClassName('footercontainer')[0]
let templatefooter = document.createElement('template')

templatefooter.innerHTML = `    <footer>
<div class="redesSociales">
    <p class="tituloespecial">Compartir en:</p>
    <img src="Assets/icon_facebook.svg" alt="Facebook" class="facebook">
    <img src="Assets/icon-twitter.svg" alt="Twitter" class="twitter">
    <img src="Assets/icon_instagram.svg" alt="Instagram" class="instagram">
</div>

<div class="derechos">
    <p class="tituloespecial">&copy; GIFOS 2020 All Rights Reserved.</p>
    </div>
    </footer>
    <div class="purpleLine purpleLine-final"></div>`

footercontainer.appendChild(templatefooter.content)


const leftarrow = document.getElementsByClassName("flechaIzquierda")[0]
const rightarrow = document.getElementsByClassName("flechaDerecha")[0]
const facebook = document.getElementsByClassName("facebook")[0]
const instagram = document.getElementsByClassName("instagram")[0]
const twitter = document.getElementsByClassName("twitter")[0]


/* IN WHAT PAGE AM I? */
const page = document.body.id
const logo = document.getElementsByClassName('logo')[0]

/*NAVEGATOR  */
if (page !== "home")
    logo.addEventListener('click', () => { location.href = "index.html" })


/* SECTION 1 */

if (page === "home") {

    const vermas = document.getElementsByClassName('vermas')[0]
    iconchange(vermas, 'mouseover', 'Assets/CTA-ver-mas-hover.svg')
    iconchange(vermas, 'mouseout', 'Assets/CTA-ver-mas.svg')

}

/*------------------ CARROUSEL---------------------- */

/* ARROWS */

if (page !== "creatugifoxd") {

    iconchange(leftarrow, 'mouseover', "Assets/button-slider-left-hover.svg")
    iconchange(leftarrow, 'mouseout', "Assets/button-slider-left.svg")

    iconchange(rightarrow, 'mouseover', "Assets/Button-Slider-right-hover.svg")
    iconchange(rightarrow, 'mouseout', "Assets/Button-Slider-right.svg")

    let creatugifo = document.getElementsByClassName('creatugifo')[0]
    iconchange(creatugifo, 'mouseover', 'Assets/CTA-crear-gifo-hover.svg')
    iconchange(creatugifo, 'mouseout', 'Assets/button-crear-gifo.svg')
    iconchange(creatugifo, 'mousedown', 'Assets/CTA-crear-gifo-active.svg')

    /*FOOTER */
    iconchange(facebook, 'mouseover', 'Assets/icon_facebook_hover.svg')
    iconchange(facebook, 'mouseout', 'Assets/icon_facebook.svg')
    iconchange(instagram, 'mouseover', 'Assets/icon_instagram-hover.svg')
    iconchange(instagram, 'mouseout', 'Assets/icon_instagram.svg')
    iconchange(twitter, 'mouseover', 'Assets/icon-twitter-hover.svg')
    iconchange(twitter, 'mouseout', 'Assets/icon-twitter.svg')

}

/* DARKMODE */

let activateDarkMode = document.getElementsByClassName('nav-items item1')[0]
let activateDarkMode2 = document.getElementsByClassName('responsive1')[0]

let darkyvalue = sessionStorage.getItem('darky')

activateDarkMode.addEventListener('click', darkmode)
activateDarkMode2.addEventListener('click', darkmode)

let contador = 0

if (darkyvalue == 'true')
    darkmode()



function darkmode() {

    if (document.body.classList.contains('dark-mode')) {
        sessionStorage.setItem('darky', 'false');
    } else {
        sessionStorage.setItem('darky', 'true');
    }

    const body = document.getElementsByClassName('darkmode')[0]
    const creatugifo = document.getElementsByClassName('creatugifo')[0]
    
    /* BODY COLOR */
    body.classList.toggle('dark-mode');

    /* LOGO */
    svgChange(logo, 'Assets/GIFOSLOGOTDFW.svg', 'Assets/GIFOSLOGO.svg')


    let mododiurno = document.getElementsByClassName('item1')[0]
    let mododiurnomobile = document.getElementsByClassName('item1')[1]

    if (contador % 2 == 0) {
        logo.setAttribute('style', 'width:97px;height:97px;')
        activateDarkMode.innerHTML = "MODO DIURNO"
        activateDarkMode2.innerHTML = "MODO DIURNO"
    } else {
        logo.setAttribute('style', 'width:100px;height:100px;')
        mododiurno.innerHTML = "MODO NOCTURNO"
        mododiurnomobile.innerHTML = "MODO NOCTURNO"
    }

    svgChange(creatugifo, 'Assets/CTA-crar-gifo-modo-noc.svg', 'Assets/button-crear-gifo.svg')

    methodChange(creatugifo, 1, 'Assets/CTA-crear-gifo-hover.svg', 'Assets/CTA-crear-gifo-modo-noc.svg')
    methodChange(creatugifo, 2, 'Assets/button-crear-gifo.svg', 'Assets/CTA-crar-gifo-modo-noc.svg')


    if (page === "home") {

        /* INPUT  */
        let lupa = document.getElementsByClassName('lupa')[0]
        svgChange(lupa, 'Assets/icon-search-mod-noc.svg', 'Assets/icon-search.svg')

        /* VER MÁS */
        let vermas = document.getElementsByClassName('vermas')[0]
        svgChange(vermas, 'Assets/CTA-ver+-modo-noc.svg', 'Assets/CTA-ver-mas.svg')
        methodChange(vermas, 1, 'Assets/CTA-ver-mas-hover.svg', 'Assets/CTA-ver+hover-modo-noc.svg')
        methodChange(vermas, 2, 'Assets/CTA-ver-mas.svg', 'Assets/CTA-ver+-modo-noc.svg')
    }


    if (document.body.id != "creatugifoxd") {
        /* BUTTONS */
        svgChange(leftarrow, 'Assets/button-slider-left-md-noct.svg', 'Assets/button-slider-left.svg');
        svgChange(rightarrow, 'Assets/button-slider-right-md-noct.svg', 'Assets/button-Slider-right.svg');


        methodChange(leftarrow, 1, "Assets/button-slider-left-hover.svg", "Assets/button-left-hovernight.svg")
        methodChange(leftarrow, 2, "Assets/button-slider-left.svg", "Assets/button-slider-left-md-noct.svg")

        methodChange(rightarrow, 1, "Assets/button-Slider-right-hover.svg", "Assets/button-right-hovernight.svg")
        methodChange(rightarrow, 2, "Assets/button-Slider-right.svg", "Assets/button-slider-right-md-noct.svg")

        /* FOOTER */

        methodChange(facebook, 1, 'Assets/icon_facebook_hover.svg', 'Assets/facebook-hovernight.svg')
        methodChange(instagram, 1, 'Assets/icon_instagram-hover.svg', 'Assets/instagram-hovernight.svg')
        methodChange(twitter, 1, 'Assets/icon-twitter-hover.svg', 'Assets/twitter-hovernight.svg')

    } else {

        /* IMAGES CREATE YOUR GIFO ON DARK MODE */
        let camara = document.getElementsByClassName('camaradia')[0]
        let pelicula = document.getElementsByClassName('pelicula')[0]

        svgChange(camara, 'Assets/camara-modo-noc.svg', 'Assets/camara.svg')
        svgChange(pelicula, 'Assets/pelicula-modo-noc.svg', 'Assets/pelicula.svg')

    }

    contador++
}



