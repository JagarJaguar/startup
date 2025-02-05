# CS 260 Notes

[My startup](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## GitHub Notes

Learned how to setup a GitHub repository and use the commit, push, and pull functions. Also was able to configure Gitlens in VS code, should make visuals easier compared to the terminal. Started reading up on the documentation for writing markdown. Similar to Discords syntax for bolding, italics, etc. Seems to be fairly simple to understand. Heres a [Link](https://github.com/JagarJaguar/startup) to my repo for reference.

## Startup Notes

While working on the startup deliverable, I had to think about how I wanted to design the website and what I wanted to include in technologies. Thinking about what technologies I wanted to include took the most time, and I am not too sure if I did that correctly, but I tried to include what the examples showed. My sketch for the design is not very pretty, I am no artist and I could not get NinjaMock to work, so I used the notes app on my iPad to design a simple sketch. This website should be fairly simple overall. I expect implementing the emojis to be the most difficult part though. I plan to make changes to the startup if needed.

## AWS Notes

Going to start using bulletpoints to make things easier since it is a lot to cover by typing sentences and paragraphs.
- Made AWS Instance using t3.micro, may change later to allocate more power.
- Associated an elastic IP to my instance in AWS.
- Website works using HTTP!
- Learned about DNS, what it stands for and how they connect a domain to an IP. As well as multiple domains to 1 IP using a CNAME map.
- Registered my new domain (jagarchat.com)
- Setup DNS records
- My domain and subdomain work, but my firewall blocks the domain because it isn't secure. Waiting to secure it with HTTPS.
- One thing that I found interesting was the handshakes between the client and the server with TLS. There is quite a process involved for a secure connection, which makes sense.
- Secured my website by modifying Caddy to request a certificate. All 3 of the domains work. simon, startup, and the root domain.

## HTML Notes

- There is a lot of different content with HTML. Each page of website needs to utilize correct structure of HTML.
- Block elements are used to emphasize something and break the flow, whereas something like a paragraph element would have a `span` to mark sub text.
- Webpages need to have `<!DOCTYPE html>` at the very top of the HTML file.
- Did all of the CodePen demos successfully. Refer back to those for formatting if needed. 
- Cloned simon-html repo. Look through the code for references for own site.
- Deployed the Simon HTML to my [websites](https://simon.jagarchat.com/) subdomain (simon).
- Got the base web pages down and added the header to every website page.
- Database placeholder will be username storage and saved messages.
- Chatting placeholder will also possibly use emoji API if chatting service does not already include emoji selection.
- Chatbox will most likely be a lot bigger and in the center of the page in the final version.
- Classes may need to be added as CSS is added.

## CSS Notes

- CSS can control each element and classes.
- Use border-radius to add corners to backgrounds.
- Padding adds extra area.
- Border options ex: `thin white solid`
- Animations - Use classes, `animation-name:` and `animation-duration`
- Keyframes have a lot of control and variables you can use to move elements around.
- Importing fonts: Use Googles free font [website](https://fonts.google.com/)
- Refer to CodePen CSS Practice for ideas later.
- Refer to simon CSS for examples.
- Flex allows for control between different aspect ratios.
- Use bootstrap components for certain things (integrate with CSS as well).
- Debug on browser to see different views for mobile devices.
- Flex can be finnicky, use bootstrap when applicable moreso in the future.

## React Notes
- Can use CSS and HTML in JSX files
- Use `<MemoryRouter>` to test code in memory (not connected to browser).
- Nesting Routes, set Route to index for main /.
- Use `<Outlet />` in parent layout file to load elements.