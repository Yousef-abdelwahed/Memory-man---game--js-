
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
var duration =1000;
var blackContainer= document.querySelector(".memoryImagesBlocks")
var blocks = Array.from(blackContainer.children);

function getIndexKeys(){
       const orderRang=[...Array(blocks.length).keys()];
    //****** select all component separated
        blocks.forEach((block,indexe)=>{
        block.style.order= orderRang[indexe];
        block.addEventListener('click',()=>{
            flipBlock(block);
        });

    });
    shufflingCards(orderRang);
};
//*****************flip function */
function flipBlock(selectBlock){
    // add flip class
    selectBlock.classList.add("flip");
    // selectBlock.style.height ="200px";
    selectBlock.style.transform ="rotateY(180deg)"; 
    console.log(selectBlock);
    getIndexKeys()
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
    return arr };


