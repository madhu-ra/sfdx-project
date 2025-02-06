({
    next: function(component) {
    	var slideIndex = component.get("v.slideIndex");
    	var slides = component.get("v.slides");
        if (slideIndex + 1 < slides.length) {
            slideIndex = slideIndex + 1;
		console.log('curr index: ', slideIndex);
	        component.set("v.slideIndex", slideIndex);
        }
	},

    prev: function(component) {
       	var slideIndex = component.get("v.slideIndex");
        if (slideIndex > 0) {
            slideIndex = slideIndex - 1;
	        component.set("v.slideIndex", slideIndex);
        }
    },

	last: function(component){
		// This is to be used in future

})
