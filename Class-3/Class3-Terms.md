### Lifecycle
* "this" in javascript   
The "this" keyword in javascript references the object that is currently executing code. For the majority of use, a function is called with reference to an object, and "this" specifies that object. (e.g using "this" in object.function() will specify object). If there are no objects, it specifies global. 
* DOM  
A Document Object Model is an API that basically defines and translates code into the interface. For example, an HTML DOM is what translates the \<h1>\</h1> tag into the actual header on the screen. 
* Virtual DOM  
In react, every DOM object has a virtual DOM object that is connected- it is similar to the DOM except it cannot actually rewrite the content. Virtual DOMs can be rewritten and modified a lot more quickly than the actual DOM, so that any changes are first written onto the virtual DOM. To translate these changes onto the UI, react will compare the virtual and actual DOMs and see the differences between them, then update ONLY the changed elements on the DOM. 
* Component lifecycle  
React goes through a lifecycle with three main steps: mounting, updating, and unmounting. Mounting is putting elements in the DOM, updating is an update or change, and unmounting is a removal of an object to the DOM. 
* ComponentWillMount  
This is built in function that can be called and basically is the step before a component is mounted (added to the DOM). Most often used similar to a constructor to store states or variables. 
* ComponentDidMount  
This built in function is called after the component is mounted (added to the DOM and rendered). It happens after the first render() lifecycle. 
* ComponentWillUpdate  
This function is called right before the render function happens. 
* ComponentDidUpdate  
This hook is called right after the render happens and the components are updated. 
* ComponentWillReceiveProps   
This function is called whenever any changes happen to the props values, and is called before conponentWillUpdate in the lifecycle. 
* Render function  
React's render function will take react objects written in javascript and render them into the DOM. Each time any change is made, in order for them to appear on the screen, they must be rendered. 


