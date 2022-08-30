let inputauthor = document.querySelector(".inputauthor")
let inputtitle = document.querySelector(".inputtitle")
let inputpage = document.querySelector(".inputpages")
let container = document.querySelector(".container")
let addbookbutton = document.querySelector(".addbook")
let status1 = document.querySelector(".status1")
let status2 = document.querySelector(".status2")
addbookbutton.addEventListener("click",newbook)
let defaultbook1 = new bookcreator("jk rowling","harry potter",1024)
let bookarray = [defaultbook1]
function bookcreator(author,title,pages){
    this.author = author
    this.title = title
    this.pages = pages
}
bookcreator.prototype.deletethis = function(){
    delete this.author
    delete this.title
    delete this.page
}
function clearinput(){
    inputauthor.value = ""
    inputtitle.value = ""
    inputpage.value = ""
}
function newbook(){ 
    if(inputauthor.value === "" || inputtitle.value === "" || inputpage.value === ""){
        alert("fill all fields")
    }
    else{
        let createbook = new bookcreator(inputauthor.value,inputtitle.value,inputpage.value)
        bookarray.push(createbook)
            let newdiv = document.createElement("div")
            container.appendChild(newdiv)
            for(let i = 0 ; i <= 4  ; i++){
                let newspan = document.createElement("span")
                newdiv.appendChild(newspan)
            }
        let setauthor = document.querySelector(".container > :last-child > :nth-child(1)")
        setauthor.textContent = createbook.author
        let settitle = document.querySelector(".container > :last-child > :nth-child(2)")
        settitle.textContent = createbook.title
        let setpages = document.querySelector(".container > :last-child > :nth-child(3)")
        setpages.textContent = createbook.pages
        let setstatus = document.querySelector(".container > :last-child > :nth-child(4)")
        if(status1.checked){
            setstatus.textContent = "NOT READ"
        }
        else{
            setstatus.textContent = "READ"
        }
        setstatus.addEventListener("click",togglestatus)
        function togglestatus(){
            if(setstatus.textContent === "READ"){
                setstatus.textContent = "NOT READ"
            }
            else if(setstatus.textContent === "NOT READ"){
                setstatus.textContent = "READ" 
            }
        }
        let deletebutton =  document.querySelector(".container > :last-child > :nth-child(5)")
        deletebutton.style.background = "red"
        deletebutton.textContent = "DELETE"
        deletebutton.addEventListener("click",removeobject)
        function removeobject(){
            container.removeChild(newdiv)
        }
        clearinput()
    }
}