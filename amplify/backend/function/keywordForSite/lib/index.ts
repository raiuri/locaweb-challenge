import { Event } from "./types";
import mockedData from "./mockData"
import { rejects } from "assert";

export const handler = async (event: Event) => {
    // const ENDPOINT = "https://api.dataforseo.com/v3/keywords_data/google_ads/keywords_for_site/live";
    
    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Basic bWVsaXNzYS1mcmFuY2VzY2FAdHVhbWFlYXF1ZWxhdXJzYS5jb206MmI2ODRhY2Q4NWIxNTAyMA==`
    // };
    
    // const requestBody = [
    //     {
    //         search_partners: false,
    //         target: "locaweb.com.br",
    //         sort_by: "relevance",
    //         include_adult_keywords: false,
    //         location_code: 2076,
    //         language_code: "pt",
    //     }
    // ];

    // const response = await fetch(ENDPOINT, {
    //     method: 'POST',
    //     headers: headers,
    //     body: JSON.stringify(requestBody)
    // });

    // const data = await response.json();
    // return data.tasks[0].result.slice(0, 5);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockedData);
        }, 4000);
    });
}
