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

let comment1 = new Comment("Lionel Messi","..//IMG/foto-perfil-messi.jpg","Ta buena");
let comment2 = new Comment("Saul Hudson","..//IMG/foto-perfil-slash.jpg","Esta página inspiró mi carrera musical");
let comment3 = new Comment("Elon Musk","..//IMG/foto-perfil-elon.png","Muy buena página, quiero a este muchacho trabajando en Tesla");

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
  

