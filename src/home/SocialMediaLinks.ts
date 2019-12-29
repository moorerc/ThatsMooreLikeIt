export interface SocialMediaLink {
  url: string;
  image: string;
  id: string;
}

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    url: "https://www.facebook.com/becky.moore.589",
    image: "img/icons/icon_facebook.png",
    id: "facebook"
  },
  {
    url: "https://twitter.com/tweetsbytots",
    image: "img/icons/icon_twitter.png",
    id: "twitter"
  },
  {
    url: "https://www.instagram.com/totsauce04/",
    image: "img/icons/icon_instagram.png",
    id: "instagram"
  },
  {
    url: "https://www.youtube.com/user/runmore04/videos",
    image: "img/icons/icon_youtube.png",
    id: "youtube"
  },
  {
    url: "https://www.linkedin.com/in/moorerc",
    image: "img/icons/icon_linkedin.png",
    id: "linked_in"
  }
];
