var colors = ['#94B49F', '#D885A3', '#023321', '#A2B38B', '#FFCACA', '#18978F', '#2F3A8F', '#B97A95'];
var active = 0;
setInterval (function(){
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 2000);


var colors = ['#FAC898', '#D885A3', '#4e1f5a', '#A2B38B', '#3c609e', '#18978F', '#EC5800', '#B97A95'];
var active = 0;
setInterval (function(){
    document.querySelector('div').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 500);

