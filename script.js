import { Client, Account, ID } from "https://cdn.jsdelivr.net/npm/appwrite@14.0.1/+esm";

const PROJECT_ID = "6ac105a600008a2bf4f5";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

const account = new Account(client);

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log("SIGNUP EMAIL:",email);
        console.log("SIGNUP NAME:",name);

        

        try {
            await account.create(
                 ID.unique(),
                 email,
                 password,
                 name
    );

            window.location.href = "dashboard.html";

        } catch (error) {
            alert(error.message);
        }
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log("EMAIL:", email);
console.log("PASSWORD LENGTH:", password.length);

        try {
            await account.createEmailPasswordSession(email,password);


            window.location.href = "dashboard.html";

        } catch (error) {
            alert(error.message);
        }
    });
}