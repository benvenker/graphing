var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
});

Template.chart.rendered = function() {
  Meteor.Loader.loadCss("//third_party/c3.css", chart);
  Meteor.Loader.loadJS("//http://d3js.org/d3.v3.min.js", chart);
  Meteor.Loader.loadJS("//third_party/c3.min.js", chart);
};
