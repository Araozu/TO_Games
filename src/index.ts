import MainTitleDrawer from "./Drawer/MainTitleDrawer";
import MainScreen from "./Screens/MainScreen";
import HTMLElementGetter from "./HTMLElementGetter";

const main = async (args: string[]) => {

    const htmlElementGetter = new HTMLElementGetter();
    const mainDiv = await htmlElementGetter.getElementPromise("app");
    const mainScreen = new MainScreen(mainDiv);
    mainScreen.draw(new MainTitleDrawer());

    console.log("Es hora de empezar.");

};

main([]);
