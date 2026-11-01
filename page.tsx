 "use client";

import { useState } from "react";

const reasons = [
  "The way your presence can make an ordinary day feel special.",
  "Your smile — especially when it appears out of nowhere.",
  "The little details about you that you may not even notice.",
  "How being close to you makes the world feel a little softer.",
  "Simply because you're you. No grand explanation needed."
];

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [letter, setLetter] = useState(false);
  const [reason, setReason] = useState(-1);
  const [surprise, setSurprise] = useState(false);

  return (
    <main className="site-shell">
      <div className="grain" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="A little world for Nihal">A LITTLE WORLD <span>✦</span></a>
        <span className="top-note">MADE WITH LOVE · JUST FOR YOU</span>
      </header>

      <section className="hero">
        <div className="eyebrow"><i /> A GIFT THAT HAS YOUR NAME ON IT <i /></div>
        <p className="pretitle">For the one who makes my world</p>
        <h1>NIHAL<span>.</span></h1>
        <p className="hero-copy">Some gifts come in boxes.<br />This one comes with a little piece of my heart.</p>

        <button className={`envelope ${opened ? "is-open" : ""}`} onClick={() => setOpened(true)} aria-label="Open your gift">
          <div className="envelope-glow" />
          <div className="envelope-back" />
          <div className="letter-peek">
            <span className="letter-small">A NOTE FOR YOU</span>
            <span className="letter-heart">♡</span>
          </div>
          <div className="envelope-front" />
          <div className="envelope-flap" />
          <div className="wax-seal">N</div>
        </button>
        <button className="open-prompt" onClick={() => setOpened(true)}>
          {opened ? "YOUR GIFT IS OPEN" : "TAP TO OPEN YOUR GIFT"} <span>↗</span>
        </button>
        <div className="scroll-hint"><span /> A LITTLE SOMETHING FOR YOU</div>
      </section>

      <section className={`gift-content ${opened ? "visible" : ""}`} aria-hidden={!opened}>
        <div className="section-rule"><span>01</span><i /> THE FIRST LITTLE SURPRISE <i /><span>01</span></div>
        <div className="content-card">
          <span className="card-kicker">A LITTLE REMINDER</span>
          <h2>To my favourite<br /><em>kind of magic.</em></h2>
          <div className="ornament">✦　♡　✦</div>
          <p className="letter-text">
            Nihal, I wanted to give you something that feels a little different —
            something you can open whenever you need a smile.
            <br /><br />
            I hope you never forget how special you are to me. Not just on the
            beautiful days, but on the ordinary ones too. You make even the
            simplest moments worth keeping.
            <br /><br />
            This little corner of the internet is yours. Take your time, explore
            it, and know that every detail was made thinking of you.
          </p>
          <div className="signature">With all my heart, <span>Yousef ♡</span></div>
        </div>

        <section className="memories-section">
          <div className="section-rule"><span>02</span><i /> A FEW MOMENTS TO KEEP <i /><span>02</span></div>
          <h2>Little pieces of<br /><em>our story.</em></h2>
          <p className="muted">A few faces, a few moments, and a thousand feelings.</p>
          <div className="photo-grid">
            <figure className="photo photo-tall"><img src="/photos/nihal-01.jpeg" alt="Nihal" /><figcaption>the prettiest view ♡</figcaption></figure>
            <figure className="photo"><img src="/photos/together.jpeg" alt="A happy moment together" /><figcaption>my favourite us</figcaption></figure>
            <figure className="photo"><img src="/photos/nihal-03.jpeg" alt="Nihal among flowers" /><figcaption>effortlessly lovely</figcaption></figure>
            <figure className="photo"><img src="/photos/yousef-01.jpeg" alt="Yousef" /><figcaption>the one behind this little world</figcaption></figure>
            <figure className="photo photo-wide"><img src="/photos/nihal-02.jpeg" alt="Nihal smiling" /><figcaption>one more reason to smile</figcaption></figure>
          </div>
        </section>

        <div className="reasons-section">
          <div className="section-rule"><span>03</span><i /> LITTLE THINGS I ADORE <i /><span>03</span></div>
          <h2>Need a reason<br />to <em>smile?</em></h2>
          <p className="muted">Tap the button. I have a few.</p>
          <div className="reason-box">
            <div className="reason-number">{reason < 0 ? "♡" : `0${reason + 1}`}</div>
            <p>{reason < 0 ? "A little thought is waiting for you..." : reasons[reason]}</p>
          </div>
          <button className="gold-button" onClick={() => setReason((reason + 1) % reasons.length)}>
            {reason < 0 ? "SHOW ME ONE" : "ANOTHER ONE"} <span>✦</span>
          </button>
        </div>

        <div className="final-section">
          <div className="section-rule"><span>04</span><i /> ONE LAST THING <i /><span>04</span></div>
          <div className="final-frame">
            <div className="star star-a">✦</div><div className="star star-b">✧</div><div className="star star-c">✦</div>
            <p className="card-kicker">IF YOU EVER FORGET</p>
            <h2>You're loved.<br /><em>More than words can hold.</em></h2>
            <p className="final-copy">And if I could wrap a feeling into a gift, it would be the feeling of having you in my life.</p>
            <button className="surprise-button" onClick={() => setSurprise(!surprise)}>
              {surprise ? "CLOSE YOUR LITTLE SURPRISE" : "ONE LAST LITTLE SURPRISE"} <span>♡</span>
            </button>
            {surprise && <div className="surprise-message">If I had to choose a favourite notification, a favourite conversation, and a favourite person to share a moment with… somehow, they would all lead me back to you. <b>Always, Nihal. ♡</b></div>}
          </div>
        </div>
        <footer>MADE FOR NIHAL, WITH LOVE <span>✦</span> 2026</footer>
      </section>
    </main>
  );
}