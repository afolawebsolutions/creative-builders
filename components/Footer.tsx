import Image from 'next/image';
import { Fira_Code } from 'next/font/google';
import { forwardRef, RefObject } from 'react';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface FooterProps {
  contactSectionRef: RefObject<HTMLDivElement>;
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(({ contactSectionRef }, ref) => {
  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer ref={ref} className={`${firaCode.className} bg-[#2E1F30] text-white py-12 px-6 md:px-[5%] lg:py-[3%] `}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start justify-center md:justify-start space-y-8 md:space-y-0 gap-9 lg:gap-[10%] lg:pb-8 lg:pt-3">
          <div className="flex flex-col items-center lg:items-start space-y-4 lg:w-1/4">
            <Image src="/Assets/Asset 10 1.svg" alt="Creative Builders Logo" width={150} height={40} />
            <p className=" font-extralight lg:text-left text-center text-lg  ">
              Your all-in-one powerhouse<br />
              to launch and scale<br />
              simple and extensive projects.
            </p>
            <button onClick={() => scrollToSection(contactSectionRef)} className="bg-[#6BBD00] text-white px-2 py-2 rounded-xl text-[12px] md:text-[16px] font-[20] flex items-center transition-colors hover:bg-[#4cbd00e6] w-fit  ">
              Build with us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-[12px] md:text-base">+2348108957186</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-[12px] md:text-base">info@creativebuilders.com.ng</span>
            </div>
          </div>

          <div className="flex flex-row gap-8 flex-wrap md:justify-around w-full">
            {['About Us', 'Legal', 'Careers', 'Services', 'Partners'].map((category) => (
              <div key={category}>
                <h3 className="text-[#FF00A1] font-medium text-[22px] my-5">{category}</h3>
                <ul className="md:space-y-7 space-y-4 font-[12] text-[12px] text-gray-200">
                  {getLinksForCategory(category).map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-white  font-thin ">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-[12px] md:text-[14px]">&copy; 2024 Creative Builders. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              {[
                { name: 'discord', url: 'https://discord.gg/nnkbfpNa' },
                { name: 'twitter', url: 'https://x.com/Creatives_Build' },
                { name: 'linkedin', url: 'https://www.linkedin.com/company/creativesbuild/' },
                { name: 'facebook', url: '#facebook' },
                { name: 'youtube', url: '#youtube' },
                { name: 'instagram', url: 'https://www.instagram.com/creativebuilders_/' }
              ].map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-[#FF00A1] hover:text-[#ff00bb] transition-colors">
                  <span className="sr-only">{social.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {getSocialIcon(social.name)}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer'

function getLinksForCategory(category: string) {
  const links = {
    'About Us': ['Contact Us', 'Work with us', 'Portfolio', 'Blog', 'FAQs', 'Get Started'],
    'Legal': ['Terms', 'Privacy', 'Cookies', 'Licenses'],
    'Careers': ['Join the team', 'Freelance', 'About Us'],
    'Services': ['Graphics Design', 'UI/UX Design', 'Video Production', 'Visual Identity', 'Web Development', 'App Development'],
    'Partners': ['Partner with us', 'Sponsors', 'Got an idea?', 'About Us'],

    
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
    case 'discord':
      return <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
    default:
      return null
  }
}

export default Footer