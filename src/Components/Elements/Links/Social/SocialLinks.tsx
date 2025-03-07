import { EmailLink, GitHubLink, LinkedInLink, PhoneLink } from '.';

function SocialLinks() {
  return (
    <div className="grid grid-rows-auto grid-cols-2 sm:grid-cols-4 grid-flow-row mt-5 mb-2 gap-x-2 gap-y-2 justify-items-center items-center">
      <PhoneLink />
      <EmailLink />
      <LinkedInLink />
      <GitHubLink />
    </div>
  );
}

export default SocialLinks;
