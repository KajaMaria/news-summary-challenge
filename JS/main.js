function loadDoc() {
  removeHeadlines()
    fetch('https://content.guardianapis.com/search?show-fields=bodyText%2Cthumbnail&show-elements=image&section=politics&api-key=3cb091b4-2661-48b5-932c-0bba1f68621e')
     .then(function(response) {
       return response.json();
     })
     .then(function(myJson) {
       result = myJson.response.results
       output = showObject(result)
       printList(output)
       showHeadlines()
       });
   }

   function printList(output) {
     for (let I = 0; I < output.length; I++) {
     let resultList = "<li class='list-news' style='list-style-type: none;'>" + output[I] + "</a>" + "</li>"
     document.getElementById("name").innerHTML += resultList
    }
  }

   function showObject(obj) {
  var result = [];
  for (var p in obj) {
    if( obj.hasOwnProperty(p) ) {
      result.push('<div class="image"><img src="' + obj[p].fields.thumbnail + '"/></div><div class="headline"><a href="" id="' + p + '" onclick="showBody(id)">"' + obj[p].webTitle + '"</a></div><div class="summaryText"><p id="next' + p + '" style="display: none;"">"' + obj[p].fields.bodyText + '<br><br><a href="' + obj[p].webUrl + '">Link to Full Article<a/></p></div>')
      }
  }
  return result;
}
function showBody(num) {
  test = "next" + num + ""
  event.preventDefault();
  let x = document.getElementById(test);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function showHeadlines() {
    event.preventDefault();
    let x = document.getElementById("name");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
    function removeHeadlines(){
      document.getElementById("name").innerHTML = "";
    }

function changeURL() {
 window.addEventListener('hashchange', function() {
   note = location.hash.split("#")[1]
    loadBody(note)
 })
}
