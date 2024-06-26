import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);

    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionID,
                slug,
                { title, content, featuredImage, status, userId }

            )
        } catch (error) {
            console.log("appwrite error: createpost", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionID,
                slug,
                { title, content, featuredImage, status }
            )
        } catch (error) {
            console.log("appwrite error: updatepost", error);
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionID,
                slug,
            )
            return true;
        } catch (error) {
            console.log("appwrite error: deletepost", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionID,
                slug,
            )
        } catch (error) {
            console.log("appwrite error: getpost", error);
            return false;
        }
    }


    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionID,
                queries,

            )
        } catch (error) {
            console.log("appwrite error: getposts", error);
            return false;
        }
    }

    //file related service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("appwrite error: uploadfile", error);
            return false;
        }

    }

    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("appwrite error: deletefile", error);
            return false;
        }
    }

    async filePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketID,
            fileId,
        )
    }

}





const service = new Service()
export default service

