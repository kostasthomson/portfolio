import { EmailLink, GitHubLink, LinkedInLink, PhoneLink } from '.';

function SocialLinks() {
  return (
    <span className="flex justify-evenly mt-5 mb-2 flex-wrap">
      <PhoneLink />
      <EmailLink />
      <LinkedInLink />
      <GitHubLink />
    </span>
  );
}

export default SocialLinks;
