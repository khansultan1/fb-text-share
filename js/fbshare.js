 var AccessToken;
 var PageToken;
 var msg=document.getElementById("msg");
          window.fbAsyncInit = function () {
              FB.init({
                  appId: '',//App ID Given by facebook
                  xfbml: true,
                  version: 'v2.0',
                  channelUrl: '', // Channel File URL
                  status: true, // check login status
                  cookie: true, // enable cookies to allow the server to access the session
                  xfbml: true, // parse XFBML
                  oauth: true
              });
          };

          (function (d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) { return; }
              js = d.createElement(s); js.id = id;
              js.src = "http://connect.facebook.net/en_US/sdk.js";
              fjs.parentNode.insertBefore(js, fjs);
          } (document, 'script', 'facebook-jssdk'));


          function Login() {

              FB.login(function (response) {
                  if (response.authResponse) {
                      //getUserInfo(); // Get User Information.
                      console.log(response.authResponse.accessToken);
                      AccessToken = response.authResponse.accessToken;
                      pagetoken();
					  

                  } else {
                      console.log('Authorization failed.');
                  }
              }, { scope: 'email,manage_pages,publish_actions,publish_stream' });

          }



          function pagetoken() {
              FB.api('me/', function (response) {
                  console.log("pagetoken");
                  //createAlbum(response.data[0].id, response.data[0].access_token);
                  console.log(response);
				createAlbum(response.id,AccessToken)
              });
          }

          function createAlbum(pageid, token) {

              FB.api(
						pageid + "/albums",
						  "POST",
						  {
						  name: "hello",
						  message: msg,
						  access_token: token
						  },
						function (response) {
							console.log(response,"response");
							if (response && !response.error) {
								/* handle the result */
							}
						}
					);
          }
		  
		 