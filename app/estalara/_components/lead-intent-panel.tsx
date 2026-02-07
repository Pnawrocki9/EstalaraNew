"use client"

import { useState, useEffect } from "react"

interface Lead {
  id: number
  name: string
  status: "low" | "medium" | "high"
  watchTime: string
  questions: number
  intensity: "Low" | "Medium" | "High"
  score: number
  isExpanded?: boolean
}

const initialLeads: Lead[] = [
  // High Intent Leads
  { id: 1, name: "Mike Fan", status: "high", watchTime: "14:20", questions: 5, intensity: "High", score: 94, isExpanded: true },
  { id: 2, name: "Anna Schmidt", status: "high", watchTime: "12:45", questions: 4, intensity: "High", score: 89 },
  { id: 3, name: "James Wilson", status: "high", watchTime: "11:30", questions: 3, intensity: "High", score: 85 },
  // Medium Intent Leads
  { id: 4, name: "Sarah Jones", status: "medium", watchTime: "08:45", questions: 2, intensity: "Medium", score: 67 },
  { id: 5, name: "Emily Liu", status: "medium", watchTime: "07:22", questions: 2, intensity: "Medium", score: 62 },
  { id: 6, name: "Carlos Ruiz", status: "medium", watchTime: "06:33", questions: 1, intensity: "Medium", score: 55 },
  { id: 7, name: "Maria Santos", status: "medium", watchTime: "05:18", questions: 1, intensity: "Medium", score: 48 },
  // Low Intent Leads
  { id: 8, name: "David Chen", status: "low", watchTime: "03:12", questions: 0, intensity: "Low", score: 28 },
  { id: 9, name: "Lisa Park", status: "low", watchTime: "02:45", questions: 0, intensity: "Low", score: 22 },
  { id: 10, name: "Tom Brown", status: "low", watchTime: "01:30", questions: 0, intensity: "Low", score: 15 },
  { id: 11, name: "Nina Patel", status: "low", watchTime: "01:05", questions: 0, intensity: "Low", score: 12 },
]

