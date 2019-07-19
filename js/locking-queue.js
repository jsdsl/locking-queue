"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lock_1 = require("./lock");
const locking_queue_node_1 = require("./locking-queue-node");
const doubly_linked_list_1 = require("@jsdsl/doubly-linked-list");
class LockingQueue {
    constructor() {
        this.dll = new doubly_linked_list_1.DoublyLinkedList();
    }
    getLock() {
        return __awaiter(this, void 0, void 0, function* () {
            let lock = new lock_1.Lock();
            let node = this.dll.insertLast(new locking_queue_node_1.LockingQueueNode());
            lock.subscribeToRelinquishNotifier(() => {
                if (this.dll.hasNextNode(node))
                    node.getNextNode().getElement().readyUp();
                this.dll.removeNode(node);
            });
            if (this.dll.hasPreviousNode(node))
                yield node.getElement().getReadyPromise();
            return lock;
        });
    }
}
exports.LockingQueue = LockingQueue;
//# sourceMappingURL=locking-queue.js.map