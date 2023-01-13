// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    typescript: {
        strict: true
    },

    app: {
        head: {
            title: "Admin",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                {charset: "utf-8"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {hid: "description", name: "description", content: ""},
                {name: "format-detection", content: "telephone=no"},
            ],
            link: [
                {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
                {
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
                    rel: "stylesheet",
                    type: "text/css",
                    integrity:
                        "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",
                    crossorigin: "anonymous",
                },
                {
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
                    rel: "stylesheet",
                    integrity:
                        "sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",
                    crossorigin: "anonymous",
                },

                {href: '/assets/css/sb-admin-2.min.css', rel: "stylesheet"},

                {
                    href: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js",
                    body: true,
                },

                {
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                    integrity:
                        "sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN",
                    crossorigin: "anonymous",
                    body: true,
                },

            ],

            script: [
                {
                    src: "/assets/js/vendor/jquery/jquery.min.js",
                    body: true
                },
                {
                    src: "/assets/js/vendor/bootstrap/js/bootstrap.bundle.min.js",
                    body: true
                },
                {
                    src: "/assets/js/vendor/jquery-easing/jquery.easing.min.js",
                    body: true
                },
                {
                    src: "/assets/js/sb-admin-2.min.js",
                    body: true
                },

                {
                    src: "/assets/js/vendor/chart.js/Chart.min.js",
                    body: true
                },

                {
                    src: "/assets/js/demo/chart-area-demo.js",
                    body: true
                },

                {
                    src: "/assets/js/demo/chart-pie-demo.js",
                    body: true
                },

            ],
        },
    },


    runtimeConfig: {
        // The private keys which are only available within server-side
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        // Keys within public, will be also exposed to the client-side
        public: {
            FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        }
    }

})


