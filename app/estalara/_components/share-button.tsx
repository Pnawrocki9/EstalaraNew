"use client"

import { useState, useRef, useEffect } from "react"
import { Share2 } from "lucide-react"

const SHARE_TITLE = "Estalara - From Local Listings to Live Global Sales"
const SHARE_TEXT =
  "Check out Estalara - the platform that helps real estate agencies go beyond traditional portals with LIVE investor interactions and AI-qualified hot leads."

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin
  }
  return "https://www.estalara.com"
}

interface ShareButtonProps {
  variant?: "dark" | "light"
  size?: "sm" | "md"
  position?: "above" | "below"
}

export function ShareButton({ variant = "dark", size = "md", position = "above" }: ShareButtonProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  const shareUrl = getBaseUrl()

  const channels = [
    {
      name: "Email",
      href: `mailto:?subject=${encodeURIComponent(SHARE_TITLE)}&body=${encodeURIComponent(SHARE_TEXT + "\n\n" + shareUrl)}`,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      color: "text-[#5C5C5C]",
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + " " + shareUrl)}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: "text-[#25D366]",
    },
  ]

  const isSmall = size === "sm"

  const buttonBase = isSmall
    ? "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
    : "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"

  const buttonStyle =
    variant === "dark"
      ? `${buttonBase} bg-white/10 hover:bg-white/20 text-white`
      : `${buttonBase} bg-[#E8E4DF] hover:bg-[#D4CFC8] text-[#1A1A1A]`

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={buttonStyle}
        aria-label="Share Estalara"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Share2 className={isSmall ? "w-3.5 h-3.5" : "w-4 h-4"} />
      </button>

      {open && (
        <div className={`absolute left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl border border-[#E8E4DF] py-2 w-44 z-50 ${position === "below" ? "top-full mt-2 animate-in fade-in slide-in-from-top-2 duration-200" : "bottom-full mb-2 animate-in fade-in slide-in-from-bottom-2 duration-200"}`}>
          <p className="px-3 pb-1.5 text-[10px] uppercase tracking-wider text-[#8B8B8B] font-medium">
            Share via
          </p>
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2 hover:bg-[#F8F6F3] transition-colors text-sm text-[#1A1A1A]"
              onClick={() => setOpen(false)}
            >
              <span className={ch.color}>{ch.icon}</span>
              {ch.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
