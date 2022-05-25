import { pageTextComp } from "./components/text"
import { pageButtonComp } from "./components/button"
import { initRouter } from "./router"
import { pageImgComp } from "./components/img"

(function(){
  pageTextComp();
  pageButtonComp();
  pageImgComp();
  const root = document.querySelector(".root")
    initRouter(root)
})()