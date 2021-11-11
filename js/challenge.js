let counter = document.getElementById("counter")
let minus = document.getElementById("minus")
let plus = document.getElementById('plus')
let like = document.getElementById('heart')
document.addEventListener("DOMContentLoaded", () => {
    let seconds = 0;
    let timing = setInterval(() => {
    let value = parseInt(counter.innerText);
    counter.innerText = value +1;
    },1000)
    console.log("Loaded")
    pause = document.getElementById('pause');
    console.log(pause.textContent)
    pause.addEventListener("click",() => {
        if(pause.textContent === ' pause '){
            clearInterval(timing)
            pause.textContent = ' resume '
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
        }
        else{
            timing = setInterval(() => {
                let value = parseInt(counter.innerText);
                counter.innerText = value +1;
                },1000)
            pause.textContent = ' pause '
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
        }
        
    
        
    })
})

plus.addEventListener("click", () => {
value = parseInt(counter.textContent);
counter.innerText = value +1;
})
minus.addEventListener("click", () => {
    value = parseInt(counter.textContent);
    counter.innerText = value -1;
    })
heart.addEventListener("click", comments);
function comments() {
if(document.getElementById(counter.innerText)){
    let thing = document.getElementById(counter.innerText)
    num++;
    thing.textContent = `${counter.innerText} liked ${num} times!`
    console.log("you are executing this right thing");
}
else{
    comment = document.createElement('li');
    comment.id = counter.innerText;
    comment.textContent = `${counter.innerText} liked 1 times!`
    let list = document.querySelector(".likes");
    console.log(list);
    list.appendChild(comment);
    num = 1;
}
}

let sub = document.getElementById('submit');
sub.addEventListener("click", (e) => {
    e.preventDefault();
    let comm = document.getElementById('comment-input').value;
    let comment2 = document.createElement('p');
    comment2.textContent = comm;
    list.append(comment2);
    console.log
    let form = document.getElementById('comment-form');
    form.reset();
})