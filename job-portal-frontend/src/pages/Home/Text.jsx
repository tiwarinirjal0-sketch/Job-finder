import { useRef } from "react";



export default function TextContainer() {
    const fileRef = useRef(null)
    

    const handleUpload = (e)=>{
        console.log(e.target.files[0])
    }


  return (
    
    <div className="text-center px-4 py-10">
      
      <input
       type="file"
       className="hidden"
       ref={fileRef}
       onChange={handleUpload}


        />
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
        🌐 Hiring worldwide
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 mb-5">
        <span className="text-[#4A78ED]">Explore new</span> job vacancies
        <br />all over the world
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-8">
        Our platform features more than 1.2 million job vacancies worldwide,
        connecting you with employers who value your skills and experience.
      </p>

      {/* Stat Cards */}
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        {[
          { icon: "💼", value: "1.2M+", label: "Job listings" },
          { icon: "🏢", value: "80K+",  label: "Companies" },
          { icon: "📍", value: "190+",  label: "Countries" },
        ].map(({ icon, value, label }) => (
          <div key={label} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 min-w-[140px]">
            <span className="text-xl">{icon}</span>
            <div>
              <div className="text-base font-semibold text-gray-900">{value}</div>
              <div className="text-xs text-gray-500">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <button className="inline-flex items-center gap-2 bg-[#4A78ED] hover:bg-[#3a68dd] text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors">
          🔍 Browse jobs
        </button>
        <button 
        onClick={()=>fileRef.current.click()}
        className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-sm font-medium px-6 py-2.5 rounded-lg border border-gray-300 transition-colors">
          📄 Upload resume
        </button>
      </div>

    </div>
  );
}