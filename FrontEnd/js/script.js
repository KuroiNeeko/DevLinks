function toggleMode() {
        const html = document.documentElement
        html.classList.toggle('light')

        // pegar a tag img
        const img = document.querySelector("#profile img")


        // substituir a imagem
        if(html.classList.contains('light')) {
                // se tiver light mode, adicionar a imagem light
                
                img.setAttribute('src', './Images/perfil.jfif')

        } else {
                // se não tiver light mode, manter a imagem original
                
                img.setAttribute('src', './Images/dark-profile.jpg')
        }

}





// se não tiver light mode, manter a imagem original