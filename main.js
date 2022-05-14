const txtBox=document.getElementById("txt-box")//cannot create one more element using 
const btn=document.getElementById("btn")

btn.addEventListener('click',function(){
    let speech = true
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition()
    recognition.interimResults= true
    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result =>result[0])
        .map(result =>result.transcript)
        

        txtBox.innerHTML = transcript;
    })
    // setTimeout(() => {
    //     recognition.start();
    //   }, 100000000);
      recognition.onspeechend = function() {
        recognition.stop();
      }
    if(speech==true){
        recognition.start()
    }
})