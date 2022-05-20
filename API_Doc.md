# Rental Transportation
My Food Recipes App is a website that can help you find food recipes with various available categories. On this website you will get information about the complete food menu with pictures, ingredients that need to be prepared and the steps for making it. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response
----



----
### GET /recipes

> Get all recipes
_Response (200)_
```json
{
    "count": 11,
    "rows": [
        {
            "id": 17,
            "title": "Ikan Goreng",
            "imgUrl": "https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg",
            "description": "Pengolahan bakso",
            "ingredients": "bawang putih",
            "UserId": 1,
            "CategoryId": 2,
            "createdAt": "2022-05-20T03:22:59.741Z",
            "updatedAt": "2022-05-20T03:22:59.741Z",
            "User": {
                "username": "jhhh",
                "email": "emi@gmail.com",
                "phone": "1111",
                "role": "",
                "address": "hhh"
            },
            "Category": {
                "id": 2,
                "name": "Breakfast",
                "createdAt": "2022-05-19T12:09:23.805Z",
                "updatedAt": "2022-05-19T12:09:23.805Z"
            }
        },
        {
            "id": 16,
            "title": "jjjj",
            "imgUrl": "poto.png",
            "description": "jjjj",
            "ingredients": "nb",
            "UserId": 1,
            "CategoryId": 2,
            "createdAt": "2022-05-19T23:18:14.774Z",
            "updatedAt": "2022-05-19T23:18:14.774Z",
            "User": {
                "username": "jhhh",
                "email": "emi@gmail.com",
                "phone": "1111",
                "role": "",
                "address": "hhh"
            },
            "Category": {
                "id": 2,
                "name": "Breakfast",
                "createdAt": "2022-05-19T12:09:23.805Z",
                "updatedAt": "2022-05-19T12:09:23.805Z"
            }
        },
        {
            "id": 13,
            "title": "Ayam Bakar",
            "imgUrl": "https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg",
            "description": "Pengolahan bakso",
            "ingredients": "bawang putih",
            "UserId": 1,
            "CategoryId": 2,
            "createdAt": "2022-05-19T17:19:39.079Z",
            "updatedAt": "2022-05-19T17:19:39.079Z",
            "User": {
                "username": "jhhh",
                "email": "emi@gmail.com",
                "phone": "1111",
                "role": "",
                "address": "hhh"
            },
            "Category": {
                "id": 2,
                "name": "Breakfast",
                "createdAt": "2022-05-19T12:09:23.805Z",
                "updatedAt": "2022-05-19T12:09:23.805Z"
            }
        },
        {
            "id": 12,
            "title": "Ayam Bakar",
            "imgUrl": "https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg",
            "description": "Pengolahan bakso",
            "ingredients": "bawang putih",
            "UserId": 1,
            "CategoryId": 2,
            "createdAt": "2022-05-19T12:13:24.182Z",
            "updatedAt": "2022-05-19T12:13:24.182Z",
            "User": {
                "username": "jhhh",
                "email": "emi@gmail.com",
                "phone": "1111",
                "role": "",
                "address": "hhh"
            },
            "Category": {
                "id": 2,
                "name": "Breakfast",
                "createdAt": "2022-05-19T12:09:23.805Z",
                "updatedAt": "2022-05-19T12:09:23.805Z"
            }
        },
        {
            "id": 11,
            "title": "Ayam Bakar",
            "imgUrl": "https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg",
            "description": "Pengolahan bakso",
            "ingredients": "bawang putih",
            "UserId": 1,
            "CategoryId": 2,
            "createdAt": "2022-05-19T12:13:23.220Z",
            "updatedAt": "2022-05-19T12:13:23.220Z",
            "User": {
                "username": "jhhh",
                "email": "emi@gmail.com",
                "phone": "1111",
                "role": "",
                "address": "hhh"
            },
            "Category": {
                "id": 2,
                "name": "Breakfast",
                "createdAt": "2022-05-19T12:09:23.805Z",
                "updatedAt": "2022-05-19T12:09:23.805Z"
            }
        },
        {
            "id": 10,
            "title": "Ayam Bakar",
            "imgUrl": "https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg",
            "description": "Pengolahan bakso",
            "ingredients": "bawang putih",
            "UserId": 1,
            "CategoryId": 2,
            "createdAt": "2022-05-19T12:13:20.211Z",
            "updatedAt": "2022-05-19T12:13:20.211Z",
            "User": {
                "username": "jhhh",
                "email": "emi@gmail.com",
                "phone": "1111",
                "role": "",
                "address": "hhh"
            },
            "Category": {
                "id": 2,
                "name": "Breakfast",
                "createdAt": "2022-05-19T12:09:23.805Z",
                "updatedAt": "2022-05-19T12:09:23.805Z"
            }
        }
    ]
}
```

