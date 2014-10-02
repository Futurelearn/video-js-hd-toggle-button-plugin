# Video.js HD Toggle Button Plugin

## Usage

+ Include the .js and .css file in your project.
+ Specify the `HdToggleButton` plugin in the Video.js options and pass in the source for the standard and HD videos:
```javascript
var options = {
  'plugins': {
    'HdToggleButton': {
      'sdSrc': 'http://example.com/videos/standard.mp4',
      'hdSrc': 'http://example.com/videos/hd.mp4'
    }
  }
};

videojs('video-player-id', options);
```

