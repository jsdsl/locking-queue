export declare class LockingQueueNode {
    private readyPromise;
    private readyPromiseResolver;
    constructor();
    getReadyPromise(): Promise<void>;
    readyUp(): void;
}
