# Kuzmichev Alexei
### Frontend Developer

[➡contacts](#contacts) | [➡about me](#about-me) | [➡skills](#skills) | [➡code example](#code-example) | [➡education](#education)
---

## Contacts

* Adress: Minsk, Belarus
* Phone: +375(44)514-18-08
* E-mail: linecoran@gmail.com
* [LinkedIn](https://www.linkedin.com/in/alexey-kuzmichev-4a5471239/)
* [GitHub](https://github.com/LineCoran)
* [CodeWars](https://www.codewars.com/users/LineCoran)

---

## About me

Hello! I'm 23 years old. 

After graduating from the Belarusian State University of Transport, I worked as a railway designer. 
In the last three months, I discovered web development for myself. 
And right now, my goal is to become a professional front-end developer.

---

## Skills

* HTML, CSS
* JavaScript Basic
* Git/GitHub

---

## Code example

### Kata from CodeWars: Count strings in objects: ###

*Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:*

```JavaScript

strCount({
      first: "1",
      second: "2",
      third: false,
      fourth: ["anytime",2,3,4],
      fifth:  null
    })
  // return 3 
```  

**My solution:**

```JavaScript

function strCount(obj){
      let count = 0;
      for (key in obj) {
        if (typeof obj[key] == 'string') count++;
        if (typeof obj[key] == 'object') count += strCount(obj[key]);
      }
      return count;
}
```
---

## Projects

My little project - [_Creating fractales_](https://linecoran.github.io/fractales)

---

## Education

* __Belarusation State University of Transport__ - _2016-2021_
    * Civil Engineer
* __Belarusation State University of Transport__ - _2021 - 2023_ 
    * Master of Engineering
    
---    
    
## Language

* Russian - __native__
* English - __A2__

[⬆⬆⬆](#kuzmichev-alexei)