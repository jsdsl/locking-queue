/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:32 AM -- March 14th, 2019.
 * Project: @jsdsl/locking-queue
 * 
 * locking-queue - A mutex solution as an alternative to Promises/async+await.
 * Copyright (C) 2021 Trevor Sears
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Lock } from "./lock";
import { LockingQueueNode } from "./locking-queue-node";
import { DoublyLinkedList, DoublyLinkedListNode } from "@jsdsl/doubly-linked-list";

/**
 * 
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
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
