export const backConfig = {
    "port": 7300,
    "host": "0.0.0.0",
    "pageSize": 30,
    "proxy": false,
    "db": "mongodb://localhost/zhwl-easy-mock",
    "unsplashClientId": "",
    "redis": {
      "keyPrefix": "[Easy Mock]",
      "port": 6379,
      "host": "localhost",
      "password": "123456",
      "db": 0
    },
    "blackList": {
      "projects": [],
      "ips": []
    },
    "rateLimit": {
      "max": 1000,
      "duration": 1000
    },
    "jwt": {
      "expire": "14 days",
      "secret": "shared-secret"
    },
    "upload": {
      "types": [".jpg", ".jpeg", ".png", ".gif", ".json", ".yml", ".yaml"],
      "size": 5242880,
      "dir": "../public/upload",
      "expire": {
        "types": [".json", ".yml", ".yaml"],
        "day": -1
      }
    },
    "ldap": {
      "server": "",
      "bindDN": "",
      "password": "",
      "filter": {
        "base": "",
        "attributeName": ""
      }
    },
    "fe": {
      "copyright": "",
      "storageNamespace": "easy-mock_",
      "timeout": 25000,
      "publicPath": "/dist/"
    }
  }
  