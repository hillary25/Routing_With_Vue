export default {
    // Setting up template, this one is for the home page
    // Always wrap everything in template structure
    template: `
    <section>
        <h1>You're on the main page!</h1>

        <form id="my-form">
            <label for="username">Enter Username:</label>
            <input v-model="uname" type="text" name="username" required placeholder="Username">

            <label for="password">Enter Password:</label>
            <input v-model="pword" type="password" name="password" required placeholder="Password">

            <input @click="submitData" type="submit" value="Submit">

        </form>

    </section>
    `,

    data: function() {
        return {
            // Storing values inside these variables, whatever we type in the browser window
            // Use this for hackathon
            uname: "",
            pword: ""
        }
    },

    methods: {
        submitData() {
            // Hit an api with a fetch call
            // Refer to the mailForm example from lasy semester -> the node mailer set up
            

            debugger;
            // Then what comes after is a fetch statement to catch the data the user put in username and password
        }
    }
}