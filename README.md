Jeg er Trym Undlien

Jeg er Trym. jege er en elev på tiller vgs, og er øyeblikket på informasjonsteknologi år 2. Dette er min Todo liste

Hva
I dette prosjektet har jeg laget en todo liste, der du kan legge til oppgaver, du kan fjerne oppgaver, du kan markere at oppgaven er blitt gjort. Øverts i venstre hjørnet står det hvor mange oppgaver du har lagt til, og hvor mange du har markert ferdig. Når du marker en oppgave ferdig blir hele oppgaven grønn. Jeg har også lagt til sånn at du kan trykke enter på tastaturet etter du har skrevet inn oppgaven inn i skrivefeltet. Jeg har bukt komplimentære farger. Jeg har brukt HTML, JS og CSS




hvorfor
Det er altid fint med en todo liste, og så er det for å øve seg på koding, og fordi det er en skoleoppgave.

Denne koden gjør at du kan trykke enter for å legge til en oppgave

JS
var input = document.getElementById("inputField");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {  
      event.preventDefault();
      document.getElementById("addToDo").click();
    }
     
  
});

Denne koden lager en ny paragraph kode med skrift, og den legger til ett nummer på oppgave tellern.
var paragraph = document.createElement('p');
      paragraph.classList.add('paragraph-styling');
      paragraph.innerText = inputField.value;
      toDoContainer.appendChild(paragraph);
      inputField.value = "";
      clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        
      Denne koden gjør en oppgave grønn når du trykker på den
       paragraph.addEventListener('click', function(){
          paragraph.style.backgroundColor = 'rgb(4, 255, 0)';
          complete += 1;
        document.getElementById("complete").innerHTML = complete;
      })

Denne koden fjerner en oppgave når du dobbelklikker, og den fjerner oppgaven fra tellern.
   paragraph.addEventListener('dblclick', function(){
          toDoContainer.removeChild(paragraph);
          clicks -= 1;
          document.getElementById("clicks").innerHTML = clicks;
          complete -= 1;
          document.getElementById("complete").innerHTML = clicks;


