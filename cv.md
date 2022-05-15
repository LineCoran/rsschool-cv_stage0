# Kuzmichev Alexei #

### Junior Frontend Developer ###

## Contact information: ##

* Adress: Minsk, Belarus
* Phone: +375(44)514-18-08
* E-mail: linecoran@gmail.com
* LinkedIn: [Kuzmichev-Alexey](https://www.linkedin.com/in/alexey-kuzmichev-4a5471239/)
* GitHub: [LineCoran](https://github.com/LineCoran)
* CodeWars: [LineCoran](https://www.codewars.com/users/LineCoran)

## About me: ##


## Skills: ##

*HTML, CSS
*JavaScript Basic

## Code example: ##
### Kata from CodeWars ###
===========================
**Count strings in objects**
*Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:*

``` 
strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
```

*My solution:*

```
function strCount(obj){
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count += strCount(obj[key]);
  }
  return count;
}
```