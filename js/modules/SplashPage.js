export default {
    // Setting up template, this one is for the splash page
    // Renders in router view in main of index.html
    // DYNAMIC INFORMATION GOES IN THIS TEMPLATE!!!
    // Header, footer and other stuff that doesn't change stays in index.html

    template: `
    <section>
        <h1>{{ message }}</h1>
        <button @click="registerUser">Register for awesome swag!</button>
    </section>
    `,

    data: function() {
        return {
            message: "Welcome to my super awesome app!"
        }
    },

    methods: {
        registerUser() {
            console.log('clicked register button');
        }
    }
}