# PreViewTube.js
A small jQuery plugin for animating YouTube thumbnails.

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
		<img src="https://i.ytimg.com/vi/dQw4w9WgXcQ/2.jpg" alt="" title="" width="150px" class="preViewTube"/>'
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

## ToDo

Could be improved, might get around to it someday, sharing it is a start eh !