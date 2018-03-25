var width = 1200;
var height = 700;

console.log("We know d3");

var skills_dataset = [
    {'name':'Python'            ,'Data Engineer':0   ,'Full Stack Developer':1   , 'segment':'Language'                 , 'exp (years)':3},
    {'name':'Java'              ,'Data Engineer':0   ,'Full Stack Developer':1   , 'segment':'Language'                 , 'exp (years)':3},
    {'name':'JavaScript'        ,'Data Engineer':0   ,'Full Stack Developer':1   , 'segment':'Language'                 , 'exp (years)':3},
    {'name':'R'                 ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Language'                 , 'exp (years)':1},
    {'name':'Pandas'            ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Analysis tool/library'    , 'exp (years)':3},
    {'name':'Seaborn'           ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Analysis tool/library'    , 'exp (years)':3},
    {'name':'Numpy'             ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Analysis tool/library'    , 'exp (years)':3},
    {'name':'SkLearn'           ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Machine Learning'               , 'exp (years)':3},
    {'name':'VADER'             ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Analysis tool/library'    , 'exp (years)':1},
    {'name':'ORM'               ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Database'              , 'exp (years)':1},
    {'name':'Matplotlib'        ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Visualization'            , 'exp (years)':3},
    {'name':'PySpark'           ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Machine Learning'               , 'exp (years)':1},
    {'name':'MRJob'           ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Machine Learning'               , 'exp (years)':1},
    {'name':'Keras'           ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Machine Learning'               , 'exp (years)':1},
    {'name':'MapReduce'           ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Machine Learning'               , 'exp (years)':1},
    {'name':'Leaflet.js'        ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Visualization'            , 'exp (years)':2},
    {'name':'D3.js'             ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Visualization'            , 'exp (years)':3},
    {'name':'Plotly.js'         ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Visualization'            , 'exp (years)':2},
    {'name':'Tableau'           ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Analysis tool/library'    , 'exp (years)':2},
    {'name':'Flask'             ,'Data Engineer':0   ,'Full Stack Developer':1   , 'segment':'Web'                   , 'exp (years)':3},
    {'name':'MySQL'             ,'Data Engineer':0   ,'Full Stack Developer':1   , 'segment':'Database'                 , 'exp (years)':3},
    {'name':'OracleSQL'         ,'Data Engineer':0   ,'Full Stack Developer':1   , 'segment':'Database'                 , 'exp (years)':3},
    {'name':'NoSQL'             ,'Data Engineer':0   ,'Full Stack Developer':1   , 'segment':'Database'                 , 'exp (years)':1},
    {'name':'Excel'             ,'Data Engineer':1   ,'Full Stack Developer':0   , 'segment':'Analysis tool/library'    , 'exp (years)':2},
    {'name':'Bootstrap CSS'     ,'Data Engineer':0   ,'Full Stack Developer':1   , 'segment':'Web'                      , 'exp (years)':3},
    {'name':'HTML/CSS'          ,'Data Engineer':0   ,'Full Stack Developer':1   , 'segment':'Web'                      , 'exp (years)':2},
    {'name':'API'               ,'Data Engineer':0   ,'Full Stack Developer':1   , 'segment':'Analysis tool/library'    , 'exp (years)':2}
];


var heading_skills=
                [ {'title':'Collective skills', 'location':{'x':width/3, 'y':height/8}}  ];
var heading_roles=
                [ {'title':'Full-Stack development', 'location':{'x':width/4, 'y':height/8}},
                  {'title':'Data Science', 'location':{'x':3*width/4, 'y':height/8}}  ];
var heading_segment=
                [ {'title':'Programming', 'location':{'x':1*width/4+(width/8), 'y':height/18}},
                  {'title':'Tools/Libraries', 'location':{'x':2*width/4+(width/8), 'y':height/3}},
                  {'title':'Visualization', 'location':{'x':3*width/4+(width/8), 'y':height/18}},
                  {'title':'Web', 'location':{'x':1*width/4+(width/8), 'y':height/3}},
                  {'title':'Database', 'location':{'x':2*width/4+(width/8), 'y':height/18}},
                  {'title':'Machine Learning', 'location':{'x':3*width/4+(width/8), 'y':height/3}}  
                ];

console.log("Chart.......!!!")

var svg = d3.select(".chart")
            .append('svg')
            .attr('height',height)
            .attr('width',width)
            .append('g')
            .attr('transform','translate(0,0)');

var defs = svg.append("defs");

var radiusScale = d3.scaleSqrt();

var forceX_skills = d3.forceX(function(d){
    return width/2;
}).strength(0.05);

var forceX_role = d3.forceX(function(d){
    if(d['Data Engineer'] == 1){
        return 1.0*width/5;
    }else if(d['Full Stack Developer'] == 1){
        return 3.0*width/5;
    }
    
}).strength(0.05);

var forceX_segment = d3.forceX(function(d){
    if(d['segment'] == 'Language'){
        return 1*width/4;
    }else if(d['segment'] == 'Analysis tool/library'){
        return 2*width/4;
    }else if(d['segment'] == 'Visualization'){
        return 3*width/4;
    }else if(d['segment'] == 'Web'){
        return 1*width/4;
    }else if(d['segment'] == 'Database'){
        return 2*width/4;
    }else if(d['segment'] == 'Machine Learning'){
        return 3*width/4;
    }

    return 3*width/5;
    
}).strength(0.05);

var forceY_segment = d3.forceY(function(d){
    if(d['segment'] == 'Language'){
        return height/5;
    }else if(d['segment'] == 'Analysis tool/library'){
        return 3*height/5;
    }else if(d['segment'] == 'Visualization'){
        return height/5;
    }else if(d['segment'] == 'Web'){
        return 3*height/5;
    }else if(d['segment'] == 'Database'){
        return height/5;
    }else if(d['segment'] == 'Machine Learning'){
        return 3*height/5;
    }

    return 3*width/5;
    
}).strength(0.05);

var simulation = d3.forceSimulation()
.force("x",forceX_skills)
.force("y",d3.forceY(2*height/5).strength(0.05))
;
    
var rMin = 0;
var rMax = 4;

radiusScale.range(50,100);

simulation.force("collide",d3.forceCollide(function(d){
return (d['exp (years)']*15)+2;
}));
radiusScale.domain([0,4]);

// Define the div for the tooltip
var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

var group_titles = d3.select("body").selectAll(".group-title");

var circles = svg.selectAll(".states")
.data(skills_dataset)
.enter()
.append("circle")
.attr("class","states")
.attr("r",function(d){
        console.log(d['exp (years)'],radiusScale(d['exp (years)']))
        return d['exp (years)']*15;
})
.attr("fillOpacity","0.5")
.attr("fill","#9EF4FE")
.attr("stroke","#007FBB")
.attr("stroke-width","2")
.on("click", function(d) {		
    console.log("Mouseenter "+d['name'])
    div.transition()		
        .duration(100)		
        .style("opacity", .99);		
    div	.html(
        "<div class='bg-info text-light text-center tooltip'>"+
        d['name'] + "<br/> Experience: "  + d['exp (years)'] +" year(s)"+
        "</div>"    
    )	
        .style("left", (d3.event.pageX) + "px")		
        .style("top", (d3.event.pageY - 28) + "px");	
    })	
    .on("dblclick", function(d) {		
        div.transition()
        .duration(10)		
            .style("opacity", 0);		
    })			
;


var text = svg.selectAll("text")
  .data(skills_dataset)
  .enter()
  .append("text")
  .attr("class", "skill_text")
  .attr("font-weight","bold")
  .attr("font-size",d=>(`${d['exp (years)']*2+6}px`))
  .text(function (d) {
      console.log(d['name'])
    return d['name'];
  })
  .attr("text-anchor", "middle")
  .attr("fill", "#087FBB")
  .on("click", function(d) {		
    console.log("Mouseenter text"+d['name'])
    div.transition()		
        .style("opacity", .99);		
    div	.html(
        "<div class='bg-info text-light text-center tooltip'>"+
        d['name'] + "<br/> Experience: "  + d['exp (years)'] +" year(s)"+
        "</div>"    
    )	
        .style("left", (d3.event.pageX) + "px")		
        .style("top", (d3.event.pageY - 28) + "px");	
    })	
    .on("dblclick", function(d) {		
        div.transition()		
            .style("opacity", 0);		
    })			
;

simulation.nodes(skills_dataset)
.on('tick',ticked);

function ticked(){
    circles
        .attr("cx", function(d){
            return d.x;
        })
        .attr("cy", function(d){
            return d.y;
        })

    text
        .attr("x", function(d){
            return d.x;
        })
        .attr("y", function(d){
            return d.y;
        })
}
group_titles.transition()		
        .style("opacity", .99);	
group_titles
    .data(heading_skills)
    .enter()
    .append("div")
    .attr("class","group-title text-info ")
    .style("left",d=>`${d['location']['x']}px`)
    .style("top",d=>`${d['location']['y']}px`)
    .text(d=>d['title'])
    .style("opacity",0.9);
    


d3.select("#all-skills")
.on("click",function(d){

    div.transition()
    .duration(10)		
        .style("opacity", 0);

    simulation.force("x", forceX_skills)
    .force("y",d3.forceY(2*height/5).strength(0.05))
        .alphaTarget(0.25)
        .restart();

    d3.selectAll(".group-title").remove();
    
    group_titles.transition();


    group_titles
    .data(heading_skills)
    .enter()
    .append("div")
    .attr("class","group-title text-info ")
    .style("left",d=>`${d['location']['x']}px`)
    .style("top",d=>`${d['location']['y']}px`)
    .text(d=>d['title'])
    .style("opacity",0.9);
});

d3.select("#by-role")
.on("click",function(d){

    div.transition()
    .duration(10)		
        .style("opacity", 0);

    simulation.force("x", forceX_role)
    .force("y",d3.forceY(2*height/5).strength(0.05))
        .alphaTarget(0.25)
        .restart();
    
    d3.selectAll(".group-title").remove();

    group_titles
    .data(heading_roles)
    .enter()
    .append("div")
    .attr("class","group-title text-info ")
    .style("left",d=>`${d['location']['x']}px`)
    .style("top",d=>`${d['location']['y']}px`)
    .text(d=>d['title'])
    .style("opacity",0.9);
});

d3.select("#by-segment")
    .on("click",function(d){

        div.transition()
        .duration(10)		
            .style("opacity", 0);

        simulation.force("x", forceX_segment)
        .force("y",forceY_segment)
        .alphaTarget(0.25)
        .restart();

        
        d3.selectAll(".group-title").remove();

        group_titles
        .data(heading_segment)
        .enter()
        .append("div")
        .attr("class","group-title text-info ")
        .style("opacity", .99)
        .style("left",d=>`${d['location']['x']}px`)
        .style("top",d=>`${d['location']['y']}px`)
        .text(d=>d['title'])
        .style("opacity",0.9);

});
