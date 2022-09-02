async function getData() {
    // let name = document.getElementById('name').value;
    // let company = document.getElementById('company').value;
    // let leadStatus = document.getElementById('leadStatus').value;

    // console.log(name);
    // console.log(company);
    // console.log(leadStatus);
    // insert new Lead(lastName='MyLead 33',Company='ABC');
    // const response = await fetch('https://cyntexa608-dev-ed.my.salesforce.com/services/data/v55.0/tooling/executeAnonymous/?anonymousBody=insert new Lead(lastName='+name+',Company='+company+')%3B', {
    //     method: 'GET',
    //     headers: {
    //         'Authorization' : 'Bearer 00D5i000003N8dT!AR8AQDiXMIUl.JIzScAhLWDo5bjFkeROUH36NNiztjva1De6Xh6n9K.dPKHiqC2HsQg6lFhazWZLwpZqANKqLPf5ofLctNxd',
    //         'Content-Type': 'application/json',
    //         'Cookie': 'BrowserId=X2jRpQnHEe2vvyvcgNcM-A; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
    //     },
    //     mode: 'no-cors', // no-cors, *cors, same-origin
    // });
    // const myJson = await response.json();
    // console.log(myJson);


    // var settings = {
    //     "url": "https://cyntexa608-dev-ed.my.salesforce.com/services/data/v55.0/tooling/executeAnonymous/?anonymousBody=insert new Lead(lastName='Akbar Ali 34',Company='HAD')%3B",
    //     "method": "GET",
    //     "mode": "no-cors",
    //     "timeout": 0,
    //     "headers": {
    //       "Authorization": "Bearer 00D5i000003N8dT!AR8AQDiXMIUl.JIzScAhLWDo5bjFkeROUH36NNiztjva1De6Xh6n9K.dPKHiqC2HsQg6lFhazWZLwpZqANKqLPf5ofLctNxd",
    //       "Content-Type": "application/json"
    //       //"Cookie": "BrowserId=X2jRpQnHEe2vvyvcgNcM-A; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1"
    //     },
    //   };
      
    //   $.ajax(settings).done(function (response) {
    //     console.log(response);
    //   });

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 00D5i000003N8dT!AR8AQDFOeHL4oacHLnxlpXqzRo7a5eyNcojyc3PD5nI.dJ_pMIwtg4mSzjf4gPlbZD23TBXBiH8Wb3hNThhvyyMPXzBySYRs");
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Cookie", "BrowserId=X2jRpQnHEe2vvyvcgNcM-A; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1");

    var requestOptions = {
       method: 'GET',
       headers: {
        "Authorization": "Bearer 00D5i000003N8dT!AR8AQDFOeHL4oacHLnxlpXqzRo7a5eyNcojyc3PD5nI.dJ_pMIwtg4mSzjf4gPlbZD23TBXBiH8Wb3hNThhvyyMPXzBySYRs",
         "Content-Type": "application/json"
  },
      redirect: 'follow',
      mode: 'no-cors'
    };

  let res =   await fetch("https://cyntexa608-dev-ed.my.salesforce.com/services/data/v55.0/tooling/executeAnonymous/?anonymousBody=System.debug('Test2')%3B", requestOptions)
  console.log(res);
  //     .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
}
