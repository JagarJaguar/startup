# Messaging Web Application

[My Notes](notes.md)

This web application utilizes a live messaging system to enable the user to chat with other users in real-time. 

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Are you sick of not being able to message your friends on the fly? Wondering where the next awesome party is? In todays world, staying connected is more important than ever. My real-time messaging web application transforms how you can communicate by delivering an easy, fast and secure way to start seamless conversations with end-to-end encryption and an interface that you can access through any device. Join me in changing the way the world connects.

### Design

![Design image](mockupDesign.jpeg)

Here is a sequence diagram that shows how users would interact with the backend to send messages.

```mermaid
sequenceDiagram
    actor Rob
    actor Bill
    actor Paul
    Rob->>Website: Send Message
    Bill->>Website: Send Message
    Paul->>Website: Send Message
    Website-->>Rob: View messages
    Website-->>Bill: View Messages
    Website-->>Paul: View Messages
```

### Key features

- Secure Login via HTTPS (basic user authentication)
- Ability to send messages
    - Chat history is saved
- Users able to view other users sent messages
- Ability to use emojis in messages
- Ability to delete own messages

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure to layout website. There will be 3 HTML pages: One for login, one for chatting, and one for an about page.
- **CSS** - Uses good contrasting colors, will work accross different devices and aspect ratios. Ueses correct whitespace that looks neat and is easy to read.
- **React** - Provides login functionality, message display, sending messages, emoji selection, page selection, and the use of React for routing and other needed components.
- **Service** - Backend service with endpoints for:
    - login
    - sending messages
    - viewing messages
    - use [EmojiHub](https://github.com/cheatsnake/emojihub) to have emoji selections
- **DB/Login** - Stores users sent messages in database. Register and login users. User credentials stored in a secure database. Users cannot send messages until they have signed in.
- **WebSocket** - As users send messages, other users on the website can view their messages in real-time.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
