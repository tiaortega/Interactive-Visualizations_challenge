// Fetch the JSON data and console log it
let url = 'samples.json';
filter_id=-1;
number_of_bars=10;


function build_dropdown(){

  $.getJSON( url, function( data ) {
    var items = [];
    $.each( data["names"], function( key, val ) {
      items.push( "<option id='" + val + "'>" + val + "</option>" );
    });
    items.forEach(item => {
      $('#selDataset').append(item);
    });
   
  });

}



$( document ).ready(function() {

  build_dropdown();
});


function update_bar(number_of_bars){
  Plotly.d3.json(url, function(sample){
    let len = sample.samples.len;
    xl = [];
    yl = [];
    hl = [];
    sample.samples.forEach(eachsample => {
      if(eachsample["id"]===filter_id){
        // console.log(eachsample["sample_values"]);
        xl = eachsample["sample_values"].slice(0,number_of_bars);
        yl =  eachsample["otu_ids"].slice(0,number_of_bars);
        hl = eachsample["otu_labels"].slice(0,number_of_bars);


        for(var i=0;i<yl.length;i++){
          yl[i]="OTU "+yl[i];
        }

      }
      
    });
  
    var data = [{
      type: 'bar',
      x: xl,
      y: yl,
      text: hl,
      orientation: 'h'
    }];
    //$("#bar").html("");
    // d3.selectAll("svg > *").remove();
    Plotly.newPlot(document.getElementById("bar"), data); 
  });
}

function update_demographics() {
  var ethnicity;let gender;let age;let location;let bbtype;let wfreq;
  Plotly.d3.json(url, function(sample){
    sample.metadata.forEach(item => {
      if(item["id"].toString()===filter_id){ 
        ethnicity = item["ethnicity"];
        gender = item["gender"];
        age = item["age"];
        location = item["location"];
        bbtype = item["bbtype"];
        wfreq = item["wfreq"];
      }

    });
    // console.log(filter_id,ethnicity,gender,age,location,bbtype,wfreq);
    $("#sample-metadata").html("");
    
    var items = [];
    items.push( "<b> filter_id: "+filter_id+"</b><br>");
    items.push( "<b> ethnicity: "+ethnicity+"</b><br>" );
    items.push( "<b> gender: "+gender+"</b><br>" );
    items.push( "<b> age: "+age+"</b><br>" );
    items.push( "<b> location: "+location+"</b><br>" );
    items.push( "<b> bbtype: "+bbtype+"</b><br>" );
    items.push( "<b> wfreq: "+wfreq+"</b><br>" );

    items.forEach(item => {
      $('#sample-metadata').append(item);
    });

    
  });
  
}

function update_bubble() {
 
Plotly.d3.json(url, function(sample){
  xl = [];
  yl = [];
  hl = [];
  sample.samples.forEach(eachsample => {
    if(eachsample["id"]===filter_id){
      // console.log(eachsample["sample_values"]);
      xl = eachsample["sample_values"].slice(0,number_of_bars);
      yl =  eachsample["otu_ids"].slice(0,number_of_bars);
      hl = eachsample["otu_labels"].slice(0,number_of_bars);
    }
    
  });
  console.log(yl);
  var sizes = [yl]*10; 
  // for (sizes = ([yl]*10); sizes < 
  var trace1 = {
  x:xl,
  y: yl,
  mode: 'markers',
  marker: {
    color: [xl],
    size: yl,
    sizeref: 20,
    //size: sl
    
  }
  };

  var data = [trace1];

  var layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600
  };

  Plotly.newPlot('bubble', data, layout);

});
}
function  optionChanged(value){
  filter_id = value;
  update_bar(number_of_bars);
  update_demographics();
  update_bubble();
}
