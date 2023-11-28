function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img (query selector: pesquisa pelo seletor)
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light (set attribute: serve para modificar ou ajustar o atributo)
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem ligt mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
