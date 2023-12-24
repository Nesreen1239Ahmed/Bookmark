var nameInput =document.getElementById('nameInput');
var urlInput =document.getElementById('urlInput');
var message =document.getElementById('message');
// console.log(nameInput);
// console.log(urlInput);
var bookList=[];

function addbook(){
  
    if(validationName() == true && validationURL() == true){


        var book ={
            namebook:nameInput.value,
            urlbook:urlInput.value,
        }

        bookList.push(book);
        
        clearForm();
        
        displayDate();

    }
    
  

}
function clearForm(){
    nameInput.value="";
    urlInput.value="";

}
function displayDate(){
    var carton=" "

    for( var i = 0 ; i < bookList.length ; i++){
        carton += 
        ` 
        <tr>
        <td>${i}</td>
        <td>${bookList[i].namebook}</td>
        <td><button class="btn btn-success"><a class="text-white text-decoration-none"
         href="${bookList[i].urlbook}"><i class="fa-solid fa-eye"></i> Visit</a></button></td>    
        <td><button onclick="deleteItem(${i})"  class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>        
        </tr>
        `
    }
    document.getElementById('tablebody').innerHTML = carton;
}

function deleteItem(index){
   
    bookList.splice(index,1);

    displayDate();

}


var regex=/^[a-zA-Z]{3,50}$/;
var text = "ngfsgsh";

console.log(regex.test(text));

function validationName(){

    var text = nameInput.value;
    var regexName =/^[a-zA-Z]{3,50}$/;

    if (regexName.test(text) == true)//valid
    {
        nameInput.classList.add("is-valid");

        nameInput.classList.remove("is-invalid");

        message.classList.add("d-none");

        return true;

    }
    else{//invalid
        nameInput.classList.add("is-invalid");

        nameInput.classList.remove("is-valid");

        message.classList.remove("d-none");

        return false;

    }

    
    
}

function validationURL(){

    var text =  urlInput.value;
    var regexURL = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
if (regexURL.test(text) == true)//valid
    {
        urlInput.classList.add("is-valid");

        urlInput.classList.remove("is-invalid");

        message.classList.add("d-none");

        return true;

    }
    else{//invalid
        urlInput.classList.add("is-invalid");

        urlInput.classList.remove("is-valid");

        
        message.classList.remove("d-none");

        return false;

    }

    
    
}