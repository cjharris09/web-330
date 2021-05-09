/*--
============================================
; Title: Assignment 8.2
; Author: Chris Harris
; Date: 9 May 2021
; Description: the http-client.js.
;===========================================
*/

export class HttpClient{
    async get(url, params = "" ) {

        //Instantiate a new URL object, supplying it the url parameter and assign the results to the url parameter: url = new URL(url)
        let urls = new URL(url);

        //Instantiate a new URLSearchParams object, supplying it the params parameter and assigning it to the url.search property.
        let paramsObj = new URLSearchParams(params);
        urls.search = paramsObj

        //Create an object literal named res and using the fetch() API passing in the url.toString() variable and specific the request as a GET request. 
        const res = await fetch(urls.toString(),{
            method: "GET",
        })

        //Return the res object literal as JSON.
        return res.json()
    }
}