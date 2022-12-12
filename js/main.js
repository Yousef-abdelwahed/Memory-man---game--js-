
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
       shufflingCards(orderRang);
    //****** select all component separated
        blocks.forEach((block,indexe)=>{
        block.style.order= orderRang[indexe];
        block.addEventListener('click',()=>{
            flipBlock(block);
        });
    });
};
function shufflingCards(arr){
    let current = arr.length,random,box;
    while(current>0){
        //get random numbers
     let random = Math.floor(Math.random()*current)
        current--;
        //[1] set current in box
        box=arr[current];
        //[2]currant = random
        arr[current]=arr[random];
        //[3]random = current 
        arr[random]=box;
    }
    return arr };

//*****************flip function */
function flipBlock(selectBlock){

    selectBlock.classList.add("isFlip");
    // selectBlock.style.height ="200px";
    // *********add flip class**************
    // selectBlock.style.transform ="rotateY(180deg)"; 
    let getAllfilpsCards= blocks.filter(flippedBlock =>flippedBlock.classList.contains("isFlip"))
    if(getAllfilpsCards.length == 2){
       
        stopClicking(selectBlock);
        //chech matched cards 
        checkMatchedBlock(getAllfilpsCards[0],getAllfilpsCards[1]);
    }
}
// *****************check matched cards  */
    function checkMatchedBlock(firstBlock, secondBlock){
        let tryElement = document.querySelector(".tries span");

        if(firstBlock.dataset.tach === secondBlock.dataset.tach){
            firstBlock.classList.remove("isFlip");
            secondBlock.classList.remove("isFlip");
            firstBlock.classList.add("hasMatches");
            secondBlock.classList.add("hasMatches");

            firstBlock.children.item(1).style.opacity=".2";
            secondBlock.children.item(1).style.opacity=".2"
     
        }else{
            tryElement.innerHTML= parseInt(tryElement.innerHTML)+1;
            setTimeout(()=>{
                firstBlock.classList.remove("isFlip");
                secondBlock.classList.remove("isFlip");
            },duration)
        }

    }
//*****************stop clicking when two cards flips  */
function stopClicking(selectBlock){
    blackContainer.classList.add("noClicking");
    blackContainer.style.pointerEvents ="none";
    
    setTimeout(()=>{
        blackContainer.style.removeProperty("pointer-events")
        blackContainer.classList.remove("noClicking");
        // selectBlock.style.removeProperty("transform");
    },duration)
}


