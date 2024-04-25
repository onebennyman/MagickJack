class Progress {
    private _inProgress: boolean = false;
    public set inProgress(value: boolean) { this._inProgress = value}
    public get inProgress(): boolean { return this._inProgress}

    private _init: boolean = false;
    private set init(value: boolean) { this._init = value}
    public get init(): boolean { return this._init}
    

    public firstLoad(): boolean {
        let error = false;

        if (this.inProgress || this.init)  
            error = true;
        
        this.init = true;

        return error;
    }


}

export default Progress;