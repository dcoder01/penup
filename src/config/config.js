const config ={
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    //string because if only numbers are ther ein the id it can be treated as a number this is cause issue.
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASEID),
    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}


export default config