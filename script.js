let input = document.querySelector('input');
let container = document.querySelector('.container');

// //todo ---------- Load all the emojis on UI ----------
// // window.addEventListener('load', searchEmoji);

// //todo ---------- filter emoji list ----------
// const searchEmoji = (value = "") =>{
//     const filteredArr = emojiList.filter(e=>{
//         if(e.aliases.some(elem=>elem.startsWith(value))){
//             return true;
//         }
//         if(e.tags.some(elem=>elem.startsWith(value))){
//             return true;
//         }
//     });

// //todo ---------- Append all the child ----------
// container.innerHTML = "";

//     filteredArr.forEach((e) => {
//         let div = document.createElement('div');
//         // let new_emoji = document.createElement('p');
//         // let new_aliases = document.createElement('p');

//         // new_emoji.innerText = e.emoji;
//         // new_aliases.innerText = e.aliases.join(", ");

//         // new_emoji.classList.add("emoji");
//         // new_aliases.classList.add("name");

//         div.innerHTML = `
//             <p class= "emoji"> ${e.emoji} </p>
//             <p class = "name"> ${e.aliases} </p>
//             `;
//             div.classList.add('emojis');
//             container.appendChild(div);
        
        
//     });





// }

// window.addEventListener('load', searchEmoji);
// input.addEventListener('keyup', function(e){
//     let value = e.target.value;
//     searchEmoji(value);
// });


//todo ---------- Load all the emojis on UI ----------
window.addEventListener('load', function(e){
    emojiList.forEach((element) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <p class= "emoji"> ${element.emoji} </p>
        <p class = "name"> ${element.aliases} </p>
        `;
        div.classList.add('emojis');
        container.appendChild(div);
    });
});

//todo ---------- Search the emojis ----------
input.addEventListener('keyup', function(e){
    let value = e.target.value.toLowerCase();  

    let filterArr = emojiList.filter((element) => {
        return element.aliases[0].toLowerCase().includes(value);
    });

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i < filterArr.length; i++){
        let emoji = filterArr[i].emoji[0];
        let aliases = filterArr[i].aliases[0];

        let div = document.createElement('div');
        div.innerHTML = `
        <p class= "emoji"> ${emoji} </p>
        <p class = "name"> ${aliases} </p>
        `;
        div.classList.add('emojis');
        container.appendChild(div);
    }
});