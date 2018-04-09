// JavaScript Document
        $(function() {
            var myElement = document.getElementById('carousel-example-generic')
            var hm = new Hammer(myElement);
            hm.on("swipeleft", function() {
                $('#carousel-example-generic').carousel('next')
            })
            hm.on("swiperight", function() {
                $('#carousel-example-generic').carousel('prev')
            })
        })

