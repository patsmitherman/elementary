## How did you approach the design of this application?

>Coming from our Cynergy background, I'm a fan of design-first.  I didn't really do that too much here, since it was quick
>and dirty.  I also strayed slightly from the directions by combining the user and non-user restaurants in the same route.  I
>also added a filter button for kicks. :)

## Why did you choose the specific events to trigger actions?

>I went with what made sense to me.  The restaurants are fetched when that route is navigated.  The restaurants are filtered when the checkbox is clicked.  Nothing crazy.  

## Did you place all state into Redux or was it a combination of React and Redux?

>Mostly in Redux.  The only place where I used React state was in the restaurant component for the show/hide details
>functionality.  I could have moved this into Redux, but it would have complicated the project unnecessarily.

## How did you get React and Redux to play nicely together?

>The App and Restaurants components are containers that tie into Redux through the connect function.  Everything else gets
>passed props from these containers.

## What changes would you make if you had more time to complete this application?

>Where to begin? :)  Again, this was fast and dirty.  There would be a lot more styling, testing, refactoring things
>into components, general cleanup, documentation, etc..  
