import { PawnController } from "../PawnController/PawnController";
import Progress from "./mods/_Progress";

class _GameInstance {
    private static instance: _GameInstance | null = null;
    private _progress: Progress = new Progress();

    private _playerController: PawnController = new PawnController();
    private _enemyController: PawnController = new PawnController();


    public get player() {
        return this._playerController
    }

    public get enemy() {
        return this._enemyController
    }

    static getInstance(): _GameInstance {
        if (!_GameInstance.instance) {
            _GameInstance.instance = new _GameInstance();
        }
        return _GameInstance.instance;
    }

    public reset(): _GameInstance {
        _GameInstance.instance = null;
        return _GameInstance.getInstance()
    }

    public firstLoad(): boolean {
        let error = false;

        error = _GameInstance.getInstance()._progress.firstLoad()

        return error;
    }

    public firstStart(): boolean {
        this.progress.inProgress = true;
        return this.progress.inProgress;
    }


    private constructor() { }


    public get progress(): Progress {
        return this._progress;
    }

}


const GameInstance = _GameInstance.getInstance();

export default GameInstance
