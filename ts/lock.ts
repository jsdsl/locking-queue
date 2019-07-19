/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:33 AM -- March 14th, 2019.
 *	Project: @jsdsl/locking-queue
 */

import { AventNotifier, AventSubscription } from "avents";

/**
 * An object-based lock.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class Lock {
	
	private relinquishNotifier: AventNotifier<void>;
	
	public constructor() {
		
		this.relinquishNotifier = new AventNotifier<void>();
		
	}
	
	public relinquish(): void {
		
		this.relinquishNotifier.notify();
		
	}
	
	public subscribeToRelinquishNotifier(handler: () => void): AventSubscription<void> {
		
		return this.relinquishNotifier.subscribe(handler);
		
	}
	
}