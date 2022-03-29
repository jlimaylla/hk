import data from '../data.json' assert { type: "json" };
const main = document.getElementById('main')
// const containerCar = document.querySelector('#lista-carrito tbody')
// const clearCarBtn = document.querySelector('#vaciar-carrito')
// const courses = document.querySelector('#lista-cursos')
let elements = data.data

document.addEventListener('DOMContentLoaded', () => {
	let element = getData()
	drawHtml(element)
})

function drawHtml(element) {

	const row = document.createElement('div')
	row.innerHTML = `
		<p class="text-cite">${element?.sentence}</p>
		 <p>${element?.author}</p>
		 <img src="${element?.cover}" class="image-cite" />
     `
	main.appendChild(row)

}

function getData() {
	const id = Math.floor((Math.random() * (elements.length - 1 + 1)) + 1)
	const data = elements.find(x => x._id === id)
	return data
}