import {removeClass, addClass} from './helper.js';

const htmlElements = {
    links: document.querySelectorAll(".container .links a"),
    tabs: document.querySelectorAll('.container .buttons button')
};
function Tabs() {};

Tabs.prototype.init = function() {
    htmlElements.links.forEach(function(link) {
        link.addEventListener('click', linkClicked)
    });
    htmlElements.links.forEach(function (elem){
            if (elem.dataset.mode === 'stopwatch') {
                elem.addEventListener('click', showButtons);
            } else {
                elem.addEventListener('click', hideButtons);
            }
        });

};

function linkClicked() {
    this.classList.add('selected');
    htmlElements.links.forEach(link => {
        if (this == link) {
            return
        };
        link.classList.remove('selected');
    });

}

 function showButtons() {
     htmlElements.tabs.forEach(function(elem){
        removeClass(elem);
     });
     clock.stop();
    stopwatch.showTimer();
 }

 function hideButtons() {
    
     htmlElements.tabs.forEach(function(elem){
        addClass(elem);
     });
     clearInterval(stopwatch.time);
    clock.run(); 
 }
export { Tabs };