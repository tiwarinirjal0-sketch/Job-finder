import dotenv from "dotenv";
dotenv.config({ path: "../.env" });


import axios from "axios";
import * as cheerio from "cheerio";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGO_URI)

export async function Scraper() {
    await client.connect()

    const db = client.db("practiceDB")
    const users = db.collection("users")   

    const jobs = []

    const res = await axios.get("https://www.jobsnepal.com/");

    const $ = cheerio.load(res.data);

   $(".media").each((i, el) => {

        const title = $(el).find("h4.job-title a").first().text().trim();
        const link = $(el).find("h4.job-title a").first().attr("href");

        const company = $(el).find("h3.job-company").text().trim();
        const location = $(el).find("span.location").text().trim();
        let logo =
            $(el).find("img").attr("data-src") ||
            $(el).find("img").attr("src");

        if (logo && !logo.startsWith("http")) {
            logo = "https://www.jobsnepal.com" + logo;
        }

        if (title && company) {
            jobs.push({ title, company, logo, link,location });
        }
    });
    
    //  await users.insertMany(jobs)

     console.log(jobs)
    
    

  
}
Scraper()