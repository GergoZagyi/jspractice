function playSound(){
    window.addEventListener("keydown", (e)=>{
        const audio = document.querySelector(`audio[data-code="${e.code}"]`)
        const currentElement = document.querySelector(`h2[data-code=${e.code}]`) 

        if (audio && currentElement) {

            currentElement.classList.add('playing') 
            audio.currentTime = 0;
            audio.play();

            audio.addEventListener("ended", ()=>{
                currentElement.classList.remove('playing')
            })

            console.log(`Playing audio for the following key: ${e.code}`)
        } else {
            console.log(`Didn't find a matching audio for key: ${e.code}`)
        }
    })

}
playSound()