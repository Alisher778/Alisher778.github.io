var imagecount = 1;
            var total = 3;


            function slide(x) {
                var Image = document.getElementById('img')
                if (imagecount > total) {imagecount = 1};
                if (imagecount < 1) {imagecount = total};  
                imagecount = imagecount + x;
                Image.src = "image/slide"+ imagecount + ".jpg";
            }
            window.setInterval(function slideA() {
                var Image = document.getElementById('img')
                if (imagecount > total) {imagecount = 1};
                if (imagecount < 1) {imagecount = total};  
                imagecount = imagecount + 1;
                Image.src = "image/slide"+ imagecount + ".jpg";
            },3000);