---
### GET /recipes/:recipesId

> Show recipes from given id
_Response (200 - success)_
```json
{
    "id": 17,
    "title": "Ikan Goreng",
    "imgUrl": "https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg",
    "description": "Pengolahan bakso",
    "ingredients": "bawang putih",
    "UserId": 1,
    "CategoryId": 2,
    "createdAt": "2022-05-20T03:22:59.741Z",
    "updatedAt": "2022-05-20T03:22:59.741Z"
}
```

_Response (404 - Data not found)_
```json
{
  "message": "Recipes not found"
}
```
---

**CREATE DATA RECIPES**
* **URL**

  /recipes

* **Method:**

  `POST`

* **Data Request Headers**
    ```
        {
            "access_token" : "<your access token>"
        }
    ```

* **Data Request Body**
    ```
       {
    "title": "Ikan Goreng",
    "imgUrl": "https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg",
    "description": "Pengolahan bakso",
    "UserId": 1,
    "CategoryId": 2,
    "ingredients": "bawang putih",
    }
    ```
* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
        ```
      {
    "id": 17,
    "title": "Ikan Goreng",
    "imgUrl": "https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg",
    "description": "Pengolahan bakso",
    "UserId": 1,
    "CategoryId": 2,
    "ingredients": "bawang putih",
    "updatedAt": "2022-05-20T03:22:59.741Z",
    "createdAt": "2022-05-20T03:22:59.741Z"
}
        ```
    
* **Error Response:**

  * **Code:** 400 <br />
    **Content:**
    ```
        {
        "status": 400,
        "message": [
            "Title can not be null",
            "Image can not be null",
            "Description can not be null",
            "ingredients can not be null",
            "Price can not be null"
        ]
    }
    ```
    `OR`
    * **Code:** 500 <br />
    * **Code:** 401 <br />
    **Content:**
    ```
    {
      "errMessage": {
          "status": 401,
          "message": "access token not found"
      }
    }
    ```
    ```
    {
      "errMessage": {
          "name": "JsonWebTokenError",
          "message": "invalid token"
      }
    }
    ```
    ```
    {
      "errMessage": {
        "name": "JsonWebTokenError",
        "message": "invalid signature"
      }
    }
    ```
----

**DELETE RECIPES**
* **URL**

  /recipes/:recipesId

* **Method:**

  `DELETE`

* **Data Request Headers**
```
    {
        "access_token" : "<your access token>"
    }
```
  
*  **URL Params**

   **Required:**
 
   `recipesId=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "message": "ID 30 success to delete"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
  * **Code:** 404 <br />
    **Content:** 
    ```
    "Recipes not found"
    ```
  * **Code:** 401 <br />
    **Content:**
    ```
    {
      "errMessage": {
          "status": 401,
          "message": "access token not found"
      }
    }
    ```
    ```
    {
      "errMessage": {
          "name": "JsonWebTokenError",
          "message": "invalid token"
      }
    }
    ```
    ```
    {
      "errMessage": {
        "name": "JsonWebTokenError",
        "message": "invalid signature"
      }
    }
    ```
----
* **URL**

  /login

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
      {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtaUBnbWFpbC5jb20iLCJpYXQiOjE2NTMwMTc1NzB9.AQLfyk12gsFyl6jUweSntDojZlr-ygxk3F_oy4IfHjo",
    "username": "jhhh",
    "email": "emi@gmail.com",
    "role": ""
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
  * **Code:** 401 <br />
    **Content:**
    ```
        {
        "status": 401,
        "message": "invalid username or email or password"
    }
    ```
----
**Register User**
* **URL**

  /register

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
    "id": 5,
    "email": "emi1@gmail.com"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
  * **Code:** 400 <br />
    **Content:**
    ```
    {
        "status": 400,
        "message": [
            "email must be unique"
        ]
    }
----

### GET /bookmark

> Get all bookmarks post
_Request Header_
```json
{
  "access_token": <your access token>
}
```

