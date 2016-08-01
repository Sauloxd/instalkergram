# InStalkerGram

#### Use Cases
 > As a User I want to be able to search for a Hashtag, and save the result for later access (or stalking); \
 > As a User I want to be able to delete the photo from my collection.

## Backend
The REST service will:
  - POST a *category* to Create a category;
  - POST the hashtag and the imgURl to my Mongo Instance in https://mlab.com/ to a given Category;
  - GET all images urls and its unique hastag for a given category;
  - DELETE a stalking item for a given hashtag;

 ## MongoDb
 ```
  {
    categoryid: 0,
    category: 'saulo',
    stalking: [
    {
      hashtag: 'feriasnamontanha',
      url: 'https://scontent-gru2-1.cdninstagram.com/t51.2885-15/e35/13715313_617595311736804_789388169_n.jpg?ig_cache_key=MTMwNjk4NzAyMzY1NTAzNTY1Ng%3D%3D.2'
    },
    {
      hashtag: 'chocolate',
      url: 'https://scontent-gru2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13721190_1180108585378958_871498329_n.jpg?ig_cache_key=MTMwNzQzNDE3ODUxNDQ3NzQ2NQ%3D%3D.2'
    }
    ]
  }
  ```
## Frontend
 - The user will select from a category (home)
 - Will be redirected to an album with all photos and respectives hashtags (album)
 - The user can delete a photo from the album
 - The user can go back and change the category
