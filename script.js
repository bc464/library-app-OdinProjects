const btnAddModal = document.querySelector(".btn-add");
const addBookBtnModal = document.querySelector(".btn-modal-add");
const modal = document.querySelector(".modal");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const mainDisplay = document.querySelector(".main-section");
const cardDisplay = document.querySelector(".library-display");
const deleteBook = document.querySelectorAll(".btn-delete");
const readingStatus = document.querySelector(".btn-update");
const btnUpdate = document.querySelector(".btn-update")


let myLibrary = [];
 function Book(title,author,page) {
 	this.title = title,
 	this.author = author,
 	this.page = page

 }

 function addBookToLibrary() {


 	

 }

btnAddModal.addEventListener("click", function() {
	modal.style.display = "block";
	title.value ="";
	author.value = "";
	pages.value = "";

})

 addBookBtnModal.addEventListener("click", function(e) {
 	e.preventDefault();
 	modal.style.display = "none";

 	let titleInput = title.value;
 	let authorInput = author.value;
 	let pagesInput = pages.value;

// generate card
 	const id = new Date().getTime().toString();
 	
 	let libraryDisplay = document.createElement("div");
 	let attr = document.createAttribute("data-id");
 	attr.value = id;
 	libraryDisplay.setAttributeNode(attr);
 	libraryDisplay.classList.add("library-display");
 	let titleBox = document.createElement("div");
 	titleBox.classList.add("title-box");
 	let titleInfo = document.createElement("div");
 	titleInfo.classList.add("title-info");
 	let h2 = document.createElement("h2")
 	h2.textContent = "The Title";
 	let p = document.createElement("p");
 	p.classList.add("title-text");
 	p.textContent = titleInput;
 	titleInfo.appendChild(h2)
 	titleInfo.appendChild(p)
 	let deleteBtn = document.createElement("button")
 	deleteBtn.classList = "btn btn-delete";
 	deleteBtn.textContent = "Delete Book";
 	deleteBtn.onclick = function() {
 		libraryDisplay.style.display = "none" 	};
 	titleBox.appendChild(titleInfo);
 	titleBox.appendChild(deleteBtn);
 	let h2Author = document.createElement("h2")
 	h2Author.textContent = "Author";
 	let authorText = document.createElement("p")
 	authorText.textContent = authorInput;
 	
 	let h3 = document.createElement("h3");
 	h3.textContent = "Pages";
 	let pageTotal = document.createElement("p");
 	pageTotal.textContent = pagesInput;

 	let readInfo = document.createElement("div");
 	readInfo.classList.add("read-info");
 	let readText = document.createElement("h4");
 	readText.classList.add("read-text");
 	readText.textContent = "Reading Status";
 	let btnUpdate = document.createElement("button");
 	btnUpdate.classList = "btn btn-update";
 	btnUpdate.textContent = "Not Read";
 	btnUpdate.addEventListener("click", function() {
	
		const readText = document.querySelector(".read-text");
		
		if(this.innerHTML === "Not Read") {
			this.innerHTML = "Read";
			btnUpdate.style.backgroundColor = "green"
		} else {
			this.innerHTML = "Not Read";
			btnUpdate.style.backgroundColor = "red"
		}
	})
 	readInfo.appendChild(readText);
 	readInfo.appendChild(btnUpdate);	
 	libraryDisplay.appendChild(titleBox); 
 	libraryDisplay.appendChild(h2Author);
 	libraryDisplay.appendChild(authorText);
 	libraryDisplay.appendChild(h3);
 	libraryDisplay.appendChild(pageTotal);
 	libraryDisplay.appendChild(readInfo);
 	

 	mainDisplay.appendChild(libraryDisplay);
 });

window.onclick = function(event) {
 	if(event.target == modal) {
 		modal.style.display = "none";
 	}
 }

 