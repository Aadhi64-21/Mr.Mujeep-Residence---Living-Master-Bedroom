var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "Living",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.018471844200458776,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -2.2151134696718398,
          "pitch": -0.01587703209631819,
          "rotation": 10.995574287564278,
          "target": "2-master-bedroom"
        },
        {
          "yaw": -0.9313803015378319,
          "pitch": -0.02100240265483322,
          "rotation": 17.27875959474387,
          "target": "1-wash-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wash-area",
      "name": "Wash Area",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.1312322330451181,
        "pitch": -0.04104517208620351,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 1.5624410802594992,
          "pitch": -0.004490489868476999,
          "rotation": 1.5707963267948966,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-master-bedroom",
      "name": "Master Bedroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -0.8080632781611161,
          "pitch": -0.06974132494216434,
          "rotation": 5.497787143782138,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
