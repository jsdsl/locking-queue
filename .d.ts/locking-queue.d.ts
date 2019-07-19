import { Lock } from "./lock";
export declare class LockingQueue {
    private dll;
    constructor();
    getLock(): Promise<Lock>;
}
