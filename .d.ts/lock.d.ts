import { AventSubscription } from "avents";
export declare class Lock {
    private relinquishNotifier;
    constructor();
    relinquish(): void;
    subscribeToRelinquishNotifier(handler: () => void): AventSubscription<void>;
}
