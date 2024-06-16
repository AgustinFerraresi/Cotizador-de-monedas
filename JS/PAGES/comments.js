"use strict";

let comments = document.getElementById("coments");
let i = 0;

class Comment {
    constructor(name,img,comment) {
        this.name = name;
        this.img = img;
        this.comment = comment;
    }
}

let comment1 = new Comment("Lionel","..//IMG/foto-perfil-messi.jpg","Muy útil");
let comment2 = new Comment("Saul Hudson","..//IMG/foto-perfil-slash.jpg","This page inspired me to play the guitar");
let comment3 = new Comment("Pepe","..//IMG/foto-perfil-1.png","Muy buena página, profe apruebe al muchacho")

let listCommnets = [comment1,comment2,comment3];

function showComments() {
    comments.innerHTML = `
        <img src="${listCommnets[i].img}" alt="foto-perfil">
        <h5>${listCommnets[i].name}</h5>
        <p>
           ${listCommnets[i].comment}
        </p>
    `
    i = i + 1;
    if (i == listCommnets.length) {
        i = 0;
    }
    
}

document.addEventListener('DOMContentLoaded', function() {
    let intervalo = setInterval(() => {
        showComments();
      }, 5000);
  });
  

