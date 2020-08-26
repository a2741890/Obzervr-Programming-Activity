# Obzervr-Programming-Front-End
New York City has publicly released Taxi trip data for every trip from every taxi from 2014 to 2018. The web application shows the dataset of the pick-up locations on the map in New York City during January, 2015. When zooming down to an individual point, it will be displayed as a blue circle marker. On the other hand, zooming out will show clusters representing points in the specific area.

###### Data structure in use:  
<img src="https://github.com/a2741890/Obzervr-Programming-Activity/blob/master/dataStructure.PNG" height="140" width="260">  

###### Map:  
<img src="https://raw.githubusercontent.com/a2741890/Obzervr-Programming-Activity/master/map-middle.PNG" height="240" width="480">
<img src="https://raw.githubusercontent.com/a2741890/Obzervr-Programming-Activity/master/map-close.PNG" height="240" width="480">
<img src="https://raw.githubusercontent.com/a2741890/Obzervr-Programming-Activity/master/map-far.PNG" height="240" width="480">

  
  
## Technical Decision  

1. JavaScript Framework - *React.js*
2. Open-source JavaScript library for interactive map - *Leaflet & React-Leaflet*
3. Component contains stateless React compomnents and export to container for usage while container contains stateful component (i.e Map.js) to manipulate the state
4. Using CircleMarker instead of Marker because the latter load logo and shadow image by default, which will put extremely high pressure on browser if we are going to render millions of points at the client-side
 ## Future  
 1. Filter for a specific date range according to users' input
 2. Restrict viewable area for users for the security reason
 3. Users from different time zone
