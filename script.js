const grid = document.querySelector(".grid")
let isValid = false
const sizeBtn = document.querySelector(".sizeBtn")

function createGrid(size){
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div")
    grid.appendChild(row)
      for (let j = 0; j < size; j++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        row.appendChild(cell);
      }
    }
  const cells = document.getElementsByClassName("cell")
  for (let cell of cells){
    cell.addEventListener("mouseover", () =>{
       cell.classList.add("colorCell")  
     })
   }
}

createGrid(10);



sizeBtn.addEventListener("click", () =>{
  while(grid.lastChild){
    grid.removeChild(grid.lastChild)
  }
  while(isValid == false){
    let size = prompt("Nr of cells per side?")
    if(size < 100){
      isValid = true;
      createGrid(size);
    }
  }
  isValid = false;
})





