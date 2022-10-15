import { defineStore } from 'pinia'
import dbSneaker from '@/utils/sneakers.json';

export const sneakersStore = defineStore('sneakers', () => {
  const dbSneakers = dbSneaker
  const LINKIMAGES = `https://i.postimg.cc/`;

  return { dbSneakers, LINKIMAGES }
})
