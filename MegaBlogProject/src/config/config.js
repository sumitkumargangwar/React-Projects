import conf from "../conf/conf";
import { Client, ID, Storage, Query, Databases } from "appwrite";

export class Serivce {
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteEndpointURL)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({slug,userID,featuredImage,content,status,title}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    featuredImage,
                    userID,
                    status,
                    content,
                }
            )
        } catch (error) {
            console.log("Error :: Create Post ::", error);
            
        }
    }

    async updatePost(slug,{userID,featuredImage,content,status,title}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    featuredImage,
                    userID,
                    status,
                    content,
                }
            )
        } catch (error) {
            console.log("Error :: Updadte Post :: ", error);
            
        }
    }

    async deletePoste(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Error :: Delete Post :: ", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug,
            )
        } catch (error) {
            console.log("Error :: Get Posr :: ",error);
            return false
        }
    }

    async getPosts([queries = (Query.equal("status", "active"))]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Error :: Get Posts :: ", error);
            return false;
        }
    }

    async fileUpload(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Error :: File Upload :: ",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            console.log("Error :: File Delete",fileId);
            return false;
        }
    }

    getFilePreview(fileId){
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId,
            )    
    }
}

const service = new Serivce()
export default service;