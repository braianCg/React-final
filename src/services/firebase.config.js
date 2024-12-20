import { initializeApp } from 'firebase/app';  
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';  

const firebaseConfig = { 
};  

const app = initializeApp(firebaseConfig);  
const db = getFirestore(app);  

export const getProducts = async (categoryId = null) => {  
    try {  
    const productsRef = collection(db, 'products');  
    const q = categoryId   
    ? query(productsRef, where('category', '==', categoryId))  
    : productsRef;  
    
    const querySnapshot = await getDocs(q);  
    return querySnapshot.docs.map(doc => ({  
        id: doc.id,  
        ...doc.data()  
    }));  
} catch (error) {  
    console.error('Error fetching products:', error);  
    throw error;  
}  
};  
export const getProductById = async (productId) => {  
try {  
    const docRef = doc(db, 'products', productId);  
    const docSnap = await getDoc(docRef);  
    
    if (docSnap.exists()) {  
    return { id: docSnap.id, ...docSnap.data() };  
    }  
    throw new Error('Product not found');  
} catch (error) {  
    console.error('Error fetching product:', error);  
    throw error;  
}  
};  