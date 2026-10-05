import instagramGalleryImages from 'virtual:instagram-gallery-images'

// ============================================================
//  SINGLE SOURCE OF TRUTH — edit this file to update the site.
//  Anything marked PLACEHOLDER must be replaced with verified
//  information from the NGO. Nothing here is invented fact.
// ============================================================

export const ORG = {
  name: 'Jan Manav Kalyan Foundation',
  tagline: 'Serving Humanity, Creating Hope',
  hindiTagline: 'सेवा परमो धर्म:', // shown in the supplied design mockup; confirm with the NGO
  mission:
    'Working for a better tomorrow through education, healthcare, food distribution, blood donation and social welfare.',
  logo: '/images/media/jankalyan-logo.png',
}

export const SOCIAL = {
  instagram: 'https://www.instagram.com/janmanav_kalyan_foundation/',
  facebook: '#', // PLACEHOLDER — add official Facebook page URL
  youtube: '#', // PLACEHOLDER — add official YouTube channel URL
}

export const CONTACT = {
  address: '',
  phone: '+91 XXXXX XXXXX', // PLACEHOLDER
  email: 'info@example.org', // PLACEHOLDER
}

export const DONATION = {
  upiId: 'janmanavkalyan@sbi',
  upiQr: '/images/media/QR janamanv kalyan .jpeg',
  accountName: 'JANMANV KALYAN FOUNDATION',
  accountNumber: '20523190247',
  ifsc: 'SBIN0000090',
  bank: 'State Bank Of India',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Causes', to: '/causes' },
  { label: 'Our Work', to: '/work' },
  { label: 'Media', to: '/media' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

// Impact numbers: leave `value: null` until verified. When a number is
// supplied the card counts up to it automatically.
export const IMPACT = [
  { icon: 'HeartHandshake', value: null, label: 'People Supported', tone: 'leaf' },
  { icon: 'Heart', value: null, label: 'Community Initiatives', tone: 'saffron' },
  { icon: 'Users', value: null, label: 'Volunteers', tone: 'leaf' },
  { icon: 'CalendarDays', value: null, label: 'Events & Camps', tone: 'saffron' },
]

export const CAUSES = [
  { slug: 'education', icon: 'BookOpen', title: 'Education', text: 'Supporting learning opportunities for children and families.', image: '/images/instagram/insta3.webp' },
  { slug: 'healthcare', icon: 'Activity', title: 'Healthcare', text: 'Community healthcare support and awareness.', image: '/images/instagram/insta4.webp' },
  { slug: 'food', icon: 'Soup', title: 'Food Distribution', text: 'Providing food to those in need.', image: '/images/instsgram post/655987176_18069999431270939_3194857039852054680_n..webp' },
  { slug: 'blood', icon: 'Droplet', title: 'Blood Donation', text: 'Organizing blood donation camps.', image: '/images/instsgram post/655713653_18098869942784421_5885450048993260738_n..webp' },
  { slug: 'welfare', icon: 'Users', title: 'Community Welfare', text: 'Empowering communities through collective action.', image: '/images/instsgram post/656077685_18059426180691292_4985631946105061619_n..webp' },
  { slug: 'environment', icon: 'Leaf', title: 'Environment', text: 'Supporting a cleaner and greener future.', image: '/images/causes/environment.png' },
]

export const WORK_CATEGORIES = [
  'All', 'Food Distribution', 'Blood Donation', 'Community Events',
  'Volunteer Activities', 'Education', 'Healthcare', 'Social Awareness',
]

// Images in /public/images/instsgram are discovered automatically by Vite.
// Add or remove an image file in that folder, then refresh the site.
const INSTAGRAM_GALLERY_IMAGES = instagramGalleryImages.map((image, index) => ({
  id: `instagram-folder-${index}`,
  category: 'Community Events',
  title: 'Jan Manav Kalyan Foundation activity',
  date: '',
  image,
}))

// Replace with real photos. `title` and `date` must be verified; leave
// date as '' if unknown. Photos live in /public/images/work/.
export const WORK = [
  ...INSTAGRAM_GALLERY_IMAGES,
  { id: 'instagram-post-1', category: 'Community Events', title: 'Jan Manav Kalyan Foundation activity', date: '', image: '/images/instsgram post/625261739_18045333059713672_8242698759258600782_n..webp' },
  { id: 'instagram-post-2', category: 'Community Events', title: 'Jan Manav Kalyan Foundation activity', date: '', image: '/images/instsgram post/655450985_18155250109444012_2279890235362913082_n..webp' },
  { id: 'instagram-post-3', category: 'Community Events', title: 'Jan Manav Kalyan Foundation activity', date: '', image: '/images/instsgram post/655713653_18098869942784421_5885450048993260738_n..webp' },
  { id: 'instagram-post-4', category: 'Community Events', title: 'Jan Manav Kalyan Foundation activity', date: '', image: '/images/instsgram post/655987176_18069999431270939_3194857039852054680_n..webp' },
  { id: 'instagram-post-5', category: 'Community Events', title: 'Jan Manav Kalyan Foundation activity', date: '', image: '/images/instsgram post/656077685_18059426180691292_4985631946105061619_n..webp' },
  { id: 'instagram-post-6', category: 'Community Events', title: 'Jan Manav Kalyan Foundation activity', date: '', image: '/images/instagram/insta3.webp' },
  { id: 'instagram-post-7', category: 'Community Events', title: 'Jan Manav Kalyan Foundation activity', date: '', image: '/images/instsgram post/658380524_18309529420287319_7949303713269082549_n..webp' },
  { id: 'instagram-image-3', category: 'Community Events', title: 'Jan Manav Kalyan Foundation activity', date: '', image: '/images/instagram/insta3.webp' },
  { id: 'instagram-image-2', category: 'Community Events', title: 'Jan Manav Kalyan Foundation activity', date: '', image: '/images/instagram/insta2.webp' },
  {
    id: 'instagram-c-dg5sry3rd',
    category: 'Community Events',
    title: 'View our Instagram post',
    date: '',
    instagramUrl: 'https://www.instagram.com/p/C-dG5Sry3rd/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
  },
  { id: 1, category: 'Food Distribution', title: 'Community food distribution', date: '', image: '/images/work/work-1.jpg', tall: true },
  { id: 2, category: 'Blood Donation', title: 'Blood donation camp', date: '', image: '/images/work/work-2.jpg' },
  { id: 3, category: 'Education', title: 'Education support', date: '', image: '/images/work/work-3.jpg' },
  { id: 4, category: 'Community Events', title: 'Community gathering', date: '', image: '/images/work/work-4.jpg' },
  { id: 5, category: 'Volunteer Activities', title: 'Volunteers at work', date: '', image: '/images/work/work-5.jpg', tall: true },
  { id: 6, category: 'Healthcare', title: 'Healthcare support', date: '', image: '/images/work/work-6.jpg' },
  { id: 7, category: 'Social Awareness', title: 'Awareness activity', date: '', image: '/images/work/work-7.jpg' },
  { id: 8, category: 'Environment', title: 'Plantation activity', date: '', image: '/images/work/work-8.jpg' },
]

// Only what is visibly printed in the supplied clipping may be added.
export const MEDIA = [
  {
    id: 'clip-1',
    image: '/images/instagram/insta2.webp',
    alt: 'Newspaper clipping covering a blood donation camp organised by Jan Manav Kalyan Foundation',
    headline: 'जनमानव कल्याण फाउंडेशन ने लगाया रक्तदान शिविर, 11 लोगों ने किया रक्तदान', // visible in supplied clipping
  },
  {
    id: 'clip-2',
    image: '/images/instagram/insta5.webp',
    alt: 'Second newspaper clipping featuring a Foundation camp',
    headline: '',
  },
]

export const STORIES = [
  { id: 1, title: 'Foundation Activity', text: 'A moment from our community initiatives.', video: '/images/instagram/insta1.mp4', date: '' },
  { id: 2, title: 'Foundation Activity', text: 'A moment from our community initiatives.', video: '/images/instagram/insta2.mp4', poster: '/images/instagram/insta2.webp', date: '' },
  { id: 3, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instagram/insta3.webp', date: '' },
  { id: 4, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instagram/insta4.webp', date: '' },
  { id: 5, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instagram/insta5.webp', date: '' },
  { id: 6, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instsgram post/625261739_18045333059713672_8242698759258600782_n..webp', date: '' },
  { id: 7, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instsgram post/655450985_18155250109444012_2279890235362913082_n..webp', date: '' },
  { id: 8, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instsgram post/655713653_18098869942784421_5885450048993260738_n..webp', date: '' },
  { id: 9, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instsgram post/655987176_18069999431270939_3194857039852054680_n..webp', date: '' },
  { id: 10, title: 'Foundation Activity', text: 'A moment from our community initiatives.', image: '/images/instsgram post/658380524_18309529420287319_7949303713269082549_n..webp', date: '' },
]

export const VOLUNTEER_PHOTOS = [
  { image: '/images/volunteers/v-1.jpg', alt: 'Volunteers of Jan Manav Kalyan Foundation at a community activity' },
  { image: '/images/volunteers/v-2.jpg', alt: 'Foundation members and volunteers working together' },
  { image: '/images/volunteers/v-3.jpg', alt: 'Volunteers distributing food to the community' },
]

// Use only posts the NGO has permission to reuse.
export const INSTAGRAM_POSTS = [
  '/images/instagram/insta2.webp',
  '/images/instagram/insta3.webp',
  '/images/instagram/insta4.webp',
  '/images/instagram/insta5.webp',
  '/images/instsgram post/625261739_18045333059713672_8242698759258600782_n..webp',
  '/images/instsgram post/655450985_18155250109444012_2279890235362913082_n..webp',
].map((image, index) => ({
  image,
  alt: `Moment from Jan Manav Kalyan Foundation's Instagram, photo ${index + 1}`,
}))
