{
  "users": [
    {
      "_id": ObjectId("98678787jriejf309f09f309fj03"),
      "username": "usuario1",
      "password": "hashed_password",
      "name": "Juan",
      "paternal": "Perez",
      "maternal": "Gomez",
      "phone": 123456789,
      "birthday": ISODate("1990-01-01"),
      "house_id": ObjectId("875647gyfughiuhg6f65"),
      "roles": [ObjectId("yug65fg5r87h980u0huhy8h")]  
    }
  ],
  "houses": [
    {
      "_id": ObjectId("875647gyfughiuhg6f65"),
      "description": "Casa en el centro",
      "photo": "photo_url",
      "address": {
        "street": "Av. Principal",
        "city": "Ciudad X",
        "zip": "12345"
      }
    }
  ],
  "visits": [
    {
      "_id": ObjectId("ygh98hf894hf09f978t8g"),
      "date": ISODate("2024-03-04T10:00:00Z"),
      "num_person": 2,
      "description": "Visita de inspección",
      "password": "hashed_password",
      "person_name": "Pedro López",
      "observation": "Todo en orden",
      "house_id": ObjectId("875647gyfughiuhg6f65"),
      "visit_type_id": ObjectId("ufhfu934f9h309df3432"),
      "evidences": [
        {
          "name": "Foto 1",
          "image": "image_url"
        },
        {
          "name": "Foto 2",
          "image": "image_url_2"
        }
      ]
    }
  ],
  "visit_types": [
    {
      "_id": ObjectId("ufhfu934f9h309df3432"),
      "name": "Inspección"
    }
  ],
  "roles": [
    {
      "_id": ObjectId("yug65fg5r87h980u0huhy8h"),
      "name": "Admin"
    }
  ],
  "authentication": [
    {
      "_id": ObjectId("uvh4e8gh03f'j'9324jf02ij0"),
      "user_id": ObjectId("98678787jriejf309f09f309fj03"),
      "role_id": ObjectId("yug65fg5r87h980u0huhy8h")
    }
  ]
}
