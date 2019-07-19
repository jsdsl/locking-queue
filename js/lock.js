"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const avents_1=require("avents");class Lock{constructor(){this.relinquishNotifier=new avents_1.AventNotifier}relinquish(){this.relinquishNotifier.notify()}subscribeToRelinquishNotifier(e){return this.relinquishNotifier.subscribe(e)}}exports.Lock=Lock;
//# sourceMappingURL=lock.js.map
