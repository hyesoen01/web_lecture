export default async function main() {
    console.log('start App')

    const mainMenu = document.querySelector('#main-menu')
    const creditScreen = document.querySelector('#credit-screen')

    let currentIndex = 0;
    const menuitems = document.querySelectorAll(".menu-item");
    
    console.log(menuitems.length)
    const menuitem_count = menuitems.length

    menuitems[currentIndex].classList.add("select")

    window.addEventListener("keydown", (e) => {
        
        console.log(e.key)

        menuitems[currentIndex].classList.remove('select')
        if(currentScreen == "mainMenu"){
            if(e.key == "ArrowUp"){
                currentIndex --

                if(currentIndex < 0){
                    currentIndex = menuitem_count - 1
                }
            }
        }    
        else if(e.key == "ArrowDown"){
            currentIndex ++
            currentIndex %= menuitem_count
        }
        else if(e.key == "Enter"){
            console.log(menuitems[currentIndex].dataset.action)
            const select_action = menuitems[currentIndex].dataset.action

            if(select_action == 'credit'){
                mainMenu.classList.add('hide')
                creditScreen.classList.remove('hide')
                currentScreen = "creditScreen"
            }
        }

        console.log(currentIndex)
        menuitems[currentIndex].classList.add('select')

    }
    if(currentScreen == "mainMenu"){

    }
    else if(currentScreen =="creditScreen"){

    })
}