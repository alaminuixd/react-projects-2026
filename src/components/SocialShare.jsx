import {
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";

import "./SocialShare.css";

const SOCIAL_CONFIG = {
  facebook: {
    label: "Share on Facebook",
    icon: FaFacebook,
    buildUrl: (url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },

  x: {
    label: "Share on X",
    icon: FaXTwitter,
    buildUrl: (url, title) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url,
      )}&text=${encodeURIComponent(title)}`,
  },

  linkedin: {
    label: "Share on LinkedIn",
    icon: FaLinkedin,
    buildUrl: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url,
      )}`,
  },

  pinterest: {
    label: "Share on Pinterest",
    icon: FaPinterest,
    buildUrl: (url, title) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        url,
      )}&description=${encodeURIComponent(title)}`,
  },

  reddit: {
    label: "Share on Reddit",
    icon: FaReddit,
    buildUrl: (url, title) =>
      `https://www.reddit.com/submit?url=${encodeURIComponent(
        url,
      )}&title=${encodeURIComponent(title)}`,
  },

  whatsapp: {
    label: "Share on WhatsApp",
    icon: FaWhatsapp,
    buildUrl: (url, title) =>
      `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
  },

  telegram: {
    label: "Share on Telegram",
    icon: FaTelegram,
    buildUrl: (url, title) =>
      `https://t.me/share/url?url=${encodeURIComponent(
        url,
      )}&text=${encodeURIComponent(title)}`,
  },
};

export default function SocialShare({
  items = ["facebook", "x", "linkedin"],
  url,
  title = "",
}) {
  return (
    <div className="social-share">
      {items.map((platform) => {
        const config = SOCIAL_CONFIG[platform];
        if (!config) return null;

        const Icon = config.icon;
        const shareUrl = config.buildUrl(url, title);

        return (
          <a
            key={platform}
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={config.label}
            className="social-share-button"
          >
            <Icon />
            <span className="tooltip">{config.label}</span>
          </a>
        );
      })}
    </div>
  );
}
