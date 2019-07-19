"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LockingQueueNode {
    constructor() {
        this.readyPromise = new Promise((resolve) => {
            this.readyPromiseResolver = resolve;
        });
    }
    getReadyPromise() {
        return this.readyPromise;
    }
    readyUp() {
        if (this.readyPromiseResolver !== undefined)
            this.readyPromiseResolver();
        else
            throw new Error("ERR | LockingQueueNode#readyUp was called without a defined resolver function.");
    }
}
exports.LockingQueueNode = LockingQueueNode;
//# sourceMappingURL=locking-queue-node.js.map