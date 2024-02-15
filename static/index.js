const listitems=document.querySelector(".userlist");
const logout=document.querySelector("#log");
let cookie=document.cookie;

logout.addEventListener("click",async ()=>{


    document.cookie=cookie+";max-age=0";
    cookie=document.cookie;

    const res=await fetch("/");

    window.location.href=res.url;
});


listitems.addEventListener("click",async (e)=>{

    let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            delete_task:e.target.id
        })
      }

    const response=await fetch("/delete_task",options);
    if(response.redirected)
    {
        window.location.href=response.url;
    }

});