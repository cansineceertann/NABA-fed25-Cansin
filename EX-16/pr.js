document.addEventListener('DOMContentLoaded', function() {
   

    var block = document.getElementById('pippo');

    block.addEventListener('click', function() {
        console.log("block clicked");
        if (block.getAttribute('class') == 'red') {
            block.setAttribute('class', 'blue');
        } else {
            block.setAttribute('class', 'red');
        }

        var elements = document.getElementsByClassName('un-buon-partito');
        Array.from(elements).forEach(function(el) {
            el.setAttribute('class', 'un-buon-partito un-partito-migliore');
        });


    });

});