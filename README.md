# Angular JS part 2 - Learning from an existing app

This repository is a fork from @raonibr's Formula 1 App [https://github.com/CodeHubOrg/f1feeder-part2](https://github.com/CodeHubOrg/f1feeder-part2). 
I can very much recommend the tutorials associated with it:
- [http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app](http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app)
- [http://www.toptal.com/angular-js/your-first-angularjs-app-part-2-scaffolding-building-and-testing](http://www.toptal.com/angular-js/your-first-angularjs-app-part-2-scaffolding-building-and-testing)

They teach you how to build the app from the [angular seed](https://github.com/angular/angular-seed) project. 

I just made these changes:
- Updated the F1 list to 2014
- Wrote a service for accessing the meetup API and pulling a list of CodeHub members, added view and controller. 

When you run this app, and go to /members.html, you will get a list of the members. You can also search for keywords that will look through the whole profile of a member and filter. See how many you get when you enter 'Drupal','Wordpress','Accessibility' and 'Javascript' :).

So, I just sneakily piggybacked on the existing app. The time to prepare the workshop didn't allow for more :S. 

Anyway, if you are a beginner with Angular, best to hop over to the tutorials mentioned above, but if you want to clone and run this modified one: 

```
git clone https://github.com/CodeHubOrg/AngularJS-2-seed-build-test-with-F1App.git
cd f1feeder-part2
```

Install dependencies:

```
npm install
bower install
```

Run the Application:

```
grunt serve
```


