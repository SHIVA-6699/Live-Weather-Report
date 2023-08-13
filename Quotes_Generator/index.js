const arr=[]
const input_box=document.querySelector(".container p")
async function conect()
{
    const data = await fetch("https://api.kanye.rest")
    const quoute=await data.json()
    arr.unshift(quoute)
   input_box.innerHTML=JSON.stringify(quoute)
    if(arr.length>1)
    {
        arr.shift()
    }
  

}
const previous=() => {
    input_box.innerHTML=JSON.stringify(arr.shift())
};
const but1=document.querySelector(".btn2");
but1.addEventListener("click",()=>{
    
    conect();
})
const btn2=document.querySelector(".btn1");
btn2.addEventListener(("click"),()=>{
    previous()
})
