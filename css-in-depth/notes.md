"This is important: Values declared using relative units are evaluated by the browser to an absolute value, called the computed value.

"TIP If you know the pixel-based font size you’d like, but want to specify the declaration in ems, here’s a simple formula: divide the desired pixel size by the parent (inherited) pixel size. For example, if you want a 10 px font and your element is inheriting a 12 px font, 10 / 12 = 0.8333 em. If you want a 16 px font and the parent font is 12 px, 16 / 12 = 1.3333 em. We’ll do this calcu- lation several times throughout this chapter. - pg. 

EM is a calculated value! Meaning it continues to calculate down, ie if body is 16, div is em 1.2, and p within div is em 1.2, div will be 16 * 1.2, and p in div will be 16 * 1.2 * 1.2
