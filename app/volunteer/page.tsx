"use client"

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHandHoldingHeart,
  faUser, 
  faMoneyBillWave,
  faCheckCircle,
  faTimesCircle,
  faIdCard,
  faUsers,
  faScaleBalanced
} from '@fortawesome/free-solid-svg-icons'

export default function VolunteerPage() {  
  // --- STATE FOR PRE-SCREENING ---
  const [showForms, setShowForms] = useState(false)
  const [screeningType, setScreeningType] = useState<'volunteer' | 'donor' | null>(null)
  const [step, setStep] = useState(0)
  const [passed, setPassed] = useState(false)
  const [failReason, setFailReason] = useState('')

  // --- VOLUNTEER FILTER LOGIC ---
  const startVolunteerCheck = () => {
    setScreeningType('volunteer')
    setStep(1)
  }

  const handleVolunteerAnswers = (stepNum: number, answer: string) => {
    // Step 1: Age Check
    if (stepNum === 1) {
      if (answer === 'under18') {
        setStep(3)
        setFailReason("For safety and liability reasons, we require volunteers to be 18 years or older.")
      } else {
        setStep(2)
      }
    }
    // Step 2: Commitment Check
    if (stepNum === 2) {
      if (answer === 'unsure') {
        setStep(3)
        setFailReason("We are looking for individuals who are fully committed to our mission of saving lives.")
      } else {
        setStep(3)
      }
    }
    // Step 3: Agreement Check
    if (stepNum === 3) {
      if (answer === 'disagree') {
        // Keep visual fail, do not pass
        setFailReason("Agreement to our Code of Conduct is required to maintain team legitimacy.")
      } else {
        setPassed(true)
        setShowForms(true)
      }
    }
  }

  // --- DONOR FILTER LOGIC ---
  const startDonorCheck = () => {
    setScreeningType('donor')
    setStep(1)
  }

  const handleDonorAnswers = (answer: string) => {
    // Step 1: Voluntary Check
    if (step === 1) {
      if (answer === 'forced') {
        setStep(3)
        setFailReason("We believe donations must be given freely, without coercion, to ensure legitimacy.")
      } else {
        setStep(2)
      }
    }
    // Step 2: Transparency Check
    if (step === 2) {
      if (answer === 'unsure') {
        setStep(3)
        setFailReason("We ask that you trust our process of transparency and accountability.")
      } else {
        setPassed(true)
        setShowForms(true)
      }
    }
  }

  // --- FORM SUBMIT HANDLER ---
  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Your application has been received. Our coordinator will contact you shortly.")
  }

  return (
    <div className="bg-blue-50 min-h-screen pt-20">
      
      {/* Page Header */}
      <section className="bg-[#1d3557] py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Join Our Mission</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Volunteer your time or donate resources. Every action helps save a life.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT COLUMN: SERVICES INFO --- */}
        <div className="lg:col-span-1 space-y-8">
          <h2 className="text-2xl font-bold text-[#1d3557] mb-6">Our Services</h2>
          
          <div className="bg-white p-6 border border-blue-100 rounded-lg hover:shadow-xl transition">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faUser} className="text-[#e63946]" />
            </div>
            <h3 className="font-bold text-[#1d3557] mb-2">Volunteer</h3>
            <p className="text-sm text-[#1d3557] opacity-70">Join our global team of rescue workers and aid providers.</p>
          </div>

          <div className="bg-white p-6 border border-blue-100 rounded-lg hover:shadow-xl transition">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-[#e63946]" />
            </div>
            <h3 className="font-bold text-[#1d3557] mb-2">Donate</h3>
            <p className="text-sm text-[#1d3557] opacity-70">Financial support fuels our emergency relief operations.</p>
          </div>
        </div>

        {/* --- MIDDLE & RIGHT COLUMNS: SCREENING & FORM --- */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* --- A. PRE-SCREENING PORTAL --- */}
          {!showForms && (
            <div className="mb-16 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif font-bold text-[#1d3557] mb-8 text-center">
                    Verification Portal
              </h2>
              <p className="text-center text-[#1d3557] mb-8 opacity-80">
                To ensure the safety of our community and quality of our operations, please complete a quick verification check.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                
                {/* Volunteer Card */}
                <div className="bg-white rounded-lg shadow-2xl p-8 border-t-8 border-[#e63946] hover:shadow-3xl transition cursor-pointer group">
                  <div className="text-center">
                    <FontAwesomeIcon icon={faUsers} className="text-6xl text-[#1d3557] mb-6 group-hover:text-[#e63946] transition" />
                    <h3 className="text-2xl font-bold mb-4">I want to Volunteer</h3>
                    <p className="text-gray-600 mb-6 text-sm">
                      Commit to on-ground support, rescue operations, and community aid.
                    </p>
                    <button 
                      onClick={startVolunteerCheck}
                      className="w-full bg-[#1d3557] text-white py-4 rounded-lg font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2"
                    >
                      Verify Identity
                      <FontAwesomeIcon icon={faIdCard} />
                    </button>
                  </div>
                </div>

                {/* Donor Card */}
                <div className="bg-white rounded-lg shadow-2xl p-8 border-t-8 border-[#e63946] hover:shadow-3xl transition cursor-pointer group">
                  <div className="text-center">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-6xl text-[#1d3557] mb-6 group-hover:text-[#e63946] transition" />
                    <h3 className="text-2xl font-bold mb-4">I want to Donate</h3>
                    <p className="text-gray-600 mb-6 text-sm">
                      Make a financial contribution to support our emergency relief efforts.
                    </p>
                    <button 
                      onClick={startDonorCheck}
                      className="w-full bg-[#e63946] text-white py-4 rounded-lg font-bold hover:bg-red-700 transition flex items-center justify-center gap-2"
                    >
                      Verify as a donor
                      <FontAwesomeIcon icon={faUser} />
                    </button>
                  </div>
                </div>
              </div>

              {/* --- QUESTIONNAIRE WIZARD --- */}
              {screeningType && !passed && (
                <div className="max-w-3xl mx-auto mt-12 bg-white rounded-lg shadow-xl border-t-8 border-[#e63946] overflow-hidden">
                  
                  {/* Header */}
                  <div className="bg-gray-50 p-4 border-b border-gray-200">
                    <h4 className="font-bold text-[#1d3557]">Verification Check</h4>
                  </div>

                  <div className="p-8 space-y-6">
                    
                    {/* --- VOLUNTEER QUESTIONS --- */}
                    {screeningType === 'volunteer' && (
                      <>
                        {/* Q1 Age */}
                        {step === 1 && (
                          <div className="animate-in fade-in duration-300">
                            <h3 className="text-xl font-bold text-[#1d3557] mb-4">Are you 18 years or older?</h3>
                            <p className="text-sm text-gray-600 mb-6">We require volunteers to be of legal age for liability and safety reasons.</p>
                            <div className="flex gap-4">
                              <button onClick={() => handleVolunteerAnswers(1, 'under18')} className="flex-1 border border-gray-300 py-3 rounded text-gray-600 font-bold hover:bg-gray-100 transition">I am under 18</button>
                              <button onClick={() => handleVolunteerAnswers(1, '18plus')} className="flex-1 bg-[#1d3557] text-white py-3 rounded font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2">I am 18 or older <FontAwesomeIcon icon={faCheckCircle} /></button>
                            </div>
                          </div>
                        )}

                        {/* Q2 Commitment */}
                        {step === 2 && (
                          <div className="animate-in fade-in duration-300">
                            <h3 className="text-xl font-bold text-[#1d3557] mb-4">Are you fully committed to our mission?</h3>
                            <p className="text-sm text-gray-600 mb-6">We rely on our team to be present and active. Seriousness ensures we can save lives effectively.</p>
                            <div className="flex gap-4">
                              <button onClick={() => handleVolunteerAnswers(2, 'unsure')} className="flex-1 border border-gray-300 py-3 rounded text-gray-600 font-bold hover:bg-gray-100 transition">I am unsure</button>
                              <button onClick={() => handleVolunteerAnswers(2, 'committed')} className="flex-1 bg-[#1d3557] text-white py-3 rounded font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2">Yes, I am ready <FontAwesomeIcon icon={faCheckCircle} /></button>
                            </div>
                          </div>
                        )}

                        {/* Q3 Agreement */}
                        {step === 3 && (
                          <div className="animate-in fade-in duration-300">
                            <h3 className="text-xl font-bold text-[#1d3557] mb-4">Code of Conduct</h3>
                            <p className="text-sm text-gray-600 mb-6">Do you agree to act with integrity, respect, and professionalism at all times?</p>
                            <div className="flex gap-4">
                              <button onClick={() => handleVolunteerAnswers(3, 'disagree')} className="flex-1 border border-gray-300 py-3 rounded text-gray-600 font-bold hover:bg-gray-100 transition">Disagree</button>
                              <button onClick={() => handleVolunteerAnswers(3, 'agree')} className="flex-1 bg-[#1d3557] text-white py-3 rounded font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2">Agree & Join <FontAwesomeIcon icon={faCheckCircle} /></button>
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {/* --- DONOR QUESTIONS --- */}
                    {screeningType === 'donor' && (
                      <>
                        {/* Q1 Voluntary */}
                        {step === 1 && (
                          <div className="animate-in fade-in duration-300">
                            <h3 className="text-xl font-bold text-[#1d3557] mb-4">Is this donation voluntary?</h3>
                            <p className="text-sm text-gray-600 mb-6">We value transparency. Please confirm this donation is being made freely and willingly.</p>
                            <div className="flex gap-4">
                              <button onClick={() => handleDonorAnswers('forced')} className="flex-1 border border-gray-300 py-3 rounded text-gray-600 font-bold hover:bg-gray-100 transition">No / On behalf of someone</button>
                              <button onClick={() => handleDonorAnswers('voluntary')} className="flex-1 bg-[#e63946] text-white py-3 rounded font-bold hover:bg-red-700 transition flex items-center justify-center gap-2">Yes, my own funds <FontAwesomeIcon icon={faCheckCircle} /></button>
                            </div>
                          </div>
                        )}

                        {/* Q2 Transparency */}
                        {step === 2 && (
                          <div className="animate-in fade-in duration-300">
                            <h3 className="text-xl font-bold text-[#1d3557] mb-4">Do you trust our mission?</h3>
                            <p className="text-sm text-gray-600 mb-6">We commit to using every shilling directly for emergency relief. Do you trust us to do that?</p>
                            <div className="flex gap-4">
                              <button onClick={() => handleDonorAnswers('unsure')} className="flex-1 border border-gray-300 py-3 rounded text-gray-600 font-bold hover:bg-gray-100 transition">I need more info</button>
                              <button onClick={() => handleDonorAnswers('trust')} className="flex-1 bg-[#e63946] text-white py-3 rounded font-bold hover:bg-red-700 transition flex items-center justify-center gap-2">Yes, I trust you <FontAwesomeIcon icon={faCheckCircle} /></button>
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {/* --- FAIL STATE --- */}
                    {(step === 3) && !passed && (
                      <div className="p-8 text-center bg-red-50 animate-in fade-in duration-300">
                        <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                          <FontAwesomeIcon icon={faTimesCircle} className="text-4xl text-[#e63946]" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#1d3557] mb-4">Application Halted</h2>
                        <p className="text-gray-700 mb-8 max-w-md mx-auto">{failReason || "Based on your answers, we are unable to proceed with this action."}</p>
                        <button onClick={() => window.location.reload()} className="bg-gray-200 text-[#1d3557] px-6 py-2 rounded-full font-bold hover:bg-gray-300 transition">Start Over</button>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* --- B. MAIN FORMS (Only show if Passed) --- */}
          {showForms && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in fade-in duration-500">
              
              {/* LEFT: VOLUNTEER FORM */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-8 border-[#e63946]">
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-green-200">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-green-600" />
                    <h2 className="text-2xl font-bold text-green-800">Volunteer Application</h2>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">Verified</span>
                  </div>
                  
                  <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-[#1d3557] mb-2">Full Name</label>
                        <input type="text" required className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#1d3557] mb-2">Phone Number</label>
                        <input type="tel" required className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]" placeholder="+254..." />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-[#1d3557] mb-2">Age</label>
                        <input type="number" required className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]" placeholder="25" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#1d3557] mb-2">Availability</label>
                        <select className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]">
                          <option>Weekdays</option>
                          <option>Weekends</option>
                          <option>Anytime / Emergencies</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#1d3557] mb-2">Area of Interest</label>
                      <select className="w-full p-4 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:border-[#e63946] text-[#1d3557]">
                        <option>Rescue Operations</option>
                        <option>Food Distribution</option>
                        <option>Medical Support</option>
                        <option>Community Outreach</option>
                      </select>
                    </div>

                    <button type="submit" className="w-full bg-[#e63946] text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-lg mt-4">
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>

              {/* RIGHT: DONATION SECTION */}
              <div id="donate" className="space-y-8">
                
                <div className="bg-[#1d3557] text-white p-8 md:p-10 rounded-lg shadow-2xl border-t-8 border-[#e63946]">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-green-200">
                    <FontAwesomeIcon icon={faHandHoldingHeart} className="text-4xl" />
                    <div>
                      <h2 className="text-2xl font-serif font-bold">Donate Now</h2>
                      <p className="text-sm text-green-200">Verified Donor</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/10 p-4 rounded-lg flex items-center gap-4 hover:bg-white/20 transition border border-white/20">
                      <div className="bg-green-600 w-10 h-10 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">One-time Donation</h3>
                        <p className="text-xs opacity-80">Any amount helps.</p>
                      </div>
                    </div>

                    <div className="bg-white/10 p-4 rounded-lg flex items-center gap-4 hover:bg-white/20 transition border border-white/20">
                      <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faScaleBalanced} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Monthly Giving</h3>
                        <p className="text-xs opacity-80">Sustained impact.</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-white text-[#e63946] py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                    Proceed to Payment
                  </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#e63946]">
                  <h3 className="font-bold text-[#1d3557] mb-2">Why Verify?</h3>
                  <p className="text-sm text-[#1d3557] leading-relaxed">
                    This short questionnaire helps us maintain a safe environment for beneficiaries and ensures that every resource is used effectively.
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>
      </div>
      
    </div>
  )
}