const inp = document.querySelector ('input');
const button = document.querySelector ('button');
const list = document.querySelector ('ul');

button.addEventListener ('click', function() {
   let input = inp.value;
   inp.value = '';

    const item = document.createElement('li');
    const chapter = document.createElement('span');
    const press = document.createElement('button');

   item.appendChild(chapter);
   chapter.textContent = input;
   item.appendChild(press);
   press.textContent = 'Delete';
   list.appendChild(item);

   press.onclick = function(e) {
       list.removeChild(item);
   }

   input.focus(input);
} )