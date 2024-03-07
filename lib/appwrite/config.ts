import conf from '@/lib/conf/conf';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createProject ( userId:string, title:string, description:string, imageUrl:string, categoryId:string, url:string, codeUrl:string){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                userId,
                {
                    title,
                    description,
                    imageUrl,
                    categoryId,
                    url,
                    codeUrl
                }
            )
        } catch (error) {
            console.log("Appwrite sercice :: createProject :: error", error);
        }
    }  
}

const service = new Service()
export default service