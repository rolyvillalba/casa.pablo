var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-pablo",
      "name": "PANORAMA PABLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.276138830498452,
        "pitch": 0.050736888553931436,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.9718809615229898,
          "pitch": 0.21027714622067606,
          "rotation": 0,
          "target": "1-panorama-2-pablo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama-2-pablo",
      "name": "PANORAMA 2 PABLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.055044999485977186,
        "pitch": 0.11274222554000346,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.5163188327699331,
          "pitch": 0.22241445621283873,
          "rotation": 0,
          "target": "0-panorama-pablo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "LIVING/COMEDOR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
