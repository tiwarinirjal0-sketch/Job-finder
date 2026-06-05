import Description from "./desriptioncard";



export default function ReviewPage(){
      
      const SkillCard = ({count, type})=>{
        return(
          <div className="w-[25%] h-full bg-amber-100 flex flex-col justify-center items-center rounded-xl ">
            <h1>{count}</h1>
            <p>{type}</p>
          </div>
        )
      }
      
      const WorkExperienceCard = ({role, company, period, description})=>(
        <div className="flex flex-col gap- mt-1 ">
          <h1>{role}</h1>
          <p>{company}</p>
          <p>{period}</p>
          <p>{description}</p>
        </div>
      )
      
      const jobDetails = [
        {
            "basics": {
              "name": "Jane Doe",
              "title": "Senior Software Engineer",
              "avatar_initials": "JD",
               "contact_details" : [

                {"type":"email","detail":"kadjfkaj@gmial.om"},
                {"type":"phone","detail":"974880043"},
                {"type":"location", "detail":"butwal"},
                

               ]
            },

            "stats": [
              {"count":"7","type":"exp"},
              {"count":"3","type":"Positions"},
              {"count":"10","type":"Skills"},
              {"count":"1","type":"Degrees"}
            ],

            "experience": [
              {
                "role": "Staff Engineer",
                "company": "Stripe",
                "period": "Jan 2021 – Present",
                "description": "Ledy migration of payment processing pipeline..."
              }
            ],

            "skills": [
              { "label": "Python", "category": "technical" },
              { "label": "System design", "category": "domain" },
              { "label": "Team leadership", "category": "soft" },
              { "label": "AWS", "category": "tool" }
            ],

            "education": [
              {
                "degree": "BSc Computer Science",
                "school": "MIT",
                "year": "2016",
                "gpa": "3.9",
                "honors": "Summa Cum Laude"
              }
            ],

            "certifications": [
              { "name": "AWS Solutions Architect – Professional" },
              { "name": "Google Cloud Professional Data Engineer" }
            ],

            "languages": [
              { "name": "English", "proficiency": "Native", "level": 100 },
              { "name": "Spanish", "proficiency": "Fluent", "level": 75 },
              { "name": "French", "proficiency": "Basic", "level": 35 }
            ],

            "projects": [
              {
                "name": "open-sync",
                "type": "github",
                "description": "Real-time file sync library · 2.4k stars"
              },
              {
                "name": "Distributed tracing at scale",
                "type": "article",
                "description": "Blog post · 18k reads"
              }
            ]
        }
      ]
   

      return(
        <>
         {jobDetails.map(item=>(<div className="w-full min-h-screen bg-mauve-700 grid gap-2  grid-cols-3">

            <div className="bg-red-400 col-span-3 rounded-2xl">
                <Description name={item.basics.name} role={item.basics.title} avatar_initials={item.basics.avatar_initials} contact_details={item.basics.contact_details}/>
            </div>

            <div className="bg-red-400  col-span-3 rounded-2xl flex flex-col gap-2 px-8 py-2">
              <h1>Summary</h1>
              <p>
                A results-driven software engineer with 7+ years building scalable backend systems and leading cross-functional teams. Passionate about clean architecture, developer experience, and shipping products people love.
              </p>
            </div>

            <div className="bg-red-400 col-span-3 rounded-2xl flex gap-2 p-5">
               {item.stats.map(item=>(
                  <SkillCard count={item.count} type={item.type} />
               ))}
              
            </div>

            <div className="bg-red-400 col-span-2 row-span-2 rounded-2xl p-4">

               <h1>Work Experience</h1>

              <ul className="list-disc"> 
                 <li>
                {item.experience.map(item=>(
                  <WorkExperienceCard role={item.role} company={item.company}  period={item.period} description={item.description}  />
                ))}
                </li>
              </ul>
               
            </div>

            <div className="bg-red-400 rounded-2xl px-4 py-2 flex flex-col gap-2">
              <h3>Education</h3>
              <div>
                <h1>Bsc Computer Science</h1>
                <h5>MIT.2016</h5>
                <p>GPA 3.9 </p>
              </div>
              
            </div>

            <div className="bg-red-400 rounded-2xl flex flex-col gap-2 p-4">
              <h1>Certifications</h1>
              <ul className="flex flex-col gap-1 list-disc  pl-5 ">
                <li>AWS SOLUTIONS ARCHITECT</li>
                <li>Google cloud data</li>
              </ul>
            </div>
            <div className="bg-red-400 col-span-2 row-span-2 rounded-2xl p-4">
               <h1>Skills</h1>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-sm px-3 py-1 rounded-full border
                        ${skill.category === "technical" ? "bg-blue-100 text-blue-900 border-blue-300" : ""}
                        ${skill.category === "domain" ? "bg-green-100 text-green-900 border-green-300" : ""}
                        ${skill.category === "soft" ? "bg-purple-100 text-purple-900 border-purple-300" : ""}
                        ${skill.category === "tool" ? "bg-gray-100 text-gray-700 border-gray-300" : ""}
                      `}
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
            </div>
            <div className="bg-red-400 rounded-2xl p-4">
              <h1>Languages</h1>
              {item.languages.map((lang, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{lang.name}</span>
                    <span className="text-xs text-gray-500">{lang.proficiency}</span>
                  </div>
                  <div className="h-1 rounded-full bg-gray-200">
                    <div
                      className="h-1 rounded-full bg-blue-400"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-red-400 rounded-2xl"></div>
            

         </div>))}
        </>
      )
}