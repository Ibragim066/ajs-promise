import GameSavingLoader from "./GameSavingLoader";

export default function showGameSavingLoader() {
    return GameSavingLoader.load().then(
        (response) => {
            console.log('promise - result load(): user name ', response.userInfo.name);
        },
        (error) => {
            console.log(error);
        },
    );
}

showGameSavingLoader();