import playlist from "./Playlist";

export const randomizeIndex = (playlist) => 
    Math.floor(Math.random()* playlist.length)