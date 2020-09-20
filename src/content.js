const interval = setInterval (() => {
    const header = document.querySelector('._3All_._3NrAe span')
    if(header) {
        addBtn(header)
        clearInterval(interval)
    }
},1000)

// Botão para abrir menu
const addBtn = header => {
    const btn = document.createElement('div')
    btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z">
            </path>
        </svg>`
    btn.setAttribute('id', 'btn')
    btn.setAttribute('class', 'PVMjB')
    header.appendChild(btn)

    addDivMenu(btn)
}

// Adicionar div para escolher o playbackRate
const addDivMenu = element => {
    const divSelectSpeed = document.createElement('div')
    divSelectSpeed.setAttribute('id', 'menu')
    divSelectSpeed.setAttribute('class', '_2s_eZ _1bC39')
    divSelectSpeed.setAttribute('style', 'transform-origin: right top; transform: scale(1); opacity: 1;')

    element.appendChild(divSelectSpeed)

    const divMenu = document.querySelector('#menu')
    hideShowMenu(element, divMenu)
}

// Adicionar itens no menu
const insertItemsIntoMenu = element => {
    const options = [
        speeds = [
            "0.25x", 
            "0.5x", 
            "1x", 
            "1.5x",
            "2x"
        ],
        titles= [
            "Velocidade 0.25",
            "Velocidade 0.5",
            "Velocidade 1",
            "Velocidade 1.5",
            "Velocidade 2"
        ],
        values = [
            0.25,
            0.5,
            1,
            1.5,
            2
        ]
    ]

    insertUlIntoMenu(element, options)
}

// Criar ul
const insertUlIntoMenu = (element, values) => {
    const ul = document.createElement('ul')
    ul.setAttribute('class', 'I4jbF')
    element.appendChild(ul)

    insertLiIntoUl(ul, values)
}

// Criar li
const insertLiIntoUl = (element, values) => {
    for(let i = 0; i < values[0].length; i++) {
        // Criando a li
        const li = document.createElement('li')
        li.setAttribute('tabindex','-1')
        li.setAttribute('class', '_1N-3y eP_pD _36Osw')
        li.setAttribute('data-animate-dropdown-item', 'true')
        li.setAttribute('style', 'opacity: 1')

        // Criando o item da li:
        const div = document.createElement('div')
        div.setAttribute('class','Ut_N0 n-CQr')
        div.setAttribute('role','button')
        div.setAttribute('title', values[1][i])
        div.setAttribute('value', values[2][i])
        let text = document.createTextNode(values[0][i])
        div.appendChild(text)

        element.appendChild(li)
        li.appendChild(div)

        hoverItem(i)
        pegarValor(div, values[2][i])
    }
}
////////////////////////////////////
const pegarValor = (element, values) => {
    element.addEventListener('click', (e) => {
        if(e.target.getAttribute('class') == 'Ut_N0 n-CQr') {
            let playbackRate = e.target.value = values
            localStorage.setItem('playbackRate', playbackRate)
        }
    })
}



// Adicionar efeito hover nos items
const hoverItem = value => {
    const lists = document.querySelectorAll('li')
    console.log(lists)
    lists[value].addEventListener('mouseenter', () => {
        lists[value].classList.add('_39Nmx')
        
    })

    lists[value].addEventListener('mouseout', () => {
        lists[value].classList.remove('_39Nmx')
    })
}

// Mostrar/Ocultar divPopup(menu)
const hideShowMenu = (elementBtn, elementDivMenu) => {
    elementBtn.addEventListener('click', () => {
        if(elementDivMenu.style.display == 'none') {
            elementDivMenu.style.display = 'block'
            elementBtn.classList.add('_4QpsN')
            return
        }
        elementDivMenu.style.display = 'none'
        elementBtn.classList.remove('_4QpsN')
    })

    insertItemsIntoMenu(elementDivMenu)
    closeMenu(elementBtn, elementDivMenu)
}

// Fechar div ao clicar fora
const closeMenu = (elementBtn, elementDivMenu) => {
    window.addEventListener('click', (e) => {
        if(e.target.id != 'menu' && e.target.id != 'btn') {
          elementDivMenu.style.display = 'none'
          elementBtn.classList.remove('_4QpsN')
        }
    })
}

// Aqui eu vou adicionar o playbackRate
const changePlaybackRate = () => {
    window.addEventListener('click', (e) => {
        if(e.target.getAttribute('data-testid') == 'audio-play') {
            console.log('Dei play')
        }
    })
}


// Organizar código [x]
// Organizar nome das variáveis [x]
// Criar ul dentro da div popup [x]
// Configurar opções e salvar no localStorange[x]
// Criar função para playbackRate