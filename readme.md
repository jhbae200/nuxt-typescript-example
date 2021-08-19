# Nuxt typescript example
simple nuxt typescript example 

# config env
`env/${process.env.ENV}.env`

## Exposing Environment Variables to the Browser
I got the idea here.
https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser  


In order to expose a variable to the browser you have to prefix the variable with NUXT_PUBLIC_. For example:
```
// env/local.env
NUXT_PUBLIC_ANALYTICS_ID=abcdefghijk
```

in vue file
```
middleware({$config}) {
    console.log($config.NUXT_PUBLIC_TEST);
}
```
