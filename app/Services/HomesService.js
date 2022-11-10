




class HomesService {
    setActiveHouse(homeId) {
        let foundHome = appState.homes.find(h => h.id == homeId)
        console.log(foundHome);
        appState.activeHome = foundHome

    }
    createHome(formData) {
        let newHome = new home(formData)


    }
}


































export const homesService = new HomesService()