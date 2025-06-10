var block = document.getElementById('pippo');

block.addEventListener('click', function() {
    console.log('Block clicked!');
  // Toggle the class between 'red' and 'blue'  

  if (block.getAttribute('class') == 'red') {
    block.setAttribute('class', 'blue');
    }

  
  else { block.setAttribute('class', 'red');
    }
});

