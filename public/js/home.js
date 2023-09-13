const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";
    publicaciones.forEach( (pub) => {
        secciones += `
            <section class="d-flex border border-5 justify-content-arround" style="color: #black; background-color: #dee2e6;">
            <div class="d-flex gap-4 flex-fill " >
                <img src="${pub.url_imagen}" class="rounded" height="300" width="500" alt="${pub.titulo}" >
                <div class="d-flex flex-column justify-content-between">
                    <h3><u>Titulo:</u> ${pub.titulo}</h3>
                    <p><u>Detalle:</u> ${pub.detalle}</p>
                    <p><u>Fecha:</u> ${pub.fecha}</p>
                </div>
                </div>
            
                <div class="d-flex flex-column justify-content-end">
                    <a href="/mod"> Modificar </a>
            
                    <button type="button" class="btn btn-primary btn-sm mb-3">
                        Borrar
                    </button>
                </div>
            </section>

        `
    })

    elementoHtml.innerHTML = secciones;
    
}

const obtenerPublicaicones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}





document.addEventListener('DOMContentLoaded', async () => {
    
    const publicaciones = await obtenerPublicaicones()
    const main = document.querySelector('#lista-publicaciones')
    mostrarPublicaciones(publicaciones, main)
})