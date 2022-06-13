const toggle = document.querySelector('.choose-theme');
let root = document.documentElement;

toggle.addEventListener('change', e => {

    /При нажатии на кнопку(светлая тема)/ 
  if (e.target.checked) {
    root.style.setProperty('--background', '#d6d3d3');
    root.style.setProperty('--title', '#3A539B');
    root.style.setProperty('--text', '#333');
    root.style.setProperty('--header', '#a1a1a1');
    root.style.setProperty('--code', '#22313F');
    root.style.setProperty('--item', 'white');
    root.style.setProperty('--svg-icon', '#d6d3d3');
    root.style.setProperty('--rs-logo', '#a1a1a1');


    /Темная тема/
    
    
  } else {
    root.style.setProperty('--background', '#1d262d');
    root.style.setProperty('--title', '#d6d3d3');
    root.style.setProperty('--text', '#f8f0e4');
    root.style.setProperty('--header', '#151a1e');
    root.style.setProperty('--code', 'rgba(0, 0, 0, .2)');
    root.style.setProperty('--item', '#32326a');
    root.style.setProperty('--svg-icon', '#f0f8e4');
    root.style.setProperty('--rs-logo', '#f8f0e4');
  }
})
