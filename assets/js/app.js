import { getHomeContent } from "./services/getHomeContent.js"
import Home from "./pages/home.js" 

getHomeContent()
.then((data) => {
    Home(data)
    console.log('app.js', data)
})
.catch((error) => {
    console.log(error)
})