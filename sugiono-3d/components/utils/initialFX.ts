import { TextSplitter } from "../../utils/textSplitter";
import gsap from "gsap";
import { lenis } from "../Navbar";

let activeLoopTimelines: gsap.core.Timeline[] = [];

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (lenis) {
    lenis.start();
  }
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#07110f",
    duration: 0.5,
    delay: 1,
  });

  const selectors = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"];
  const elements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
  var landingText = new TextSplitter(elements, {
    type: "chars,lines",
    linesClass: "split-line",
  });
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingText2 = new TextSplitter(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  activeLoopTimelines.forEach((timeline) => timeline.kill());
  activeLoopTimelines = [];

  gsap.set(".landing-h2-1, .landing-h2-info", {
    autoAlpha: 1,
    y: 0,
  });
  gsap.set(".landing-h2-2, .landing-h2-info-1", {
    autoAlpha: 0,
    y: 30,
  });

  activeLoopTimelines.push(LoopText(".landing-h2-1", ".landing-h2-2"));
  activeLoopTimelines.push(LoopText(".landing-h2-info", ".landing-h2-info-1"));
}

function LoopText(primarySelector: string, secondarySelector: string) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.9 });

  tl.to({}, { duration: 3.8 })
    .to(
      primarySelector,
      {
        autoAlpha: 0,
        y: -28,
        duration: 0.7,
        ease: "power3.inOut",
      },
      0
    )
    .fromTo(
      secondarySelector,
      {
        autoAlpha: 0,
        y: 28,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.inOut",
      },
      3.8
    )
    .to({}, { duration: 3.2 })
    .to(
      secondarySelector,
      {
        autoAlpha: 0,
        y: -28,
        duration: 0.7,
        ease: "power3.inOut",
      },
      7.7
    )
    .fromTo(
      primarySelector,
      {
        autoAlpha: 0,
        y: 28,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.inOut",
      },
      7.7
    );

  return tl;
}
