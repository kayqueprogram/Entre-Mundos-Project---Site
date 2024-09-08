import { collection,doc,getDocs,getDoc} from 'firebase/firestore';
import { db } from 'services/firebase-config';

//arrumar para mais security :) 
//lidar com erro 

async function getBlogPosts (){
    const postsCollectionRef = collection(db,"blog");
    const response = await getDocs(postsCollectionRef);
    const data = await response.docs?.map((doc)=> ({...doc.data(),id:doc.id}))
    return data;
}

async function getBlogPost(id:string) {
   const postRef = doc(db,'blog',id);
   const postDoc = await getDoc(postRef);
   return postDoc.data()

}



export default {getBlogPosts,getBlogPost};