import './style.css';
import AOS from 'aos';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Initialize AOS Animations
AOS.init({
	duration: 800,
	easing: 'ease-in-out',
	once: true,
});

Fancybox.bind('[data-fancybox="roomsforrent"]', {
	Hash: false,
	Thumbs: {
		autoStart: true,
	},
	Toolbar: {
		display: {
			left: ["infobar"],
			middle: [],
			right: ["slideshow", "fullscreen", "thumbs", "close"],
		},
	},
});