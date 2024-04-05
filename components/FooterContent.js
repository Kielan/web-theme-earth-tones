import React from 'react'

interface IFooterContent {
  
}

const FooterContent: React.FC<IFooterContent> = props => {

return (
  <div style="background-color: #f4e9da;">
  <div class="tw-block tw-px-4 tw-text-right md:tw-hidden">
  <button id="footer-burger" aria-label="Footer" class="tw-inline-flex tw-items-center tw-justify-center tw-px-2 tw-py-2 tw-transition tw-duration-150 tw-ease-in-out tw-rounded-md hover:tw-text-white focus:tw-outline-none focus:tw-text-white">
  <svg id="footer-burger-closed" class="tw-w-6 tw-h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
  <svg id="footer-burger-opened" class="tw-hidden tw-w-6 tw-h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
  </button>
  </div>
  <div class="tw-hidden md:tw-pt-16 tw-p-6 md:tw-items-start md:tw-justify-between md:tw-flex-wrap md:tw-flex md:tw-content-left" id="footer-mobile">
  <div class="tw-mb-4">
  <a href="/" class="tw-block tw-mb-2 remotive-bold tw-leading-5 tw-uppercase">Remotive
  </a>
  <ul class="tw-text-sm tw-font-light" style="list-style-type:none">
  <li>
  <a href="https://remotive.getrewardful.com/signup" target="_blank">
  Remotive Affiliate Program
  </a>
  </li>
  <li>
  <a href="https://support.remotive.com/en/article/ycrtby/">
  Sponsorship
  </a>
  </li>
  <li>
  <a href="https://support.remotive.com/en/category/l3ahqd/">
  Press
  </a>
  </li>
  <li>
  <a href="/about">
  About
  </a>
  </li>
  <li>
  <a href="https://support.remotive.com/en/article/u4kbkf/" target="_blank">Terms of Use</a> &amp; <a href="https://support.remotive.com/en/article/1mkziff/" target="_blank">Privacy Policy</a>
  </li>
  </ul>
  </div>
  <div class="tw-mb-4">
  <span class="tw-block tw-mb-2 remotive-bold tw-leading-5 tw-uppercase">Find Remote Jobs
  </span>
  <ul class="tw-text-sm tw-text-light" style="list-style-type:none">
  <li>
  <a href="/accelerator">
  Join Remotive Accelerator
  </a>
  </li>
  <li>
  <a href="/blog/tag/job-search-tips/">
  Remote Job Search Tips
  </a>
  </li>
  <li>
  <a href="/salaries">
  Developer Salaries
  </a>
  </li>
  <li>
  <a href="/remote-jobs/api">
  Remotive Jobs Public API
  </a>
  &amp;
  <a href="/remote-jobs/rss-feed" style="display: flex;">RSS Feeds
  <div class="rss-symbol"></div>
  </a>
  </li>
  </ul>
  </div>
  <div class="tw-mb-4">
  <span class="tw-block tw-mb-2 remotive-bold tw-leading-5 tw-uppercase">Hiring Remotely
  </span>
  <ul class="tw-text-sm tw-text-light" style="list-style-type:none">
  <li>
  <a href="/hire">
  Why Remotive?
  </a>
  </li>
  <li>
  <a href="/job/post/new">
  Post a Remote Job
  </a>
  </li>
  <li>
  <a href="/blog/tag/hiring-remotely/">
  Remote Hiring Tips
  </a>
  </li>
  <li>
  <a href="https://support.remotive.com">
  Help Center for Recruiters
  </a>
  </li>
  </ul>
  </div>
  <div class="tw-mb-4">
  <span class="tw-block tw-mb-2 remotive-bold tw-leading-5 tw-uppercase">Quick Access
  </span>
  <ul class="tw-text-sm tw-text-light" style="list-style-type:none">
  <li>
  <a href="/remote-javascript-jobs">
  Remote Javascript Jobs
  </a>
  </li>
  <li>
  <a href="/remote-python-jobs">
  Remote Python Jobs
  </a>
  </li>
  <li>
  <a href="/all-tags-index">
  See More Jobs by Tags
  </a>
  </li>
  <li>
  <a href="/all-remote-companies-index">
  All Remote Companies
  </a>
  </li>
  </ul>
  </div>
  </div>
  <div id="last-el-footer" class="tw-mt-2 ">
  <div class="tw-justify-between tw-px-6 tw-mb-2 tw-text-xs tw-text-center">
  <p>© 2014-2024, made Remotely with ❤️</p>
  </div>
  <div class="tw-p-4 tw-text-center remotive-bg">
  <div class="tw-flex tw-items-center tw-justify-between tw-w-full tw-mx-auto sm:tw-w-1/3 tw-h-8">
  <a target="_blank" rel="external noopener noreferrer" href="https://www.linkedin.com/company/remotive.io/" aria-label="LinkedIn" style="font-size: 1.5em;" class="fa fa-linkedin hover:tw-text-white">
  </a>
  <a target="_blank" rel="external noopener noreferrer" href="https://twitter.com/remotiveio/" aria-label="Twitter" style="font-size: 1.5em;" class="fa fa-twitter hover:tw-text-white">
  </a>
  <a target="_blank" rel="external noopener noreferrer" href="https://www.reddit.com/r/remotivejobs/" aria-label="Reddit" style="font-size: 1.5em;" class="fa fa-reddit hover:tw-text-white">
  </a>
  <a target="_blank" rel="external noopener noreferrer" href="https://t.me/remotejobsenglish/" aria-label="Telegram" style="font-size: 1.5em;" class="fa fa-telegram hover:tw-text-white">
  </a>
  <a target="_blank" rel="external noopener noreferrer" href="https://www.facebook.com/remotivedotcom/" aria-label="Facebook" style="font-size: 1.5em;" class="fa fa-facebook hover:tw-text-white">
  </a>
  <a target="_blank" rel="external noopener noreferrer" href="https://www.instagram.com/remotiveio/" aria-label="Instagram" style="font-size: 1.5em;" class="fa fa-instagram hover:tw-text-white">
  </a>
  <a target="_blank" rel="external noopener noreferrer" href="/accelerator" aria-label="Slack Community" style="font-size: 1.5em;" class="fa fa-slack hover:tw-text-white">
  </a>
  <a href="mailto:hello@remotive.com" style="font-size: 1.5em;" class="fa fa-envelope hover:tw-text-white" aria-label="Email us">
  </a>
  </div>
  </div>
  </div>
  </div>
  )
}

export default FooterContent;
