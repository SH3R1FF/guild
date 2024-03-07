const conf: {
    appwriteUrl: string;
    appwriteProjectId: string;
    appwriteDatabaseId: string;
    appwriteCollectionId: string;
    appwriteBucketId: string;
  } = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.NEXT_PUBLIC_DATABASE_ID),
    appwriteCollectionId: String(process.env.NEXT_PUBLIC_COLLECTION_ID),
    appwriteBucketId: String(process.env.NEXT_PUBLIC_IMAGES_ID),
  };
  
  export default conf;