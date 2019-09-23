let headers = document.querySelectorAll(".header");
function checkForVisibility() {
 headers.forEach(function(header) {
   if (isElementInViewport(header)) {
     /* Om elementet finns i viewporten, lägg till en klass på elementet som ändrar utseendet
      * (så att det animeras in)
      */
     header.classList.add('header-visible');
   } else {
     header.classList.remove('header-visible');
   }
   /* Bonus-uppgift: Om elementet -inte- finns längre i viewporten, göm det då igen
    * så att det kan animeras in igen när det kommer tillbaka i viewporten
    */
 });
}
function isElementInViewport (el) {
 var rect = el.getBoundingClientRect();
 return (
   rect.top >= 0 &&
   rect.left >= 0 &&
   rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
 );
}
if (window.addEventListener) {
 addEventListener('DOMContentLoaded', checkForVisibility, false);
 addEventListener('load', checkForVisibility, false);
 addEventListener('scroll', checkForVisibility)
 /* Lyssna på scroll-eventet, och kör funktionen checkForVisibility */
}