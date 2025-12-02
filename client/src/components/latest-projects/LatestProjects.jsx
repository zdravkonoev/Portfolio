//import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import  ccdCorporateWebsite from "../../assets/images/ccd-corporate-website2.png"
import  atozCorporateWebsite from "../../assets/images/atoz-corporate-website.png"
import  virginiaCorporateWebsite from "../../assets/images/virginia-sheet-metal.png"
import  projectManagementSkillsImage from "../../assets/images/project-management-skills.png"

export default function LatestProjects() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">Design faster</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold leading-snug tracking-tight text-balance text-gray-950 sm:text-5xl">
          Latest Projects Built Through Creativity & Collaboration
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Recent Web Designs Work
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Here you can explore some of my latest web design projects, created with a focus on clean aesthetics and user-centered experiences.
                </p>
              </div>
              <div className="@container object-center relative  max-h-120 w-80 grow max-lg:mx-auto max-lg:max-w-sm mx-auto">
                <div className="inset-x-10 mt-4 overflow-hidden rounded-[5cqw] shadow-2xl saturate-70  hue-rotate-35 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:saturate-100 hover:hue-rotate-0">
                  <a href="https://www.callcenterdashboards.com/" target="_blank">
                    <img
                    alt="Call Center Dashboards Corporate Website"
                    src={ccdCorporateWebsite}
                    className="size-full object-cover object-top object-center"
                  />
                  </a>
                </div>
              </div>
              <div className="@container object-center relative  max-h-120 w-80 grow max-lg:mx-auto max-lg:max-w-sm mx-auto">
                <div className="inset-x-10 my-4 overflow-hidden rounded-[5cqw] shadow-2xl saturate-70 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:saturate-100">
                  <a href="https://atozinit.com/" target="_blank">
                    <img
                      alt="Call Center Dashboards Corporate Website"
                      src={atozCorporateWebsite}
                      className="size-full object-cover object-top object-center"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 min-h-40">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Project Management Skills</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Key strengths in planning, organizing, and executing projects.
                </p>
              </div>
              
              <div className="relative bg-[#afa2d7] b-0 flex-1 items-center object-fill h-100 min-h-30 justify-center px-0 max-lg:pt-0 max-lg:pb-0 lg:pb-0">
                <img
                  alt=""
                  src={projectManagementSkillsImage}
                  className="w-100 inset-x-0 bottom-0 mx-auto"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Hosting, Security, Infrastructure</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  With expertise in security and infrastructure, I create safe, scalable, and efficient systems for growing digital platforms.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Upcoming Projects
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Explore some of the projects that are currently in development and coming soon.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10 saturate-70 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:saturate-100">
                  <a href="http://sheetmetalvirginia.com/" target="_blank">
                    <img
                    alt="Virginia Sheet Metal Corporate Website"
                    src={virginiaCorporateWebsite}
                    className="size-full object-cover object-top object-center"
                  />
                  </a>
                  {/* <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div> */}
                  <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}