
function burguer (){

    document.getElementById('nav-bar').style.display = 'flex'
    document.getElementById('burguer').style.display = 'none'
    document.getElementById('sair').style.display = 'flex'
    document.body.style.overflow = "hidden"
}

function sair (){

    document.getElementById('nav-bar').style.display = 'none'
    document.getElementById('burguer').style.display = 'flex'
    document.getElementById('sair').style.display = 'none'
    document.body.style.overflow = "visible"
}