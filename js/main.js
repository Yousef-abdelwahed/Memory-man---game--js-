
document.querySelector(".startBtn").addEventListener("click",setUserName)

// *****************set user name ***********************
function  setUserName()
     {   
     // catch User name
     let userName = prompt("whats Your name ");
    // if field is empty   
     if(userName == null || userName==""){
         document.querySelector('.name span').innerHTML="mr x "
     }else{
        document.querySelector('.name span').innerHTML=userName;

     }
    //remove splash screen to start play
      document.querySelector(".splash_screen").remove();
      main()

    }

//*******************************shuffling cards*****************
//craete Range of Keys
//add order property to images 
function main(){
    getIndexKeys();
}

function getIndexKeys(){
    const duration =1000;
    const blackContainer= document.querySelector(".memoryImagesBlocks")
    const blocks = Array.from(blackContainer.children);
    const orderRang=[...Array(blocks.length).keys()]
        blocks.forEach((blocks,indexe)=>{
        blocks.style.order= orderRang[indexe]
    });
    shufflingCards(orderRang);
}

function shufflingCards(arr){
    let current = arr.length,random,box;
    while(current>0){
        //get random numbers
     let random = Math.floor(Math.random()*current)
        current--;
        console.log(random)
        //[1] set current in box
        box=arr[current];
        //[2]currant = random
        arr[current]=arr[random];
        //[3]random = current 
        arr[random]=box;
    }
    return arr }


