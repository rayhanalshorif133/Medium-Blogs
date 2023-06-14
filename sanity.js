import { suspend } from 'suspend-react'
import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url'
import { _checkAuth } from '@sanity/preview-kit'
// lib/config.js
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-10-21',
    useCdn: process.env.NODE_ENV === 'production',
    // token: '<sanity access token>',
    // EventSource: ''
}

export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
const projectId = config.projectId;
export const useCurrentUser = () => suspend(() => _checkAuth(projectId, null), ['@sanity/preview-kit', 'checkAuth', projectId]);