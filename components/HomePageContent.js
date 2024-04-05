import React from 'react'

interface IHomePagecontentProps {

}

const HomePageContent: React.FC<IHomePageContentProps> = props => {
  return (
<div class="tw-px-4 tw-mx-auto tw-mt-8 tw-mb-8 md:tw-container md:tw-px-6 lg:tw-px-8" style="min-height: 100vh;">
<div class="md:tw-flex">
<aside class="tw-hidden md:tw-mr-4 md:tw-flex-none md:tw-w-1/4 md:tw-block">
<div class="tw-p-3 tw-mb-4 tw-border tw-border-gray-200 tw-rounded-md tw-relative" style="min-height:130px">
<span class="h3 tw-mb-4">I want to work remotely from...</span>
<div class="tw-absolute" style="top: -1rem; right: 0.5rem;">
<span class="tw-ml-2 tw-flex-shrink-0 tw-cursor-pointer tw-relative">
<div id="job-location-help-modal" style="top: -10rem; right: -15rem;" class="tw-hidden tw-absolute tw-bg-black tw-text-white tw-p-4 tw-rounded-lg tw-text-xs tw-z-50 tw-mb-4 tw-mr-4 tw-w-64">
<span id="job-location-help-close-icon" style="left: 15rem" class="tw-absolute tw-top-0 tw--mt-2 tw--mr-2 tw-w-6 tw-h-6 tw-bg-white tw-rounded-full tw-shadow-lg tw-flex tw-justify-center tw-items-center tw-cursor-pointer">
<svg class="remotive-text-default-color tw-w-4 tw-h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
</span>
<p class="tw-mb-2">Ticking a country here will show you remote jobs that can be done from this country.
</p>
<p class="tw-mb-2">Example: ticking "USA" will show you jobs tagged as "Worldwide", "Americas", "USA
only", "North America"...
</p>
<p class="tw-mb-2">You can search for your country if it does not appear here.
</p>
</div>
<svg xmlns="http://www.w3.org/2000/svg" id="job-location-help-icon" class="tw-w-4 tw-h-4" viewBox="0 0 16 16" fill="none">
<circle cx="8" cy="8" r="8" fill="#FF871A"></circle>
<path d="M7.356 9.744C7.292 9.744 7.236 9.72 7.188 9.672C7.14 9.624 7.116 9.568 7.116 9.504V9.12C7.156 8.744 7.272 8.416 7.464 8.136C7.664 7.848 7.944 7.52 8.304 7.152C8.568 6.896 8.768 6.676 8.904 6.492C9.04 6.308 9.12 6.12 9.144 5.928C9.176 5.6 9.068 5.34 8.82 5.148C8.572 4.948 8.272 4.848 7.92 4.848C7.136 4.848 6.664 5.236 6.504 6.012C6.448 6.196 6.332 6.288 6.156 6.288H5.136C5.056 6.288 4.992 6.264 4.944 6.216C4.896 6.16 4.872 6.088 4.872 6C4.888 5.56 5.02 5.148 5.268 4.764C5.516 4.38 5.876 4.072 6.348 3.84C6.82 3.6 7.372 3.48 8.004 3.48C8.668 3.48 9.212 3.588 9.636 3.804C10.068 4.012 10.38 4.28 10.572 4.608C10.772 4.936 10.872 5.276 10.872 5.628C10.872 6.036 10.78 6.388 10.596 6.684C10.42 6.972 10.152 7.308 9.792 7.692C9.536 7.972 9.336 8.212 9.192 8.412C9.056 8.604 8.964 8.812 8.916 9.036C8.884 9.236 8.864 9.372 8.856 9.444C8.792 9.644 8.684 9.744 8.532 9.744H7.356ZM7.32 12C7.24 12 7.172 11.972 7.116 11.916C7.06 11.86 7.032 11.792 7.032 11.712V10.668C7.032 10.588 7.06 10.52 7.116 10.464C7.172 10.4 7.24 10.368 7.32 10.368H8.484C8.572 10.368 8.644 10.396 8.7 10.452C8.756 10.508 8.784 10.58 8.784 10.668V11.712C8.784 11.792 8.756 11.86 8.7 11.916C8.644 11.972 8.572 12 8.484 12H7.32Z" fill="white"></path>
</svg>
</span>
<script>
            document.addEventListener("DOMContentLoaded", function() {
                const helpIcon = document.getElementById("job-location-help-icon");
                const helpCloseIcon = document.getElementById("job-location-help-close-icon");
                const helpModal = document.getElementById("job-location-help-modal");
                helpModal.classList.add("tw-hidden");
                helpIcon.addEventListener("click", function (e) {
                    helpModal.classList.toggle("tw-hidden");
                })
                helpModal.addEventListener("click", function (e) {
                    helpModal.classList.toggle("tw-hidden");
                })
            })
        </script>
</div>
<div id="location-filter"><div class="ais-RefinementList"><div class="ais-RefinementList-searchBox"><div class="ais-SearchBox"><form action="" role="search" class="ais-SearchBox-form" novalidate=""><input class="ais-SearchBox-input" type="search" placeholder="Search country..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="512"><button class="ais-SearchBox-submit" type="submit" title="Submit the search query."><svg class="ais-SearchBox-submitIcon" width="10" height="10" viewBox="0 0 40 40"> <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path> </svg></button><button class="ais-SearchBox-reset" type="reset" title="Clear the search query." hidden=""><svg class="ais-SearchBox-resetIcon" viewBox="0 0 20 20" width="10" height="10"> <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path> </svg></button><span class="ais-SearchBox-loadingIndicator" hidden=""><svg class="ais-SearchBox-loadingIcon" width="16" height="16" viewBox="0 0 38 38" stroke="#444"> <g fill="none" fillrule="evenodd"> <g transform="translate(1 1)" strokewidth="2"> <circle strokeopacity=".5" cx="18" cy="18" r="18"></circle> <path d="M36 18c0-9.94-8.06-18-18-18"> <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform> </path> </g> </g> </svg></span></form></div></div><ul class="ais-RefinementList-list"><li class="ais-RefinementList-item"><div>
                    <label class="side-filter-value">
                        <input type="checkbox" class="ais-RefinementList-checkbox" value="${label}">
                        <span class="side-filter-value-span">
                                
                                <span class="location-symbol">🇺🇸</span> USA
                        </span>
                    </label></div></li><li class="ais-RefinementList-item"><div>
                    <label class="side-filter-value">
                        <input type="checkbox" class="ais-RefinementList-checkbox" value="${label}">
                        <span class="side-filter-value-span">
                                <img src="/api/location/get-symbol?location=UK" alt="UK" height="20px" width="20px" draggable="false" class="location-symbol">UK
                        </span>
                    </label></div></li><li class="ais-RefinementList-item"><div>
                    <label class="side-filter-value">
                        <input type="checkbox" class="ais-RefinementList-checkbox" value="${label}">
                        <span class="side-filter-value-span">
                                <img src="/api/location/get-symbol?location=Canada" alt="Canada" height="20px" width="20px" draggable="false" class="location-symbol">Canada
                        </span>
                    </label></div></li><li class="ais-RefinementList-item"><div>
                    <label class="side-filter-value">
                        <input type="checkbox" class="ais-RefinementList-checkbox" value="${label}">
                        <span class="side-filter-value-span">
                                <img src="/api/location/get-symbol?location=Germany" alt="Germany" height="20px" width="20px" draggable="false" class="location-symbol">Germany
                        </span>
                    </label></div></li><li class="ais-RefinementList-item"><div>
                    <label class="side-filter-value">
                        <input type="checkbox" class="ais-RefinementList-checkbox" value="${label}">
                        <span class="side-filter-value-span">
                                <img src="/api/location/get-symbol?location=France" alt="France" height="20px" width="20px" draggable="false" class="location-symbol">France
                        </span>
                    </label></div></li></ul></div></div>
</div>
<div class="tw-hidden tw-p-3 tw-mb-4 tw-border tw-border-gray-200 tw-rounded-md" style="min-height:130px">
<span class="h3 tw-mb-4">Employment Types</span>
<div id="job-type-filter" class="side-filter"><div class="ais-RefinementList ais-RefinementList--noRefinement"></div></div>
</div>
<div class="tw-hidden tw-p-3 tw-mb-4 tw-border tw-border-gray-200 tw-rounded-md" style="min-height:130px">
<span class="h3 tw-mb-4">Skills</span>
<div id="skill-filter"><div class="ais-RefinementList ais-RefinementList--noRefinement"></div></div>
</div>
<div class="tw-hidden tw-p-3 tw-mb-4 tw-border tw-border-gray-200 tw-rounded-md" style="min-height:130px">
<span class="h3 tw-mb-4">Companies</span>
<div id="company-filter"><div class="ais-RefinementList ais-RefinementList--noRefinement"></div></div>
</div>
<div class="tw-sticky remotive-only-private" id="newsletter-aside" style="top: 7rem;">
<div class="tw-pt-4 tw-mb-4 tw-border tw-border-gray-200 tw-rounded-md">
<img data-lazyload="/remotive_website_job/static/src/img/doge_title.png" draggable="false" alt="" height="200" width="200" class="remotive-only-private tw-m-auto lazyload" style="width: 30%; margin-top: 2rem; margin-bottom: -0.5rem;">
<div class="remotive-only-private tw-text-center tw-flex tw-flex-col doge-ground">
<span class="h2" style="font-size:120%;">Welcome back friend!
</span>
<span class="tw-mb-4">As a Remotive Accelerator member, you now have access to
34,526
jobs:
</span>
<a style="align-self: center; width: fit-content;" href="/jobs-accelerator" class="tw-px-4 tw-py-2 tw-text-sm remotive-btn-chocolate">
Browse More Jobs
</a>
</div>
</div>
</div>
<div class="remotive-only-public tw-sticky tw-border tw-border-gray-200 tw-p-4 tw-rounded-md" id="newsletter-aside" style="top: 7rem;background: var(--remotive-off-white);font-size: 100%;">
<div class="tw-text-center">
<span class="h3">
Want more remote jobs?
<br>
Upgrade to access 34,526 jobs!
</span>
</div>
<div class="tw-flex tw-mt-2 tw-txt-sm" style="font-size: 90%;">
<div class="tw-flex tw-mr-4" style="align-items: center; justify-content:center">
<i style="font-size: 150%" class="fa fa-diamond" aria-hidden="true"></i>
</div>
<div>
<div class="h3">Best Remote Job Listings</div>
<div>Only top quality remote jobs. We screen, curate &amp; categorize all jobs.</div>
</div>
</div>
<div class="tw-flex tw-mt-2" style="font-size: 90%;">
<div class="tw-flex tw-mr-4" style="align-items: center; justify-content:center">
<i style="font-size: 150%" class="fa fa-search" aria-hidden="true"></i>
</div>
<div>
<div class="h3">Advanced Search Filters</div>
<div>Find remote jobs tailored to your location and experience. Entry level to
executive. Startup to GAFAM.
</div>
</div>
</div>
<div class="tw-flex tw-mt-2" style="font-size: 90%;">
<div class="tw-flex tw-mr-4" style="align-items: center; justify-content:center">
<i style="font-size: 150%" class="fa fa-calendar-check-o" aria-hidden="true"></i>
</div>
<div>
<div class="h3">Save Time</div>
<div>We spend the equivalent of 300+ hours/day scanning every job for you. Get a job
faster with personalized job alerts.
</div>
</div>
</div>
<div class="tw-mt-8 tw-pt-4 tw-text-center">
<a class="remotive-btn-sand" href="https://remotive.com/accelerator#payment">Get Access
</a>
</div>
</div>
</aside>
<div class="tw-flex-grow">
<div id="hits-header" style="display: none;" class="tw-text-sm tw-mb-3 tw-w-full">
<table class="tw-w-full">
<tbody>
<tr>
<td class="tw-pb-2">
<div id="stats" style="display: none;" class="tw-w-full"><div class="ais-Stats"><span class="ais-Stats-text">No matching jobs</span></div></div>
</td>
<td class="tw-pb-2 tw-text-right">
<span>Sort by</span>
<span id="sort-by" style="display: none;"><div class="ais-SortBy"><select class="ais-SortBy-select"><option class="ais-SortBy-option" value="live_jobs">Relevance</option><option class="ais-SortBy-option" value="live_jobs_sort_by_date">Date</option></select></div></span>
</td>
</tr>
</tbody>
</table>
</div>
<div id="job-alert-modal" style="top:30%" class="tw-flex tw-fixed tw-inset-x-0 tw-z-40 tw-hidden tw-px-4 tw-pb-4 tw-items-center tw-justify-center">
<div class="tw-fixed tw-inset-0 tw-transition-opacity">
<div class="tw-absolute tw-inset-0 tw-bg-gray-500 tw-opacity-75"></div>
</div>
<div class="tw-relative tw-p-4 tw-overflow-hidden tw-bg-white tw-rounded-lg tw-shadow-xl tw-transition-all tw-transform tw-max-w-lg tw-p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
<div class="tw-absolute tw-top-0 tw-right-0 tw-pt-4 tw-pr-4 tw-block">
<button type="button" onclick="closeJobAlertModal()" class="tw-transition tw-duration-150 tw-ease-in-out hover:tw-text-gray-500 focus:tw-outline-none focus:tw-text-gray-500" aria-label="Close">
<svg class="tw-w-6 tw-h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
</button>
</div>
<div class="tw-absolute tw-top-0 tw-left-0 tw-pt-4 tw-block" style="padding-left: 1.5rem;">
<a class="premium-tag" href="/accelerator" target="_blank">Accelerator Members
Only
</a>
</div>
<div class="tw-mt-8">
<p class="remotive-bold">Create Custom Job Alert <i class="fa fa-bell" aria-hidden="true"></i></p>
<p>Be notified each time a job matching your filters gets published.</p>
<div class="tw-mt-2 tw-text-sm">
<span class="tw-mt-2 tw-mr-2 tw-text-xs remotive-tag-transparent">
All categories
</span>
<span id="job-alert-modal-tags"></span>
<span id="job-alert-modal-query"></span>
</div>
<input placeholder="Enter your email used for Remotive Accelerator" type="email" id="job-alert-email-input" class="tw-my-4 tw-w-full" required="" style="width: 100%; height: 48px; padding: 16px 16px; border: 1px solid #EAEAEA; border-radius: 8px;" value="">
<div id="emailError" style="color: red;"></div>
<p>Send me notifications via:</p>
<ul class="tw-text-center" style="list-style-type: none">
<li class="tw-mt-2 tw-mb-2">
<button class="remotive-btn-chocolate" style="width: 120px" onclick="setEmailAlert()" id="email-notif">
<i class="fa fa-envelope tw-mr-2" aria-hidden="true"></i>
Email
</button>
</li>
<li class="tw-mb-2">
<button class="remotive-btn-chocolate" style="width: 120px" onclick="setTelegramAlert()" id="telegram-notif"><i class="fa fa-telegram tw-mr-2" aria-hidden="true"></i>Telegram
</button>
</li>
<li class="tw-mb-2">
<button class="remotive-btn-chocolate" style="width: 120px" id="rss-notif" onclick="openCustomRssFeed()">
<i class="fa fa-rss tw-mr-2" aria-hidden="true"></i>RSS Feed
</button>
</li>
</ul>
</div>
</div>
</div>
<div class="tw-block lg:tw-flex tw-items-center tw-w-full tw-px-1 tw-py-4 tw-border tw-border-gray-200 tw-mb-2 tw-rounded-md">
<div class="tw-text-center tw-width tw-w-full lg:tw-w-1/2 lg:tw-text-left lg:tw-ml-2 ">
<p>
Trusted by leading companies who
<a class="remotive-url tw-underline remotive-text-orange" href="/hire">hire on
Remotive
</a>
</p>
</div>
<div class="tw-mt-2 tw-ml-2 tw-mr-2 tw-text-center lg:tw-mt-0 lg:tw-w-1/2 lg:tw-ml-4">
<div class="tw-flex tw-justify-between">
<img alt="stripe" style="height:1.5rem;width:auto;" class="" src="/remotive_website_job/static/src/img/post-job-logos/logo-stripe.png" width="50" height="40">
<img alt="zapier" style="height:1.5rem;width:auto;" class="" src="/remotive_website_job/static/src/img/post-job-logos/logo-zapier.png" width="50" height="40">
<img alt="square" style="height:1.5rem;width:auto;" class="" src="/remotive_website_job/static/src/img/post-job-logos/logo-square.png" width="50" height="40">
<img alt="shopify" style="height:1.5rem;width:auto;" class="" src="/remotive_website_job/static/src/img/post-job-logos/logo-shopify.png" width="50" height="40">
</div>
</div>
</div>
<div class="tw-block xxl:tw-flex">
</div>
<div id="hits" style="display: none;"><ul>
    
  </ul><div class="tw-my-4 tw-text-center" id="morejobs"><button style="display:none" class="tw-px-4 tw-py-2 tw-text-xs remotive-tag-pink focus:tw-outline-none">
                More Jobs
              </button></div></div>
<div id="initial_job_list">
<ul style="list-style-type:none">
<a class="remotive-only-public tw-flex tw-items-center tw-w-full tw-px-1 tw-py-4 tw-border tw-border-gray-200 tw-mb-2 tw-rounded-md remotive-bg-dark" href="/accelerator">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full remotive-text-sand tw-text-center" aria-hidden="true" style="font-size: 20px;">
<i class="fa fa-unlock-alt " aria-hidden="true"></i>
</span>
</div>
<p class="tw-text-sm remotive-bold remotive-text-sand">
Unlock 34,526 additional remote jobs, advanced search &amp; email notifications
</p>
<div style="margin-left: auto;" class="tw-px-2">
<span class="tw-px-4 tw-py-2 tw-text-xs remotive-btn-sand" style="white-space: nowrap;">
Get Access
</span>
</div>
</a>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1383531" data-joburl="/remote-jobs/software-dev/senior-devops-engineer-azure-1383531">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1383531/logo/64x64" src="https://remotive.com/web/image/hr.job/1383531/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/senior-devops-engineer-azure-1383531">
<span class="remotive-bold">Senior DevOps Engineer (Azure)</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Proxify</span>
<span class="tw-block md:tw-hidden">Proxify</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 $50k-$70K
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=CET +/- 3 HOURS" alt="remote in CET +/- 3 HOURS">
CET +/- 3 HOURS
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span class="h2 remotive-tag-pink remotive-text-default-color tw-text-xs tw-mr-2">
Featured
</span>
<span class="h2 remotive-tag-sky remotive-text-default-color tw-text-xs tw-mr-2">
New
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1383531">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/senior-devops-engineer-azure-1383531">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1383531-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1383531">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Senior DevOps Engineer (Azure) • Proxify</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=CET +/- 3 HOURS" alt="remote in CET +/- 3 HOURS">
CET +/- 3 HOURS
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $50k-$70K
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1185979" data-joburl="/remote-jobs/writing/freelance-writer-1185979">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1185979/logo/64x64" src="https://remotive.com/web/image/hr.job/1185979/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/writing/freelance-writer-1185979">
<span class="remotive-bold">Freelance Writer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">IAPWE</span>
<span class="tw-block md:tw-hidden">IAPWE</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/writing">Writing</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 $50-$75 /hour
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span class="h2 remotive-tag-pink remotive-text-default-color tw-text-xs tw-mr-2">
Featured
</span>
<span class="h2 remotive-tag-sky remotive-text-default-color tw-text-xs tw-mr-2">
New
</span>
</div>
<a job-source="job_list_landing" target="_blank" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1185979" href="/remote-jobs/writing/freelance-writer-1185979">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/writing/freelance-writer-1185979">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1185979-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1185979">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Freelance Writer • IAPWE</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $50-$75 /hour
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/writing">Writing</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1858073" data-joburl="/remote-jobs/software-dev/senior-independent-software-developer-1858073">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1858073/logo/64x64" src="https://remotive.com/web/image/hr.job/1858073/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/senior-independent-software-developer-1858073">
<span class="remotive-bold">Senior Independent Software Developer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">A.Team</span>
<span class="tw-block md:tw-hidden">A.Team</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 $90 - $150 /hou..
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=USA timezones" alt="remote in USA timezones">
USA timezones
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=European timezones" alt="remote in European timezones">
European timezones
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span class="h2 remotive-tag-pink remotive-text-default-color tw-text-xs tw-mr-2">
Featured
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1858073">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/senior-independent-software-developer-1858073">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1858073-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1858073">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Senior Independent Software Developer • A.Team</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=USA timezones" alt="remote in USA timezones">
USA timezones
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=European timezones" alt="remote in European timezones">
European timezones
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $90 - $150 /hou..
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1422554" data-joburl="/remote-jobs/software-dev/senior-wordpress-developer-1422554">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full lazyload" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1422554/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/senior-wordpress-developer-1422554">
<span class="remotive-bold">Senior Wordpress Developer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Proxify</span>
<span class="tw-block md:tw-hidden">Proxify</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 $40k - $75k
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=CET +/- 3 HOURS" alt="remote in CET +/- 3 HOURS">
CET +/- 3 HOURS
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span class="h2 remotive-tag-sky remotive-text-default-color tw-text-xs tw-mr-2">
New
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1422554">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/senior-wordpress-developer-1422554">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1422554-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1422554">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Senior Wordpress Developer • Proxify</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=CET +/- 3 HOURS" alt="remote in CET +/- 3 HOURS">
CET +/- 3 HOURS
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $40k - $75k
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1904844" data-joburl="/remote-jobs/customer-support/onboarding-manager-customer-success-1904844">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full lazyload" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1904844/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/customer-support/onboarding-manager-customer-success-1904844">
<span class="remotive-bold">Onboarding Manager - Customer Success</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Discourse</span>
<span class="tw-block md:tw-hidden">Discourse</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/customer-support">Customer Service</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 Salary dependen..
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=Americas" alt="remote in Americas">
Americas
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
1wk ago
</span>
</div>
<a job-source="job_list_landing" target="_blank" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1904844" href="/remote-jobs/customer-support/onboarding-manager-customer-success-1904844">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/customer-support/onboarding-manager-customer-success-1904844">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1904844-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" target="_blank" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1904844" href="/remote-jobs/customer-support/onboarding-manager-customer-success-1904844">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Onboarding Manager - Customer Success • Discourse</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=Americas" alt="remote in Americas">
Americas
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 Salary dependen..
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/customer-support">Customer Service</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1606658" data-joburl="/remote-jobs/software-dev/senior-flutter-developer-1606658">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full lazyload" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1606658/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/senior-flutter-developer-1606658">
<span class="remotive-bold">Senior Flutter Developer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Proxify</span>
<span class="tw-block md:tw-hidden">Proxify</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 $40k - $75k
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=CET +/- 3 HOURS" alt="remote in CET +/- 3 HOURS">
CET +/- 3 HOURS
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
1wk ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1606658">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/senior-flutter-developer-1606658">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1606658-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1606658">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Senior Flutter Developer • Proxify</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=CET +/- 3 HOURS" alt="remote in CET +/- 3 HOURS">
CET +/- 3 HOURS
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $40k - $75k
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1899214" data-joburl="/remote-jobs/software-dev/javascript-developer-1899214">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full lazyload" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1899214/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/javascript-developer-1899214">
<span class="remotive-bold">JavaScript Developer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">AKASHA</span>
<span class="tw-block md:tw-hidden">AKASHA</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=EMEA" alt="remote in EMEA">
EMEA
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=UK" alt="remote in UK">
UK
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
1wk ago
</span>
</div>
<a job-source="job_list_landing" target="_blank" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1899214" href="/remote-jobs/software-dev/javascript-developer-1899214">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/javascript-developer-1899214">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1899214-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1899214">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">JavaScript Developer • AKASHA</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=EMEA" alt="remote in EMEA">
EMEA
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=UK" alt="remote in UK">
UK
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1474923" data-joburl="/remote-jobs/software-dev/senior-react-developer-1474923">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full lazyload" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1474923/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/senior-react-developer-1474923">
<span class="remotive-bold">Senior React Developer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">lemon.io</span>
<span class="tw-block md:tw-hidden">lemon.io</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 $48k-$100k
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=LATAM" alt="remote in LATAM">
LATAM
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=Europe" alt="remote in Europe">
Europe
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=UK" alt="remote in UK">
UK
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=Canada" alt="remote in Canada">
Canada
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=APAC" alt="remote in APAC">
APAC
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
1wk ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1474923">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/senior-react-developer-1474923">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1474923-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1474923">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Senior React Developer • lemon.io</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=LATAM" alt="remote in LATAM">
LATAM
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=Europe" alt="remote in Europe">
Europe
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=UK" alt="remote in UK">
UK
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=Canada" alt="remote in Canada">
Canada
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=APAC" alt="remote in APAC">
APAC
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $48k-$100k
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1903636" data-joburl="/remote-jobs/software-dev/founding-cto-lead-developer-1903636">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full lazyload" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1903636/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/founding-cto-lead-developer-1903636">
<span class="remotive-bold">Founding CTO / Lead Developer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Webicient</span>
<span class="tw-block md:tw-hidden">Webicient</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 $60k-$70k
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
2wks ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1903636">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/founding-cto-lead-developer-1903636">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1903636-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1903636">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Founding CTO / Lead Developer • Webicient</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $60k-$70k
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1359476" data-joburl="/remote-jobs/software-dev/senior-ms-power-bi-developer-1359476">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full lazyload" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1359476/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/senior-ms-power-bi-developer-1359476">
<span class="remotive-bold">Senior MS Power BI Developer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Proxify</span>
<span class="tw-block md:tw-hidden">Proxify</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 $50k-$75k
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=CET +/- 3 HOURS" alt="remote in CET +/- 3 HOURS">
CET +/- 3 HOURS
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
2wks ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1359476">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/senior-ms-power-bi-developer-1359476">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1359476-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1359476">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Senior MS Power BI Developer • Proxify</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=CET +/- 3 HOURS" alt="remote in CET +/- 3 HOURS">
CET +/- 3 HOURS
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $50k-$75k
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<a class="remotive-only-public tw-flex tw-items-center tw-w-full tw-px-1 tw-py-4 tw-border tw-border-gray-200 tw-mb-2 tw-rounded-md remotive-bg-dark" href="/accelerator">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full remotive-text-sand tw-text-center" aria-hidden="true" style="font-size: 20px;">
<i class="fa fa-unlock-alt " aria-hidden="true"></i>
</span>
</div>
<p class="tw-text-sm remotive-bold remotive-text-sand">
Unlock 34,526 additional remote jobs, advanced search &amp; email notifications
</p>
<div style="margin-left: auto;" class="tw-px-2">
<span class="tw-px-4 tw-py-2 tw-text-xs remotive-btn-sand" style="white-space: nowrap;">
Get Access
</span>
</div>
</a>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1901967" data-joburl="/remote-jobs/design/designer-customer-projects-team-1901967">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full lazyload" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1901967/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/design/designer-customer-projects-team-1901967">
<span class="remotive-bold">Designer - Customer Projects Team</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Discourse</span>
<span class="tw-block md:tw-hidden">Discourse</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/design">Design</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 Dependent on lo..
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=Americas" alt="remote in Americas">
Americas
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
3wks ago
</span>
</div>
<a job-source="job_list_landing" target="_blank" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1901967" href="/remote-jobs/design/designer-customer-projects-team-1901967">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/design/designer-customer-projects-team-1901967">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1901967-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" target="_blank" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1901967" href="/remote-jobs/design/designer-customer-projects-team-1901967">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Designer - Customer Projects Team • Discourse</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=Americas" alt="remote in Americas">
Americas
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 Dependent on lo..
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/design">Design</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1591692" data-joburl="/remote-jobs/software-dev/senior-data-engineer-1591692">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full lazyload" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1591692/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/senior-data-engineer-1591692">
<span class="remotive-bold">Senior Data Engineer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Proxify</span>
<span class="tw-block md:tw-hidden">Proxify</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 $40k - $75k
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=CET +/- 3 HOURS" alt="remote in CET +/- 3 HOURS">
CET +/- 3 HOURS
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
3wks ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1591692">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/senior-data-engineer-1591692">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1591692-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1591692">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Senior Data Engineer • Proxify</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=CET +/- 3 HOURS" alt="remote in CET +/- 3 HOURS">
CET +/- 3 HOURS
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $40k - $75k
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1896242" data-joburl="/remote-jobs/data/rater-1896242">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full lazyload" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1896242/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/data/rater-1896242">
<span class="remotive-bold">Rater</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">TELUS International AI Inc.</span>
<span class="tw-block md:tw-hidden">TELUS International AI Inc.</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/data">Data Analysis</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 $12 - $14 / hou..
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<span class="location-symbol">🇺🇸</span>
USA Only
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
4wks ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1896242">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/data/rater-1896242">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1896242-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1896242">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Rater • TELUS International AI Inc.</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<span class="location-symbol">🇺🇸</span>
USA Only
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $12 - $14 / hou..
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/data">Data Analysis</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1858039" data-joburl="/remote-jobs/design/senior-independent-ux-ui-designer-1858039">
<div class="job-tile remotive-bg" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<img class="tw-bg-white tw-inline-block tw-w-8 tw-h-8 tw-rounded-full lazyload" alt="" width="32" height="32" data-lazyload="https://remotive.com/web/image/hr.job/1858039/logo/64x64">
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/design/senior-independent-ux-ui-designer-1858039">
<span class="remotive-bold">Senior Independent UX/UI Designer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">A.Team</span>
<span class="tw-block md:tw-hidden">A.Team</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/design">Design</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-sand" style="">
💸 $90 - $150 /hou..
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=USA timezones" alt="remote in USA timezones">
USA timezones
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=European timezones" alt="remote in European timezones">
European timezones
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
4wks ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1858039">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/design/senior-independent-ux-ui-designer-1858039">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1858039-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1858039">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Senior Independent UX/UI Designer • A.Team</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=USA timezones" alt="remote in USA timezones">
USA timezones
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=European timezones" alt="remote in European timezones">
European timezones
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $90 - $150 /hou..
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/design">Design</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1906222" data-joburl="/remote-jobs/software-dev/experienced-python-web-application-developer-1906222">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/experienced-python-web-application-developer-1906222">
<span class="remotive-bold">Experienced Python Web Application Developer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">KoboToolbox</span>
<span class="tw-block md:tw-hidden">KoboToolbox</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-off-white" style="">
💸 $87.5k - $140k
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span class="h2 remotive-tag-sky remotive-text-default-color tw-text-xs tw-mr-2">
New
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1906222">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/experienced-python-web-application-developer-1906222">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1906222-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1906222">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Experienced Python Web Application Developer • KoboToolbox</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $87.5k - $140k
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1899929" data-joburl="/remote-jobs/software-dev/react-native-engineer-1899929">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/react-native-engineer-1899929">
<span class="remotive-bold">React Native Engineer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Codifi </span>
<span class="tw-block md:tw-hidden">Codifi </span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-off-white" style="">
💸 $115-$130k
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<span class="location-symbol">🇺🇸</span>
USA Only
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span class="h2 remotive-tag-sky remotive-text-default-color tw-text-xs tw-mr-2">
New
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1899929">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/react-native-engineer-1899929">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1899929-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1899929">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">React Native Engineer • Codifi </span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<span class="location-symbol">🇺🇸</span>
USA Only
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $115-$130k
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1749306" data-joburl="/remote-jobs/all-others/office-assistant-1749306">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/all-others/office-assistant-1749306">
<span class="remotive-bold">Office Assistant </span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Coalition Technologies </span>
<span class="tw-block md:tw-hidden">Coalition Technologies </span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/all-others">All others</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-off-white" style="">
💸 $30k -$52k
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
3d ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1749306">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/all-others/office-assistant-1749306">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1749306-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1749306">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Office Assistant • Coalition Technologies </span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $30k -$52k
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/all-others">All others</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1895072" data-joburl="/remote-jobs/sales-business/sales-development-representative-1895072">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/sales-business/sales-development-representative-1895072">
<span class="remotive-bold">Sales Development Representative</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Hire5</span>
<span class="tw-block md:tw-hidden">Hire5</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/sales-business">Sales / Business</a>
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=LATAM" alt="remote in LATAM">
LATAM
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=USA timezones" alt="remote in USA timezones">
USA timezones
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
6d ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1895072">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/sales-business/sales-development-representative-1895072">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1895072-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1895072">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Sales Development Representative • Hire5</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=LATAM" alt="remote in LATAM">
LATAM
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=USA timezones" alt="remote in USA timezones">
USA timezones
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/sales-business">Sales / Business</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1905007" data-joburl="/remote-jobs/hr/hr-manager-1905007">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/hr/hr-manager-1905007">
<span class="remotive-bold">HR Manager</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Murmuration</span>
<span class="tw-block md:tw-hidden">Murmuration</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/hr">Human Resources</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-off-white" style="">
💸 $70k - $100k
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<span class="location-symbol">🇺🇸</span>
USA Only
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
1wk ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1905007">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/hr/hr-manager-1905007">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1905007-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1905007">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">HR Manager • Murmuration</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<span class="location-symbol">🇺🇸</span>
USA Only
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $70k - $100k
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/hr">Human Resources</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1904165" data-joburl="/remote-jobs/data/business-analyst-1904165">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/data/business-analyst-1904165">
<span class="remotive-bold">Business Analyst</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">maids.cc</span>
<span class="tw-block md:tw-hidden">maids.cc</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/data">Data Analysis</a>
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
1wk ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1904165">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/data/business-analyst-1904165">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1904165-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1904165">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Business Analyst • maids.cc</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/data">Data Analysis</a>
</span>
</div>
</div>
</div>
</div>
</li>
<a class="remotive-only-public tw-flex tw-items-center tw-w-full tw-px-1 tw-py-4 tw-border tw-border-gray-200 tw-mb-2 tw-rounded-md remotive-bg-dark" href="/accelerator">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full remotive-text-sand tw-text-center" aria-hidden="true" style="font-size: 20px;">
<i class="fa fa-unlock-alt " aria-hidden="true"></i>
</span>
</div>
<p class="tw-text-sm remotive-bold remotive-text-sand">
Unlock 34,526 additional remote jobs, advanced search &amp; email notifications
</p>
<div style="margin-left: auto;" class="tw-px-2">
<span class="tw-px-4 tw-py-2 tw-text-xs remotive-btn-sand" style="white-space: nowrap;">
Get Access
</span>
</div>
</a>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1763086" data-joburl="/remote-jobs/finance-legal/tax-expert-cpa-or-ea-1763086">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/finance-legal/tax-expert-cpa-or-ea-1763086">
<span class="remotive-bold">Tax Expert - CPA or EA</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Intuit </span>
<span class="tw-block md:tw-hidden">Intuit </span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/finance-legal">Finance / Legal</a>
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<span class="location-symbol">🇺🇸</span>
USA Only
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
2wks ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1763086">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/finance-legal/tax-expert-cpa-or-ea-1763086">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1763086-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1763086">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Tax Expert - CPA or EA • Intuit </span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<span class="location-symbol">🇺🇸</span>
USA Only
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/finance-legal">Finance / Legal</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1901263" data-joburl="/remote-jobs/sales-business/inside-sales-1901263">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/sales-business/inside-sales-1901263">
<span class="remotive-bold">Inside Sales</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Eurofins</span>
<span class="tw-block md:tw-hidden">Eurofins</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/sales-business">Sales / Business</a>
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<span class="location-symbol">🇺🇸</span>
USA Only
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
3wks ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1901263">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/sales-business/inside-sales-1901263">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1901263-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1901263">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Inside Sales • Eurofins</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<span class="location-symbol">🇺🇸</span>
USA Only
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/sales-business">Sales / Business</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1888014" data-joburl="/remote-jobs/all-others/online-hungarian-teacher-1888014">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/all-others/online-hungarian-teacher-1888014">
<span class="remotive-bold">Online Hungarian teacher</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Academia Europea International</span>
<span class="tw-block md:tw-hidden">Academia Europea International</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/all-others">All others</a>
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
3wks ago
</span>
</div>
<a job-source="job_list_landing" target="_blank" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1888014" href="/remote-jobs/all-others/online-hungarian-teacher-1888014">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/all-others/online-hungarian-teacher-1888014">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1888014-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" target="_blank" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1888014" href="/remote-jobs/all-others/online-hungarian-teacher-1888014">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Online Hungarian teacher • Academia Europea International</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/all-others">All others</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1680495" data-joburl="/remote-jobs/software-dev/front-end-developer-1680495">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/front-end-developer-1680495">
<span class="remotive-bold">Front End Developer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Coalition Technologies </span>
<span class="tw-block md:tw-hidden">Coalition Technologies </span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-off-white" style="">
💸 $31,2k- $72,8k
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
3wks ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1680495">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/front-end-developer-1680495">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1680495-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1680495">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Front End Developer • Coalition Technologies </span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img src="/remotive_website_job/static/src/img/worldwide-symbol.png" style="display:initial;" alt="worldwide" height="15px" width="15px" draggable="false" class="location-symbol">
Worldwide
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 $31,2k- $72,8k
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1900640" data-joburl="/remote-jobs/marketing/co-founder-commercial-officer-1900640">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/marketing/co-founder-commercial-officer-1900640">
<span class="remotive-bold">Co-Founder Commercial Officer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">EpiHelp AB</span>
<span class="tw-block md:tw-hidden">EpiHelp AB</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/marketing">Marketing</a>
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=Sweden" alt="remote in Sweden">
Sweden
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
3wks ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1900640">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/marketing/co-founder-commercial-officer-1900640">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1900640-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1900640">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Co-Founder Commercial Officer • EpiHelp AB</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=Sweden" alt="remote in Sweden">
Sweden
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/marketing">Marketing</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1896433" data-joburl="/remote-jobs/software-dev/sr-javascript-react-developer-1896433">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/software-dev/sr-javascript-react-developer-1896433">
<span class="remotive-bold">Sr. Javascript/React Developer</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">Appfigures</span>
<span class="tw-block md:tw-hidden">Appfigures</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<span class="location-symbol">🇺🇸</span>
USA Only
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
4wks ago
</span>
</div>
<a job-source="job_list_landing" target="_blank" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1896433" href="/remote-jobs/software-dev/sr-javascript-react-developer-1896433">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/software-dev/sr-javascript-react-developer-1896433">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1896433-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1896433">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">Sr. Javascript/React Developer • Appfigures</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<span class="location-symbol">🇺🇸</span>
USA Only
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/software-dev">Software Development</a>
</span>
</div>
</div>
</div>
</div>
</li>
<li class="tw-cursor-pointer" onclick="toggleLandingJob(this.id, this.dataset.joburl)" id="1900120" data-joburl="/remote-jobs/all-others/sea-manager-1900120">
<div class="job-tile remotive-bg-light" style="">
<div class="tw-flex-shrink-0 tw-px-2">
<span class="tw-inline-block tw-w-8 tw-h-8 tw-rounded-full" style="background: rgba(83, 42, 33, 0.1); border: 1px solid rgba(83, 42, 33, 0.04);vertical-align: middle;"></span>
</div>
<div>
<div class="job-tile-title">
<a data-prevent="true" class="remotive-url-visit tw-block md:tw-flex" href="/remote-jobs/all-others/sea-manager-1900120">
<span class="remotive-bold">🇩🇪 SEA-Manager</span>
<span style="margin: 0 0.25rem;" class="remotive-bold tw-hidden md:tw-block">•</span>
<span class="remotive-bold tw-hidden md:tw-block">AdRock Marketing</span>
<span class="tw-block md:tw-hidden">AdRock Marketing</span>
</a>
</div>
<div class="tw-text-xs tw-uppercase" style="display: flex;flex-wrap: wrap;">
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex tw-flex" style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/all-others">All others</a>
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex tw-flex remotive-text-off-white" style="">
💸 EUR 3000-4000 p..
</span>
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=Germany" alt="remote in Germany">
Germany
</span>
</div>
</div>
<div class="tw-hidden sm:tw-flex tw-items-center tw-justify-between tw-w-auto" style="margin-left: auto;">
<span style="white-space: nowrap;" class="tw-text-xs tw-mr-4 ">
4wks ago
</span>
</div>
<a job-source="job_list_landing" onclick="processApplyClick(this)" role="button" class="job-tile-apply tw-hidden remotive-btn-chocolate tw-mr-2 tw-ml-auto sm:tw-ml-0" job-id="1900120">
Apply
</a>
<a role="button" class="job-tile-apply tw-hidden remotive-btn-info tw-mr-2 tw-ml-auto sm:tw-ml-0" href="/remote-jobs/all-others/sea-manager-1900120">
See more &gt;
</a>
</div>
<div class="remotive-bg-light tw-text-center tw-p-6 tw-mb-4" style="display: none; margin-top:-0.5rem" id="1900120-description">
<div class="job-description"></div>
<div class="tw-border-gray-500 tw-pt-4 tw-block md:tw-flex tw-justify-between" style="border-top: 1px solid #EDE5D9;">
<div class="md:tw-text-left md:tw-flex tw-mt-4 md:tw-mt-0">
<a job-source="job_list_landing" onclick="processApplyClick(this)" style="height: 2.5rem;" role="button" class="remotive-btn-chocolate tw-my-2" job-id="1900120">
Apply for this position
</a>
</div>
<div class="md:tw-text-right tw-flex tw-flex-col tw-mt-4 md:tw-mt-0" style="align-items: center;">
<span class="remotive-bold">🇩🇪 SEA-Manager • AdRock Marketing</span>
<div class="tw-inline-flex tw-text-xs tw-uppercase tw-mt-2">
<span class="job-tile-location tw-uppercase tag-small remotive-tag-light tw-flex left-tag" style="">
<img style="display:initial;" height="15px" width="15px" draggable="false" class="location-symbol" src="/api/location/get-symbol?location=Germany" alt="remote in Germany">
Germany
</span>
<span class="job-tile-salary tw-uppercase tag-small remotive-tag-chocolate tw-flex " style="">
💸 EUR 3000-4000 p..
</span>
<span class="tw-uppercase tag-small remotive-tag-transparent tw-flex " style="">
<a class="job-tile-category remotive-url" data-prevent="true" href="/remote-jobs/all-others">All others</a>
</span>
</div>
</div>
</div>
</div>
</li>
</ul>
</div>
<div class="remotive-bg-dark remotive-text-sand remotive-only-public tw-p-8 tw-my-8 remotive-bg tw-rounded-md">
<div class="tw-text-center">
<span class="h2">
Want more remote jobs?
Upgrade to access 34,526 jobs!
</span>
</div>
<div class="tw-flex tw-mt-4">
<div class="tw-flex tw-mr-4" style="align-items: center; justify-content:center">
<i style="font-size: 150%" class="fa fa-diamond" aria-hidden="true"></i>
</div>
<div>
<div class="h3">Best Remote Job Listings</div>
<div>Only top quality remote jobs. We screen, curate &amp; categorize all jobs.</div>
</div>
</div>
<div class="tw-flex tw-mt-4">
<div class="tw-flex tw-mr-4" style="align-items: center; justify-content:center">
<i style="font-size: 150%" class="fa fa-search" aria-hidden="true"></i>
</div>
<div>
<div class="h3">Advanced Search Filters</div>
<div>Find remote jobs tailored to your location and experience. Entry level to executive. Startup to GAFAM.</div>
</div>
</div>
<div class="tw-flex tw-mt-4">
<div class="tw-flex tw-mr-4" style="align-items: center; justify-content:center">
<i style="font-size: 150%" class="fa fa-calendar-check-o" aria-hidden="true"></i>
</div>
<div>
<div class="h3">Save Time</div>
<div>We spend the equivalent of 300+ hours/day scanning every job for you. Get a job faster with personalized job alerts.</div>
</div>
</div>
<div class="tw-mt-8 tw-pt-4 tw-text-center">
<a class="remotive-btn-sand" href="https://remotive.com/accelerator#payment">Get Access
</a>
</div>
</div>
</div>
</div>
</div>
)
}

