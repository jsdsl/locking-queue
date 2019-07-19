"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const avents_1 = require("avents");
class Lock {
    constructor() {
        this.relinquishNotifier = new avents_1.AventNotifier();
    }
    relinquish() {
        this.relinquishNotifier.notify();
    }
    subscribeToRelinquishNotifier(handler) {
        return this.relinquishNotifier.subscribe(handler);
    }
}
exports.Lock = Lock;
//# sourceMappingURL=lock.js.map