import read from "../Promises/reader";
import json from "../Promises/parser";

export default class GameSavingLoaderWithAsync {
    static load = async () => {
        try {
            const resolve = await read();
            const data = await json(resolve);
            return JSON.parse(data);
        } catch (e) {
            console.error(`Error: ${e.message}`);
            return null;
        }
    };
}