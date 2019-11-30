import MainTitleDrawer from "./Drawer/MainTitleDrawer";
import MainScreen from "./Screens/MainScreen";
import HTMLElementGetter from "./Utils/HTMLElementGetter";
import GameSelectorDrawer from "./Drawer/GameSelectorDrawer";
import GameButtonDrawer from "./Drawer/GameButtonDrawer";

const main = async (args: string[]) => {

    const mainDiv = await new HTMLElementGetter().getElementPromise("app");
    const mainScreen = new MainScreen(mainDiv);
    mainScreen.draw(new MainTitleDrawer());

    const gameSelectorDrawer = new GameSelectorDrawer();
    mainScreen.draw(gameSelectorDrawer);
    gameSelectorDrawer.addButton(new GameButtonDrawer("Battleship").draw());
    gameSelectorDrawer.addButton(new GameButtonDrawer("Tic Tac Toe").draw());
    gameSelectorDrawer.addButton(new GameButtonDrawer("Drunken Bottle").draw());

};

main([]);
