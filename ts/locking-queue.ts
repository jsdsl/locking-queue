/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:32 AM -- March 14th, 2019.
 *	Project: @jsdsl/locking-queue
 */

import { Lock } from "./lock";
import { LockingQueueNode } from "./locking-queue-node";
import { DoublyLinkedList, DoublyLinkedListNode } from "@jsdsl/doubly-linked-list";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class LockingQueue {
	
	private dll: DoublyLinkedList<LockingQueueNode>;
	
	public constructor() {
	
		this.dll = new DoublyLinkedList<LockingQueueNode>();
	
	}
	
	public async getLock(): Promise<Lock> {
		
		let lock: Lock = new Lock();
		
		let node: DoublyLinkedListNode<LockingQueueNode> = this.dll.insertLast(new LockingQueueNode());
		
		lock.subscribeToRelinquishNotifier(() => {
			
			if (this.dll.hasNextNode(node)) node.getNextNode().getElement().readyUp();
			this.dll.removeNode(node);
			
		});
		
		if (this.dll.hasPreviousNode(node)) await node.getElement().getReadyPromise();
		
		return lock;
		
	}
	
}