# My Assets App Server for Clothes

My Assets App is an application to manage your assets. This app has :

-   RESTfull endpoint for asset's CRUD operation
-   JSON formatted response

&nbsp;

## RESTful endpoints

### Post /pub/login

> Login User

**_Request Header :_**

```
not needed
```

**_Request Body :_**

```
{
  "email" : "customer03@mail.com",
  "password" : "1234"
}
```

**_Response (200 - OK) :_**

```
{
    "id": 11,
    "name": "designer05",
    "email": "designer05@gmail.com",
    "role": "Designer",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlc2lnbmVyMDVAZ21haWwuY29tIiwiaWF0IjoxNjUzMDYxNzQ2fQ.aqYE5JYGMK_mOiwHHGCifr29oDf-isE7AabgXlsQ8pk"
}
```

**_Response (*500 - There was an error on the server and the request could not be completed and 401 - Unauthorized*) :_**

-   500

```
{
  "message": "Internal Server error"
}
```

-   401

```
{
  "message": "Invalid username or email or password"
}
```

---

### Post /pub/register

> Register user

**_Request Header :_**

```
not needed
```

**_Request Body :_**

```
{
  "name": designer06
  "email": designer06@gmail.com
  "password": 1234
  "imgUrl": https://cdn.stocksnap.io/img-thumbs/280h/person-walking_HZN7IJIKBN.jpg
}
```

**_Response (201 - OK) :_**

```
{
    "id": 12,
    "name": "designer06",
    "password": "$2a$10$CrxojJSF7vdAFiguxP7xLuE2HYWMWuCLTUXF6pNSvjfP/QJwp5mEy",
    "email": "designer06@gmail.com",
    "imgUrl": "https://cdn.stocksnap.io/img-thumbs/280h/person-walking_HZN7IJIKBN.jpg",
    "role": "Designer",
    "updatedAt": "2022-05-21T10:33:04.710Z",
    "createdAt": "2022-05-21T10:33:04.710Z"
}
```

**_Response (*500 - There was an error on the server and the request could not be completed and 400 - Bad Request*) :_**

-   500

```
{
  "message": "Internal Server errOR"
}
```

-   400

```
{
  status: 400,
  message: "This email has been registered",
}
```

---

### GET /pub

> Get all Post

**_Request Header :_**

```
{
  not needed
}
```

**_Request Body :_**

```
not needed
```

**_Response (200 - OK) :_**

```js
{
"count": 6,
"rows": [
  {
    "id": 8,
    "caption": "Ini Logo NIKE 6",
    "image": "https://cdn.dribbble.com/users/2841407/screenshots/18289541/nike_logo_loop.png?compress=1&resize=450x338&vertical=top",
    "status": "Active",
    "like": 0,
    "UserId": 10,
    "createdAt": "2022-05-21T06:49:10.879Z",
    "updatedAt": "2022-05-21T06:49:10.879Z",
    "User": {
        "id": 10,
        "name": "designer01",
        "email": "designer01@gmail.com",
        "role": "Designer",
        "imgUrl": "https://cdn.stocksnap.io/img-thumbs/280h/person-walking_HZN7IJIKBN.jpg",
        "createdAt": "2022-05-20T13:51:41.516Z",
        "updatedAt": "2022-05-20T13:51:41.516Z"
    }
  },
  {
      "id": 7,
      "caption": "Ini Logo NIKE 5",
      "image": "https://cdn.dribbble.com/users/2841407/screenshots/18289541/nike_logo_loop.png?compress=1&resize=450x338&vertical=top",
      "status": "Active",
      "like": 0,
      "UserId": 10,
      "createdAt": "2022-05-21T06:49:06.407Z",
      "updatedAt": "2022-05-21T06:49:06.407Z",
      "User": {
          "id": 10,
          "name": "designer01",
          "email": "designer01@gmail.com",
          "role": "Designer",
          "imgUrl": "https://cdn.stocksnap.io/img-thumbs/280h/person-walking_HZN7IJIKBN.jpg",
          "createdAt": "2022-05-20T13:51:41.516Z",
          "updatedAt": "2022-05-20T13:51:41.516Z"
      }
  },
................
]}
```

