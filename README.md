# Accessing Observabled Arrays in Angular

 This project is meant for highlighting arrays accessibility in Angular.Especially when Arrays are recieved in Observables.

### Problem : Access first element of an observabled Array in Angular

### Approaches highlighted in this project

- Subsribing to the array and storing the required element in a component variable. But, it has to be made sure that unsubscription of the observable happens properly 
- Looping (array | async) in html and accessing the first element by if condition. But, this causes the loop to run for all array elements, not a great solution. Angular does not provide any break statememnt in ngFor presently
- Use slice pipe provided by Angular, (array | async | slice : 0 : 1). The slice works similar to JS slice, and can be used to retrieve array element at any position. Just what was needed. A great solution

At the very end is an example showing an array of objects, containing label and value property. the value property is accessed to populate a slider, have a look, done without subscription.

Go to app.component.html to find the various approaches

#### Hope this helps in making array accessibility easier 

You can also edit and make changes here
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-lvhsex)