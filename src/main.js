import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({ duration: 6 });
tl.to("#sixth", {
  y: -700,
  scrollTrigger: {
    trigger: "section",
    start: "top top",
    scrub: true,
  },
})
  .to(
    "#fifth",
    {
      y: -500,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        scrub: true,
      },
    },
    "-=6"
  )
  .to(
    "#forth",
    {
      y: -400,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        scrub: true,
      },
    },
    "-=6"
  )
  .to(
    "#third",
    {
      y: -300,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        scrub: true,
      },
    },
    "-=6"
  )
  .to(
    "#second",
    {
      y: -200,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        scrub: true,
      },
    },
    "-=6"
  )
  .to(
    "#first",
    {
      y: -100,
      scrollTrigger: {
        trigger: ".blur",
        start: "top bottom",
        scrub: true,
      },
    },
    "-=6"
  )
  .to(
    [".content", ".blur"],
    {
      y: -700,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        scrub: true,
      },
    },
    "-=6"
  )
  .to(
    [".title", ".nav", ".footer-wrapper"],
    {
      y: -600,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        scrub: true,
      },
    },
    "-=6"
  )
  .from(
    ".one",
    {
      duration: 3,
      y: 40,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        scrub: true,
      },
    },
    "-=4"
  )
  .from(
    ".two",
    {
      duration: 3,
      y: 40,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        scrub: true,
      },
    },
    "-=3.5"
  )
  .from(
    ".three",
    {
      duration: 3,
      y: 40,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        scrub: true,
      },
    },
    "-=3.5"
  )
  .from(
    ".four",
    {
      duration: 3,
      y: 40,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        scrub: true,
      },
    },
    "-=3.5"
  )
  .from(
    ".text",
    {
      duration: 3,
      y: 60,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        scrub: true,
      },
    },
    "-=4"
  );
