let popup = document.querySelector(".popup");
let addNote = document.querySelector(".addNote");
let title = document.querySelector("#title");
let note = document.querySelector("#note");
let cancel = document.querySelector("#cancelbtn");
let addbtn = document.querySelector("#addbtn");
let container = document.querySelector(".container");
let crosses = document.querySelector(".fa-solid");

function noteAdded() {
    popup.style.marginTop = "0px";
}

cancel.addEventListener("click", function () {
    reset();
    popup.style.marginTop = "-1000px";
})

function reset() {
    title.value = "";
    note.value = "";
}

addbtn.addEventListener("click", function () {
    // let noteHeading = title.value;
    // let noteContent = note.value;
    // Create a new Date object
    const currentDateTime = new Date();

    // Get the current date and time components
    const year = currentDateTime.getFullYear();
    const month = currentDateTime.getMonth() + 1; // Months are zero-indexed, so we add 1
    const day = currentDateTime.getDate();
    let hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();

    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12

    let myTime = `${day}-${month}-${year}, ${hours}:${minutes} ${ampm}`;
    // Display the current date and time in the console
    console.log();

    // MAIN BOX
    let note1 = document.createElement("div");
    note1.classList.add("noteBox");

   // HEADING
    let headingcontainer = document.createElement("div");
    headingcontainer.classList.add("noteHeading");
    headingcontainer.classList.add("white-background");

    let noteHeading = document.createElement("h3");
    noteHeading.innerText = title.value; 
    noteHeading.classList.add("white-background");
    
    headingcontainer.appendChild(noteHeading);

    //CONTENT
    let noteContent = document.createElement("div");
    noteContent.classList.add("noteContent");
    noteContent.classList.add("white-background");

    noteContent.innerText = note.value;

    //TIME
    let dateTime = document.createElement("div");
    dateTime.innerText = myTime;
    dateTime.classList.add("time");
    dateTime.classList.add("white-background");

    
    
    
    //CROSS
    
    let cross = document.createElement("div");
    cross.classList.add("cross");
    cross.classList.add("white-background");
    
    let i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    i.classList.add("white-background");
    i.classList.add("mycross");
    
    cross.appendChild(i);
    
    dateTime.appendChild(cross);
    
    note1.appendChild(headingcontainer);
    note1.appendChild(noteContent);
    note1.appendChild(dateTime);
    
    container.appendChild(note1);
    
    reset();

    i.addEventListener("click", function(){
        this.parentElement.parentElement.parentElement.remove();
    });

    popup.style.marginTop = "-1000px";
});

crosses.addEventListener("click", (a)=>{
    a.target.parentElement.parentElement.parentElement.remove();
});
