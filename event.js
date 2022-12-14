document.querySelector('#speed').addEventListener('change', ()=>{
	speed = document.querySelector('#speed').value; 
     clearInterval(intervalId)
     startInterval(speed)
})
document.querySelectorAll('.speed').forEach(e => {
     e.addEventListener('change', ()=>{
       
       if (e.id=='speedX') {
         speedX = e.value
       }else if(e.id=='speedY'){
         speedY = e.value
       }
       console.log(`changed ${e.id} to ${e.value}`);
     })
})