**_Response (500 - There was an error on the server and the request could not be completed, 401 - Unauthorized) :_**

-   500

```
{
  "message": "Internal Server error"
}
```

-   400

```
{
  status: 403,
  message: "Not Authorized"
}
```

---

### GET /pub/profile

> Get Posts By User Upload

**_Request Header :_**

```
{
  "accessToken": "<your access token>"
}
```

**_Request Body :_**

```
not needed
```

**_Response (200 - OK) :_**

```
{
  [
    {
        "id": 17,
        "caption": "qwerty",
        "image": "1653139491878---WhatsApp Image 2022-05-11 at 23.06.18.jpeg",
        "status": "Active",
        "like": 0,
        "UserId": 11,
        "createdAt": "2022-05-21T13:24:51.905Z",
        "updatedAt": "2022-05-21T13:24:51.905Z"
    },
    {
        "id": 18,
        "caption": "qwerty",
        "image": "1653139667717---Polo day.png",
        "status": "Active",
        "like": 0,
        "UserId": 11,
        "createdAt": "2022-05-21T13:27:47.764Z",
        "updatedAt": "2022-05-21T13:27:47.764Z"
    }
  ]
}
```

**_Response (500 - There was an error on the server and the request could not be completed, 401 - Unauthorized) :_**

-   500

```
{
  "message": "Internal Server err"
}
```

---

### POST /pub/posting

> Add new photo

**_Request Header :_**

```
{
  "accessToken": "<your access token>"
}
```

**_Request Body :_**

```
  "image":https://cdn.dribbble.com/users/2841407/screenshots/18289541/nike_logo_loop.png?compress=1&resize=450x338&vertical=top

"caption":Ini Logo NIKE 6
```

**_Response (201 - Created) :_**

```
{
    "id": 8,
    "caption": "Ini Logo NIKE 6",
    "image": "https://cdn.dribbble.com/users/2841407/screenshots/18289541/nike_logo_loop.png?compress=1&resize=450x338&vertical=top",
    "UserId": 10,
    "status": "Active",
    "like": 0,
    "updatedAt": "2022-05-21T06:49:10.879Z",
    "createdAt": "2022-05-21T06:49:10.879Z"
}
```

**_Response (*500 - There was an error on the server and the request could not be completed and 404 - Not Found*)_**

-   500

```
{
  "message": "Internal Server err"
}
```

-   403

```
{
  message: "Not Authorized"
}
```

### POST /pub/postings

> Add new photo (multiple photo) [testing in postman]

**_Request Header :_**

```
no needed
```

**_Request Body :_**

```
  "images": <file photo>
  "images": <file photo>
  "images": <file photo>

"caption":Ini Logo NIKE 6
```

**_Response (201 - Created) :_**

```
[
    {
        "fieldname": "images",
        "originalname": "msi.jpg2 - Copy.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "./upload",
        "filename": "1653210041917---msi.jpg2 - Copy.jpg",
        "path": "upload\\1653210041917---msi.jpg2 - Copy.jpg",
        "size": 1137160
    },
    {
        "fieldname": "images",
        "originalname": "msi-01.png",
        "encoding": "7bit",
        "mimetype": "image/png",
        "destination": "./upload",
        "filename": "1653210042022---msi-01.png",
        "path": "upload\\1653210042022---msi-01.png",
        "size": 1589
    },
    {
        "fieldname": "images",
        "originalname": "sdi.png",
        "encoding": "7bit",
        "mimetype": "image/png",
        "destination": "./upload",
        "filename": "1653210042024---sdi.png",
        "path": "upload\\1653210042024---sdi.png",
        "size": 8109
    }
]
```

**_Response (*500 - There was an error on the server and the request could not be completed and 404 - Not Found*)_**

-   500

```
{
  "message": "Internal Server err"
}
```
