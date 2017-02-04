<?php
	// Obtain results
	while ($row = mysql_fetch_array($data)){
		$dbc_exhibitID = $row['exhibitID'];
		$dbc_exhibitNAME = $row['exhibitNAME'];
		$dbc_exhibitIMAGE = $row['exhibitIMAGE'];
	  	$query_museum = "SELECT museumNAME FROM cb_museums JOIN cb_museumhasexhibit ON cb_museums.museumID = cb_museumhasexhibit.museumID WHERE cb_museumhasexhibit.exhibitID = $dbc_exhibitID";
	  	$data_museum = mysql_query($query_museum);
	  	while ($row = mysql_fetch_array($data_museum)){
	  		$dbc_museumNAME = $row['museumNAME'];
		}
	}
?>
<title><?php echo $dbc_exhibitNAME ?></title>
<?php include('header.php'); ?>
<div class="wrapper">
  <div id="col1"><img src="<?php echo $dbc_exhibitIMAGE?>" width="160" height="160">
    <ul>
      <li><a class="museum" href="#"><?php echo $dbc_museumNAME ?></a></li>
      <li><a class="collection" href="#">Rembrandt Collection</a></li>
      <li><a class="collection" href="#">European Collection</a></li>
      <li><a class="collection" href="#">1600s Collections</a></li>
      <li><a class="collection" href="#">K Johnson's Collection</a></li>
      <li><a class="collection" href="#">T Harriet's Collection</a></li>
    </ul>
    <form action="search.php"  method="post" enctype="multipart/form-data">
      <input class="field" type="text" value="Simulated search" >
      <input class="right button" name="submit" type="submit" value="Search">
    </form>
    <div class="clear"></div>
  </div>
  <div id="col2">
    <h2><?php echo $dbc_exhibitNAME ?></h2>
    <div id="tab_container">
      <ul class="tabs">
        <li class="tab head">Exhibit</li>
        <li class="tab head">More</li>
        <li class="tab head">Media</li>
        <li class="tab head">Add</li>
      </ul>
      <div class="clear"></div>
      <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac sem eu arcu scelerisque adipiscing ac eget urna. Suspendisse eu aliquet urna. Cras euismod mollis augue et malesuada. Sed venenatis, eros quis sagittis eleifend, nisi nisi condimentum libero, rutrum facilisis metus nibh euismod nibh. Integer odio odio, porta eget volutpat vehicula, aliquet posuere enim. Pellentesque ut nibh quam. Mauris facilisis varius urna et eleifend. </p>
      <ul class="content">
        <li><a class="culturebook" href="more.php">In Depth Analysis</a></li>
        <li><a class="culturebook" href="more.php">History of Dutch Painters</a></li>
        <li><a class="culturebook" href="more.php">Rembrandt for under 12s</a></li>
      </ul>
      <ul class="content">
        <li><a class="podcast" href="http://www.liverpoolmuseums.org.uk/podcasts/rembrandt_self-portrait.aspx">'Self-portrait as a young man', Rembrandt van Rijn</a></li>
        <li><a class="youtube" href="http://www.youtube.com/watch?v=ocmWA_jpKMw&playnext=1&list=PLAB711353C3E17FD2">Rembrandt : The Public Eye (Part 1/5) </a></li>
        <li><a class="youtube" href="http://www.youtube.com/watch?v=lfFVY8mqnFU">Rembrandt - Anatomy Lecture of Dr. Nicolaes Tulp </a></li>
      </ul>
      <form action="#" method="post" enctype="multipart/form-data" name="form1" class="content">
        <div>Title of submission*</div>
        <input name="submission_Title" type="text" class="fieldinput">
        <div>Type of submission*</div>
        <select name="submissionType" class="fieldinput">
          <option>Comment about Exhibit</option>
          <option>An Alternative Perspective</option>
          <option>Translation</option>
          <option>Interpretation</option>
          <option>Experience Recollection</option>
          <option>Other</option>
        </select>
        <div>Submission*</div>
        <textarea name="submission_Entry" cols="12" rows="12"  class="fieldinput"></textarea>
        <div class="division2"></div>
        <div>Your Name*</div>
        <input name="submission_Name" type="text" class="fieldinput">
        <div>Email Address*</div>
        <input name="submission_Adress" type="text" class="fieldinput">
        <div>Phone Number</div>
        <input name="submission_Title" type="text" class="fieldinput">
        <input name="submit" type="button" value="Submit" class="fieldsubmit">
      </form>
    </div>
  </div>
  <div id="col3">
    <h3>Related Exhibits</h3>
    <div class="sug"> <a href="#" title="Exhibit"><img src="images/demo_exhibits/gallery2.jpg" width="100" height="100"></a> <a href="#" title="Exhibit"><img src="images/demo_exhibits/gallery3.jpg" width="100" height="100"></a> <a href="#" title="Exhibit"><img src="images/demo_exhibits/gallery5.jpg" width="100" height="100"></a> <a href="#" title="Exhibit"><img src="images/demo_exhibits/gallery9.jpg" width="100" height="100"></a></div>
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
<?php mysql_close($dbc); include('footer.php'); ?>
