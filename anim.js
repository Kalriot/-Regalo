// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I found a love for me", time: 2 },
  { text: "Darling, just dive right in and follow my lead", time: 8 },
  { text: "Well, I found a girl, beautiful and sweet", time: 17 },
  { text: "Oh, I never knew you were the someone waiting for me", time: 24 },
  { text: "'Cause we were just kids when we fell in love", time: 31 },
  { text: "Not knowing what it was"+" I will not give you up this time", time: 36 },
  { text: "But darling, just kiss me slow"+" Your heart is all I own", time: 47 },
  { text: "And in your eyes, you're holding mine", time: 54 },
  { text: "Baby, I'm dancing in the dark"+" With you between my arms", time: 62 },
  { text: "Barefoot on the grass"+" Listening to our favorite song", time: 72 },
  { text: "When you said you looked a mess"+" I whispered underneath my breath", time: 80 },
  { text: "But you heard it, darling"+" You look perfect tonight", time: 88 },
  { text: "Well, I found a woman, stronger than anyone I know", time: 102 },
  { text: "She shares my dreams"+" I hope that someday I'll share her home", time: 107 },
  { text: "I found a love, to carry more than just my secrets", time: 114 },
  { text: "To carry love, to carry children of our own", time: 124 },
  { text: "We are still kids, but we're so in love", time: 129 },
  { text: "Fighting against all odds"+" I know we'll be alright this time", time: 134 },
  { text: "Darling, just hold my hand"+" Be my girl, I'll be your man", time: 145 },
  { text: "I see my future in your eyes", time: 154 },
  { text: "Baby, I'm dancing in the dark"+" With you between my arms", time: 160 },
  { text: "Barefoot on the grass"+" Listening to our favorite song", time: 170 },
  { text: "When I saw you in that dress"+" Looking so beautiful", time: 179 },
  { text: "I don't deserve this"+" Darling, you look perfect tonight", time: 184 },
  { text: "", time: 194 },
  { text: "Baby, I'm dancing in the dark"+" With you between my arms"    , time: 205 },
  { text: "Barefoot on the grass. Listening to our favorite song"    , time: 216 },
  { text: "I have faith in what I see. Now I know I have met an angel in person"    , time: 223 },
  { text: "And she looks perfect"    , time: 233 },
  { text: "I don't deserve this. You look perfect tonight"    , time: 238 },
];



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = null;

  // Encontrar la línea actual
  for (var i = 0; i < lyricsData.length; i++) {
    if (time >= lyricsData[i].time && (i == lyricsData.length - 1 || time < lyricsData[i + 1].time)) {
      currentLine = lyricsData[i];
      break;
    }
  }

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);