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

"Using a unitless number lets you set the line height on the body and then forget about it for the rest of the page, unless there are particular places where you want to make an exception. - pg. 48 (pdf 76)
ie. body { line-height: 1.2} (no em, no px, etc.)

"With this technique, you can use JavaScript to re-theme your site, live in the browser. Or, you could highlight certain parts of the page or make any number of other on-the-fly changes. Using only a few lines of JavaScript, you can make changes that’ll affect a large number of elements on the page. - pg 54 (pdf 82)
This is for using JS to change custom properties (ie css variables) on the fly. Some example code is included.

idea: Try out vw (view width) with images

Recommended adding to every css file:
-->
:root {
    box-sizing: border-box;
}

*,
::before,
::after {
    box-sizing: inherit;
}
-->
sets all elements to border-box so even padding and border are included in calculations

display: flex;
for flexbox fun, more to come in chapter 5

"WARNING Never explicitly set the height of an element unless you have no other choice. Always seek an alternative approach first. Setting a height invari- ably leads to further complications.

"A vertical-align declaration only affects inline and table-cell elements. With inline elements, it controls alignment among other elements on the same line. You can use it to control how an inline image aligns with the neighboring text, for example.

"With table-cell elements, vertical-align controls the alignment of the contents within the cell. If a CSS table layout works for your page, then you can accomplish vertical centering with vertical-align.

"Here’s the simplest way to vertically center in CSS—give a container equal top and bottom padding, and let both the container and its contents determine their height naturally (figure 3.14)
