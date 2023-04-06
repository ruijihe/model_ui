import * as SignalsL from 'signals';

const Signal = SignalsL.Signal;
class Signals {
    constructor() {
        this.list = {};
    }

    addSignal( name, callback ) {
        this.list[name] = new Signal();
        this.list[name].add( callback );
    }

    dispatch( name, params ) {
        this.list[name].dispatch( params );
    }
}

const SignalsTool = new Signals();
export default SignalsTool;
