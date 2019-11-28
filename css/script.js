$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
     animateDiv('.e');
    animateDiv('.f');
});

function makeNewPosition(){
    var h = $(window).height() - 50;
    var w = $(window).width();
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 30000,   function(){
      animateDiv(myclass);        
    });
    
};