_Response (200)_
```json
[
    {
        "id": 11,
        "authorId": 1,
        "recipeId": 12,
        "createdAt": "2022-05-19T14:23:25.127Z",
        "updatedAt": "2022-05-19T14:23:25.127Z",
        "Recipe": {
            "id": 12,
            "title": "Ayam Bakar",
            "imgUrl": "https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg",
            "description": "Pengolahan bakso",
            "ingredients": "bawang putih",
            "UserId": 1,
            "CategoryId": 2,
            "createdAt": "2022-05-19T12:13:24.182Z",
            "updatedAt": "2022-05-19T12:13:24.182Z",
            "Category": {
                "id": 2,
                "name": "Breakfast",
                "createdAt": "2022-05-19T12:09:23.805Z",
                "updatedAt": "2022-05-19T12:09:23.805Z"
            }
        }
    },
    {
        "id": 12,
        "authorId": 1,
        "recipeId": 11,
        "createdAt": "2022-05-19T14:38:05.064Z",
        "updatedAt": "2022-05-19T14:38:05.064Z",
        "Recipe": {
            "id": 11,
            "title": "Ayam Bakar",
            "imgUrl": "https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg",
            "description": "Pengolahan bakso",
            "ingredients": "bawang putih",
            "UserId": 1,
            "CategoryId": 2,
            "createdAt": "2022-05-19T12:13:23.220Z",
            "updatedAt": "2022-05-19T12:13:23.220Z",
            "Category": {
                "id": 2,
                "name": "Breakfast",
                "createdAt": "2022-05-19T12:09:23.805Z",
                "updatedAt": "2022-05-19T12:09:23.805Z"
            }
        }
    },
    {
        "id": 13,
        "authorId": 1,
        "recipeId": 10,
        "createdAt": "2022-05-19T14:38:18.666Z",
        "updatedAt": "2022-05-19T14:38:18.666Z",
        "Recipe": {
            "id": 10,
            "title": "Ayam Bakar",
            "imgUrl": "https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg",
            "description": "Pengolahan bakso",
            "ingredients": "bawang putih",
            "UserId": 1,
            "CategoryId": 2,
            "createdAt": "2022-05-19T12:13:20.211Z",
            "updatedAt": "2022-05-19T12:13:20.211Z",
            "Category": {
                "id": 2,
                "name": "Breakfast",
                "createdAt": "2022-05-19T12:09:23.805Z",
                "updatedAt": "2022-05-19T12:09:23.805Z"
            }
        }
    },
    {
        "id": 14,
        "authorId": 1,
        "recipeId": 9,
        "createdAt": "2022-05-19T14:38:22.036Z",
        "updatedAt": "2022-05-19T14:38:22.036Z",
        "Recipe": {
            "id": 9,
            "title": "Ayam Bakar",
            "imgUrl": "https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg",
            "description": "Pengolahan bakso",
            "ingredients": "bawang putih",
            "UserId": 1,
            "CategoryId": 2,
            "createdAt": "2022-05-19T12:13:17.545Z",
            "updatedAt": "2022-05-19T12:13:17.545Z",
            "Category": {
                "id": 2,
                "name": "Breakfast",
                "createdAt": "2022-05-19T12:09:23.805Z",
                "updatedAt": "2022-05-19T12:09:23.805Z"
            }
        }
    }
]
```

_Response (401 - Authentication required)_
```json
{
    "status": 401,
    "message": "please login first!"
}
```

---

**POST BOOKMARK**
* **URL**

  /bookmark

* **Method:**

  `POST`

*  **URL Params**

   **Required:**

   `recipesId=[integer]`


* **Data Request Headers**
```
    {
        "access_token" : "<your access token>"
    }
```


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```
  {
    "id": 15,
    "authorId": 1,
    "recipeId": 17,
    "updatedAt": "2022-05-20T03:39:04.884Z",
    "createdAt": "2022-05-20T03:39:04.884Z"
}
    ```

* **Error Response:**

  * **Code:** 500 <br />
  * **Code:** 401 <br />
    **Content:**
    ```
    {
    "status": 401,
    "message": "please login first!"
    }
    ```
  * **Code:** 400 <br />
    **Content:**
    ```
    {
    "errMessage": "already exist this bookmark"
    }
    ```
  * **Code:** 404 <br />
    **Content:**
    ```
    {
    "errMessage": "Recipes not found"
    }
    ```
----pos