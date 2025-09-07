import { Client, Account, ID } from "appwrite";
import conf from "../conf.js";

// Not For Quality Code
// import { Client, Account, ID } from "appwrite";

// const client = new Client()
//   .setEndpoint("https://fra.cloud.appwrite.io/v1") // Your API Endpoint
//   .setProject("68ac43b4001272c8239b"); // Your project ID

// const account = new Account(client);

// const user = await account.create(ID.unique(), "email@example.com", "password");

// For Quality Code
export class AuthService {
  client = new Client();
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