// Animated waveform component
function AudioWaveform() {
  return (
    <div className="flex items-center gap-[2px] h-4">
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className="w-[2px] bg-[#3B82F6] rounded-full animate-waveform"
          style={{
            height: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.05}s`,
            minHeight: "3px",
          }}
        />
      ))}
    </div>
  )
}

// Status dot with appropriate color
function StatusDot({ status }: { status: "low" | "medium" | "high" }) {
  const colors = {
    low: "bg-gray-400",
    medium: "bg-amber-500",
    high: "bg-[#3B82F6]",
  }
  return (
    <div className={`w-2 h-2 rounded-full ${colors[status]} ${status === "high" ? "animate-pulse" : ""}`} />
  )
}

// Intent badge component
function IntentBadge({ status, score }: { status: "low" | "medium" | "high"; score: number }) {
  const config = {
    low: { bg: "bg-gray-100", text: "text-gray-600", label: "Low" },
    medium: { bg: "bg-amber-100", text: "text-amber-700", label: "Medium" },
    high: { bg: "bg-green-100", text: "text-green-700", label: "High" },
  }
  const { bg, text, label } = config[status]
  
  return (
    <span className={`${bg} ${text} text-[9px] font-semibold px-1.5 py-0.5 rounded-full`}>
      {label} {score}%
    </span>
  )
}

export function LeadIntentPanel() {
  const [leads, setLeads] = useState(initialLeads)
  const [animatingLead, setAnimatingLead] = useState<number | null>(null)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLeads((prevLeads) => {
        const newLeads = [...prevLeads]
        const randomIndex = Math.floor(Math.random() * newLeads.length)
        const lead = newLeads[randomIndex]
        
        // Randomly update watch time
        const [mins, secs] = lead.watchTime.split(":").map(Number)
        const newSecs = secs + Math.floor(Math.random() * 10) + 1
        const newMins = mins + Math.floor(newSecs / 60)
        const finalSecs = newSecs % 60
        newLeads[randomIndex] = {
          ...lead,
          watchTime: `${String(newMins).padStart(2, "0")}:${String(finalSecs).padStart(2, "0")}`,
        }
        
        setAnimatingLead(randomIndex)
        setTimeout(() => setAnimatingLead(null), 500)
        
        return newLeads
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Simulate question updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLeads((prevLeads) => {
        const newLeads = [...prevLeads]
        const highIntentIndex = newLeads.findIndex((l) => l.status === "high")
        if (highIntentIndex !== -1 && Math.random() > 0.5) {
          newLeads[highIntentIndex] = {
            ...newLeads[highIntentIndex],
            questions: newLeads[highIntentIndex].questions + 1,
          }
        }
        return newLeads
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Group leads by status
  const highLeads = leads.filter((l) => l.status === "high")
  const mediumLeads = leads.filter((l) => l.status === "medium")
  const lowLeads = leads.filter((l) => l.status === "low")

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 overflow-hidden w-60">
      {/* Header */}
      <div className="px-3 py-2 border-b border-[#E8E4DF]/50 bg-white/80">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold text-[#1A1A1A]">Lead Intent Score</h3>
          <span className="text-[10px] text-[#5C5C5C]">47 watching</span>
        </div>
      </div>

      {/* Scrollable Lead List */}
      <div className="max-h-72 overflow-y-auto scrollbar-thin">
        {/* High Intent Section */}
        <div className="border-b border-[#E8E4DF]/30">
          <div className="px-3 py-1.5 bg-green-50/80 sticky top-0 z-10">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[10px] font-semibold text-green-700">High Intent</span>
              <span className="text-[9px] text-green-600 ml-auto">{highLeads.length}</span>
            </div>
          </div>
          {highLeads.map((lead, index) => (
            <div
              key={lead.id}
              className={`transition-all duration-300 ${
                animatingLead === leads.indexOf(lead) ? "bg-blue-50/50" : ""
              }`}
            >
              {lead.isExpanded ? (
                <div className="p-2 bg-white/60 border-l-2 border-green-500">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <StatusDot status={lead.status} />
                      <span className="font-medium text-[#1A1A1A] text-[11px]">{lead.name}</span>
                    </div>
                    <IntentBadge status={lead.status} score={lead.score} />
                  </div>
                  
                  <div className="bg-[#F8F9FA]/80 rounded-lg p-2 border border-[#E8E4DF]/50">
                    <div className="space-y-1 text-[10px]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#5C5C5C]">Watch Time:</span>
                        <span className="font-semibold text-[#1A1A1A] tabular-nums">{lead.watchTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#5C5C5C]">Questions:</span>
                        <span className="font-semibold text-[#1A1A1A]">{lead.questions}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#5C5C5C]">Intensity:</span>
                        <span className="font-semibold text-[#1A1A1A]">{lead.intensity}</span>
                      </div>
                    </div>
                    <div className="mt-1.5 pt-1.5 border-t border-[#E8E4DF]/50">
                      <AudioWaveform />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="px-3 py-1.5 flex items-center justify-between hover:bg-green-50/30 transition-colors border-l-2 border-transparent hover:border-green-300">
                  <div className="flex items-center gap-1.5">
                    <StatusDot status={lead.status} />
                    <span className="text-[#1A1A1A] text-[11px]">{lead.name}</span>
                  </div>
                  <IntentBadge status={lead.status} score={lead.score} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Medium Intent Section */}
        <div className="border-b border-[#E8E4DF]/30">
          <div className="px-3 py-1.5 bg-amber-50/80 sticky top-0 z-10">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-[10px] font-semibold text-amber-700">Medium Intent</span>
              <span className="text-[9px] text-amber-600 ml-auto">{mediumLeads.length}</span>
            </div>
          </div>
          {mediumLeads.map((lead) => (
            <div
              key={lead.id}
              className={`transition-all duration-300 ${
                animatingLead === leads.indexOf(lead) ? "bg-blue-50/50" : ""
              }`}
            >
              <div className="px-3 py-1.5 flex items-center justify-between hover:bg-amber-50/30 transition-colors border-l-2 border-transparent hover:border-amber-300">
                <div className="flex items-center gap-1.5">
                  <StatusDot status={lead.status} />
                  <span className="text-[#1A1A1A] text-[11px]">{lead.name}</span>
                </div>
                <IntentBadge status={lead.status} score={lead.score} />
              </div>
            </div>
          ))}
        </div>

        {/* Low Intent Section */}
        <div>
          <div className="px-3 py-1.5 bg-gray-50/80 sticky top-0 z-10">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span className="text-[10px] font-semibold text-gray-600">Low Intent</span>
              <span className="text-[9px] text-gray-500 ml-auto">{lowLeads.length}</span>
            </div>
          </div>
          {lowLeads.map((lead) => (
            <div
              key={lead.id}
              className={`transition-all duration-300 ${
                animatingLead === leads.indexOf(lead) ? "bg-blue-50/50" : ""
              }`}
            >
              <div className="px-3 py-1.5 flex items-center justify-between hover:bg-gray-50/50 transition-colors border-l-2 border-transparent hover:border-gray-300">
                <div className="flex items-center gap-1.5">
                  <StatusDot status={lead.status} />
                  <span className="text-[#5C5C5C] text-[11px]">{lead.name}</span>
                </div>
                <IntentBadge status={lead.status} score={lead.score} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
