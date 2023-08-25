var counter=1;
setInterval(function(){
  document.getElementById('rdio' + counter).checked=true;
  counter++;
  if(counter>4){
    counter=1;
  }
},3000);//every 5 seconds(5000 ms) this function will run where the radio button will check true and the image slider will move to the next photo

