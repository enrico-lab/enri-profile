function loadDeviceSpecificFiles() {
     if (navigator.userAgent.toLowerCase().match(/android/)) {
         loadjscssfile("and_filename.js", "js"); //dynamically load JS
         loadjscssfile("and_filename.css", "css") //dynamically load css
             /*iPhone check*/
     } else if (navigator.userAgent.toLowerCase().match(/iphone/) || navigator.userAgent.toLowerCase().match(/ipad/)) {
         loadjscssfile("ios_filename.js", "js") //dynamically load JS
         loadjscssfile("ios_filename.css", "css") //dynamically load css
     }
 }
