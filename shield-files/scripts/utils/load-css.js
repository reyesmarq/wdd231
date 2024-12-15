export function loadCss(url, deleteStyles = []) {
  // Select all <link> elements in the <head>
  const linkElements = document.querySelectorAll('head link[rel="stylesheet"]');
  console.log('🚀 ~ deleteStyles', deleteStyles);

  linkElements.forEach((link) => {
    console.log('🚀 ~ linkElements', linkElements);
    const href = link.getAttribute('href');

    // Check if the href matches any in the deleteStyles array
    if (deleteStyles.includes(href)) {
      console.log('🚀 ~ deleteStyles', deleteStyles);
      console.log('includes href ', deleteStyles.includes(href));
      link.remove(); // Remove the link element from the DOM
      console.log(`Removed: ${href}`);
    }
  });
  if (!document.querySelector(`link[href="${url}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
  }
}
