---
title: "Responsive Nav from Scratch"
date: 2023-05-20
---

I decided to add a hamburger menu to the navbar to make the site more mobile friendly.

I used an svg for the icon, and added css to animate the icon when the menu is opened and closed.

I used Tailwind CSS to control the menu display, and javascript to toggle the menu open and closed. One downside to using javascript to control the menu is that it will not work with javascript disabled. Luckily the menu links are displayed on most devices rotated into landscape, and the menu is always visible on the home page. Also, very few actually disable javascript, so I don't know how much of an issue this is.
View the code snippet below or view the [source here](https://github.com/jamie-c/jpconway/blob/main/src/components/Header.tsx).

<pre><code>
const headerClassNames = {
    navLinksHidden: "...",
    navLinksVisible: "..."
}

const [ toggleHam, setToggleHam ] = useState(false)
const [ headerClass, setHeaderClass ] = useState(headerClassNames.navLinksHidden)
const active = toggleHam ? 'active' : ''

const handleHamburgerIconClick = () => {
    setToggleHam(!toggleHam)
    if (active === 'active') {
        setHeaderClass(headerClassNames.navLinksHidden)
    } else {
        setHeaderClass(headerClassNames.navLinksVisible)
    }
}
</code></pre>

I'm importing the hamburger icon from an svg file, and using the `active` variable to control the animation of the icon.

I also use the `active` variable to control the display of the menu links.

So when the screen is a mobile sized screen, the navlinks in the navbar are hidden, and the hamburger icon is displayed.

When the hamburger icon is clicked, the `active` variable is toggled, and the `handleHamburgerIconClick` function is called.

The `handleHamburgerIconClick` function toggles the `toggleHam` variable, and sets the `headerClass` variable to either `navLinksHidden` or `navLinksVisible`, depending on the state of the `toggleHam` variable.

So, when the hamburger icon is clicked, it animates, the navbar expands to fill the entire screen, and the vertical navlinks are shown.

To close the nav links, you can either click the hamburger icon again, or click a link to navigate to a page, or click anywhere on the screen outside of a link.
