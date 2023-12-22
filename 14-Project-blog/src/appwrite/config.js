import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../Confo/conf";

export class DBservice{
    // this is having client and its database with bucket
    client = new Client();
    databases;
    bucket;

    //creating the constructor 
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        // now creating its database 
        this.databases = new Databases(this.client)
        // creating the bucket 
        this.bucket = new Storage(this.client)

    }

    //and its some database operations 
    async createPost({title , slug , content , featuredimg , status , userId}){
        try {
            await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID,
                {
                    title, 
                    slug, 
                    content,
                    featuredimg, 
                    userId
                }
            )            
        } catch (error) {
            console.log("Error Occured while Creating the post" , error)
        }
    }
    
    async updatePost(slug, {title, content, featuredimg,status}) {
        try{
            return await  this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimg,
                    status
                }
            )
        }   
        catch(error){
                console.log("Error Occured while updating document " , error )
        }     
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
                
            )
        } catch (error) {
            console.log("Error Occured while fetching post ", error);
            return false
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Error Occured while deleting post ", error);      
            return false
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Error Occured while Fetching all posts " ,error)
        }
    }

    async uploadFile(fileId){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Error Occured while Uploading the document " , error);
        }
    }

    getFilePreview(fileId){
            return  this.bucket.getFilePreview(
                conf.appwriteBucketId,
                 fileId   
            ) 
    }


    deleteFile(fileId){
        return this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
    }

}



// creating the instance and exporting it defaultly 
const dbService = new DBservice();
export default dbService;   