const admin = require('firebase-admin'); //Firebase Admin SDK
const serviceAccount = require('../firebase-credentials.json'); //Credenciales de Firebase

//Conexión con Firestore para realizar operaciones CRUD
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount) //utiliza las credenciales para autenticar
});

const db = admin.firestore(); //Instancia de Firestore
const usersCollection = db.collection('users'); //Colección de usuarios (referencia)

//Declara una función asíncrona que recibe los datos del usuario.
exports.createUser = async (data) => {

  //Agrega un nuevo documento a la colección users con datos (data) y devuelve una referencia al documento creado.
  const newUser = await usersCollection.add(data);
  //Devuelve un objeto con la id del documento creado y los datos del usuario.
  return { id: newUser.id, ...data };
  /*const data = {
    name: "Juan",
    email: "juan@example.com",
    age: 25
  };
 */

//Se devuelve un objeto así, ya que ... copia los datos de un objeto a otro.
/*
  {
  id: "abc123",
  name: "Juan",
  email: "juan@example.com",
  age: 25
}

*/
};

exports.getAllUsers = async () => {
  const snapshot = await usersCollection.get();
  //Recorre los documentos de la colección y devuelve un array de objetos con la id y los datos de cada documento.
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

/*
  docs es un array de objetos que contiene los documentos de la colección.
 */

/*
   convierte el arrary que devuelve firebase 
   {
     id: 'asasdad211901i2',
     data: {
       name: 'John Doe',
       email: ''
     }
   }

   a esta estrucutura de documentos:
   
     {
       id: '123',
       name: 'John Doe',
       email: '', 
     }
   */

exports.getUserById = async (id) => {
  //Obtener el documento de la colección users con id especificado.
  const userDoc = await usersCollection.doc(id).get();
  //Si el documento existe, devuelve un objeto con id y los datos del documento. De lo contrario, devuelve null.
  return userDoc.exists ? { id: userDoc.id, ...userDoc.data() } : null;
};

exports.updateUser = async (id, data) => {
  //Actualiza el documento de la colección users con id especificado y los datos especificados.
  await usersCollection.doc(id).update(data);
};

exports.deleteUser = async (id) => {
  //Elimina el documento de la colección users con id especificado.
  await usersCollection.doc(id).delete();
};


