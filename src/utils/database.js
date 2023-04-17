import {db} from "../firebase"
import { doc, getDoc, getDocs, setDoc, query, where, collection} from 'firebase/firestore';

const usersRef = collection(db, "users");
const invoicesRef = collection(db, "invoices");
const notificationsRef = collection(db, "notifications");

export const setUserData = async (userUID, form) => {
    await setDoc(doc(db, "users", userUID), {
        name: form.name,
        nif: form.nif,
        phoneNumber: form.phoneNumber,
        category: form.category,
        email: form.email,
        address: {
                street: form.address,
                apartment: form.apartment,
                postalCode: form.postalCode,
                city: form.city,
                country: form.country
                }
    });
}

export const getUserData = async (userUID) => {
    const docSnap = await getDoc(doc(db, "users", userUID))
    return docSnap.data();
}

export const getSearch = async (searchCollection, searchField, searchKey) => {
    const q = query(collection(db, searchCollection), where(searchField, "==", searchKey));
    const querySnap = await getDocs(q);
    const docsArray = querySnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    return docsArray;
}

export const getUserInvoices = async (userUID) => {
    const q = query(invoicesRef, where("buyerId", "==", userUID, "or", "sellerId", "==", userUID))
    const querySnap = await getDocs(q);
    const docsArray = querySnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    return docsArray;
}

export const addInvoice = async (sellerUID, buyerUID, invoice) => {
    
} 