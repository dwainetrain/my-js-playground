"This is important: Values declared using relative units are evaluated by the browser to an absolute value, called the computed value.

"TIP If you know the pixel-based font size you’d like, but want to specify the declaration in ems, here’s a simple formula: divide the desired pixel size by the parent (inherited) pixel size. For example, if you want a 10 px font and your element is inheriting a 12 px font, 10 / 12 = 0.8333 em. If you want a 16 px font and the parent font is 12 px, 16 / 12 = 1.3333 em. We’ll do this calcu- lation several times throughout this chapter. - pg. 

EM is a calculated value! Meaning it continues to calculate down, ie if body is 16, div is em 1.2, and p within div is em 1.2, div will be 16 * 1.2, and p in div will be 16 * 1.2 * 1.2

"If you are disciplined enough to style your entire page in relative units like this, the entire page will scale up and down based on the viewport size. This can be a huge part of your responsive strategy. - pg. 41

Re-read this part, and read again, and put into practice. This is cool! "You’ve now accomplished a large piece of your responsive strategy without a single media query. Instead of three or four hard-coded breakpoints, everything on your page will scale fluidly according to the viewport. - pg. 46 (pdf 74)

Here's the magic code:
:root {
    /* Takes the root browser font size, 0.5 based on root font and then multiply by view width to get a smooth transition betwee font sizes
    no media queries! */
    font-size: calc(0.5em * 1vw);

}
