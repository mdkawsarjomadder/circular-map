let numberId = document.getElementById("number");
  let counter = 0;

  setInterval(() =>{
       if(counter == 65){
        setInterval();
       }else{
        counter += 1;
        numberId.innerHTML = counter  + "%";
       }
    
    
  },32)