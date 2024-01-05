import { BrowserWindow } from "./types";

export default class Scorm {
    constructor() { }

    public nFindAPITries = 0;
    public API = null;
    public maxTries = 500;
    public initialized = false;

    public scanForAPI(win: BrowserWindow) {
        while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent != win)) {
            this.nFindAPITries++;
            if (this.nFindAPITries > this.maxTries) {
                alert("Error in finding API instance -- too deeply nested.");
                return null;
            }
            win = win.parent;
        }
        return win.API_1484_11;
    }

    public getAPI(win: BrowserWindow) {
        if (this.API == null) {
            if ((win.parent != null) && (win.parent != win)) {
                this.API = this.scanForAPI(window.parent);
            }
            if ((this.API == null) && (window.opener != null)) {
                this.API = this.scanForAPI(window.opener);
            }
            if ((this.API == null)) {
                this.API = this.scanForAPI(win)
            }
        }
    }

    public initializeScormCommunication(win: BrowserWindow) {
        this.getAPI(win);
    }
}