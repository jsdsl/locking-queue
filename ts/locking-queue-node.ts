/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	6:26 PM -- March 14th, 2019.
 *	Project: @jsdsl/locking-queue
 */

/**
 * A node within a {@link TSLockingQueue}.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class LockingQueueNode {
	
	private readyPromise: Promise<void>;
	
	private readyPromiseResolver: (() => void) | undefined;
	
	public constructor() {
		
		this.readyPromise = new Promise<void>((resolve: () => void): void => {
			
			this.readyPromiseResolver = resolve;
			
		});
		
	}
	
	public getReadyPromise(): Promise<void> {
		
		return this.readyPromise;
		
	}
	
	public readyUp(): void {
		
		if (this.readyPromiseResolver !== undefined) this.readyPromiseResolver();
		else throw new Error("ERR | LockingQueueNode#readyUp was called without a defined resolver function.");
		
	}
	
}