import Image from 'next/image'
import { forwardRef } from 'react'

const Footer = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <footer ref={ref} className="bg-[#23707A] text-white py-12 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-8 lg:space-y-0">
          {/* Logo, Tagline, and Button */}
          <div className="flex flex-col items-start space-y-4 lg:w-1/4">
            <Image src="/Assets/Asset 10 1.svg" alt="Creative Builders Logo" width={150} height={40} />
            <p className="text-sm">
              Your all-in-one powerhouse<br />
              to launch and scale<br />
              simple and extensive projects.
            </p>
            <button className="bg-[#22c55e] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center transition-colors hover:bg-[#1ea34e]">
              Build with us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="mt-8 lg:mt-0 lg:w-1/4">
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm">+2348108957186</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm">info@creativebuilders.com.ng</span>
            </div>
          </div>
            
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 text-sm lg:w-2/3">
            {['About Us', 'Services', 'Partner', 'Careers', 'Legal'].map((category) => (
              <div key={category}>
                <h3 className="text-[#22c55e] font-semibold mb-3">{category}</h3>
                <ul className="space-y-2">
                  {getLinksForCategory(category).map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-[#1a5e5e]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 Creative Builders. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              {['twitter', 'linkedin', 'facebook', 'youtube', 'instagram'].map((social) => (
                <a key={social} href={`#${social}`} className="text-white hover:text-[#22c55e] transition-colors">
                  <span className="sr-only">{social}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {getSocialIcon(social)}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

function getLinksForCategory(category: string) {
  const links = {
    'About Us': ['Contact Us', 'Work with us', 'Portfolio', 'Blog', 'FAQs', 'Get Started'],
    'Services': ['Graphics Design', 'UI/UX Design', 'Video Production', 'Visual Identity', 'Web Development', 'App Development'],
    'Partner': ['Partner with us', 'Sponsors', 'Got an idea?', 'About Us'],
    'Careers': ['Join the team', 'Freelance', 'About Us'],
    'Legal': ['Terms', 'Privacy', 'Cookies', 'Licenses']
  }
  return links[category as keyof typeof links] || []
}

function getSocialIcon(social: string) {
  switch (social) {
    case 'twitter':
      return <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    case 'linkedin':
      return <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></>
    case 'facebook':
      return <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    case 'youtube':
      return <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></>
    case 'instagram':
      return <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></>
    default:
      return null
  }
}

export default Footer