# PreViewTube.js
A small jQuery plugin for animating YouTube thumbnails.


##Download

You can install PreViewTube using Bower:

``$ bower install previewtube``

Or if you prefer just grab a copy of [the script](https://raw.githubusercontent.com/vool/PreViewTube.js/master/previewtube.js)

## Usage

1. Include jQuery:

	```html
<script src="path/to/jquery.min.js"></script>

	```

2. Include plugin's code:

	```html
	<script src="path/to/previewtube.js"></script>
	```

3. Call the PreViewTube plugin:

	```html
	<script>
	  $(document).ready(function(){
	  
	  				$('.preViewTube').PreViewTube();
					
					// or
	
					$('.preViewTube-constant').PreViewTube({
						'interval' : 500,
						'mode' : 'constant'
					});
	
	  });
	</script>
	```

3. Add some YouTube thumbnails:

	```html
	<img src="https://i.ytimg.com/vi/dQw4w9WgXcQ/2.jpg" alt="" title="" width="150" class="preViewTube"/>'
	```

## Options

The plugin has two options `mode` and `interval` both are optional.

####Interval 
The animation rate in `ms`  
Default: `500`ms

####Mode 
How the animation should run 
`constant` or `hover`  
Default : `hover`

##A note on thumbnail size
YouTube creates 4 thumbnails, 3 of these are sized **120px x 90px** (1.jpg, 2.jpg & 3.jpg) and 1 sized **480px × 360px** (0.jpg), because of this size difference it is important that the size is set on the `img` tag.

Although it may be best to make this `width="120"` you can get away with make this a bit bigger, I found `width="150"` look ok.

## ToDo

Could be improved, might get around to it someday, sharing it is a start eh !