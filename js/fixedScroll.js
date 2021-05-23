document.addEventListener('scroll', function AtualizarHeight(params) {
    let srllPos = window.scrollY*0.2;
    let divfixed = document.getElementById("fixed");
    let header = document.getElementsByTagName("header")[0];
    let iconsheader = document.getElementById("diviconsheader");
    let title = document.getElementById("title");
    let divheader = document.getElementById("divheader");
    let nav = document.getElementsByTagName("nav")[0];

    if (typeof AtualizarHeight.fixed == 'undefined') {
        AtualizarHeight.fixed = divfixed.offsetHeight;
        AtualizarHeight.header = header.offsetHeight;
        AtualizarHeight.divheader = divheader.offsetHeight;
        AtualizarHeight.nav = nav.offsetHeight;
        AtualizarHeight.title = parseInt(window.getComputedStyle(title, null).getPropertyValue('font-size'));
        AtualizarHeight.iconsheader = parseInt(window.getComputedStyle(iconsheader, null).getPropertyValue('margin-top'));
            
    }

    if (srllPos < 40){
        divfixed.style.setProperty('height', `${AtualizarHeight.fixed - srllPos}px`);
        header.style.setProperty('height', `${AtualizarHeight.header - srllPos}px`);
        nav.style.setProperty('height', `${AtualizarHeight.nav - (srllPos*0.3)}px`);
        title.style.setProperty('font-size', `${AtualizarHeight.title - (srllPos*0.3)}px`);
        divheader.style.setProperty('height', `${AtualizarHeight.divheader - srllPos}px`);
        iconsheader.style.setProperty('margin-top', `${AtualizarHeight.iconsheader - (srllPos*0.4)}px`)
    }
})
