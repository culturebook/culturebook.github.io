<title>No Profile Found</title>
<?php include('header.php'); ?>
<div class="wrapper">
  <div id="col1">
    
    <form action="search.php"  method="post" enctype="multipart/form-data">
      <input class="field" type="text" value="Simulated search" >
      <input class="right button" name="submit" type="submit" value="Search">
    </form>
    <div class="clear"></div>
  </div>
  <div id="col2">
    <h2>No Profile Found</h2>
    
  </div>
  <div id="col3">
    <h3>Related Exhibits</h3>
    <div class="sug"></div>
    <div class="division2"></div>
    <h3>Our Sponsors</h3>
    <p>&raquo; <a href="#">Donate or become a sponsor of Culturebook.</a></p>
  </div>
  <script src="scripts/mootools.js" type="text/javascript"></script> 
  <script src="scripts/mootools-1.2.4-more.js" type="text/javascript"></script> 
  <script src="scripts/TabPane.js" type="text/javascript"></script> 
  <script type="text/javascript">
        document.addEvent('domready', function() {
            var tabPane = new TabPane('tab_container');

            $('tab_container').addEvent('click:relay(.remove)', function(e) {
                new Event(e).stop();
                var parent = this.getParent('.tab');
                var index = $('demo').getElements('.tab').indexOf(parent);
                tabPane.closeTab(index);
            });

            $('new-tab').addEvent('click', function() {
                var title = $('new-tab-title').get('value');
                var content = $('new-tab-content').get('value');

                if (!title || !content) {
                    window.alert('Title or content text empty, please fill in some text.');
                    return;
                }

                $('tab_container').getElement('ul').adopt(new Element('li', {'class': 'tab', text: title}).adopt(new Element('span', {'class': 'remove', html: '&times'})));
                $('tab_container').adopt(new Element('p', {'class': 'content', text: content}).setStyle('display', 'none'));
            });
        });
</script> 
</div>
</div>
</div>
<?php include('footer.php'); ?>