define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/registration",
    "title": "Register new Service for watching",
    "name": "Register_Service",
    "group": "Service",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of web site.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Notification Email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n  \"title\": \"google.com\",\n  \"email\": \"example@example.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>indicates the status of procedure.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "UserAlreadyExists:",
          "content": "HTTP/1.1 403 Error\n{\n  \"message\": \"Error message.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/server.js",
    "groupTitle": "Service"
  }
] });
