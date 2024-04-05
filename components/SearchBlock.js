import React from 'react'

const SearchBlock: React.FC<ISearchBlockProps> = props => {
  return (
    <div class="tw-py-10 tw-mt-16 tw-text-center remotive-bg-light tw-relative">
    <div class="tw-px-4 tw-mx-auto md:tw-container md:tw-px-6 lg:tw-px-8">
    <div class="landing-title">
    <h1 class="tw-text-2xl sm:tw-text-4xl">
    <span class="tw-block">Find your dream remote job without the hassle</span>
    </h1>
    <p class="">
    Remotive is where top talents go to easily access active and fully remote job opportunities from
    vetted tech companies.
    </p>
    <p class="remotive-only-public">Unlock 34,526 additional remote jobs with
    <a class="remotive-url tw-underline" href="https://remotive.com/accelerator">Remotive Accelerator</a>
    </p>
    </div>
    <div class="md:tw-flex">
    <div class="tw-hidden md:tw-mr-4 md:tw-flex-none md:tw-w-1/4 md:tw-block"></div>
    <div class="tw-flex-grow" style="min-height:115px;">
    <div id="search-bar" class="tw-w-full xl:tw-w-3/4">
    <div id="search-inputs" class="tw-items-center tw-flex">
    <div id="autocomplete" class="tw-w-full"><div class="aa-Autocomplete" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="autocomplete-0-label"><form class="aa-Form" action="" novalidate="" role="search"><div class="aa-InputWrapperPrefix"><label class="aa-Label" for="autocomplete-0-input" id="autocomplete-0-label"><button class="aa-SubmitButton" type="submit" title="Submit"><svg class="aa-SubmitIcon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></svg></button></label><div class="aa-LoadingIndicator" hidden=""><svg class="aa-LoadingIcon" viewBox="0 0 100 100" width="20" height="20"><circle cx="50" cy="50" fill="none" r="35" stroke="currentColor" stroke-dasharray="164.93361431346415 56.97787143782138" stroke-width="6">
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;90 50 50;180 50 50;360 50 50" keyTimes="0;0.40;0.65;1"></animateTransform>
    </circle></svg></div></div><div class="aa-InputWrapper"><input class="aa-Input" aria-autocomplete="both" aria-labelledby="autocomplete-0-label" id="autocomplete-0-input" autocomplete="off" autocorrect="off" autocapitalize="off" enterkeyhint="search" spellcheck="false" placeholder="Search 2,000 Remote Jobs..." maxlength="512" type="search"></div><div class="aa-InputWrapperSuffix"><button class="aa-ClearButton" type="reset" title="Clear" hidden=""><svg class="aa-ClearIcon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg></button></div></form></div></div>
    <div id="categories" class="tw-hidden"><div class="ais-MenuSelect ais-MenuSelect--noRefinement"><select class="ais-MenuSelect-select"><option class="ais-MenuSelect-option" value="">All Categories</option></select></div></div>
    </div>
    <div>
    <ul class="searchbar-category-list tw-flex tw-items-center tw-mt-2">
    <li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/software-dev">Software Development</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/software-dev">
    Software Development
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/customer-support">Customer Service</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/customer-support">
    Customer Service
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/design">Design</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/design">
    Design
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/marketing">Marketing</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/marketing">
    Marketing
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/sales-business">Sales / Business</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/sales-business">
    Sales / Business
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/product">Product</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/product">
    Product
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/project-management">Project Management</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/project-management">
    Project Management
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/data">Data Analysis</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/data">
    Data Analysis
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/devops">DevOps / Sysadmin</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/devops">
    DevOps / Sysadmin
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/finance-legal">Finance / Legal</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/finance-legal">
    Finance / Legal
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/hr">Human Resources</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/hr">
    Human Resources
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/qa">QA</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/qa">
    QA
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/writing">Writing</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/writing">
    Writing
    </span>
    </li><li class="tw-mt-2 tw-mr-2 tw-text-sm remotive-tag-light">
    <a class="tw-hidden" href="/remote-jobs/all-others">All others</a>
    <span style="cursor:pointer" onclick="redirectToDynamicLink(this);" href="/remote-jobs/all-others">
    All others
    </span>
    </li>
    <li class="tw-mt-2 tw-text-sm tw-hidden">
    <a class="" href="/remote-jobs">See All Jobs
    </a>
    </li>
    </ul>
    </div>
    <div class="tags-container"></div>
    <div class="tw-flex tw-justify-between">
    <div id="clear-refinements"><button id="clear-tags" class="aa-TagRemoveButton tw-flex tw-hidden" style="color: black; align-items: center;"><svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18"></path><path d="M6 6L18 18"></path></svg>Clear all tags</button></div>
    <div id="powered-by"><div class="ais-PoweredBy ais-PoweredBy--light tw-mt-2 tw-flex tw-justify-end"><a href="https://www.algolia.com/?utm_source=instantsearch.js&amp;utm_medium=website&amp;utm_content=remotive.com&amp;utm_campaign=poweredby" target="_blank" class="ais-PoweredBy-link tw-text-xs" aria-label="Search by Algolia" rel="noopener noreferrer"><svg height="1.2em" class="ais-PoweredBy-logo" viewBox="0 0 168 24" style="width: auto;"><path fill="#5D6494" d="M6.97 6.68V8.3a4.47 4.47 0 00-2.42-.67 2.2 2.2 0 00-1.38.4c-.34.26-.5.6-.5 1.02 0 .43.16.77.49 1.03.33.25.83.53 1.51.83a7.04 7.04 0 011.9 1.08c.34.24.58.54.73.89.15.34.23.74.23 1.18 0 .95-.33 1.7-1 2.24a4 4 0 01-2.6.81 5.71 5.71 0 01-2.94-.68v-1.71c.84.63 1.81.94 2.92.94.58 0 1.05-.14 1.39-.4.34-.28.5-.65.5-1.13 0-.29-.1-.55-.3-.8a2.2 2.2 0 00-.65-.53 23.03 23.03 0 00-1.64-.78 13.67 13.67 0 01-1.11-.64c-.12-.1-.28-.22-.46-.4a1.72 1.72 0 01-.39-.5 4.46 4.46 0 01-.22-.6c-.07-.23-.1-.48-.1-.75 0-.91.33-1.63 1-2.17a4 4 0 012.57-.8c.97 0 1.8.18 2.47.52zm7.47 5.7v-.3a2.26 2.26 0 00-.5-1.44c-.3-.35-.74-.53-1.32-.53-.53 0-.99.2-1.37.58a2.9 2.9 0 00-.72 1.68h3.91zm1 2.79v1.4c-.6.34-1.38.51-2.36.51a4.02 4.02 0 01-3-1.13 4.04 4.04 0 01-1.11-2.97c0-1.3.34-2.32 1.02-3.06a3.38 3.38 0 012.6-1.1c1.03 0 1.85.32 2.46.96.6.64.9 1.57.9 2.78 0 .33-.03.68-.09 1.04h-5.31c.1.7.4 1.24.89 1.61.49.38 1.1.56 1.85.56.86 0 1.58-.2 2.15-.6zm6.61-1.78h-1.21c-.6 0-1.05.12-1.35.36-.3.23-.46.53-.46.89 0 .37.12.66.36.88.23.2.57.32 1.02.32.5 0 .9-.15 1.2-.43.3-.28.44-.65.44-1.1v-.92zm-4.07-2.55V9.33a4.96 4.96 0 012.5-.55c2.1 0 3.17 1.03 3.17 3.08V17H22.1v-.96c-.42.68-1.15 1.02-2.19 1.02-.76 0-1.38-.22-1.84-.66-.46-.44-.7-1-.7-1.68 0-.78.3-1.38.88-1.81.59-.43 1.4-.65 2.46-.65h1.34v-.46c0-.55-.13-.97-.4-1.25-.26-.29-.7-.43-1.32-.43-.86 0-1.65.24-2.35.72zm9.34-1.93v1.42c.39-1 1.1-1.5 2.12-1.5.15 0 .31.02.5.05v1.53c-.23-.1-.48-.14-.76-.14-.54 0-.99.24-1.34.71a2.8 2.8 0 00-.52 1.71V17h-1.57V8.91h1.57zm5 4.09a3 3 0 00.76 2.01c.47.53 1.14.8 2 .8.64 0 1.24-.18 1.8-.53v1.4c-.53.32-1.2.48-2 .48a3.98 3.98 0 01-4.17-4.18c0-1.16.38-2.15 1.14-2.98a4 4 0 013.1-1.23c.7 0 1.34.15 1.92.44v1.44a3.24 3.24 0 00-1.77-.5A2.65 2.65 0 0032.33 13zm7.92-7.28v4.58c.46-1 1.3-1.5 2.5-1.5.8 0 1.42.24 1.9.73.48.5.72 1.17.72 2.05V17H43.8v-5.1c0-.56-.14-.99-.43-1.29-.28-.3-.65-.45-1.1-.45-.54 0-1 .2-1.42.6-.4.4-.61 1.02-.61 1.85V17h-1.56V5.72h1.56zM55.2 15.74c.6 0 1.1-.25 1.5-.76.4-.5.6-1.16.6-1.95 0-.92-.2-1.62-.6-2.12-.4-.5-.92-.74-1.55-.74-.56 0-1.05.22-1.5.67-.44.45-.66 1.13-.66 2.06 0 .96.22 1.67.64 2.14.43.47.95.7 1.57.7zM53 5.72v4.42a2.74 2.74 0 012.43-1.34c1.03 0 1.86.38 2.51 1.15.65.76.97 1.78.97 3.05 0 1.13-.3 2.1-.92 2.9-.62.81-1.47 1.21-2.54 1.21s-1.9-.45-2.46-1.34V17h-1.58V5.72H53zm9.9 11.1l-3.22-7.9h1.74l1 2.62 1.26 3.42c.1-.32.48-1.46 1.15-3.42l.91-2.63h1.66l-2.92 7.87c-.78 2.07-1.96 3.1-3.56 3.1-.28 0-.53-.02-.73-.07v-1.34c.17.04.35.06.54.06 1.03 0 1.76-.57 2.17-1.7z"></path><path fill="#5468FF" d="M78.99.94h16.6a2.97 2.97 0 012.96 2.96v16.6a2.97 2.97 0 01-2.97 2.96h-16.6a2.97 2.97 0 01-2.96-2.96V3.9A2.96 2.96 0 0179 .94"></path><path fill="#FFF" d="M89.63 5.97v-.78a.98.98 0 00-.98-.97h-2.28a.98.98 0 00-.97.97V6c0 .09.08.15.17.13a7.13 7.13 0 013.9-.02c.08.02.16-.04.16-.13m-6.25 1L83 6.6a.98.98 0 00-1.38 0l-.46.46a.97.97 0 000 1.38l.38.39c.06.06.15.04.2-.02a7.49 7.49 0 011.63-1.62c.07-.04.08-.14.02-.2m4.16 2.45v3.34c0 .1.1.17.2.12l2.97-1.54c.06-.03.08-.12.05-.18a3.7 3.7 0 00-3.08-1.87c-.07 0-.14.06-.14.13m0 8.05a4.49 4.49 0 110-8.98 4.49 4.49 0 010 8.98m0-10.85a6.37 6.37 0 100 12.74 6.37 6.37 0 000-12.74"></path><path fill="#5468FF" d="M120.92 18.8c-4.38.02-4.38-3.54-4.38-4.1V1.36l2.67-.42v13.25c0 .32 0 2.36 1.71 2.37v2.24zm-10.84-2.18c.82 0 1.43-.04 1.85-.12v-2.72a5.48 5.48 0 00-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.11-.44.28-.58.49a.93.93 0 00-.22.65c0 .63.22 1 .61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.62.11 2.23.33.6.22 1.09.53 1.44.92.36.4.61.92.76 1.48.16.56.23 1.17.23 1.85v6.87a21.69 21.69 0 01-4.68.5c-.69 0-1.32-.07-1.9-.2a4 4 0 01-1.46-.63 3.3 3.3 0 01-.96-1.13 4.3 4.3 0 01-.34-1.8 3.13 3.13 0 011.43-2.63c.45-.3.95-.5 1.54-.62a8.8 8.8 0 013.79.05v-.44c0-.3-.04-.6-.11-.87a1.78 1.78 0 00-1.1-1.22 3.2 3.2 0 00-1.15-.2 9.75 9.75 0 00-2.95.46l-.33-2.19a11.43 11.43 0 013.56-.53zm52.84 9.63c.82 0 1.43-.05 1.85-.13V13.7a5.42 5.42 0 00-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.12-.44.28-.58.5a.93.93 0 00-.22.65c0 .63.22.99.61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.63.11 2.23.33.6.22 1.1.53 1.45.92.35.39.6.92.76 1.48.15.56.23 1.18.23 1.85v6.88c-.41.08-1.03.19-1.87.31-.83.12-1.77.18-2.81.18-.7 0-1.33-.06-1.9-.2a4 4 0 01-1.47-.63c-.4-.3-.72-.67-.95-1.13a4.3 4.3 0 01-.34-1.8c0-.66.13-1.08.38-1.53.26-.45.61-.82 1.05-1.1.44-.3.95-.5 1.53-.62a8.8 8.8 0 013.8.05v-.43c0-.31-.04-.6-.12-.88-.07-.28-.2-.52-.38-.73a1.78 1.78 0 00-.73-.5c-.3-.1-.68-.2-1.14-.2a9.85 9.85 0 00-2.95.47l-.32-2.19a11.63 11.63 0 013.55-.53zm-8.03-1.27a1.62 1.62 0 000-3.24 1.62 1.62 0 100 3.24zm1.35 13.22h-2.7V7.27l2.7-.42V18.8zm-4.72 0c-4.38.02-4.38-3.54-4.38-4.1l-.01-13.34 2.67-.42v13.25c0 .32 0 2.36 1.72 2.37v2.24zm-8.7-5.9a4.7 4.7 0 00-.74-2.79 2.4 2.4 0 00-2.07-1 2.4 2.4 0 00-2.06 1 4.7 4.7 0 00-.74 2.8c0 1.16.25 1.94.74 2.62a2.4 2.4 0 002.07 1.02c.88 0 1.57-.34 2.07-1.02a4.2 4.2 0 00.73-2.63zm2.74 0a6.46 6.46 0 01-1.52 4.23c-.49.53-1.07.94-1.76 1.22-.68.29-1.73.45-2.26.45a6.6 6.6 0 01-2.25-.45 5.1 5.1 0 01-2.88-3.13 7.3 7.3 0 01-.01-4.84 5.13 5.13 0 012.9-3.1 5.67 5.67 0 012.22-.42c.81 0 1.56.14 2.24.42.69.29 1.28.69 1.75 1.22.49.52.87 1.15 1.14 1.89a7 7 0 01.43 2.5zm-20.14 0c0 1.11.25 2.36.74 2.88.5.52 1.13.78 1.91.78a4.07 4.07 0 002.12-.6V9.33c-.19-.04-.99-.2-1.76-.23a2.67 2.67 0 00-2.23 1 4.73 4.73 0 00-.78 2.8zm7.44 5.27c0 1.82-.46 3.16-1.4 4-.94.85-2.37 1.27-4.3 1.27-.7 0-2.17-.13-3.34-.4l.43-2.11c.98.2 2.27.26 2.95.26 1.08 0 1.84-.22 2.3-.66.46-.43.68-1.08.68-1.94v-.44a5.2 5.2 0 01-2.54.6 5.6 5.6 0 01-2.01-.36 4.2 4.2 0 01-2.58-2.71 9.88 9.88 0 01.02-5.35 4.92 4.92 0 012.93-2.96 6.6 6.6 0 012.43-.46 19.64 19.64 0 014.43.66v10.6z"></path></svg></a></div></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <img class="tw-hidden xl:tw-block" src="/remotive_website_layout/static/src/brand/X1/symbol_orange_r20.png" alt="Remotive" width="200" height="200" draggable="false" style="opacity: 0.1; position: absolute; bottom: 5%; right: 2rem; width: auto; height: 200px;">
    </div>
  )
}

SearchBlock.defaultProps = {}
