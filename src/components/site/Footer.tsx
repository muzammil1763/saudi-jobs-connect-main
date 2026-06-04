import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const PHONE = "03015748038";
const WHATSAPP_NUMBER = "923015748038";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export function Footer() {
  return (
    <footer className="bg-saudi-green-dark text-white/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              src="/image.png"
              alt="Saudi Visa Embassy – Islamabad Logo"
              className="h-14 w-14 rounded-full object-cover border-2 border-gold/50"
            />
            <div>
              <p className="font-display font-bold text-white">Saudi Visa Embassy – Islamabad</p>
              <p className="text-xs text-gold/80">Jobs & Visa Portal</p>
            </div>
          </div>
          <p className="text-sm text-white/70">
            Official channel for Pakistani workers seeking job opportunities and visa services for the Kingdom of Saudi Arabia.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            <MessageCircle className="size-4" /> WhatsApp Us
          </a>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/jobs" className="hover:text-white">Available Jobs</Link></li>
            <li><Link to="/register" className="hover:text-white">Register CV</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm font-semibold text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>House No. 14, N Service Rd, G-4 Diplomatic Enclave, Islamabad, 44000</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-gold" />
              <a href={`tel:${PHONE}`} className="hover:text-white">{PHONE}</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 shrink-0 text-gold" />
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp: {PHONE}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-gold" />
              <a href="mailto:info@saudivisaembassy.com" className="hover:text-white">info@saudivisaembassy.com</a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>Mon–Thu 9am–5pm | Fri 9am–12pm</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-gold" />
              <a href="mailto:info@saudivisaembassy.com" className="hover:text-white">info@saudivisaembassy.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm font-semibold text-white">Notice</h4>
          <p className="text-sm text-white/70">
            Registration through our office is <strong className="text-white">free of charge</strong>. Beware of agents charging fees.
          </p>
          <div className="mt-4 space-y-1 text-xs text-white/60">
            <p className="font-semibold text-gold text-sm">Featured Companies:</p>
            <p>• Almarai Company</p>
            <p>• Al Afnar Company</p>
            <p>• Al Majal Company</p>
            <p>• Nadak Company</p>
            <p>• Al Saif Company</p>
            <p>• Bin Ladin Group</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} Saudi Visa Embassy – Islamabad Jobs & Visa Portal. All rights reserved.</p>
          <p>Bridging Nations, Building Futures</p>
        </div>
      </div>
    </footer>
  );
}
