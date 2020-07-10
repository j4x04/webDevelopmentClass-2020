### Redux State Management
* Global State  
A global state can pass props directly from a parent to grandchild components (the state can be accessed from anywhere)
* Mobx vs Redux  
Redux keeps (and modifies, actions) states in a single store while MobX uses multiple stores, but are similar in purpose. 
* Redux Architecture   
Redux architecture revolves around (in order) Actions that change states (through payloads) which are passed through middlware, then reducers in a store. 
* Action  
A redux action takes a payload and modifies (does an action) to it, and returns it as a state. 
* Middleware  
Redux middleware facilitates the transfer and movement between the action and the reducer. 
* Reducer  
Using the action, a reducer will determine/change the state of a component. 
* Store  
The store (for redux) contains the state "of whole app" (this is a global state)- in an immutable object tree except through actions and the redux architecture. 



