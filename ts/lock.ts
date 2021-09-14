/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:33 AM -- March 14th, 2019.
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

import { AventNotifier, AventSubscription } from "avents";

/**
 * An object-based lock.
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
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
