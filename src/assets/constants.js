import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 'POP_REACKS' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP_REACKS' },
  { title: 'Dance', value: 'DANCE_REACKS' },
  { title: 'Electronic', value: 'ELECTRONIC_REACKS' },
  { title: 'Alternative', value: 'ALTERNATIVE_REACKS' },
  { title: 'Rock', value: 'ROCK_REACKS' },
  { title: 'Latin', value: 'LATIN_REACKS' },
  { title: 'Worldwide', value: 'WORLDWIDE_REACKS' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL_REACKS' },
  { title: 'House', value: 'HOUSE_REACKS' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
