import { browser } from '$app/environment';

// FIXME: Just doing this for easy testing
if (browser) {
    window.location.href = '/build';
}

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
