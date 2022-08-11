function PlayTone(keyNumber){
    return document.querySelector(`audio[data-key="${keyNumber}"]`).play()
}
document.querySelectorAll('.key').forEach(key=>{
    key.addEventListener('click',(e)=>{
        PlayTone(e.target.getAttribute('data-key'))
    })
})

