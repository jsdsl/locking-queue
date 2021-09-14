/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 6:26 PM -- March 14th, 2019.
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

/**
 * A node within a {@link LockingQueue}.
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
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
