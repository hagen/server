module.exports = {

    google : {
        clientID      : '622549728825-of3eulqv67r3uf0a4g5gmf8o2pf064ek.apps.googleusercontent.com',
        clientSecret  : 'Nl2gm4hau8kims6X3Y0ZKDak',
        // callbackURL        : 'http://localhost:8080/auth/google/callback',
        // callbackURLConnect : 'http://localhost:8080/connect/google/callback'
        callbackURL        : 'http://hagen.forefrontanalytics.com.au/auth/google/callback',
        callbackURLConnect : 'http://hagen.forefrontanalytics.com.au/connect/google/callback'
    },
    twitter : {
        consumerKey      : 'NmNJhNviadiR6CAxhAENmeQTr',
        consumerSecret  : '7WLn0fRgxxFgqkpl77ca9wMIHfpYHIZMJcItl6ZHZ9lGsoLIQf',
        // callbackURL        : 'http://localhost:8080/auth/twitter/callback',
        // callbackURLConnect : 'http://localhost:8080/connect/twitter/callback'
        callbackURL        : 'http://hagen.forefrontanalytics.com.au/auth/twitter/callback',
        callbackURLConnect : 'http://hagen.forefrontanalytics.com.au/connect/twitter/callback'
    },
    linkedin : {
        clientID      : '75dtqjtvsus2km',
        clientSecret  : 'sMShpaelT6H0t8Wa',
        // callbackURL        : 'http://localhost:8080/auth/linkedin/callback',
        // callbackURLConnect : 'http://localhost:8080/connect/linkedin/callback'
        callbackURL        : 'http://hagen.forefrontanalytics.com.au/auth/linkedin/callback',
        callbackURLConnect : 'http://hagen.forefrontanalytics.com.au/connect/linkedin/callback'
    },
    scn : {
        path : '/auth/scn/callback',
				entryPoint : 'https://accounts.sap.com/saml2/idp/sso',
				issuer : 'passport-saml'
    },
    braintree : {
      merchantId : "t3827896pz26dd73",
      publicKey : "cyjcxxq2kpxsf6v8",
      privateKey : "eaeb202c5d0f1dd10451d2f4f40ddf04"
    }

};
