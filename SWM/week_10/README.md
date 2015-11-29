# Week 10

## Assignment

I’m a little late but I’ve combined week 10 and 11 assignments to make a css Zen garden with animations. Most of the javascript is rearranging the DOM.

I had a couple of questions in the process:

1. Is there a way to select ONLY the first element in a parent div and not any first elements within the parents child the way :first-of-type or :first-child does? I had a nav within the parent, and a nag within a sibling element and the css was applying to both nav because they are technically the first navs of each of their parents. 

2. On a similar note, I was trying to create a cascading color effect on the <p> tags in the main area, but since each had a different parent the effect was only cascading within that parent. Is there a way to select all the <p> tags together even if they are within different siblings? 

3. Lastly, I tried really hard to come up with my own javascript method to trigger events based on how close the element was to the top of the screen…turns out this is harder than I thought. I looked through a lot of ways and tried this technique: http://www.quirksmode.org/js/findpos.html but I got stuck on what to do after determining the the the pixel amount from the top of screen. Anyways I decided to implement the waypoints.js framework so I could stop wasting time. I’ve used it before with query, but this time I challenged myself to implement with only javascript, so I hope that’s okay. 

