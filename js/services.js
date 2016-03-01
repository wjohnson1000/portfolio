app.factory('projectData',  function(){
  var projects = [
    {
      name: 'Trail Mix',
      image: 'trailmix.png',
      description: 'A social app for hikers to share their recent experience on the trail with other users. Users can log into the app using their Google account. When writing a new post, users will be able to tag their hike by location, describe their hike, and add a tag to their hike. When submitted, the post will appear on the timeline along with all other posts. The user can sort the timeline view by tag if they wish.',
      tech: 'Passport, Handlebars, SCSS, jQuery, Node.js, Express, PostgreSQL, Knex.js, HTML5 Geolocation API',
      video: 'https://www.youtube.com/embed/B6Tzdpdqp-Q'
    },
    {
      name: 'Chirp Alert',
      image: 'ChirpAlert.png',
      description: "Native iOS app that returns recorded bird calls near a user's location. Users can listen to the call, save the call to their list, and tweet their experience.",
      tech: 'React-Native, Node.js, Express, Passport, MongoDB',
      video: 'http://www.youtube.com/embed/bSD2PSObNCQ'
    },
    {
      name: 'News You Can Talk About',
      image: 'nycta_2.png',
      description: 'Single page app that loads trending topics on Twitter. When a topic is clicked, links will populate that will take users to full news articles or reddit posts relating to the chosen topic. App saves the topics that a user has read about, the history can be viewed when the user clicks their user name. History will be saved between sessions.',
      tech: 'jQuery, HTML, SCSS, Twitter API, Reddit API, Alchemy News API',
      video: 'https://www.youtube.com/embed/qIeqhQFIzSQ'
    }
  ];
  return {
    allProjects: projects,
    oneProject: function(name){
      var project = projects.filter(function(elem){
        return name == elem.name
      })
      return project[0];
    }
  }
})
