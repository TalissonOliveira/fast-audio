const interval = setInterval (() => {
    const header = document.querySelector('._3All_._3NrAe span')
    if(header) {
        /* console.log(header) */
        addBtn(header)
        clearInterval(interval)
    }
},1000)

function addBtn(header) {
    const btn = document.createElement('div')
    btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z">
            </path>
        </svg>`
    btn.setAttribute('id', 'btn')
    btn.setAttribute('class', 'PVMjB')
    header.appendChild(btn)
    /* console.log('oentrei ta') */

    addDivMenu(btn)
    const divMenu = document.querySelector('#menu')
    addUl(divMenu)
    hideShowMenu(btn, divMenu)
    closeMenu(btn, divMenu)
}

// Adicionar div para escolher o playbackRate
function addDivMenu (element) {
    const divSelectSpeed = document.createElement('div')
    divSelectSpeed.setAttribute('id', 'menu')
    divSelectSpeed.setAttribute('class', '_2s_eZ _1bC39')
    divSelectSpeed.setAttribute('style', 'transform-origin: right top; transform: scale(1); opacity: 1;')

    /* divSelectSpeed.innerHTML =
    `
    <ul class="I4jbF">
        <li tabindex="-1" class="_1N-3y eP_pD _36Osw" data-animate-dropdown-item="true" style="opacity: 1;">
            <div class="Ut_N0 n-CQr" role="button" title="Novo grupo">0.25x</div>
        </li>
        <li tabindex="-1" class="_1N-3y eP_pD _36Osw" data-animate-dropdown-item="true" style="opacity: 1;">
            <div class="Ut_N0 n-CQr" role="button" title="Criar uma sala">0.5</div>
        </li>
        <li tabindex="-1" class="_1N-3y eP_pD _36Osw" data-animate-dropdown-item="true" style="opacity: 1;">
            <div class="Ut_N0 n-CQr" role="button" title="Perfil">1x</div>
        </li>
        <li tabindex="-1" class="_1N-3y eP_pD _36Osw" data-animate-dropdown-item="true" style="opacity: 1;">
            <div class="Ut_N0 n-CQr" role="button" title="Arquivadas">1.5x</div>
        </li>
        <li tabindex="-1" class="_1N-3y eP_pD _36Osw" data-animate-dropdown-item="true" style="opacity: 1;">
            <div class="Ut_N0 n-CQr" role="button" title="Favoritas">2x</div>
        </li>
    </ul>
    ` */

    element.appendChild(divSelectSpeed)
    /* console.log(divSelectSpeed) */
}

function addUl(element) {
    let options = [
        "0.25x", 
        "0.5x", 
        "1x", 
        "1.5x",
        "2x"
    ]
    let titles = [
        "Velocidade 0.25",
        "Velocidade 0.5",
        "Velocidade 1",
        "Velocidade 1.5",
        "Velocidade 2"
    ]

    const ul = document.createElement('ul')
    ul.setAttribute('class', 'I4jbF')
    element.appendChild(ul)

    for(let i = 0; i < options.length; i++) {
        // Crie o item da lista:
        const li = document.createElement('li')
        li.setAttribute('tabindex','-1')
        li.setAttribute('class', '_1N-3y eP_pD _36Osw')
        li.setAttribute('data-animate-dropdown-item', 'true')
        li.setAttribute('style', 'opacity: 1')
        
        // Defina seu conteúdo:
        
        //class="Ut_N0 n-CQr" role="button" title="Novo grupo"
        const div = document.createElement('div')
        div.setAttribute('class','Ut_N0 n-CQr')
        div.setAttribute('role','button')
        div.setAttribute('title', titles[i])
        
        div.appendChild(document.createTextNode(options[i]));

        // Adicione-o à lista:
        ul.appendChild(li)
        li.appendChild(div)
    }
}

// Mostrar/Ocultar divPopup(menu)
function hideShowMenu(elementBtn, elementDivMenu) {
    elementBtn.addEventListener('click', () => {
        if(elementDivMenu.style.display == 'none') {
            elementDivMenu.style.display = 'block'
            elementBtn.classList.add('_4QpsN')
        } else {
            elementDivMenu.style.display = 'none'
            elementBtn.classList.remove('_4QpsN')
        }
    })
}

// Fechar div ao clicar fora
function closeMenu(elementBtn, elementDivMenu) {
    window.addEventListener('click', (e) => {
        if(e.target.id != 'menu' && e.target.id != 'btn') {
          elementDivMenu.style.display = 'none'
          elementBtn.classList.remove('_4QpsN')
        }
    })
}

// Aqui eu vou adicionar o playbackRate
function changePlaybackRate() {
    window.addEventListener('click', (e) => {
        if(e.target.getAttribute('data-testid') == 'audio-play') {
            console.log('Dei play')
        }
    })
}


// Organizar código [x]
// Organizar nome das variáveis [x]
// Criar ul dentro da div popup
// Configurar opções e salvar no localStorange
// Criar função para playbackRate