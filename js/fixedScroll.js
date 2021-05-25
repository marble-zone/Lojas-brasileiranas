document.addEventListener('scroll', function AtualizarHeight(params) {
    let srllPos = window.scrollY*0.2;
    let divfixed = document.getElementById("fixed");
    let header = document.getElementsByTagName("header")[0];
    let iconsheader = document.getElementsByTagName("nav")[0];
    let title = document.getElementById("title");
    let divheader = document.getElementById("divheader");
    let nav = document.getElementsByTagName("nav")[0];

    if (typeof AtualizarHeight.fixed == 'undefined') {
        AtualizarHeight.fixed = divfixed.offsetHeight;
        AtualizarHeight.header = header.offsetHeight;
        AtualizarHeight.divheader = divheader.offsetHeight;
        AtualizarHeight.nav = nav.offsetHeight;
        AtualizarHeight.iconsheader = parseInt(window.getComputedStyle(iconsheader, null).getPropertyValue('margin-top'));
        AtualizarHeight.title = []
        AtualizarHeight.title[0] = parseInt(window.getComputedStyle(title, null).getPropertyValue('font-size'));
        AtualizarHeight.title[1] = parseInt(window.getComputedStyle(title, null).getPropertyValue('border-top-width'));
        AtualizarHeight.title[2] = parseInt(window.getComputedStyle(title, null).getPropertyValue('border-bottom-width'));
    }

    if (srllPos < 40){
        divfixed.style.setProperty('height', `${AtualizarHeight.fixed - srllPos}px`);
        header.style.setProperty('height', `${AtualizarHeight.header - srllPos}px`);
        nav.style.setProperty('height', `${AtualizarHeight.nav - (srllPos*0.3)}px`);
        divheader.style.setProperty('height', `${AtualizarHeight.divheader - (srllPos*0.9)}px`);
        iconsheader.style.setProperty('margin-top', `${AtualizarHeight.iconsheader - (srllPos*0.4)}px`)
        title.style.setProperty('font-size', `${AtualizarHeight.title[0] - (srllPos * 0.3)}px`);
        title.style.setProperty('border-top-width', `${AtualizarHeight.title[1] - (srllPos * 0.0003)}px`);
        title.style.setProperty('border-bottom-width', `${AtualizarHeight.title[2] - (srllPos * 0.0003)}px`);
    }
})
