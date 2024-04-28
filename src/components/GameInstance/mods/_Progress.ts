import { State } from "../interface";

class Progress {
    private _inProgress: boolean = false;
    public set inProgress(value: boolean) { this._inProgress = value }
    public get inProgress(): boolean { return this._inProgress }

    private _init: boolean = false;
    private set init(value: boolean) { this._init = value }
    public get init(): boolean { return this._init }

    private _state: State = State.wait;
    private set state(newState: State) { this._state = newState; }
    public get state(): State { return this._state }


    public firstLoad(): boolean {
        let error = false;

        if (this.inProgress || this.init)
            error = true;

        this.init = true;
        this.state = State.action;

        return error;
    }


}

export default Progress;