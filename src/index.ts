import { pageTextComp } from "./components/text"
import { pageButtonComp } from "./components/button"
import { initRouter } from "./router"
import { state } from "./state";
import { pageImgComp } from "./components/img"

(function(){
  pageTextComp();
  pageButtonComp();
  pageImgComp();
  const root = document.querySelector(".root")
  state.getStorage();
    initRouter(root)
})()