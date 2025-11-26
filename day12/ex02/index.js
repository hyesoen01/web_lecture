export default async function main() {
    console.log('start App')  


    const mainMenu = document.querySelector('#main-menu')
    // const newGame = document.querySelector('')
    const creditScreen = document.querySelector('#credit-screen')
    const optionScreen = document.querySelector('#option-screen')
    let currentScreen = "mainMenu"

    
    let currentIndex = 0;
    const menuitems = document.querySelectorAll(".menu-item");

    console.log(menuitems.length)
    const menuitem_count = menuitems.length

    menuitems[currentIndex].classList.add("select")

    window.addEventListener("keydown", (e) => {
        menuitems[currentIndex].classList.remove('select')

        if(currentScreen == "mainMenu") {

            console.log(e.key)
            if(e.key == "ArrowUp") {
                currentIndex--
                if(currentIndex < 0) {
                    currentIndex = menuitem_count-1
                }
            }
            else if(e.key == "ArrowDown") {
                currentIndex++
                currentIndex %=menuitem_count
            }
            else if(e.key == "Enter") {
                console.log(menuitems[currentIndex].dataset.action)
                const select_action = menuitems[currentIndex].dataset.action

                if(select_action == 'credit') {
                    mainMenu.classList.add('hide')
                    creditScreen.classList.remove('hide')
                    currentScreen = "creditScreen"
                }
                else if(select_action == 'option'){
                    mainMenu.classList.add('hide')
                    optionScreen.classList.remove('hide')
                    currentScreen = "optionScreen"
                }
            }

            console.log(currentIndex)
            menuitems[currentIndex].classList.add('select')
            

        }
        else if(currentScreen == "creditScreen" || currentScreen == "optionScreen" ) {

            if(currentScreen === "crerditScreen"){
                console.log('credit screen detected')
            }
            else if(currentScreen === "optionScreen"){
                console.log('option screen')
            }


            if(e.key == "Enter" || e.key == "Escape") {

                if(currentScreen === "creditScreen"){
                    creditScreen.classList.add('hide')
                }
                else if(currentScreen === "optionScreen"){
                    optionScreen.classList.add('hide')
                }
                
                mainMenu.classList.remove('hide')
                currentScreen = "mainMenu"
            }
        }

        

    })

    


}