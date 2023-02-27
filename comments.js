$(document).ready(function(){
    let data;  // variable to store the converted array

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET",
        success: function(posts){
          data = Object.entries(posts); // converting the object into array and storing into the data variable
        }
      });

    $('#load-comments').click(function(){
        let count = 0;                  // counter variable to keep track of number of outputs.
        for (let post of data) {
            count = count + 1;
            $('#comments').append(`<li>userId: ${Object.assign(post[1]).userId} - title: ${Object.assign(post[1]).title}</li>`);
            data.shift();              // removing elements from array after printing
            if(count == 5) break;
          }
    });
  });


// EXPLANATION : 
// Here, I have created sperated ajax call from the click event handler , because if we have ajax response on button click event
// each time a new response is generated. So if you want to print 5 output each time , we need a mechanism to somehow keep track of
// previous printed results. 

// With use of Object which is default response for AJAX calls it is difficult. That is why in code above i have converted the objects
// to Array type using Object.entries() method. We also keep track of how many result has been printed and if it is 5 , as per your requirement
// we break out of the loop. We also remove the first element from the Array after printing so that after next 5 iteration when we print 
// again we get the next 5 comments. and if you want to reset the commnents to intial you can relaod the page. 

// Again there are many countless way you can achieve this, but i hope this gives you a better understanding of the working mechanism.

