# WEB103 Prework - Creatorverse

Submitted by: Bityana Yishak

About this web app: Creatorverse is a React app that lets users create, view, edit, and delete their favorite content creators (stored in a Supabase database).

Time spent: 4 hours

## Required Features

The following required functionality is completed:

- [x] A logical component structure in React is used to create the frontend of the app
- [x] At least five content creators are displayed on the homepage of the app
- [x] Each content creator item includes their name, a link to their channel/page, and a short description of their content
- [x] API calls use the async/await design pattern via Axios or fetch()
- [x] Clicking on a content creator item takes the user to their details page, which includes their name, url, and description
- [x] Each content creator has their own unique URL
- [x] The user can edit a content creator to change their name, url, or description
- [x] The user can delete a content creator
- [x] The user can add a new content creator by entering a name, url, and description and then it is displayed on the homepage

## Optional Features

The following optional features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with LiceCap

## Notes

I ran into a few challenges while building the app: Pico CSS’s default container and grid styles sometimes conflicted with my custom layout, so I had to override them carefully to center the card grid without breaking mobile; I also had to tune the grid so cards didn’t stretch too wide on large screens but still stayed responsive on small screens, and I needed to keep the UI consistent across the home, add/edit, and detail pages while handling loading states and navigation between routes.

## How to Run

1. `npm install`
2. `npm run dev`

## License

Copyright 2026 Bityana Yishak

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
