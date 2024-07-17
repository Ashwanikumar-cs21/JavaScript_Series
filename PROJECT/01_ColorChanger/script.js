const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")
const h1 = document.querySelectorAll('h1');
const h2Spans = document.querySelectorAll('h2');


buttons.forEach(function (button){
    button.addEventListener('click' , function(e) {
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
            h1.forEach(function (span1) {
                span1.style.color = 'black';
            });
            h2Spans.forEach(function (span) {
                span.style.color = 'black';
            });
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
            h1.forEach(function (span1) {
                span1.style.color = 'black';
            });
            h2Spans.forEach(function (span) {
                span.style.color = 'black';
            });
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            h1.forEach(function (span1) {
                span1.style.color = 'black';
            });
            h2Spans.forEach(function (span) {
                span.style.color = 'black';
            });
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
            h1.forEach(function (span1) {
                span1.style.color = 'black';
            });
            h2Spans.forEach(function (span) {
                span.style.color = 'black';
            });
        }
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id
            h1.forEach(function (span1) {
                span1.style.color = 'white';
            });
            h2Spans.forEach(function (span) {
                span.style.color = 'white';
            });
        }

    });
});



