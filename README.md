# Billing App

## Running the app

``` npm install ```

This will install all the required dependency for the app. Including selenium webdriver which is used to run the e2e test.

## To run the app in dev mode

```npm run dev```

The app will run on port - ```3000``` with redux devtools.

## To run the e2e test

```npm run e2e:prod```

This fires up a tiny server where the app is hosted locally.
And runs the e2e test against it. Before running the e2e test
it also produces a prod build.

```npm run e2e```

This runs the e2e test but does not fire up a server. To be used in
dev mode.

## To run the unit test

```npm run test```


## To run lint

``` npm run lint```


## Production Builds

For production build.

``` npm run build ```

This builds all the necessary files for ```gh-pages``` in github and outputs them in the ```docs``` folder. Once the changes are committed and pushed 
to master the files are served from ```docs``` folder.

