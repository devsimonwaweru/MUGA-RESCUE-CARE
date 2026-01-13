"use client"

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTruckMedical, 
  faBowlFood, 
  faHandsHoldingCircle,
  faPhone,
  faCheckCircle,
  faTimesCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'

export default function ServicesPage() {
  
  // --- STATE FOR QUESTIONNAIRE ---
  const [step, setStep] = useState(0) // 0 = Start, 1 = Q2, 2 = Success/Fail
  const [isEligible, setIsEligible] = useState(false)

  // Question 1: Is it life threatening?
  const handleLifeThreatening = (answer: string) => {
    if (answer === 'yes') {
      setStep(2) // Go to Emergency Warning (Fail state)
      setIsEligible(false)
    } else {
      setStep(1) // Go to Q2
    }
  }

  // Question 2: Are you in Service Area?
  const handleServiceArea = (answer: string) => {
    if (answer === 'yes') {
      setIsEligible(true)
      setStep(3) // Success state -> Show Form
    } else {
      setStep(2) // Go to "Outside Area" (Fail state)
      setIsEligible(false)
    }
  }

  // --- STATE FOR FORM ---
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to Supabase API
    alert("Your help request has been received. Our team will contact you shortly.")
  }

  return (
    <div className="bg-blue-50 min-h-screen pt-20">
      
      {/* Page Header */}
      <section className="bg-[#1d3557] py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get Urgent Help</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          We are here to assist individuals and families facing emergencies. Please answer a few questions to verify your eligibility.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Services Info */}
        <div className="lg:col-span-1 space-y-8">
          <h2 className="text-2xl font-bold text-[#1d3557] mb-6">Our Services</h2>
          
          <div className="bg-white p-6 border border-blue-100 rounded-lg hover:shadow-xl transition">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faTruckMedical} className="text-[#e63946]" />
            </div>
            <h3 className="font-bold text-[#1d3557] mb-2">Medical Emergencies</h3>
            <p className="text-sm text-[#1d3557] opacity-70">Immediate support for critical health conditions.</p>
          </div>

          <div className="bg-white p-6 border border-blue-100 rounded-lg hover:shadow-xl transition">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faBowlFood} className="text-[#e63946]" />
            </div>
            <h3 className="font-bold text-[#1d3557] mb-2">Food & Shelter</h3>
            <p className="text-sm text-[#1d3557] opacity-70">Providing meals and temporary housing.</p>
          </div>

          <div className="bg-white p-6 border border-blue-100 rounded-lg hover:shadow-xl transition">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faHandsHoldingCircle} className="text-[#e63946]" />
            </div>
            <h3 className="font-bold text-[#1d3557] mb-2">Crisis Intervention</h3>
            <p className="text-sm text-[#1d3557] opacity-70">Support for accidents and disasters.</p>
          </div>
        </div>

        {/* RIGHT COLUMN: Screening & Form */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* --- A. ELIGIBILITY QUESTIONNAIRE --- */}
          {!isEligible && step !== 3 && (
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-8 border-[#e63946]">
              
              {/* Header of Questionnaire */}
              <div className="bg-gray-50 p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#1d3557]">Eligibility Check</h3>
                  <span className="bg-[#1d3557] text-white text-xs px-2 py-1 rounded">Step {step + 1}/2</span>
                </div>
              </div>

              <div className="p-8 md:p-10">
                
                {/* Question 1 */}
                {step === 0 && (
                  <div className="animate-in fade-in duration-300">
                    <h2 className="text-2xl font-bold text-[#1d3557] mb-4">Is this a life-threatening emergency?</h2>
                    <p className="text-gray-600 mb-8">If this person cannot breathe, is bleeding heavily, or unconscious, please contact emergency services immediately.</p>
                    
                    <div className="flex flex-col md:flex-row gap-4">
                      <button 
                        onClick={() => handleLifeThreatening('yes')}
                        className="flex-1 bg-[#e63946] text-white py-3 rounded-lg font-bold hover:bg-red-700 transition flex items-center justify-center gap-2"
                      >
                        <FontAwesomeIcon icon={faPhone} />
                        Yes, Call 911
                      </button>
                      <button 
                        onClick={() => handleLifeThreatening('no')}
                        className="flex-1 border-2 border-[#1d3557] text-[#1d3557] py-3 rounded-lg font-bold hover:bg-[#1d3557] hover:text-white transition flex items-center justify-center gap-2"
                      >
                        No, Proceed
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Question 2 */}
                {step === 1 && (
                  <div className="animate-in fade-in duration-300">
                    <h2 className="text-2xl font-bold text-[#1d3557] mb-4">Are you located in our service area?</h2>
                    <p className="text-gray-600 mb-8">We currently operate in Tigania West, Meru County and specific partner regions.</p>
                    
                    <div className="flex flex-col md:flex-row gap-4">
                      <button 
                        onClick={() => handleServiceArea('no')}
                        className="flex-1 border-2 border-gray-300 text-gray-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
                      >
                        No
                      </button>
                      <button 
                        onClick={() => handleServiceArea('yes')}
                        className="flex-1 bg-[#1d3557] text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2"
                      >
                        Yes, I am
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Fail State (Life Threatening or Outside Area) */}
                {step === 2 && (
                  <div className="text-center animate-in fade-in duration-300">
                    <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                      <FontAwesomeIcon icon={faTimesCircle} className="text-4xl text-[#e63946]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1d3557] mb-4">Request Not Eligible</h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Based on your answers, we cannot process this specific request through this form. Please refer to local emergency services or authorities.
                    </p>
                    <button 
                      onClick={() => (window.location.href = "/contact")}
                      className="bg-gray-200 text-[#1d3557] px-6 py-2 rounded-full font-bold hover:bg-gray-300 transition"
                    >
                      Contact Support
                    </button>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* --- B. ACTUAL FORM (Only shows if Eligible) --- */}
          {isEligible && (
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-8 border-[#1d3557]">
              <div className="bg-green-50 p-6 border-b border-green-200 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-green-800">Eligible to Request Help</h3>
                  <p className="text-sm text-green-700">Please fill out details below.</p>
                </div>
                <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-green-600" />
              </div>              
              <div className="p-8 md:p-10">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#1d3557] mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1d3557] mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]"
                        placeholder="+254..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#1d3557] mb-2">Location (Ward/Village)</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]"
                        placeholder="e.g. Akachiu, Ntuluni"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1d3557] mb-2">Type of Assistance</label>
                      <select className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]">
                        <option>Medical Emergency</option>
                        <option>Food & Shelter</option>
                        <option>Crisis/Accident</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1d3557] mb-2">Describe Situation</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]"
                      placeholder="Please describe your emergency..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#e63946] text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-lg"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Emergency Strip */}
          <div className="bg-[#e63946] p-6 text-white rounded-lg text-center shadow-lg mt-4">
            <p className="font-bold text-lg">Need to speak to someone?</p>
            <p className="opacity-90">Call our Hotline: <span className="font-extrabold ml-2">[Insert Number]</span></p>
          </div>

        </div>
      </div>
    </div>
  )
}