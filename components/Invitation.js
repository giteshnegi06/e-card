"use client";
import { useEffect, useRef, useState } from "react";
import { WEDDING as W } from "@/lib/data";
import Reveal from "./Reveal";
import Countdown from "./Countdown";
import ScratchHeart from "./ScratchHeart";
import { DoorArt, Plaque, LeafMotif, Heart } from "./Art";

const ics = () => {
  const lines = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wedding//EN", "BEGIN:VEVENT",
    "UID:dinkal-ashwani-2026@wedding",
    "DTSTAMP:20261009T000000Z",
    "DTSTART:20261103T060000Z",
    "DTEND:20261103T120000Z",
    `SUMMARY:Wedding of ${W.bride.name} & ${W.groom.name}`,
    `LOCATION:${W.venue.address}`,
    "END:VEVENT", "END:VCALENDAR",
  ];
  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "wedding.ics";
  a.click();
  URL.revokeObjectURL(a.href);
};

export default function Invitation() {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(true);
  const [hasMusic, setHasMusic] = useState(true);
  const audio = useRef(null);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(W.venue.mapsQuery)}`;

  useEffect(() => {
    // Always start at the hero, never at the browser-restored scroll position.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "" : "hidden";
  }, [open]);

  const openCard = () => {
    setOpen(true);
    const a = audio.current;
    if (a) a.play().then(() => setMuted(false)).catch(() => setHasMusic(false));
  };

  const toggleSound = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) a.play().then(() => setMuted(false)).catch(() => {});
    else {
      a.pause();
      setMuted(true);
    }
  };

  return (
    <>
      <audio ref={audio} src={W.music} loop preload="none" onError={() => setHasMusic(false)} />
      {hasMusic && (
        <button className="sound" onClick={toggleSound} aria-label={muted ? "Play music" : "Mute music"}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4z" />
            {muted ? <path d="m22 9-6 6M16 9l6 6" /> : <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />}
          </svg>
        </button>
      )}

      <div className={`gate ${open ? "gate-open" : ""}`} aria-hidden={open}>
        <div className="door left"><DoorArt /></div>
        <div className="door right"><DoorArt flip /></div>
        <button className="plaque" onClick={openCard} aria-label="Open invitation">
          <Plaque />
          <span className="plaque-in">
            <LeafMotif />
            <i className="rule" />
            <span className="tap">Tap to Open</span>
            <i className="rule" />
            <LeafMotif flip />
          </span>
        </button>
      </div>

      <main className={`page ${open ? "opened" : ""}`}>
        {/* ---------- Welcome scene ---------- */}
        <section className="hero">
          <div className="hero-body">
            <Heart size={30} color="#3f5a38" />
            <p className="getting">We&apos;re getting married</p>
            <div className="hrule"><i /><Heart size={9} color="#3f5a38" /><i /></div>
            <h1 className="nm">{W.bride.name}</h1>
            <p className="par">D/o {W.bride.daughterOf}</p>
            <p className="amp">&amp;</p>
            <h1 className="nm">{W.groom.name}</h1>
            <p className="par">S/o {W.groom.sonOf}</p>
          </div>
        </section>

        {/* ---------- Linen body with rose vines ---------- */}
        <div className="linen">
          <i className="vine vl" />
          <i className="vine vr" />

          <section>
            <Reveal>
              <p className="shloka">{W.shloka}</p>
              <i className="rule long" />
              <p className="welcome">
                {W.hosts} solicit your gracious presence &amp; blessings on the auspicious occasion of the wedding ceremony of their beloved {W.relation}
                <br />
                <b>{W.bride.name}</b> with <b>{W.groom.name}</b>.
                <Heart size={18} color="#3f5a38" />
              </p>
              <i className="rule long" />
            </Reveal>
          </section>

          <section>
            <Reveal><h2 className="forever">Our forever begins</h2></Reveal>
            <Reveal delay={100}><div className="center"><ScratchHeart date={W.dateLabel} day={W.dayLabel} time={W.timeLabel} /></div></Reveal>
            <Reveal delay={150}>
              <p className="scratch-hint">Scratch to Reveal</p>
              <button className="btn dark" onClick={ics}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>
                SAVE THE DATE
              </button>
            </Reveal>
          </section>

          {W.photos.length > 0 && (
            <section>
              <Reveal>
                <div className="photos">
                  {W.photos.map((p) => (
                    <img key={p} src={p} alt="" loading="lazy" />
                  ))}
                </div>
              </Reveal>
            </section>
          )}

          <section>
            <Reveal>
              <h2 className="forever">Counting Down to Forever</h2>
              <Countdown target={W.weddingDate} />
            </Reveal>
          </section>

          <section>
            <Reveal>
              <svg className="clock" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#3f5a38" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              <h2 className="forever">Program Timeline</h2>
              <Heart size={10} color="#c9a96e" />
            </Reveal>
            {W.days.map((day, i) => (
              <Reveal key={day.date} delay={i * 100}>
                <p className="tl-date">{day.date}</p>
                <ul className="tl">
                  {day.events.map((ev) => (
                    <li key={ev.name}>
                      <span className="tl-time">{ev.time}</span>
                      <span className="tl-name">{ev.name}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </section>

          <section>
            <Reveal>
              <h2 className="forever">Venue</h2>
              <Heart size={10} color="#c9a96e" />
              <p className="venue-name">{W.venue.title}</p>
              <p className="venue-addr">{W.venue.address}</p>
              <a className="btn dark" href={mapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </Reveal>
          </section>

          <footer>
            <Reveal>
              <p className="cant">We can&apos;t wait to celebrate with you!</p>
              <p className="sign">{W.bride.name} &amp; {W.groom.name}</p>
              <p className="comp">With best compliments from<br /><b>{W.compliments}</b></p>
              <p className="deities">{W.deities.join("  ·  ")}</p>
            </Reveal>
          </footer>
        </div>
      </main>
    </>
  );
}
