import { createSlice } from "@reduxjs/toolkit";

const portfolioWork = [
  "fylo-data-store",
  "article-preview",
  "coding-bootcamp-testimonials-slider",
  "four-card-feature-section",
  "base-apparel-coming-soon-page",
  "intro-component-with-sign-up-form",
  "single-price-grid-component",
  "ping-coming-soon-page",
  "huddle-landing-page-with-alternating-feature-blocks",
  "huddle-landing-page-with-single-introductory-section",
  "fylo-landing-page-with-two-column-layout",
  "social-media-dashboard-with-theme-switcher",
  "insure-landing-page",
  "pricing-component-with-toggle",
  "project-tracking-intro-component",
  "clipboard-landing-page",
];

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: portfolioWork,
  reducers: {
  }
});

export const { } = portfolioSlice.actions;

// Return a list of projects
export const selectPortfolio = state => state.portfolio;

export default portfolioSlice.reducer;