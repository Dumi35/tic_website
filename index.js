// scroll to element with id on page
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({
      block: 'start',
    });
  }
  