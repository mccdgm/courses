$(document).ready(function(){
  function onHover(number) {
    if (number == '.one') {
      var description = '<h2>Frameworks</h2><p>Learn how to use frameworks for HTML, CSS, and JavaScript including Bootstrap, Material Design, and more!</p>';
    } else if (number == '.two') {
      var description = '<h2>Flexbox</h2><p>Learn how to implement a CSS flexbox and where this tool is useful on webpages.</p>';
    } else if (number == '.three') {
      var description = '<h2>GitHub</h2><p>Understanding version control and a basic understanding of Git will be introduced since it is an integral part of web development.</p>';
    } else if (number == '.four') {
      var description = '<h2>Web Design</h2><p>What makes good web design? This class will give you a basis.</p>';
    } else if (number == '.five') {
      var description = '<h2>PHP</h2><p>PHP includes are a simple way to make global changes.</p>';
    } else if (number == '.six') {
      var description = '<h2>JavaScript</h2><p>JavaScript can achieve interactivity. Change thumbnails using this front-end language.</p>';
    }
    $(number).mouseover(function(){
      $(this).addClass('overlay');
      // $(this).append($('.panel').hasclass('one').append('<br><p>BLAH</p>'));
      $(this).empty();
      $(this).append(description);
  });
  }
  function onMouseOut(number) {
    if (number == '.one') {
      var title = '<h2>Frameworks</h2>';
    } else if (number == '.two') {
      var title = '<h2>Flexbox</h2>';
    } else if (number == '.three') {
      var title = '<h2>GitHub</h2>';
    } else if (number == '.four') {
      var title = '<h2>Web Design</h2>';
    } else if (number == '.five') {
      var title = '<h2>PHP</h2>';
    } else if (number == '.six') {
      var title = '<h2>JavaScript</h2>';
    }
    $(number).mouseleave(function(){
      $(this).removeClass('overlay');
      $(this).empty();
      $(this).append(title);
  });
  }
  onHover('.one');
  onMouseOut('.one');
  onHover('.two');
  onMouseOut('.two');
  onHover('.three');
  onMouseOut('.three');
  onHover('.four');
  onMouseOut('.four');
  onHover('.five');
  onMouseOut('.five');
  onHover('.six');
  onMouseOut('.six');
});