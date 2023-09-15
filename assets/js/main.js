/*
Descrizione
Ricreiamo un feed social aggiungendo al layout dello starter kit di base fornito, il nostro script JS in cui:
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
BONUS
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
Consigli del giorno:
Ragioniamo come sempre a step. Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice. console.log() è nostro amico. Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Nota (bonus extra) - super opzionale:
Poiché é la parte logica ad interessarci in questa fase del corso, nello starter kit c'é il marup che potete usare per volgere l'esercizio.
Se finite la parte logica ed i vari bonus e vi avanza tempo per giocare un pó, pensate pure ad un layout differente e lavorateci su come bonus extra.
Buon divertimento e buon weekend! Confermate lettura come al solito! 
 */

const container = document.getElementById("container");

const likedPosts = [3,4];
const posts = [
        {
            "id" : 1,
            "nomeAutore" : "autore1",
            "fotoAutore" : null,
            "data" : "09-01-2023",
            "text" : "Post del primo autore",
            "likes" :  3,
            "image" : ""
        },
        
        {
            "id" : 2,
            "nomeAutore" : "autore2",
            "fotoAutore" : null,
            "data" : "02-05-2023",
            "text" : "Post del secondo autore",
            "likes" :  40,
            "image" : ""
        },
        
        {
            "id" : 3,
            "nomeAutore" : "autore3",
            "fotoAutore" : null,
            "data" : "04-07-2023",
            "text" : "Post del terzo autore",
            "likes" :  54,
            "image" : ""
        },
        
        {
            "id" : 4,
            "nomeAutore" : "autore4",
            "fotoAutore" : null,
            "data" : "11-03-2023",
            "text" : "Post del quarto autore",
            "likes" :  325,
            "image" : ""

        },
    ]  
    
    for(let i=0; i<posts.length;i++)
    {
        const post=posts[i];
        container.innerHTML += generatePost(post,likedPosts);
    }

    function generatePost(element,arr){
        const toPost = element;
        return `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${toPost.fotoAutore}                   
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${toPost.nomeAutore}</div>
                        <div class="post-meta__time">${toPost.data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${toPost.text}</div>
            <div class="post__image">
                ${toPost.image}
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#" data-postid="${toPost.id}" onclick="like()">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${toPost.id}" class="js-likes-counter">${toPost.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
    }

    function like (){
        const button = document.querySelectorAll("a");
        const likes = document.querySelectorAll("b");

        Object.keys(button).forEach(element => {
                button[element].addEventListener("click", function(){
                const likeCount = posts[element].likes;
                if(button[element].classList.contains("like-button--liked"))
                    likes[element].innerHTML = likeCount-1;
                else
                    likes[element].innerHTML = likeCount+1;
                button[element].classList.toggle("like-button--liked");
            }
        )
        }
        );
    }
    
